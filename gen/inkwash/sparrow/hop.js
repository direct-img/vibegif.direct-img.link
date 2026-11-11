// ink wash sparrow hopping along a bare branch on rice paper, pecking and flicking its tail
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
export const frames=36,delay=70
export default(c,t)=>{
  paper(c)
  const pd=c.getImageData(0,0,256,256).data
  c.globalCompositeOperation='multiply'
  const sg=(a,b)=>max(0,min(1,(t-a)/(b-a))),by=x=>190-x*.14+5*S(x/55),
  h=[sg(.02,.11),sg(.19,.28),sg(.52,.61),sg(.69,.78)],
  x=92+30*(h[0]+h[1]-h[2]-h[3]),ar=h.reduce((a,v)=>a+S(PI*v),0),
  pk=[sg(.33,.4),sg(.41,.48),sg(.83,.9),sg(.91,.98)].reduce((a,v)=>a+S(PI*v)**2,0),
  fc=t<.5?1:-1,fl=S(t*T*5)*.12+ar*.5+pk*.3
  // branch: dry-brush limb, twigs, buds
  c.filter='blur(.5px)'
  br(c,[...Array(9)].map((_,k)=>[k*36-14,by(k*36-14)+(k>6)*(k-6)*-9]),13,.88,u=>.55+.45*(1-u)**1.5,6,4)
  ;[[58,-.5,34],[196,.25,62],[214,-.9,26],[128,2.6,24],[30,.4,22]].forEach(([bx,a,l],k)=>{
    const o=[bx,by(bx)-2],e=[bx+S(a)*l,o[1]-C(a)*l]
    br(c,[o,[(o[0]+e[0])/2+4,(o[1]+e[1])/2],e],5,.8,pt,k==1?3:0,k)
    br(c,[[e[0]-2,e[1]+2],[e[0]+1,e[1]-1]],3.5,.9)
    k==1&&(br(c,[[bx+9,o[1]-34],[bx+28,o[1]-50]],3.5,.75,pt),br(c,[[bx+7,o[1]-22],[bx-8,o[1]-36]],3,.7,pt))
  })
  ;[[80,0],[150,-3],[236,-16]].forEach(([bx,d])=>br(c,[[bx,by(bx)-5+d],[bx+3,by(bx)-8+d]],4,.85))
  // sparrow, drawn facing right with its feet at the origin
  c.translate(x,by(x)-4-17*ar);c.scale(fc*1.65,1.65);c.rotate(pk*.7-ar*.12)
  c.filter='blur(.4px)'
  br(c,[[-10,-13],[-22,-17-fl*10],[-33,-20-fl*24]],8,.85,u=>.5+.5*S(PI*u),3,3)
  ar<.3&&[-3,4].forEach(q=>br(c,[[q,-6],[q+1,0],[q+4,1]],1.8,.85,u=>1))
  c.filter='none'
  wa(c,el(0,-17,17,13.5,-.25),.26,2)
  wa(c,el(12,-29,9.5,8.5),.3,1.5)
  c.filter='blur(.4px)'
  // wing, cap, cheek, bib, eye, beak
  br(c,[[5,-25],[-6,-20-ar*5],[-19,-11-ar*12]],12,.72,pf,0)
  br(c,[[2,-20],[-8,-15-ar*5],[-20,-9-ar*12]],7,.9,pf,3,8)
  br(c,[[-2,-26],[-9,-21-ar*4]],3,.9)
  br(c,[[4,-34],[11,-39],[20,-35]],6.5,.85)
  br(c,[[13,-28],[16,-26]],4,.85);br(c,[[19,-25],[17,-21]],4.5,.85)
  br(c,[[16.5,-32],[17.5,-31.6]],2.2,.97)
  br(c,[[20,-31],[28,-28.5]],4.5,.92,pt)
  br(c,[[-6,-7],[4,-5],[12,-10]],3,.3)
  c.setTransform(1,0,0,1,0,0);seal(c,206,34,15,4)
  fix(c,pd)
}
