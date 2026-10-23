// walrus sitting up: tusks and a whiskery muzzle, flopping both front flippers, head bobbing, a slow blink
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=80
const B='#c9a27e',L='#e6d3bf',W='#fff',D='#2b2633'
export default(c,t)=>{
  const f=sin(T*t*2),h=3*sin(T*t*2-1),bl=t>.7&&t<.78,fill=(col,g)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();g();c.fill();c.stroke()}
  for(const d of[-1,1])fill(B,()=>c.ellipse(128+d*40,212,26,9,d*.15,0,T))
  for(const d of[-1,1]){c.save();c.translate(128+d*60,170);c.rotate(-d*(.35+.4*f));fill(B,()=>c.ellipse(d*22,8,14,30,-d*.7,0,T));c.restore()}
  fill(B,()=>c.ellipse(128,162,70,52,0,0,T))
  c.translate(0,h)
  fill(B,()=>c.ellipse(128,108,52,44,0,0,T))
  for(const d of[-1,1])fill(W,()=>{c.moveTo(128+d*8,132);c.quadraticCurveTo(128+d*12,160,128+d*16,178);c.quadraticCurveTo(128+d*22,156,128+d*22,130)})
  for(const d of[-1,1])fill(L,()=>c.arc(128+d*15,124,17,0,T))
  c.fillStyle=c.strokeStyle=D;c.beginPath();c.ellipse(128,109,7,5,0,0,T);c.fill()
  for(const d of[-1,1])for(const[x,y]of[[9,123],[17,129],[22,120]])c.beginPath(),c.arc(128+d*x,y,2,0,T),c.fill()
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(128+d*22,90,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*22,92,5,0,T),c.fill()
}
