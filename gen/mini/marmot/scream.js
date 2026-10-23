// marmot standing on its hind legs: it tips its head back and screams with its mouth wide open, shaking all over, then blinks
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const q=t>.28&&t<.82?sin(PI*(t-.28)/.54):0,o=min(1,q*1.7),sh=o>.4?3*sin(T*t*12):0,bl=t>.1&&t<.16
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.translate(128+sh,128);c.scale(1.04,1.04);c.translate(-128,-128)
  shape(()=>c.ellipse(182,208,24,11,-.6,0,T))
  for(const x of[100,156])shape(()=>c.ellipse(x,226,21,9,0,0,T))
  shape(()=>{c.moveTo(128,100);c.bezierCurveTo(194,100,202,228,128,228);c.bezierCurveTo(54,228,62,100,128,100)})
  c.save();c.translate(0,-8*o)
  for(const d of[-1,1])shape(()=>c.arc(128+d*34,54,13,0,T))
  shape(()=>c.ellipse(128,86,46,38,0,0,T))
  if(o>.3){c.lineWidth=4;for(const a of[-2.55,-2.15,-1,-.6])c.beginPath(),c.moveTo(128+62*cos(a),86+56*sin(a)),c.lineTo(128+(62+14*o)*cos(a),86+(56+14*o)*sin(a)),c.stroke()}
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=3.5
  for(const d of[-1,1])if(o>.3)c.beginPath(),c.moveTo(128+d*25,71),c.lineTo(128+d*14,77),c.lineTo(128+d*25,83),c.stroke()
  else if(bl)c.beginPath(),c.arc(128+d*18,76,5.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*18,78,5.5,0,T),c.fill()
  c.beginPath();c.ellipse(128,90,6.5,4.5,0,0,T);c.fill()
  const my=97,mh=3+20*o
  c.lineWidth=3
  if(o>.05)c.beginPath(),c.ellipse(128,my+mh,5+9*o,mh,0,0,T),c.fill()
  else c.beginPath(),c.moveTo(128,94),c.lineTo(128,98),c.quadraticCurveTo(123,103,117,100),c.moveTo(128,98),c.quadraticCurveTo(133,103,139,100),c.stroke()
  c.fillStyle='#fff';c.lineWidth=2.5;c.beginPath();c.rect(122,my+(o>.05?1:2),12,9);c.fill();c.stroke()
  c.beginPath();c.moveTo(128,my+1);c.lineTo(128,my+10);c.stroke()
  c.restore()
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=3
  for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*14,152-4*o,10,13,-d*.3,0,T),c.fill(),c.stroke()
}
