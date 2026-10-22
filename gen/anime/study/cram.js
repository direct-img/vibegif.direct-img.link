// braided navy haired girl in a cram headband scribbling furiously at her desk, steam puffing from her head, finished pages flying off
const{sin,PI,max,min}=Math,T=2*PI
export const frames=14,delay=85
const SKIN='#ffe3d1',HAIR='#4263eb',HD='#364fc7',EYE='#4dabf7',ED='#1864ab',BL='#ffa8a8',JS='#fa5252',WD='#e0a96d',WDD='#c08552',BK=['#69db7c','#ffd43b','#b197fc','#ff8787','#74c0fc'],TIE='#e03131'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const P=(u,v)=>{const a=106+90*u,b=98+108*u;return[a+(b-a)*v,190+42*v]}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,15,0,0,T);c.fill()
  c.save();c.clip();c.beginPath();c.ellipse(x+d*-2,y+7,11.5,14,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-3,14,8,0,0,T);c.fill();c.restore()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+d*-2,y+9,5.5,7,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+d*-2-4,y+3,4,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-4);c.quadraticCurveTo(x,y-14,x+16,y-4);c.moveTo(x+d*15,y-5);c.lineTo(x+d*21,y-10);c.stroke()
}
const page=(c,lines)=>{
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();for(const[u,v]of[[0,0],[1,0],[1,1],[0,1]])c.lineTo(...P(u,v));c.closePath();c.fill();c.stroke()
  c.strokeStyle='#495057';c.lineWidth=2.5
  for(let j=0;j<3;j++){const e=min(1,max(0,lines-j));if(e<=0)continue;c.beginPath();for(let s=0;s<=e*40;s++){const[x,y]=P(.1+.8*s/40,.25+.25*j);c.lineTo(x,y+2.2*sin(s*1.9+j))}c.stroke()}
  c.strokeStyle='#111'
}
export default(c,t,i)=>{
  const w=t<.75,ln=w?t/.75*3:3,j=min(2,ln|0),e=ln-j,[tx,ty]=P(.1+.8*(w?e:1),.25+.25*(w?j:2)),jx=w?(i%2?2:-2):0,fy=w?0:(t-.75)/.25
  const hx=tx+12+jx,hy=ty-14+(w?0:-10*fy)
  c.save();c.translate(152,150);c.scale(.8,.8);c.translate(-128,-186)
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,206,96,198,160);c.lineTo(58,160);c.bezierCurveTo(50,96,60,34,128,34);c.fill();c.stroke()
  c.restore()
  c.lineWidth=6;c.fillStyle=JS;c.beginPath();c.moveTo(130,150);c.quadraticCurveTo(92,158,86,196);c.lineTo(218,196);c.quadraticCurveTo(212,158,174,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(152,160);c.lineTo(152,196);c.moveTo(134,153);c.lineTo(152,170);c.lineTo(170,153);c.stroke();c.strokeStyle='#111'
  for(const d of[-1,1]){const bx=152+d*44;c.fillStyle=HAIR;c.lineWidth=4;for(let k=0;k<4;k++)c.beginPath(),c.ellipse(bx+d*k*1.5,140+k*12,8-k*.6,8,0,0,T),c.fill(),c.stroke();c.fillStyle=TIE;c.beginPath();c.ellipse(bx+d*6,186,5,4,0,0,T);c.fill();c.stroke()}
  c.save();c.translate(152,150);c.scale(.8,.8);c.translate(-128,-186)
  c.lineWidth=7;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,142,-1);eye(c,153,142,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,13,7,0,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.moveTo(116,172);for(let k=1;k<=6;k++)c.lineTo(116+k*4,172+(k%2?-3:2));c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,150)
  c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,150)
  c.quadraticCurveTo(184,118,178,106);c.quadraticCurveTo(168,108,160,100);c.quadraticCurveTo(150,110,140,112);c.quadraticCurveTo(136,104,128,98)
  c.quadraticCurveTo(120,106,114,112);c.quadraticCurveTo(104,110,96,100);c.quadraticCurveTo(88,108,78,106);c.quadraticCurveTo(72,124,70,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.moveTo(88,116);c.lineTo(116,124);c.moveTo(140,124);c.lineTo(168,116);c.stroke()
  for(const k of[1,-1])ds(c,13,6,'#fff',()=>{c.moveTo(196,80);c.quadraticCurveTo(214,80+k*6,224,88+k*14)})
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(66,82);c.quadraticCurveTo(128,58,190,82);c.lineTo(192,98);c.quadraticCurveTo(128,74,64,98);c.closePath();c.fill();c.stroke()
  c.fillStyle=TIE;c.lineWidth=3;c.beginPath();c.arc(128,79,7,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(194,88,8,9,0,0,T);c.fill();c.stroke()
  c.restore()
  for(const[d,o]of[[-1,0],[1,.5]]){const p=(t*2+o)%1,s=sin(PI*p);if(s>.15){const x=152+d*(54+26*p),y=46-22*p;c.fillStyle='#fff';c.lineWidth=4;c.beginPath();for(const[ox,oy,r]of[[-6,2,7],[3,-3,8],[9,3,6]])c.moveTo(x+ox*s+r*s,y+oy*s),c.arc(x+ox*s,y+oy*s,r*s,0,T);c.stroke();c.fill()}}
  const desk=()=>{c.moveTo(30,184);c.lineTo(226,184);c.lineTo(250,236);c.lineTo(6,236);c.closePath()}
  c.fillStyle=WDD;c.lineWidth=6;c.beginPath();c.rect(6,232,244,14);c.fill();c.stroke()
  c.fillStyle=WD;c.beginPath();desk();c.fill();c.stroke()
  for(let k=0;k<5;k++){const y=206-k*18,x=18+(k%2?6:0)-(k==3?4:0);c.fillStyle=BK[k];c.lineWidth=5;c.beginPath();c.rect(x,y,72-k*3,18);c.fill();c.stroke();c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.rect(x+60-k*3,y+4,8,10);c.fill();c.stroke()}
  page(c,0)
  if(w)page(c,ln)
  else{c.save();c.translate(152+130*fy,211-40*fy-30*fy*fy);c.rotate(1.2*fy);c.translate(-152,-211);page(c,3);c.restore()}
  ds(c,20,11,JS,()=>{c.moveTo(108,166);c.lineTo(96,198);c.lineTo(102,214)})
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(104,214,10,9,0,0,T);c.fill();c.stroke()
  ds(c,20,11,JS,()=>{c.moveTo(196,166);c.lineTo(214,190);c.lineTo(hx+6,hy+4)})
  const px=w?tx+jx:hx-12,py=w?ty:hy+14
  ds(c,10,5,'#ffd43b',()=>{c.moveTo(px+2,py-3);c.lineTo(px+20,py-30)})
  ds(c,10,5,'#ff8fab',()=>{c.moveTo(px+20,py-30);c.lineTo(px+23,py-35)})
  c.fillStyle='#ffe8cc';c.lineWidth=3;c.beginPath();c.moveTo(px,py);c.lineTo(px+5,py-2);c.lineTo(px+2,py-7);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(hx,hy,10,9,0,0,T);c.fill();c.stroke()
  if(w)for(const[d,o]of[[1,0],[-1,.33],[1,.66]]){const p=(t*6+o)%1;if(p<.8){const x=tx+d*(8+16*p),y=ty-6-14*sin(PI*p);c.fillStyle='#ffc9c9';c.lineWidth=2.5;c.beginPath();c.rect(x-2.5,y-2.5,5,5);c.fill();c.stroke()}}
}
