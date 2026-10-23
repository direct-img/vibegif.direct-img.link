// corgi seen from behind, fluffy heart-shaped butt wiggling side to side on stubby trotting legs, smiling back over its shoulder
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=70
const OR='#ffa94d',OD='#f08c00',PK='#faa2c1',TG='#ff8fab',BL='#ffa8a8'
export default(c,t)=>{
  const w=.1*sin(2*T*t),l1=max(0,sin(2*T*t)),l2=max(0,-sin(2*T*t))
  for(const[x,l]of[[112,l2],[164,l1]]){c.fillStyle=OR;c.beginPath();c.roundRect(x-13,196-l*8,26,34,10);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.ellipse(x,228-l*8,15,9,0,0,T);c.fill();c.stroke()}
  c.save();c.translate(138,214);c.rotate(w);c.translate(-138,-214)
  for(const[x,l]of[[92,l1],[184,l2]]){c.fillStyle=OR;c.beginPath();c.roundRect(x-15,186-l*10,30,40,12);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.ellipse(x,230-l*10,18,10,0,0,T);c.fill();c.stroke()}
  c.fillStyle=OR;c.beginPath();c.ellipse(138,140,76,66,0,0,T);c.fill();c.stroke()
  // the butt: two fluffy scalloped cheeks meeting in a heart
  const fluff=(x,y,r,n=10)=>{c.beginPath();c.moveTo(x+r,y);for(let k=0;k<n;k++){const a=(k+.5)/n*T,e=(k+1)/n*T;c.quadraticCurveTo(x+cos(a)*(r+9),y+sin(a)*(r+9),x+cos(e)*r,y+sin(e)*r)}c.closePath()}
  c.fillStyle='#fff'
  fluff(114,178,30);c.fill();c.stroke();fluff(162,178,30);c.fill();c.stroke()
  c.beginPath();c.ellipse(138,170,40,26,0,0,T);c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(138,166);c.quadraticCurveTo(136,190,138,206);c.stroke();c.lineWidth=7
  c.save();c.translate(138,124);c.rotate(.4*sin(4*T*t))
  c.fillStyle='#fff';fluff(0,-6,11,7);c.fill();c.lineWidth=5;c.stroke();c.lineWidth=7
  c.restore()
  c.restore()
  c.save();c.translate(96,78);c.rotate(-.1+.05*sin(2*T*t+1))
  for(const[x,a]of[[-24,-.35],[22,.35]]){c.save();c.translate(x,-26);c.rotate(a);c.fillStyle=OR;c.beginPath();c.moveTo(-14,10);c.lineTo(0,-30);c.lineTo(14,10);c.closePath();c.fill();c.stroke();c.fillStyle=PK;c.beginPath();c.moveTo(-6,6);c.lineTo(0,-16);c.lineTo(6,6);c.closePath();c.fill();c.restore()}
  c.fillStyle=OR;c.beginPath();c.ellipse(0,0,40,34,0,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(-6,-30);c.quadraticCurveTo(4,-30,6,-8);c.quadraticCurveTo(30,4,22,22);c.quadraticCurveTo(0,38,-22,22);c.quadraticCurveTo(-30,4,-8,-8);c.closePath();c.fill()
  c.save();c.beginPath();c.ellipse(0,0,40,34,0,0,T);c.lineWidth=7;c.stroke();c.restore()
  for(const d of[-1,1]){c.fillStyle='#111';c.beginPath();c.arc(d*16,-4,5.5,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(d*16-2,-6,2,0,T);c.fill()}
  c.fillStyle='#111';c.beginPath();c.ellipse(0,8,7,5,0,0,T);c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(-10,16);c.quadraticCurveTo(-5,22,0,16);c.quadraticCurveTo(5,22,10,16);c.stroke()
  c.fillStyle=TG;c.beginPath();c.moveTo(-6,20);c.lineTo(6,20);c.quadraticCurveTo(7,32,0,32);c.quadraticCurveTo(-7,32,-6,20);c.fill();c.lineWidth=4;c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*26,10,7,4,0,0,T),c.fill()
  c.restore()
}
