// looking into a kaleidoscope: 12-fold mirrored pattern of colored glass beads and shards tumbling and turning inside a knurled brass tube rim
import{createCanvas}from'@napi-rs/canvas'
export const frames=32,delay=70
const T=Math.PI*2,W=T/12
let s=7
const rnd=()=>(s=s*16807%2147483647)/2147483647
const C=['#ff2e63','#ff8a00','#ffe600','#3ddc5a','#00d6ff','#3b5bff','#b03bff','#ff4fd8','#fff']
const Q=[...C,'#160b33','#111111','#d9a521','#8a5a12'].map(h=>[1,3,5].map(k=>parseInt(h.length<5?h[k+1>>1].repeat(2):h.slice(k,k+2),16)))
const B=[...Array(26)].map((_,k)=>({
  r:6+rnd()*100,a:-.1+rnd()*.72,o:5+rnd()*16,f:rnd()<.5?1:-1,p:rnd()*T,
  z:8+rnd()*14,n:[0,3,4,5,6,7][k%6],col:C[k*5%9],sp:(rnd()<.5?1:-1)*(1+(rnd()*2|0)),q:rnd()*T
}))
const shape=(c,n,z)=>{
  c.beginPath()
  if(!n)c.arc(0,0,z*.7,0,T)
  else if(n==4){c.moveTo(0,-z*1.2);c.lineTo(z*.6,0);c.lineTo(0,z*1.2);c.lineTo(-z*.6,0)}
  else if(n==7){c.moveTo(-z*1.4,-z*.18);c.lineTo(z*1.4,0);c.lineTo(-z*1.4,z*.18)}
  else for(let k=0;k<n;k++)c.lineTo(z*Math.cos(k*T/n),z*Math.sin(k*T/n))
  c.closePath()
}
export default(c,t)=>{
  const o=createCanvas(256,256).getContext('2d'),R=102,rot=t*T/6
  o.translate(128,128);o.fillStyle='#160b33';o.fillRect(-128,-128,256,256)
  o.lineWidth=2.5;o.strokeStyle='#111';o.lineJoin='round'
  for(const b of B){
    const a=b.p+b.f*t*T,x=b.r*Math.cos(b.a)+b.o*Math.cos(a),y=b.r*Math.sin(b.a)+b.o*Math.sin(a)
    o.save();o.translate(x,y);o.rotate(b.q+b.sp*t*T)
    shape(o,b.n,b.z);o.fillStyle=b.col;o.fill();o.stroke()
    o.fillStyle='#fff';o.beginPath();o.arc(-b.z*.25,-b.z*.25,b.z*.16,0,T);o.fill()
    o.restore()
  }
  c.save();c.translate(128,128);c.rotate(rot)
  for(let k=0;k<12;k++){
    c.save()
    k&1?(c.rotate((k+1)*W),c.scale(1,-1)):c.rotate(k*W)
    c.beginPath();c.moveTo(-3,-.8);c.arc(0,0,R+2,-.012,W+.012);c.closePath();c.clip()
    c.drawImage(o.canvas,-128,-128)
    c.restore()
  }
  // brass rim with knurls that turn
  c.beginPath();c.arc(0,0,R+9,0,T);c.lineWidth=20;c.strokeStyle='#d9a521';c.stroke()
  c.lineWidth=3;c.strokeStyle='#8a5a12'
  for(let k=0;k<36;k++){const a=k*T/36;c.beginPath();c.moveTo(Math.cos(a)*(R+3),Math.sin(a)*(R+3));c.lineTo(Math.cos(a)*(R+15),Math.sin(a)*(R+15));c.stroke()}
  c.lineWidth=5;c.strokeStyle='#111'
  c.beginPath();c.arc(0,0,R,0,T);c.stroke()
  c.beginPath();c.arc(0,0,R+19,0,T);c.stroke()
  c.restore()
  // snap to the palette so flat glass compresses well
  const d=c.getImageData(0,0,256,256),D=d.data
  for(let p=0;p<D.length;p+=4){
    if(D[p+3]<128){D[p+3]=0;continue}
    let m=1e9,k
    for(const q of Q){const e=(D[p]-q[0])**2+(D[p+1]-q[1])**2+(D[p+2]-q[2])**2;if(e<m)m=e,k=q}
    D[p]=k[0];D[p+1]=k[1];D[p+2]=k[2];D[p+3]=255
  }
  c.putImageData(d,0,0)
}
