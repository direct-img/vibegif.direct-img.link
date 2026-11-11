// ink wash turtle seen from above paddling through water on rice paper, flippers stroking and a ripple wake trailing behind
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
const fin=u=>S(u*Math.PI)**.6
export default(c,t)=>{
  paper(c,43);const fix=keep(c)
  c.globalCompositeOperation='multiply';c.filter='blur(.5px)'
  const st=S(t*T),sg=C(t*T)
  c.save();c.translate(106,104);c.rotate(-.62);c.scale(1.18,1.18)
  // wake: arcs slipping back and widening behind the turtle
  for(let k=0;k<5;k++){
    const p=(t+k)/5,y=34+p*92,w=14+p*46
    c.globalAlpha=S(p*Math.PI)**.6*(1-p*.5)*.7
    ;[-1,1].forEach(s=>B(c,[[s*w*.25,y+w*.16],[s*w*.7,y+w*.05],[s*w,y-w*.3],[s*w*1.12,y-w*.62]],1.5,K[2],fin))
  }
  c.translate(0,-3*sg)
  // flippers: wet stroke with dry hairs, front pair sweeping, hind pair trailing
  ;[-1,1].forEach(s=>{
    const a=-.55+.6*st,o=[s*19,-17],m=[o[0]+s*C(a-.25)*20,o[1]+S(a-.25)*20],e=[o[0]+s*C(a+.3)*40,o[1]+S(a+.3)*40],
      b=1.05-.3*st,h=[s*17,24],g=[h[0]+s*C(b)*22,h[1]+S(b)*22]
    c.globalAlpha=.85;B(c,[o,m,e],6.5,K[1],u=>S(u**.7*Math.PI)**.6+.15*(1-u))
    c.globalAlpha=.8;B(c,[o,m,e],6,K[0],u=>S(u**.7*Math.PI)**.6,4)
    c.globalAlpha=.8;B(c,[h,[(h[0]+g[0])/2+s*3,(h[1]+g[1])/2],g],5,K[1],u=>S(u**.8*Math.PI)**.6+.2*(1-u))
  })
  // tail, neck and head
  c.globalAlpha=.85;B(c,[[0,30],[1.5*st,40],[3*st,47]],2.6,K[1],u=>1-u)
  c.globalAlpha=.8;B(c,[[0,-27],[0,-37]],5,K[2],u=>1)
  c.filter='blur(1px)';c.globalAlpha=.9;blob(c,0,-44,7,9,0,3,.06);c.fillStyle=K[1];c.fill()
  c.filter='blur(.5px)';c.globalAlpha=1;c.fillStyle=K[0]
  ;[-1,1].forEach(s=>{c.beginPath();c.arc(s*5.2,-46,1.5,0,T);c.fill()})
  // shell: pale wash, then dark scutes with paper left between them
  blob(c,0,0,26,32,0,6,.04);W(c,K[3],.75,1.2,.9)
  c.filter='blur(1.3px)';c.fillStyle=K[0]
  ;[[0,-17,9,8],[0,0,10,8.5],[0,17,9,8],[-16,-12,6,9],[16,-12,6,9],[-18,5,5.5,8.5],[18,5,5.5,8.5],[-13,21,5.5,6.5],[13,21,5.5,6.5]].forEach(([x,y,a,b],k)=>{
    c.globalAlpha=.78+k%3*.07;blob(c,x,y,a,b,x*.02,k+20,.12,8);c.fill()
  })
  c.restore()
  seal(c,40,218,15);fix()
}
export const frames=14,delay=85
