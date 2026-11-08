// heartbeat monitor: a coral-red ECG line with a white sticker rim sweeps left to right drawing two beats with sharp pulse spikes, a bright glowing dot at the head, the old darker-red trace erased just ahead of it
const{sin,PI,floor,min,max}=Math,T=2*PI
export const frames=48,delay=40,rim=5
const X0=26,W=204,M=36,P=W+M,Y=150,GAP=34, // the head wraps through an off-screen margin M so the loop is seamless
  C=['#ff7262','#f4524f','#e03e48','#c93342'], // newest to oldest
  // one heartbeat, d px after its start: P bump, QRS spike, T bump
  Q=[[20,0],[24,9],[29,-82],[34,30],[39,0]],
  beat=d=>d<14?-9*sin(PI*d/14):d>=20&&d<39?Q.reduce((y,[x,v],i)=>i&&d>=Q[i-1][0]&&d<x?Q[i-1][1]+(v-Q[i-1][1])*(d-Q[i-1][0])/(x-Q[i-1][0]):y,0)
    :d>=48&&d<72?-15*sin(PI*(d-48)/24):0,
  f=x=>Y+beat(((x-X0-22)%102+102)%102) // two beats across the width
export default(c,t)=>{
  const h=X0-M/2+P*t
  c.lineWidth=8
  // walk the width, split into runs by age color, skipping the erased gap ahead of the head
  let run=-1
  for(let x=X0;x<=X0+W;x++){
    const a=((h-x)/P%1+1)%1,k=a>1-GAP/P?-1:min(3,floor(a*4.6))
    if(k!=run){if(run>=0)c.stroke();run=k;if(k>=0)c.strokeStyle=C[k],c.beginPath(),c.moveTo(x-1,f(x-1))}
    if(k>=0)c.lineTo(x,f(x))
  }
  if(run>=0)c.stroke()
  // head dot, shrinking away as it slips past either end
  const e=min(h-X0,X0+W-h),r=min(1,max(0,e/16+.35))
  if(e<-4)return
  const y=f(min(X0+W,max(X0,h)))
  c.fillStyle='#ff5a4c',c.beginPath(),c.arc(h,y,13*r,0,T),c.fill()
  c.fillStyle='#ffc4ba',c.beginPath(),c.arc(h-2*r,y-2*r,5*r,0,T),c.fill()
}
