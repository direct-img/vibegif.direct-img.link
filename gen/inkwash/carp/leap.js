// ink wash carp leaping up a waterfall, arcing through the falling water with splash and spray, vermilion patch on its back
export const frames=28,delay=75,dither=true
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
// soft wash blob through points
const W=(c,p,a,b=2,k)=>{
  const n=p.length,m=j=>[(p[j%n][0]+p[(j+1)%n][0])/2,(p[j%n][1]+p[(j+1)%n][1])/2]
  c.filter=`blur(${b}px)`;c.fillStyle=ink(a,k);c.beginPath();c.moveTo(...m(n-1))
  p.map((q,j)=>c.quadraticCurveTo(...q,...m(j)))
  c.fill();c.filter='none'
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
// the leap is one parabola, tabulated by arc length so the body can follow it
const q=bz([84,250],[122,84],[192,-96]),tab=[]
for(let k=0,l=0,o=q(-.4);k<=600;k++){
  const p=q(-.4+k/300)
  l+=hypot(p[0]-o[0],p[1]-o[1]);tab.push([l,o=p])
}
const at=l=>(tab.find(e=>e[0]>=l)||tab[600])[1]
const drop=(c,x,y,r,a)=>B(c,bz([x,y-r*1.6],[x,y+r]),u=>r*2*sin(PI*u**1.6)+.3,a,8)
export default(c,t)=>{
  const H=tab[round(max(0,min(600,(.4+(t-.03)/.62)*300)))][0]
  const f=v=>{
    const[x,y]=at(H-v*104),[X,Y]=at(H-v*104-3),d=hypot(X-x,Y-y)||1,g=14*max(0,v)**1.6*sin(T*t*4-v*3)
    return[x+(Y-y)/d*g,y-(X-x)/d*g]
  }
  // point at body position v, a along the body toward the tail, b toward the back
  const pt=(v,a,b)=>{
    const[x,y]=f(v),[X,Y]=f(v+.02),d=hypot(X-x,Y-y)||1,i=(X-x)/d,j=(Y-y)/d
    return[x+i*a-j*b,y+j*a+i*b]
  }
  const wb=v=>(8+40*(1-min(1,v))**.6)*min(1,(v+.1)*6)**.5
  // cliff: angular wet mass with dry strokes
  W(c,[[224,-6],[262,-6],[262,150],[246,168],[232,128],[238,92],[220,60],[230,28]],.72,1.2)
  D(c,bz([230,6],[226,40],[244,80],[240,150]),()=>20,.6,6,3)
  B(c,bz([222,-4],[234,30],[216,58],[240,96]),tp(5,.4),.9)
  B(c,bz([240,100],[230,126],[246,150],[248,166]),tp(3.5),.8)
  W(c,[[214,214],[232,204],[254,212],[262,236],[222,234]],.66,1.2)
  B(c,bz([212,216],[226,202],[244,206],[256,214]),tp(4,.4),.9)
  // falling water: one pale wash, darker runs inside, dry hairlines at the edges
  c.globalCompositeOperation='multiply'
  W(c,[[104,-10],[214,-10],[218,90],[224,200],[190,226],[120,226],[88,206],[98,100]],.1,3)
  c.filter='blur(1.4px)'
  for(const[x,w,a,y,k]of[[112,8,.2,-10,1],[146,22,.1,-14,2],[173,6,.2,10,3],[198,15,.15,-10,4]])
    B(c,bz([x,y],[x+2,90],[x-5,150],[x-10+k*3,212+k*4]),u=>w*(.45+.55*sin(PI*u**.5)),a,18)
  c.filter='none'
  c.globalCompositeOperation='source-over'
  D(c,bz([101,-8],[100,80],[94,150],[86,214]),()=>12,.3,4,11)
  D(c,bz([158,-8],[160,70],[156,150],[150,222]),()=>9,.3,4,17)
  for(let k=0;k<6;k++){
    const x=108+R(k+30)*104,p=(2*t+R(k+50))%1,y=-20+p*220
    B(c,bz([x,y],[x-1-2*p,y+30+22*p]),tp(1.8),(.3+.25*(k%2))*sin(PI*p)**.5,10)
  }
  cut(c,()=>{
    for(let k=0;k<9;k++){
      const x=104+R(k+70)*112,p=(2*t+R(k+90))%1,y=-40+p*240
      B(c,bz([x,y],[x-1-3*p,y+44+30*p]),tp(3+R(k)*3),.9,10)
    }
  })
  // carp, hidden under the water line
  {
    c.save();c.beginPath();c.rect(0,-99,256,330);c.clip()
    // tail and fins: wet stroke then dry hairs
    for(const[v,a,b,w,al]of[[1,44,28,19,.6],[1,40,-25,18,.5],[.22,30,-40,14,.45],[.62,22,-30,10,.4]]){
      const g=bz(pt(v,-6,b*.2),pt(v,a*.45,b*.55),pt(v,a,b))
      c.filter='blur(.7px)';B(c,g,tp(w,.5),al);c.filter='none'
      D(c,g,()=>w*.9,al+.3,5,v*9+b)
    }
    B(c,u=>pt(.2+u*.5,0,wb(.2+u*.5)/2+3),tp(15,.7),.5)
    c.filter='blur(.8px)'
    B(c,u=>f(u*1.1-.1),u=>wb(u*1.1-.1),.5,28)
    B(c,u=>pt(u*1.04-.08,0,wb(u*1.04-.08)*.24),u=>wb(u*1.04-.08)*.54,.8,28)
    c.filter='blur(1.5px)'
    B(c,u=>pt(.05+u*.36,0,wb(.05+u*.36)*.2),tp(19),.62,14,'190,76,42')
    c.filter='none'
    // scales cut out of the dark back, gill, eye, barbels
    cut(c,()=>{
      c.lineWidth=1.4;c.strokeStyle=ink(.5)
      for(let k=0;k<10;k++){
        const v=.36+(k>>1)*.11+k%2*.055,o=(k%2*.3+.02)*wb(v),[x,y]=pt(v,0,o),[X,Y]=pt(v,3,o),a=Math.atan2(Y-y,X-x)
        c.beginPath();c.arc(x,y,7.5,a-1,a+1);c.stroke()
      }
    })
    B(c,bz(pt(.15,0,18),pt(.22,0,2),pt(.16,0,-16)),tp(3.6),.85)
    cut(c,()=>E(c,...pt(.03,0,8),5.5,5.5,0,.4,1.2))
    E(c,...pt(.03,0,8),3.2,3.2,0,.95)
    B(c,bz(pt(-.08,0,-6),pt(-.1,8,-16),pt(-.03,20,-21)),tp(2),.8,8)
    B(c,bz(pt(-.09,0,-2),pt(-.18,4,-12),pt(-.16,14,-19)),tp(1.6),.6,8)
    c.restore()
  }
  // mist at the foot of the fall, pool
  cut(c,()=>{
    E(c,160,228,74,15,0,.85,7)
    for(let k=0;k<6;k++)E(c,104+k*21,217+3*sin(T*(2*t+k*.3)),10+3*sin(T*(t*2+k*.37)),7,0,.7,3)
  })
  c.filter='blur(1px)'
  B(c,bz([14,240],[80,233],[170,245],[246,238]),tp(12,.7),.22)
  B(c,bz([26,234],[60,231],[86,236],[112,233]),tp(3.4),.45)
  B(c,bz([84,246],[130,242],[170,249],[206,244]),tp(3),.36)
  c.filter='none'
  // splash where it leaves the pool
  const p=(t-.02)/.4
  if(p>0&&p<1){
    cut(c,()=>E(c,88,233,12+22*p,3+4*p,0,.9*(1-p),1.5))
    for(let k=0;k<10;k++){
      const a=-PI/2+(R(k+.5)-.5)*2.2,s=30+R(k+3)*46
      drop(c,88+cos(a)*s*p,231+sin(a)*s*p+60*p*p,(1.8+R(k+5)*2)*(1-.5*p),.85*(1-p**3))
    }
    c.lineWidth=1.4;c.strokeStyle=ink(.55*(1-p))
    for(let k=0;k<2;k++){
      c.beginPath();c.ellipse(88,236,14+40*p+k*12,3+6*p+k*2,0,.2+k,2.6+k);c.stroke()
    }
  }
  fade(c,18);snap(c)
}
