// ink wash monkey hanging from a branch on rice paper, reaching down for the moon's reflection; ripples break it apart and it reforms
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
export const frames=30,delay=85
export default(c,t)=>{
  paper(c)
  const pd=c.getImageData(0,0,256,256).data
  c.globalCompositeOperation='multiply'
  const sg=(a,b)=>max(0,min(1,(t-a)/(b-a))),r=S(PI*sg(0,.56))**2,e=sg(.28,1),
  A=min(1,e*7)*(1-e)**1.7,th=-.17*r+.045*S(t*T+1),
  Hh=[174,58],d=70+7*r,B=[Hh[0]+S(th)*d,Hh[1]+C(th)*d],
  W=([x,y])=>[B[0]+x*C(th)+y*S(th),B[1]-x*S(th)+y*C(th)],
  b=(p,...a)=>br(c,p.map(W),...a),
  ik=(a,f,l,m,s)=>{
    const x=f[0]-a[0],y=f[1]-a[1],D=H(x,y),g=min(D,l+m-.5),u=(l*l-m*m+g*g)/2/g,h=s*Math.sqrt(max(0,l*l-u*u))
    return[a[0]+(x*u-y*h)/D,a[1]+(y*u+x*h)/D]
  },
  disc=(x,y,R,sy,A)=>{
    c.globalCompositeOperation='source-over';c.filter='blur(.9px)';c.fillStyle='#f6f0e2'
    for(let k=-R+1;k<R;k+=2){
      const hw=Math.sqrt(R*R-k*k),dx=A*13*S(k*.8+t*T*3)
      c.fillRect(x+dx-hw*(1-A*.25),y+k*sy*(1+A*.5),2*hw*(1-A*.25),2*sy*(1-A*.3)+.4)
    }
    c.globalCompositeOperation='multiply'
  }
  // moon: bare paper inside a soft halo of wash
  c.filter='blur(9px)';c.fillStyle=ink(.2);c.beginPath();c.arc(52,52,30,0,T);c.fill()
  disc(52,52,15,1,0)
  // water: halo, broken reflection, ripple rings from the touch
  c.filter='blur(8px)';c.fillStyle=ink(.2);c.beginPath();c.ellipse(104,214,62,17,0,0,T);c.fill()
  disc(102,214,15,.62,A)
  c.filter='blur(.6px)'
  ;[[30,206,60],[150,222,70],[176,204,50]].forEach(([x,y,l],k)=>br(c,[[x,y],[x+l/2,y+1.5],[x+l,y]],2.6,.22,pf))
  for(let k=0;k<3;k++){
    const u=e-k*.13;if(u<=0||!e)continue
    const q=5+u*62,a=.55*(1-u)**1.5*min(1,u*10)
    br(c,[...el(110,207,q,q*.3,0,12).slice(0,7)],2.6,a,u=>.3+.7*S(PI*u));br(c,[...el(110,207,q,q*.3,0,12).slice(6),[110+q,207]],2.2,a*.8,u=>.3+.7*S(PI*u))
  }
  // branch, twigs, a few leaves
  br(c,[[264,36],[226,52],[176,56],[130,48],[98,58]],13,.9,u=>1-u*.75,6,3)
  ;[[232,50,236,24],[146,50,128,30],[204,54,212,74]].forEach(([x,y,p,q],k)=>{
    br(c,[[x,y],[(x+p)/2+3,(y+q)/2],[p,q]],4.5,.85,pt)
    ;[-1,1].forEach(m=>br(c,[[p,q],[p+m*9,q-4+k],[p+m*18,q-6+k*3]],6,.72,pf))
  })
  br(c,[[100,57],[90,61],[78,62]],6,.72,pf);br(c,[[100,57],[92,50],[82,46]],6,.72,pf)
  // legs
  const s1=W([8,-21]),s2=W([-10,-16]),hd=[132-22*r,168+37*r],f1=[-16+2*S(t*T),44],f2=[4+4*S(t*T+1.2),62]
  b([[-4,18],[-24,24],f1],8,.82,u=>1-u*.5);b([f1,[f1[0]-8,f1[1]+3]],5,.85,pt)
  b([[6,20],[11,42],f2],8,.82,u=>1-u*.5);b([f2,[f2[0]-8,f2[1]+4]],5,.85,pt)
  // hanging arm
  const e1=ik(Hh,s1,35,35,-1)
  br(c,[s1,e1,Hh],9,.86,u=>1-u*.45)
  br(c,[[Hh[0]-5,Hh[1]+2],[Hh[0],Hh[1]-5],[Hh[0]+6,Hh[1]]],5,.9)
  // furry body and head
  c.filter='none';wa(c,el(0,0,16,25,-.1).map(W),.5,2.5);wa(c,el(-4,-33,13.5,12.5).map(W),.62,2)
  c.filter='blur(.6px)'
  ;[[-12,-16,-19,6,-15,26],[-3,-18,-7,6,-4,30],[6,-18,6,6,5,29],[13,-14,18,6,13,25],[-8,2,-13,18,-8,32],[4,2,10,18,8,33]].forEach(([x,y,p,q,v,w],k)=>
    b([[x,y],[p,q],[v,w]],9,.6,pf,4,k+2))
  ;[[-12,-44,-20,-34,-16,-22],[-4,-47,6,-44,10,-32],[-2,-46,-12,-46,-17,-38],[8,-36,8,-26,2,-20]].forEach(([x,y,p,q,v,w],k)=>
    b([[x,y],[p,q],[v,w]],6,.8,pf,3,k))
  // reaching arm, fingers
  const e2=ik(s2,hd,45,45,1)
  br(c,[s2,e2,hd],9,.88,u=>1-u*.5)
  ;[-.5,0,.5].forEach(a=>br(c,[hd,[hd[0]-4+a*5,hd[1]+6-abs(a)*2]],2.6,.9,pt))
  // pale face
  const fc=W([-8,-30])
  c.globalCompositeOperation='source-over';c.filter='blur(.7px)';c.fillStyle='#efe6d2'
  c.beginPath();c.ellipse(fc[0],fc[1],7,7.6,0,0,T);c.fill()
  c.globalCompositeOperation='multiply';c.filter='blur(.4px)'
  b([[-11.5,-32.5],[-10.8,-32]],2.3,.95);b([[-5.5,-33],[-4.8,-32.5]],2.3,.95)
  b([[-10,-27.5],[-8.5,-26.5],[-7,-27.5]],1.8,.85,u=>1)
  c.filter='none';seal(c,212,208,15,47)
  fix(c,pd)
}
