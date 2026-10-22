// manga girl with black braids at a shrine: flicks a coin into the offering box, shakes the bell rope, claps twice and prays
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=24,delay=80,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const ease=u=>(u=max(0,min(1,u)),u*u*(3-2*u)),lerp=(a,b,u)=>a+(b-a)*ease(u)
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x,y,x+r,y);c.quadraticCurveTo(x,y,x,y+r);c.quadraticCurveTo(x,y,x-r,y);c.quadraticCurveTo(x,y,x,y-r);c.fill();c.stroke()}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,13,16,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,10.5,14,0,0,T);c.clip();c.fillStyle='#111';c.fill();c.fillStyle='#777';c.beginPath();c.ellipse(x,y+13,10,6,0,0,T);c.fill();c.restore()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x-4,y-4,4,5.5,0,0,T);c.fill();c.beginPath();c.arc(x+4,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-5);c.quadraticCurveTo(x,y-20,x+16,y-5);c.moveTo(x+d*14,y-8);c.lineTo(x+d*21,y-13);c.stroke()
}
export default(c,t)=>{
  const DOT=tone(c,6,1.3),FINE=tone(c,4,.8)
  const shake=t>=.18&&t<.45,clap=t>=.45&&t<.62,pray=t>=.62&&t<.96,sw=shake?14*sin((t-.18)/.27*T*3):0
  // hands, viewer's left and right
  const gap=clap?14*abs(cos((t-.45)/.17*PI*2)):0
  const L=t<.18?[98,200]:t<.22?[lerp(98,70+sw,(t-.18)/.04),lerp(200,150,(t-.18)/.04)]:shake?[70+sw,150]:t<.49?[lerp(70,121,(t-.45)/.04),lerp(150,166,(t-.45)/.04)]:t<.96?[128-3-gap,166]:[lerp(125,98,(t-.96)/.04),lerp(166,200,(t-.96)/.04)]
  const R=t<.08?[lerp(160,190,t/.08),lerp(200,172,t/.08)]:t<.18?[190,172]:t<.22?[lerp(190,160,(t-.18)/.04),lerp(172,200,(t-.18)/.04)]:shake?[160,200]:t<.49?[lerp(160,135,(t-.45)/.04),lerp(200,166,(t-.45)/.04)]:t<.96?[128+3+gap,166]:[lerp(131,160,(t-.96)/.04),lerp(166,200,(t-.96)/.04)]
  // bell and rope
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.roundRect(24,8,84,10,3);c.fill();c.fillStyle=FINE;c.fill();c.stroke()
  const ba=shake?.25*sin((t-.18)/.27*T*3):0
  c.save();c.translate(66,18);c.rotate(ba);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(0,22,20,0,T);c.fill();c.fillStyle=FINE;c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(-19,16,38,8);c.fill();c.lineWidth=3.5;c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(-8,32);c.lineTo(8,32);c.stroke();c.fillStyle='#111';for(const x of[-8,8])c.beginPath(),c.arc(x,32,3,0,T),c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(-8,8,5,3,-.5,0,T);c.fill();c.restore()
  if(shake){c.lineWidth=4;for(const d of[-1,1])for(const k of[0,1])c.beginPath(),c.arc(66,40,28+k*10,d<0?PI*.85:-PI*.15,d<0?PI*1.15:PI*.15),c.stroke()}
  const rx=66+sw,ry=184
  for(const[l,st]of[[17,'#111'],[10,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(66+sin(ba)*-40,60),c.quadraticCurveTo(66,120,rx,ry),c.stroke()
  c.strokeStyle='#111';c.lineWidth=3;for(let k=1;k<16;k++){const u=k/16,x=(1-u)**2*(66-sin(ba)*40)+2*u*(1-u)*66+u*u*rx,y=(1-u)**2*60+2*u*(1-u)*120+u*u*ry;c.beginPath();c.moveTo(x-5,y-2);c.lineTo(x+5,y+3);c.stroke()}
  // black braids behind
  for(const d of[-1,1]){c.lineWidth=6;for(let k=0;k<5;k++){const x=128+d*(46+k*1.5),y=118+k*14;c.fillStyle='#111';c.beginPath();c.ellipse(x,y,10,9,0,0,T);c.fill();c.stroke();c.strokeStyle='#fff';c.lineWidth=2.5;c.beginPath();c.arc(x-2,y-2,5,PI*1.1,PI*1.6);c.stroke();c.strokeStyle='#111';c.lineWidth=6}}
  // coat
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(110,150);c.quadraticCurveTo(70,156,62,214);c.lineTo(194,214);c.quadraticCurveTo(186,156,146,150);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(108,150);c.quadraticCurveTo(128,170,148,150);c.quadraticCurveTo(150,164,128,174);c.quadraticCurveTo(106,164,108,150);c.fill();c.stroke()
  for(const[l,st]of[[14,'#111'],[8,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(100,170),c.quadraticCurveTo(128,184,156,170),c.stroke()
  c.strokeStyle='#111'
  for(const d of[-1,1]){c.fillStyle='#111';c.beginPath();c.moveTo(128+d*24,176);c.lineTo(128+d*30,206);c.lineTo(128+d*18,206);c.closePath();c.fill()}
  // offering box
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(36,196);c.lineTo(220,196);c.lineTo(212,214);c.lineTo(44,214);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';for(let x=52;x<206;x+=14)c.beginPath(),c.moveTo(x,199),c.lineTo(x+8,199),c.lineTo(x+7,211),c.lineTo(x-1,211),c.fill()
  c.fillStyle='#fff';c.beginPath();c.rect(44,214,168,34);c.fill();c.fillStyle=FINE;c.fill();c.stroke()
  c.lineWidth=3;c.strokeStyle='#fff';for(const y of[224,236])c.beginPath(),c.moveTo(52,y),c.bezierCurveTo(100,y-4,150,y+4,204,y),c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(128,231,12,0,T);c.fill();c.stroke();c.fillStyle='#111';for(let k=0;k<3;k++){const b=k*T/3;c.beginPath();c.arc(128+cos(b)*5,231+sin(b)*5,3.5,0,T);c.fill()}
  // arms and hands
  for(const[[sx,sy],[hx,hy]]of[[[104,164],L],[[152,164],R]]){for(const[l,st]of[[18,'#111'],[10,'#fff'],[10,DOT]])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(sx,sy),c.lineTo(hx,hy+10),c.stroke()
    c.strokeStyle='#111'}
  for(const[hx,hy]of[L,R]){c.lineWidth=4.5;c.fillStyle='#fff';c.beginPath();if(clap||pray)c.ellipse(hx,hy,5,12,0,0,T);else c.ellipse(hx,hy,9,9,0,0,T);c.fill();c.stroke()}
  if(clap){const u=(t-.45)/.17*2%1;if(u<.35){c.lineWidth=4;for(let k=0;k<6;k++){const b=k*PI/3+PI/6,r=18+u*30;c.beginPath();c.moveTo(128+cos(b)*r,166+sin(b)*r);c.lineTo(128+cos(b)*(r+9),166+sin(b)*(r+9));c.stroke()}}}
  // head
  c.save();c.translate(128,92);c.scale(.76,.76);c.translate(-128,-120)
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(pray){c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.arc(x,140,13,.15*PI,.85*PI),c.stroke();c.lineWidth=4;for(const x of[103,153])c.beginPath(),c.moveTo(x-14,144),c.lineTo(x-20,150),c.stroke()}
  else{eye(c,103,140,-1);eye(c,153,140,1)}
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*40+k-3,166),c.lineTo(128+d*40+k+3,158),c.stroke()
  c.lineWidth=5;c.beginPath();if(pray)c.arc(128,166,6,.2*PI,.8*PI);else if(clap)c.moveTo(118,168),c.lineTo(138,168);else c.arc(128,164,8,.15*PI,.85*PI);c.stroke()
  c.lineWidth=7;c.fillStyle='#111';c.beginPath();c.moveTo(70,150)
  c.bezierCurveTo(54,72,88,36,128,36);c.bezierCurveTo(168,36,202,72,186,150)
  c.quadraticCurveTo(184,120,180,106);c.lineTo(166,112);c.lineTo(160,96);c.lineTo(146,110);c.lineTo(136,94);c.lineTo(126,110);c.lineTo(114,96);c.lineTo(104,110);c.lineTo(94,98);c.lineTo(88,112);c.lineTo(76,106);c.quadraticCurveTo(72,124,70,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;for(const[s,e]of[[1.22,1.34],[1.42,1.56],[1.64,1.76]])c.beginPath(),c.arc(128,104,52,PI*s,PI*e),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*60,128),c.lineTo(128+d*76,120),c.lineTo(128+d*74,140),c.closePath(),c.fill(),c.stroke()
  c.restore()
  // coin into the box
  if(t<.2){const u=min(1,t/.18),x=200-u*48,y=168-sin(u*PI)*52+u*30;const cw=10*abs(cos(u*PI*4))+2;c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,cw,10,0,0,T);c.fill();c.stroke();c.fillStyle='#111';c.beginPath();c.ellipse(x,y,cw*.3,3,0,0,T);c.fill()
    c.lineWidth=3;for(const k of[-1,1])c.beginPath(),c.moveTo(x+14,y+k*6-8),c.lineTo(x+24,y+k*6-14),c.stroke()
    if(t>=.15){c.fillStyle='#fff';c.lineWidth=3;spark(c,160,188,8);spark(c,138,182,5)}}
  if(pray){c.fillStyle='#fff';c.lineWidth=3;for(let k=0;k<3;k++){const p=((t-.62)/.34*2+k/3)%1,[x,y]=[[176,64],[84,40],[192,120]][k];spark(c,x,y-p*10,3+7*sin(PI*p))}}
}
