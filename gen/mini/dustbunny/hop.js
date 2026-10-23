// dust bunny hopping: a fuzzy ball on tiny stick legs, big eyes that look up as it jumps, little dust puffs when it lands
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=70,rim=3
export default(c,t)=>{
  const air=t<.5,e=air?sin(PI*t/.5):0,h=36*e,v=air?cos(PI*t/.5):0,sq=t>.5&&t<.68?.14*sin(PI*(t-.5)/.18):0
  const sx=1+sq,sy=1-sq+.04*e*e,R=52,LL=14*(1-sq),cx=128,cy=220-5-LL-R*sy-h,bl=t>.8&&t<.86
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=5
  for(const d of[-1,1]){
    const fx=cx+d*(18+4*e),fy=cy+R*sy+LL
    c.beginPath();c.moveTo(cx+d*18,cy+R*sy-6);c.lineTo(fx,fy);c.stroke()
    c.beginPath();c.ellipse(fx+d*4,fy+1,8,4.5,0,0,T);c.fill()
  }
  if(t>.5&&t<.8){const q=(t-.5)/.3;for(const d of[-1,1])for(const[a,b,r]of[[70,34,9],[56,26,6]])c.beginPath(),c.arc(cx+d*(a+b*q),214-8*q-(r<9?6:0),r*(1-q),0,T),c.fill()}
  c.lineWidth=4;c.beginPath()
  for(let k=0;k<72;k++){const a=k*PI/36,rr=k%2?R+13+5*sin(k*2.39):R;c.lineTo(cx+rr*cos(a)*sx,cy+rr*sin(a)*sy)}
  c.closePath();c.fill();c.stroke()
  c.fillStyle=c.strokeStyle='#fff'
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(cx+d*21,cy-10*sy,9,.15*PI,.85*PI),c.stroke()
  else{c.beginPath();c.arc(cx+d*21,cy-8*sy,12,0,T);c.fill();c.fillStyle='#111';c.beginPath();c.arc(cx+d*19,cy-8*sy-3*v*e+1,5.5,0,T);c.fill();c.fillStyle='#fff'}
}
