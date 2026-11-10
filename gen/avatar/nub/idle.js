// round mint green avatar idling: a sleepy jelly ball with closed content eyes breathes slowly, lazily peeks one eye open to glance around, then drifts shut again
const{sin,cos,asin,atan2,abs,min,max,PI:P}=Math,
S=(a,b,x)=>(x=min(1,max(0,(x-a)/(b-a))),x*x*(3-2*x)),
M=(a,b,x)=>a+(b-a)*x,
B=(c,x,y,w,h,k,f)=>{
  c.save()
  c.translate(128+x,222+y);c.transform(w,0,-k,h,0,0);c.translate(0,-90)
  c.fillStyle='#1fbf9c';c.beginPath();c.arc(0,0,90,0,7);c.fill()
  c.save();c.clip()
  c.fillStyle='#12987e';c.beginPath();c.rect(-99,-99,198,198);c.arc(-14,-16,94,0,7);c.fill('evenodd')
  c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff';c.beginPath();c.ellipse(-44,-52,20,9,-.7,0,7);c.fill()
  c.globalAlpha=1;f();c.restore()
},
E=(c,u,x,y,o,z=1,g=1)=>{
  let k=asin(u/90),j=asin(2/15),a=k+x/90,b=y/90-j,w=M(13.365,6.5,o),v=M(10.9-4.09*g,6,o),
  A=(s,d)=>{
    s=abs(s)<.1?.1:s
    let r=(w*w+s*s)/2/s,q=atan2(r-s,w)
    c.arc(0,v+s-r,abs(r),d?P-q:q,d?q:P-q,d?s>0:s<0)
  }
  c.save();c.translate(90*sin(a),90*sin(b));c.scale(z*cos(a)/cos(k),z*cos(b)/cos(j))
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=9;c.beginPath()
  A(M(8.19*g,6.5,o));o>.01&&(A(M(8.19*g,-6.5,o),1),c.fill());c.stroke();c.restore()
}
export const frames=72,delay=50
export default(c,t)=>{
  let b=S(0,.45,t)-S(.5,.95,t),
  n=S(.39,.46,t)-S(.46,.51,t),
  o=S(.46,.52,t)-.45*S(.73,.78,t)-.55*S(.83,.9,t),
  L=t=>S(.5,.6,t)-1.8*S(.62,.72,t)+.8*S(.82,.95,t),
  u=S(.48,.58,t)-S(.82,.95,t),
  x=10*L(t),y=-2*b-3*u+2*n
  B(c,0,0,1-.015*b+.01*n,1+.04*b-.012*n,.03*L(t-.03),_=>{
    E(c,-30,x,y,0,1+.06*u)
    E(c,30,x,y,o,1-.1*n+.2*(S(.46,.51,t)-S(.51,.6,t)))
  })
}
