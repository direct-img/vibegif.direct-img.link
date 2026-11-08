// white wind turbine with bold black outlines on a tapered grey-blue tower and a little green hill, its three long blades turning in gentle gusts that speed up and ease off, a red light blinking on top of the nacelle
export const frames=36,delay=50
const{sin,cos,PI}=Math,T=2*PI,X=128,Y=104
// blade pointing up from the hub: rounded root, wide leading edge, tapering tip
const blade=c=>{c.beginPath(),c.moveTo(-6,-10),c.bezierCurveTo(-19,-28,-13,-60,-4,-85),c.quadraticCurveTo(0,-91,4,-85),c.bezierCurveTo(8,-60,10,-30,7,-10),c.closePath()}
export default(c,t)=>{
  // one third of a turn per loop, slow then quick then slow again
  const a=T/3*(t-.6*sin(T*t)/T),on=t%.5<.18
  // hill and tower
  c.lineWidth=7,c.fillStyle='#78c46f',c.beginPath(),c.ellipse(X,236,66,22,0,PI,0),c.closePath(),c.stroke()
  c.fillStyle='#8ea6c2',c.beginPath(),c.moveTo(X-7,Y),c.lineTo(X+7,Y),c.lineTo(X+12,228),c.lineTo(X-12,228),c.closePath(),c.stroke(),c.fill()
  c.fillStyle='#78c46f',c.beginPath(),c.ellipse(X,236,66,22,0,PI,0),c.closePath(),c.fill()
  // nacelle and the blinking light
  c.fillStyle='#fff',c.beginPath(),c.roundRect(X-4,Y-12,40,22,9),c.stroke(),c.fill()
  if(on)c.fillStyle='#ffc2c2',c.beginPath(),c.arc(X+26,Y-17,11,0,T),c.fill()
  c.lineWidth=4,c.fillStyle=on?'#ff3b3b':'#9c3434',c.beginPath(),c.arc(X+26,Y-17,5.5,0,T),c.stroke(),c.fill()
  // blades and hub
  c.save(),c.translate(X,Y),c.rotate(a),c.lineWidth=7,c.fillStyle='#fff'
  for(let k=0;k<3;k++)c.save(),c.rotate(k*T/3),blade(c),c.stroke(),c.restore()
  for(let k=0;k<3;k++)c.save(),c.rotate(k*T/3),blade(c),c.fill(),c.clip(),c.fillStyle='#ff6b5b',c.fillRect(-9,-92,18,16),c.fillStyle='#fff',c.restore()
  c.beginPath(),c.arc(0,0,13,0,T),c.stroke(),c.fill(),c.fillStyle='#8ea6c2',c.beginPath(),c.arc(0,0,5,0,T),c.fill()
  c.restore()
}
