// ink wash pair of butterflies fluttering round each other above a rose-tinted flower, translucent wings with dark veins
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
export const frames=30,delay=80,dither=true
const ink='20,18,16',rose='180,92,106',lf=u=>sin(min(1,u*.9+.1)**.7*PI)**.8,
  dot=(c,x,y,r,a)=>{c.fillStyle=K(a);c.beginPath();c.arc(x,y,r,0,T);c.fill()},
  FW=[[1,-3],[11,-20],[27,-27],[36,-17],[28,-3],[9,1]],HW=[[2,1],[20,2],[28,12],[22,25],[10,20],[3,10]],
  // butterfly seen from above: wings close toward the body as they beat
  fly=(c,x,y,r,fl,z,a,dk)=>{
    c.save();c.translate(x,y);c.rotate(r);c.scale(z,z)
    for(const s of[-1,1]){
      c.save();c.scale(s*(.16+.84*(.5+.5*cos(fl+s*.25))),1)
      W(c,HW,a*.85,.8,24);W(c,FW,a,.8,24)
      B(c,[[4,-9],[12,-21],[27,-27],[36,-17],[29,-4]],4.2,.85,u=>min(1,.4+u*3)*(1-u**3)**.6)
      B(c,[[20,3],[28,12],[22,25],[18,33]],3,.8,u=>min(1,.4+u*3)*(1-u**2))
      c.strokeStyle=K(.6);c.lineWidth=.7
      for(const[q,v]of[[24,-22],[32,-13],[25,-4],[23,10],[15,20]]){c.beginPath();c.moveTo(2,q<24?-2:2);c.lineTo(q,v);c.stroke()}
      dk&&X(c,_=>{for(const[q,v]of[[26,-19],[29,-11],[22,-7],[20,9],[17,16]])dot(c,q,v,2.3,.8)})
      c.restore()
    }
    B(c,[[0,-10],[0,0],[0,13]],4.2,.93,u=>sin(min(1,u*.8+.2)*PI)**.5);dot(c,0,-10,2.2,.93)
    c.strokeStyle=K(.8);c.lineWidth=.8
    for(const s of[-1,1]){c.beginPath();c.moveTo(0,-11);c.quadraticCurveTo(s*3,-18,s*8,-22);c.stroke()}
    c.restore()
  }
export default(c,t)=>{
  const g=t*T,sw=.035*sin(g)
  // flower: loaded stem, wet leaves, rose petals round a dark heart
  c.save();c.translate(72,262);c.rotate(sw)
  B(c,[[0,4],[4,-40],[16,-84]],5,.8,u=>1-u*.5)
  B(c,[[2,-30],[-22,-48],[-42,-44]],15,.6,lf);F(c,[[2,-30],[-22,-48],[-42,-44]],12,3,2,.4,lf)
  B(c,[[5,-36],[30,-46],[48,-36]],13,.42,lf);B(c,[[9,-60],[22,-70],[30,-66]],7,.55,lf)
  c.translate(17,-90);c.rotate(-.2)
  J=rose
  for(let k=0;k<8;k++){
    const a=k*T/8+.2,l=17+R(k)*5
    B(c,[[cos(a)*3,sin(a)*2.4],[cos(a)*l*.6,sin(a)*l*.45],[cos(a)*l,sin(a)*l*.72]],12,.34+R(k+4)*.18,u=>sin(min(1,u*.8+.2)*PI)**.7)
  }
  J=ink
  for(let k=0;k<7;k++)dot(c,cos(k*2.4)*3.4*R(k+1),sin(k*2.4)*2.6*R(k+2)-1,1.3,.85)
  c.restore()
  // the pair circle one another, beating out of step
  fly(c,154+46*cos(g),92+30*sin(g)+3*sin(g*3),.3+.9*sin(g+2.2),g*5,1.05,.3,0)
  fly(c,154-46*cos(g),96-30*sin(g)+3*sin(g*3+1),-.5+.9*sin(g+.4),g*6+1,.88,.72,1)
  fade(c);snap(c)
}
