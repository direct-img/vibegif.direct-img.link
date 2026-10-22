// cute skull bobbing along while its jaw chatters open and shut
const{sin,PI,abs}=Math,T=2*PI
export const frames=16,delay=70
const D=(c,f,a=11,b=4)=>{for(const[l,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
const teeth=(c,y,h)=>{c.lineWidth=4;for(const x of[104,116,128,140,152])c.beginPath(),c.roundRect(x-6,y,12,h,3),c.fill(),c.stroke();c.lineWidth=7}
export default(c,t)=>{
  const o=12*abs(sin(4*PI*t)),b=4*sin(t*T)
  if(o<4)for(const d of[-1,1])for(const y of[-12,0,12])D(c,()=>{c.moveTo(128+d*(74+(y?0:6)),186+y);c.lineTo(128+d*94,186+y)})
  c.translate(128,140+b);c.rotate(.05*sin(t*T));c.translate(-128,-140)
  c.beginPath();c.moveTo(92,182+o);c.lineTo(164,182+o);c.quadraticCurveTo(166,214+o,128,216+o);c.quadraticCurveTo(90,214+o,92,182+o);c.fill();c.stroke()
  teeth(c,172+o,14)
  const sk=()=>{c.beginPath();c.ellipse(128,94,76,68,0,0,T)},up=()=>{c.beginPath();c.roundRect(86,110,84,52,16)}
  c.lineWidth=14;sk();c.stroke();up();c.stroke();sk();c.fill();up();c.fill();c.lineWidth=7
  teeth(c,158,14)
  c.fillStyle='#111'
  for(const x of[100,156])c.beginPath(),c.ellipse(x,106,20,22,0,0,T),c.fill()
  c.beginPath();c.moveTo(128,128);c.lineTo(119,143);c.quadraticCurveTo(128,147,137,143);c.closePath();c.fill()
  c.fillStyle='#fff';for(const x of[100,156])c.beginPath(),c.arc(x-6,99,6,0,T),c.fill(),c.beginPath(),c.arc(x+6,114,2.5,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.moveTo(150,30);c.lineTo(156,44);c.lineTo(148,52);c.lineTo(154,62);c.stroke()
}
