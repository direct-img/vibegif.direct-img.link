// emoticon waving hello with a big open smile, a raised mitten hand rocking side to side at the wrist
export const frames=24,delay=70
export default(c,t)=>{
  const P=Math.PI*2,S=Math.sin,C=Math.cos
  const E=(x,y,a,b,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,P)}
  const ink=(w=7)=>{c.fillStyle='#fff';c.fill();c.lineWidth=w;c.strokeStyle='#111';c.stroke()}
  const w=S(P*3*t),sw=.05+.42*w,vel=C(P*3*t) // three waves per loop
  // head bobbing and leaning into the wave
  c.save();c.translate(110,144+2*Math.abs(vel));c.rotate(-.04+.04*S(P*3*t-1))
  E(0,0,96,96);ink(8)
  c.fillStyle='#111';c.lineWidth=7
  for(const d of[-1,1]){E(d*32,-16,10,14);c.fill();c.beginPath();c.arc(d*32,-38,14,Math.PI+.5,P-.5);c.stroke()}
  // open D smile with a tongue
  const M=()=>{c.beginPath();c.moveTo(-36,22);c.quadraticCurveTo(0,82,36,22);c.closePath()}
  M();c.fill();c.save();c.clip();c.fillStyle='#fff';E(0,54,16,10);c.fill();c.restore();M();c.stroke()
  c.restore()
  // raised mitten rocking at the wrist, grey swishes off its fingertips
  c.save();c.translate(190,104);c.strokeStyle='#9a9a9a';c.lineWidth=5
  const g=Math.abs(vel),m=-Math.PI/2+Math.min(.45,sw-Math.sign(vel)*.55);if(g>.3){c.globalAlpha=g
    for(const[r,h]of[[94,.14],[82,.1]]){c.beginPath();c.arc(0,0,r,m-h,m+h);c.stroke()}}
  c.globalAlpha=1;c.rotate(sw);c.scale(1.12,1.12)
  c.beginPath();c.roundRect(-16,-12,32,16,6);ink()   // cuff
  c.save();c.translate(-21,-28);c.rotate(-.95);E(0,-9,9,15);ink();c.restore() // thumb, sticking out toward the face
  c.beginPath();c.moveTo(-20,-8);c.lineTo(-23,-44);c.bezierCurveTo(-23,-80,23,-80,23,-44);c.lineTo(20,-8);c.closePath();ink() // mitten
  c.restore()
}
