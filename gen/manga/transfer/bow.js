// side-view chibi transfer student with ink low twin tails bowing deeply by the chalkboard with her name on it, then popping up with a happy sparkle
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=80,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const toned=(c,p)=>{c.fillStyle='#fff';c.fill();c.fillStyle=p;c.fill();c.stroke()}
const ease=f=>f<=0?0:f>=1?1:.5-.5*cos(PI*f)
const H=[132,182],C=[136,90]
const spark=(c,x,y,s)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,r=k%2?s*.35:s;c.lineTo(x+r*cos(a),y+r*sin(a))}c.closePath();c.fill();c.stroke()}
export default(c,t)=>{
  const dot=c.createPattern(tile,'repeat')
  const b=t<.1?0:t<.3?ease((t-.1)/.2):t<.5?1:t<.65?1-ease((t-.5)/.15):0,a=.85*b,shut=t>=.15&&t<.58,happy=t>=.62&&t<.95
  // chalkboard behind with her name, 山田, in chalk
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.rect(8,34,88,94);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.rect(15,41,74,80);c.fill()
  c.strokeStyle='#fff';c.lineWidth=3.5;c.beginPath();c.moveTo(35,54);c.lineTo(35,78);c.moveTo(24,63);c.lineTo(24,78);c.lineTo(46,78);c.lineTo(46,63);c.rect(57,56,22,22);c.moveTo(68,56);c.lineTo(68,78);c.moveTo(57,67);c.lineTo(79,67);c.stroke()
  c.beginPath();c.moveTo(28,92);c.lineTo(76,92);c.stroke();c.beginPath();c.moveTo(52,104);c.bezierCurveTo(44,96,38,106,52,114);c.bezierCurveTo(66,106,60,96,52,104);c.stroke()
  c.strokeStyle='#111';c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.rect(10,128,84,8);c.fill();c.stroke()
  // legs and shoes stay planted
  c.lineWidth=4;for(const[x0,x1]of[[124,122],[140,144]]){c.fillStyle='#fff';c.beginPath();c.moveTo(x0-6,196);c.lineTo(x1-6,230);c.lineTo(x1+6,230);c.lineTo(x0+6,196);c.closePath();c.fill();c.stroke()
    c.beginPath();c.moveTo(x1-6,216);c.lineTo(x1+6,216);c.stroke();c.fillStyle='#111';c.beginPath();c.ellipse(x1+5,235,13,7,0,0,T);c.fill()}
  c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.ellipse(124,232,12,4,0,0,T);c.fill();c.lineWidth=4
  // pleated dotted skirt, tipping a little with the bow
  c.save();c.translate(...H);c.rotate(a*.2);c.translate(-H[0],-H[1])
  c.beginPath();c.moveTo(118,178);c.lineTo(150,178);c.lineTo(162,208);c.lineTo(106,208);c.closePath();toned(c,dot)
  c.lineWidth=2.5;for(const x of[124,134,144])c.beginPath(),c.moveTo(x,180),c.lineTo(x+(x-134)*.4,206),c.stroke()
  c.restore()
  // upper body bows from the hips
  c.save();c.translate(...H);c.rotate(a);c.translate(-H[0],-H[1])
  // twin tails dangle with gravity
  for(const[x,y,o]of[[114,112,-6],[118,116,4]]){c.save();c.translate(x,y);c.rotate(-a*.85+.05*sin(T*2*t+o));c.lineWidth=5;c.fillStyle='#111';c.beginPath();c.moveTo(-6,0);c.quadraticCurveTo(-18+o,30,-8+o*.5,62);c.quadraticCurveTo(0,52,6,0);c.closePath();c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=2.5;c.beginPath();c.moveTo(-4,10);c.quadraticCurveTo(-10+o,30,-6+o*.5,46);c.stroke();c.strokeStyle='#111'
    c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(0,2,9,6,0,0,T);c.fill();c.stroke();c.restore()}
  // sailor top with the square collar at the back and a ribbon in front
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.roundRect(118,126,32,58,8);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(118,128);c.lineTo(138,128);c.lineTo(132,156);c.lineTo(114,152);c.closePath();toned(c,dot)
  c.fillStyle='#111';c.beginPath();c.moveTo(148,138);c.lineTo(160,132);c.lineTo(158,146);c.closePath();c.fill();c.beginPath();c.moveTo(150,140);c.lineTo(156,160);c.lineTo(146,156);c.closePath();c.fill()
  for(const[l,s]of[[16,'#111'],[10,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(136,136),c.quadraticCurveTo(140,160,152,174),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(154,176,8,7,0,0,T);c.fill();c.stroke()
  c.beginPath();c.rect(130,118,10,10);c.fill()
  // profile head
  c.lineWidth=6;c.beginPath();c.arc(...C,40,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(175,96);c.lineTo(179,101);c.lineTo(175,103);c.stroke()
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.arc(C[0],C[1],44,-.1*PI,.65*PI,true);c.lineTo(122,112);c.quadraticCurveTo(122,86,140,74)
  for(const[x,y]of[[146,86],[152,74],[160,90],[166,76],[174,90]])c.lineTo(x,y);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(C[0],C[1],34,1.15*PI,1.45*PI);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(126,102,7,9,0,0,T);c.fill();c.stroke();c.lineWidth=2;c.beginPath();c.arc(127,102,4,.6*PI,1.5*PI);c.stroke()
  // eye: open, squeezed shut while bowing, or a happy arc
  if(shut){c.lineWidth=4.5;c.beginPath();c.moveTo(153,96);c.lineTo(165,100);c.lineTo(155,105);c.stroke()}
  else if(happy){c.lineWidth=4.5;c.beginPath();c.arc(160,102,7,1.1*PI,1.9*PI);c.stroke()}
  else{c.fillStyle='#fff';c.beginPath();c.ellipse(161,100,7,11,0,0,T);c.fill();c.fillStyle='#111';c.beginPath();c.ellipse(163,101,5,9,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(162,97,2.2,0,T);c.fill()
    c.lineWidth=4.5;c.beginPath();c.moveTo(153,90);c.quadraticCurveTo(162,86,170,91);c.lineTo(174,87);c.stroke()}
  c.lineWidth=2.2;for(let k=0;k<3;k++)c.beginPath(),c.moveTo(150+k*5,114),c.lineTo(154+k*5,108),c.stroke()
  c.lineWidth=3;c.beginPath();if(happy){c.fillStyle='#111';c.moveTo(163,114);c.quadraticCurveTo(170,124,175,113);c.closePath();c.fill()}else c.moveTo(166,116),c.quadraticCurveTo(170,118,173,115);c.stroke()
  // nervous sweat drop while she holds the bow
  if(t>=.3&&t<.52){c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(166,40);c.quadraticCurveTo(176,54,166,58);c.quadraticCurveTo(156,54,166,40);c.fill();c.stroke()}
  c.restore()
  if(happy){c.fillStyle='#fff';c.lineWidth=3;const s=1+.4*sin(T*(t-.62)*6);for(const[x,y,r]of[[186,34,10],[214,66,7],[110,24,8]])spark(c,x,y,r*s)}
}
