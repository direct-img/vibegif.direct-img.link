// toaster pops two slices of toast that hop up and drop back in, the lever snapping up then pushed down again
const{sin,PI,min,max}=Math,T=2*PI
export const frames=20,delay=70
const ease=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
const toast=(c,x,y,a)=>{
  c.save();c.translate(x,y);c.rotate(a)
  c.beginPath();c.moveTo(-22,60);c.lineTo(-22,6);c.bezierCurveTo(-36,-2,-28,-26,0,-24);c.bezierCurveTo(28,-26,36,-2,22,6);c.lineTo(22,60);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(-13,60);c.lineTo(-13,8);c.bezierCurveTo(-24,0,-18,-14,0,-14);c.bezierCurveTo(18,-14,24,0,13,8);c.lineTo(13,60);c.stroke()
  c.restore();c.lineWidth=7
}
export default(c,t)=>{
  const hop=(t0,H,s)=>{const u=(t-t0)/.42;return u>0&&u<1?[H*4*u*(1-u),s*sin(PI*u)]:[0,0]}
  const[ha,ra]=hop(.3,76,-.3),[hb,rb]=hop(.35,62,.25)
  const ly=196-56*ease((t-.3)/.04)+56*ease((t-.8)/.15),j=t<.3?1.5*sin(12*T*t)*sin(PI*t/.3):0,up=t>=.3&&t<.55
  c.translate(128,236);c.scale(1.14,1.14);c.translate(-128,-236)
  toast(c,104,122-ha,ra);toast(c,152,122-hb,rb)
  if(t>=.3&&t<.42)for(const d of[-1,1])for(const[w,s]of[[11,'#111'],[4,'#fff']]){c.lineWidth=w;c.strokeStyle=s;for(const[a,r0]of[[-.5,0],[0,6],[.5,0]]){const x=128+d*(96+r0),y=82;c.beginPath();c.moveTo(x+d*12*sin(a+.9),y-12*sin(a+1.2));c.lineTo(x+d*30*sin(a+.9),y-30*sin(a+1.2));c.stroke()}}
  c.lineWidth=7;c.strokeStyle='#111'
  c.save();c.translate(j,0)
  for(const x of[66,162])c.beginPath(),c.roundRect(x,214,28,14,5),c.fill(),c.stroke()
  c.beginPath();c.roundRect(200,ly-7,26,14,6);c.fill();c.stroke()
  c.beginPath();c.roundRect(48,116,160,104,24);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(70,134);c.lineTo(186,134);c.stroke();c.lineWidth=7
  c.fillStyle='#111'
  if(up)for(const x of[104,152])c.beginPath(),c.arc(x,162,10,0,T),c.fill()
  else for(const x of[104,152])c.beginPath(),c.ellipse(x,164,6,8,0,0,T),c.fill()
  c.fillStyle='#fff';for(const x of[101,149])c.beginPath(),c.arc(x+(up?-1:0),up?158:160,up?3.5:2.5,0,T),c.fill()
  c.lineWidth=5
  if(up){c.beginPath();c.ellipse(128,188,7,9,0,0,T);c.fillStyle='#111';c.fill()}
  else{c.beginPath();c.arc(128,176,12,.15*PI,.85*PI);c.stroke()}
  c.lineWidth=3;for(const x of[80,176])for(const o of[-6,0,6])c.beginPath(),c.moveTo(x+o-2,186),c.lineTo(x+o+3,178),c.stroke()
  c.restore()
}
