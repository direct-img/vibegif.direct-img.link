// round blue avatar ball with one big eye rolling over in place: it winds up, then the eye rolls down around the ball out of sight and comes back over the top, overshoots, settles and blinks
const{sin,cos,PI,min,max,hypot,atan2,exp}=Math
const ss=x=>(x=max(0,min(1,x)),x*x*(3-2*x))
const dot=(c,f,x,y,r)=>{c.fillStyle=f;c.beginPath();c.arc(x,y,r,0,7);c.fill()}
const ca=cos(.2),sa=sin(.2)
const rot=([x,y,z],p)=>{
  let C=cos(p),S=sin(p),d=(ca*x+sa*y)*(1-C)
  return[x*C-sa*z*S+ca*d,y*C+ca*z*S+sa*d,z*C-(ca*y-sa*x)*S]
}
const eye=(c,p,u,v,q)=>{
  let[x,y,z]=rot([0,-.0744,.9972],p),[a,b]=rot([1,0,0],p),[d,e]=rot([0,.9972,.0744],p),
    g=atan2(y,x),E=f=>{c.save();c.transform(a,b,d,e,80.62*x,80.62*y);f();c.restore()}
  c.save()
  c.fillStyle='#fff';c.rotate(g);c.beginPath();c.rect(80.62/hypot(x,y),-90,90,180);c.rotate(-g)
  if(z<0){
    c.clip();E(_=>c.arc(0,0,40,0,7));c.fill('evenodd')
  }else{
    c.fill()
    E(_=>{
      if(q>.95){
        c.lineWidth=7;c.strokeStyle='#14213d'
        c.beginPath();c.moveTo(-36,12);c.quadraticCurveTo(0,16,36,12);c.stroke()
      }else{
        c.beginPath();c.moveTo(-60,8);c.quadraticCurveTo(0,120*q-100,60,8)
        c.quadraticCurveTo(0,80-60*q,-60,8);c.clip()
        dot(c,'#fff',0,0,40);dot(c,'#14213d',u,v,19);dot(c,'#fff',u-7,v-8,6)
      }
    })
  }
  c.restore()
}
const ball=(c,f)=>{
  let sh=_=>{c.fillStyle='#1877e0';c.beginPath();c.rect(-90,-90,180,180);c.arc(-14,-16,94,7,0,1);c.fill()}
  dot(c,'#2f9bff',0,0,90);c.clip()
  sh();f();c.globalAlpha=.3;sh()
  c.globalAlpha=.55;c.fillStyle='#fff';c.beginPath();c.ellipse(-44,-52,20,9,-.7,0,7);c.fill()
}
const tr=x=>(x=max(0,min(1,x))**2.4,x/(x+(1-x**(1/2.4))**2.4))
const R=i=>-.32*ss((i-3)/7)+(2*PI+.62)*tr((i-10)/34)-.37*ss((i-44)/6)+.07*ss((i-50)/5)
export const frames=64,delay=40
export default(c,t,i)=>{
  let p=R(i),w=32*(p-R(i-1)),h=sin(PI*max(0,min(1,(i-11)/30)))**.8,
    s=1-.045*(ss((i-3)/6)-ss((i-9)/4))+.03*h-.04*exp(-(((i-42.5)/2.2)**2))+.012*sin(2*PI*t)
  c.translate(128,222-7*h);c.scale(1/s,s);c.translate(0,-90)
  ball(c,_=>eye(c,p,6+sa*w,2-ca*w,ss((i-55)/2)-ss((i-58)/3)))
}
