// ink wash sea otter floating on its back, cracking a shell against a stone on its chest, gently rocking with ripples spreading around it
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
export const frames=24,delay=80,dither=true
export default(c,t)=>{
  const r=sin(T*t),q=abs(sin(PI*3*t))**.6,y0=142
  // ripples spreading out along the waterline
  for(let k=0;k<3;k++){
    const p=(t+k/3)%1,a=.42*sin(PI*p)
    S(c,E(128,y0+15,84+26*p,10+11*p,.1*PI,.46*PI),u=>3.4*P(u,.5),a,16,.6)
    S(c,E(128,y0+15,84+26*p,10+11*p,.6*PI,.92*PI),u=>3*P(u,.5),a*.8,16,.6)
  }
  c.save();c.translate(128,y0);c.rotate(.05*r);c.translate(-128,-y0+1.5*cos(T*t))
  // tail trailing in the water, running dry
  const tl=Z([186,y0+3],[212,y0+9],[234,y0-2+3*r])
  S(c,tl,u=>12*(1-u)**.7+1,.6,16,.8)
  D(c,u=>tl(.5+.5*u),u=>7*(1-u*.6),.7,4,8,4,.3)
  // body: one long sleek wash, belly up and open, pooled dark along the flank in the water
  const bd=Z([84,y0-3],[136,y0-13],[194,y0+3])
  S(c,bd,u=>34*P(u*.86+.1,.6),.3,30,1.2)
  S(c,u=>N(bd,.04+u*.96,9+4*P(u)),u=>13*P(u,.55),.76,30,1.2)
  S(c,u=>N(bd,.3+u*.5,-15*P(.3+u*.5*.86+.1,.6)),u=>2.6*P(u,.45),.5,14,.4)
  cut(c,()=>W(c,128,y0-12,30,6,-.08,'rgba(0,0,0,.6)',3))
  // hind feet poking up at the far end
  for(const m of[0,1]){
    const a=[176+m*9,y0-6],b=[181+m*11+2*r,y0-22+m*3-2*sin(T*t+m)]
    S(c,Z(a,[a[0]+3,a[1]-8],b),u=>6+2*u,.6,8,.5)
    S(c,Z(b,[b[0]+3,b[1]-4],[b[0]+6,b[1]-9]),u=>10*P(u*.8+.1,.8),.85,8,.4)
  }
  // head: round pale face, dark behind the crown, ear, nose, eye and whiskers
  W(c,68,y0-10,17,15.5,-.3,.3,1.2)
  S(c,E(69,y0-9,16.5,14.5,.2*PI,1.0*PI),u=>7*P(u,.5),.74,14,.9)
  S(c,E(68,y0-10,16.5,15,1.5*PI,1.95*PI),u=>2.4*P(u,.5),.5,10,.3)
  cut(c,()=>W(c,61,y0-18,9,6.5,-.5,'rgba(0,0,0,.8)',2))
  W(c,55.5,y0-24.5,3.8,3,-.5,.93,.4);dot(c,67,y0-17,2,.93)
  W(c,84,y0-16,3.6,2.8,.5,.85,.5)
  S(c,Z([57,y0-19],[61,y0-15],[66,y0-14]),u=>1.4*P(u,.5),.8,6,0)
  for(let j=0;j<3;j++)S(c,Z([54,y0-20],[45-j,y0-21+j*4],[36+j*2,y0-16+j*6]),u=>1.5*(1-u*.8),.6,6,0)
  // stone on the chest; a fan-ridged clam held in two small dark forepaws comes down on it
  const sx=122,sy=y0-36-6*q
  W(c,sx+1,y0-19,7,3.6,.1,.9,.6)
  for(const m of[-1,1]){
    const a=[sx+m*17,y0-16],b=[sx+m*12,sy+7]
    S(c,Z(a,[a[0]+m*3,(a[1]+b[1])/2],b),u=>8-2*u,.55,8,.6)
    W(c,b[0],b[1],4.6,4,m*.5,.92,.5)
  }
  W(c,sx,sy-1,12,8,0,.16,.8)
  S(c,E(sx,sy+7,14,15,1.14*PI,1.86*PI),u=>3*P(u,.5),.85,14,.3)
  for(let j=-2;j<3;j++)S(c,Z([sx,sy+8],[sx+j*3.4,sy+2],[sx+j*5.4,sy-6+abs(j)*2.2]),u=>2*P(u,.45),.8,6,0)
  S(c,Z([sx-10,sy+3],[sx,sy+10],[sx+10,sy+3]),u=>2.4*P(u,.5),.85,8,.3)
  // dry flicks at the crack
  if(q<.35)for(let j=0;j<4;j++){
    const a=PI*(1.08+.28*j),d=15+8*(1-q/.35)
    S(c,Z([sx+cos(a)*d,sy+sin(a)*d*.8],[sx+cos(a)*(d+3),sy+sin(a)*(d+3)*.8],[sx+cos(a)*(d+7),sy+sin(a)*(d+7)*.8]),u=>1.8*(1-u),.7*(1-q/.35),5,0)
  }
  c.restore()
  // water lapping at head and tail
  for(let k=0;k<2;k++){
    const x=[42,206][k]+5*sin(T*t+k*2)
    S(c,Z([x-28,y0+9],[x,y0+5+2*r],[x+32,y0+10]),u=>3.6*P(u,.45),.5,14,.7)
  }
  fade(c);snap(c)
}
