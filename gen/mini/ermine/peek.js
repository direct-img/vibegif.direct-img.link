// ermine in its winter coat: it pokes up out of a snow hole, sniffs, glances back over its shoulder, blinks, dips down for a moment and pops back up
const{sin,PI,min,max}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
const sm=x=>(x=min(1,max(0,x)))*x*(3-2*x)
export default(c,t)=>{
  const u=(t+.5)%1-.5,up=1-sm((u+.16)/.08)+sm((u+.04)/.08),bl=t>.26&&t<.3||t>.7&&t<.74
  const hd=t>.36&&t<.6?-1:1,hr=.12*sin(T*t*3),pw=sm((up-.7)/.3)
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  const mound=()=>{c.moveTo(24,224);c.bezierCurveTo(32,180,88,166,128,166);c.bezierCurveTo(168,166,224,180,232,224);c.closePath()}
  const seen=()=>{c.beginPath();c.rect(0,0,256,174);c.ellipse(128,174,38,11,0,0,T);c.clip()}
  const at=(h,f)=>{c.save();c.translate(128,174+172*(1-up));if(h)c.translate(0,-96),c.rotate(hr*hd),c.scale(hd,1);f();c.restore()}
  const parts=[[0,()=>{c.moveTo(-26,60);c.lineTo(-26,-40);c.bezierCurveTo(-26,-74,-18,-90,-6,-98);c.lineTo(14,-90);c.bezierCurveTo(16,-70,28,-50,26,-20);c.lineTo(26,60)}],
    [1,()=>c.arc(-2,-27,7,0,T)],[1,()=>c.arc(-14,-24,9,0,T)],[1,()=>c.ellipse(2,-8,24,19,0,0,T)],[1,()=>c.ellipse(28,-2,18,11,.15,0,T)]]
  shape(mound)
  c.fillStyle='#111';c.beginPath();c.ellipse(128,174,38,11,0,0,T);c.fill();c.fillStyle='#fff'
  // a dark edge wherever the white ermine overlaps the white snow, so it doesn't melt into it
  c.save();c.beginPath();mound();c.clip();seen();c.strokeStyle='#111';c.lineWidth=12
  for(const[h,f]of parts)at(h,()=>{c.beginPath();f();c.stroke()})
  c.restore()
  c.save();seen()
  for(const[h,f]of parts)at(h,()=>shape(f))
  at(1,()=>{c.fillStyle=c.strokeStyle='#111'
    if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(12,-14,5,.15*PI,.85*PI),c.stroke()
    else c.beginPath(),c.arc(12,-12,5,0,T),c.fill()
    c.beginPath();c.ellipse(44,-4+1.5*sin(T*t*6),5,4,.2,0,T);c.fill()
    c.lineWidth=3;c.beginPath();c.moveTo(41,4);c.quadraticCurveTo(34,9,26,6);c.stroke()})
  c.restore()
  if(pw)for(const x of[110,146]){c.save();c.translate(x,183);c.scale(pw,pw)
    c.strokeStyle='#111';c.lineWidth=12;c.beginPath();c.ellipse(0,0,10,6,0,0,T);c.stroke()
    c.strokeStyle='#fff';c.lineWidth=6;shape(()=>c.ellipse(0,0,10,6,0,0,T));c.restore()}
}
