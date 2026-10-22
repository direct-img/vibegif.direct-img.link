// monkey swinging from a vine by one arm and waving with the other, its legs and tail lagging behind
// drawn at Z times the base size, so line widths are divided by Z to stay at the usual ink weight
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=85
const Z=1.6,W=x=>x/Z
export default(c,t)=>{
  const a=.12*sin(T*t),lg=-.22*cos(T*t),wv=sin(2*T*t)
  const dbl=(f,core,o=12)=>{c.beginPath();f();for(const[l,s]of[[core+W(o),'#111'],[core,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.stroke();c.strokeStyle='#111';c.lineWidth=W(7)}
  c.translate(130,-64);c.rotate(a)
  for(const[l,s]of[[13,'#111'],[5,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(0,0),c.quadraticCurveTo(5,40,0,84),c.stroke()
  c.translate(0,86);c.scale(Z,Z);c.translate(0,-86);c.strokeStyle='#111';c.lineWidth=W(7)
  c.save();c.translate(14,198);c.rotate(lg)
  dbl(()=>{c.moveTo(0,0);c.bezierCurveTo(30,14,40,-20,28,-28);c.quadraticCurveTo(18,-32,20,-20)},5,8)
  for(const x of[-14,6])dbl(()=>{c.moveTo(x,0);c.lineTo(x-3,14)},12)
  for(const x of[-17,3])c.beginPath(),c.ellipse(x,18,11,6.5,0,0,T),c.fill(),c.stroke()
  c.restore()
  dbl(()=>{c.moveTo(12,150);c.lineTo(2,90)},12)
  c.beginPath();c.arc(0,88,9,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(6,178,26,28,0,0,T);c.fill();c.stroke()
  c.lineWidth=W(5);c.beginPath();c.ellipse(4,184,14,16,0,0,T);c.stroke();c.lineWidth=W(7)
  const hx=-38+4*wv,hy=190-8*wv
  dbl(()=>{c.moveTo(-6,166);c.lineTo(hx,hy)},12)
  c.beginPath();c.arc(hx-3,hy+2,9,0,T);c.fill();c.stroke()
  for(const[x,y]of[[-52,136],[10,128]]){
    c.beginPath();c.arc(x,y,10,0,T);c.fill();c.stroke()
    c.lineWidth=W(4);c.beginPath();c.arc(x,y,4,0,T);c.stroke();c.lineWidth=W(7)
  }
  c.beginPath();c.arc(-21,134,31,0,T);c.fill();c.stroke()
  const face=[()=>c.arc(-30,130,11.5,0,T),()=>c.arc(-12,130,11.5,0,T),()=>c.ellipse(-21,147,16,11,0,0,T)]
  c.lineWidth=W(5);for(const f of face)c.beginPath(),f(),c.stroke();for(const f of face)c.beginPath(),f(),c.fill()
  c.fillStyle='#111';for(const x of[-29,-13])c.beginPath(),c.arc(x,131,4.5,0,T),c.fill()
  c.fillStyle='#fff';for(const x of[-30,-14])c.beginPath(),c.arc(x,129.5,1.6,0,T),c.fill()
  c.fillStyle='#111';for(const x of[-24,-18])c.beginPath(),c.arc(x,143,1.6,0,T),c.fill()
  c.lineWidth=W(4);c.beginPath();c.arc(-21,148,7.5,.15*PI,.85*PI);c.stroke()
}
