// toucan perched on a branch, bobbing its huge colorful beak up and down and blinking
// the black body gets a white rim so it doesn't vanish on dark backgrounds
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=80
const BR='#a9744f',LF='#69db7c',BIB='#fff9db',OR='#ff922b',YE='#ffd43b',RD='#ff6b6b',TP='#e8590c',EB='#4dabf7',SK='#ffa94d'
export default(c,t,i)=>{
  const a=.1*sin(2*T*t),b=Math.round(2*sin(2*T*t)),shut=i==6||i==7
  const D=(wd,cl,f)=>{for(const[l,s]of[[wd,'#111'],[wd-10,cl]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  const dark=f=>{c.beginPath();f();c.lineWidth=16;c.strokeStyle='#fff';c.stroke();c.fillStyle='#111';c.fill();c.lineWidth=7;c.strokeStyle='#111';c.stroke()}
  dark(()=>{c.moveTo(70,184);c.lineTo(52,240);c.lineTo(82,240);c.lineTo(94,190);c.closePath()})
  D(20,BR,()=>{c.moveTo(16,212);c.quadraticCurveTo(128,204,240,214)})
  c.fillStyle=LF;c.beginPath();c.ellipse(222,228,16,8,.5,0,T);c.fill();c.stroke()
  c.save();c.translate(0,b)
  // body and head rimmed together so there is no white seam between them
  const bd=()=>{c.beginPath();c.ellipse(92,150,44,60,-.15,0,T)},hd=()=>{c.save();c.translate(104,120);c.rotate(a);c.beginPath();c.arc(0,-30,34,0,T);c.restore()}
  c.lineWidth=16;c.strokeStyle='#fff';bd();c.stroke();hd();c.stroke();c.fillStyle='#111';bd();c.fill();hd();c.fill();c.lineWidth=7;c.strokeStyle='#111'
  c.fillStyle=RD;c.beginPath();c.ellipse(96,198,18,10,-.2,0,T);c.fill();c.lineWidth=5;c.stroke();c.lineWidth=7
  c.save();c.translate(104,120);c.rotate(a)
  c.fillStyle=BIB;c.beginPath();c.ellipse(8,4,26,30,-.1,0,T);c.fill();c.stroke()
  c.fillStyle=YE;c.beginPath();c.ellipse(10,24,18,8,0,0,T);c.fill()
  c.fillStyle=SK;c.beginPath();c.ellipse(12,-36,17,15,0,0,T);c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle=EB;c.beginPath();c.arc(14,-36,10,0,T);c.fill();c.stroke()
  if(shut){c.beginPath();c.arc(14,-38,7,.15*PI,.85*PI);c.stroke()}
  else{c.fillStyle='#111';c.beginPath();c.arc(15,-36,5.5,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(13,-38,2,0,T);c.fill()}
  c.lineWidth=7
  const beak=()=>{c.beginPath();c.moveTo(26,-44);c.bezierCurveTo(80,-66,128,-48,138,-14);c.quadraticCurveTo(136,-2,124,-6);c.quadraticCurveTo(80,-4,28,-8);c.closePath()}
  c.fillStyle=OR;beak();c.fill()
  c.save();beak();c.clip()
  c.fillStyle=YE;c.beginPath();c.moveTo(20,-80);c.quadraticCurveTo(80,-60,140,-40);c.lineTo(140,-80);c.closePath();c.fill()
  c.fillStyle=TP;c.beginPath();c.arc(136,-14,22,0,T);c.fill()
  c.fillStyle=RD;c.fillRect(20,-60,10,60)
  c.restore()
  c.lineWidth=5;c.beginPath();c.moveTo(30,-24);c.quadraticCurveTo(80,-26,132,-14);c.stroke();c.lineWidth=7
  beak();c.stroke()
  c.restore()
  c.restore()
  c.fillStyle=EB;for(const x of[84,104])c.lineWidth=5,c.beginPath(),c.ellipse(x,210,8,6,0,0,T),c.fill(),c.stroke()
  c.lineWidth=7
}
