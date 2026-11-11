// ink wash cat pawprints walking across the page from a spilled ink dish, each print appearing step by step and then drying and fading, the cat's tail tip flicking past the edge
const{PI,sin:S,cos:C,min,max,atan2}=Math,T=PI*2,
rn=s=>()=>(s=s*16807%2147483647)/2147483647,
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
},
// soften anything that runs off the canvas
fade=(c,w=16)=>{
  c.save();c.globalCompositeOperation='destination-out';c.filter='none';c.globalAlpha=1
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
}
export const dither=true,frames=32,delay=[...Array(32)].map((_,i)=>i==23?600:i>30?300:80)
export default(c,t,i)=>{
  c.globalCompositeOperation='multiply'
  const o=ss(24,31,i),A=-.62,r=rn(4)
  // ink dish and the puddle the cat stepped in
  c.filter='blur(3px)';bl(c,56,205,34,13,ink(.2,40),3,-.1,.3)
  c.filter='blur(1px)';bl(c,70,207,17,6,ink(.9,13),5,-.2,.4);bl(c,88,201,5,3.5,ink(.88,13),2,-.6,.4)
  const D=u=>[42+C(u*T+2.4)*21,196+S(u*T+2.4)*8.5]
  bl(c,42,196.5,17,6,ink(.93,13),1,0,.08)
  br(c,D,u=>1.2+3.2*S(u*PI)**2,ink(.85,22),1,0,40)
  br(c,u=>[23+u*38,201+S(u*PI)*8],u=>3.5*S(u*PI)+.5,ink(.45,50),1,0,20)
  // pawprints, inkiest first
  for(let k=0;k<7;k++){
    const b=3+k*2.5,p=cl((i-b)/2);if(p<=0)continue
    const m=30+k*27,s=k%2?8:-8,x=66+C(A)*m-S(A)*s,y=190+S(A)*m+C(A)*s,a=A+(r()-.5)*.3,z=(.75+.25*p)*1.4,
    al=(.95-k*.07)*(1-.3*cl((i-b-2)/14))*p*(1-o),v=14+k*3,
    P=(u,w,rx,ry)=>bl(c,x+z*(C(a)*u-S(a)*w),y+z*(S(a)*u+C(a)*w),rx*z,ry*z,ink(al,v),k+u,a,.14)
    if(k<3){c.filter='blur(3px)';bl(c,x,y,15,13,ink(.14*(1-o)*(1-k/3)),k,a)}
    c.filter=`blur(${.6+o*2}px)`
    P(-2,0,6.5,8);P(-3.5,-3,4,4.5);P(-3.5,3,4,4.5)
    ;[[5.5,-8.5,.5],[10,-3.2,.15],[10,3.2,-.15],[5.5,8.5,-.5]].forEach(([u,w])=>P(u,w,3.6,2.9))
    if(k<2)for(let q=0;q<3;q++)bl(c,x+r()*30-15,y+r()*30-15,1.2,1,ink(.7*(1-o)),q)
    // the ink runs out: later prints are scuffed dry
    if(k>3){
      c.save();c.globalCompositeOperation='destination-out';c.filter='none';c.strokeStyle=`rgba(0,0,0,${.8*p})`;c.lineWidth=.9
      for(let q=0;q<k-2;q++){const e=-11+q*22/(k-2)+r()*2;c.beginPath();c.moveTo(x-12,y+e);c.lineTo(x+12,y+e-5);c.stroke()}
      c.restore()
    }
  }
  // tail tip slipping off the sheet
  const q=ss(16,20,i)-ss(26,31,i),g=S(i*.9)*.5
  if(q>0){
    c.filter='blur(.7px)'
    const f=u=>[270-q*66*u+14*u**3+5*g*u*u,96-q*(18*u+40*u*u)],w=u=>12*(1-u*.3)*min(1,((1.01-u)/.12)**.5)
    br(c,f,w,ink(.92,13));dry(c,f,u=>w(u)*1.5,.5,3,.3,1,9,9,20)
  }
  fade(c)
}
