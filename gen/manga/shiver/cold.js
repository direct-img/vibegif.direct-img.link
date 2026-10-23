// freezing girl in a ribbed beanie with a dotted pompom hugging herself: shivering side to side, teeth chattering, shiver zigzags, little breath puffs
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=12,delay=70,rim=4
const DOT=(()=>{const t=createCanvas(6,6),x=t.getContext('2d');x.fillStyle='#111';x.beginPath();x.arc(3,3,1.5,0,T);x.fill();return t})()
const hatch=(c,x0,x1,y0,y1,s=5)=>{c.lineWidth=1.6;c.beginPath();for(let x=x0-(y1-y0);x<x1;x+=s)c.moveTo(x,y1),c.lineTo(x+(y1-y0),y0);c.stroke()}
const hatched=(c,path,y0,y1)=>{path();c.fillStyle='#fff';c.fill();c.save();c.clip();c.strokeStyle='#111';hatch(c,40,220,y0,y1);c.restore();c.lineWidth=6;path();c.stroke()}
const puff=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.fillStyle='#fff';c.lineWidth=3.5/s;c.beginPath();c.arc(-7,0,7,PI*.5,PI*1.6);c.arc(2,-4,8,PI*1.1,PI*1.95);c.arc(9,1,6,PI*1.4,PI*.5);c.closePath();c.fill();c.stroke();c.restore()}
export default(c,t,i)=>{
  const dx=i%2?2:-2,open=i%2
  c.save();c.translate(dx,0)
  c.lineWidth=6;c.fillStyle='#fff'
  hatched(c,()=>{c.beginPath();c.moveTo(70,170);c.quadraticCurveTo(64,130,74,110);c.lineTo(182,110);c.quadraticCurveTo(192,130,186,170);c.lineTo(176,160);c.lineTo(170,178);c.lineTo(160,150);c.lineTo(96,150);c.lineTo(86,178);c.lineTo(80,160);c.closePath()},104,182)
  c.beginPath();c.moveTo(98,190);c.quadraticCurveTo(62,198,56,250);c.lineTo(200,250);c.quadraticCurveTo(194,198,158,190);c.closePath();c.fill();c.fillStyle=c.createPattern(DOT,'repeat');c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(116,166,24,26);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){const y=142;c.lineWidth=5;c.beginPath();c.moveTo(x-d*12,y-8);c.lineTo(x+d*8,y);c.lineTo(x-d*12,y+8);c.stroke()}
  hatched(c,()=>{c.beginPath();c.moveTo(78,110);c.lineTo(178,110);c.lineTo(178,126);c.lineTo(168,134);c.lineTo(162,122);c.lineTo(152,134);c.lineTo(144,122);c.lineTo(134,132);c.lineTo(126,122);c.lineTo(116,134);c.lineTo(108,122);c.lineTo(98,132);c.lineTo(90,122);c.lineTo(80,130);c.closePath()},104,140)
  c.lineWidth=2.2;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-3,165),c.lineTo(128+d*42+k+3,158),c.stroke()
  c.beginPath();for(const k of[-4,0,4])c.moveTo(124+k,160),c.lineTo(128+k,153);c.stroke()
  const g=open?5:1.5
  c.fillStyle='#111';c.lineWidth=3;c.beginPath();c.roundRect(113,166-g,30,10+2*g,4);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(115,167-g,26,5);c.rect(115,172+g,26,5);c.fill()
  c.lineWidth=1.8;c.beginPath();for(const x of[121,128,135])c.moveTo(x,167-g),c.lineTo(x,172-g),c.moveTo(x,172+g),c.lineTo(x,177+g);c.stroke()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(70,112);c.bezierCurveTo(66,40,190,40,186,112);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.lineWidth=2.5;c.beginPath();for(let x=80;x<180;x+=10)c.moveTo(x,112),c.quadraticCurveTo(128+(x-128)*.6,70,128+(x-128)*.2,44);c.stroke();c.restore()
  c.beginPath();c.roundRect(64,98,128,24,10);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(let x=72;x<188;x+=7)c.moveTo(x,102),c.lineTo(x,118);c.stroke()
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();for(let k=0;k<18;k++){const a=k*T/18,r=k%2?17:21;c.lineTo(128+cos(a)*r,30+sin(a)*r)}c.closePath();c.fill();c.fillStyle=c.createPattern(DOT,'repeat');c.fill();c.stroke()
  for(const d of[-1,1]){c.lineWidth=36;c.strokeStyle='#111';c.beginPath();c.moveTo(128-d*62,214);c.quadraticCurveTo(128-d*30,250,128+d*46,208);c.stroke()
    c.lineWidth=24;c.strokeStyle='#fff';c.stroke()
    c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4.5;c.beginPath();c.ellipse(128+d*50,204,12,14,d*.4,0,T);c.fill();c.stroke()
    c.lineWidth=2.5;c.beginPath();c.moveTo(128+d*42,198);c.lineTo(128+d*48,206);c.moveTo(128+d*46,194);c.lineTo(128+d*53,202);c.stroke()}
  c.restore()
  c.strokeStyle='#111';c.lineWidth=3.5
  for(const d of[-1,1]){const o=(i%2?1:0)*4*d;c.beginPath();for(const y0 of[120,170]){c.moveTo(128+d*(108+o*.5),y0);for(let k=1;k<=4;k++)c.lineTo(128+d*(108+(k%2?8:0)+o*.5),y0+k*7)}c.stroke()}
  for(const o of[0,.5]){const p=(t+o)%1,s=.4+.7*p;if(p<.9)puff(c,108-p*46,166-p*58,s*(p<.1?p*10:1))}
}
