// pot of gold with a shamrock on its belly: glints twinkle across the coin pile while one coin flips up and drops back
export const frames=32,delay=50,rim=5
const P=Math.PI*2,S=Math.sin,C=Math.cos,cl=v=>v<0?0:v>1?1:v
// 4-point twinkle
const tw=(c,x,y,r,a=0)=>{c.save();c.translate(x,y);c.rotate(a);c.beginPath();for(let k=0;k<8;k++){const m=k%2?r*.3:r;c.lineTo(m*S(k*P/8),-m*C(k*P/8))}c.closePath();c.lineWidth=3;c.fill();c.stroke();c.restore()}
// a coin seen from above at tilt ry/rx, with a rim and embossed ring
const coin=(c,x,y,r,q,lw=3.5)=>{
  const e=Math.max(Math.abs(q),.06)*r,th=4*Math.sqrt(1-Math.min(1,q*q))+2
  c.lineWidth=lw;c.fillStyle='#d99a1e'
  c.beginPath();c.ellipse(x,y+th/2,r,e,0,0,P);c.fill();c.stroke()
  c.beginPath();c.rect(x-r,y-th/2,2*r,th);c.fill()
  c.beginPath();c.ellipse(x,y-th/2,r,e,0,0,P);c.fillStyle='#ffd23c';c.fill();c.stroke()
  if(Math.abs(q)>.3){c.lineWidth=2;c.strokeStyle='#e0a321';c.beginPath();c.ellipse(x,y-th/2,r*.68,e*.68,0,0,P);c.stroke();c.strokeStyle='#111'}
  c.beginPath();c.moveTo(x-r,y-th/2);c.lineTo(x-r,y+th/2);c.moveTo(x+r,y-th/2);c.lineTo(x+r,y+th/2);c.lineWidth=lw;c.stroke()
}
export default(c,t)=>{
  // pot drawn big, then scaled down to leave headroom for the coin toss
  c.translate(128,243);c.scale(.84,.84);c.translate(-128,-248)
  c.lineWidth=6
  // legs
  c.fillStyle='#2b2b3d'
  for(const[x,w]of[[64,1],[128,0],[192,-1]]){c.beginPath();c.moveTo(x-13+w*4,214);c.lineTo(x-11+w*8,242);c.quadraticCurveTo(x+w*8,248,x+11+w*8,242);c.lineTo(x+13+w*4,214);c.fill();c.stroke()}
  // belly
  const belly=()=>{c.beginPath();c.moveTo(54,122);c.bezierCurveTo(20,150,22,214,72,232);c.quadraticCurveTo(128,250,184,232);c.bezierCurveTo(234,214,236,150,202,122);c.closePath()}
  belly();c.fillStyle='#3a3a52';c.fill()
  c.save();belly();c.clip()
  c.beginPath();c.ellipse(150,190,120,90,0,0,P);c.ellipse(128,170,96,64,0,0,P);c.fillStyle='#262636';c.fill('evenodd')
  c.beginPath();c.ellipse(64,168,9,30,.25,0,P);c.fillStyle='#6a6a8e';c.fill()
  c.restore()
  belly();c.stroke()
  // shamrock on the belly
  c.save();c.translate(128,184);c.lineWidth=4.5;c.fillStyle='#3fc45a'
  c.beginPath();c.moveTo(-3,0);c.quadraticCurveTo(0,20,12,31);c.lineTo(17,28);c.quadraticCurveTo(6,18,4,0);c.fill();c.stroke()
  for(let k=0;k<3;k++){c.save();c.rotate(k*P/3);c.beginPath();c.moveTo(0,0);c.bezierCurveTo(-24,-10,-14,-34,0,-22);c.bezierCurveTo(14,-34,24,-10,0,0);c.fill();c.stroke();c.restore()}
  c.restore()
  // pile of coins heaped in the mouth
  c.save()
  c.beginPath();c.moveTo(50,124)
  const bumps=[[56,112],[70,96],[86,84],[102,74],[118,68],[134,67],[150,70],[166,78],[182,90],[196,104],[204,118]]
  for(let k=0;k<bumps.length;k++){const[x,y]=bumps[k],[px,py]=k?bumps[k-1]:[50,124];c.quadraticCurveTo((px+x)/2,Math.min(py,y)-7,x,y)}
  c.lineTo(206,124);c.closePath();c.fillStyle='#ffc62e';c.fill();c.stroke()
  c.clip()
  c.strokeStyle='#d9971b';c.lineWidth=2.5
  for(const[x,y,r]of[[80,108,13],[104,96,14],[130,90,13],[156,98,14],[180,110,13],[94,82,12],[120,76,12],[146,80,12],[168,92,12],[66,120,12],[142,114,14],[112,116,13],[190,122,12]]){c.beginPath();c.ellipse(x,y,r,r*.42,0,0,P);c.stroke()}
  c.restore()
  // rim of the pot, in front of the pile
  c.lineWidth=6
  c.beginPath();c.moveTo(42,122);c.quadraticCurveTo(128,146,214,122);c.quadraticCurveTo(222,128,214,136);c.quadraticCurveTo(128,162,42,136);c.quadraticCurveTo(34,128,42,122);c.fillStyle='#4a4a68';c.fill();c.stroke()
  c.beginPath();c.moveTo(58,132);c.quadraticCurveTo(92,142,118,144);c.lineWidth=3.5;c.strokeStyle='#7c7ca6';c.stroke();c.strokeStyle='#111'
  // loose coins on the front lip
  coin(c,96,124,15,.42);coin(c,168,126,14,.45)
  // the flipping coin: launched from the top of the pile, three half turns, lands where it began
  const u=cl(t/.6),h=4*u*(1-u),f=Math.asin(.42)+3*Math.PI*u,cx=134-12*S(Math.PI*u),cy=60-58*h
  coin(c,cx,cy,19,S(f))
  // glints
  c.fillStyle='#fffbe0'
  for(const[x,y,p,r]of[[84,92,.05,17],[178,96,.3,16],[112,112,.55,15],[160,74,.8,15],[200,124,.62,13]]){const v=(t-p+1)%1;if(v<.26)tw(c,x,y,r*S(Math.PI*v/.26),v*1.5)}
  if(u>.32&&u<.68)tw(c,cx+20,cy+2,20*S(Math.PI*(u-.32)/.36),.3)
}
