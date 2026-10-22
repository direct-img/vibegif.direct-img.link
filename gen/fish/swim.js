// fish swimming in place with its body waving, tail flicking and bubbles rising from its mouth
const{sin,PI}=Math,T=2*PI
export default(c,t)=>{
  const bob=4*sin(t*T),s=x=>(x-56)/124,yc=x=>128+bob+9*s(x)**1.5*sin(4*s(x)-t*T),hh=x=>50*sin(PI*s(x)**.75)
  c.lineWidth=5
  for(const o of[0,.33,.66]){const k=(t+o)%1;c.beginPath();c.arc(42+5*sin(k*T*1.5+o*9),104+bob-k*84,4+6*k,0,T);c.fill();c.stroke()}
  c.lineWidth=7
  c.save();c.translate(178,yc(178));c.rotate(.4*sin(t*T-1.6));c.beginPath();c.moveTo(-4,0);c.lineTo(46,-38);c.quadraticCurveTo(32,0,46,38);c.closePath();c.restore();c.fill();c.stroke()
  const top=x=>yc(x)-hh(x)
  c.beginPath();c.moveTo(96,top(96)+6);c.quadraticCurveTo(116,top(110)-34,148,top(148)+4);c.fill();c.stroke()
  c.beginPath();for(let x=56;x<=180;x+=2)c.lineTo(x,top(x));for(let x=180;x>=56;x-=2)c.lineTo(x,yc(x)+hh(x));c.closePath();c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.arc(96,yc(96),28,-.3*PI,.3*PI);c.stroke()
  c.save();c.translate(124,yc(124)+18);c.rotate(.35+.25*sin(2*T*t));c.beginPath();c.moveTo(-6,0);c.quadraticCurveTo(10,-12,26,-2);c.quadraticCurveTo(12,8,-6,0);c.restore();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.arc(70,yc(70)+4,9,.55*PI,.9*PI);c.stroke()
  c.lineWidth=5;c.beginPath();c.arc(82,yc(82)-10,11,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(80,yc(82)-10,6,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(78,yc(82)-13,2,0,T);c.fill()
}
