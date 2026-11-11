// ink wash silkworms munching a mulberry leaf, pale segmented bodies undulating, the leaf edge eaten away bite by bite and then growing back
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
export const frames=30,delay=80,dither=true
const sm=x=>x<0?0:x>1?1:x*x*(3-2*x),B=[66,60],a=[.69,.724],n=[-.724,.69],L=204,
hw=u=>58*sin(PI*u**.62)**.8*(1-.1*u)+2.5*sin(u*46)*sin(PI*u),
// point on the leaf: u along the midrib, s across (-1..1 edge to edge)
lf=(u,s)=>[B[0]+a[0]*L*u+n[0]*s*hw(u),B[1]+a[1]*L*u+n[1]*s*hw(u)]
export default(c,t)=>{
  const sw=1.5*sin(T*t)
  c.save();c.translate(B[0],B[1]);c.rotate(.012*sw);c.translate(-B[0],-B[1])
  // stem, then the leaf as one wet wash with a darker pooled side
  S(c,Z([18,26],[40,36],lf(.02,0)),u=>3+3*u,.7,10,.5)
  c.save();c.filter='blur(1.3px)';c.fillStyle=I(.34);c.beginPath()
  for(let k=0;k<=60;k++)c.lineTo(...lf(k/60,1))
  for(let k=60;k>=0;k--)c.lineTo(...lf(k/60,-1))
  c.fill();c.restore()
  S(c,u=>lf(.06+.84*u,.6),u=>hw(.06+.84*u)*.7*P(u,.7),.3,24,3)
  S(c,u=>lf(.25+.7*u,-.84),u=>12*P(u,.5),.3,16,2)
  S(c,u=>lf(.05+.3*u,-.3),u=>26*P(u,.6),.16,12,3)
  D(c,u=>lf(.2+.7*u,.5),u=>hw(.2+.7*u)*.8,.3,6,12,4,.5)
  // veins: midrib, two from the base, a few uneven side veins
  S(c,u=>lf(u*.97,.05*sin(u*5)),u=>4.5*(1-u)**.6+.6,.74,30,.4)
  for(const[u0,s1,u1,w]of[[.03,.8,.5,3.2],[.03,-.78,.42,3],[.3,.8,.66,2.4],[.38,-.82,.7,2.2],[.56,.78,.84,1.8],[.68,-.7,.9,1.5]]){
    const p=lf(u0,0),e=lf(u1,s1),m=lf((u0+u1)/2+.06,s1*.4)
    S(c,Z(p,m,e),u=>w*(1-u)**.7+.4,.6,12,.3)
  }
  // worm: a pale body cut out of the leaf, then a few lines for segments, feet and head
  const worm=(tl,md,hd,z,ph)=>{
    const f=Z(tl,md,hd),w=u=>z*(1+.1*sin(T*(3*u-2*t+ph)))*min(1,(u/.07)**.5)*min(1,((1.02-u)/.1)**.5)
    cut(c,()=>S(c,f,w,'rgba(0,0,0,.94)',30,.4))
    S(c,f,u=>w(u)*.8,.1,30,1)
    S(c,u=>N(f,u*.96,w(u*.96)/2),u=>2.8*P(u,.4),.8,30,.3)
    S(c,u=>N(f,.1+u*.8,-w(.1+u*.8)/2),u=>1.8*P(u,.5),.5,30,.3)
    for(let k=1;k<10;k++){
      const u=k/10.6+.012*sin(T*(3*k/10-2*t+ph)),r=w(u)/2
      S(c,Z(N(f,u,-r),N(f,u+.022,0),N(f,u,r)),v=>1.7*P(v,.5),.55,8,0)
      if(k<9)dot(c,...N(f,u+.045,r*.45),.9,.8)
      if(k>2&&k<7||k>7)S(c,Z(N(f,u+.04,r),N(f,u+.045,r+2),N(f,u+.05,r+4)),v=>2.6*(1-v*.6),.8,4,0)
    }
    // tail horn, dark little head with jaws
    S(c,Z(N(f,.05,-w(.05)/2),N(f,.03,-z*.8),N(f,-.02,-z)),u=>2.2*(1-u),.8,5,0)
    W(c,...f(.985),z*.3,z*.36,0,.85,.5)
    S(c,E(...f(.9),z*.42,z*.42,0,T*.6),u=>1.5*P(u,.5),.45,8,0)
  }
  // bites: scallops along the arc the head sweeps, eaten in turn, growing back at the end of the loop
  const pv=lf(.56,-.68),o=Math.atan2(-n[1],-n[0]),g=1-sm((t-.78)/.18),
  th=o-.95+1.9*(t<.74?t/.74:1-sm((t-.76)/.22)),mu=1.6*sin(T*9*t)*(t<.74),
  hd=[pv[0]+cos(th)*(19+mu),pv[1]+sin(th)*(19+mu)]
  cut(c,()=>{
    for(let k=0;k<7;k++){
      const b=o-.95+1.9*k/6,r=10.5*sm((t-.74*k/6+.03)/.07)*g
      if(r>.3)W(c,pv[0]+cos(b)*23,pv[1]+sin(b)*23,r,r,0,'#000',.5)
    }
  })
  worm(lf(.3,.06),[pv[0]+n[0]*12-a[0]*10,pv[1]+n[1]*12-a[1]*10],hd,13,0)
  // a second, smaller worm inching along the other side of the leaf
  const i=sin(T*t)
  worm(lf(.48,.72),lf(.62+.02*i,.4-.25*i),lf(.8+.012*i,.5+.06*sin(T*2*t)),9.5,.4)
  c.restore()
  fade(c);snap(c)
}
