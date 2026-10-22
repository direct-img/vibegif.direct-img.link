// spiky-haired girl in a headband throws a punch straight at the viewer: the fist swells into a burst with focus lines
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min,hypot}=Math,T=2*PI
export const frames=12,delay=80,rim=4
const dots=(col,r)=>{const k=createCanvas(6,6),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[3,3],[0,0],[6,0],[0,6],[6,6]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const TONE=dots('#111',1.4),LITE=dots('#fff',1.3)
const ease=u=>u<0?0:u>1?1:u*u*(3-2*u)
const burst=(c,x,y,R,n,o)=>{c.beginPath();for(let k=0;k<n*2;k++){const r=k%2?R*.6:R*(1+.12*sin(k*2.3+o)),a=k*PI/n+o*.1;c.lineTo(x+cos(a)*r,y+sin(a)*r)}c.closePath()}
const eye=(c,x,y,d)=>{
  c.save();c.beginPath();c.moveTo(x-16,y-4+d*4);c.lineTo(x+16,y-4-d*4);c.lineTo(x+16,y+20);c.lineTo(x-16,y+20);c.clip()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,13,15,0,0,T);c.fill();c.clip()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+1,y+4,10,12,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x-2,y,3.5,0,T);c.fill();c.beginPath();c.arc(x+4,y+9,1.8,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-15,y-4+d*4);c.lineTo(x+15,y-4-d*4);c.lineTo(x+d*20,y-8-d*d*5);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-6,y+18);c.lineTo(x+6,y+18);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(x-13,y-20+d*6);c.lineTo(x+13,y-20-d*6);c.stroke()
}
const fist=c=>{
  c.lineWidth=5;c.fillStyle='#fff'
  c.beginPath();c.roundRect(-30,24,60,30,6);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();for(let k=-2;k<=3;k++)c.moveTo(-30+k*12,24),c.lineTo(-18+k*12,54);c.stroke()
  c.lineWidth=5;c.beginPath();c.roundRect(-38,-30,76,62,22);c.fill();c.stroke()
  for(let k=0;k<4;k++){c.beginPath();c.roundRect(-38+k*19,-32,19,32,9);c.fill();c.stroke()}
  c.beginPath();c.moveTo(-38,4);c.quadraticCurveTo(-36,22,-10,22);c.lineTo(20,20);c.quadraticCurveTo(28,12,22,4);c.lineTo(-30,4);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(let k=0;k<4;k++)c.moveTo(-31+k*19,-26),c.lineTo(-31+k*19,-20);c.stroke()
}
export default(c,t)=>{
  const tn=c.createPattern(TONE,'repeat')
  const k=t<.3?0:t<.4?ease((t-.3)/.1):t<.7?1:1-ease((t-.7)/.3),hit=t>=.4&&t<.7,f=(t*12|0)%2
  const fx=206-44*k,fy=186-16*k,s=.5+.85*k,tr=t<.3?1.5*sin(t*T*9):0
  if(hit){c.lineWidth=3;c.fillStyle='#111'
    for(let j=0;j<28;j++){const a=j*T/28+f*.11,dx=cos(a),dy=sin(a),e=min(dx>0?(248-fx)/dx:(fx-8)/-dx,dy>0?(248-fy)/dy:(fy-8)/-dy)-2,r=96+(j%3)*6;if(e>r+8){const w=.03;c.beginPath();c.moveTo(fx+cos(a-w)*e,fy+sin(a-w)*e);c.lineTo(fx+dx*r,fy+dy*r);c.lineTo(fx+cos(a+w)*e,fy+sin(a+w)*e);c.closePath();c.fill()}}}
  c.save();c.translate(96+tr-10*k,124-6*k);c.rotate(-.08*k);c.scale(.86,.86);c.translate(-128,-128)
  c.lineWidth=6;c.fillStyle='#fff'
  for(const d of[-1,1]){const w=hit?6*sin(t*T*6+d):3*sin(t*T*2+d);c.beginPath();c.moveTo(66,92);c.quadraticCurveTo(40,96+d*10,20,100+d*16+w);c.lineTo(26,110+d*16+w);c.quadraticCurveTo(44,106+d*8,64,100);c.closePath();c.fill();c.stroke()}
  c.fillStyle='#111';c.beginPath();c.moveTo(70,90);c.quadraticCurveTo(52,170,62,214);c.lineTo(78,204);c.lineTo(84,222);c.lineTo(172,222);c.lineTo(178,204);c.lineTo(194,214);c.quadraticCurveTo(204,170,186,90);c.closePath();c.fill();c.stroke();c.fillStyle='#fff'
  c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(58,198,48,262);c.lineTo(208,262);c.quadraticCurveTo(198,198,156,190);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=tn;c.fillRect(40,186,180,80);c.fillStyle='#fff';for(const x of[70,74,182,186])c.fillRect(x,186,3,80);c.restore();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(108,188);c.lineTo(116,206);c.lineTo(128,198);c.lineTo(140,206);c.lineTo(148,188);c.closePath();c.fill();c.lineWidth=4;c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(128,200);c.lineTo(128,262);c.stroke()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.rect(116,166,24,28);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,104,138,-1);eye(c,154,138,1)
  c.lineWidth=2.5;for(const d of[-1,1])for(const j of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+j-3,164),c.lineTo(128+d*44+j+3,156),c.stroke()
  const m=hit?1:.35;c.lineWidth=4;c.fillStyle='#111';c.beginPath();c.moveTo(110,160);c.lineTo(146,160);c.quadraticCurveTo(144,160+22*m,128,162+22*m);c.quadraticCurveTo(112,160+22*m,110,160);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(112,161);c.lineTo(144,161);c.lineTo(142,166);c.lineTo(114,166);c.fill()
  if(hit){c.beginPath();c.moveTo(116,160+20*m);c.lineTo(140,160+20*m);c.lineTo(138,156+20*m);c.lineTo(118,156+20*m);c.fill()}
  c.lineWidth=2.5;c.beginPath();c.moveTo(127,150);c.lineTo(125,154);c.stroke()
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(70,150)
  c.lineTo(62,120);c.lineTo(54,124);c.lineTo(60,92);c.lineTo(46,84);c.lineTo(70,66);c.lineTo(62,46);c.lineTo(92,48);c.lineTo(96,24);c.lineTo(118,40);c.lineTo(134,18);c.lineTo(146,40);c.lineTo(172,26);c.lineTo(170,52);c.lineTo(198,52);c.lineTo(186,74);c.lineTo(208,88);c.lineTo(192,98);c.lineTo(200,124);c.lineTo(188,120);c.lineTo(186,150)
  c.lineTo(180,112);c.lineTo(168,118);c.lineTo(162,102);c.lineTo(150,114);c.lineTo(142,98);c.lineTo(130,114);c.lineTo(122,98);c.lineTo(110,116);c.lineTo(104,100);c.lineTo(92,116);c.lineTo(88,102);c.lineTo(78,114);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();for(const[a,b]of[[1.2,1.32],[1.42,1.5],[1.6,1.7]])c.arc(128,104,52,PI*a,PI*b);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(72,86);c.quadraticCurveTo(128,70,184,86);c.lineTo(184,100);c.quadraticCurveTo(128,84,72,100);c.closePath();c.fill();c.stroke()
  c.beginPath();c.ellipse(70,94,9,8,0,0,T);c.fill();c.stroke()
  c.restore()
  if(hit){c.lineWidth=5;c.fillStyle='#fff';burst(c,fx+6,fy-4,72+6*f,13,f);c.fill();c.stroke();c.fillStyle=tn;burst(c,fx+6,fy-4,56,13,f+1);c.fill()}
  c.lineWidth=5;for(const[l,st]of[[44*s+10,'#111'],[44*s,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(176,250),c.quadraticCurveTo(200-30*k,214-20*k,fx+6*s,fy+30*s),c.stroke()
  c.strokeStyle='#111';c.save();c.translate(fx,fy);c.scale(s,s);fist(c);c.restore()
}
