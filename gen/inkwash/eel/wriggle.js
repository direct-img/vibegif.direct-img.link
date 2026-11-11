// ink wash eel wriggling through water in a long S, one swelling and tapering brushstroke with a wave travelling down to its dry-brush tail
const{sin,cos,PI,hypot,min,max,abs,floor,round}=Math,T=2*PI,
I=a=>`rgba(20,18,16,${a})`,
R=n=>(n=sin(n*91.7+7.3)*43758.5453)-floor(n),
// point on curve f at u, pushed r px along the normal
N=(f,u,r)=>{const[x,y]=f(u),[p,q]=f(u+.01),[g,h]=f(u-.01),l=hypot(p-g,q-h)||1;return[x+(h-q)/l*r,y+(p-g)/l*r]},
// loaded brush stroke: centerline f(u), width w(u), ink a (alpha or colour), soft edge b
S=(c,f,w,a,n=28,b=.6)=>{
  const P=[],Q=[]
  for(let k=0;k<=n;k++){const u=k/n,r=w(u)/2;P.push(N(f,u,r));Q.unshift(N(f,u,-r))}
  c.save();c.filter=b?`blur(${b}px)`:'none';c.fillStyle=a>0?I(a):a;c.beginPath()
  for(const[x,y]of[...P,...Q])c.lineTo(x,y)
  c.fill();c.restore()
},
// dry brush: m ragged hairlines across the width, each starting late, ending early or skipping a beat
D=(c,f,w,a,m=5,n=14,s=1,g=.3)=>{
  c.save();c.strokeStyle=I(a)
  for(let j=0;j<m;j++){
    const o=m>1?j/(m-1)-.5:0,u0=g*R(s+j*13),u1=1-g*R(s+j*7.7),q=u0+(u1-u0)*R(s+j*3.3)
    c.lineWidth=.7+1.2*R(s+j);c.beginPath()
    for(let k=0;k<=n;k++){
      const u=u0+(u1-u0)*k/n,p=N(f,u,w(u)*o)
      abs(u-q)<g*.2?c.moveTo(...p):c.lineTo(...p)
    }
    c.stroke()
  }
  c.restore()
},
// curves: quadratic bezier, ellipse arc
Z=(a,b,d)=>u=>{const v=1-u;return[v*v*a[0]+2*v*u*b[0]+u*u*d[0],v*v*a[1]+2*v*u*b[1]+u*u*d[1]]},
E=(x,y,p,q,a,b)=>u=>[x+p*cos(a+(b-a)*u),y+q*sin(a+(b-a)*u)],
// pressure: press in, swell, taper to a point
P=(u,e=.6)=>sin(PI*min(1,max(0,u))**e),
// wet wash blob
W=(c,x,y,p,q,r,a,b=3)=>{c.save();c.filter=`blur(${b}px)`;c.fillStyle=a>0?I(a):a;c.beginPath();c.ellipse(x,y,p,q,r,0,T);c.fill();c.restore()},
dot=(c,x,y,r,a)=>{c.fillStyle=a>0?I(a):a;c.beginPath();c.arc(x,y,r,0,T);c.fill()},
cut=(c,g)=>{c.save();c.globalCompositeOperation='destination-out';g();c.restore()},
fade=(c,w=16)=>{
  c.save();c.globalCompositeOperation='destination-out'
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
},
snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=round(d[k+j]/s)*s;d[k+3]=min(255,round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}
export const frames=24,delay=70,dither=true
export default(c,t)=>{
  const H=[50,196],e=[.77,-.64],L=228,
  // body centerline: u=0 snout, u=1 tail tip, the wave runs head to tail
  f=u=>{
    const s=u*L,o=(5+25*u**.8)*sin(T*(1.45*u-t))+6*sin(T*t)*(1-u)
    return[H[0]+e[0]*s-e[1]*o,H[1]+e[1]*s+e[0]*o]
  },
  w=u=>(5+15*(1-u)**.8)*min(1,(u/.035)**.5)*min(1,((1-u)/.2)**.8)
  // faint current strokes sliding past
  for(let k=0;k<3;k++){
    const p=(t+k/3)%1,x=[66,150,212][k]-50*p,y=[62,222,150][k]+42*p
    S(c,Z([x+30,y-30],[x+16,y-4],[x-24,y+18]),u=>3.2*P(u,.4),.3*sin(PI*p),14,.8)
  }
  // dorsal and tail fin as a pale wash trailing the body
  S(c,u=>N(f,.18+.8*u,-5),u=>(16+16*u)*P(u,.45),.3,30,1.6)
  // side-loaded stroke: pale wet belly, dark pooled back
  S(c,f,w,.5,60,.9)
  S(c,u=>N(f,u*.86,-w(u*.86)*.2),u=>w(u*.86)*.62*min(1,(1-u)/.3+.25),.72,54,.7)
  // the brush runs dry into a split tail
  D(c,u=>f(.7+.3*u),u=>13*(1-u*.75),.75,7,16,3,.35)
  // head: gill fin, pale eye with a dark pupil
  const g=N(f,.1,6),h=N(f,.18,20)
  S(c,Z(g,[(g[0]+h[0])/2+4,(g[1]+h[1])/2+5],h),u=>9*P(u,.45),.55,10)
  const y=N(f,.042,-3.4)
  cut(c,()=>dot(c,...y,3,'#000'))
  dot(c,...y,1.7,.93)
  // bubbles rising from the snout
  for(let k=0;k<2;k++){
    const p=(t+k/2)%1,[x,q]=f(0)
    c.strokeStyle=I(.55*sin(PI*p));c.lineWidth=1.3
    c.beginPath();c.arc(x-10+6*k+3*sin(T*p+k),q-10-34*p,2+2*p,.4,5.2);c.stroke()
  }
  fade(c);snap(c)
}
