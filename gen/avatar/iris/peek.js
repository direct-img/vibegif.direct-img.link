// round blue avatar ball with one big eye playing peekaboo: it sinks out of sight below the bottom edge, cautiously peeks its eye back up over the edge, glances left and right, then rises back up and blinks
const{sin,PI,min,max,abs,atan2,sqrt,exp}=Math
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
const kf=(K,i,j=K.findIndex(k=>k[0]>i))=>j<1?K.at(j)[1]:
  K[j-1][1]+(K[j][1]-K[j-1][1])*ss((i-K[j-1][0])/(K[j][0]-K[j-1][0]))
const Y=i=>kf([[3,0],[6,-6],[17,232],[19,232],[25,152],[28,152],[33,126],[51,126],[59,-7],[64,0]],i)
export const frames=72,delay=50
export default(c,t,i)=>{
  let s=1+min(.07,.002*abs(Y(i+.5)-Y(i-.5)))-.03*exp(-(((i-61.5)/2)**2))+.012*sin(2*PI*t),
    e=kf([[4,0],[13,-24],[52,-24],[62,0]],i),
    u=kf([[34,0],[35.6,-1],[41,-1],[42.6,1],[48,1],[50,0]],i),
    x=kf([[34,0],[37.5,-1],[41,-1],[45,1],[48,1],[51,0]],i)
  c.translate(128+3*x,222+Y(i));c.scale(1/s,s);c.translate(0,-90)
  ball(c,_=>eye(c,26*x,e-6,6+e/12+11*u,2+e/5,19-e/12,ss((i-62)/2)-ss((i-65)/3)))
}
