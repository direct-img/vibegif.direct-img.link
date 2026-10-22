// sailboat rocking over rolling waves, its little flag flapping at the top of the mast
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=80
const HULL='#ff922b',HD='#e8590c',SAIL='#fff',STR='#4dabf7',FL='#ff6b6b',W1='#74c0fc',W2='#4dabf7'
export default(c,t)=>{
  const r=.1*sin(t*T),b=5*sin(t*T+1)
  const wave=(base,amp,ph,col)=>{c.fillStyle=col;c.beginPath();c.moveTo(22,246);c.quadraticCurveTo(8,246,8,232);for(let x=8;x<=248;x+=4)c.lineTo(x,base+amp*sin(x/26-t*T+ph));c.lineTo(248,232);c.quadraticCurveTo(248,246,234,246);c.closePath();c.fill();c.stroke()}
  wave(196,6,1.5,W1)
  c.save();c.translate(128,196+b);c.rotate(r);c.translate(-128,-196)
  c.lineWidth=7
  c.beginPath();c.moveTo(128,190);c.lineTo(128,34);c.lineWidth=8;c.stroke();c.lineWidth=7
  c.fillStyle=FL;c.beginPath();c.moveTo(128,34);for(let k=0;k<=10;k++)c.lineTo(128+k*3.4,36+k*.4+4*sin(k*.7-t*T*2)*k/10);for(let k=10;k>=0;k--)c.lineTo(128+k*3.4,56-k*1+4*sin(k*.7-t*T*2)*k/10);c.closePath();c.fill();c.lineWidth=5;c.stroke();c.lineWidth=7
  c.fillStyle=SAIL;c.beginPath();c.moveTo(134,58);c.quadraticCurveTo(196,110,196,170);c.lineTo(134,170);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=STR;c.fillRect(130,120,80,18);c.restore();c.beginPath();c.moveTo(134,58);c.quadraticCurveTo(196,110,196,170);c.lineTo(134,170);c.closePath();c.stroke()
  c.beginPath();c.moveTo(122,72);c.quadraticCurveTo(78,120,74,168);c.lineTo(122,168);c.closePath();c.fill();c.stroke()
  c.fillStyle=HULL;c.beginPath();c.moveTo(46,176);c.lineTo(214,176);c.quadraticCurveTo(204,214,182,214);c.lineTo(78,214);c.quadraticCurveTo(58,214,46,176);c.fill();c.stroke()
  c.fillStyle=HD;c.beginPath();c.rect(56,186,150,8);c.fill()
  c.fillStyle='#fff';c.lineWidth=4;for(const x of[96,128,160])c.beginPath(),c.arc(x,200,6,0,T),c.fill(),c.stroke()
  c.restore();c.lineWidth=7
  wave(214,5,0,W2)
}
