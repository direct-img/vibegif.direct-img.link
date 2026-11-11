// three translucent ink wash shrimp drifting on rice paper in the classic Chinese painting manner, pale segmented bodies, dark head spots and long waving feelers
const paper=(c,s=7)=>{
  const r=()=>(s=s*16807%2147483647)/2147483647,P=[...Array(160)].map((_,k)=>{
    const e=k/40|0,f=k%40/40,d=9+r()*3.5,w=256-2*d
    return[[d+f*w,d],[256-d,d+f*w],[256-d-f*w,256-d],[d,256-d-f*w]][e]
  }),edge=()=>{c.beginPath();P.forEach(p=>c.lineTo(...p));c.closePath()}
  c.save();edge();c.fillStyle='#f3ecdc';c.fill();c.clip()
  for(let k=0;k<7;k++){
    const x=r()*256,y=r()*256,g=c.createRadialGradient(x,y,0,x,y,40+r()*70)
    g.addColorStop(0,'rgba(190,170,130,.07)');g.addColorStop(1,'rgba(190,170,130,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  for(let k=0;k<170;k++){
    const x=r()*256,y=r()*256,a=r()*6.3,l=8+r()*24
    c.strokeStyle=r()<.7?'rgba(150,128,95,.13)':'rgba(255,253,245,.6)';c.lineWidth=.5+r()*.7
    c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+Math.cos(a+.5)*l/2,y+Math.sin(a+.5)*l/2,x+Math.cos(a)*l,y+Math.sin(a)*l);c.stroke()
  }
  c.restore();edge();c.clip()
}
const T=Math.PI*2,S=Math.sin,C=Math.cos,H=Math.hypot,K=['#141210','#3a3632','#6e6962','#a39d94','#cfc9be']
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
// vermilion seal with carved marks
const seal=(c,x,y,z=15)=>{
  const r=R(z+x)
  c.save();c.translate(x,y);c.filter='blur(.4px)';c.globalAlpha=.85;c.fillStyle='#b8322a'
  c.beginPath()
  for(let k=0;k<24;k++){
    const e=k/6|0,f=k%6/6,d=z/2-r()*1.3,m=f*2-1
    c.lineTo(...[[m*d,-d],[d,m*d],[-m*d,d],[-d,-m*d]][e])
  }
  c.fill();c.globalCompositeOperation='source-over';c.globalAlpha=.9
  c.strokeStyle='#f3ecdc';c.lineWidth=z/11;c.lineCap='square'
  c.beginPath()
  ;[[-.28,-.3,.28,-.3],[0,-.3,0,.02],[-.3,.02,.3,.02],[-.2,.02,-.3,.32],[.2,.02,.3,.32],[-.08,.3,.08,.3]]
    .forEach(([a,b,d,e])=>{c.moveTo(a*z,b*z);c.lineTo(d*z,e*z)})
  c.stroke();c.restore()
}
// keep the half-transparent deckle pixels exactly as the paper left them, so ink at the edge doesn't bloat the webp
const keep=c=>{
  const pd=c.getImageData(0,0,256,256).data
  return()=>{
    const m=c.getImageData(0,0,256,256),e=m.data
    for(let k=0;k<e.length;k+=4)if(pd[k+3]<255)for(let j=0;j<4;j++)e[k+j]=pd[k+j]
    c.putImageData(m,0,0)
  }
}
const fin=u=>S(u*Math.PI)**.6,hair=u=>(1-u*.8)*Math.min(1,u*8)
// one shrimp facing left, drawn in its own frame
const shrimp=(c,t,x,y,ro,z,ph)=>{
  const w=S(t*T+ph),v=S(t*T*2+ph*1.7),cu=.26+.07*w+.05*v
  c.save();c.translate(x+4*S(t*T+ph*2),y+3*C(t*T+ph));c.rotate(ro+.06*w);c.scale(z,z)
  // feelers: long hairlines sweeping forward and back
  c.globalAlpha=.8
  ;[[-62,-30,-40,-74],[-70,-8,-104,-22],[-66,10,-100,22],[-52,-40,-12,-66],[-58,24,-70,58]].forEach(([a,b,d,e],j)=>{
    const m=S(t*T+ph+j*1.3)*7,n=C(t*T+ph+j*.9)*5
    B(c,[[-25,-1+j%2],[-40,b/3],[a+n*.4,b+m*.5],[d+n,e+m]],.75,K[1],hair)
  })
  // clawed arms
  ;[[-1,.9],[1,.6]].forEach(([s,l],j)=>{
    const m=S(t*T+ph+j*2)*3,e=[-44*l-6,s*13+6+m],g=[-66*l-8,s*9+3+m*1.6]
    c.globalAlpha=.8
    B(c,[[-13,4],[-26*l-4,s*10+7+m*.5],e],1.1,K[1],u=>1-.3*u)
    B(c,[e,g],1.6,K[1],u=>.7+.5*S(u*Math.PI))
    B(c,[g,[g[0]-8,g[1]-2.5]],1.1,K[0],hair);B(c,[g,[g[0]-8,g[1]+2]],1.1,K[0],hair)
  })
  // walking legs
  c.globalAlpha=.7
  for(let j=0;j<4;j++)B(c,[[-15+j*4,5],[-20+j*4+S(t*T*2+ph+j)*2,13],[-25+j*4+S(t*T*2+ph+j)*4,17]],.9,K[2],hair)
  // abdomen: overlapping wet dabs curling down to the tail
  let px=-2,py=-1,a=-.3
  c.filter='blur(1px)'
  for(let j=0;j<6;j++){
    a+=cu+(j>3)*v*.12;px+=C(a)*7.6;py+=S(a)*7.6
    c.globalAlpha=.6;B(c,[[px-S(a)*(8-j)*-.2,py],[px-C(a)*3+S(a)*2,py-S(a)*3-C(a)*2],[px+C(a)*5,py+S(a)*5]],0,K[3])
    blob(c,px,py,6.4,7.4-j*.95,a,j+3,.08);W(c,K[3],.62,.8,.5)
    c.globalAlpha=.55;c.filter='blur(.5px)'
    B(c,[[px-S(a)*-5,py+C(a)*5],[px-S(a)*-9+C(a)*3,py+C(a)*9+S(a)*3+v]],1.1,K[2],hair)
    c.filter='blur(1px)'
  }
  // tail fan
  c.globalAlpha=.7
  c.filter="blur(.6px)";[-.6,0,.6].forEach(d=>B(c,[[px,py],[px+C(a+.3+d)*7,py+S(a+.3+d)*7],[px+C(a+.3+d*1.3)*14,py+S(a+.3+d*1.3)*14]],3.2,K[2],fin))
  // carapace wash with the dark ink core, rostrum and stalk eyes
  c.globalAlpha=.85;B(c,[[-33,-3],[-18,-2.5],[-6,-1],[4,0]],9.5,K[3],u=>u**.55*(1-u*.25))
  c.globalAlpha=.9;c.filter='blur(1.3px)';B(c,[[-20,-2],[-10,-1.5],[-2,-.5]],3,K[0],fin)
  c.filter='blur(.5px)';c.globalAlpha=.9
  B(c,[[-22,-4],[-30,-6],[-38,-5]],1.2,K[1],hair)
  ;[-1,1].forEach(s=>B(c,[[-24,s*2.5-1],[-28,s*7-2]],1.7,K[0],u=>.5+u*.6))
  c.restore()
}
export default(c,t)=>{
  paper(c,11);const fix=keep(c)
  c.globalCompositeOperation='multiply';c.filter='blur(.5px)'
  shrimp(c,t,150,84,.35,1.12,0)
  shrimp(c,t,96,170,-.5,.92,2.1)
  shrimp(c,t,190,180,-2.5,.68,4.2)
  seal(c,220,38,14);fix()
}
export const frames=24,delay=95
