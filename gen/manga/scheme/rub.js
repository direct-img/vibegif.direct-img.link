// scheming girl with a hatched shadow over her eyes, glasses glaring white, grins wide and rubs her hands together
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,abs}=Math,T=2*PI
export const frames=12,delay=90,rim=4
const dots=(col,r,s=6)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[s/2,s/2],[0,0],[s,0],[0,s],[s,s]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const TONE=dots('#111',1.5)
const hand=(c,x,y,d)=>{c.save();c.translate(x,y);c.scale(d,1);c.rotate(.12)
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(0,46);c.lineTo(0,-30);c.quadraticCurveTo(-2,-40,-8,-40);c.quadraticCurveTo(-28,-36,-30,-10);c.lineTo(-30,30);c.quadraticCurveTo(-26,46,-14,50);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(const fx of[-8,-16,-23])c.moveTo(fx,-34+abs(fx+12)*.8),c.lineTo(fx,-14);c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(-30,4);c.quadraticCurveTo(-38,-4,-34,-16);c.stroke()
  c.restore()}
export default(c,t)=>{
  const tn=c.createPattern(TONE,'repeat'),r=6*sin(t*T*3),m=abs(sin(t*T*3))
  c.lineWidth=7;c.fillStyle='#111';c.beginPath();c.moveTo(84,196);c.quadraticCurveTo(28,206,20,252);c.lineTo(236,252);c.quadraticCurveTo(228,206,172,196);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(104,192);c.lineTo(128,232);c.lineTo(152,192);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.lineWidth=7;c.fillStyle='#111';c.beginPath();c.moveTo(54,168);c.bezierCurveTo(40,110,52,40,128,38);c.bezierCurveTo(204,40,216,110,202,168);c.quadraticCurveTo(194,180,180,174);c.lineTo(76,174);c.quadraticCurveTo(62,180,54,168);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=7;c.beginPath();c.rect(114,170,28,28);c.fill();c.beginPath();c.moveTo(114,170);c.lineTo(114,194);c.moveTo(142,170);c.lineTo(142,194);c.stroke()
  const face=()=>{c.beginPath();c.moveTo(68,100);c.bezierCurveTo(64,160,100,194,128,196);c.bezierCurveTo(156,194,192,160,188,100);c.bezierCurveTo(188,46,68,46,68,100)}
  face();c.fill();c.save();face();c.clip();c.lineWidth=3;c.beginPath();for(let x=64;x<196;x+=6)c.moveTo(x,60),c.lineTo(x,138+4*sin(x*.3));c.stroke();c.restore();c.lineWidth=7;face();c.stroke()
  c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(84,154);c.quadraticCurveTo(128,186+6*m,172,154);c.quadraticCurveTo(160,174+8*m,128,180+8*m);c.quadraticCurveTo(96,174+8*m,84,154);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(86,156);c.quadraticCurveTo(128,170,170,156);c.stroke()
  c.lineWidth=2.5;c.beginPath();for(const x of[104,116,128,140,152])c.moveTo(x,162),c.lineTo(x,170+5*m-abs(x-128)*.15);c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(80,150);c.quadraticCurveTo(82,158,88,158);c.moveTo(176,150);c.quadraticCurveTo(174,158,168,158);c.stroke()
  c.lineWidth=7;c.fillStyle='#fff';for(const x of[100,156]){c.beginPath();c.roundRect(x-25,110,50,30,8);c.fill();c.stroke()
    c.lineWidth=4;c.beginPath();c.moveTo(x-12,134);c.lineTo(x+4,114);c.moveTo(x-2,136);c.lineTo(x+12,118);c.stroke();c.lineWidth=7}
  c.beginPath();c.moveTo(125,122);c.quadraticCurveTo(128,116,131,122);c.moveTo(75,118);c.lineTo(64,114);c.moveTo(181,118);c.lineTo(192,114);c.stroke()
  if(t>=.33&&t<.67){const p=(t-.33)/.34,s=14*sin(PI*p);c.lineWidth=3.5;c.fillStyle='#fff';c.beginPath();c.moveTo(170,104-s);c.quadraticCurveTo(172,110,170+s,112);c.quadraticCurveTo(172,114,170,112+s);c.quadraticCurveTo(168,114,170-s,112);c.quadraticCurveTo(168,110,170,104-s+0);c.fill();c.stroke()}
  c.lineWidth=7;c.fillStyle='#111';c.beginPath();c.moveTo(62,128);c.bezierCurveTo(50,60,90,34,128,34);c.bezierCurveTo(166,34,206,60,194,128);c.quadraticCurveTo(186,96,166,80);c.quadraticCurveTo(150,92,128,70);c.quadraticCurveTo(106,92,90,80);c.quadraticCurveTo(70,96,62,128);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.save();c.translate(170,66);c.rotate(.5);c.beginPath();c.roundRect(-16,-5,32,10,4);c.fill();c.stroke();c.restore();c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(128,96,60,PI*1.22,PI*1.36);c.moveTo(128+60*cos(PI*1.62),96+60*sin(PI*1.62));c.arc(128,96,60,PI*1.62,PI*1.76);c.stroke();c.strokeStyle='#111'
  c.lineWidth=4;for(const d of[-1,1])for(const[o,dx]of[[0,0],[.33,12],[.66,-8]]){const p=(t+o)%1,x=128+d*(96+dx),y=150-60*p,a=sin(PI*p);if(a>.15){c.beginPath();c.moveTo(x,y+14*a);c.bezierCurveTo(x+8*a,y+5*a,x-8*a,y-5*a,x,y-14*a);c.stroke()}}
  c.lineWidth=5;c.beginPath();c.moveTo(76,112);c.lineTo(66,105);c.moveTo(180,112);c.lineTo(190,105);c.stroke()
  hand(c,128,236+r,-1);hand(c,128,236-r,1)
  c.lineWidth=3;for(const d of[-1,1])c.beginPath(),c.arc(128,226,40+4*m,d<0?PI*.85:-PI*.15,d<0?PI*1.05:PI*.05),c.stroke()
}
