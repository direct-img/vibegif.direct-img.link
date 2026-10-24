// patient green-haired girl in a straw hat fishing from the shore, her bobber bobbing on the pond with spreading ripples while she waits for a bite
const{sin,cos,PI,max,min,exp}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#69db7c',HD='#2f9e44',HL='#d3f9d8',EYE='#a9744f',ED='#6f4518',HAT='#ffe066',HTD='#e8b93c',RIB='#fa5252',TOP='#ff8fab',TD='#f06595',WAT='#a5d8ff',WD='#74c0fc',ROD='#a9744f',BL='#ffa8a8',Z=.8
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+4,y+4,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+4,y-6,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y+6,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y-1,4.5,0,T);c.fill();c.beginPath();c.arc(x+9,y+10,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t,i)=>{
  const nb=i==9||i==11,by=210+4*sin(2*T*t)+(nb?10:0),bx=196,tx=234,ty=34,bk=i==4
  c.lineWidth=6;c.fillStyle=WAT;c.beginPath();c.ellipse(178,218,72,30,0,0,T);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle='#4dabf7';const fa=T*t,fx=184+34*cos(fa),fy=224+8*sin(fa),fd=-sin(fa)<0?-1:1;c.beginPath();c.ellipse(fx,fy,14,6,0,0,T);c.moveTo(fx-fd*12,fy);c.lineTo(fx-fd*22,fy-6);c.lineTo(fx-fd*22,fy+6);c.fill();c.restore()
  c.strokeStyle=WD;c.lineWidth=4;c.beginPath();c.moveTo(126,230);c.lineTo(146,230);c.moveTo(214,238);c.lineTo(232,238);c.stroke()
  c.strokeStyle='#fff';for(const o of[0,.5]){const p=(t*2+o)%1;c.lineWidth=4*(1-p)+.5;c.beginPath();c.ellipse(bx,214,14+26*p,4+9*p,0,0,T);c.stroke()}
  c.strokeStyle='#111'
  for(const[w,s]of[[5,'#111'],[2,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(tx,ty),c.quadraticCurveTo(tx+2,ty+100,bx,by-18),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4;c.beginPath();c.moveTo(bx,by-18);c.lineTo(bx,by-9);c.stroke()
  c.save();c.beginPath();c.arc(bx,by,13,0,T);c.clip();c.fillStyle='#fff';c.fill();c.fillStyle=RIB;c.fillRect(bx-14,by-14,28,14);c.restore()
  c.lineWidth=5;c.beginPath();c.arc(bx,by,13,0,T);c.stroke();c.beginPath();c.moveTo(bx-13,by);c.lineTo(bx+13,by);c.stroke();c.strokeStyle='#fff';c.lineWidth=3.5;c.beginPath();c.arc(bx,by,7,PI*1.15,PI*1.45);c.stroke();c.strokeStyle='#111'
  c.save();c.beginPath();c.rect(bx-20,by+3,40,20);c.clip();c.fillStyle=WAT;c.beginPath();c.ellipse(bx,by+12,17,8,0,0,T);c.fill();c.restore()
  if(nb){c.fillStyle=WAT;c.lineWidth=3.5;for(const d of[-1,1]){c.beginPath();c.ellipse(bx+d*22,196,4,6,d*.5,0,T);c.fill();c.stroke()}}
  c.save();c.translate(86,262);c.scale(Z,Z);c.translate(-128,-262)
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,206,96,198,150);c.lineTo(58,150);c.bezierCurveTo(50,96,60,36,128,36);c.fill();c.stroke()
  c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,262);c.lineTo(202,262);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(104,190);c.quadraticCurveTo(110,212,128,206);c.quadraticCurveTo(146,212,152,190);c.closePath();c.fill();c.lineWidth=6;c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.quadraticCurveTo(128,204,140,194);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  c.fillStyle=HAIR;c.lineWidth=7;for(let k=4;k>=0;k--)c.beginPath(),c.ellipse(64+k*2,156+k*16,12-k*.5,10,k%2?.5:-.5,0,T),c.fill(),c.stroke()
  c.fillStyle=RIB;c.lineWidth=5;c.beginPath();c.ellipse(72,236,9,6,0,0,T);c.fill();c.stroke()
  c.lineWidth=7;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(bk){c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.moveTo(x-14,144),c.quadraticCurveTo(x,151,x+14,144),c.stroke()}
  else{eye(c,103,140,-1);eye(c,153,140,1)}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,162,12,6,0,0,T),c.fill()
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,165),c.lineTo(128+d*42+k+2,159),c.stroke()
  c.lineWidth=4;c.beginPath();c.arc(130,164,7,.15*PI,.85*PI);c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,146)
  c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,146)
  c.quadraticCurveTo(186,116,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,124,90);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(106,96,96,94);c.quadraticCurveTo(90,104,86,112)
  c.quadraticCurveTo(80,104,78,102);c.quadraticCurveTo(70,120,70,146);c.closePath();c.fill();c.stroke()
  c.save();c.translate(128,58);c.rotate(-.12)
  c.fillStyle=HAT;c.beginPath();c.ellipse(0,8,90,19,0,0,T);c.fill();c.stroke()
  c.beginPath();c.moveTo(-52,10);c.bezierCurveTo(-52,-44,52,-44,52,10);c.quadraticCurveTo(0,20,-52,10);c.fill();c.stroke()
  c.fillStyle=RIB;c.beginPath();c.moveTo(-52,-2);c.quadraticCurveTo(0,8,52,-2);c.lineTo(52,10);c.quadraticCurveTo(0,20,-52,10);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HTD;c.lineWidth=4;c.beginPath();c.ellipse(0,8,76,13,0,.1*PI,.9*PI);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(0,4,36,PI*1.2,PI*1.42);c.stroke();c.strokeStyle='#111'
  c.restore()
  c.restore()
  for(const[w,s]of[[13,'#111'],[6,ROD]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(122,236),c.lineTo(tx,ty),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#ced4da';c.lineWidth=4.5;c.beginPath();c.arc(140,210,9,0,T);c.fill();c.stroke()
  for(const[l,s]of[[28,'#111'],[17,TOP]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(96,262),c.lineTo(124,228),c.moveTo(170,262),c.lineTo(148,204),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;for(const[x,y]of[[126,226],[148,202]])c.beginPath(),c.ellipse(x,y,11,10,-.6,0,T),c.fill(),c.stroke()
}
