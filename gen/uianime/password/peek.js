// blushing girl with long sakura pink hair and a mint headband covering her eyes with both hands, then parting two fingers to peek up at a password field of bouncing dots with a lock icon
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#ffa8c5',HD='#e64980',HL='#fff0f6',EYE='#ffa94d',ED='#e8590c',CAR='#a5d8ff',CD='#4dabf7',BL='#ff8787',HB='#63e6be',FLD='#fff',DOT='#343a40',GD='#ffd43b',GDD='#f59f00',SW='#a5d8ff',Z=.8
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const eye=(c,x,y,g)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+g,y-2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+g,y-12,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+g,y-1,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+g-4,y-9,4.5,0,T);c.fill();c.beginPath();c.arc(x+g+5,y+4,2,0,T);c.fill();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.stroke()
}
const hand=(c,x,y,d,sp)=>{c.save();c.translate(x,y);c.rotate(-d*.08);c.fillStyle=SKIN;c.lineWidth=6
  c.beginPath();c.ellipse(-d*22,14,7,13,-d*.45,0,T);c.fill();c.stroke()
  for(const k of[0,1,2,3]){const a=(k-1.5)*.06+(k==1?-sp:k==2?sp:0)*.42,o=k==0||k==3?7:0;c.save();c.translate((k-1.5)*10.5,4);c.rotate(a);c.beginPath();c.roundRect(-6.5,-48+o,13,52-o,6.5);c.fill();c.stroke();c.restore()}
  c.beginPath();c.roundRect(-21,-2,42,32,13);c.fill();c.stroke()
  c.lineWidth=3.5;for(const k of[-1,0,1])c.beginPath(),c.moveTo(k*10.5,2),c.lineTo(k*10.5,8),c.stroke();c.restore()}
export default(c,t,i)=>{
  const sp=ease((t-.2)/.1)-ease((t-.72)/.1),g=t<.45?-3:5
  c.fillStyle=FLD;c.lineWidth=6;c.beginPath();c.roundRect(12,14,232,58,16);c.fill();c.stroke()
  ds(c,13,6,'#ced4da',()=>{c.arc(40,36,9,PI,0);c.lineTo(49,44)})
  c.fillStyle=GD;c.lineWidth=5;c.beginPath();c.roundRect(26,38,28,24,6);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(40,48,3.5,0,T);c.fill();c.fillRect(38.5,48,3,7)
  c.fillStyle=DOT;for(let k=0;k<5;k++){const b=max(0,sin(T*(t*2-k*.12)));c.beginPath();c.arc(84+k*28,44-8*b,9.5,0,T);c.fill()}
  if(i%6<3){c.lineWidth=5;c.beginPath();c.moveTo(222,30);c.lineTo(222,56);c.stroke()}
  const H=f=>{c.save();c.translate(128,216-5*sp);c.rotate(.05*sp+.03*sin(T*t));c.scale(Z,Z);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(206,34,222,100,216,170);c.quadraticCurveTo(214,240,246,300);c.lineTo(10,300);c.quadraticCurveTo(42,240,40,170);c.bezierCurveTo(34,100,50,34,128,34);c.fill();c.stroke()
    c.fillStyle=CAR;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,380);c.lineTo(216,380);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(106,190);c.lineTo(128,230);c.lineTo(150,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103,140,g);eye(c,153,140,g)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*40,160,18,10,0,0,T),c.fill()
    c.lineWidth=5;c.beginPath();c.moveTo(120,180);c.quadraticCurveTo(124,175,128,179);c.quadraticCurveTo(132,183,136,178);c.stroke()
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,170)
    c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,192,170)
    c.quadraticCurveTo(186,124,180,104);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,76,104);c.quadraticCurveTo(68,128,64,170);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=8;for(const[s,e]of[[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
    c.fillStyle=HB;c.lineWidth=8;c.beginPath();c.moveTo(62,96);c.bezierCurveTo(66,30,190,30,194,96);c.lineTo(182,96);c.bezierCurveTo(176,48,80,48,74,96);c.closePath();c.fill();c.stroke()
    c.fillStyle=SW;c.lineWidth=7;c.beginPath();c.moveTo(196,92);c.quadraticCurveTo(210,112,196,120);c.quadraticCurveTo(182,112,196,92);c.fill();c.stroke()
    c.strokeStyle=BL;c.lineWidth=4;for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+k-3,160),c.lineTo(128+k+3,150),c.stroke();c.strokeStyle='#111'
    for(const d of[-1,1])ds(c,24,14,CAR,()=>{c.moveTo(128+d*30,192);c.quadraticCurveTo(128+d*46,250,128+d*64,330)})
    hand(c,98,166,-1,0);hand(c,157,166,1,sp)
  })
}
