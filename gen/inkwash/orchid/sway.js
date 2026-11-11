// ink wash orchid on rice paper, long thin-thick-thin leaves swaying and pale flowers nodding in a breeze
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
const T=Math.PI*2,S=Math.sin,C=Math.cos,
K=['#141210','#37322d','#6b655c','#9d968a','#c9c2b4'],
rn=s=>()=>(s=s*16807%2147483647)/2147483647,
// quadratic curve as a point function
bz=(a,b,d)=>u=>[(1-u)**2*a[0]+2*u*(1-u)*b[0]+u*u*d[0],(1-u)**2*a[1]+2*u*(1-u)*b[1]+u*u*d[1]],
// fill a ribbon between two normal offsets a(u), b(u) along curve f
rib=(c,f,a,b,u0,u1,n=18)=>{
  const L=[],M=[]
  for(let k=0;k<=n;k++){
    const u=u0+(u1-u0)*k/n,[x,y]=f(u),[X,Y]=f(u+.01),[p,q]=f(u-.01),d=Math.hypot(X-p,Y-q)||1,nx=(q-Y)/d,ny=(X-p)/d
    L.push([x+nx*a(u),y+ny*a(u)]);M.unshift([x+nx*b(u),y+ny*b(u)])
  }
  c.beginPath();[...L,...M].forEach(p=>c.lineTo(...p));c.fill()
},
// brush stroke: half width w(u), painted up to u1 (ending in a point while still under way), splitting into dry hairlines after u=dry
st=(c,f,w,col,al=1,u1=1,dry=2)=>{
  const v=w;if(u1<1)w=u=>v(u)*Math.min(1,(u1-u)*9)**.6
  c.fillStyle=col;c.globalAlpha=al
  rib(c,f,u=>-w(u),w,0,Math.min(u1,dry))
  if(u1>dry)for(let j=0;j<5;j++)rib(c,f,u=>w(u)*(j*.42-1),u=>w(u)*(j*.42-.84+.2*S(u*8+j*2.3)+j%3*.07),dry-.02,u1,26)
  c.globalAlpha=1
},
// soft wet wash blob with a darker pooled rim
wash=(c,x,y,rx,ry,col,al=.4,rot=0,sd=3,bl=2)=>{
  const r=rn(sd),p=[...Array(14)].map((_,k)=>{const a=k/14*T,m=.85+r()*.3;return[C(a)*rx*m,S(a)*ry*m]}),
  path=()=>{c.beginPath();p.forEach((q,k)=>{const n=p[(k+1)%14];c.quadraticCurveTo(q[0],q[1],(q[0]+n[0])/2,(q[1]+n[1])/2)});c.closePath()}
  c.save();c.translate(x,y);c.rotate(rot);c.filter=`blur(${bl}px)`
  c.fillStyle=c.strokeStyle=col;c.globalAlpha=al;path();c.fill()
  c.filter='blur(.8px)';c.globalAlpha=al*.55;c.lineWidth=1.3;path();c.stroke();c.restore()
},
// vermilion seal with carved marks
seal=(c,x,y,s=16)=>{
  const r=rn(11);c.save();c.globalCompositeOperation='multiply';c.fillStyle='#b8322a';c.globalAlpha=.88
  c.beginPath()
  for(let k=0;k<24;k++){const e=k/6|0,f=k%6/6,j=r()*1.4,p=[[f*s,j],[s-j,f*s],[s-f*s,s-j],[j,s-f*s]][e];c.lineTo(x+p[0],y+p[1])}
  c.fill();c.globalCompositeOperation='source-over';c.strokeStyle='#f3ecdc';c.lineWidth=s/11;c.lineCap='square'
  c.beginPath()
  ;[[.22,.24,.78,.24],[.78,.24,.78,.78],[.78,.78,.24,.78],[.24,.78,.24,.5],[.24,.5,.54,.5],[.54,.5,.54,.62]]
    .forEach(([a,b,d,e])=>{c.moveTo(x+a*s,y+b*s);c.lineTo(x+d*s,y+e*s)})
  c.stroke();c.restore()
}
// d = paper pixels grabbed right after paper(c). Ink pixels are snapped to coarser steps so frames compress well, and the
// half-transparent deckle edge is put back as plain paper: a changed see-through pixel makes the webp encoder store the whole changed area again
const grab=c=>c.getImageData(0,0,256,256).data,
fin=(c,d,q=2)=>{
  const m=c.getImageData(0,0,256,256),e=m.data
  for(let k=0;k<e.length;k+=4)if(e[k]!=d[k]||e[k+1]!=d[k+1]||e[k+2]!=d[k+2]||e[k+3]!=d[k+3])
    for(let j=0;j<4;j++)e[k+j]=d[k+3]<255?d[k+j]:j<3?Math.min(255,(e[k+j]>>q<<q)+(1<<q>>1)):255
  c.putImageData(m,0,0)
},
sm=(a,b,x)=>(x=Math.min(1,Math.max(0,(x-a)/(b-a))))*x*(3-2*x)
const B=[90,224],
// leaves: tip, control, width, tone, phase
LV=[[[226,118],[150,62],4.6,0,0],[[58,42],[72,140],4.2,1,.8],[[216,192],[168,128],3.6,1,.4],[[22,160],[58,128],3.6,2,1.6],[[122,72],[94,150],3.6,0,1.2],[[162,176],[124,172],3,2,2.2],[[48,196],[70,186],2.6,3,2.8]],
// flowers: place along the scape, size, turn
FL=[[1,18,-1.2],[.8,16,-2.5],[.62,14,-.6]],
V='rgb(132,120,146)'
export const frames=30,delay=85
export default(c,t)=>{
  paper(c);const pd=grab(c),r=rn(9),w=(p,m=1)=>S(T*t+p)*m;c.globalCompositeOperation='multiply'
  // ground: pale wash and moss dots
  wash(c,96,230,46,5,K[3],.3,0,4,2.5)
  c.fillStyle=K[0]
  for(let k=0;k<11;k++){c.globalAlpha=.4+r()*.5;c.beginPath();c.ellipse(60+r()*75,226+r()*8,1.2+r()*2,.9+r(),r(),0,T);c.fill()}
  c.filter='blur(.4px)'
  // flower scape with nodding flowers
  const sc=bz(B,[128+w(.5,3),120],[176+w(.3,6),54+w(1.2,2)])
  st(c,sc,u=>1.5-.9*u,K[2],.8)
  FL.forEach(([u,z,a],q)=>{
    const[x,y]=sc(u),n=a+w(q*1.4+.6,.14)
    for(let k=0;k<5;k++){
      const b=n+[-1.25,-.55,0,.6,1.3][k],l=z*(k==2?.75:1.05),e=[x+C(b)*l,y+S(b)*l]
      st(c,bz([x,y],[x+C(b+.35)*l*.6,y+S(b+.35)*l*.6],e),u=>3.2*S(Math.PI*u**.7)+.2,V,.6)
    }
    c.fillStyle=K[0];c.globalAlpha=.85
    for(let k=0;k<3;k++){c.beginPath();c.ellipse(x+C(n+k*.8-.8)*3.4,y+S(n+k*.8-.8)*3.4,1.6,.9,n+k,0,T);c.fill()}
  })
  // leaves: thin, thick, thin, thick, then lifted to a point
  LV.forEach(([e,m,W,tn,ph])=>{
    const l=Math.hypot(e[0]-B[0],e[1]-B[1])/150,f=bz(B,[m[0]+w(ph,3.5*l),m[1]+w(ph+1.5,1.2*l)],[e[0]+w(ph-.5,8*l),e[1]+w(ph+1,3*l)])
    st(c,f,u=>W*(.3+.7*S(Math.PI*u*1.5)**2)*(1-u**4)+.25,K[tn],tn>1?.6:.88,1,tn?2:.82)
  })
  c.filter='none';seal(c,206,206);fin(c,pd)
}
