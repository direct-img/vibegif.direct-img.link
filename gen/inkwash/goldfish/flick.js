// plump ink wash goldfish with a pale orange body swimming in place, its translucent veil tail rippling
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
// soften anything that runs off the canvas so it never looks cropped
const fade=(c,w=16)=>{
  c.save();c.globalCompositeOperation='destination-out';c.filter='none';c.globalAlpha=1
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
}
// wet wash of the current path: soft fill plus a darker pooled rim
const W=(c,col,a=.5,b=3,rim=.4)=>{
  c.save();c.fillStyle=c.strokeStyle=col
  c.filter=`blur(${b}px)`;c.globalAlpha=a;c.fill()
  c.filter='blur(.7px)';c.globalAlpha=a*rim;c.lineWidth=1.1;c.stroke()
  c.restore()
}
const fin=u=>S(u*Math.PI)**.6,O='#d5762f'
export default(c,t)=>{
  c.globalCompositeOperation='multiply';c.filter='blur(.5px)'
  const w=S(t*T),ray=(o,a,l,A,p)=>[...Array(6)].map((_,j)=>{
    const u=j/5,d=A*u**1.3*S(t*T-u*3.6+p),g=a+u*u*.5*Math.sign(a)+.12*w*u
    return[o[0]+C(g)*l*u-S(g)*d,o[1]+S(g)*l*u+C(g)*d]
  })
  // water weed, dark to set off the pale fish
  ;[[44,0,62],[56,1.3,84],[35,2.6,44]].forEach(([x,p,h],k)=>{
    const s=S(t*T+p)
    c.globalAlpha=.75
    B(c,[[x,246],[x+6+s*2,236-h*.4],[x-3+s*5,236-h*.75],[x+7+s*9,236-h]],3.2-k*.5,K[1+k%2],u=>(1-u)**.6*Math.min(1,u*4+.3))
  })
  c.save();c.translate(104,118+w*1.5);c.rotate(-.06+.02*C(t*T))
  // veil tail: overlapping translucent washes with dry hairlines
  const o=[25,2]
  ;[[-1.05,-.05,74,0],[.05,1.15,70,1.6],[-.45,.5,76,.8]].forEach(([a0,a1,l,p],k)=>{
    const rs=[...Array(7)].map((_,j)=>ray(o,a0+(a1-a0)*j/6,l*(.8+.2*S(j/6*Math.PI)+.07*S(j*2.4+k)),11,p+j*.25)),
      e=sp([...rs[0],...rs.slice(1,6).map(q=>q[5]),...rs[6].reverse()],4)
    c.beginPath();e.forEach(q=>c.lineTo(...q));c.closePath()
    W(c,k>1?K[3]:O,.36,1.1,.55)
    c.globalAlpha=.42
    rs.slice(1,6).forEach((q,j)=>B(c,q,.9,j%2?K[2]:'#a8552a',u=>Math.min(1,u*6)*(1-u*.7)))
  })
  // dorsal, belly and pectoral fins
  c.filter='blur(1.2px)';c.globalAlpha=.45
  B(c,[[-12,-22],[4,-40-w*2],[26,-34-w*3],[30,-14]],9,O,fin)
  B(c,[[4,22],[14,36+w*2],[26,38+w*3]],5,O,fin)
  c.filter='blur(.5px)';c.globalAlpha=.5
  B(c,[[-10,-23],[4,-40-w*2],[24,-36-w*3]],8,K[2],fin,4)
  // plump body: pale wash, deeper orange pooled along the back
  blob(c,0,0,34,25,.05,4,.05);W(c,O,.5,1.6,.7)
  c.filter='blur(3px)';c.globalAlpha=.6
  B(c,[[-30,-6],[-14,-17],[8,-17],[28,-4]],10,'#c9521f',fin)
  c.filter='blur(1.6px)';c.globalAlpha=.4;B(c,[[-33,2],[-27,-10],[-14,-18]],6,'#c9521f',fin)
  // scales hinted with a few pale arcs
  c.filter='blur(.5px)';c.globalAlpha=.3
  for(let k=0;k<7;k++){
    const x=-8+k%4*9+(k>3)*4,y=-4+(k>3)*9
    B(c,[[x,y-4],[x+4,y],[x,y+4]],.9,'#a8552a',fin)
  }
  // pectoral fin fanning
  const pf=.5+.35*S(t*T*2)
  c.globalAlpha=.5;c.filter='blur(1px)'
  B(c,[[-12,10],[-6,22+pf*4],[4,26+pf*9]],6,O,fin)
  c.filter='blur(.5px)';c.globalAlpha=.5;B(c,[[-12,10],[-6,22+pf*4],[4,26+pf*9]],5,K[2],fin,3)
  // gill line, mouth and eye
  c.globalAlpha=.55;B(c,[[-17,-10],[-13,0],[-17,10]],1.3,'#8a4a26',fin)
  c.globalAlpha=.8;B(c,[[-35,3],[-32,5+S(t*T*2)*.8],[-30,4]],1.3,K[1],fin)
  c.globalAlpha=1;c.fillStyle=K[0]
  c.beginPath();c.arc(-24,-4,3.3,0,T);c.fill()
  c.globalCompositeOperation='destination-out';c.fillStyle='#000'
  c.beginPath();c.arc(-25,-5,1,0,T);c.fill()
  c.restore();c.globalCompositeOperation='multiply'
  // bubbles from the mouth
  for(let k=0;k<3;k++){
    const p=(t+k/3)%1,bx=64-p*10+S(p*8+k)*4,by=118-p*70,r=1.6+p*2.4
    c.globalAlpha=S(p*Math.PI)**.5*.7
    B(c,[...Array(9)].map((_,i)=>[bx+C(i/8*T*.8+k)*r,by+S(i/8*T*.8+k)*r]),.7,K[2],u=>.5+fin(u)*.6)
  }
  fade(c)
}
export const dither=true,frames=18,delay=105
