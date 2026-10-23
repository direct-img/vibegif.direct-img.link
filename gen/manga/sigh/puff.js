// side profile of a tired girl with long ink hair letting out a huge sigh: a puff cloud drifts from her lips as her shoulders slump, then a deep breath back in
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=100,rim=4
const DOT=(()=>{const t=createCanvas(6,6),x=t.getContext('2d');x.fillStyle='#111';x.beginPath();x.arc(3,3,1.3,0,T);x.fill();return t})()
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const cloud=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.lineWidth=4.5/s;c.fillStyle='#fff';c.beginPath();c.arc(-14,4,11,PI*.5,PI*1.5);c.arc(-2,-8,13,PI,PI*1.9);c.arc(14,-2,11,PI*1.3,PI*.3);c.arc(2,10,10,PI*.1,PI*.9);c.closePath();c.fill();c.stroke();c.restore()}
export default(c,t)=>{
  const sl=t<.55?ease(t/.55):t<.72?1:1-ease((t-.72)/.28),sigh=t<.6,inh=t>.72
  c.lineWidth=6
  c.save();c.translate(0,6*sl)
  c.fillStyle='#fff';c.beginPath();c.moveTo(108,198);c.quadraticCurveTo(80,206,76,252);c.lineTo(180,252);c.quadraticCurveTo(178,220,150,200);c.closePath();c.fill()
  c.fillStyle=c.createPattern(DOT,'repeat');c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(128,200);c.lineTo(150,200);c.lineTo(156,224);c.lineTo(132,214);c.closePath();c.fill();c.stroke()
  c.save();c.translate(130,190);c.rotate(.1*sl);c.translate(-130,-190)
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(150,62);c.bezierCurveTo(120,34,66,48,62,100);c.bezierCurveTo(58,150,70,200,56,246);c.lineTo(104,246);c.quadraticCurveTo(110,200,118,160);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(120,176);c.lineTo(122,204);c.lineTo(146,204);c.lineTo(144,172);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(152,60);c.bezierCurveTo(168,72,172,96,170,112);c.quadraticCurveTo(172,122,178,130);c.lineTo(186,144);c.quadraticCurveTo(182,149,176,149);c.quadraticCurveTo(180,153,179,156);c.quadraticCurveTo(174,158,177,162);c.quadraticCurveTo(174,174,162,180);c.quadraticCurveTo(146,186,128,176);c.bezierCurveTo(104,150,104,90,152,60);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(154,66);c.bezierCurveTo(124,40,70,52,66,100);c.bezierCurveTo(64,130,76,150,96,160);c.quadraticCurveTo(110,150,118,126);c.quadraticCurveTo(128,112,140,116);c.lineTo(144,100);c.lineTo(152,110);c.lineTo(158,94);c.lineTo(164,104);c.quadraticCurveTo(168,82,154,66);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(92,62);c.quadraticCurveTo(110,54,128,58);c.moveTo(78,100);c.quadraticCurveTo(76,130,86,148);c.moveTo(70,178);c.lineTo(72,226);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();c.ellipse(118,92,9,5,-.5,0,T);c.fill();c.stroke()
  const lid=sl*5
  c.save();c.beginPath();c.moveTo(150,124+lid);c.quadraticCurveTo(160,120+lid,168,126);c.quadraticCurveTo(162,138,152,136);c.closePath();c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(161,131,5,7,0,0,T);c.fill();c.restore()
  c.lineWidth=5;c.beginPath();c.moveTo(148,124+lid);c.quadraticCurveTo(160,118+lid,170,126);c.lineTo(174,121);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(152,138);c.quadraticCurveTo(160,141,166,137);c.stroke()
  c.beginPath();c.moveTo(152,112+lid*.6);c.quadraticCurveTo(160,108+lid*.6,168,113+lid);c.stroke()
  c.lineWidth=2;for(const k of[0,5,10])c.beginPath(),c.moveTo(150+k,150),c.lineTo(154+k,143),c.stroke()
  c.restore()
  c.restore()
  const mx=182,my=156+6*sl+3*sl
  c.lineWidth=3;c.fillStyle='#111'
  if(sigh&&t>.05){c.beginPath();c.ellipse(mx-2,my,3,4,0,0,T);c.fill()}
  if(sigh){const p=min(1,t/.55);cloud(c,mx+12+28*p,my-8-30*p,.2+.8*p)
    c.lineWidth=3;for(const k of[0,1,2])c.beginPath(),c.moveTo(mx+6+k*4,my+4+k*5),c.quadraticCurveTo(mx+16+k*4+p*10,my+k*5,mx+24+k*4+p*16,my+6+k*5),c.stroke()}
  else if(t<.72){const q=(t-.6)/.12;cloud(c,222-6*q,118-10*q,1-q)}
  if(inh){const q=(t-.72)/.28;c.lineWidth=3;for(const[a,r]of[[-.5,30],[0,34],[.5,30]]){const x=mx+4+cos(a)*r*(1-q*.4),y=my+sin(a)*r*(1-q*.4)
    c.beginPath();c.moveTo(x,y);c.lineTo(x-cos(a)*12,y-sin(a)*12);c.stroke()}}
}
