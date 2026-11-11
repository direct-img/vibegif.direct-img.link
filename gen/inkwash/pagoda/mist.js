// ink wash pagoda on a wooded hill with bands of mist sliding across and birds circling the spire
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
X=146,
h=x=>224-52*Math.exp(-(((x-X)/72)**2))-10*Math.exp(-(((x-56)/28)**2)),
// roof line: sagging slope with upturned eave tips
rf=(v,y)=>y-5*(1-abs(v))-6*max(0,(abs(v)-.72)/.28)**2
export const frames=32,delay=90,dither=true
export default(c,t)=>{
  const r=R(9)
  // far peak, faint
  let g=c.createLinearGradient(0,96,0,190)
  g.addColorStop(0,K(.26));g.addColorStop(1,K(0))
  c.filter='blur(2.5px)';c.fillStyle=g
  c.beginPath();c.moveTo(4,190);c.lineTo(34,128);c.lineTo(52,112);c.lineTo(62,98);c.lineTo(76,118);c.lineTo(96,132);c.lineTo(128,190);c.fill()
  c.filter='blur(.6px)';c.fillStyle=K(.36)
  B(c,u=>[36+u*27,126-u*28+sin(u*9)*1.5],u=>1.4*P(u),30)
  B(c,u=>[63+u*30,99+u*30+sin(u*7)*1.5],u=>1.5*P(1-u),30)
  // pagoda: five tiers, body washes then loaded roof strokes
  for(let k=0;k<5;k++){
    const y=170-k*22,w=35-k*4.6,b=w*.52
    c.filter='blur(1px)';c.fillStyle=K(.34)
    c.fillRect(X-b,y-1,b*2,k?16:6)
    c.filter='blur(.5px)';c.fillStyle=K(.7)
    for(const s of[-1,-.2,.5,1])B(c,u=>[X+s*b,y+u*(k?16:6)],u=>.8,10)
    c.fillStyle=K(.5)
    B(c,u=>[X+(2*u-1)*w*.8,rf((2*u-1)*.8,y)+3.5],u=>1.5*sin(PI*u)**.5,40)
    c.fillStyle=K(.93)
    B(c,u=>[X+(2*u-1)*w,rf(2*u-1,y)],u=>.5+(2.9-k*.25)*sin(PI*u)**.7,90)
  }
  B(c,u=>[X,77-u*30],u=>1.7*(1-u)+.35,40)
  for(let k=0;k<3;k++)B(c,u=>[X-3+k*.6+u*(6-k*1.2),72-k*6],u=>1,6)
  // hill: wet wash thinning downward, then foliage dabs dark at the crest
  g=c.createLinearGradient(0,168,0,246)
  g.addColorStop(0,K(.6));g.addColorStop(.5,K(.3));g.addColorStop(1,K(0))
  c.filter='blur(3px)';c.fillStyle=g;c.beginPath();c.moveTo(6,250)
  for(let x=6;x<=250;x+=4)c.lineTo(x,h(x)+3)
  c.lineTo(250,250);c.fill()
  c.filter='blur(.8px)'
  for(let k=0;k<96;k++){
    const x=14+r()*226,o=r()**2*34,y=h(x)+o-3,n=abs(x-X)<60,s=(o<10?4:2.6)+r()*3.2
    c.fillStyle=K(o<9?(n&&r()<.6?.9:.72):o<20?.5:.3)
    B(c,u=>[x+(u-.5)*s*2.4,y+sin(u*3)*.8],u=>s*.6*P(u),10)
  }
  // tree clumps crowding the pagoda's foot
  for(const[x0,n]of[[106,9],[188,8],[128,4],[166,4]])for(let k=0;k<n;k++){
    const x=x0+(r()-.5)*24,y=h(x0)-2-r()*(n>5?22:9),s=3.6+r()*3
    c.fillStyle=K(r()<.6?.9:.66)
    B(c,u=>[x+(u-.5)*s*2.4,y+sin(u*3)*.8],u=>s*.62*P(u),10)
  }
  // a few trunks under the nearest crowns
  c.fillStyle=K(.78)
  for(const x of[100,112,182,194])B(c,u=>[x+u*1.5,h(x)-8+u*16],u=>1.3-u*.5,14)
  // birds circling the spire
  c.filter='blur(.4px)'
  for(let k=0;k<3;k++){
    const a=T*(t+k/3)+k*.4,z=sin(a),x=X+16+cos(a)*56,y=58+z*15-k*5,s=5.5+z*1.6,
      f=sin(T*(t*3+k*.37)),d=cos(a)<0?1:-1
    c.fillStyle=K(.8+z*.12)
    for(const m of[-1,1])
      B(c,u=>[x+m*u*s*1.25+d*u*u*1.5,y-sin(u*2.4)*s*.55*f-u*s*.15],u=>1.25*P(1-u*.9)+.15,14)
  }
  // mist: soft bands cut out, sliding in opposite directions
  E(c,1)
  for(const[y,S,rx,ry,d,o,a]of[[128,256,100,12,1,40,1],[212,256,120,13,-1,150,.9],[88,256,60,6,-1,20,.7]]){
    c.filter=`blur(${ry*.6}px)`;c.fillStyle=`rgba(0,0,0,${a})`
    for(let k=-1;k<2;k++){
      const x=((o+d*t*S)%S+S)%S+k*S
      c.beginPath();c.ellipse(x,y+sin(T*t+y)*2,rx,ry,0,0,T);c.fill()
    }
  }
  E(c);c.filter='none';fade(c,22);snap(c,16,6)
}
