// pelican scooping: dips its long bill, comes up with a full pouch, tips back and gulps (a lump slides down the neck)
const{sin,PI,max,min}=Math,T=2*PI
export const frames=24,delay=85
const B='#7b8cff',L='#c3cbff',Y='#f4c03e',D='#2b2633'
const sm=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
export default(c,t)=>{
  const dip=sm(t/.18)-sm((t-.24)/.16),up=sm((t-.42)/.1)-sm((t-.66)/.14),r=.55*dip-.3*up
  const p=sm((t-.2)/.1)*(1-sm((t-.5)/.12)),lump=(t-.5)/.22,bl=t>.84&&t<.9
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  for(const x of[92,114])fill(Y,()=>{c.moveTo(x,196);c.lineTo(x+2,222);c.lineTo(x+14,224)})
  fill(B,()=>{c.moveTo(56,150);c.lineTo(28,140);c.lineTo(40,166);c.closePath()})
  // neck goes behind the body, head and bill on top
  const head=()=>{c.translate(124,138);c.rotate(r)}
  c.save();head();c.strokeStyle=B;c.lineWidth=28;c.lineCap='round'
  c.beginPath();c.moveTo(-6,28);c.quadraticCurveTo(-10,-24,20,-62);c.stroke();c.restore()
  fill(B,()=>c.ellipse(100,164,60,44,-.05,0,T))
  fill(L,()=>c.ellipse(92,156,40,22,-.12,0,T))
  c.save();head()
  if(lump>0&&lump<1){const q=1-lump;fill(B,()=>c.arc(-4+24*q*q,-6-52*q,19,0,T))}
  fill(B,()=>c.arc(22,-66,22,0,T))
  fill(Y,()=>{c.moveTo(38,-74);c.lineTo(100,-56);c.quadraticCurveTo(108,-52,102,-46);c.lineTo(38,-60);c.closePath()})
  fill(Y,()=>{c.moveTo(40,-58);c.lineTo(98,-46);c.quadraticCurveTo(76,-40+46*p,42,-40+12*p);c.closePath()})
  c.fillStyle=c.strokeStyle=D
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(26,-72,4.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(26,-70,4.5,0,T),c.fill()
  c.restore()
}
