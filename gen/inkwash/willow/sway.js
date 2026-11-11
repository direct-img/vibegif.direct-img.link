// ink wash weeping willow, a few long flowing strands with small leaves swaying over still water with their rippling reflections
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
const Y=186,
LM=[[[30,190],[20,128],[58,74],8,5,.72],[[58,74],[92,30],[160,44],5,1.4,2],[[44,128],[84,98],[128,104],3.6,1,2],[[58,74],[44,44],[70,22],3,.8,2]],
// hanging strands: limb, place along it, length, phase, tone, how far it arches out before it falls
SD=[[1,.25,126,0,1,10],[1,.5,100,1.3,2,16],[1,.75,134,2.6,1,14],[1,1,108,3.9,2,20],[2,.6,62,5.2,3,10],[2,1,54,3.3,1,14],[3,.95,70,4.4,3,12]]
export const frames=30,delay=85,dither=true
export default(c,t)=>{
  c.globalCompositeOperation='multiply'
  const tree=(m,al,lf)=>{
    LM.forEach(([a,b,d,w,v,dr])=>{const f=bz(a,b,d);st(c,u=>m(f(u)),u=>w+(v-w)*u,K[0],.9*al,1,dr)})
    SD.forEach(([li,u0,L,ph,tn,d],q)=>{
      const[x0,y0]=bz(...LM[li])(u0),l=Math.min(L,Y-8-y0),f=u=>m([x0+d*(1-(1-u)**2.4)+10*S(T*t-u*2.6+ph)*u**1.3,y0+u*l]),r=rn(q*7+3),a2=tn>2?.6:.85
      // one long flowing stroke, pressed in at the limb and lifted to a hair
      st(c,f,u=>1.7*(1-u)**.6*(1+.25*S(u*9+q))+.25,K[tn],a2*al)
      // sparse slanted leaf flicks
      for(let k=1;k<l/8;k++){
        const u=(k+r()*.7)*8/l,[x,y]=f(u),[X,Y2]=f(u+.02),a=Math.atan2(Y2-y,X-x)+(r()<.5?1:-1)*(.35+r()*.3),z=lf*(.75+r()*.6)
        if(r()<.72&&u<.97)st(c,bz([x,y],[x+C(a)*z*.5,y+S(a)*z*.5],[x+C(a)*z,y+S(a)*z]),u=>1.15*S(Math.PI*u**.6)+.12,K[tn],a2*al)
      }
    })
  }
  // bank
  wash(c,34,192,48,7,K[2],.5,0,3,2)
  c.filter='blur(.5px)'
  st(c,bz([10,194],[50,186],[104,196]),u=>3.4*S(Math.PI*u**.5)+.3,K[0],.8,1,.5)
  // reflection: the same tree mirrored, squashed, paler, wobbling with the water
  c.filter='blur(.8px)'
  tree(([x,y])=>{const v=Y+6+(Y-y)*.34;return[x+S(v*.4-T*t)*1.8,v]},.34,6)
  // a few water lines left as broken strokes
  c.filter='blur(.4px)'
  ;[[120,204,60],[176,222,48],[70,232,54],[196,196,36]].forEach(([x,y,l],k)=>
    st(c,bz([x+S(T*t+k)*3,y],[x+l/2,y+1],[x+l+S(T*t+k)*3,y]),u=>.9*S(Math.PI*u)+.1,K[3],.7))
  tree(p=>p,1,9)
  c.filter='none';fade(c,20);snap(c)
}
