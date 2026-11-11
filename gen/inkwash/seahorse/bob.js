// ink wash seahorse bobbing among swaying seagrass, tail curling and uncurling, dorsal fin fluttering, ochre belly
export const frames=24,delay=85,dither=true
const{sin,cos,PI,hypot,min,max,abs,round,floor}=Math,T=2*PI
const ink=(a,k='20,18,16')=>`rgba(${k},${a})`
const R=s=>(s=sin(s*127.1+3.7)*43758.5453,s-floor(s))
const bz=(...p)=>u=>{
  let q=p
  while(q[1])q=q.slice(1).map((v,k)=>[q[k][0]+(v[0]-q[k][0])*u,q[k][1]+(v[1]-q[k][1])*u])
  return q[0]
}
// polyline as a path function
const pl=p=>u=>{
  const n=p.length-1,k=floor(min(n-.001,max(0,u*n))),e=u*n-k
  return[p[k][0]+(p[k+1][0]-p[k][0])*e,p[k][1]+(p[k+1][1]-p[k][1])*e]
}
// brush stroke: outline offset from centerline f by width profile w
const B=(c,f,w,a,n=22,k)=>{
  const P=[],Q=[]
  for(let j=0;j<=n;j++){
    const u=j/n,[x,y]=f(u),[X,Y]=f(u+.02),d=hypot(X-x,Y-y)||1,h=w(u)/2,nx=(Y-y)/d*h,ny=(x-X)/d*h
    P.push([x+nx,y+ny]);Q.unshift([x-nx,y-ny])
  }
  c.fillStyle=ink(a,k);c.beginPath();[...P,...Q].map(([x,y])=>c.lineTo(x,y));c.fill()
}
// press in, swell, taper to a point
const tp=(w,e=.6)=>u=>w*sin(PI*min(1,u)**e)+.4
// soft wash blob through points
const W=(c,p,a,b=2,k)=>{
  const n=p.length,m=j=>[(p[j%n][0]+p[(j+1)%n][0])/2,(p[j%n][1]+p[(j+1)%n][1])/2]
  c.filter=`blur(${b}px)`;c.fillStyle=ink(a,k);c.beginPath();c.moveTo(...m(n-1))
  p.map((q,j)=>c.quadraticCurveTo(...q,...m(j)))
  c.fill();c.filter='none'
}
const E=(c,x,y,rx,ry,r,a,b=0,k)=>{
  c.filter=b?`blur(${b}px)`:'none';c.fillStyle=ink(a,k);c.beginPath();c.ellipse(x,y,rx,ry,r,0,T);c.fill();c.filter='none'
}
// light areas are cut out of the ink
const cut=(c,f)=>{c.save();c.globalCompositeOperation='destination-out';f();c.restore()}
const fade=(c,w=16)=>cut(c,()=>{
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
})
const snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=round(d[k+j]/s)*s;d[k+3]=min(255,round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}
const sm=(a,b,x)=>(x=min(1,max(0,(x-a)/(b-a))),x*x*(3-2*x))
const off=(f,o)=>u=>{
  const[x,y]=f(u),[X,Y]=f(u+.02),d=hypot(X-x,Y-y)||1,h=o(u)
  return[x+(Y-y)/d*h,y-(X-x)/d*h]
}
export default(c,t)=>{
  const s=sin(T*t),q=sin(T*t-1)
  // seagrass: long ribbons, tips trailing the sway
  for(const[x,h,w,a,k]of[[38,196,9,.36,0],[62,150,11,.6,1],[88,214,7,.2,2],[226,120,9,.3,3],[52,96,8,.8,4]]){
    const d=(u,l)=>(10+h*.11)*u**1.6*sin(T*t-u*1.6-k*1.1-l)
    c.filter='blur(.7px)'
    B(c,u=>[x+d(u,0)+h*.1*u*(k%2?1:-1)+5*sin(u*5+k),262-h*u],u=>w*sin(PI*min(1,u+.06)**.4)*(.75+.25*sin(u*7+k*2))+.5,a,26)
    c.filter='none'
  }
  // seahorse spine: heading integrated from neck to the curled tail
  c.translate(150,44+5*s);c.rotate(.05*q);c.scale(1.3,1.3)
  const P=[[0,0]],L=176,N=60,cu=7.4*(1+.13*sin(T*t+.8))
  for(let j=1,x=0,y=0;j<=N;j++){
    const u=j/N,a=u<.3?.95-1.6*sm(0,.3,u):u<.55?-.65+1.1*sm(.3,.55,u):.45-cu*((u-.55)/.45)**1.8
    x+=sin(a)*L/N;y+=cos(a)*L/N;P.push([x,y])
  }
  const f=pl(P),w=u=>2+11*(1-u)+22*Math.exp(-(((u-.3)/.17)**2))
  // dorsal and pectoral fins: fluttering fans of hairlines over a pale wedge
  for(const[u0,l,n,a0]of[[.42,23,9,0],[.07,12,5,.5]]){
    const[x,y]=off(f,u=>w(u)*.42)(u0)
    for(let k=0;k<n;k++){
      const a=a0-.75+k*1.5/(n-1)+.13*sin(T*4*t+k*.9),r=l*(.75+.25*sin(PI*k/(n-1)))
      B(c,bz([x,y],[x+cos(a)*r*.6,y+sin(a)*r*.6+2],[x+cos(a)*r,y+sin(a)*r]),u=>7*sin(PI*u**.7)+1,.13,8)
      if(k%2==0)B(c,bz([x,y],[x+cos(a)*r,y+sin(a)*r]),tp(1.3),.5,8)
    }
  }
  // body: a pale wash, then one loaded stroke per bony ring, pressed in at the back and thinning toward the belly
  c.filter='blur(1.2px)'
  B(c,f,w,.2,60)
  c.globalCompositeOperation='multiply'
  for(let u=.02,k=0;u<.7;k++){
    const h=w(u),d=h*.36+2.6,g=bz(off(f,()=>h*.56)(u),f(u+d*.8/L),off(f,()=>-h*(.4+.12*R(k)))(u+d*.25/L))
    if(k%3!=2&&u<.6){
      c.filter='blur(2px)'
      B(c,u=>g(.3+u*.7),tp(d*1.7),.55,8,'190,146,70')
    }
    c.filter='blur(.5px)'
    B(c,g,tp(d*.62,.4),.34,12)
    B(c,u=>g(u*(.5+.2*R(k+3))),tp(d*(.7+.2*R(k+7)),.4),[.8,.6,.72][k%3],10)
    u+=d/L
  }
  // tail: one tapering stroke with small ticks, curling
  B(c,u=>f(.66+u*.34),u=>w(.66+u*.34)*sm(-.1,.25,u)+.6,.72,30)
  for(let k=0;k<5;k++){
    const u=.7+k*.034,h=w(u)
    B(c,bz(off(f,()=>h*.8+.5)(u),off(f,()=>-h*.3)(u+.008)),tp(1.7,.35),.8,6)
  }
  c.globalCompositeOperation='source-over'
  // broken belly contour
  for(const[u0,u1]of[[.1,.27],[.34,.47],[.6,.7]])B(c,u=>off(f,v=>-w(v)*.5)(u0+u*(u1-u0)),tp(2.2,.5),.6,10)
  c.filter='none'
  // head: nods against the bob
  c.translate(1,-4);c.rotate(.12*q-.1)
  W(c,[[-14,-4],[-8,-14],[6,-14],[12,-4],[8,8],[-6,9]],.5,1.4)
  B(c,bz([-6,1],[-22,4],[-38,11]),u=>7*sin(PI*min(1,u+.1)**.45)+3.5*sm(.82,1,u)+1,.7,14)
  B(c,bz([-10,-10],[0,-18],[11,-10],[13,2]),tp(5,.45),.9)
  for(let k=0;k<5;k++)B(c,bz([-4+k*3,-13],[-6+k*4.5,-20-(k*7)%5]),tp(1.8,.3),.5+.1*k,6)
  B(c,bz([8,4],[12,9],[11,14]),tp(2.6,.3),.8,6)
  cut(c,()=>E(c,-4,-4,4.4,4.4,0,.5,.8))
  E(c,-4,-4,2.3,2.3,0,.95)
  c.setTransform(1,0,0,1,0,0)
  // bubbles from the snout
  c.lineWidth=1.3
  for(let k=0;k<3;k++){
    const p=(t+k/3)%1
    c.strokeStyle=ink(.6*sin(PI*p)**.6);c.beginPath()
    c.arc(96+6*sin(T*p*2+k*2)-k*5,62-p*48,1.6+2.4*p,.2,6);c.stroke()
  }
  fade(c,18);snap(c)
}
