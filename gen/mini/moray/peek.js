// moray eel peeking out of a hole in a rock: sways, slowly opens and closes its mouth
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3
export default(c,t)=>{
  const sw=8*sin(T*t),sw2=12*sin(T*t-.6),m=t>.2&&t<.7?.45*sin(PI*(t-.2)/.5):0,bl=t>.84&&t<.9
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  c.beginPath();c.moveTo(36,226);c.bezierCurveTo(28,192,56,160,98,158);c.bezierCurveTo(120,146,164,148,182,160)
  c.bezierCurveTo(216,166,234,198,222,226);c.quadraticCurveTo(128,236,36,226);c.fill();c.stroke()
  c.globalCompositeOperation='destination-out';c.beginPath();c.ellipse(114,186,32,15,0,0,T);c.fill();c.globalCompositeOperation='source-over'
  const nx=132+sw2,ny=94
  // body tapers from the hole up to the head
  const B=[[114,194],[108,160],[118+sw,124],[nx,ny]],P=u=>[0,1].map(j=>(1-u)**3*B[0][j]+3*u*(1-u)**2*B[1][j]+3*u*u*(1-u)*B[2][j]+u**3*B[3][j])
  for(let i=1;i<=24;i++)c.lineWidth=31-9*i/24,c.beginPath(),c.moveTo(...P((i-1)/24)),c.lineTo(...P(i/24)),c.stroke()
  // front lip of the hole passing in front of the body
  c.strokeStyle='#fff';c.lineWidth=3.5;c.beginPath();c.ellipse(114,186,32,15,0,.08*PI,.92*PI);c.stroke();c.strokeStyle='#111'
  c.save();c.translate(nx,ny);c.rotate(-.15+.05*sin(T*t-1))
  c.lineWidth=6;c.beginPath();c.ellipse(16,-8,32,13,0,0,T);c.fill();c.stroke()
  c.save();c.translate(-6,2);c.rotate(m);c.beginPath();c.ellipse(24,5,26,7,0,0,T);c.fill();c.stroke();c.restore()
  c.fillStyle=c.strokeStyle='#fff'
  if(m<.1)c.lineWidth=3,c.beginPath(),c.moveTo(4,3),c.quadraticCurveTo(24,4,40,1),c.stroke()
  if(bl)c.lineWidth=3,c.beginPath(),c.arc(24,-13,4.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(24,-12,4.5,0,T),c.fill()
  c.restore()
}
