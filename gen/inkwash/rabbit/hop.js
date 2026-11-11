// ink wash hare hopping through grass tufts under a pale full moon
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
export const frames=24,delay=75,dither=true
export default(c,t)=>{
  c.globalCompositeOperation='multiply'
  const G=214,u=t*2%1,cl=v=>max(0,min(1,v)),
  y=-30*S(PI*cl((u-.2)/.5)),st=S(PI*cl((u-.05)/.65)),pc=.26*S(T*(u+.05)),
  kf=K=>{
    let k=0;while(K[k+1][0]<=u)k++
    const a=K[k],b=K[k+1],f=(u-a[0])/(b[0]-a[0]),g=f*f*(3-2*f)
    return[a[1]+(b[1]-a[1])*g,a[2]+(b[2]-a[2])*g]
  },
  ik=(a,f,l,m,s)=>{
    const x=f[0]-a[0],y=f[1]-a[1],D=H(x,y),g=min(D,l+m-.5),v=(l*l-m*m+g*g)/2/g,h=s*Math.sqrt(max(0,l*l-v*v))
    return[a[0]+(x*v-y*h)/D,a[1]+(y*v+x*h)/D]
  },
  hf=kf([[0,10,22],[.2,36,22],[.45,48,8],[.7,22,17],[.9,4,22],[1,10,22]]),
  ff=kf([[0,-20,22],[.2,-31,15],[.45,-44,17],[.65,-27,23],[.85,-17,22],[1,-20,22]]),
  tuft=(x,y,n,l,a,s)=>{
    const r=rn(s)
    for(let k=0;k<n;k++){
      const b=(k-(n-1)/2)*.32+r()*.2,m=l*(.6+r()*.5)
      br(c,[[x+k*3-n,y],[x+k*3-n+S(b)*m*.5,y-m*.55],[x+k*3-n+S(b*2.3)*m*.8,y-m]],4,a*(.6+r()*.4),pt)
    }
  },
  hind=(o,a)=>{
    const h=[17+4*st+o,5],f=[hf[0]+o,hf[1]],k=ik(h,f,19,20,1),d=u>.25&&u<.7?.5:0
    br(c,[h,k],17,a*.62,u=>S(PI*(.12+.8*u))**.5);br(c,[k,f],6.5,a,u=>1-u*.35)
    br(c,[f,[f[0]-7,f[1]+2+d*3],[f[0]-16,f[1]+1+d*9]],6,a,pt)
  },
  fore=(o,a)=>br(c,[[-17-5*st+o,6],[(-17-5*st+ff[0])/2+o-3,(6+ff[1])/2],[ff[0]+o,ff[1]],[ff[0]+o-5,ff[1]+2]],6.5,a,u=>1-u*.5),
  ea=-1.9+1.45*cl(st*1.2)
  // moon: a clear disc cut from a halo of wash
  c.filter='blur(10px)';c.fillStyle=ink(.4);c.beginPath();c.arc(186,66,48,0,T);c.fill()
  c.globalCompositeOperation='destination-out';c.filter='blur(.9px)';c.fillStyle='#000'
  c.beginPath();c.arc(186,66,27,0,T);c.fill()
  c.globalCompositeOperation='multiply'
  // far grass
  c.filter='blur(.5px)'
  for(let j=-1;j<2;j++)tuft(j*192+t*192+120,208,5,24,.26,5),tuft(j*192+t*192+30,206,4,18,.22,9)
  // hare
  c.translate(130,G-29+y);c.rotate(pc);c.scale(1.25,1.25)
  hind(5,.4);fore(4,.4)
  ;[[-3,.5,.5],[0,0,.85]].forEach(([o,d,a])=>{
    const x=-27-7*st+o,q=ea+d*.25
    br(c,[[x,-14],[x+C(q)*14-S(q)*2,-14+S(q)*14],[x+C(q)*29,-14+S(q)*29]],8,a,u=>S(PI*u**.8)**.7)
  })
  c.filter='none'
  wa(c,el(0,0,27+8*st,16-3*st,-.06,10),.32,2.5)
  wa(c,el(17+4*st,1,15,14.5),.3,2.5)
  wa(c,el(-30-7*st,-7,11.5,9,-.2),.38,1.6)
  wa(c,el(33+8*st,-7,6,5.5),.16,1.5)
  c.filter='blur(.5px)'
  br(c,[[-20-5*st,-13],[2,-17+2*st],[24+5*st,-13],[33+7*st,-2]],5,.6,pf,3,4)
  br(c,[[-12,15-3*st],[4,17-3*st],[16,15-3*st]],3,.3)
  hind(0,.85);fore(0,.85)
  br(c,[[-33-7*st,-9.5],[-31.6-7*st,-8.6]],3,.96)
  br(c,[[-41.5-7*st,-5],[-40-7*st,-3.5]],2.6,.9)
  ;[-3,0,3].forEach(k=>br(c,[[-39-7*st,-3],[-50-7*st,-4+k]],.9,.5,u=>1))
  c.setTransform(1,0,0,1,0,0)
  for(let j=-1;j<2;j++)tuft(j*192+t*192+10,224,6,34,.85,3),tuft(j*192+t*192+96,225,5,26,.8,8),tuft(j*192+t*192+150,224,4,20,.7,14)
  c.filter='none'
  fade(c)
}
