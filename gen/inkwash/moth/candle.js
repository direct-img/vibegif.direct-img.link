// ink wash moth circling a candle flame with a warm translucent glow, shadowy wings fluttering
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
export const frames=24,delay=75,dither=true
const moth=(c,x,y,r,z,f,a)=>{
  c.save();c.translate(x,y);c.rotate(r);c.scale(z,z)
  for(const d of[-1,1]){
    c.save();c.scale(d*f,1)
    // forewing and hindwing: soft shadowy washes with a darker leading edge and dry tips
    ws(c,[[1,-6],[13,-16],[31,-15],[35,-3],[25,10],[8,9],[2,4]],.5*a,1.4)
    ws(c,[[2,5],[14,10],[18,20],[9,24],[3,15]],.36*a,1.4)
    br(c,[[1,-7],[14,-17],[32,-15],[36,-3]],3.6,.82*a,pf,.4)
    dry(c,[[8,-4],[18,-2],[30,2]],12,.45*a,5,.3,3)
    br(c,[[10,-4],[17,-2],[21,3]],2.2,.75*a,u=>sin(u*PI)**.5,.4)
    c.restore()
  }
  br(c,[[0,-10],[0,2],[0,17]],8.5,.93*a,u=>sin(u**.7*PI)**.5*.8+.2,.4)
  br(c,[[-1,-9],[-5,-16],[-9,-18]],1.4,.8*a,pf,.2);br(c,[[1,-9],[5,-16],[9,-18]],1.4,.8*a,pf,.2)
  c.restore()
}
export default(c,t,i)=>{
  c.translate(0,-13)
  const fk=sin(3*T*t),f2=sin(2*T*t+1),FX=118+fk*1.2,FY=142
  // moth behind the flame on the far half of its orbit
  const a=T*t,mx=120+cos(a)*66,my=108-sin(a)*18+sin(2*a)*6,far=sin(a)>0,
    z=1.18-sin(a)*.2,fl=.62+.38*abs(sin(6*T*t+.5)),rot=Math.atan2(-cos(a)*22,-sin(a)*66)+PI/2
  far&&moth(c,mx,my,rot,z,fl,.7)
  // glow: warm translucent halo around the flame
  const g=c.createRadialGradient(118,124,3,118,124,66)
  g.addColorStop(0,'rgba(214,150,60,.55)');g.addColorStop(.35,'rgba(210,140,60,.24)');g.addColorStop(1,'rgba(210,140,60,0)')
  c.fillStyle=g;c.fillRect(0,0,256,256)
  // candle: brushed ink, loaded dark side, open lit side, wax drips, pooled base
  c.save();c.translate(0,12)
  ws(c,[[104,151],[120,153],[122,200],[120,232],[106,233],[102,198]],.3,3)
  br(c,[[104,150],[101,190],[105,232]],10,.8,u=>.6+.4*sin(u*7)**2-u**6*.5,.8)
  dry(c,[[113,156],[111,196],[114,230]],12,.5,7,.45,5)
  br(c,[[134,152],[136,180],[133,206]],3,.5,u=>(.4+.6*sin(u*5+1)**2)*(1-u**3))
  br(c,[[133,216],[132,226],[131,232]],2.5,.45)
  br(c,[[101,151],[110,155],[120,152],[135,151]],5,.72,u=>sin(u*PI)**.5*(.6+.4*sin(u*9)**2))
  br(c,[[127,152],[129,168],[127,182]],5.5,.6,u=>.5+.5*u-u**8*.6)
  el(c,127.5,183,3.4,3.8,0,.62,.5)
  br(c,[[107,152],[106,162],[107,170]],4.5,.85,u=>.5+.5*u-u**8*.6)
  br(c,[[80,237],[104,232],[134,233],[158,238]],7,.82,u=>sin(u*PI)**.6*(.7+.3*sin(u*8)**2))
  dry(c,[[74,241],[118,244],[166,241]],6,.45,9,.5,4)
  c.restore()
  // wick and flame: a cut-out teardrop with a warm core
  br(c,[[118,165],[118.6,156],[FX,149]],2.6,.93)
  const fl2=[[FX-12,FY+8],[FX-10,FY-12],[FX+fk*4,FY-46-f2*4],[FX+10,FY-12],[FX+11,FY+8],[FX,FY+16]]
  cut(c,_=>ws(c,fl2,.95,1.5))
  ws(c,fl2,'rgba(224,160,60,.55)',1.5)
  ws(c,[[FX-5,FY+9],[FX-4,FY-6],[FX+fk*2,FY-24],[FX+5,FY-4],[FX+5,FY+10]],'rgba(200,96,44,.5)',1.5)
  br(c,[[FX-11,FY+10],[FX-12,FY-10],[FX-3+fk*3,FY-42-f2*4]],2.2,.5)
  br(c,[[FX+10,FY+8],[FX+10,FY-6],[FX+5+fk*3,FY-26]],1.5,.3)
  // smoke wisp
  for(let k=0;k<2;k++){
    const p=(t+k/2)%1,y=FY-52-p*50
    br(c,[[FX,y+16],[FX+sin(p*5+k)*7,y],[FX-sin(p*5+k)*6+p*8,y-18]],5+p*5,.26*sin(PI*p),u=>sin(u*PI)**.6,2)
  }
  far||moth(c,mx,my,rot,z,fl,.78)
  c.resetTransform();fade(c,14);snap(c)
}
