// a trefoil knot drawn as a thick rainbow ribbon with dark edges and true over-under crossings, parts passing underneath shaded darker, while a bright white glint races all the way along it
export const frames=48,delay=50
const{sin,cos,PI,hypot,max,min,abs,round}=Math,T=2*PI,N=480,S=31,W=19,
K=s=>[128+S*(sin(s)+2*sin(2*s)),128+S*(cos(s)-2*cos(2*s)+.47),-sin(3*s)],
Q=[...Array(N+1)].map((_,j)=>K(j/N*T)),
// unit normals (scaled to half width) at each sample
M=Q.slice(0,N).map((_,j)=>{const a=Q[(j+N-1)%N],b=Q[j+1],x=b[0]-a[0],y=b[1]-a[1],l=hypot(x,y);return[-y/l,x/l]}),
// arc length fraction of each sample, so the glints travel at an even speed
A=(()=>{const a=[0];for(let j=1;j<=N;j++)a.push(a[j-1]+hypot(Q[j][0]-Q[j-1][0],Q[j][1]-Q[j-1][1]));return a.map(v=>v/a[N])})(),
hsl=(h,s,l)=>{const f=n=>{const k=(n+h/30)%12;return l-s*min(l,1-l)*max(-1,min(k-3,9-k,1))};return[f(0),f(8),f(4)].map(v=>v*255)},
// find the crossings in 2D and keep the sample index of the strand on top
X=(()=>{const r=[]
 for(let i=0;i<N;i++)for(let j=i+4;j<N;j++){if(N-j+i<4)continue
  const[a,b,c,d]=[Q[i],Q[i+1],Q[j],Q[j+1]],e=(b[0]-a[0])*(d[1]-c[1])-(b[1]-a[1])*(d[0]-c[0])
  if(!e)continue
  const u=((c[0]-a[0])*(d[1]-c[1])-(c[1]-a[1])*(d[0]-c[0]))/e,v=((c[0]-a[0])*(b[1]-a[1])-(c[1]-a[1])*(b[0]-a[0]))/e
  if(u>=0&&u<1&&v>=0&&v<1)r.push(a[2]>c[2]?i:j)}
 return r})()
export default(c,t)=>{
 // glint: bright head at u=t with a fading tail behind it
 const col=(j,w)=>{const u=A[j],z=Q[j][2],
   d=((u-t)%1+1.5)%1-.5,g=d<0?max(0,1+d/.11):max(0,1-d/.025),
   b=hsl(u*360,.8,.56).map(v=>v*(.78+.22*z)).map(v=>v+(255-v)*w)
  return`rgb(${b.map(v=>round(v+(255-v)*g*g*(3-2*g)))})`},
  seg=(j0,j1,cap)=>{
   c.lineCap=cap,c.lineWidth=W+9,c.strokeStyle='#111',c.beginPath()
   for(let j=j0;j<=j1;j++)c.lineTo(...Q[(j+N)%N])
   c.stroke()
   // ribbon body, then a lighter sheen strip nudged up-left, each built from
   // per-sample quads (nudged 0.7px forward so they overlap without seams)
   for(const[h,w,o,x]of[[W/2,0,0,1],[2.6,.45,-3,3]])for(let j=j0-x;j<j1+x;j++){
    const k=(j+N)%N,a=Q[k],b=Q[k+1],m=M[k],n=M[(k+1)%N],
     p=(q,r,d,e)=>[q[0]+o+r[0]*h*d+r[1]*e,q[1]+o+r[1]*h*d-r[0]*e]
    c.fillStyle=col(k,w),c.beginPath()
    for(const v of[p(a,m,1,0),p(b,n,1,.7),p(b,n,-1,.7),p(a,m,-1,0)])c.lineTo(...v)
    c.fill()}}
 seg(0,N,'round')
 for(const j of X)seg(j-20,j+20,'butt')
}
