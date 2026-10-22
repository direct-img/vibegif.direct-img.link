// fills <!--gallery--> in index.html from whatever is in public/
// anything rendered from gen/ gets one tile with webp + gif links, older hand-made files get a tile each
import{readdirSync as rd,readFileSync as rf,existsSync as ex}from'fs'
const walk=d=>rd(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${d}/${e.name}`):`${d}/${e.name}`)
const dims=f=>{const b=rf(f);return f.endsWith('.gif')?[b.readUInt16LE(6),b.readUInt16LE(8)]:[b.readUIntLE(24,3)+1,b.readUIntLE(27,3)+1]}
const gallery=()=>{
  const seen=new Set
  return walk('public').filter(f=>/\.(webp|gif)$/.test(f)).sort().map(f=>{
    const id=f.slice(7).replace(/\.\w+$/,''),g=ex(`gen/${id}.js`)
    if(g&&seen.has(id))return''
    seen.add(id)
    const src=g?`/${id}.webp`:f.slice(6),[w,h]=dims('public'+src)
    const links=(g?['webp','gif']:[f.split('.').pop()]).map(x=>`<a href="/${id}.${x}">${x}</a>`).join(' ')
    return`<figure><a href="${src}"><img src="${src}" alt="${id.replace('/',' ')}" width="${w}" height="${h}" loading="lazy" decoding="async"></a><figcaption>${links}</figcaption></figure>`
  }).filter(Boolean).join('\n')
}
export default{plugins:[{name:'gallery',transformIndexHtml:h=>h.replace('<!--gallery-->',gallery())}]}
