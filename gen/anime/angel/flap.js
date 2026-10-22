// little angel with long platinum hair and a side braid floating with her hands clasped, wings flapping, halo bobbing, a feather drifting down
const{sin,cos,PI,round}=Math,T=2*PI
export const frames=16,delay=70
const SKIN='#ffe3d1',HAIR='#f8f9fa',HD='#dee2e6',HS='#adb5bd',EYE='#3bc9db',ED='#0b7285',DR='#d0ebff',DD='#74c0fc',GOLD='#ffd43b',GD='#f59f00',BL='#ffa8a8',WL='#ced4da'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const wing=(c,x,y,d,a)=>{
  c.save();c.translate(x,y);c.scale(d,1);c.rotate(-a)
  const p=()=>{c.beginPath();c.moveTo(0,4);c.bezierCurveTo(24,-40,70,-62,104,-56);c.quadraticCurveTo(100,-34,84,-30);c.quadraticCurveTo(92,-12,70,-8);c.quadraticCurveTo(76,8,52,10);c.quadraticCurveTo(54,26,30,24);c.quadraticCurveTo(14,24,0,14);c.closePath()}
  c.lineWidth=5;c.fillStyle='#fff';p();c.fill()
  c.strokeStyle=WL;c.lineWidth=3;c.beginPath();for(const[ex,ey]of[[84,-30],[70,-8],[52,10]])c.moveTo(ex,ey),c.quadraticCurveTo(ex*.6,ey*.6-8,ex*.3,ey*.3-6);c.moveTo(20,-12);c.quadraticCurveTo(50,-38,90,-48);c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;p();c.stroke();c.restore()
}
export default(c,t,i)=>{
  const by=round(2*sin(T*t)),a=.38*sin(2*T*t),hy=24+by+round(3*sin(2*T*t+1))
  const fp=t,fx=40+14*sin(fp*T*2),fy=150+120*fp
  c.save();c.translate(fx,fy);c.rotate(.6*sin(fp*T*2)+.4)
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(0,-14);c.bezierCurveTo(9,-8,8,8,0,14);c.bezierCurveTo(-8,8,-9,-8,0,-14);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(0,-9);c.lineTo(0,18);c.stroke();c.restore()
  c.translate(0,by)
  for(const d of[-1,1])wing(c,128+d*12,146,d,a)
  c.save();c.translate(128,92);c.scale(.6,.6);c.translate(-128,-128)
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,96,206,150);c.bezierCurveTo(216,210,204,250,212,290);c.quadraticCurveTo(170,302,128,290);c.quadraticCurveTo(86,302,44,290);c.bezierCurveTo(52,250,40,210,50,150);c.bezierCurveTo(42,96,56,34,128,34);c.fill();c.stroke()
  c.restore()
  for(const[x,s]of[[118,-1],[138,1]]){for(const[w,col]of[[13,'#111'],[7,SKIN]])c.lineWidth=w,c.strokeStyle=col,c.beginPath(),c.moveTo(x,196),c.lineTo(x+s*2,222),c.stroke()
    c.strokeStyle='#111';c.lineWidth=4;c.fillStyle=SKIN;c.beginPath();c.ellipse(x+s*3,226,5,8,s*.3,0,T);c.fill();c.stroke()}
  c.lineWidth=5;c.fillStyle=DR;c.beginPath();c.moveTo(112,138);c.lineTo(144,138);c.bezierCurveTo(154,156,160,176,174,198);for(let k=0;k<4;k++)c.quadraticCurveTo(163-k*23,208,152-k*23,200);c.bezierCurveTo(96,176,102,156,112,138);c.closePath();c.fill();c.stroke()
  c.strokeStyle=DD;c.lineWidth=3;c.beginPath();c.moveTo(120,170);c.lineTo(114,196);c.moveTo(136,170);c.lineTo(142,196);c.stroke()
  c.strokeStyle='#111';c.fillStyle=GOLD;c.lineWidth=4;c.beginPath();c.moveTo(108,160);c.quadraticCurveTo(128,166,148,160);c.lineTo(150,170);c.quadraticCurveTo(128,176,106,170);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.lineWidth=4;c.beginPath();c.rect(123,128,10,12);c.fill();c.beginPath();c.moveTo(123,128);c.lineTo(123,138);c.moveTo(133,128);c.lineTo(133,138);c.stroke()
  for(const d of[-1,1])for(const[w,col]of[[14,'#111'],[8,DR]])c.lineWidth=w,c.strokeStyle=col,c.beginPath(),c.moveTo(128+d*15,142),c.quadraticCurveTo(128+d*18,156,128+d*6,156),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4;c.fillStyle=SKIN;c.beginPath();c.ellipse(128,152,8,10,0,0,T);c.fill();c.stroke();c.lineWidth=2;c.beginPath();c.moveTo(128,144);c.lineTo(128,158);c.stroke()
  c.save();c.translate(128,92);c.scale(.6,.6);c.translate(-128,-128)
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(i==12||i==13){c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,150,x+15,142),c.stroke()}else eye(c,103,140,-1),eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,12,6,0,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(128,164,8,.15*PI,.85*PI);c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,190)
  c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,190,190)
  c.quadraticCurveTo(184,140,180,104);c.quadraticCurveTo(172,100,166,110);c.quadraticCurveTo(158,96,148,92);c.quadraticCurveTo(142,104,134,110)
  c.quadraticCurveTo(128,96,120,92);c.quadraticCurveTo(116,104,108,110);c.quadraticCurveTo(100,96,92,94);c.quadraticCurveTo(86,104,84,110)
  c.quadraticCurveTo(80,102,76,104);c.quadraticCurveTo(72,140,66,190);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HS;c.lineWidth=4;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle=HAIR;c.lineWidth=6
  for(let k=0;k<5;k++){const y=192+k*20;c.beginPath();c.ellipse(186-k,y,15-k*1.4,13,0,0,T);c.fill();c.stroke()}
  c.fillStyle=DD;c.lineWidth=5;c.beginPath();c.ellipse(180,290,10,6,0,0,T);c.fill();c.stroke()
  c.restore()
  c.translate(0,-by)
  for(const[w,col]of[[13,'#111'],[6,GOLD]])c.lineWidth=w,c.strokeStyle=col,c.beginPath(),c.ellipse(128,hy,30,8,0,0,T),c.stroke()
  c.strokeStyle='#111'
}
