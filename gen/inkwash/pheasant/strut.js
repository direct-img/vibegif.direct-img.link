// ink wash pheasant strutting with a long barred tail and a muted red face, head bobbing with each step
const{PI,sin,cos,min,max,abs,hypot,floor}=Math,T=2*PI
const K=a=>a.at?a:`rgba(20,18,16,${a})`
const R=n=>(n=sin(n*127.1+3.7)*43758.5453,n-floor(n))
const sm=(a,b,x)=>(x=min(1,max(0,(x-a)/(b-a))),x*x*(3-2*x))
// smooth curve through points
const cv=(p,n=36)=>[...Array(n+1)].map((_,k)=>{
  const u=k/n*(p.length-1),i=min(u|0,p.length-2),f=u-i,
    a=p[max(i-1,0)],b=p[i],d=p[i+1],e=p[min(i+2,p.length-1)]
  return[0,1].map(j=>.5*(2*b[j]+(d[j]-a[j])*f+(2*a[j]-5*b[j]+4*d[j]-e[j])*f*f+(3*b[j]-a[j]-3*d[j]+e[j])*f*f*f))
})
// pressure: press in, swell, taper to a point
const pf=u=>min(1,u*5)**.5*(1-u**2.5)
const nm=(s,k)=>{
  const a=s[max(k-1,0)],b=s[min(k+1,s.length-1)],l=hypot(b[0]-a[0],b[1]-a[1])||1
  return[(a[1]-b[1])/l,(b[0]-a[0])/l]
}
const F=(c,b)=>c.filter=b?`blur(${b}px)`:'none'
// loaded brush stroke: ribbon of varying width
const br=(c,p,w,a,f=pf,b=.6)=>{
  const s=cv(p),n=s.length-1,L=[],Q=[]
  s.forEach(([x,y],k)=>{
    const[nx,ny]=nm(s,k),h=w/2*f(k/n)+.3
    L.push([x+nx*h,y+ny*h]);Q.unshift([x-nx*h,y-ny*h])
  })
  F(c,b);c.fillStyle=K(a);c.beginPath()
  ;[...L,...Q].forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y))
  c.fill();F(c)
}
// dry brush: parallel hairlines with gaps that grow toward the tail
const dry=(c,p,w,a,sd=1,g=.5,h=7)=>{
  const s=cv(p,48),n=s.length-1
  c.strokeStyle=K(a);c.lineWidth=max(.7,w/h*.6)
  for(let j=0;j<h;j++){
    const o=(j/(h-1)-.5)*w*(.8+.4*R(sd+j));let on=0
    c.beginPath()
    s.forEach(([x,y],k)=>{
      const u=k/n,[nx,ny]=nm(s,k),v=R(sd+j*17+(k/6|0)*3.1)>g*(.3+u),q=o*(.4+.6*pf(u))
      v&&(on?c.lineTo(x+nx*q,y+ny*q):c.moveTo(x+nx*q,y+ny*q));on=v
    })
    c.stroke()
  }
}
// wet wash blob through points
const ws=(c,p,a,b=3)=>{
  const n=p.length,m=k=>[(p[k%n][0]+p[(k+1)%n][0])/2,(p[k%n][1]+p[(k+1)%n][1])/2]
  F(c,b);c.fillStyle=K(a);c.beginPath();c.moveTo(...m(0))
  for(let k=1;k<=n;k++)c.quadraticCurveTo(...p[k%n],...m(k))
  c.fill();F(c)
}
const el=(c,x,y,rx,ry,r,a,b=2)=>{F(c,b);c.fillStyle=K(a);c.beginPath();c.ellipse(x,y,rx,ry,r,0,T);c.fill();F(c)}
const cut=(c,f)=>{c.globalCompositeOperation='destination-out';f();c.globalCompositeOperation='source-over'}
const fade=(c,w=16)=>cut(c,_=>{
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
})
const snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){
    for(let j=0;j<3;j++)d[k+j]=Math.round(d[k+j]/s)*s
    d[k+3]=min(255,Math.round(d[k+3]/a)*a)
  }
  c.putImageData(m,0,0)
}
export const frames=24,delay=80,dither=true
const RD='rgba(170,62,48,.62)',S=30,Z=1.22,P=2*S*Z/.6
const leg=(c,t,hx,o,a)=>{
  const ph=(2*t+o)%1,v=(ph-.6)/.4,
    dx=ph<.6?S/2-S*ph/.6:-S/2+S*(.5-.5*cos(PI*v)),up=ph<.6?0:11*sin(PI*v),
    fx=hx+dx,fy=212-up,kx=(hx+fx)/2-7-up*.4,ky=190-up*.6
  el(c,hx-1,170,7,10,.3,a*.6,1.2)
  br(c,[[hx,166],[kx,ky],[fx,fy]],7,a,u=>1-u*.55,.3)
  for(const[x,y]of[[9,1-up*.3],[5,-2+up*.2],[-6,1]])br(c,[[fx,fy],[fx+x*.6,fy+y*.4],[fx+x,fy+y]],2.6,a,u=>1-u*.6,.2)
}
export default(c,t)=>{
  const b=sin(4*T*t)*1.5,n=cos(2*T*t),hb=sin(2*T*t)*5
  // ground: a few dry sweeps sliding back, one period per loop
  for(let m=-1;m<3;m++)for(let k=0;k<3;k++){
    const x=((k+R(k))/3*P-t*P+P)%P+m*P-30,w=sm(0,1,(104-abs(x-128))/40),r=R(k+7)
    w>.02&&dry(c,[[x+36,217+r*5],[x+12,219+r*4],[x-18,217+r*6]],5+r*3,.55*w,k+3,.4,4)
    w>.02&&k==1&&br(c,[[x,216],[x-3,206],[x-9,198]],2.5,.6*w)
  }
  c.translate(164,214);c.scale(Z,Z);c.translate(-150,-214)
  leg(c,t,134,.5,.5)
  c.save();c.translate(0,b)
  // long barred tail, trailing and swaying
  const tl=[[112,150],[82,157+n],[52,157+n*3],[24,146+n*6]],tp=cv(tl,26)
  br(c,tl,13,.36,u=>min(1,u*6)**.5*(1-u**1.8),.8)
  br(c,[[110,146],[84,149+n],[62,146+n*3],[44,136+n*5]],6,.3,pf,.8)
  br(c,[[112,155],[90,163+n],[68,164+n*2]],6,.5,pf,.6)
  tp.forEach(([x,y],k)=>{
    if(k<3||k>24||R(k+3)<.22)return
    const[nx,ny]=nm(tp,k),u=k/26,h=(5.5*(1-u**1.8)+1)*(.6+.5*R(k)),o=(R(k+9)-.5)*3
    br(c,[[x+nx*h+2,y+ny*h],[x-1+o,y],[x-nx*h+2,y-ny*h]],2+R(k+5)*2.4,.85-u*.35,v=>.3+.7*sin(v*PI),.3)
  })
  // body: wet mass, pooled breast, scalloped feather marks
  ws(c,[[104,146],[122,130],[150,127],[170,138],[174,156],[158,172],[130,175],[108,164]],.4,2.5)
  ws(c,[[146,134],[168,138],[174,156],[160,171],[146,166]],.4,2.5)
  br(c,[[108,148],[124,133],[146,128],[166,134]],6,.7)
  for(let k=0;k<6;k++){
    const x=152+k%3*7-(k>2)*3,y=144+(k>2)*10+R(k)*3
    br(c,[[x-3.5,y-3],[x+.5,y+2],[x+4,y-3]],2.6,.8,u=>.4+.6*sin(u*PI),.3)
  }
  // folded wing: two loaded strokes and a dry tail-off
  br(c,[[146,140],[130,146],[112,152],[98,154]],12,.55,u=>min(1,u*5)**.5*(1-u**2))
  br(c,[[142,152],[126,158],[108,160]],7,.78,pf)
  dry(c,[[128,146],[112,154],[94,157]],8,.85,5,.45,4)
  // neck with white ring, head, wattle, beak
  const hx=178+hb,hy=106-b*.5
  br(c,[[160,138],[168+hb*.4,124],[hx-3,hy+3]],15,.85,u=>1-u*.4)
  cut(c,_=>br(c,[[162+hb*.5,119],[170+hb*.5,123],[178+hb*.5,120]],4,1,u=>.6+.4*sin(u*PI),.3))
  br(c,[[hx-9,hy+2],[hx-2,hy-6],[hx+8,hy-2]],15,.9,u=>min(1,u*4)**.5*(1-u**3),.5)
  cut(c,_=>el(c,hx+1.5,hy+.5,6,5,.2,1,.5));el(c,hx+1.5,hy+.5,6,5,.2,RD,.8)
  el(c,hx+3,hy+5,3,2.4,0,RD,.8)
  el(c,hx+2.5,hy-1,1.5,1.5,0,.95,.2)
  br(c,[[hx+7,hy-2],[hx+12,hy],[hx+16,hy+3]],4.5,.8,u=>1-u*.8,.3)
  br(c,[[hx-6,hy-5],[hx-11,hy-9],[hx-14,hy-8]],2.5,.85)
  c.restore()
  leg(c,t,140,0,.9)
  c.resetTransform()
  fade(c,18);snap(c)
}
