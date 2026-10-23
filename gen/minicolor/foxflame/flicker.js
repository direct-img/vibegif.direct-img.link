// fire-fox sitting still while it burns: ears, chest and tail are flames that flicker, embers drift off the tail tip
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80
const B='#ff9f43',A='#f4c03e',D='#2b2633'
export default(c,t)=>{
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  // teardrop flame standing on (x,y): round base of radius w, tip h up and leaning by lean
  const fl=(x,y,w,h,lean)=>{c.moveTo(x+lean,y-h);c.quadraticCurveTo(x+w*1.15,y-h*.45,x+w,y-w);c.arc(x,y-w,w,0,PI);c.quadraticCurveTo(x-w*1.15,y-h*.45,x+lean,y-h)}
  c.translate(-12,0)
  const f=k=>sin(T*t*2+k)*.7+sin(T*t*3+k*1.7)*.3,bl=t>.4&&t<.46
  for(let k=0;k<2;k++){const q=(t+k/2)%1;fill(A,()=>c.arc(206+10*sin(T*q+k*2)+q*8,78-56*q,4.5*(1-q),0,T))}
  fill(B,()=>fl(170,212,30,130+7*f(1),44+9*f(2)))
  fill(A,()=>fl(172,206,15,84+6*f(2.5),26+8*f(3)))
  for(const d of[-1,1])fill(B,()=>fl(118+d*22,84,13,52+5*f(d*2),d*12+5*f(d+4)))
  for(const d of[-1,1])fill(A,()=>fl(118+d*22,82,6,34+3*f(d*2),d*9+4*f(d+4)))
  fill(B,()=>fl(118,212,42,116,0))
  fill(A,()=>fl(118,208,19,62+5*f(4),4*f(5)))
  fill(B,()=>c.arc(118,106,36,0,T))
  for(const d of[-1,1])fill(B,()=>{c.moveTo(118+d*30,98);c.lineTo(118+d*48,122+3*f(d*3));c.lineTo(118+d*24,122)})
  fill(A,()=>c.ellipse(118,124,15,10,0,0,T))
  c.fillStyle=c.strokeStyle=D
  for(const d of[-1,1])if(bl)c.lineWidth=4,c.beginPath(),c.arc(118+d*15,102,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(118+d*15,104,5.5,0,T),c.fill()
  c.beginPath();c.ellipse(118,119,5,3.5,0,0,T);c.fill()
}
