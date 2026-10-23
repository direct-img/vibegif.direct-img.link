// moon-cat sleeping: a crescent moon curled like a cat, rocking and breathing, its tail swaying and z's floating up
const{sin,cos,PI,atan2,sqrt,hypot}=Math,T=2*PI
export const frames=24,delay=90
const B='#f4c03e',L='#f9e09e',A='#b48cff',D='#2b2633'
export default(c,t)=>{
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  // crescent: outer circle minus inner circle, horns pointing up
  const[x1,y1,R,x2,y2,r]=[128,100,84,136,60,80],d=hypot(x2-x1,y2-y1),a=(R*R-r*r+d*d)/(2*d),h=sqrt(R*R-a*a)
  const ux=(x2-x1)/d,uy=(y2-y1)/d,px=x1+a*ux,py=y1+a*uy,I=[[px+h*uy,py-h*ux],[px-h*uy,py+h*ux]].sort((p,q)=>p[0]-q[0])
  const[l,rr]=I
  c.translate(0,22);c.translate(128,120);c.rotate(.07*sin(T*t));c.scale(1+.02*sin(T*t*2),1+.02*sin(T*t*2));c.translate(-128,-120)
  for(let k=0;k<3;k++){const q=(t+k/3)%1,s=8*sin(PI*q),x=88+26*q+6*sin(T*q),y=34-40*q
    if(s<3)continue
    c.strokeStyle=A;c.lineWidth=4.5;c.lineCap=c.lineJoin='round';c.beginPath();c.moveTo(x-s,y-s);c.lineTo(x+s,y-s);c.lineTo(x-s,y+s);c.lineTo(x+s,y+s);c.stroke()}
  c.strokeStyle=B;c.lineWidth=13;c.lineCap='round';c.beginPath();c.moveTo(rr[0]-4,rr[1]+4)
  c.bezierCurveTo(rr[0]+14,rr[1]-10,rr[0]+22,rr[1]-26,rr[0]+12+6*sin(T*t-1),rr[1]-44+3*cos(T*t-1));c.stroke()
  for(const[x,rt]of[[50,-.5],[76,.25]]){c.save();c.translate(x,64);c.rotate(rt);fill(B,()=>{c.moveTo(-12,8);c.lineTo(0,-20);c.lineTo(12,8)})
    fill(L,()=>{c.moveTo(-5,5);c.lineTo(0,-8);c.lineTo(5,5)});c.restore()}
  fill(B,()=>{c.arc(x1,y1,R,atan2(l[1]-y1,l[0]-x1),atan2(rr[1]-y1,rr[0]-x1),true);c.arc(x2,y2,r,atan2(rr[1]-y2,rr[0]-x2),atan2(l[1]-y2,l[0]-x2),false);c.closePath()})
  fill(B,()=>c.arc(64,86,28,0,T))
  c.fillStyle=L;for(const[x,y,s]of[[128,166,8],[96,158,6],[162,160,5.5]])c.beginPath(),c.arc(x,y,s,0,T),c.fill()
  c.strokeStyle=D;c.lineWidth=4;c.lineCap='round'
  for(const x of[54,76])c.beginPath(),c.arc(x,84,6,.15*PI,.85*PI),c.stroke()
  c.lineWidth=3.5;for(const d of[-1,1])c.beginPath(),c.arc(65+d*4,97,4,.1*PI,.9*PI),c.stroke()
}
