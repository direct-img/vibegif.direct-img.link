// goat bleating: it throws its head back with a wide open mouth and sound marks, its tail flicks and it blinks
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const h=t>.3&&t<.7?sin(PI*(t-.3)/.4):0,wg=.4*sin(T*t*3),bl=t>.82&&t<.88
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.translate(-20,8)
  c.save();c.translate(60,118);c.rotate(wg);shape(()=>{c.moveTo(-6,4);c.quadraticCurveTo(-14,-14,-4,-24);c.quadraticCurveTo(4,-8,8,2)});c.restore()
  c.lineWidth=12
  for(const[x,y,e]of[[78,150,76],[96,152,98],[146,150,144],[164,148,168]])c.beginPath(),c.moveTo(x,y),c.lineTo(e,204),c.stroke()
  c.lineWidth=6;shape(()=>c.ellipse(116,138,60,32,0,0,T))
  c.lineWidth=26;c.beginPath();c.moveTo(158,128);c.lineTo(180,98);c.stroke()
  c.save();c.translate(178,102);c.rotate(-.4*h);c.translate(-178,-102)
  c.lineWidth=10;c.beginPath();c.moveTo(190,72);c.quadraticCurveTo(182,38,152,46);c.stroke()
  c.lineWidth=8;c.beginPath();c.moveTo(200,74);c.quadraticCurveTo(196,44,170,42);c.stroke()
  c.lineWidth=6
  shape(()=>c.ellipse(170,90,17,6,-.25-.3*h,0,T))
  shape(()=>c.ellipse(198,94,32,19,.6,0,T))
  shape(()=>{c.moveTo(204,108);c.lineTo(222,114);c.lineTo(208,140);c.closePath()})
  c.fillStyle=c.strokeStyle='#111'
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(198,84,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(198,86,5,0,T),c.fill()
  c.beginPath();c.arc(224,104,3.5,0,T);c.fill()
  if(h>.05)c.beginPath(),c.ellipse(218,116,6*h+2,9*h,.6,0,T),c.fill()
  else c.lineWidth=3,c.beginPath(),c.moveTo(214,114),c.quadraticCurveTo(219,118,224,114),c.stroke()
  if(h>.25){c.strokeStyle='#fff';c.lineWidth=5
    for(const r of[18,30])c.beginPath(),c.arc(220,116,r+4*h,-.5,.9),c.stroke()}
  c.restore()
  c.strokeStyle='#111';c.lineWidth=2.5
  for(const e of[76,98,144,168])c.beginPath(),c.moveTo(e,206),c.lineTo(e,210),c.stroke()
}
