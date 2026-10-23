// bee-cat hovering: a striped cat body with buzzing wings, its tail curling and swaying, blinking
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=70
const B='#f4c03e',L='#f9e09e',A='#5b4a3f',W='#a7d4ef',D='#2b2633'
export default(c,t)=>{
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  const wing=(r,s)=>{c.save();c.translate(118,104);c.rotate(r);fill(W,()=>c.ellipse(-4,-30,15*s,30,0,0,T));c.restore()}
  const bl=t>.5&&t<.56,bz=sin(T*t*6)
  c.translate(128,134+7*sin(T*t));c.rotate(.04*sin(T*t+1));c.translate(-128,-128)
  c.lineCap='round';c.strokeStyle=B;c.lineWidth=13;c.beginPath();c.moveTo(70,150)
  c.bezierCurveTo(38,160,26,128,40+5*sin(T*t-1),104+4*cos(T*t-1));c.stroke()
  wing(-.75+.35*bz,.9)
  fill(B,()=>c.ellipse(104,142,56,42,-.1,0,T))
  c.save();c.beginPath();c.ellipse(104,142,50,36,-.1,0,T);c.clip();c.translate(104,142);c.rotate(-.1)
  c.fillStyle=A;c.fillRect(-26,-50,14,100);c.fillRect(4,-50,14,100);c.restore()
  for(const[x,r]of[[150,-.35],[190,.35]]){
    c.save();c.translate(x,88);c.rotate(r);fill(B,()=>{c.moveTo(-14,8);c.lineTo(0,-22);c.lineTo(14,8)})
    fill(L,()=>{c.moveTo(-5,5);c.lineTo(0,-8);c.lineTo(5,5)});c.restore()
  }
  fill(B,()=>c.arc(170,120,38,0,T))
  wing(-.35+.35*bz,1)
  c.fillStyle=c.strokeStyle=D
  for(const x of[157,183])if(bl)c.lineWidth=4,c.beginPath(),c.arc(x,114,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(x,116,5.5,0,T),c.fill()
  c.lineWidth=3.5;for(const d of[-1,1])c.beginPath(),c.arc(170+d*4.5,126,4.5,.1*PI,.9*PI),c.stroke()
}
