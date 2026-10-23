// whale carrying a tiny island: it bobs, its palm leaves sway, its tail flicks and it puffs a spout now and then
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=85
const B='#4ea8de',L='#a7d4ef',S='#f4c03e',G='#8cc084',D='#2b2633'
export default(c,t)=>{
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  const shape=(x,y,r,col,f)=>{c.save();c.translate(x,y);c.rotate(r);fill(col,f);c.restore()}
  const k=sin(T*t-1.4),tx=210-4*k,ty=94-5*k,bl=t>.8&&t<.86,p=(t-.1)/.45,sw=.08*sin(T*t*2)
  c.translate(128,134+6*sin(T*t));c.rotate(-.03*cos(T*t));c.scale(.86,.86);c.translate(-132,-128)
  const body=()=>{c.moveTo(106,88);c.bezierCurveTo(60,86,30,114,32,148);c.bezierCurveTo(34,184,66,200,108,200)
    c.bezierCurveTo(158,200,204,180,212,136);c.quadraticCurveTo(tx+10,116,tx+7,ty);c.lineTo(tx-7,ty)
    c.quadraticCurveTo(tx-8,120,184,124);c.bezierCurveTo(172,100,144,88,106,88)}
  shape(tx,ty,.12-.2*k,B,()=>{c.moveTo(0,6);c.quadraticCurveTo(16,0,36,-22);c.quadraticCurveTo(16,-22,0,-8)
    c.quadraticCurveTo(-12,-20,-26,-20);c.quadraticCurveTo(-12,0,0,6)})
  fill(B,body)
  c.save();c.beginPath();body();c.clip();c.fillStyle=L;c.beginPath();c.ellipse(104,204,92,30,0,0,T);c.fill();c.restore()
  shape(110,192,.6+.35*sin(T*t-2),B,()=>c.ellipse(20,0,24,9,0,0,T))
  fill(S,()=>c.ellipse(126,94,36,15,0,PI,T))
  c.strokeStyle=S;c.lineWidth=8;c.lineCap='round';c.beginPath();c.moveTo(130,86);c.quadraticCurveTo(126+30*sw,58,142+60*sw,34);c.stroke()
  // palm crown: crescent fronds arching out and drooping
  c.save();c.translate(142+60*sw,34);c.rotate(sw*1.5)
  for(const[ex,ey]of[[-48,18],[-34,-12],[0,-24],[34,-12],[48,18]])fill(G,()=>{c.moveTo(0,0);c.quadraticCurveTo(ex*.5,ey*.5-(ey<0?6:18),ex,ey);c.quadraticCurveTo(ex*.5,ey*.5+(ey<0?6:-4),0,0)})
  c.restore()
  if(p>0&&p<1){
    const g=sin(PI*p),x=66,y=96,h=46*g,q=max(0,(p-.25)/.75)
    c.strokeStyle=L;c.lineWidth=10*g+2;c.beginPath();c.moveTo(x,y);c.lineTo(x,y-h);c.stroke()
    c.fillStyle=L;for(const d of[-1,1])c.beginPath(),c.arc(x+d*24*q,y-h-8+30*q*q,6*(1-.4*q),0,T),c.fill()
  }
  c.fillStyle=c.strokeStyle=D
  if(bl)c.lineWidth=4,c.beginPath(),c.arc(66,128,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(66,130,6,0,T),c.fill()
  c.lineWidth=3.5;c.beginPath();c.moveTo(40,160);c.quadraticCurveTo(50,168,62,166);c.stroke()
}
