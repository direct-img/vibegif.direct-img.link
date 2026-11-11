// ink wash tadpoles wiggling through water, dark round heads with quick dry-flick tails, one sprouting tiny legs, beside a swaying water weed
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
// each tadpole circles its own lazy loop: centre, radii, phase, direction, size, legs
const G=[[86,74,34,20,0,1,1,0],[156,152,32,22,.35,-1,1.3,1],[66,170,22,15,.6,1,.8,0],[190,64,18,13,.15,-1,.7,0],[120,216,24,9,.8,1,.9,0]]
export default(c,t)=>{
  // water weed: a few long tapered strands with sparse leaf flicks
  for(let k=0;k<3;k++){
    const s=sin(T*t+k*.9),x=226+k*8,
    f=Z([x,262],[x-16-k*5+4*s,212],[x-26+k*10+9*s,150+k*20])
    S(c,f,u=>5*(1-u)**.6+1,[.5,.34,.24][k],20,.8)
    for(let j=1+(k&1);j<3;j++){
      const u=.3+.25*j+.1*k,a=N(f,u,0),d=j+k&1?1:-1
      S(c,Z(a,[a[0]+9*d,a[1]-10],[a[0]+15*d+3*s,a[1]-24]),v=>6*P(v,.5),[.36,.5,.3][k],8,.7)
    }
  }
  G.forEach(([X,Y,p,q,o,d,z,l],k)=>{
    const a=T*(t+o)*d,x=X+p*cos(a),y=Y+q*sin(a)+4*sin(2*a),
    // heading follows the loop
    h=Math.atan2((q*cos(a)+8*cos(2*a))*d,-p*sin(a)*d),
    // tail: wave travels from the head out to the tip
    f=u=>{
      const s=5*z+u*34*z,v=u*7*z*sin(T*(.75*u-3*t-o))
      return[x-cos(h)*s+sin(h)*v,y-sin(h)*s-cos(h)*v]
    }
    S(c,f,u=>9*z*(1-u)**1.5+.8,.62,14,.5)
    // head: a wet dab, darker in the middle
    W(c,x,y,9*z,7*z,h,.62,1.2)
    W(c,x+cos(h)*z,y+sin(h)*z,6*z,4.6*z,h,.9,.8)
    if(l)for(const m of[-1,1]){
      // tiny hind legs kicking
      const b=[x-cos(h)*7*z-sin(h)*4*m,y-sin(h)*7*z+cos(h)*4*m],g=.5+.5*sin(T*3*t),
      e=[b[0]-cos(h)*(5+3*g)-sin(h)*4*m,b[1]-sin(h)*(5+3*g)+cos(h)*4*m]
      S(c,Z(b,[b[0]-sin(h)*5*m,b[1]+cos(h)*5*m],e),u=>3*(1-u*.6),.85,6,.2)
    }
  })
  // a ripple ring or two on the surface
  for(let k=0;k<2;k++){
    const p=(t+k/2)%1,x=[48,150][k],y=[122,104][k]
    S(c,E(x,y,8+16*p,3+6*p,.3+k,3.6+k),u=>2.4*P(u,.5),.36*sin(PI*p),14,.5)
  }
  fade(c);snap(c)
}
