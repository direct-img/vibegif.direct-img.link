// sends newsletter/<ISSUE>/index.html to every active subscriber of POOL through resend's batch api
// subject is the html <title>, {{{EMAIL}}} becomes the recipient's address and {{{POOL}}} the pool (both url-encoded), for the unsubscribe link:
// <!--email--><a href="https://vibegif.direct-img.link/newsletter/unsubscribe/?pool={{{POOL}}}&email={{{EMAIL}}}">unsubscribe</a><!--/email-->
// <!--email-->...<!--/email--> parts only go out by email, the web copy at /newsletter/<ISSUE>/ drops them (see vite.config.js)
// run from the actions tab: "Newsletter: test send" goes to pool test with a [TEST] subject, then "Newsletter: SEND" goes to pool vibegif
// DRY_RUN=1 only prints how many it would send to. logs never contain subscriber emails, this repo and its actions logs are public
import{readFile,appendFile}from'fs/promises'
const{ISSUE='',POOL,RESEND_API_KEY,NEWSLETTER_SEND_KEY,NEWSLETTER_FROM,SUBJECT_PREFIX='',DRY_RUN,GITHUB_RUN_ID=Date.now(),GITHUB_STEP_SUMMARY}=process.env
const API='https://newsletter.planetrenox.com/api',N=100,GAP=200,TRIES=5  // resend takes 100 per batch and 10 req/s per team, stay at 5
const sleep=ms=>new Promise(r=>setTimeout(r,ms)),scrub=s=>String(s).replace(/[^\s@<>"']+@[^\s@<>"']+/g,'<email>')
const die=m=>{console.error(`✖ ${scrub(m)}`);process.exit(1)}
if(!/^issue-[\w.-]+$/.test(ISSUE))die(`invalid issue dir "${ISSUE}", want issue-YYYY.MM.DD`)
for(const[k,v]of Object.entries({POOL,RESEND_API_KEY,NEWSLETTER_SEND_KEY,NEWSLETTER_FROM}))if(!v)die(`${k} is not set`)
const f=`newsletter/${ISSUE}/index.html`,html=await readFile(f,'utf8').catch(()=>die(`${f} not found`))
// the <title> is html, the subject is plain text: decode its entities so &amp; doesn't show up as is
const ent={amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:'\u00a0'},un=s=>s.replace(/&(#x[\da-f]+|#\d+|\w+);/gi,(m,c)=>
  c[0]=='#'?String.fromCodePoint(c[1]=='x'||c[1]=='X'?parseInt(c.slice(2),16):+c.slice(1)):ent[c.toLowerCase()]??m)
const title=un(html.match(/<title>([^<]+)<\/title>/i)?.[1].trim()||die(`${f} has no <title> (used as subject)`))
const subject=SUBJECT_PREFIX+title,from=`vibegif <${NEWSLETTER_FROM}>`,p=encodeURIComponent(POOL)
const res=await fetch(`${API}/list?pool=${p}`,{headers:{'X-Send-Key':NEWSLETTER_SEND_KEY}}),{emails=[],error}=await res.json().catch(()=>({}))
if(!res.ok)die(`list fetch failed (${res.status}): ${error||'bad response'}`)
if(!emails.length)die(`pool "${POOL}" has no active subscribers`)
const mail=to=>{
  const e=encodeURIComponent(to)
  // one-click unsubscribe (RFC 8058): mail clients POST to List-Unsubscribe
  return{from,to,subject,html:html.replaceAll('{{{EMAIL}}}',e).replaceAll('{{{POOL}}}',p),
    headers:{'List-Unsubscribe':`<${API}/unsub?pool=${p}&email=${e}>`,'List-Unsubscribe-Post':'List-Unsubscribe=One-Click'}}
}
const B=[];for(let i=0;i<emails.length;i+=N)B.push(emails.slice(i,i+N).map(mail))
console.log(`${ISSUE} | "${subject}" | from ${from} | pool "${POOL}": ${emails.length} recipients in ${B.length} batch(es)`)
if(DRY_RUN){console.log('DRY_RUN set, nothing sent');process.exit(0)}
// the idempotency key stays the same on "Re-run failed jobs" (same run id), so a re-run skips batches resend already took (within 24h)
const send=async(b,i)=>{
  for(let t=1;;t++){
    const r=await fetch('https://api.resend.com/emails/batch',{method:'POST',body:JSON.stringify(b),headers:{Authorization:`Bearer ${RESEND_API_KEY}`,
      'Content-Type':'application/json','Idempotency-Key':`newsletter/${ISSUE}/${POOL}/${GITHUB_RUN_ID}/${i}`}}),j=await r.json().catch(()=>({}))
    if(r.ok){
      if(r.headers.get('ratelimit-remaining')==='0')await sleep((+r.headers.get('ratelimit-reset')||1)*1e3)
      return j.data||[]
    }
    // only per-second rate limits and server errors are worth retrying, quota 429s are not
    if(!(r.status==429&&j.name=='rate_limit_exceeded'||r.status>=500||j.name=='concurrent_idempotent_requests')||t>=TRIES)
      die(`batch ${i+1}/${B.length} failed (${r.status} ${j.name||''}): ${j.message||'no message'}. ${i*N} of ${emails.length} sent before this, "Re-run failed jobs" resumes without duplicates`)
    const w=(+r.headers.get('retry-after')||2**t)*1e3
    console.warn(`… batch ${i+1} got ${r.status} ${j.name||''}, retrying in ${w/1e3}s`)
    await sleep(w)
  }
}
let sent=0
for(const[i,b]of B.entries()){
  if(i)await sleep(GAP)
  const ids=await send(b,i);sent+=b.length
  console.log(`✔ batch ${i+1}/${B.length}: ${b.length} emails accepted (${ids.length} ids)`)
}
const sum=`Sent **${subject}** (\`${ISSUE}\`) to **${sent}** subscribers of pool \`${POOL}\` in ${B.length} batch(es).`
console.log(sum.replace(/[*`]/g,''))
if(GITHUB_STEP_SUMMARY)await appendFile(GITHUB_STEP_SUMMARY,sum+'\n')
