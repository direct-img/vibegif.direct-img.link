// two ink wash koi circling each other seen from above on rice paper, one black ink and one with vermilion patches, ripple rings trailing their tails
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
// one koi seen from above, head at angle a on the pond circle
const koi=(c,t,a,k)=>{
  const X=124,Y=128,r=58,P=[...Array(9)].map((_,j)=>{
    const b=a-j*.2,d=r+S(t*T*3-j*.8+k*2)*j
    return[X+C(b)*d,Y+S(b)*d]
  }),[e,g]=[P[8],P[7]],u=[e[0]-g[0],e[1]-g[1]],v=[-u[1],u[0]],fin=u=>S(u*Math.PI)**.7
  // tail and pectoral fins, pale wet strokes with dry hairs over them
  ;[-1,1].forEach(s=>{
    const m=s*(.8+.3*S(t*T*3+k*2+1)),h=P[2],o=a-.4,n=[C(o)*s,S(o)*s],w=[S(o),-C(o)],z=.5+.25*S(t*T*3+s),
      tl=[[e[0]-u[0]*.5,e[1]-u[1]*.5],[e[0]+u[0]*.9+v[0]*m*.5,e[1]+u[1]*.9+v[1]*m*.5],[e[0]+u[0]*2+v[0]*m*1.4,e[1]+u[1]*2+v[1]*m*1.4]]
    c.globalAlpha=.55;B(c,tl,6,K[k?4:3],u=>u**.6*(1.2-u))
    c.globalAlpha=.7;B(c,tl,6,K[k?3:2],u=>u**.6*(1.2-u),4)
    c.globalAlpha=.6
    B(c,[[h[0]+n[0]*7,h[1]+n[1]*7],[h[0]+n[0]*15-w[0]*6*z,h[1]+n[1]*15-w[1]*6*z],[h[0]+n[0]*19-w[0]*17*z,h[1]+n[1]*19-w[1]*17*z]],5,K[3],fin)
  })
  const f=u=>Math.min(1,u*9)**.5*(1-u*.82)**1.2,q=sp(P,3)
  c.globalAlpha=.9
  B(c,P,13,K[k?4:2],f)
  if(k){
    c.globalAlpha=.35;c.filter='blur(1px)';B(c,q.slice(0,16),2.5,K[2],fin)
    c.globalAlpha=.8;c.filter='blur(1.8px)'
    B(c,q.slice(1,9),9.5,'#c4482c',fin)
    B(c,q.slice(12,19),6,'#c4482c',fin)
  }else{
    c.globalAlpha=.9;c.filter='blur(1.2px)'
    B(c,q.slice(1,11),8,K[0],fin)
    B(c,q.slice(14,22),4.5,K[0],fin)
  }
  c.filter='blur(.5px)';c.globalAlpha=1
  ;[-1,1].forEach(s=>{
    const o=a-.05
    c.beginPath();c.arc(X+C(o)*(r+s*6.5),Y+S(o)*(r+s*6.5),1.6,0,T);c.fillStyle=K[0];c.fill()
  })
}
export default(c,t)=>{
  paper(c)
  c.globalCompositeOperation='multiply';c.filter='blur(.5px)'
  // ripple arcs left where each tail passed, widening as they fade
  for(let m=0;m<6;m++){
    const o=m/6*T+.3,g=((t*T-1.8-o)%Math.PI+T)%Math.PI/Math.PI,x=124+C(o)*58,y=128+S(o)*58
    ;[0,1].forEach(j=>{
      const q=5+g*22+j*7
      c.globalAlpha=(1-g)**1.5*(j?.45:.7)
      B(c,[...Array(6)].map((_,i)=>{
        const b=o+m*2+j*2.6+i*.36
        return[x+C(b)*q,y+S(b)*q]
      }),1,K[2],u=>S(u*Math.PI))
    })
  }
  koi(c,t,t*T,0);koi(c,t,t*T+Math.PI,1)
  seal(c,222,220,15)
}
export const frames=32,delay=90
