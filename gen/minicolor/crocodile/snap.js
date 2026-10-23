// crocodile lying low: knobbly back, eyes on top of its head, jaws creak open then snap shut, tail swaying
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=32,delay=70
const B='#8cc084',L='#c5e0c1',W='#fff',A='#ff85a8',D='#2b2633'
const e=x=>(x=min(1,max(0,x)),x*x*(3-2*x))
export default(c,t)=>{
  const j=.42*e((t-.1)/.3)*(1-e((t-.46)/.05))+.2*e((t-.62)/.06)*(1-e((t-.72)/.04)),bl=t>.85&&t<.91
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  c.translate(128,128+2*sin(T*t));c.scale(.92,.92);c.translate(-121,-150)
  c.save();c.translate(70,150);c.rotate(.1*sin(T*t))
  fill(B,()=>{c.moveTo(6,-18);c.quadraticCurveTo(-30,-14,-56,-2);c.lineTo(-58,2);c.quadraticCurveTo(-30,6,6,14)})
  for(const x of[-12,-28,-42])fill(B,()=>c.arc(x,-12+(x+42)*-.12+2,4.5,0,T))
  c.restore()
  for(const x of[92,146])fill(B,()=>{c.moveTo(x-9,160);c.lineTo(x-10,184);c.lineTo(x+8,186);c.lineTo(x+9,160)})
  fill(B,()=>c.ellipse(112,150,56,22,0,0,T))
  for(const x of[78,96,114,132])fill(B,()=>c.arc(x,130,7,0,T))
  fill(L,()=>c.ellipse(114,162,40,6,0,0,T))
  const r=(l,a)=>[156+l*cos(a),150+l*sin(a)]
  if(j>.01)fill(A,()=>{c.moveTo(158,150);c.lineTo(...r(58,-j*.35));c.lineTo(...r(56,j));c.closePath()})
  c.save();c.translate(156,150);c.rotate(j)
  fill(B,()=>{c.moveTo(-8,-2);c.lineTo(66,-2);c.quadraticCurveTo(74,2,66,8);c.lineTo(-8,12)})
  c.fillStyle=c.strokeStyle=W;c.lineWidth=2;c.lineJoin='round'
  for(const x of[18,32,46,58])c.beginPath(),c.moveTo(x-4,-1),c.lineTo(x,-8),c.lineTo(x+4,-1),c.closePath(),c.fill(),c.stroke()
  c.restore()
  c.save();c.translate(156,150);c.rotate(-j*.35)
  fill(B,()=>{c.moveTo(-14,4);c.lineTo(-14,-20);c.quadraticCurveTo(0,-30,20,-24);c.lineTo(66,-12);c.quadraticCurveTo(78,-8,74,0);c.lineTo(-14,2)})
  fill(B,()=>c.arc(10,-26,11,0,T));fill(B,()=>c.arc(66,-14,6,0,T))
  c.fillStyle=c.strokeStyle=W;c.lineWidth=2
  for(const x of[24,38,52,64])c.beginPath(),c.moveTo(x-4,1),c.lineTo(x,8),c.lineTo(x+4,1),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=c.strokeStyle=D
  if(bl)c.lineWidth=3,c.beginPath(),c.moveTo(6,-28),c.lineTo(16,-28),c.stroke()
  else c.beginPath(),c.arc(12,-28,4.5,0,T),c.fill()
  c.beginPath();c.arc(68,-17,2,0,T);c.fill()
  c.restore()
}
