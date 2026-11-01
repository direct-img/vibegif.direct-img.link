// emoticon facepalm, a mitten hand slaps over the eyes then slowly drags down the face, pulling the features with it
export const frames=40,delay=62
const P=Math.PI,{sin,cos,max,min,abs}=Math,K='#111',G='#9a9a9a'
const cl=x=>max(0,min(1,x)),ez=x=>(x=cl(x),x*x*(3-2*x))
const lerp=(a,b,k)=>a+(b-a)*k
// mitten hand, fingers up, thumb out to the left; outline strokes first so the two shapes merge
const mitten=(c,x,y,a,z)=>{
  c.save();c.translate(x,y);c.rotate(a);c.scale(z,z)
  const S=[()=>c.ellipse(0,0,46,52,0,0,2*P),()=>c.ellipse(-44,14,14,24,-.45,0,2*P)]
  for(const f of S){c.beginPath();f();c.lineWidth=8/z;c.strokeStyle=K;c.stroke()}
  for(const f of S){c.beginPath();f();c.fillStyle='#fff';c.fill()}
  c.lineWidth=5/z;c.beginPath()
  for(const d of[-16,0,16]){c.moveTo(d,-51+abs(d)*.2);c.lineTo(d,-32)}
  c.moveTo(-33,-4);c.quadraticCurveTo(-28,14,-35,30)
  c.stroke();c.restore()
}
// hand keyframes: [t, x, y, angle, scale]
const KF=[[0,66,68,.45,.78],[.08,66,68,.45,.78],[.15,76,0,.25,.9],[.2,4,-28,-.1,1],[.36,4,-25,-.1,1],[.8,6,56,-.04,1],[.9,66,68,.45,.78],[1,66,68,.45,.78]]
export default(c,t)=>{
  let k=0;while(t>=KF[k+1][0])k++
  const[A,B]=[KF[k],KF[k+1]],u=(t-A[0])/(B[0]-A[0]),e=k==2?u*u:k==4?ez(u)**1.1:ez(u)
  const[hx,hy,ha,hz]=[1,2,3,4].map(i=>lerp(A[i],B[i],e))
  const imp=t<.195?0:max(0,1-(t-.195)/.07),dr=ez((t-.42)/.2)*(1-ez((t-.8)/.06)),
    mo=ez((t-.56)/.18)*(1-ez((t-.8)/.06)),bo=t>.86?sin((t-.86)/.14*P*2)*(1-(t-.86)/.14)*4:0
  c.translate(128,124+3*imp+4*dr)
  c.rotate(-.08*imp)
  // head, stretched long while the hand drags the face down
  c.beginPath();c.ellipse(0,4*dr,96+3*imp-2*dr,96-4*imp+5*dr+bo,0,0,2*P)
  c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=K;c.stroke()
  // brows: flat and fed up, sagging at the ends as the face is pulled
  c.lineWidth=9
  for(const s of[-1,1]){c.beginPath();c.moveTo(s*60,-46+12*dr);c.lineTo(s*18,-50+2*dr-6*imp);c.stroke()}
  // eyes: deadpan half-lids, drooping at the outer corners as they're dragged down
  for(const s of[-1,1]){
    c.save();c.translate(s*36,-16+8*dr+bo*.5);c.rotate(s*.4*dr)
    c.beginPath();c.moveTo(-16,0);c.lineTo(16,0);c.ellipse(0,0,16,14+5*dr,0,0,P);c.closePath();c.fillStyle=K;c.fill()
    c.beginPath();c.arc(-4,6,3.5,0,2*P);c.fillStyle='#fff';c.fill();c.restore()
  }
  // mouth: flat "ugh" line, a sour frown under the slap, pulled open into a long slack oval by the drag
  c.fillStyle=K
  if(mo>.08){c.beginPath();c.ellipse(0,48+12*mo,20-6*mo,4+22*mo,0,0,2*P);c.fill()}
  else{
    const hd=ez((t-.17)/.06)*(1-ez((t-.5)/.08))
    c.beginPath();c.moveTo(-24,51+bo);c.quadraticCurveTo(0,48-16*hd+bo,24,47+bo);c.lineWidth=9;c.stroke()
  }
  c.setTransform(1,0,0,1,0,0)
  // impact lines from the slap
  if(imp>.2){c.lineWidth=5;c.strokeStyle=G
    for(const a of[-1.1,-.6,-.1]){const d=76+16*(1-imp);c.beginPath();c.moveTo(136+cos(a)*d,94+sin(a)*d);c.lineTo(136+cos(a)*(d+18*imp),94+sin(a)*(d+18*imp));c.stroke()}}
  mitten(c,128+hx,124+hy,ha,hz)
}
