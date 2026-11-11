// ink wash panda sitting and nibbling a bamboo stalk on rice paper, jaw chewing and leaves shaking
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
  const ch=S(t*T*3),j=2.6+2.6*ch,th=PI+.62+.035*ch,hy=.8*ch,
  ear=max(0,S(t*T*2-2))**8*3,
  P=d=>[124+C(th)*d,123+hy+S(th)*d],
  // wet ink mass: wide pale bloom, loaded body, darker pooled core
  wet=(p,k=1)=>{
    const q=cr(p,1),f=(b,a,z)=>{
      const m=q.reduce((s,e)=>[s[0]+e[0]/q.length,s[1]+e[1]/q.length],[0,0])
      c.filter=`blur(${b}px)`;c.fillStyle=ink(a);c.beginPath()
      q.forEach(e=>c.lineTo(m[0]+(e[0]-m[0])*z,m[1]+(e[1]-m[1])*z));c.fill()
    }
    f(4*k,.2,1.18);f(1.3*k,.74,1);f(1.2*k,.5,.6)
  },
  // loaded stroke: the same three layers along a brush path
  load=(p,w,f,s)=>{
    c.filter='blur(4px)';br(c,p,w+8,.2,f)
    c.filter='blur(1.3px)';br(c,p,w,.74,f)
    c.filter='blur(1.2px)';br(c,p,w*.55,.5,f)
    c.filter='blur(.6px)';br(c,p,w+4,.3,u=>f(u)*(u>.5),7,s)
  }
  // faint shadow wash under and behind; the white fur is bare paper
  c.filter='blur(7px)';c.fillStyle=ink(.13)
  c.beginPath();c.ellipse(150,226,72,7,0,0,T);c.fill()
  c.beginPath();c.ellipse(176,186,24,30,.3,0,T);c.fill()
  // a few broken pale strokes hint at the back, rump and belly
  c.filter='blur(.8px)'
  br(c,[[198,146],[210,178],[198,208]],10,.36,pf,4,2)
  br(c,[[120,224],[146,229],[170,225]],8,.3,pf,3,5)
  br(c,[[92,168],[89,186],[93,198]],7,.28,pf,3,7)
  // hind paws
  wet(el(102,212,20,14,-.3));wet(el(192,210,20,14,.35))
  // right arm sweeping across the belly
  load([[190,130],[192,160],[162,174],[142,170]],30,u=>S(PI*(.1+.82*u))**.5,3)
  // bamboo stalk in jointed strokes, nodes, shaking leaves
  c.filter='blur(.5px)'
  for(let k=0;k<4;k++){
    br(c,[P(k*25+1),P(k*25+24)],6.5-k*.9,.5,u=>.72+.28*abs(1-2*u)**2)
    br(c,[[P(k*25+25)[0]-3,P(k*25+25)[1]+3],[P(k*25+25)[0]+3,P(k*25+25)[1]-3]],2.4,.85,u=>1)
  }
  ;[[50,-1,24],[50,1,20],[75,-1,28],[75,1,26],[75,-.4,20],[100,-.7,30],[100,.1,32],[100,.9,26],[100,1.5,18]].forEach(([d,a,l],k)=>{
    const o=P(d),g=th+a*.75+.13*S(t*T*3-k*.9-d/40)
    br(c,[o,[o[0]+C(g)*l*.5+S(g)*2,o[1]+S(g)*l*.5-C(g)*2],[o[0]+C(g)*l,o[1]+S(g)*l]],8,.78+k%3*.07,u=>S(PI*u**.6)**.8)
  })
  // left arm raised to hold the stalk
  load([[110,160],[93,138],[P(27)[0]+2,P(27)[1]+3]],29,u=>S(PI*(.1+.8*u))**.5,6)
  // head: bare paper, two broken contour strokes, wet ears and eye patches
  c.translate(0,hy)
  c.filter='blur(.8px)'
  br(c,[[100,92],[98,108],[108,122]],6,.26,pf,3,8)
  br(c,[[150,60],[170,68],[181,88]],9,.32,pf,4,3)
  br(c,[[182,100],[178,118],[164,129]],7,.3,pf,3,4)
  br(c,[[118,128],[138,135+j*.8],[158,129]],6,.34,pf,3,9)
  wet(el(107,68-ear*.3,13.5,13));wet(el(176,68-ear,13.5,13))
  wet(el(121,97,8,11.5,.55),.6);wet(el(156,96,8,11.5,-.55),.6)
  wet(el(138,112,6,4),.4)
  c.filter='blur(.5px)'
  br(c,[[138,115],[138,119]],2,.85,u=>1)
  br(c,[[129,120],[138,122+j],[147,120]],2.6,.88,u=>.6+.4*S(PI*u))
  c.globalCompositeOperation='source-over';c.fillStyle='#f3ecdc'
  ;[[122,94],[155,93]].forEach(([x,y])=>{c.beginPath();c.arc(x,y,1.7,0,T);c.fill()})
  c.setTransform(1,0,0,1,0,0);c.filter='none';seal(c,28,208,15,41)
  fix(c,pd)
}
