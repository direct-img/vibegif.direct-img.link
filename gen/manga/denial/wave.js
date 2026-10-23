// flustered girl with dark-tone wavy hair and a white hairband frantically waving both palms "no no no", motion arcs, sweat drops flying, panicked eyes
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=70,rim=4
const DK=(()=>{const t=createCanvas(5,5),x=t.getContext('2d');x.fillStyle='#111';x.beginPath();x.arc(2.5,2.5,1.7,0,T);x.fill();return t})()
const toned=(c,path)=>{path();c.fillStyle='#fff';c.fill();c.fillStyle=c.createPattern(DK,'repeat');c.fill();path();c.stroke()}
const hand=(c,x,y,a)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle='#fff';c.lineWidth=4.5
  for(const[fx,h]of[[-12,20],[-4,25],[4,24],[12,19]])c.beginPath(),c.roundRect(fx-4,-30-h,8,h+6,4),c.fill(),c.stroke()
  c.beginPath();c.roundRect(-16,-34,32,32,11);c.fill();c.stroke()
  c.beginPath();c.ellipse(-19,-14,6,11,-.6,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(-13,-31,26,26,9);c.fill()
  c.lineWidth=2;c.beginPath();c.moveTo(-6,-14);c.quadraticCurveTo(0,-10,6,-16);c.stroke();c.restore()}
export default(c,t)=>{
  const w=sin(4*T*t),a=.45*w,dx=8*w
  c.lineWidth=6
  toned(c,()=>{c.beginPath();c.moveTo(72,90);c.bezierCurveTo(44,120,62,150,48,182);c.quadraticCurveTo(56,196,70,190);c.quadraticCurveTo(64,200,80,206);c.lineTo(176,206);c.quadraticCurveTo(192,200,186,190);c.quadraticCurveTo(200,196,208,182);c.bezierCurveTo(194,150,212,120,184,90);c.closePath()})
  c.fillStyle='#fff';c.beginPath();c.moveTo(100,192);c.quadraticCurveTo(66,198,60,250);c.lineTo(196,250);c.quadraticCurveTo(190,198,156,192);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(110,192);c.quadraticCurveTo(128,208,146,192);c.stroke();c.beginPath();c.arc(128,214,4,0,T);c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(116,166,24,26);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){const y=140
    c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.ellipse(x,y,12,15,0,0,T);c.fill();c.stroke()
    c.fillStyle='#111';c.beginPath();c.arc(x+(t*16%2<1?1:-1),y+1,3.5,0,T);c.fill()
    c.lineWidth=5;c.beginPath();c.moveTo(x-13,y-9);c.quadraticCurveTo(x,y-19,x+13,y-9);c.stroke()
    c.lineWidth=3.5;c.beginPath();c.moveTo(x+d*12,y-24);c.lineTo(x-d*8,y-31);c.stroke()}
  c.lineWidth=2.2;for(const d of[-1,1])for(let k=0;k<4;k++)c.beginPath(),c.moveTo(128+d*44+k*5-10,166),c.lineTo(128+d*44+k*5-4,157),c.stroke()
  c.fillStyle='#111';c.lineWidth=3;c.beginPath();c.moveTo(115,168);for(let k=1;k<=6;k++)c.lineTo(115+k*4.3,168+(k%2?-3:0));c.quadraticCurveTo(128,186,115,168);c.closePath();c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.ellipse(128,177,4,2.5,0,0,T);c.fill()
  c.lineWidth=6
  toned(c,()=>{c.beginPath();c.moveTo(70,150);c.bezierCurveTo(54,74,88,40,128,40);c.bezierCurveTo(168,40,202,74,186,150);c.quadraticCurveTo(184,120,176,106);c.quadraticCurveTo(168,116,160,104);c.quadraticCurveTo(150,118,142,104);c.quadraticCurveTo(134,116,124,104);c.quadraticCurveTo(114,118,106,104);c.quadraticCurveTo(96,116,88,104);c.quadraticCurveTo(80,114,78,106);c.quadraticCurveTo(72,124,70,150);c.closePath()})
  c.strokeStyle='#fff';c.lineWidth=7;c.beginPath();c.arc(128,110,58,PI*1.25,PI*1.45);c.stroke();c.beginPath();c.arc(128,110,58,PI*1.55,PI*1.75);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(74,92);c.bezierCurveTo(84,42,172,42,182,92);c.lineTo(174,94);c.bezierCurveTo(166,54,90,54,82,94);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=3.5
  for(const d of[-1,1])for(const o of[0,.5]){const p=(t*2+o)%1,s=min(1,p*5,(1-p)*3)
    if(s>.15){c.save();c.translate(128+d*(70+p*30),100-p*26);c.rotate(-d*(PI/2+.5));c.scale(s,s);c.beginPath();c.moveTo(0,-11);c.quadraticCurveTo(8,0,7,4);c.arc(0,4,7,0,PI);c.quadraticCurveTo(-8,0,0,-11);c.fill();c.stroke();c.lineWidth=2.5;c.beginPath();c.moveTo(-3,-18);c.lineTo(-3,-26);c.moveTo(3,-18);c.lineTo(3,-24);c.stroke();c.restore()}}
  for(const d of[-1,1]){const hx=128+d*64+dx,hy=212
    for(const[l,s]of[[24,'#111'],[14,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(128+d*38,240),c.quadraticCurveTo(128+d*60,250,hx,hy+4),c.stroke()
    c.strokeStyle='#111';hand(c,hx,hy,a)
    if(abs(w)>.6){c.lineWidth=3;const sd=w>0?1:-1;for(const r of[44,54])c.beginPath(),c.arc(hx,hy,r,-PI/2-sd*.9,-PI/2-sd*.35,sd<0),c.stroke()}}
}
const abs=Math.abs
