// gift box rattles, the lid pops off and confetti bursts out, then the lid drops back on
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const C=[[-90,-150,0],[-50,-190,1],[-10,-200,2],[40,-185,0],[85,-140,1],[-120,-90,2],[115,-100,0],[20,-150,1],[-70,-120,1],[60,-210,2]]
export default(c,t)=>{
  const sh=t<.3?.07*sin(t*T*10):0,up=t<.32?0:t<.45?(t-.32)/.13:t<.62?1:t<.78?1-((t-.62)/.16)**2:0,ly=-70*up,lr=-.35*up
  const u=(t-.36)/.44
  if(u>0&&u<1)for(const[vx,vy,k]of C){
    const x=128+vx*u,y=120+vy*u+260*u*u
    c.save();c.translate(x,y);c.rotate(u*T*(k+1));c.lineWidth=4;c.beginPath()
    if(k==0)c.rect(-6,-4,12,8);else if(k==1)c.arc(0,0,6,0,T);else c.moveTo(0,-7),c.lineTo(7,5),c.lineTo(-7,5),c.closePath()
    c.restore();c.fill();c.stroke()
  }
  c.lineWidth=7
  c.translate(128,226);c.rotate(sh);c.translate(-128,-226)
  c.beginPath();c.roundRect(64,128,128,96,6);c.fill();c.stroke()
  c.beginPath();c.rect(116,128,24,96);c.fill();c.stroke()
  c.translate(128,116+ly);c.rotate(lr);c.translate(-128,-116)
  for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*20,88,22,13,d*.5,0,T),c.fill(),c.stroke()
  c.beginPath();c.roundRect(56,100,144,32,6);c.fill();c.stroke()
  c.beginPath();c.rect(116,100,24,32);c.fill();c.stroke()
  c.beginPath();c.arc(128,96,9,0,T);c.fill();c.stroke()
}
