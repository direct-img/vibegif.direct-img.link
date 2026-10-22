// chibi karate girl with hatched odango buns bounces in her stance, then snaps a high kick through a screentone swoosh
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=16,delay=70,rim=4
const dots=(col,r)=>{const k=createCanvas(6,6),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[3,3],[0,0],[6,0],[0,6],[6,6]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const TONE=dots('#111',1.4),LITE=dots('#fff',1.2)
const ease=u=>u<0?0:u>1?1:u*u*(3-2*u)
const hatch=(c,x0,y0,x1,y1)=>{c.lineWidth=3.5;c.beginPath();for(let x=x0-(y1-y0);x<x1;x+=9)c.moveTo(x,y1),c.lineTo(x+(y1-y0),y0);c.stroke()}
const limb=(c,pts,w)=>{for(const[l,s]of[[w+8,'#111'],[w,'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();c.moveTo(...pts[0]);for(const p of pts.slice(1))c.lineTo(...p);c.stroke()}c.strokeStyle='#111'}
const eye=(c,x,y,d,lt,sh)=>{
  c.save();c.beginPath();c.moveTo(x-17,y-6+d*3);c.lineTo(x+17,y-6-d*3);c.lineTo(x+17,y+22);c.lineTo(x-17,y+22);c.clip()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,13,15,0,0,T);c.fill();c.clip()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+3,y+4,10,13,0,0,T);c.fill();c.fillStyle=lt;c.fillRect(x-8,y+7,22,12)
  c.fillStyle='#fff';c.beginPath();c.arc(x,y,4,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-15,y-6+d*3);c.lineTo(x+15,y-6-d*3);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t)=>{
  const tn=c.createPattern(TONE,'repeat'),lt=c.createPattern(LITE,'repeat')
  const k=t<.3?0:t<.42?ease((t-.3)/.12):t<.66?1:1-ease((t-.66)/.34),kick=t>=.3&&t<.66,b=t<.3?3*abs(sin(t*T*5/1.5)):0
  const L=-.22*k,hx=112,hy=190-b,th0=PI/2-.45,th=th0-k*(th0+1.05),bend=.75*(1-k)+1.5*sin(PI*k)*(t<.5?1:.6),sa=th+bend
  const kn=[hx+8+27*cos(th),hy+2+27*sin(th)],ft=[kn[0]+28*cos(sa),kn[1]+28*sin(sa)]
  c.fillStyle=tn;c.beginPath();c.ellipse(106,240,44,7,0,0,T);c.fill()
  if(k>.15){const e=th,R0=40,R1=62,s=.95;c.fillStyle=tn;c.beginPath();c.arc(hx+8,hy+2,R1,s,e,true);c.arc(hx+8,hy+2,R0,e+.3,s,false);c.closePath();c.fill()
    c.lineWidth=3;for(const r of[R0,(R0+R1)/2,R1])c.beginPath(),c.arc(hx+8,hy+2,r,s-.15,e+(r==R0?.3:0),true),c.stroke()}
  limb(c,[[hx-8,hy],[hx-18,hy+24],[hx-16,234]],22)
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(hx-12,236,16,8,0,0,T);c.fill();c.stroke()
  c.save();c.translate(hx,hy);c.rotate(L)
  const af=k,ar=[[-22,-40],[-36-12*af,-24+6*af],[-20-30*af,-52+38*af]],fr=[[22,-40],[38,-28],[26+6*af,-56+4*af]]
  limb(c,ar,15);c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.arc(...ar[2],10,0,T);c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(-8,-50);c.lineTo(-28,-44);c.quadraticCurveTo(-34,-16,-31,12);c.lineTo(31,12);c.quadraticCurveTo(34,-16,28,-44);c.lineTo(8,-50);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(-10,-50);c.lineTo(12,-12);c.moveTo(10,-50);c.lineTo(-4,-26);c.stroke()
  c.fillStyle='#111';c.fillRect(-32,-12,64,11);const w=kick?5*sin(t*T*8):1.5*sin(t*T*2);c.beginPath();c.moveTo(6,-6);c.lineTo(2+w,18);c.lineTo(10+w,19);c.lineTo(11,-4);c.lineTo(19+w,16);c.lineTo(26+w,12);c.lineTo(15,-6);c.fill()
  c.beginPath();c.ellipse(11,-6,7,6,0,0,T);c.fill()
  c.restore()
  limb(c,[[hx+8,hy+2],kn,ft],22)
  c.fillStyle='#fff';c.lineWidth=5;c.save();c.translate(...ft);c.rotate(sa-PI/2);c.beginPath();c.ellipse(3,5,9,15,0,0,T);c.fill();c.stroke();c.restore()
  if(t>=.42&&t<.58){c.lineWidth=4;const p=(t-.42)/.16;for(let j=0;j<6;j++){const a=j*PI/3+.3;c.beginPath();c.moveTo(ft[0]+cos(a)*(18+6*p),ft[1]+sin(a)*(18+6*p));c.lineTo(ft[0]+cos(a)*(28+6*p),ft[1]+sin(a)*(28+6*p));c.stroke()}}
  c.save();c.translate(hx,hy);c.rotate(L);c.translate(-2,-100);c.scale(.8,.8);c.translate(-128,-120)
  c.lineWidth=7;c.fillStyle='#fff'
  for(const d of[-1,1]){c.beginPath();c.arc(128+d*46,48,26,0,T);c.fill();c.save();c.clip();hatch(c,90+d*46,20,166+d*46,76);c.restore();c.lineWidth=7;c.beginPath();c.arc(128+d*46,48,26,0,T);c.stroke()
    c.fillStyle='#111';c.beginPath();c.ellipse(128+d*38,66,12,7,d*.5,0,T);c.fill();c.fillStyle='#fff'}
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,104,138,-1,lt);eye(c,154,138,1,lt)
  c.lineWidth=7;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*12,112),c.lineTo(128+d*40,118-8),c.stroke()
  c.lineWidth=3;for(const d of[-1,1])for(const j of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+j-3,166),c.lineTo(128+d*44+j+3,158),c.stroke()
  c.lineWidth=5;c.fillStyle='#111';c.beginPath()
  if(kick)c.moveTo(114,162),c.lineTo(144,162),c.quadraticCurveTo(140,184,128,184),c.quadraticCurveTo(116,184,114,162),c.fill(),c.stroke()
  else c.moveTo(118,166),c.lineTo(138,164),c.stroke()
  const hair=()=>{c.beginPath();c.moveTo(70,150)
  c.bezierCurveTo(54,74,88,40,128,40);c.bezierCurveTo(168,40,202,74,186,150)
  c.quadraticCurveTo(184,118,178,104);c.quadraticCurveTo(170,100,160,110);c.quadraticCurveTo(152,96,140,94);c.quadraticCurveTo(134,108,122,112)
  c.quadraticCurveTo(116,98,104,94);c.quadraticCurveTo(96,106,88,112);c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,124,70,150);c.closePath()}
  c.lineWidth=7;c.fillStyle='#fff';hair();c.fill();c.save();c.clip();hatch(c,40,30,220,160);c.restore();c.lineWidth=7;hair();c.stroke()
  c.restore()
  c.save();c.translate(hx,hy);c.rotate(L)
  limb(c,fr,15);c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.arc(...fr[2],10,0,T);c.fill();c.stroke()
  c.restore()
}
