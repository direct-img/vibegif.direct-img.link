// plum-haired girl tucked into a kotatsu peeling a mikan strip by strip, tea steaming beside her
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=20,delay=80
const SKIN='#ffe3d1',HAIR='#be4bdb',HD='#862e9c',HL='#f3d9fa',EYE='#fcc419',ED='#e67700',SW='#96f2d7',SD='#38d9a9',WOOD='#d9a066',WD='#a9744f',QU='#ff8787',QD='#fa5252',MI='#ff922b',MD='#e8590c',PITH='#ffe8cc',BL='#ffa8a8',Z=.74
const cl=x=>max(0,min(1,x)),ease=x=>x*x*(3-2*x)
const eye=(c,x,y,d,bl)=>{
  c.lineWidth=7;c.beginPath();c.moveTo(x-17,y-4);c.quadraticCurveTo(x,bl?y+4:y+10,x+17,y-4);c.moveTo(x+d*16,y-4);c.lineTo(x+d*23,y-9);c.stroke()
  if(!bl)for(const k of[-8,0,8])c.lineWidth=4,c.beginPath(),c.moveTo(x+k,y+(k?5:7)),c.lineTo(x+k*1.3,y+(k?11:13)),c.stroke()
}
export default(c,t)=>{
  const mx=128,my=176,r=27,pa=cl(t/.55),pb=cl((t-.55)/.15),pc=ease(cl((t-.55)/.45))
  const E=pa<1?[mx+14+34*pa,my-r-6+40*pa]:[mx+48-34*pc,my+6-(r+12)*pc]
  c.save();c.translate(128,152);c.scale(Z,Z);c.translate(-128,-186)
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.arc(128,40,30,0,T);c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=4;c.beginPath();c.arc(128,40,18,PI*.9,PI*2.1);c.stroke();c.beginPath();c.arc(124,46,10,PI*1.1,PI*2.2);c.stroke()
  for(const[l,s]of[[11,'#111'],[5,WD]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(92,22),c.lineTo(168,52),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(128,50);c.bezierCurveTo(60,50,56,120,66,176);c.quadraticCurveTo(78,180,84,160);c.lineTo(172,160);c.quadraticCurveTo(178,180,190,176);c.bezierCurveTo(200,120,196,50,128,50);c.fill();c.stroke()
  c.fillStyle=SW;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(58,196,44,250);c.lineTo(212,250);c.quadraticCurveTo(198,196,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.rect(116,168,24,26);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.fillStyle=SW;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(128,204,156,190);c.lineTo(156,200);c.quadraticCurveTo(128,214,100,200);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  const bl=t>=.8&&t<.85
  eye(c,103,140,-1,bl);eye(c,153,140,1,bl)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,160,13,7,0,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.moveTo(118,166);c.quadraticCurveTo(123,172,128,166);c.quadraticCurveTo(133,172,138,166);c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,140)
  c.bezierCurveTo(54,74,88,46,128,46);c.bezierCurveTo(168,46,202,74,186,140)
  c.quadraticCurveTo(182,112,170,100);c.quadraticCurveTo(162,108,158,116);c.quadraticCurveTo(152,98,138,92);c.quadraticCurveTo(132,104,126,112)
  c.quadraticCurveTo(118,96,104,94);c.quadraticCurveTo(98,106,96,116);c.quadraticCurveTo(90,104,84,102);c.quadraticCurveTo(72,116,70,140);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.28,1.4],[1.48,1.56],[1.64,1.74]])c.beginPath(),c.arc(128,104,50,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.restore()
  c.lineWidth=6;c.fillStyle=QU;c.beginPath();c.moveTo(22,196);c.quadraticCurveTo(8,226,6,248);c.quadraticCurveTo(68,240,128,248);c.quadraticCurveTo(188,240,250,248);c.quadraticCurveTo(248,226,234,196);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=QD;for(let x=-2;x<9;x++)for(let y=0;y<2;y++)c.beginPath(),c.arc(18+x*30+(y%2)*15,220+y*20,5,0,T),c.fill();c.restore()
  c.fillStyle=WOOD;c.beginPath();c.moveTo(40,170);c.lineTo(216,170);c.lineTo(240,198);c.lineTo(16,198);c.closePath();c.fill();c.stroke()
  c.fillStyle=WD;c.beginPath();c.rect(16,198,224,9);c.fill();c.stroke()
  c.fillStyle=MI;c.lineWidth=4;for(let k=0;k<5;k++){const a=k*T/5+.3,px=202,py=186;c.beginPath();c.moveTo(px,py);c.quadraticCurveTo(px+cos(a-.6)*22,py+sin(a-.6)*11,px+cos(a)*24,py+sin(a)*12);c.quadraticCurveTo(px+cos(a+.6)*22,py+sin(a+.6)*11,px,py);c.fill();c.stroke()}
  c.fillStyle=PITH;c.beginPath();c.ellipse(202,186,7,4,0,0,T);c.fill();c.stroke()
  for(const k of[0,1]){const p=(t*2+k*.5)%1,y=164-p*36,w=sin(PI*p);if(w>.2)for(const[l,s]of[[4+5*w,'#111'],[4*w,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(56+k*10,y),c.quadraticCurveTo(56+k*10+6*sin(p*T+k*3),y-8,56+k*10-5*sin(p*T),y-16),c.stroke()}
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff9db';c.beginPath();c.moveTo(48,170);c.lineTo(50,192);c.quadraticCurveTo(60,198,70,192);c.lineTo(72,170);c.quadraticCurveTo(60,176,48,170);c.fill();c.stroke()
  c.fillStyle='#69db7c';c.beginPath();c.ellipse(60,170,12,4,0,0,T);c.fill();c.stroke()
  c.strokeStyle='#4dabf7';c.lineWidth=3;c.beginPath();c.moveTo(50,182);c.quadraticCurveTo(60,187,71,182);c.stroke();c.strokeStyle='#111'
  for(const[a,b]of[[[92,166],[mx-r-4,my+6]],[[164,166],E]])for(const[l,s]of[[26,'#111'],[15,SW]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(...a),c.quadraticCurveTo(a[0],b[1],(a[0]+b[0]*2)/3,(a[1]+b[1]*2)/3+4),c.stroke()
  c.strokeStyle='#111'
  c.lineWidth=5;c.fillStyle=MI;c.beginPath();c.arc(mx,my,r,0,T);c.fill();c.stroke()
  c.save();c.beginPath();c.arc(mx,my,r-2.5,0,T);c.clip();const sh=48*pc,len=2*r*(pa<1?pa:1)*.9
  if(len>2){c.fillStyle=PITH;c.beginPath();c.roundRect(mx-8+sh,my-r-4,20,len+4,8);c.fill();c.strokeStyle='#ffc078';c.lineWidth=2.5;c.beginPath();c.moveTo(mx+2+sh,my-r);c.lineTo(mx+2+sh,my-r+len);c.stroke()}
  c.fillStyle=MD;for(const[x,y]of[[-13,5],[10,13],[-5,-10],[15,-6],[-17,-8],[0,16],[16,6]])if(!(len>2&&x+mx>mx-10+sh&&x+mx<mx+14+sh))c.beginPath(),c.arc(mx+x,my+y,1.6,0,T),c.fill()
  c.restore();c.strokeStyle='#111';c.lineWidth=4;c.fillStyle='#51cf66';c.beginPath();c.ellipse(mx-7,my-r-2,10,5,-.4,0,T);c.fill();c.stroke()
  if(pb<1&&t>.02){const[ex,ey]=pa<1?E:[mx+48+(200-mx-48)*pb,my+6+(184-my-6)*pb],[ax,ay]=pa<1?[mx+3,my-r+3]:[ex-34*(1-pb),ey-10*(1-pb)],s=1-pb*.5;for(const[l,st]of[[16*s,'#111'],[8*s,MI]])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(ax,ay),c.quadraticCurveTo((ax+ex)/2+16,(ay+ey)/2-14,ex,ey),c.stroke()}
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN
  c.beginPath();c.ellipse(mx-r-4,my+6,10,11,0,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(E[0]+2,E[1]+2,10,9,0,0,T);c.fill();c.stroke()
}
