// green-haired girl soaking shoulder-deep in a rocky hot spring, towel folded on her head, steam drifting up and a rubber duck bobbing
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=12,delay=110
const SKIN='#ffe3d1',SK2='#ffd0b8',HAIR='#2f9e44',HD='#2b8a3e',HL='#b2f2bb',WA='#99e9f2',WL='#e3fafc',ROCK='#ced4da',RD='#adb5bd',BL='#ff8fab',TW='#fff',TS='#74c0fc',WOOD='#d9a066',WD='#a9744f',Z=.8
const rock=(c,x,y,a,b)=>{c.fillStyle=ROCK;c.beginPath();c.ellipse(x,y,a,b,0,0,T);c.fill();c.stroke();c.strokeStyle=RD;c.lineWidth=3;c.beginPath();c.ellipse(x+a*.2,y+b*.25,a*.55,b*.4,0,.2,PI*.9);c.stroke();c.strokeStyle='#111';c.lineWidth=6}
const steam=(c,t,l)=>{for(const[x,o]of l){const p=(t+o)%1,y=200-p*130,w=sin(PI*p);if(w>.15)for(const[lw,s]of[[4+6*w,'#111'],[5*w,'#fff']])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.moveTo(x+6*sin(p*T*2+o*9),y),c.quadraticCurveTo(x+10*sin(p*T*2+o*9+1.5),y-10,x+6*sin(p*T*2+o*9+3),y-22),c.stroke()}c.strokeStyle='#111'}
export default(c,t)=>{
  c.lineWidth=6
  for(const[x,y,a,b]of[[30,162,26,18],[76,146,28,18],[180,146,28,18],[226,162,26,18],[128,140,30,16]])rock(c,x,y,a,b)
  c.fillStyle=WOOD;c.beginPath();c.moveTo(12,122);c.lineTo(16,144);c.quadraticCurveTo(32,150,48,144);c.lineTo(52,122);c.fill();c.stroke()
  c.fillStyle='#e8c39e';c.beginPath();c.ellipse(32,122,20,6,0,0,T);c.fill();c.stroke()
  c.strokeStyle=WD;c.lineWidth=4;for(const y of[130,138])c.beginPath(),c.moveTo(14,y),c.quadraticCurveTo(32,y+5,50,y),c.stroke();c.strokeStyle='#111'
  c.lineWidth=6;c.fillStyle=WA;c.beginPath();c.ellipse(128,196,122,48,0,0,T);c.fill();c.stroke()
  steam(c,t,[[38,0],[92,.5],[168,.25],[220,.75]])
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(114,178);c.quadraticCurveTo(112,190,90,194);c.quadraticCurveTo(72,198,70,210);c.lineTo(186,210);c.quadraticCurveTo(184,198,166,194);c.quadraticCurveTo(144,190,142,178);c.closePath();c.fill();c.stroke()
  c.save();c.translate(128,182);c.scale(Z,Z);c.translate(-128,-186)
  c.lineWidth=7.5;c.fillStyle=HD;c.beginPath();c.moveTo(128,50);c.bezierCurveTo(62,50,58,120,70,170);c.lineTo(186,170);c.bezierCurveTo(198,120,194,50,128,50);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const x of[103,153]){c.lineWidth=7;c.beginPath();c.arc(x,136,15,PI*.15,PI*.85);c.stroke()}
  const bl=1+.15*sin(T*t)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,158,16*bl,8*bl,0,0,T),c.fill()
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-7,0,7])c.beginPath(),c.moveTo(128+d*44+k-2,162),c.lineTo(128+d*44+k+2,154),c.stroke()
  c.lineWidth=4.5;c.beginPath();c.moveTo(117,166);c.quadraticCurveTo(122,172,128,167);c.quadraticCurveTo(134,172,139,166);c.stroke()
  c.lineWidth=7.5;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,150)
  c.bezierCurveTo(54,74,88,40,128,40);c.bezierCurveTo(168,40,202,74,186,150)
  c.quadraticCurveTo(184,118,174,104);c.quadraticCurveTo(166,110,160,118);c.quadraticCurveTo(156,100,144,94);c.quadraticCurveTo(138,106,130,112)
  c.quadraticCurveTo(124,98,112,94);c.quadraticCurveTo(104,108,98,116);c.quadraticCurveTo(92,106,84,104);c.quadraticCurveTo(72,120,70,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.3,1.42],[1.5,1.58]])c.beginPath(),c.arc(128,104,54,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  c.save();c.translate(130,46);c.rotate(-.12)
  c.lineWidth=7.5;c.fillStyle=TW;c.beginPath();c.roundRect(-46,-16,92,30,8);c.fill();c.stroke()
  c.strokeStyle=TS;c.lineWidth=5;for(const x of[-30,30])c.beginPath(),c.moveTo(x,-12),c.lineTo(x,10),c.stroke()
  c.strokeStyle='#ced4da';c.lineWidth=4;c.beginPath();c.moveTo(-40,0);c.lineTo(40,0);c.stroke();c.restore()
  c.restore()
  c.save();c.beginPath();c.ellipse(128,196,119,45,0,0,T);c.clip()
  c.fillStyle=WA;c.beginPath();c.moveTo(0,204);for(let x=0;x<=256;x+=16)c.quadraticCurveTo(x+8,204+3*sin(x*.2),x+16,204);c.lineTo(256,256);c.lineTo(0,256);c.fill()
  c.strokeStyle=WL;c.lineWidth=4;for(const k of[0,.5]){const r=(t+k)%1;c.beginPath();c.ellipse(128,206,56+40*r,8+8*r,0,PI*.05,PI*.95);c.stroke()}
  c.restore()
  c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.ellipse(128,196,122,48,0,0,PI);c.stroke()
  for(const[x,y,a,b]of[[16,214,18,14],[238,212,20,15]])rock(c,x,y,a,b)
  const dy=3*sin(T*t*2),dx=6*sin(T*t)
  c.save();c.translate(206+dx,192+dy);c.rotate(.08*sin(T*t*2+1))
  c.lineWidth=5;c.fillStyle='#ffd43b';c.beginPath();c.moveTo(-18,0);c.quadraticCurveTo(-20,14,0,14);c.quadraticCurveTo(18,14,20,-2);c.quadraticCurveTo(12,2,6,0);c.closePath();c.fill();c.stroke()
  c.beginPath();c.arc(-6,-10,10,0,T);c.fill();c.stroke()
  c.fillStyle='#ff922b';c.beginPath();c.moveTo(-15,-12);c.quadraticCurveTo(-26,-10,-22,-5);c.quadraticCurveTo(-18,-4,-14,-7);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(-8,-12,2.2,0,T);c.fill();c.restore()
  c.strokeStyle=WL;c.lineWidth=3;c.beginPath();c.ellipse(206+dx,206,22,4,0,0,T);c.stroke();c.strokeStyle='#111'
  steam(c,t,[[60,.15],[196,.6]])
}
