// round blue avatar ball with one big eye alerted: it crouches, snaps up with a little hop, the eye goes wide and the pupil shrinks to a dot while a coral exclamation mark pops up beside it, then it glances left and right and calms down
const{sin,cos,PI,min,max,atan2,sqrt,exp}=Math
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
export const frames=56,delay=50
export default(c,t,i)=>{
  let k=max(0,i-6),A=(1-exp(-k/2.2)*cos(k*1.25))*(1-ss((i-38)/7)),
    hop=sin(PI*max(0,min(1,(i-6)/5)))**1.3,
    s=1-.045*(ss((i-2)/4)-ss((i-6)/1.5))+.055*hop-.04*exp(-(((i-11.5)/1.6)**2))+.02*A+.012*sin(2*PI*t),
    g=1.4*ss((i-18)/1.5)-.4*ss((i-19.5)/3)-2.6*ss((i-26)/1.5)+.4*ss((i-27.5)/3)+1.2*ss((i-33)/2),
    z=i<7?0:(1-exp((7-i)/1.1)*cos((i-7)*1.3))*(1-ss((i-36)/4))
  if(z>.2){
    c.save()
    c.translate(225,67-12*z);c.rotate(.2-.35*exp((7-i)/3)*sin((i-7)*1.1));c.scale(1.4*z,1.4*z)
    c.strokeStyle='#ff5d4a';c.lineWidth=6;dot(c,'#ff5d4a',0,22,7)
    c.beginPath();c.moveTo(-5,-25);c.lineTo(5,-25);c.lineTo(2,6);c.lineTo(-2,6);c.closePath();c.fill();c.stroke()
    c.restore()
  }
  c.translate(128-9*A,222-11*hop);c.scale(1/s,s);c.translate(0,-90)
  ball(c,_=>eye(c,-9*g*A,-6-4*A,6-6*A-11*g*A,2-3*A,19-8.5*A,ss((i-42)/2)-ss((i-45)/3),1+.14*A))
}
