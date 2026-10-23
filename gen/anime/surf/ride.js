// surfer girl with a teal ponytail and a yellow rash guard rides along a curling wave, arms out for balance, spray flying off the tail
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=12,delay=85
const SKIN='#ffe3d1',HAIR='#1098ad',HD='#0b7285',HL='#c5f6fa',EYE='#fd7e14',ED='#d9480f',RG='#fcc419',RD='#f08c00',SH='#ff6b6b',SHD='#e03131',BRD='#fff',BS='#20c997',HIB='#f06595',WA='#4dabf7',WD='#1c7ed6',WB='#1971c2',FO='#fff',BL='#ffa8a8'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip()
  c.beginPath();c.ellipse(x+3,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(x+3,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x+3,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+9,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
export default(c,t,i)=>{
  const f=T*t,bx=150+5*sin(f),by=192+4*sin(2*f+.5),ba=.1+.05*sin(f+.8),lb=sin(f)
  const B=(x,y)=>[bx+x*cos(ba)-y*sin(ba),by+x*sin(ba)+y*cos(ba)]
  const face=()=>{c.beginPath();c.moveTo(16,238);c.lineTo(16,150);c.bezierCurveTo(18,90,24,46,58,34);c.bezierCurveTo(86,26,118,40,124,62);c.quadraticCurveTo(122,78,106,80);c.quadraticCurveTo(110,66,96,62);c.bezierCurveTo(80,60,72,96,84,132);c.bezierCurveTo(100,180,170,196,244,200);c.quadraticCurveTo(250,220,244,238);c.quadraticCurveTo(130,248,16,238);c.closePath()}
  c.fillStyle=WA;c.lineWidth=6;face();c.fill();c.save();c.clip()
  c.fillStyle=WB;c.beginPath();c.moveTo(96,62);c.bezierCurveTo(80,60,72,96,84,132);c.bezierCurveTo(60,120,40,90,54,58);c.quadraticCurveTo(74,44,96,62);c.fill()
  c.fillStyle=WD;c.beginPath();c.moveTo(16,150);c.bezierCurveTo(30,180,50,200,66,256);c.lineTo(16,256);c.fill()
  c.strokeStyle='#a5d8ff';c.lineWidth=4;for(let k=0;k<4;k++){const u=((k/4+t)%1),x=100+u*170,y=150+u*48;c.beginPath();c.moveTo(x-30,y-14);c.quadraticCurveTo(x-10,y-2,x+14,y+2);c.stroke()}
  c.restore();c.strokeStyle='#111';c.lineWidth=6;face();c.stroke()
  for(let k=0;k<7;k++){const a=k/6,x=60+60*a,y=34-10*sin(PI*a)+4*sin(f*2+k*1.3),r=9+3*sin(f*2+k);c.fillStyle=FO;c.lineWidth=4;c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke()}
  c.fillStyle=FO;c.lineWidth=4;c.beginPath();c.moveTo(124,62);c.quadraticCurveTo(132,78,118,86);c.quadraticCurveTo(116,74,106,80);c.quadraticCurveTo(122,78,124,62);c.fill();c.stroke()
  for(let k=0;k<6;k++){const u=(t*2+k/6)%1,x=136-u*60+8*sin(k*2),y=86+u*u*90-30*sin(PI*u),r=4*(1-u)+2;c.fillStyle=FO;c.lineWidth=3.5;c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke()}
  const tail=B(-52,0)
  for(let k=0;k<7;k++){const u=(t*2+k/7)%1,a=PI*1.1+.5*(k%3)/2,x=tail[0]+cos(a)*u*60,y=tail[1]-6+sin(a)*u*50+u*u*40,r=(1-u)*6+1.5;c.fillStyle=FO;c.lineWidth=3.5;c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke()}
  c.save();c.translate(bx,by);c.rotate(ba)
  c.fillStyle=BRD;c.lineWidth=5;c.beginPath();c.moveTo(-60,-4);c.lineTo(44,-6);c.quadraticCurveTo(70,-4,74,4);c.quadraticCurveTo(66,10,44,8);c.lineTo(-60,6);c.quadraticCurveTo(-68,1,-60,-4);c.closePath();c.fill();c.stroke()
  c.strokeStyle=BS;c.lineWidth=4;c.beginPath();c.moveTo(-54,1);c.lineTo(52,1);c.stroke();c.strokeStyle=SH;c.lineWidth=3;c.beginPath();c.moveTo(-50,-1);c.lineTo(-30,-1);c.stroke();c.strokeStyle='#111'
  c.fillStyle=BS;c.lineWidth=4;c.beginPath();c.moveTo(-50,6);c.lineTo(-58,18);c.lineTo(-42,7);c.closePath();c.fill();c.stroke()
  c.restore()
  c.fillStyle=FO;c.lineWidth=4;for(let k=0;k<5;k++){const p=B(-50+k*26,8),r=5+3*sin(f*3+k*2);c.beginPath();c.arc(p[0],p[1]+2,r,PI,T);c.closePath();c.fill();c.stroke()}
  const hip=[bx-4,by-40+lb*1.5],fb=B(-26,-6),ff=B(24,-6)
  for(const[ft,kx]of[[fb,-20],[ff,18]]){const k=[(hip[0]+ft[0])/2+kx*.5,(hip[1]+ft[1])/2-2];line(c,[hip,k,ft],9,SKIN)}
  for(const ft of[fb,ff]){c.save();c.translate(...ft);c.rotate(ba);c.fillStyle=SKIN;c.lineWidth=4;c.beginPath();c.ellipse(3,-2,10,5,0,0,T);c.fill();c.stroke();c.restore()}
  c.fillStyle=SH;c.lineWidth=5;c.beginPath();c.moveTo(hip[0]-18,hip[1]-10);c.lineTo(hip[0]+18,hip[1]-10);c.lineTo(hip[0]+26,hip[1]+10);c.lineTo(hip[0]+4,hip[1]+12);c.lineTo(hip[0],hip[1]+4);c.lineTo(hip[0]-4,hip[1]+12);c.lineTo(hip[0]-26,hip[1]+10);c.closePath();c.fill();c.stroke()
  c.strokeStyle=SHD;c.lineWidth=3;c.beginPath();c.moveTo(hip[0]+12,hip[1]-6);c.lineTo(hip[0]+18,hip[1]+8);c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(hip[0]-12,hip[1]+2,3,0,T);c.fill();c.strokeStyle='#111'
  const sx=bx-2,sy=hip[1]-36
  for(const d of[-1,1]){const s=[sx+d*14,sy+4],w=d*lb*.5,e=[sx+d*34,sy+2-10*w],h=[sx+d*54,sy-4-22*w];line(c,[s,e,h],9,RG);c.fillStyle=SKIN;c.lineWidth=4;c.beginPath();c.arc(h[0]+d*2,h[1],6.5,0,T);c.fill();c.stroke();c.strokeStyle=RD;c.lineWidth=3;c.beginPath();c.moveTo(h[0]-d*5,h[1]-6);c.lineTo(h[0]-d*5,h[1]+6);c.stroke();c.strokeStyle='#111'}
  c.fillStyle=SKIN;c.beginPath();c.rect(sx-6,sy-10,12,10);c.fill()
  c.fillStyle=RG;c.lineWidth=5;c.beginPath();c.moveTo(sx-14,sy-6);c.lineTo(sx+14,sy-6);c.quadraticCurveTo(sx+22,sy+14,sx+18,hip[1]-6);c.lineTo(sx-18,hip[1]-6);c.quadraticCurveTo(sx-22,sy+14,sx-14,sy-6);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(sx-17,sy+12);c.lineTo(sx+17,sy+8);c.lineTo(sx+18,sy+16);c.lineTo(sx-18,sy+20);c.closePath();c.fill();c.stroke()
  c.fillStyle=RD;c.lineWidth=4;c.beginPath();c.moveTo(sx-9,sy-6);c.quadraticCurveTo(sx,sy+2,sx+9,sy-6);c.quadraticCurveTo(sx,sy-11,sx-9,sy-6);c.fill();c.stroke()
  c.save();c.translate(sx+2,sy-28+lb);c.rotate(.04*sin(f));c.scale(.5,.5);c.translate(-128,-128)
  c.save();c.translate(70,104);c.rotate(1.2+.18*sin(f*2))
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(0,-10);c.bezierCurveTo(40,-6,60,40,40,86);c.quadraticCurveTo(52,110,28,124);c.quadraticCurveTo(26,100,10,110);c.bezierCurveTo(22,70,8,30,-10,10);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.moveTo(6,6);c.bezierCurveTo(30,26,36,58,28,90);c.stroke();c.strokeStyle='#111'
  c.fillStyle=RD;c.lineWidth=7;c.beginPath();c.ellipse(0,0,10,14,0,0,T);c.fill();c.stroke();c.restore()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(126,36);c.bezierCurveTo(192,36,200,94,190,146);c.lineTo(64,146);c.bezierCurveTo(54,94,62,36,126,36);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(i==9){c.lineWidth=7;for(const x of[107,157])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,150,x+15,142),c.stroke()}else eye(c,107,140,-1),eye(c,157,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(132+d*42,162,12,6,0,0,T),c.fill()
  c.fillStyle='#c92a2a';c.lineWidth=5;c.beginPath();c.moveTo(118,164);c.quadraticCurveTo(132,186,146,164);c.closePath();c.fill();c.stroke()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,140)
  c.bezierCurveTo(56,80,86,46,130,46);c.bezierCurveTo(176,46,200,84,186,140)
  c.quadraticCurveTo(184,116,174,100);c.quadraticCurveTo(168,108,160,114);c.quadraticCurveTo(158,96,146,88);c.quadraticCurveTo(136,104,124,110)
  c.quadraticCurveTo(122,96,114,90);c.quadraticCurveTo(102,104,94,112);c.quadraticCurveTo(92,100,86,96);c.quadraticCurveTo(76,112,70,140);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=8;for(const[a0,a1]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a0,PI*a1),c.stroke();c.strokeStyle='#111'
  c.save();c.translate(178,80);c.fillStyle=HIB;c.lineWidth=6;for(let k=0;k<5;k++){const b=k*T/5-PI/2;c.beginPath();c.ellipse(13*cos(b),13*sin(b),11,8,b,0,T);c.fill();c.stroke()}c.fillStyle='#ffd43b';c.beginPath();c.arc(0,0,7,0,T);c.fill();c.stroke();c.restore()
  c.restore()
}
