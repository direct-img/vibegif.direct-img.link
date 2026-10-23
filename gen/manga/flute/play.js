// band girl with long wavy white hair and a big bow playing a flute held off to the side, fingers lifting on the keys, notes drifting up
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,atan2,hypot}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const toned=(c,p)=>{c.fillStyle='#fff';c.fill();c.fillStyle=p;c.fill();c.stroke()}
const F0=[10,200],F1=[158,163],A=atan2(F1[1]-F0[1],F1[0]-F0[0]),L=hypot(F1[0]-F0[0],F1[1]-F0[1])
const at=u=>[F0[0]+u*cos(A),F0[1]+u*sin(A)]
const note=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.rotate(-.35);c.beginPath();c.ellipse(0,0,7,5,0,0,T);c.fill();c.restore()
  c.lineWidth=3;c.beginPath();c.moveTo(x+6*s,y-2*s);c.lineTo(x+6*s,y-24*s);c.quadraticCurveTo(x+14*s,y-18*s,x+14*s,y-10*s);c.stroke()}
export default(c,t)=>{
  const dot=c.createPattern(tile,'repeat')
  // long wavy hair behind
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,100,204,150)
  c.quadraticCurveTo(222,176,206,200);c.quadraticCurveTo(222,222,204,244);c.lineTo(52,244);c.quadraticCurveTo(34,222,50,200);c.quadraticCurveTo(34,176,52,150);c.bezierCurveTo(42,100,56,34,128,34);c.fill();c.stroke()
  c.lineWidth=2.5;for(const d of[-1,1])for(const o of[0,14])c.beginPath(),c.moveTo(128+d*(62-o),150),c.quadraticCurveTo(128+d*(78-o),180,128+d*(64-o),206),c.quadraticCurveTo(128+d*(80-o),226,128+d*(68-o),240),c.stroke()
  // big ink bow on the back of her head
  c.lineWidth=5;c.fillStyle='#111';for(const[x,y,r]of[[170,42,-.5],[200,70,.9]])c.beginPath(),c.ellipse(x,y,20,11,r,0,T),c.fill(),c.stroke()
  c.beginPath();c.arc(186,58,8,0,T);c.fill();c.stroke();c.strokeStyle='#fff';c.lineWidth=2;for(const[x,y,r]of[[170,42,-.5],[200,70,.9]])c.beginPath(),c.ellipse(x,y,13,5,r,0,T),c.stroke();c.strokeStyle='#111'
  // marching band jacket with white cords
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(62,196,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,196,156,188);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;for(const y of[214,228,242])c.beginPath(),c.moveTo(108,y),c.lineTo(148,y),c.stroke()
  c.fillStyle='#fff';for(const y of[214,228,242])for(const x of[106,150])c.beginPath(),c.arc(x,y,3.5,0,T),c.fill()
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(112,188);c.lineTo(128,200);c.lineTo(144,188);c.lineTo(140,184);c.lineTo(116,184);c.closePath();c.fill();c.stroke()
  c.beginPath();c.rect(116,166,24,22);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,166);c.lineTo(116,184);c.moveTo(140,166);c.lineTo(140,184);c.stroke()
  // face, eyes closed while she plays
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){c.lineWidth=5;c.beginPath();c.arc(x,130,14,.22*PI,.78*PI);c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(x+d*11,141);c.lineTo(x+d*17,146);c.moveTo(x+d*5,144);c.lineTo(x+d*8,150);c.stroke()
    c.lineWidth=3.5;c.beginPath();c.moveTo(x-12,120);c.quadraticCurveTo(x,114,x+12,118);c.stroke()}
  c.lineWidth=2.5;for(const d of[-1,1])for(let k=0;k<3;k++)c.beginPath(),c.moveTo(128+d*42+(k-1)*5-3,164),c.lineTo(128+d*42+(k-1)*5+3,156),c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(122,166);c.quadraticCurveTo(128,163,134,166);c.stroke()
  // wavy bangs
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(68,150);c.bezierCurveTo(52,76,88,38,128,38);c.bezierCurveTo(170,38,206,76,188,150)
  c.quadraticCurveTo(190,118,178,104);c.quadraticCurveTo(176,114,168,116);c.quadraticCurveTo(166,98,150,90);c.quadraticCurveTo(148,106,136,112)
  c.quadraticCurveTo(130,96,114,90);c.quadraticCurveTo(112,106,98,112);c.quadraticCurveTo(94,100,84,100);c.quadraticCurveTo(70,120,68,150);c.closePath();c.fill();c.stroke()
  c.lineWidth=2.5;for(const[x,y]of[[100,60],[128,54],[156,60]])c.beginPath(),c.moveTo(x,y),c.quadraticCurveTo(x-6,y+20,x+2,y+36),c.stroke()
  // her right arm to the far hand, her left arm across to the near hand
  const hR=at(40),hL=at(96)
  for(const[l,s]of[[30,'#fff'],[24,'#111']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(92,214),c.quadraticCurveTo(44,240,hR[0]+2,hR[1]+12),c.stroke()
  for(const[l,s]of[[30,'#fff'],[24,'#111']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(166,214),c.quadraticCurveTo(140,226,hL[0]+4,hL[1]+12),c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;for(const[x,y]of[[hR[0]+2,hR[1]+16],[hL[0]+4,hL[1]+16]])c.beginPath(),c.arc(x,y,9,0,T),c.stroke();c.strokeStyle='#111'
  // the flute, keys, and fingers lifting in turn
  c.save();c.translate(...F0);c.rotate(A)
  c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.roundRect(-2,-6,L+2,12,5);c.fill();c.stroke()
  c.lineWidth=2;for(const x of[20,128])c.beginPath(),c.moveTo(x,-6),c.lineTo(x,6),c.stroke()
  c.lineWidth=3;c.beginPath();c.ellipse(112,-1,7,4,0,0,T);c.stroke()
  for(const x of[30,44,58,82,96,108])c.beginPath(),c.arc(x,0,3,0,T),c.stroke()
  c.fillStyle='#fff';c.lineWidth=4
  for(const[x,k]of[[30,0],[44,1],[58,2],[82,3],[96,4],[106,5]]){const up=sin(T*(2*t+k/6))>.35?7:0;c.beginPath();c.roundRect(x-5,-17-up,10,14,5);c.fill();c.stroke()}
  for(const x of[40,94]){c.beginPath();c.roundRect(x-16,4,32,18,8);c.fill();c.stroke()}
  c.restore()
  // notes floating up off the end of the flute
  c.fillStyle='#111';c.strokeStyle='#111'
  for(const o of[0,.5]){const p=(t+o)%1,s=.6+.7*sin(PI*p);note(c,22+10*sin(T*(p+o)),170-p*130,s)}
}
