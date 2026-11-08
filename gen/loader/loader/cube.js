// a blue 3D cube with dark outlines and lit top, light left and shaded right faces crouches, hops a quarter turn about its vertical axis, lands with a squash and a little twist overshoot, then rests
export const frames=34,delay=[...Array(34)].map((_,i)=>i>27?60:40)
const{sin,cos,PI,max,min,hypot,exp}=Math,
cl=x=>max(0,min(1,x)),
bump=(t,a,b)=>t>a&&t<b?sin(PI*(t-a)/(b-a))**2:0,
// eased turn with a damped twist past the target
turn=p=>p<.6?(p/=.6,p*p*(3-2*p))*1.06:1+.06*exp(-6*(p-.6))*cos(9*(p-.6)),
// cube faces, each listed counter-clockwise seen from outside
F=[[0,1],[0,-1],[1,1],[1,-1],[2,1],[2,-1]].map(([a,s])=>{const u=(a+1)%3,v=(a+2)%3
 return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([p,q])=>{const r=[0,0,0];r[a]=s,r[u]=p*s,r[v]=q;return r})}),
L=[-.55,.75,.45],ln=hypot(...L),
B=[90,150,255],W=[255,255,255],D=[22,30,70],
col=k=>`rgb(${(k<1?D.map((d,j)=>d+(B[j]-d)*k):B.map((b,j)=>b+(W[j]-b)*(k-1))).map(v=>v|0)})`
export default(c,t)=>{
 const p=cl((t-.14)/.62),th=PI/4+PI/2*turn(p),
  air=cl((t-.16)/.42),h=sin(PI*air)*30,
  // squash before take-off and on landing, stretch while rising
  sq=-.16*bump(t,0,.2)+.1*bump(t,.13,.4)-.17*bump(t,.55,.8)+.04*bump(t,.74,.94),
  sy=1+sq,sx=1-sq*.55,
  ct=cos(th),st=sin(th),ph=.52,cp=cos(ph),sp=sin(ph),S=50,
  X=([x,y,z])=>{x*=sx,z*=sx,y=(y+1)*sy-1+h/S
   const x1=x*ct+z*st,z1=-x*st+z*ct,y2=y*cp-z1*sp,z2=y*sp+z1*cp,f=7/(7-z2)
   return[[128+x1*S*f,132-y2*S*f],[x1,y2,z2]]}
 c.lineWidth=7
 for(const q of F){const P=q.map(X),s=P.map(v=>v[0])
  let a=0;for(let j=0;j<4;j++){const[x0,y0]=s[j],[x1,y1]=s[(j+1)%4];a+=x0*y1-x1*y0}
  if(a>=0)continue
  // lambert shade from the rotated normal
  const[A,B2,C]=P.map(v=>v[1]),u=A.map((v,j)=>B2[j]-v),w=A.map((v,j)=>C[j]-v),
   n=[u[1]*w[2]-u[2]*w[1],u[2]*w[0]-u[0]*w[2],u[0]*w[1]-u[1]*w[0]],nl=hypot(...n),
   k=.42+.78*max(0,n.reduce((m,v,j)=>m+v*L[j],0)/nl/ln)
  const g=sc=>{c.beginPath();const m=s.reduce((m,v)=>[m[0]+v[0]/4,m[1]+v[1]/4],[0,0])
   s.forEach(([x,y],j)=>c[j?'lineTo':'moveTo'](m[0]+(x-m[0])*sc,m[1]+(y-m[1])*sc));c.closePath()}
  g(1),c.fillStyle=col(k),c.fill()
  g(.62),c.fillStyle=col(k+.13),c.fill()
  g(1),c.stroke()
 }
}
