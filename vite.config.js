// fills <!--gallery--> in index.html from whatever is in public/, and every <!--count--> with how many tiles that is
// one tile per name: shows the .webp (or the .gif if that's all there is) and links every format
// tiles are split into sections by the gen/<section>/ folder they come from, with a divider between
// hand-made files that have no gen file go in the first section
// only files inside a subject folder are tiles, so root files like favicon.webp stay out
// tile images get ?v=<hash> so browsers drop old copies when a file changes, links stay clean for hotlinking
// <!--ld--> gets CC0 license data for every tile image, so image search can list them under creative commons
// and the build writes sitemap.xml with the page and its tile images (google reads up to 1000 images per page)
// /test is index.html again but with only the pending sections, unlisted, for approving new ones before they go live
import{readdirSync as rd,readFileSync as rf}from'fs'
import{createHash}from'crypto'
const site='https://vibegif.direct-img.link',cc0='https://creativecommons.org/publicdomain/zero/1.0/'
const sections=['bw','color','anime','manga','mini','minicolor','ui','uicolor','uianime','meme']
const pending=[]  // approved ones move up into sections
const hidden=['cat/tail.gif']  // same drawing as cat/wag.gif, kept so old links still work
const walk=d=>rd(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${d}/${e.name}`):`${d}/${e.name}`)
const dims=(b,x)=>x=='gif'?[b.readUInt16LE(6),b.readUInt16LE(8)]:[b.readUIntLE(24,3)+1,b.readUIntLE(27,3)+1]
const tiles=(list=sections)=>{
  const sec={},g=Object.fromEntries(list.map(s=>[s,{}]))
  for(const f of walk('gen').filter(f=>f.endsWith('.js'))){const[,s,...r]=f.split('/');sec[r.join('/').slice(0,-3)]=s}
  for(const f of walk('public').filter(f=>/^public\/[^/]+\/.+\.(webp|gif)$/.test(f)).sort()){
    const p=f.slice(7),x=p.split('.').pop(),id=p.slice(0,-x.length-1)
    const s=g[sec[id]??sections[0]]
    if(s&&!hidden.includes(p))(s[id]??={})[x]=f
  }
  return list.map(s=>Object.entries(g[s]).map(([id,fm])=>{
    const x=fm.webp?'webp':'gif',b=rf(fm[x]),[w,h]=dims(b,x)
    return{id,fm,x,w,h,src:`/${id}.${x}?v=${createHash('md5').update(b).digest('hex').slice(0,8)}`}
  }))
}
const figure=t=>{
  const links=['webp','gif'].filter(k=>t.fm[k]).map(k=>`<a href="/${t.id}.${k}">${k}</a>`).join(' ')
  return`<figure><a href="/${t.id}.${t.x}"><img src="${t.src}" alt="${t.id.replace('/',' ')}" width="${t.w}" height="${t.h}" loading="lazy" decoding="async"></a><figcaption>${links}</figcaption></figure>`
}
const ld=all=>`<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':
  all.map(t=>({'@type':'ImageObject',contentUrl:site+t.src,license:cc0,acquireLicensePage:site+'/'}))})}</script>`
const sitemap=all=>`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
<url><loc>${site}/</loc><lastmod>${new Date().toISOString().slice(0,10)}</lastmod>
${all.map(t=>`<image:image><image:loc>${site+t.src}</image:loc></image:image>`).join('\n')}
</url>
</urlset>
`
const test=h=>h.replace('max-image-preview:large','noindex').replace(/<link rel="canonical".*\n/,'').replace('<!--ld-->','')
  .replace('vibegif ·','vibegif test ·').replace(/<h1>.*<\/h1>/,'<h1><!--count--> gifs waiting for approval</h1>').replace('feel free to hot link them','not on the main page yet')
export default{build:{rolldownOptions:{input:['index.html','test.html']}},plugins:[{name:'gallery',
  transformIndexHtml:(h,{path})=>{
    const t=path=='/test.html',s=tiles(t?pending:sections),all=s.flat()
    if(t)h=test(rf('index.html','utf8'))
    return h.replace('<!--gallery-->',s.map(ts=>ts.map(figure).join('\n')).filter(Boolean).join('\n<hr>\n'))
      .replace('<!--ld-->',ld(all)).replaceAll('<!--count-->',all.length)
  },
  generateBundle(){this.emitFile({type:'asset',fileName:'sitemap.xml',source:sitemap(tiles().flat())})}
}]}
