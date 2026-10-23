// teapot dragon: the spout is its neck and head, the handle is its arrow-tipped tail; steam puffs from its snout and the lid rattles up
const{sin,PI,min}=Math,T=2*PI
export const frames=24,delay=85,rim=3
export default(c,t)=>{
  const lh=t>.4&&t<.6?sin(PI*(t-.4)/.2):0,bl=t>.82&&t<.88
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  for(let i=0;i<2;i++){
    const u=(t+i/2)%1,r=(3+9*u)*min(1,(1-u)*4)
    if(r>.5)c.beginPath(),c.arc(226-14*u+4*sin(T*u),84-58*u,r,0,T),c.fill()
  }
  c.translate(126,200);c.rotate(.03*sin(T*t));c.translate(-126,-200)
  for(const x of[92,150])shape(()=>c.ellipse(x,194,14,8,0,0,T))
  c.lineWidth=14;c.beginPath();c.moveTo(74,172);c.bezierCurveTo(26,180,20,118,64,112);c.stroke();c.lineWidth=6
  shape(()=>{c.moveTo(56,118);c.lineTo(76,96);c.lineTo(80,122);c.closePath()})
  shape(()=>{c.moveTo(166,178);c.bezierCurveTo(198,170,210,140,204,104);c.lineTo(188,100);c.bezierCurveTo(188,122,182,132,170,132);c.closePath()})
  shape(()=>c.ellipse(120,148,60,44,0,0,T))
  c.save();c.translate(200,94);c.rotate(-.15+.05*sin(2*T*t))
  shape(()=>{c.moveTo(-4,-10);c.lineTo(-18,-30);c.lineTo(6,-12);c.closePath()})
  shape(()=>c.ellipse(4,0,18,13,0,0,T));shape(()=>c.ellipse(22,4,12,9,0,0,T))
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=3,c.beginPath(),c.arc(6,-4,4.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(6,-3,4,0,T),c.fill()
  c.beginPath();c.arc(28,0,2,0,T);c.fill();c.restore()
  c.save();c.translate(120,106-12*lh);c.rotate(.18*lh)
  shape(()=>{c.ellipse(0,0,30,14,0,PI,0);c.closePath()});shape(()=>c.arc(0,-16,7,0,T));c.restore()
  c.strokeStyle='#fff';c.lineWidth=3.5;c.beginPath()
  for(let x=72;x<=168;x+=4)c.lineTo(x,146+4*sin((x-72)/8))
  c.stroke()
}
