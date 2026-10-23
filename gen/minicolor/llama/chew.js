// fluffy llama standing side-on in a little blanket, chewing away, one ear twitches, blinks
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80
const B='#d6a77a',L='#efd5bd',A='#2ec4b6',D='#2b2633'
export default(c,t)=>{
  const j=sin(T*t*4),s=sin(T*t),tw=t>.46&&t<.56?-.45:0,bl=t>.8&&t<.86,hy=1.5*s
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  const line=(col,lw,f)=>{c.strokeStyle=col;c.lineWidth=lw;c.beginPath();f();c.stroke()}
  for(const[x,o]of[[76,4],[94,0],[132,4],[150,0]])line(B,14,()=>{c.moveTo(x,160);c.lineTo(x+o*.5,222)})
  fill(B,()=>c.arc(48,134,12,0,T))
  fill(B,()=>c.ellipse(108,150,58,30,0,0,T))
  for(let x=62;x<=156;x+=16)fill(B,()=>c.arc(x,126+(x%32?2:0),13,0,T))
  for(let y=164;y<=178;y+=14)fill(B,()=>c.arc(56+(y-164)*.4,y,11,0,T))
  line(B,30,()=>{c.moveTo(150,140);c.lineTo(166,72+hy)})
  for(let y=86;y<=130;y+=15)fill(B,()=>c.arc(178-(y-86)*.25,y+hy*(130-y)/44,10,0,T))
  fill(A,()=>c.roundRect(84,114,50,34,8))
  for(const[x,r]of[[166,-.35+tw],[180,.05]])fill(B,()=>c.ellipse(x,34+hy,6,16,r,0,T))
  fill(B,()=>c.ellipse(180,64+hy,24,17,0,0,T))
  fill(B,()=>c.ellipse(200,72+hy,15,11,0,0,T))
  fill(L,()=>c.ellipse(199+2*cos(T*t*4),80+hy+1.5*j,12,6,0,0,T))
  fill(L,()=>{c.arc(170,50+hy,9,0,T);c.arc(182,46+hy,9,0,T)})
  c.fillStyle=c.strokeStyle=D
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(186,60+hy,4.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(186,62+hy,4.5,0,T),c.fill()
  c.beginPath();c.ellipse(209,68+hy,2.5,3,0,0,T);c.fill()
}
