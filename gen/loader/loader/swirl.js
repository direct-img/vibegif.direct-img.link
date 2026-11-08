// three fat comma teardrops in terracotta, orange and amber with dark outlines chase each other round the center, speeding up, swelling and curling their tails outward until they lock together into a nearly solid swirled disc, then easing apart
const{sin,cos,PI}=Math,T=2*PI
const N=32,b=.4,
  // frames bunch up where the swirl is fast: frame i shows time tau(i/N), held for its share of the loop
  tau=t=>{let u=t;for(let k=0;k<8;k++)u-=(u-b*sin(T*u)/T-t)/(1-b*cos(T*u));return u}
export const frames=N,delay=[...Array(N)].map((_,i)=>10*Math.round((tau((i+1)/N)-tau(i/N))*192))
const C=['#c15f3c','#e8875f','#f2a541'],a=.85
export default(c,t)=>{
  const w=T*tau(t),
    v=(1-a*cos(w))/(1+a),             // speed, 0 slow .. 1 fast
    ph=w-a*sin(w),                       // angle: integral of the speed
    R=60-20*v,h=22+12*v,L=1.2+.95*v,d=10+30*v
  c.translate(128,128)
  const tail=j=>{
    const b=ph+j*T/3,o=[],n=[]
    for(let k=0;k<=24;k++){
      const s=k/24,an=b-L*s,r=R+d*s,hw=h*(.12+.88*(1-s)**1.4)
      o.push([r+hw,an]),n.unshift([r-hw,an])
    }
    c.beginPath()
    for(const[r,an]of[...o,...n])c.lineTo(r*cos(an),r*sin(an))
    c.closePath()
  },
  head=j=>{
    const b=ph+j*T/3
    c.beginPath(),c.arc(R*cos(b),R*sin(b),h,0,T)
  }
  // silhouette outline, then tails, then heads, so overlaps stay symmetric
  c.strokeStyle="#4a1f12",c.lineWidth=12
  for(let j=0;j<3;j++)tail(j),c.stroke(),head(j),c.stroke()
  c.lineWidth=4
  for(let j=0;j<3;j++)tail(j),c.fillStyle=C[j],c.fill(),c.stroke()
  for(let j=0;j<3;j++){
    head(j),c.fillStyle=C[j],c.fill()
    // re-stroke only the leading half of the head so it blends into its tail
    const b=ph+j*T/3
    c.beginPath(),c.arc(R*cos(b),R*sin(b),h,b-PI/2,b+PI/2),c.stroke()
  }
}
