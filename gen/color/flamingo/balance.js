// flamingo standing on one leg, wobbling to keep its balance while its neck sways the other way
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=80
const PK='#f783ac',PL='#faa2c1',PD='#e64980',LG='#ff8fab',WA='#74c0fc',WL='#d0ebff',BL='#ff6b6b'
export default(c,t)=>{
  const a=.07*sin(T*t),n=-.12*sin(T*t-.5)
  const D=(wd,col,f)=>{for(const[l,s]of[[wd,'#111'],[wd-10,col]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  c.fillStyle=WA;c.beginPath();c.ellipse(128,234,70,14,0,0,T);c.fill();c.stroke()
  c.strokeStyle=WL;c.lineWidth=4;c.beginPath();c.ellipse(128,234,30+6*sin(2*T*t),6,0,0,T);c.stroke();c.strokeStyle='#111';c.lineWidth=7
  c.save();c.translate(128,232);c.rotate(a);c.translate(-128,-232)
  D(17,LG,()=>{c.moveTo(128,232);c.lineTo(126,186);c.lineTo(122,150)})
  D(17,LG,()=>{c.moveTo(134,150);c.lineTo(156,180);c.lineTo(126,186)})
  c.fillStyle=LG;c.beginPath();c.ellipse(132,234,18,6,0,0,T);c.fill();c.lineWidth=5;c.stroke();c.lineWidth=7
  c.fillStyle=PK;c.beginPath();c.moveTo(64,118);c.lineTo(38,108);c.lineTo(50,128);c.lineTo(36,138);c.lineTo(66,136);c.closePath();c.fill();c.stroke()
  c.beginPath();c.ellipse(112,128,56,34,-.12,0,T);c.fill();c.stroke()
  c.fillStyle=PD;c.beginPath();c.moveTo(78,116);c.quadraticCurveTo(116,96,146,118);c.quadraticCurveTo(118,148,78,116);c.fill();c.lineWidth=5;c.stroke()
  c.beginPath();c.moveTo(96,120);c.quadraticCurveTo(112,112,128,122);c.stroke();c.lineWidth=7
  c.save();c.translate(150,112);c.rotate(n)
  D(26,PK,()=>{c.moveTo(0,0);c.bezierCurveTo(30,-18,-18,-50,2,-74)})
  c.translate(2,-80)
  c.fillStyle=PK;c.beginPath();c.arc(0,0,20,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(14,-8);c.quadraticCurveTo(36,-6,40,8);c.lineTo(30,22);c.quadraticCurveTo(26,8,12,8);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(36,2);c.quadraticCurveTo(44,12,32,30);c.quadraticCurveTo(30,20,28,16);c.closePath();c.fill();c.lineWidth=4;c.strokeStyle='#fff';c.stroke();c.strokeStyle='#111';c.lineWidth=7
  c.fillStyle='#111';c.beginPath();c.arc(2,-4,4.5,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(0.5,-5.5,1.6,0,T);c.fill()
  c.fillStyle=BL;c.beginPath();c.ellipse(-4,8,6,4,0,0,T);c.fill()
  c.restore()
  c.restore()
}
