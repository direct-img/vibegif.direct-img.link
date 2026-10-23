// show poodle prancing in place: pompom legs high-step in a trot, its body bobs, ear puffs bounce, the tail pompom wags and it blinks
const{sin,cos,PI,max,abs}=Math,T=2*PI
export const frames=24,delay=80,rim=3,rimColor='#111'
export default(c,t)=>{
  const y=-5*abs(sin(T*t*2)),wg=.3*sin(T*t*2),bl=t>.44&&t<.5
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=6
  const shape=f=>{c.beginPath();f();c.fill();c.stroke()}
  const leg=(x,top,l,k)=>{
    // thigh swings forward by l, the shin folds back by k, an ankle pompom and a little paw at the end
    const a=l,b=l-k,x1=x+32*sin(a),y1=top+32*cos(a),x2=x1+38*sin(b),y2=y1+38*cos(b)
    c.lineWidth=9;c.beginPath();c.moveTo(x,top);c.lineTo(x1,y1);c.lineTo(x2,y2);c.stroke()
    c.lineWidth=6;shape(()=>c.arc(x1+30*sin(b),y1+30*cos(b),11,0,T));shape(()=>c.ellipse(x2+4,y2,9,5,0,0,T))}
  const L=p=>max(0,sin(T*t*2+p))
  c.translate(0,y)
  leg(152,140,.7*L(PI),1.5*L(PI));leg(92,136,-.2*L(0),-.9*L(0))
  c.save();c.translate(70,112);c.rotate(wg);c.lineWidth=7;c.beginPath();c.moveTo(0,0);c.lineTo(-10,-34);c.stroke();c.lineWidth=6;shape(()=>c.arc(-12,-42,14,0,T));c.restore()
  c.lineWidth=26;c.beginPath();c.moveTo(86,124);c.lineTo(150,118);c.stroke()
  c.lineWidth=6;shape(()=>c.arc(84,126,24,0,T))
  c.lineWidth=16;c.beginPath();c.moveTo(160,112);c.lineTo(180,74);c.stroke()
  c.lineWidth=6;shape(()=>c.arc(156,118,34,0,T))
  leg(166,140,.7*L(0),1.5*L(0));leg(80,138,-.2*L(PI),-.9*L(PI))
  shape(()=>c.ellipse(206,80,17,9,.2,0,T))
  shape(()=>c.arc(184,72,18,0,T))
  shape(()=>c.arc(178,48,19,0,T))
  shape(()=>c.ellipse(170,96+2*sin(T*t*2-1),12,19,.1,0,T))
  c.fillStyle=c.strokeStyle='#111'
  c.beginPath();c.arc(222,78,5,0,T);c.fill()
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(192,68,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(192,70,5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(204,88);c.quadraticCurveTo(212,92,220,86);c.stroke()
}
