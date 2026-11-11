// ink wash eagle soaring and banking on spread wings, primary feathers splayed like fingers, over faint distant peaks
const{sin,cos,PI,abs,min,max,hypot,floor,round}=Math,T=2*PI
// seeded random, ink colour, smoothstep, pulse (0→1→0 between a and b)
const R=n=>(n=sin(n*91.7+7.3)*43758.5)-floor(n)
const K=a=>`rgba(20,18,16,${a})`
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
export const frames=30,delay=90,dither=true
const fat=u=>min(1,.55+u*3)*min(1,.5+(1-u)*3)
export default(c,t)=>{
  const b=sin(t*T),hd=-.55+.16*cos(t*T)
  // distant peaks, faint, sinking into mist
  W(c,[[-20,240],[40,216],[70,196],[80,184],[92,198],[110,212],[150,224],[186,208],[198,198],[212,210],[276,238],[276,290],[-20,290]],.2,2,80)
  W(c,[[-20,250],[60,236],[120,216],[160,234],[220,240],[276,250],[276,290],[-20,290]],.2,3)
  B(c,[[50,206],[78,186],[92,200],[100,214]],4,.42);B(c,[[178,208],[196,200],[210,210]],3,.3)
  D(c,[[80,190],[90,208],[84,226]],8,.3,4,3);B(c,[[96,230],[120,216],[136,228]],3.5,.4)
  X(c,_=>{const g=c.createLinearGradient(0,222,0,256);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'#000');c.fillStyle=g;c.fillRect(0,0,256,256)})
  c.translate(122+14*b,106+7*sin(t*T*2+.6));c.rotate(hd+b*.2);c.scale(.86,.86)
  // tail fan
  c.save();c.translate(0,14);c.rotate(-b*.25)
  for(let k=-2;k<3;k++)B(c,[[k,0],[k*4,14],[k*7.5,30-abs(k)*2]],8,.8,u=>.5+.5*sin(min(1,u+.1)*PI)**.6)
  F(c,[[0,0],[0,14],[0,30]],16,4,4,.4,_=>1);c.restore()
  // wings: wet wash of secondaries, loaded leading edge, splayed primaries
  for(const s of[-1,1]){
    c.save();c.scale(s*(1+.2*b*s),1);c.rotate(-.06-.1*b*s)
    M(c,[[4,4],[30,0],[58,-7]],40,.16,u=>1-u*.3,s+3,12)
    for(let k=0;k<7;k++){
      const x=8+k*8.5,y=-12-k*1.2,l=34-k*1.2+R(k+s)*4
      B(c,[[x,y],[x+2,y+l*.5],[x+5+k*.6,y+l]],10,.5+R(k*3+s)*.3,u=>sin(min(1,u*.85+.15)*PI)**.6)
    }
    for(let k=0;k<6;k++){
      const a=-.42+k*.27+(k-2)*.05*b*s,l=46-k*3.6,x=62+k*2,y=-16+k*3.4
      B(c,[[x,y],[x+cos(a)*l*.5,y+sin(a)*l*.5-2],[x+cos(a-.12)*l,y+sin(a-.12)*l]],7.5,.9,u=>sin(min(1,u*.9+.18)*PI)**.6)
    }
    const le=[[2,-9],[28,-17],[56,-22],[74,-17]]
    B(c,le,10,.9,u=>min(1,.5+u*3)*(1-u**3)**.5);F(c,le,9,3,s+9,.3)
    c.restore()
  }
  // body and head
  B(c,[[0,22],[0,0],[0,-24]],17,.92,u=>sin(min(1,u*.85+.15)*PI)**.5)
  B(c,[[0,-20],[0,-30],[3,-37]],10,.93,u=>1-u*.75);B(c,[[2,-35],[5,-38],[5,-33]],3,.93)
  c.resetTransform();fade(c);snap(c)
}
