// camel walking in place: two humps, long legs stepping in diagonal pairs, the head bobs on its curved neck, tail swishes
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=80,rim=3
export default(c,t)=>{
  const b=2.5*sin(2*T*t),hb=3*sin(2*T*t-1),bl=t>.55&&t<.61
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=(x,y,r,f)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();f();c.fill();c.stroke();c.restore()}
  c.translate(-12,-4)
  for(const[x,ph]of[[84,0],[100,PI],[150,PI],[166,0]]){
    const a=.3*sin(T*t+ph),lift=max(0,-cos(T*t+ph)),y=136+b
    const kx=x-36*sin(a),ky=y+36*cos(a),a2=a+.5*lift,fx=kx-38*sin(a2),fy=ky+38*cos(a2)
    c.lineWidth=9;c.beginPath();c.moveTo(x,y-10);c.lineTo(kx,ky);c.lineTo(fx,fy);c.stroke()
    shape(fx+3,fy,0,()=>c.ellipse(0,0,6,3,0,0,T))
  }
  c.lineWidth=5;c.beginPath();c.moveTo(68,112+b);c.quadraticCurveTo(58,126+b,60+4*sin(T*t),142+b);c.stroke()
  shape(60+4*sin(T*t),146+b,0,()=>c.ellipse(0,0,4,7,0,0,T))
  shape(124,118+b,0,()=>c.ellipse(0,0,58,28,0,0,T))
  shape(100,96+b,0,()=>c.ellipse(0,0,24,24,0,0,T))
  shape(148,96+b,0,()=>c.ellipse(0,0,24,24,0,0,T))
  c.lineWidth=18;c.beginPath();c.moveTo(166,108+b);c.bezierCurveTo(196,118+b,206,104+hb,206,80+hb);c.stroke();c.lineWidth=6
  shape(198,58+hb,-.6,()=>c.ellipse(0,0,4,7,0,0,T))
  shape(206,68+hb,0,()=>c.ellipse(0,0,13,11,0,0,T))
  shape(218,74+hb,.3,()=>c.ellipse(0,0,18,10,0,0,T))
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=3,c.beginPath(),c.arc(208,65+hb,3.5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(208,67+hb,3.2,0,T),c.fill()
}
