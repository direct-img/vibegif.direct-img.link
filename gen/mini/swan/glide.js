// swan gliding on still water: the neck sways and the head dips, ripples slide back under it, a blink
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=90,rim=3,invert=true
export default(c,t)=>{
  const s=sin(T*t),hx=172+5*s,hy=70+4*cos(T*t),bl=t>.55&&t<.62
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.translate(128,128);c.scale(1.1,1.1);c.translate(-128,-128)
  shape(()=>{c.moveTo(42,116+2*s);c.quadraticCurveTo(62,142,94,140);c.bezierCurveTo(108,110,158,106,178,132)
    c.bezierCurveTo(204,140,202,180,170,180);c.lineTo(80,180);c.bezierCurveTo(56,180,42,158,42,116+2*s)})
  c.lineWidth=18;c.beginPath();c.moveTo(180,152);c.bezierCurveTo(206,126,hx-12,104,hx,hy+8);c.stroke()
  c.lineWidth=6;shape(()=>c.arc(hx+4,hy,13,0,T))
  shape(()=>{c.moveTo(hx+12,hy-6);c.lineTo(hx+34,hy+8);c.lineTo(hx+12,hy+8);c.closePath()})
  c.lineWidth=4;c.beginPath();c.moveTo(26,180);c.lineTo(230,180);c.stroke()
  for(let k=0;k<3;k++){
    const f=(t+k/3)%1,x=176-150*f,y=194+10*(k%2),l=22*sin(PI*f)
    if(l>1)c.beginPath(),c.moveTo(x-l,y),c.lineTo(x+l,y),c.stroke()
  }
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=2.5,c.beginPath(),c.arc(hx+7,hy-4,3.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(hx+7,hy-3,3.5,0,T),c.fill()
}
