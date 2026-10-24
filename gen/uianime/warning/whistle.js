// aqua-haired crossing guard in a cap blowing her whistle with puffed cheeks and holding up a stop palm, a warning sign flashing beside her
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=12,delay=80
const SKIN='#ffe3d1',HAIR='#66d9e8',HD='#1098ad',EYE='#7950f2',ED='#4c2fa8',SH='#364fc7',VS='#ff922b',CAP='#364fc7',GD='#ffd43b',BL='#ffa8a8',WY='#ffd43b',WO='#ff922b',WH='#fcc419',Z=.76
const eye=(c,L,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  L(2.5);c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  L(6);c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t,i)=>{
  const b=i%6<3,p=b?[1,1.15,1][i%6]:0,L=v=>c.lineWidth=v/Z,fl=i<6
  const head=f=>{c.save();c.translate(130,118);c.scale(Z,Z);c.translate(-128,-128);f();c.restore()}
  head(()=>{
    L(6);c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,204,160);c.quadraticCurveTo(198,180,178,176);c.lineTo(78,176);c.quadraticCurveTo(58,180,52,160);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=SH;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(56,196,44,320);c.lineTo(212,320);c.quadraticCurveTo(200,196,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=VS;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*18,196),c.lineTo(128+d*24,320),c.lineTo(128+d*86,320),c.quadraticCurveTo(128+d*76,206,128+d*36,190),c.closePath(),c.fill(),c.stroke()
    c.fillStyle='#fff';L(4);for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*23,250),c.lineTo(128+d*80,250),c.lineTo(128+d*82,266),c.lineTo(128+d*24,266),c.closePath(),c.fill(),c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,194);c.lineTo(128,206);c.lineTo(140,194);c.lineTo(140,166);c.fill();L(5);c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.moveTo(140,166);c.lineTo(140,192);c.stroke()
    L(6);c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(b)for(const d of[-1,1])c.beginPath(),c.arc(128+d*44,160,15,d<0?PI*.5:-PI*.5,d<0?PI*1.5:PI*.5),c.fill(),c.stroke()
    eye(c,L,103,138,-1);eye(c,L,153,138,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,b?14:11,b?7:5.5,0,0,T),c.fill()
    L(2.5);for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,164),c.lineTo(128+d*42+k+2,158),c.stroke()
    c.strokeStyle='#868e96';L(3);c.beginPath();c.moveTo(150,182);c.quadraticCurveTo(150,206,128,206);c.stroke();c.strokeStyle='#111'
    c.save();c.translate(128,170);c.rotate(.35)
    c.fillStyle=WH;L(4.5);c.beginPath();c.roundRect(-6,-7,30,14,4);c.fill();c.stroke();c.beginPath();c.arc(28,8,13,0,T);c.fill();c.stroke()
    c.fillStyle='#111';c.beginPath();c.arc(28,8,4,0,T);c.fill()
    c.restore()
    L(6);c.fillStyle=HAIR;c.beginPath();c.moveTo(66,156)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,190,156)
    c.quadraticCurveTo(186,124,180,106);c.quadraticCurveTo(172,104,166,112);c.quadraticCurveTo(160,98,150,96);c.quadraticCurveTo(144,106,134,110)
    c.quadraticCurveTo(128,98,116,96);c.quadraticCurveTo(110,106,100,110);c.quadraticCurveTo(94,100,84,104);c.quadraticCurveTo(70,124,66,156);c.closePath();c.fill();c.stroke()
    c.strokeStyle='#111';L(5);c.beginPath();c.moveTo(88,108);c.lineTo(116,116);c.moveTo(168,108);c.lineTo(140,116);c.stroke()
    c.fillStyle=CAP;L(6);c.beginPath();c.moveTo(66,86);c.bezierCurveTo(56,30,96,14,128,14);c.bezierCurveTo(160,14,200,30,190,86);c.quadraticCurveTo(128,70,66,86);c.fill();c.stroke()
    c.fillStyle='#212529';c.beginPath();c.moveTo(62,88);c.quadraticCurveTo(128,66,194,88);c.quadraticCurveTo(200,100,190,100);c.quadraticCurveTo(128,82,66,100);c.quadraticCurveTo(56,100,62,88);c.fill();c.stroke()
    c.strokeStyle='#fff';L(4);c.beginPath();c.moveTo(80,74);c.quadraticCurveTo(128,62,176,74);c.stroke();c.strokeStyle='#111'
    c.fillStyle=GD;L(4.5);c.beginPath();for(let k=0;k<10;k++){const r=k%2?7:15,a=k*PI/5-PI/2;c.lineTo(128+cos(a)*r,46+sin(a)*r)}c.closePath();c.fill();c.stroke()
  })
  if(b)for(const[w,s]of[[9,'#111'],[4,'#fff']]){c.lineWidth=w;c.strokeStyle=s;for(const a of[-.35,.15,.65]){const r0=34*p,x=150+cos(a)*r0,y=150+sin(a)*r0;c.beginPath();c.moveTo(x,y);c.lineTo(x+cos(a)*16*p,y+sin(a)*16*p);c.stroke()}}
  c.strokeStyle='#111'
  const hx=46,hy=120,ps=b?1.1:1
  for(const[w,s]of[[30,'#111'],[19,SH]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(84,230),c.quadraticCurveTo(48,214,hx+2,hy+38),c.stroke()
  c.strokeStyle='#111';c.save();c.translate(hx,hy);c.scale(ps,ps)
  c.lineWidth=5;c.fillStyle=SKIN
  for(const[x,y,h]of[[-15,-22,15],[-5,-27,17],[5,-27,17],[15,-22,15]])c.beginPath(),c.roundRect(x-5,y-h,10,h+14,5),c.fill(),c.stroke()
  c.beginPath();c.ellipse(22,8,6,12,-.7,0,T);c.fill();c.stroke()
  c.beginPath();c.roundRect(-20,-14,40,36,13);c.fill();c.stroke()
  c.fillStyle=SH;c.beginPath();c.roundRect(-18,22,36,14,5);c.fill();c.stroke()
  c.restore()
  c.save();c.translate(202,64);c.rotate(.1*sin(T*t*2));const sc=b?1.02:.94;c.scale(sc,sc)
  c.lineWidth=7;c.fillStyle=fl?WY:WO;c.beginPath();c.moveTo(0,-36);c.quadraticCurveTo(4,-42,8,-34);c.lineTo(38,22);c.quadraticCurveTo(40,30,32,30);c.lineTo(-32,30);c.quadraticCurveTo(-40,30,-38,22);c.lineTo(-8,-34);c.quadraticCurveTo(-4,-42,0,-36);c.closePath();c.fill();c.stroke()
  c.lineWidth=8;c.beginPath();c.moveTo(0,-14);c.lineTo(0,6);c.stroke();c.fillStyle='#111';c.beginPath();c.arc(0,18,5,0,T);c.fill()
  c.restore()
}
