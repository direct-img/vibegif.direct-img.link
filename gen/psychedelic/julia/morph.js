// round disc showing a Julia set fractal that morphs as its constant circles the Mandelbrot cardioid, rainbow bands rippling outward around it and spiraling in rings inside it
import{createCanvas}from'@napi-rs/canvas'
export const frames=32,delay=75
const P=['#ff2e63','#ff8a00','#ffe600','#3ddc5a','#00c2ff','#3b5bff','#b03bff','#ff3bd4'].map(h=>[1,3,5].map(k=>parseInt(h.slice(k,k+2),16))),I=[22,12,48]
export default(c,t)=>{
  const S=256,R=112,o=createCanvas(S,S).getContext('2d'),d=o.createImageData(S,S),D=d.data
  // c=mu/2-mu^2/4 has attracting fixed point mu/2 with multiplier mu
  const a=(t+1/64)*Math.PI*2,r=.97,fr=r*Math.cos(a)/2,fi=r*Math.sin(a)/2,cr=fr-r*r*Math.cos(2*a)/4,ci=fi-r*r*Math.sin(2*a)/4
  for(let y=0;y<S;y++)for(let x=0;x<S;x++){
    let zr=(x-128)/76,zi=(y-128)/76,n=0,q,k
    for(;n<900&&(q=zr*zr+zi*zi)<64;n++){
      const w=zr*zr-zi*zi+cr;zi=2*zr*zi+ci;zr=w
      if((zr-fr)**2+(zi-fi)**2<1e-4)break
    }
    if(q<64){const b=Math.floor(n*.2+t*16);k=b&1?I:P[(b>>1)%8]}
    else k=P[((Math.floor(Math.sqrt(n+1-Math.log2(Math.log2(q)/2))*3.4-t*16)%8)+8)%8]
    const p=(y*S+x)*4
    D[p]=k[0];D[p+1]=k[1];D[p+2]=k[2];D[p+3]=255
  }
  o.putImageData(d,0,0)
  c.save();c.beginPath();c.arc(128,128,R,0,7);c.clip();c.drawImage(o.canvas,0,0);c.restore()
  c.beginPath();c.arc(128,128,R,0,7);c.stroke()
}
