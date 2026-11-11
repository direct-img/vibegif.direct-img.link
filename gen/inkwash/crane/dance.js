// ink wash red-crowned crane dancing, lifting its wings and stepping, vermilion crown dab
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
})
export const frames=24,delay=80,dither=true
export default(c,t)=>{
  c.globalCompositeOperation='multiply'
  const L=.08+.92*(1-C(t*T))/2,ri=7*L,sw=S(t*T),
  sh=[126,122-ri],hd=[98-6*L,70-ri-14*L],
  wing=(th,m,a)=>{
    const ln=30+30*L
    for(let k=0;k<9;k++){
      const f=.15+k/8*.85,o=[sh[0]+C(th)*ln*f,sh[1]+S(th)*ln*f],
      d=th+m*(1.87-1.15*f)*(.1+.9*L),l=(18+26*f)*(.7+.3*L),g=d+m*.35
      br(c,[o,[o[0]+C(g)*l*.5,o[1]+S(g)*l*.5],[o[0]+C(d)*l,o[1]+S(d)*l]],6+3*f,(f<.55?.9:.34)*a,pf,f<.55?0:3,k+2)
    }
    br(c,[sh,[sh[0]+C(th)*ln,sh[1]+S(th)*ln]],5,.45*a)
  },
  leg=(hx,fx,fy,kb)=>{
    const h=[hx,146-ri],k=[(hx+fx)/2+kb,(146-ri+fy)/2+4]
    br(c,[h,k],4,.85,pt);br(c,[k,[fx,fy]],3.2,.85,pt)
    br(c,[[fx+2,fy-1],[fx-12,fy+2]],2.6,.8,pt);br(c,[[fx,fy-1],[fx+7,fy+2]],2.2,.8,pt)
  }
  // ground wash and reeds
  wa(c,el(140,222,70,5,0),.1,4)
  c.filter='blur(.5px)'
  ;[[44,224,-.25,46],[52,224,.1,60],[60,224,.4,38],[214,224,.3,30],[207,224,-.2,40]].forEach(([x,y,a,l],k)=>{
    const b=a+sw*.06
    br(c,[[x,y],[x+S(b)*l*.5,y-l*.55],[x+S(b*2.2)*l*.7,y-l]],3.5,.3+.1*(k%2),pt)
  })
  // far wing
  c.translate(140,224);c.scale(1.12,1.12);c.translate(-146,-224)
  wing(-.5-1.55*L,-1,.55)
  // legs
  leg(146,152-10*sw,217-22*L,5+4*L);leg(137,134,217,-3)
  // body: white bird, a pale wash and a shadowed belly stroke
  c.filter='none'
  wa(c,el(140,130-ri,31,16,-.2),.1,3)
  c.filter='blur(.6px)'
  br(c,[[112,128-ri],[130,146-ri],[158,142-ri],[172,128-ri]],7,.3)
  br(c,[[118,112-ri],[140,112-ri],[162,120-ri]],3,.25)
  // black tail bustle
  for(let k=0;k<5;k++)br(c,[[160,124-ri+k*2],[176+k,130-ri+k*4],[182-k*3,146-ri+k*5+sw*2]],7,.85,pf,2,k+9)
  // neck
  br(c,[[118,124-ri],[104,106-ri],[108,88-ri-6*L],[hd[0]+3,hd[1]+7]],9,.9,u=>.45+.55*S(PI*u)**.5)
  // near wing
  wing(.25-1.3*L,1,1)
  // head, beak, crown
  c.filter='none';wa(c,el(hd[0],hd[1],5.5,4.5,-.3),.22,1.2)
  c.filter='blur(.5px)'
  const ba=PI+.15-.5*L
  br(c,[[hd[0]-3,hd[1]],[hd[0]-3+C(ba)*21,hd[1]+S(ba)*21]],4,.75,pt)
  br(c,[[hd[0]-1,hd[1]-1],[hd[0]+.5,hd[1]-.5]],2.4,.95)
  c.filter='blur(.8px)'
  br(c,[[hd[0]-3,hd[1]-5],[hd[0]+4,hd[1]-5.5]],5.5,'rgba(196,58,40,.85)')
  c.setTransform(1,0,0,1,0,0)
}
