// round mint green avatar thinking: a sleepy jelly ball sways with an unhurried hmm, one eye open and drifting upward while three violet thought dots bubble up beside it
const{sin,cos,asin,atan2,abs,min,max,PI:P}=Math,
S=(a,b,x)=>(x=min(1,max(0,(x-a)/(b-a))),x*x*(3-2*x)),
M=(a,b,x)=>a+(b-a)*x,
O=x=>(x=min(1,max(0,x))-1,max(0,1+2.7*x*x*x+1.7*x*x)),
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
  let A=t=>S(.08,.26,t)-S(.74,.9,t),
  a=A(t),e=A(t-.035),
  n=S(.02,.09,t)-S(.09,.17,t),
  d=S(.2,.66,t)-S(.72,.88,t),
  o=(S(.12,.19,t)-S(.72,.81,t))*(1-S(.47,.49,t)+S(.51,.55,t)),
  v=sin(P*S(.85,1,t))*sin(40*(t-.85)),
  s=sin(4*P*t-1),
  x=13*a+5*d+3*a*s,y=-4*a-17*d+2*n
  B(c,-5*e,0,1+.014*n-.006*v,1-.025*n+.012*d+.012*v,-.045*e+.028*e*s+.016*v,_=>{
    c.rotate(.07*e)
    E(c,-30,x,y,0,1,1-.7*a)
    E(c,30,x,y,o,1+.2*(S(.12,.17,t)-S(.17,.26,t)))
  })
  c.fillStyle='#7a5cff'
  for(let i=0;i<3;i++){
    let r=(7+3.2*i)*O((t-.24-.08*i)/.1)*(1-S(.66+.04*i,.73+.04*i,t))
    c.beginPath();c.arc(196+17.5*i,65-19.5*i+2.5*sin(6*P*t-1.3*i),r,0,7);c.fill()
  }
}
