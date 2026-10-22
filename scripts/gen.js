// renders gen/<section>/<subject>/<action>.js into public/<subject>/<action>.{webp,gif}
// the section folder (bw, color, anime, manga) only picks where it shows in the gallery, it isn't part of the url
// npm run gen                 renders only what's missing (published files never change by accident)
// npm run gen -- cat/blink    renders only the named ones, even if they already exist
// a file can export rim=<px> to get a white sticker border, so black ink still shows on a black page
import{createCanvas}from'@napi-rs/canvas'
import sharp from'sharp'
import{readdirSync as rd,existsSync as ex,mkdirSync as mk,statSync as st}from'fs'
import{dirname,resolve}from'path'
import{pathToFileURL as url}from'url'
const S=256,redo=process.argv.slice(2)
const walk=d=>rd(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${d}/${e.name}`):`${d}/${e.name}`)
const files=walk('gen').filter(f=>f.endsWith('.js')).sort(),ids=files.map(f=>f.split('/').slice(2).join('/').slice(0,-3))
const dup=ids.find((d,i)=>ids.indexOf(d)!=i)
if(dup)throw Error(`${dup} is in more than one section`)
for(const[k,f]of files.entries()){
  const id=ids[k],o=`public/${id}`
  if(redo.length?!redo.includes(id):ex(o+'.webp')&&ex(o+'.gif'))continue
  const{default:draw,frames=16,delay=80,rim=0}=await import(url(resolve(f)))
  const px=[...Array(frames)].map((_,i)=>{
    const c=createCanvas(S,S).getContext('2d')
    Object.assign(c,{lineWidth:7,lineCap:'round',lineJoin:'round',strokeStyle:'#111',fillStyle:'#fff'})
    draw(c,i/frames,i)
    if(rim){
      // white silhouette grown by rim px (copies shifted around rings 1..rim px out), then the frame on top
      const r=createCanvas(S,S).getContext('2d')
      for(let d=1;d<=rim;d++)for(let a=0;a<24;a++)r.drawImage(c.canvas,d*Math.cos(a*Math.PI/12),d*Math.sin(a*Math.PI/12))
      r.globalCompositeOperation='source-in';r.fillStyle='#fff';r.fillRect(0,0,S,S)
      r.globalCompositeOperation='source-over';r.drawImage(c.canvas,0,0);return Buffer.from(r.getImageData(0,0,S,S).data.buffer)
    }
    return Buffer.from(c.getImageData(0,0,S,S).data.buffer)
  })
  mk(dirname(o),{recursive:true})
  const img=()=>sharp(Buffer.concat(px),{raw:{width:S,height:S*frames,channels:4,pageHeight:S}})
  await img().webp({lossless:true,effort:6,loop:0,delay}).toFile(o+'.webp')
  await img().gif({effort:10,loop:0,delay}).toFile(o+'.gif')
  console.log(`${id}  webp ${st(o+'.webp').size}b  gif ${st(o+'.gif').size}b`)
}
