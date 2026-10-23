// lemon-duck floating: a lemon-shaped duck bobbing and rocking over two ripples, the leaf on its head twitching
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=85
const B='#f4c03e',L='#f9e09e',O='#ff9f43',G='#8cc084',W='#4ea8de',D='#2b2633'
export default(c,t)=>{
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  const bl=t>.6&&t<.66
  c.save();c.translate(122,150+5*sin(T*t));c.rotate(.05*sin(T*t+1.2));c.translate(-122,-150)
  c.save();c.translate(166,74);c.rotate(.25*sin(T*t*2));fill(G,()=>c.ellipse(13,-6,15,7,-.4,0,T))
  c.lineWidth=5;c.lineCap='round';c.beginPath();c.moveTo(0,4);c.lineTo(2,-4);c.stroke();c.restore()
  fill(B,()=>{c.moveTo(60,134);c.lineTo(34,124);c.lineTo(56,158)})
  fill(B,()=>c.ellipse(122,152,72,42,0,0,T))
  fill(B,()=>c.arc(166,106,33,0,T))
  // wing is a lemon slice: pale half-wheel with segment lines
  c.save();c.translate(112,140);c.rotate(-.12+.1*sin(T*t*2));fill(L,()=>{c.arc(0,0,27,0,PI);c.closePath()})
  c.strokeStyle=B;c.lineWidth=4;c.lineCap='round';c.beginPath();c.arc(0,0,19,.04*PI,.96*PI);c.stroke()
  for(const a of[.25,.5,.75])c.beginPath(),c.moveTo(0,2),c.lineTo(19*cos(a*PI),19*sin(a*PI)),c.stroke()
  c.restore()
  fill(O,()=>c.ellipse(199,114,15,8,.12,0,T))
  c.fillStyle=c.strokeStyle=D
  if(bl)c.lineWidth=4,c.beginPath(),c.arc(174,98,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(174,100,5.5,0,T),c.fill()
  c.restore()
  c.strokeStyle=W;c.lineWidth=5;c.lineCap='round'
  for(const[x0,x1,y,k]of[[44,204,198,0],[84,170,212,2]]){
    c.beginPath();for(let x=x0;x<=x1;x+=4)c.lineTo(x,y+3*sin(x/10-T*t+k));c.stroke()
  }
}
