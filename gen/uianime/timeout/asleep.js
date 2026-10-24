// periwinkle haired girl fast asleep with her cheek on her arms at a desk, drooling, Zzz floating up while a red alarm clock ticks its hand around
const{sin,cos,PI}=Math,T=2*PI
export const frames=12,delay=100
const SKIN='#ffe3d1',HAIR='#91a7ff',HD='#5c7cfa',HL='#edf2ff',SWT='#ffd8a8',SD='#ffa94d',DESK='#e8b07a',DD='#c47f45',BL='#ffa8a8',CLK='#ff6b6b',CD='#e03131',BELL='#ffd43b',ZC='#91a7ff'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const zed=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.rotate(-.15);ds(c,11,5,ZC,()=>{c.moveTo(-9,-9);c.lineTo(9,-9);c.lineTo(-9,9);c.lineTo(9,9)});c.restore()}
export default(c,t,i)=>{
  const H=f=>{c.save();c.translate(96,140);c.rotate(-.32);c.scale(.8,.8);c.translate(-128,-128);f();c.restore()}
  c.lineWidth=6;c.fillStyle=SWT;c.beginPath();c.moveTo(14,214);c.quadraticCurveTo(14,150,64,140);c.lineTo(132,140);c.quadraticCurveTo(178,150,178,214);c.closePath();c.fill();c.stroke()
  H(()=>{c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,100,208,160);c.quadraticCurveTo(212,200,196,218);c.lineTo(60,218);c.quadraticCurveTo(44,200,48,160);c.bezierCurveTo(42,100,56,34,128,34);c.fill();c.stroke()})
  c.lineWidth=6;c.fillStyle=DESK;c.beginPath();c.roundRect(6,208,244,34,8);c.fill();c.stroke()
  c.strokeStyle=DD;c.lineWidth=4;c.beginPath();c.moveTo(18,226);c.lineTo(238,226);c.stroke();c.strokeStyle='#111'
  c.lineWidth=6;c.fillStyle=SWT;c.beginPath();c.roundRect(12,180,108,32,16);c.fill();c.stroke();c.beginPath();c.roundRect(72,184,100,30,15);c.fill();c.stroke()
  c.strokeStyle=SD;c.lineWidth=4;for(const x of[30,158])c.beginPath(),c.moveTo(x,186),c.lineTo(x,208),c.stroke();c.strokeStyle='#111'
  H(()=>{
    c.lineWidth=7;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    c.lineWidth=6;for(const[x,d]of[[103,-1],[153,1]]){c.beginPath();c.arc(x,134,14,PI*.15,PI*.85);c.stroke();c.beginPath();c.moveTo(x+d*13,139);c.lineTo(x+d*19,136);c.stroke()}
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,160,14,7,0,0,T),c.fill()
    c.lineWidth=3;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,163),c.lineTo(128+d*44+k+2,157),c.stroke()
    c.lineWidth=4.5;c.fillStyle='#c92a2a';c.beginPath();c.ellipse(126,170,6,5,0,0,T);c.fill();c.stroke()
    const dl=2+2*sin(T*t)
    c.fillStyle='#d0ebff';c.lineWidth=3.5;c.beginPath();c.moveTo(120,173);c.quadraticCurveTo(110,184+dl,116,189+dl);c.quadraticCurveTo(124,193+dl,125,185+dl);c.quadraticCurveTo(125,179,120,173);c.fill();c.stroke()
    c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,156)
    c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,190,156)
    c.quadraticCurveTo(188,122,180,106);c.quadraticCurveTo(172,104,166,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
    c.quadraticCurveTo(130,96,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(78,104,76,104);c.quadraticCurveTo(68,126,66,156);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=6;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111'
  })
  const r=i%2?1:-1,X=200,Y=162
  c.save();c.translate(X,Y+48);c.rotate(.05*r);c.translate(-X,-Y-48)
  c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.moveTo(X+d*20,Y+32),c.lineTo(X+d*28,Y+48),c.stroke()
  ds(c,10,4,'#adb5bd',()=>{c.moveTo(X,Y-44);c.lineTo(X,Y-56)})
  c.fillStyle=BELL;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.arc(X+d*24,Y-36,15,PI+d*.35,d*.35),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=CLK;c.lineWidth=6;c.beginPath();c.arc(X,Y,40,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(X,Y,30,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(let k=0;k<4;k++)c.beginPath(),c.arc(X+23*cos(k*PI/2),Y+23*sin(k*PI/2),3,0,T),c.fill()
  const m=T*i/12-PI/2
  c.lineWidth=6;c.beginPath();c.moveTo(X,Y);c.lineTo(X+14*cos(-2.4),Y+14*sin(-2.4));c.stroke()
  c.strokeStyle=CD;c.lineWidth=4;c.beginPath();c.moveTo(X,Y);c.lineTo(X+22*cos(m),Y+22*sin(m));c.stroke();c.strokeStyle='#111'
  c.fillStyle=CD;c.lineWidth=3;c.beginPath();c.arc(X,Y,4.5,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(X-20,Y-22,8,4,-.7,0,T);c.fill()
  c.restore()
  for(const a of[.65,1.15])ds(c,7,3,'#fff',()=>{const b=-PI/2+r*a,x=X+r*24,y=Y-36;c.moveTo(x+cos(b)*21,y+sin(b)*21);c.lineTo(x+cos(b)*30,y+sin(b)*30)})
  for(const o of[0,1/3,2/3]){const p=(t+o)%1;zed(c,146+46*p+5*sin(p*T),96-80*p,.55+.75*sin(PI*p))}
}
