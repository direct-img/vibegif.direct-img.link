// flustered girl with white space buns overheating: hatched blush across her face, hands on her cheeks, shaking while steam blasts out of her head
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=70,rim=4
const puff=(c,x,y,r)=>{const b=[[0,0,1],[-.8,.3,.7],[.8,.3,.7],[-.4,-.5,.75],[.45,-.45,.7]];c.lineWidth=7;for(const[a,e,k]of b)c.beginPath(),c.arc(x+a*r,y+e*r,k*r,0,T),c.stroke();c.fillStyle='#fff';for(const[a,e,k]of b)c.beginPath(),c.arc(x+a*r,y+e*r,k*r,0,T),c.fill()}
const face=c=>{c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96)}
export default(c,t,i)=>{
  for(let k=0;k<4;k++){const p=(2*t+k/4)%1,r=(10+p*18)*sin(PI*Math.min(1,p*1.2+.08));if(r>5)puff(c,128+[-1,1,-.4,.4][k]*(16+p*52),76-p*50,r)}
  c.save();c.translate(128,250);c.scale(.8,.8);c.translate(-128,-250);c.translate(i%2?2:-2,i%4<2?1:-1)
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,56,248);c.lineTo(200,248);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(108,192);c.lineTo(128,212);c.lineTo(148,192);c.stroke();c.lineWidth=2.5;for(const y of[222,238])c.beginPath(),c.arc(128,y,3,0,T),c.stroke()
  c.beginPath();c.rect(116,166,24,26);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  for(const d of[-1,1]){const x=128+d*38;c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.arc(x,40,22,0,T);c.fill();c.stroke();c.lineWidth=2.5;c.beginPath();c.moveTo(x-16,30);c.quadraticCurveTo(x,40,x+18,34);c.moveTo(x-18,44);c.quadraticCurveTo(x,54,x+16,48);c.stroke()}
  c.lineWidth=6;c.fillStyle='#fff';face(c);c.fill();c.stroke()
  c.save();face(c);c.clip();c.lineWidth=2;c.beginPath();for(let x=70;x<200;x+=4.5)c.moveTo(x,166),c.lineTo(x+12,146);c.stroke();c.restore()
  c.lineWidth=6;for(const d of[-1,1]){const x=128+d*25;c.beginPath();c.moveTo(x-d*12,128);c.lineTo(x+d*8,138);c.lineTo(x-d*12,148);c.stroke()}
  c.lineWidth=2.5;c.fillStyle='#fff';for(const d of[-1,1]){const y=150+(i%4)*3;c.beginPath();c.moveTo(128+d*40,y);c.quadraticCurveTo(128+d*44,y+8,128+d*40,y+10);c.quadraticCurveTo(128+d*36,y+8,128+d*40,y);c.fill();c.stroke()}
  c.lineWidth=3.5;c.fillStyle='#fff';c.beginPath();c.moveTo(114,168);for(let k=1;k<=7;k++)c.lineTo(114+k*4,168+(k%2?-3:3));c.lineTo(142,174);c.quadraticCurveTo(128,182,114,174);c.closePath();c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(70,148);c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,148)
  c.quadraticCurveTo(186,118,178,104);c.quadraticCurveTo(172,106,166,114);c.quadraticCurveTo(160,100,150,94);c.quadraticCurveTo(146,106,138,110);c.quadraticCurveTo(134,98,126,92)
  c.quadraticCurveTo(120,104,112,108);c.quadraticCurveTo(108,98,98,94);c.quadraticCurveTo(92,104,88,112);c.quadraticCurveTo(82,106,78,104);c.quadraticCurveTo(70,122,70,148);c.closePath();c.fill();c.stroke()
  c.lineWidth=2.5;for(const[a,b,e,f]of[[98,48,90,82],[128,42,126,74],[158,48,168,82]])c.beginPath(),c.moveTo(a,b),c.quadraticCurveTo((a+e)/2+5,(b+f)/2,e,f),c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*30,55,13,5.5,d*.55,0,T),c.fill()
  for(const d of[-1,1]){c.save();c.translate(128+d*50,168);c.rotate(-d*.25);c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(-12,14);c.lineTo(-13,-10)
    for(let k=0;k<4;k++)c.arc(-9+k*6,-12-(k%3?3:0),3.2,PI,0);c.lineTo(12,14);c.quadraticCurveTo(0,20,-12,14);c.fill();c.stroke();c.lineWidth=2.5;c.beginPath();for(const k of[-3,3])c.moveTo(k,-10),c.lineTo(k,0);c.stroke();c.restore()}
  c.lineWidth=4;for(const d of[-1,1])for(let k=0;k<3;k++){const a=-PI/2+d*(.45+k*.32),r1=88+(i%2)*4;c.beginPath();c.moveTo(128+cos(a)*r1,112+sin(a)*r1);c.lineTo(128+cos(a)*(r1+14),112+sin(a)*(r1+14));c.stroke()}
  c.restore()
}
