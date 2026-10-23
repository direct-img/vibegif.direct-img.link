// seahorse standing upright in the current: sways side to side, its dorsal fin flutters, tail curled under, blinks
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3
export default(c,t)=>{
  const s=sin(T*t),bl=t>.78&&t<.84,f=1+.18*sin(T*t*4)
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  c.translate(140,220);c.rotate(.07*s);c.translate(-140,-220+3*sin(T*t*2))
  const shape=(x,y,r,f)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();f();c.fill();c.stroke();c.restore()}
  shape(104,128,0,()=>c.ellipse(0,0,15*f,18,0,PI/2,3*PI/2))
  shape(0,0,0,()=>{
    c.moveTo(118,52);c.bezierCurveTo(104,74,98,96,104,122);c.bezierCurveTo(110,150,118,166,128,182);c.lineTo(146,180)
    c.bezierCurveTo(168,160,172,128,160,106);c.bezierCurveTo(152,92,150,80,152,70)})
  shape(136,58,0,()=>c.arc(0,0,20,0,T))
  shape(136,40,0,()=>{c.moveTo(-8,4);c.lineTo(-2,-10);c.lineTo(8,2)})
  c.lineWidth=11;c.beginPath();c.moveTo(150,62);c.lineTo(176,70);c.stroke()
  c.beginPath();c.arc(178,70,6.5,0,T);c.fill()
  // tail: a tapering stroke going down and curling forward
  const pts=[]
  for(let i=0;i<=8;i++){const u=i/8;pts.push([137-3*u,178+26*u,17-4*u])}
  for(let i=1;i<=32;i++){const u=i/32,a=PI-1.55*PI*u,r=16-11*u;pts.push([150+r*cos(a),206+r*sin(a),13-8*u])}
  for(let i=1;i<pts.length;i++){c.lineWidth=pts[i][2];c.beginPath();c.moveTo(pts[i-1][0],pts[i-1][1]);c.lineTo(pts[i][0],pts[i][1]);c.stroke()}
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=3,c.beginPath(),c.arc(138,55,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(138,56,5,0,T),c.fill()
}
