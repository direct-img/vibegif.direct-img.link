// pika: a round little rock rabbit sits tight, then rears up with ears perked and mouth wide, sound lines popping out as it squeaks
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const q=t>.35&&t<.75?sin(PI*(t-.35)/.4):0,bl=t>.12&&t<.18
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.translate(128,222);c.scale(1.1-.05*q,1.1+.08*q);c.translate(-128,-222)
  for(const x of[106,150])shape(()=>c.ellipse(x,214,16,8,0,0,T))
  shape(()=>c.ellipse(128,170,60,46,0,0,T))
  const hy=120-8*q
  for(const d of[-1,1])shape(()=>c.arc(128+d*(36+4*q),hy-34-4*q,18,0,T))
  shape(()=>c.ellipse(128,hy,48,40,0,0,T))
  c.fillStyle=c.strokeStyle='#111'
  for(const d of[-1,1])c.lineWidth=3,c.beginPath(),c.arc(128+d*(36+4*q),hy-34-4*q,9,PI+.3,-.3),c.stroke()
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(128+d*18,hy-6,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*18,hy-4,5.5,0,T),c.fill()
  c.beginPath();c.ellipse(128,hy+7,4,3,0,0,T);c.fill()
  c.lineWidth=3
  if(q>.15)c.beginPath(),c.ellipse(128,hy+18,4+3*q,7*q,0,0,T),c.fill()
  else c.beginPath(),c.moveTo(128,hy+9),c.quadraticCurveTo(124,hy+16,119,hy+14),c.moveTo(128,hy+9),c.quadraticCurveTo(132,hy+16,137,hy+14),c.stroke()
  for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*24,hy+10),c.lineTo(128+d*40,hy+8),c.moveTo(128+d*24,hy+15),c.lineTo(128+d*38,hy+18),c.stroke()
  c.lineWidth=3;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*14,206),c.quadraticCurveTo(128+d*12,196,128+d*6,192),c.stroke()
  if(q>.05){
    c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
    for(const d of[-1,1])for(const a of[-.5,0,.5]){
      const r0=62+10*q,r1=r0+16*q,A=(d<0?PI:0)-d*a
      c.beginPath();c.moveTo(128+r0*cos(A),hy+r0*sin(A)*.8);c.lineTo(128+r1*cos(A),hy+r1*sin(A)*.8);c.stroke()
    }
  }
}
