// ink wash kingfisher on a reed stem dives into the water with splash rings and flutters back up to its perch, small teal and orange accents on rice paper
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
const fin=u=>S(u*Math.PI)**.6,leaf=u=>u**.4*(1-u)**.8*1.6,cl=u=>Math.max(0,Math.min(1,u)),ss=u=>(u=cl(u),u*u*(3-2*u)),
  bz=(a,b,d,u)=>[0,1].map(k=>(1-u)*(1-u)*a[k]+2*u*(1-u)*b[k]+u*u*d[k]),TE='#3d7480',OR='#c46a2c'
// kingfisher facing right; be = body angle behind the head, op = wings open 0..1, fl = flap
const bird=(c,be,op,fl)=>{
  const h=[5,-11],d=[C(be),S(be)],n=[-d[1],d[0]],P=(a,b)=>[h[0]+d[0]*a+n[0]*b,h[1]+d[1]*a+n[1]*b]
  // tail
  c.globalAlpha=.9;B(c,[P(22,0),P(31,-1)],2.4,K[1],u=>1-u*.5)
  // open wings beating
  if(op>.05)[-1,1].forEach(s=>{
    const a=be+Math.PI/2+.5+fl*.8+s*.3,l=24*op,o=P(9,1)
    c.globalAlpha=.75;c.filter='blur(.9px)'
    B(c,[o,[o[0]+C(a)*l*.5-d[0]*4,o[1]+S(a)*l*.5-d[1]*4],[o[0]+C(a+.25)*l,o[1]+S(a+.25)*l]],6,s>0?K[1]:TE,u=>u**.4*(1-u)**.6*1.5)
    c.filter='blur(.5px)';c.globalAlpha=.6
    B(c,[o,[o[0]+C(a)*l*.5-d[0]*4,o[1]+S(a)*l*.5-d[1]*4],[o[0]+C(a+.25)*l,o[1]+S(a+.25)*l]],5.5,K[0],u=>u**.4*(1-u)**.6*1.5,3)
  })
  // body: teal wash back, soft orange belly
  c.filter='blur(1px)';c.globalAlpha=.85
  B(c,[P(0,0),P(10,1),P(24,0)],7.5,TE,u=>S(u**.8*Math.PI)**.5+.25*(1-u))
  c.globalAlpha=.8;B(c,[P(3,-4),P(11,-5.5),P(21,-2.5)],4,OR,fin)
  // folded wing, dark
  c.filter='blur(.8px)';c.globalAlpha=.8*(1-op)+.01
  B(c,[P(6,3),P(15,5),P(25,2)],4,K[1],fin)
  // head, cheek left as paper, long dark beak, eye
  c.filter='blur(.8px)';c.globalAlpha=.95;blob(c,h[0],h[1]-1,6.6,5.8,0,2,.05);c.fillStyle=TE;c.fill()
  c.globalAlpha=.7;B(c,[[h[0]-5,h[1]-4],[h[0],h[1]-6.5],[h[0]+5,h[1]-4]],2.4,K[0],fin)
  c.filter='blur(.5px)';c.globalAlpha=1
  B(c,[[h[0]+4,h[1]-1],[h[0]+13,h[1]],[h[0]+23,h[1]+1.5]],2.3,K[0],u=>1-u*.9)
  c.fillStyle=K[0];c.beginPath();c.arc(h[0]+2.2,h[1]-1.6,1.4,0,T);c.fill()
  c.globalAlpha=.8;B(c,[[h[0]-1,h[1]+4],[h[0]+3,h[1]+5]],1.4,OR,fin)
}
export default(c,t)=>{
  paper(c,37);const fix=keep(c)
  c.globalCompositeOperation='multiply';c.filter='blur(.5px)'
  const A=.14,D=.3,U=.5,L=.74,E=[176,203],
    b=t<A?5:t<L?5*Math.exp(-(t-A)*13)*C((t-A)*42):5+5*Math.exp(-(t-L)*15)*C((t-L)*42)-5*Math.exp(-(t-L)*15)*(1+C((t-L)*42)),
    pp=[106+b*.5,100+b],pc=[pp[0]+4,pp[1]-20]
  // water: bare paper and a few pale dry strokes
  c.globalAlpha=.55
  B(c,[[26,206],[90,209],[130,206]],2,K[3],fin,3)
  B(c,[[150,224],[190,226],[232,223]],1.6,K[4],fin,2)
  B(c,[[40,226],[80,228],[112,226]],1.4,K[4],fin,2)
  // splash rings: one set as it goes in, one as it bursts out
  ;[D,U].forEach((s,q)=>{
    for(let k=0;k<3;k++){
      const p=(t-s-k*.045)/.42
      if(p<=0||p>=1)continue
      const r=6+p*(50-q*10)
      c.globalAlpha=(1-p)**1.2*.85
      ;[.25,3.4].forEach(a=>B(c,[0,1,2,3,4,5].map(j=>[E[0]+C(a+j*.5)*r,E[1]+S(a+j*.5)*r*.3]),1.5-p*.5,K[k?2:1],fin))
    }
    // droplets thrown up
    for(let k=0;k<6;k++){
      const p=(t-s)/.2,vx=(k-2.5)*13+(k%2*6-3),vy=-46-k*7%19
      if(p<=0||p>=1)continue
      c.globalAlpha=(1-p)**.5*.9;c.fillStyle=K[1+k%2]
      c.beginPath();c.ellipse(E[0]+vx*p*1.2,E[1]-3+vy*p*1.5+100*p*p,1.6+k%3*.5,2.6+k%2,vx*.02,0,T);c.fill()
    }
  })
  // reeds, the tall one bowing under the bird
  c.globalAlpha=.8;B(c,[[56,250],[60,200],[52,160],[40,138]],2.2,K[2],u=>1-u*.8)
  c.globalAlpha=.8;B(c,[[58,214],[72,190],[92,180],[104,184]],3,K[2],leaf)
  c.globalAlpha=.92;B(c,[[80,250],[84,196],[94,140],pp,[pp[0]+16,pp[1]-10+b*.6],[pp[0]+34,pp[1]-8+b*1.4]],2.7,K[0],u=>1-u*.8)
  c.globalAlpha=.9;B(c,[[83,206],[66,174],[44,168+b*.2],[30,176+b*.3]],3.6,K[1],leaf)
  c.globalAlpha=.9;B(c,[[90,160],[112,146+b*.3],[136,154+b*.5],[148,170+b*.6]],3.6,K[0],leaf)
  c.globalAlpha=.6;B(c,[[pp[0]+20,pp[1]-11+b*.8],[pp[0]+33,pp[1]-9+b*1.4],[pp[0]+44,pp[1]-2+b*1.8]],3.4,K[1],fin,4)
  // the bird: perched, plunging, gone under, fluttering back up
  c.save();c.beginPath();c.rect(0,0,256,E[1]);c.clip()
  if(t<A||t>=L){
    const k=t<A?S(t/A*Math.PI):0
    c.translate(...pc);c.rotate(.08+k*.18);c.scale(1.5,1.5);bird(c,2.1,0,0)
  }else if(t<D+.02){
    const u=ss((t-A)/(D-A))**1.3*1.08,p=bz(pc,[168,84],[E[0],E[1]+6],u),q=bz(pc,[168,84],[E[0],E[1]+6],u+.02)
    c.translate(...p);c.rotate(Math.atan2(q[1]-p[1],q[0]-p[0])*ss(u*3));c.scale(1.5,1.5);bird(c,2.1+ss(u*2.5)*1.04,.5*S(cl(u*2.5)*Math.PI),.4)
  }else if(t>=U){
    const u=(t-U)/(L-U),p=bz([E[0],E[1]+8],[170,96],pc,1-(1-u)**1.7)
    c.translate(...p);c.rotate(-.5+ss(u)*.58);c.scale(1.5,1.5);bird(c,2.3-.2*u,cl((1-u)*5),S(t*T*8))
  }
  c.restore()
  // feet on the stem
  if(t<A||t>=L){c.globalAlpha=.9;B(c,[[pp[0]-1,pp[1]-5],[pp[0]+2,pp[1]+1]],1.2,K[0],u=>1)}
  seal(c,222,38,15);fix()
}
export const frames=36,delay=[...Array(36)].map((_,i)=>i<5||i>29?120:70)
