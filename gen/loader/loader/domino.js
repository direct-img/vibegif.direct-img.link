// a ring of twelve ivory dominoes with black pips seen from above at an angle, a toppling wave runs clockwise round it with each domino leaning on the next, and behind the wave they spring back upright one by one
const{sin,cos,PI,asin,max,min,hypot}=Math,T=2*PI
export const frames=36,delay=50
const N=12,R=80,w=11,W=31,h=W/2,H=56,p=T*R/N,se=sin(.96),ce=cos(.96),a0=asin((p-w)/H)
// side view of one domino (pivot on its front bottom edge at s) and a separating axis test, to find how far it can lean on the next
const rot=(a,u,z)=>[u*cos(a)+z*sin(a),z*cos(a)-u*sin(a)]
const quad=(s,a)=>[[-w,0],[0,0],[0,H],[-w,H]].map(([u,z])=>{const[x,y]=rot(a,u,z);return[s+x,y]})
const sep=(A,B)=>{
  for(const Q of[A,B])for(let k=0;k<4;k++){
    const[x0,y0]=Q[k],[x1,y1]=Q[(k+1)%4],pr=S=>S.map(([x,y])=>x*(y1-y0)+y*(x0-x1))
    if(max(...pr(A))<=min(...pr(B))||max(...pr(B))<=min(...pr(A)))return 1
  }
}
const lean=b=>{
  const B=quad(p,b);let l=0,r=PI/2
  if(sep(quad(0,r),B))return r
  for(let k=0;k<22;k++){const m=(l+r)/2;sep(quad(0,m),B)?l=m:r=m}
  return l
}
let L=a0;for(let k=0;k<40;k++)L=lean(L)
// on its own a domino falls with gravity, later stands back up with a little overshoot
const back=x=>1+2.70158*(x-1)**3+1.70158*(x-1)**2
const own=t=>{const r=(t-.38)/.18;return min(a0*(t*N)**2,r<0?9:r<1?(L+.04)*(1-back(r)):0)}
const pips=[[],[[0,0]],[[-1,-1],[1,1]],[[-1,-1],[0,0],[1,1]],[[-1,-1],[1,-1],[-1,1],[1,1]],[[-1,-1],[1,-1],[0,0],[-1,1],[1,1]],[[-1,-1],[1,-1],[-1,0],[1,0],[-1,1],[1,1]]]
const tiles=[[6,1],[2,4],[3,3],[5,0],[1,2],[4,6],[0,3],[2,2],[6,5],[1,1],[3,0],[5,4]]
const Lt=[-.5,.45,.75].map(x=>x/hypot(-.5,.45,.75)),neg=n=>n.map(x=>-x)
const P=([x,y,z])=>[128+x,142+y*se-z*ce]
const shade=n=>{
  const s=Math.round((.5+.5*max(0,n[0]*Lt[0]+n[1]*Lt[1]+n[2]*Lt[2]))*4)/4,f=(a,b)=>Math.round(b+(a-b)*s)
  return`rgb(${f(247,150)},${f(241,136)},${f(228,112)})`
}
export default(c,t)=>{
  const o=[...Array(N)].map((_,k)=>own(((t-k/N)%1+1)%1)),a=o.slice()
  for(let r=0;r<3;r++)for(let k=N-1;k>=0;k--)a[k]=min(o[k],lean(a[(k+1)%N]))
  const ds=a.map((A,k)=>{
    const th=k*T/N,Tn=[-sin(th),cos(th),0],Rd=[cos(th),sin(th),0]
    const W3=(u,v,z)=>{const[x,y]=rot(A,u,z);return[R*cos(th)+(x+w/2)*Tn[0]+v*Rd[0],R*sin(th)+(x+w/2)*Tn[1]+v*Rd[1],y]}
    const nf=[Tn[0]*cos(A),Tn[1]*cos(A),-sin(A)],nt=[Tn[0]*sin(A),Tn[1]*sin(A),cos(A)],m=W3(-w/2,0,H/2)
    return{d:m[1]*ce+m[2]*se,W3,k,nf,nt,Rd}
  }).sort((x,y)=>x.d-y.d)
  c.lineWidth=3
  for(const{W3,k,nf,nt,Rd}of ds){
    const K=[...Array(8)].map((_,i)=>W3(i&4?0:-w,i&2?h:-h,i&1?H:0))
    for(const[q,n,u]of[[[4,6,7,5],nf,0],[[0,2,3,1],neg(nf),-w],[[1,3,7,5],nt],[[0,2,6,4],neg(nt)],[[2,3,7,6],Rd],[[0,1,5,4],neg(Rd)]]){
      const vis=n[1]*ce+n[2]*se
      if(vis<=0)continue
      c.fillStyle=shade(n);c.beginPath();q.forEach(j=>c.lineTo(...P(K[j])));c.closePath();c.fill();c.stroke()
      if(u==null||vis<.2)continue
      // the broad faces get a divider and pips
      c.fillStyle='#1d1a17';c.lineWidth=2.5
      c.beginPath();c.moveTo(...P(W3(u,6-h,H/2)));c.lineTo(...P(W3(u,h-6,H/2)));c.stroke()
      tiles[k].forEach((m,j)=>pips[m].forEach(([gx,gz])=>{
        const v=gx*W/4,z=(j?.75:.25)*H+gz*H*.12
        c.beginPath();for(let q=0;q<8;q++)c.lineTo(...P(W3(u,v+2.8*cos(q*PI/4),z+2.8*sin(q*PI/4))));c.fill()
      }))
      c.lineWidth=3
    }
  }
}
