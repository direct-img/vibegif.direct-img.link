// ink wash skein of wild geese flying in a loose V across a pale full moon in a soft night sky, wings beating out of step
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
export const frames=36,delay=85,dither=true
// lead goose first, then the two arms of the V: [dx,dy,size,phase]
const G=[[0,0,1,0],[27,-13,.95,.3],[51,-29,.9,.62],[80,-40,.86,.15],[29,15,1,.5],[56,27,.96,.84],[86,44,1,.38]],
  fat=u=>min(1,.55+u*3)*min(1,.5+(1-u)*3)
export default(c,t)=>{
  // night wash in broad wet sweeps, pooled darker round the moon, the moon cut out of it
  M(c,[[40,58],[120,40],[236,52]],74,.07,fat,1,20);M(c,[[70,112],[150,104],[250,120]],80,.08,fat,2,20)
  M(c,[[104,60],[170,46],[236,84],[222,140],[150,146]],62,.07,fat,3,22)
  W(c,[[30,164],[110,158],[196,160],[150,176],[70,176]],.14,7);W(c,[[84,214],[170,204],[250,210],[180,220]],.13,6)
  X(c,_=>{c.fillStyle='#000';c.filter='blur(1.2px)';c.beginPath();c.arc(170,94,35,0,T);c.fill();c.filter='none'})
  W(c,[[152,82],[167,77],[173,92],[160,104],[150,97]],.09,4);W(c,[[178,104],[190,100],[192,113],[181,116]],.07,3)
  // reeds in the corner
  for(const[x,h,d,w]of[[30,74,18,5],[44,92,30,6],[56,60,34,4],[22,50,-12,4]])
    B(c,[[x,262],[x+d*.2,256-h*.55],[x+d,256-h]],w,.7,u=>min(1,.5+u*3)*(1-u**1.6))
  // the skein slides through once per loop
  for(const[dx,dy,s,ph]of G){
    const x=286+dx-t*400,y=152+dy-t*80+sin(t*T+ph*5)*2,f=cos((t*4+ph)*T),g=cos((t*4+ph)*T-.9)
    c.save();c.translate(x,y);c.rotate(.2);c.scale(s*1.25,s*1.25)
    // far wing, body and neck, near wing
    B(c,[[1,-1],[4,-6*f-1],[10,-13*f-1]],4,.55,u=>min(1,.5+u*3)*(1-u**2))
    B(c,[[-5,0],[4,1],[13,1]],6.5,.92,u=>sin(min(1,u+.12)*PI)**.6)
    B(c,[[-3,0],[-11,-1.5],[-18,-2.5]],3,.92,u=>.75+.5*u**4)
    B(c,[[-18,-2.5],[-22,-2]],2,.9)
    B(c,[[0,0],[5,-7*g],[9+2*g,-15*g],[15,-17*g+2]],6.5,.9,u=>min(1,.5+u*3)*(1-u**2.5))
    c.restore()
  }
  fade(c,18);snap(c,8,8)
}
