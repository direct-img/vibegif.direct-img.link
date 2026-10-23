// ostrich running in place: long pink legs cycling, fluffy body bouncing, neck bobbing with each stride
const{sin,cos,PI,sqrt,max,min,hypot}=Math,T=2*PI
export const frames=24,delay=60
const B='#b48cff',L='#dac6ff',P='#ff85a8',Q='#ffc2d4',D='#2b2633'
export default(c,t)=>{
  const f=2*T*t,bob=4*cos(2*f),hx=126,hy=136+bob
  const fill=(col,g)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();g();c.fill();c.stroke()}
  const leg=(ph,col)=>{
    const fx=hx+28*cos(ph),fy=224-16*max(0,sin(ph)),dx=fx-hx,dy=fy-hy,d=min(hypot(dx,dy),92),h=sqrt(max(0,46*46-(d/2)**2))
    const ux=dx/hypot(dx,dy),uy=dy/hypot(dx,dy),kx=hx+ux*d/2-uy*h,ky=hy+uy*d/2+ux*h
    c.strokeStyle=col;c.lineWidth=9;c.lineCap=c.lineJoin='round'
    c.beginPath();c.moveTo(hx,hy);c.lineTo(kx,ky);c.lineTo(fx,fy);c.lineTo(fx+14,fy);c.stroke()
  }
  leg(f+PI,Q);leg(f,P)
  c.translate(0,bob)
  for(const[x,y,r]of[[58,96,16],[50,116,14],[64,124,13]])fill(L,()=>c.arc(x,y,r,0,T))
  fill(B,()=>{c.ellipse(118,112,54,34,-.08,0,T);for(let x=78;x<=158;x+=16)c.moveTo(x+13,138-(x-118)*.08),c.arc(x,138-(x-118)*.08,13,0,T)})
  fill(L,()=>c.ellipse(112,108,30,16,-.15,0,T))
  const nx=176+5*sin(2*f),ny=40
  c.strokeStyle=P;c.lineWidth=12;c.lineCap='round'
  c.beginPath();c.moveTo(152,100);c.quadraticCurveTo(170,70,nx,ny+12);c.stroke()
  fill(P,()=>c.ellipse(nx,ny,15,12,0,0,T))
  fill(P,()=>{c.moveTo(nx+10,ny-2);c.lineTo(nx+26,ny+3);c.lineTo(nx+10,ny+7);c.closePath()})
  c.fillStyle=D;c.beginPath();c.arc(nx+3,ny-3,4.5,0,T);c.fill()
}
