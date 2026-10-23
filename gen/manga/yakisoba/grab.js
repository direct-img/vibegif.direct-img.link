// lunch rush winner: spiky white-haired girl with a cheek bandage hoisting the last yakisoba bread, star eyes, fang grin, victory lines, classmates' hands still grabbing from the corners
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=12,delay=90,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const ht=createCanvas(6,6),h6=ht.getContext('2d');h6.strokeStyle='#111';h6.lineWidth=1.4;for(const o of[-6,0,6])h6.beginPath(),h6.moveTo(o,6),h6.lineTo(o+6,0),h6.stroke()
const toned=(c,p)=>{c.fillStyle='#fff';c.fill();c.fillStyle=p;c.fill();c.stroke()}
const star=(c,x,y,s)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4-PI/2,r=k%2?s*.35:s;c.lineTo(x+r*cos(a),y+r*sin(a))}c.closePath();c.fill()}
export default(c,t)=>{
  const dot=c.createPattern(tile,'repeat'),hat=c.createPattern(ht,'repeat'),b=Math.round(4*sin(T*2*t)),w=.14*sin(T*4*t),tw=1+.35*sin(T*2*t)
  c.save();c.translate(-20,16)
  // spiky white hair behind
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(60,150);for(const[x,y]of[[44,120],[56,104],[40,78],[64,70],[60,42],[90,46],[104,22],[128,40],[150,20],[166,46],[194,40],[192,70],[216,80],[200,104],[212,124],[196,150]])c.lineTo(x,y);c.closePath();c.fill();c.stroke()
  // sweater vest over a shirt and tie
  c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(62,196,54,236);c.lineTo(202,236);c.quadraticCurveTo(194,196,156,188);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(84,198);c.lineTo(108,190);c.lineTo(128,226);c.lineTo(148,190);c.lineTo(172,198);c.lineTo(176,236);c.lineTo(80,236);c.closePath();toned(c,dot)
  c.fillStyle='#111';c.beginPath();c.moveTo(123,194);c.lineTo(133,194);c.lineTo(136,216);c.lineTo(128,224);c.lineTo(120,216);c.closePath();c.fill()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.rect(116,168,24,24);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  // star eyes, fang grin, bandage
  for(const[x,d]of[[103,-1],[153,1]]){c.fillStyle='#fff';c.beginPath();c.ellipse(x,140,13,16,0,0,T);c.fill();c.fillStyle='#111';c.beginPath();c.ellipse(x,141,10.5,15,0,0,T);c.fill()
    c.fillStyle='#fff';star(c,x-1,138,9*tw);c.beginPath();c.arc(x+5,150,2,0,T);c.fill()
    c.lineWidth=6;c.beginPath();c.moveTo(x-d*12,129);c.quadraticCurveTo(x,118,x+d*15,130);c.lineTo(x+d*21,124);c.stroke()
    c.lineWidth=4;c.beginPath();c.moveTo(x-12,112+d*-3);c.quadraticCurveTo(x,106,x+12,110+d*3);c.stroke()}
  c.lineWidth=3.5;c.fillStyle='#111';c.beginPath();c.moveTo(110,162);c.quadraticCurveTo(128,192,146,162);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle='#fff';c.beginPath();c.ellipse(128,180,9,5,0,0,T);c.fill();c.beginPath();c.moveTo(136,162);c.lineTo(141,162);c.lineTo(139,170);c.closePath();c.fill();c.restore()
  c.fillStyle='#fff';c.lineWidth=3;c.save();c.translate(164,160);c.rotate(-.4);c.beginPath();c.roundRect(-12,-5,24,10,4);c.fill();c.stroke();c.lineWidth=1.5;for(const x of[-3,3])c.beginPath(),c.moveTo(x,-3),c.lineTo(x,3),c.stroke();c.restore()
  // spiky bangs with hatched shade
  c.lineWidth=6;c.beginPath();c.moveTo(68,140);c.bezierCurveTo(52,74,88,38,128,38);c.bezierCurveTo(168,38,204,74,188,140)
  for(const[x,y]of[[182,108],[172,118],[166,96],[154,116],[146,92],[132,114],[124,90],[110,114],[102,92],[90,116],[84,98],[74,116]])c.lineTo(x,y);c.closePath();c.fillStyle='#fff';c.fill()
  c.save();c.clip();c.fillStyle=hat;c.fillRect(60,86,140,40);c.restore();c.stroke()
  c.lineWidth=2.5;for(const[x,y]of[[104,52],[128,46],[152,52]])c.beginPath(),c.moveTo(x,y),c.lineTo(x+(x-128)*.2,y+28),c.stroke()
  // arm raised high with the prize
  const hx=206,hy=52+b
  for(const[l,s]of[[28,'#111'],[21,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(178,214),c.quadraticCurveTo(212,150,hx,hy+12),c.stroke()
  c.strokeStyle='#111';c.save();c.translate(hx,hy);c.rotate(w)
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.roundRect(-40,-18,80,22,11);toned(c,dot)
  c.lineWidth=3;c.beginPath();for(let k=0;k<=16;k++){const x=-34+k*4.25;c.lineTo(x,-20-4*sin(k*1.7)-3)}c.stroke();c.beginPath();for(let k=0;k<=12;k++){const x=-30+k*5;c.lineTo(x,-15-3*cos(k*2.1))}c.stroke()
  c.fillStyle='#111';for(const x of[-20,-4,14,26])c.beginPath(),c.arc(x,-24,2.6,0,T),c.fill()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(-12,-6,24,20,8);c.fill();c.stroke()
  c.restore()
  c.restore()
  // victory lines fanning off the bread, and twinkles
  const v=1+.12*sin(T*2*t);c.lineCap='round';c.lineWidth=4;for(const a of[-2.5,-2.15,-1.8,-1.35,-1,-.65])c.beginPath(),c.moveTo(186+44*v*cos(a),68+b+36*v*sin(a)),c.lineTo(186+62*v*cos(a),68+b+52*v*sin(a)),c.stroke()
  c.fillStyle='#fff';c.strokeStyle='#111';c.lineWidth=2.5;for(const[x,y,o]of[[118,40,0],[244,94,.5],[226,130,.25]]){const s=8*Math.abs(sin(PI*(t*2+o)));if(s>2){c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,r=k%2?s*.3:s;c.lineTo(x+r*cos(a),y+r*sin(a))}c.closePath();c.fill();c.stroke()}}
  // classmates' hands grabbing at the bottom
  for(const[x0,y0,x1,y1,o]of[[-6,262,22,206,0],[262,262,232,212,1]]){
    for(const[l,s]of[[26,'#111'],[20,'#fff'],[20,dot]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(x0,y0),c.lineTo(x1,y1),c.stroke()
    c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=3.5;const g=3*sin(T*4*t+o*PI)
    for(const k of[-1.5,-.5,.5,1.5]){c.save();c.translate(x1,y1);c.rotate(k*.35+(o?-.3:.3));c.beginPath();c.roundRect(-3.5,-24-g*(k%1?1:-1),7,18,3.5);c.fill();c.stroke();c.restore()}
    c.beginPath();c.arc(x1,y1,11,0,T);c.fill();c.stroke()}
}
