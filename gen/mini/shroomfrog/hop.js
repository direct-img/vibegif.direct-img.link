// frog wearing a mushroom cap with white spots: crouches, hops, lands with a squash; the cap gets pushed down on the way up
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=24,delay=70,rim=3
export default(c,t)=>{
  const air=t>.15&&t<.6,u=(t-.15)/.45,h=air?44*sin(PI*u):0,v=air?cos(PI*u):0,e=air?min(1,1.6*sin(PI*u)):0
  const sq=t<.15?.12*sin(PI*t/.15):t>.6&&t<.78?.14*sin(PI*(t-.6)/.18):0,bl=t>.86&&t<.92
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  c.translate(128,218);c.scale(1.18,1.18);c.translate(-128,-218-h)
  const cx=128,by=218,X=x=>cx+(x-cx)*(1+sq),Y=y=>by-(by-y)*(1-sq),shape=g=>{c.beginPath();g();c.fill();c.stroke()}
  for(const d of[-1,1]){
    const lx=X(cx+d*(46-8*e)),ly=Y(by-12)+20*e,ry=12+16*e,a=-d*.5*e
    shape(()=>c.ellipse(lx,ly,20-11*e,ry,a,0,T))
    if(e>.05)shape(()=>c.ellipse(lx+ry*d*sin(.5*e),ly+ry*cos(.5*e),12*e,6*e,0,0,T))
    shape(()=>c.ellipse(X(cx+d*22),by-4+8*e,12,6,0,0,T))
  }
  shape(()=>c.ellipse(cx,Y(by-34),54*(1+sq),34*(1-sq),0,0,T))
  for(const d of[-1,1])shape(()=>c.arc(X(cx+d*30),Y(by-58),14,0,T))
  c.save();c.translate(cx,Y(by-70)+5*max(0,v));c.rotate(.06*v)
  shape(()=>{c.moveTo(-62,4);c.bezierCurveTo(-60,-52,60,-52,62,4);c.quadraticCurveTo(0,-8,-62,4)})
  c.fillStyle='#fff';for(const[x,y,r]of[[-30,-20,8],[8,-28,6],[34,-14,7],[-6,-10,4]])c.beginPath(),c.arc(x,y,r,0,T),c.fill()
  c.restore()
  c.fillStyle=c.strokeStyle='#fff'
  for(const d of[-1,1]){
    const x=X(cx+d*30),y=Y(by-56)
    if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(x,y-3,7,.15*PI,.85*PI),c.stroke()
    else c.beginPath(),c.arc(x,y,8.5,0,T),c.fill(),c.fillStyle='#111',c.beginPath(),c.arc(x+d*1.5,y+1,4.5,0,T),c.fill(),c.fillStyle='#fff'
  }
  c.lineWidth=3.5;c.beginPath();c.moveTo(X(cx-26),Y(by-36));c.quadraticCurveTo(cx,Y(by-24),X(cx+26),Y(by-36));c.stroke()
}
