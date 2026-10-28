// navy haired security guard girl in a peaked cap squinting at an ID badge she holds up, shaking her head, then a red X stamps down onto the badge
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#3b5bdb',HD='#2a3a96',HL='#bac8ff',EYE='#fcc419',ED='#e67700',SHT='#a5d8ff',CAP='#343a40',CL='#868e96',GD='#ffd43b',BL='#ffa8a8',HDR='#4dabf7',PH='#d0ebff',SIL='#adb5bd',RD='#fa5252',Z=.7
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,g,h)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+g,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+g,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+g,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+g-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+g+5,y+8,2,0,T);c.fill()
  c.fillStyle=SKIN;c.fillRect(x-20,y-24,40,7+h);c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6+h*.7);c.quadraticCurveTo(x,y-20+h,x+16,y-6+h*.7);c.moveTo(x+d*15,y-7+h*.7);c.lineTo(x+d*21,y-12+h*.7);c.stroke()
}
const G={0:c=>{c.moveTo(7,0);c.ellipse(0,0,7,10,0,0,T)},1:c=>{c.moveTo(-4,-6);c.lineTo(1,-10);c.lineTo(1,10)},4:c=>{c.moveTo(4,10);c.lineTo(4,-10);c.lineTo(-7,4);c.lineTo(7,4)}}
export default(c,t,i)=>{
  const sh=i>5&&i<10,st=i>9&&i<14,ins=!sh&&!st,r=sh?(i%2?-.1:.1):0,cx=64,cy=120+(i==10?6:i==11?2:0)+3*sin(T*t*2),ca=-.06+.04*sin(T*t)
  const H=f=>{c.save();c.translate(176,150);c.scale(Z,Z);c.translate(-128,-186);f();c.restore()}
  const R=f=>{c.save();c.translate(128+(ins?-6:0),186);c.rotate(r);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8
    R(()=>{c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,214,100,206,166);c.quadraticCurveTo(204,198,178,200);c.lineTo(78,200);c.quadraticCurveTo(52,198,50,166);c.bezierCurveTo(42,100,58,34,128,34);c.fill();c.stroke()})
    c.fillStyle=SHT;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,380);c.lineTo(216,380);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=HD;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*46,198),c.lineTo(128+d*74,206),c.lineTo(128+d*80,222),c.lineTo(128+d*50,214),c.closePath(),c.fill(),c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=HD;c.beginPath();c.moveTo(121,204);c.lineTo(135,204);c.lineTo(140,262);c.lineTo(128,276);c.lineTo(116,262);c.closePath();c.fill();c.stroke()
    c.fillStyle=SHT;for(const d of[-1,1])c.beginPath(),c.moveTo(128,208),c.lineTo(128+d*28,186),c.lineTo(128+d*36,222),c.closePath(),c.fill(),c.stroke()
    c.fillStyle=GD;c.lineWidth=6;c.beginPath();c.moveTo(176,236);c.lineTo(190,242);c.quadraticCurveTo(190,262,176,270);c.quadraticCurveTo(162,262,162,242);c.closePath();c.fill();c.stroke()
    R(()=>{
      c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
      if(sh){c.lineWidth=8;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*38,128),c.lineTo(128+d*18,140),c.lineTo(128+d*38,152),c.stroke()}
      else eye(c,103,140,-1,ins?-5:0,ins?12:3),eye(c,153,140,1,ins?-5:0,ins?12:3)
      c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
      c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
      c.lineWidth=6;c.beginPath();if(ins)c.moveTo(116,172),c.quadraticCurveTo(124,166,130,171),c.quadraticCurveTo(136,175,140,170);else c.arc(128,182,12,1.2*PI,1.8*PI);c.stroke()
      c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,160)
      c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,190,160)
      c.quadraticCurveTo(186,124,180,104);c.lineTo(170,114);c.lineTo(162,100);c.lineTo(150,112);c.lineTo(140,98);c.lineTo(128,112)
      c.lineTo(116,98);c.lineTo(106,112);c.lineTo(94,100);c.lineTo(86,114);c.lineTo(76,104);c.quadraticCurveTo(70,124,66,160);c.closePath();c.fill();c.stroke()
      c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.12,1.2],[1.8,1.88]])c.beginPath(),c.arc(128,110,62,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
      if(!ins){c.lineWidth=6;c.beginPath();c.moveTo(86,108);c.lineTo(114,118);c.moveTo(170,108);c.lineTo(142,118);c.stroke()}
      c.lineWidth=8;c.fillStyle=CAP;c.beginPath();c.moveTo(70,94);c.lineTo(46,52);c.quadraticCurveTo(128,-4,210,52);c.lineTo(186,94);c.closePath();c.fill();c.stroke()
      c.strokeStyle=CL;c.lineWidth=6;c.beginPath();c.moveTo(70,46);c.quadraticCurveTo(100,26,124,22);c.stroke();c.strokeStyle='#111'
      c.fillStyle='#111';c.beginPath();c.moveTo(60,98);c.quadraticCurveTo(128,74,196,98);c.quadraticCurveTo(202,112,190,112);c.quadraticCurveTo(128,92,66,112);c.quadraticCurveTo(54,112,60,98);c.fill();c.stroke()
      c.strokeStyle='#495057';c.lineWidth=5;c.beginPath();c.moveTo(84,100);c.quadraticCurveTo(128,88,172,100);c.stroke();c.strokeStyle='#111'
      c.fillStyle=GD;c.lineWidth=6;c.beginPath();c.moveTo(128,34);c.lineTo(146,42);c.quadraticCurveTo(146,64,128,74);c.quadraticCurveTo(110,64,110,42);c.closePath();c.fill();c.stroke()
    })
  })
  c.save();c.translate(cx,cy);c.rotate(ca)
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.roundRect(-46,-62,92,124,12);c.fill()
  c.save();c.clip();c.fillStyle=HDR;c.fillRect(-50,-66,100,32);c.restore()
  c.beginPath();c.roundRect(-46,-62,92,124,12);c.stroke();c.lineWidth=5;c.beginPath();c.moveTo(-46,-34);c.lineTo(46,-34);c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(-13,-54,26,9,4.5);c.fill();c.stroke()
  c.fillStyle=PH;c.lineWidth=5;c.beginPath();c.roundRect(-26,-24,52,48,8);c.fill()
  c.save();c.clip();c.fillStyle=SIL;c.lineWidth=4;c.beginPath();c.ellipse(0,30,22,18,0,0,T);c.fill();c.stroke();c.beginPath();c.arc(0,-2,11,0,T);c.fill();c.stroke();c.restore()
  c.beginPath();c.roundRect(-26,-24,52,48,8);c.stroke()
  for(const[k,n]of[[-1,4],[0,0],[1,1]]){c.save();c.translate(k*20,44);c.scale(.8,.8);c.beginPath();G[n](c);c.restore();c.lineWidth=5.5;c.strokeStyle=HD;c.stroke()}
  c.strokeStyle='#111'
  if(st||i>13){const s=i==10?1.35:i==14?.55:i==15?.2:1;c.save();c.scale(s,s);ds(c,18,10,RD,()=>{c.moveTo(-26,-24);c.lineTo(26,22);c.moveTo(26,-24);c.lineTo(-26,22)});c.restore()}
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(36,6,7,10,-.3,0,T);c.fill();c.stroke()
  c.restore()
  const hx=cx+44,hy=cy+12
  ds(c,20,11,SHT,()=>{c.moveTo(140,198);c.quadraticCurveTo(112,240,hx+2,hy+10)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx,hy,12,13,0,0,T);c.fill();c.stroke()
}
