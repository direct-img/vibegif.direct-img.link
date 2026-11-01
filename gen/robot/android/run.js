// sleek white humanoid android running side-on in a full sprint stride cycle, arms pumping, glowing cyan visor, chest core and joints, speed lines streaking behind
export const frames=20,delay=40
const P=Math.PI*2,C='#33d6ff'
const d=a=>[Math.sin(a),Math.cos(a)],ad=(p,l,a)=>{const[x,y]=d(a);return[p[0]+l*x,p[1]+l*y]}
// smooth periodic bump centred on c with half-width w
const B=(p,c,w)=>{let x=Math.abs(((p-c)%1+1.5)%1-.5)/w;return x<1?(1+Math.cos(Math.PI*x))/2:0}
const seg=(c,a,b,r1,r2,f)=>{
  const t=Math.atan2(b[1]-a[1],b[0]-a[0])
  c.beginPath();c.arc(a[0],a[1],r1,t+P/4,t+P*.75);c.arc(b[0],b[1],r2,t-P/4,t+P/4);c.closePath()
  c.fillStyle=f;c.fill();c.stroke()
}
const joint=(c,p,r)=>{
  c.beginPath();c.arc(p[0],p[1],r,0,P);c.fillStyle='#3a4450';c.fill();c.stroke()
  c.beginPath();c.arc(p[0],p[1],r*.45,0,P);c.fillStyle=C;c.fill()
}
const leg=(c,H,p,f)=>{
  const th=.2+.8*Math.sin(P*p),kn=.3+1.9*B(p,.06,.32)+.35*B(p,.47,.16)
  const sa=th-kn,K=ad(H,50,th),A=ad(K,48,sa),fa=sa+P/4-.05-.7*B(p,.72,.2)
  seg(c,K,A,10,6.5,f);seg(c,H,K,14,10,f)
  // foot: heel, toe, sole
  c.save();c.translate(...A);c.rotate(-fa+P/4)
  c.beginPath();c.moveTo(-7,-5);c.lineTo(10,-4);c.lineTo(23,3);c.lineTo(22,8);c.lineTo(-8,8);c.closePath()
  c.fillStyle=f;c.fill();c.stroke()
  c.beginPath();c.moveTo(-8,8);c.lineTo(22,8);c.strokeStyle='#3a4450';c.stroke();c.strokeStyle='#111'
  c.restore()
  joint(c,K,6.5);joint(c,A,4.5)
}
const arm=(c,S,p,f)=>{
  const a=-.95*Math.sin(P*p),E=ad(S,36,a),fa=a+1.5-.3*Math.sin(P*p),W=ad(E,32,fa)
  seg(c,E,W,7,5.5,f);seg(c,S,E,10,7.5,f)
  c.beginPath();c.arc(...ad(W,4,fa),8.5,0,P);c.fillStyle=f;c.fill();c.stroke()
  joint(c,E,5);joint(c,S,6.5)
}
export default(c,t)=>{
  c.lineWidth=4
  // speed lines
  c.strokeStyle='#8fb3c7';c.lineWidth=4
  for(const[y,o,l]of[[70,0,34],[112,.35,48],[150,.7,30],[190,.2,40]]){
    const u=(t*2+o)%1,x=96-u*80
    c.beginPath();c.moveTo(x,y);c.lineTo(x-l*(1-u*.5),y);c.stroke()
  }
  c.strokeStyle='#111';c.lineWidth=4
  const bob=5*Math.cos(P*2*(t-.47)),H=[134,128+bob],ln=.2+.03*Math.cos(P*2*t)
  const S=ad(H,59,Math.PI-ln),far='#97a3b0',near='#f3f6f9'
  arm(c,S,t+.5,far)
  leg(c,H,t+.5,far)
  // torso, in a frame leaning forward about the hip
  c.save();c.translate(...H);c.rotate(ln)
  c.beginPath();c.moveTo(-15,4);c.lineTo(-16,-14);c.lineTo(15,-14);c.lineTo(17,4);c.quadraticCurveTo(0,12,-15,4);c.fillStyle='#d6dde4';c.fill();c.stroke()
  c.beginPath();c.roundRect(-12,-32,24,20,4);c.fillStyle='#5a6672';c.fill();c.stroke()
  c.beginPath();c.moveTo(-12,-22);c.lineTo(12,-22);c.stroke()
  c.beginPath();c.moveTo(-14,-28);c.lineTo(12,-28);c.bezierCurveTo(30,-34,30,-56,16,-64);c.quadraticCurveTo(0,-68,-15,-62);c.quadraticCurveTo(-22,-44,-14,-28)
  c.fillStyle=near;c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(-4,-63);c.quadraticCurveTo(-10,-46,-3,-30);c.moveTo(4,-36);c.quadraticCurveTo(16,-34,22,-40);c.stroke()
  c.beginPath();c.arc(10,-48,6.5,0,P);c.fillStyle='#3a4450';c.fill();c.stroke()
  c.beginPath();c.arc(10,-48,3.5+.8*Math.cos(P*2*t),0,P);c.fillStyle=C;c.fill()
  // neck and head
  c.lineWidth=4;c.beginPath();c.rect(-5,-74,10,12);c.fillStyle='#5a6672';c.fill();c.stroke()
  c.rotate(-.12)
  c.beginPath();c.ellipse(3,-90,17,20,0,0,P);c.fillStyle=near;c.fill();c.stroke()
  c.beginPath();c.moveTo(4,-97);c.quadraticCurveTo(14,-99,20,-93);c.lineTo(19,-83);c.quadraticCurveTo(12,-83,5,-85);c.closePath()
  c.fillStyle='#163a48';c.fill();c.stroke()
  c.beginPath();c.moveTo(8,-92);c.lineTo(17,-91);c.lineWidth=3;c.strokeStyle=C;c.stroke();c.strokeStyle='#111'
  c.lineWidth=2.5;c.beginPath();c.arc(-4,-89,6,0,P);c.stroke()
  c.beginPath();c.arc(-4,-89,2.2,0,P);c.fillStyle=C;c.fill()
  c.beginPath();c.moveTo(-12,-102);c.quadraticCurveTo(0,-111,12,-104);c.stroke()
  c.restore()
  c.lineWidth=4
  leg(c,H,t,near)
  arm(c,S,t,near)
}
