// emoticon winking and sticking its tongue out, wagging the tongue while the head waggles
export const frames=20,delay=60
const K='#111',W='#fff',P=Math.PI
export default(c,t)=>{
  const h=Math.sin(2*P*2*t),w=Math.sin(2*P*2*t-1.1)
  c.translate(128,128);c.rotate(.09*h)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  c.translate(3*h,0)
  // squeezed wink, open eye with a highlight under a cocked brow
  c.lineWidth=9;c.beginPath();c.moveTo(-58,-14);c.quadraticCurveTo(-40,-38,-20,-16);c.stroke()
  c.beginPath();c.moveTo(22,-56);c.quadraticCurveTo(38,-66,54,-54);c.stroke()
  c.fillStyle=K;c.beginPath();c.ellipse(38,-20,13,18,0,0,2*P);c.fill()
  c.fillStyle=W;c.beginPath();c.arc(42,-27,4.5,0,2*P);c.fill()
  // open grin
  c.fillStyle=K;c.beginPath();c.moveTo(-40,26);c.quadraticCurveTo(0,34,40,20);c.bezierCurveTo(38,62,-34,70,-40,26);c.fill()
  // tongue swings like a pendulum, clipped below the upper lip so it comes from inside the mouth
  const L=44+4*Math.abs(w)
  c.save();c.beginPath();c.moveTo(-99,26);c.lineTo(-40,26);c.quadraticCurveTo(0,34,40,20);c.lineTo(99,20);c.lineTo(99,99);c.lineTo(-99,99);c.clip()
  c.translate(4,38);c.rotate(-.42*w);c.fillStyle=W;c.lineWidth=7
  c.beginPath();c.moveTo(-18,-14);c.bezierCurveTo(-19,8,-26,L-30,-24,L-16);c.bezierCurveTo(-22,L+4,22,L+4,24,L-16);c.bezierCurveTo(26,L-30,19,8,18,-14);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(0,8);c.lineTo(0,L-22);c.stroke();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(-40,26);c.quadraticCurveTo(0,34,40,20);c.stroke()
}
