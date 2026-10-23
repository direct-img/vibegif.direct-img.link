// manga medusa girl whose hair is little snakes wiggling and flicking their tongues, her ink sunglasses slipping down her nose until she pushes them back up
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min,atan2}=Math,T=2*PI
export const frames=12,delay=110,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
const ease=x=>x<0?0:x>1?1:x*x*(3-2*x)
// gem-like eye: toned iris with a vertical slit
const eye=(c,x,y,d,tn)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,15,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11,13,0,0,T);c.clip();c.fillStyle=tn;c.fillRect(x-12,y-12,24,28);c.fillStyle='#111';c.fillRect(x-12,y-12,24,7);c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11,13,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,2.5,9,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-5,y-2,3.5,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-5);c.quadraticCurveTo(x,y-18,x+16,y-5);c.lineTo(x+d*19,y-10);c.stroke()
}
// a little snake: toned banded body along a wiggling curve, round head with dot eyes and a flicking forked tongue
const snake=(c,pts,tn,tongue)=>{
  for(const[l,s]of[[17,'#111'],[10,'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();for(const[x,y]of pts)c.lineTo(x,y);c.stroke()}
  c.strokeStyle=tn;c.lineWidth=6;c.setLineDash([5,6]);c.beginPath();for(const[x,y]of pts.slice(0,-2))c.lineTo(x,y);c.stroke();c.setLineDash([]);c.strokeStyle='#111'
  const[x,y]=pts[pts.length-1],[px,py]=pts[pts.length-3],a=atan2(y-py,x-px)
  c.save();c.translate(x,y);c.rotate(a)
  if(tongue>0){c.lineWidth=2.5;c.beginPath();c.moveTo(10,0);c.lineTo(10+10*tongue,0);c.lineTo(14+10*tongue,-4);c.moveTo(10+10*tongue,0);c.lineTo(14+10*tongue,4);c.stroke()}
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(2,0,11,8.5,0,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(4,d*4,2,0,T),c.fill()
  c.restore()
}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat')
  // sunglasses slide down the nose, then a finger pushes them back up
  const sl=ease(t/.7)*(1-ease((t-.78)/.08)),push=t>.72&&t<.96?sin((t-.72)/.24*PI):0,gy=130+22*sl
  // snakes: base on the hairline, each curls outward and wiggles with its own phase
  // [angle on the hairline, length, wiggle phase, curl]
  const sn=[[-2.55,54,0,-1.3],[-2,50,1.6,1.2],[-1.57,46,3.1,-1.1],[-1.14,50,4.4,1.2],[-.6,54,5.6,1.3],[2.75,46,.8,1.4],[.4,46,3.4,-1.4]]
  const path=([a0,len,ph,cu])=>{const bx=128+54*cos(a0),by=114+52*sin(a0),out=[];let x=bx,y=by;for(let k=0;k<=12;k++){const s=k/12,a=a0+cu*s+.35*sin(t*T*2+ph+s*3);out.push([x,y]);x+=cos(a)*len/12;y+=sin(a)*len/12}return out}
  const tg=k=>max(0,sin(t*T*4+k*1.7))
  // hanging side snakes go behind the face
  for(const k of[5,6])snake(c,path(sn[k]),tn,tg(k))
  // chiton: white with a toned sash and a round brooch
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,256);c.lineTo(202,256);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=tn;c.beginPath();c.moveTo(150,192);c.lineTo(170,196);c.lineTo(100,256);c.lineTo(74,256);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(156,202,9,0,T);c.fill();c.stroke();c.beginPath();c.arc(156,202,4,0,T);c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(116,168,24,24);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  // toned hair cap the snakes grow out of
  c.lineWidth=6;c.beginPath();c.moveTo(68,150);c.bezierCurveTo(50,74,88,48,128,48);c.bezierCurveTo(168,48,206,74,188,150);c.closePath();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(40,40,180,120);c.restore();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(74,100);c.bezierCurveTo(70,154,100,186,128,188);c.bezierCurveTo(156,186,186,154,182,100);c.bezierCurveTo(182,50,74,50,74,100);c.fill();c.stroke()
  eye(c,103,132,-1,tn);eye(c,153,132,1,tn)
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-3,170),c.lineTo(128+d*44+k+3,162),c.stroke()
  // smug little cat smile, a sweat drop when they've slipped far
  c.lineWidth=3.5;c.beginPath();c.moveTo(118,172);c.quadraticCurveTo(123,177,128,172);c.quadraticCurveTo(133,177,138,172);c.stroke()
  if(sl>.8){c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(186,108);c.quadraticCurveTo(196,124,188,130);c.quadraticCurveTo(178,124,186,108);c.fill();c.stroke()}
  // short wavy toned fringe
  const fr=()=>{c.beginPath();c.moveTo(72,120);c.bezierCurveTo(60,70,92,52,128,52);c.bezierCurveTo(164,52,196,70,184,120);for(const[x,y]of[[172,96],[156,106],[142,90],[128,104],[114,90],[100,106],[84,96]])c.quadraticCurveTo(x+6,y+10,x,y);c.closePath()}
  c.lineWidth=6;c.fillStyle='#fff';fr();c.fill();c.save();fr();c.clip();c.fillStyle=tn;c.fillRect(56,48,144,76);c.restore();fr();c.stroke()
  // sunglasses: ink lenses with glints, covering the lower part of her eyes as they slip
  c.lineWidth=5;c.beginPath();c.moveTo(78,gy);c.lineTo(70,gy-8);c.moveTo(178,gy);c.lineTo(186,gy-8);c.stroke()
  for(const x of[103,153]){c.fillStyle='#111';c.beginPath();c.roundRect(x-20,gy-6,40,22,8);c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(x-12,gy+10);c.lineTo(x-4,gy);c.moveTo(x-4,gy+12);c.lineTo(x+2,gy+5);c.stroke();c.strokeStyle='#111';c.lineWidth=5}
  c.beginPath();c.moveTo(123,gy);c.quadraticCurveTo(128,gy-4,133,gy);c.stroke()
  // top snakes over the hair cap, hissing
  for(let k=0;k<5;k++)snake(c,path(sn[k]),tn,tg(k))
  if(sl<.3){c.lineWidth=2.5;for(const[x,y]of[[46,74],[214,74]])for(let k=0;k<3;k++)c.beginPath(),c.arc(x,y,6+k*5,-.4,.4),c.stroke()}
  // finger pushing the bridge back up
  if(push>.02){const fy=gy+26+44*(1-push);c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(122,fy-18,12,30,6);c.fill();c.stroke();c.beginPath();c.ellipse(128,fy+22,18,14,0,0,T);c.fill();c.stroke()}
}
