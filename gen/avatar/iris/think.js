// round blue avatar ball with one big eye thinking: the lid half lowers, the eye rolls up to the right and the pupil circles slowly while three violet thought dots pop up beside it
const{sin,cos,PI,min,max,atan2,sqrt}=Math
const ss=x=>(x=max(0,min(1,x)),x*x*(3-2*x))
const dot=(c,f,x,y,r)=>{c.fillStyle=f;c.beginPath();c.arc(x,y,r,0,7);c.fill()}
const eye=(c,x,y,u,v,r,q=0,z=1,w=q)=>{
  let a=atan2(y,x)
  c.save();c.translate(x,y);c.rotate(a);c.scale(z*sqrt(1-(x*x+y*y)/6500),z);c.rotate(-a)
  if(q+w>1.9){
    c.lineWidth=7;c.strokeStyle='#14213d'
    c.beginPath();c.moveTo(-36,12);c.quadraticCurveTo(0,16,36,12);c.stroke()
  }else{
    c.beginPath();c.moveTo(-60,8);c.quadraticCurveTo(0,120*q-100,60,8)
    c.quadraticCurveTo(0,80-60*w,-60,8);c.clip()
    dot(c,'#fff',0,0,40);dot(c,'#14213d',u,v,r);dot(c,'#fff',u-r*.37,v-r*.42,6*(r/19)**.8)
  }
  c.restore()
}
const ball=(c,f)=>{
  dot(c,'#2f9bff',0,0,90);c.clip()
  c.fillStyle='#1877e0';c.beginPath();c.rect(-90,-90,180,180);c.arc(-14,-16,94,7,0,1);c.fill()
  f()
  c.globalAlpha=.55;c.fillStyle='#fff';c.beginPath();c.ellipse(-44,-52,20,9,-.7,0,7);c.fill()
}
export const frames=72,delay=50
export default(c,t,i)=>{
  let A=ss((i-2)/9)-ss((i-58)/9),p=2.3+4*PI*ss((i-6)/56),X=cos(p),Y=sin(p),
    s=1-.02*A+.012*sin(4*PI*t)
  ;[[197,59,7],[211,42,10],[229,22,12.5]].map(([x,y,r],k)=>{
    let z=(i-12-6*k)/6
    z=(z<0?0:z>1?1:1+2.7*(z-1)**3+1.7*(z-1)**2)*(1-ss((i-56-2*k)/4))
    z>.2&&dot(c,'#7a5cff',x,y-sin(4*PI*t-k),r*z*(1+.1*sin(6*PI*t-k*1.3)))
  })
  c.translate(128-5*A,222);c.scale(1/s,s);c.translate(0,-90)
  ball(c,_=>eye(c,A*(13+2*X),-6+A*(2*Y-16),6+A*(6*X-2),2+A*(5*Y-9),19,
    .38*(ss(i/8)-ss((i-59)/8)),1,.25*(ss((i-28)/6)-ss((i-40)/6))))
}
