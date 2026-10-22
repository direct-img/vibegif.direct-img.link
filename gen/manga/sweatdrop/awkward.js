// awkward girl with a hatched bob: a giant sweat drop slides down beside her head while she scratches her cheek with a wobbly smile
import{createCanvas}from'@napi-rs/canvas'
const{sin,PI,min,max}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const DK=(()=>{const t=createCanvas(6,6),x=t.getContext('2d');x.fillStyle='#111';x.beginPath();x.arc(3,3,1.2,0,T);x.fill();return t})()
const hatch=(c,x0,x1,y0,y1,s=5)=>{c.lineWidth=1.6;c.beginPath();for(let x=x0-(y1-y0);x<x1;x+=s)c.moveTo(x,y1),c.lineTo(x+(y1-y0),y0);c.stroke()}
const hair=c=>{c.beginPath();c.moveTo(62,176);c.bezierCurveTo(40,80,80,34,128,34);c.bezierCurveTo(176,34,216,80,194,176);c.quadraticCurveTo(196,186,184,186);c.quadraticCurveTo(186,130,176,104)
  c.quadraticCurveTo(160,112,150,104);c.quadraticCurveTo(140,112,128,104);c.quadraticCurveTo(116,112,104,104);c.quadraticCurveTo(94,112,80,104);c.quadraticCurveTo(70,130,72,186);c.quadraticCurveTo(60,186,62,176);c.closePath()}
export default(c,t)=>{
  const sc=4*sin(4*T*t),u=t<.15?0:t>.85?1:(t-.15)/.7,ds=t<.15?.4+.6*t/.15:t>.85?1-(t-.85)/.15:1,dy=70+56*u
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,56,246);c.lineTo(200,246);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill()
  c.save();c.clip();c.fillStyle=c.createPattern(DK,'repeat');c.fillRect(40,180,180,70);c.fillStyle='#fff';c.beginPath();c.moveTo(104,190);c.lineTo(128,246);c.lineTo(152,190);c.fill();c.restore();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(104,190);c.lineTo(122,246);c.moveTo(152,190);c.lineTo(134,246);c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(116,166,24,26);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(128,204);c.lineTo(118,196);c.lineTo(118,212);c.closePath();c.moveTo(128,204);c.lineTo(138,196);c.lineTo(138,212);c.closePath();c.fill()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){const y=140
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,13,16,0,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y+2,9,13,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x+2,y-3,3.8,0,T);c.fill()
    c.lineWidth=6;c.beginPath();c.moveTo(x-15,y-6);c.quadraticCurveTo(x,y-17,x+15,y-6);c.moveTo(x+d*14,y-7);c.lineTo(x+d*20,y-12);c.stroke()
    c.lineWidth=3.5;c.beginPath();c.moveTo(x-11,y-22-d*5);c.lineTo(x+11,y-22+d*5);c.stroke()}
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,156);c.lineTo(127,159);c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(114,168);for(let k=1;k<=7;k++)c.lineTo(114+k*4,168+(k%2?-2.2:1.6)-(k==1||k==7?2:0));c.stroke()
  c.lineWidth=2.2;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-3,164),c.lineTo(128+d*42+k+3,157),c.stroke()
  c.lineWidth=6;hair(c);c.fillStyle='#fff';c.fill();c.save();c.clip();c.strokeStyle='#111';hatch(c,40,220,30,190);c.strokeStyle='#fff';c.lineWidth=9;c.beginPath();c.arc(128,110,58,PI*1.2,PI*1.42);c.stroke();c.beginPath();c.arc(128,110,58,PI*1.52,PI*1.8);c.stroke();c.restore()
  c.strokeStyle='#111';c.lineWidth=6;hair(c);c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;for(const y of[76,88])c.beginPath(),c.roundRect(170,y,22,7,3),c.fill(),c.stroke()
  c.save();c.translate(0,sc)
  c.lineWidth=24;c.beginPath();c.moveTo(58,250);c.quadraticCurveTo(52,206,76,184);c.stroke();c.lineWidth=14;c.strokeStyle='#fff';c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4.5;c.beginPath();c.ellipse(80,178,11,12,-.4,0,T);c.fill();c.stroke()
  c.beginPath();c.roundRect(80,152,9,26,4.5);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.ellipse(80,178,9,10,-.4,0,T);c.fill()
  c.restore()
  c.lineWidth=2.5;for(const k of[0,1,2]){const a=-1.9+k*.5;c.beginPath();c.moveTo(78+Math.cos(a)*16,150+Math.sin(a)*16+sc*.5),c.lineTo(78+Math.cos(a)*22,150+Math.sin(a)*22+sc*.5);c.stroke()}
  c.save();c.translate(206,dy);c.scale(ds,ds);c.fillStyle='#fff';c.lineWidth=4.5;c.beginPath();c.moveTo(0,-34);c.quadraticCurveTo(20,-6,19,10);c.arc(0,10,19,0,PI);c.quadraticCurveTo(-20,-6,0,-34);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.arc(0,10,12,PI*.75,PI*1.05);c.stroke();c.restore()
}
