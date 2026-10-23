// beaver gnawing a stick like corn on the cob: the stick slides side to side, its cheeks puff, wood chips spit out and it blinks
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const s=12*sin(T*t),j=2.5*max(0,sin(T*t*6)),bl=t>.7&&t<.76
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  const tail=()=>c.ellipse(190,206,46,19,-.45+.06*sin(T*t*2),0,T)
  c.lineWidth=5;c.beginPath();c.moveTo(58+s,136);c.quadraticCurveTo(44+s,118,50+s,102);c.stroke();c.lineWidth=6
  c.save();c.translate(50+s,102);c.rotate(-.5+.15*sin(T*t*2));shape(()=>{c.moveTo(0,0);c.quadraticCurveTo(14,-10,4,-28);c.quadraticCurveTo(-10,-12,0,0)});c.restore()
  shape(tail);c.save();c.translate(190,206);c.rotate(-.45+.06*sin(T*t*2));c.strokeStyle='#111';c.lineWidth=2.5
  c.beginPath();c.moveTo(4,-12);c.lineTo(16,12);c.moveTo(22,-12);c.lineTo(34,10);c.moveTo(6,12);c.lineTo(30,-12);c.stroke();c.restore()
  shape(()=>c.ellipse(128,172,52,52,0,0,T))
  for(const d of[-1,1])shape(()=>c.ellipse(128+d*26,224,17,9,0,0,T))
  for(const d of[-1,1])shape(()=>c.arc(128+d*36,62,11,0,T))
  for(const d of[-1,1])shape(()=>c.arc(128+d*24,112,22+j*.6,0,T))
  shape(()=>c.ellipse(128,92,44,40,0,0,T))
  c.fillStyle=c.strokeStyle='#111'
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(128+d*20,84,5.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*20,86,5.5,0,T),c.fill()
  c.beginPath();c.ellipse(128,104,9,6,0,0,T);c.fill()
  c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.rect(119,114+j,18,15);c.fill();c.stroke()
  c.beginPath();c.moveTo(128,114+j);c.lineTo(128,129+j);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.roundRect(52+s,132,152,20,10);c.fill();c.stroke()
  // the stick's dark edge only shows over the body, outside it the rim already outlines it
  c.save();c.beginPath();c.ellipse(128,172,52,52,0,0,T);for(const d of[-1,1])c.moveTo(128+d*24+22,112),c.arc(128+d*24,112,22,0,T);c.clip()
  c.strokeStyle='#111';c.lineWidth=3.5;c.beginPath();c.roundRect(52+s,132,152,20,10);c.stroke();c.restore();c.strokeStyle='#111'
  c.lineWidth=2.5;for(const x of[70,104,150,174])c.beginPath(),c.moveTo(x+s,138),c.lineTo(x+10+s,138),c.moveTo(x+6+s,146),c.lineTo(x+14+s,146),c.stroke()

  c.lineWidth=3.5;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*38+s,142,10,13,0,0,T),c.fill(),c.stroke()
  for(let i=0;i<3;i++){const q=(t*2+i/3)%1,d=i%2?1:-1
    c.save();c.translate(128+d*(16+70*q),128-60*q+90*q*q);c.rotate(T*q*d);c.beginPath();c.ellipse(0,0,9*(1-q*.3),5.5*(1-q*.3),0,0,T);c.fill();c.stroke();c.restore()}
}
