// ink wash twisted pine on a cliff edge, needle clusters shimmering in the wind while mist drifts past
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
// needle fans: x, y, radius, tilt, tone
const NF=[[166,30,17,0,0],[216,50,18,.25,0],[192,62,15,.1,1],[150,66,16,-.2,0],[186,118,17,.2,0],[152,124,15,-.1,1],[120,84,14,-.3,1],[200,30,13,.2,3],[134,56,12,-.2,3],[214,112,12,.3,3]],
// trunk: a kinked chain of points and widths, then boughs: from, control, to, width in, width out
PT=[[62,146,8],[94,146,7.2],[106,116,6.4],[130,98,5.4],[156,76,4.4],[190,70,3],[219,51,1]],
TR=[[[106,116],[150,132],[188,120],3.4,1],[[156,76],[148,52],[166,32],2.6,.8],[[188,120],[204,116],[214,114],1.4,.6],[[130,98],[124,88],[121,85],2,1]]
export const frames=30,delay=80,dither=true
export default(c,t)=>{
  const r=rn(31);c.globalCompositeOperation='multiply'
  // far peak, the faintest wash
  c.filter='blur(3px)';c.fillStyle=K[4];c.globalAlpha=.55
  c.beginPath();[[150,236],[176,186],[190,160],[204,178],[222,170],[250,214],[250,236]].forEach(p=>c.lineTo(...p));c.fill()
  // cliff: the lit face is left empty; a pale wet wash only toward the shaded side, a scorched broken contour,
  // then axe-cut strokes (pressed in flat, dragged off dry) crowding the shadow and thinning out toward the light
  c.filter='blur(3px)';c.fillStyle=K[3];c.globalAlpha=.65
  c.beginPath();[[44,152],[96,154],[87,174],[96,198],[85,224],[90,256],[38,256],[52,204]].forEach(p=>c.lineTo(...p));c.fill()
  c.filter='blur(2px)';c.fillStyle=K[2];c.globalAlpha=.55
  c.beginPath();[[76,152],[96,154],[87,174],[96,198],[85,224],[90,256],[72,256],[80,204],[72,174]].forEach(p=>c.lineTo(...p));c.fill()
  c.filter='blur(.5px)'
  ;[[[0,158],[12,142],[22,140],1.5],[[22,140],[36,150],[46,146],1.7],[[46,146],[54,134],[62,138],2],[[62,138],[82,140],[97,153],2.6],[[97,153],[84,170],[87,174],3],[[87,174],[100,190],[96,200],3],[[96,200],[82,220],[86,230],2.6],
    [[24,142],[30,176],[18,214],1.2],[[50,148],[58,186],[46,232],1.4]]
    .forEach(([a,b,d,w],k)=>st(c,bz(a,b,d),u=>w*S(Math.PI*u**.6)**.5+.4,K[k<4||k>6?1:0],.85,1,k%2?.5:.8))
  for(let k=0;k<19;k++){
    const sh=k<13,x=sh?60+r()*30:10+r()*40,y=150+r()*80+(sh?8:0),l=17+r()*17,a=1.75+r()*.35
    st(c,bz([x,y],[x+C(a)*l*.5+1,y+S(a)*l*.5],[x+C(a)*l,y+S(a)*l]),u=>(sh?3:2)*(1-u)**.6+.2,K[sh?k%3?1:0:3],sh?.6:.55,1,.3)
  }
  // twisted trunk and boughs
  PT.slice(1).forEach(([x,y,v],k)=>{
    const[X,Y,w]=PT[k],q=k%2*2-1,f=bz([X,Y],[(X+x)/2+(y-Y)*.16*q,(Y+y)/2-(x-X)*.16*q],[x,y])
    st(c,f,u=>(w+(v-w)*u)*(1+.1*(2*u-1)**4),K[0],.9,1,k%3==1?.55:2)
  })
  TR.forEach(([a,b,d,w,v])=>st(c,bz(a,b,d),u=>w+(v-w)*u,K[0],.9))
  c.fillStyle=K[0]
  for(let k=0;k<10;k++){const a=PT[k%4],b=PT[k%4+1],u=r(),x=a[0]+(b[0]-a[0])*u,y=a[1]+(b[1]-a[1])*u;c.globalAlpha=.7;c.beginPath();c.ellipse(x+r()*8-4,y-5-r()*3,1.7,1,r()*3,0,T);c.fill()}
  // needles shimmer
  NF.forEach(([x,y,R,a,tn],q)=>{
    for(let k=0;k<13;k++){
      const b=-Math.PI*(.04+k*.92/12)+a+.08*S(T*2*t+q*1.7+k*.9)+.05*S(T*t+q),l=R*(.8+k*5%4*.08)*(1+.05*S(T*2*t+k+q))
      st(c,bz([x,y],[x+C(b)*l*.5,y+S(b)*l*.5],[x+C(b)*l,y+S(b)*l]),u=>1.1*(1-u)**.6+.15,K[tn],tn?.6:.9)
    }
  })
  // mist: soft bands that dissolve the ink as they slide across the foot of the cliff
  c.globalCompositeOperation='destination-out';c.filter='blur(7px)';c.fillStyle='#000'
  ;[[0,214,70,13,.9],[150,196,56,9,.75],[280,226,80,12,.9]].forEach(([x,y,w,h,al])=>{
    c.globalAlpha=al;c.beginPath();c.ellipse((x+t*420)%420-80,y,w,h,0,0,T);c.fill()
  })
  c.globalAlpha=1;c.filter='none';fade(c,20);snap(c)
}
