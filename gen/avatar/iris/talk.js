// round blue avatar ball with one big eye talking: the pupil throbs like a speaker cone to the rhythm of speech while the body bounces and mint sound waves pulse out from both sides
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
const syl=[[3,8,.7],[8,9,1],[15,7,.6],[20,12,1],[37,7,.6],[42,8,.85],[48,11,1],[56,7,.5]]
const env=i=>syl.reduce((s,[f,d,a])=>s+a*sin(PI*sqrt(max(0,min(1,(i-f)/d))))**2,0)
export const frames=64,delay=40
export default(c,t,i)=>{
  let e=env(i),l=env(i-1.5),v=(e+env(i-1)+env(i-2)+env(i-3))/3,
    g=ss((i-30)/3)-ss((i-58)/4),s=1+.04*e+.012*sin(2*PI*t)
  c.strokeStyle='#1fbf9c'
  for(let k=0;k<4;k++){
    let a=max(0,min(1,(k<2?v:v*1.7-.8)*1.1-.1)),b=k%2*PI,h=(k<2?.3:.38)*a**.7
    c.lineWidth=8*min(1,.45+2.5*a)
    c.beginPath();c.arc(128,130,(k<2?101:113)+3*a,b-h,b+h);a>.04&&c.stroke()
  }
  c.translate(128,222);c.scale(1/s,s);c.translate(0,-90)
  ball(c,_=>eye(c,-2*g,-6-3*l,6-5*g,2-3*g,19+5.5*e,ss((i-31)/2)-ss((i-34)/3),1+.05*l))
}
