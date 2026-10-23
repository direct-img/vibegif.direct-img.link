// moon rabbit pounding mochi under a crescent moon: it heaves the mallet up, brings it down, the mochi squishes and its ears flop
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const L=t<.5?.5-.5*cos(PI*t/.5):t<.6?1-((t-.5)/.1)**2:0,q=t>.6&&t<.82?sin(PI*(t-.6)/.22):0,bl=t>.3&&t<.36
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  c.save();c.translate(42,42);c.rotate(.15*sin(T*t));shape(()=>c.arc(0,0,22,0,T))
  c.globalCompositeOperation='destination-out';c.beginPath();c.arc(14,-9,21,0,T);c.fill();c.restore()
  shape(()=>{c.moveTo(42,166);c.lineTo(102,166);c.bezierCurveTo(110,182,106,206,98,218);c.lineTo(46,218);c.bezierCurveTo(38,206,34,182,42,166)})
  shape(()=>c.ellipse(72,166,24+7*q,13-6*q,0,0,T))
  c.save();c.translate(170,220);c.rotate(-.06*L+.04*q);c.translate(-170,-220)
  const P=[140,140],a=3.3+1.1*L,H=[P[0]+66*cos(a),P[1]+66*sin(a)]
  shape(()=>c.ellipse(168,214,26,9,0,0,T))
  shape(()=>c.ellipse(174,178,30,38,0,0,T))
  shape(()=>c.arc(204,192,11,0,T))
  for(const[x,y,r]of[[164,100,.12],[178,104,.5]]){c.save();c.translate(x,y);c.rotate(r+.3*q-.1*L);shape(()=>c.ellipse(0,-26,9,28,0,0,T));c.restore()}
  shape(()=>c.ellipse(158,118,28,25,0,0,T))
  c.lineWidth=11;c.beginPath();c.moveTo(166,150);c.lineTo(...P);c.lineTo(...H);c.stroke();c.lineWidth=6
  shape(()=>c.arc(...P,8,0,T))
  c.save();c.translate(...H);c.rotate(a);shape(()=>c.roundRect(-11,-20,22,40,5));c.restore()
  c.fillStyle=c.strokeStyle='#111'
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(146,112,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(146,114,5,0,T),c.fill()
  c.beginPath();c.arc(133,120,3,0,T);c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(133,122);c.quadraticCurveTo(135,130,142,129);c.stroke()
  c.save();c.translate(164,100);c.rotate(.12+.3*q-.1*L);c.beginPath();c.moveTo(0,-12);c.lineTo(0,-42);c.stroke();c.restore()
  c.restore()
  c.lineWidth=3;c.beginPath();c.moveTo(46,168);c.lineTo(98,168);c.stroke()
  if(q>0){c.strokeStyle='#fff';c.lineWidth=4
    for(const[x,y,u,v]of[[34,150,-12,-6],[32,164,-14,2],[110,150,12,-6]])c.beginPath(),c.moveTo(x,y),c.lineTo(x+u*q,y+v*q),c.stroke()}
}
