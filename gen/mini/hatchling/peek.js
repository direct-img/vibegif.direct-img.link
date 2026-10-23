// baby dragon peeking out of its cracked egg: it pops up wearing the top shell like a hat, flaps its little wings, looks left and right, blinks, then sinks back
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=85,rim=3,rimColor='#111'
const ez=x=>(x=min(1,max(0,x)),x*x*(3-2*x))
export default(c,t)=>{
  const h=ez((t-.06)/.18)-ez((t-.8)/.14),lx=h*sin(T*t*2),bl=t>.5&&t<.56,hx=128+4*lx,hy=124-44*h,fl=h*sin(T*t*4)
  const zig=(x0,x1,y,n,k)=>{for(let i=1;i<n;i++)c.lineTo(x0+i*(x1-x0)/n,y+(i%2?-k:k));c.lineTo(x1,y)}
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  for(const d of[-1,1]){
    c.save();c.translate(128+d*30,150-30*h);c.rotate(d*(.5+.25*fl));c.scale(d,1)
    shape(()=>{c.moveTo(0,0);c.quadraticCurveTo(10,-34,40,-46);c.quadraticCurveTo(36,-30,46,-20);c.quadraticCurveTo(34,-18,38,-6);c.quadraticCurveTo(22,-8,18,4)})
    c.restore()
  }
  shape(()=>{c.moveTo(hx-28,hy+90);c.lineTo(hx-20,hy+10);c.lineTo(hx+20,hy+10);c.lineTo(hx+28,hy+90)})
  c.save();c.translate(hx,hy);c.rotate(.06*lx)
  c.lineWidth=9;for(const d of[-1,1])c.beginPath(),c.moveTo(d*20,-22),c.quadraticCurveTo(d*26,-40,d*40,-44),c.stroke()
  c.lineWidth=6
  shape(()=>c.ellipse(0,0,38,33,0,0,T))
  c.save();c.translate(-6,-30);c.rotate(-.28+.06*sin(T*t*2))
  shape(()=>{c.moveTo(-28,4);c.bezierCurveTo(-28,-30,28,-30,28,4);zig(28,-28,4,6,5)})
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=3.5;c.beginPath();c.moveTo(28,4);zig(28,-28,4,6,5);c.stroke()
  c.restore()
  c.fillStyle=c.strokeStyle='#111';const ex=6*lx
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(ex+d*15,-2,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(ex+d*15,0,6.5,0,T),c.fill()
  for(const d of[-1,1])c.beginPath(),c.arc(ex*1.3+d*5,14,2.5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.arc(ex*1.3,16,8,.25*PI,.75*PI);c.stroke()
  c.restore()
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  shape(()=>{c.moveTo(67,140);zig(67,189,140,7,9);c.ellipse(128,162,64,70,0,-.32,PI+.32)})
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=3.5;c.beginPath();c.moveTo(67,140);zig(67,189,140,7,9);c.stroke()
}
