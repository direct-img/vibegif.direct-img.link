// round coral avatar mascot ball thinking: tilts its head, its two white dot eyes squint and drift up to one side then wander across, while three violet loading dots pulse in a wave beside it
export const frames=72,delay=50
const{PI,sin,cos,max}=Math,T=2*PI,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
o=x=>x<0?0:x>1?1:(x--,1+2.7*x*x*x+1.7*x*x),
B=(c,y,u,v,k)=>{
  c.translate(128,222+y);c.transform(u,0,k,v,0,0);c.translate(-128,-222)
  c.fillStyle='#ff5d4a';c.beginPath();c.arc(128,132,90,0,T);c.fill()
  c.save();c.clip();c.fillStyle='#e23a2e'
  c.beginPath();c.rect(0,0,256,256);c.arc(114,116,94,0,T);c.fill('evenodd');c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(84,80,20,9,-.7,0,T);c.fill();c.globalAlpha=1
},
F=(c,x,y,r,h,w,v)=>{
  c.translate(128,132);c.rotate(r);c.strokeStyle='#fff';c.lineWidth=h
  for(let s of[-1,1]){
    let p=s*.3047+x/90,q=y/90-.0667
    c.save();c.translate(90*sin(p),90*sin(q));c.scale(cos(p)/.9539,v(s)*cos(q)/.9978)
    c.beginPath();c.moveTo(-w,0);c.lineTo(w+.01,0);c.stroke();c.restore()
  }
}
export default(c,t,i)=>{
  let m=f=>e((f-4)/9)-e((f-58)/8),M=m(i),L=m(i-3),
  d=e((i-30)/8)-e((i-44)/8),
  k=[.6,1,1,.4][i-65]||0,
  br=sin(2*T*t),y=sin(T*(i-8)/24)*L
  c.fillStyle='#7a5cff'
  for(let j=0;j<3;j++){
    let s=max(0,o((i-12-j*4)/6)-e((i-54-j*2)/4)),
    u=max(0,sin(T*(i-20-j*4)/20))**3*L,
    a=j*.36-1.18,r=112+8*u
    c.beginPath();c.arc(128+r*cos(a),132+r*sin(a),(10+3*u)*s*(s>.25),0,T);c.fill()
  }
  B(c,-2.5*y,1-.011*br,1+.016*br,.03*L)
  F(c,(20-26*d)*M,-18*M-y-1.5*(sin(2*T*t-.6)+.565)+3*k,(.14*d-.11)*L,26-20*k,11*k,s=>1-(.16+.1*s*(1-2*d))*M)
}
