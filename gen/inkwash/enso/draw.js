// ink wash zen enso circle painted in a single brush stroke with a dry-brush tail on rice paper, held, then fading back to blank paper
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
export const frames=30,delay=[...Array(30)].map((_,i)=>i==16?1100:i>27?160:70)
export default(c,t,i)=>{
  paper(c,11);c.globalCompositeOperation='multiply'
  const p=ss(0,15,i)**.9*1.02,o=ss(18,27,i),
  f=u=>{const a=PI*.7+u*1.93*PI,r=70+4*S(u*5+2)-u*7;return[126+C(a)*r,124+S(a)*r*.96]},
  w=u=>27*min(1,(u/.03)**.5)*(1-.5*u)*min(1,(max(0,p-u)/.03)**.5),
  tp=e=>u=>w(u)*(1-(u/e)**4),
  L=(e,k,n)=>br(c,f,tp(e),k,min(p,e),0,n)
  c.globalAlpha=1-o
  if(p>0){
    c.filter=`blur(${4+o*5}px)`;br(c,f,u=>tp(.6)(u)*1.45,ink(.14),min(p,.6))
    c.filter=`blur(${.7+o*3}px)`
    L(.85,ink(.4,70),50);L(.62,ink(.7,30),70);L(.42,ink(.92,14),70)
    c.filter=`blur(${.3+o*2}px)`
    dry(c,f,w,.85,5,.25,1,p,14,80)
    // splatter where the loaded brush first lands
    ;[[-13,9,2.2],[-20,2,1.3],[-8,17,1.5],[-24,14,.9]].forEach(([x,y,r],k)=>
      p>.03*k&&bl(c,f(0)[0]+x,f(0)[1]+y,r,r*.8,ink(.8),k))
  }
  c.globalAlpha=1;seal(c,204,206,16,5)
}
