// round mint green avatar getting squished: a coral finger pokes a sleepy jelly ball flat from above, one eye peeks up at it, then it springs back and wobbles until it settles
const{sin,cos,asin,atan2,abs,exp,min,max,PI:P}=Math,
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
H=t=>{
  let u=t-.42
  return u<0?1-.42*S(.12,.24,t)+.035*sin(P*S(.27,.34,t))+.035*sin(P*S(.34,.41,t))
  :1-(.37*exp(-12.5*u)+.05*exp(-4.5*u))*cos(42*u)*(1-S(.86,.97,t))
}
export const frames=72,delay=50
export default(c,t)=>{
  let h=H(t),u=max(0,t-.42),
  o=S(.26,.3,t)-S(.4,.44,t),
  q=S(.12,.2,t)-S(.42,.5,t),
  y=30*(H(t-.03)-h)-9*o,
  f=S(.02,.09,t)-S(.42,.47,t)
  B(c,0,0,h**-.5,h,.045*exp(-6*u)*sin(31*u)*(u>0)*(1-S(.86,.97,t)),_=>{
    c.scale(h**.2,h**-.3)
    E(c,-30,0,y,0,1+.08*q,1-.5*q)
    E(c,30,0,y,o,1+.08*q+.15*(S(.26,.29,t)-S(.29,.36,t)),1-.5*q)
  })
  if(f>0){
    c.strokeStyle='#ff5d4a';c.lineWidth=30*f
    c.beginPath();c.moveTo(128,24)
    c.lineTo(128,M(M(24.1,212-180*min(h,1),S(.08,.12,t)),24.1,S(.41,.46,t)));c.stroke()
  }
}
