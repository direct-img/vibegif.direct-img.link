// splashed ink wash horse at full gallop on rice paper, mane and tail flying in dry brush, legs cycling
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
export const frames=14,delay=62
export default(c,t)=>{
  paper(c)
  const pd=c.getImageData(0,0,256,256).data
  c.globalCompositeOperation='multiply'
  const G=214,ro=-.075*S(t*T+.5),by=-6*C(T*(t-.92))-4,cs=C(ro),sn=S(ro),
  W=([x,y])=>[128+(x-128)*cs-(y-118)*sn,130+by+(x-128)*sn+(y-118)*cs],
  b=(p,...a)=>br(c,p.map(W),...a),
  ik=(a,f,l,m,s)=>{
    const x=f[0]-a[0],y=f[1]-a[1],D=H(x,y),d=min(D,l+m-.5),u=(l*l-m*m+d*d)/2/d,h=s*Math.sqrt(max(0,l*l-u*u))
    return[a[0]+(x*u-y*h)/D,a[1]+(y*u+x*h)/D]
  },
  ft=(hx,o)=>{
    const u=(t+o)%1,v=(u-.3)/.7
    return u<.3?[hx+30-64*u/.3,G]:[hx-34+64*(.5-.5*C(PI*v))-10*S(T*v),G-40*S(PI*v)**.8]
  },
  leg=(hp,hx,o,l,m,s,a)=>{
    const h=W(hp),f=ft(hx,o),k=ik(h,f,l,m,s),d=Math.atan2(f[1]-k[1],f[0]-k[0])
    br(c,[h,[(h[0]+k[0])/2-s*3,(h[1]+k[1])/2],k],16,a,u=>1-u*.62);br(c,[k,[(k[0]+f[0])/2+s*2,(k[1]+f[1])/2],f],5.5,a,u=>.95-u*.3)
    br(c,[[k[0]-1,k[1]-1],[k[0]+1,k[1]+1]],6.5,a)
    br(c,[[f[0]-C(d)*2,f[1]-S(d)*2],[f[0]+C(d)*5+2,f[1]+S(d)*5]],7.5,a,u=>.7+.3*u)
  },
  wv=k=>S(t*T+k*1.3)
  // dust kicked up behind, fading as it trails off
  c.filter='blur(5px)'
  ;[0,.33,.66].forEach((s,k)=>{
    const a=(t+s)%1
    c.fillStyle=ink(.2*S(PI*a)**.6*(1-a));c.beginPath();c.ellipse(150-a*130,G+4-a*10,8+a*22,4+a*9,0,0,T);c.fill()
  })
  c.filter='blur(.6px)'
  // far legs
  leg([158,130],168,.52,36,40,-1,.42);leg([94,126],96,.1,40,42,1,.42)
  // tail streaming in dry brush
  for(let k=0;k<6;k++)b([[78,98],[52,92+k*3+5*wv(k)],[22+k*3,84+k*7+9*wv(k+1)]],9,.82,u=>.9-u*.5,3,k+2)
  // barrel: wet wash with pooled dark at quarters and chest, belly left pale
  c.filter='none'
  wa(c,[[152,91],[120,98],[90,90],[72,108],[84,132],[122,141],[156,140],[174,118]].map(W),.38,3)
  wa(c,el(92,113,20,23,.2).map(W),.55,4)
  wa(c,el(160,116,15,23,-.2).map(W),.5,4)
  c.filter='blur(.6px)'
  b([[76,104],[96,91],[124,99],[152,90]],8,.9,pf,3,4)
  b([[73,106],[76,126],[92,138]],9,.85)
  b([[150,142],[168,134],[176,116]],8,.8)
  // neck and head
  c.filter='none';wa(c,[[148,94],[172,70],[196,54],[203,66],[188,92],[176,120],[154,122]].map(W),.78,1.5);c.filter='blur(.6px)'
  b([[150,92],[172,72],[196,56]],7,.92,pf,3,6)
  b([[195,60],[208,72],[223,89]],15,.9,u=>.75+.25*S(PI*u)-u*.3)
  b([[201,78],[210,88],[219,92]],6,.8)
  b([[192,60],[196,46]],5,.92,pt);b([[198,62],[203,49]],5,.92,pt)
  b([[218,84],[221,87]],3,.97);b([[203,68],[205,70]],3.4,.97)
  // mane flying back
  for(let k=0;k<8;k++){
    const f=k/7,x=154+f*42,y=92-f*36
    b([[x,y],[x-18,y-9+4*wv(k)],[x-38-(k%3)*6,y-8+k%2*7+8*wv(k+2)]],9,.86,u=>.95-u*.6,3,k+11)
  }
  b([[199,56],[190,50+3*wv(1)],[180,52+5*wv(2)]],6,.85,pt,2,3)
  // near legs
  leg([162,130],172,.42,36,40,-1,.92);leg([90,126],92,0,40,42,1,.92)
  c.filter='none';seal(c,26,28,15,29)
  fix(c,pd)
}
