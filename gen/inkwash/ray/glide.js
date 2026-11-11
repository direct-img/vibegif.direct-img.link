// ink wash manta ray gliding seen from above with slow wingbeats, wing tips curling, pale shoulder markings and a long thin tail
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
export const frames=24,delay=85,dither=true
export default(c,t)=>{
  const q=sin(T*t),v=cos(T*t)
  // faint water strokes slipping past, a few bubbles
  for(let k=0;k<3;k++){
    const p=(t+k/3)%1,x=[52,206,150][k]+46*p,y=[70,96,226][k]+34*p
    S(c,Z([x-30,y-22],[x-10,y-2],[x+26,y+16]),u=>3*P(u,.4),.26*sin(PI*p),14,.8)
    c.strokeStyle=I(.5*sin(PI*p));c.lineWidth=1.2
    c.beginPath();c.arc([214,40,196][k]+3*sin(T*p+k),[200,190,60][k]-30*p,2+1.5*p,.4,5.3);c.stroke()
  }
  c.save();c.translate(122+3*v,126-5*q);c.rotate(-.62)
  // thin whip tail with a slow wave
  S(c,u=>[8*u*sin(T*(.8*u-t)),30+u*86],u=>3.4*(1-u)**.7+.6,.7,20,.3)
  // one broad diamond: both wings flex through the beat, tips lagging behind
  const s=1-.26*q*q,ty=4-17*sin(T*(t-.12)),ly=-44-9*sin(T*(t-.05)),
  le=m=>Z([m*13,-36],[m*66*s,ly],[m*102*s,ty]),te=m=>Z([m*102*s,ty],[m*44*s,24+7*q],[0,42])
  c.save();c.filter='blur(1.4px)';c.fillStyle=I(.46);c.beginPath()
  for(let k=0;k<=16;k++)c.lineTo(...le(1)(k/16))
  for(let k=0;k<=16;k++)c.lineTo(...te(1)(k/16))
  for(let k=16;k>=0;k--)c.lineTo(...te(-1)(k/16))
  for(let k=16;k>=0;k--)c.lineTo(...le(-1)(k/16))
  c.fill();c.restore()
  // darker wash down the back, ink pooling toward the leading edges
  S(c,Z([0,-34],[0,0],[0,38]),u=>40*P(u*.9+.05,.6),.24,16,5)
  for(const m of[-1,1]){
    S(c,u=>N(le(m),u,m*9),u=>22*P(u*.9+.06,.5),.34,20,3)
    S(c,u=>N(le(m),u,m*3.5),u=>8*P(u*.94+.04,.45),.8,20,.9)
    // wingtip sweeping back into a curl
    const x=m*102*s
    S(c,Z([x-m*8,ty-1],[x+m*3,ty+2-9*q],[x-m*10*q*q,ty-15*q+6]),u=>6*P(u*.9+.08,.5),q>0?.82:.5,8,.5)
    // pale shoulder marks cut out of the back
    cut(c,()=>{
      S(c,Z([m*9,-21],[m*24*s,-27],[m*40*s,-15]),u=>12*P(u,.5),'rgba(0,0,0,.85)',10,1.6)
      S(c,Z([m*8,2],[m*16*s,8],[m*22*s,20]),u=>5*P(u,.5),'rgba(0,0,0,.5)',8,1.4)
    })
    // short cephalic fins curving in at the front
    S(c,Z([m*12,-33],[m*17,-45],[m*(9+2*v),-52]),u=>10*P(u*.8+.18,.7),.82,10,.7)
  }
  // wide mouth between the fins
  S(c,Z([-10,-36],[0,-39],[10,-36]),u=>4*P(u,.5),.8,8,.6)
  c.restore()
  fade(c);snap(c)
}
