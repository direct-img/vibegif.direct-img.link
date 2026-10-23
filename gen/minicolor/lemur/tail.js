// ring-tailed lemur sitting with big amber eyes, its long striped tail curling and uncurling over its head, blinks
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=85
const B='#8a94a6',L='#e2e6ed',A='#3d4352',Y='#f4c03e',D='#2b2633'
export default(c,t)=>{
  const s=sin(T*t),bl=t>.62&&t<.68
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  let x=140,y=200,a=0;const K=3.7+.55*s,n=40,Ls=215,pts=[[x,y]]
  for(let i=1;i<=n;i++){const u=i/n;a=-.3+.08*s-K*u**1.6;x+=Ls/n*cos(a);y+=Ls/n*sin(a);pts.push([x,y])}
  const tail=()=>{c.moveTo(...pts[0]);for(const p of pts)c.lineTo(...p)}
  c.strokeStyle=L;c.lineWidth=20;c.beginPath();tail();c.stroke()
  c.lineCap='butt';c.setLineDash([12,12]);c.lineDashOffset=-14;c.strokeStyle=A;c.beginPath();tail();c.stroke();c.setLineDash([]);c.lineCap='round'
  for(const d of[-1,1])fill(B,()=>c.ellipse(108+d*16,212,14,7,0,0,T))
  fill(B,()=>c.ellipse(108,170,36,42,0,0,T))
  fill(L,()=>c.ellipse(108,178,20,28,0,0,T))
  for(const d of[-1,1])fill(B,()=>c.ellipse(108+d*20,190,8,14,-d*.3,0,T))
  for(const d of[-1,1])fill(B,()=>{c.moveTo(108+d*14,80);c.lineTo(108+d*32,52);c.lineTo(108+d*36,84);c.closePath()})
  fill(B,()=>c.arc(108,100,30,0,T))
  fill(L,()=>{c.moveTo(80,98);c.quadraticCurveTo(108,82,136,98);c.quadraticCurveTo(128,128,108,142);c.quadraticCurveTo(88,128,80,98)})
  fill(A,()=>c.ellipse(108,140,6,5,0,0,T))
  for(const d of[-1,1]){
    fill(A,()=>{c.moveTo(108+d*4,94);c.quadraticCurveTo(108+d*22,82,108+d*24,104);c.quadraticCurveTo(108+d*14,114,108+d*6,108);c.closePath()})
    if(bl)c.strokeStyle=Y,c.lineWidth=3.5,c.beginPath(),c.arc(108+d*14,98,6,.15*PI,.85*PI),c.stroke()
    else fill(Y,()=>c.arc(108+d*14,100,5.5,0,T)),c.fillStyle=D,c.beginPath(),c.arc(108+d*14,100,3,0,T),c.fill()
  }
}
