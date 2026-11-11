// ink wash peacock displaying, its fanned tail opening wide and shimmering with muted teal eye spots while its crest bobs
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
export const frames=18,delay=105,dither=true
const fat=u=>min(1,.55+u*3)*min(1,.5+(1-u)*3),ink='20,18,16',teal='44,112,108',
  dot=(c,x,y,r,a)=>{c.fillStyle=K(a);c.beginPath();c.arc(x,y,r,0,T);c.fill()},
  // one tail feather: thin shaft, wispy barbs, an eye near the tip
  fth=(c,a,l,e,sd)=>{
    const x=sin(a)*l,y=-cos(a)*l,m=[x*.5-cos(a)*l*.05*sin(sd),y*.5-sin(a)*l*.05*sin(sd)]
    B(c,[[0,0],m,[x,y]],2.6,.5,u=>.5+.5*sin(u*PI));D(c,[[x*.45,y*.45],[x*.7,y*.7],[x*.98,y*.98]],e*2.2,.4,3,sd,10)
    const ex=x*.9,ey=y*.9
    c.save();c.translate(ex,ey);c.rotate(a);c.scale(1,1.25)
    dot(c,0,0,e*1.3,.2);J=teal;dot(c,0,0,e,.6);J=ink;dot(c,0,e*.2,e*.45,.9)
    c.restore()
  }
export default(c,t)=>{
  const op=.5-.5*cos(t*T),sp=3.05+.5*op,bob=sin(t*T*2)
  c.translate(130,172);c.rotate(-.07)
  // fan: soft wash darker at the root, then two rings of feathers
  for(const[r,w,a]of[[34,52,.09],[66,40,.045]])
    M(c,[...Array(9)].map((_,k)=>{const g=(k/8-.5)*sp;return[sin(g)*r,-cos(g)*r]}),w,a,_=>1,r,22)
  for(let k=0;k<12;k++){const g=((k+.5)/12-.5)*sp*.93+.02*sin((t*2+k*.21)*T);fth(c,g,66+3*sin((t*2+k*.37)*T),5,k+30)}
  for(let k=0;k<13;k++){
    const u=k/12-.5,g=u*sp+.022*sin((t*2+k*.19)*T)
    fth(c,g,(106-abs(u)*16)*(.97+.03*sin((t*2+k*.31)*T)),7,k)
  }
  // legs
  for(const[x,q]of[[-6,-9],[6,8]]){
    B(c,[[x,24],[x,40],[q,56]],3,.8,u=>1-u*.4)
    for(const d of[-7,0,6])B(c,[[q,55],[q+d,59],[q+d*1.5,60]],2,.8)
  }
  D(c,[[-40,62],[0,64],[44,61]],3,.4,3,70)
  // body and neck in loaded ink with a teal bloom
  const bd=[[-17,6],[-12,-12],[0,-20],[12,-12],[17,7],[10,26],[-9,27]],
    nk=[[0,-8],[-4,-30+bob*.6],[2,-50+bob*1.5]]
  W(c,bd,.3,3);W(c,bd,.85,.8);B(c,nk,15,.88,u=>1-u*.5)
  J=teal;W(c,bd.map(([x,y])=>[x*.7,y*.7+2]),.5,3);B(c,nk,9,.5,u=>1-u*.5);J=ink
  X(c,_=>{c.strokeStyle='rgba(0,0,0,.5)';c.lineWidth=1;for(let k=0;k<4;k++){c.beginPath();c.arc(0,-2+k*7,9-k,.5,PI-.5);c.stroke()}})
  // head, beak, crest
  const hx=2.5,hy=-54+bob*1.5
  dot(c,hx,hy,6.6,.92);B(c,[[hx-4,hy+1],[hx-10,hy+3],[hx-14,hy+5]],4.4,.92,u=>1-u*.8)
  X(c,_=>{dot(c,hx-1.5,hy-1,2.4,.9)});dot(c,hx-1.5,hy-1,1.1,.95)
  for(let k=-2;k<3;k++){
    const g=k*.26+.12*sin(t*T*2+.8)+.1,x=hx+1+sin(g)*14,y=hy-5-cos(g)*14
    c.strokeStyle=K(.7);c.lineWidth=.8;c.beginPath();c.moveTo(hx+1,hy-5);c.lineTo(x,y);c.stroke()
    J=teal;dot(c,x,y,2.3,.7);J=ink;dot(c,x,y,1.1,.9)
  }
  c.resetTransform();fade(c);snap(c,16,12)
}
