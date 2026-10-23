// beanie girl at a claw machine: the claw drops, grabs a bear plush, lifts it, it slips back onto the pile and she groans
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=80,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const ease=u=>(u=max(0,min(1,u)),u*u*(3-2*u))
const bear=(c,x,y,a=0)=>{c.save();c.translate(x,y);c.rotate(a);c.lineWidth=4;c.fillStyle='#fff'
  for(const d of[-1,1])c.beginPath(),c.arc(d*11,-11,6,0,T),c.fill(),c.stroke()
  c.beginPath();c.ellipse(0,14,12,10,0,0,T);c.fill();c.stroke();c.beginPath();c.arc(0,0,14,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*5,-1,2.2,0,T),c.fill();c.beginPath();c.ellipse(0,5,3,2,0,0,T);c.fill();c.restore()}
export default(c,t)=>{
  const DOT=tone(c,6,1.3),FINE=tone(c,4,.8)
  // claw timeline: drop, close, lift, wobble, the bear slips back, the claw opens again
  const ry=t<.18?64+64*ease(t/.18):t<.26?128:t<.46?128-64*ease((t-.26)/.2):64
  const open=t<.18?1:t<.26?1-.65*ease((t-.18)/.08):t<.52?.35:t<.72?.35+.65*ease((t-.52)/.2):1
  const wob=t>=.44&&t<.52?3*sin((t-.44)*T*25):0,cx=190+wob
  const held=t>=.18&&t<.5,fall=t>=.5&&t<.6?ease((t-.5)/.1):1,by=held?ry+34:t>=.5&&t<.6?ry+34+(150-ry-34)*fall*fall:150
  const sad=t>=.6&&t<.92,shock=t>=.5&&t<.6,hope=t<.5
  // cabinet
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.roundRect(108,8,140,234,12);c.fill();c.stroke()
  c.beginPath();c.roundRect(114,14,128,26,8);c.fillStyle=DOT;c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=3;for(let k=0;k<6;k++){const on=(k+Math.floor(t*12))%2;c.beginPath();c.arc(124+k*21.5,27,on?5:3.5,0,T);c.fill();c.stroke()}
  c.lineWidth=6;c.beginPath();c.rect(120,46,116,124);c.fillStyle='#fff';c.fill();c.stroke()
  c.save();c.beginPath();c.rect(120,46,116,124);c.clip()
  // rail, carriage and rope
  c.lineWidth=4;c.beginPath();c.moveTo(120,54);c.lineTo(236,54);c.stroke()
  c.fillStyle='#111';c.beginPath();c.roundRect(cx-12,50,24,10,3);c.fill()
  for(const[l,s]of[[6,'#111'],[2,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(cx,60),c.lineTo(cx,ry),c.stroke()
  c.strokeStyle='#111'
  // prize pile: a bunny, a star ball, a cat, plus the bear when it's down
  c.lineWidth=4;c.fillStyle='#fff'
  c.beginPath();c.arc(146,158,16,0,T);c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.ellipse(146+d*7,134,5,12,d*.2,0,T),c.fill(),c.stroke()
  c.beginPath();c.arc(146,148,12,0,T);c.fill();c.stroke();c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(146+d*4,147,1.8,0,T),c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(222,156,17,0,T);c.fill();c.fillStyle=FINE;c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();for(let k=0;k<10;k++){const r=k%2?4:9,b=k*PI/5-PI/2;c.lineTo(222+cos(b)*r,156+sin(b)*r)}c.closePath();c.fill();c.lineWidth=2.5;c.stroke()
  c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.arc(168,166,13,0,T);c.fill();c.stroke()
  for(const d of[-1,1])c.beginPath(),c.moveTo(168+d*12,160),c.lineTo(168+d*10,148),c.lineTo(168+d*3,155),c.fill(),c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(168+d*4,166,1.8,0,T),c.fill()
  bear(c,held?cx:190,by,held?wob*.04:t>=.5&&t<.6?fall*1.2:0)
  if(t>=.58&&t<.66){c.lineWidth=3;for(const d of[-1,1])c.beginPath(),c.moveTo(190+d*20,160),c.lineTo(190+d*30,152),c.stroke()}
  // claw head and prongs
  c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.ellipse(cx,ry+4,12,8,0,PI,T);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(cx+d*7,ry+4),c.lineTo(cx+d*(8+12*open),ry+22),c.lineTo(cx+d*(2+10*open),ry+32),c.stroke()
  // glass shine
  c.strokeStyle='#ccc';c.lineWidth=5;for(const[x,l]of[[130,40],[146,20]])c.beginPath(),c.moveTo(x,62+l),c.lineTo(x+l,62),c.stroke()
  c.restore();c.strokeStyle='#111'
  // control panel: joystick and button
  c.lineWidth=5;c.beginPath();c.roundRect(120,180,116,46,6);c.fillStyle=FINE;c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(204,214,14,6,0,0,T);c.fill();c.stroke()
  for(const[l,s]of[[9,'#111'],[3,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(204,214),c.lineTo(204+(hope?4*sin(t*T*6):0),194),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4;c.fillStyle='#111';c.beginPath();c.arc(204+(hope?4*sin(t*T*6):0),192,7,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(220,196,6,0,T);c.fill();c.stroke()
  // girl in front, bust, a little smaller than full size
  const dy=sad?6:0
  c.save();c.translate(76,170+dy);c.scale(.8,.8);c.translate(-128,-130)
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(98,186);c.quadraticCurveTo(52,196,44,270);c.lineTo(212,270);c.quadraticCurveTo(204,196,158,186);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(92,190);c.quadraticCurveTo(128,222,164,190);c.quadraticCurveTo(128,206,92,190);c.fill();c.stroke()
  for(const d of[-1,1])c.lineWidth=4,c.beginPath(),c.moveTo(128+d*14,204),c.lineTo(128+d*16,236),c.stroke()
  // ink side tufts under the beanie
  c.lineWidth=7;c.fillStyle='#111';for(const d of[-1,1]){c.beginPath();c.moveTo(128+d*52,92);c.quadraticCurveTo(128+d*76,130,128+d*70,170);c.quadraticCurveTo(128+d*82,166,128+d*86,176);c.quadraticCurveTo(128+d*76,140,128+d*64,96);c.closePath();c.fill();c.stroke()}
  c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  // face
  if(sad){c.lineWidth=6;for(const d of[-1,1]){const x=128+d*25;c.beginPath();c.moveTo(x-d*12,130);c.lineTo(x+d*10,140);c.lineTo(x-d*12,150);c.stroke()}
    c.lineWidth=4.5;c.beginPath();c.moveTo(112,170);for(let k=1;k<=6;k++)c.lineTo(112+k*5.3,k%2?165:170);c.stroke()
    c.lineWidth=3;for(const x of[96,106,116,140,150,160])c.beginPath(),c.moveTo(x,112),c.lineTo(x,126),c.stroke()
    c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(186,112);c.quadraticCurveTo(196,128,190,136);c.quadraticCurveTo(180,136,182,126);c.closePath();c.fill();c.stroke()}
  else if(shock){c.lineWidth=5;c.fillStyle='#fff';for(const x of[103,153])c.beginPath(),c.ellipse(x,140,12,14,0,0,T),c.fill(),c.stroke()
    c.fillStyle='#111';c.beginPath();c.ellipse(128,170,7,9,0,0,T);c.fill()}
  else{const lx=hope?4:2;for(const[x,d]of[[103,-1],[153,1]]){
      c.fillStyle='#fff';c.beginPath();c.ellipse(x,140,13,16,0,0,T);c.fill()
      c.save();c.beginPath();c.ellipse(x,140,13,16,0,0,T);c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(x+lx,138,10.5,14,0,0,T);c.fill()
      c.fillStyle='#fff';c.beginPath();c.ellipse(x+lx-4,133,4,5.5,0,0,T);c.fill();c.beginPath();c.arc(x+lx+4,146,2,0,T);c.fill()
      if(hope){c.save();c.translate(x+lx+3,141);c.beginPath();for(let k=0;k<8;k++){const r=k%2?1.4:4.5,b=k*PI/4;c.lineTo(cos(b)*r,sin(b)*r)}c.fill();c.restore()}
      c.restore();c.lineWidth=6;c.beginPath();c.moveTo(x-16,135);c.quadraticCurveTo(x,120,x+16,135);c.moveTo(x+d*14,132);c.lineTo(x+d*21,127);c.stroke()}
    c.lineWidth=4.5;c.beginPath();if(hope)c.arc(128,168,6,0,T);else c.moveTo(120,170),c.lineTo(136,170);c.stroke()}
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*42+k-3,166),c.lineTo(128+d*42+k+3,158),c.stroke()
  // knit beanie: ribbed dome, toned band, pom-pom
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(62,112);c.bezierCurveTo(56,20,200,20,194,112);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.lineWidth=3;for(let x=74;x<190;x+=12)c.beginPath(),c.moveTo(x,96),c.quadraticCurveTo(128+(x-128)*.6,40,128+(x-128)*.2,30),c.stroke();c.restore()
  c.lineWidth=7;c.beginPath();c.roundRect(58,92,140,26,10);c.fillStyle='#fff';c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();for(let k=0;k<16;k++){const r=k%2?13:17,b=k*PI/8;c.lineTo(128+cos(b)*r,26+sin(b)*r)}c.closePath();c.fill();c.lineWidth=5;c.stroke()
  // little ink bangs peeking under the band
  c.fillStyle='#111';c.lineWidth=5;for(const[x,w]of[[92,12],[112,14],[140,14],[162,12]])c.beginPath(),c.moveTo(x-w/2,116),c.quadraticCurveTo(x,132,x+w/2+2,116),c.fill(),c.stroke()
  // fists up while hoping
  if(hope){c.lineWidth=6;c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*30,206-4*Math.abs(sin(t*T*6)),15,13,0,0,T),c.fill(),c.stroke()}
  c.restore()
}
