// chibi idol with pink twin tails, holding up a peace sign and winking a star out
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#f783ac',HD='#e64980',HL='#ffdeeb',EYE='#4dabf7',ED='#1864ab',RB='#f06595',CLIP='#ffd43b',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+18);c.lineTo(x+8,y+18);c.stroke()
}
const star=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.beginPath();for(let k=0;k<10;k++){const rr=k%2?r*.45:r,b=k*PI/5-PI/2;c.lineTo(cos(b)*rr,sin(b)*rr)}c.closePath();c.restore();c.fill();c.stroke()}
export default(c,t)=>{
  const w=t>=.45&&t<.85,b=-3*max(0,sin(2*T*t)),sw=.07*sin(t*T)
  for(const d of[-1,1]){
    c.save();c.translate(128+d*64,78+b);c.rotate(d*.12+sw)
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(0,0);c.bezierCurveTo(d*46,4,d*62,92,d*36,156);c.quadraticCurveTo(d*28,176,d*10,172);c.bezierCurveTo(d*30,110,d*8,46,0,0);c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=3;c.beginPath();c.moveTo(d*14,20);c.bezierCurveTo(d*34,50,d*40,100,d*28,140);c.stroke();c.strokeStyle='#111'
    c.restore()
  }
  c.save();c.translate(0,b)
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,206,96,200,152);c.lineTo(56,152);c.bezierCurveTo(50,96,60,34,128,34);c.fill();c.stroke()
  c.restore()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,170);c.lineTo(116,194);c.quadraticCurveTo(128,206,140,194);c.lineTo(140,170);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,170);c.lineTo(116,192);c.moveTo(140,170);c.lineTo(140,192);c.stroke()
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(108,192);c.quadraticCurveTo(128,214,148,192);c.stroke()
  c.fillStyle=RB;for(const d of[-1,1])c.beginPath(),c.moveTo(128,224),c.quadraticCurveTo(128+d*26,200,128+d*30,222),c.quadraticCurveTo(128+d*24,240,128,224),c.fill(),c.stroke()
  for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*2,226),c.lineTo(128+d*12,250),c.lineTo(128+d*20,244),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.arc(128,225,6,0,T);c.fill();c.stroke()
  c.save();c.translate(0,b)
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1)
  if(w){c.lineWidth=5;c.beginPath();c.moveTo(166,130);c.lineTo(146,141);c.lineTo(166,151);c.stroke()}else eye(c,153,140,1)
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,156);c.lineTo(127,159);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,12,6,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,164),c.lineTo(128+d*42+k+2,158),c.stroke()
  if(w){c.lineWidth=3.5;c.fillStyle=MO;c.beginPath();c.moveTo(119,166);c.quadraticCurveTo(128,184,137,166);c.closePath();c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,178,7,5,0,0,T);c.fill();c.restore()}
  else{c.lineWidth=3.5;c.beginPath();c.arc(128,164,7,.15*PI,.85*PI);c.stroke()}
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,146)
  c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,146)
  c.quadraticCurveTo(186,116,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,124,90);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(106,96,96,94);c.quadraticCurveTo(90,104,86,112)
  c.quadraticCurveTo(80,104,78,102);c.quadraticCurveTo(70,120,70,146);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle=CLIP;c.lineWidth=4;for(const d of[-1,1])star(c,128+d*62,76,11,d*.3)
  c.restore()
  if(w){const p=(t-.45)/.4;c.fillStyle=CLIP;c.lineWidth=4;star(c,172+p*50,128-p*50,6+10*sin(PI*p),p*4)}
  const hx=62,hy=168+b*1.5
  for(const[l,s]of[[30,'#111'],[19,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(92,226),c.lineTo(52,210),c.lineTo(hx,hy+14),c.stroke()
  c.strokeStyle='#111'
  for(const[fx,fy]of[[-12,-34],[6,-36]])for(const[l,s]of[[14,'#111'],[7,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(hx,hy),c.lineTo(hx+fx,hy+fy),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(hx,hy+4,13,12,0,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(hx+8,hy+2,5,8,.6,0,T);c.fill();c.stroke()
}
