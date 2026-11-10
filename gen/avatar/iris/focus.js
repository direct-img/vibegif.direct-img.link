// round blue avatar ball with one big eye focusing like a camera: it squints while the pupil hunts in and out inside yellow viewfinder corners, then locks with a crisp snap as the corners clamp in and turn mint, and blinks once like a shutter
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
export const frames=64,delay=50
export default(c,t,i)=>{
  let A=ss((i-1)/5)-ss((i-55)/7),k=i-36,L=k>=0,
    hu=L?0:ss((i-5)/4)*sin((i-5)*PI/7.5)*exp((5-i)/26),
    sn=L*exp(-k/1.6)*cos(k*1.9),fl=L*.6*exp(-k/2),
    r=19+A*(10*hu-3-2.2*sn),sq=L?0:A*(.3+.12*hu),
    H=L?90-7*sn:107+7*hu,z=ss((i-3)/4)-ss((i-53)/5),
    q=ss((i-45)/1.5)-ss((i-48)/2),s=1-.03*sn*A-.02*q+.01*sin(2*PI*t)
  c.strokeStyle=L?'#1fbf9c':'#ffc62e';c.lineWidth=8*min(1,z*2)
  for(let a=0;a<4;a++){
    let x=128+(a%2*2-1)*H,y=131+((a>>1)*2-1)*H,l=22*z
    c.beginPath();c.moveTo(x+(x<128?l:-l),y);c.lineTo(x,y);c.lineTo(x,y+(y<131?l:-l));z>.2&&c.stroke()
  }
  c.translate(128,222);c.scale(1/s,s);c.translate(0,-90)
  ball(c,_=>{
    eye(c,0,-6,6-6*A,2-2*A,r,max(q,sq),1,max(q,sq*1.2))
    fl>.03&&dot(c,'#fff',6-6*A-r*.37,-4-2*A-r*.42,6*(r/19)**.8*(1+fl))
  })
}
