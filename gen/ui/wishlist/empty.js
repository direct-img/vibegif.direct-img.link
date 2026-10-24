// an empty wishlist heart drawn as a chunky dashed outline, gently breathing in and out
const{sin,cos,PI,hypot}=Math,T=2*PI
export const frames=16,delay=80
const P=[...Array(161)].map((_,k)=>{const s=k/160*T;return[16*sin(s)**3,-(13*cos(s)-5*cos(2*s)-2*cos(3*s)-cos(4*s))]})
const L=P.reduce((a,p,k)=>k?a+hypot(p[0]-P[k-1][0],p[1]-P[k-1][1]):0,0),D=L/12
export default(c,t)=>{
  const s=6.1*(1+.06*sin(t*T))
  c.translate(128,114);c.scale(s,s*(1-.02*sin(t*T)))
  c.setLineDash([D*.46,D*.54]);c.lineDashOffset=D*.73
  for(const[w,k]of[[22,'#111'],[10,'#fff']]){c.lineWidth=w/s;c.strokeStyle=k;c.beginPath();for(const[x,y]of P)c.lineTo(x,y);c.stroke()}
}
