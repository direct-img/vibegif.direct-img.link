// cleaning duty chibi in a polka-dot kerchief and apron, dotted braid over her shoulder, humming while she sweeps side to side, dust puffing off the broom
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const toned=(c,p)=>{c.fillStyle='#fff';c.fill();c.fillStyle=p;c.fill();c.stroke()}
const P=[158,150],LEN=96,BASE=-.5
const ang=t=>BASE+.3*sin(T*2*t)
const tip=t=>{const a=ang(t);return[P[0]+LEN*sin(a),P[1]+LEN*cos(a)]}
const note=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.ellipse(0,0,6,4.5,-.35,0,T);c.fill();c.lineWidth=2.5;c.beginPath();c.moveTo(5,-2);c.lineTo(5,-20);c.quadraticCurveTo(12,-15,12,-8);c.stroke();c.restore()}
export default(c,t)=>{
  const dot=c.createPattern(tile,'repeat'),a=ang(t),[tx,ty]=tip(t),lo=[P[0]+LEN*.42*sin(a),P[1]+LEN*.42*cos(a)]
  // dust puffs left at each end of a sweep, drifting off and shrinking
  c.lineWidth=3;c.fillStyle='#fff'
  for(const te of[1/8,3/8,5/8,7/8]){const age=(t-te+1)%1;if(age>.3)continue;const[x,y]=tip(te),d=te==1/8||te==5/8?1:-1,r=(1-age/.3)*10;for(const o of[0,1])c.beginPath(),c.arc(x+d*(8+age*70)+o*d*10,y-4-age*40-o*6,r*(1-o*.35),0,T),c.fill(),c.stroke()}
  // legs and shoes
  c.lineWidth=4;c.fillStyle='#fff';for(const x of[106,138]){c.beginPath();c.rect(x,190,14,36);c.fill();c.stroke();c.fillStyle='#111';c.beginPath();c.ellipse(x+7,232,12,7,0,0,T);c.fill();c.fillStyle='#fff'}
  // dotted dress under a white apron
  c.lineWidth=5;c.beginPath();c.moveTo(98,120);c.lineTo(150,120);c.lineTo(170,196);c.lineTo(78,196);c.closePath();toned(c,dot)
  c.fillStyle='#fff';c.beginPath();c.moveTo(102,136);c.lineTo(146,136);c.lineTo(156,190);c.quadraticCurveTo(124,198,92,190);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.rect(112,160,24,16);c.stroke();c.beginPath();c.moveTo(102,136);c.lineTo(110,122);c.moveTo(146,136);c.lineTo(138,122);c.stroke()
  // dotted braid over her shoulder
  c.lineWidth=4;for(let k=0;k<5;k++){c.beginPath();c.ellipse(84-k,112+k*14,9-k*.6,9,.2,0,T);toned(c,dot)}
  c.fillStyle='#fff';c.beginPath();c.ellipse(80,180,6,4,0,0,T);c.fill();c.stroke();c.beginPath();c.moveTo(78,184);c.lineTo(74,196);c.lineTo(84,196);c.closePath();toned(c,dot)
  // head: hair, face, kerchief
  c.lineWidth=6;c.beginPath();c.arc(124,74,48,0,T);toned(c,dot)
  c.fillStyle='#fff';c.beginPath();c.ellipse(124,84,40,38,0,0,T);c.fill();c.stroke()
  for(const x of[106,142]){c.lineWidth=5;c.beginPath();c.arc(x,100,9,1.15*PI,1.85*PI);c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(x+(x<124?-9:9),96);c.lineTo(x+(x<124?-13:13),92);c.stroke()}
  c.lineWidth=2.2;for(const d of[-1,1])for(let k=0;k<3;k++)c.beginPath(),c.moveTo(124+d*30+(k-1)*4-2,112),c.lineTo(124+d*30+(k-1)*4+2,106),c.stroke()
  const hm=.8+.2*sin(T*4*t);c.lineWidth=3;c.beginPath();c.ellipse(124,113,4*hm,5*hm,0,0,T);c.stroke()
  // bangs peeking under the kerchief
  c.lineWidth=5;c.beginPath();c.moveTo(80,64);for(const[x,y]of[[86,82],[96,70],[106,84],[116,70],[126,82],[136,70],[146,84],[156,70],[164,82],[168,64]])c.lineTo(x,y);c.closePath();toned(c,dot)
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.arc(124,74,52,1.02*PI,1.98*PI);c.quadraticCurveTo(124,58,72,72);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(78,66);c.quadraticCurveTo(124,52,170,66);c.stroke()
  c.lineWidth=4;for(const[x,y,r]of[[178,40,-.6],[184,56,.5]])c.beginPath(),c.ellipse(x,y,11,6,r,0,T),c.fill(),c.stroke();c.beginPath();c.arc(172,50,5,0,T);c.fill();c.stroke()
  // broom: long handle, banded straw head, swinging from her top hand
  c.save();c.translate(...P);c.rotate(-a)
  c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.roundRect(-4,-12,8,LEN+2,3);c.fill();c.stroke()
  c.beginPath();c.moveTo(-8,LEN-8);c.lineTo(8,LEN-8);c.lineTo(22,LEN+30);c.lineTo(-22,LEN+30);c.closePath();c.fill();c.stroke()
  c.lineWidth=2;for(const x of[-14,-7,0,7,14])c.beginPath(),c.moveTo(x*.4,LEN),c.lineTo(x,LEN+28),c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(-10,LEN-2);c.lineTo(10,LEN-2);c.stroke()
  c.restore()
  // arms to the two hands on the handle
  for(const[s0,h]of[[[96,128],lo],[[150,126],P]]){for(const[l,st]of[[16,'#111'],[10,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(...s0),c.lineTo(...h),c.stroke()
    c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(h[0],h[1],8,0,T);c.fill();c.stroke()}
  // humming notes
  c.fillStyle='#111';c.strokeStyle='#111';for(const o of[0,.5]){const p=(t*2+o)%1;if(p<.85)note(c,176+p*40+6*sin(T*p),112-p*80,.8+.4*sin(PI*p))}
}
