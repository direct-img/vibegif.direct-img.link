// sports day tug of war: side-view girl with short hatched hair and a headband leaning way back on the rope, heels dug in, yanking twice with dust puffs
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const ht=createCanvas(6,6),h6=ht.getContext('2d');h6.strokeStyle='#111';h6.lineWidth=1.4;for(const o of[-6,0,6])h6.beginPath(),h6.moveTo(o,6),h6.lineTo(o+6,0),h6.stroke()
const toned=(c,p)=>{c.fillStyle='#fff';c.fill();c.fillStyle=p;c.fill();c.stroke()}
const H=[112,180]
export default(c,t)=>{
  const dot=c.createPattern(tile,'repeat'),hat=c.createPattern(ht,'repeat'),s=(1-cos(4*PI*t))/2,L=.6+.16*s
  const W=([x,y])=>{const dx=x-H[0],dy=y-H[1];return[H[0]+dx*cos(-L)-dy*sin(-L),H[1]+dx*sin(-L)+dy*cos(-L)]}
  const sh=W([118,132]),hand=[sh[0]+52,sh[1]+16+2*s],end=[234,hand[1]-14]
  c.translate(14,0)
  // dust kicked up at the front heel on each yank
  c.lineWidth=3;c.fillStyle='#fff';for(const[x,y,r]of[[170,230,9],[184,222,7],[162,220,6]]){const k=r*s;if(k>1.5)c.beginPath(),c.arc(x+6*s,y,k,0,T),c.fill(),c.stroke()}
  // legs: front one braced straight, back one bent; sneakers
  c.lineWidth=4;c.fillStyle='#fff'
  for(const[a,b,e]of[[[106,186],[92,210],[88,228]],[[118,186],[134,206],[152,226]]]){for(const[l,st]of[[16,'#111'],[9,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(...a),c.lineTo(...b),c.lineTo(...e),c.stroke()}
  c.strokeStyle='#111';c.lineWidth=4;c.fillStyle='#111'
  c.save();c.translate(156,232);c.rotate(-.45);c.beginPath();c.ellipse(4,0,15,7,0,0,T);c.fill();c.fillStyle='#fff';c.fillRect(-10,4,28,3);c.restore()
  c.fillStyle='#111';c.beginPath();c.ellipse(92,234,14,7,0,0,T);c.fill();c.fillStyle='#fff';c.fillRect(80,238,26,3)
  // the rope off to the right, twisted, wobbling with the pull
  const mid=[(hand[0]+end[0])/2,(hand[1]+end[1])/2+4-6*s]
  for(const[l,st]of[[13,'#111'],[8,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(hand[0]-30,hand[1]+18),c.lineTo(...hand),c.quadraticCurveTo(...mid,...end),c.stroke()
  c.strokeStyle='#111';c.lineWidth=2;for(let k=1;k<9;k++){const f=k/9,x=(1-f)*(1-f)*hand[0]+2*f*(1-f)*mid[0]+f*f*end[0],y=(1-f)*(1-f)*hand[1]+2*f*(1-f)*mid[1]+f*f*end[1];c.beginPath();c.moveTo(x-3,y-4);c.lineTo(x+3,y+4);c.stroke()}
  // upper body leaning back from the hips
  c.save();c.translate(...H);c.rotate(-L);c.translate(-H[0],-H[1])
  c.lineWidth=5;c.beginPath();c.roundRect(98,170,32,22,6);toned(c,dot)
  c.fillStyle='#fff';c.beginPath();c.roundRect(98,124,32,52,9);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.rect(110,138,14,10);c.stroke();c.lineWidth=2;c.beginPath();c.moveTo(112,143);c.lineTo(122,143);c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.rect(110,112,12,14);c.fill()
  // head turned a little back toward the rope
  c.translate(116,116);c.rotate(L*.55);c.translate(-116,-116)
  c.lineWidth=6;c.beginPath();c.arc(118,84,34,0,T);c.fill();c.stroke()
  c.beginPath();c.arc(118,84,38,-.12*PI,.62*PI,true);c.lineTo(104,104);c.quadraticCurveTo(104,76,124,64);for(const[x,y]of[[130,76],[138,64],[144,78],[152,68],[154,80]])c.lineTo(x,y);c.closePath();toned(c,hat)
  c.lineWidth=2.5;for(const a of[1.05,1.25,1.45])c.beginPath(),c.arc(118,84,30,a*PI,(a+.12)*PI),c.stroke()
  // headband with the knot and tails flying behind
  for(const[l,st]of[[13,'#111'],[8,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.arc(118,84,36,1.02*PI,1.98*PI),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#111';c.beginPath();c.arc(150,68,4,0,T);c.fill()
  c.lineWidth=4;c.fillStyle='#fff';for(const o of[0,1]){const w=sin(T*4*t+o*2)*5;c.beginPath();c.moveTo(84,76);c.quadraticCurveTo(70,70+o*10+w,56,62+o*16+w);c.lineTo(58,70+o*16+w);c.quadraticCurveTo(70,78+o*10+w,84,82);c.closePath();c.fill();c.stroke()}
  c.beginPath();c.arc(84,79,6,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(108,92,6,8,0,0,T);c.fill();c.stroke()
  // fierce eye, gritted teeth, sweat flying
  c.fillStyle='#fff';c.beginPath();c.ellipse(138,92,6,9,0,0,T);c.fill();c.fillStyle='#111';c.beginPath();c.ellipse(140,93,4,7,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(139,90,1.8,0,T);c.fill()
  c.lineWidth=4.5;c.beginPath();c.moveTo(130,82);c.lineTo(147,88);c.stroke()
  c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.rect(140,104,12,8);c.fill();c.stroke();c.lineWidth=2;c.beginPath();c.moveTo(146,104);c.lineTo(146,112);c.moveTo(140,108);c.lineTo(152,108);c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(152,95);c.lineTo(156,100);c.lineTo(152,101);c.stroke()
  c.lineWidth=2;for(let k=0;k<3;k++)c.beginPath(),c.moveTo(126+k*4,104),c.lineTo(129+k*4,99),c.stroke()
  if(s>.5){c.fillStyle='#fff';c.lineWidth=3;for(const[x,y]of[[78,50],[70,92]]){const o=(s-.5)*20;c.beginPath();c.moveTo(x-o,y-8);c.quadraticCurveTo(x+6-o,y+2,x-o,y+5);c.quadraticCurveTo(x-6-o,y+2,x-o,y-8);c.fill();c.stroke()}}
  c.restore()
  // arms straight out to the rope, fists wrapped round it
  for(const[o,lw]of[[0,1],[10,1]]){for(const[l,st]of[[15,'#111'],[9,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(sh[0],sh[1]),c.lineTo(hand[0]-o,hand[1]+o*.35),c.stroke()}
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4;for(const o of[12,0])c.beginPath(),c.roundRect(hand[0]-o-8,hand[1]+o*.35-9,17,17,7),c.fill(),c.stroke()
  for(const[l,st]of[[18,'#111'],[12,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(...W([116,132])),c.lineTo(...W([120,148])),c.stroke()
  c.strokeStyle='#111'
}
