// ink wash twig with three muted orange persimmons hanging and swaying gently, one leaf fluttering off
const T=Math.PI*2,S=Math.sin,C=Math.cos,
// five tones of one warm black ink, as see-through washes
K=[.95,.78,.55,.36,.2].map(a=>`rgba(20,18,16,${a})`),
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
// soft fade where the painting runs off the canvas
fade=(c,w=16)=>{
  c.save();c.filter='none';c.globalAlpha=1;c.globalCompositeOperation='destination-out'
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
},
// snap colour (and, more finely, alpha) to coarser steps so the frames compress well
snap=(c,q=3)=>{
  const m=c.getImageData(0,0,256,256),e=m.data,h=1<<q>>1
  for(let k=0;k<e.length;k+=4)if(e[k+3]){
    for(let j=0;j<3;j++)e[k+j]=Math.min(255,(e[k+j]>>q<<q)+h)
    e[k+3]=e[k+3]<3?0:Math.min(255,e[k+3]+2>>2<<2)
  }
  c.putImageData(m,0,0)
},
sm=(a,b,x)=>(x=Math.min(1,Math.max(0,(x-a)/(b-a))))*x*(3-2*x)
const A=[244,20],OR='rgb(212,118,48)',
xf=(c,x,y,a)=>{c.translate(x,y);c.rotate(a);c.translate(-x,-y)},
// broad leaf: wet body with a dark midrib
lf=(c,x,y,a,l,w,tn,al=1)=>{
  const f=bz([x,y],[x+C(a-.2)*l*.5,y+S(a-.2)*l*.5],[x+C(a)*l,y+S(a)*l])
  st(c,f,u=>w*S(Math.PI*u**.7)**.8+.2,K[tn],al*(tn>1?.6:.8));st(c,f,u=>1.1*(1-u)+.15,K[0],al*.7)
},
// fruit hanging from (x,y): muted orange wash pooling at its rim, pale where the light sits, dark four-part calyx
fruit=(c,x,y,r,a)=>{
  c.save();xf(c,x,y,a)
  st(c,bz([x,y],[x+1,y+3],[x,y+7]),u=>1.2,K[0],.9)
  const Y=y+6+r*.86,g=c.createRadialGradient(x-r*.35,Y-r*.3,r*.1,x,Y,r*1.05)
  g.addColorStop(0,'rgba(212,118,48,.3)');g.addColorStop(.75,'rgba(206,104,40,.68)');g.addColorStop(1,'rgba(180,84,34,.85)')
  c.filter='blur(.9px)';c.fillStyle=g;c.beginPath();c.ellipse(x,Y,r,r*.88,0,0,T);c.fill()
  c.filter='blur(.4px)'
  st(c,u=>[x+C(.5+u*2.2)*r,Y+S(.5+u*2.2)*r*.88],u=>1.3*S(Math.PI*u)+.1,'rgb(120,56,28)',.55)
  for(let k=0;k<4;k++){const b=-Math.PI/2+(k-1.5)*.95;st(c,bz([x,y+6],[x+C(b)*-5,y+8],[x+C(b)*-r*.62,y+8+Math.abs(S(b))*3]),u=>2.6*S(Math.PI*u**.6)+.3,K[0],.88)}
  c.restore()
}
export const frames=30,delay=85,dither=true
export default(c,t)=>{
  const w=p=>S(T*t+p);c.globalCompositeOperation='multiply'
  c.filter='blur(.4px)';c.save();xf(c,...A,.03*w(0))
  // twig
  st(c,bz([268,12],[180,32],[124,88]),u=>(4.2-1.8*u)*(1+.08*S(u*15)),K[0],.9,1,.62)
  st(c,bz([124,88],[98,112],[90,150]),u=>2.4-1.4*u,K[0],.9)
  st(c,bz([170,45],[166,84],[180,108]),u=>2-1.2*u,K[0],.9)
  st(c,bz([124,88],[132,96],[134,104]),u=>1.5-.6*u,K[0],.9)
  // leaves
  lf(c,150,58,2.5+.05*w(1),40,9,1);lf(c,196,34,1.2+.06*w(2),34,8,2);lf(c,108,106,3.3+.05*w(.5),34,8,1);lf(c,182,74,.4+.07*w(3),30,7,3)
  // fruit swing a beat behind the twig
  fruit(c,134,104,15,.08*w(-1.3));fruit(c,180,108,18,.09*w(-.9));fruit(c,90,150,21,.1*w(-1.1))
  c.restore()
  // one leaf lets go and flutters down
  const x=150-t*86+S(T*t*2)*12,y=64+t*150,v=Math.abs(C(T*t*1.5))
  lf(c,x,y,2.4+S(T*t*2+1)*.8,26,7*v+1,2,1.4*S(Math.PI*t)**.6)
  c.filter='none';fade(c,26);snap(c)
}
