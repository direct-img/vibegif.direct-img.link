// ink wash mother duck paddling across water with three fluffy ducklings bobbing in a line behind her
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
export const frames=24,delay=85,dither=true
const YL='rgba(190,150,62,.55)',WY=170
const kid=(c,x,y,n)=>{
  c.save();c.translate(x,y)
  el(c,0,-7,13,10,-.1,YL,1.5);el(c,9+n,-19,8,7.5,0,YL,1.2)
  el(c,-2,-9,10,6,-.15,.3,2.5)
  br(c,[[-11,-9],[-15,-14],[-17,-18]],4,.6)
  dry(c,[[5,-13],[-3,-12],[-11,-7]],8,.7,3,.35,4)
  br(c,[[3+n,-22],[8+n,-27],[15+n,-23]],4.5,.8,u=>sin(u*PI)**.6,.5)
  el(c,12+n,-20,1.3,1.3,0,.95,.2)
  br(c,[[16+n,-18],[20+n,-17],[23+n,-16.5]],3.2,.85,u=>1-u*.6,.3)
  c.restore()
}
const mom=(c,n)=>{
  ws(c,[[-38,-6],[-30,-19],[-8,-25],[18,-21],[31,-8],[26,7],[0,11],[-28,8]],.42,2)
  br(c,[[-30,-11],[-41,-19],[-48,-26]],8,.8)
  br(c,[[16,-15],[-6,-14],[-30,-10]],15,.55,u=>min(1,u*4)**.5*(1-u**2.5))
  dry(c,[[10,-9],[-12,-5],[-34,-8]],13,.82,4,.4,6)
  for(let k=0;k<3;k++){
    const x=14+k*6.5,y=-6+R(k)*4
    br(c,[[x-3,y-2],[x,y+2],[x+3.5,y-2]],2.4,.65,u=>.4+.6*sin(u*PI),.3)
  }
  br(c,[[22,-12],[31,-26],[31+n,-40]],13,.6,u=>1-u*.35)
  el(c,34+n,-45,9.5,8,0,.6,.8)
  br(c,[[25+n,-48],[33+n,-54],[43+n,-49]],5,.9,u=>sin(u*PI)**.6,.4)
  br(c,[[27+n,-43],[35+n,-46],[42+n,-44]],2,.85)
  el(c,37+n,-46,1.6,1.6,0,.95,.2)
  br(c,[[41+n,-44],[51+n,-42],[57+n,-40]],7,.5,u=>.75+.25*sin(u*PI)-u**4*.5,.4)
  br(c,[[54+n,-41],[57+n,-40],[58+n,-38.5]],2.5,.9)
}
export default(c,t)=>{
  // far to near: x, waterline, scale, half width
  ;[[24,130,.85,13],[58,139,1,13],[97,150,1.15,13],[170,166,1.17,34]].forEach(([x,Y,z,w],j)=>{
    const k=3-j,b=sin(T*t-k*1.3)*1.8,W=w*z
    el(c,x,Y+5*z,W,3.5*z,0,.18,3)
    c.save();c.translate(x+(k?sin(2*T*t+k*2)*1.2:0)+(k==3)*sin(T*t)*4,Y+b);c.scale(z,z)
    k?kid(c,0,2,sin(2*T*t+k)):mom(c,sin(T*t+.6)*1.5)
    c.restore()
    // waterline under this bird
    cut(c,_=>{c.fillStyle='#000';F(c,1.3);c.fillRect(x-W*1.6,Y+2,W*3.6,40*z);F(c)})
    // bow ripple and wake sliding back
    br(c,[[x+W*.9,Y+2],[x+W*.2,Y+4.5],[x-W*.8,Y+3]],k?3:5,.7,u=>sin(u*PI)**.5)
    for(let i=0;i<3;i++){
      const p=(t+i/3+j*.37)%1,a=sin(PI*p)**.8,q=k?.6*z:1.3,X=x-W*.4-p*44*q,L=(16+p*20)*q
      br(c,[[X+L,Y+6+i*2.5*q+p*6*q],[X,Y+8.5+i*2.5*q+p*7*q],[X-L,Y+6+i*2.5*q+p*8*q]],3*q+.6,.5*a,u=>sin(u*PI)**.5*(.5+.5*sin(u*8+i)**2))
    }
  })
  for(let k=0;k<3;k++){
    const p=(t+k/3)%1,X=250-p*250
    br(c,[[X+26,206+k*9],[X,208.5+k*9],[X-26,206+k*9]],3,.3*sin(PI*p),u=>sin(u*PI)**.5)
  }
  fade(c,18);snap(c)
}
