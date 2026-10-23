// cockatiel bobbing its crest: grey body, yellow head with orange cheeks, head tilting side to side, blinks
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=80
const B='#8a94a6',L='#c5cad3',Y='#f4c03e',O='#ff9f43',D='#2b2633'
export default(c,t)=>{
  const s=sin(T*t),tl=.12*s,cr=.22*sin(T*t-1.3)+.12*sin(2*T*t),br=1+.02*sin(2*T*t),bl=t>.42&&t<.48
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  fill(B,()=>{c.moveTo(116,196);c.lineTo(140,196);c.lineTo(134,238);c.lineTo(122,238);c.closePath()})
  for(const d of[-1,1])fill(L,()=>c.ellipse(128+d*18,220,11,6,0,0,T))
  fill(B,()=>c.ellipse(128,162,50*br,56,0,0,T))
  for(const d of[-1,1])fill(L,()=>c.ellipse(128+d*36,150,8,22,d*.2,0,T))
  c.save();c.translate(128,124);c.rotate(tl)
  c.strokeStyle=Y;c.lineCap='round'
  for(const[a,l,w]of[[-.3,30,8],[0,42,10],[.3,34,8]]){
    c.save();c.translate(a*20,-58);c.rotate(a+cr*(1+a));c.lineWidth=w
    c.beginPath();c.moveTo(0,4);c.quadraticCurveTo(-8,-l*.7,6,-l);c.stroke();c.restore()
  }
  fill(Y,()=>c.arc(0,-28,36,0,T))
  for(const d of[-1,1])fill(O,()=>c.arc(d*21,-16,9,0,T))
  c.fillStyle=c.strokeStyle=D
  for(const d of[-1,1])if(bl)c.lineWidth=4,c.beginPath(),c.arc(d*14,-34,5.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(d*14,-32,5.5,0,T),c.fill()
  fill(L,()=>{c.moveTo(-7,-22);c.lineTo(7,-22);c.lineTo(0,-11);c.closePath()})
  c.restore()
}
