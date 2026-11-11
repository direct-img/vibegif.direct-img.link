// ink wash dragon weaving through clouds, body appearing and vanishing in wet mist, claws and whiskers, chasing a pale vermilion pearl
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
export const frames=18,delay=100,dither=true
export default(c,t)=>{
  c.globalCompositeOperation='multiply'
  const wv=k=>S(t*T+k),
  q0=cr([[90,94],[116,108],[152,98],[178,68],[212,76],[216,116],[178,136],[132,138],[98,160],[104,196],[146,214],[190,200],[214,178],[234,168]],0,9),
  n=q0.length-1,nr=q=>q.map((_,k)=>{
    const a=q[max(k-1,0)],b=q[min(k+1,n)],x=b[0]-a[0],y=b[1]-a[1],l=H(x,y)
    return[-y/l,x/l]
  }),N0=nr(q0),
  // travelling wave down the body makes it swim in place
  q=q0.map(([x,y],k)=>{const a=5*max(0,k/n-.62)/.38*S(t*T-k*.16);return[x+N0[k][0]*a,y+N0[k][1]*a]}),
  N=nr(q),w=k=>(3+15*(1-k/n)**.8)*min(1,.72+k/40),
  at=(k,o)=>[q[k][0]+N[k][0]*w(k)/2*o,q[k][1]+N[k][1]*w(k)/2*o]
  // body: wet wash, dark dorsal line with fins, belly bands, scale flecks
  c.filter='blur(1px)';c.fillStyle=ink(.42);c.beginPath()
  for(let k=0;k<=n;k++)c.lineTo(...at(k,1))
  for(let k=n;k>=0;k--)c.lineTo(...at(k,-1))
  c.fill()
  c.filter='blur(.5px)'
  br(c,[...Array(n/3|0)].map((_,k)=>at(k*3,-.75)),5.5,.88,u=>1-u*.7,2,3)
  br(c,[...Array(n/3|0)].map((_,k)=>at(k*3,.95)),2.2,.6,u=>1-u*.6)
  for(let k=5;k<n-4;k+=3){
    const a=at(k,-1),b=at(k+2,-2.1+.5*(k%2))
    br(c,[a,[(a[0]+b[0])/2,(a[1]+b[1])/2],at(k+3,-1)].slice(0,2).concat([b]),4.2,.85,pt)
    br(c,[at(k,.95),at(k+1,.35)],2,.55,u=>1)
    k%2&&[-.35,.1].forEach(o=>br(c,[at(k,o-.22),at(k+1,o),at(k,o+.22)],1.7,.6,u=>1))
  }
  // tail tuft
  for(let k=-2;k<3;k++)br(c,[q[n-2],[q[n][0]+8,q[n][1]+k*4+2*wv(k)]],4,.8,pt)
  // clawed legs reaching out of the mist
  ;[[26,1,-6,22],[70,1,-14,16]].forEach(([k,o,dx,dy],j)=>{
    const a=at(k,o*.5),p=[a[0]+dx+2*wv(j),a[1]+dy+2*wv(j+2)]
    br(c,[a,[(a[0]+p[0])/2-5,(a[1]+p[1])/2],p],9,.8,u=>1-u*.5)
    for(let m=0;m<4;m++){
      const g=.5+m*.62+j*.5+.12*wv(j+m)
      br(c,[p,[p[0]+C(g)*8,p[1]+S(g)*8],[p[0]+C(g+.7)*13,p[1]+S(g+.7)*13]],3.6,.95,pt)
    }
  })
  // mist: soft cut-outs swallowing stretches of the body, edged with soft cloud curls
  const M=[[216,98,23,24],[112,150,27,19],[152,210,30,15],[52,150,30,12],[190,38,30,11]]
  c.globalCompositeOperation='destination-out';c.filter='blur(6px)';c.fillStyle='#000'
  M.forEach(([x,y,a,b],k)=>{c.beginPath();c.ellipse(x+(k<3)*12*wv(k*2),y,a,b,0,0,T);c.fill();c.fill()})
  c.globalCompositeOperation='multiply'
  M.forEach(([x,y,a,b],k)=>{
    const X=x+(k<3)*12*wv(k*2)
    c.filter='blur(4px)';c.fillStyle=ink(.09);c.beginPath();c.ellipse(X,y+b*.5,a*1.1,b*.6,0,0,T);c.fill()
    c.filter='blur(.7px)'
    br(c,[[X-a,y+b*.6],[X-a*.5,y-b*.2],[X-a*.1,y+b*.3],[X-a*.3,y+b*.55]],3.4,.36,pf)
    br(c,[[X-a*.2,y+b*.8],[X+a*.3,y-b*.1],[X+a*.8,y+b*.2],[X+a*.6,y+b*.7],[X+a*.35,y+b*.45]],3.8,.4,pf)
  })
  // pearl: the one colour accent
  c.filter='none';wa(c,el(40+wv(1),58+2*wv(0),7,7),'rgba(196,74,50,.5)',1.2)
  c.filter='blur(.6px)'
  ;[0,1,2].forEach(k=>br(c,[[44,52+2*wv(0)],[50+k*3,44-k*2+2*wv(k)],[52+k*5,34+k*3+3*wv(k+1)]],3,'rgba(196,74,50,.45)',pt))
  // head
  c.translate(...q[0]);c.rotate(Math.atan2(q[3][1]-q[0][1],q[3][0]-q[0][0]));c.scale(1.25,1.25)
  const j=3+2.5*wv(2)
  for(let k=0;k<7;k++){const y=(k-3)*3.4;br(c,[[2,y],[20,y*1.9+3*wv(k)],[36+k%2*6,y*2.6+5*wv(k+1)]],5.5,.8,u=>.9-u*.6,3,k+4)}
  c.filter='none';wa(c,el(-9,-1,15,10.5),.5,1.5)
  c.filter='blur(.5px)'
  br(c,[[-4,-3],[-22,-7],[-37,-3],[-41,2]],13,.88,u=>.55+.45*S(PI*u**.8))
  br(c,[[-36,-8],[-40,-6]],5,.95)
  br(c,[[-6,6],[-20,8+j],[-33,6+j*1.6]],6.5,.82,u=>1-u*.5)
  for(let k=0;k<4;k++)br(c,[[-10-k*5,9+j*.5],[-8-k*5,17+j+k]],2.6,.7,pt)
  br(c,[[-25,-11],[-17,-15],[-8,-11]],4.5,.95)
  ;[[[-3,-8],[9,-22],[24,-27]],[[9,-21],[10,-32]],[[-9,-9],[2,-27],[13,-36]],[[0,-24],[-6,-33]]].forEach(p=>br(c,p,5,.92,pt))
  ;[-1,1].forEach(m=>br(c,[[-37,m*2-2],[-50,m*11+2*wv(m)],[-62,m*8+4*wv(m+1)],[-66,m*-2+5*wv(m+2)]],2.4,.85,u=>1-u*.7))
  c.globalCompositeOperation='destination-out';c.fillStyle='#000';c.beginPath();c.arc(-17,-8.5,2.6,0,T);c.fill()
  c.globalCompositeOperation='source-over'
  br(c,[[-18,-9],[-17,-8]],2.4,.97)
  c.setTransform(1,0,0,1,0,0);c.filter='none'
  fade(c)
}
