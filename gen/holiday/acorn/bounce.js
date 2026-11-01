// acorn bouncing with squash and stretch, its cap hopping off on each landing and plopping back on
export const frames=24,delay=45,rim=5
const K='#2a1810',P=Math.PI*2,a=.07,G=226
export default(c,t)=>{
  // contact phase around t=0, airborne parabola between
  const air=t>a&&t<1-a,u=air?(t-a)/(1-2*a):0,y=air?46*4*u*(1-u):0,
    q=air?0:Math.sin(Math.PI*((t+a)%1)/(2*a)),       // squash on the ground
    st=air?.14*Math.max(0,1-Math.min(u,1-u)*5):0,     // stretch near takeoff/landing
    sx=1.26*(1+.17*q-st*.5),sy=1.26*(1-.17*q+st),
    v=t>a&&t<.82?(t-a)/(.82-a):0,g=19*4*v*(1-v),r=.35*Math.sin(P*v)*(1-v)
  c.strokeStyle=K;c.lineWidth=6
  // impact ticks
  if(q>.25)for(const d of[-1,1]){
    c.lineWidth=5;c.beginPath();c.moveTo(128+d*70,G-8);c.lineTo(128+d*92,G-18);c.moveTo(128+d*68,G-32);c.lineTo(128+d*84,G-50);c.stroke()
  }
  c.lineWidth=6
  c.save();c.translate(128,G-y);c.scale(sx,sy);c.lineWidth=4.9
  // nut
  const nut=()=>{c.beginPath();c.moveTo(-38,-64);c.bezierCurveTo(-42,-22,-16,-6,0,0);c.bezierCurveTo(16,-6,42,-22,38,-64);c.quadraticCurveTo(0,-76,-38,-64)}
  c.save();nut();c.fillStyle='#a5652a';c.fill();c.clip();c.translate(-7,-6);nut();c.fillStyle='#d08f45';c.fill()
  c.strokeStyle='#f3c27d';c.lineWidth=6;c.beginPath();c.moveTo(-22,-48);c.quadraticCurveTo(-24,-30,-12,-18);c.stroke();c.restore()
  c.lineWidth=4.9;nut();c.stroke()
  c.beginPath();c.moveTo(-5,-2);c.lineTo(0,8);c.lineTo(5,-2);c.fillStyle='#6b421d';c.fill();c.lineWidth=4;c.stroke()
  // cap, riding up off the nut and tilting while it floats
  c.translate(0,-62-g);c.rotate(r);c.lineWidth=4.9
  c.beginPath();c.moveTo(0,-26);c.quadraticCurveTo(2,-40,12,-44);c.stroke()
  const cap=()=>{c.beginPath();c.moveTo(-46,4);c.bezierCurveTo(-50,-34,50,-34,46,4);c.quadraticCurveTo(23,12,0,8);c.quadraticCurveTo(-23,12,-46,4)}
  c.save();cap();c.fillStyle='#6b421d';c.fill();c.clip();c.translate(-6,-5);cap();c.fillStyle='#8f5d2c';c.fill();c.translate(6,5)
  c.strokeStyle='#5a3615';c.lineWidth=3;c.beginPath()
  for(let k=-6;k<=6;k++){c.moveTo(k*13-30,10);c.lineTo(k*13+30,-40);c.moveTo(k*13+30,10);c.lineTo(k*13-30,-40)}
  c.stroke();c.restore();c.lineWidth=4.9;cap();c.stroke()
  c.restore()
}
