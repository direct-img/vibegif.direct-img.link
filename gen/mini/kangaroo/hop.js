// kangaroo hopping in place: big hind feet push off, the tail swings up for balance, a joey peeks out of the pouch
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=75,rim=3
export default(c,t)=>{
  const air=t<.6,p=t/.6,h=air?30*sin(PI*p):0,sq=air?0:sin(PI*(t-.6)/.4),jb=-4*sin(T*t),bl=t>.82&&t<.88,tw=t>.66&&t<.74?.3:0
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=(x,y,r,f)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();f();c.fill();c.stroke();c.restore()}
  const line=(w,x0,y0,x1,y1)=>{c.lineWidth=w;c.beginPath();c.moveTo(x0,y0);c.lineTo(x1,y1);c.stroke();c.lineWidth=6}
  c.translate(128,214);c.scale(.92,.92);c.translate(-112,-214);c.translate(0,-h)
  shape(96,206,air?.5*sin(PI*p):0,()=>c.ellipse(26,0,30,7,0,0,T))
  line(16,110,186+8*sq,98,204)
  c.translate(0,8*sq);c.translate(116,176);c.rotate(air?.12*sin(PI*p):-.05*sq);c.translate(-116,-176)
  shape(102,184,air?.3*sin(PI*p):.08*sq,()=>{c.moveTo(4,-12);c.quadraticCurveTo(-40,0,-78,22);c.quadraticCurveTo(-40,12,4,12)})
  shape(116,168,-.3,()=>c.ellipse(0,0,32,36,0,0,T))
  shape(142,128,.4,()=>c.ellipse(0,0,32,48,0,0,T))
  line(18,154,96,168,76)
  shape(164,60,-.35,()=>c.ellipse(0,-10,6,15,0,0,T))
  shape(173,58,.05+tw,()=>c.ellipse(0,-10,6,15,0,0,T))
  shape(172,72,.15,()=>{c.ellipse(0,0,17,14,0,0,T);c.ellipse(16,6,13,8,.35,0,T)})
  line(9,162,118,178,134)
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(138,162);c.quadraticCurveTo(150,164,160,156);c.stroke();c.strokeStyle='#111';c.lineWidth=6
  shape(160,136+jb,-.4,()=>c.ellipse(0,-6,4,9,0,0,T))
  shape(166,147+jb,0,()=>{c.arc(0,0,10,0,T);c.ellipse(9,3,7,5,.3,0,T)})
  c.fillStyle=c.strokeStyle='#fff'
  c.beginPath();c.arc(169,144+jb,2.4,0,T);c.fill()
  if(bl)c.lineWidth=3,c.beginPath(),c.arc(178,66,4,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(178,68,3.4,0,T),c.fill()
}
