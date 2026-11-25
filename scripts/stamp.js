// stamps where a render came from into the file, CC0 https://vibegif.direct-img.link/<id>, so a saved copy still points back
// the bytes are spliced in, nothing is re-encoded, the frames and pixels stay identical (about +80 bytes per webp, +50 per gif)
// webp: an EXIF chunk after the frames whose Copyright field (0x8298) holds the line, plus the EXIF bit in the VP8X header
// gif: a comment extension right after the header and global color table, before the loop extension and the frames
// scripts/gen.js stamps every render, node scripts/stamp.js stamps every file in public/ that isn't stamped yet
import{readFileSync as rf,writeFileSync as wf,readdirSync as rd}from'fs'
import{pathToFileURL as url}from'url'
export const src=id=>`CC0 https://vibegif.direct-img.link/${id}`
// minimal little-endian TIFF: header, IFD0 with one ASCII entry (Copyright), then the string
const exif=s=>{
  const v=Buffer.from(s+'\0','latin1'),h=Buffer.alloc(26)
  h.write('II*\0');h.writeUInt32LE(8,4);h.writeUInt16LE(1,8)
  h.writeUInt16LE(0x8298,10);h.writeUInt16LE(2,12);h.writeUInt32LE(v.length,14);h.writeUInt32LE(26,18)
  return Buffer.concat([h,v])
}
export const tagWebp=(b,s)=>{
  if(b.toString('latin1',12,16)!='VP8X')throw Error('webp has no VP8X header')
  if(b[20]&8)throw Error('webp already has EXIF')
  const t=exif(s),c=Buffer.alloc(8);c.write('EXIF');c.writeUInt32LE(t.length,4)
  b=Buffer.concat([b,c,t,Buffer.alloc(t.length%2)]);b.writeUInt32LE(b.length-8,4);b[20]|=8
  return b
}
// one sub-block, so the line can be up to 255 chars
export const tagGif=(b,s)=>{
  const t=Buffer.from(s,'latin1'),p=b[10],at=13+(p&128?3<<(p&7)+1:0)
  if(t.length>255)throw Error('gif comment over 255 chars')
  return Buffer.concat([b.subarray(0,at),Buffer.from([0x21,0xFE,t.length]),t,Buffer.from([0]),b.subarray(at)])
}
if(import.meta.url==url(process.argv[1]).href){
  let n=0
  for(const s of rd('public',{withFileTypes:true}).filter(e=>e.isDirectory()).map(e=>e.name))for(const f of rd(`public/${s}`)){
    const m=f.match(/^(.+)\.(webp|gif)$/);if(!m)continue
    const p=`public/${s}/${f}`,id=`${s}/${m[1]}`,b=rf(p)
    if(m[2]=='webp'?b[20]&8:b.includes(src(id)))continue
    wf(p,(m[2]=='webp'?tagWebp:tagGif)(b,src(id)));n++
  }
  console.log(`stamped ${n} files`)
}
