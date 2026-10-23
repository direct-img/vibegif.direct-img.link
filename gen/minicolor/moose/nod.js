// moose facing you with big flat antlers, slowly nodding, an ear flick and a blink
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=90
const B='#b07d55',L='#d9b38c',A='#ecd3a5',D='#2b2633'
export default(c,t)=>{
  const n=(1-cos(T*t))/2,fl=t>.6&&t<.66?.4:0,bl=t>.82&&t<.88
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  const line=(col,lw,f)=>{c.strokeStyle=col;c.lineWidth=lw;c.beginPath();f();c.stroke()}
  for(const x of[100,156])line(B,13,()=>{c.moveTo(x,170);c.lineTo(x,218)})
  fill(B,()=>c.ellipse(128,166,60,34,0,0,T))
  for(const x of[108,148])line(B,15,()=>{c.moveTo(x,180);c.lineTo(x,222)})
  c.save();c.translate(128,140);c.scale(1,1-.05*n);c.translate(-128,-140+9*n)
  for(const d of[-1,1]){
    c.save();c.translate(128,0);c.scale(d,1);c.translate(-128,0)
    line(A,11,()=>{c.moveTo(146,88);c.quadraticCurveTo(160,86,170,78)})
    fill(A,()=>c.ellipse(190,64,32,17,-.45,0,T))
    for(const[x,y]of[[170,48],[184,38],[199,32],[214,32],[224,44]])fill(A,()=>c.arc(x,y,6.5,0,T))
    c.save();c.translate(156,100);c.rotate(.3+(d>0?fl:0))
    fill(B,()=>c.ellipse(14,0,16,7,0,0,T));c.restore();c.restore()
  }
  fill(B,()=>c.ellipse(128,100,26,24,0,0,T))
  fill(L,()=>c.ellipse(128,142,22,25,0,0,T))
  c.fillStyle=c.strokeStyle=D
  for(const d of[-1,1])if(bl)c.lineWidth=4,c.beginPath(),c.arc(128+d*15,96,4.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*15,98,4.5,0,T),c.fill()
  for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*8,154,3.5,5,d*.3,0,T),c.fill()
  c.restore()
}
