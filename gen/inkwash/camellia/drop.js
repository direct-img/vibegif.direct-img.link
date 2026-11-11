// ink wash camellia on a glossy-leaved twig, the whole red blossom drops, lands and settles while a new bud opens
export const frames=32,delay=80,dither=true
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
const re=(a,k=1)=>`rgba(${182*k|0},${50*k|0},${46*k|0},${min(1,a)})`
// blossom: o=0 a tight bud, o=1 a cup of round overlapping petals around a golden boss of stamens
const F=(c,x,y,r,rot,o,al)=>{
  if(al<.01)return
  c.save();c.translate(x,y);c.rotate(rot);c.globalAlpha=al
  const n=6,z=rn(9)
  for(let k=0;k<n;k++){
    const a=(k*2%n+(k>2?.5:0))/n*T+z()*.3,d=r*.44*o,q=r*(.3+.3*o),px=cos(a)*d,py=sin(a)*d*.9,
      g=c.createRadialGradient(px-cos(a)*q*.4,py-sin(a)*q*.4,0,px,py,q)
    c.beginPath();c.ellipse(px,py,q,q*(.8+.1*z()),a+1.57,0,T)
    c.globalCompositeOperation='destination-out';c.fillStyle='rgba(0,0,0,.85)';c.fill()
    c.globalCompositeOperation='source-over'
    g.addColorStop(0,re(.9,.7));g.addColorStop(.4,re(.5));g.addColorStop(.85,re(.72));g.addColorStop(1,re(.95,.85))
    c.fillStyle=g;c.fill()
  }
  const s=ss(.5,1,o)
  c.fillStyle=`rgba(204,150,44,${.9*s})`;c.beginPath();c.arc(0,0,r*.26*s,0,T);c.fill()
  for(let k=0;k<7;k++){
    const a=z()*T,d=z()*r*.2*s
    c.fillStyle=k%2?I(.8*s):`rgba(150,96,20,${s})`;c.beginPath();c.arc(cos(a)*d,sin(a)*d,1.3,0,T);c.fill()
  }
  c.restore()
}
// glossy leaf: dark pointed dab with a sliver of light cut along the midrib
const L=(c,x,y,d,l,a,b=.3)=>{
  const f=Q(x,y,x+cos(d+b)*l*.5,y+sin(d+b)*l*.5,x+cos(d)*l,y+sin(d)*l)
  const o=(g,h)=>u=>{const[X,Y]=f(g+u*h);return[X+sin(d)*l*.07,Y-cos(d)*l*.07]}
  c.filter='blur(.5px)'
  S(c,f,l*.42,I(a),u=>sin(PI*min(1,u*.86+.14))**.62,16)
  c.filter='none'
  S(c,f,1.6,I(.93),u=>1-u*.6,10)
  c.globalCompositeOperation='destination-out'
  S(c,o(.14,.5),l*.06,'rgba(0,0,0,.7)',u=>sin(PI*u)**.8,8)
  c.globalCompositeOperation='source-over'
}
const main=C([[-8,112],[36,96],[80,104],[124,84],[158,92]]),up=C([[80,104],[92,70],[84,46]])
export default(c,t)=>{
  const s=max(0,t-.14),bob=-.035*Math.exp(-s*9)*sin(s*42)*(t>.14)+.012*sin(T*t)
  c.save();c.translate(0,112);c.rotate(bob);c.translate(0,-112)
  S(c,main,9,I(.82),u=>(1-u*.55)*(.8+.2*sin(u*27)),26)
  H(c,main,6,I(.93),4,.05,3)
  S(c,up,5,I(.85),u=>1-u*.7,12)
  L(c,84,46,-1.2,46,.86);L(c,90,72,-.2,50,.58,-.3);L(c,40,96,-2.2,46,.76);L(c,60,102,1.2,52,.5,-.3)
  L(c,124,84,-1.9,44,.66,.35);L(c,140,90,1.9,50,.88);L(c,150,90,-.6,42,.44,-.35)
  // new bud swelling and opening at the twig tip
  const o=t<.14?1:ss(.52,.94,t),sc=t<.14?1:ss(.3,.6,t)
  ;[-.7,.7].map(g=>S(c,Q(160,93,166+cos(.5+g)*5,96+sin(.5+g)*5,166+cos(.5+g*.7)*11*sc,97+sin(.5+g*.7)*11*sc),6*sc,I(.8)))
  F(c,160+14*sc,94+9*sc,28*(.45+.55*o)*sc,.4,o,1)
  c.restore()
  // ground wash
  const gr=Q(112,240,176,247,240,237)
  S(c,gr,5,I(.2),u=>sin(PI*u)**.5);H(c,gr,6,I(.5),4,.08,6)
  // the blossom that let go: falls, bounces, settles, soaks away
  const q=ss(.14,.36,t)**2,b=max(0,t-.36),hop=10*Math.exp(-b*16)*Math.abs(sin(b*30)),al=t<.14?0:1-ss(.8,.98,t)
  F(c,174+8*q+b*14*Math.exp(-b*8),103+(218-103)*q-hop,28,.4+1.5*q+.5*(1-Math.exp(-b*10)),1,al)
  fade(c);snap(c)
}
