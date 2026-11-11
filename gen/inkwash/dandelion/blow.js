// ink wash dandelion clock, its seeds lifting off and drifting away on the wind until the head is bare, then it re-forms
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
// one seed: a fan of pappus hairs at x,y on a fine stalk running back along the angle to a dark seed
const Sd=(c,x,y,g,l,al,dot)=>{
  if(al<.02)return
  const bx=x-cos(g)*l,by=y-sin(g)*l
  c.strokeStyle=I(.62*al);c.lineWidth=.8;c.beginPath();c.moveTo(bx,by);c.lineTo(x,y)
  for(let k=-3;k<=3;k++)c.moveTo(x,y),c.lineTo(x+cos(g+k*.42)*7,y+sin(g+k*.42)*7)
  c.stroke()
  c.fillStyle=I(.26*al);c.beginPath();c.arc(x+cos(g)*3,y+sin(g)*3,4.5,0,T);c.fill()
  if(dot)c.fillStyle=I(.85*al),c.beginPath(),c.ellipse(bx,by,2.4,1.1,g,0,T),c.fill()
}
const Z=rn(21),n=44,sd=[...Array(n)].map((_,k)=>{
  const a=k*2.39996+Z()*.3,l=(k%4?31:22)+Z()*5
  // angle, length, leaving time (downwind side first), wobble
  return[a,l,.07+.47*(.62*(1-cos(a+.5))/2+.38*Z()),Z()*T]
})
// toothed leaf: one long dab whose pressure pulses into uneven lobes
const Lf=(c,f,w,a,k)=>(S(c,f,w,I(a),u=>sin(PI*min(1,u*.9+.1))**.7*(.55+.45*Math.abs(sin(u*(9+k)+k))**.6),40),S(c,u=>f(u*.85),1.5,I(.9),u=>1-u,10))
export default(c,t)=>{
  const hx=92+2.5*sin(T*t),hy=108,st=Q(128,262,128,184,hx+2,hy+5)
  Lf(c,Q(126,252,84,240,40,214),17,.55,3);Lf(c,Q(130,252,170,232,210,228),15,.36,5);Lf(c,Q(128,254,118,226,100,196),11,.78,2)
  S(c,st,4.5,I(.6),u=>1-u*.45,20);S(c,u=>st(.1+u*.8),1.4,I(.9),u=>sin(PI*u),12)
  // downy glow of the clock, thinning as it empties
  const full=sd.filter(s=>t<s[2]).length/n+ss(.84,1,t)
  c.filter='blur(4px)';c.fillStyle=I(.13*min(1,full));c.beginPath();c.arc(hx,hy,30,0,T);c.fill();c.filter='none'
  sd.map(([a,l,d,w],k)=>{
    const px=hx+cos(a)*l,py=hy+sin(a)*l*.96,s=t-d
    if(s<0)Sd(c,px,py,a,l-4,1)
    else{
      const e=ss(0,.1,s),g=a+(((-1.1-a)%T+T*1.5)%T-PI)*e
      Sd(c,px+470*s**1.35+7*sin(s*24+w),py-70*s-26*s*sin(w)+6*sin(s*19+w),g,10+(l-14)*(1-e),1-ss(.14,.3,s),1)
      // a new seed growing back in its place
      const r=ss(.82+.1*(k%5)/5,.97+.03*(k%5)/5,t)
      Sd(c,hx+cos(a)*l*r,hy+sin(a)*l*.96*r,a,(l-4)*r,r)
    }
  })
  c.fillStyle=I(.86);c.beginPath();c.arc(hx,hy,4.2,0,T);c.fill()
  ;[-.8,0,.8].map(g=>S(c,Q(hx+2,hy+4,hx+2+sin(g)*6,hy+9,hx+2+sin(g)*9,hy+15),3,I(.7),u=>1-u*.8,6))
  fade(c);snap(c)
}
