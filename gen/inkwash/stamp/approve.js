// ink wash stone seal stamp pressing down beside a bamboo painting on rice paper and lifting to reveal a crisp vermilion red seal impression with a check mark, approved and done, then the impression fades
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
// keep the half-transparent deckle pixels identical on every frame (small webp)
grab=c=>c.getImageData(0,0,256,256).data,
keep=(c,pd)=>{
  const m=c.getImageData(0,0,256,256),e=m.data
  for(let k=0;k<e.length;k+=4)if(pd[k+3]<255)for(let j=0;j<4;j++)e[k+j]=pd[k+j]
  c.putImageData(m,0,0)
}
export const frames=28,delay=[...Array(28)].map((_,i)=>i==17?900:i>26?250:70)
export default(c,t,i)=>{
  paper(c,41);const pd=grab(c);c.globalCompositeOperation='multiply'
  const o=ss(19,27,i),dn=cl(i/6)**2,up=cl((i-9)/5)**1.6,dy=-185*(1-dn)-200*up,dx=30*up,sq=[4,2.5,1][i-6]||0,
  X=146,Y=160,z=62,r=rn(12)
  // bamboo already painted on the sheet
  c.filter='blur(.7px)'
  const st=u=>[50+u*14+8*S(u*PI),250-u*240]
  ;[[0,.3],[.315,.62],[.635,1]].forEach(([a,e],k)=>{
    const w=u=>8.5-k+2.5*(2*(u-a)/(e-a)-1)**4
    br(c,st,w,ink(.45,50),e,a,16);br(c,st,u=>w(u)*.3,ink(.3,30),e,a,16);dry(c,st,w,.5,k+2,a,e,9,5,24)
    k&&br(c,u=>{const[x,y]=st(a-.008);return[x-7+u*14,y+1-S(u*PI)*2]},u=>3.4*S(u*PI)**.5,ink(.9,13),1,0,10)
  })
  ;[[62,94,.42,58],[62,94,.9,50],[60,92,-.05,40],[61,172,.7,46],[61,172,1.2,34],[58,172,2.55,36],[58,94,2.75,30]].forEach(([x,y,a,l])=>
    br(c,u=>[x+C(a+u*.25)*l*u,y+S(a+u*.25)*l*u],u=>(l/5.5)*S(u**.6*PI)**1.4+.5,ink(.9,13),1,0,18))
  // the impression
  const al=(i>6)*(1-o)
  if(al){
    c.save();c.globalCompositeOperation='source-over';c.filter=`blur(${.4+o*1.5}px)`;c.globalAlpha=al
    const j=()=>r()*2.4-1.2,x=X-z/2,y=Y-z/2
    c.fillStyle='#b8322a';c.beginPath()
    for(let k=0;k<48;k++){
      const e=k/12|0,f=k%12/12*z
      c.lineTo(...[[x+f+j(),y+j()],[x+z+j(),y+f+j()],[x+z-f+j(),y+z+j()],[x+j(),y+z-f+j()]][e])
    }
    c.fill()
    // carved marks: inner frame, check mark, chips
    c.strokeStyle=c.fillStyle='#f3ecdc';c.lineWidth=2.2;c.lineJoin='miter'
    c.strokeRect(x+6.5,y+6.5,z-13,z-13)
    br(c,u=>u<.36?[x+16+u/.36*11,y+31+u/.36*13]:[x+27+(u-.36)/.64*21,y+44-(u-.36)/.64*28-4*S((u-.36)/.64*PI)],
      u=>3.5+5.5*S(u**.8*PI)**.7,'#f3ecdc',1,0,30)
    for(let k=0;k<26;k++)c.fillRect(x+r()*z,y+r()*z,.6+r()*1.6,.6+r()*1.2)
    c.restore()
  }
  // the carved stone seal
  if(up<1){
    const gp=1-dn+up,B=Y+z/2+dy,H=98-sq*2,W=z+2+sq*1.5,L=X-W/2+dx,M=L+W/2,U=B-H,
    gr=(a,v=0)=>`rgba(${92+v},${108+v},${94+v},${a})`,
    V=(x,y,X2,Y2,w,a=.9,b=1.5)=>br(c,u=>[x+(X2-x)*u+S(u*PI)*b,y+(Y2-y)*u],u=>w*(.35+S(u**.6*PI)),ink(a,13),1,0,14),
    col=()=>{c.beginPath();[[L,B],[L+3,U+3],[L+6,U],[L+W-6,U],[L+W-3,U+3],[L+W,B]].forEach(q=>c.lineTo(...q));c.fill()}
    // shadow tightening and darkening until contact
    c.filter=`blur(${2+6*min(1,gp)}px)`;bl(c,X+dx*.3+gp*8,Y+z/2+3,(z/2+3)*(1+gp*.9),5+gp*5,ink((.5-.36*min(1,gp))*min(1,i/2)*(1-up*up)),1)
    c.save();c.globalCompositeOperation='source-over';c.filter='none';c.fillStyle='#f3ecdc';col()
    c.beginPath();c.ellipse(M,U-9,25,13,0,0,T);c.fill();c.restore()
    // graded grey-green body, darker down one side
    c.filter='blur(1.2px)'
    const G=c.createLinearGradient(L,0,L+W,0)
    ;[[0,.62,0],[.25,.36,20],[.6,.55,0],[1,.88,-35]].forEach(([o,a,v])=>G.addColorStop(o,gr(a,v)))
    c.fillStyle=G;col()
    bl(c,L+W*.35,U+H*.4,13,30,gr(.2,-20),3,.15,.3);bl(c,L+W*.7,U+H*.72,12,18,gr(.25,-30),6,-.2,.3)
    // red seal paste on the base
    c.fillStyle='rgba(184,50,42,.9)';c.fillRect(L,B-8,W,8)
    bl(c,L+W*.3,B-9,12,3.5,'rgba(184,50,42,.6)',2,0,.4);bl(c,L+W*.78,B-9,9,3,'rgba(184,50,42,.6)',4,0,.4)
    // stone grain
    c.filter='blur(.9px)'
    dry(c,u=>[L+W*.22+u*2,U+8+u*(H-22)],u=>12,.45,4,0,1,9,6,14,40)
    dry(c,u=>[L+W*.8-u*2,U+6+u*(H-20)],u=>12,.6,9,0,1,9,6,14)
    c.filter='blur(.6px)'
    V(L+3,U+2,L,B-9,2.6,.8);V(L+W-3,U,L+W,B-9,5,.92);V(L-1,B-8,L+W+1,B-8,1.6,.5,0)
    V(L+1,U,L+W-1,U,3.2,.9,0)
    // crouching lion carved on top
    c.filter='blur(1.2px)'
    bl(c,M+3,U-10,20,10,gr(.9,-25),5,0,.12);bl(c,M+13,U-11,11,10.5,gr(.55,-40),2,0,.15);bl(c,M-14,U-18,9.5,9,gr(.85,-20),8,0,.15);bl(c,M-2,U-6,16,5,gr(.5,-50),3,0,.2)
    c.filter='blur(.6px)'
    br(c,u=>[M-21+u*46,U-22-9*S(u*PI)**.6+u*13-6*u*u*2],u=>.8+3*S(u**.8*PI),ink(.9,13),1,0,20)
    br(c,u=>[M-14+C(2+u*2.6)*10,U-17+S(2+u*2.6)*9.5],u=>.6+2.2*S(u*PI),ink(.88,13),1,0,14)
    br(c,u=>[M+22+C(1.5-u*4.5)*(6-u*3),U-17-u*5+S(1.5-u*4.5)*(6-u*3)],u=>3*(1-u)+.6,ink(.9,13),1,0,14)
    ;[[-8,-26,2.4,3.6,.5],[-17,-19,1.3,1.3,0],[-23,-14,2,1.4,0],[-15,-4,5.5,2.4,0],[11,-4,6.5,2.4,0]].forEach(([x,y,rx,ry,ro],k)=>
      bl(c,M+x,U+y,rx,ry,ink(.9,13),k,ro,.2))
    for(let k=0;k<3;k++)br(c,u=>[M-6+k*2+C(1+u*2.4)*4,U-19+k*4+S(1+u*2.4)*4],u=>.5+1.5*S(u*PI),ink(.8,13),1,0,8)
  }
  keep(c,pd)
}
