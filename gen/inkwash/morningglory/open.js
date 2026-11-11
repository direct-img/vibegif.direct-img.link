// ink wash morning glory vine twining up a bamboo stake, an indigo trumpet flower opening as a tendril curls
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
const bl=(a,k=1)=>`rgba(${62*k|0},${70*k|0},${136*k|0},${min(1,a)})`
// heart leaf: a long middle dab between two shorter shoulders
const L=(c,x,y,d,l,tn)=>{
  c.filter='blur(.5px)'
  ;[0,.85,-.85].map((o,k)=>{
    const a=d+o,m=l*(k?.62:1)
    S(c,Q(x,y,x+cos(a+.2)*m*.5,y+sin(a+.2)*m*.5,x+cos(a)*m,y+sin(a)*m),m*(k?.7:.56),I(tn*(k?.7:1)),u=>sin(PI*min(1,u*.8+.2))**.6,12)
  })
  c.filter='none'
  S(c,Q(x,y,x+cos(d+.1)*l*.4,y+sin(d+.1)*l*.4,x+cos(d)*l*.8,y+sin(d)*l*.8),1.8,I(.9),u=>1-u,8)
}
const Td=(c,x,y,a,r,k)=>S(c,u=>{
  const q=r*(1-u)**1.2,g=a+u*k
  return[x-r*cos(a)+q*cos(g),y-r*sin(a)+q*sin(g)]
},2.2,I(.82),u=>1-u*.75,30)
const vine=C([[146,262],[104,222],[142,184],[102,146],[140,110],[104,72],[128,40]]),
  seg=[[[112,262],[115,196]],[[115.4,190],[119,98]],[[119.3,92],[123,6]]]
export default(c,t)=>{
  const o=ss(.05,.56,t)-ss(.8,1,t)
  // bamboo stake in three joints
  seg.map(([a,b],k)=>{
    const f=u=>[a[0]+(b[0]-a[0])*u,a[1]+(b[1]-a[1])*u]
    S(c,f,8.5,I(.36),u=>1+.22*(2*u-1)**6,12);H(c,f,6,I(.6),3,.05,k+2)
    S(c,u=>[b[0]-6+u*12,b[1]-3+sin(u*PI)*1.5],2.6,I(.9),u=>sin(PI*u)**.4,6)
  })
  S(c,vine,3.6,I(.8),u=>.6+.4*sin(u*21)**2,40)
  L(c,142,186,.3,44,.6);L(c,102,148,2.9,38,.44);L(c,104,222,2.5,34,.7);L(c,106,74,3.6,24,.5)
  Td(c,128,40,-1.2,13,5+4.5*o)
  // furled bud lower on the vine
  S(c,Q(140,110,152,120,160,136),2,I(.8),u=>1)
  S(c,Q(160,134,167,146,163,160),7,bl(.62),u=>sin(PI*u)**.7,10)
  ;[-.6,.6].map(g=>S(c,Q(160,134,160+g*6,140,161+g*7,146),4,I(.8)))
  // the flower: spindle bud swelling into a trumpet
  const bx=160,by=88,ax=-.62,ux=cos(ax),uy=sin(ax),l=40-8*o,tx=bx+ux*l,ty=by+uy*l,R=37*E(o)
  S(c,Q(140,110,150,98,bx,by),2.4,I(.8),u=>1)
  S(c,Q(bx,by,bx+ux*l*.5,by+uy*l*.5,tx,ty),10+16*o,bl(.34+.3*(1-o)),u=>sin(PI*u)**.7*(1-o)+(.2+.8*u**1.6)*o,14)
  for(let k=0;k<3;k++)S(c,Q(bx+ux*(10+k*9)-uy*4,by+uy*(10+k*9)+ux*4,bx+ux*(15+k*9),by+uy*(15+k*9),bx+ux*(17+k*9)+uy*4,by+uy*(17+k*9)-ux*4),1.6,bl(.8*(1-o)**2,.6))
  ;[-.7,0,.7].map(g=>S(c,Q(bx-ux*2,by-uy*2,bx+cos(ax+g)*6,by+sin(ax+g)*6,bx+cos(ax+g*1.5)*13,by+sin(ax+g*1.5)*13),5,I(.82)))
  if(R>1){
    c.save();c.translate(tx,ty);c.rotate(ax+.5);c.scale(1,.8)
    c.beginPath()
    for(let k=0;k<=40;k++){const a=k/40*T,r=R*(1+.045*cos(5*a));c.lineTo(cos(a)*r,sin(a)*r)}
    c.globalCompositeOperation='destination-out';c.fillStyle='rgba(0,0,0,.92)';c.fill()
    c.globalCompositeOperation='source-over'
    const g=c.createRadialGradient(0,0,0,0,0,R)
    g.addColorStop(0,bl(0));g.addColorStop(.22,bl(.14));g.addColorStop(.5,bl(.6));g.addColorStop(.86,bl(.7));g.addColorStop(.95,bl(.9,.8));g.addColorStop(1,bl(.6))
    c.fillStyle=g;c.fill()
    c.globalCompositeOperation='destination-out'
    for(let k=0;k<5;k++)S(c,u=>[cos(k*T/5+.3)*R*u*.97,sin(k*T/5+.3)*R*u*.97],R*.16,'rgba(0,0,0,.45)',u=>(1-u)**.5*min(1,u*8+.3),8)
    c.globalCompositeOperation='source-over'
    c.fillStyle=`rgba(200,160,60,${.7*o})`;c.beginPath();c.arc(0,0,R*.07,0,T);c.fill()
    c.restore()
  }
  fade(c);snap(c)
}
