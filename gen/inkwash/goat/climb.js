// ink wash mountain goat with curved horns and shaggy dry-brush coat climbing a craggy rock ledge
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
const A=.36,Z=1.22,P=140*Z,S=42,H=37
const wn=x=>sm(0,1,(112-abs(x-6))/46)
// leg: tapered stroke hip -> joint -> hoof
const leg=(c,t,hx,o,a,fr)=>{
  const ph=(2*t+o)%1,v=(ph-.6)/.4,
    dx=ph<.6?S/2-S*ph/.6:-S/2+S*(.5-.5*cos(PI*v)),
    up=ph<.6?0:10*sin(PI*v),
    fx=hx-H*Math.tan(A)*.8+dx,fy=-up-2,
    kx=(hx+fx)/2+(fr?5+up*.7:-7-up*.3),ky=-H*.48-up*.5
  br(c,[[hx,-H-6],[hx+(fr?1:-3),-H+6],[kx,ky],[fx,fy-3]],fr?9:11,a,u=>(1-u*.72)*min(1,u*8+.4))
  br(c,[[fx-1,fy-5],[fx+1.5,fy-1],[fx+3,fy]],6.5,min(.93,a+.2),u=>1-u*.3,.3)
}
export default(c,t)=>{
  c.translate(136,204);c.rotate(-A)
  // rock: seeded elements sliding down the slope, one period per loop
  for(let m=-2;m<2;m++)for(let k=0;k<5;k++){
    const x=((k+R(k)*.5)/5*P-t*P+P)%P+m*P,w=wn(x)
    if(w<.02)continue
    const r=R(k+9),q=R(k+31),d=k%2?1:-1
    k%2||el(c,x-8,30+r*10,34,15,.2,.2*w,5)
    dry(c,[[x+4,9],[x-8-q*8,26+r*8],[x-14-q*18,(46+r*30)*(.5+.5*w)]],20+r*10,.55*w,k*5+2,.5,7)
    dry(c,[[x+18,10],[x+12,22],[x+2-q*9,(34+q*22)*(.5+.5*w)]],9+q*6,.36*w,k*7+4,.4,4)
    br(c,[[x-22,7+r*4],[x-8,4+d*3],[x+8,5-d*2-q*2],[x+24+r*10,9+q*4]],10+q*6,.82*w,u=>min(1,u*3)**.5*(1-u**4)*(.55+.45*abs(sin(u*5+k*2))),.5)
    br(c,[[x+3,9],[x-1,19],[x-9,24+r*12],[x-11,34+r*14]],4+r*3,.93*w)
  }
  const b=sin(4*T*t)*1.2,n=sin(2*T*t)
  c.translate(-4,b+2);c.scale(Z,Z)
  // far legs
  leg(c,t,-26,.5,.5,0);leg(c,t,24,.75,.5,1)
  // body wash, pooled darker along belly
  ws(c,[[-38,-66],[-8,-74],[24,-75],[42,-64],[42,-46],[22,-34],[-8,-31],[-34,-36],[-45,-52]],.4,2)
  ws(c,[[-32,-46],[0,-42],[34,-48],[22,-34],[-8,-31],[-32,-36]],.3,3)
  // near legs
  leg(c,t,-30,0,.85,0);leg(c,t,28,.25,.85,1)
  // back line and shaggy coat
  br(c,[[-40,-56],[-30,-68],[-4,-71],[24,-73],[36,-68]],7,.78)
  for(let k=0;k<5;k++){
    const x=-28+k*15,r=R(k+50)
    dry(c,[[x+8,-70+r*3],[x+n,-52],[x-9+n*2,-33+r*8]],13+r*5,k%2?.78:.5,k*3+70,.42,6)
  }
  // tail flick
  br(c,[[-39,-60],[-45,-66],[-47,-72-n*2]],5,.85)
  // neck, head, beard
  const hx=n*1.5,hy=-b*.6
  br(c,[[26,-58],[40,-74],[51+hx,-91+hy]],24,.55,u=>1-u*.45)
  dry(c,[[34,-70],[38,-58],[40,-46+n]],10,.7,91,.45,5)
  br(c,[[46+hx,-97+hy],[56+hx,-92+hy],[69+hx,-83+hy]],13,.85,u=>min(1,u*5)**.5*(1-u*.55))
  br(c,[[63+hx,-80+hy],[61+hx-n,-72+hy],[62+hx-n*2,-65+hy]],4.5,.8)
  br(c,[[48+hx,-97+hy],[40+hx,-99+hy],[35+hx,-96+hy]],5,.85)
  // horns sweeping back
  for(const[o,a]of[[4,.6],[0,.93]])
    br(c,[[52+hx+o,-99+hy],[50+hx+o,-113+hy],[38+hx+o,-123+hy],[24+hx+o,-121+hy],[17+hx+o,-112+hy]],6.5,a,u=>min(1,u*6)**.5*(1-u**1.6)*(.85+.15*sin(u*40)),.3)
  cut(c,_=>el(c,57+hx,-91+hy,1.3,1,0,1,0))
  c.resetTransform();fade(c,22);snap(c)
}
