// blonde girl with twin buns doing a tehepero oops: winking, tongue out, bonking her own head with her fist so little stars pop
const{sin,cos,PI,abs,max}=Math,T=2*PI
export const frames=8,delay=100
const SKIN='#ffe3d1',HAIR='#ffe066',HD='#f59f00',HL='#fff9db',EYE='#f783ac',ED='#c2255c',UN='#fff',COL='#364fc7',RB='#fa5252',BL='#ffa8a8',TG='#ff8fab',ST='#ffd43b'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const star=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.beginPath();for(let k=0;k<10;k++){const rr=k%2?r*.45:r,b=k*PI/5-PI/2;c.lineTo(cos(b)*rr,sin(b)*rr)}c.closePath();c.restore();c.fill();c.stroke()}
export default(c,t)=>{
  const u=abs(sin(2*PI*t)),hit=u<.5,tl=.07*(1-u)
  const head=f=>{c.save();c.translate(128,186);c.rotate(-tl);c.translate(-128,-186);f();c.restore()}
  head(()=>{
    c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,208,100,200,156);c.quadraticCurveTo(196,178,178,176);c.lineTo(78,176);c.quadraticCurveTo(60,178,56,156);c.bezierCurveTo(48,100,60,34,128,34);c.fill();c.stroke()
    c.fillStyle=HAIR;for(const d of[-1,1])c.beginPath(),c.arc(128+d*54,52,25,0,T),c.fill(),c.stroke()
    c.strokeStyle=HD;c.lineWidth=3.5;for(const d of[-1,1])c.beginPath(),c.arc(128+d*54,52,14,PI*1.1,PI*1.7),c.stroke();c.strokeStyle='#111'
  })
  c.lineWidth=6;c.fillStyle=UN;c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(62,196,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,196,156,188);c.closePath();c.fill();c.stroke()
  c.fillStyle=COL;c.beginPath();c.moveTo(98,189);c.lineTo(128,228);c.lineTo(158,189);c.lineTo(172,197);c.lineTo(128,248);c.lineTo(84,197);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(90,198);c.lineTo(128,240);c.lineTo(166,198);c.stroke();c.strokeStyle='#111'
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.lineTo(128,206);c.lineTo(140,192);c.lineTo(140,166);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,190);c.moveTo(140,166);c.lineTo(140,190);c.stroke()
  c.fillStyle=RB;for(const d of[-1,1])c.beginPath(),c.moveTo(128,226),c.lineTo(128+d*20,216),c.lineTo(128+d*18,238),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.arc(128,227,5,0,T);c.fill();c.stroke()
  head(()=>{
    c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103,140,-1)
    c.lineWidth=6;c.beginPath();c.moveTo(166,128);c.lineTo(144,140);c.lineTo(166,152);c.stroke()
    c.lineWidth=2.5;c.beginPath();c.moveTo(128,156);c.lineTo(127,159);c.stroke()
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,12,6,0,0,T),c.fill()
    c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,164),c.lineTo(128+d*42+k+2,158),c.stroke()
    c.fillStyle=TG;c.lineWidth=3.5;c.beginPath();c.moveTo(126,168);c.lineTo(126,176+2*u);c.arc(132,176+2*u,6,PI,0,true);c.lineTo(138,168);c.fill();c.stroke()
    c.lineWidth=1.8;c.beginPath();c.moveTo(132,170);c.lineTo(132,177+2*u);c.stroke()
    c.lineWidth=3.5;c.beginPath();c.moveTo(116,166);c.quadraticCurveTo(128,174,142,164);c.stroke()
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,156)
    c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,156)
    c.quadraticCurveTo(184,120,178,104);c.quadraticCurveTo(170,102,164,110);c.quadraticCurveTo(160,96,148,92);c.quadraticCurveTo(142,104,132,108)
    c.quadraticCurveTo(126,94,114,92);c.quadraticCurveTo(108,104,98,108);c.quadraticCurveTo(92,98,82,102)
    c.quadraticCurveTo(72,124,70,156);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';c.lineWidth=4;c.beginPath();c.moveTo(144,114);c.lineTo(166,108);c.stroke()
  })
  const fx=196+14*u,fy=96-12*u
  for(const[w,s]of[[30,'#111'],[19,UN]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(186,262),c.quadraticCurveTo(222,214,226,176),c.lineTo(fx+8,fy+14),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=COL;c.save();c.translate(fx+10,fy+20);c.rotate(.9-.3*u);c.beginPath();c.roundRect(-14,-6,28,12,4);c.fill();c.stroke();c.restore()
  c.fillStyle=SKIN;c.save();c.translate(fx,fy);c.rotate(.5);c.beginPath();c.roundRect(-17,-15,34,30,12);c.fill();c.stroke();c.lineWidth=2.5;c.beginPath();for(const k of[-6,1,8])c.moveTo(k,-13),c.lineTo(k,-5);c.stroke();c.restore()
  if(hit){c.fillStyle=ST;c.lineWidth=4;for(const[a,r]of[[-2,15],[-1.1,12],[-.2,10]]){const q=1-u*1.6;star(c,fx-4+cos(a)*(28+14*(1-q)),fy-8+sin(a)*(28+14*(1-q)),r*q,a)}}
}
