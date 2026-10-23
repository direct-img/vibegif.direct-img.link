// cupcake-shell snail sliding along: its foot stretches and gathers, eye stalks wobble, the cherry on top jiggles
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80
const B='#c9a27e',L='#ead7c3',P='#ff85a8',R='#ee5a5a',D='#2b2633'
export default(c,t)=>{
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  const e=sin(T*t),hx=196+8*e,bl=t>.55&&t<.61
  c.translate(-4,0)
  fill(B,()=>c.roundRect(40,184,hx-22,22,11))
  c.strokeStyle=B;c.lineCap='round'
  for(const[x,y,k]of[[-8,98,0],[14,100,1.5]])c.lineWidth=6,c.beginPath(),c.moveTo(hx,134),c.lineTo(hx+x+4*sin(T*t*2+k),y+3*cos(T*t*2+k)),c.stroke()
  c.lineWidth=36;c.beginPath();c.moveTo(hx-22,190);c.lineTo(hx,144);c.stroke()
  c.fillStyle=c.strokeStyle=D
  for(const[x,y,k]of[[-8,98,0],[14,100,1.5]]){const ex=hx+x+4*sin(T*t*2+k),ey=y+3*cos(T*t*2+k)
    if(bl)c.lineWidth=3.5,c.beginPath(),c.moveTo(ex-5,ey),c.lineTo(ex+5,ey),c.stroke()
    else c.beginPath(),c.arc(ex,ey,5.5,0,T),c.fill()}
  c.lineWidth=3.5;c.beginPath();c.arc(hx+6,150,6,.1*PI,.7*PI);c.stroke()
  const sy=2*sin(T*t-.8),j=k=>2.5*sin(T*t*2-k)
  c.translate(0,sy)
  fill(L,()=>{c.moveTo(78,186);c.lineTo(140,186);c.lineTo(152,138);c.lineTo(66,138);c.closePath()})
  c.strokeStyle=B;c.lineWidth=4
  for(const[a,b]of[[92,84],[109,109],[126,134]])c.beginPath(),c.moveTo(a,182),c.lineTo(b,142),c.stroke()
  fill(P,()=>c.ellipse(109,132,50,15,0,0,T))
  fill(P,()=>c.ellipse(109+j(1),113,38,14,0,0,T))
  fill(P,()=>c.ellipse(109+j(2),96,25,12,0,0,T))
  fill(P,()=>{c.moveTo(97+j(3),90);c.quadraticCurveTo(108+j(3),68,120+j(3),88)})
  c.strokeStyle=B;c.lineWidth=4;c.beginPath();c.moveTo(111+j(4),58);c.quadraticCurveTo(114+j(4),46,124+j(4),40);c.stroke()
  fill(R,()=>c.arc(110+j(4),66,10,0,T))
}
