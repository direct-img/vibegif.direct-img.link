// strawberry bouncing twice a loop with squash and stretch, its seeds jiggling and its leafy cap flapping behind
const{sin,PI,abs,max,min}=Math,T=2*PI
export const frames=20,delay=60
const RD='#ff6b6b',SD='#ffe066',LF='#69db7c',LD='#40c057',BL='#ffc9c9',SH='#ced4da'
export default(c,t)=>{
  const u=(t*2)%1,H=54,h=H*4*u*(1-u),q=max(0,1-min(u,1-u)/.1),s=.1*abs(1-2*u)*(1-q)
  const sx=1+.18*q-.5*s,sy=1-.22*q+s,lag=.22*sin(2*T*t*2-1.2)
  c.fillStyle=SH;c.beginPath();c.ellipse(128,232,48*(1-.4*h/H)*(1+.2*q),7,0,0,T);c.fill()
  c.save();c.translate(128,228-h);c.scale(sx*.88,sy*.88);c.translate(0,-76)
  c.fillStyle=RD;c.beginPath();c.moveTo(0,-44);c.bezierCurveTo(46,-62,80,-28,70,8);c.bezierCurveTo(60,44,22,72,0,76);c.bezierCurveTo(-22,72,-60,44,-70,8);c.bezierCurveTo(-80,-28,-46,-62,0,-44);c.closePath();c.fill();c.stroke()
  c.lineWidth=2.5;c.fillStyle=SD
  ;[[-46,-20],[-20,-30],[22,-30],[48,-18],[-56,6],[56,6],[-40,34],[40,34],[-18,52],[18,52],[0,64],[-26,-2],[28,0]].forEach(([x,y],k)=>{const j=1.6*sin(2*T*t*2+k*1.7);c.beginPath();c.ellipse(x+j,y,3,4.5,x/90,0,T);c.fill();c.stroke()})
  c.lineWidth=7
  for(const[a,L]of[[-1.25,38],[1.25,38],[-.65,42],[.65,42],[0,40]]){
    c.save();c.translate(0,-48);c.rotate(PI+a+lag*(a?Math.sign(a):1)*.6);c.fillStyle=a?LF:LD;c.beginPath();c.moveTo(-10,0);c.quadraticCurveTo(-11,L*.6,0,L);c.quadraticCurveTo(11,L*.6,10,0);c.closePath();c.fill();c.stroke();c.restore()
  }
  for(const[w,st]of[[13,'#111'],[6,LD]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(0,-52),c.quadraticCurveTo(2,-66,10+lag*12,-74),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*22,6,6.5,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*22-2,4,2.4,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(0,14,9,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*40,20,9,5,0,0,T),c.fill()
  c.restore()
}
