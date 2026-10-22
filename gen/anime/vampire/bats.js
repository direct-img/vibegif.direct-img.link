// vampire girl with a purple hime cut and a high-collared cape that billows, flashing a fang smile while three bats flap around her
const{sin,cos,PI}=Math,T=2*PI
export const frames=12,delay=90
const SKIN='#fff0f0',HAIR='#7048e8',HD='#5f3dc4',HL='#d0bfff',EYE='#fa5252',ED='#a51111',CAPE='#495057',CL='#868e96',LIN='#e03131',DRS='#5c5f66',BL='#ffa8a8',BAT='#5c5f66',BW='#868e96'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,3.5,8,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-4);c.quadraticCurveTo(x,y-14,x+16,y-4);c.moveTo(x+d*15,y-5);c.lineTo(x+d*21,y-10);c.stroke()
}
const bat=(c,x,y,s,f)=>{
  c.save();c.translate(x,y);c.scale(s,s)
  const w=14*cos(f),p=d=>{c.beginPath();c.moveTo(d*6,-2);c.quadraticCurveTo(d*18,-10-w,d*30,-6-w*1.4);c.quadraticCurveTo(d*26,2-w*.6,d*22,4-w*.4);c.quadraticCurveTo(d*18,0,d*15,6);c.quadraticCurveTo(d*11,2,d*6,6);c.closePath()}
  for(const[lw,col]of[[10,'#fff'],[4,'#111']]){c.lineWidth=lw;c.strokeStyle=col;for(const d of[-1,1])p(d),c.stroke();c.beginPath();c.ellipse(0,2,8,9,0,0,T);c.moveTo(-6,-4);c.lineTo(-5,-13);c.lineTo(-1,-6);c.moveTo(6,-4);c.lineTo(5,-13);c.lineTo(1,-6);c.stroke()}
  c.fillStyle=BW;for(const d of[-1,1])p(d),c.fill()
  c.fillStyle=BAT;c.beginPath();c.ellipse(0,2,8,9,0,0,T);c.fill();c.beginPath();c.moveTo(-6,-4);c.lineTo(-5,-13);c.lineTo(-1,-6);c.lineTo(1,-6);c.lineTo(5,-13);c.lineTo(6,-4);c.fill()
  c.fillStyle='#ff6b6b';for(const d of[-1,1])c.beginPath(),c.arc(d*3,0,1.8,0,T),c.fill()
  c.restore()
}
export default(c,t,i)=>{
  c.save();c.translate(128,242);c.scale(.84,.84);c.translate(-128,-256)
  const wv=k=>8*sin(T*t*2-k)
  c.lineWidth=6;c.fillStyle=CAPE;c.beginPath();c.moveTo(96,186);c.bezierCurveTo(60,196,30+wv(0),230,6+wv(0),268);for(let k=0;k<5;k++){const x=6+(k+1)*48.8;c.quadraticCurveTo(x-24,252+wv(k+1)*.5,x+(k<4?0:wv(5)),268+(k<4?wv(k+1)*.4:wv(5)))}c.bezierCurveTo(226+wv(5),230,196,196,160,186);c.closePath();c.fill();c.stroke()
  c.strokeStyle=CL;c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*44,200),c.quadraticCurveTo(128+d*76,228,128+d*(88+wv(2)*.5),262),c.stroke();c.strokeStyle='#111'
  for(const d of[-1,1]){c.fillStyle=LIN;c.lineWidth=6;c.beginPath();c.moveTo(128+d*24,184);c.quadraticCurveTo(128+d*84,168,128+d*106,92);c.quadraticCurveTo(128+d*112,160,128+d*66,208);c.closePath();c.fill();c.stroke()}
  c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,96,206,150);c.lineTo(208,226);c.lineTo(48,226);c.lineTo(50,150);c.bezierCurveTo(42,96,56,34,128,34);c.fill();c.stroke()
  c.fillStyle=DRS;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(72,198,68,262);c.lineTo(188,262);c.quadraticCurveTo(184,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,194);c.lineTo(140,194);c.lineTo(140,166);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.moveTo(140,166);c.lineTo(140,192);c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(128,196),c.quadraticCurveTo(128+d*22,188,128+d*26,200),c.quadraticCurveTo(128+d*18,206,128+d*22,214),c.quadraticCurveTo(128+d*12,218,128,212),c.closePath(),c.fill(),c.stroke()
  for(const y of[220,238])c.beginPath(),c.moveTo(118,y-6),c.quadraticCurveTo(128,y+6,138,y-6),c.quadraticCurveTo(128,y-2,118,y-6),c.fill(),c.stroke()
  c.fillStyle=LIN;c.lineWidth=4;c.beginPath();c.ellipse(128,204,8,9,0,0,T);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(125,201,2.5,0,T);c.fill()
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(i==6||i==7){c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,150,x+15,142),c.stroke()}else eye(c,103,140,-1),eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,11,5,0,0,T),c.fill()
  c.lineWidth=3.5;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(116,165);c.quadraticCurveTo(128,182,140,165);c.quadraticCurveTo(128,169,116,165);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=2.5;for(const x of[121,135])c.beginPath(),c.moveTo(x-3.5,167),c.lineTo(x,174),c.lineTo(x+3.5,167.5),c.closePath(),c.fill(),c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,160)
  c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,190,160)
  c.lineTo(176,170);c.quadraticCurveTo(182,138,176,104);c.quadraticCurveTo(128,112,80,104);c.quadraticCurveTo(74,138,80,170);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=3;c.beginPath();for(const x of[98,114,142,158])c.moveTo(x,86),c.lineTo(x,104);c.moveTo(184,124);c.lineTo(184,160);c.moveTo(72,124);c.lineTo(72,160);c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle=LIN;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(170,66),c.lineTo(170+d*18,52),c.lineTo(170+d*16,78),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.arc(170,66,6,0,T);c.fill();c.stroke()
  c.restore()
  for(const[k,x,y]of[[0,40,50],[1,206,40],[2,212,146]]){const a=T*t+k*2.1;bat(c,x+12*cos(a),y+8*sin(2*a),1.05,T*t*3+k*1.7)}
}
