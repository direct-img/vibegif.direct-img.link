// round blue avatar ball with one big eye looking around: a small yellow firefly lights up beside it and orbits all the way around while the eye and pupil follow it across the ball, then it winks out
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
const ph=i=>-.5+3.75*ss((i-13)/17)+2.53*ss((i-37)/14)+.06*sin(PI*i/4)
export const frames=72,delay=50
export default(c,t,i)=>{
  let A=1.15*ss((i-6)/3)-.15*ss((i-9)/4)-ss((i-61)/5),z=(i-3)/5,
    e=ph(i-1.6),p=ph(i-.5),s=1-.012*A*sin(e)+.012*sin(2*PI*t)
  z=(z<0?0:z>1?1:1+2.7*(z-1)**3+1.7*(z-1)**2)*(1-ss((i-56)/4))
  c.save()
  c.translate(128+1.5*A*cos(e),222);c.scale(1/s,s);c.translate(0,-90)
  ball(c,_=>eye(c,30*A*cos(e),-6+22*A*sin(e),6+A*(14*cos(p)-6),2+A*(12*sin(p)-2),19+1.5*A,
    ss((i-62)/2)-ss((i-65)/3)))
  c.restore()
  ;[[2.8,4],[1.4,6.5],[0,9.5+sin(PI*i/3)]].map(([d,r])=>{
    let a=ph(i-d),o=107+1.5*sin(PI*(i-d)/6+1)
    z>.2&&dot(c,'#ffc62e',128+o*cos(a),131+o*sin(a),r*z)
  })
}
