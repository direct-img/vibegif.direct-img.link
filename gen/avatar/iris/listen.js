// round blue avatar ball with one big eye listening: it leans in, the eye opens wide and the pupil dilates while mint sound rings ripple inward and are soaked up, each one making the pupil pulse
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
const R=[4,11,20,32,38,45]
export const frames=64,delay=50
export default(c,t,i)=>{
  let A=ss((i-1)/7)-ss((i-55)/8),o=1.2*ss((i-1)/5)-.2*ss((i-5)/5)-ss((i-55)/8),
    h=R.reduce((s,f)=>s+sin(PI*sqrt(max(0,min(1,(i-f-8)/8))))**2,0),
    g=ss((i-21)/1.5)-ss((i-37)/1.5),m=1+.025*A,s=m*(1-.014*h+.01*sin(2*PI*t))
  c.translate(128,222);c.scale(m*m/s,s);c.translate(0,-90)
  c.strokeStyle='#1fbf9c'
  R.map(f=>{
    let x=(i-f)/11
    if(x>0&&x<1){
      c.lineWidth=7*min(1,.4+x*4,3.4-x*3.4)
      c.beginPath();c.arc(0,0,(113-28*x**1.6)/m,0,7);c.stroke()
    }
  })
  ball(c,_=>eye(c,-1.5*g,-6-3*A,6-5*A-4*g,2-2*A+g,19+7*o+2.2*h,
    ss((i-27)/2)-ss((i-30)/3),1+.07*o+.02*h))
}
