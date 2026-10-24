// tear-off calendar pad, the top page flips up over the binding and away, but every page underneath is blank too
const{sin,cos,PI,min,max}=Math
export const frames=32,delay=55
const ease=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
const X=128,Y=102,W=160,H=124
const flip=(c,a)=>{
  const k=cos(a),y=Y+H*k*(k>0?1:.62),w=W/2*(1+.2*sin(a)),y0=k>0?Y-20:Y
  c.fillStyle=k>0?'#fff':'#ddd'
  c.beginPath();c.moveTo(X-W/2,y0);c.lineTo(X-w,y);c.lineTo(X+w,y);c.lineTo(X+W/2,y0);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff'
}
export default(c,t)=>{
  const a=1.5*PI*ease((t*2%1)/.78)
  if(a>PI)flip(c,a)
  c.beginPath();c.rect(X-W/2+5,Y-10,W-10,H+20);c.fill();c.stroke()
  c.beginPath();c.rect(X-W/2,Y-20,W,H+20);c.fill();c.stroke()
  if(a<PI/2)flip(c,a)
  for(const d of[-1,1])c.beginPath(),c.roundRect(X+d*44-9,34,18,40,9),c.fill(),c.stroke()
  c.beginPath();c.roundRect(X-W/2-12,58,W+24,50,14);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(X+d*44,72,6,0,7),c.fill()
  c.fillStyle='#fff'
  if(a>=PI/2&&a<=PI)flip(c,a)
}
