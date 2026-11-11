// ink wash white swan gliding on still water, neck in a graceful S, its open body shaped by a few contour strokes and the dark water washed around it, with a rippling reflection
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
const C=(a,b,d,e)=>u=>{const v=1-u,k=[v*v*v,3*v*v*u,3*v*u*u,u*u*u];return[0,1].map(j=>k[0]*a[j]+k[1]*b[j]+k[2]*d[j]+k[3]*e[j])}
export default(c,t)=>{
  const q=sin(T*t),v=cos(T*t),y0=152,b=1.2*q,
  // neck centerline: back and up from the breast, then over and forward to the head
  nk=C([96,y0-30+b],[128,y0-52+b],[122+2*v,y0-104+b],[92+3*v,y0-94+b+q]),
  body=()=>{
    c.beginPath();c.moveTo(72,y0+1)
    c.bezierCurveTo(56,y0-24,78,y0-40,102,y0-34);c.bezierCurveTo(124,y0-52,160,y0-56,182,y0-42)
    c.lineTo(214,y0-50);c.bezierCurveTo(212,y0-24,202,y0-6,190,y0+1);c.closePath()
  }
  // water and far bank: a few loose sweeps of wash, darkest at the waterline, breaking up toward the edges
  for(const[x,y,l,w,a,s]of[[150,y0-88,58,15,.24,1],[112,y0-60,74,20,.3,2],[150,y0-30,84,22,.36,3],[126,y0+3,104,20,.56,4],[150,y0+24,84,13,.36,5],[104,y0+40,62,9,.24,6]]){
    const f=Z([x-l,y+3],[x+5*sin(T*t+s),y-4],[x+l,y+1])
    S(c,f,u=>w*P(u,.42+.06*s),a,24,2)
  }
  // reflection: pale bands wobbling in the dark water
  cut(c,()=>{
    c.save();c.filter='blur(1.6px)';c.fillStyle='rgba(0,0,0,.85)'
    for(let j=0;j<7;j++){
      const w=[60,56,46,30,9,8,6][j],x=[134,136,140,146,112,116,110][j]+3.5*sin(T*(t+j*.17))
      c.beginPath();c.ellipse(x,y0+7+j*5.6,w,2.5,0,0,T);c.fill()
    }
    c.restore()
  })
  // body, neck and head are holes in the wash, not paint
  cut(c,()=>{
    c.save();c.translate(0,b);body();c.fillStyle='#000';c.fill();c.restore()
    S(c,nk,u=>15-6*u,'#000',24,.3)
    W(c,...nk(1.03),9.5,7.5,-.3,'#000',.3)
  })
  // contour: breast, back, raised wing feathers and tail, broken and tapered
  c.save();c.translate(0,b)
  S(c,C([92,y0-36],[64,y0-36],[58,y0-12],[76,y0+2]),u=>5*P(u,.5),.8,14,.4)
  S(c,Z([112,y0-42],[146,y0-56],[180,y0-43]),u=>4*P(u,.5),.6,12,.4)
  S(c,Z([176,y0-44],[196,y0-44],[215,y0-51]),u=>5*P(u,.4),.8,10,.4)
  S(c,Z([214,y0-49],[210,y0-22],[192,y0-2]),u=>4*P(u,.5),.5,12,.4)
  for(let j=0;j<3;j++)S(c,Z([112+j*22,y0-22-j*3],[144+j*20,y0-12-j*4],[176+j*13,y0-22-j*8]),u=>3.4*P(u,.45),.42,10,.5)
  S(c,Z([80,y0+2],[130,y0+7],[188,y0+2]),u=>7*P(u,.5),.82,14,.8)
  c.restore()
  // neck: a loaded line down the back of it, a faint one down the throat
  S(c,u=>N(nk,.04+u*.96,-7.5+3*u),u=>4.4*P(u*.9+.08,.5),.8,24,.4)
  S(c,u=>N(nk,.2+u*.7,7-3*u),u=>2.6*P(u,.5),.45,20,.4)
  // head: dark knob and eye, a touch of orange on the bill
  const[hx,hy]=nk(1)
  S(c,E(hx-2,hy+1,10,8,1.1*PI,1.9*PI),u=>3*P(u,.5),.7,10,.4)
  S(c,Z([hx-9,hy+3],[hx-18,hy+6],[hx-28,hy+13]),u=>7*(1-u)**.7+1,'rgba(200,98,44,.75)',8,.5)
  S(c,Z([hx-4,hy],[hx-9,hy-2],[hx-13,hy+3]),u=>6*P(u,.5),.93,8,.3)
  dot(c,hx-4,hy,1.7,.93)
  S(c,Z([hx-4,hy+8],[hx-14,hy+10],[hx-27,hy+14]),u=>1.7*P(u,.5),.75,8,.2)
  // wake arcs slipping back along the water
  for(let k=0;k<3;k++){
    const p=(t+k/3)%1,x=206+30*p
    S(c,Z([x-14,y0+8+p*4],[x+4,y0+11+p*10],[x+20+10*p,y0+10+p*16]),u=>3*P(u,.45),.6*sin(PI*p),10,.5)
    S(c,Z([56-10*p,y0+6+p*5],[40-12*p,y0+3],[26-14*p,y0+6+p*4]),u=>2.6*P(u,.45),.45*sin(PI*p),10,.5)
  }
  fade(c);snap(c)
}
