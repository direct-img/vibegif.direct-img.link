// ink wash clouds in layered soft washes with darker undersides drifting slowly past each other
const K=a=>`rgba(20,18,16,${a})`,{sin,cos,PI}=Math,T=PI*2,
R=s=>()=>{let z=s+=0x6D2B79F5;z=Math.imul(z^z>>>15,z|1);z^=z+Math.imul(z^z>>>7,z|61);return((z^z>>>14)>>>0)/2**32},
// brush: dabs stamped along f(u) with radius w(u)
B=(c,f,w,n=30)=>{c.beginPath()
  for(let k=0;k<=n;k++){const u=k/n,[x,y]=f(u),r=w(u);r>.2&&(c.moveTo(x+r,y),c.arc(x,y,r,0,T))}
  c.fill()},
cloud=(c,x,y,s,sd,a,t)=>{
  const r=R(sd),n=6+(r()*3|0),L=[]
  for(let k=0;k<n;k++){
    const u=k/(n-1),h=sin(PI*u)**.7,
      q=s*(.15+h*.3*(.55+r()*.6))*(1+.06*sin(T*(t+r())))
    L.push([x+(u-.5)*s*1.8+(r()-.5)*s*.12,y-q*.55,q])
  }
  // a couple of high billows riding on top
  for(let k=0;k<2;k++){const[X,Y,q]=L[2+k*2+(r()*2|0)]||L[2];L.push([X+(r()-.5)*q,Y-q*.75,q*(.55+r()*.25)*(1+.08*sin(T*(t+r())))])}
  L.sort((p,q)=>p[1]-q[1])
  for(const[X,Y,q]of L){
    // each lobe hides what is behind it, then gets a wash pooling at its lower edge
    c.globalCompositeOperation='destination-out';c.filter='blur(2.5px)';c.fillStyle='#000'
    c.beginPath();c.arc(X,Y,q,0,T);c.fill()
    c.globalCompositeOperation='source-over'
    const g=c.createLinearGradient(0,Y-q,0,Y+q*.9),h=r()
    g.addColorStop(0,K(a*.1));g.addColorStop(.5,K(a*.26));g.addColorStop(1,K(a*.7))
    c.filter='blur(2.5px)';c.fillStyle=g;c.beginPath();c.arc(X,Y,q,0,T);c.fill()
    // broken contour: a tapered flick over the crown
    if(h<.75){
      const a0=-2.9+h,a1=a0+1.1+h
      c.filter='blur(.6px)';c.fillStyle=K(a*.75)
      B(c,u=>[X+cos(a0+(a1-a0)*u)*q,Y+sin(a0+(a1-a0)*u)*q],u=>s*.02*sin(PI*u**.6)**.8,50)
    }
  }
  // level the base, then pool dark ink along it
  c.globalCompositeOperation='destination-out';c.filter=`blur(${s*.05}px)`
  c.fillRect(x-s*1.4,y+s*.1,s*2.8,s*.6)
  c.globalCompositeOperation='source-over'
  c.filter='blur(2px)';c.fillStyle=K(a)
  B(c,u=>[x+(u-.5)*s*1.9,y+s*.03+sin(u*9+sd)*s*.025],u=>s*.075*sin(PI*u)**.5*(.55+.45*sin(u*7+sd)**2),90)
  c.filter='none'
},
fade=(c,w=16)=>{
  c.save();c.globalCompositeOperation='destination-out'
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
},
snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=Math.round(d[k+j]/s)*s;d[k+3]=Math.min(255,Math.round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}
export const frames=28,delay=95,dither=true
export default(c,t)=>{
  // [spacing, y, size, alpha, seed, direction, offset]
  for(const[S,y,s,a,sd,d,o]of[[230,84,54,.5,3,1,40],[280,146,84,.68,11,-1,150],[310,214,66,.86,24,1,250]])
    for(let k=-1;k<3;k++)cloud(c,((o+d*t*S)%S+S)%S+k*S-60,y+3*sin(T*t+sd),s,sd,a,t)
  fade(c,40);snap(c)
}
