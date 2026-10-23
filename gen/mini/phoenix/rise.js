// phoenix rising: big wingbeats lift it, the flame crest and tail feathers flicker
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=70,rim=3,invert=true
export default(c,t)=>{
  const f=sin(T*t)
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=(x,y,r,g)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();g();c.fill();c.stroke();c.restore()}
  c.translate(0,6*f)
  // tail: three flame tongues, the side ones curling outward, all flickering
  for(const[i,a]of[-.5,0,.5].entries()){
    const L=[70,90,70][i]+6*sin(T*t*2+i*1.3),s=5*sin(T*t*2+i*2),o=[1,0,-1][i]*10
    shape(128,132,a,()=>{c.moveTo(-12,0);c.bezierCurveTo(-24,L*.4,-6+o,L*.62,o+s,L);c.quadraticCurveTo(2+o/2,L*.78,4,L*.62)
      c.quadraticCurveTo(10,L*.75,8+s/2,L*.86);c.bezierCurveTo(20,L*.6,16,L*.3,12,0)})
  }
  for(const d of[-1,1]){
    c.save();c.translate(128+d*12,96);c.scale(d*.88,.88);c.rotate(-.55*f);c.beginPath()
    c.moveTo(0,-10);c.quadraticCurveTo(46,-52,100,-46);c.lineTo(80,-26);c.lineTo(88,-12);c.lineTo(66,-8);c.lineTo(70,8)
    c.lineTo(48,4);c.lineTo(48,18);c.lineTo(28,10);c.lineTo(4,14);c.closePath();c.fill();c.stroke();c.restore()
  }
  shape(0,0,0,()=>c.ellipse(128,104,22,36,0,0,T))
  shape(0,0,0,()=>c.arc(128,62,17,0,T))
  shape(0,0,0,()=>{c.moveTo(140,56);c.quadraticCurveTo(156,56,158,72);c.quadraticCurveTo(150,66,140,70)})
  for(const[j,a]of[-.6,-.25,.1].entries()){
    const L=[22,28,20][j]+3*sin(T*t*2+j*2)
    shape(118+j*6,50,a+.08*sin(T*t*2+j),()=>{c.moveTo(-5,0);c.quadraticCurveTo(-6,-L*.55,0,-L);c.quadraticCurveTo(6,-L*.55,5,0)})
  }
  c.fillStyle='#fff';c.beginPath();c.arc(134,60,3.8,0,T);c.fill()
}
