// ink wash line of ants marching along a curving trail, every other one carrying a crumb, seamless loop
export const frames=32,delay=65,dither=true
const{sin,cos,PI,hypot,min,max,abs,round,floor}=Math,T=2*PI
const ink=(a,k='20,18,16')=>`rgba(${k},${a})`
const R=s=>(s=sin(s*127.1+3.7)*43758.5453,s-floor(s))
const bz=(...p)=>u=>{
  let q=p
  while(q[1])q=q.slice(1).map((v,k)=>[q[k][0]+(v[0]-q[k][0])*u,q[k][1]+(v[1]-q[k][1])*u])
  return q[0]
}
// polyline as a path function
const pl=p=>u=>{
  const n=p.length-1,k=floor(min(n-.001,max(0,u*n))),e=u*n-k
  return[p[k][0]+(p[k+1][0]-p[k][0])*e,p[k][1]+(p[k+1][1]-p[k][1])*e]
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
// trail tabulated by arc length so the ants keep even spacing
const q=bz([-40,140],[30,250],[124,250],[128,150],[132,56],[206,40],[296,128]),tab=[],G=94
for(let k=0,l=0,o=q(0);k<=500;k++){
  const p=q(k/500)
  l+=hypot(p[0]-o[0],p[1]-o[1]);tab.push([l,o=p])
}
const at=l=>(tab.find(e=>e[0]>=l)||tab[500])[1]
const ant=(c,l,ph,cr)=>{
  const[x,y]=at(l),[X,Y]=at(l+4)
  c.save();c.translate(x,y);c.rotate(Math.atan2(Y-y,X-x)+.07*sin(ph));c.scale(1.5,1.5)
  // legs: alternating tripods, knee out, foot planted then swung
  for(let k=0;k<6;k++){
    const s=k%2?1:-1,j=k>>1,a=ph+(k%2^j%2?PI:0),f=(1-j)*9+1+5.5*cos(a),u=max(0,sin(a))*2
    B(c,pl([[2-j*3.5,s*2],[(1-j)*5+2+f*.3,s*(8.5+u)],[f,s*(13.5-u)]]),tp(2.1,.5),.85,10)
  }
  // antennae
  for(const s of[-1,1]){
    const w=1.5*sin(ph*2+s)
    B(c,pl([[12,s*2],[17,s*6.5+w*.5],[25,s*5+w]]),tp(1.5,.5),.8,8)
  }
  // gaster, thorax, head: three wet dabs
  c.filter='blur(.5px)'
  B(c,bz([-6,0],[-22,0]),u=>13*sin(PI*u**.75)**.6,.9,14)
  B(c,bz([-5,0],[7,0]),u=>7.5*sin(PI*u)**.5,.82,10)
  B(c,bz([7,0],[16,0]),u=>9*sin(PI*u**.8)**.5,.93,10)
  c.filter='none'
  cut(c,()=>E(c,-15,-2.5,3.5,1.6,.2,.45,.8))
  if(cr){
    c.rotate(.3*sin(ph)*.3)
    W(c,[[15,-7],[23,-10],[30,-4],[28,6],[19,8],[14,2]],.55,.8,'186,146,84')
    B(c,bz([15,-7],[23,-11],[30,-4],[28,5]),tp(2,.4),.7,10)
    B(c,bz([27,7],[20,9],[14,3]),tp(1.3),.5,8)
  }
  c.restore()
}
export default(c,t)=>{
  // the trail itself: a pale dry line, two grass flicks
  c.filter='blur(1.2px)';B(c,q,u=>10*sin(PI*u)**.4*(.7+.3*sin(u*23)),.12,50);c.filter='none'
  D(c,u=>q(.1+u*.8),()=>13,.16,3,5)
  for(const[x,y,k]of[[204,206,0],[56,120,1]])
    for(let j=0;j<3;j++)B(c,bz([x+j*3,y],[x+j*5-4,y-14-j*4],[x+(j-1)*13,y-26-j*5+k*6]),tp(2.6,.35),.36+.15*j,10)
  const L=tab[500][0]
  for(let k=-1;k*G<L+G;k++)ant(c,(k+2*t)*G,T*5*t+k*PI,k&1)
  fade(c,18);snap(c)
}
