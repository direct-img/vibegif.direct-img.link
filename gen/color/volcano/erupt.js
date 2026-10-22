// volcano rumbles, then blasts lava blobs and smoke puffs out the top, then settles down
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=24,delay=70
const MT='#a9744f',MD='#8d6346',LV='#ff6b6b',LO='#ff922b',LY='#ffd43b',SM='#dee2e6'
const BLOBS=[[-70,170,LO,10],[-30,220,LV,12],[10,240,LY,9],[46,200,LO,11],[80,160,LV,9],[-10,190,LV,8]]
export default(c,t,i)=>{
  const sh=t<.25?(i%2?3:-3):0,u=(t-.25)/.55
  for(let k=0;k<3;k++){const p=(t+k/3)%1,r=10+18*p;c.fillStyle=SM;c.lineWidth=5;c.beginPath();c.arc(128+sin(p*6+k)*16+(k-1)*14,72-p*64,r,0,T);c.fill();c.stroke()}
  c.lineWidth=7
  if(u>0&&u<1)for(const[vx,vy,col,r]of BLOBS){const x=128+vx*u,y=92-vy*u+340*u*u;if(y<240)c.fillStyle=col,c.beginPath(),c.arc(x,y,r,0,T),c.fill(),c.stroke()}
  c.translate(sh,0)
  const mtn=()=>{c.beginPath();c.moveTo(20,238);c.quadraticCurveTo(70,150,98,96);c.lineTo(158,96);c.quadraticCurveTo(186,150,236,238);c.closePath()}
  mtn();c.fillStyle=MT;c.fill()
  c.save();mtn();c.clip();c.fillStyle=MD;c.beginPath();c.moveTo(60,240);c.quadraticCurveTo(80,190,74,150);c.lineTo(90,150);c.quadraticCurveTo(100,200,96,240);c.fill()
  c.fillStyle=LV;c.beginPath();c.moveTo(90,96);c.lineTo(166,96);c.lineTo(160,118);c.quadraticCurveTo(152,140,146,118);c.quadraticCurveTo(136,150,126,120);c.quadraticCurveTo(114,134,108,116);c.quadraticCurveTo(100,128,94,110);c.closePath();c.fill();c.lineWidth=5;c.stroke();c.restore()
  mtn();c.stroke()
  c.fillStyle=LO;c.beginPath();c.ellipse(128,96,32,9,0,0,T);c.fill();c.stroke()
  const blast=u>0&&u<.5
  c.fillStyle='#111'
  for(const d of[-1,1])if(blast)c.beginPath(),c.arc(128+d*20,170,7,0,T),c.fill();else c.lineWidth=5,c.beginPath(),c.arc(128+d*20,168,7,PI*1.15,PI*1.85),c.stroke()
  if(blast)c.beginPath(),c.ellipse(128,196,10,12,0,0,T),c.fill();else c.lineWidth=5,c.beginPath(),c.arc(128,190,9,.15*PI,.85*PI),c.stroke()
}
