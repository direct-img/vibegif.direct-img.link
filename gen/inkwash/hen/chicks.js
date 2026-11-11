// ink wash hen pecking at the ground while three fluffy chicks scurry and peck around her, soft vermilion comb
export const frames=28,delay=85,dither=true
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
const sm=(a,b,x)=>(x=min(1,max(0,(x-a)/(b-a))),x*x*(3-2*x))
const V='186,70,50'
// a peck: down and back up around time m
const pk=(t,m,w=.1)=>sm(m-w,m,t)*(1-sm(m,m+w,t))
const chick=(c,x,y,s,d,p,ph,run)=>{
  c.save();c.translate(x,y-(run?1.5*abs(sin(ph)):0));c.scale(s*d,s)
  // legs
  for(const k of[0,1]){
    const a=run?.7*sin(ph+k*PI):0
    B(c,pl([[1+k*4,8],[2+k*4+9*sin(a),15],[1+k*4+12*sin(a),21-run*2*max(0,cos(ph+k*PI))]]),tp(1.8,.5),.85,8)
    B(c,bz([1+k*4+12*sin(a),21],[6+k*4+12*sin(a),21.5]),tp(1.5),.8,4)
  }
  c.rotate(.5*p)
  // fluffy body, darker head: two wet dabs with a few dry flicks
  E(c,0,0,13,11,-.2,.3,1.6)
  E(c,-3,3,9,6,-.2,.2,2)
  for(let k=0;k<5;k++)B(c,bz([-8+k*2,-4+k*3],[-15+k,-6+k*4.5]),tp(2.2,.4),.4,6)
  B(c,bz([4,-2],[-2,3],[-9,2]),tp(3.4,.4),.6,8)
  c.translate(10+5*p,-10+13*p);c.rotate(.7*p)
  E(c,0,0,8,7.4,0,.56,1)
  B(c,bz([6,-.5],[9,.5],[13,2]),tp(3.4,.3),.95,6)
  E(c,3,-2,1.4,1.4,0,.95)
  c.restore()
}
export default(c,t)=>{
  const p=max(pk(t,.2),pk(t,.42)),lk=.12*sin(T*t)*(1-p)
  // ground: a few dry strokes, scattered grain
  c.filter='blur(1.5px)'
  B(c,bz([14,220],[90,214],[160,224],[244,216]),tp(8,.7),.14)
  B(c,bz([84,246],[140,241],[190,249],[240,243]),tp(5,.7),.12)
  c.filter='none'
  for(let k=0;k<7;k++)E(c,160+R(k)*36,214+R(k+9)*10,1.3,1,k,.7)
  // hen
  c.save();c.translate(96,170)
  // legs and feet
  for(const[x,a]of[[-12,.45],[2,.85]]){
    B(c,pl([[x,12],[x+6,28],[x+3,44]]),tp(3.6,.6),a,10)
    for(const[i,j]of[[13,2],[11,-3],[-7,1]])B(c,bz([x+3,44],[x+3+i,44+j+2]),tp(2.6,.4),a,6)
  }
  c.scale(1.25,1.25);c.rotate(.66*p)
  // tail: bold dark strokes with dry ends
  for(const[x,y,a,w]of[[-58,-62,.9,10],[-70,-46,.75,11],[-72,-28,.6,9],[-46,-66,.55,7]]){
    const g=bz([-28,-14],[-40+x*.2,-24+y*.3],[x,y])
    c.filter='blur(.5px)';B(c,g,tp(w,.45),a);c.filter='none'
    D(c,g,()=>w*.8,a,3,y)
  }
  // body wash, breast paler; wing strokes
  W(c,[[-38,-12],[-30,-30],[-6,-35],[22,-31],[39,-16],[37,4],[18,17],[-10,17],[-30,6]],.36,1.8)
  c.globalCompositeOperation='multiply'
  W(c,[[-36,-12],[-28,-28],[-4,-32],[10,-22],[-8,-8]],.3,3)
  c.globalCompositeOperation='source-over'
  for(const[x,y,a]of[[-30,-6,.75],[-28,4,.6],[-18,12,.45]])B(c,bz([14,-20],[2,-16+y*.4],[x,y]),tp(9,.4),a)
  B(c,bz([20,14],[34,8],[40,-8],[36,-18]),tp(3,.5),.6)
  // neck and head, dipping to the ground
  const hx=42+19*p,hy=-44+37*p
  c.filter='blur(.8px)'
  B(c,bz([24,-16],[34,-30+12*p],[hx-2,hy+4]),u=>27-13*u,.42,10)
  c.filter='none'
  D(c,bz([hx-4,hy+6],[34,-30+10*p],[24,-14]),()=>16,.6,5,7)
  c.translate(hx,hy);c.rotate(.9*p+lk)
  for(let k=0;k<3;k++)E(c,-3+k*4.5,-9-k%2*2,3.6,4.4,.3*k,.75,.5,V)
  E(c,7,8,2.8,4.4,.2,.7,.5,V)
  E(c,0,0,9,8,0,.6,.8)
  B(c,bz([6,-1],[11,1],[17,4]),tp(5,.3),.95,8)
  cut(c,()=>E(c,3,-2,3.2,3.2,0,.5,.6))
  E(c,3,-2,1.7,1.7,0,.95)
  c.restore()
  // chicks: one pecking, one dashing back and forth, one behind looking about
  chick(c,222,200,1.15,-1,max(pk(t,.62),pk(t,.82)),0,0)
  chick(c,160+38*sin(T*t),236,1.25,cos(T*t)>0?1:-1,0,T*5*t,1)
  chick(c,36,214+sin(T*2*t),1,1,pk(t,.05,.08)+pk(t,.95,.08),0,0)
  fade(c,14);snap(c)
}
