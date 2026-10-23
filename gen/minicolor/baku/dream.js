// baku asleep: slow breaths, a dream bubble above it with a star slowly turning and twinkling inside
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=90
const B='#b48cff',L='#dac6ff',S='#4ea8de',Y='#f4c03e',D='#2b2633'
export default(c,t)=>{
  const br=sin(T*t),ry=38*(1+.04*br)
  const fill=(col,g)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();g();c.fill();c.stroke()}
  for(const[x,y,r]of[[100,104,5],[114,84,8]])fill(S,()=>c.arc(x,y,r*(1+.08*br),0,T))
  const R=32*(1+.05*br)
  fill(S,()=>c.arc(150,56,R,0,T))
  c.save();c.translate(150,56);c.rotate(T*t/5);const k=.85+.15*sin(2*T*t)
  fill(Y,()=>{for(let i=0;i<10;i++){const a=i*PI/5-PI/2,r=(i%2?7:16)*k;c.lineTo(r*cos(a),r*sin(a))}c.closePath()});c.restore()
  for(const x of[96,176])fill(B,()=>c.ellipse(x,194,12,7,0,0,T))
  fill(B,()=>c.ellipse(142,162,66,ry,0,0,T))
  c.save();c.beginPath();c.ellipse(142,162,66,ry,0,0,T);c.clip()
  fill(L,()=>c.ellipse(186,154,44,60,0,0,T));c.restore()
  c.strokeStyle=B;c.lineWidth=18;c.beginPath();c.moveTo(60,152+2*br);c.quadraticCurveTo(38,154+2*br,38,176+3*br);c.stroke()
  fill(B,()=>c.arc(76,156+2*br,30,0,T))
  fill(B,()=>c.ellipse(88,128+2*br,9,12,.4,0,T))
  c.strokeStyle=D;c.lineWidth=3.5;c.beginPath();c.arc(78,150+2*br,6,.15*PI,.85*PI);c.stroke()
}
