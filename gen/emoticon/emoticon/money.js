// emoticon with dollar sign eyes and a dollar bill for a tongue hops with greed, the eyes pulsing and the bill flapping
export const frames=20,delay=70
const K='#111',W='#fff',P=Math.PI
export default(c,t)=>{
  const b=Math.abs(Math.sin(2*P*t)),q=(1-b)**6,             // two hops, with a squash on each landing
  e=1+.16*Math.sin(P*((2*t+.85)%1))**4                       // eyes ka-ching just after each landing
  c.translate(128,138-14*b);c.scale(1+.05*q,1-.05*q);c.translate(0,-10)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  // bold stroked $ eyes
  for(const m of[-1,1]){
    c.save();c.translate(m*36,-20);c.scale(e,e);c.rotate(m*.1*(e-1)/.16);c.lineWidth=8
    c.beginPath();c.moveTo(12,-14);c.bezierCurveTo(6,-22,-13,-21,-13,-10);c.bezierCurveTo(-13,0,13,-1,13,10);c.bezierCurveTo(13,22,-6,23,-14,14);c.stroke()
    c.beginPath();c.moveTo(0,-27);c.lineTo(0,27);c.stroke();c.restore()
  }
  // wide open grin
  const lip=()=>{c.moveTo(-42,22);c.quadraticCurveTo(0,32,42,20)}
  c.fillStyle=K;c.beginPath();lip();c.bezierCurveTo(40,66,-38,70,-42,22);c.fill()
  // a dollar bill sticks out like a tongue, flapping as a wave runs down it
  c.save();c.beginPath();c.moveTo(-99,22);lip();c.lineTo(99,20);c.lineTo(99,120);c.lineTo(-99,120);c.clip()
  c.translate(2,30)
  const L=68,H=22,w=y=>6*Math.sin(2.2*y/L*P-4*P*t)*(y/L)**1.2,
  rect=i=>{c.beginPath();for(let k=0;k<=24;k++){const u=k<13?k:24-k,y=i+(L-2*i)*u/12;c.lineTo((k<13?i-H:H-i)+w(y),y)}c.closePath()}
  c.fillStyle=W;c.lineWidth=7;rect(0);c.fill();c.stroke()
  c.lineWidth=3;rect(7);c.stroke()
  // little $ on the bill
  c.translate(w(L*.55),L*.55);c.lineWidth=4
  c.beginPath();c.moveTo(6,-7);c.bezierCurveTo(3,-11,-6,-11,-6,-5);c.bezierCurveTo(-6,0,6,0,6,5);c.bezierCurveTo(6,11,-3,12,-7,7);c.stroke()
  c.beginPath();c.moveTo(0,-13);c.lineTo(0,13);c.stroke();c.restore()
  c.lineWidth=8;c.beginPath();lip();c.stroke()
}
