// ink wash peony unfolding from a tight bud into a full ruffled rose bloom, leaves in wet dabs, then closing again
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
const ro=(a,k=1)=>`rgba(${168*k|0},${56*k|0},${84*k|0},${min(1,a)})`
// ruffled petal: a fan from the heart, cut out of what lies behind, then washed deep at the base and pooled at the rim
const P=(c,cx,cy,a,len,wd,sd,al)=>{
  const m=9,pt=[...Array(m+1)].map((_,j)=>{
    const g=a-wd+2*wd*j/m,r=len*(.76+.24*sin(PI*j/m)**.5)*(1+.09*sin(j*2.3+sd*5))
    return[cx+cos(g)*r,cy+sin(g)*r*.86]
  }),path=()=>{
    c.beginPath();c.moveTo(cx,cy)
    pt.map(([x,y],j)=>j<m?c.quadraticCurveTo(x,y,(x+pt[j+1][0])/2,(y+pt[j+1][1])/2):c.lineTo(x,y))
    c.closePath()
  },g=c.createRadialGradient(cx,cy,0,cx,cy,len)
  c.globalCompositeOperation='destination-out';c.fillStyle='rgba(0,0,0,.9)';path();c.fill()
  c.globalCompositeOperation='source-over'
  g.addColorStop(0,ro(al*1.7,.72));g.addColorStop(.42,ro(al*.55));g.addColorStop(.8,ro(al*.95));g.addColorStop(.93,ro(al*1.5,.9));g.addColorStop(1,ro(al*.7))
  c.fillStyle=g;path();c.fill()
}
// leaf spray: three pointed wet dabs in different tones with a dark vein
const L=(c,x,y,d,l,sd)=>[0,.62,-.55].map((o,k)=>{
  const a=d+o,m=l*(k?.8:1),f=Q(x,y,x+cos(a+.25)*m*.5,y+sin(a+.25)*m*.5,x+cos(a)*m,y+sin(a)*m)
  c.filter='blur(.8px)'
  S(c,f,m*.42,I([.6,.42,.3][(k+sd)%3]),u=>sin(PI*min(1,u*.9+.1))**.7,12)
  S(c,u=>f(u*.7),m*.2,I(.3),u=>sin(PI*u),8)
  c.filter='none'
  S(c,u=>f(u*.8),1.8,I(.9),u=>1-u,8)
})
const st=Q(92,264,96,176,146,108),R=rn(11),
  // ring,angle,length,width,alpha
  pet=[[0,7,60,.6,.4],[1,6,44,.62,.5],[2,5,29,.7,.6],[3,4,15,.8,.72]].flatMap(([r,n,l,w,al])=>
    [...Array(n)].map((_,k)=>[r,k/n*T+r*.5+R()*.3,l*(.9+R()*.2),w,al,R()]))
export default(c,t)=>{
  const o=ss(.04,.6,t)-ss(.8,1,t),ax=-1.05,cx=146,cy=104-o*6
  S(c,st,5.5,I(.8),u=>.5+.5*u**.4*(1-u*.3))
  H(c,st,3,I(.9),3,.1,4)
  L(c,96,216,3.6,56,0);L(c,101,186,-.3,64,1);L(c,118,148,2.85,40,2)
  // sepals cupping the bud
  ;[-.9,0,.9].map(g=>S(c,Q(cx,cy+6,cx+cos(ax+PI+g)*8,cy+8+sin(ax+PI+g)*6,cx+cos(ax+g*1.6)*12,cy+6+sin(ax+g*1.6)*12),7,I(.7)))
  pet.map(([r,a,l,w,al,sd])=>{
    const q=ss(r*.13,.6+r*.13,o),d=((a-ax+PI*3)%T)-PI
    P(c,cx,cy,ax+d*(.3+.7*q),21-r*3+(l-21+r*3)*q,.5+(w-.5)*q,sd,al+.1*(1-q))
  })
  // stamens
  const q=ss(.55,.95,o),Z=rn(5)
  for(let k=0;k<9;k++){
    const a=Z()*T,r=2+Z()*6
    c.fillStyle=k%3?`rgba(196,146,48,${.85*q})`:I(.85*q)
    c.beginPath();c.arc(cx+cos(a)*r,cy+sin(a)*r*.86,1.5,0,T);c.fill()
  }
  fade(c);snap(c)
}
