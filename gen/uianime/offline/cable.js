// confused girl with mint twin buns holding up an unplugged cable that crackles with little sparks, tilting her head side to side as ? marks pop
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=12,delay=95
const SKIN='#ffe3d1',HAIR='#63e6be',HD='#12b886',HL='#e6fcf5',EYE='#f06595',ED='#a61e4d',OV='#ffd43b',OD='#f59f00',BL='#ffa8a8',CAB='#dee2e6',PL='#f8f9fa',PR='#adb5bd',ZAP='#ffe066',Q=['#ff8787','#748ffc'],SW='#a5d8ff'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,gx)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+gx,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+gx,y-8,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+gx,y+3,4.5,6.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+gx-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+gx+5,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+18);c.lineTo(x+8,y+18);c.stroke()
}
const qm=(c,x,y,s,col)=>{c.save();c.translate(x,y);c.scale(s,s)
  for(const[l,k]of[[13,'#111'],[6,col]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),c.moveTo(-10,-12),c.quadraticCurveTo(-10,-24,2,-24),c.quadraticCurveTo(14,-24,12,-12),c.quadraticCurveTo(10,-4,1,0),c.lineTo(1,6),c.stroke()
  c.fillStyle=col;c.lineWidth=4;c.strokeStyle='#111';c.beginPath();c.arc(1,19,5,0,T);c.fill();c.stroke();c.restore()}
const zap=(c,x,y,a,s)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.fillStyle=ZAP;c.lineWidth=3;c.beginPath();for(const[u,v]of[[-2,-12],[7,-12],[2,-3],[8,-3],[-5,12],[-1,1],[-7,1]])c.lineTo(u,v);c.closePath();c.fill();c.stroke();c.restore()}
export default(c,t,i)=>{
  const k=i%6,tilt=(i<6?1:-1)*.1*min(1,k/1.5,(6-k)/1.5)*(k<1?0:1),side=i<6?1:-1
  const H=f=>{c.save();c.translate(108,198);c.scale(.82,.82);c.rotate(tilt);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=7;c.fillStyle=HAIR;for(const d of[-1,1])c.beginPath(),c.arc(128+d*58,58,28,0,T),c.fill(),c.stroke()
    c.strokeStyle=HL;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.arc(128+d*58,58,18,PI*1.1,PI*1.5),c.stroke();c.strokeStyle='#111'
    c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,206,158);c.quadraticCurveTo(204,180,184,180);c.lineTo(72,180);c.quadraticCurveTo(52,180,50,158);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
  })
  c.save();c.translate(108,198);c.scale(.82,.82);c.translate(-128,-186)
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(98,190);c.quadraticCurveTo(56,198,48,262);c.lineTo(208,262);c.quadraticCurveTo(200,198,158,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=OV;c.beginPath();c.moveTo(92,262);c.lineTo(96,222);c.lineTo(160,222);c.lineTo(164,262);c.closePath();c.fill();c.stroke()
  for(const d of[-1,1])ds(c,14,6,OV,()=>{c.moveTo(128+d*30,224);c.lineTo(128+d*38,196)})
  c.fillStyle=OD;c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.arc(128+d*28,232,5,0,T),c.fill(),c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(116,236,24,16,5);c.fill();c.stroke()
  c.fillStyle=SKIN;c.lineWidth=7;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
  c.restore()
  H(()=>{
    c.lineWidth=7;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103,142,-1,4);eye(c,153,142,1,4)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,13,7,0,0,T),c.fill()
    c.lineWidth=3;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,167),c.lineTo(128+d*44+k+2,161),c.stroke()
    c.lineWidth=4.5;c.beginPath();c.moveTo(114,172);c.quadraticCurveTo(119,166,124,172);c.quadraticCurveTo(129,178,134,172);c.quadraticCurveTo(139,166,144,172);c.stroke()
    c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,156)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,156)
    c.quadraticCurveTo(186,120,178,104);c.quadraticCurveTo(170,106,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,126,68,156);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=6;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.moveTo(88,120);c.quadraticCurveTo(100,110,114,116);c.moveTo(144,120);c.lineTo(168,122);c.stroke()
    c.fillStyle=SW;c.lineWidth=5;c.beginPath();c.moveTo(190,104);c.quadraticCurveTo(200,122,190,128);c.quadraticCurveTo(180,122,190,104);c.fill();c.stroke()
  })
  ds(c,22,12,SKIN,()=>{c.moveTo(160,240);c.lineTo(214,214);c.lineTo(206,176)})
  ds(c,20,11,CAB,()=>{c.moveTo(206,176);c.bezierCurveTo(200,236,246,214,244,256)})
  c.save();c.translate(206,146);c.rotate(.22)
  c.fillStyle=PR;c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.roundRect(d*8-3.5,-36,7,18,2),c.fill(),c.stroke()
  c.fillStyle=PL;c.lineWidth=5;c.beginPath();c.roundRect(-18,-22,36,34,8);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(-10,-2);c.lineTo(10,-2);c.moveTo(-10,4);c.lineTo(10,4);c.stroke()
  const b=i%2*.3
  for(let m=0;m<5;m++){const an=-PI/2+(m-2)*.6+b,r=24+(m+i)%2*7;ds(c,8,4,ZAP,()=>{c.moveTo(cos(an)*15,-40+sin(an)*15);c.lineTo(cos(an)*r,-40+sin(an)*r)})}
  zap(c,i%2?-24:24,-52,i%2?-.4:.4,1.3)
  c.restore()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(206,170,13,12,.2,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(196,164,5,8,-.6,0,T);c.fill();c.stroke()
  const p=k/6,s=min(1,p*4)*(1-max(0,p-.75)*4)
  if(s>.05)qm(c,side>0?42:172,62-14*p,.6+.5*s,Q[i<6?0:1])
}
