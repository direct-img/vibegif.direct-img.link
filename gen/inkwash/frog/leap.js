// ink wash frog leaping from one lily pad to the next as the pads drift by, hind legs stretching out behind, with a splash and spreading ripples
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
export const frames=32,delay=65,dither=true
const sm=x=>x<0?0:x>1?1:x*x*(3-2*x),bp=x=>x<0||x>1?0:sin(PI*x),lp=(a,b,k)=>[a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k],Y=192
export default(c,t)=>{
  // the water slides left one pad per loop, the frog hops forward to keep its place
  const sx=X=>X-100*t,u=(t-.42)/.36,fl=u>0&&u<1,
  dip=k=>3.5*(k?bp((t-.78)/.16):bp((t-.4)/.14))
  // ripples from the push-off and the landing, drifting with the water
  for(const[t0,X,n]of[[.42,180,2],[.78,280,3]])for(let j=0;j<n;j++){
    const a=(t-t0-j*.07+1)%1,x=sx(X)-(t<t0+j*.07?100:0)
    if(a<.5)for(const[p,q]of[[.08,.46],[.58,.94],[1.1,1.4]])
      S(c,E(x,Y+4,40+70*a+j*3,11+18*a,p*PI,q*PI),v=>3.2*P(v,.5),.55*(1-a/.5)**.8*sm(a/.04),14,.5)
  }
  // lily pads: a wet wash, pooled dark along the near edge, a notch cut out, a few veins
  for(let k=-2;k<2;k++){
    const x=sx(180+100*k),y=Y+(k==0?dip(0):k==1?dip(1):0)
    W(c,x,y,37,10.5,-.03,.42,1.6)
    S(c,E(x,y+1,35,9,.06*PI,.9*PI),v=>6*P(v,.45),.6,16,1)
    cut(c,()=>{c.fillStyle='#000';c.beginPath();c.moveTo(x-6,y+1);c.lineTo(x-44,y-7);c.lineTo(x-42,y+2);c.fill()})
    for(let j=0;j<4;j++){
      const a=[-.5,.35,1.3,2.5][j]
      S(c,Z([x-6,y+1],[x-6+cos(a)*16,y+1+sin(a)*5],[x-6+cos(a)*(30+8*cos(a)),y+1+sin(a)*8]),v=>2*P(v,.4),.5,8,.3)
    }
  }
  // water marks between the pads
  for(let k=-2;k<2;k++){
    const x=sx(232+100*k)
    S(c,Z([x-18,Y+20],[x,Y+17],[x+22,Y+21]),v=>3*P(v,.45),.3,10,.6)
  }
  // frog pose: e = hind legs stretched, a = forelegs (-1 tucked, 0 planted, 1 reaching), r = tilt
  const cr=bp((t-.3)/.14),ld=bp((t-.78)/.16),
  e=fl?sm(u/.16)*(1-.75*sm((u-.55)/.45)):0,
  a=fl?-sm(u/.2)+2*sm((u-.5)/.4):0,
  r=fl?-.8+1.45*sm(u)**1.2:-.12*cr+.1*ld,
  X=fl?180+100*u:t<.5?180:280,
  y=Y-20-(fl?4*62*u*(1-u):0)+4*cr+3*ld+(fl?0:dip(t<.5?0:1)),
  th=.5+.5*sin(T*4*t)
  c.save();c.translate(sx(X),y);c.rotate(r);c.scale(1.45,1.45)
  // far hind leg and foreleg, paler
  const leg=(o,al)=>{
    const H=[-10+o,2],K=lp([4+o,-5],[-26+o,5],e),A=lp([-13+o,9],[-44+o,8],e),F=lp([2+o,12],[-60+o,11],e)
    S(c,Z(H,lp(H,K,.5),K),v=>11-3*v,al,8,.6)
    S(c,Z(K,lp(K,A,.5),A),v=>7-2.5*v,al,8,.5)
    S(c,Z(A,lp(A,F,.5),F),v=>4.5*(1-v)**.6+1,al,8,.3)
    dot(c,...K,3.2,al+.1);dot(c,...A,2.4,al+.1)
    for(let j=-1;j<2;j++)S(c,Z(F,[F[0]+3*(e>.5?-1:1),F[1]+j*2],[F[0]+(e>.5?-7:6),F[1]+j*3.5-1+e]),v=>1.8*(1-v*.7),al,5,0)
  },
  arm=(o,al)=>{
    const s=[9+o,1],el=a<0?lp([12+o,9],[5+o,9],-a):lp([12+o,9],[18+o,6],a),h=a<0?lp([16+o,14],[-3+o,13],-a):lp([16+o,14],[27+o,11],a)
    S(c,Z(s,lp(s,el,.5),el),v=>6-1.5*v,al,6,.4)
    S(c,Z(el,lp(el,h,.5),h),v=>4*(1-v)**.5+1,al,6,.3)
    for(let j=-1;j<2;j++)S(c,Z(h,[h[0]+3,h[1]+j],[h[0]+6,h[1]+j*3+1]),v=>1.6*(1-v*.7),al,5,0)
  }
  leg(4,.45);arm(3,.45)
  // body: wet wash, dark loaded back, pale throat that pulses
  const bd=Z([-17,5],[-2,-13],[19,-8])
  W(c,10,3,8,4+2*th,-.2,.3,1)
  S(c,bd,v=>22*P(v*.8+.12,.7),.56,20,1.2)
  S(c,v=>N(bd,v,-4),v=>11*P(v*.9+.05,.6),.82,20,1)
  cut(c,()=>W(c,6,3,9,3.5,-.25,'rgba(0,0,0,.45)',2))
  for(let j=0;j<3;j++)W(c,-9+j*7,-6-j*2.5+j*j*.5,2.4,1.5,-.4,.93,.5)
  // eye bump and mouth line
  W(c,12,-13,4.6,4,0,.9,.5)
  cut(c,()=>S(c,E(12,-13,3,2.6,1.2*PI,2.1*PI),v=>1.3*P(v,.5),'#000',8,0))
  S(c,Z([21,-5],[14,-2],[7,-3]),v=>1.6*P(v,.5),.9,8,0)
  leg(0,.8);arm(0,.8)
  c.restore()
  // drops thrown up by the landing
  for(let j=0;j<5;j++){
    const d=(t-.78)/.2,g=-1.2-j*.35
    if(d>0&&d<1)W(c,sx(280)+cos(g)*(26+34*d)+10,Y-4+sin(g)*46*d+50*d*d,2.2-d,3-d*1.6,g,.8*(1-d),.3)
  }
  fade(c);snap(c)
}
