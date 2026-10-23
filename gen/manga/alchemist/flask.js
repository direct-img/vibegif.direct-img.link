// manga alchemist with fluffy white curls and goggles pushed up, pouring one flask into another until it puffs a smoke cloud and sparkles, then she grins
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=20,delay=80,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
const ease=x=>x<0?0:x>1?1:x*x*(3-2*x)
// keen eye: toned iris, ink pupil, star sparkle when excited
const eye=(c,x,y,d,tn,star)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,16,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11,13,0,0,T);c.clip();c.fillStyle=tn;c.fillRect(x-12,y-12,24,28);c.fillStyle='#111';c.fillRect(x-12,y-12,24,8);c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11,13,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(x,y+3,5,0,T);c.fill()
  c.fillStyle='#fff';if(star){c.save();c.translate(x-3,y-1);c.beginPath();for(let k=0;k<8;k++){const r=k%2?2:6,a=k*PI/4;c.lineTo(r*cos(a),r*sin(a))}c.fill();c.restore()}else{c.beginPath();c.arc(x-4,y-3,4,0,T);c.fill()}
  c.beginPath();c.arc(x+4,y+8,1.8,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-19,x+16,y-6);c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(x+d*14,y-8);c.lineTo(x+d*20,y-12);c.stroke()
}
// fluffy curl outline: a ring of bumps
const curls=(c,cx,cy,rx,ry,a0,a1,n,b)=>{for(let k=0;k<=n;k++){const a=a0+(a1-a0)*k/n,x=cx+rx*cos(a),y=cy+ry*sin(a);k?c.arc(x,y,b,a-1.3,a+1.3):c.moveTo(x+b*cos(a-1.3),y+b*sin(a-1.3))}}
const puff=(c,x,y,s)=>{c.beginPath();for(let k=0;k<7;k++){const a=k*T/7,q=s*(k%2?.8:1);c.arc(x+s*.8*cos(a),y+s*.65*sin(a),q*.55,a-1.5,a+1.5)}c.closePath();c.fill();c.stroke()}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat')
  const pour=ease(t/.15)-ease((t-.42)/.12),flow=t>.12&&t<.42,boom=t>=.44&&t<.86,bp=(t-.44)/.42,star=t>.5&&t<.9
  // fluffy white curls behind
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();curls(c,128,104,72,66,PI*.82,PI*2.18,13,15);c.lineTo(170,178);c.lineTo(86,178);c.closePath();c.fill();c.stroke()
  // lab coat over a toned shirt and an ink tie
  c.beginPath();c.moveTo(100,184);c.quadraticCurveTo(58,194,48,256);c.lineTo(208,256);c.quadraticCurveTo(198,194,156,184);c.closePath();c.fill();c.stroke()
  c.fillStyle=tn;c.beginPath();c.moveTo(110,186);c.lineTo(128,232);c.lineTo(146,186);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.lineWidth=3;c.beginPath();c.moveTo(124,192);c.lineTo(132,192);c.lineTo(134,214);c.lineTo(128,222);c.lineTo(122,214);c.closePath();c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(100,186);c.lineTo(118,236);c.lineTo(110,256);c.moveTo(156,186);c.lineTo(138,236);c.lineTo(146,256);c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(116,166,24,22);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,166);c.lineTo(116,186);c.moveTo(140,166);c.lineTo(140,186);c.stroke()
  // face
  c.save();c.translate(128,118);c.scale(.82,.82);c.translate(-128,-128)
  c.lineWidth=7;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  const lx=flow?-4:0
  eye(c,103+lx,140,-1,tn,star);eye(c,153+lx,140,1,tn,star)
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-3,168),c.lineTo(128+d*42+k+3,160),c.stroke()
  c.lineWidth=4;c.fillStyle='#111';c.beginPath()
  if(star)c.moveTo(114,166),c.quadraticCurveTo(128,184,142,166),c.closePath(),c.fill(),c.stroke()
  else c.moveTo(122,170),c.lineTo(134,168),c.stroke()
  // curly fringe
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();curls(c,128,96,62,40,PI*1.02,PI*1.98,8,14);c.lineTo(186,140);c.quadraticCurveTo(176,108,160,104);c.quadraticCurveTo(128,114,96,104);c.quadraticCurveTo(80,108,70,140);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(const[x,y]of[[98,78],[128,70],[158,78]])c.arc(x,y,7,PI*.2,PI*1.2);c.stroke()
  // goggles pushed up on her head: strap, two lenses with a glint
  c.lineWidth=7;c.beginPath();c.moveTo(66,82);c.quadraticCurveTo(128,40,190,82);c.stroke()
  for(const x of[106,150]){c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(x,62,17,0,T);c.fill();c.stroke();c.fillStyle=tn;c.beginPath();c.arc(x,62,11,0,T);c.fill();c.lineWidth=3;c.stroke()
    c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(x-6,58);c.lineTo(x-1,53);c.stroke();c.strokeStyle='#111'}
  c.restore()
  // pouring flask tips in from the right, a toned stream dripping into the round flask
  const fx=166,fy=176
  c.save();c.translate(fx,fy);c.rotate(-1.1*pour)
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(-6,-26);c.lineTo(-6,-10);c.lineTo(-22,20);c.lineTo(22,20);c.lineTo(6,-10);c.lineTo(6,-26);c.closePath();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(-26,6-8*pour*(t<.42?1:0),52,20);c.restore();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(-9,-26);c.lineTo(9,-26);c.stroke()
  c.restore()
  if(flow){c.lineWidth=7;c.strokeStyle='#111';c.beginPath();c.moveTo(fx-30,fy-16);c.quadraticCurveTo(fx-44,fy-6,fx-62,fy+8);c.stroke();c.strokeStyle='#fff';c.lineWidth=3;c.stroke();c.strokeStyle='#111'}
  // round-bottom flask held up on the left
  const rx=100,ry=214
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(rx-7,ry-44);c.lineTo(rx-7,ry-24);c.arc(rx,ry,26,-PI/2-.27,PI*1.5+.27,true);c.lineTo(rx+7,ry-24);c.lineTo(rx+7,ry-44);c.closePath();c.fill()
  c.save();c.clip();c.fillStyle=tn;c.fillRect(rx-30,ry-4-6*ease((t-.12)/.3)*(t<.86?1:0),60,40);c.restore();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(rx-10,ry-44);c.lineTo(rx+10,ry-44);c.stroke()
  if(t>.2&&t<.86){c.fillStyle='#fff';c.lineWidth=2;for(let k=0;k<3;k++){const q=(t*6+k/3)%1;c.beginPath();c.arc(rx-10+k*10,ry+12-24*q,2+2*q,0,T);c.fill();c.stroke()}}
  // hands
  c.fillStyle='#fff';c.lineWidth=4;for(const[x,y]of[[rx+20,ry+14],[fx+14,fy+10]])c.beginPath(),c.ellipse(x,y,11,10,0,0,T),c.fill(),c.stroke()
  // the reaction: a smoke cloud billows up from the round flask, sparkles pop around it
  if(boom&&bp<.97){
    const s=(10+16*ease(bp/.35))*(1-ease((bp-.72)/.28)),x=rx-26-40*bp,y=ry-60-62*bp
    c.fillStyle='#fff';c.lineWidth=4;if(bp>.15)puff(c,x+20,y+30,s*.6);puff(c,x,y,s)
    c.lineWidth=2.5;for(const[xx,yy,r]of[[x+32,y-22,8],[x-22,y+30,6],[x+6,y-34,5]]){const q=r*sin(PI*min(1,bp*1.6));if(q>1){c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,w=k%2?q*.35:q;c.lineTo(xx+w*cos(a),yy+w*sin(a))}c.closePath();c.fill();c.stroke()}}
  }
}
