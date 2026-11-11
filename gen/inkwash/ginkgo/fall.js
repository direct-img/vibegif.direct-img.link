// ink wash ginkgo twig, golden fan-shaped leaves letting go and fluttering down in a gentle drift
export const frames=30,delay=85,dither=true
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
const au=(a,k=1)=>`rgba(${204*k|0},${150*k|0},${40*k|0},${min(1,a)})`
// ginkgo leaf: notched fan on a long stalk, hung from 0,0 and spreading away from it
const G=(c,x,y,r,rot,sx,a,sd)=>{
  c.save();c.translate(x,y);c.rotate(rot);c.scale(sx,1);c.translate(0,-r*.7)
  const m=14,wd=1.02,pt=[...Array(m+1)].map((_,j)=>{
    const g=-wd+2*wd*j/m,q=r*(1+.045*sin(j*2.1+sd*6))*(1-.34*Math.exp(-(((g+.04)/.11)**2)))*(.9+.1*sin(PI*j/m))
    return[sin(g)*q,-cos(g)*q]
  }),gr=c.createRadialGradient(0,0,0,0,0,r)
  gr.addColorStop(0,au(a*1.1,.86));gr.addColorStop(.45,au(a*.62));gr.addColorStop(.88,au(a));gr.addColorStop(1,au(a*1.3,.84))
  c.fillStyle=gr;c.beginPath();c.moveTo(0,0)
  c.quadraticCurveTo(pt[0][0]*.4+2,pt[0][1]*.4-2,...pt[0])
  pt.map(([X,Y],j)=>j&&c.quadraticCurveTo(...pt[j-1],(X+pt[j-1][0])/2,(Y+pt[j-1][1])/2))
  c.lineTo(...pt[m]);c.quadraticCurveTo(pt[m][0]*.4-2,pt[m][1]*.4-2,0,0);c.fill()
  c.strokeStyle=au(a*.55,.6);c.lineWidth=.7;c.beginPath()
  for(let j=1;j<m;j+=2)c.moveTo(0,0),c.lineTo(pt[j][0]*.82,pt[j][1]*.82)
  c.stroke()
  S(c,Q(0,r*.7,r*.06,r*.3,0,-1),2.2,au(a*1.2,.62),u=>1-u*.5,6)
  c.restore()
}
const main=C([[266,30],[222,50],[184,40],[140,62],[98,52]]),tw=[
  [C([[184,40],[176,58],[180,70]]),5],[C([[140,62],[130,78],[136,88]]),4.5],[C([[222,50],[228,68],[220,80]]),4.5],[C([[98,52],[84,50],[72,58]]),3.5]
]
// leaves that stay: x,y,size,angle,phase / leaves that let go: x,y,size,angle,drift
const hold=[[180,70,26,2.7,0],[180,70,22,3.7,.3],[136,88,25,3.4,.55],[72,58,22,2.5,.8],[220,80,20,2.6,.15],[112,56,17,-.5,.4]],
  drop=[[72,58,25,3.6,-18],[136,88,24,2.7,-52],[220,80,26,3.5,-96]]
export default(c,t)=>{
  S(c,main,10,I(.8),u=>(1-u*.6)*(.78+.22*sin(u*29+2)),30)
  H(c,main,7,I(.93),5,.05,3)
  tw.map(([f,w],k)=>S(c,f,w,I(k%2?.8:.92),u=>1-u*.35+.2*sin(u*9),10))
  c.fillStyle=I(.93)
  for(const u of[.25,.47,.7]){const[x,y]=main(u);c.beginPath();c.ellipse(x,y,4.6,3.2,u*7,0,T);c.fill()}
  hold.map(([x,y,r,a,p],k)=>G(c,x,y,r,a+.1*sin(T*(t+p)),1,.62,k))
  drop.map(([x0,y0,r,a,dx],k)=>{
    const p=(t+k/3)%1,q=max(0,(p-.3)/.7),w=T*q*1.6+k*2,e=min(1,q*5),
      x=x0+dx*q+20*sin(w)*e,y=y0+(286-y0)*q**1.25,al=.66*ss(0,.14,p)*(1-ss(.72,1,q))
    G(c,x,y,r*(.5+.5*ss(0,.16,p)),a+.1*sin(T*(p*2+k/3))*(1-e)+(.85*cos(w)-(a-PI))*e,1-e*(.4+.34*sin(w*2+1)),al,k+7)
  })
  fade(c);snap(c)
}
