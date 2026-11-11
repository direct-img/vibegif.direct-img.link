// ink wash pufferfish suddenly inflating into a spiky ball, then slowly deflating and swimming on, spines as tiny dry flicks
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
export const frames=30,delay=70,dither=true
const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
export default(c,t)=>{
  // inflation: quick puff with a little overshoot, hold, slow sigh back down
  const q=t<.3?sm((t-.12)/.1)*(1+.18*sin(PI*min(1,max(0,(t-.12)/.18)))):1-sm((t-.42)/.46),
  x=120+5*sin(T*t),y=134+4*sin(T*t+1)-6*q,p=44+12*q,r=25+27*q,wg=sin(T*3*t)
  // tail: narrow stalk and a fanned dry-brush fin, wagging
  const tf=Z([x+p*.8,y],[x+p+12,y+2],[x+p+30,y+9*wg])
  S(c,tf,u=>(16-8*q)*(1-u)+5,.55,10,.8)
  for(let j=-2;j<3;j++){
    const a=[x+p+20,y+5*wg],b=[x+p+44-abs(j)*3,y+12*wg+j*8]
    S(c,Z(a,[(a[0]+b[0])/2,(a[1]+b[1])/2+j],b),u=>5*P(u*.9,.4),.6-.07*abs(j),8,.4)
  }
  // belly: open, a faint wash and a broken contour
  S(c,E(x,y,p*.86,r*.84,.15*PI,.9*PI),u=>r*.3*P(u,.6),.13,18,3)
  S(c,E(x,y,p,r,.1*PI,.52*PI),u=>4.5*P(u,.5),.55,18,.6)
  S(c,E(x,y,p,r,.62*PI,.97*PI),u=>4*P(u,.45),.5,18,.6)
  // back: wet dark wash pooling along the top, with blotches
  S(c,E(x,y+r*.1,p*.86,r*.8,1.02*PI,1.98*PI),u=>r*.75*P(u,.7)+3,.5,24,1.8)
  S(c,E(x,y,p*.97,r*.97,1.08*PI,1.9*PI),u=>7*P(u,.6),.72,24,1)
  for(let k=0;k<6;k++){
    const a=PI*(1.22+.115*k),d=.55+.25*R(k+3)
    W(c,x+cos(a)*p*d,y+sin(a)*r*d,3+2.5*R(k),2+2*R(k+9),a,.85,.8)
  }
  // dorsal and side fins fluttering
  S(c,Z([x+p*.55,y-r*.75],[x+p*.8,y-r-6],[x+p*.95+3*wg,y-r*.9-8]),u=>8*P(u,.5),.5,8,.6)
  S(c,Z([x+p*.2,y+r*.12],[x+p*.5,y+r*.2+6*wg],[x+p*.62,y+r*.45+9*wg]),u=>9*P(u,.5),.6,8,.6)
  // spines: flat when calm, bristling when puffed
  for(let k=0;k<26;k++){
    const a=T*(k+.5*R(k))/26,l=2+10*q*(.5+.8*R(k+5)),e=1+.03*l,
    g=[x+cos(a)*p*.96,y+sin(a)*r*.96],h=a+.5*(1-q)*(cos(a)>0?-1:1)*Math.sign(sin(a)||1)
    if(abs(a-PI)<.5)continue
    S(c,Z(g,[g[0]+cos(h+.3)*l*.5,g[1]+sin(h+.3)*l*.5],[x+cos(a)*p*e+cos(h)*l,y+sin(a)*r*e+sin(h)*l]),u=>2.6*(1-u)**.8,.85,5,0)
  }
  // startled eye and a small beak
  const ex=x-p*.56,ey=y-r*.22,er=5+2.2*q
  cut(c,()=>W(c,ex,ey,er,er,0,'#000',.8))
  S(c,E(ex,ey,er,er,.9*PI,2.2*PI),u=>1.8*P(u,.5),.7,10,.2)
  W(c,ex-.6,ey+.3,er*.5,er*.56,0,.93,.4)
  S(c,E(x-p-1,y+r*.1,4,3.4,.5*PI,2.3*PI),u=>2.6*P(u,.5),.85,10,.2)
  // bubbles let go with the puff
  for(let k=0;k<3;k++){
    const b=(t-.14-k*.07+1)%1
    if(b>.5)continue
    c.strokeStyle=I(.6*sin(PI*b*2));c.lineWidth=1.3
    c.beginPath();c.arc(x-p-10-k*5+4*sin(T*b*2+k),y-10-90*b,2+3*b+k*.6,.5,5.4);c.stroke()
  }
  fade(c);snap(c)
}
