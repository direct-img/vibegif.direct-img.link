// crouching girl with short ink pigtails holds out a treat to a stray cat, it licks, then rubs its cheek on her hand, hearts rising
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=90,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const ease=u=>(u=max(0,min(1,u)),u*u*(3-2*u))
const heart=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore();c.fillStyle='#fff';c.fill();c.lineWidth=3;c.stroke()}
export default(c,t)=>{
  const DOT=tone(c,6,1.3),FINE=tone(c,4,.8)
  const rub=ease((t-.48)/.08)*(1-ease((t-.88)/.08)),lick=t<.48||t>=.94,tg=lick&&sin(t*T*10)>0
  // ground
  c.fillStyle=FINE;c.beginPath();c.ellipse(132,240,112,9,0,0,T);c.fill()
  // girl squatting
  c.save();c.translate(80,104);c.scale(.6,.6);c.translate(-128,-130)
  c.lineWidth=10;c.fillStyle='#111';for(const x of[96,150])c.beginPath(),c.roundRect(x-18,348,40,18,8),c.fill()
  c.fillStyle='#fff';c.beginPath();c.moveTo(96,184);c.quadraticCurveTo(62,200,64,280);c.lineTo(70,330);c.lineTo(190,330);c.lineTo(196,280);c.quadraticCurveTo(196,200,160,184);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(102,186);c.quadraticCurveTo(128,214,154,186);c.stroke();for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*12,204),c.lineTo(128+d*14,236),c.stroke()
  // knees up in front, shorts
  c.lineWidth=10;c.fillStyle='#fff';for(const x of[100,156])c.beginPath(),c.ellipse(x,300,30,34,0,0,T),c.fill(),c.stroke()
  for(const x of[100,156])c.beginPath(),c.rect(x-12,328,24,24),c.fill(),c.stroke()
  // the arm resting on her knee
  c.beginPath();c.ellipse(96,270,16,14,0,0,T);c.fill();c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(rub>.5){c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,146),c.quadraticCurveTo(x,128,x+15,146),c.stroke()
    c.lineWidth=7;c.beginPath();c.moveTo(114,166);c.quadraticCurveTo(128,184,142,166);c.stroke()}
  else{for(const[x,d]of[[103,-1],[153,1]]){
      c.fillStyle='#fff';c.beginPath();c.ellipse(x,142,14,16,0,0,T);c.fill()
      c.save();c.beginPath();c.ellipse(x,142,14,16,0,0,T);c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(x+6,146,11,13,0,0,T);c.fill()
      c.fillStyle='#fff';c.beginPath();c.ellipse(x+2,140,4.5,5.5,0,0,T);c.fill();c.beginPath();c.arc(x+10,152,2.2,0,T);c.fill();c.restore()
      c.lineWidth=9;c.beginPath();c.moveTo(x-16,136);c.quadraticCurveTo(x,124,x+16,136);c.moveTo(x+d*14,134);c.lineTo(x+d*21,128);c.stroke()}
    c.lineWidth=7;c.beginPath();c.moveTo(120,168);c.quadraticCurveTo(128,174,136,168);c.stroke()}
  c.lineWidth=5;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*42+k-3,170),c.lineTo(128+d*42+k+3,162),c.stroke()
  // short ink pigtails low on each side, round bangs
  c.lineWidth=10;c.fillStyle='#111';for(const d of[-1,1]){c.beginPath();c.moveTo(128+d*54,148);c.quadraticCurveTo(128+d*86,160,128+d*80,196);c.quadraticCurveTo(128+d*70,190,128+d*66,198);c.quadraticCurveTo(128+d*62,172,128+d*52,166);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.arc(128+d*58,154,8,0,T);c.fill();c.stroke();c.fillStyle='#111'}
  c.beginPath();c.moveTo(70,150);c.bezierCurveTo(50,72,88,38,128,38);c.bezierCurveTo(168,38,206,72,186,150)
  c.quadraticCurveTo(184,118,176,106);c.quadraticCurveTo(160,118,146,110);c.quadraticCurveTo(132,120,116,110);c.quadraticCurveTo(100,120,86,110);c.quadraticCurveTo(76,124,70,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=10;c.beginPath();c.arc(128,104,52,1.28*PI,1.72*PI);c.stroke();c.strokeStyle='#111'
  c.restore()
  // her reaching arm and the treat tube
  const hx=150,hy=188
  for(const[l,s]of[[24,'#111'],[14,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(104,152),c.quadraticCurveTo(122,186,hx,hy),c.stroke()
  c.strokeStyle='#111';c.save();c.translate(hx+8,hy+2);c.rotate(.25);c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(-4,-6);c.lineTo(24,-4);c.lineTo(30,0);c.lineTo(24,4);c.lineTo(-4,6);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(30,0,2.5,0,T);c.fill();c.restore()
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(hx,hy,12,10,.2,0,T);c.fill();c.stroke()
  // the cat: body, tail, head moving between licking the tube and rubbing her hand
  const cx=200,cy=214,sw=sin(t*T*2)
  for(const[l,s]of[[13,'#111'],[5,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(cx+22,cy-6),c.bezierCurveTo(cx+46,cy-14,cx+40+8*sw,cy-50,cx+30+10*sw,cy-60),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(cx,cy,30,20,0,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(cx+10,cy-8,14,9,.3,0,T);c.fill()
  c.fillStyle='#fff';for(const x of[cx-18,cx+16])c.beginPath(),c.ellipse(x,cy+18,7,5,0,0,T),c.fill(),c.stroke()
  const kx=184-20*rub,ky=200-14*rub,ka=-.2-.35*rub+(rub>.5?.12*sin(t*T*6):0)
  c.save();c.translate(kx,ky);c.rotate(ka)
  for(const d of[-1,1])c.beginPath(),c.moveTo(d*16,-8),c.lineTo(d*14,-26),c.lineTo(d*3,-14),c.closePath(),c.fill(),c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(14,-8);c.lineTo(14,-26);c.lineTo(4,-14);c.closePath();c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(0,0,19,16,0,0,T);c.fill();c.stroke()
  c.lineWidth=3.5;if(rub>.5)for(const d of[-1,1])c.beginPath(),c.arc(d*7,-1,4.5,1.15*PI,1.85*PI),c.stroke()
  else{c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(d*7-3,-1,3,4.5,0,0,T),c.fill()}
  c.lineWidth=3;c.beginPath();c.moveTo(-7,7);c.quadraticCurveTo(-4,10,-1,7);c.quadraticCurveTo(2,10,5,7);c.stroke()
  if(tg){c.fillStyle='#fff';c.beginPath();c.ellipse(-4,12,4,5,0,0,T);c.fill();c.stroke()}
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-1,1])c.beginPath(),c.moveTo(d*12,4+k*3),c.lineTo(d*24,3+k*6),c.stroke()
  c.restore()
  if(lick&&tg){c.lineWidth=3;for(const k of[0,1])c.beginPath(),c.moveTo(168+k*6,180),c.lineTo(172+k*6,172),c.stroke()}
  // purr marks and hearts while it rubs
  if(rub>.5){c.lineWidth=3;for(const k of[0,1])c.beginPath(),c.arc(kx+4,ky-4,26+k*8,-1.1,-.4),c.stroke()
    for(const[o,x]of[[0,182],[.33,206],[.66,162]]){const p=(t*3+o)%1;heart(c,x+6*sin(p*T),150-p*60,.8+.5*sin(PI*p))}}
}
