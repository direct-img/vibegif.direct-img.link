// ink wash pair of swallows swooping in a figure eight through hanging willow strands on rice paper
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
const{PI,sin:S,cos:C,hypot:H,min,max,abs}=Math,T=PI*2,
// warm ink at alpha a
ink=(a,v=22)=>`rgba(${v},${v-3},${v-6},${a})`,
rn=s=>()=>(s=s*16807%2147483647)/2147483647,
// catmull-rom samples through p (z: closed)
cr=(p,z,n=8)=>{
  const L=p.length,o=[],g=k=>z?p[(k+L)%L]:p[k<0?0:k>=L?L-1:k]
  for(let k=0;k<L-!z;k++)for(let j=0;j<n;j++){
    const u=j/n,[a,b,d,e]=[-1,0,1,2].map(m=>g(k+m))
    o.push([0,1].map(q=>b[q]+.5*u*(d[q]-a[q]+u*(2*a[q]-5*b[q]+4*d[q]-e[q]+u*(3*b[q]-3*d[q]+e[q]-a[q])))))
  }
  z||o.push(p[L-1]);return o
},
// pressure profiles: press-and-lift, blunt start with tapering tail
pf=u=>S(PI*u**.55)**.6,pt=u=>min(1,u*9)*(1-u)**.7,
// brush stroke along p: width w, ink a (alpha or colour), pressure f, d dry hairlines, s seed
br=(c,p,w,a=.9,f=pf,d=0,s=5)=>{
  const q=cr(p),n=q.length-1,r=rn(s),
  N=q.map((_,k)=>{const a=q[max(k-1,0)],b=q[min(k+1,n)],x=b[0]-a[0],y=b[1]-a[1],l=H(x,y)||1;return[-y/l,x/l]}),
  sp=(lo,hi,i,j)=>{
    c.beginPath()
    for(let k=i;k<=j;k++){const h=f(k/n)*w/2*lo;c.lineTo(q[k][0]+N[k][0]*h,q[k][1]+N[k][1]*h)}
    for(let k=j;k>=i;k--){const h=f(k/n)*w/2*hi;c.lineTo(q[k][0]+N[k][0]*h,q[k][1]+N[k][1]*h)}
    c.fill()
  }
  c.fillStyle=a.big?a:ink(a)
  if(!d)return sp(-1,1,0,n)
  for(let j=0;j<d;j++){const lo=-1+2*j/d;sp(lo,lo+2/d*(.6+.55*r()),0,n*(.45+.55*r())|0)}
},
// wet wash: closed shape through p, ink a, blur b, darker pooled rim
wa=(c,p,a,b=3)=>{
  c.beginPath();cr(p,1).forEach(e=>c.lineTo(...e));c.closePath()
  c.filter=`blur(${b}px)`;c.fillStyle=c.strokeStyle=a.big?a:ink(a);c.fill()
  c.filter=`blur(${b/3}px)`;c.globalAlpha=.55;c.lineWidth=1.3;c.stroke()
  c.globalAlpha=1;c.filter='none'
},
// ellipse outline points
el=(x,y,rx,ry,ro=0,n=8)=>[...Array(n)].map((_,k)=>{
  const a=k/n*T,u=C(a)*rx,v=S(a)*ry
  return[x+u*C(ro)-v*S(ro),y+u*S(ro)+v*C(ro)]
}),
// vermilion seal with carved marks
seal=(c,x,y,z=15,s=9)=>{
  const r=rn(s),j=()=>r()*1.6-.8
  c.save();c.globalCompositeOperation='source-over';c.filter='blur(.4px)'
  c.fillStyle='rgba(184,50,42,.88)';c.beginPath()
  for(let k=0;k<28;k++){
    const f=k%7/7*z
    c.lineTo(...[[x+f+j(),y+j()],[x+z+j(),y+f+j()],[x+z-f+j(),y+z+j()],[x+j(),y+z-f+j()]][k/7|0])
  }
  c.fill();c.strokeStyle='#f3ecdc';c.lineWidth=z/9;c.lineCap='butt';c.beginPath()
  for(let k=0;k<6;k++){
    const g=x+z*(.24+(k%3)*.26),h=y+z*(.24+(r()*3|0)*.26),l=z*(.26+.26*(r()<.4))
    k%2?(c.moveTo(g,h-l/2),c.lineTo(g,h+l/2)):(c.moveTo(h-y+x-l/2,g-x+y),c.lineTo(h-y+x+l/2,g-x+y))
  }
  c.stroke();c.restore()
},
// restore the sheet's half-transparent deckle pixels so moving ink never alters them (keeps the webp small)
fix=(c,pd)=>{
  const m=c.getImageData(0,0,256,256),e=m.data
  for(let k=0;k<e.length;k+=4)if(pd[k+3]<255)for(let j=0;j<4;j++)e[k+j]=pd[k+j]
  c.putImageData(m,0,0)
}
export const frames=24,delay=80
export default(c,t)=>{
  paper(c)
  const pd=c.getImageData(0,0,256,256).data
  c.globalCompositeOperation='multiply'
  const r=rn(31),
  // willow strand from (x,0): one long tapered stroke of length l with sparse leaf flicks
  wl=([x,l,ph,a,bd])=>{
    const p=[...Array(6)].map((_,k)=>{const u=k/5;return[x+u*bd+u*u*(bd*.8+10*S(t*T+ph)+4*S(2*t*T+ph*2)),u*l-4]}),q=cr(p,0,5)
    br(c,p,3.4,a,u=>1-u*.8)
    for(let k=5;k<q.length;k+=3){
      const d=k%2?1:-1,g=q[k-1],[px,py]=q[k],an=Math.atan2(py-g[1],px-g[0])+d*(.35+r()*.3),ln=10+r()*7
      br(c,[[px,py],[px+C(an)*ln*.5+d,py+S(an)*ln*.5],[px+C(an)*ln,py+S(an)*ln]],3.8,a*(.75+r()*.25))
    }
  },
  // swallow at loop phase a
  sw=a=>{
    const x=130+76*S(a),y=146+36*S(2*a),h=Math.atan2(72*C(2*a),76*C(a)),z=1.15+.3*C(a-.6),
    f=.62+.38*S(a*5+1)
    c.save();c.translate(x,y);c.rotate(h);c.scale(z,z*.82)
    br(c,[[13,0],[2,0],[-13,0]],8.5,.93,u=>S(PI*u**.7)**.5)
    ;[-1,1].forEach(m=>{
      br(c,[[5,m*2],[0,m*13*f],[-9,m*23*f],[-21,m*29*f]],8,.9,u=>S(PI*u**.5)**.7)
      br(c,[[-10,m],[-20,m*4],[-32,m*8.5]],3.2,.9,pt)
    })
    br(c,[[11,0],[15,0]],3.4,'rgba(176,70,44,.8)')
    br(c,[[14,0],[19,0]],2,.9,pt)
    c.restore()
  }
  c.filter='blur(.5px)'
  ;[[72,118,1.4,.36,12],[112,146,2.5,.5,-10],[212,100,3.6,.34,12]].forEach(wl)
  sw(t*T);sw(t*T+PI)
  wl([34,184,0,.88,18])
  seal(c,212,212,15,6)
  fix(c,pd)
}
