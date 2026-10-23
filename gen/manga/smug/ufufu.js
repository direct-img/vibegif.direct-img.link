// smug girl with gradient-tone long hair and side-swept bangs: L-shaped hand at her chin, half-lidded side glance, ufufu squiggles rising and sparkles twinkling
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90,rim=4
// screentone whose dots grow from tiny at y0 to fat at y1
const grad=(c,path,y0,y1)=>{path();c.fillStyle='#fff';c.fill();c.save();c.clip();c.fillStyle='#111';c.beginPath()
  for(let y=y0,r=0;y<y1;y+=6,r++)for(let x=(r%2)*3;x<256;x+=6){const s=.35+2.5*(y-y0)/(y1-y0);c.moveTo(x+s,y);c.arc(x,y,s,0,T)}c.fill();c.restore();path();c.stroke()}
const star=(c,x,y,r)=>{c.beginPath();for(let k=0;k<8;k++){const q=k%2?r*.28:r,a=k*PI/4-PI/2;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();c.fill();c.stroke()}
export default(c,t,i)=>{
  const fu=i%5<2
  c.lineWidth=6
  grad(c,()=>{c.beginPath();c.moveTo(70,90);c.bezierCurveTo(40,140,56,190,40,246);c.lineTo(216,246);c.bezierCurveTo(200,190,216,140,186,90);c.closePath()},60,250)
  c.fillStyle='#fff';c.beginPath();c.moveTo(100,192);c.quadraticCurveTo(70,200,64,250);c.lineTo(192,250);c.quadraticCurveTo(186,200,156,192);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(108,192);c.lineTo(128,214);c.lineTo(148,192);c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(128,214);c.lineTo(114,206);c.lineTo(116,226);c.closePath();c.moveTo(128,214);c.lineTo(142,206);c.lineTo(140,226);c.closePath();c.fill()
  c.fillStyle='#fff';c.beginPath();c.rect(116,166,24,26);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){const y=142
    c.save();c.beginPath();c.ellipse(x,y,13,15,0,0,T);c.clip();c.beginPath();c.rect(x-20,y-6,40,30);c.clip()
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,13,15,0,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(x-6,y+2,9,12,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x-9,y-1,3,0,T);c.fill();c.restore()
    c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-5);c.quadraticCurveTo(x,y-9,x+16,y-5);c.moveTo(x+d*15,y-5);c.lineTo(x+d*21,y-8);c.stroke()
    c.lineWidth=2.5;c.beginPath();c.moveTo(x-9,y+15);c.quadraticCurveTo(x,y+18,x+9,y+14);c.stroke()
    c.lineWidth=3.5;c.beginPath();c.moveTo(x-11,y-21);c.quadraticCurveTo(x,y-26-(d<0?4:0),x+11,y-21);c.stroke()}
  c.lineWidth=2.2;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-3,165),c.lineTo(128+d*44+k+3,158),c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,156);c.lineTo(127,159);c.stroke()
  c.lineWidth=3.5;c.beginPath()
  if(fu)c.moveTo(118,168),c.quadraticCurveTo(126,176,136,166),c.quadraticCurveTo(126,170,118,168),c.fillStyle='#111',c.fill()
  else c.moveTo(117,170),c.quadraticCurveTo(127,174,137,165),c.moveTo(137,165),c.lineTo(140,162)
  c.stroke()
  c.lineWidth=6
  grad(c,()=>{c.beginPath();c.moveTo(66,158);c.bezierCurveTo(50,70,90,34,130,34);c.bezierCurveTo(172,34,212,74,196,172);c.quadraticCurveTo(190,142,176,126);c.lineTo(166,132);c.lineTo(160,116);c.lineTo(148,122);c.lineTo(140,106);c.lineTo(126,110);c.lineTo(114,98);c.lineTo(100,102);c.lineTo(90,94);c.lineTo(82,104);c.quadraticCurveTo(70,122,66,158);c.closePath()},34,170)
  c.strokeStyle='#fff';c.lineWidth=7;c.beginPath();c.arc(128,112,62,PI*1.25,PI*1.45);c.stroke();c.beginPath();c.arc(128,112,62,PI*1.55,PI*1.75);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(76,96,22,8,4);c.fill();c.stroke();c.beginPath();c.roundRect(80,108,18,7,3.5);c.fill();c.stroke()
  for(const[l,s]of[[30,'#111'],[19,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(208,252),c.quadraticCurveTo(206,226,186,206),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4.5
  c.beginPath();c.roundRect(172,172,10,30,5);c.fill();c.stroke()
  c.beginPath();c.roundRect(150,194,28,10,5);c.fill();c.stroke()
  c.beginPath();c.ellipse(182,204,14,12,-.3,0,T);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(174,212);c.lineTo(188,210);c.stroke()
  c.fillStyle='#fff';c.lineWidth=2.5
  for(let k=0;k<3;k++){const p=(t+k/3)%1,x=40+k*6-p*8,y=150-k*22-p*24,s=min(1,p*4,(1-p)*4)
    if(s>.1){c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(-10,0);c.bezierCurveTo(-5,-8,0,8,5,0);c.bezierCurveTo(8,-5,12,-2,12,2);for(const[l,st]of[[8,'#fff'],[3,'#111']])c.lineWidth=l,c.strokeStyle=st,c.stroke();c.beginPath();c.arc(14,-8,2.5,0,T);c.fillStyle='#111';c.fill();c.restore()}}
  c.fillStyle='#fff';c.lineWidth=2.5
  for(const[x,y,o]of[[208,58,0],[226,96,.33],[36,70,.66]]){const r=3+7*max(0,sin(T*(t+o)))
    if(r>3.5)star(c,x,y,r)}
}
