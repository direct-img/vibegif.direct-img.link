// ink wash lizard basking on a warm stone, red throat pulsing, with a quick turn of the head and a flick of its long tail
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
export const frames=36,delay=70,dither=true
const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
export default(c,t)=>{
  // throat pulse, head turn (snap up, hold, ease back), tail flick
  const hd=sm((t-.36)/.05)-sm((t-.6)/.1),x=(t-.7)/.24,fk=x>0&&x<1?sin(T*2*x)*(1-x)**1.5:0,
  th=(.5+.5*sin(T*5*t))*(1-.7*hd),br=sin(T*t)
  // stone: broken dry-wet contour strokes, a wash on the shaded side, the lit top left open
  S(c,Z([120,222],[190,214],[222,176]),u=>46*P(u,.6),.24,20,3)
  S(c,Z([52,214],[70,190],[96,176]),u=>26*P(u,.5),.16,14,3)
  const r1=Z([36,216],[40,158],[98,143]),r2=Z([204,186],[230,194],[226,218])
  S(c,r1,u=>9*P(u*.9+.04,.4),.6,20,.8)
  D(c,u=>r1(.3+.7*u),()=>12,.5,5,10,3,.4)
  S(c,r2,u=>10*P(u*.9+.06,.55),.6,14,.9)
  D(c,Z([186,160],[204,176],[204,206]),()=>12,.4,5,10,8,.5)
  S(c,Z([108,160],[122,186],[110,212]),u=>5*P(u,.4),.4,12,.6)
  D(c,Z([150,168],[168,190],[160,214]),()=>9,.4,4,10,6,.4)
  // ground: a broken line, moss dots and a few grass flicks
  S(c,Z([22,224],[80,230],[128,226]),u=>6*P(u,.4),.7,14,.8)
  S(c,Z([150,228],[196,232],[240,224]),u=>5*P(u,.5),.5,14,.8)
  for(const[k,x,y]of[[0,44,196],[1,52,184],[2,62,174],[3,220,204],[4,229,211],[5,212,213],[6,120,222]])W(c,x,y,2.6+R(k)*1.6,1.8+R(k+4),R(k)*3,.86,.4)
  for(let k=0;k<4;k++)S(c,Z([16+k*6,228],[12+k*7,214-k*2],[6+k*9+2*br,200+k*3]),u=>2.6*(1-u)+.4,.55,6,.2)
  // tail: draped down the stone, the tip whipping
  const tl=u=>{const[p,q]=Z([150,134],[206,130],[214,180])(u);return[p+fk*34*u**2.2-10*u**3,q-fk*8*u*u+4*u**3]}
  S(c,tl,u=>13*(1-u)**.8+1,.74,30,.6)
  for(let k=0;k<5;k++){const u=.2+k*.14;S(c,Z(N(tl,u,-5+4*u),tl(u),N(tl,u,5-4*u)),v=>4*P(v,.5),.93,5,.3)}
  D(c,u=>tl(.72+.28*u),u=>5*(1-u),.7,3,8,2,.3)
  // far legs, paler
  const leg=(s,k,f,al,d)=>{
    S(c,Z(s,[(s[0]+k[0])/2,(s[1]+k[1])/2-2],k),u=>8-2*u,al,8,.5)
    S(c,Z(k,[(k[0]+f[0])/2+d*2,(k[1]+f[1])/2],f),u=>5.5-2*u,al,8,.4)
    dot(c,...k,2.8,al+.12)
    for(let j=-2;j<2;j++)S(c,Z(f,[f[0]+d*5,f[1]+j*2],[f[0]+d*(11-abs(j)),f[1]+j*4+3]),u=>2*(1-u*.7),al,5,0)
  }
  leg([98,130],[88,120],[78,137],.45,-1);leg([146,134],[158,121],[166,140],.45,1)
  // body: one loaded stroke, dark along the spine, breathing
  const bd=Z([90,124],[122,118+br*.6],[156,136])
  S(c,bd,u=>(20+br)*P(u*.84+.1,.6),.6,24,1)
  S(c,u=>N(bd,u,-4),u=>9*P(u,.55),.84,24,.8)
  D(c,u=>N(bd,.1+.8*u,2),()=>9,.6,4,10,5,.5)
  leg([104,134],[112,121],[96,146],.8,-1);leg([150,138],[140,124],[158,152],.8,1)
  // neck and head swing about the shoulders
  c.save();c.translate(94,124);c.rotate(.42*hd+.03*br);c.translate(-94,-124)
  S(c,Z([98,126],[84,118],[72,108]),u=>15-4*u,.66,10,.8)
  // throat fan: the one touch of colour
  W(c,78,121+2.5*th,5+3.5*th,4+4.5*th,-.6,'rgba(196,74,44,.6)',1.2)
  S(c,E(78,121+2.5*th,6+3.5*th,5+4.5*th,.25*PI,1.1*PI),u=>1.8*P(u,.5),.6,10,.3)
  // head: a wedge pressed in at the brow and tapered to the snout
  const h=Z([78,112],[62,100],[44,103])
  S(c,h,u=>15*(1-u)**.7*min(1,(u+.25)/.4)+3,.7,14,.7)
  S(c,u=>N(h,u,4),u=>6*P(u*.9,.5),.9,12,.5)
  S(c,Z([47,106],[58,108],[70,110]),u=>1.6*P(u,.5),.93,8,0)
  cut(c,()=>dot(c,63,100.5,3,'#000'))
  dot(c,63,100.5,1.8,.93)
  c.restore()
  fade(c);snap(c)
}
