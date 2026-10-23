// fennec fox sitting with its tail wrapped round its feet, huge ears swivelling to listen, blinks
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80
const B='#efb36a',L='#fadcb8',A='#8c5a36',D='#2b2633'
export default(c,t)=>{
  const tw=t>.56&&t<.62?.22:0,el=-.55+.14*sin(T*t),er=.55+.14*sin(T*t+1.9)+tw,bl=t>.3&&t<.36,hr=.04*sin(T*t+.6)
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  c.translate(0,7)
  fill(B,()=>c.ellipse(128,172,38,44,0,0,T))
  fill(L,()=>c.ellipse(128,174,22,32,0,0,T))
  c.save();c.translate(128,128);c.rotate(hr);c.translate(-128,-128)
  for(const[x,r]of[[110,el],[146,er]]){
    c.save();c.translate(x,92);c.rotate(r)
    fill(B,()=>{c.moveTo(-19,4);c.quadraticCurveTo(-24,-52,0,-86);c.quadraticCurveTo(24,-52,19,4);c.closePath()})
    fill(L,()=>{c.moveTo(-9,-2);c.quadraticCurveTo(-12,-44,0,-68);c.quadraticCurveTo(12,-44,9,-2);c.closePath()});c.restore()
  }
  fill(B,()=>c.arc(128,108,32,0,T))
  fill(B,()=>{c.moveTo(98,112);c.quadraticCurveTo(110,134,128,142);c.quadraticCurveTo(146,134,158,112);c.closePath()})
  fill(L,()=>{c.moveTo(108,122);c.quadraticCurveTo(116,136,128,140);c.quadraticCurveTo(140,136,148,122);c.quadraticCurveTo(128,114,108,122)})
  c.fillStyle=c.strokeStyle=D
  for(const d of[-1,1])if(bl)c.lineWidth=4,c.beginPath(),c.arc(128+d*14,104,5.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.ellipse(128+d*14,107,5,6,0,0,T),c.fill()
  c.beginPath();c.ellipse(128,138,5,3.5,0,0,T);c.fill()
  c.restore()
  fill(B,()=>c.ellipse(140,210,52,13,0,0,T))
  fill(A,()=>c.ellipse(88,208,15,11,0,0,T))
}
