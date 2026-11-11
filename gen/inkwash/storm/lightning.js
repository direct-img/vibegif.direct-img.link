// ink wash storm clouds rolling in dark wet washes over a rain shaft, a lightning bolt cracking through with a brief glow
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
// one cloud billow: hides what is behind, wash pooling low, a contour flick over the crown
lobe=(c,X,Y,q,a,s)=>{
  E(c,1);c.filter='blur(2.5px)';c.fillStyle='#000'
  c.beginPath();c.ellipse(X,Y,q*1.15,q*.88,0,0,T);c.fill();E(c)
  const g=c.createLinearGradient(0,Y-q,0,Y+q)
  g.addColorStop(0,K(a*.3));g.addColorStop(.5,K(a*.6));g.addColorStop(1,K(a))
  c.fillStyle=g;c.beginPath();c.ellipse(X,Y,q*1.15,q*.88,0,0,T);c.fill()
  const a0=-2.8+.5*sin(X/31+s),a1=a0+1.3+.5*sin(X/17+s)
  c.filter='blur(.6px)';c.fillStyle=K(min(.93,a+.1))
  B(c,u=>[X+cos(a0+(a1-a0)*u)*q*1.15,Y+sin(a0+(a1-a0)*u)*q*.88],u=>q*.07*(.6+.4*sin(X/23+s))*P(u),50)
},
// a row of billows rolling sideways, each sliding into the next one's slot
row=(c,t,n,d,yf,qf,a,s)=>{
  for(let k=-1;k<=n;k++){
    const X=-40+336*(k+(d>0?t:1-t))/n,q=qf(X)*(1+.07*sin(T*t+X/20+s))
    lobe(c,X,yf(X)-q*.5,q,a,s)
  }
},
// the bolt: seeded zigzag, main trunk plus one fork
r=R(7),Z=[[112,70]],Y=[]
for(let k=1;k<9;k++)Z.push([Z[k-1][0]+(r()-.42)*26,70+k*19])
for(let k=0;k<4;k++)Y.push(k?[Y[k-1][0]-8-r()*14,Y[k-1][1]+13+r()*8]:Z[3])
const seg=(L,u)=>{const v=u*(L.length-1),k=min(L.length-2,v|0),f=v-k;return[L[k][0]+(L[k+1][0]-L[k][0])*f,L[k][1]+(L[k+1][1]-L[k][1])*f]},
G=[0,0,0,0,0,0,0,0,0,0,0,0,1,.2,.95,.5,.2,0,0,0,0,0,0,0]
export const frames=24,dither=true,delay=G.map((f,i)=>f>.9?60:f?70:95)
export default(c,t,i)=>{
  const f=G[i]
  // rain shaft under the cloud base
  const q=R(3)
  c.filter='blur(4px)'
  for(let k=0;k<8;k++){
    const x=62+k*17+q()*8,l=95+q()*40,w=9+q()*7,g=c.createLinearGradient(0,95,0,95+l)
    g.addColorStop(0,K(.4));g.addColorStop(.6,K(.27));g.addColorStop(1,K(0))
    c.fillStyle=g
    B(c,u=>[x-u*l*.2,95+u*l],u=>w*(1-u*.6),24)
  }

  c.filter='blur(.5px)'
  for(let k=0;k<22;k++){
    const x=50+q()*150,p=(t*(1+(k&1))+q())%1,l=18+q()*16,y=100+p*110,w=.7+q()*.8
    c.fillStyle=K((k%3?.36:.55)*sin(PI*p))
    B(c,u=>[x-(y+l*u-100)*.2,y+l*u],u=>w*P(1-u),16)
  }
  // ground: a low dark rise with a bent tree
  c.filter='blur(1px)';c.fillStyle=K(.78)
  B(c,u=>[30+u*190,228-sin(PI*u)*9+sin(u*11)*1.5],u=>4.5*P(u)*(.7+.3*sin(u*23)**2),90)
  c.fillStyle=K(.36);c.filter='blur(3px)'
  B(c,u=>[50+u*150,236],u=>6*sin(PI*u),30)
  c.filter='blur(.5px)';c.fillStyle=K(.93)
  B(c,u=>[198-u*8-u*u*12,224-u*34],u=>2.8*(1-u*.7),40)
  // wind-torn branches streaming left, dry at the tips
  for(const[o,l,d,w]of[[1,30,-.25,1.7],[.72,24,-.05,1.5],[.5,15,.12,1.2],[.9,17,-.6,1.1]]){
    const x=198-o*8-o*o*12,y=224-o*34
    B(c,u=>[x-l*u,y+d*l*u-sin(PI*u)*4],u=>w*P(1-u*.85)+.2,40)
    c.fillStyle=K(.55)
    for(let j=0;j<3;j++)B(c,u=>[x-l*(.35+u*.75),y+d*l*(.35+u*.75)-3+j*2.6-sin(PI*u)*2],u=>.7*P(u),20)
    c.fillStyle=K(.93)
  }
  // clouds: back row, then heavier front row
  row(c,t,6,1,X=>70+8*sin(X/50),X=>40+9*sin(X/37+2)-X*.03,.6,0)
  row(c,t,7,-1,X=>104+7*sin(X/43+1),X=>33+8*sin(X/29)-X*.035,.86,4)
  // ragged pooled base
  c.filter='blur(2.5px)';c.fillStyle=K(.78)
  B(c,u=>[u*256,104+7*sin(u*256/43+1)+sin(u*40)*2],u=>5.5*sin(PI*u)**.4*(.5+.5*sin(u*17+2)**2),120)
  // lightning: soft glow, then the hard white crack
  if(f){
    // the sky darkens around the flash, the glow and the crack are cut out of it
    const path=_=>{c.beginPath();Z.map(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}
    c.filter='blur(9px)';c.strokeStyle=K(.5*f);c.lineWidth=30;path()
    E(c,1)
    c.filter='blur(4px)';c.strokeStyle=`rgba(0,0,0,${.7*f})`;c.lineWidth=11;path()
    c.filter='blur(.4px)';c.fillStyle=`rgba(0,0,0,${min(1,f*1.3)})`
    B(c,u=>seg(Z,u),u=>3.4-2.4*u,200)
    B(c,u=>seg(Y,u),u=>1.8*(1-u*.8),80)
    E(c)
  }
  c.filter='none';fade(c,30);snap(c,16,5)
}
