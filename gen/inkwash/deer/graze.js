// ink wash stag grazing, lifting its head to listen with ears twitching and tail flicking, then lowering it to the grass again
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
  // leg: loaded thigh stroke, dark joint, thin cannon, hoof dab
  leg=(c,[a,b,j,d,e],w,al)=>{
    B(c,[a,b,j],w,al*.75,u=>min(1,.6+u*4)*(1-u*.68))
    B(c,[j,d,e],w*.36+1.2,al,u=>1-u*.35)
    dot(c,j[0],j[1],w*.2+1.1,al);dot(c,d[0]*.3+e[0]*.7,d[1]*.3+e[1]*.7,1.5,al)
    B(c,[[e[0]+1.5,e[1]-4],[e[0],e[1]],[e[0]-3.5,e[1]+1.5]],5,al*1.1,u=>.5+u*.5)
  }
export default(c,t)=>{
  const h=ss(.26,.42,t)-ss(.8,.95,t),nb=(1-h)*sin(t*T*6),
    ea=pu(.48,.6,t)*sin(t*T*8)*.5+pu(.64,.72,t)*.4,tf=pu(.5,.78,t)*sin(t*T*8),
    th=2.5+1.72*h+nb*.02,ph=2+1.02*h+nb*.05,S=[124,130],
    N=[S[0]+cos(th)*44,S[1]+sin(th)*44]
  c.translate(128,216);c.scale(1.15,1.15);c.translate(-138,-216)
  // ground and grass
  W(c,[[50,216],[140,210],[236,217],[140,224]],.14,5)
  D(c,[[96,219],[160,221],[232,218]],4,.45,3,4)
  for(let k=0;k<9;k++){
    const x=38+k*8+R(k)*7,l=12+R(k+5)*20,d=(R(k+9)-.5)*16+sin(t*T+k)*1.5
    B(c,[[x,218],[x+d*.3,218-l*.6],[x+d,218-l]],3.4,.5+R(k+2)*.4,u=>min(1,.5+u*3)*(1-u**1.5))
  }
  // far legs
  leg(c,[[140,142],[142,162],[143,181],[144,198],[143,212]],9,.42)
  leg(c,[[180,138],[184,158],[188,176],[181,197],[180,212]],13,.42)
  // body: one wet mass, pooled dark along the back, fading to an open belly
  const bd=[[122,123],[150,123],[176,120],[196,126],[204,141],[198,157],[180,153],[158,157],[134,161],[119,150],[115,134]]
  W(c,bd,.26,4);W(c,bd,.24,1.5)
  M(c,[[196,134],[172,129],[146,131],[124,132]],24,.15,fat,1,16)
  X(c,_=>{
    const g=c.createLinearGradient(0,138,0,160);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.9)')
    c.fillStyle=g;c.filter='blur(4px)';c.fillRect(138,138,44,30);c.filter='none'
  })
  const bk=[[204,142],[197,126],[176,119],[150,122],[124,121]]
  B(c,bk,7,.8,u=>min(1,.3+u*4)*(1-u**2)**.5);F(c,bk,7,3,3,.4)
  // pale dapples and rump patch cut from the wash
  X(c,_=>{
    c.filter='blur(.7px)'
    for(let k=0;k<12;k++)dot(c,134+k*5+R(k)*4,128+R(k+3)*13,1.5+R(k+7)*1.1,.85)
    dot(c,201,142,3.4,.8);c.filter='none'
  })
  // tail flick
  c.save();c.translate(201,129);c.rotate(tf*.7-h*.3)
  B(c,[[0,0],[5,6],[6,14]],7,.88,u=>sin(min(1,u+.15)*PI)**.6);c.restore()
  // near legs
  leg(c,[[128,140],[127,162],[124,181],[124,198],[122,213]],10,.82)
  leg(c,[[190,136],[196,158],[200,176],[193,197],[192,213]],15,.82)
  // neck: a thick stroke tapering to the head, dark along the nape
  const m=[(S[0]+N[0])/2+sin(th)*5-4,(S[1]+N[1])/2-cos(th)*5],nk=[[S[0]+9,S[1]+9],m,N]
  M(c,nk,34,.16,u=>1-u*.5,5,12);B(c,nk,27,.45,u=>min(1,.7+u*3)*(1-u*.52),20)
  B(c,[[S[0]+6,S[1]-6],[m[0]+sin(th)*10,m[1]-cos(th)*10],[N[0]+sin(th)*4,N[1]-cos(th)*4]],6.5,.75,u=>min(1,.4+u*3)*(1-u**2))
  // head
  c.save();c.translate(...N);c.rotate(ph);c.scale(1.25,-1.25)
  for(const[o,a]of[[3,.45],[0,.88]]){
    // antler with dry tails and a quick ear dab, far then near
    const bm=[[1+o,-6],[-6+o,-22],[3+o,-40]]
    B(c,bm,4,a,u=>1-u*.75);B(c,[[-4+o,-17],[4+o,-21],[10+o,-25]],3,a);B(c,[[-2+o,-30],[-7+o,-35],[-12+o,-40]],2.8,a)
    D(c,[[2+o,-36],[5+o,-42],[9+o,-46]],2.4,a*.8,3,o+2,8);D(c,[[8+o,-24],[13+o,-27]],1.8,a*.7,2,o+5,6)
    c.save();c.translate(-2+o,-4);c.rotate(-.5-ea*(o?.6:1))
    B(c,[[0,0],[-7,-3],[-15,-3]],9,a*.95,u=>sin(min(1,u+.1)*PI)**.7);c.restore()
  }
  const hd=[[-5,0],[10,0],[29,3]],pr=u=>(1-u*.6)*min(1,.6+u*2.5)
  M(c,hd,19,.22,pr,7,10);B(c,hd,13,.3,pr);B(c,[[-4,-5],[10,-6],[28,-1]],4.2,.75)
  dot(c,29,2.5,3,.93);dot(c,9,-3,2.3,.93)
  c.restore()
  c.resetTransform();fade(c);snap(c)
}
