// ink wash tiger prowling through grass, bold wet-stroke stripes over an ochre wash, tail swishing
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
},
// snap colour and alpha to coarser steps so the lossless webp stays small
snap=(c,q=12)=>{
  const m=c.getImageData(0,0,256,256),e=m.data
  for(let k=0;k<e.length;k++)e[k]=min(255,Math.round(e[k]/q)*q)
  c.putImageData(m,0,0)
}
export const frames=18,delay=105,dither=true
export default(c,t)=>{
  c.globalCompositeOperation='multiply'
  const G=210,oc=a=>`rgba(190,136,72,${a})`,sw=S(t*T),cw=C(t*T),
  ik=(a,b,l,m)=>{
    const x=b[0]-a[0],y=b[1]-a[1],D=H(x,y),d=min(D,l+m-.5),u=(l*l-m*m+d*d)/2/d,h=-Math.sqrt(max(0,l*l-u*u))
    return[a[0]+(x*u-y*h)/D,a[1]+(y*u+x*h)/D]
  },
  ft=(hx,o)=>{const u=(t*2+o)%1,v=(u-.65)/.35;return u<.65?[hx-21+42*u/.65,G]:[hx+21*C(PI*v),G-13*S(PI*v)]},
  bar=(p,q,f,w,a,v=4.6)=>{
    const x=p[0]+(q[0]-p[0])*f,y=p[1]+(q[1]-p[1])*f,D=H(q[0]-p[0],q[1]-p[1]),nx=(p[1]-q[1])/D*w,ny=(q[0]-p[0])/D*w
    br(c,[[x-nx,y-ny],[x+(q[0]-p[0])/D*2,y+(q[1]-p[1])/D*2],[x+nx,y+ny]],v,a)
  },
  leg=(h,hx,o,l,m,far)=>{
    const f=ft(hx,o),k=ik(h,f,l,m),a=far?.45:.92,r=rn(hx)
    c.filter='blur(2.5px)'
    br(c,[h,k],far?19:23,far?ink(.2):oc(.5),u=>1-u*.4);br(c,[k,f],far?11:13,far?ink(.2):oc(.5),u=>1-u*.25)
    c.filter='blur(.6px)'
    ;[.3,.55,.82].forEach(q=>bar(h,k,q+r()*.08,11-q*5+r()*2,a,3.5+r()*3.5));[.3,.62].forEach(q=>bar(k,f,q,5+r()*2,a,3+r()*2.5))
    c.filter='blur(1.2px)'
    br(c,[[f[0]+6,f[1]-3],[f[0]-3,f[1]-2],[f[0]-10,f[1]+1]],9,far?.4:.78,u=>S(PI*(.1+.8*u))**.5)
  },
  tuft=(x,y,n,l,a,s)=>{
    const r=rn(s)
    for(let k=0;k<n;k++){
      const b=(k-(n-1)/2)*.3+r()*.2,m=l*(.6+r()*.5)
      br(c,[[x+k*3-n,y],[x+k*3-n+S(b)*m*.5,y-m*.55],[x+k*3-n+S(b*2.3)*m*.8,y-m]],4,a*(.6+r()*.4),pt)
    }
  },
  grass=f=>{
    for(let j=-1;j<3;j++){
      const o=j*128+t*128
      f?(tuft(o+14,222,6,38,.85,3),tuft(o+84,224,5,30,.8,8)):tuft(o+50,205,5,24,.28,5)
    }
  },
  F=[100,142],B=[188,142],hy=0
  c.filter='blur(.5px)';grass(0)
  leg([F[0]-8,F[1]],88,.75,33,36,1);leg([B[0]-6,B[1]],190,.5,37,40,1)
  // tail: soft ochre stroke, dark rings of uneven weight, dark tip
  const tl=[[208,130],[224,140+3*sw],[234,124+5*cw],[228,100+7*sw],[214,90+6*cw]],tq=cr(tl,0,6),r=rn(41)
  c.filter='blur(2px)';br(c,tl,10,oc(.5),u=>1-u*.3)
  c.filter='blur(.6px)'
  for(let k=3;k<tq.length-1;k+=3)bar(tq[k],tq[k+1],0,5.5,.9,3+k%2*2.5)
  br(c,tq.slice(-5),8,.9,u=>.4+.6*S(PI*u))
  // body: graded ochre wash along the back, shoulder and haunch; the belly is left empty
  c.filter='blur(6px)';c.fillStyle=oc(.45);c.beginPath()
  cr([[86,112],[122,116],[162,117],[200,113],[213,130],[204,148],[170,141],[130,143],[98,148],[80,138]],1).forEach(e=>c.lineTo(...e));c.fill()
  c.filter='blur(4px)';c.fillStyle=oc(.3)
  ;[[100,138,16,19],[194,140,18,21],[142,120,50,7]].forEach(([x,y,a,b])=>{c.beginPath();c.ellipse(x,y,a,b,0,0,T);c.fill()})
  // dry-brush fur along the back and under the belly
  c.filter='blur(.6px)'
  br(c,[[86,109],[122,114],[160,115],[202,110]],6,.5,pf,4,3)
  br(c,[[102,164],[138,169],[178,165]],5,.26,pf,3,6)
  br(c,[[206,120],[215,138],[208,158]],5,.3,pf,3,8)
  // stripes: calligraphic strokes of uneven length and weight, some forked, some dry
  for(let k=0;k<12;k++){
    const x=102+k*9.2+r()*4,d=k<4?2.5*S(t*2*T+1.6):0,l=(k%2?13:27)+r()*17,w=5+r()*5.5,b=r()*8-4,y=112+abs(k-6)*.35
    br(c,[[x+2,y],[x-4+b*.4+d,y+l*.5],[x+b+d*1.5,y+l]],w,.93,pf,k%4==3?3:0,k)
    k%3==1&&br(c,[[x+5,y+2],[x+6+d,y+l*.4],[x+3+d,y+l*.7]],w*.55,.9,pt)
  }
  for(let k=0;k<4;k++)br(c,[[114+k*24+r()*6,165],[110+k*24,152-r()*6]],3+r()*3,.85,pt)
  leg(F,100,.25,33,36);leg(B,198,0,37,40)
  // head: heavy, low and watchful; ochre brow and cheeks, empty muzzle, ruff in dry brush
  c.translate(64,140);c.scale(1.5,1.5);c.translate(-62,-136)
  c.filter='blur(3px)';c.fillStyle=oc(.5);c.beginPath();c.ellipse(61,130,20,13,-.1,0,T);c.fill()
  c.fillStyle=oc(.3);c.beginPath();c.ellipse(60,140,21,15,-.1,0,T);c.fill()
  c.filter='blur(.5px)'
  ;[[41,138,34,150],[42,146,38,157],[48,152,47,161],[78,138,86,148],[77,146,84,157],[72,152,75,162]].forEach(([a,b,d,e],k)=>
    br(c,[[a,b],[(a+d)/2,(b+e)/2-1],[d,e]],6,.6,pf,3,k+2))
  ;[[49,117,-.5],[74,114,.3]].forEach(([x,y,a])=>br(c,[[x-5,y+6],[x+S(a)*3,y-5],[x+6,y+5]],7,.92,u=>.5+.5*S(PI*u)))
  ;[-2,-1,0,1,2].forEach(k=>br(c,[[61+k*5,118+abs(k)*1.5],[60+k*3.6,128-abs(k)*2.2]],4.6-abs(k)*.7,.93,pt))
  br(c,[[42,128],[48,126],[54,129]],2.6,.9,pf);br(c,[[61,127],[67,124],[73,126]],2.6,.9,pf)
  br(c,[[45,131.5],[51,133.5]],4.6,.96);br(c,[[63,131],[70,130]],4.6,.96)
  br(c,[[52,134],[52,141]],2,.4,u=>1)
  br(c,[[46,142.5],[52,146.5],[58,142]],6,.94,u=>.5+.5*S(PI*u))
  br(c,[[52,147],[51,152],[44,154]],2.6,.88,u=>1-u*.5);br(c,[[52,151],[59,154]],2.6,.88,u=>1-u*.5)
  br(c,[[48,156],[53,159],[58,156]],3,.6,pf)
  ;[[77,131,82,139],[79,140,76,148],[38,133,35,141]].forEach(([a,b,d,e])=>br(c,[[a,b],[d,e]],4.5,.9,pt))
  ;[-1,1].forEach(m=>[0,1,2].forEach(k=>br(c,[[52+m*7,149],[52+m*20,146+k*4.5]],1,.6,u=>1-u*.6)))
  c.setTransform(1,0,0,1,0,0);grass(1)
  fade(c);snap(c)
}
