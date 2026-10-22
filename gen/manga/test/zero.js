// girl with a messy hatched pixie cut wilting over a test scored zero, paper trembling, gloom lines and a little rain cloud overhead
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI}=Math,T=2*PI
export const frames=12,delay=100,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const ht=createCanvas(6,6),h=ht.getContext('2d');h.strokeStyle='#111';h.lineWidth=1.4;for(const o of[-6,0,6])h.beginPath(),h.moveTo(o,6),h.lineTo(o+6,0),h.stroke()
const fill2=(c,p)=>{c.fillStyle='#fff';c.fill();c.fillStyle=p;c.fill();c.stroke()}
export default(c,t,i)=>{
  const dot=c.createPattern(tile,'repeat'),hat=c.createPattern(ht,'repeat'),dr=Math.round(3+3*sin(t*T)),sh=i%2?1:-1
  c.save();c.translate(-36,14)
  // hoodie body
  c.lineWidth=6;c.beginPath();c.moveTo(96,186);c.quadraticCurveTo(56,196,50,236);c.lineTo(206,236);c.quadraticCurveTo(200,196,160,186);c.closePath();fill2(c,dot)
  c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(92,188);c.quadraticCurveTo(128,222,164,188);c.quadraticCurveTo(128,204,92,188);c.fill();c.stroke();for(const d of[-1,1])for(const[l,s2]of[[7,'#111'],[3,'#fff']])c.lineWidth=l,c.strokeStyle=s2,c.beginPath(),c.moveTo(128+d*12,206),c.lineTo(128+d*13,228),c.stroke();c.strokeStyle='#111'
  // head droops forward and sighs
  c.save();c.translate(128,182);c.rotate(.07);c.translate(-128,-182+dr)
  c.lineWidth=6;c.beginPath();for(let k=0;k<=26;k++){const a=PI*(.82+k*.0525),r=k%2?66:58+3*sin(k*7);c.lineTo(128+r*cos(a),106+r*sin(a))}c.closePath();fill2(c,hat)
  c.fillStyle='#fff';c.beginPath();c.rect(116,168,24,20);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,186);c.moveTo(140,168);c.lineTo(140,186);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  // gloom shading down the top half of the face
  c.save();c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.clip()
  c.lineWidth=2.5;for(let x=80;x<180;x+=6){c.beginPath();c.moveTo(x,96);c.lineTo(x,124+12*sin(x*.7)*.5);c.stroke()}c.restore()
  // hollow despair eyes, a tear, wobbly mouth
  for(const x of[103,153]){c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.ellipse(x,142,11,13,0,0,T);c.fill();c.stroke();c.fillStyle='#111';c.beginPath();c.arc(x+sh*.8,146,2.2,0,T);c.fill()
    c.lineWidth=5;c.beginPath();c.moveTo(x-14,132);c.quadraticCurveTo(x,124,x+14,132);c.stroke()}
  c.lineWidth=3.5;c.beginPath();c.moveTo(112,172);for(let k=1;k<=8;k++)c.lineTo(112+k*4,172+(k%2?-2.5:2.5)*sh);c.stroke()
  const tp=(t*2)%1;c.fillStyle='#fff';c.lineWidth=3;c.beginPath();const tx=166,ty=154+tp*20;c.moveTo(tx,ty-7);c.quadraticCurveTo(tx+6,ty+2,tx,ty+4);c.quadraticCurveTo(tx-6,ty+2,tx,ty-7);c.fill();c.stroke()
  // messy hatched pixie bangs
  c.lineWidth=6;c.beginPath();c.moveTo(70,150);c.bezierCurveTo(54,80,88,40,128,40);c.bezierCurveTo(170,40,204,80,186,150)
  for(const[x,y]of[[182,112],[176,116],[170,98],[158,114],[150,96],[140,118],[128,98],[118,116],[108,96],[98,114],[88,100],[80,118],[74,112]])c.lineTo(x,y)
  c.closePath();fill2(c,hat)
  c.strokeStyle='#fff';c.lineWidth=5;for(const[a,e]of[[1.27,1.36],[1.45,1.53],[1.62,1.7]])c.beginPath(),c.arc(128,108,54,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.moveTo(128,42);c.quadraticCurveTo(140,22,152,26);c.stroke()
  c.restore()
  // the test, trembling in both hands
  c.save();c.translate(232,118);c.rotate(.1+sh*.025);c.scale(.8,.8)
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.rect(-52,-64,104,124);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.rect(-44,-56,40,12);c.stroke()
  for(let k=0;k<5;k++){const y=-30+k*16;c.beginPath();c.moveTo(-44,y);c.lineTo(-4-k%2*10,y);c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(4,y-5);c.lineTo(12,y+3);c.moveTo(12,y-5);c.lineTo(4,y+3);c.stroke();c.lineWidth=2.5}
  c.lineWidth=7;c.beginPath();c.ellipse(32,-34,11,17,0,0,T);c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(16,-10);c.lineTo(48,-12);c.moveTo(18,-5);c.lineTo(46,-7);c.stroke()
  c.restore()
  c.fillStyle='#fff';c.lineWidth=4.5;for(const[x,y]of[[194,166],[268,128]])c.beginPath(),c.ellipse(x+sh*.6,y,11,13,0,0,T),c.fill(),c.stroke()
  c.restore()
  // little rain cloud over her head
  c.save();c.translate(0,Math.round(2*sin(t*T*2)))
  c.lineWidth=4.5;c.beginPath();for(const[x,y,r]of[[72,30,15],[94,22,18],[118,28,15],[86,38,13],[108,38,13]])c.moveTo(x+r,y),c.arc(x,y,r,0,T);c.save();c.lineWidth=9;c.stroke();c.fillStyle=dot;c.restore();c.fillStyle='#fff';c.fill();c.fillStyle=dot;c.fill()
  c.restore()
  c.lineWidth=2.5;for(let k=0;k<4;k++){const p=(t*2+k/4)%1,x=96+k*14;c.beginPath();c.moveTo(x-p*2,52+p*22);c.lineTo(x-2-p*2,60+p*22);c.stroke()}
}
