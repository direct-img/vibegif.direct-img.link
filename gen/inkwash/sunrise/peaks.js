// ink wash sunrise, a translucent vermilion sun rising from behind layered mountain peaks as the sky wash warms and mist drifts between the ridges
const K=a=>`rgba(20,18,16,${a})`,{sin,cos,PI,min,max,abs,hypot,atan2}=Math,T=PI*2,
R=s=>()=>{let z=s+=0x6D2B79F5;z=Math.imul(z^z>>>15,z|1);z^=z+Math.imul(z^z>>>7,z|61);return((z^z>>>14)>>>0)/2**32},
// brush: dabs stamped along f(u) with radius w(u)
B=(c,f,w,n=40)=>{c.beginPath()
  for(let k=0;k<=n;k++){const u=k/n,[x,y]=f(u),r=w(u);r>.15&&(c.moveTo(x+r,y),c.arc(x,y,r,0,T))}
  c.fill()},
// pressure: press in, swell, taper to a point
P=u=>sin(PI*u**.6)**.8,
E=(c,on)=>c.globalCompositeOperation=on?'destination-out':'source-over',
fade=(c,w=16)=>{
  c.save();E(c,1)
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
},
snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=Math.round(d[k+j]/s)*s;d[k+3]=min(255,Math.round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}
,
// ridges: [base y, ink alpha, seed, [peak x, height, half-width]...]
M=[[158,.3,1,[40,38,60],[110,52,70],[200,44,80],[250,30,50]],
  [196,.56,2,[70,86,62],[130,40,50],[215,58,70]],
  [240,.9,3,[30,50,60],[100,26,50],[190,66,80],[245,40,40]]],
pf=([b,,s,...L],x)=>b-L.reduce((a,[X,h,w])=>a+h*max(0,1-abs(x-X)/w)**1.3,0)-2.5*sin(x*.31+s)-1.5*sin(x*.73+s*2),
ss=u=>u*u*(3-2*u)
export const frames=24,delay=110,dither=true
export default(c,t)=>{
  const up=ss(min(1,t/.62)),A=1-ss(max(0,(t-.8)/.2)),sy=156-90*up,r=R(6)
  // warming sky wash and the sun, both translucent colour
  c.filter='blur(14px)';c.fillStyle=`rgba(214,112,64,${.34*up*A})`
  c.beginPath();c.ellipse(150,118-up*14,112,34+up*10,0,0,T);c.fill()
  c.filter='blur(5px)';c.fillStyle=`rgba(206,74,44,${.3*A})`
  c.beginPath();c.arc(160,sy,27,0,T);c.fill()
  c.filter='blur(1px)';c.fillStyle=`rgba(200,62,40,${.66*A})`
  c.beginPath();c.arc(160,sy,21,0,T);c.fill()
  M.map((m,j)=>{
    const[b,a,s]=m,y=x=>pf(m,x)
    // each ridge hides what is behind it, then fades down into mist
    E(c,1);c.filter='blur(1px)';c.fillStyle='#000'
    const path=_=>{c.beginPath();c.moveTo(-4,260);for(let x=-4;x<=260;x+=3)c.lineTo(x,y(x));c.lineTo(260,260);c.fill()}
    path();E(c)
    // wash pooled under the crest, thinning downhill into mist
    c.save();c.beginPath();c.moveTo(-4,260);for(let x=-4;x<=260;x+=3)c.lineTo(x,y(x));c.lineTo(260,260);c.clip()
    for(const[o,q,f,bl]of[[26,30,.3,7],[9,13,.5,3.5]]){
      c.filter=`blur(${bl}px)`;c.fillStyle=K(a*f)
      B(c,u=>[u*264-4,y(u*264-4)+o],u=>q*(.8+.2*sin(u*31+s)),80)
    }
    c.restore()
    // crest: broken loaded strokes; flanks: short dry strokes running downhill
    c.filter='blur(.5px)'
    for(let k=0;k<4+j;k++){
      const x0=8+r()*200,l=24+r()*30
      c.fillStyle=K(min(.93,a+.1))
      B(c,u=>[x0+u*l,y(x0+u*l)],u=>(1+j*.5)*P(u)+.2,50)
    }
    for(let k=0;k<6+j*2;k++){
      const x0=10+r()*236,d=y(x0+4)>y(x0-4)?1:-1,l=7+r()*(6+j*4),o=2+r()*4
      c.fillStyle=K(a*.8)
      for(let q=0;q<2;q++)B(c,u=>[x0+d*(u*l*.6+q*2.5),y(x0)+o+u*l],u=>(.6+j*.25)*P(1-u*.9),20)
    }
    // mist sliding along the foot of the ridge
    E(c,1);c.filter='blur(8px)';c.fillStyle='rgba(0,0,0,.7)'
    for(let k=-1;k<2;k++){
      const x=((s*90+(j&1?-1:1)*t*256)%256+256)%256+k*256
      c.beginPath();c.ellipse(x,b-4,84,8,0,0,T);c.fill()
    }
    E(c)
  })
  // pines on the near crest
  c.filter='blur(.5px)'
  for(const[x,h]of[[168,20],[181,26],[203,17]]){
    const y=pf(M[2],x)+2
    c.fillStyle=K(.93)
    B(c,u=>[x+u,y-u*h],u=>1.2*(1-u*.6),20)
    for(let k=0;k<4;k++)B(c,u=>[x+(u-.5)*(15-k*3),y-h*(.35+k*.2)+sin(u*3)*1.5],u=>(2.1-k*.3)*P(u),12)
  }
  c.filter='none';fade(c,20);snap(c,16,6)
}
