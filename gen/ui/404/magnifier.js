// a magnifying glass sweeps back and forth over 404, and when it hovers the 0 it swells up big with a confused little face
const{sin,PI,max,abs}=Math,T=2*PI
export const frames=24,delay=70
const N=(c,g)=>{for(const[w,s]of[[28,'#111'],[14,'#fff']]){
  c.lineWidth=w;c.strokeStyle=s
  for(const x of[60,196])c.beginPath(),c.moveTo(x+8,150),c.lineTo(x+8,78),c.lineTo(x-20,126),c.lineTo(x+20,126),c.stroke()
  c.beginPath();c.ellipse(128,114,22+14*g,36+6*g,0,0,T);c.stroke()
}}
const Q=(c,x,y,s,a)=>{
  c.save();c.translate(x,y);c.rotate(a);c.scale(s,s)
  for(const[w,st]of[[20,'#111'],[8,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.arc(0,-10,11,PI,PI*2.3),c.quadraticCurveTo(0,4,0,9),c.stroke()
  c.lineWidth=5;c.strokeStyle='#111';c.beginPath();c.arc(0,24,6,0,T);c.fill();c.stroke();c.restore()
}
export default(c,t)=>{
  const s=sin(T*t)**3,lx=128+58*s,ly=112,g=max(0,1-abs(lx-128)/30)**1.5,m=1.6
  N(c,0)
  c.lineWidth=7;c.strokeStyle='#111'
  c.save();c.translate(lx,ly);c.rotate(1.25+.3*s)
  c.beginPath();c.roundRect(56,-9,20,18,3);c.fill();c.stroke()
  c.beginPath();c.roundRect(74,-15,52,30,13);c.fill();c.stroke()
  c.lineWidth=4;for(const u of[90,104])c.beginPath(),c.moveTo(u,-8),c.lineTo(u,8),c.stroke()
  c.restore()
  c.save();c.beginPath();c.arc(lx,ly,52,0,T);c.fill();c.clip()
  c.translate(lx,ly);c.scale(m,m);c.translate(-lx,-ly);N(c,g)
  if(g>.05){
    c.translate(128,114);c.scale(1.25*g,1.25*g);c.fillStyle='#111'
    for(const d of[-1,1])c.beginPath(),c.arc(d*7,-5,3.5,0,T),c.fill()
    c.lineWidth=2.5;c.strokeStyle='#111'
    c.beginPath();c.moveTo(-11,-14);c.lineTo(-4,-17);c.moveTo(4,-12);c.lineTo(11,-12);c.stroke()
    c.beginPath();c.moveTo(-8,9);c.lineTo(-4,6);c.lineTo(0,9);c.lineTo(4,6);c.lineTo(8,9);c.stroke()
  }
  c.restore()
  c.strokeStyle='#111';c.lineWidth=18;c.beginPath();c.arc(lx,ly,52,0,T);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.stroke()
  c.strokeStyle='#ddd';c.lineWidth=7;c.beginPath();c.arc(lx,ly,38,PI*1.1,PI*1.4);c.stroke()
  if(g>.3)Q(c,lx+52,ly-62,(g-.3)/.7,.2*sin(T*t*2))
}
