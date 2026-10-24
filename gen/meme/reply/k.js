// a long heartfelt blue text message, then the typing dots go on and off forever... and the reply is just "k"
const{sin,PI,min,max}=Math,T=2*PI
export const frames=36,delay=[...Array(35).fill(90),1600],rim=4
const BL='#339af0',GR='#e9ecef'
const ease=x=>x<=0?0:x>=1?1:1+sin(PI*x)*.4*(1-x)
const bub=(c,x,y,w,h,col,d)=>{
  c.fillStyle=col;c.lineWidth=6;const tx=d>0?x+w-18:x+18
  c.beginPath();c.moveTo(tx-10*d,y+h-12);c.quadraticCurveTo(tx+12*d,y+h+6,tx+20*d,y+h+10);c.quadraticCurveTo(tx+8*d,y+h-2,tx+8*d,y+h-14);c.fill();c.stroke()
  c.beginPath();c.roundRect(x,y,w,h,20);c.fill();c.stroke()
  c.beginPath();c.moveTo(tx-6*d,y+h-14);c.quadraticCurveTo(tx+10*d,y+h+2,tx+14*d,y+h+5);c.quadraticCurveTo(tx+6*d,y+h-4,tx+6*d,y+h-16);c.fill()
}
export default(c,t)=>{
  // the long message
  bub(c,58,14,184,120,BL,1)
  c.strokeStyle='#fff';c.lineWidth=8;for(const[k,l]of[[0,150],[1,140],[2,156],[3,128],[4,72]].entries())c.beginPath(),c.moveTo(76,34+k*20),c.lineTo(76+l[1]-12,34+k*20),c.stroke()
  c.fillStyle='#ff6b6b';c.strokeStyle='#111';c.lineWidth=3.5;c.save();c.translate(150,114);c.beginPath();c.moveTo(0,7);c.bezierCurveTo(-12,-1,-8,-11,0,-4);c.bezierCurveTo(8,-11,12,-1,0,7);c.fill();c.stroke();c.restore()
  // tiny "read" double tick under it
  c.strokeStyle='#4dabf7';c.lineWidth=3.5;for(const o of[0,7])c.beginPath(),c.moveTo(214+o,154),c.lineTo(219+o,159),c.lineTo(228+o,148),c.stroke()
  c.strokeStyle='#111'
  // typing... stop... typing... k
  const on=(t>.03&&t<.36)||(t>.47&&t<.75),K=t>=.8
  if(on){const s=t<.36?ease((t-.03)/.05):ease((t-.47)/.05);c.save();c.translate(24,208);c.scale(s,s);c.translate(-24,-208)
    bub(c,14,170,96,50,GR,-1)
    for(let k=0;k<3;k++){const b=max(0,sin(T*(t*6-k*.18)));c.fillStyle=b>.3?'#495057':'#adb5bd';c.beginPath();c.arc(40+k*22,195-b*6,7,0,T);c.fill()}
    c.restore()}
  if(K){const s=ease((t-.8)/.06);c.save();c.translate(24,220);c.scale(s,s);c.translate(-24,-220)
    bub(c,14,166,58,56,GR,-1)
    c.lineWidth=7;c.beginPath();c.moveTo(34,178);c.lineTo(34,210);c.moveTo(52,188);c.lineTo(35,200);c.moveTo(41,196);c.lineTo(53,210);c.stroke()
    c.restore()}
}
