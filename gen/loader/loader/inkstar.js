// black ink brush-stroke star with a white sticker rim: ten tapered, slightly curved strokes round an ink dot get flicked out one by one clockwise, then thin away in the same order, so a gap of missing strokes chases round the circle
const{sin,cos,atan2,min,max,PI}=Math,T=2*PI,N=10,M=7
export const frames=50,delay=40,rim=6
const cl=x=>min(1,max(0,x)),
  out=x=>1-(1-cl(x))**2.2,
  io=x=>(x=cl(x),x*x*(3-2*x)),
  // brush stroke along a bent spine from r0 to r1: painted up to fraction p, width scaled by z
  brush=(c,p,z,k)=>{const r0=32,r1=106,m=(r0+r1)/2,q=.08*(r1-r0),L=[],R=[],
    W=s=>z*8.5*(1-s)**1.1*(.7+.3*sin(PI/2*min(1,s/.25)))*(1+.07*sin(29*s+k)),
    at=s=>{const n=1-s;return[n*n*r0+2*n*s*m+s*s*r1,2*n*s*q,atan2(2*(n-s)*q,2*n*(m-r0)+2*s*(r1-m))]}
    for(let j=0;j<=20;j++){const s=p*j/20,[x,y,a]=at(s),w=W(s)
      L.push([x-w*sin(a),y+w*cos(a)]),R.unshift([x+w*sin(a),y-w*cos(a)])}
    c.beginPath(),[...L,...R].map(([x,y])=>c.lineTo(x,y)),c.fill()
    // round ends: the brush press at the start and the wet front while painting
    for(const s of[0,p])if(s<1){const[x,y]=at(s);c.beginPath(),c.arc(x,y,W(s),0,T),c.fill()}}
export default(c,t)=>{
  c.translate(128,128),c.fillStyle='#141414'
  for(let k=0;k<N;k++){
    // u: slots since this stroke's turn to be painted came round
    const u=((t-k/N)%1+1)%1*N,p=out(u/1.4),e=io((u-M)/1.6)
    if(p<.02||e>.9)continue
    c.save(),c.rotate(k*T/N-PI/2),brush(c,p*(1-.35*e),(1-e)**.8,k),c.restore()
  }
  c.beginPath(),c.arc(0,0,16,0,T),c.fill()
}
