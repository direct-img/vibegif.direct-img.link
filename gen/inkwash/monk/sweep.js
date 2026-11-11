// ink wash little bald monk sweeping a temple path with a broom on rice paper while red autumn leaves keep falling from a branch as fast as he sweeps, one landing on his head
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
}
export const frames=28,delay=90
export default(c,t)=>{
  paper(c,83);c.globalCompositeOperation='multiply'
  const r=rn(21),sw=S(t*T*2),lift=max(0,C(t*T*2))*5,bob=sw*1.5,
  ln=(x,y,x2,y2,w,al=.9,v=13,b=1.5)=>br(c,u=>[x+(x2-x)*u,y+(y2-y)*u+S(u*PI)*b],u=>w*(.35+.65*S(u**.7*PI)),ink(al,v),1,0,14),
  lf=(x,y,a,z,al,k=0)=>br(c,u=>[x+C(a)*z*(u-.5),y+S(a)*z*(u-.5)],u=>z*.5*S(u**.8*PI)+.3,
    `rgba(${k%3?198:206},${k%3?84:132},${k%3?46:58},${al})`,1,0,10)
  // branch overhead
  c.filter='blur(.6px)'
  const bf=u=>[8+u*176,46-22*S(u*2.2)+u*12]
  br(c,bf,u=>9*(1-u)**.8+1,ink(.85,16),1,0,30);dry(c,bf,u=>11*(1-u)+2,.5,3,0,.9,9,5,40)
  ;[[.25,-.9,26],[.45,.7,30],[.62,-.6,24],[.8,.9,22]].forEach(([u,a,l])=>{
    const[x,y]=bf(u);br(c,v=>[x+C(a)*l*v,y+S(a)*l*v+3*S(v*3)],v=>3*(1-v)+.5,ink(.85,16),1,0,10)})
  for(let k=0;k<17;k++){
    const u=.12+r()*.88,[x,y]=bf(u),a=r()*T
    lf(x+r()*36-18,y+r()*34-12,a+.15*S(t*T+k),8+r()*4,.7,k)
  }
  // path and swept pile
  ln(22,214,150,216,2.2,.3,50,0);ln(120,220,234,217,2.6,.3,50,0)
  c.filter='blur(3px)';bl(c,160,214,40,5,ink(.22,40),1)
  c.filter='blur(.6px)'
  for(let k=0;k<12;k++)lf(26+r()*38,206+r()*8-(k<5)*r()*8,r()*T,7+r()*4,.72,k)
  // leaves pushed along by the broom
  for(let k=0;k<4;k++){const p=(t*2+k/4)%1;lf(100-p*38,211-S(p*PI)*3,p*5+k,8,.7*S(p*PI)**.5,k+1)}
  // falling leaves
  for(let k=0;k<7;k++){
    const p=(t+k/7+r()*.1)%1,x=40+r()*82+k%2*110*(k>4)
    lf(x+10*S(p*T*1.5+k)-p*8,52+p*158,p*T*1.5+k,8+r()*3,.75*min(1,p*8,(1-p)*8),k)
  }
  // monk
  c.save();c.translate(158+bob,0)
  // robe
  c.filter='blur(1.5px)'
  const pg=(P,k)=>{c.fillStyle=k;c.beginPath();P.forEach(q=>c.lineTo(...q));c.fill()}
  pg([[-11,128],[10,127],[19,160],[26,207],[-24,207],[-17,160]],ink(.55,44))
  pg([[2,128],[10,127],[19,160],[26,207],[4,207],[8,165]],ink(.4,30))
  // sleeves reaching to the broom
  pg([[-8,131],[-34-sw*2,146],[-30-sw*2,166],[-12,172],[2,150]],ink(.6,36))
  c.filter='blur(.6px)'
  ln(-11,129,-17,160,2.4,.85);ln(-17,160,-24,206,2.8,.9);ln(10,128,19,160,2.6,.9);ln(19,160,26,206,3.4,.92)
  ln(-24,207,26,207,2.2,.8,13,0);ln(-2,150,-6,204,1.6,.5);ln(8,165,10,204,1.4,.5)
  ln(-34-sw*2,146,-30-sw*2,166,2.4,.9);ln(-30-sw*2,166,-12,172,2.2,.85);ln(-8,131,-34-sw*2,146,1.8,.8)
  bl(c,-13,211,7,3,ink(.92),1);bl(c,14,211,7.5,3,ink(.92),2)
  // head
  c.save();c.globalCompositeOperation='source-over';c.fillStyle='#f3ecdc';c.beginPath();c.arc(-3,112,15,0,T);c.fill();c.restore()
  c.filter='blur(1.5px)';bl(c,2,106,11,8,ink(.16,50),2);bl(c,-9,118,4,3,'rgba(200,110,90,.25)',1)
  c.filter='blur(.5px)'
  br(c,u=>[-3+C(2.2+u*4.6)*15,112+S(2.2+u*4.6)*15],u=>.8+2.6*S(u**1.3*PI),ink(.9,13),1,0,30)
  br(c,u=>[-3+C(.9+u*1.1)*15,112+S(.9+u*1.1)*15],u=>.6+1.4*S(u*PI),ink(.7,13),1,0,10)
  br(c,u=>[-14+u*7,113+2.2*S(u*PI)],u=>.7+1.3*S(u*PI),ink(.92,13),1,0,8)
  br(c,u=>[-13+u*4,121+1.2*S(u*PI)],u=>.5+.8*S(u*PI),ink(.8,13),1,0,6)
  br(c,u=>[5+C(1+u*3.6)*3.2,114+S(1+u*3.6)*4.4],u=>.5+1*S(u*PI),ink(.8,13),1,0,8)
  // the leaf that settles on his head
  const p=t,e=ss(0,.3,p),g=ss(.72,1,p)
  lf(e<1?24-27*e+9*S(e*9):-3+g*34+6*S(g*8),e<1?40+56*e:96+g*g*116,e<1?e*7:.2+g*6,10,.8*min(1,p*10,(1-p)*10),1)
  c.restore()
  // broom
  const hx=126,hy=124,bx=82+sw*17,by=199-lift
  c.filter='blur(.5px)'
  br(c,u=>[hx+bob+(bx-hx-bob)*u,hy+(by-hy)*u-3*S(u*PI)],u=>2.6+.8*S(u*PI),ink(.88,20),1,0,16)
  bl(c,hx+bob+(bx-hx-bob)*.25,hy+(by-hy)*.25-1,4,3.4,ink(.5,40),1);bl(c,hx+bob+(bx-hx-bob)*.5,hy+(by-hy)*.5-2,4,3.4,ink(.5,40),2)
  bl(c,bx,by,5,3.5,ink(.9),3,-.8)
  for(let k=0;k<9;k++){
    const a=2.05+k*.13-sw*.22+C(t*T*2)*.12,l=17+k%3*3
    br(c,u=>[bx+C(a)*l*u-sw*3*u*u,by+S(a)*l*u*(1-lift/30)],u=>2.2*(1-u)+.4,ink(.78,18+k%2*20),1,0,8)
  }
  seal(c,208,36,15,13)
}
