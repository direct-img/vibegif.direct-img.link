// ink wash spider web strung between two grass stalks trembling in a breeze, dew drops glinting, a small spider adjusting a thread
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
export const frames=24,delay=90,dither=true
export default(c,t)=>{
  const s=sin(T*t),s2=sin(T*t+.9),s3=sin(2*T*t+.4)
  // stalk tips sway; web anchors ride on them
  const sw=(y,k)=>(1-y/250)**1.6*(k?s2*7+s3*1.5:s*8+s3*1.5),
    L=y=>[40+(250-y)*.13+sw(y,0),y],Rr=y=>[216-(250-y)*.1+(250-y)**2*.0004+sw(y,1),y]
  // grass: tall leaning stalk with an arching blade, a shorter seeded stalk, low blades
  br(c,[250,190,120,60,16].map(L),8,.85,u=>(1-u*.7)*(.8+.2*sin(u*9)))
  const[bx,by]=L(84),TP=[bx+82+sw(20,0),by-44+abs(s)*2]
  br(c,[[bx,by],[bx+24,by-36],[bx+56,by-52],TP],7,.6,u=>min(1,u*4)**.5*(1-u**1.6))
  br(c,[L(150),[L(150)[0]-18,118],[14+s*4,104],[6+s*5,112]],6,.4,pf)
  br(c,[250,200,140,66].map(Rr),6.5,.7,u=>(1-u*.6)*(.8+.2*sin(u*9+1)))
  const[hx,hy]=Rr(66)
  for(let k=0;k<5;k++)br(c,[[hx,hy+k*5],[hx+(k%2?7:-6),hy-8+k*4],[hx+(k%2?10:-9)+s2*2,hy-17+k*4]],4.5,k%2?.8:.55,pf,.4)
  br(c,[Rr(170),[Rr(170)[0]+14,146],[246+s2*3,136]],5,.45,pf)
  const BT=[132+s*2,212]
  br(c,[[150,250],[146,232],BT],4.5,.5,pf);br(c,[[18,248],[26,220],[22+s*3,196]],4.5,.36,pf)
  // web: hub hangs between anchors, radials to the grass, sagging spiral threads
  const A=[L(48),L(104),L(172),Rr(190),Rr(136),Rr(84),TP,BT],
    H=[120+(s+s2)*2.4,126+s3*.8]
  c.lineCap='round'
  A.forEach(([x,y],k)=>{
    c.strokeStyle=K(k%2?.5:.62);c.lineWidth=k>5?.9:1.1
    c.beginPath();c.moveTo(...H);c.quadraticCurveTo((H[0]+x)/2,(H[1]+y)/2+3,x,y);c.stroke()
  })
  const o=[0,5,6,4,3,7,2,1].map(k=>A[k]).sort((a,b)=>Math.atan2(a[1]-H[1],a[0]-H[0])-Math.atan2(b[1]-H[1],b[0]-H[0]))
  for(let r=1;r<7;r++){
    const f=r/7.2+.04
    c.strokeStyle=K(r%2?.5:.36);c.lineWidth=.9
    c.beginPath()
    o.forEach(([x,y],k)=>{
      const[x1,y1]=o[(k+1)%8],p=[H[0]+(x-H[0])*f,H[1]+(y-H[1])*f],q=[H[0]+(x1-H[0])*f,H[1]+(y1-H[1])*f],
        m=[(p[0]+q[0])/2+(H[0]-(p[0]+q[0])/2)*.16,(p[1]+q[1])/2+(H[1]-(p[1]+q[1])/2)*.16+1.5]
      if(R(r*9+k)<.16)return
      c.moveTo(...p);c.quadraticCurveTo(...m,...q)
    })
    c.stroke()
  }
  // dew drops: soft ink beads with a cut-out glint that flickers
  for(let k=0;k<11;k++){
    const[x,y]=o[k*3%8],[x1,y1]=o[(k*3+1)%8],f=(1+k%6)/7.2+.04,v=.25+R(k)*.5,
      px=H[0]+((x+(x1-x)*v)-H[0])*f*.95,py=H[1]+((y+(y1-y)*v)-H[1])*f*.95+1.5,z=2.2+R(k+4)*2,g=.5+.5*sin(T*t+k*1.7)
    el(c,px,py,z,z*1.15,0,.5,.5)
    cut(c,_=>el(c,px-z*.25,py-z*.3,z*.5+g*.3,z*.5+g*.3,0,.6+.4*g,.3))
  }
  // spider near the hub, legs working a thread
  const X=H[0]+10,Y=H[1]+7,w=sin(3*T*t)
  for(let k=0;k<8;k++){
    const d=k<4?-1:1,j=k%4,a=-.9+j*.6,m=j==0?w*3:j==3?-w*2:0
    br(c,[[X+d*2,Y],[X+d*(8+j)+m*.3,Y-7+j*3.4+a],[X+d*(13+j%2*3)+m,Y-4+j*5.5+m*d]],1.9,.9,u=>1-u*.6,.2)
  }
  el(c,X,Y+4,5,6.2,0,.93,.4);el(c,X,Y-3,3.2,3,0,.93,.3)
  cut(c,_=>el(c,X-1.5,Y+2.5,1.4,2,0,.5,.6))
  fade(c,14);snap(c)
}
