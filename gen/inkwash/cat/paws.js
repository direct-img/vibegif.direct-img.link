// ink wash cat pawprints walking across rice paper from a spilled ink dish, each print appearing step by step and then drying and fading, the cat's tail tip flicking past the edge
const paper=(c,s=7)=>{
  const r=()=>(s=s*16807%2147483647)/2147483647,P=[...Array(160)].map((_,k)=>{
    const e=k/40|0,f=k%40/40,d=9+r()*3.5,w=256-2*d
    return[[d+f*w,d],[256-d,d+f*w],[256-d-f*w,256-d],[d,256-d-f*w]][e]
  }),edge=()=>{c.beginPath();P.forEach(p=>c.lineTo(...p));c.closePath()}
  c.save();edge();c.fillStyle='#f3ecdc';c.fill();c.clip()
  for(let k=0;k<7;k++){
    const x=r()*256,y=r()*256,g=c.createRadialGradient(x,y,0,x,y,40+r()*70)
    g.addColorStop(0,'rgba(190,170,130,.07)');g.addColorStop(1,'rgba(190,170,130,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  for(let k=0;k<170;k++){
    const x=r()*256,y=r()*256,a=r()*6.3,l=8+r()*24
    c.strokeStyle=r()<.7?'rgba(150,128,95,.13)':'rgba(255,253,245,.6)';c.lineWidth=.5+r()*.7
    c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+Math.cos(a+.5)*l/2,y+Math.sin(a+.5)*l/2,x+Math.cos(a)*l,y+Math.sin(a)*l);c.stroke()
  }
  c.restore();edge();c.clip()
}
const{PI,sin:S,cos:C,min,max,atan2}=Math,T=PI*2,
rn=s=>()=>(s=s*16807%2147483647)/2147483647,
cl=(x,a=0,b=1)=>min(b,max(a,x)),
ss=(a,b,x)=>(x=cl((x-a)/(b-a)),x*x*(3-2*x)),
ink=(a,v=18)=>`rgba(${v+3},${v},${v-3},${a})`,
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
// vermilion seal with carved marks
seal=(c,x,y,z=15,s=3)=>{
  const r=rn(s),j=()=>r()*1.5-.75
  c.save();c.globalCompositeOperation='source-over';c.filter='none';c.globalAlpha=1
  c.fillStyle='rgba(184,50,42,.9)';c.beginPath()
  for(let k=0;k<24;k++){
    const e=k/6|0,f=k%6/6*z
    c.lineTo(...[[x+f+j(),y+j()],[x+z+j(),y+f+j()],[x+z-f+j(),y+z+j()],[x+j(),y+z-f+j()]][e])
  }
  c.fill();c.strokeStyle='#f3ecdc';c.lineWidth=z/11;c.lineCap='butt'
  ;[[.2,.24,.8,.22],[.5,.22,.5,.52],[.24,.5,.78,.52],[.3,.52,.2,.8],[.68,.52,.8,.8],[.42,.68,.42,.82],[.56,.66,.57,.8]]
    .forEach(m=>{c.beginPath();c.moveTo(x+m[0]*z+j()/2,y+m[1]*z);c.lineTo(x+m[2]*z,y+m[3]*z+j()/2);c.stroke()})
  c.restore()
},
// keep the half-transparent deckle pixels identical on every frame (small webp)
grab=c=>c.getImageData(0,0,256,256).data,
keep=(c,pd)=>{
  const m=c.getImageData(0,0,256,256),e=m.data
  for(let k=0;k<e.length;k+=4)if(pd[k+3]<255)for(let j=0;j<4;j++)e[k+j]=pd[k+j]
  c.putImageData(m,0,0)
}
export const frames=32,delay=[...Array(32)].map((_,i)=>i==23?600:i>30?300:80)
export default(c,t,i)=>{
  paper(c,31);const pd=grab(c);c.globalCompositeOperation='multiply'
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
      c.save();c.globalCompositeOperation='source-over';c.filter='none';c.strokeStyle=`rgba(243,236,220,${.8*p*(1-o)**2})`;c.lineWidth=.9
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
  seal(c,204,206,15,6)
  keep(c,pd)
}
