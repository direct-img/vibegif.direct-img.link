// ink wash ink stick grinding in slow circles on a dark inkstone on rice paper, ripples spreading across the pool of fresh black ink
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
const{PI,sin:S,cos:C,max,atan2}=Math,T=PI*2,
rn=s=>()=>(s=s*16807%2147483647)/2147483647,
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
export const frames=30,delay=70
export default(c,t)=>{
  paper(c,79);c.globalCompositeOperation='multiply'
  const a=t*T,X=96,Y=170,qx=X+24*C(a),qy=Y+7.5*S(a),ux=qx+34-22*C(a),uy=qy-92+3*S(a),
  pg=(P,k)=>{c.fillStyle=k;c.beginPath();P.forEach(q=>c.lineTo(...q));c.fill()},
  ln=(x,y,x2,y2,w,al=.9,v=13)=>br(c,u=>[x+(x2-x)*u,y+(y2-y)*u+S(u*PI)*1.2],u=>w*(.4+.6*S(u**.7*PI)),ink(al,v),1,0,14)
  // inkstone: a rounded natural stone, painted wet with a darker rim
  const O=(d=0,m=1)=>u=>{
    const g=u*T,q=m*(1+.045*(S(g*3+2)+.6*S(g*5+4.6)+.4*S(g*9+8.2)))
    return[124+C(g)*96*q,172+d+S(g)*39*q]
  },fo=(f,k)=>{c.fillStyle=k;c.beginPath();for(let j=0;j<60;j++)c.lineTo(...f(j/60));c.fill()}
  c.filter='blur(6px)';fo(O(12,1.04),ink(.24,40))
  c.filter='blur(1.6px)'
  fo(O(8),ink(.7,26));c.globalCompositeOperation='source-over';fo(O(),'#f3ecdc');c.globalCompositeOperation='multiply'
  fo(O(),ink(.36,62));fo(O(1,.9),ink(.14,50))
  bl(c,170,176,34,15,ink(.2,40),3,.1,.3);bl(c,186,160,18,9,ink(.16,40),5,-.3,.3)
  c.filter='blur(.5px)'
  // dry-brush grain across the grinding plain and along the rim
  c.filter='blur(.9px)'
  ;[[.93,.74,5],[.02,.8,4],[.08,.66,3]].forEach(([u0,m,w],k)=>dry(c,u=>O(0,m)(u0+u*.2),u=>w,.3,k+3,0,1,9,4,30,40))
  c.filter='blur(.5px)'
  dry(c,u=>O(5)(.1+u*.36),u=>8,.55,5,0,1,9,5,50)
  br(c,O(),u=>.6+3.6*S((u-.02)/.56*PI)**2*(u<.58)+2*S((u-.62)/.36*PI)**2*(u>.62),ink(.88,13),1,0,90)
  br(c,O(8),u=>3.4*S((u-.06)/.4*PI)**1.5,ink(.9,13),.46,.06,40)
  // deep wet well of ink at one end
  c.filter='blur(1.4px)'
  bl(c,X,Y,51,19.5,ink(.5,30),4,0,.08)
  c.filter='blur(1px)'
  bl(c,X,Y,47,17,ink(.9,13),1,0,.06);bl(c,X,Y+1,42,14.5,ink(.7,10),1,0,.06)
  c.save();c.beginPath();c.ellipse(X,Y,46.5,16.5,0,0,T);c.clip()
  // swirl dragged behind the stick
  br(c,u=>[X+24*C(a-1.9*u),Y+7.5*S(a-1.9*u)],u=>12*(1-u)**.7,ink(.7,10),1,0,20)
  c.globalCompositeOperation='source-over';c.filter='blur(.6px)'
  for(let k=0;k<3;k++){
    const p=(t*2+k/3)%1
    c.strokeStyle=`rgba(243,236,220,${.5*(1-p)**1.3})`;c.lineWidth=1.6-p
    c.beginPath();c.ellipse(qx,qy,6+p*36,2.2+p*13,0,0,T);c.stroke()
  }
  c.strokeStyle='rgba(243,236,220,.4)';c.lineWidth=1.4
  c.beginPath();c.ellipse(X,Y,40,13,0,3.5,4.6);c.stroke()
  c.restore()
  // ink stick
  const dx=ux-qx,dy=uy-qy,l=Math.hypot(dx,dy),nx=-dy/l*8,ny=dx/l*8
  c.save();c.globalCompositeOperation='source-over';c.filter='none'
  pg([[qx-nx,qy-ny],[qx+nx,qy+ny],[ux+nx,uy+ny],[ux-nx,uy-ny]],'#f3ecdc');c.restore()
  c.filter='blur(.7px)'
  pg([[qx-nx,qy-ny+2],[qx+nx,qy+ny+2],[ux+nx,uy+ny],[ux-nx,uy-ny]],ink(.93,14))
  c.save();c.globalCompositeOperation='source-over'
  pg([[qx-nx*.75+dx*.1,qy-ny*.75+dy*.1],[qx-nx*.45+dx*.1,qy-ny*.45+dy*.1],[ux-nx*.45,uy-ny*.45],[ux-nx*.75,uy-ny*.75]],'rgba(243,236,220,.2)')
  // gilt marks moulded into the stick
  c.fillStyle='rgba(196,160,96,.85)'
  for(let k=0;k<4;k++){
    const u=.5+k*.1,x=qx+dx*u+nx*.15,y=qy+dy*u+ny*.15
    c.beginPath();c.ellipse(x,y,3.2-k%2,1.6,k*1.3,0,T);c.fill()
  }
  c.restore()
  // wet ink where the stick meets the stone
  c.filter='blur(1.2px)';bl(c,qx,qy+2,11,4,ink(.9,10),1)
  // splashes
  c.filter='blur(.6px)'
  ;[[214,150,2],[222,162,1.2],[208,172,1],[30,118,1.4]].forEach(([x,y,r],k)=>bl(c,x,y,r,r*.8,ink(.8),k))
  seal(c,34,34,15,11)
}
