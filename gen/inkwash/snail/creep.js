// ink wash snail creeping along a bamboo leaf, eyestalks bobbing, leaving a faint wet trail as the leaf dips under its weight
const{sin,cos,PI,abs,min,max,hypot,floor,round}=Math,T=2*PI
// seeded random, ink colour (J swaps in an accent), smoothstep, pulse (0→1→0 between a and b)
const R=n=>(n=sin(n*91.7+7.3)*43758.5)-floor(n)
let J='20,18,16'
const K=a=>`rgba(${J},${a})`
const ss=(a,b,x)=>(x=max(0,min(1,(x-a)/(b-a))))*x*(3-2*x)
const pu=(a,b,x)=>x<a||x>b?0:sin((x-a)/(b-a)*PI)**2
// catmull-rom through points, z closes it
const cr=(p,n=36,z)=>{
  const o=[],L=p.length,g=i=>z?p[(i%L+L)%L]:p[max(0,min(L-1,i))],m=z?L:L-1
  for(let k=0;k<=n;k++){
    const u=k/n*m,i=min(floor(u),m-1),f=u-i,[a,b,d,e]=[g(i-1),g(i),g(i+1),g(i+2)]
    o.push([0,1].map(j=>.5*(2*b[j]+(d[j]-a[j])*f+(2*a[j]-5*b[j]+4*d[j]-e[j])*f*f+(3*b[j]-a[j]-3*d[j]+e[j])*f*f*f)))
  }
  return o
}
const path=(c,s)=>{c.beginPath();s.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y))}
// brush stroke: presses in, swells, tapers to a point
const pf=u=>min(1,.3+u*5)**.7*(1-u**2.4)
const B=(c,p,w,a,f=pf,n=32)=>{
  const s=cr(p,n),l=[],r=[]
  s.forEach(([x,y],k)=>{
    const[q,v]=s[min(n,k+1)],[e,g]=s[max(0,k-1)],h=hypot(q-e,v-g)||1,d=w*f(k/n)/2
    l.push([x+(g-v)/h*d,y+(q-e)/h*d]);r.unshift([x-(g-v)/h*d,y-(q-e)/h*d])
  })
  c.fillStyle=K(a);path(c,[...l,...r]);c.fill()
}
// wet stroke: soft dabs stamped along the curve, a is the ink per dab
const M=(c,p,w,a,f=pf,sd=0,n=26)=>cr(p,n).forEach(([x,y],k)=>{
  const r=max(.5,w*f(k/n)/2*(.8+.4*R(sd+k))),g=c.createRadialGradient(x,y,0,x,y,r),q=a*(.7+.6*R(sd+k*3.3))
  g.addColorStop(0,K(q));g.addColorStop(.55,K(q*.8));g.addColorStop(1,K(0))
  c.fillStyle=g;c.beginPath();c.arc(x,y,r,0,T);c.fill()
})
// flying white: hairline gaps scraped out of the tail end of a stroke
const F=(c,p,w,m=4,sd=1,u0=.45,f=pf,n=32)=>X(c,_=>{
  const s=cr(p,n);c.strokeStyle='#000'
  for(let j=0;j<m;j++){
    const o=(R(sd+j*5.7)-.5)*.8,k0=floor(n*(u0+R(sd+j)*.25))
    c.lineWidth=.5+R(sd+j*2.3)*1.1;c.beginPath()
    for(let k=k0,k1=min(n,k0+floor(n*(.12+.25*R(sd+j*9.1))));k<=k1;k++){
      const[x,y]=s[k],[q,v]=s[min(n,k+1)],[e,g]=s[max(0,k-1)],h=hypot(q-e,v-g)||1,d=o*w*f(k/n)
      k>k0?c.lineTo(x+(g-v)/h*d,y+(q-e)/h*d):c.moveTo(x+(g-v)/h*d,y+(q-e)/h*d)
    }
    c.stroke()
  }
})
// dry brush: m broken hairlines across width w
const D=(c,p,w,a,m=5,sd=1,n=28)=>{
  const s=cr(p,n);c.strokeStyle=K(a)
  for(let j=0;j<m;j++){
    const o=(j/(m-1||1)-.5)*w;let on=0
    c.lineWidth=.5+R(sd+j)*1.2;c.beginPath()
    s.forEach(([x,y],k)=>{
      const[q,v]=s[min(n,k+1)],[e,g]=s[max(0,k-1)],h=hypot(q-e,v-g)||1,X=x+(g-v)/h*o,Y=y+(q-e)/h*o
      R(sd+j*17+floor(k/3)*3.1)<.32+k/n*.3?on=0:(on?c.lineTo(X,Y):c.moveTo(X,Y),on=1)
    })
    c.stroke()
  }
}
// wet wash: closed soft blob
const W=(c,p,a,b=2,n=48)=>{c.filter=b?`blur(${b}px)`:'none';c.fillStyle=K(a);path(c,cr(p,n,1));c.fill();c.filter='none'}
// cut light areas out of the ink
const X=(c,f)=>{c.save();c.globalCompositeOperation='destination-out';f();c.restore()}
const fade=(c,w=16)=>X(c,_=>{
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
})
const snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=round(d[k+j]/s)*s;d[k+3]=min(255,round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}
export const frames=30,delay=100,dither=true
const fat=u=>min(1,.55+u*3)*min(1,.5+(1-u)*3),lf=u=>sin(min(1,u*.9+.1)**.7*PI)**.8,
  dot=(c,x,y,r,a)=>{c.fillStyle=K(a);c.beginPath();c.arc(x,y,r,0,T);c.fill()}
export default(c,t)=>{
  const st=sin(t*T*4),sx=56+62*t,dip=.03+.11*t+.012*st,vis=ss(0,.12,t)*(1-ss(.86,1,t))
  // twig and two idle leaves
  const tw=[[266,58],[236,84],[214,100],[204,116]]
  B(c,tw,5,.8,u=>1-u*.4);dot(c,214,100,3.4,.85)
  c.save();c.translate(214,100);c.rotate(.03*sin(t*T))
  B(c,[[0,0],[-22,-30],[-52,-58]],13,.45,lf);B(c,[[0,2],[14,30],[10,66]],11,.32,lf)
  c.restore()
  // the long leaf, dipping from the node
  c.translate(210,106);c.rotate(PI-.16-dip);c.scale(1,-1)
  const L=[[0,0],[48,-8],[118,-6],[184,8]]
  M(c,L,36,.12,lf,1,24);B(c,L,30,.62,lf);F(c,L,26,6,4,.5,lf)
  c.strokeStyle=K(.5);c.lineWidth=.9;c.beginPath();c.moveTo(6,-1);c.bezierCurveTo(48,-8,118,-6,176,6);c.stroke()
  // wet trail: a pale sheen lifted out of the leaf
  X(c,_=>{
    c.strokeStyle='rgba(0,0,0,.4)';c.lineWidth=2;c.filter='blur(.6px)';c.beginPath()
    for(let x=34;x<sx-22;x+=4)c.lineTo(x,-15-x*.03+sin(x*.3)*.6)
    c.stroke();c.filter='none'
  })
  // snail
  c.translate(sx,-20-sx*.02);c.rotate(.03);c.scale(1.2,1.2)
  const hx=25+st*2.2,bd=[[-24-st*1.5,1],[-8,-2],[10,-2],[hx-3,-6],[hx,-11]]
  M(c,bd,13,.2,fat,2,14);B(c,bd,8,.6,u=>min(1,.3+u*3)*(1-u**4*.5))
  for(const[d,l,a,ph]of[[2,15,.5,0],[0,17,.9,1.2]]){
    const g=-.9+d*.1+.2*sin(t*T*2+ph),x=hx+d+cos(g)*l,y=-11+sin(g)*l
    B(c,[[hx-1+d,-10],[hx+d+cos(g+.3)*l*.5,-11+sin(g+.3)*l*.5],[x,y]],2.6,a,u=>1-u*.4);dot(c,x,y,2,a)
  }
  B(c,[[hx,-8],[hx+5,-6],[hx+8,-4+st]],1.8,.8)
  // shell: wet round wash with a loaded spiral
  c.translate(-3-st,-18);c.rotate(-.06*st)
  const sh=[...Array(8)].map((_,k)=>[cos(k*T/8)*17,sin(k*T/8)*16])
  W(c,sh,.2,3);W(c,sh,.34,1);M(c,[[-12,8],[0,13],[12,8]],14,.16,fat,5,8)
  B(c,[...Array(15)].map((_,k)=>{const r=16*(1-k/17),g=2.4-k*.62;return[cos(g)*r,sin(g)*r]}),5.5,.88,u=>min(1,.4+u*4)*(1-u*.7),48)
  c.resetTransform()
  // each pass fades in and back out
  X(c,_=>{c.fillStyle=`rgba(0,0,0,${1-vis})`;c.fillRect(0,0,256,256)})
  fade(c);snap(c)
}
