// ink wash wisteria, pale violet racemes hanging from an old vine and swaying, petals drifting down
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
const V=['rgb(138,118,184)','rgb(100,84,150)','rgb(170,152,206)'],
// racemes: x on the vine, y, length, phase
RC=[[56,36,104,0],[104,34,152,1.1],[150,48,116,2.3],[198,56,82,3.2]],
dab=(c,x,y,rx,ry,a,col,al)=>{c.fillStyle=col;c.globalAlpha=al;c.beginPath();c.ellipse(x,y,rx,ry,a,0,T);c.fill()}
export const frames=26,delay=95,dither=true
export default(c,t)=>{
  c.globalCompositeOperation='multiply';c.filter='blur(.5px)'
  // old vine, twisting, with a young tendril
  ;[[[-10,50],[84,10],[160,48],5.5,3.6,.82],[[160,48],[206,70],[266,26],3.6,2,.8],[[30,36],[60,58],[120,28],2.4,1,2],[[120,28],[170,14],[190,40],1.4,.4,2]]
    .forEach(([a,b,d,w,v,dr])=>st(c,bz(a,b,d),u=>(w+(v-w)*u)*(1+.1*S(u*14)),K[0],.9,1,dr))
  // pinnate leaves
  ;[[80,26,-.9,1],[178,56,-.5,2],[226,46,.9,3],[24,40,1.9,3]].forEach(([x,y,a,tn],q)=>{
    const s=.05*S(T*t+q),f=bz([x,y],[x+C(a+s)*16,y+S(a+s)*16-4],[x+C(a+s)*32,y+S(a+s)*32])
    st(c,f,u=>.8-.4*u,K[tn],.8)
    for(let k=1;k<8;k++){
      const[X,Y]=f(k/7.5),b=a+s+(k%2?1.1:-1.1),l=11-k*.5
      st(c,bz([X,Y],[X+C(b)*l*.5,Y+S(b)*l*.5],[X+C(b+.2)*l,Y+S(b+.2)*l]),u=>2.3*S(Math.PI*u**.6)+.15,K[tn],tn>1?.6:.8)
    }
  })
  // racemes: violet dabs, full at the top and thinning to buds at the tip, swinging like slow pendulums
  RC.forEach(([x0,y0,L,ph],q)=>{
    const r=rn(q*13+5),n=L/7|0,px=u=>x0+(9*S(T*t-u*1.6+ph)+2)*u**1.3
    st(c,u=>[px(u),y0+u*L],u=>.8-.4*u,K[2],.7)
    for(let j=0;j<n;j++){
      const u=(j+.5)/n,wd=15*(1-u)**.75+1.5,z=1-u*.55
      for(let k=0;k<3;k++){
        const o=(r()*2-1)*wd,i=r()*3|0
        if(k<2||u<.6)dab(c,px(u)+o,y0+u*L+r()*5,(4.8+r()*2)*z,(3.6+r()*1.4)*z,o*.06+r()-.5,u>.8?V[1]:V[i],u>.8?.7:.5)
      }
    }
  })
  // loose petals
  for(let k=0;k<5;k++){
    const p=(t+k/5)%1,x=[60,112,150,196,96][k]+S(T*p*2+k)*9+p*14,y=[130,170,150,128,90][k]+p*90
    dab(c,x,y,3.6,2*Math.abs(C(T*p*1.5+k))+.8,p*6+k,V[k%2],.6*S(Math.PI*p)**.5)
  }
  c.globalAlpha=1;c.filter='none';fade(c,20);snap(c,4)
}
