// ink wash night sky in soft dark washes with twinkling stars and a crescent moon cut out of the ink, a shooting star streaking across above pine-topped hills
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
// sky sweeps, densest round the moon: [x0, y0, x1, y1, radius, alpha]
S=[[72,60,228,44,17,.52],[98,80,234,70,17,.5],[44,94,202,84,15,.44],[62,37,172,27,10,.34],[86,118,216,105,12,.36],[28,72,122,62,9,.3],[122,136,198,127,7,.22]],
// stars sit where the ink is deep enough to show them
Z=[[92,56],[120,76],[142,48],[78,88],[112,100],[152,98],[216,54],[130,30],[176,112],[58,70],[206,90]],
hy=x=>222-30*Math.exp(-(((x-92)/46)**2))
export const frames=28,delay=90,dither=true
export default(c,t)=>{
  const r=R(31)
  // night: a few loose wet sweeps, each pressed in the middle and trailing off to a point
  c.filter='blur(4px)'
  for(const[x0,y0,x1,y1,q,a]of S){
    c.fillStyle=K(a)
    B(c,u=>[x0+(x1-x0)*u,y0+(y1-y0)*u+sin(u*5+y0)*3],u=>q*sin(PI*u**.8)**.55*(.85+.15*sin(u*13+y0)),60)
  }
  // feibai: the brush runs dry toward the end of each sweep
  E(c,1);c.filter='blur(.4px)';c.fillStyle='#000'
  for(const[x0,y0,x1,y1,q]of S)for(let j=0;j<4&&q>9;j++){
    const o=(j-1.5)*q*.42+r()*2,f=.62+r()*.1
    B(c,u=>{const v=f+u*(1-f);return[x0+(x1-x0)*v+8,y0+(y1-y0)*v+sin(v*5+y0)*3+o*(1-u*.5)]},u=>.2+.75*u**1.5,90)
  }
  E(c)
  // moon: soft halo, then a clean crescent
  E(c,1)
  c.filter='blur(9px)';c.fillStyle='rgba(0,0,0,.45)'
  c.beginPath();c.arc(178,62,26,0,T);c.fill()
  c.save();c.translate(178,62);c.rotate(2.5)
  c.filter='blur(.5px)';c.fillStyle='#000'
  c.beginPath();c.arc(0,0,19,1.008,T-1.008);c.arc(8.6,0,16.2,T-1.472,1.472,true);c.fill()
  c.restore()
  // stars: cut-out dots, a few with a four-point glint, each on its own twinkle
  Z.map(([x,y],k)=>{
    const z=1.7+r()*1.5,m=1+(k%3==0),w=.5+.5*sin(T*(t*m+r())),q=z*(.55+.45*w)
    c.filter='blur(.4px)';c.fillStyle=`rgba(0,0,0,${.55+.45*w})`
    c.beginPath();c.arc(x,y,q,0,T);c.fill()
    if(z>2.3)for(const[dx,dy]of[[1,0],[0,1]])
      B(c,u=>[x+dx*(u-.5)*z*8*w,y+dy*(u-.5)*z*8*w],u=>.9*sin(PI*u)**2*w,20)
  })
  // shooting star: once per loop, a tapering dry streak
  const s=(t-.3)/.3
  if(s>0&&s<1){
    const x=70+s*88,y=44+s*46,a=sin(PI*s)**.6,l=52*sin(PI*s)**.5
    c.fillStyle=`rgba(0,0,0,${a})`
    B(c,u=>[x-u*l,y-u*l*.52],u=>2*(1-u)**1.4+.2,50)
    for(const o of[-1.6,1.6])B(c,u=>[x-(.2+u*.8)*l-o*.5,y-(.2+u*.8)*l*.52+o],u=>sin(u*40)>-.2?.5*(1-u):0,40)
    c.filter='blur(2.5px)';c.fillStyle=`rgba(0,0,0,${.6*a})`
    c.beginPath();c.arc(x,y,4.5,0,T);c.fill()
  }
  E(c)
  // a single dark rise with pines, brushed in one loaded stroke that tapers off at both ends
  c.filter='blur(5px)';c.fillStyle=K(.3)
  B(c,u=>[40+u*112,hy(40+u*112)+26],u=>10*sin(PI*u),30)
  c.filter='blur(1px)';c.fillStyle=K(.93)
  B(c,u=>[22+u*150,hy(22+u*150)+13*sin(PI*u)**.7+sin(u*9)],u=>.4+13*sin(PI*u**.85)**.75,120)
  E(c,1);c.filter='blur(.4px)';c.fillStyle='#000'
  for(let j=0;j<4;j++)B(c,u=>[118+u*52,214+j*3.2+u*(4-j)],u=>.2+.7*u**1.5,80)
  E(c)
  c.filter='blur(.5px)';c.fillStyle=K(.93)
  for(const[x,h]of[[70,26],[84,36],[102,24]]){
    const y=hy(x)+2
    B(c,u=>[x+u,y-u*h],u=>1.4*(1-u*.6),20)
    for(let k=0;k<4;k++)B(c,u=>[x+(u-.5)*(17-k*3.6),y-h*(.3+k*.21)+sin(u*3)*1.5],u=>(2.3-k*.3)*P(u),12)
  }
  c.filter='none';fade(c,14);snap(c)
}
