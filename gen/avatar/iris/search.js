// round blue avatar ball with one big eye searching: lids narrowed, the eye scans left to right in three rows from top to bottom in quick reading hops, snapping back to the left for each new row
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
const K=[[4,-1,-1,3],[9,-.33,-1],[12,.33,-1],[15,1,-1],[19,-1,0,3],[24,-.33,0],[27,.33,0],[30,1,0],
  [34,-1,1,3],[39,-.33,1],[42,.33,1],[45,1,1],[50,0,0,3]]
const G=(i,m)=>K.reduce((p,[f,x,y,d=1.6])=>(f=ss((i-f)/d/m),[p[0]+(x-p[0])*f,p[1]+(y-p[1])*f]),[0,0])
export const frames=60,delay=50
export default(c,t,i)=>{
  let A=ss((i-2)/4)-ss((i-49)/4),[u,v]=G(i,1),[x,y]=G(i-.6,2.2),
    q=ss((i-51)/2)-ss((i-54)/3),s=1+.012*sin(2*PI*t)
  c.translate(128+2.5*x,222);c.scale(1/s,s);c.translate(0,-90)
  ball(c,_=>eye(c,27*x,-6+16*y,6+11*u-6*A,2+7*v-2*A,19-2*A,max(q,.3*A),1,max(q,.38*A)))
}
