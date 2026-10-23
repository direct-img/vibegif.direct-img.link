// lab coat girl with crosshatched messy hair and goggles; her flask foams up and over, she goes white-eyed with a sweat drop, then the foam sinks back
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=80,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const xt=createCanvas(7,7),x7=xt.getContext('2d');x7.strokeStyle='#111';x7.lineWidth=1.3;for(const o of[-7,0,7])x7.beginPath(),x7.moveTo(o,7),x7.lineTo(o+7,0),x7.moveTo(o,0),x7.lineTo(o+7,7),x7.stroke()
const toned=(c,p)=>{c.fillStyle='#fff';c.fill();c.fillStyle=p;c.fill();c.stroke()}
const ease=f=>f<=0?0:f>=1?1:.5-.5*cos(PI*f)
const BLOBS=[[0,-8,17],[-17,-22,15],[15,-26,16],[-4,-42,18],[18,-50,13],[-21,-52,12],[3,-68,14]]
export default(c,t,i)=>{
  const dot=c.createPattern(tile,'repeat'),hat=c.createPattern(xt,'repeat')
  const h=t<.3?0:t<.45?ease((t-.3)/.15):t<.7?1:1-ease((t-.7)/.3),s=h>.45
  c.save();c.translate(-24,0)
  // crosshatched messy hair behind
  c.lineWidth=6;c.beginPath();c.moveTo(128,30);c.bezierCurveTo(200,30,214,96,204,158);c.lineTo(194,150);c.lineTo(190,170);c.lineTo(66,170);c.lineTo(62,150);c.lineTo(52,158);c.bezierCurveTo(42,96,56,30,128,30);toned(c,hat)
  // lab coat with lapels over a dotted turtleneck
  c.fillStyle='#fff';c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(58,196,48,252);c.lineTo(208,252);c.quadraticCurveTo(198,196,156,188);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(112,186);c.lineTo(144,186);c.lineTo(138,252);c.lineTo(118,252);c.closePath();toned(c,dot)
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*16,186),c.lineTo(128+d*12,230),c.lineTo(128+d*30,206),c.lineTo(128+d*24,190),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.rect(70,212,26,22);c.stroke();c.lineWidth=3;for(const[x,cap]of[[76,1],[84,0],[90,1]])c.beginPath(),c.moveTo(x,212),c.lineTo(x,202),c.stroke()
  c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.rect(116,168,24,20);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,186);c.moveTo(140,168);c.lineTo(140,186);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  // eyes behind the goggles: curious and glancing at the flask, or white with shock
  for(const[x,d]of[[103,-1],[153,1]]){
    if(s){c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.ellipse(x,142,12,15,0,0,T);c.fill();c.stroke();c.fillStyle='#111';c.beginPath();c.arc(x+2,142,2.5,0,T);c.fill();continue}
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,142,12,15,0,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(x+4,144,8,12,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x+1,139,3.2,0,T);c.fill();c.beginPath();c.arc(x+7,150,1.6,0,T);c.fill()
    c.lineWidth=5;c.beginPath();c.moveTo(x-12,132);c.quadraticCurveTo(x,124,x+12,131);c.stroke()
  }
  c.lineWidth=2.5;for(const d of[-1,1])for(let k=0;k<3;k++)c.beginPath(),c.moveTo(128+d*44+(k-1)*5-3,172),c.lineTo(128+d*44+(k-1)*5+3,164),c.stroke()
  c.lineWidth=3.5;c.beginPath();if(s)c.ellipse(128,172,6,8,0,0,T);else c.arc(128,166,7,.2*PI,.8*PI);c.stroke()
  // goggles: thick rims, a strap and a glassy shine
  c.lineWidth=7;for(const x of[103,153])c.beginPath(),c.arc(x,140,23,0,T),c.stroke()
  c.lineWidth=8;c.beginPath();c.moveTo(80,136);c.lineTo(68,132);c.moveTo(176,136);c.lineTo(188,132);c.moveTo(126,138);c.lineTo(130,138);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;for(const x of[103,153])c.beginPath(),c.arc(x,140,17,1.1*PI,1.4*PI),c.stroke();c.strokeStyle='#111'
  // messy crosshatched bangs and an antenna strand
  c.lineWidth=6;c.beginPath();c.moveTo(68,130);c.bezierCurveTo(54,70,88,34,128,34);c.bezierCurveTo(168,34,204,70,188,130)
  for(const[x,y]of[[182,112],[176,98],[168,114],[160,92],[150,110],[140,94],[130,112],[120,92],[110,110],[100,94],[90,112],[82,98],[74,114]])c.lineTo(x,y)
  c.closePath();toned(c,hat)
  c.strokeStyle='#fff';c.lineWidth=6;for(const[a,e]of[[1.28,1.38],[1.46,1.55],[1.63,1.72]])c.beginPath(),c.arc(128,106,54,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  c.lineWidth=5;c.beginPath();c.moveTo(126,36);c.quadraticCurveTo(116,14,132,10);c.stroke()
  if(s){c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();c.moveTo(68,100);c.quadraticCurveTo(80,118,68,124);c.quadraticCurveTo(56,118,68,100);c.fill();c.stroke()
    c.fillStyle='#111';c.save();c.translate(40,58);c.rotate(-.25);c.beginPath();c.moveTo(-6,-22);c.lineTo(6,-22);c.lineTo(2,6);c.lineTo(-2,6);c.closePath();c.fill();c.beginPath();c.arc(0,14,4.5,0,T);c.fill();c.restore()}
  // arm reaching to hold the flask
  for(const[l,st]of[[30,'#111'],[23,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(166,206),c.quadraticCurveTo(196,224,214,186),c.stroke()
  c.strokeStyle='#111';c.restore()
  // erlenmeyer flask with dotted liquid and rising bubbles
  c.lineWidth=5;c.fillStyle='#fff';const fl=()=>{c.beginPath();c.moveTo(194,150);c.lineTo(194,176);c.lineTo(172,226);c.quadraticCurveTo(166,242,182,242);c.lineTo(230,242);c.quadraticCurveTo(246,242,240,226);c.lineTo(218,176);c.lineTo(218,150);c.closePath()}
  fl();c.fill();c.save();fl();c.clip();c.beginPath();c.rect(150,206+(s?-4:0),110,50);c.fillStyle=dot;c.fill();c.lineWidth=3;c.beginPath();c.moveTo(150,206+(s?-4:0));c.lineTo(250,206+(s?-4:0));c.stroke()
  c.fillStyle='#fff';c.lineWidth=2.5;for(let k=0;k<5;k++){const p=(t*(2+k%2)+k*.23)%1,x=186+k*9,y=238-p*30;c.beginPath();c.arc(x,y,2.5+k%3,0,T);c.fill();c.stroke()}
  c.restore();fl();c.stroke()
  c.lineWidth=4;c.beginPath();c.roundRect(188,144,36,8,3);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(184,222);c.lineTo(198,190);c.stroke();c.strokeStyle='#111'
  // the foam: one union outline, puffs that grow and spill down the side
  if(h>.02){
    const B=BLOBS.map(([x,y,r],k)=>[206+x*h+(k%2?1:-1)*1.5*sin(T*2*t+k),148+y*h,r*(.35+.65*h)]),d=max(0,h-.6)/.4
    const all=()=>{for(const[x,y,r]of B)c.moveTo(x+r,y),c.arc(x,y,r,0,T);if(d>0)c.moveTo(196,156),c.ellipse(190,156+d*14,6,6+d*14,0,0,T),c.moveTo(230,156),c.ellipse(224,156+d*8,5,5+d*9,0,0,T)}
    c.lineWidth=11;c.beginPath();all();c.stroke();c.fillStyle='#fff';c.beginPath();all();c.fill()
    c.lineWidth=2;for(const[x,y,r]of B.slice(1))c.beginPath(),c.arc(x-r*.3,y-r*.25,r*.28,0,T),c.stroke()
    if(h>.9){c.lineWidth=2.5;for(let k=0;k<3;k++){const p=(t*4+k/3)%1,r=3+5*sin(PI*p);c.beginPath();c.arc(194+k*14,70-p*36,r,0,T);c.stroke()}}
  }
  // the hand gripping the neck
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(186,162,40,22,10);c.fill();c.stroke()
  c.lineWidth=2.5;for(const x of[198,208,218])c.beginPath(),c.moveTo(x,164),c.lineTo(x,174),c.stroke()
}
