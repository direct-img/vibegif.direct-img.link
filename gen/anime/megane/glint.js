// hime-cut girl with slate hair pushes her red glasses up with one finger, the lenses flash white and a glint star pops
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#5c636a',HD='#495057',HL='#ced4da',EYE='#f59f00',ED='#d9480f',VEST='#e9d8a6',RIB='#e03131',FR='#e03131',BL='#ffa8a8'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+18);c.lineTo(x+8,y+18);c.stroke()
}
const glint=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.beginPath();for(let k=0;k<8;k++){const rr=k%2?r*.28:r,b=k*PI/4;c.lineTo(cos(b)*rr,sin(b)*rr)}c.closePath();c.restore();c.fill();c.stroke()}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
export default(c,t)=>{
  const r=ez(t,.15,.35)-ez(t,.8,.97),gy=-5*(ez(t,.35,.45)-ez(t,.8,.9)),fl=t>=.45&&t<.82
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,96,206,150);c.lineTo(210,256);c.lineTo(46,256);c.lineTo(50,150);c.bezierCurveTo(44,96,58,34,128,34);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(62,196,54,256);c.lineTo(202,256);c.quadraticCurveTo(194,196,156,188);c.closePath();c.fill();c.stroke()
  c.fillStyle=VEST;c.beginPath();c.moveTo(94,192);c.lineTo(128,240);c.lineTo(162,192);c.quadraticCurveTo(192,206,198,256);c.lineTo(58,256);c.quadraticCurveTo(64,206,94,192);c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.lineTo(128,206);c.lineTo(140,192);c.lineTo(140,166);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,190);c.moveTo(140,166);c.lineTo(140,190);c.stroke()
  c.fillStyle=RIB;for(const d of[-1,1])c.beginPath(),c.moveTo(128,214),c.lineTo(128+d*20,204),c.lineTo(128+d*18,226),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.arc(128,215,5,0,T);c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,156);c.lineTo(127,159);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,163,11,5.5,0,0,T),c.fill()
  c.lineWidth=3.5;c.beginPath()
  if(fl)c.moveTo(116,168),c.quadraticCurveTo(126,173,136,163);else c.moveTo(121,168),c.quadraticCurveTo(128,172,135,168)
  c.stroke()
  c.save();c.translate(0,gy)
  const lens=x=>{c.beginPath();c.roundRect(x-21,121,42,38,12)}
  for(const x of[103,153]){lens(x);c.fillStyle=fl?'#fff':'rgba(208,235,255,.35)';c.fill()}
  if(fl){c.strokeStyle='#a5d8ff';c.lineWidth=5;for(const x of[103,153]){c.save();lens(x);c.clip();c.beginPath();c.moveTo(x-6,160);c.lineTo(x+22,124);c.moveTo(x-18,154);c.lineTo(x+4,126);c.stroke();c.restore()}}
  for(const[w,s]of[[8,'#111'],[3,FR]]){c.lineWidth=w;c.strokeStyle=s;for(const x of[103,153])lens(x),c.stroke();c.beginPath();c.moveTo(124,137);c.quadraticCurveTo(128,133,132,137);c.moveTo(82,132);c.lineTo(73,128);c.moveTo(174,132);c.lineTo(183,128);c.stroke()}
  c.strokeStyle='#111';c.restore()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,204);c.lineTo(66,150)
  c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,190,150);c.lineTo(192,204);c.lineTo(172,204);c.lineTo(174,122)
  c.lineTo(176,110);for(let x=168;x>84;x-=12)c.lineTo(x,112+(x%24?0:-4));c.lineTo(80,110);c.lineTo(82,122);c.lineTo(84,204);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,b]of[[1.22,1.34],[1.42,1.5],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*b),c.stroke()
  c.strokeStyle=HD;c.lineWidth=3;for(const x of[74,182])c.beginPath(),c.moveTo(x,150),c.lineTo(x,198),c.stroke()
  c.strokeStyle='#111'
  const hx=192,hy=142+gy+120*(1-r)
  if(r>0){
    for(const[w,s]of[[34,'#111'],[23,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(232,hy+120),c.lineTo(hx+8,hy+30),c.stroke()
    c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN
    for(const y of[-17,15])c.beginPath(),c.ellipse(hx-12,hy+y,12,5.5,y<0?.1:-.1,0,T),c.fill(),c.stroke()
    c.beginPath();c.roundRect(hx-10,hy-16,24,34,10);c.fill();c.stroke()
    c.lineWidth=2.5;c.beginPath();c.moveTo(hx-10,hy-4);c.lineTo(hx-2,hy-4);c.moveTo(hx-10,hy+5);c.lineTo(hx-2,hy+5);c.stroke()
  }
  if(fl){const p=(t-.45)/.37;c.fillStyle='#fff9db';c.lineWidth=3.5;glint(c,84,122+gy,4+14*sin(PI*p),p*2)}
}
