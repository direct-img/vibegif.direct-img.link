// clay diya oil lamp for Diwali, its flame flickering and swaying on the wick while little sparkles twinkle
export const frames=24,delay=60,rim=5
const K='#2a1810',P=Math.PI*2,S=Math.sin
export default(c,t)=>{
  const s=(a,b)=>S(P*a*t+b),h=96+8*s(3,.9)+3*s(5,2.6),dx=10*s(2,2.2)+3*s(4,.5),w=24+2*s(4,1),fx=204,fy=134,
    // teardrop flame standing on (x,y): half-width w, height h, tip leaning dx
    fl=(x,y,w,h,dx)=>{c.beginPath();c.moveTo(x+dx,y-h);c.quadraticCurveTo(x+w*1.25+dx*.25,y-h*.42,x+w,y-w);c.arc(x,y-w,w,0,Math.PI);c.quadraticCurveTo(x-w*1.25+dx*.25,y-h*.42,x+dx,y-h);c.closePath()},
    body=()=>{c.beginPath();c.moveTo(34,148);c.bezierCurveTo(34,196,76,214,116,214);c.bezierCurveTo(160,214,190,182,206,140);c.closePath()},
    lip=()=>{c.beginPath();c.moveTo(212,136);c.bezierCurveTo(176,120,130,122,96,124);c.bezierCurveTo(52,126,30,138,30,150);c.bezierCurveTo(30,164,62,172,104,170);c.bezierCurveTo(150,168,186,152,212,136);c.closePath()}
  c.strokeStyle=K;c.lineWidth=6
  // twinkles
  for(const[x,y,r,o]of[[62,74,17,0],[114,38,12,.45],[32,112,10,.7]]){
    const k=Math.max(0,S(Math.PI*((t*2+o)%1))),q=r*k,v=q*.28
    if(q<5)continue
    c.beginPath();c.moveTo(x,y-q);c.quadraticCurveTo(x+v,y-v,x+q,y);c.quadraticCurveTo(x+v,y+v,x,y+q);c.quadraticCurveTo(x-v,y+v,x-q,y);c.quadraticCurveTo(x-v,y-v,x,y-q)
    c.fillStyle='#ffd23f';c.fill();c.lineWidth=4;c.stroke()
  }
  c.lineWidth=6
  // foot
  c.beginPath();c.ellipse(116,212,34,10,0,0,P);c.fillStyle='#94391c';c.fill();c.stroke()
  // bowl with painted band
  c.save();body();c.fillStyle='#94391c';c.fill();c.clip()
  c.translate(-8,-10);body();c.fillStyle='#c65a2e';c.fill();c.translate(8,10)
  c.lineWidth=12;c.strokeStyle='#f2b632';c.beginPath();c.moveTo(30,166);c.bezierCurveTo(60,196,150,200,206,160);c.stroke()
  c.lineWidth=4;c.strokeStyle='#1f8a8a';c.beginPath();c.moveTo(30,182);c.bezierCurveTo(70,212,150,214,200,176);c.stroke()
  c.fillStyle='#fff3d6'
  for(let k=0;k<9;k++){const u=k/8,x=40+u*156,y=172+22*S(Math.PI*(u*.9+.08))-u*8;c.beginPath();c.arc(x,y,3.4,0,P);c.fill()}
  c.restore();c.strokeStyle=K;c.lineWidth=6;body();c.stroke()
  // rim lip and oil
  lip();c.fillStyle='#d8703e';c.fill();c.stroke()
  c.beginPath();c.moveTo(196,138);c.bezierCurveTo(160,130,120,132,96,134);c.bezierCurveTo(62,136,48,144,48,150);c.bezierCurveTo(50,158,78,162,108,160);c.bezierCurveTo(146,158,176,150,196,138);c.closePath()
  c.fillStyle='#7a4a10';c.fill();c.lineWidth=4;c.stroke()
  c.strokeStyle='#e8b04a';c.lineWidth=4;c.beginPath();c.moveTo(70,146);c.quadraticCurveTo(100,140,130,140);c.stroke()
  // the flame's glint on the oil
  c.beginPath();c.ellipse(160,143,12+(h-96)*.4,3.2,-.12,0,P);c.fillStyle='#f2b632';c.fill()
  // wick
  c.strokeStyle=K;c.lineWidth=5;c.fillStyle='#f6e7c8';c.beginPath();c.moveTo(178,140);c.lineTo(202,128);c.lineTo(205,134);c.lineTo(184,146);c.closePath();c.fill();c.stroke()
  // flame, three layers leaning together, the core lagging
  c.lineWidth=6;fl(fx,fy,w,h,dx);c.fillStyle='#ff7a1a';c.fill();c.stroke()
  fl(fx,fy-2,w*.68,h*.74,dx*.8+2*s(3,2));c.fillStyle='#ffc42e';c.fill()
  fl(fx,fy-4,w*.36,h*.42,dx*.55+2*s(4,3));c.fillStyle='#fff6cc';c.fill()
}
