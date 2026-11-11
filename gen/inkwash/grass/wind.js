// ink wash tufts of tall grass with seed heads bending and rippling as waves of wind pass through
export const frames=24,delay=85,dither=true
const{sin,cos,PI,min,max,hypot}=Math,T=PI*2
const I=a=>`rgba(20,18,16,${a})`
const rn=s=>()=>(s=s*16807%2147483647)/2147483647
const E=u=>u<0?0:u>1?1:u*u*(3-2*u),ss=(a,b,u)=>E((u-a)/(b-a))
const Q=(a,b,d,e,g,h)=>u=>[(1-u)**2*a+2*u*(1-u)*d+u*u*g,(1-u)**2*b+2*u*(1-u)*e+u*u*h]
// brush stroke: outline offset from a centerline, width following a pressure profile
const S=(c,f,w,col,pr=u=>sin(PI*u)**.6,n=18)=>{
  const P=[...Array(n+1)].map((_,k)=>f(k/n)),L=[],R=[]
  P.map(([x,y],k)=>{
    const[a,b]=P[max(k-1,0)],[d,e]=P[min(k+1,n)],h=hypot(d-a,e-b)||1,r=w*pr(k/n)/2
    L.push([x+(b-e)/h*r,y+(d-a)/h*r]);R.unshift([x-(b-e)/h*r,y-(d-a)/h*r])
  })
  c.fillStyle=col;c.beginPath();[...L,...R].map(([x,y])=>c.lineTo(x,y));c.fill()
}
// dry-brush hairlines riding along a stroke
const H=(c,f,w,col,m=4,u0=.5,sd=7)=>{
  const r=rn(sd);c.strokeStyle=col;c.lineWidth=.9
  for(let j=0;j<m;j++){
    const o=(j/(m-1)-.5)*w,a=u0+r()*.15,b=.8+r()*.2;c.beginPath()
    for(let k=0;k<=12;k++){
      const u=a+(b-a)*k/12,[x,y]=f(u),[X,Y]=f(u+.02),h=hypot(X-x,Y-y)||1
      c.lineTo(x-(Y-y)/h*o,y+(X-x)/h*o)
    }
    c.stroke()
  }
}
const fade=(c,w=16)=>{
  c.save();c.globalCompositeOperation='destination-out'
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
}
const snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=Math.round(d[k+j]/s)*s;d[k+3]=min(255,Math.round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}
const C=p=>u=>{
  const n=p.length-1,s=min(n-1e-6,max(0,u)*n),k=s|0,f=s-k,g=j=>p[min(n,max(0,j))],[a,b,d,e]=[g(k-1),g(k),g(k+1),g(k+2)]
  return[0,1].map(j=>.5*(2*b[j]+(d[j]-a[j])*f+(2*a[j]-5*b[j]+4*d[j]-e[j])*f*f+(3*b[j]-a[j]-3*d[j]+e[j])*f**3))
}
const Z=rn(31),
  // tufts: x, ground y, blades, tallest
  bl=[[74,232,7,178],[186,236,5,112]].flatMap(([x,y,n,h])=>[...Array(n)].map((_,k)=>{
    const q=(k+.5)/n-.5
    // root x, y, height, lean, width, tone, flex, seed head
    return[x+q*26+Z()*6,y+Z()*4,h*(.42+.58*(1-Math.abs(q)*1.3)*(.75+Z()*.5)),q*1.5+Z()*.2-.1,5+Z()*6,[.36,.8,.55,.9,.3][k%5],.7+Z()*.6,k%4==2]
  }))
export default(c,t)=>{
  // ground: a soft wash and a couple of dry sweeps
  c.filter='blur(3px)';c.fillStyle=I(.14);c.beginPath();c.ellipse(84,240,70,7,.03,0,T);c.ellipse(190,243,44,5,-.03,0,T);c.fill();c.filter='none'
  const gr=Q(10,238,120,248,250,236)
  H(c,gr,7,I(.5),3,.1,5)
  bl.map(([x,y,h,ln,w,a,fx,hd],k)=>{
    // wind: a slow wave rolling left to right with a quicker shiver on top
    const W=(.3+.27*sin(T*(t-x/300))+.06*sin(T*(2*t-x/110)+k))*fx,p=[[x,y]]
    for(let j=0;j<4;j++){
      const g=ln*(1-j*.12)+W*((j+1)/4)**1.4*(.85+h/220)
      p.push([p[j][0]+sin(g)*h/4,p[j][1]-cos(g)*h/4])
    }
    const f=C(p)
    if(hd){
      S(c,f,2.2,I(.7),u=>1-u*.5,20)
      const[ex,ey]=p[4],[qx,qy]=p[3],g=Math.atan2(ey-qy,ex-qx)+.25,m=h*.2
      c.filter='blur(.8px)'
      S(c,Q(ex,ey,ex+cos(g)*m*.5,ey+sin(g)*m*.5,ex+cos(g+.35)*m,ey+sin(g+.35)*m),m*.3,I(.5),u=>sin(PI*min(1,u*.8+.2))**.6,10)
      c.filter='none'
      H(c,Q(ex,ey,ex+cos(g)*m*.6,ey+sin(g)*m*.6,ex+cos(g+.4)*m*1.25,ey+sin(g+.4)*m*1.25),m*.3,I(.8),4,.05,k)
    }else{
      c.filter='blur(.5px)'
      S(c,f,w,I(a),u=>(.4+.6*sin(PI*min(1,u*1.6))**.7)*(1-u)**.6,22)
      c.filter='none'
    }
  })
  fade(c);snap(c)
}
