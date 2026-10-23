// dove cooing with an olive sprig: it puffs out its round chest, bobs its little head, lifts its slender tail and blinks
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
export default(c,t)=>{
  const b=sin(T*t*2),p=max(0,sin(T*t)),bl=t>.62&&t<.68,hx=184+7*b,hy=82+3*max(0,b)
  c.fillStyle=c.strokeStyle='#fff';c.translate(4,-8)
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.lineWidth=6;for(const x of[122,144])c.beginPath(),c.moveTo(x,176),c.lineTo(x-2,204),c.moveTo(x-9,206),c.lineTo(x+5,206),c.stroke()
  c.save();c.translate(84,150);c.rotate(-.08-.14*p);shape(()=>{c.moveTo(0,-14);c.quadraticCurveTo(-34,-12,-68,0);c.quadraticCurveTo(-34,12,0,16)});c.restore()
  shape(()=>c.ellipse(120,150,56,32,-.08,0,T))
  shape(()=>c.ellipse(156+4*p,138-2*p,38+8*p,40+6*p,0,0,T))
  c.lineWidth=24;c.beginPath();c.moveTo(166,112);c.lineTo(hx-3,hy+6);c.stroke();c.lineWidth=6
  shape(()=>c.arc(hx,hy,16,0,T))
  shape(()=>{c.moveTo(hx+13,hy-3);c.lineTo(hx+24,hy+2);c.lineTo(hx+13,hy+6)})
  // olive sprig hanging from the beak, it swings a little behind the head bob
  c.save();c.translate(hx+20,hy+3);c.rotate(.15*sin(T*t*2-1))
  c.lineWidth=3.5;c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(14,10,12,30);c.stroke()
  c.lineWidth=4;for(const[x,y,r]of[[7,6,-.5],[13,16,.9],[13,30,1.6]])shape(()=>c.ellipse(x+5*cos(r),y+5*sin(r),8,3.5,r,0,T))
  c.restore()
  c.fillStyle=c.strokeStyle='#111'
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(hx+4,hy-4,4.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(hx+4,hy-2,4.5,0,T),c.fill()
  c.lineWidth=3.5;c.beginPath();c.moveTo(72,150);c.bezierCurveTo(98,122,146,110,156,132);c.bezierCurveTo(162,152,118,166,72,150);c.stroke()
}
