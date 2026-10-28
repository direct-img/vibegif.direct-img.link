// mint haired girl with an ahoge in a comfy sweater doing a big happy stretch with her hands clasped overhead, swaying beside an empty inbox tray with a bobbing green check while sparkles twinkle
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=95
const SKIN='#ffe3d1',HAIR='#8ce99a',HD='#2f9e44',HL='#ebfbee',SWT='#d0bfff',SD='#9775fa',BL='#ffa8a8',TR='#a5d8ff',TB='#e7f5ff',TD='#4dabf7',GR='#51cf66',SP='#ffe066',CLIP='#ffd43b',MO='#c92a2a',Z=.66
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
const star=(c,x,y,r)=>{c.beginPath();for(let k=0;k<10;k++){const q=k%2?r*.45:r,a=k*PI/5-PI/2;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();c.fill();c.stroke()}
export default(c,t)=>{
  const s=(1-cos(T*t))/2,a=.05*sin(T*t),by=-6*s,bb=5*sin(T*t*2)
  c.fillStyle=SP;c.lineWidth=3.5
  for(const[x,y,o]of[[16,94,0],[98,82,.3],[112,150,.55],[10,148,.8]]){const r=max(0,sin(T*(t+o)));if(r>.08)spark(c,x,y,12*r)}
  c.fillStyle=TB;c.lineWidth=6;c.beginPath();c.roundRect(18,156,80,40,8);c.fill();c.stroke()
  c.strokeStyle='#d0ebff';c.lineWidth=4;c.beginPath();c.moveTo(28,170);c.lineTo(88,170);c.stroke();c.strokeStyle='#111'
  c.fillStyle=TR;c.lineWidth=6;c.beginPath();c.moveTo(8,186);c.lineTo(36,186);c.lineTo(44,200);c.lineTo(72,200);c.lineTo(80,186);c.lineTo(108,186);c.lineTo(108,226);c.quadraticCurveTo(108,236,98,236);c.lineTo(18,236);c.quadraticCurveTo(8,236,8,226);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(18,196);c.lineTo(18,224);c.stroke();c.strokeStyle='#111'
  c.save();c.translate(58,126+bb);c.rotate(.1*sin(T*t));c.fillStyle=GR;c.lineWidth=6;c.beginPath();c.arc(0,0,24,0,T);c.fill();c.stroke()
  ds(c,12,6,'#fff',()=>{c.moveTo(-11,1);c.lineTo(-3,9);c.lineTo(12,-8)});c.restore()
  c.fillStyle='rgba(134,142,150,.3)';c.beginPath();c.ellipse(58,152,16-3*bb/5,3,0,0,T);c.fill()
  c.save();c.translate(172,268);c.rotate(a);c.translate(-172,-268)
  const H=f=>{c.save();c.translate(172,200+by*.3);c.scale(Z,Z);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=10;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(204,34,218,100,212,170);c.lineTo(222,300);c.lineTo(34,300);c.lineTo(44,170);c.bezierCurveTo(38,100,52,34,128,34);c.fill();c.stroke()
    c.fillStyle=SWT;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(46,196,34,380);c.lineTo(222,380);c.quadraticCurveTo(210,196,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SWT;c.beginPath();c.moveTo(98,192);c.quadraticCurveTo(128,222,158,192);c.lineTo(166,206);c.quadraticCurveTo(128,244,90,206);c.closePath();c.fill();c.stroke()
    c.strokeStyle=SD;c.lineWidth=6;for(const x of[100,128,156])c.beginPath(),c.moveTo(x,250),c.lineTo(x,300),c.stroke();c.strokeStyle='#111'
    c.lineWidth=10;c.save();c.translate(128,40);c.rotate(.25*sin(T*t*2));c.fillStyle=HAIR;c.beginPath();c.moveTo(-6,2);c.bezierCurveTo(-14,-30,16,-44,30,-30);c.bezierCurveTo(12,-34,2,-20,8,2);c.closePath();c.fill();c.stroke();c.restore()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    c.lineWidth=10;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,15,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=7;c.fillStyle=MO;c.beginPath();c.ellipse(128,172,7+2*s,4+8*s,0,0,T);c.fill();c.stroke()
    c.lineWidth=10;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,170)
    c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,192,170)
    c.quadraticCurveTo(186,124,180,104);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,76,104);c.quadraticCurveTo(68,128,64,170);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=9;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=CLIP;c.lineWidth=7;star(c,176,78,17)
  })
  const hy=62+by,hx=172,ey=130+by*.6
  for(const d of[-1,1])ds(c,21,12,SWT,()=>{c.moveTo(hx+d*38,222);c.quadraticCurveTo(hx+d*60,180,hx+d*60,ey);c.quadraticCurveTo(hx+d*58,hy+18,hx+d*8,hy+6)})
  c.fillStyle=SKIN;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.ellipse(hx+d*7,hy,11,12,0,0,T),c.fill(),c.stroke()
  if(s>.6)for(const d of[-1,1])ds(c,7,3,'#fff',()=>{c.moveTo(hx+d*22,hy-14);c.lineTo(hx+d*32,hy-24)})
  c.restore()
}
