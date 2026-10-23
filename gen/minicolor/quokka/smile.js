// round quokka doing a small happy hop on its long feet, then beaming with its big smile and squinting
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=24,delay=80
const B='#b88a64',L='#ddc3ab',P='#ff85a8',D='#2b2633'
export default(c,t)=>{
  const h=t<.32?20*sin(PI*t/.32):0,sq=t>.32&&t<.46?.08*sin(PI*(t-.32)/.14):0,g=max(0,min(1,(t-.42)/.12))*max(0,min(1,(.96-t)/.12))
  const y=-h
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  c.translate(128,214);c.scale(1+sq,1-sq);c.translate(-128,-214)
  c.strokeStyle=B;c.lineWidth=15;c.beginPath();c.moveTo(150,196+y);c.quadraticCurveTo(178,204,196,212+y*.6);c.stroke()
  for(const d of[-1,1])fill(B,()=>c.ellipse(128+d*22,211+y*.7,21,7,0,0,T))
  fill(B,()=>{c.moveTo(128,120+y);c.bezierCurveTo(166,120+y,178,170+y,172,190+y);c.bezierCurveTo(166,210+y,90,210+y,84,190+y);c.bezierCurveTo(78,170+y,90,120+y,128,120+y)})
  fill(L,()=>c.ellipse(128,180+y,26,26,0,0,T))
  for(const d of[-1,1])fill(B,()=>c.ellipse(128+d*11,144+y,6,10,d*.4,0,T))
  for(const d of[-1,1])fill(B,()=>c.arc(128+d*33,76+y,10,0,T)),fill(L,()=>c.arc(128+d*33,76+y,4.5,0,T))
  fill(B,()=>{c.moveTo(128,62+y);c.bezierCurveTo(158,62+y,170,82+y,168,98+y);c.bezierCurveTo(166,114+y,140,128+y,128,128+y);c.bezierCurveTo(116,128+y,90,114+y,88,98+y);c.bezierCurveTo(86,82+y,98,62+y,128,62+y)})
  c.fillStyle=c.strokeStyle=D
  for(const d of[-1,1])if(g>.5)c.lineWidth=4,c.beginPath(),c.arc(128+d*18,95+y,5,1.15*PI,1.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*18,91+y,4.5,0,T),c.fill()
  c.beginPath();c.ellipse(128,104+y,6.5,4.5,0,0,T);c.fill()
  const w=8+5*g,m=3+4*g
  c.beginPath();c.moveTo(128-w,113+y);c.quadraticCurveTo(128,113+y+m*2,128+w,113+y);c.quadraticCurveTo(128,115+y,128-w,113+y);c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(128-w,113+y);c.lineTo(128-w-3,110+y);c.moveTo(128+w,113+y);c.lineTo(128+w+3,110+y);c.stroke()
  if(g>.3)c.fillStyle=P,c.beginPath(),c.ellipse(128,114+y+m,4*g,2.5*g,0,0,T),c.fill()
}
