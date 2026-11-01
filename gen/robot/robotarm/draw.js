// orange two-jointed robot arm on a turret base, seen from above, holding a blue marker and tracing an endless figure-eight on graph paper, the fresh ink tapering away behind the pen
export const frames=32,delay=50
const P=Math.PI,K='#111',Z=34,B=[128,226],L1=104,L2=92
const pt=th=>[124+76*Math.sin(th),90+38*Math.sin(2*th)]
const ik=([x,y])=>{
  const dx=x-B[0],dy=y-B[1],d=Math.hypot(dx,dy),a=Math.atan2(dy,dx)
  const al=Math.acos((L1*L1+d*d-L2*L2)/(2*L1*d))
  return[B[0]+L1*Math.cos(a+al),B[1]+L1*Math.sin(a+al)]
}
const paper=c=>{c.beginPath();c.moveTo(18,14);c.lineTo(240,8);c.lineTo(246,244);c.lineTo(12,248);c.closePath()}
const cap=(c,[x1,y1],r1,[x2,y2],r2,n)=>{
  const a=Math.atan2(y2-y1,x2-x1)
  n||c.beginPath();c.moveTo(x1+r1*Math.cos(a+P/2),y1+r1*Math.sin(a+P/2));c.arc(x1,y1,r1,a+P/2,a-P/2);c.arc(x2,y2,r2,a-P/2,a+P/2);c.closePath()
}
const link=(c,p,r1,q,r2)=>{
  cap(c,p,r1,q,r2);c.fillStyle='#f39c1f';c.fill()
  c.save();cap(c,p,r1,q,r2);c.clip()
  c.translate(-3,-4);cap(c,p,r1*.55,q,r2*.55);c.fillStyle='#ffc45a';c.fill();c.restore()
  cap(c,p,r1,q,r2);c.lineWidth=5;c.strokeStyle=K;c.stroke()
}
const disk=(c,x,y,r,f,w=4)=>{c.beginPath();c.arc(x,y,r,0,2*P);c.fillStyle=f;c.fill();c.lineWidth=w;c.strokeStyle=K;c.stroke()}
const up=([x,y])=>[x,y-Z]
export default(c,t)=>{
  const th=2*P*t,T=pt(th),E=ik(T)
  // graph paper
  paper(c);c.fillStyle='#fbfaf3';c.fill()
  c.save();paper(c);c.clip()
  c.lineWidth=1.5;c.strokeStyle='#cfe0ef'
  for(let k=0;k<17;k++){c.beginPath();c.moveTo(k*16,0);c.lineTo(k*16+6,256);c.moveTo(0,k*16);c.lineTo(256,k*16-6);c.stroke()}
  // ink trail, tapering
  const n=60,len=.78*2*P
  for(let k=0;k<n;k++){
    const a=pt(th-len*(1-k/n)),b=pt(th-len*(1-(k+1)/n))
    c.beginPath();c.moveTo(...a);c.lineTo(...b);c.lineWidth=.8+4.2*(k/n)**.7;c.strokeStyle='#2445c8';c.stroke()
  }
  // shadows of the raised arm cast down-right onto the paper
  c.save();c.translate(13,9);c.fillStyle='rgba(70,60,40,.16)'
  cap(c,B,15,E,12);cap(c,E,11,T,8,1);c.fill();c.restore()
  c.restore()
  paper(c);c.lineWidth=4;c.strokeStyle=K;c.stroke()
  // turret base: short cylinder
  const[bx,by]=B
  const cyl=()=>{c.beginPath();c.ellipse(bx,by,28,13,0,0,P);c.lineTo(bx-28,by-Z);c.ellipse(bx,by-Z,28,13,0,P,2*P);c.closePath()}
  cyl();c.fillStyle='#4b5461';c.fill()
  c.save();cyl();c.clip();c.fillStyle='#363d47';c.fillRect(bx+12,0,30,256);c.fillStyle='#64707e';c.fillRect(bx-20,0,7,256);c.restore()
  cyl();c.lineWidth=5;c.strokeStyle=K;c.stroke()
  c.beginPath();c.ellipse(bx,by-Z,28,13,0,0,2*P);c.fillStyle='#7d8896';c.fill();c.stroke()
  for(let k=0;k<6;k++){const a=k*P/3+.3;disk(c,bx+21*Math.cos(a),by-Z+9.5*Math.sin(a),2,'#cfd6dc',1.5)}
  // arm links in the raised plane
  const b=up(B),e=up(E),w=up(T)
  link(c,b,15,e,12)
  disk(c,...e,14,'#3c434e');disk(c,...e,7,'#cfd6dc',3)
  link(c,e,11,w,8)
  disk(c,...b,11,'#3c434e');disk(c,...b,5,'#cfd6dc',3)
  // marker hanging from the wrist down to the paper
  c.beginPath();c.moveTo(w[0],w[1]);c.lineTo(T[0],T[1]-6);c.lineWidth=15;c.strokeStyle=K;c.lineCap='butt';c.stroke()
  c.lineWidth=8;c.strokeStyle='#e8edf2';c.stroke()
  c.beginPath();c.moveTo(T[0],T[1]-12);c.lineTo(T[0],T[1]-5);c.lineWidth=8;c.strokeStyle='#2445c8';c.stroke()
  c.beginPath();c.moveTo(T[0]-4,T[1]-6);c.lineTo(T[0],T[1]+1);c.lineTo(T[0]+4,T[1]-6);c.closePath()
  c.fillStyle='#2445c8';c.fill();c.lineWidth=3;c.strokeStyle=K;c.lineCap='round';c.stroke()
  disk(c,...w,10,'#3c434e');disk(c,...w,5,i8(t)?'#5cf07a':'#2b6b3a',2.5)
}
const i8=t=>Math.floor(t*8)%2
