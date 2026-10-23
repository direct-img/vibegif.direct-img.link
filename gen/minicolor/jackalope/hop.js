// jackalope hopping in place: little antlers, ears trailing the hop, stretched in the air, squashed on landing
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=75
const B='#c9a27e',L='#ead8c4',A='#8f6b4c',D='#2b2633'
export default(c,t)=>{
  const air=t<.5,u=t/.5,h=air?38*sin(PI*u):0,v=air?cos(PI*u):0,sq=t>.5&&t<.66?sin(PI*(t-.5)/.16):0,bl=t>.84&&t<.9
  const fill=(col,g)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();g();c.fill();c.stroke()}
  const line=(col,lw,g)=>{c.strokeStyle=col;c.lineWidth=lw;c.beginPath();g();c.stroke()}
  c.translate(126,214-h);c.scale(1.15*(1+.07*sq),1.15*(1-.09*sq));c.rotate(air?-.22*v:0)
  const ear=(x,col,lag)=>{c.save();c.translate(x,-92);c.rotate(-.95-.3*v+.2*sq+lag);fill(col,()=>c.ellipse(0,-24,10,26,0,0,T))
    if(col==B)fill(L,()=>c.ellipse(0,-22,4,17,0,0,T));c.restore()}
  ear(30,A,.12)
  for(const x of[36,46])line(A,5,()=>{c.moveTo(x,-92);c.quadraticCurveTo(x+6,-108,x+2,-122);c.moveTo(x+3,-106);c.lineTo(x+13,-114)})
  fill(B,()=>c.ellipse(-36,air?-12+6*v:-6,air?18:22,8,air?.5*v:0,0,T))
  fill(B,()=>c.arc(-28,-32,24,0,T))
  fill(B,()=>c.ellipse(-6,-42,48,30,-.1,0,T))
  fill(L,()=>c.arc(-56,-50,10,0,T))
  const px=air?38+3*v:30,py=air?-18:-8
  line(B,12,()=>{c.moveTo(22,-32);c.lineTo(px-2,py)});fill(B,()=>c.ellipse(px,py,10,7,0,0,T))
  fill(B,()=>c.arc(40,-70,26,0,T))
  ear(38,B,0)
  c.fillStyle=c.strokeStyle=D
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(48,-74,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(48,-72,4.5,0,T),c.fill()
  c.beginPath();c.arc(65,-62,3,0,T);c.fill()
}
