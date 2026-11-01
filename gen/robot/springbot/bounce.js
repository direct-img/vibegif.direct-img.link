// little mint-green robot with a TV-screen face riding on one big coil spring, boinging up and down with squash and stretch, antenna wobbling, dust puffs on landing
export const frames=24,delay=45,rim=3
const P=Math.PI,K=0.26,G=247
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
export default(c,t)=>{
  c.translate(128,G);c.scale(1.14,1.14);c.translate(-128,-G)
  let q=0,yb=0,L=1,v=0
  if(t<K)q=Math.sin(P*t/K)
  else{const s=(t-K)/(1-K);yb=4*s*(1-s)*52;L=1+.45*Math.sin(3*P*s)*Math.exp(-2.2*s);v=s}
  const sx=1+.14*q-.06*Math.max(0,L-1)*3,sy=1-.12*q+.05*Math.max(0,L-1)*3
  // dust puffs
  const d=t/.42
  if(d<1)for(const k of[-1,1]){
    c.lineWidth=4
    for(let j=0;j<2;j++){
      const r=(5-j*1.5)*Math.sin(P*d),x=128+k*(30+d*26+j*11),y=G-4-j*5-d*6
      if(r>.5){c.beginPath();c.arc(x,y,r,0,2*P);c.fillStyle='#e9e2d4';c.fill();c.stroke()}
    }
  }
  const bb=G-yb,bt=bb-11
  // base puck
  c.lineWidth=6
  rr(c,104,bt,48,11,5);c.fillStyle='#f0a043';c.fill();c.stroke()
  c.fillStyle='#ffd08a';c.fillRect(110,bt+2.5,24,2.5)
  // spring
  const st=bt-50*L*(1-.55*q),n=4.5,R=21,ry=5
  const pt=a=>[128+R*Math.cos(a),bt-2+(st-bt+2)*a/(2*P*n)+ry*Math.sin(a)]
  const ln=(s,f)=>{for(const[w,col]of f?[[7,'#111'],[3,'#e4e9ef']]:[[6,'#111'],[2,'#7d8692']]){
    c.lineWidth=w;c.strokeStyle=col;c.beginPath();s.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}}
  for(const f of[0,1]){
    let s=[]
    for(let a=0;a<2*P*n;a+=P/24){
      if(Math.sin(a+P/48)>0==!!f){s.length||s.push(pt(a));s.push(pt(a+P/24))}
      else if(s.length){ln(s,f);s=[]}
    }
    s.length&&ln(s,f)
  }
  c.strokeStyle='#111'
  // body
  const W=86*sx,H=64*sy,x0=128-W/2,y0=st-H+2
  // antenna
  const tl=.22*Math.sin(2*P*(t*2-.15))*(q?.4:1),ax=128+Math.sin(tl)*26,ay=y0-Math.cos(tl)*26*(1-.25*q)
  c.lineWidth=7;c.beginPath();c.moveTo(128,y0+2);c.quadraticCurveTo(128,y0-12,ax,ay);c.stroke()
  c.lineWidth=3;c.strokeStyle='#aab3bd';c.stroke();c.strokeStyle='#111'
  c.lineWidth=6;c.beginPath();c.arc(ax,ay,6.5,0,2*P);c.fillStyle='#ff5d6c';c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(ax-2,ay-2,1.8,0,2*P);c.fill()
  // ear knobs
  for(const k of[-1,1]){rr(c,128+k*(W/2+3)-6,y0+H*.32,12,H*.36,4);c.fillStyle='#b9c1ca';c.fill();c.stroke()}
  c.lineWidth=7;rr(c,x0,y0,W,H,17);c.fillStyle='#8fd8cc';c.fill()
  c.save();c.clip();c.fillStyle='#69bdb1';c.fillRect(x0+W-16,y0,20,H);c.fillRect(x0,y0+H-9,W,10)
  c.fillStyle='#c9f2ea';c.fillRect(x0+8,y0+5,W*.45,4);c.restore()
  rr(c,x0,y0,W,H,17);c.stroke()
  // screen face
  c.lineWidth=5;rr(c,x0+12,y0+11,W-28,H-24,10);c.fillStyle='#1f2d36';c.fill();c.stroke()
  const fx=128-7,fy=y0+11+(H-24)/2
  c.strokeStyle=c.fillStyle='#7ff0ff'
  if(q>.25){c.lineWidth=4.5;for(const k of[-1,1]){c.beginPath();c.moveTo(fx+k*13-6,fy+3);c.lineTo(fx+k*13,fy-4);c.lineTo(fx+k*13+6,fy+3);c.stroke()}}
  else{const o=v>.3&&v<.7,e=o?6.5:6;for(const k of[-1,1]){rr(c,fx+k*13-(o?6:4),fy-e-(o?1:0),o?12:8,2*e,o?6:4);c.fill()}
    if(o){c.fillStyle='#1f2d36';for(const k of[-1,1]){c.beginPath();c.arc(fx+k*13+2,fy-3,2.2,0,2*P);c.fill()}c.fillStyle='#7ff0ff'}}
  c.lineWidth=3;c.beginPath()
  if(v>.3&&v<.7)c.ellipse(fx,fy+9,3.5,4,0,0,2*P),c.stroke()
  else c.arc(fx,fy+7,q>.25?6:4,.15*P,.85*P),c.stroke()
  c.fillStyle='#ff8fa3';for(const k of[-1,1]){c.beginPath();c.ellipse(fx+k*24,fy+6,3.5,2,0,0,2*P);c.fill()}
}
