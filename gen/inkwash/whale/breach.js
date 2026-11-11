// ink wash whale rising from the sea, arching over and diving back flukes last, spray and foam flying, rings left on the water
export const frames=30,delay=90,dither=true
const{sin,cos,PI,hypot,min,max,abs,round,floor}=Math,T=2*PI
const ink=(a,k='20,18,16')=>`rgba(${k},${a})`
const R=s=>(s=sin(s*127.1+3.7)*43758.5453,s-floor(s))
const bz=(...p)=>u=>{
  let q=p
  while(q[1])q=q.slice(1).map((v,k)=>[q[k][0]+(v[0]-q[k][0])*u,q[k][1]+(v[1]-q[k][1])*u])
  return q[0]
}
// brush stroke: outline offset from centerline f by width profile w
const B=(c,f,w,a,n=22,k)=>{
  const P=[],Q=[]
  for(let j=0;j<=n;j++){
    const u=j/n,[x,y]=f(u),[X,Y]=f(u+.02),d=hypot(X-x,Y-y)||1,h=w(u)/2,nx=(Y-y)/d*h,ny=(x-X)/d*h
    P.push([x+nx,y+ny]);Q.unshift([x-nx,y-ny])
  }
  c.fillStyle=ink(a,k);c.beginPath();[...P,...Q].map(([x,y])=>c.lineTo(x,y));c.fill()
}
// press in, swell, taper to a point
const tp=(w,e=.6)=>u=>w*sin(PI*min(1,u)**e)+.4
// dry brush: m hairlines across the stroke width, seeded starts and ends
const D=(c,f,w,a,m=5,s=1)=>{
  for(let j=0;j<m;j++){
    const o=j/(m-1)-.5,u0=R(s+j)*.25,u1=.7+R(s+j*3)*.3
    B(c,u=>{
      const v=u0+(u1-u0)*u,[x,y]=f(v),[X,Y]=f(v+.02),d=hypot(X-x,Y-y)||1,h=w(v)*o
      return[x+(Y-y)/d*h,y-(X-x)/d*h]
    },u=>(1.1+R(s+j*7)*.9)*(1.1-u),a,14)
  }
}
const E=(c,x,y,rx,ry,r,a,b=0,k)=>{
  c.filter=b?`blur(${b}px)`:'none';c.fillStyle=ink(a,k);c.beginPath();c.ellipse(x,y,rx,ry,r,0,T);c.fill();c.filter='none'
}
// light areas are cut out of the ink
const cut=(c,f)=>{c.save();c.globalCompositeOperation='destination-out';f();c.restore()}
const fade=(c,w=16)=>cut(c,()=>{
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
})
const snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=round(d[k+j]/s)*s;d[k+3]=min(255,round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}
// the breach is one parabola, tabulated by arc length so the body can follow it
const q=bz([28,240],[118,-76],[208,240]),tab=[],Y=176
for(let k=0,l=0,o=q(-.4);k<=600;k++){
  const p=q(-.4+k/300)
  l+=hypot(p[0]-o[0],p[1]-o[1]);tab.push([l,o=p])
}
const at=l=>(tab.find(e=>e[0]>=l)||tab[600])[1]
const drop=(c,x,y,r,a)=>B(c,bz([x,y-r*1.6],[x,y+r]),u=>r*2*sin(PI*u**1.6)+.3,a,8)
export default(c,t)=>{
  const H=tab[round(max(0,min(600,(.4+(t-.02)/.62)*300)))][0],Lb=176
  const f=v=>at(H-v*Lb)
  // point at body position v, a along the body toward the tail, b toward the back
  const pt=(v,a,b)=>{
    const[x,y]=f(v),[X,Y]=f(v+.02),d=hypot(X-x,Y-y)||1,i=(X-x)/d,j=(Y-y)/d
    return[x+i*a-j*b,y+j*a+i*b]
  }
  const wb=v=>(9+50*(1-min(1,v))**.7)*min(1,(v+.06)*7)**.4,sw=8*sin(T*t*2)
  c.save();c.beginPath();c.rect(0,0,256,Y);c.clip()
  // flukes, flipper, dorsal nub: wet stroke then dry hairs
  for(const[v,g,w,al]of[
    [1,bz(pt(1,-4,0),pt(1,14,28),pt(1,5,54)),19,.85],[1,bz(pt(1,-4,0),pt(1,14,-28),pt(1,5,-54)),19,.8],
    [.3,bz(pt(.27,0,-18),pt(.33,24,-56-sw),pt(.42,48,-80-sw)),17,.8],[.66,bz(pt(.6,0,wb(.6)/2-2),pt(.66,4,wb(.66)/2+10),pt(.73,8,wb(.73)/2-2)),7,.85]
  ]){
    c.filter='blur(.7px)';B(c,g,tp(w,.5),al);c.filter='none'
    D(c,g,()=>w*.8,.9,4,v*7)
  }
  // body: pale belly wash, grooved throat, dark wet back
  c.filter='blur(.9px)'
  B(c,u=>f(u*1.06-.06),u=>wb(u*1.06-.06),.3,30)
  c.filter='none'
  for(let k=0;k<5;k++)B(c,u=>pt(u*(.5-k*.03),0,-wb(u*.5)*(.1+k*.085)),tp(1.7,.5),.55,16)
  c.filter='blur(.8px)'
  B(c,u=>pt(u*1.05-.05,0,wb(u*1.05-.05)*.2),u=>wb(u*1.05-.05)*.6,.86,30)
  c.filter='none'
  cut(c,()=>B(c,bz(pt(.2,0,wb(.2)*.36),pt(.4,0,wb(.4)*.42),pt(.6,0,wb(.6)*.4)),tp(3.4),.4,12))
  B(c,bz(pt(-.05,0,-3),pt(.06,0,-7),pt(.17,0,-4)),tp(2.2,.4),.9,10)
  cut(c,()=>E(c,...pt(.16,0,1),4.2,4.2,0,.5,.8))
  E(c,...pt(.16,0,1),2.4,2.4,0,.95)
  c.restore()
  // sea: long swelling strokes
  c.filter='blur(.8px)'
  B(c,u=>[8+240*u,Y+1+2.5*sin(u*9-T*t)],tp(7,.7),.5,30)
  B(c,u=>[30+200*u,Y+26+2*sin(u*8-T*t+2)],tp(5,.7),.3,24)
  B(c,u=>[60+180*u,Y+52+2*sin(u*7-T*t+4)],tp(4,.7),.2,24)
  c.filter='none'
  // foam where the body breaks the surface, cut out of whale and water
  for(let j=0,o=f(-.06)[1];j<=44;j++){
    const v=-.06+j/40,[x,y]=f(v)
    if((y-Y)*(o-Y)<0&&t>.02&&t<.86)cut(c,()=>{
      for(let k=0;k<6;k++)E(c,x+(k-2.5)*8+3*sin(T*3*t+k*2),Y-2-3*abs(sin(T*2*t+k*1.3)),7+2*sin(T*3*t+k),5,0,.9,1.6)
    })
    o=y
  }
  // spray and rings: where it bursts out, where it crashes back
  for(const[x,t0,n,m,d]of[[50,.02,10,.8,-1],[190,.53,16,1.2,1]]){
    const p=(t-t0)/.4,r=(t-t0)/.47
    if(p>0&&p<1)for(let k=0;k<n;k++){
      const a=-PI/2+(R(k+t0)-.5)*2.4+d*.2,s=(34+R(k+3)*56)*m
      drop(c,x+cos(a)*s*p,Y-2+sin(a)*s*p+78*m*p*p,(1.8+R(k+5)*2.2)*(1-.5*p),.85*(1-p**3))
    }
    if(r>0&&r<1)for(let k=0;k<3;k++){
      const e=r-k*.13
      if(e>0)B(c,u=>[x+(16+70*e)*m*cos(.15+u*2.85+k),Y+7+(3+10*e)*m*sin(.15+u*2.85+k)],tp(2.6,.8),.6*(1-r)**.8,18)
    }
  }
  fade(c,14);snap(c)
}
