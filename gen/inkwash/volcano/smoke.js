// ink wash volcano, a rugged cone with a broken crater sending up a slow smoke plume that rises and curls away in soft washes
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
seg=(L,u)=>{const v=u*(L.length-1),k=min(L.length-2,v|0),f=v-k;return[L[k][0]+(L[k+1][0]-L[k][0])*f,L[k][1]+(L[k+1][1]-L[k][1])*f]},
// cone silhouette: steep left flank, notched crater, long right flank with a shoulder
V=[[10,230],[44,200],[68,166],[84,138],[91,130],[100,141],[108,137],[117,128],[130,150],[150,171],[167,180],[181,175],[204,199],[246,230]],
// one smoke billow: hides what is behind, wash pooling low, a contour flick over the crown
lobe=(c,X,Y,q,a,s)=>{
  E(c,1);c.filter='blur(2.5px)';c.fillStyle=`rgba(0,0,0,${min(1,a*3)})`
  c.beginPath();c.arc(X,Y,q,0,T);c.fill();E(c)
  const g=c.createLinearGradient(0,Y-q,0,Y+q)
  g.addColorStop(0,K(a*.2));g.addColorStop(.55,K(a*.55));g.addColorStop(1,K(a))
  c.fillStyle=g;c.beginPath();c.arc(X,Y,q,0,T);c.fill()
  const a0=-2.9+s,a1=a0+1.5
  c.filter='blur(.6px)';c.fillStyle=K(min(.9,a*1.15))
  B(c,u=>[X+cos(a0+(a1-a0)*u)*q,Y+sin(a0+(a1-a0)*u)*q],u=>q*.06*P(u)+.15,40)
}
export const frames=28,delay=95,dither=true
export default(c,t)=>{
  const r=R(2),N=8
  // plume: billows slide up into each other's place, swelling, leaning and thinning
  for(let k=N-1;k>=0;k--){
    const p=(t+k)/N,x=101+78*p**1.8+7*sin(p*9),y=132-118*p**.8,q=6+27*p**.75,
      A=min(1,p*7)*(1-p)**.8*.8,w=p*5
    for(const[o,d,z]of[[0,0,1],[2.2,.75,.62],[4.3,.7,.55]])
      lobe(c,x+cos(o+w)*q*d,y+sin(o+w)*q*d*.8,q*z*(1+.05*sin(T*t+o)),A,sin(o+p*6)*.6)
  }
  // the cone hides the plume's root, wash pooled under the crest and thinning into mist
  const path=_=>{c.beginPath();V.map(p=>c.lineTo(...p));c.lineTo(246,260);c.lineTo(10,260)}
  E(c,1);c.filter='blur(1px)';c.fillStyle='#000';path();c.fill();E(c)
  c.save();path();c.clip()
  for(const[o,q,a,b]of[[34,40,.3,9],[12,17,.42,4]]){
    c.filter=`blur(${b}px)`;c.fillStyle=K(a)
    B(c,u=>{const[x,y]=seg(V,u);return[x,y+o]},u=>q*(.8+.2*sin(u*23)),90)
  }
  c.restore()
  // a little heat in the crater
  c.filter='blur(3px)';c.fillStyle=`rgba(204,72,40,${.5+.15*sin(T*t*2)})`
  c.beginPath();c.ellipse(101,138,9,4,0,0,T);c.fill()
  // contours: loaded stroke down the steep flank, broken strokes elsewhere
  c.filter='blur(.5px)';c.fillStyle=K(.93)
  B(c,u=>{const[x,y]=seg(V,.31-u*.27);return[x+sin(u*17)*1.2,y]},u=>.5+3.4*P(u),120)
  B(c,u=>seg(V,.3+u*.09),u=>.6+1.6*P(u),40)
  B(c,u=>seg(V,.44+u*.11),u=>.6+2*P(u),40)
  c.fillStyle=K(.78)
  B(c,u=>{const[x,y]=seg(V,.56+u*.2);return[x,y+sin(u*13)]},u=>.4+2.2*P(u),80)
  B(c,u=>seg(V,.8+u*.17),u=>.4+1.8*P(u),60)
  // ravines: dry strokes fanning down from the rim
  for(let k=0;k<11;k++){
    const u0=.2+r()*.5,[x,y]=seg(V,u0),d=(x-102)*.012+(r()-.5)*.2,l=16+r()*30,o=3+r()*10
    c.fillStyle=K(k%3?.5:.72)
    for(let j=0;j<2;j++)B(c,u=>[x+d*u*l+j*2.2+sin(u*6+k)*1.2,y+o+u*l],u=>(1.25-j*.5)*P(1-u*.92),30)
  }
  // foot: mist sliding across, dark rocks and pines in front
  E(c,1);c.filter='blur(8px)';c.fillStyle='rgba(0,0,0,.75)'
  for(let k=-1;k<2;k++){c.beginPath();c.ellipse(60+t*256+k*256,214,84,9,0,0,T);c.fill()}
  E(c);c.filter='blur(.6px)'
  c.fillStyle=K(.9)
  B(c,u=>[150+u*96,238-sin(PI*u)**.7*10+sin(u*14)*1.5],u=>3.6*P(u),80)
  for(const[x,h]of[[176,24],[190,32],[208,20],[222,26]]){
    B(c,u=>[x+u,230-u*h],u=>1.3*(1-u*.6),20)
    for(let k=0;k<4;k++)B(c,u=>[x+(u-.5)*(16-k*3.4),230-h*(.3+k*.21)+sin(u*3)*1.5],u=>(2.2-k*.3)*P(u),12)
  }
  c.filter='none';fade(c,18);snap(c,16,6)
}
