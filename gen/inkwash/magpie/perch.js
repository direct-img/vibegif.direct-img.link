// ink wash magpie perched on a bare plum branch, chattering with its beak while its long tail bobs
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
export const frames=24,delay=85,dither=true
const fat=u=>min(1,.55+u*3)*min(1,.5+(1-u)*3),
  dot=(c,x,y,r,f)=>{c.fillStyle=f;c.beginPath();c.arc(x,y,r,0,T);c.fill()}
export default(c,t)=>{
  const ch=pu(.04,.56,t),o=ch*abs(sin(t*T*5))*4,hd=-.14*ch+.04*sin(t*T),
    ta=.09*sin(t*T*2)+.07*ch*sin(t*T*5),by=sin(t*T*2)
  // plum branch, angular, with twigs and buds
  const br=[[262,190],[206,177],[152,174],[98,160],[52,152],[18,128]]
  B(c,br,13,.82,u=>(1-u*.8)*min(1,.6+u*3));F(c,br,12,5,3,.1,u=>1-u*.8)
  D(c,[[250,194],[200,183],[150,180],[100,167]],5,.55,3,5)
  B(c,[[196,176],[210,146],[204,112],[214,88]],5,.78);B(c,[[92,159],[70,176],[46,184]],4.5,.7)
  B(c,[[58,152],[46,128],[50,104]],4,.75);B(c,[[207,130],[226,120],[240,122]],3,.6)
  for(const[x,y,r]of[[205,112,2.6],[213,92,2.2],[232,120,2.4],[48,112,2.4],[60,180,2.6],[30,138,2.2],[150,170,2.8]])dot(c,x,y,r,K(.9))
  // two blossoms in a muted rose
  for(const[x,y,q]of[[218,146,0],[40,124,1]]){
    for(let k=0;k<5;k++)dot(c,x+cos(k*T/5+q)*4.6,y+sin(k*T/5+q)*4.6,4.2,'rgba(178,98,108,.42)')
    dot(c,x,y,1.6,K(.8))
  }
  c.translate(122,171+by);c.scale(1.24,1.24)
  // long tail, bobbing
  c.save();c.translate(24,-18);c.rotate(ta)
  const tl=[[-4,-4],[26,24],[58,58]]
  B(c,[[-2,0],[17,27],[36,56]],9,.6);B(c,[[0,-4],[33,21],[58,42]],8,.6)
  M(c,tl,16,.2,fat,4);B(c,tl,14,.92,u=>min(1,.5+u*3)*(1-u**3)**.6);F(c,tl,12,5,8,.3)
  c.restore()
  // white belly: a hole with one thin contour
  X(c,_=>W(c,[[-30,-44],[-28,-22],[-13,-8],[8,-9],[16,-28],[-6,-46]],1,1))
  B(c,[[-31,-38],[-27,-21],[-13,-8],[6,-7]],2.6,.5)
  // back and wing, white shoulder patch cut out
  const wg=[[-8,-70],[5,-60],[20,-40],[33,-18],[40,-2],[26,-9],[10,-24],[-5,-44]]
  W(c,wg,.3,3);W(c,wg,.86,.8)
  B(c,[[4,-34],[24,-14],[42,2]],7,.9);B(c,[[0,-40],[18,-22],[34,-4]],5,.9)
  X(c,_=>{
    W(c,[[-3,-53],[8,-47],[19,-31],[12,-31],[1,-42]],1,1)
    c.strokeStyle='#000';c.lineWidth=.9
    for(const[x,y,q,v]of[[14,-22,30,-6],[20,-22,36,-4]]){c.beginPath();c.moveTo(x,y);c.lineTo(q,v);c.stroke()}
  })
  // black breast
  const bs=[[-12,-58],[-5,-50],[-7,-44],[-19,-37],[-30,-41],[-32,-52],[-24,-60]]
  W(c,bs,.3,3);W(c,bs,.88,.8)
  // head, beak chattering
  c.save();c.translate(-13,-56);c.rotate(hd)
  const h=[[-18,-12],[-10,-22],[2,-21],[9,-10],[6,2],[-8,4],[-18,-2]]
  W(c,h,.3,3);W(c,h,.9,.7)
  B(c,[[-16,-12],[-26,-11-o*.5],[-35,-8-o]],5.5,.93,u=>1-u*.85)
  B(c,[[-16,-8],[-25,-6+o*.4],[-32,-5+o*.8]],3.6,.9,u=>1-u*.85)
  X(c,_=>dot(c,-10,-12,1.7,'#000'))
  c.restore()
  // legs gripping the branch
  for(const[x,q]of[[-6,-9],[5,7]]){
    B(c,[[x,-10],[(x+q)/2-1,-4],[q,1-by]],3,.85,u=>1-u*.4)
    for(const d of[-6,0,5])B(c,[[q,-by],[q+d,3-by],[q+d*1.4,6-by]],2,.85)
  }
  c.resetTransform();fade(c);snap(c)
}
