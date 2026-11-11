// ink wash raindrops hitting a still pond on rice paper, interlocking rings spreading and fading between lily pads, faint slanted rain streaks
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
// drop sites: x, y, phase
const D=[[96,96,0],[168,118,.37],[122,134,.7],[132,168,.18],[196,176,.55],[150,84,.84],[104,204,.45],[190,72,.1]]
export const frames=24,delay=75
export default(c,t)=>{
  paper(c)
  const pd=c.getImageData(0,0,256,256).data,r=R(31)
  c.globalCompositeOperation='multiply'
  // a breath of wash for the water
  c.filter='blur(14px)';c.fillStyle=K(.09)
  c.beginPath();c.ellipse(140,140,90,50,-.3,0,T);c.fill()
  // lily pads: wet wash discs with a notch, dark rim on the near side, a few veins
  ;[[56,204,30,.5],[90,224,19,3.6],[212,100,23,2.2],[230,128,14,5],[32,82,17,1.2]].map(([x,y,z,a],k)=>{
    const e=(b,m=1)=>[x+C(b)*z*m,y+S(b)*z*.5*m]
    c.filter='blur(1.2px)';c.fillStyle=K(k%2?.42:.58)
    c.beginPath();c.moveTo(x,y);c.ellipse(x,y,z,z*.5,0,a+.25,a+T-.25);c.fill();c.filter='none'
    B(c,[e(.2),e(1),e(1.8),e(2.6),e(3.2)],3,.88)
    for(let j=1;j<6;j++)B(c,[[x,y],e(a+j*1.05,.85)],1.3,.45)
  })
  // lotus bud, the one touch of colour
  B(c,[[70,198],[76,176],[74,158]],2,.8,1,u=>1-u*.4)
  c.filter='blur(.7px)';c.fillStyle='rgba(206,104,128,.55)'
  c.beginPath();c.moveTo(74,144);c.quadraticCurveTo(82,154,74,161);c.quadraticCurveTo(66,154,74,144);c.fill()
  c.fillStyle='rgba(206,104,128,.4)';c.beginPath();c.moveTo(74,147);c.quadraticCurveTo(77,155,74,161);c.quadraticCurveTo(71,155,74,147);c.fill()
  c.filter='none'
  // reed blades at the edge
  ;[[18,150,30,96],[24,152,44,112],[14,152,12,116]].map(([x,y,X,Y])=>B(c,[[x,y],[(x+X)/2-3,(y+Y)/2],[X,Y]],3,.75,1,u=>1-u*.8))
  // rings: three per drop, thick on the near side, thinning as they spread
  D.map(([x,y,p])=>{
    const u=(t+p)%1
    for(let j=0;j<3;j++){
      const q=u*44-j*10,h=(1-u)*3.2+.8
      if(q<1)continue
      c.fillStyle=K((1-u)**.8*(.9-j*.2));c.beginPath()
      c.ellipse(x,y,q,q*.38,0,0,T);c.ellipse(x,y-h*.45,max(.1,q-h*.5),max(.1,q*.38-h*.55),0,0,T);c.fill('evenodd')
    }
    // splash crown
    if(u<.16){
      const s=S(PI*u/.16)
      ;[-1,0,1].map(j=>B(c,[[x+j*2,y],[x+j*5*s,y-(9-j*j*3)*s-1]],2,.7))
    }
  })
  // rain: faint slanted streaks
  for(let k=0;k<16;k++){
    const u=(t*2+r())%1,x=60+r()*160-u*40,y=36+u*170
    B(c,[[x,y],[x-5,y+22]],1.4,.4*min(1,u*6,(1-u)*6))
  }
  seal(c,216,214)
  fix(c,pd)
}
