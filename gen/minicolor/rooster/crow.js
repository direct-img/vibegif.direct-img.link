// rooster crowing: puffs its chest out, throws its head back and opens its beak, tail feathers swaying
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=85
const B='#ff9f43',L='#ffcfa1',R='#ee5a5a',G='#2ec4b6',Y='#f4c03e',D='#2b2633'
const bump=(t,a,w)=>{const x=(t-a)/w;return x>0&&x<1?sin(PI*x)**2:0}
export default(c,t)=>{
  const e=bump(t,.2,.56),op=.42*bump(t,.3,.36),sw=.06*sin(T*t),bl=t>.86&&t<.92
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  c.strokeStyle=Y;c.lineWidth=6;c.lineCap='round'
  for(const x of[104,128])c.beginPath(),c.moveTo(x,190),c.lineTo(x-2,224),c.moveTo(x-14,226),c.lineTo(x+10,226),c.stroke()
  c.save();c.translate(70,140);c.rotate(sw-.1*e)
  c.strokeStyle=G;c.lineCap='round'
  for(const[w,a,b,x,y]of[[14,-20,-90,-48,-30],[12,-34,-70,-56,-6],[11,-40,-40,-50,14]])c.lineWidth=w,c.beginPath(),c.moveTo(0,0),c.quadraticCurveTo(a,b,x,y),c.stroke()
  c.restore()
  fill(B,()=>c.ellipse(108,152,58,44,.1,0,T))
  fill(B,()=>c.arc(150+6*e,144-4*e,36*(1+.14*e),0,T))
  fill(L,()=>c.ellipse(100,148,38,22,.25-.2*e,0,T))
  c.save();c.translate(150,140);c.rotate(-.42*e)
  c.strokeStyle=B;c.lineWidth=40;c.lineCap='round';c.beginPath();c.moveTo(0,0);c.lineTo(14,-46);c.stroke()
  fill(B,()=>c.arc(18,-56,24,0,T))
  for(const[x,y]of[[4,-80],[17,-84],[30,-78]])fill(R,()=>c.arc(x,y,9,0,T))
  fill(R,()=>c.ellipse(38,-30,7,11,0,0,T))
  for(const d of[-1,1]){c.save();c.translate(38,-54);c.rotate(d*op);fill(Y,()=>{c.moveTo(0,d*7*(d>0)-(d<0)*7);c.lineTo(18,d*2);c.lineTo(0,0);c.closePath()});c.restore()}
  c.fillStyle=c.strokeStyle=D
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(26,-62,4.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(26,-60,4.5,0,T),c.fill()
  if(op>.15){c.strokeStyle=B;c.lineWidth=4;for(const a of[-.6,-.15,.3])c.beginPath(),c.moveTo(62+10*cos(a),-54+10*sin(a)),c.lineTo(62+24*cos(a),-54+24*sin(a)),c.stroke()}
  c.restore()
}
