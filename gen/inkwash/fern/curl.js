// ink wash fiddlehead fern fronds slowly unfurling from tight coils into arching fronds, then curling back
export const frames=32,delay=85,dither=true
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
// frond: the stalk is walked out step by step, straight where it has unrolled and winding into a coil beyond that,
// leaflets swell out as wet dabs once their stretch of stalk has opened
const F=(c,x,y,th,L,o,sg,arch,sd)=>{
  const n=70,ds=L/n,ur=.12+.88*o,P=[[x,y]],A=[th],z=rn(sd)
  for(let k=0;k<n;k++){
    const s=k/n,cu=ss(ur-.04,ur+.06,s),r=3.2+(1-s)*L*.085
    th+=sg*ds*((1-cu)*arch*2*s/L+cu/r)
    P.push([x+=cos(th)*ds,y+=sin(th)*ds]);A.push(th)
  }
  const f=u=>{const k=min(n-1e-6,max(0,u)*n),j=k|0,g=k-j;return[P[j][0]+(P[j+1][0]-P[j][0])*g,P[j][1]+(P[j+1][1]-P[j][1])*g]}
  // leaflets, the two sides out of step, swept toward the tip
  c.filter='blur(.5px)'
  for(let j=0;j<24;j++){
    const s=.14+j*.034+z()*.01,sd2=j%2?1:-1,v=.1+.9*ss(0,.14,ur-s),k=s*n|0,[px,py]=P[k],
      l=L*.3*min(1,(s-.08)*7)*(1-s)**.75*(.8+z()*.4)*v,a=A[k]+sd2*(1.38-.5*s+z()*.24-.12)
    S(c,Q(px,py,px+cos(a)*l*.5,py+sin(a)*l*.5,px+cos(a-sd2*.5)*l,py+sin(a-sd2*.5)*l),l*.19+1.5,I([.55,.36,.74,.45][z()*4|0]),u=>sin(PI*min(1,u*.85+.15))**.7,8)
  }
  c.filter='none'
  S(c,f,L*.03+2,I(.88),u=>(1-u*.7)*(.85+.15*sin(u*30)),n)
  H(c,u=>f(u*.4),L*.02,I(.5),2,.1,sd)
}
export default(c,t)=>{
  const o=ss(.02,.58,t)-ss(.78,1,t)
  // mossy foot
  c.filter='blur(2px)';c.fillStyle=I(.3);c.beginPath();c.ellipse(150,246,52,7,0,0,T);c.fill();c.filter='none'
  S(c,Q(96,248,150,254,214,246),3,I(.6),u=>sin(PI*u)**.5)
  F(c,170,248,-1.2,120,.08+.8*ss(.25,1,o),1,1.5,7)
  F(c,134,250,-1.9,62,.02+.3*o,-1,.8,4)
  F(c,152,250,-1.42,236,o,-1,1.75,2)
  const z=rn(6);c.fillStyle=I(.8)
  for(let k=0;k<7;k++)c.beginPath(),c.arc(112+z()*84,244+z()*8,1+z()*1.6,0,T),c.fill()
  fade(c);snap(c)
}
