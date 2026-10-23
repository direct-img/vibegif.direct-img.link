// chibi in a bucket hat and long coat waits at a bus stop: taps her foot, checks her wristwatch, sighs as a leaf blows past
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=80,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const ease=u=>(u=max(0,min(1,u)),u*u*(3-2*u))
export default(c,t)=>{
  const DOT=tone(c,6,1.3),FINE=tone(c,4,.8)
  const tap=t<.34,watch=t>=.34&&t<.68,sigh=t>=.7&&t<.92,ar=watch?ease((t-.34)/.08)*(1-ease((t-.6)/.08)):0
  // bus stop: pole, round sign with a bus, timetable
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(62,238,26,7,0,0,T);c.fill();c.stroke()
  for(const[l,s]of[[13,'#111'],[5,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(62,236),c.lineTo(62,60),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.arc(62,46,32,0,T);c.fill()
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.arc(62,46,26,0,T);c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(46,30,32,28,6);c.fill();c.fillStyle='#111';c.fillRect(50,35,10,9);c.fillRect(64,35,10,9);c.fillRect(48,50,28,2)
  c.fillStyle='#fff';for(const x of[52,72])c.beginPath(),c.arc(x,59,4,0,T),c.fill()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.rect(36,96,52,62);c.fill();c.stroke()
  c.fillStyle='#111';c.fillRect(42,102,40,8);c.lineWidth=2.5;for(let y=118;y<154;y+=8)c.beginPath(),c.moveTo(44,y),c.lineTo(58,y),c.moveTo(64,y),c.lineTo(80,y),c.stroke()
  // girl, small full body
  c.save();c.translate(158,112);c.scale(.62,.62);c.translate(-128,-120)
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.ellipse(128,322,62,10,0,0,T);c.fillStyle=FINE;c.fill()
  // legs and boots, the right one tapping
  const tp=tap?max(0,sin(t/.34*T*3))*.45:0
  c.fillStyle='#fff';c.lineWidth=8;for(const[x,a]of[[108,0],[148,tp]]){c.beginPath();c.rect(x-9,276,18,34);c.fill();c.stroke();c.save();c.translate(x-12,318);c.rotate(-a);c.fillStyle='#111';c.beginPath();c.moveTo(0,0);c.lineTo(0,-14);c.lineTo(26,-14);c.quadraticCurveTo(34,-12,34,0);c.closePath();c.fill();c.stroke();c.restore();c.fillStyle='#fff'}
  if(tp>.3){c.lineWidth=5;for(const k of[-1,0,1])c.beginPath(),c.moveTo(186+k*2,300+k*10),c.lineTo(198+k*4,296+k*12),c.stroke()}
  // long toned coat with buttons and belt
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(100,182);c.quadraticCurveTo(76,200,66,288);c.lineTo(190,288);c.quadraticCurveTo(180,200,156,182);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(128,190);c.lineTo(128,288);c.stroke();c.fillStyle='#111';c.fillRect(80,240,96,10);c.fillStyle='#fff';for(const y of[210,264])for(const x of[116,140])c.beginPath(),c.arc(x,y,5,0,T),c.fill(),c.stroke()
  // arms: left hangs, right comes up to read the watch
  for(const[l,s]of[[30,'#111'],[19,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(98,196),c.quadraticCurveTo(80,226,84,256),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=7;c.beginPath();c.arc(84,262,11,0,T);c.fill();c.stroke()
  // striped scarf with a tail
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.roundRect(96,172,64,22,10);c.fill();c.stroke();c.beginPath();c.moveTo(140,186);c.lineTo(150,236);c.lineTo(132,238);c.lineTo(126,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';for(const x of[110,128,146])c.fillRect(x-3,174,6,18);c.fillRect(132,206,16,5);c.fillRect(134,220,16,5)
  // hatched hair framing the face
  c.save();c.beginPath();c.moveTo(64,196);c.bezierCurveTo(44,76,86,40,128,40);c.bezierCurveTo(170,40,212,76,192,196);c.quadraticCurveTo(176,186,170,196);c.lineTo(86,196);c.quadraticCurveTo(80,186,64,196);c.closePath();c.fillStyle='#fff';c.fill();c.lineWidth=8;c.stroke();c.clip()
  c.lineWidth=3;for(let k=-140;k<160;k+=7)c.beginPath(),c.moveTo(k+40,40),c.lineTo(k+180,200),c.stroke();c.restore()
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  // face
  if(sigh){c.lineWidth=7;for(const x of[103,153])c.beginPath(),c.moveTo(x-14,146),c.quadraticCurveTo(x,154,x+14,146),c.stroke()
    c.lineWidth=5;c.beginPath();c.ellipse(128,170,5,4,0,0,T);c.stroke()}
  else{const[lx,ly]=watch?[4,6]:[-5,0];for(const[x,d]of[[103,-1],[153,1]]){
      c.fillStyle='#fff';c.beginPath();c.ellipse(x,142,13,15,0,0,T);c.fill()
      c.save();c.beginPath();c.ellipse(x,142,13,15,0,0,T);c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(x+lx,142+ly,10.5,13,0,0,T);c.fill()
      c.fillStyle='#fff';c.beginPath();c.ellipse(x+lx-4,137+ly,4,5,0,0,T);c.fill();c.beginPath();c.arc(x+lx+4,148+ly,2,0,T);c.fill();c.restore()
      c.lineWidth=7;c.beginPath();c.moveTo(x-16,137);c.quadraticCurveTo(x,126,x+16,137);c.moveTo(x+d*14,134);c.lineTo(x+d*21,129);c.stroke()}
    c.lineWidth=5;c.beginPath();if(watch)c.moveTo(120,172),c.lineTo(136,170);else c.moveTo(120,170),c.quadraticCurveTo(128,166,136,170);c.stroke()}
  c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*42+k-3,168),c.lineTo(128+d*42+k+3,160),c.stroke()
  if(watch){c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(186,100);c.quadraticCurveTo(198,118,192,128);c.quadraticCurveTo(180,128,182,116);c.closePath();c.fill();c.stroke()}
  // hatched bangs under the hat
  c.save();c.lineWidth=8;c.beginPath();c.moveTo(76,104);c.lineTo(180,104);c.quadraticCurveTo(178,124,168,128);c.quadraticCurveTo(160,116,150,122);c.quadraticCurveTo(140,112,128,124);c.quadraticCurveTo(116,112,104,122);c.quadraticCurveTo(94,116,86,128);c.quadraticCurveTo(76,122,76,104);c.closePath();c.fillStyle='#fff';c.fill();c.stroke();c.clip()
  c.lineWidth=3;for(let k=-60;k<120;k+=7)c.beginPath(),c.moveTo(k+70,100),c.lineTo(k+100,132),c.stroke();c.restore()
  // white bucket hat with stitch rings and an ink band
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.ellipse(128,102,82,18,0,0,T);c.fill();c.stroke()
  c.beginPath();c.moveTo(80,100);c.bezierCurveTo(82,34,174,34,176,100);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(80,86);c.quadraticCurveTo(128,96,176,86);c.lineTo(176,98);c.quadraticCurveTo(128,108,80,98);c.closePath();c.fill()
  c.lineWidth=3;c.setLineDash([5,5]);c.beginPath();c.ellipse(128,104,70,12,0,.1*PI,.9*PI);c.stroke();c.beginPath();c.moveTo(92,74);c.quadraticCurveTo(128,60,164,74);c.stroke();c.setLineDash([])
  // the watch arm goes on top so the raised wrist isn't hidden by her hair
  const wx=184-30*ar,wy=256-110*ar
  for(const[l,s]of[[30,'#111'],[19,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(158,196),c.quadraticCurveTo(190-10*ar,226-50*ar,wx,wy),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7;c.beginPath();c.arc(wx,wy+8-4*ar,11,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.roundRect(wx-13,wy-6,26,10,3);c.fill();c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(wx,wy-1,8,0,T);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(wx,wy-1);c.lineTo(wx,wy-6);c.moveTo(wx,wy-1);c.lineTo(wx+4,wy+1);c.stroke()
  c.restore()
  // sigh puff and the leaf blowing past
  if(sigh){const p=ease((t-.7)/.12);c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(136-18*p,146-6*p,5+7*p,4+4*p,0,0,T);c.fill();c.stroke()}
  if(t>=.5&&t<.98){const p=(t-.5)/.48,x=262-290*p,y=196-56*p+14*sin(p*T*2),a=p*T*2.5
    c.save();c.translate(x,y);c.rotate(a);c.scale(1.35,1.35);c.lineWidth=3.5;c.fillStyle='#fff';c.beginPath();c.moveTo(-14,0);c.quadraticCurveTo(0,-11,14,0);c.quadraticCurveTo(0,11,-14,0);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke()
    c.lineWidth=2.5;c.beginPath();c.moveTo(-18,0);c.lineTo(12,0);for(const k of[-6,2])c.moveTo(k,0),c.lineTo(k+5,-5),c.moveTo(k,0),c.lineTo(k+5,5);c.stroke();c.restore()
    c.lineWidth=3;for(const k of[0,1])c.beginPath(),c.moveTo(x+22+k*8,y-6+k*10),c.lineTo(x+40+k*8,y-8+k*10),c.stroke()}
}
