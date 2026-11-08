// donut of chunky outlined dots wobbling like a spinning coin while the dots stream round the ring, near dots big and warm red, orange and yellow, far dots small and cool teal, blue and violet
const{sin,cos,PI}=Math,T=2*PI
export const frames=48,delay=40
const N=18,M=8,R=1,r=.4
// warm (near) to cool (far), stepped
const C=['#4b3fae','#3d63d6','#2f9bd9','#3cc9b0','#9bd65a','#f2c53d','#f78b2d','#f0532e']
const Q=c=>{
  const d=c.getImageData(0,0,256,256),D=d.data
  for(let k=0;k<D.length;k+=4)if(D[k+3]){
    D[k+3]=D[k+3]<64?0:D[k+3]<192?128:255
    for(let j=k;j<k+3;j++)D[j]=Math.min(255,D[j]+16&~31)
  }
  c.putImageData(d,0,0)
}
export default(c,t)=>{
  // tilted donut whose axis precesses round the view axis (like a wobbling coin) while spinning on itself
  const a=T*t/3,b=.72,p=-T*t,cb=cos(b),sb=sin(b),cp=cos(p),sp=sin(p),P=[]
  for(let i=0;i<N;i++)for(let j=0;j<M;j++){
    const u=T*i/N+a,v=T*j/M+(i%2)*PI/M,q=R+r*cos(v)
    let x=q*cos(u),y=q*sin(u),z=r*sin(v)
    ;[y,z]=[y*cb-z*sb,y*sb+z*cb];[x,y]=[x*cp-y*sp,x*sp+y*cp]
    P.push([x,y,z])
  }
  P.sort((p,q)=>p[2]-q[2]).forEach(([x,y,z])=>{
    const f=5/(5-z),k=Math.max(0,Math.min(.999,(z+1.1)/2.2))
    c.beginPath();c.arc(128+x*f*58,128+y*f*58,f*(3.6+4.6*k),0,T)
    c.fillStyle=C[k*8|0];c.fill()
    c.lineWidth=2.5;c.stroke()
  })
  Q(c)
}
