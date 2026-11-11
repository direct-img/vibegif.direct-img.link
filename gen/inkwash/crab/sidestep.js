// ink wash crab with a wet blotchy shell and dry-brush legs scuttling sideways, bubbles rising
const T=Math.PI*2,S=Math.sin,C=Math.cos,H=Math.hypot,K=[.93,.79,.58,.38,.21].map(a=>`rgba(20,18,16,${a})`)
const R=s=>(s=(s*7919+12345)*16807%2147483647,()=>(s=s*16807%2147483647)/2147483647)
// catmull-rom samples through points
const sp=(p,n=8)=>{
  const o=[],g=k=>p[Math.max(0,Math.min(p.length-1,k))]
  for(let k=0;k<p.length-1;k++)for(let j=0;j<n;j++){
    const u=j/n,a=g(k-1),b=g(k),d=g(k+1),e=g(k+2)
    o.push([0,1].map(m=>.5*(2*b[m]+(d[m]-a[m])*u+(2*a[m]-5*b[m]+4*d[m]-e[m])*u*u+(3*b[m]-a[m]-3*d[m]+e[m])*u*u*u)))
  }
  return o.push(g(1e9)),o
}
// brush stroke: half-width w shaped by pressure f(u), h>0 splits it into dry hairs
const B=(c,p,w,col=K[0],f=u=>Math.min(1,u*5)**.5*(1-u)**.6,h=0)=>{
  const q=sp(p),n=q.length-1,N=q.map((_,k)=>{
    const a=q[Math.max(0,k-1)],b=q[Math.min(n,k+1)],l=H(b[0]-a[0],b[1]-a[1])||1
    return[(a[1]-b[1])/l,(b[0]-a[0])/l]
  }),rib=(o,v)=>{
    c.beginPath()
    for(let k=0;k<=n;k++){const m=w*f(k/n)*(o+v);c.lineTo(q[k][0]+N[k][0]*m,q[k][1]+N[k][1]*m)}
    for(let k=n;k>=0;k--){const m=w*f(k/n)*(o-v);c.lineTo(q[k][0]+N[k][0]*m,q[k][1]+N[k][1]*m)}
    c.fillStyle=col;c.fill()
  }
  if(h)for(let j=0;j<h;j++)rib(((j+.5)/h*2-1)*.9,(.25+j*37%7/14)/h)
  else rib(0,1)
}
// blotchy closed blob path
const blob=(c,x,y,rx,ry,ro=0,s=1,n=.16,m=12)=>{
  const r=R(s),p=[...Array(m)].map((_,k)=>{
    const a=k/m*T,d=1+(r()-.5)*2*n,u=C(a)*rx*d,v=S(a)*ry*d
    return[x+u*C(ro)-v*S(ro),y+u*S(ro)+v*C(ro)]
  }),z=k=>p[(k+m)%m]
  c.beginPath();c.moveTo((z(-1)[0]+p[0][0])/2,(z(-1)[1]+p[0][1])/2)
  p.forEach((q,k)=>c.quadraticCurveTo(q[0],q[1],(q[0]+z(k+1)[0])/2,(q[1]+z(k+1)[1])/2))
  c.closePath()
}
// wet wash of the current path: soft fill plus a darker pooled rim
const W=(c,col,a=.5,b=3,rim=.4)=>{
  c.save();c.fillStyle=c.strokeStyle=col
  c.filter=`blur(${b}px)`;c.globalAlpha=a;c.fill()
  c.filter='blur(.7px)';c.globalAlpha=a*rim;c.lineWidth=1.1;c.stroke()
  c.restore()
}
const fin=u=>S(u*Math.PI)**.6,tip=u=>(1-u)**.8*Math.min(1,u*6)**.5
export default(c,t)=>{
  c.globalCompositeOperation='multiply';c.filter='blur(.5px)'
  const xc=s=>126+30*S(s*T),x=xc(t),ph=(x-126)/7
  // sand: a few pale dry strokes under the crab
  c.globalAlpha=.9
  B(c,[[40,196],[110,201],[190,197],[226,200]],3,K[4],fin,4)
  B(c,[[70,212],[120,214],[170,211]],2,K[4],fin,3)
  // bubbles rising from where the crab was when it let them go
  for(let k=0;k<5;k++){
    const p=(t+k/5)%1,bx=xc(t-p)+S(p*9+k*2)*5+(k%2*14-7),by=106-p*78,r=1.8+p*2.6+k%2
    c.globalAlpha=S(p*Math.PI)**.5*.75
    B(c,[...Array(9)].map((_,i)=>[bx+C(i/8*T*.8+k)*r,by+S(i/8*T*.8+k)*r]),.7,K[2],u=>.5+fin(u)*.6)
  }
  c.save();c.translate(x,148+S(ph*2)*1.2);c.rotate(-.1+S(ph)*.04);c.scale(1.12,1.12)
  // legs: dry-brush thigh, sharp black shin
  ;[-1,1].forEach(s=>{
    for(let j=0;j<4;j++){
      const b=-.45+j*.44,w=S(ph+j*1.57+s),e=1+.2*w,g=b*.95-.25,d=g+.95-.35*w+j*.12,
        o=[s*27*C(b),17*S(b)],k=[o[0]+s*C(g)*23*e,o[1]+S(g)*23*e],q=[k[0]+s*C(d)*25,k[1]+S(d)*25+C(ph+j*1.57+s)*2]
      c.globalAlpha=.85
      B(c,[o,[(o[0]+k[0])/2,(o[1]+k[1])/2-2],k],3.6,K[1],u=>.75+.3*S(u*Math.PI),4)
      c.globalAlpha=.5;B(c,[o,k],3.2,K[2],u=>.8)
      c.globalAlpha=.95;B(c,[k,[(k[0]+q[0])/2+s*2,(k[1]+q[1])/2],q],2.6,K[0],tip)
    }
    // claw arm, fat wet claw and pincers
    const v=S(ph*1.5+s*2)*3,o=[s*19,-13],e=[s*40,-29+v],m=[s*33,-47+v],n=[s*17,-58+v*1.5]
    c.globalAlpha=.9;B(c,[o,[s*31,-18+v*.5],e],4,K[1],u=>.7+.4*u)
    c.filter='blur(1.2px)';B(c,[e,m,[(m[0]+n[0])/2,(m[1]+n[1])/2-1]],8,K[0],u=>S(u**.7*Math.PI)**.7)
    c.filter='blur(.5px)'
    B(c,[m,[s*24,-58+v*1.3],n],2.6,K[0],tip)
    B(c,[[m[0]-s*5,m[1]+3],[s*22,-50+v*1.3],[n[0]+s*1,n[1]+5+C(ph*3)*1.5]],2.2,K[0],tip)
    // stalk eyes
    c.globalAlpha=1;B(c,[[s*8,-15],[s*9.5,-22]],1.8,K[0],u=>.5+u*.7)
  })
  // shell: wet blotchy wash pooling dark, with gaps left between blots
  blob(c,0,0,31,20,0,5,.1);W(c,K[2],.8,1.6,.7)
  c.filter='blur(2.6px)';c.globalAlpha=.9;c.fillStyle=K[0]
  blob(c,-13,-3,12,10,.3,8,.25);c.fill()
  blob(c,12,-5,13,9,-.2,9,.25);c.fill()
  blob(c,1,8,15,6,0,12,.25);c.fill()
  c.restore()
}
export const dither=true,frames=24,delay=90
