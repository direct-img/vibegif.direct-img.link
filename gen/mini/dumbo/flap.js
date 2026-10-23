// dumbo octopus paddling: it flaps its ear fins, its webbed skirt puffs open and shut, it bobs and blinks
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const w=sin(T*t*2),p=sin(T*t*2-1.2),bl=t>.4&&t<.46
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.translate(0,-7*sin(T*t*2-2))
  for(const d of[-1,1]){c.save();c.translate(128+d*44,96);c.scale(d,1);c.rotate(-.45*w);shape(()=>c.ellipse(24,-6,28,15,-.3,0,T));c.restore()}
  const W=52+10*p,Y=198-6*p,X=[0,1,2,3,4,5].map(k=>128-W+k*W*2/5),Yk=X.map(x=>Y-14*((x-128)/W)**2)
  shape(()=>{c.moveTo(82,128);c.quadraticCurveTo(70,170,X[0],Yk[0])
    for(let k=1;k<6;k++)c.quadraticCurveTo((X[k-1]+X[k])/2,Y-22,X[k],Yk[k])
    c.quadraticCurveTo(186,170,174,128)})
  shape(()=>c.ellipse(128,110,52,50,0,0,T))
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=3
  for(const k of[1,2,3,4])c.beginPath(),c.moveTo(128+(X[k]-128)*.5,160),c.lineTo(X[k],Yk[k]-8),c.stroke()
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(128+d*20,120,6.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*20,122,6.5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.arc(128,134,6,.2*PI,.8*PI);c.stroke()
}
