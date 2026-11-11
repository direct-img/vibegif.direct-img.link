// ink wash dragonfly hovering and darting above a reed tip, wings a blur of pale wash, faint reflection in the water
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
const fin=u=>S(u*Math.PI)**.6,ss=u=>(u=Math.max(0,Math.min(1,u)),u*u*(3-2*u))
// dragonfly in its own frame, head toward +x; m=1 paints the faint reflection
const fly=(c,t,m)=>{
  const A=m?.3:1,bl=m?'blur(2px)':'blur(.5px)'
  // wings: a blur of pale wash, each drawn at a few beat angles
  ;[[1,.35,36],[1,-.3,31],[-1,.35,36],[-1,-.3,31]].forEach(([s,a,l],k)=>{
    for(let j=0;j<3;j++){
      const b=Math.PI/2-a+(j-1)*.2+.14*S(t*T*7+k*2+j),e=[5+C(b)*l,s*S(b)*l],g=[5+C(b+.1)*l*.55,s*S(b+.1)*l*.55]
      c.filter=m?bl:'blur(1.3px)';c.globalAlpha=.36*A
      B(c,[[5,s*2],g,e],5.2,K[3],u=>u**.5*(1.25-u)**.5)
      if(j==1&&!m){
        c.filter=bl;c.globalAlpha=.55
        B(c,[[5,s*2],[5+C(b-.07)*l*.55,s*S(b-.07)*l*.55],[5+C(b-.05)*l,s*S(b-.05)*l]],.7,K[1],u=>1-u*.5)
        c.globalAlpha=.6;B(c,[[5+C(b-.05)*l*.86,s*S(b-.05)*l*.86],[5+C(b-.05)*l*.96,s*S(b-.05)*l*.96]],1.3,K[1],fin)
      }
    }
  })
  // long segmented abdomen, thorax, head and eyes
  c.filter=bl;c.globalAlpha=.95*A
  const w=S(t*T*2)*1.5
  for(let j=0;j<6;j++)B(c,[[-j*8,j*j*.12+w*j/6],[-j*8-7,(j+.9)**2*.12+w*(j+.9)/6]],j==5?1.3:1.7-j*.08,K[0],u=>.75+.4*fin(u))
  c.filter=m?bl:'blur(.9px)';B(c,[[-2,0],[5,-.5],[12,0]],5,K[0],u=>.5+.6*fin(u))
  c.filter=bl;c.fillStyle=K[1];c.globalAlpha=.95*A
  ;[-1,1].forEach(s=>{c.beginPath();c.arc(15,s*2.6,3,0,T);c.fill()})
  if(!m){
    c.globalAlpha=.8
    ;[-1,1].forEach(s=>B(c,[[8,s*3],[13,s*7],[17,s*8]],.6,K[0],u=>1))
  }
}
export default(c,t)=>{
  c.globalCompositeOperation='multiply';c.filter='blur(.5px)'
  const sw=S(t*T),d=ss((t-.42)/.07)-ss((t-.86)/.09),
    x=168-d*30+3*S(t*T*2),y=84-d*14+2.5*C(t*T*3),ro=-2.5+d*.5+.05*S(t*T*2)
  // water: just a few pale dry strokes
  c.globalAlpha=.9
  B(c,[[30,212],[90,215],[150,211],[226,214]],2.2,K[3],fin,3)
  B(c,[[96,228],[150,230],[210,227]],1.6,K[4],fin,2)
  // faint reflection
  c.save();c.translate(x,262-y*.42+sw);c.scale(1.3,-.7);c.rotate(ro);fly(c,t,1);c.restore()
  c.filter='blur(2px)';c.globalAlpha=.16;B(c,[[70,214],[82,226],[92,244]],3,K[2],fin)
  // reed: stem and blades in dark ink with dry tips
  c.filter='blur(.5px)'
  const tp=[146+sw*3,126+sw],st=[[62,250],[74,196],[100,152+sw*.5],tp]
  c.globalAlpha=.9;B(c,st,2.8,K[0],u=>1-u*.75)
  c.globalAlpha=.9
  B(c,[[70,212],[52,176+sw],[30,160+sw*2],[20,164+sw*3]],4,K[1],u=>u**.4*(1-u)**.8*1.6)
  B(c,[[84,176],[112,170+sw],[142,186+sw*2],[156,206+sw*3]],4.2,K[0],u=>u**.4*(1-u)**.8*1.6)
  c.globalAlpha=.75;B(c,[[98,155],[120,118+sw],[128,84+sw*2],[122,62+sw*4]],3.4,K[1],u=>u**.4*(1-u)**.8*1.6,4)
  c.globalAlpha=.45;B(c,[[98,155],[120,118+sw],[128,84+sw*2],[122,62+sw*4]],3,K[2],u=>u**.4*(1-u)**.8*1.6)
  // the dragonfly itself
  c.save();c.translate(x,y);c.rotate(ro);c.scale(1.3,1.3);fly(c,t,0);c.restore()
  fade(c)
}
export const dither=true,frames=24,delay=85
