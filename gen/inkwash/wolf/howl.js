// ink wash wolf sitting on a rocky rise, lifting its head to howl as breath mist curls from its muzzle
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
export const frames=32,delay=95,dither=true
const fat=u=>min(1,.55+u*3)*min(1,.5+(1-u)*3),
  dot=(c,x,y,r,a)=>{c.fillStyle=K(a);c.beginPath();c.arc(x,y,r,0,T);c.fill()},
  fur=(c,p,n,l,w,a,sd,ang)=>{
    const s=cr(p,60)
    for(let k=0;k<n;k++){
      const[x,y]=s[floor((k+.5)/n*60)],g=ang+(R(sd+k)-.5)*.7,d=l*(.6+R(sd+k*3)*.7)
      B(c,[[x,y],[x+cos(g)*d*.5,y+sin(g)*d*.5],[x+cos(g+.35)*d,y+sin(g+.35)*d]],w,a,u=>1-u)
    }
  }
export default(c,t)=>{
  const h=ss(.1,.3,t)-ss(.8,.96,t),mo=ss(.24,.34,t)-ss(.76,.86,t),
    q=.02+h*1.02+mo*sin(t*T*8)*.012,P=[146,116]
  // rock: wet faces, dry-brushed edges
  M(c,[[86,214],[130,200],[190,200],[244,212]],44,.1,fat,1,18)
  M(c,[[150,236],[200,226],[250,236]],40,.07,fat,2,10)
  const rk=[[112,190],[160,187],[208,184]],e=u=>min(1,.4+u*3)*(1-u**3)**.5+.1
  B(c,[[62,228],[82,206],[112,189]],8,.8,e);B(c,rk,5.5,.82,e);F(c,rk,5,3,3,.2)
  B(c,[[206,183],[232,198],[248,226]],7,.7,e)
  B(c,[[112,189],[122,206],[116,220]],4.5,.55);B(c,[[208,185],[200,202],[208,216]],4,.45)
  D(c,[[120,200],[136,222],[130,244]],12,.5,5,7);D(c,[[168,196],[186,220],[178,246]],14,.4,5,9)
  // tail laid on the rock
  const tl=[[198,170],[218,180],[240,178],[250,166]]
  M(c,tl,22,.16,fat,4,16);B(c,tl,11,.7,u=>sin(min(1,u*.8+.2)*PI)**.6);fur(c,tl,8,9,2.4,.7,5,-.6)
  // far foreleg, haunch, body
  B(c,[[136,128],[128,160],[124,186]],9,.42,u=>1-u*.3)
  M(c,[[188,154],[180,168],[166,172]],46,.2,fat,6,8)
  M(c,[[182,150],[166,134],[150,120]],44,.2,fat,7,10)
  M(c,[[140,136],[138,154]],26,.1,fat,8,5)
  const bk=[[203,172],[200,146],[184,124],[164,108],[148,100]]
  B(c,bk,9,.8,u=>min(1,.3+u*4)*(1-u**2)**.5);fur(c,bk,11,10,2.6,.75,9,-.9)
  // hind foot and near foreleg
  B(c,[[192,176],[170,184],[152,185]],9,.8,u=>.6+.4*sin(u*PI))
  B(c,[[146,126],[138,158],[134,184],[126,187]],10,.8,u=>1-u*.35)
  B(c,[[176,150],[166,168],[172,182]],4,.5)
  // neck and head swing up into the howl
  c.save();c.translate(...P);c.scale(-1,1);c.rotate(-q)
  M(c,[[-10,10],[6,2],[24,-3]],34,.22,u=>1-u*.35,11,9)
  fur(c,[[-4,18],[10,12],[24,8]],6,10,2.6,.6,13,1.9)
  B(c,[[-8,-10],[8,-13],[24,-13]],7,.75,u=>min(1,.4+u*3)*(1-u**2))
  M(c,[[22,-4],[30,-4]],24,.3,fat,15,4)
  B(c,[[24,-6],[38,-5],[52,-3]],12,.8,u=>(1-u*.6)*min(1,.5+u*3))
  B(c,[[28,3],[38,4+mo*5],[47,3+mo*9]],5,.8,u=>1-u*.5)
  dot(c,52,-3.5,2.6,.93)
  X(c,_=>{c.strokeStyle='#000';c.lineWidth=1.3;c.beginPath();c.moveTo(29,-8);c.lineTo(34,-7-mo);c.stroke()})
  for(const[x,a]of[[25,.5],[19,.92]]){
    c.save();c.translate(x,-11);c.rotate(-.5-h*.75)
    B(c,[[-4,2],[-3,-8],[1,-17]],9,a,u=>(1-u)**.7);c.restore()
  }
  c.restore()
  // breath mist curling away from the muzzle
  for(let k=0;k<4;k++){
    const p=(t-.3-k*.1)/.52
    if(p<=0||p>=1)continue
    const x=P[0]-54*cos(q)-6-p*34-k*3,y=P[1]-54*sin(q)-6-p*38,r=7+p*17,g=p*4+k*2
    M(c,[...Array(7)].map((_,j)=>[x+cos(g+j*.75)*r*(1-j*.11),y+sin(g+j*.75)*r*(1-j*.11)]),7+p*13,.13*sin(p*PI)**.8,fat,20+k,12)
  }
  fade(c);snap(c)
}
