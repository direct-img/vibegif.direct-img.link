// smiling pink jellyfish with a violet scalloped skirt and spotted dome, squeezing its bell to shoot upward with eyes squinting, springing back open and slowly sinking, violet tentacles and frilly pink arms trailing and waving behind, bold black outlines
export const frames=32,delay=60
const{sin,cos,exp,min,max,PI}=Math,T=2*PI,Y0=108
const cl=x=>min(1,max(0,x))
// vertical offset of the bell: quick push up then a slow sink, periodic in t
const yb=t=>{t=(t%1+1)%1;if(t<.45){const u=t/.45;return-22*(1-(1-u)**3*(1+3*u))}const v=(t-.45)/.55;return-22*(1-v*v*(3-2*v))}
// bell squeeze: pull in, then a springy release
const sq=t=>t<.16?sin(PI/2*t/.16)**2:exp(-(t-.16)*9)*cos((t-.16)*18)
const line=(c,P,w,col)=>{c.beginPath(),P.forEach(([x,y])=>c.lineTo(x,y)),c.lineWidth=w+7,c.strokeStyle='#111',c.stroke(),c.lineWidth=w,c.strokeStyle=col,c.stroke()}
export default(c,t)=>{
  const k=sq(t),w=62*(1-.24*k),h=66*(1+.16*k),y=Y0+yb(t),vn=cl((yb(t-.01)-yb(t+.01))/2.4)
  c.translate(128,124),c.scale(.88,.88),c.translate(0,-124)
  // tentacles: each point lags the bell's motion so they stretch on the push and bunch on the sink
  const tent=(x0,L,amp,f,ph,wd,col,fr=0)=>{
    const P=[]
    for(let j=0;j<=16;j++){
      const s=j/16,d=L*s
      P.push([x0*w/62*(1+.25*s*(1-vn))+amp*(1-.6*vn)*s**1.2*sin(f*s*PI-T*2*t+ph)+fr*s*sin(s*PI*9-T*4*t),Y0+yb(t-.0019*d)+d*(1+.12*vn)-2])
    }
    line(c,P,wd,col)
  }
  ;[[-50,94,10,2.2,0],[-22,106,12,2.4,.5],[22,106,12,2.4,1],[50,94,10,2.2,1.5]].forEach(([x,L,a,f,p])=>tent(x,L,a,f,p,6,'#a874ee'))
  ;[[-11,74,8,2.4,.7],[11,74,8,2.4,.9]].forEach(([x,L,a,f,p])=>tent(x,L,a,f,p,11,'#ff9ccc',3))
  // bell
  c.translate(0,y)
  const bell=()=>{
    c.beginPath(),c.moveTo(-w,0),c.bezierCurveTo(-w*1.04,-h*.62,-w*.62,-h,0,-h),c.bezierCurveTo(w*.62,-h,w*1.04,-h*.62,w,0)
    for(let j=6;j--;){const a=-w+2*w*j/6;c.quadraticCurveTo(a+w/6,11,a,0)}
    c.closePath()
  }
  c.lineWidth=7,bell(),c.fillStyle='#ff7db8',c.stroke(),c.fill()
  c.save(),bell(),c.clip()
  c.fillStyle='#b67cf4',c.fillRect(-80,-13,160,30)
  c.fillStyle='#ffa9d1',c.beginPath(),c.ellipse(0,-h*.6,w*.62,h*.34,0,0,T),c.fill()
  c.fillStyle='#ffd0e6';[[-24,-.72,7],[2,-.84,5],[26,-.66,6]].forEach(([x,yy,r])=>{c.beginPath(),c.arc(x*w/62,yy*h,r,0,T),c.fill()})
  c.restore()
  c.lineWidth=7,bell(),c.stroke()
  c.lineWidth=6,c.strokeStyle='#fff',c.beginPath(),c.ellipse(0,-h*.12,w*.8,h*.74,0,PI*1.12,PI*1.32),c.stroke(),c.strokeStyle='#111'
  // face: squints while pushing
  const ey=-h*.3,ex=w*.3
  c.lineWidth=4
  for(const s of[-1,1]){
    if(k>.45)c.beginPath(),c.moveTo(s*ex-6,ey+1),c.lineTo(s*ex,ey-4),c.lineTo(s*ex+6,ey+1),c.stroke()
    else c.fillStyle='#111',c.beginPath(),c.ellipse(s*ex,ey,4.5,6,0,0,T),c.fill()
    c.fillStyle='#ff4f98',c.beginPath(),c.ellipse(s*(ex+12),ey+9,6,3.5,0,0,T),c.fill()
  }
  c.beginPath(),c.arc(0,ey+5,5,.15*PI,.85*PI),c.stroke()
}
