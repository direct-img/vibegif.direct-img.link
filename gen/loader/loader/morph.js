// one solid blob with an amber-top to terracotta-bottom gradient fill, slowly turning while its outline morphs from a soft circle to a 4-point star, a 6-point star, an 8-point spark and back to the circle
const{sin,cos,abs,min,max,PI}=Math,T=2*PI
export const frames=40,delay=60
const ss=x=>(x=min(1,max(0,x)),x*x*x*(x*(6*x-15)+10)),
  // stage keys: [time, stage]; stage 0 circle, 1 four, 2 six, 3 eight, 4 circle again
  K=[[0,0],[.04,0],[.19,1],[.28,1],[.43,2],[.51,2],[.66,3],[.75,3],[.93,4],[1,4]],
  S=[[0],[4,34,1.7],[6,42,1.5],[8,48,1.35],[0]],
  // radius offset from the 72px circle for stage j at angle a
  dev=(j,a)=>{const[n,v,p]=S[j];return n?v-72+(104-v)*(1-abs(sin(n*a/2)))**p:0}
export default(c,t)=>{
  let k=0;t%=1
  while(K[k+1][0]<=t)k++
  const[t0,s0]=K[k],[t1,s1]=K[k+1],u=s0==s1?0:(t-t0)/(t1-t0),
    // old points retract before the new ones push out, so the middle passes a soft round shape
    ao=1-ss(s1%4?u/.6:u),an=ss(s0%4?(u-.4)/.6:u)
  c.translate(128,128)
  const g=c.createLinearGradient(0,-104,0,104)
  g.addColorStop(0,'#f7b85e'),g.addColorStop(.5,'#e8875f'),g.addColorStop(1,'#bd5536')
  c.fillStyle=g,c.beginPath()
  for(let i=0;i<720;i++){const a=i*T/720,b=a-PI*t,r=72+ao*dev(s0,b)+an*dev(s1,b)
    c.lineTo(r*cos(a),r*sin(a))}
  c.fill()
}
