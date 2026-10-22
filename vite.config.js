// fills <!--gallery--> in index.html from whatever is in public/
// one tile per name: shows the .webp (or the .gif if that's all there is) and links every format
// tiles are split into sections by the gen/<section>/ folder they come from, with a divider between
// hand-made files that have no gen file go in the first section
// tile images get ?v=<hash> so browsers drop old copies when a file changes, links stay clean for hotlinking
import{readdirSync as rd,readFileSync as rf}from'fs'
import{createHash}from'crypto'
const sections=['bw','color']
const hidden=['cat/tail.gif']  // same drawing as cat/wag.gif, kept so old links still work
const walk=d=>rd(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${d}/${e.name}`):`${d}/${e.name}`)
const dims=(b,x)=>x=='gif'?[b.readUInt16LE(6),b.readUInt16LE(8)]:[b.readUIntLE(24,3)+1,b.readUIntLE(27,3)+1]
const gallery=()=>{
  const sec={},g=Object.fromEntries(sections.map(s=>[s,{}]))
  for(const f of walk('gen').filter(f=>f.endsWith('.js'))){const[,s,...r]=f.split('/');sec[r.join('/').slice(0,-3)]=s}
  for(const f of walk('public').filter(f=>/\.(webp|gif)$/.test(f)).sort()){
    const p=f.slice(7),x=p.split('.').pop(),id=p.slice(0,-x.length-1)
    if(!hidden.includes(p))(g[sec[id]??sections[0]][id]??={})[x]=f
  }
  return sections.map(s=>Object.entries(g[s]).map(([id,fm])=>{
    const x=fm.webp?'webp':'gif',b=rf(fm[x]),[w,h]=dims(b,x),v=createHash('md5').update(b).digest('hex').slice(0,8)
    const links=['webp','gif'].filter(k=>fm[k]).map(k=>`<a href="/${id}.${k}">${k}</a>`).join(' ')
    return`<figure><a href="/${id}.${x}"><img src="/${id}.${x}?v=${v}" alt="${id.replace('/',' ')}" width="${w}" height="${h}" loading="lazy" decoding="async"></a><figcaption>${links}</figcaption></figure>`
  }).join('\n')).filter(Boolean).join('\n<hr>\n')
}
export default{plugins:[{name:'gallery',transformIndexHtml:h=>h.replace('<!--gallery-->',gallery())}]}
