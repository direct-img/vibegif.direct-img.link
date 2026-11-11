// ink wash hanging scroll unrolling downward to reveal a small mountain landscape with a pine, a boat and a red sun, holding, then rolling back up
const{PI,sin:S,cos:C,min,max,atan2}=Math,T=PI*2,
cl=(x,a=0,b=1)=>min(b,max(a,x)),
ss=(a,b,x)=>(x=cl((x-a)/(b-a)),x*x*(3-2*x)),
ink=(a,v=18)=>`rgba(${v+3},${v},${v-3},${a*.85})`,
// brush stroke with body: centerline f(u), width w(u), painted from u=a to u=e
br=(c,f,w,col,e=1,a=0,n=40)=>{
  const L=[],Q=[]
  for(let k=0;k<=n;k++){
    const u=a+(e-a)*k/n,[x,y]=f(u),[X,Y]=f(u+.01),g=atan2(Y-y,X-x)+PI/2,h=w(u)/2
    L.push([x+C(g)*h,y+S(g)*h]);Q.unshift([x-C(g)*h,y-S(g)*h])
  }
  c.fillStyle=col;c.beginPath();[...L,...Q].forEach(p=>c.lineTo(...p));c.fill()
},
// dry brush (feibai): hairlines along f that break up more toward the end; lim = paint-in progress
dry=(c,f,w,al,sd=1,a=0,e=1,lim=9,nh=7,n=46,v=18)=>{
  c.lineCap='butt'
  for(let h=0;h<nh;h++)for(let k=0;k<n;k++){
    const p=k/n,d=(e-a)/n,u=a+(e-a)*p,o=(h/(nh-1)*2-1)*.46
    if(u>lim||S(h*12.9+k*.37+sd)+S(h*4.1+k*.83+sd*2)<p*2.5-1.45)continue
    const[x,y]=f(u),[X,Y]=f(u+d),g=atan2(Y-y,X-x)+PI/2,m=o*w(u),M=o*w(u+d)
    c.strokeStyle=ink(al*(1-p*.55),v);c.lineWidth=max(.6,w(u)/nh*.75)
    c.beginPath();c.moveTo(x+C(g)*m,y+S(g)*m);c.lineTo(X+C(g)*M,Y+S(g)*M);c.stroke()
  }
},
// irregular wash blob
bl=(c,x,y,rx,ry,col,sd=1,ro=0,wb=.12)=>{
  c.fillStyle=col;c.beginPath()
  for(let k=0;k<36;k++){
    const a=k/36*T,q=1+wb*(S(a*3+sd)+.6*S(a*5+sd*2.3)+.4*S(a*9+sd*4.1))/2,u=C(a)*rx*q,v=S(a)*ry*q
    c.lineTo(x+u*C(ro)-v*S(ro),y+u*S(ro)+v*C(ro))
  }
  c.fill()
}
export const dither=true,frames=32,delay=[...Array(32)].map((_,i)=>i==16?1000:i?70:350)
export default(c,t)=>{
  c.translate(-18,0);c.globalCompositeOperation='multiply'
  const p=ss(.03,.38,t)-ss(.6,.95,t),x0=98,x1=194,y0=42,yb=y0+16+152*p,rw=12-4*p,
  ln=(x,y,X,Y,w,a=.9,v=13)=>br(c,u=>[x+(X-x)*u,y+(Y-y)*u+S(u*PI)],u=>w*(.45+.55*S(u**.7*PI)),ink(a,v),1,0,14)
  // cord and nail
  c.filter='blur(.5px)'
  ln(122,y0,146,20,1.6,.8);ln(170,y0,146,20,1.6,.8);bl(c,146,19,2.6,2.6,ink(.9),1)
  // shadow on the wall
  c.filter='blur(4px)';c.fillStyle=ink(.16,40);c.fillRect(x0+5,y0+4,x1-x0,yb-y0+4)
  // silk mount and painting ground
  c.save();c.globalCompositeOperation='destination-out';c.filter='none'
  c.fillStyle='#000';c.fillRect(x0,y0,x1-x0,yb-y0);c.restore()
  c.fillStyle='rgba(70,62,52,.07)';c.fillRect(x0+10,y0+10,x1-x0-20,yb-y0-10)
  c.filter='blur(.8px)';c.fillStyle=ink(.3,74)
  c.fillRect(x0,y0,10,yb-y0);c.fillRect(x1-10,y0,10,yb-y0);c.fillRect(x0+10,y0,x1-x0-20,10)
  c.filter='blur(.5px)'
  ln(x0,y0,x0,yb,1.5,.7);ln(x1,y0,x1,yb,1.8,.8);ln(x0+10,y0+10,x0+10,yb,.9,.45);ln(x1-10,y0+10,x1-10,yb,.9,.45)
  ln(x0+10,y0+10,x1-10,y0+10,.9,.45)
  // the landscape, revealed as the scroll opens
  c.save();c.beginPath();c.rect(x0+11,y0+11,x1-x0-22,yb-y0-15);c.clip()
  const mt=(P,a,v,y2)=>{
    const g=c.createLinearGradient(0,min(...P.map(q=>q[1])),0,y2)
    g.addColorStop(0,ink(a,v));g.addColorStop(.55,ink(a*.6,v));g.addColorStop(1,ink(0,v))
    c.fillStyle=g;c.beginPath();P.forEach(q=>c.lineTo(...q));c.lineTo(P[P.length-1][0],y2);c.lineTo(P[0][0],y2);c.fill()
  }
  c.save();c.globalCompositeOperation='source-over';c.filter='blur(.6px)'
  c.fillStyle='rgba(190,62,48,.75)';c.beginPath();c.arc(166,70,5.5,0,T);c.fill();c.restore()
  c.filter='blur(1.6px)'
  mt([[108,112],[122,92],[130,84],[137,66],[143,60],[148,72],[156,82],[164,92],[184,104]],.34,70,128)
  mt([[108,140],[114,122],[121,108],[126,104],[131,116],[140,128],[150,140]],.6,40,160)
  mt([[150,158],[160,150],[168,136],[174,132],[179,140],[184,146]],.7,30,176)
  c.filter='blur(.6px)'
  ln(137,66,131,84,1.6,.5);ln(143,60,150,76,2,.55);ln(126,104,122,118,2.2,.8);ln(126,104,134,120,1.6,.7);ln(174,132,170,146,2.4,.85)
  // pine leaning from the crag
  br(c,u=>[172-u*9+3*S(u*5),134-u*24],u=>3.4-2.4*u,ink(.92,13),1,0,14)
  ;[[160,108,10],[168,113,8],[158,117,7],[166,104,6]].forEach(([x,y,r],k)=>{bl(c,x,y,r,r*.4,ink(.85,16),k,-.1,.4);dry(c,u=>[x-r+u*r*2,y-1],u=>r*.8,.5,k,0,1,9,4,8)})
  // boat on white water
  br(c,u=>[124+u*22,177+2.5*S(u*PI)],u=>3.2*S(u*PI)**.6,ink(.9,13),1,0,12)
  ln(136,177,135,169,1.6,.9);bl(c,135,167.5,1.8,1.6,ink(.9),1);ln(137,170,147,160,.9,.7)
  for(let k=0;k<3;k++)ln(118+k*9,183+k*2,132+k*10,183+k*2,.9,.3,50)
  // foreground rock and reeds
  c.filter='blur(1.2px)';mt([[108,196],[114,188],[124,186],[131,192],[138,198]],.8,22,204)
  c.filter='blur(.5px)'
  for(let k=0;k<5;k++)br(c,u=>[142+k*4+u*u*(k-1)*4,198-u*(12+k%2*5)],u=>1.5*(1-u)+.3,ink(.8,16),1,0,8)
  c.restore()
  // rods
  c.filter='blur(.6px)'
  br(c,u=>[x0-7+u*(x1-x0+14),y0-1],u=>5.5,ink(.88,15),1,0,6);dry(c,u=>[x0-6+u*(x1-x0+12),y0-1],u=>5,.6,2,0,1,9,4,30)
  bl(c,x0-8,y0-1,3,4,ink(.92),1);bl(c,x1+8,y0-1,3,4,ink(.92),2)
  c.save();c.globalCompositeOperation='destination-out';c.filter='none';c.fillStyle='#000';c.fillRect(x0-2,yb-rw/2,x1-x0+4,rw);c.restore()
  c.filter='blur(.9px)';c.fillStyle=ink(.42,60);c.fillRect(x0-2,yb-rw/2,x1-x0+4,rw)
  c.fillStyle=ink(.4,30);c.fillRect(x0-2,yb+rw*.1,x1-x0+4,rw*.4)
  c.filter='blur(.5px)'
  ln(x0-2,yb-rw/2,x1+2,yb-rw/2,1.6,.8);ln(x0-2,yb+rw/2,x1+2,yb+rw/2,2.6,.9)
  bl(c,x0-6,yb,4.5,rw*.5,ink(.93),3,0,.1);bl(c,x1+6,yb,4.5,rw*.5,ink(.93),4,0,.1)
}
