// ink wash owl on a pine bough, blinking, puffing its throat and hooting small ink breath rings
const{PI,sin:S,cos:C,hypot:H,min,max,abs}=Math,T=PI*2,
// warm, semi-transparent ink at alpha a
ink=a=>`rgba(20,18,16,${a*.8})`,
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
// soften anything that runs off the canvas edge
fade=(c,w=18)=>{
  c.save();c.setTransform(1,0,0,1,0,0);c.filter='none';c.globalCompositeOperation='destination-out'
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
}
export const frames=24,delay=80,dither=true
export default(c,t)=>{
  c.globalCompositeOperation='multiply'
  const sg=(a,b)=>max(0,min(1,(t-a)/(b-a))),r=rn(17),
  ho=S(PI*sg(.1,.32))**2+S(PI*sg(.4,.62))**2,bl=S(PI*sg(.78,.92))**2,
  X=154,pu=1+.09*ho,hy=-3*ho
  // pine bough with needle fans
  c.filter='blur(.5px)'
  br(c,[[262,176],[214,190],[150,194],[92,200],[40,190]],13,.9,u=>1-u*.75,6,3)
  br(c,[[214,190],[236,214],[262,222]],7,.85,pt,3,5)
  ;[[52,186,-1.9],[84,196,-1.5],[70,202,1.9],[226,180,-1.2],[238,214,.6],[204,196,1.4],[36,192,2.9]].forEach(([x,y,a],k)=>{
    for(let j=0;j<11;j++){
      const b=a+(j-5)*.17,l=20+r()*10
      br(c,[[x,y],[x+C(b)*l,y+S(b)*l]],1.9,.45+r()*.4,pt)
    }
  })
  // tail below the bough, talons
  for(let k=0;k<4;k++)br(c,[[X-9+k*6,192],[X-11+k*5,222+k%2*4]],7,.75,pt,3,k+3)
  // body wash and dry-brush feathers
  c.filter='none'
  wa(c,el(X,142,38,50,0,10),.15,4)
  wa(c,el(X,94+hy,34,25),.17,3)
  c.filter='blur(.5px)'
  for(let j=0;j<6;j++)for(let k=0;k<5+j%2;k++){
    const u=(k-(4+j%2)/2)/3,x=X+u*26*pu*(1-j*.04),y=118+j*12+abs(u)*-6
    br(c,[[x,y],[x+u*3,y+7],[x+u*2,y+13]],8.5,.3+r()*.25,pf,3,j*7+k)
  }
  ;[-1,1].forEach(m=>{
    br(c,[[X+m*27*pu,112],[X+m*39*pu,146],[X+m*24,188]],15,.72,pf,5,m+4)
    br(c,[[X+m*22*pu,118],[X+m*31*pu,150],[X+m*18,184]],6,.85,pf,2,m+8)
    // talons
    for(let k=0;k<3;k++)br(c,[[X+m*11+(k-1)*5,189],[X+m*11+(k-1)*6,199]],3.6,.95,pt)
    // brow sweeping up into ear tuft, facial disc
    br(c,[[X+m*2,100+hy],[X+m*14,80+hy],[X+m*33,62+hy]],10,.9,pf,3,m+12)
    br(c,[[X+m*30,74+hy],[X+m*36,96+hy],[X+m*22,114+hy],[X+m*6,116+hy]],6,.5,pf,3,m+15)
    // eye: amber wash, dark ring, pupil, lid
    const ex=X+m*15,ey=97+hy,o=1-bl
    c.filter='none';wa(c,el(ex,ey,8.5,8.5*o+.5),'rgba(204,150,58,.55)',1)
    c.filter='blur(.4px)'
    br(c,[...el(ex,ey,9.5,9.5*o+.8,0,10),[ex+9.5,ey]],2.6,.9,u=>.6+.4*S(u*9))
    o>.3?br(c,[[ex-m,ey-3*o],[ex-m,ey+2*o]],7*o,.96):br(c,[[ex-9,ey],[ex,ey+2],[ex+9,ey]],3.5,.92)
  })
  br(c,[[X-4,102+hy],[X,112+hy+2*ho],[X+4,102+hy]],4.5,.95,u=>.5+.5*S(PI*u))
  // crown flecks
  for(let k=0;k<7;k++)br(c,[[X-18+k*6,76+hy+abs(k-3)*2],[X-17+k*6,82+hy+abs(k-3)*2]],3,.6,pt)
  // breath rings drifting up and away
  ;[[.16,0],[.46,1]].forEach(([s,k])=>{
    const u=sg(s,s+.42);if(!u||u==1)return
    const x=X-34-u*58,y=104-u*34-k*4,q=5+u*17
    br(c,[...el(x,y,q,q*.85,k,12),[x+q*C(k),y+q*S(k)]].slice(0,11),3.2,.75*S(PI*u)**.7,u=>.4+.6*S(PI*u),3,k+2)
  })
  c.filter='none'
  fade(c)
}
