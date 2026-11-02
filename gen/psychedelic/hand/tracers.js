// white cartoon hand waving side to side and leaving a fan of rainbow afterimage tracer hands behind it, a rainbow eye blinking in the palm
export const frames=24,delay=60
const T=Math.PI*2,K=['#ff2d55','#ff8a1f','#ffe11a','#33e06a','#1fb8ff','#7a4dff','#e040fb']
const A=t=>.6*Math.sin(T*t)
// fingers: base x,y, tip x,y, width
const F=[[-24,-92,-32,-150,20],[-6,-98,-8,-166,21],[12,-96,17,-156,20],[28,-86,41,-128,17],[-30,-48,-66,-84,21]]
const hand=(c,t,g,col)=>{
  c.save();c.translate(128,222);c.rotate(A(t));c.scale(.98,.98)
  c.fillStyle=c.strokeStyle=col
  c.beginPath();c.roundRect(-38-g,-104-g,76+2*g,96+2*g,26+g);c.fill()
  c.beginPath();c.roundRect(-27-g,-30,54+2*g,42+g,12+g);c.fill()
  F.map(([a,b,x,y,w],k)=>{
    const s=k<4?.08*Math.sin(T*t*2+k):0
    c.lineWidth=w+2*g;c.beginPath();c.moveTo(a,b);c.lineTo(x+(y-b)*s,y);c.stroke()
  })
  c.restore()
}
export default(c,t)=>{
  for(let k=7;k>0;k--){const u=t-k*.033;hand(c,u,4.5,'#111');hand(c,u,0,K[7-k])}
  hand(c,t,4.5,'#111');hand(c,t,0,'#fff')
  // eye in the palm
  c.save();c.translate(128,222);c.rotate(A(t));c.scale(.98,.98);c.translate(0,-58)
  const o=Math.max(.08,Math.min(1,Math.abs(t-.5)*14))
  c.lineWidth=4;c.strokeStyle='#111'
  c.beginPath();c.ellipse(0,0,24,14*o,0,0,T);c.stroke()
  c.save();c.clip()
  for(let k=0;k<4;k++){c.fillStyle=K[(k+t*14|0)%7];c.beginPath();c.arc(0,0,12-k*3,0,T);c.fill()}
  c.fillStyle='#111';c.beginPath();c.arc(0,0,4,0,T);c.fill()
  c.restore();c.restore()
}
