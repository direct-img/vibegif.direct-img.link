// quail bobbing along: its black topknot nods and springs with every head bob, its little legs step and it blinks
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const b=sin(T*t*2),pl=sin(T*t*2-1.3),bl=t>.7&&t<.76,hx=164+6*b,hy=98+5*b
  c.fillStyle=c.strokeStyle='#fff';c.translate(6,0)
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.lineWidth=6
  for(const k of[0,1]){const x=118+k*14+10*sin(T*t*2+k*PI),y=214-5*max(0,cos(T*t*2+k*PI))
    c.beginPath();c.moveTo(118+k*14,186);c.lineTo(x,y);c.moveTo(x-10,y+2);c.lineTo(x+10,y+2);c.stroke()}
  c.translate(0,2*b)
  shape(()=>{c.moveTo(56,128);c.bezierCurveTo(70,96,150,94,170,124);c.bezierCurveTo(186,170,140,198,108,194);c.bezierCurveTo(72,190,52,160,56,128)})
  shape(()=>{c.moveTo(60,124);c.lineTo(34,112);c.lineTo(44,140)})
  c.lineWidth=26;c.beginPath();c.moveTo(150,124);c.lineTo(hx-2,hy+6);c.stroke();c.lineWidth=6
  shape(()=>c.arc(hx,hy,22,0,T))
  c.fillStyle=c.strokeStyle='#111'
  c.save();c.translate(hx+4,hy-18);c.rotate(.3*pl)
  // white ring so the black plume still shows on a black page
  c.beginPath();c.moveTo(-3,0);c.bezierCurveTo(-8,-26,8,-40,24,-34);c.bezierCurveTo(34,-30,30,-16,20,-18);c.bezierCurveTo(12,-20,6,-12,3,0)
  c.lineWidth=8;c.strokeStyle='#fff';c.stroke();c.fill();c.restore();c.strokeStyle='#111'
  c.beginPath();c.moveTo(hx+18,hy-4);c.quadraticCurveTo(hx+32,hy,hx+19,hy+8);c.fill()
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(hx+5,hy-6,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(hx+5,hy-4,5,0,T),c.fill()
  c.lineWidth=3.5;c.beginPath();c.moveTo(hx+12,hy+10);c.quadraticCurveTo(hx+2,hy+22,hx-14,hy+18);c.stroke()
  c.beginPath();c.moveTo(150,134);c.quadraticCurveTo(128,170,72,146);c.stroke()
  for(const[x,y]of[[118,176],[134,166],[100,170]])c.beginPath(),c.arc(x,y,6,PI*.15,PI*.85),c.stroke()
}
