// pangolin trundling, then curling up into a scaly ball that rocks, then unrolling again
const{sin,cos,PI,max,min,atan2}=Math,T=2*PI
export const frames=32,delay=70
const B='#c9a27e',A='#97734f',D='#2b2633'
const cl=x=>max(0,min(1,x)),ease=x=>(x=cl(x),x*x*(3-2*x))
const N=56,Ls=208,W=s=>s<.32?6+25*(s/.32)**.6:31-23*(s-.32)/.68
export default(c,t)=>{
  const r=ease((t-.06)/.26)-ease((t-.62)/.26),rock=.22*sin(T*cl((t-.3)/.34))*r
  const turn=.9+r*(T*1.06-.9),a0=PI+.42+rock+.6*r
  let x=0,y=0;const P=[[0,0,a0]]
  for(let i=1;i<=N;i++){const a=a0-turn*i/N;x+=Ls/N*cos(a);y+=Ls/N*sin(a);P.push([x,y,a])}
  let x0=1e9,x1=-1e9,y1=-1e9
  P.forEach(([px,py],i)=>{const w=W(i/N);x0=min(x0,px-w);x1=max(x1,px+w);y1=max(y1,py+w)})
  const ox=128-(x0+x1)/2,oy=(1-r)*(196-y1)+r*(206-y1),wk=(1-r)*sin(T*t*3)
  c.translate(ox,oy)
  c.fillStyle=c.strokeStyle=B
  if(r<.45)for(const[k,f]of[[.3,1],[.66,-1]]){
    const[px,py]=P[Math.round(k*N)],l=(1-r/.45)*(18+2*f*wk)
    c.lineWidth=12;c.beginPath();c.moveTo(px,py);c.lineTo(px+f*2*wk,py+W(k)+l-4);c.stroke()
  }
  P.forEach(([px,py],i)=>{c.beginPath();c.arc(px,py,W(i/N),0,T);c.fill()})
  const f=ease((r-.7)/.3);if(f>0){let mx=0,my=0;for(const[px,py]of P)mx+=px/P.length,my+=py/P.length;c.beginPath();c.arc(mx,my,Ls/turn*f,0,T);c.fill()}
  c.strokeStyle=A;c.lineWidth=3.5
  for(let s=.13;s<.96;s+=.07)for(const j of[0,1]){
    const q=s+j*.035,i=Math.round(q*N),[px,py,a]=P[i],w=W(q),dx=cos(a),dy=sin(a),nx=-dy,ny=dx,o=w*(.62-.5*j),rr=w*.42
    const cx=px+nx*o-dx*rr*.3,cy=py+ny*o-dy*rr*.3
    c.beginPath();c.arc(cx,cy,rr,a-1.25,a+1.25);c.stroke()
  }
  if(r<.6){const[px,py,a]=P[Math.round(.07*N)];c.fillStyle=D;c.beginPath();c.arc(px-sin(a)*3,py+cos(a)*3-4,3.5,0,T);c.fill()}
}
