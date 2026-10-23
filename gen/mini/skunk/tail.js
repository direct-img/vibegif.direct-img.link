// skunk standing with its big fluffy tail up: the tail swishes slowly, a white stripe runs from its nose to the tail tip
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3
export default(c,t)=>{
  const sw=.12*sin(T*t),tip=.1*sin(T*t-1.2),br=sin(T*t),bl=t>.7&&t<.76
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=(x,y,r,f)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();f();c.fill();c.stroke();c.restore()}
  c.translate(8,0);c.lineWidth=12
  for(const[x0,x1]of[[106,104],[120,122],[158,156],[172,174]])c.beginPath(),c.moveTo(x0,180),c.lineTo(x1,206),c.stroke()
  c.lineWidth=6
  c.save();c.translate(100,154);c.rotate(sw);c.translate(-100,-154)
  // fluffy plume: a chain of overlapping circles along a curve, fat in the middle, scalloped edges for free
  const B=(u,a,b,d,e)=>(1-u)**3*a+3*(1-u)**2*u*b+3*(1-u)*u*u*d+u**3*e,P=[]
  for(let i=0;i<=12;i++){const u=i/12,cu=tip*u*u;P.push([B(u,102,50,52,120)+cu*40,B(u,152,140,40,52)+cu*20,10+20*sin(PI*Math.min(1,u*1.15))+4])}
  for(const[x,y,r]of P)c.beginPath(),c.arc(x,y,r,0,T),c.fill()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(100,150)
  for(const[x,y]of P.slice(1,11))c.lineTo(x,y)
  c.stroke()
  c.restore();c.strokeStyle='#111'
  shape(138,166,0,()=>c.ellipse(0,br*.5,44,28+br*.5,0,0,T))
  shape(172,142,0,()=>c.arc(0,0,7,0,T))
  shape(182,160,0,()=>c.ellipse(0,0,22,19,0,0,T))
  shape(200,168,.3,()=>c.ellipse(0,0,12,9,0,0,T))
  c.fillStyle=c.strokeStyle='#fff'
  c.lineWidth=6;c.beginPath();c.moveTo(196,154);c.quadraticCurveTo(170,148,150,152);c.quadraticCurveTo(122,152,100,150);c.stroke()
  if(bl)c.lineWidth=3,c.beginPath(),c.arc(188,158,3.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(188,160,3.2,0,T),c.fill()
}
