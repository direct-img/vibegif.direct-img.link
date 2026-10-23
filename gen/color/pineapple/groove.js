// pineapple in sunglasses grooving side to side to the beat, crown leaves swaying behind it and music notes popping up
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=14,delay=90
const PA='#ffd43b',PD='#f59f00',LF='#69db7c',LD='#40c057',BL='#ffa8a8',NC=['#9775fa','#4dabf7']
const note=(c,x,y,s,col)=>{
  c.save();c.translate(x,y);c.scale(s,s);c.rotate(-.2)
  for(const[w,st]of[[10,'#111'],[4,col]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(8,4),c.lineTo(8,-26),c.quadraticCurveTo(18,-20,20,-10),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=col;c.beginPath();c.ellipse(0,4,10,7,-.4,0,T);c.fill();c.stroke();c.restore()
}
export default(c,t)=>{
  const r=.13*sin(T*t),b=-5*abs(sin(2*T*t))
  ;[0,1].forEach(k=>{const p=(t+k*.5)%1;note(c,k?54:202,104-64*p,sin(PI*p),NC[k])})
  c.strokeStyle='#111'
  c.save();c.translate(128,234+b);c.rotate(r);c.translate(-128,-234)
  ;[[-1.05,52],[1.05,52],[-.6,64],[.6,64],[-.25,76],[.25,76],[0,66]].forEach(([a,L],k)=>{
    c.save();c.translate(128,96);c.rotate(a+.14*sin(T*t-1.1-k*.2));c.fillStyle=k%2?LD:LF
    c.beginPath();c.moveTo(-11,6);c.quadraticCurveTo(-9,-L*.6,0,-L);c.quadraticCurveTo(9,-L*.6,11,6);c.closePath();c.fill();c.lineWidth=6;c.stroke();c.restore()
  })
  c.lineWidth=7;c.fillStyle=PA;c.beginPath();c.ellipse(128,164,62,70,0,0,T);c.fill()
  c.save();c.clip();c.strokeStyle=PD;c.lineWidth=4
  for(let k=-8;k<9;k++)c.beginPath(),c.moveTo(128+k*24-90,90),c.lineTo(128+k*24+90,240),c.stroke(),c.beginPath(),c.moveTo(128+k*24+90,90),c.lineTo(128+k*24-90,240),c.stroke()
  c.restore();c.strokeStyle='#111';c.beginPath();c.ellipse(128,164,62,70,0,0,T);c.stroke()
  c.fillStyle='#343a40';for(const d of[-1,1])c.beginPath(),c.roundRect(128+d*24-21,128,42,28,[6,6,14,14]),c.fill(),c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(118,134);c.quadraticCurveTo(128,128,138,134);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*24-12,148),c.lineTo(128+d*24-2,136),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#111';c.beginPath();c.moveTo(112,176);c.quadraticCurveTo(128,196,146,174);c.quadraticCurveTo(128,182,112,176);c.closePath();c.fill();c.lineWidth=4;c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,174,9,5,0,0,T),c.fill()
  c.restore()
}
