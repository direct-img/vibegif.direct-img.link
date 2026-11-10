// round mint green avatar listening: a sleepy jelly ball tilts toward blue sound waves coming from the upper right, opens both eyes softly and nods along
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
N=t=>[.34,.51,.68].reduce((s,a)=>s+exp(-(((t-a)/.035)**2)),0)
export const frames=72,delay=50
export default(c,t)=>{
  let A=t=>S(.1,.25,t)-S(.76,.9,t),
  a=A(t),e=A(t-.035),
  k=S(.08,.15,t)-S(.15,.3,t),
  b=.9*(1-S(.555,.575,t)+S(.595,.635,t)),
  n=N(t),j=N(t-.02),
  v=sin(P*S(.85,1,t))*sin(40*(t-.85)),
  x=12*a,y=-7*a+5*n-3*k
  B(c,-3*e,0,1-.016*k-.005*a+.012*j-.006*v,1+.035*k+.01*a-.022*j+.012*v,.045*e-.016*v,_=>{
    c.rotate(.17*e)
    E(c,-30,x,y,b*(S(.16,.27,t)-S(.72,.82,t)),1+.06*a)
    E(c,30,x,y,b*(S(.12,.22,t)-S(.76,.87,t)),1+.06*a)
  })
  c.strokeStyle='#2f9bff'
  for(let w=0;w<4;w++)for(let i=0;i<3;i++){
    let u=t-.02-.17*w-.035*i,p=S(0,.05,u)-S(.11,.17,u)
    if(p>0){
      c.lineWidth=12*p
      c.beginPath();c.arc(256,10,27+20*i,2.46-.4*p,2.46+.4*p);c.stroke()
    }
  }
}
