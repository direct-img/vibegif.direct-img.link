// a drop falls into an 11x11 grid of chunky dots seen in perspective and a circular ripple rolls out across it like a pond, dots shade from teal in the troughs to violet on the crests
const{sin,cos,exp,PI,max,min,round,hypot}=Math,T=2*PI
export const frames=48,delay=50
const N=5,C=['#127a80','#159a96','#22b5a8','#3fa6d6','#5a86e8','#7468ea','#9256e0','#ad48d6']
const t0=.16,ct=cos(.85),st=sin(.85)
const Q=c=>{
  const d=c.getImageData(0,0,256,256),D=d.data
  for(let k=0;k<D.length;k+=4)if(D[k+3]){
    D[k+3]=D[k+3]<64?0:D[k+3]<192?128:255
    for(let j=k;j<k+3;j++)D[j]=min(255,D[j]+8&~15)
  }
  c.putImageData(d,0,0)
}
// world (x across, y up, z toward viewer) to screen
const P=(x,y,z)=>{
  const Y=y*ct-z*st,Z=y*st+z*ct,f=15/(15-Z)
  return[128+x*f*15.5,124-Y*f*15.5,f,Z]
}
export default(c,t)=>{
  const u=t-t0,g=u>0?1-(u/(1-t0))**2:0,H=[]
  for(let i=-N;i<=N;i++)for(let j=-N;j<=N;j++){
    // damped wave behind an outgoing front, fading over the loop
    const r=hypot(i,j),s=11.5*u-r,y=u>0&&s>0?2.7*g*sin(1.6*s)*exp(-s/3.6)*min(1,s):0
    H.push([i,y,j])
  }
  H.sort((a,b)=>a[2]-b[2]).forEach(([x,y,z])=>{
    const[X,Y,f]=P(x,y,z),k=max(0,min(7,round(3+y*2)))
    c.beginPath();c.arc(X,Y,f*(5.6+y*.7),0,T);c.fillStyle=C[k];c.fill();c.lineWidth=2;c.stroke()
  })
  // the drop: grows in above the centre, falls with gravity, gone on impact
  if(t<t0){
    const a=t/t0,[X,Y,f]=P(0,5*(1-a*a)+.6,0),R=f*8.5*min(1,a*4)
    if(R>1){
      c.beginPath();c.moveTo(X,Y-R*2.1);c.bezierCurveTo(X+R*.5,Y-R*1.2,X+R,Y-R*.6,X+R,Y)
      c.arc(X,Y,R,0,PI);c.bezierCurveTo(X-R,Y-R*.6,X-R*.5,Y-R*1.2,X,Y-R*2.1)
      c.fillStyle='#ad48d6';c.fill();c.lineWidth=3;c.stroke()
    }
  }
  Q(c)
}
