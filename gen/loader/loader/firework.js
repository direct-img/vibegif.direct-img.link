// firework burst: a gold-hearted orange core squeezes and pops into a gold ring, twelve orange dashes with gold tips and twelve short gold dashes shoot out, thinning and shrinking as they slow, while eight gold sparks spiral back in to build the next core
const{sin,cos,min,max,PI}=Math,T=2*PI
export const frames=40,delay=40
const cl=x=>min(1,max(0,x)),
  out=x=>1-(1-cl(x))**3,
  oBack=x=>(x=cl(x)-1,1+2.2*x*x*x+1.2*x*x),
  disc=(c,x,y,r,f)=>{c.fillStyle=f,c.beginPath(),c.arc(x,y,r,0,T),c.fill()},
  // n dashes from r0 to r0+R: launch at t0, fly for d, tail lags by g
  dashes=(c,t,n,a0,t0,d,r0,R,W,g,col,tip)=>{
    const p=cl((t-t0)/d),h=r0+R*out(p),e=r0+R*out((t-t0-g)/d),w=W*(1-p)**.55
    if(p<=0||w<1)return
    c.lineWidth=w,c.strokeStyle=col
    for(let k=0;k<n;k++){const a=a0+k*T/n,x=cos(a),y=sin(a)
      c.beginPath(),c.moveTo(e*x,e*y),c.lineTo(h*x,h*y),c.stroke()
      tip&&disc(c,h*x,h*y,w*.42,tip)}}
export default(c,t)=>{
  c.translate(128,128)
  dashes(c,t,12,-PI/2+PI/12,.03,.46,24,58,11,.08,'#f2b134')
  dashes(c,t,12,-PI/2,0,.52,26,82,16,.1,'#e27a4e','#ffd27a')
  // pop: the old core bursts into an expanding, thinning gold ring
  const u=t/.13
  if(u<1)c.lineWidth=22*(1-u)**1.5*min(1,u*8),c.strokeStyle='#f2b134',c.beginPath(),c.arc(0,0,28+32*out(u),0,T),c.stroke()
  // gathering sparks spiral in
  const q=cl((t-.3)/.56)
  if(q>0&&q<1)for(let k=0;k<8;k++){const a=k*T/8+1.6*(1-q),r=80*(1-q*q)
    disc(c,r*cos(a),r*sin(a),3+5*sin(PI*min(1,q*2.2)),'#f2b134')}
  // core: gone after the pop, regrows with a little overshoot, squeezes just before bursting
  const rc=u<1?32*(1-out(u*1.6)):32*oBack((t-.5)/.38)*(1-.14*sin(PI*cl((t-.88)/.12)))
  if(rc>1)disc(c,0,0,rc,'#e27a4e'),disc(c,0,0,rc*.62,'#ffc65a'),disc(c,0,0,rc*.26,'#fff3d0')
}
