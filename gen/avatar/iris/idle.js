// round blue avatar ball with one big eye idling: it breathes slowly and watches, the pupil darting in small quick glances left, up and right, then blinks
const{sin,PI,min,max,atan2,sqrt}=Math
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
  let s=1+.02*sin(2*PI*t),
    g=(w,d)=>[[7,-15,-2],[20,5,-7],[33,16,6],[48,-6,3]]
      .reduce((p,[f,x,y])=>(f=ss((i-f-d)/w),[p[0]+x*f,p[1]+y*f]),[0,0]),
    [u,v]=g(2,0),[x,y]=g(7,1)
  c.translate(128,222);c.scale(1/s,s);c.translate(0,-90)
  ball(c,_=>eye(c,x*.4,y*.4-6.717-sin(2*PI*t-.8),6+u,2+v,
    19+1.5*(ss((i-33)/3)-ss((i-48)/3)),ss((i-46)/2)-ss((i-49)/3)))
}
