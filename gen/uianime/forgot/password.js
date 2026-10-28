// pink lavender bob girl scratching her head with an awkward smile and a sliding sweatdrop while her thought cloud cycles through a key, a "****" password box and "???"
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=18,delay=100
const SKIN='#ffe3d1',HAIR='#f2b5e8',HD='#c86fb4',HL='#fff0fb',EYE='#4dabf7',ED='#1864ab',SWT='#c3fae8',SWD='#38d9a9',BL='#ffa8a8',PIN='#ffd43b',GD='#ffd43b',GDD='#f59f00',Q='#9775fa',FLD='#e7f5ff',SW='#a5d8ff'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+4,y-2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+4,y-12,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y-1,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y-8,4.5,0,T);c.fill();c.beginPath();c.arc(x+9,y+5,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const qm=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);ds(c,12,6,Q,()=>{c.moveTo(-8,-10);c.bezierCurveTo(-8,-23,10,-23,10,-11);c.bezierCurveTo(10,-3,0,-3,0,7)})
  c.fillStyle=Q;c.lineWidth=4;c.beginPath();c.arc(0,17,4.5,0,T);c.fill();c.stroke();c.restore()}
export default(c,t,i)=>{
  const k=Math.floor(i/6),f=i%6,sc=[.55,1.14,.97,1,1,1][f],sy=i%2?-4:3,sd=(i%9)/9
  c.lineWidth=16;c.beginPath();for(const[x,y,r]of[[158,60,26],[188,40,30],[220,56,24],[208,82,24],[172,84,24]])c.moveTo(x+r,y),c.arc(x,y,r,0,T);c.stroke();c.fillStyle='#fff';c.fill()
  c.lineWidth=5;for(const[x,y,r]of[[150,114,9],[140,132,5.5]])c.beginPath(),c.arc(x,y,r,0,T),c.fill(),c.stroke()
  c.save();c.translate(190,62);c.scale(sc,sc)
  if(k==0){c.rotate(-.25);ds(c,13,6,GD,()=>{c.moveTo(-10,0);c.lineTo(28,0);c.moveTo(20,0);c.lineTo(20,10);c.moveTo(28,0);c.lineTo(28,12)})
    c.fillStyle=GD;c.lineWidth=5;c.beginPath();c.arc(-20,0,14,0,T);c.moveTo(-15,0);c.arc(-20,0,5,0,T,true);c.fill('evenodd');c.stroke()
    c.strokeStyle=GDD;c.lineWidth=3;c.beginPath();c.arc(-20,0,10,PI*1.1,PI*1.5);c.stroke()}
  else if(k==1){c.fillStyle=FLD;c.lineWidth=5;c.beginPath();c.roundRect(-38,-15,76,30,9);c.fill();c.stroke()
    c.lineWidth=4;c.beginPath();for(let j=0;j<4;j++){const x=-24+j*16;for(let a=0;a<3;a++)c.moveTo(x+6*cos(a*PI/3+PI/2),6*sin(a*PI/3+PI/2)),c.lineTo(x-6*cos(a*PI/3+PI/2),-6*sin(a*PI/3+PI/2))}c.stroke()
    if(i%2)c.fillStyle='#111',c.fillRect(34,-9,3,18)}
  else{qm(c,-22,2,.85);qm(c,0,-2,1.1);qm(c,22,2,.85)}
  c.restore()
  const H=f=>{c.save();c.translate(98,180);c.rotate(-.08);c.scale(.66,.66);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(204,34,214,110,206,178);c.quadraticCurveTo(200,196,180,192);c.lineTo(76,192);c.quadraticCurveTo(56,196,50,178);c.bezierCurveTo(42,110,52,34,128,34);c.fill();c.stroke()
    c.fillStyle=SWT;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,400);c.lineTo(216,400);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SWD;c.beginPath();c.moveTo(102,186);c.quadraticCurveTo(128,200,154,186);c.lineTo(160,206);c.quadraticCurveTo(128,222,96,206);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,204,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103,142,-1);eye(c,153,142,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const j of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+j-2,168),c.lineTo(128+d*44+j+2,160),c.stroke()
    c.lineWidth=6;c.beginPath();c.moveTo(112,172);c.quadraticCurveTo(118,166,124,172);c.quadraticCurveTo(130,178,136,172);c.quadraticCurveTo(142,166,146,170);c.stroke()
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(56,184)
    c.bezierCurveTo(40,74,88,36,128,36);c.bezierCurveTo(168,36,216,74,200,184);c.quadraticCurveTo(190,194,178,186)
    c.quadraticCurveTo(186,130,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,130,78,186);c.quadraticCurveTo(66,194,56,184);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.moveTo(88,112);c.lineTo(112,120);c.moveTo(144,116);c.lineTo(168,110);c.stroke()
    for(const[w,s]of[[11,'#111'],[5,PIN]]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();c.moveTo(70,92);c.lineTo(94,78);c.moveTo(74,104);c.lineTo(98,90);c.stroke()}
    c.strokeStyle='#111'
    c.fillStyle=SW;c.lineWidth=7;const y=96+44*sd;c.save();c.globalAlpha=min(1,(1-sd)*4);c.beginPath();c.moveTo(60,y-20);c.quadraticCurveTo(73,y,60,y+7);c.quadraticCurveTo(47,y,60,y-20);c.fill();c.stroke();c.restore()
  })
  ds(c,22,13,SWT,()=>{c.moveTo(144,230);c.quadraticCurveTo(190,190,150,124+sy)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(143,116+sy,12,13,-.5,0,T);c.fill();c.stroke()
  c.lineWidth=3.5;c.beginPath();for(const j of[-6,0,6])c.moveTo(135+j*.6,108+sy+j),c.lineTo(130+j*.6,114+sy+j);c.stroke()
  ds(c,6,2.5,'#fff',()=>{c.moveTo(160,100+sy);c.lineTo(168,94+sy);c.moveTo(162,112+sy);c.lineTo(172,112+sy)})
}
