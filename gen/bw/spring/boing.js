// spring toy squashes down, boings up into the air stretched and wobbling, then lands and settles
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=24,delay=60
const N=4,R=40,E=11
const D=(c,f,a=11,b=4)=>{for(const[l,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
export default(c,t)=>{
  const sq=t<.3,air=!sq&&t<.8,a=(t-.3)/.5
  const L=sq?100-50*(t/.3)**2:air?100+30*(1-a)*cos(3*PI*a):100-16*sin(PI*(t-.8)/.2),J=air?44*4*a*(1-a):0
  const yb=212-J,yt=yb-L,hy=yt-28,k=1-J/110
  D(c,()=>{c.moveTo(128-46*k,232);c.lineTo(128+46*k,232)})
  c.beginPath();c.ellipse(128,yb+8,50,13,0,0,PI);c.lineTo(78,yb);c.ellipse(128,yb,50,13,0,PI,0,true);c.closePath();c.fill();c.stroke()
  c.beginPath();c.ellipse(128,yb,50,13,0,0,T);c.fill();c.stroke()
  // the coil: back half-turns first, then the front ones over them
  const P=th=>[128+R*sin(th),yb-L*th/(N*T)+E*cos(th)]
  for(const f of[1,0])for(let k=f;k<=2*N;k+=2){
    const a0=max(0,(k-.5)*PI),a1=min(N*T,(k+.5)*PI)
    D(c,()=>{for(let j=0;j<=12;j++){const[x,y]=P(a0+(a1-a0)*j/12);c.lineTo(x,y)}},14,5)
  }
  c.beginPath();c.ellipse(128,yt+4,30,9,0,0,T);c.fill();c.stroke()
  c.beginPath();c.arc(128,hy,30,0,T);c.fill();c.stroke()
  if(air&&a<.5)for(const d of[-1,1])D(c,()=>{for(let j=0;j<=6;j++)c.lineTo(128+d*(48+(j%2)*10),hy-24+j*8)})
  c.fillStyle='#111';c.lineWidth=5
  if(sq&&t>.08)for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*18,hy-10),c.lineTo(128+d*8,hy-4),c.lineTo(128+d*18,hy+2),c.stroke()
  else{for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*12,hy-4,5,7,0,0,T),c.fill();c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*12-2,hy-7,2,0,T),c.fill()}
  c.lineWidth=4;c.beginPath()
  if(air)c.ellipse(128,hy+12,5,6,0,0,T);else c.arc(128,hy+8,7,.15*PI,.85*PI)
  c.stroke()
}
