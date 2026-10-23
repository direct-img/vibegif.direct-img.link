// tsuchinoko, the chubby cryptid snake: it rocks back and forth on its round belly, stubby tail wagging, tongue flicking, it blinks
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const a=.17*sin(T*t),tg=t>.5&&t<.7?sin(PI*(t-.5)/.2):0,bl=t>.86&&t<.92
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.translate(128,128);c.scale(.92,.92);c.translate(-128,-140)
  c.translate(120+46*a,154);c.rotate(a);c.translate(-120,-154)
  c.lineWidth=8;c.beginPath();c.moveTo(60,160);c.quadraticCurveTo(32,166,20,148+6*sin(T*t*2));c.stroke();c.lineWidth=6
  shape(()=>c.ellipse(114,154,70,46,0,0,T))
  shape(()=>c.ellipse(184,140,20,22,-.3,0,T))
  shape(()=>c.ellipse(204,124,30,20,-.18,0,T))
  if(tg>0){c.lineWidth=3;const L=230+14*tg;c.beginPath();c.moveTo(228,130);c.lineTo(L,132);c.lineTo(L+6,126);c.moveTo(L,132);c.lineTo(L+6,138);c.stroke()}
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=3.5
  c.lineWidth=6;for(const x of[66,94,122,150]){const y=154-46*Math.sqrt(1-((x-114)/70)**2);c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+7,y+12,x+3,y+24);c.stroke()}
  c.lineWidth=3;c.beginPath();c.moveTo(60,178);c.quadraticCurveTo(112,206,172,170);c.stroke()
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(208,116,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(208,118,6,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(228,132);c.quadraticCurveTo(218,140,204,136);c.stroke()
}
