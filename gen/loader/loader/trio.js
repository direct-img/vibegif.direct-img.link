// a coral circle, a yellow triangle and a blue square with dark outlines sit at the corners of a triangle and swing round to the next corner in eased hops, rounding their corners, spinning and stretching as they travel
export const frames=48,delay=40
const{sin,cos,tan,PI,max,min,atan2,hypot,floor}=Math,T=2*PI,
cl=x=>max(0,min(1,x)),
// ease in-out with a touch of anticipation and overshoot
E=s=>{const k=1.2;return s<.5?(2*s)**2*((k+1)*2*s-k)/2:((2*s-2)**2*((k+1)*(2*s-2)+k)+2)/2},
S=[[0,31,'#ff6b6b'],[3,42,'#ffc23d'],[4,37,'#4d8dff']],
pos=(s,t)=>{const g=3*t,k=floor(g),u=g-k,l=cl((u-.1-s*.035)/.6),p=E(l),
  a=-PI/2+(s+k+p)*T/3,r=58+10*sin(PI*l);return[128+r*cos(a),134+r*sin(a),k+p,l]}
export default(c,t)=>{
 S.forEach(([n,R,col],s)=>{
  const[x,y,q,l]=pos(s,t),[x0,y0]=pos(s,t-.003),[x1,y1]=pos(s,t+.003),
   v=min(1,hypot(x1-x0,y1-y0)/4),d=atan2(y1-y0,x1-x0),m=sin(PI*l)
  c.save(),c.translate(x,y),c.rotate(d),c.scale(1+.13*v,1-.1*v),c.rotate(-d)
  c.beginPath()
  if(!n)c.arc(0,0,R,0,T)
  else{
   // regular polygon whose corner radius grows mid-flight (rounder and a bit puffier)
   const Rr=R*(1+.12*m),rc=Rr*cos(PI/n)*(.12+.5*m),sp=q*T/n+(n>3)*PI/4,
    V=[...Array(n)].map((_,j)=>{const a=sp-PI/2+j*T/n;return[Rr*cos(a),Rr*sin(a)]}),
    M=V.map((p,j)=>p.map((v,k)=>(v+V[(j+1)%n][k])/2))
   c.moveTo(...M[n-1])
   V.forEach((p,j)=>c.arcTo(...p,...M[j],rc))
   c.closePath()}
  c.restore()
  c.fillStyle=col,c.fill(),c.lineWidth=7,c.stroke()
 })
}
