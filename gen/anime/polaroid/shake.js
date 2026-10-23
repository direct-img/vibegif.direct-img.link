// chibi with chestnut pigtails shaking an instant photo while the picture develops, beaming at it, then flipping it over to a fresh blank one
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#8b4f2f',HD='#6a3a21',HL='#d9a382',EYE='#c0803f',ED='#7f5539',BL='#ffa8a8',CAR='#fcc419',CAD='#f59f00',SKT='#4dabf7',SKD='#1c7ed6',SCR='#f06595',CAM='#ffc9de',CMD='#f783ac',SHOE='#e03131'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip()
  c.beginPath();c.ellipse(x+5,y,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(x+5,y-10,13,10,0,0,T);c.fill();c.restore()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+6,y+1,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+1,y-6,4.5,0,T);c.fill();c.beginPath();c.arc(x+10,y+7,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const star=(c,x,y,r)=>{c.fillStyle='#ffd43b';c.lineWidth=3;c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,q=k%2?r*.35:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();c.fill();c.stroke()}
export default(c,t,i)=>{
  const sh=t<.6,dev=sh?1-t/.6:t<.85?0:1,fl=t>=.85?cos(PI*(t-.85)/.15):1,happy=!sh&&t<.85,j=sh?(i%2?1:-1):0,ov=t>=.85&&fl<0?1:dev
  c.translate(140,246);c.scale(1.1,1.1);c.translate(-140,-246)
  for(const d of[-1,1])ds(c,13,7,SKIN,()=>{c.moveTo(104+d*10,200);c.lineTo(104+d*11,232)})
  c.fillStyle='#fff';c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.roundRect(98+d*11,222,12,12,3),c.fill(),c.stroke()
  c.fillStyle=SHOE;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.ellipse(104+d*13,240,12,6,0,0,T),c.fill(),c.stroke()
  c.lineWidth=6;c.fillStyle=SKT;c.beginPath();c.moveTo(84,180);c.lineTo(124,180);c.lineTo(134,208);c.lineTo(74,208);c.closePath();c.fill();c.stroke()
  c.strokeStyle=SKD;c.lineWidth=3;c.beginPath();for(const x of[94,104,114])c.moveTo(x,184),c.lineTo(x+(x-104)*.3,206);c.stroke();c.strokeStyle='#111'
  c.lineWidth=6;c.fillStyle=CAR;c.beginPath();c.moveTo(90,128);c.quadraticCurveTo(76,134,78,186);c.lineTo(130,186);c.quadraticCurveTo(132,134,118,128);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(94,128);c.lineTo(104,148);c.lineTo(114,128);c.closePath();c.fill();c.stroke()
  c.fillStyle=CAD;for(const y of[156,170])c.beginPath(),c.arc(104,y,3,0,T),c.fill(),c.stroke()
  ds(c,6,2.5,CMD,()=>{c.moveTo(94,130);c.lineTo(90,158);c.moveTo(114,130);c.lineTo(118,158)})
  c.fillStyle=CAM;c.lineWidth=5;c.beginPath();c.roundRect(84,152,40,28,6);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(104,167,9,0,T);c.fill();c.stroke();c.fillStyle='#495057';c.beginPath();c.arc(104,167,4.5,0,T);c.fill()
  c.fillStyle=CMD;c.lineWidth=3;c.beginPath();c.rect(88,156,7,5);c.fill();c.stroke()
  ds(c,17,9,CAR,()=>{c.moveTo(86,136);c.lineTo(72,170);c.lineTo(80,186)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.arc(81,188,7,0,T);c.fill();c.stroke()
  c.save();c.translate(104,86);c.scale(.6,.6);c.translate(-128,-120)
  for(const d of[-1,1]){c.save();c.translate(128+d*66,150);c.rotate(d*.15)
    c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(0,0);c.bezierCurveTo(d*30,10,d*30,60,d*10,98);c.quadraticCurveTo(d*2,108,-d*6,96);c.bezierCurveTo(d*10,60,-d*4,26,0,0);c.fill();c.stroke()
    c.restore();c.fillStyle=SCR;c.beginPath();c.ellipse(128+d*64,150,14,10,d*.5,0,T);c.fill();c.stroke()}
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,208,100,196,156);c.lineTo(60,156);c.bezierCurveTo(48,100,60,36,128,36);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(happy){c.lineWidth=7;for(const x of[103,153])c.beginPath(),c.arc(x,146,15,1.15*PI,1.85*PI),c.stroke()}else eye(c,103,140,-1),eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,13,7,0,0,T),c.fill()
  c.lineWidth=5;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(114,164);c.quadraticCurveTo(128,186,142,164);c.closePath();c.fill();c.stroke()
  c.fillStyle='#ff8fab';c.lineWidth=3;c.beginPath();c.ellipse(128,176,6,4,0,0,T);c.fill()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
  c.bezierCurveTo(52,76,88,38,128,38);c.bezierCurveTo(168,38,204,76,188,150)
  c.quadraticCurveTo(188,118,180,102);c.lineTo(166,108);c.lineTo(160,92);c.lineTo(146,104);c.lineTo(138,88);c.lineTo(126,104)
  c.lineTo(116,88);c.lineTo(106,106);c.lineTo(94,94);c.lineTo(88,110);c.lineTo(78,104);c.quadraticCurveTo(70,124,68,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[s,e]of[[1.26,1.38],[1.46,1.54],[1.62,1.72]])c.beginPath(),c.arc(128,106,58,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
  c.restore()
  const hx=172+5*j,hy=118
  ds(c,17,9,CAR,()=>{c.moveTo(120,136);c.lineTo(150,140);c.lineTo(hx,hy+6)})
  c.save();c.translate(hx+4,hy-24);c.rotate(.22*j+.05);c.scale(fl,1)
  c.fillStyle=fl<0?'#e9ecef':'#fff';c.lineWidth=5;c.beginPath();c.roundRect(-24,-30,48,58,3);c.fill();c.stroke()
  if(fl>=0){c.save();c.beginPath();c.rect(-18,-24,36,36);c.clip()
    c.fillStyle='#a5d8ff';c.fillRect(-18,-24,36,36);c.fillStyle='#69db7c';c.beginPath();c.ellipse(-4,16,30,14,0,0,T);c.fill();c.stroke()
    c.fillStyle='#ffd43b';c.lineWidth=3;c.beginPath();c.arc(8,-12,6,0,T);c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.ellipse(-8,-10,7,4,0,0,T);c.fill();c.stroke()
    if(ov>0)c.fillStyle=`rgba(92,75,64,${min(1,ov)})`,c.fillRect(-18,-24,36,36)
    c.restore();c.lineWidth=3;c.strokeRect(-18,-24,36,36)}
  c.restore()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx,hy,9,10,0,0,T);c.fill();c.stroke()
  if(sh)for(const d of[-1,1])ds(c,6,2.5,'#fff',()=>{c.moveTo(hx+4+d*34,hy-34);c.quadraticCurveTo(hx+4+d*40,hy-24,hx+4+d*34,hy-14)})
  if(happy){const s=sin(PI*(t-.6)/.25);star(c,214,60,9*s);star(c,146,58,6*s);star(c,222,124,5*s)}
}
