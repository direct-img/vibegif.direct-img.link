// golden sun disc with a terracotta outline and twelve tapered wavy orange rays that turn slowly while a ripple runs outward along each ray
const{sin,cos,atan2,PI}=Math,T=2*PI
export const frames=28,delay=50
export default(c,t)=>{
  const w=T*t,n=16,L=[],R=[]
  c.translate(128,128),c.rotate(w/12)
  // one tapered ray: wave travels outward, pinned at the root
  const y=s=>8*s**.7*sin(T*1.1*s-w)
  for(let k=0;k<=n;k++){
    const s=k/n,x=56+46*s,a=atan2(y(s+.01)-y(s),.46)+PI/2,h=7.5-5*s
    L.push([x+h*cos(a),y(s)+h*sin(a)]),R.unshift([x-h*cos(a),y(s)-h*sin(a)])
  }
  const P=[...L,...R]
  c.fillStyle='#e8875f',c.beginPath()
  for(let j=0;j<12;j++){
    const b=j*T/12,cb=cos(b),sb=sin(b)
    P.forEach(([x,y],k)=>c[k?'lineTo':'moveTo'](x*cb-y*sb,x*sb+y*cb))
    c.closePath()
  }
  c.fill()
  c.lineWidth=7,c.strokeStyle='#c15f3c',c.fillStyle='#f6c453'
  c.beginPath(),c.arc(0,0,48,0,T),c.fill(),c.stroke()
  c.fillStyle='#f2a541',c.beginPath(),c.arc(0,0,33,0,T),c.fill()
}
