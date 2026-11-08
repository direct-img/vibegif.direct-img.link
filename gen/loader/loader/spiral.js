// a hypnotic black and white two-armed spiral on a white disc inside a thick dark ring with a thin white rim, turning steadily so the stripes seem to flow endlessly inward
export const frames=30,delay=40,rim=5
const{atan2,sqrt,max,min,PI}=Math,T=2*PI,P=35,RD=86
export default(c,t)=>{
 const D=c.createImageData(256,256),d=D.data
 for(let y=0;y<256;y++)for(let x=0;x<256;x++){
  const dx=x+.5-128,dy=y+.5-128,r=sqrt(dx*dx+dy*dy)
  if(r>RD+5)continue
  // stripe phase: two arms round the circle plus one period every P px outward
  const w=2*atan2(dy,dx)/T+r/P+t,v=w-Math.floor(w),
   g=sqrt(1/P/P+(2/T/max(r,1))**2),e=min(v,.5-v<0?v-.5:.5-v,1-v)/g,
   k=max(0,min(1,.5+(v<.5?e:-e)))*max(0,min(1,RD+.5-r)),o=(y*256+x)*4,col=17+238*(1-k)
  d[o]=d[o+1]=d[o+2]=col,d[o+3]=255
 }
 c.putImageData(D,0,0)
 c.lineWidth=14,c.strokeStyle='#111',c.beginPath(),c.arc(128,128,RD+11,0,T),c.stroke()
 c.fillStyle='#111',c.beginPath(),c.arc(128,128,7,0,T),c.fill()
}
