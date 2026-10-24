// purple haired shrine maiden squeezing her eyes shut and praying hard while a ring of loading dots spins around her and sparkles twinkle
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=12,delay=80
const SKIN='#ffe3d1',HAIR='#9775fa',HD='#6741d9',HL='#e5dbff',RED='#fa5252',BL='#ff8fab',SW='#a5d8ff',DOT=['#fd7e14','#fcc419','#ffe066','#fff3bf']
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
export default(c,t,i)=>{
  const n=12
  for(let k=0;k<n;k++){const g=(i-k+n)%n,a=-PI/2+k*T/n;c.fillStyle=DOT[min(g,3)],c.lineWidth=4,c.beginPath(),c.arc(128+104*cos(a),122+104*sin(a),g<3?12-g*1.5:7,0,T),c.fill(),c.stroke()}
  const sp=a=>{c.lineWidth=3.5;for(const[x,y,o,f]of a){c.fillStyle=f;const s=sin(T*((t+o)%1));if(s>0)spark(c,x,y,19*s)}}
  sp([[28,30,0,'#fff'],[228,32,.5,'#ffe066']])
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,96,206,150);c.lineTo(212,250);c.lineTo(44,250);c.lineTo(50,150);c.bezierCurveTo(44,96,58,34,128,34);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  ds(c,16,8,RED,()=>{c.moveTo(102,192);c.lineTo(128,236);c.lineTo(154,192)})
  c.lineWidth=5;c.beginPath();c.moveTo(94,194);c.lineTo(132,250);c.moveTo(162,194);c.lineTo(128,240);c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.quadraticCurveTo(128,204,140,192);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.lineWidth=5.5;c.beginPath();c.moveTo(90,130);c.lineTo(113,140);c.lineTo(90,150);c.moveTo(166,130);c.lineTo(143,140);c.lineTo(166,150);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,160,14,7,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-6,-1,4])c.beginPath(),c.moveTo(128+d*42+k-2,164),c.lineTo(128+d*42+k+2,156),c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(120,170);for(let k=1;k<=5;k++)c.lineTo(120+k*3.2,k%2?173:169);c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,206);c.lineTo(68,150)
  c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150);c.lineTo(192,206);c.quadraticCurveTo(182,200,176,206)
  c.quadraticCurveTo(180,124,176,104);c.quadraticCurveTo(168,104,162,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
  c.quadraticCurveTo(130,96,122,90);c.quadraticCurveTo(116,102,108,108);c.quadraticCurveTo(104,96,94,94);c.quadraticCurveTo(88,104,82,108)
  c.quadraticCurveTo(76,124,80,206);c.quadraticCurveTo(72,200,64,206);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle=RED;c.lineWidth=5
  for(const d of[-1,1])c.beginPath(),c.moveTo(168,62),c.quadraticCurveTo(168+d*10,38-d*6,168+d*28,48+d*4),c.quadraticCurveTo(168+d*24,70,168,62),c.fill(),c.stroke()
  c.beginPath();c.arc(168,62,6,0,T);c.fill();c.stroke()
  c.fillStyle=SW;c.lineWidth=4;const sy=104+3*sin(T*t);c.beginPath();c.moveTo(62,sy-12);c.quadraticCurveTo(70,sy,62,sy+6);c.quadraticCurveTo(54,sy,62,sy-12);c.fill();c.stroke()
  for(const d of[-1,1])ds(c,34,23,'#fff',()=>{c.moveTo(128+d*82,256);c.lineTo(128+d*22,238)})
  c.lineWidth=5;c.fillStyle=SKIN
  for(const d of[-1,1]){c.beginPath();c.moveTo(128,166);c.bezierCurveTo(128+d*22,176,128+d*22,208,128+d*18,236);c.lineTo(128,236);c.closePath();c.fill();c.stroke()}
  c.lineWidth=3;for(const d of[-1,1])for(const y of[188,200])c.beginPath(),c.moveTo(128+d*19,y),c.quadraticCurveTo(128+d*14,y-1,128+d*11,y-5),c.stroke()
  c.lineWidth=4;c.beginPath();c.ellipse(133,220,5,12,.3,0,T);c.fill();c.stroke()
}
