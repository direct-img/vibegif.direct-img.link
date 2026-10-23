// girl with short white bunches irons a wrinkled t-shirt flat, steam puffing, it sparkles, then she turns it over to do the other side
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=20,delay=90,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const ease=u=>(u=max(0,min(1,u)),u*u*(3-2*u))
const W=[[84,166],[102,192],[118,170],[124,214],[142,188],[150,224],[160,166],[172,200],[186,172]]
const spark=(c,x,y,r)=>{c.fillStyle='#fff';c.lineWidth=2.5;c.beginPath();for(let k=0;k<8;k++){const q=k%2?r*.3:r,b=k*PI/4;c.lineTo(x+cos(b)*q,y+sin(b)*q)}c.closePath();c.fill();c.stroke()}
const shirt=c=>{c.beginPath();c.moveTo(116,150);c.quadraticCurveTo(136,164,156,150);c.lineTo(184,156);c.lineTo(204,182);c.lineTo(182,192);c.lineTo(176,182);c.lineTo(176,238);c.lineTo(96,238);c.lineTo(96,182);c.lineTo(90,192);c.lineTo(68,182);c.lineTo(88,156);c.closePath()}
export default(c,t)=>{
  const DOT=tone(c,6,1.3),FINE=tone(c,4,.8)
  const sweep=t<.55,glow=t>=.55&&t<.68,u=ease((t-.68)/.26),ix=sweep?84+96*ease(t/.55):t<.68?180:180-96*u,lift=t>=.68?40*sin(PI*u):0
  const fl=t>=.68&&t<.86?(t-.68)/.18:t>=.86?1:0,sy=fl?abs(cos(PI*fl)):1,wr=sweep||fl>.5
  // girl behind the board
  c.save();c.translate(128,76);c.scale(.72,.72);c.translate(-128,-130)
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(98,184);c.quadraticCurveTo(40,196,30,290);c.lineTo(226,290);c.quadraticCurveTo(216,196,158,184);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=7;c.beginPath();c.moveTo(104,186);c.lineTo(128,214);c.lineTo(152,186);c.fill();c.stroke()
  c.beginPath();c.rect(116,166,24,22);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,186);c.moveTo(140,166);c.lineTo(140,186);c.stroke()
  // white bunches sticking out at ear level, ink ties
  for(const d of[-1,1]){c.save();c.translate(128+d*62,112);c.rotate(d*(.5+.06*sin(t*T*2)));c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(0,-14);c.quadraticCurveTo(d*44,-6,d*40,30);c.quadraticCurveTo(d*30,44,d*20,34);c.quadraticCurveTo(d*24,14,0,12);c.closePath();c.fill();c.stroke()
    c.lineWidth=4;c.beginPath();c.moveTo(d*10,-4);c.quadraticCurveTo(d*30,4,d*30,24);c.stroke();c.fillStyle='#111';c.beginPath();c.roundRect(-9,-14,18,26,6);c.fill();c.restore()}
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(glow){c.lineWidth=7;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,146),c.quadraticCurveTo(x,128,x+15,146),c.stroke()
    c.lineWidth=5;c.fillStyle='#111';c.beginPath();c.moveTo(114,166);c.quadraticCurveTo(128,186,142,166);c.closePath();c.fill();c.stroke()}
  else{const lx=(ix-132)*.07;for(const[x,d]of[[103,-1],[153,1]]){
      c.fillStyle='#fff';c.beginPath();c.ellipse(x,142,13,15,0,0,T);c.fill()
      c.save();c.beginPath();c.ellipse(x,142,13,15,0,0,T);c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(x+lx,148,10.5,13,0,0,T);c.fill()
      c.fillStyle='#fff';c.beginPath();c.ellipse(x+lx-4,143,4,5,0,0,T);c.fill();c.beginPath();c.arc(x+lx+4,154,2,0,T);c.fill();c.restore()
      c.lineWidth=7;c.beginPath();c.moveTo(x-16,138);c.quadraticCurveTo(x,128,x+16,138);c.moveTo(x+d*14,136);c.lineTo(x+d*21,131);c.stroke()}
    c.lineWidth=5;c.beginPath();c.moveTo(120,170);c.quadraticCurveTo(128,175,136,170);c.stroke()}
  c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*42+k-3,168),c.lineTo(128+d*42+k+3,160),c.stroke()
  // white hair, rounded fringe with a few strands, ink headband
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(72,150);c.bezierCurveTo(52,70,90,34,128,34);c.bezierCurveTo(166,34,204,70,184,150)
  c.quadraticCurveTo(184,118,176,106);c.quadraticCurveTo(168,116,158,118);c.quadraticCurveTo(152,104,140,104);c.quadraticCurveTo(132,116,120,116);c.quadraticCurveTo(114,104,102,104);c.quadraticCurveTo(92,116,82,112);c.quadraticCurveTo(74,128,72,150);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;for(const[a,b,q,r]of[[100,58,90,90],[156,58,168,88]])c.beginPath(),c.moveTo(a,b),c.quadraticCurveTo((a+q)/2-6,(b+r)/2,q,r),c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(76,82);c.quadraticCurveTo(128,48,180,82);c.lineTo(178,96);c.quadraticCurveTo(128,64,78,96);c.closePath();c.fill()
  c.restore()
  // ironing board with a toned cover and X legs
  for(const[l,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(70,214),c.lineTo(186,252),c.moveTo(186,214),c.lineTo(70,252),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6
  const board=y=>{c.beginPath();c.moveTo(8,178+y);c.quadraticCurveTo(16,148+y,60,148+y);c.lineTo(232,148+y);c.quadraticCurveTo(248,148+y,248,162+y);c.lineTo(248,192+y);c.quadraticCurveTo(248,206+y,232,206+y);c.lineTo(60,206+y);c.quadraticCurveTo(16,206+y,8,178+y);c.closePath()}
  board(8);c.fillStyle='#fff';c.fill();c.stroke();board(0);c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  // her other hand resting on the board
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.ellipse(222,164,14,10,.3,0,T);c.fill();c.stroke()
  // the t-shirt, squashed top to bottom while it turns over, hanging past the board's edge
  c.save();c.translate(136,194);c.scale(1,sy);c.translate(-136,-194)
  c.lineWidth=6;shirt(c);c.fillStyle='#fff';c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();if(fl>.5)c.moveTo(118,152),c.quadraticCurveTo(136,158,154,152);else c.moveTo(120,152),c.quadraticCurveTo(136,174,152,152);c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(96,214);c.lineTo(176,214);c.stroke()
  if(wr){c.lineWidth=4;for(const[x,y]of W)if(!sweep||x>ix-6){c.beginPath();for(let k=0;k<4;k++)c.lineTo(x-7+k*5,y+(k%2?5:-1));c.stroke()}}
  c.restore()
  if(glow)for(const[x,y,o]of[[104,176,0],[166,206,.5],[178,166,.25]])spark(c,x,y,11*(.6+.4*sin((t*6+o)*T)))
  // arm and iron, nose to the right, black sole, open handle
  const iy=188-lift,ia=t>=.68?-.3*sin(PI*u):0
  c.save();c.translate(ix,iy);c.rotate(ia)
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(-34,8);c.lineTo(26,8);c.quadraticCurveTo(38,6,38,0);c.quadraticCurveTo(24,-16,-30,-14);c.quadraticCurveTo(-38,-4,-34,8);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(-34,8);c.lineTo(26,8);c.quadraticCurveTo(38,6,38,0);c.lineTo(-36,2);c.closePath();c.fill()
  c.save();c.beginPath();c.moveTo(-30,0);c.lineTo(30,0);c.quadraticCurveTo(24,-16,-30,-14);c.closePath();c.clip();c.fillStyle=FINE;c.fillRect(-40,-20,80,20);c.restore()
  for(const[l,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(-20,-13),c.quadraticCurveTo(-18,-34,-2,-34),c.quadraticCurveTo(14,-34,16,-13),c.stroke()
  c.restore();c.strokeStyle='#111'
  const hx=ix-2+34*sin(ia),hy=iy-36+lift*0
  for(const[l,s]of[[24,'#111'],[14,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(76,128),c.quadraticCurveTo(min(hx,110)-20,hy-10,hx,hy),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.ellipse(hx,hy,13,10,0,0,T);c.fill();c.stroke()
  // steam puffs off the iron while it presses
  if(sweep)for(let k=0;k<3;k++){const p=(t*5+k/3)%1,x=ix-34+k*10-p*8,y=iy-10-p*34,r=4+7*sin(PI*p);c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke()}
}
