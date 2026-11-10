// round mint green avatar yawning: a sleepy jelly ball stretches tall with a big slow open-mouthed yawn and a tiny tear, then sinks back, smacks its lips and settles
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
E=(c,u,x,y,o,z=1,g=1,r=0)=>{
  let k=asin(u/90),j=asin(2/15),a=k+x/90,b=y/90-j,w=M(13.365,6.5,o),v=M(10.9-4.09*g,6,o),
  A=(s,d)=>{
    s=abs(s)<.1?.1:s
    let r=(w*w+s*s)/2/s,q=atan2(r-s,w)
    c.arc(0,v+s-r,abs(r),d?P-q:q,d?q:P-q,d?s>0:s<0)
  }
  c.save();c.translate(90*sin(a),90*sin(b));c.rotate(r);c.scale(z*cos(a)/cos(k),z*cos(b)/cos(j))
  c.fillStyle=c.strokeStyle='#fff';c.lineWidth=9;c.beginPath()
  A(M(8.19*g,6.5,o));o>.01&&(A(M(8.19*g,-6.5,o),1),c.fill());c.stroke();c.restore()
},
G=(t,a)=>exp(-(((t-a)/.022)**2))
export const frames=72,delay=50
export default(c,t)=>{
  let Y=t=>S(.1,.4,t)-S(.54,.7,t),
  D=t=>S(.58,.74,t)-S(.8,.98,t),
  y=Y(t),j=Y(t-.03),d=D(t),
  n=S(.03,.1,t)-S(.1,.2,t),
  k=(S(.34,.42,t)-S(.52,.6,t))*sin(36*P*t),
  m=G(t,.78)+G(t,.85),
  q=S(.08,.14,t)-S(.88,.93,t),
  r=S(.4,.48,t)-S(.62,.72,t),
  u=-14*j+5*d+2*n+k
  B(c,0,0,1+.015*n-.07*y+.04*d-.008*m,1-.03*n+.15*y-.065*d+.004*k+.015*m,.02*j,_=>{
    c.rotate(-.05*j)
    E(c,-30,2*j,u-3*y,0,1+.1*y,1+.2*y,.22*y)
    E(c,30,2*j,u-3*y,0,1+.1*y,1+.2*y,-.22*y)
    c.save();c.translate(54+2*j,u+2+9*S(.42,.72,t));c.scale(r,r)
    c.fillStyle='#2f9bff';c.beginPath();c.moveTo(0,-10);c.quadraticCurveTo(7,0,0,5);c.quadraticCurveTo(-7,0,0,-10)
    c.arc(0,0,5,0,7);c.fill();c.restore()
    c.translate(90*sin(2*j/90),90*sin(u/90+.3+.08*y))
    let w=q*(6.5+12.5*y+m),h=q*(2.4+22*y+3*m)
    c.fillStyle='#1b1b24';c.beginPath();c.ellipse(0,0,w,h,0,0,7);c.fill()
    c.clip()
    c.fillStyle='#ff5d4a';c.beginPath();c.ellipse(0,h*1.1,w*.8,h*.62,0,0,7);c.fill()
  })
}
