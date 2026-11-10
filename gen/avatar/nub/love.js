// round mint green avatar in love: a smitten jelly ball melts and sways with blissful smiling closed eyes and pink blush while pink hearts float up and pop
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
},
C=(c,u,x,y,s)=>{
  let a=asin(u/90)+x/90,b=y/90+.2
  c.save();c.translate(90*sin(a),90*sin(b));c.scale(s*cos(a)/.83,s*cos(b))
  c.fillStyle='#ff7eb6';c.beginPath();c.ellipse(0,0,14,8,0,0,7);c.fill();c.restore()
},
Q=[[.11,92,-36,1.4],[.25,168,38,1.7],[.39,112,-50,1.3],[.52,150,52,1.55]]
export const frames=72,delay=50
export default(c,t)=>{
  let A=t=>S(.06,.2,t)-S(.8,.91,t),
  a=A(t),e=A(t-.03),
  n=S(.02,.08,t)-S(.08,.16,t),
  j=S(.08,.14,t)-S(.14,.26,t),
  s=e*sin(4*P*t-.8),
  g=1-2*(S(.08,.16,t)-S(.82,.9,t)),
  v=sin(P*S(.85,1,t))*sin(40*(t-.85)),
  x=5*s,y=-3*a+2*n-4*j
  c.fillStyle=c.strokeStyle='#ff7eb6';c.lineWidth=5
  for(let[b,u,d,z]of Q){
    let p=(t-b)/.38
    if(p>0&&p<1){
      c.save()
      c.translate(u+d*p+5*sin(9*p+u),88-56*p**.8);c.rotate(.3*sin(8*p+u))
      c.scale(p=z*(.55+.45*p)*O(p/.25)*(1-S(.85,1,p)),p)
      c.beginPath();c.moveTo(0,10);c.bezierCurveTo(-20,-4,-10,-16,0,-6);c.bezierCurveTo(10,-16,20,-4,0,10)
      c.fill();c.stroke();c.restore()
    }
  }
  B(c,3*s,0,1+.02*n-.03*j+.045*a-.01*v,1-.035*n+.06*j-.08*a+.022*v,.05*s,_=>{
    c.rotate(.05*s)
    C(c,-50,x,y,a);C(c,50,x,y,a)
    E(c,-30,x,y,0,1+.1*a,g)
    E(c,30,x,y,0,1+.1*a,g)
  })
}
