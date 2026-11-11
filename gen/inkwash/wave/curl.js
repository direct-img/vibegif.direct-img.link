// ink wash sea wave, a few big dark brushstrokes rising into a curl that rolls forward and breaks, spray of dry-brush flecks and ink dots scattering, then the swell re-forms
const{sin:S,cos:C,PI,min,max,hypot}=Math,T=PI*2,
R=s=>()=>(s=s*16807%2147483647)/2147483647,
K=(a,v=20)=>`rgba(${v+4},${v},${v-3},${a})`
// brush stroke through points p: width w, alpha (or colour) a, dry-brush hairlines from fraction d, pressure profile f
const B=(c,p,w,a=.85,d=1,f=u=>S(PI*u**.6)**.6)=>{
  const n=p.length-1,m=n*8,g=j=>p[max(0,min(n,j))],o=[]
  for(let k=0;k<=m;k++){
    const u=min(k/8,n-1e-6),i=u|0,v=u-i,
    q=z=>{const[a,b,e,h]=[g(i-1)[z],g(i)[z],g(i+1)[z],g(i+2)[z]];return b+.5*v*(e-a+v*(2*a-5*b+4*e-h+v*(3*(b-e)+h-a)))}
    o.push([q(0),q(1)])
  }
  o.forEach((q,k)=>{
    const[x0,y0]=o[max(0,k-1)],[x1,y1]=o[min(m,k+1)],h=hypot(x1-x0,y1-y0)||1,r=f(k/m)*w/2
    q.push((y0-y1)/h*r,(x1-x0)/h*r)
  })
  // wet part tapers out where the dry-brush hairlines take over
  const e=u=>d<1?max(0,min(1,(d+.1-u)*4)):1
  c.fillStyle=c.strokeStyle=a>0?K(a):a
  c.beginPath()
  for(let k=0;k<=m;k++)c.lineTo(o[k][0]+o[k][2]*e(k/m),o[k][1]+o[k][3]*e(k/m))
  for(let k=m;k>=0;k--)c.lineTo(o[k][0]-o[k][2]*e(k/m),o[k][1]-o[k][3]*e(k/m))
  c.fill()
  for(let j=0;d<1&&j<7;j++){
    c.beginPath();c.lineWidth=max(.5,w*(.06+j*7%3*.035))
    for(let k=max(0,(d-.2)*m|0)+j*3%4;k<=m-j*5%4*2;k++)c.lineTo(o[k][0]+o[k][2]*(j/3-1)*.85,o[k][1]+o[k][3]*(j/3-1)*.85)
    c.stroke()
  }
}
const pc=a=>`rgba(0,0,0,${a})`,
// point at u along a smooth curve through p
cr=(p,u)=>{
  const n=p.length-1,x=min(u*n,n-1e-6),i=x|0,v=x-i,g=j=>p[max(0,min(n,j))]
  return[0,1].map(z=>{const[a,b,e,h]=[g(i-1)[z],g(i)[z],g(i+1)[z],g(i+2)[z]];return b+.5*v*(e-a+v*(2*a-5*b+4*e-h+v*(3*(b-e)+h-a)))})
},
seg=(p,a,b,n=8)=>[...Array(n+1)].map((_,k)=>cr(p,a+(b-a)*k/n)),
mx=(p,q,e)=>p.map(([x,y],k)=>[x+(q[k][0]-x)*e,y+(q[k][1]-y)*e]),
// spine of the wave: rising swell, full curl, collapsed
P=[[[16,218],[48,186],[80,144],[108,112],[130,96],[146,93],[157,99],[161,108]],
[[16,218],[50,182],[86,128],[122,92],[158,83],[184,98],[193,126],[181,149]],
[[16,218],[52,184],[88,136],[126,104],[162,99],[188,120],[194,150],[185,174]]]
export const frames=22,delay=95,dither=true
export default(c,t)=>{
  const r=R(41),
  M=()=>c.globalCompositeOperation='multiply',O=()=>c.globalCompositeOperation='destination-out',
  // one wave along spine p at opacity al, its lip going dry from fraction dr
  wave=(p,al,dr)=>{
    const[x,y]=p[7],q=seg(p,0,1,28),g=c.createLinearGradient(0,p[4][1],0,222),
    o=p.map(([a,b],k)=>[a+(132-a)*.2*min(1,k/2),b+(176-b)*.2*min(1,k/2)])
    c.globalAlpha=al
    // inner face: wash, dark under the lip, gone by the trough
    g.addColorStop(0,K(.46));g.addColorStop(.55,K(.2));g.addColorStop(1,K(0))
    c.filter='blur(2.5px)';c.fillStyle=g;c.beginPath()
    q.concat(seg([[x,y],[x-20,y+34],[154,200],[212,220]],0,1,12),[[16,222]]).map(a=>c.lineTo(...a));c.fill();c.filter='none'
    // three strokes: pale back, heavy spine, inner sweep
    B(c,seg(p.map(([a,b])=>[a-9,b-3]),.05,.7),7,.3,.4,u=>1-u*.6)
    B(c,q,19,.93,dr,u=>(.3+.7*S(PI*min(1,u*1.25)**.8))*(1-u*.45))
    B(c,seg(o,.12,.9),10,.6,dr-.1,u=>S(PI*u)**.6)
    // foam: flecks erased to nothing, dragged across the lip
    O()
    ;[[.42,.9,-6,1.5],[.56,1,-2,2.4],[.5,.84,3,1.3],[.64,.98,6,2],[.26,.6,-7,1.1],[.7,.95,1.5,1]].map(([a,b,n,w])=>
      B(c,seg(p,a,b).map(([x,y],i,s)=>{
        const[X,Y]=s[min(i+1,8)],[U,V]=s[max(i-1,0)],h=hypot(X-U,Y-V)
        return[x-(Y-V)/h*n,y+(X-U)/h*n]
      }),w,pc(.92)))
    M();c.globalAlpha=1
  },
  e=t<.55?(1-C(PI*t/.55))/2:(t-.55)/.45,k=min(1,max(0,(t-.68)/.32)),u=min(1,max(0,(t-.48)/.5))
  M()
  // sea: long pale strokes
  B(c,[[14,224],[80,219],[150,222],[204,218]],3.4,.32,.6)
  ;[[168,196,34],[206,232,26],[60,236,46]].map(([x,y,l])=>B(c,[[x,y],[x+l/2,y+1.5],[x+l,y]],2,.24))
  k&&wave(P[0].map(([x,y],j)=>[x,y+(1-k)*j*2]),k,.75)
  wave(t<.55?mx(P[0],P[1],e):mx(P[1],P[2],e),t<.6?1:max(0,1-(t-.6)/.36),t<.5?.75:max(.12,.75-(t-.5)*1.6))
  // the break: dry flecks thrown forward, ink dots scattering and fading
  if(u>0&&u<1){
    for(let j=0;j<7;j++){
      const a=-.5+j*.33,l=(12+j%3*7)*(.4+u),x=186+C(a)*(6+u*16),y=128+S(a)*(6+u*16)+u*u*18
      B(c,[[x,y],[x+C(a)*l*.5,y+S(a)*l*.5+2],[x+C(a+.3)*l,y+S(a+.3)*l+5]],6-j%2*2,(1-u)*.55*min(1,u*6),.05,u=>1-u*.5)
    }
    c.globalAlpha=min(1,u*7)*(1-u)**.7
    for(let j=0;j<32;j++){
      const a=-1.6+r()*2.4,v=20+r()*70,x=184+C(a)*v*u,y=118+S(a)*v*u+64*u*u
      c.fillStyle=K(.45+r()*.45);c.beginPath();c.arc(x,y,.7+r()*1.9,0,T);c.fill()
    }
    c.globalAlpha=1
  }
}
