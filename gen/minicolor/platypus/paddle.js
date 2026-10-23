// platypus swimming along: duck bill, flat beaver tail beating up and down, webbed feet paddling in turn
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80
const B='#b5835a',L='#dcc0a6',A='#8a94a6',D='#2b2633'
export default(c,t)=>{
  const s=sin(T*t),bl=t>.55&&t<.62,fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  c.translate(128,124+5*s);c.rotate(.04*sin(T*t+1));c.translate(-124,-128)
  for(const[x,ph]of[[92,0],[150,PI]]){c.save();c.translate(x,150);c.rotate(.5*sin(T*t*2+ph))
    fill(A,()=>{c.moveTo(-4,0);c.lineTo(-14,26);c.quadraticCurveTo(0,34,14,26);c.lineTo(4,0)});c.restore()}
  c.save();c.translate(66,130);c.rotate(.25*sin(T*t*2-1));fill(B,()=>c.ellipse(-22,0,26,14,0,0,T));c.restore()
  fill(B,()=>c.ellipse(122,128,64,34,0,0,T))
  fill(L,()=>c.ellipse(126,150,40,9,0,0,T))
  fill(A,()=>c.ellipse(204,134,26,11,.08,0,T))
  c.fillStyle=c.strokeStyle=D;c.beginPath();c.arc(218,129,2,0,T);c.fill()
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(174,114,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(174,116,5,0,T),c.fill()
}
