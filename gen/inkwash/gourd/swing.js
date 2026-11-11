// ink wash bottle gourds hanging from a leafy vine with curling tendrils, swinging gently out of step
export const frames=24,delay=90,dither=true
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
// half-widths down a bottle gourd: small bulb, waist, big bulb
const gp=(r1,r2)=>{
  const y1=r1,y2=r1*1.8+r2*.75,h=y2+r2,n=16
  return[...Array(n+1)].map((_,k)=>{
    const y=h*k/n,a=1-((y-y1)/r1)**2,b=1-((y-y2)/r2)**2
    return[max(a>0?r1*a**.5:0,b>0?r2*b**.5:0,y<y2?r1*.7*sin(PI*min(.5,y/r1*.45+.05))**.3:0),y]
  })
}
const gpath=(c,P)=>{
  const q=[...P.map(([w,y])=>[-w,y]),...P.slice().reverse()],n=q.length
  c.beginPath()
  q.map((p,k)=>{const o=q[(k+1)%n],m=[(p[0]+o[0])/2,(p[1]+o[1])/2];k?c.quadraticCurveTo(...p,...m):c.moveTo(...m)})
  c.closePath()
}
// gourd on its stalk, swung by th around the point it hangs from: a pale ochre wash, a loaded second stroke
// pooling down the shaded side and at the waist, and a broken contour on that side only
const G=(c,x,y,l,r1,r2,th)=>{
  const P=gp(r1,r2),h=P[16][1],
    e=(s,a,b)=>u=>{const k=a+(b-a)*u,j=min(15,k|0),f=k-j;return[s*(P[j][0]+(P[j+1][0]-P[j][0])*f),P[j][1]+(P[j+1][1]-P[j][1])*f]}
  c.save();c.translate(x,y);c.rotate(th)
  S(c,Q(0,0,l*.1,l*.5,0,l+2),2.2,I(.85),u=>.5+.5*u,12)
  c.translate(0,l)
  c.filter='blur(.5px)'
  ;[[r1,r1],[r1*1.8+r2*.75,r2]].map(([cy,r],k)=>{
    // each bulb is two side strokes of a loaded brush, the lit one paler, with a sliver left dry between them
    S(c,u=>[-sin(u*PI)*r*.44+r*.1,cy-cos(u*PI)*r*.74],r*1.16,'rgba(150,118,42,.5)',u=>sin(PI*u)**.32,20)
    S(c,u=>[sin(u*PI)*r*.5+r*.14,cy-cos(u*PI)*r*.72],r*.66,'rgba(184,154,62,.32)',u=>sin(PI*u)**.36,18)
  })
  c.filter='none'
  S(c,e(-1,.8,5.2),2.6,I(.84),u=>sin(PI*u)**.5,10)
  S(c,e(-1,6.6,15.2),3.6,I(.9),u=>sin(PI*min(1,u*1.15))**.45*(.55+.45*sin(u*6+r1)**2),18)
  c.fillStyle=I(.9);c.beginPath();c.ellipse(0,1,3,2,0,0,T);c.fill()
  c.beginPath();c.arc(0,h,1.7,0,T);c.fill()
  c.restore()
}
// broad lobed leaf: five wet dabs in mid and dark ink, veins flicked in
const L=(c,x,y,d,l,sd)=>{
  const z=rn(sd)
  c.filter='blur(.4px)'
  ;[1.4,-1.35,.7,-.68,0].map((o,k)=>{
    const a=d+o,m=l*(1-Math.abs(o)*.3)*(.9+z()*.2)
    S(c,Q(x,y,x+cos(a+.18)*m*.5,y+sin(a+.18)*m*.5,x+cos(a)*m,y+sin(a)*m),m*.56,I([.2,.4,.3,.52,.38][(k+sd)%5]),u=>sin(PI*min(1,u*.78+.22))**.55,14)
  })
  c.filter='none'
  ;[0,.62,-.6,1.2].map((o,k)=>S(c,Q(x,y,x+cos(d+o+.12)*l*.4,y+sin(d+o+.12)*l*.4,x+cos(d+o)*l*(k?.5:.78),y+sin(d+o)*l*(k?.5:.78)),k?1.5:2.2,I(.93),u=>1-u,8))
}
// tendril: a hairline spiral winding in from x,y
const Td=(c,x,y,a,r,k)=>S(c,u=>{
  const q=r*(1-u)**1.2,g=a+u*k
  return[x-r*cos(a)+q*cos(g),y-r*sin(a)+q*sin(g)]
},1.5,I(.85),u=>1-u*.6,30)
const vine=C([[-8,42],[40,50],[92,74],[142,56],[198,68],[262,52]])
export default(c,t)=>{
  const w=k=>sin(T*t+k)
  S(c,u=>vine(u*.8),7,I(.85),u=>(1-u*.6)*(.8+.2*sin(u*21)),36)
  H(c,vine,5,I(.8),5,.5,3)
  L(c,50,56,2.2,56,1);L(c,146,56,-1.2,40,2);L(c,222,62,.8,46,3)
  Td(c,116,66,2.4,12,8+w(1));Td(c,198,68,.4,10,-9-w(3));Td(c,26,50,1.9,9,7.5+w(5))
  G(c,136,59,34,8,13,.16*w(4.2))
  G(c,88,73,46,17,30,.075*w(0))
  G(c,180,64,88,13,23,.095*w(2.1))
  fade(c);snap(c)
}
