// sunflower twintail girl frozen mid disco pose on one leg next to a big pulsing pause button, music notes stuck in the air, only her eyes dart around while a sweatdrop slides and she trembles
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#ffd43b',HD='#f08c00',HL='#fff9db',EYE='#4dabf7',ED='#1864ab',TOP='#ff8787',SK='#4dabf7',SKD='#1c7ed6',SH='#ff6b6b',RB='#4dabf7',BL='#ffa8a8',PA='#9775fa',PAD='#7048e8',NT='#ff922b',SW='#a5d8ff'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const eye=(c,x,y,d,lx)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+lx,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+lx,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+lx,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+lx-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+lx+5,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const note=(c,x,y,a)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle=NT;c.lineWidth=5
  c.beginPath();c.moveTo(4,10);c.lineTo(4,-20);c.lineTo(20,-14);c.lineTo(20,4);c.stroke()
  for(const[cx,cy]of[[-2,10],[14,4]])c.beginPath(),c.ellipse(cx,cy,7,5.5,-.4,0,T),c.fill(),c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(4,-20);c.lineTo(20,-14);c.stroke();c.restore()}
export default(c,t,i)=>{
  const pz=1+.07*sin(T*t*2),tr=.012*sin(T*t*8),lx=t>.12&&t<.44?-4:t>.56&&t<.88?4:0,bk=i==7,sd=ease(t/.8)
  c.save();c.translate(62,66);c.scale(pz,pz)
  c.fillStyle='rgba(151,117,250,.25)';c.beginPath();c.arc(0,0,56,0,T);c.fill()
  c.fillStyle=PA;c.lineWidth=7;c.beginPath();c.roundRect(-42,-42,84,84,22);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;for(const x of[-14,14])c.beginPath(),c.roundRect(x-8,-24,16,48,6),c.fill(),c.stroke()
  c.strokeStyle=PAD;c.lineWidth=5;c.beginPath();c.arc(0,0,32,PI*.15,PI*.45);c.stroke();c.restore();c.strokeStyle='#111'
  note(c,40+sin(T*t*8),170,-.2);note(c,226+sin(T*t*8+1),30,.25)
  c.save();c.translate(146,246);c.rotate(tr);c.scale(1.08,1.08);c.translate(-146,-246)
  const H=f=>{c.save();c.translate(156,112);c.rotate(.1);c.scale(.6,.6);c.translate(-128,-128);f();c.restore()}
  H(()=>{c.lineWidth=9
    for(const d of[-1,1]){c.save();c.translate(128+d*62,84);c.rotate(d*-.28+tr*3)
      c.fillStyle=HAIR;c.beginPath();c.moveTo(0,0);c.bezierCurveTo(d*40,2,d*54,80,d*30,150);c.quadraticCurveTo(d*22,166,d*8,158);c.bezierCurveTo(d*26,100,d*8,40,0,0);c.fill();c.stroke()
      c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.moveTo(d*12,16);c.bezierCurveTo(d*28,50,d*34,100,d*22,140);c.stroke();c.strokeStyle='#111';c.lineWidth=9;c.restore()}
    c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,206,96,198,150);c.lineTo(58,150);c.bezierCurveTo(50,96,60,34,128,34);c.fill();c.stroke()})
  ds(c,17,10,SKIN,()=>{c.moveTo(150,200);c.lineTo(146,234)})
  ds(c,17,10,SKIN,()=>{c.moveTo(164,200);c.lineTo(190,218);c.lineTo(166,232)})
  c.lineWidth=5;c.fillStyle=SH;c.beginPath();c.ellipse(140,238,13,7,0,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(161,236,12,6.5,-.5,0,T);c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=SK;c.beginPath();c.moveTo(140,184);c.lineTo(174,184);c.lineTo(190,206)
  for(let k=1;k<=4;k++)c.quadraticCurveTo(190-k*16+8,212,190-k*16,206)
  c.closePath();c.fill();c.stroke()
  c.strokeStyle=SKD;c.lineWidth=4;c.beginPath();c.moveTo(150,190);c.lineTo(146,204);c.moveTo(164,190);c.lineTo(168,204);c.stroke();c.strokeStyle='#111'
  ds(c,17,10,TOP,()=>{c.moveTo(142,156);c.quadraticCurveTo(116,170,138,184)})
  c.lineWidth=6;c.fillStyle=TOP;c.beginPath();c.moveTo(144,148);c.lineTo(170,148);c.quadraticCurveTo(178,150,178,160);c.lineTo(174,186);c.lineTo(140,186);c.lineTo(136,160);c.quadraticCurveTo(136,150,144,148);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();for(let k=0;k<10;k++){const a=-PI/2+k*PI/5,r=k%2?4:9;c.lineTo(157+r*cos(a),168+r*sin(a))}c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(140,184,8,7,0,0,T);c.fill();c.stroke()
  H(()=>{c.lineWidth=9
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(bk){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,150,x+15,142),c.stroke()}
    else eye(c,103,140,-1,lx),eye(c,153,140,1,lx)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(112,164);c.quadraticCurveTo(128,168,144,164);c.quadraticCurveTo(142,184,128,184);c.quadraticCurveTo(114,184,112,164);c.fill();c.stroke()
    c.save();c.clip();c.fillStyle='#ff8fab';c.beginPath();c.ellipse(128,186,9,7,0,0,T);c.fill();c.restore()
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,146)
    c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,146)
    c.quadraticCurveTo(186,116,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
    c.quadraticCurveTo(132,96,124,90);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(106,96,96,94);c.quadraticCurveTo(90,104,86,112)
    c.quadraticCurveTo(80,104,78,102);c.quadraticCurveTo(70,120,70,146);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=RB;c.lineWidth=7
    for(const d of[-1,1]){c.save();c.translate(128+d*62,84);c.rotate(d*-.28+tr*3);for(const e of[-1,1])c.beginPath(),c.moveTo(0,0),c.quadraticCurveTo(e*20,-20,e*24,-2),c.quadraticCurveTo(e*18,10,0,0),c.fill(),c.stroke();c.beginPath();c.arc(0,0,8,0,T);c.fill();c.stroke();c.restore()}
    const sy=96+40*sd;if(t<.9){c.save();c.globalAlpha=min(1,t*8,(0.9-t)*10);c.fillStyle=SW;c.lineWidth=6;c.beginPath();c.moveTo(66,sy-20);c.quadraticCurveTo(80,sy,66,sy+7);c.quadraticCurveTo(52,sy,66,sy-20);c.fill();c.stroke();c.restore()}
  })
  ds(c,17,10,TOP,()=>{c.moveTo(172,156);c.quadraticCurveTo(190,130,206,98)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(208,94,9,9,0,0,T);c.fill();c.stroke()
  ds(c,10,5,SKIN,()=>{c.moveTo(211,88);c.lineTo(220,70)})
  c.restore()
}
