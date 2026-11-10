// round mint green avatar talking: a sleepy jelly ball with closed content eyes murmurs softly, a small mouth shaping mellow syllables while its body pulses gently
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
Y=[[.1,.03,.7,2],[.19,.035,1,5],[.275,.03,.5,-1],[.36,.04,.85,3],[.58,.035,.95,5],[.665,.03,.55,0],[.75,.035,1,-2],[.86,.04,.6,3]],
V=(t,k)=>Y.reduce((s,[a,b,v,w])=>s+(k?w:v)*exp(-(((t-a)/b)**2)),0)
export const frames=72,delay=50
export default(c,t)=>{
  let q=S(.03,.08,t)-S(.92,.98,t),
  m=V(t),j=V(t-.025),
  s=q*sin(2*P*t),
  x=7*s,y=-3*m
  B(c,2*s,0,1-.022*j,1+.045*j,.025*s,_=>{
    c.rotate(.04*s)
    E(c,-30,x,y,0,1+.07*m)
    E(c,30,x,y,0,1+.07*m)
    c.translate(90*sin(x/90),90*sin(y/90+.29))
    c.fillStyle='#1b1b24';c.beginPath()
    c.ellipse(0,0,q*(9.5+V(t,1)),q*(3.2+10*m),0,0,7);c.fill()
  })
}
