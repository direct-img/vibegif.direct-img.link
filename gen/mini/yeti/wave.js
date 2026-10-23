// yeti waving hello: shaggy spiky fur all round, one arm waving, a big open smile and a blink
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3,invert=true
export default(c,t)=>{
  const bl=t>.6&&t<.66,br=sin(T*t),a=-2.65+.28*sin(T*t*2)
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const fur=(x,y,r,oy,rx,ry,n,sp)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath()
    for(let k=0;k<2*n;k++){const b=k*PI/n,q=k%2?1+sp:1;c.lineTo(rx*q*cos(b),oy+ry*q*sin(b))}
    c.closePath();c.fill();c.stroke();c.restore()}
  for(const x of[104,152])fur(x,206,0,0,20,15,8,.18)
  fur(74,122,.35,36,16,40,10,.14)
  fur(172,118,a,30,15,30,10,.14);fur(172,118,a,60,16,16,8,.2)
  fur(128,136,0,0,62,74+1.5*br,24,.09)
  c.fillStyle=c.strokeStyle='#fff'
  for(const d of[-1,1])if(bl)c.lineWidth=3.5,c.beginPath(),c.arc(128+d*20,102,6,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*20,104,6.5,0,T),c.fill()
  c.beginPath();c.ellipse(128,124,17,12,0,0,PI);c.closePath();c.fill()
}
