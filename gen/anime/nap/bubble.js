// raspberry-haired girl asleep on her folded arms at a desk, a sleep bubble swelling and shrinking from her nose as Z's float up
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#d6336c',HD='#a61e4d',HL='#ffc9de',CARD='#fff3bf',CD='#fcc419',DESK='#e8b07a',DD='#c47f45',BL='#ffa8a8',BUB='rgba(165,216,255,.55)',ZC='#91a7ff'
const zed=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.rotate(-.15);for(const[w,st]of[[10,'#111'],[4.5,ZC]]){c.lineWidth=w;c.strokeStyle=st;c.beginPath();c.moveTo(-8,-8);c.lineTo(8,-8);c.lineTo(-8,8);c.lineTo(8,8);c.stroke()}c.restore();c.strokeStyle='#111'}
export default(c,t)=>{
  const r=4+13*(1-cos(T*t))/2
  c.lineWidth=6;c.fillStyle=CARD;c.beginPath();c.moveTo(96,214);c.quadraticCurveTo(120,150,186,142);c.quadraticCurveTo(240,146,244,214);c.closePath();c.fill();c.stroke()
  const head=f=>{c.save();c.translate(124,132);c.rotate(-.75);c.translate(-128,-115);f();c.restore()}
  head(()=>{
    c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,100,206,160);c.quadraticCurveTo(208,186,194,198);c.lineTo(62,198);c.quadraticCurveTo(48,186,50,160);c.bezierCurveTo(42,100,56,34,128,34);c.fill();c.stroke()
  })
  c.fillStyle=DESK;c.beginPath();c.roundRect(6,212,244,30,8);c.fill();c.stroke()
  c.strokeStyle=DD;c.lineWidth=4;c.beginPath();c.moveTo(18,230);c.lineTo(238,230);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(150,214);c.lineTo(160,198);c.lineTo(246,198);c.lineTo(240,214);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#a5d8ff';c.lineWidth=2.5;for(const x of[180,200,220])c.beginPath(),c.moveTo(x,202),c.lineTo(x-3,210),c.stroke();c.strokeStyle='#111'
  c.lineWidth=6;c.fillStyle=CARD;for(const[x,w]of[[96,62],[158,58]])c.beginPath(),c.roundRect(x-w,186,w*2,30,15),c.fill(),c.stroke()
  c.strokeStyle=CD;c.lineWidth=4;for(const x of[44,212])c.beginPath(),c.moveTo(x,190),c.lineTo(x,212),c.stroke();c.strokeStyle='#111'
  head(()=>{
    c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    c.lineWidth=5;for(const x of[103,153]){c.beginPath();c.arc(x,136,13,PI*.15,PI*.85);c.stroke();c.beginPath();c.moveTo(x+(x<128?-12:12),140);c.lineTo(x+(x<128?-17:17),137);c.stroke()}
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,160,12,6,0,0,T),c.fill()
    c.lineWidth=3.5;c.fillStyle='#c92a2a';c.beginPath();c.ellipse(124,172,5,4,0,0,T);c.fill();c.stroke()
    c.fillStyle='#d0ebff';c.lineWidth=3;c.beginPath();c.moveTo(119,173);c.quadraticCurveTo(112,180,114,186);c.quadraticCurveTo(118,190,120,184);c.quadraticCurveTo(121,178,119,173);c.fill();c.stroke()
    c.fillStyle=BUB;c.lineWidth=4;c.beginPath();c.arc(131+r*.82,157+r*.39,r,0,T);c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.arc(131+r*.82,157+r*.39,r*.62,PI*1.15,PI*1.5);c.stroke();c.strokeStyle='#111'
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,160)
    c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,190,160)
    c.quadraticCurveTo(186,124,178,104);c.quadraticCurveTo(170,106,164,114);c.quadraticCurveTo(158,98,148,94);c.quadraticCurveTo(142,106,134,110)
    c.quadraticCurveTo(128,96,118,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,98);c.quadraticCurveTo(88,106,84,114)
    c.quadraticCurveTo(78,106,76,106);c.quadraticCurveTo(68,128,66,160);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=5;for(const[a,b]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*b),c.stroke()
    c.strokeStyle='#111'
  })
  for(const o of[0,1/3,2/3]){const p=(t+o)%1;zed(c,176+30*p+6*sin(p*T*2),88-70*p,.6+.8*sin(PI*p))}
}
