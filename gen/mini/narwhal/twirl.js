// narwhal swimming along: bobs, flicks its tail, and the white spiral on its long tusk keeps twirling toward the tip
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3
export default(c,t)=>{
  const s=sin(T*t),k=sin(T*t-1.4),bl=t>.8&&t<.86
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  c.translate(128,128+7*s);c.rotate(.04*cos(T*t));c.scale(.88,.88);c.translate(-134,-128)
  const shape=(x,y,r,f)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();f();c.fill();c.stroke();c.restore()}
  shape(38,127,.3*k,()=>{
    c.moveTo(6,-5);c.quadraticCurveTo(-8,-10,-22,-28);c.quadraticCurveTo(-16,-10,-12,0)
    c.quadraticCurveTo(-16,10,-22,28);c.quadraticCurveTo(-8,10,6,5)})
  shape(0,0,0,()=>{
    c.moveTo(40,122);c.bezierCurveTo(64,116,84,96,124,96);c.bezierCurveTo(164,96,194,110,196,132)
    c.bezierCurveTo(198,154,172,166,132,166);c.bezierCurveTo(92,166,66,142,40,132)})
  shape(142,162,-.6-.35*sin(T*t-2),()=>c.ellipse(-18,0,20,8,0,0,T))
  // tusk, with slanted white marks sliding from base to tip so the spiral looks like it turns
  c.save();c.translate(190,116);c.rotate(-.3)
  const tusk=()=>{c.beginPath();c.moveTo(0,-5);c.lineTo(70,-1.5);c.lineTo(70,1.5);c.lineTo(0,5);c.closePath()}
  c.lineWidth=2;tusk();c.fill();c.stroke();c.clip()
  c.strokeStyle='#fff';for(let i=-1;i<7;i++){const x=6+(i+t)*10,h=5-3.5*x/70;c.beginPath();c.moveTo(x-h*.8,-h);c.lineTo(x+h*.8,h);c.stroke()}
  c.restore()
  c.fillStyle=c.strokeStyle='#fff'
  for(const[x,y,r]of[[86,112,2.2],[102,104,2.6],[120,101,2.2],[138,103,2.6],[110,114,2]])c.beginPath(),c.arc(x,y,r,0,T),c.fill()
  if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(170,122,5.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(170,124,5.5,0,T),c.fill()
  c.lineWidth=3;c.beginPath();c.moveTo(189,144);c.quadraticCurveTo(182,150,174,148);c.stroke()
}
