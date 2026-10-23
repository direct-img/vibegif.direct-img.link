// robin singing: red breast puffs out, head tips up, beak chirps three times and little notes float off
const{sin,PI,abs,max,min}=Math,T=2*PI
export const frames=24,delay=80
const B='#c9a27e',R='#ff7a5c',Y='#f4c03e',D='#2b2633'
export default(c,t)=>{
  const u=(t-.05)/.6,on=u>0&&u<1,e=on?sin(PI*u):0,op=on?.32*abs(sin(3*PI*u)):0,bl=t>.8&&t<.86
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  c.translate(0,3*sin(T*t))
  c.strokeStyle=B;c.lineWidth=5
  for(const[x,y]of[[112,196],[136,196]])c.beginPath(),c.moveTo(x,y),c.lineTo(x-2,224),c.moveTo(x-12,226),c.lineTo(x+8,226),c.stroke()
  fill(B,()=>{c.moveTo(74,150);c.lineTo(24,120);c.lineTo(32,102);c.lineTo(86,128);c.closePath()})
  c.save();c.translate(150,130);c.rotate(-.18*e);c.translate(-150,-130)
  const body=()=>{c.moveTo(184,150);c.ellipse(122,150,62*(1+.05*e),52,0,0,T);c.moveTo(206,104);c.arc(170,104,36,0,T)}
  fill(B,body)
  c.save();c.beginPath();body();c.clip();c.fillStyle=R;c.beginPath();c.ellipse(170,146,40*(1+.15*e),48*(1+.1*e),0,0,T);c.fill();c.restore()
  c.fillStyle=c.strokeStyle=D
  if(bl)c.lineWidth=4,c.beginPath(),c.arc(180,94,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(180,96,5,0,T),c.fill()
  for(const d of[-1,1]){
    c.save();c.translate(202,104);c.rotate(d*op);c.fillStyle=c.strokeStyle=Y;c.beginPath()
    c.moveTo(0,0);c.lineTo(0,d*6);c.lineTo(22,d*1.5);c.closePath();c.lineWidth=3;c.fill();c.stroke();c.restore()
  }
  c.restore()
  for(const k of[0,1]){
    const q=(t-.12-k*.22)/.4;if(q<0||q>1)continue
    const x=214-10*q+k*8,y=78-56*q,z=min(1,4*min(q,1-q))
    c.save();c.translate(x,y);c.scale(z,z);c.fillStyle=c.strokeStyle=R;c.lineWidth=3
    c.beginPath();c.ellipse(0,0,6,4.5,-.4,0,T);c.fill()
    c.beginPath();c.moveTo(5,-2);c.lineTo(5,-20);c.quadraticCurveTo(12,-16,13,-10);c.stroke();c.restore()
  }
}
