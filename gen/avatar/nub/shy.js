// round mint green avatar being shy: a bashful jelly ball blushes with pink cheeks, shrinks and turns its face away, sneaks one peek back, then hides again and relaxes
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
},
C=(c,u,x,y,s)=>{
  let a=asin(u/90)+x/90,b=y/90+.16
  c.save();c.translate(90*sin(a),90*sin(b));c.scale(s*cos(a)/.84,s*cos(b))
  c.fillStyle='#ff7eb6';c.beginPath();c.ellipse(0,0,14,8,0,0,7);c.fill();c.restore()
}
export const frames=72,delay=50
export default(c,t)=>{
  let A=t=>S(.08,.26,t)-S(.78,.91,t),
  a=A(t),e=A(t-.03),
  k=S(.46,.53,t)-S(.6,.64,t),
  d=S(.6,.66,t)-S(.78,.9,t),
  o=S(.47,.52,t)-S(.59,.62,t),
  w=a*sin(10*P*t)*(1-k),
  r=1-.09*e-.04*d+.02*k,
  x=-24*a+11*k-5*d+2*w,y=7*a-3*k+3*d,
  b=S(.1,.24,t)-S(.8,.93,t)+.25*d,
  v=sin(P*S(.85,1,t))*sin(40*(t-.85))
  B(c,-5*e-2*d,0,r*(1+.02*e-.01*v),r*(1-.03*e+.022*v),-.035*e+.012*w+.012*v,_=>{
    c.rotate(-.06*e)
    C(c,-48,x,y,b);C(c,48,x,y,b)
    E(c,-30,x,y,0,1,1+.15*d)
    E(c,30,x,y,.8*o,1,1+.15*d)
  })
}
