// round coral avatar mascot ball listening: leans in with its head tilted and its two white dot eyes wide while blue sound ripples arrive from the corner, giving a small nod as each one lands
export const frames=64,delay=50
const{PI,sin,cos,min}=Math,T=2*PI,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
o=x=>x<0?0:x>1?1:(x--,1+2.7*x*x*x+1.7*x*x),
R=[9,15,21,33,39],
B=(c,x,u,v,k)=>{
  c.translate(128+x,222);c.transform(u,0,k,v,0,0);c.translate(-128,-222)
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
    c.save();c.translate(90*sin(p),90*sin(q));c.scale(v*cos(p)/.9539,v*cos(q)/.9978)
    c.beginPath();c.moveTo(-w,0);c.lineTo(w+.01,0);c.stroke();c.restore()
  }
}
export default(c,t,i)=>{
  let m=f=>o((f-3)/8)-e((f-52)/8),M=m(i),L=m(i-2),br=sin(2*T*t),
  n=R.reduce((n,a)=>n+sin(PI*e((i-a-12)/7))**2,0),
  k=[.6,1,1,.4][i-29]||[.6,1,1,.4][i-58]||0
  c.strokeStyle='#2f9bff'
  for(let a of R){
    let x=(i-a)/15,s=min(1,x*12,(1-x)*5),w=(.27+.15*x)*s
    if(x>0&s>.4){
      c.lineWidth=11*s
      c.beginPath();c.arc(-20,-20,68+48*x**1.3,.8-w,.8+w);c.stroke()
    }
  }
  B(c,-5*L,1+.012*n-.011*br,1-.018*n+.016*br,.05*L)
  F(c,-7*M,4*n-3*M-1.5*(sin(2*T*t-.6)+.565)+3*k,-.17*L,26-20*k,11*k,1+.17*M*(1-k))
}
