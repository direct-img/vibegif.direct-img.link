// ink wash cicada clinging to a bold willow branch, body pulsing as it sings, faint brushed arcs of sound fading outward
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
const fin=u=>S(u*Math.PI)**.6
export default(c,t)=>{
  c.globalCompositeOperation='multiply';c.filter='blur(.5px)'
  const pu=.5+.5*S(t*T*4),r=R(6)
  // two long willow strokes with a few slender leaves, swaying
  ;[[52,12,104,0],[78,12,70,1.4]].forEach(([x,y,l,p],k)=>{
    const q=[0,1,2,3,4].map(j=>[x+S(t*T-j*.5+p)*j*j*.6-j*1.5,y+l*j/4]),e=sp(q,5)
    c.globalAlpha=.7;B(c,q,.9,K[2],u=>1-u*.5)
    ;[6,11,14,18,20].forEach((j,i)=>{
      const a=e[j],s=i%2?1:-1,d=13+i*5%7
      c.globalAlpha=.7-i%3*.12
      B(c,[a,[a[0]+s*3,a[1]+d*.5],[a[0]+s*4+S(t*T+p-j*.1)*2,a[1]+d]],1.7,K[2+i%2],u=>u**.4*(1-u)**.8*1.6)
    })
  })
  // one bold branch: wet wash, pooled edge, dry-brush bark and a few knots
  const br=[[28,248],[60,202],[98,160],[130,108],[160,66],[204,8]],bw=u=>(1-u*.5)*(1+.16*S(u*9+1)+.05*S(u*29))
  c.filter='blur(1.6px)';c.globalAlpha=.85;B(c,br,12,K[3],bw)
  c.filter='blur(1.8px)';c.globalAlpha=.6;B(c,br.map(([x,y])=>[x+6,y+4.5]),4.5,K[1],u=>bw(u)*(.5+.5*S(u*13)**2))
  c.filter='blur(.5px)';c.globalAlpha=.55;B(c,br,11,K[1],bw,4)
  // knots and bark flecks
  ;[[.16,-3,2.6],[.34,4,1.6],[.62,-2,2.2],[.8,2,1.4]].forEach(([u,o,z],k)=>{
    const[x,y]=sp(br,10)[u*50|0]
    c.globalAlpha=.85;B(c,[[x+o-z,y+z*1.6],[x+o+z*.4,y],[x+o+z,y-z*1.8]],z,K[0],fin)
    c.globalAlpha=.5;B(c,[[x+o-z*3,y+z*.5],[x+o-z*2,y-z*2.5],[x+o+z,y-z*4]],.8,K[1],fin)
  })
  // a side twig with one leaf
  c.globalAlpha=.9;B(c,[[163,62],[184,60],[204,70],[218,88]],2.2,K[0],u=>1-u*.8)
  c.globalAlpha=.7;B(c,[[218,88],[224,100+S(t*T)*1.5],[224,114+S(t*T)*3]],2.6,K[2],u=>u**.4*(1-u)**.8*1.6)
  // song: a few brushed arcs fading outward
  for(let k=0;k<3;k++){
    const p=(t*2+k/3)%1
    ;[[.35,1],[3.55,.6]].forEach(([a,z])=>{
      const q=34+p*46*z
      c.globalAlpha=S(p*Math.PI)**.8*(1-p*.5)*.6
      B(c,[0,1,2,3,4].map(j=>[124+C(a-.5+j*.25)*q,120+S(a-.5+j*.25)*q]),1.1+p*.6,K[2+k%2],fin,p>.55?2:0)
    })
  }
  // the cicada, head up the branch
  c.save();c.translate(124,120);c.rotate(.62);c.scale(1.5,1.5)
  // legs gripping the bark
  c.globalAlpha=.95
  ;[-1,1].forEach(s=>[[-11,-15],[-5,-6],[1,5]].forEach(([y,e])=>B(c,[[s*5,y],[s*11,y-2],[s*14,e]],1.1,K[0],u=>1-u*.4)))
  // abdomen swelling with each pulse, banded
  const aw=1+.2*pu
  c.filter='blur(.8px)';c.globalAlpha=.9;B(c,[[0,-2],[0,9],[0,22+pu]],6.5*aw,K[2],u=>(1-u)**.55)
  c.filter='blur(.5px)';c.globalAlpha=.9
  for(let j=0;j<5;j++)B(c,[[-6*aw*(1-j/6),2+j*3.8],[0,3+j*3.8],[6*aw*(1-j/6),2+j*3.8]],1,K[0],fin)
  // glassy wings: pale wash shapes with dark leading edge and veins, shivering
  ;[-1,1].forEach(s=>{
    const o=1+.9*pu,e=sp([[s*5,-9],[s*(11.5+o),5],[s*(10.5+o*1.5),23],[s*(4+o),38],[s*(2+o*.5),28],[s*3,8]],5)
    c.beginPath();e.forEach(q=>c.lineTo(...q));c.closePath();W(c,K[3],.6,.9,.5)
    c.globalAlpha=.9;B(c,[[s*5,-9],[s*(11.5+o),5],[s*(10.5+o*1.5),23],[s*(4+o),38]],.9,K[0],u=>1.1-u*.6)
    c.globalAlpha=.55
    B(c,[[s*4,-4],[s*(7+o*.6),12],[s*(4.5+o),33]],.5,K[1],u=>1)
    B(c,[[s*(8.5+o*.5),4],[s*(8+o),18],[s*(6+o),30]],.5,K[1],u=>1)
  })
  // dark thorax, wide head and bulging eyes
  c.filter='blur(.9px)';c.globalAlpha=.97;c.fillStyle=K[0]
  blob(c,0,-6.5,8.6,7,0,3,.06);c.fill()
  c.filter='blur(.5px)';B(c,[[-9.5,-15],[0,-16.5],[9.5,-15]],3.2,K[0],u=>.7+.4*fin(u))
  ;[-1,1].forEach(s=>{c.beginPath();c.arc(s*10.2,-15.5,2.6,0,T);c.fill()})
  c.restore()
  fade(c)
}
export const dither=true,frames=24,delay=85
