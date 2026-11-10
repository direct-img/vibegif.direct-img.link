// round coral avatar mascot ball talking: pulses taller in an uneven speech rhythm, its two white dot eyes lively and glancing about, while mint sound waves pop out beside it on every syllable
export const frames=64,delay=50
const{PI,sin,cos,min}=Math,T=2*PI,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
S=[[3,5,.6],[7,7,1],[15,5,.5],[26,4,.6],[30,4,.45],[34,8,1],[43,4,.55],[47,7,.85]],
A=(f,z)=>S.reduce((n,[a,d,v],j)=>n+(f>a&f<a+d&&(z?j%2*2-1:1)*v*sin(PI*((f-a)/d)**.6)**2),0),
B=(c,u,v,k)=>{
  c.translate(128,222);c.transform(u,0,k,v,0,0);c.translate(-128,-222)
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
    c.save();c.translate(90*sin(p),90*sin(q));c.scale(cos(p)/.9539,v*cos(q)/.9978)
    c.beginPath();c.moveTo(-w,0);c.lineTo(w+.01,0);c.stroke();c.restore()
  }
}
export default(c,t,i)=>{
  let a=A(i),l=A(i-1.5),u=A(i-3),z=A(i-1,1),br=sin(2*T*t),
  g=e((i-2)/5)-2*e((i-21)/6)+e((i-55)/6),
  k=[.6,1,1,.4][i-21]||[.6,1,1,.4][i-57]||0
  c.strokeStyle='#1fbf9c'
  for(let j=0;j<2;j++){
    let n=e(2.4*(A(i-1-j*1.5)*(1+j)-j*.8))
    c.lineWidth=9*min(1,2*n)
    if(n>.25)c.beginPath(),c.arc(128,132-6*a,108+j*15+4*n,-.74-.3*n,.3*n-.74),c.stroke()
  }
  B(c,1-.03*a+.01*u-.011*br,1+.065*a-.02*u+.016*br,.03*z)
  F(c,7*g+6*z,-3*l-1.5*(sin(2*T*t-.6)+.565)+3*k,.07*g,26-20*k,11*k,1+.15*l)
}
