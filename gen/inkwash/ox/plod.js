// ink wash herd boy riding a water buffalo and playing a bamboo flute on rice paper, the ox plodding in a slow walk cycle, notes drifting off as tiny ink dots
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
// wet wash: blurred fill of path g, alpha (or colour) a, blur b, with a faint pooled rim
const W=(c,g,a=.2,b=4)=>{
  c.filter=`blur(${b}px)`;c.fillStyle=c.strokeStyle=a>0?K(a):a
  c.beginPath();g();c.fill()
  c.filter=`blur(${b/4}px)`;c.globalAlpha=.4;c.lineWidth=1.2;c.stroke()
  c.globalAlpha=1;c.filter='none'
}
// smooth closed path through points
const Q=(c,p)=>{
  const n=p.length,m=k=>[(p[k%n][0]+p[(k+1)%n][0])/2,(p[k%n][1]+p[(k+1)%n][1])/2]
  c.moveTo(...m(n-1));p.forEach((q,k)=>c.quadraticCurveTo(...q,...m(k)));c.closePath()
}
// vermilion seal with uneven edges and carved marks
const seal=(c,x,y,z=15,r=R(5))=>{
  const j=()=>r()*1.4-.7,l=(a,b,d,e)=>{c.moveTo(x+a*z,y+b*z);c.lineTo(x+d*z,y+e*z)}
  c.globalCompositeOperation='source-over';c.filter='none'
  c.fillStyle='rgba(184,50,42,.9)';c.beginPath()
  for(let k=0;k<24;k++){
    const e=k/6|0,f=k%6/6*z
    c.lineTo(...[[x+f+j(),y+j()],[x+z+j(),y+f+j()],[x+z-f+j(),y+z+j()],[x+j(),y+z-f+j()]][e])
  }
  c.fill()
  c.strokeStyle='#f3ecdc';c.lineWidth=z*.1;c.lineCap='butt';c.beginPath()
  l(.22,.26,.78,.24);l(.5,.2,.5,.56);l(.24,.55,.76,.56);l(.3,.56,.24,.8);l(.7,.56,.78,.8);l(.4,.8,.62,.79)
  c.stroke()
}
// put back the sheet's half-transparent deckle pixels (d = pixels grabbed right after paper) so moving ink never alters them
const fix=(c,d)=>{
  const m=c.getImageData(0,0,256,256),e=m.data
  for(let k=0;k<e.length;k+=4)if(d[k+3]<255)for(let j=0;j<4;j++)e[k+j]=d[k+j]
  c.putImageData(m,0,0)
}
const d=(a,l)=>[S(a)*l,C(a)*l]
export const frames=24,delay=90
export default(c,t)=>{
  paper(c)
  const pd=c.getImageData(0,0,256,256).data,r=R(71),p=t*T,bob=S(p*2)*1.2,
  // leg from x,y: swings with phase f, lifts and bends on the forward stroke
  leg=(x,y,f,o,w)=>{
    const a=S(p+f)*.42,b=a-max(0,C(p+f))*.7,[u,v]=d(a,19),[m,n]=d(b,18)
    B(c,[[x,y-4],[x+u,y+v],[x+u+m,y+v+n]],w,o,1,u=>1-u*.68)
    B(c,[[x+u+m-3,y+v+n],[x+u+m+3,y+v+n+1]],w*.5,o)
  }
  c.globalCompositeOperation='multiply'
  // ground: pale strokes sliding back under the hooves, grass tufts
  for(let k=0;k<4;k++){
    const x=20+(k*58+232-t*58)%232,l=26+k%2*14
    B(c,[[x,193+k%2*9],[x+l/2,194+k%2*9],[x+l,193+k%2*9]],2.2,.26*min(1,(x-14)/20,(226-x)/20))
  }
  // far-side legs, then tail
  leg(96,150+bob,PI,.45,13);leg(156,148+bob,0,.45,13)
  c.save();c.translate(0,bob)
  const w=S(p)*6
  B(c,[[178,118],[190,132+w*.3],[188+w,156],[192+w*1.6,166]],4,.85,.75,u=>1-u*.6)
  // body: one wet wash mass, darker spine stroke, dry-brush haunch and shoulder
  W(c,()=>Q(c,[[78,118],[100,101],[130,107],[166,103],[187,120],[183,146],[160,159],[124,163],[92,156],[76,138]]),.48,2.5)
  B(c,[[84,112],[103,99],[134,106],[166,102],[187,121]],10,.92,.6,u=>.3+S(PI*u**.8)*.7)
  ;[[166,106,183,128,176,152],[154,108,170,130,163,156],[102,104,92,128,99,152]].map(([a,b,e,f,g,h],k)=>B(c,[[a,b],[e,f],[g,h]],9-k*2,.5,.05,u=>1-u*.4))
  B(c,[[94,157],[128,164],[168,155]],4,.5,.5)
  // head: wash wedge, dry stroke down the face, muzzle, ear, horns as two swelling strokes
  W(c,()=>Q(c,[[90,112],[72,116],[54,134],[44,150],[52,158],[68,152],[86,142]]),.55,1.5)
  B(c,[[78,116],[62,130],[47,149]],8,.75,.45,u=>1-u*.4)
  B(c,[[44,148],[48,157],[58,157]],3.4,.92)
  B(c,[[78,121],[88,113],[95,119]],5,.85)
  B(c,[[70,119],[60,102],[74,89],[98,90]],8,.93,1,u=>S(PI*u**.45)**.8)
  B(c,[[65,121],[48,111],[41,95],[50,81]],6,.6,1,u=>S(PI*u**.45)**.8)
  c.fillStyle=K(.95);c.beginPath();c.arc(63,134,1.6,0,T);c.fill()
  // boy in a few strokes: wet robe, dangling leg, head and topknot, arm, flute, straw hat on his back
  c.filter='blur(1px)';B(c,[[125,74],[122,90],[131,107]],21,.32,1,u=>.55+S(PI*u)*.45);c.filter='none'
  B(c,[[133,78],[141,93],[139,106]],2.6,.6)
  B(c,[[126,101],[112,110],[105,123]],6,.6,1,u=>1-u*.5);B(c,[[105,123],[100,127]],3.6,.88)
  c.filter='blur(.6px)';c.fillStyle=K(.2);c.beginPath();c.arc(124,65,6.5,0,T);c.fill();c.filter='none'
  B(c,[[117,63],[123,57],[131,61]],5,.92);B(c,[[126,57],[128,50]],4.5,.92)
  c.fillStyle=K(.9);c.beginPath();c.arc(120,66,.9,0,T);c.fill()
  B(c,[[128,79],[116,77],[106,70]],3.6,.5)
  B(c,[[121,70],[92,66+S(p)]],1.9,.93,1,u=>1)
  B(c,[[139,72],[151,83],[147,99]],7,.5,.35)
  c.restore()
  // near-side legs
  leg(104,152+bob,0,.9,16);leg(164,150+bob,PI,.9,16)
  // notes: ink dots drifting up and away from the flute
  for(let k=0;k<7;k++){
    const u=(t+k/7)%1,x=92-u*46+S(u*7+k)*6,y=62-u*38-S(u*5+k)*5
    c.fillStyle=K(.8*min(1,u*6,(1-u)*2.5));c.beginPath();c.ellipse(x,y,2.4-u,1.8-u*.7,-.4,0,T);c.fill()
    k%2||B(c,[[x+1.6,y],[x+2.2,y-7]],1.1,.7*min(1,u*6,(1-u)*2.5))
  }
  seal(c,214,214)
  fix(c,pd)
}
