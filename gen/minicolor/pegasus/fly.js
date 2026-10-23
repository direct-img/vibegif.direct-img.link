// pegasus flying in place: two slow wing beats per loop, legs tucked, mane and tail streaming, blinks
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=80
const B='#4ea8de',L='#a7d4ef',A='#ff85a8',D='#2b2633'
export default(c,t)=>{
  const f=sin(2*T*t),w=-.52+.66*f,bl=t>.7&&t<.76
  const fill=(col,g)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();g();c.fill();c.stroke()}
  const line=(col,lw,g)=>{c.strokeStyle=col;c.lineWidth=lw;c.beginPath();g();c.stroke()}
  const wing=(x,y,r,col)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(.82,.82);fill(col,()=>{
    c.moveTo(14,4);c.quadraticCurveTo(24,-46,-12,-86);c.quadraticCurveTo(-30,-80,-30,-64)
    c.quadraticCurveTo(-44,-56,-38,-40);c.quadraticCurveTo(-46,-26,-34,-14);c.quadraticCurveTo(-30,4,-14,4)});c.restore()}
  c.translate(8,-7*sin(2*T*t+1.2))
  wing(116,110,w-.14,B)
  // tail: a tube along a curve that ripples, fuller toward the end
  const ty=152+8*sin(2*T*t-1)
  for(let s=0;s<=1;s+=.02){const u=1-s,x=u*u*u*76+3*u*u*s*56+3*u*s*s*44+s*s*s*24,y=u*u*u*134+3*u*u*s*(124+5*f)+3*u*s*s*(150-6*f)+s*s*s*ty
    c.fillStyle=A;c.beginPath();c.arc(x,y,5+5*sin(PI*s*.8),0,T);c.fill()}
  for(const[x,k]of[[138,0],[156,1]])line(B,11,()=>{c.moveTo(x,150);c.quadraticCurveTo(x+16+6*k,166+3*f,x+4+8*k,186+2*f-6*k)})
  for(const x of[84,94])line(B,11,()=>{c.moveTo(x,150);c.quadraticCurveTo(x-10,172,x-26,178-3*f)})
  // mane scallops peek out along the back of the neck
  for(let i=0;i<5;i++){const s=.15+.22*i,o=14+3*sin(2*T*t-i*.9);fill(A,()=>c.arc(146+30*s-.81*o,138-42*s-.58*o,9,0,T))}
  line(B,32,()=>{c.moveTo(146,138);c.lineTo(176,96)})
  fill(B,()=>c.ellipse(118,140,50,27,0,0,T))
  fill(B,()=>c.ellipse(190,98,24,15,.55,0,T))
  fill(B,()=>{c.moveTo(174,86);c.lineTo(178,62);c.lineTo(188,82)})
  wing(126,114,w,L)
  c.fillStyle=c.strokeStyle=D
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(187,90,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(187,92,4.5,0,T),c.fill()
}
