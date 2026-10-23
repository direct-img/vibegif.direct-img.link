// cozy chibi with a messy sandy bun and round glasses knitting cross-legged, needles clicking, the striped scarf creeping down, yarn ball rolling
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=12,delay=100
const SKIN='#ffe3d1',HAIR='#e2c08d',HD='#b8955e',HL='#f7e8cc',EYE='#4dabf7',ED='#1864ab',BL='#ffa8a8',SW='#f783ac',SWD='#e64980',PANT='#748ffc',SOCK='#fff',CUSH='#ffc078',CUD='#fd7e14',Y1='#38d9a9',Y2='#fff4e6',YD='#0ca678',ND='#e0a96d'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip()
  c.beginPath();c.ellipse(x,y+7,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-3,13,10,0,0,T);c.fill();c.restore()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+8,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y+2,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+12,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t)=>{
  const k=sin(3*T*t),rot=-t*T
  c.translate(122,250);c.scale(1.08,1.08);c.translate(-122,-250)
  c.lineWidth=6;c.fillStyle=CUSH;c.beginPath();c.ellipse(112,226,80,18,0,0,T);c.fill();c.stroke()
  c.fillStyle=CUD;for(const a of[-1,1])c.beginPath(),c.arc(112+a*62,224,5,0,T),c.fill(),c.stroke()
  const bx=206+3*sin(T*t),by=216-Math.abs(2*sin(2*T*t))
  ds(c,7,3,Y1,()=>{c.moveTo(bx-14,by-14);c.bezierCurveTo(176,190+6*k,150,160,124,178)})
  c.save();c.translate(bx,by);c.rotate(rot);c.fillStyle=Y1;c.lineWidth=6;c.beginPath();c.arc(0,0,22,0,T);c.fill();c.stroke()
  c.save();c.clip();c.strokeStyle=YD;c.lineWidth=3;for(const a of[-.6,0,.6])c.beginPath(),c.ellipse(0,0,24,10,a,0,T),c.stroke();c.restore()
  c.lineWidth=6;c.beginPath();c.arc(0,0,22,0,T);c.stroke();c.restore()
  c.lineWidth=6;c.fillStyle=PANT;c.beginPath();c.moveTo(60,214);c.quadraticCurveTo(70,188,112,190);c.quadraticCurveTo(156,188,166,214);c.quadraticCurveTo(112,226,60,214);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(112,192);c.quadraticCurveTo(108,206,96,214);c.stroke()
  c.fillStyle=SOCK;c.lineWidth=5;for(const[x,a]of[[62,-.3],[164,.3]])c.beginPath(),c.ellipse(x,212,11,8,a,0,T),c.fill(),c.stroke()
  c.lineWidth=7;c.fillStyle=SW;c.beginPath();c.moveTo(94,124);c.quadraticCurveTo(70,132,72,196);c.lineTo(152,196);c.quadraticCurveTo(154,132,130,124);c.closePath();c.fill();c.stroke()
  c.strokeStyle=SWD;c.lineWidth=3;c.beginPath();for(let y=140;y<192;y+=10)c.moveTo(80,y),c.lineTo(84,y+4),c.moveTo(144,y),c.lineTo(140,y+4);c.stroke();c.strokeStyle='#111'
  c.fillStyle=SWD;c.lineWidth=5;c.beginPath();c.moveTo(96,124);c.quadraticCurveTo(112,140,128,124);c.lineTo(126,132);c.quadraticCurveTo(112,146,98,132);c.closePath();c.fill();c.stroke()
  c.save();c.beginPath();c.rect(98,176,28,56);c.clip()
  c.fillStyle=Y1;c.fillRect(98,176,28,56);c.fillStyle=Y2;const o=16*t*3%16;for(let y=150+o;y<240;y+=16)c.fillRect(98,y,28,8)
  c.strokeStyle=YD;c.lineWidth=2;c.beginPath();for(let y=150+o;y<240;y+=8)for(const x of[104,112,120])c.moveTo(x-3,y),c.lineTo(x,y+4),c.lineTo(x+3,y);c.stroke();c.restore()
  c.lineWidth=5;c.beginPath();c.moveTo(98,176);c.lineTo(98,230);c.quadraticCurveTo(112,234,126,230);c.lineTo(126,176);c.stroke()
  c.save();c.translate(112,106);c.scale(.6,.6);c.translate(-128,-120)
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.arc(128,24,30,0,T);c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=4;c.beginPath();c.arc(128,24,18,.5,3.6);c.stroke();c.strokeStyle='#111'
  for(const[a,b]of[[[104,10],[90,-6]],[[150,6],[166,-8]]])ds(c,7,3,HAIR,()=>{c.moveTo(...a);c.quadraticCurveTo(a[0],b[1]+4,...b)})
  c.fillStyle=HD;c.beginPath();c.moveTo(128,40);c.bezierCurveTo(194,40,206,100,196,160);c.lineTo(60,160);c.bezierCurveTo(50,100,62,40,128,40);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.lineWidth=5;c.strokeStyle='#495057';for(const x of[103,153])c.beginPath(),c.arc(x,141,23,0,T),c.stroke();c.beginPath();c.moveTo(126,138);c.quadraticCurveTo(128,132,130,138);c.stroke();c.strokeStyle='#111'
  c.strokeStyle='#fff';c.lineWidth=4;for(const x of[94,144])c.beginPath(),c.moveTo(x,128),c.lineTo(x+8,124),c.stroke();c.strokeStyle='#111'
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*48,168,11,6,0,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(118,172);c.quadraticCurveTo(128,180,138,172);c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
  c.bezierCurveTo(52,80,90,44,128,44);c.bezierCurveTo(166,44,204,80,188,150)
  c.quadraticCurveTo(186,120,176,108);c.quadraticCurveTo(168,96,154,100);c.quadraticCurveTo(148,110,140,112)
  c.quadraticCurveTo(132,98,118,98);c.quadraticCurveTo(116,108,104,112);c.quadraticCurveTo(96,100,86,104)
  c.quadraticCurveTo(72,122,68,150);c.closePath();c.fill();c.stroke()
  for(const d of[-1,1])ds(c,7,3,HAIR,()=>{c.moveTo(128+d*58,120);c.quadraticCurveTo(128+d*70,150,128+d*60,176)})
  c.strokeStyle=HL;c.lineWidth=6;for(const[s,e]of[[1.28,1.4],[1.5,1.58],[1.66,1.76]])c.beginPath(),c.arc(128,110,56,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
  c.restore()
  const hl=[100,178+2*k],hr=[124,178-2*k]
  ds(c,18,10,SW,()=>{c.moveTo(90,134);c.lineTo(80,168);c.lineTo(hl[0]-4,hl[1]+2)})
  ds(c,18,10,SW,()=>{c.moveTo(134,134);c.lineTo(144,168);c.lineTo(hr[0]+4,hr[1]+2)})
  for(const[[x,y],a]of[[hl,-.42+.14*k],[hr,PI+.42+.14*k]]){ds(c,8,4,ND,()=>{c.moveTo(x-cos(a)*8,y-sin(a)*8);c.lineTo(x+cos(a)*42,y+sin(a)*42)});c.fillStyle='#f06595';c.lineWidth=3;c.beginPath();c.arc(x-cos(a)*10,y-sin(a)*10,5,0,T);c.fill();c.stroke()}
  c.fillStyle=SKIN;c.lineWidth=5;for(const[x,y]of[hl,hr])c.beginPath(),c.ellipse(x,y,9,9,0,0,T),c.fill(),c.stroke()
  if(Math.abs(k)>.8)for(const d of[-1,1])ds(c,6,2.5,'#fff',()=>{c.moveTo(112+d*20,158);c.lineTo(112+d*26,150)})
}
