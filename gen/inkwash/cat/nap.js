// ink wash cat curled up asleep, body rising and falling with each breath, an ear flicking and the tail tip twitching
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
export const frames=24,delay=105,dither=true
const fat=u=>min(1,.55+u*3)*min(1,.5+(1-u)*3)
export default(c,t)=>{
  const b=sin(t*T),s=1+.05*b,Y=y=>204-(204-y)*s,
    e=pu(.28,.42,t)*sin(t*T*8)*.5,tw=pu(.58,.88,t)*sin(t*T*6)
  c.translate(132,150);c.scale(1.12,1.12);c.translate(-141,-169)
  // ground shadow
  W(c,[[66,210],[150,205],[238,210],[150,217]],.16,5)
  D(c,[[44,214],[110,217],[180,215]],4,.36,3,4)
  // body: one fat wet stroke round the spine, a lighter belly, pooled dark on the back
  const sp=[[100,Y(152)],[134,Y(131)],[178,Y(127)],[211,Y(149)],[217,184]]
  M(c,sp.map(([x,y])=>[152+(x-152)*.8,172+(y-172)*.66]),50,.2,fat,1)
  M(c,[[112,190],[150,192],[196,188]],34,.09,fat,5,12)
  M(c,[[176,Y(158)],[196,172],[190,192]],40,.12,fat,7,10)
  B(c,sp,9,.8,u=>min(1,.25+u*4)*(1-u**2)**.6);F(c,sp,9,3,2,.5)
  B(c,[[186,Y(150)],[172,172],[180,196]],5,.5)
  // fur flicks off the back
  for(let k=0;k<9;k++){
    const u=.08+k*.1,[x,y]=cr(sp,50)[floor(u*50)],a=-2.3+u*2.9+R(k)*.3,l=7+R(k+9)*6
    B(c,[[x,y+1],[x+cos(a)*l*.6,y+sin(a)*l*.6-1],[x+cos(a+.4)*l,y+sin(a+.4)*l]],2.6,.7,u=>1-u)
  }
  // tail wrapped round the front, tip twitching
  const tl=[[216,182],[208,203],[170,211],[130,209],[112,202+tw*2],[103,191-tw*7]]
  M(c,tl,15,.3,fat,11,30);B(c,tl,10,.85,u=>min(1,.4+u*4)*(1-u**3)**.7+.1);F(c,tl,10,3,6,.3)
  // head tucked on the paws
  const hy=Y(176)*.35+176*.65
  W(c,[[77,hy+2],[82,hy-14],[99,hy-19],[117,hy-13],[122,hy+2],[112,hy+13],[99,hy+16],[86,hy+13]],.5,2.5)
  M(c,[[88,hy-6],[100,hy-9],[112,hy-5],[108,hy+5],[93,hy+6]],24,.3,fat,13,12)
  M(c,[[82,hy+17],[97,hy+20],[113,hy+18]],12,.2,fat,15,8)
  // ears
  B(c,[[85,hy-11],[82,hy-25],[79,hy-34]],13,.92,u=>(1-u)**.7)
  c.save();c.translate(112,hy-15);c.rotate(.25+e)
  B(c,[[0,3],[2,-10],[5,-20]],13,.92,u=>(1-u)**.7);c.restore()
  // closed eyes as slits of light, whiskers
  X(c,_=>{
    c.strokeStyle='#000';c.lineWidth=1.6
    for(const[x,d]of[[90,1.5],[107,-1.5]]){c.beginPath();c.moveTo(x-4.5,hy-d);c.quadraticCurveTo(x,hy+4,x+4.5,hy+d);c.stroke()}
  })
  c.strokeStyle=K(.5);c.lineWidth=.7
  for(const[x,y,q,v]of[[82,7,56,3],[82,10,60,14],[116,8,136,5]]){
    c.beginPath();c.moveTo(x,hy+y);c.quadraticCurveTo((x+q)/2,hy+(y+v)/2-2,q,hy+v+b);c.stroke()
  }
  c.resetTransform();fade(c);snap(c,8,8)
}
