// goose honking: long neck stretches up and forward, beak honks twice, tail wags while it waits
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=80
const B='#4ea8de',L='#a7d4ef',O='#ff9f43',D='#2b2633'
export default(c,t)=>{
  const u=(t-.25)/.5,on=u>0&&u<1,e=on?sin(PI*u)**2:0,op=on?.42*max(0,sin(4*PI*u))*e:0,bl=t>.86&&t<.92
  const hx=168+18*e,hy=80-30*e,tw=on?0:.12*sin(4*PI*t)
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  c.strokeStyle=O;c.lineWidth=6
  for(const x of[98,124])c.beginPath(),c.moveTo(x,200),c.lineTo(x,226),c.stroke(),fill(O,()=>c.ellipse(x+6,228,10,4,0,0,T))
  c.save();c.translate(52,160);c.rotate(tw);fill(B,()=>{c.moveTo(14,-14);c.lineTo(-30,-26);c.lineTo(-24,-12);c.lineTo(14,12);c.closePath()});c.restore()
  fill(B,()=>c.ellipse(108,168,66,40,-.06,0,T))
  fill(L,()=>c.ellipse(100,160,44,22,-.16,0,T))
  c.strokeStyle=B;c.lineWidth=26;c.lineCap='round'
  c.beginPath();c.moveTo(150,158);c.quadraticCurveTo(160+6*e,120-12*e,hx,hy);c.stroke()
  fill(B,()=>c.arc(hx,hy,20,0,T))
  for(const d of[-1,1]){
    c.save();c.translate(hx+16,hy+3);c.rotate(d*op)
    fill(O,()=>{c.moveTo(0,-7*(d<0)-1);c.lineTo(22,d*2);c.lineTo(0,d>0?7:1);c.closePath()});c.restore()
  }
  c.fillStyle=c.strokeStyle=D
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(hx+4,hy-7,4.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(hx+4,hy-5,4.5,0,T),c.fill()
  if(op>.15){
    c.strokeStyle=O;c.lineWidth=4;c.lineCap='round'
    for(const[a,r]of[[-.5,14],[0,18],[.5,14]])c.beginPath(),c.moveTo(hx+44+8*cos(a),hy+2+8*sin(a)),c.lineTo(hx+44+r*cos(a)+6,hy+2+r*sin(a)),c.stroke()
  }
}
