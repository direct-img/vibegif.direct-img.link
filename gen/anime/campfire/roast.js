// girl with emerald braids and a knit beanie roasts a marshmallow on a stick over a crackling campfire, it puffs up golden
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#12b886',HD='#087f5b',HL='#c3fae8',EYE='#a9744f',ED='#5c3d2e',BEAN='#ff922b',BND='#e8590c',JK='#e64980',JD='#a61e4d',LOG='#a9744f',LD='#7c5236',F1='#ff6b6b',F2='#ffa94d',F3='#ffe066',ST='#ced4da',MAL='#fff',TOAST='#f4b860',BL='#ff8787'
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
const flame=(c,x,y,w,h,col,lw)=>{c.fillStyle=col;c.lineWidth=lw;c.beginPath();c.moveTo(x-w,y);c.bezierCurveTo(x-w*1.1,y-h*.5,x-w*.2,y-h*.6,x+w*.1,y-h);c.bezierCurveTo(x+w*.3,y-h*.55,x+w*1.2,y-h*.45,x+w,y);c.quadraticCurveTo(x,y+w*.5,x-w,y);c.closePath();c.fill();c.stroke()}
export default(c,t,i)=>{
  const p=T*t,glow=.5+.5*sin(p*4),puff=t<.6?min(1,t/.6):1-(t-.6)/.4*0,ms=1+.35*min(1,t/.7)*(t<.85?1:1-(t-.85)/.15),gold=min(1,t/.75)*(t<.9?1:1-(t-.9)/.1)
  const fx=172,fy=208
  c.fillStyle='#fff3bf';c.globalAlpha=.6+.2*glow;c.beginPath();c.ellipse(fx,fy+4,64,14,0,0,T);c.fill();c.globalAlpha=1
  for(const[x,a]of[[-30,.28],[30,-.28]]){c.save();c.translate(fx+x*.4,fy+2);c.rotate(a);c.fillStyle=LOG;c.lineWidth=5;c.beginPath();c.roundRect(-34,-8,68,16,8);c.fill();c.stroke();c.fillStyle='#ffd8a8';c.beginPath();c.ellipse(x>0?30:-30,0,6,8,0,0,T);c.fill();c.stroke();c.strokeStyle=LD;c.lineWidth=3;c.beginPath();c.moveTo(-18,-2);c.lineTo(10,-2);c.stroke();c.strokeStyle='#111';c.restore()}
  for(const[k,x]of[[0,-50],[1,-30],[2,32],[3,52]]){c.fillStyle=ST;c.lineWidth=4;c.beginPath();c.ellipse(fx+x,fy+12-(k%3)*2,11,7,0,0,T);c.fill();c.stroke()}
  const fl=[[-14,26,58,F1,1.3],[12,22,52,F1,2.1],[0,30,74,F1,0]]
  for(const[x,w,h,col,o]of fl)flame(c,fx+x+3*sin(p*3+o),fy,w,h*(1+.12*sin(p*4+o)),col,5)
  for(const[x,w,h,o]of[[-6,18,48,.7],[8,16,42,2.4],[0,20,56,1.5]])flame(c,fx+x+2*sin(p*3+o),fy-2,w,h*(1+.14*sin(p*4+o)),F2,0)
  flame(c,fx+2*sin(p*4),fy-4,12,34*(1+.12*sin(p*4+.3)),F3,0)
  c.lineWidth=3.5;for(let k=0;k<3;k++){const u=(t*2+k/3)%1,x=fx-20+k*20+10*sin(u*PI*2+k),y=fy-70-u*70,r=4*(1-u);if(r>.8){c.fillStyle=k%2?F3:F2;c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke()}}
  const head=g=>{c.save();c.translate(76,94);c.rotate(-.05);c.scale(.56,.56);c.translate(-128,-120);g();c.restore()}
  head(()=>{
    for(const d of[-1,1]){c.save();c.translate(128+d*56,148);c.rotate(-d*.08);c.fillStyle=HAIR;c.lineWidth=9;for(let k=0;k<4;k++){c.beginPath();c.ellipse(0,k*24,15-k*1.5,16,0,0,T);c.fill();c.stroke()}c.fillStyle=BEAN;c.beginPath();c.ellipse(0,92,10,7,0,0,T);c.fill();c.stroke();c.restore()}
    c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,40);c.bezierCurveTo(194,40,200,96,192,150);c.lineTo(64,150);c.bezierCurveTo(56,96,62,40,128,40);c.fill();c.stroke()
  })
  c.fillStyle=JK;c.lineWidth=5;c.beginPath();c.moveTo(56,132);c.lineTo(96,132);c.quadraticCurveTo(116,160,112,200);c.lineTo(40,200);c.quadraticCurveTo(36,160,56,132);c.closePath();c.fill();c.stroke()
  c.strokeStyle=JD;c.lineWidth=4;c.beginPath();c.moveTo(76,138);c.lineTo(76,198);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(60,132);c.quadraticCurveTo(76,146,92,132);c.quadraticCurveTo(76,126,60,132);c.fill();c.stroke()
  c.fillStyle=LOG;c.lineWidth=5;c.beginPath();c.roundRect(24,196,104,22,10);c.fill();c.stroke();c.fillStyle='#ffd8a8';c.beginPath();c.ellipse(28,207,7,10,0,0,T);c.fill();c.stroke();c.strokeStyle=LD;c.lineWidth=3;c.beginPath();c.moveTo(50,204);c.lineTo(110,204);c.moveTo(64,212);c.lineTo(100,212);c.stroke();c.strokeStyle='#111'
  for(const x of[56,90]){c.fillStyle=JD;c.lineWidth=5;c.beginPath();c.roundRect(x-10,192,26,16,8);c.fill();c.stroke()}
  for(const x of[64,96]){c.fillStyle='#868e96';c.lineWidth=5;c.beginPath();c.roundRect(x-4,214,16,20,6);c.fill();c.stroke();c.fillStyle=BND;c.beginPath();c.ellipse(x+6,236,13,7,0,0,T);c.fill();c.stroke()}
  const tip=[fx-6+3*sin(p),fy-86+2*cos(p)],hand=[110,164]
  line(c,[hand,tip],4,'#d4a373')
  line(c,[[92,144],[106,154],hand],8,JK);c.fillStyle=SKIN;c.lineWidth=4;c.beginPath();c.arc(...hand,7,0,T);c.fill();c.stroke()
  c.save();c.translate(...tip);c.rotate(-.5);c.scale(ms,ms)
  c.fillStyle=MAL;c.lineWidth=4;c.beginPath();c.roundRect(-11,-9,22,18,8);c.fill()
  c.save();c.clip();c.globalAlpha=gold;c.fillStyle=TOAST;c.beginPath();c.ellipse(4,6,16,9,0,0,T);c.fill();c.globalAlpha=1;c.restore()
  c.beginPath();c.roundRect(-11,-9,22,18,8);c.stroke()
  if(gold>.6){c.fillStyle='#111';for(const x of[-4,4])c.beginPath(),c.arc(x,-1,1.6,0,T),c.fill();c.lineWidth=2;c.beginPath();c.arc(0,2,2.5,.2*PI,.8*PI);c.stroke()}
  c.restore()
  if(gold>.85){c.fillStyle=F3;c.lineWidth=3;for(const[dx,dy,s]of[[-20,-16,5],[18,-20,4]]){const x=tip[0]+dx,y=tip[1]+dy;c.beginPath();for(let k=0;k<8;k++){const r=k%2?s*.4:s,b=k*PI/4;c.lineTo(x+r*cos(b),y+r*sin(b))}c.closePath();c.fill();c.stroke()}}
  head(()=>{
    c.lineWidth=9;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    for(const x of[108,158]){c.fillStyle='#fff';c.beginPath();c.ellipse(x,140,14,17,0,0,T);c.fill();c.save();c.clip();c.beginPath();c.ellipse(x+5,142,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(x+5,132,13,10,0,0,T);c.fill();c.restore();c.lineWidth=2.5;c.beginPath();c.ellipse(x+5,142,11.5,15,0,0,T);c.stroke()
      c.fillStyle='#111';c.beginPath();c.ellipse(x+7,143,5.5,7.5,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x+2,135,4.5,0,T);c.fill();c.fillStyle=F3;c.globalAlpha=.5+.5*glow;c.beginPath();c.arc(x+10,148,3,0,T);c.fill();c.globalAlpha=1;c.restore()
      c.lineWidth=8;c.beginPath();c.moveTo(x-16,134);c.quadraticCurveTo(x,120,x+16,134);c.stroke()}
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(133+d*42,162,13,7,0,0,T),c.fill()
    c.fillStyle='#c92a2a';c.lineWidth=6;c.beginPath();c.moveTo(124,164);c.quadraticCurveTo(138,182,152,164);c.closePath();c.fill();c.stroke()
    c.fillStyle=HAIR;c.lineWidth=9;c.beginPath();c.moveTo(70,140);c.bezierCurveTo(54,90,80,70,128,70);c.bezierCurveTo(176,70,202,90,186,140)
    c.quadraticCurveTo(184,118,176,106);c.quadraticCurveTo(168,104,162,112);c.quadraticCurveTo(156,100,146,98);c.quadraticCurveTo(140,108,132,112)
    c.quadraticCurveTo(126,100,118,98);c.quadraticCurveTo(112,108,104,112);c.quadraticCurveTo(98,100,90,100);c.quadraticCurveTo(84,108,80,112);c.quadraticCurveTo(72,120,70,140);c.closePath();c.fill();c.stroke()
    c.fillStyle=BEAN;c.beginPath();c.moveTo(62,92);c.bezierCurveTo(56,20,200,20,194,92);c.closePath();c.fill();c.stroke()
    c.strokeStyle=BND;c.lineWidth=5;for(const x of[96,128,160])c.beginPath(),c.moveTo(x,36+(x==128?-6:0)),c.lineTo(x+(x-128)*.1,88),c.stroke();c.strokeStyle='#111'
    c.fillStyle=BND;c.lineWidth=9;c.beginPath();c.roundRect(56,80,144,22,11);c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.arc(128,22,16,0,T);c.fill();c.stroke()
  })
}
