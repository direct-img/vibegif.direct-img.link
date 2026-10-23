// puzzled girl with fluffy curly light-tone hair tilting her head, finger on her cheek, question marks orbiting her head, one blink
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=14,delay=110,rim=4
const LT=(()=>{const t=createCanvas(6,6),x=t.getContext('2d');x.fillStyle='#111';x.beginPath();x.arc(3,3,1.1,0,T);x.fill();return t})()
const toned=(c,path)=>{path();c.fillStyle='#fff';c.fill();c.fillStyle=c.createPattern(LT,'repeat');c.fill();path();c.stroke()}
// curls: scallops bulging outward around an ellipse from angle a0 to a1
const curls=(c,cx,cy,rx,ry,a0,a1,n,b)=>{for(let k=0;k<=n;k++){const a=a0+(a1-a0)*k/n,x=cx+rx*cos(a),y=cy+ry*sin(a)
  if(!k){c.lineTo(x,y);continue}const m=a-(a1-a0)/n/2;c.quadraticCurveTo(cx+(rx+b)*cos(m),cy+(ry+b)*sin(m),x,y)}}
const qm=(c,x,y,s,a)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(-9,-8);c.bezierCurveTo(-9,-22,12,-22,11,-9);c.bezierCurveTo(10,-1,1,0,1,8);for(const[l,st]of[[11,'#111'],[4.5,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.stroke()
  c.fillStyle='#fff';c.lineWidth=3;c.strokeStyle='#111';c.beginPath();c.arc(1,19,4.5,0,T);c.fill();c.stroke();c.restore()}
export default(c,t,i)=>{
  const r=.17*sin(t*T),shut=i==8,P=(x,y)=>[128+(x-128)*cos(r)-(y-186)*sin(r),186+(x-128)*sin(r)+(y-186)*cos(r)]
  const Q=[0,1,2].map(k=>{const a=t*T+k*T/3;return[128+86*cos(a),34+14*sin(a),.72+.22*sin(a),sin(a),.3*sin(a*2)]})
  for(const q of Q)if(q[3]<0)qm(c,q[0],q[1],q[2],q[4])
  c.lineWidth=6;c.fillStyle='#fff'
  c.beginPath();c.moveTo(100,192);c.quadraticCurveTo(66,198,60,250);c.lineTo(196,250);c.quadraticCurveTo(190,198,156,192);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,196),c.lineTo(128+d*26,190),c.quadraticCurveTo(128+d*24,206,128+d*8,210),c.closePath(),c.fill(),c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(116,166,24,26);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.save();c.translate(128,186);c.rotate(r);c.translate(-128,-186)
  c.lineWidth=6;toned(c,()=>{c.beginPath();curls(c,128,110,70,62,PI*.7,PI*2.3,11,14);c.closePath()})
  c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){const y=140
    if(shut){c.lineWidth=5;c.beginPath();c.arc(x,y-4,11,.15*PI,.85*PI);c.stroke();continue}
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,12,15,0,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(x+3,y+1,9,12,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x,y-4,4.5,0,T);c.fill();c.beginPath();c.arc(x+6,y+6,2,0,T);c.fill()
    c.lineWidth=6;c.beginPath();c.moveTo(x-14,y-7);c.quadraticCurveTo(x,y-18,x+14,y-7);c.moveTo(x+d*13,y-8);c.lineTo(x+d*19,y-12);c.stroke()}
  c.lineWidth=3.5;c.beginPath();c.moveTo(94,116);c.quadraticCurveTo(104,110,114,116);c.moveTo(144,114);c.quadraticCurveTo(154,108,164,112);c.stroke()
  c.lineWidth=2.2;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-3,165),c.lineTo(128+d*42+k+3,158),c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,156);c.lineTo(127,159);c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(121,170);c.quadraticCurveTo(126,166,130,169);c.quadraticCurveTo(134,172,137,168);c.stroke()
  c.lineWidth=6;toned(c,()=>{c.beginPath();c.moveTo(70,150);curls(c,128,104,60,58,PI*.9,PI*2.1,8,14);c.lineTo(186,150);c.quadraticCurveTo(184,124,176,112);curls(c,128,138,48,30,PI*1.9,PI*1.1,5,-12);c.quadraticCurveTo(72,124,70,150);c.closePath()})
  c.strokeStyle='#fff';c.lineWidth=7;c.beginPath();c.arc(128,108,52,PI*1.28,PI*1.45);c.stroke();c.beginPath();c.arc(128,108,52,PI*1.55,PI*1.72);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(176,82,8,0,T);c.fill();c.stroke();c.beginPath();c.arc(176,82,3,0,T);c.stroke()
  c.restore()
  const[hx,hy]=P(96,162)
  for(const[l,s]of[[24,'#111'],[14,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(76,252),c.quadraticCurveTo(66,220,hx-12,hy+38),c.stroke()
  c.save();c.translate(hx,hy);c.rotate(r+.35);c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4.5
  c.beginPath();c.roundRect(-5,-4,10,30,5);c.fill();c.stroke();c.beginPath();c.ellipse(-6,32,15,13,.3,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(-3,8,6,14,3);c.fill();c.lineWidth=2.5;c.beginPath();c.moveTo(-16,28);c.quadraticCurveTo(-8,32,-2,28);c.moveTo(-18,36);c.quadraticCurveTo(-10,40,-2,36);c.stroke();c.restore()
  for(const q of Q)if(q[3]>=0)qm(c,q[0],q[1],q[2],q[4])
}
