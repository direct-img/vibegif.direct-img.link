// cat face with undulating rainbow chevron tabby stripes flowing down its fur, spinning kaleidoscope-flower eyes, wavy whiskers, head gently rocking
import{createCanvas}from'@napi-rs/canvas'
export const frames=24,delay=80
const T=Math.PI*2,C=['#ff2e63','#ff8a00','#ffe600','#3ddc5a','#00c2ff','#3b5bff','#b03bff']
const hx=h=>[1,3,5].map(k=>parseInt(h.slice(k,k+2),16)),rgb=C.map(hx),F=[40,16,70]
const P=[...rgb,F,...['#111111','#ffffff','#ff7fc8','#ff4f9a'].map(hx)],Q=P.flatMap((a,i)=>P.slice(i).map(b=>a.map((v,k)=>v+b[k]>>1)))
const head=c=>{
  c.beginPath();c.ellipse(128,146,96,76,0,0,T)
  c.moveTo(48,118);c.lineTo(52,30);c.lineTo(112,76);c.closePath()
  c.moveTo(144,76);c.lineTo(204,30);c.lineTo(208,118);c.closePath()
}
const eye=(c,x,t,dr)=>{
  c.save();c.translate(x,124)
  c.beginPath();c.ellipse(0,0,30,25,0,0,T);c.fillStyle='#fff';c.fill()
  c.save();c.clip()
  for(let r=4;r>0;r--){
    c.save();c.rotate((r&1?1:-1)*dr*t*T/3)
    c.fillStyle=C[(r*3+(t*7|0))%7]
    c.beginPath()
    for(let k=0;k<=60;k++){const a=k*T/60,q=r*8.5*(1+.2*Math.cos(a*(r+3)))
      c.lineTo(q*Math.cos(a),q*Math.sin(a))}
    c.fill();c.lineWidth=2.5;c.stroke();c.restore()
  }
  c.restore()
  c.beginPath();c.ellipse(0,0,5,18,0,0,T);c.fillStyle='#111';c.fill()
  c.beginPath();c.arc(-10,-9,5,0,T);c.fillStyle='#fff';c.fill()
  c.beginPath();c.ellipse(0,0,30,25,0,0,T);c.lineWidth=6;c.stroke()
  c.restore()
}
export default(c,t)=>{
  const o=createCanvas(256,256).getContext('2d'),d=o.createImageData(256,256),D=d.data
  const r=.06*Math.sin(t*T),cs=Math.cos(r),sn=Math.sin(r)
  for(let Y=0;Y<256;Y++)for(let X=0;X<256;X++){
    // stripes live in the rocking head's frame
    const x=128+(X-128)*cs+(Y-236)*sn,y=236-(X-128)*sn+(Y-236)*cs,u=Math.abs(x-128),s=(y-.6*u+5*Math.sin(u/11-t*T)+3*Math.sin(y/9+t*T))/13-t*7,b=Math.floor(s),p=(Y*256+X)*4
    const k=b&1?F:rgb[((b>>1)%7+7)%7]
    D[p]=k[0];D[p+1]=k[1];D[p+2]=k[2];D[p+3]=255
  }
  o.putImageData(d,0,0)
  c.translate(128,236);c.rotate(r);c.translate(-128,-236)
  head(c);c.lineWidth=14;c.stroke()
  c.save();head(c);c.clip();c.setTransform(1,0,0,1,0,0);c.drawImage(o.canvas,0,0);c.restore()
  // inner ears
  c.fillStyle='#ff7fc8';c.lineWidth=4
  for(const m of[1,-1]){c.beginPath();c.moveTo(128-m*72,96);c.lineTo(128-m*70,48);c.lineTo(128-m*34,78);c.closePath();c.fill();c.stroke()}
  // muzzle puffs
  c.fillStyle='#fff';c.lineWidth=5
  c.beginPath();c.arc(110,180,23,0,T);c.arc(146,180,23,0,T);c.fill()
  c.beginPath();c.arc(110,180,23,.6,4.3);c.stroke();c.beginPath();c.arc(146,180,23,-1.2,2.6);c.stroke()
  c.beginPath();c.arc(110,180,21,0,T);c.arc(146,180,21,0,T);c.fill()
  eye(c,86,t,1);eye(c,170,t,-1)
  // nose and mouth
  c.fillStyle='#ff4f9a';c.lineWidth=4
  c.beginPath();c.moveTo(116,160);c.lineTo(140,160);c.lineTo(128,174);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(128,174);c.lineTo(128,184);c.quadraticCurveTo(118,196,108,186);c.moveTo(128,184);c.quadraticCurveTo(138,196,148,186);c.stroke()
  // whiskers
  for(const m of[1,-1])for(let k=0;k<3;k++){
    c.beginPath()
    for(let j=0;j<=12;j++){const q=j/12,x=128+m*(36+q*84),y=172+k*10+(k-1)*q*14+4*Math.sin(q*7-t*T*2+k)*q
      c.lineTo(x,y)}
    c.lineWidth=6;c.strokeStyle='#111';c.stroke();c.lineWidth=2.5;c.strokeStyle='#fff';c.stroke()
  }
  // snap to the palette (and halfway mixes) so it compresses well
  c.setTransform(1,0,0,1,0,0)
  const g=c.getImageData(0,0,256,256),G=g.data
  for(let p=0;p<G.length;p+=4){
    if(G[p+3]<128){G[p+3]=0;continue}
    let m=1e9,k
    for(const q of Q){const e=(G[p]-q[0])**2+(G[p+1]-q[1])**2+(G[p+2]-q[2])**2;if(e<m)m=e,k=q}
    G[p]=k[0];G[p+1]=k[1];G[p+2]=k[2];G[p+3]=255
  }
  c.putImageData(g,0,0)
}
