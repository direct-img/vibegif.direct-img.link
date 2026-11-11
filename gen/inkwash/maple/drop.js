// ink wash maple branch, translucent red-orange leaves letting go one by one and spinning down
export const frames=30,delay=80,dither=true
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
const lobes=[[0,1],[-.8,.86],[.8,.86],[-1.65,.62],[1.65,.62],[-2.45,.34],[2.45,.34]]
// maple leaf: seven pointed wash lobes pooling darker where they overlap
const leaf=(c,x,y,r,rot,sx,a,hue)=>{
  c.save();c.translate(x,y);c.rotate(rot);c.scale(sx,1)
  const col=`rgba(${hue?212:192},${hue?104:66},${hue?44:40},${a})`
  lobes.map(([g,l])=>S(c,Q(0,0,sin(g)*r*l*.5,-cos(g)*r*l*.5,sin(g)*r*l,-cos(g)*r*l),r*l*.46,col,u=>sin(PI*min(1,u*.92+.08))**.75,8))
  c.strokeStyle=`rgba(96,26,18,${a*.7})`;c.lineWidth=.8;c.beginPath()
  lobes.slice(0,5).map(([g,l])=>(c.moveTo(0,0),c.lineTo(sin(g)*r*l*.7,-cos(g)*r*l*.7)))
  c.moveTo(0,0);c.lineTo(r*.08,r*.6);c.stroke()
  c.restore()
}
const main=C([[-8,34],[36,50],[74,40],[116,64],[148,58],[188,84]]),tw=[
  [C([[74,40],[66,72],[80,100]]),5],[C([[148,58],[170,36],[204,30]]),4.5],[C([[188,84],[212,92],[224,118]]),4.5],
  [C([[36,50],[26,66],[30,84]]),3.5],[C([[116,64],[126,92],[114,124]]),4],[C([[150,58],[164,78],[166,100]]),3]
]
// leaves that stay: twig end x,y,size,angle,phase,hue
const hold=[[204,30,24,1.2,0,1],[30,84,25,3.5,.6,1],[114,124,26,2.9,.45,0],[104,56,18,-.5,.8,0]]
// leaves that let go: twig end x,y,size,angle,drift,spin
const drop=[[80,100,27,3.4,30,1],[224,118,27,2.8,-76,-1],[166,100,23,3.1,-40,1]]
export default(c,t)=>{
  S(c,main,11,I(.82),u=>(1-u*.6)*(.78+.22*sin(u*31+1)),30)
  H(c,main,8,I(.93),5,.05,3)
  tw.map(([f,w],k)=>(S(c,f,w,I(k%2?.78:.9),u=>(1-u*.75)*(.85+.15*sin(u*17+k)),12),H(c,f,w*.7,I(.55),2,.3,k+5)))
  c.fillStyle=I(.93)
  for(const u of[.2,.4,.6,.8]){const[x,y]=main(u);c.beginPath();c.ellipse(x,y-1,4.6,3.4,u*9,0,T);c.fill()}
  hold.map(([x,y,r,a,p,h])=>{
    const g=a+.09*sin(T*(t+p))
    leaf(c,x+.6*r*sin(g),y-.6*r*cos(g),r,g,1,.62,h)
  })
  drop.map(([x0,y0,r,a,dx,sp],k)=>{
    const p=(t+k/3)%1,q=max(0,(p-.3)/.7),g=a+.09*sin(T*(p*3+k/3))*(1-min(1,q*9)),
      x=x0+.6*r*sin(g)+dx*q+16*sin(T*q*1.4+k)*min(1,q*4),y=y0-.6*r*cos(g)+(270-y0)*q**1.5,
      al=.68*ss(0,.14,p)*(1-ss(.7,1,q))
    leaf(c,x,y,r*(.5+.5*ss(0,.16,p)),g+sp*q*5.2,q?cos(q*T*1.75)*.86+.14*sin(q*40):1,al,k%2)
  })
  fade(c);snap(c)
}
