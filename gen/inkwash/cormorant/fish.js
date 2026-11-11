// ink wash cormorant diving from a river boat's prow, surfacing with a fish and hopping back aboard, ripples spreading
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
export const frames=36,delay=80,dither=true
// poses: time, x, y, body angle, neck angles a1 a2, head angle a3, wing lift, standing
const Q=[
  [0,90,96,-1.15,-.25,.15,1.25,0,1],[.1,90,96,-1.15,-.25,.15,1.25,0,1],
  [.16,95,104,-.55,.1,.2,.5,0,1],[.22,128,88,-.1,0,0,0,.5,0],
  [.28,160,152,1,0,0,0,0,0],[.33,178,216,1.3,0,0,0,0,0],
  [.46,176,224,-.4,-.6,-.4,.2,0,0],[.54,174,192,-.05,-1.1,-1.4,.1,0,0],
  [.72,132,192,-.05,-1.1,-1.4,.1,0,0],[.77,110,138,-.95,-.3,-.1,1,1,0],
  [.83,90,96,-1.15,-.25,.15,1.25,0,1],[1,90,96,-1.15,-.25,.15,1.25,0,1]
]
const pose=t=>{
  const k=Q.findIndex(q=>q[0]>t),a=Q[k-1],b=Q[k],u=sm(a[0],b[0],t)
  return a.map((v,j)=>v+(b[j]-v)*u)
}
const ring=(c,x,y,g,a)=>{
  if(g<=0||g>=1)return
  const rx=8+g*52,ry=rx*.2,al=a*(1-g)**.8
  for(const[a0,a1,w]of[[.25,2.7,4],[3.5,4.6,2.5],[5.2,6,2.5]])
    br(c,[0,1,2,3,4].map(j=>[x+cos(a0+(a1-a0)*j/4)*rx,y+sin(a0+(a1-a0)*j/4)*ry]),w*(1-g*.5),al,u=>sin(u*PI)**.6)
}
export default(c,t)=>{
  const[,x,y,r,a1,a2,a3,wl,st]=pose(t),m=t<.4?1:t<.9?-1:2*sm(.9,.97,t)-1,
    gp=sin(PI*sm(.84,.92,t))*(t<.92),fa=sm(.47,.5,t)*(1-sm(.86,.9,t))
  // legs on the prow
  if(st>.05)for(const o of[-3,4]){
    br(c,[[x+o*m,y+16],[x+(o+1)*m,y+26],[x+(o+3)*m,y+34]],5,.8*st,u=>1-u*.3,.3)
    br(c,[[x+(o-3)*m,y+34],[x+(o+3)*m,y+35],[x+(o+10)*m,y+34]],3.5,.8*st,pf,.3)
  }
  c.save();c.translate(x,y);c.scale((m||.01)*1.3,1.3);c.rotate(r)
  br(c,[[-16,2],[-30,5],[-46,10]],11,.85,u=>(1-u*.5)*(1-u**8))
  dry(c,[[-30,5],[-42,9],[-52,13]],9,.8,3,.3,4)
  br(c,[[-26,3],[-6,1],[17,-3]],23,.6,u=>min(1,u*3)**.6*(1-u**3*.6),.8)
  // wing, folded or raised
  const W=[[9,-5],[-8-wl*2,-1-wl*22],[-27-wl*6,4-wl*36]]
  br(c,W,14,.9,u=>min(1,u*4)**.5*(1-u**2.5))
  wl>.1&&br(c,[[6,-4],[-14-wl*2,-wl*14],[-30-wl*4,6-wl*22]],11,.7*wl,pf)
  // neck, head, hooked beak
  const A3=a3-gp*1.3,p0=[14,-4],p1=[p0[0]+14*cos(a1),p0[1]+14*sin(a1)],p2=[p1[0]+13*cos(a2),p1[1]+13*sin(a2)],
    p3=[p2[0]+6*cos(A3),p2[1]+6*sin(A3)],p4=[p3[0]+14*cos(A3),p3[1]+14*sin(A3)]
  br(c,[p0,p1,p2,p3],11,.9,u=>1-u*.35,.4)
  el(c,p3[0],p3[1],6,4.6,A3,.93,.4)
  br(c,[p3,p4,[p4[0]+3*cos(A3+1.4),p4[1]+3*sin(A3+1.4)]],4,.82,u=>1-u*.5,.3)
  cut(c,_=>{el(c,p3[0]+cos(A3-1.2)*1.5,p3[1]+sin(A3-1.2)*1.5,1.2,1.2,0,1,0);el(c,p3[0]+cos(A3+1.9)*4,p3[1]+sin(A3+1.9)*4,2.6,1.8,A3,.6,1)})
  // fish held crosswise in the beak
  if(fa>.02){
    const fx=p4[0]-3*cos(A3),fy=p4[1]-3*sin(A3),w=sin(T*t*6)*2
    c.translate(fx,fy);c.rotate(A3+1.35)
    br(c,[[-10,0],[0,w*.3],[10,-w]],8,.6*fa,u=>sin(u*PI)**.6,.4)
    br(c,[[8,-w],[12,-w-3],[14,-w-4]],2.5,.7*fa);br(c,[[8,-w],[12,-w+3],[14,-w+4]],2.5,.7*fa)
    cut(c,_=>el(c,-2,1.5,4,1,0,.6*fa,.4))
  }
  c.restore()
  // waterline hides what is under the surface
  cut(c,_=>{c.fillStyle='#000';F(c,1.5);c.fillRect(100,192,170,80);F(c)})
  // boat: brushed prow rising from the left
  ws(c,[[-10,150],[50,147],[98,128],[100,150],[80,186],[-10,190]],.38,2.5)
  ws(c,[[-10,174],[50,172],[92,160],[80,188],[-10,192]],.3,3)
  dry(c,[[2,160],[50,158],[96,140]],12,.6,11,.4,5)
  dry(c,[[2,178],[46,177],[86,168]],10,.5,13,.5,4)
  br(c,[[-6,148],[44,145],[88,133],[112,114]],12,.88,u=>(.55+.45*u)*(1-u**6))
  br(c,[[96,150],[90,170],[80,187]],5,.7)
  // water: slow ambient strokes, then rings from the dive, the surfacing and the swim
  for(let k=0;k<4;k++){
    const s=sin(T*(t+k/4))*7,X=[60,150,200,112][k],Y=[196,206,224,218][k]
    br(c,[[X-34+s,Y],[X+s,Y+2.5],[X+36+s,Y]],3.5,.36,u=>sin(u*PI)**.5*(.5+.5*sin(u*9+k)**2))
  }
  for(let k=0;k<3;k++){
    ring(c,176,196,(t-.28-k*.045)/.26,.7)
    ring(c,172,196,(t-.47-k*.04)/.24,.6)
    ring(c,160-k*14,196,(t-.58-k*.05)/.22,.5)
  }
  // splash
  const sp=(t-.28)/.13
  if(sp>0&&sp<1)for(let k=0;k<9;k++){
    const q=R(k+2),X=176+(q-.5)*56*sp,Y=192-(34+R(k+8)*30)*sp+60*sp*sp
    br(c,[[X,Y+5],[X+(q-.5)*2,Y],[X+(q-.5)*4,Y-5]],3.5,.6*(1-sp),u=>sin(u*PI)**.5,.3)
  }
  fade(c,18);snap(c)
}
