// ink wash bee hovering down to land on a wild flower, wings a translucent blur, a dusting of muted gold pollen
const{PI,sin,cos,min,max,abs,hypot,floor}=Math,T=2*PI
const K=a=>a.at?a:`rgba(20,18,16,${a})`
const R=n=>(n=sin(n*127.1+3.7)*43758.5453,n-floor(n))
const sm=(a,b,x)=>(x=min(1,max(0,(x-a)/(b-a))),x*x*(3-2*x))
// smooth curve through points
const cv=(p,n=36)=>[...Array(n+1)].map((_,k)=>{
  const u=k/n*(p.length-1),i=min(u|0,p.length-2),f=u-i,
    a=p[max(i-1,0)],b=p[i],d=p[i+1],e=p[min(i+2,p.length-1)]
  return[0,1].map(j=>.5*(2*b[j]+(d[j]-a[j])*f+(2*a[j]-5*b[j]+4*d[j]-e[j])*f*f+(3*b[j]-a[j]-3*d[j]+e[j])*f*f*f))
})
// pressure: press in, swell, taper to a point
const pf=u=>min(1,u*5)**.5*(1-u**2.5)
const nm=(s,k)=>{
  const a=s[max(k-1,0)],b=s[min(k+1,s.length-1)],l=hypot(b[0]-a[0],b[1]-a[1])||1
  return[(a[1]-b[1])/l,(b[0]-a[0])/l]
}
const F=(c,b)=>c.filter=b?`blur(${b}px)`:'none'
// loaded brush stroke: ribbon of varying width
const br=(c,p,w,a,f=pf,b=.6)=>{
  const s=cv(p),n=s.length-1,L=[],Q=[]
  s.forEach(([x,y],k)=>{
    const[nx,ny]=nm(s,k),h=w/2*f(k/n)+.3
    L.push([x+nx*h,y+ny*h]);Q.unshift([x-nx*h,y-ny*h])
  })
  F(c,b);c.fillStyle=K(a);c.beginPath()
  ;[...L,...Q].forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y))
  c.fill();F(c)
}
// dry brush: parallel hairlines with gaps that grow toward the tail
const dry=(c,p,w,a,sd=1,g=.5,h=7)=>{
  const s=cv(p,48),n=s.length-1
  c.strokeStyle=K(a);c.lineWidth=max(.7,w/h*.6)
  for(let j=0;j<h;j++){
    const o=(j/(h-1)-.5)*w*(.8+.4*R(sd+j));let on=0
    c.beginPath()
    s.forEach(([x,y],k)=>{
      const u=k/n,[nx,ny]=nm(s,k),v=R(sd+j*17+(k/6|0)*3.1)>g*(.3+u),q=o*(.4+.6*pf(u))
      v&&(on?c.lineTo(x+nx*q,y+ny*q):c.moveTo(x+nx*q,y+ny*q));on=v
    })
    c.stroke()
  }
}
// wet wash blob through points
const ws=(c,p,a,b=3)=>{
  const n=p.length,m=k=>[(p[k%n][0]+p[(k+1)%n][0])/2,(p[k%n][1]+p[(k+1)%n][1])/2]
  F(c,b);c.fillStyle=K(a);c.beginPath();c.moveTo(...m(0))
  for(let k=1;k<=n;k++)c.quadraticCurveTo(...p[k%n],...m(k))
  c.fill();F(c)
}
const el=(c,x,y,rx,ry,r,a,b=2)=>{F(c,b);c.fillStyle=K(a);c.beginPath();c.ellipse(x,y,rx,ry,r,0,T);c.fill();F(c)}
const cut=(c,f)=>{c.globalCompositeOperation='destination-out';f();c.globalCompositeOperation='source-over'}
const fade=(c,w=16)=>cut(c,_=>{
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
})
const snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){
    for(let j=0;j<3;j++)d[k+j]=Math.round(d[k+j]/s)*s
    d[k+3]=min(255,Math.round(d[k+3]/a)*a)
  }
  c.putImageData(m,0,0)
}
export const frames=30,delay=70,dither=true
const GD='rgba(196,146,44,.7)'
export default(c,t,i)=>{
  const e=t<.5?sm(.08,.42,t):1-sm(.6,.94,t),ld=sm(.4,.46,t)*(1-sm(.56,.62,t)),
    s=sin(T*t),dp=ld*3+s*1.2,fx=96+s*2,fy=150+dp
  // stem and leaves
  br(c,[[fx+2,fy+10],[108+s,196],[100,226],[104,250]],6.5,.8,u=>(.5+.5*u)*(1-u**7))
  br(c,[[106,206],[130,190],[156,186+s],[172,194+s]],15,.72,u=>sin(u*PI)**.7*(1-u*.3))
  br(c,[[112,200],[140,190],[168,193+s]],2,.36)
  br(c,[[102,222],[80,214],[60,218-s],[46,230-s]],13,.5,u=>sin(u*PI)**.7*(1-u*.3))
  dry(c,[[74,216],[58,220-s],[42,232-s]],9,.7,3,.4,4)
  // petals: pale washes, each cut out of the ones behind it, with a dark pressed tip
  c.save();c.translate(fx,fy);c.rotate(-.25+s*.02);c.scale(1,.78)
  for(let k=0;k<6;k++){
    const a=[.2,1.3,2.35,3.4,4.5,5.5][k]+R(k)*.2,l=56+R(k+4)*10,ca=cos(a),sa=sin(a),
      P=[[ca*6,sa*6],[ca*l*.6-sa*4,sa*l*.6+ca*4],[ca*l,sa*l]],f=u=>sin(u**.7*PI)**.6
    cut(c,_=>br(c,P,36,1,f,.5))
    br(c,P,35,[.28,.2,.34][k%3],f,1.2)
    br(c,[[ca*l*.72-sa*13,sa*l*.72+ca*13],[ca*l*1.02-sa*3,sa*l*1.02+ca*3],[ca*l*.8+sa*13,sa*l*.8-ca*13]],3.4,.7,u=>sin(u*PI)**.6*(.6+.4*sin(u*7+k)**2),.4)
    br(c,[[ca*12,sa*12],[ca*l*.5,sa*l*.5],[ca*l*.8,sa*l*.8]],1.6,.4)
  }
  // heart of the flower: dark stamen dabs and gold
  el(c,0,0,10,10,0,GD,1.5)
  for(let k=0;k<14;k++){
    const a=k*2.4,r=4+R(k+7)*8
    el(c,cos(a)*r,sin(a)*r,1.5+R(k)*1.2,1.5+R(k)*1.2,0,k%3?.9:GD,.3)
  }
  c.restore()
  // pollen drifting up
  for(let k=0;k<9;k++){
    const p=(t+k/9)%1,a=k*2.4
    el(c,fx+cos(a)*(8+p*26)+s*2,fy-6-p*34+sin(a)*6,1.2+R(k)*1.2,1.2+R(k)*1.2,0,`rgba(196,146,44,${(.75*sin(PI*p)).toFixed(2)})`,.4)
  }
  // bee
  const hv=1-e,bx=186+(fx+6-186)*e+sin(2*T*t)*5*hv,by=66+(fy-22-66)*e+cos(2*T*t)*4*hv+sin(4*T*t)*1.5*hv,
    fl=(i%2?1:-1)*(1-ld)
  c.save();c.translate(bx,by);c.rotate(-.35+.25*e);c.scale(1.45,1.45)
  // far wing, legs
  el(c,3,-18,6+fl,15-ld*5,.5+fl*.3+ld*.6,.16,2)
  for(let k=0;k<3;k++)br(c,[[-6+k*5,5],[-9+k*5,11+ld*2],[-7+k*5-hv*2,16+ld*2]],1.8,.85,u=>1-u*.5,.2)
  // abdomen: a muted gold wash with curved loaded ink bands bleeding into it, fuzzy edge
  ws(c,[[0,-5],[10,-8.5],[20,-6],[26,2],[20,9],[9,10.5],[1,7]],'rgba(190,140,52,.5)',1.6)
  ;[[3.5,1,5.5,.8],[11,1,4.6,.85],[18,.8,4,.8],[24,.45,4.5,.9]].forEach(([x,h,w,a],k)=>
    br(c,[[x-1.5,-8*h+1],[x+2,1.5],[x-1,9.5*h+1]],w,a,u=>sin(u*PI)**.6*(.75+.25*sin(u*5+k)),1.1))
  for(let k=0;k<12;k++){
    const d=k%2?1:-1,x=3+k*1.9,r=R(k+3),y=2+d*(8.6-abs(x-12)**2*.035)
    br(c,[[x,y-d*2],[x+1.5,y+d*1.5],[x+3+r*2,y+d*(3+r*2)]],1.2+r*.6,.5,pf,.3)
  }
  // thorax: dark fuzzy dab
  el(c,-4,-1,8,7.5,0,.78,2)
  for(let k=0;k<11;k++){
    const a=2.6+k*.42,r=R(k+9)
    br(c,[[-4+cos(a)*5,-1+sin(a)*5],[-4+cos(a)*9,-1+sin(a)*9],[-4+cos(a)*(11+r*2.5),-1+sin(a)*(10.5+r*2)+1]],1.6+r,.6,pf,.4)
  }
  el(c,-14,1.5,5.2,5,0,.93,.4)
  cut(c,_=>el(c,-16,0,1.6,2,0,.6,.4))
  br(c,[[-17,-2],[-21,-7],[-25,-7]],1.4,.85);br(c,[[-16,-3],[-18,-9],[-22,-11]],1.4,.85)
  // near wing: translucent blur with a faint vein
  el(c,7,-21,7+fl*1.5,17-ld*6,.75-fl*.35+ld*.5,.26,1.6)
  el(c,7,-20,8,16,.75+fl*.4,.12*hv,2.5)
  br(c,[[-2,-7],[5,-18-fl*2+ld*6],[14,-32-fl*4+ld*12]],1.3,.5)
  br(c,[[-1,-7],[8,-15-fl*2+ld*5],[19,-24-fl*4+ld*10]],1,.36)
  br(c,[[-3,-7],[1,-20-fl*2+ld*6],[6,-33-fl*3+ld*12]],1,.36)
  hv>.1&&el(c,6,-20,16,20,.6,.07*hv,4)
  c.restore()
  fade(c,14);snap(c)
}
