// ink wash octopus drifting in, then jetting away and leaving a blooming cloud of ink that slowly disperses
export const frames=30,delay=85,dither=true
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
// one arm: heading integrated along its length, waving, curling at the tip
const arm=(k,sp,L,ph)=>{
  let x=(k/7-.5)*22,y=6
  const a0=(k/7-.5)*2.5*sp,p=[[x,y]]
  for(let j=1;j<=20;j++){
    const u=j/20,a=a0+(.2+.5*sp)*sin(u*5-ph+k*1.3)*u+(k<4?-1:1)*(1+(k*5)%3*.5)*u*u*sp
    x+=sin(a)*L/20;y+=cos(a)*L/20;p.push([x,y])
  }
  return pl(p)
}
export default(c,t)=>{
  // ink cloud, born at the jet and thinning out past the loop point
  const p=(t+.5)%1/.62,O=[166,150]
  if(p<1){
    c.globalCompositeOperation='multiply'
    for(let k=0;k<11;k++){
      const a=R(k)*T,d=(10+R(k+20)*52)*(1-(1-p)**2.5)
      E(c,O[0]+cos(a)*d+14*p,O[1]+sin(a)*d*.8+10*p,(9+R(k+40)*13)*(.3+p*1.15),(7+R(k+60)*11)*(.3+p*1.15),a,
        .7*(1-p)**1.15*min(1,p*9),1.5+round(p*5))
    }
    E(c,O[0]+6*p,O[1]+4*p,10+22*p,8+18*p,.4,.9*(1-p)**3*min(1,p*12),2)
    for(let k=0;k<5;k++){
      const a=R(k+7)*T,l=(30+R(k+9)*40)*(1-(1-p)**2),s=k%2?1:-1
      c.filter='blur(1px)'
      B(c,bz(O,[O[0]+cos(a)*l*.5,O[1]+sin(a)*l*.5],[O[0]+cos(a+s*.6)*l,O[1]+sin(a+s*.6)*l],[O[0]+cos(a+s*1)*l*1.3+14*p,O[1]+sin(a+s*1)*l*1.3+10*p]),
        tp(5+6*p,.8),.4*(1-p)**1.2*min(1,p*9))
      c.filter='none'
    }
    c.globalCompositeOperation='source-over'
  }
  // octopus: drifts in, hovers, gathers itself, jets
  if(t<.66){
    const e=1-(1-min(1,t/.34))**2,j=sm(.5,.64,t)**1.6
    const x=300+(146-300)*e-240*j,y=266+(132-266)*e-170*j
    const sw=sin(T*t/.17),sp=t<.34?.5+.18*sw:.5+.6*sm(.34,.47,t)-.98*sm(.47,.53,t)
    const m=1+.1*sm(.36,.48,t)-.24*sm(.48,.54,t)+.04*sw*(t<.34),L=66*(1+.25*j+.2*sm(.48,.56,t))
    c.translate(x,y+2*sw*(t<.34));c.rotate(-.9);c.scale(1.3,1.3)
    c.globalCompositeOperation='multiply'
    c.filter='blur(.7px)'
    for(let k=0;k<8;k++)B(c,arm(k,sp,L*(.82+(k*3)%4*.07),T*t*3),u=>(11*(1-u)**.8+1.2)*(1+.12*sin(u*9+k)),k%3?.55:.78,24)
    c.globalCompositeOperation='source-over'
    // mantle: wet mass, darker where the ink pools
    c.save();c.scale(m,1/m**.5)
    W(c,[[-19,-6],[-25,-32],[-13,-58],[8,-61],[24,-38],[19,-6],[0,3]],.55,1.6)
    W(c,[[-17,-14],[-23,-34],[-12,-55],[2,-56],[-2,-30]],.36,3)
    for(let k=0;k<7;k++)E(c,-12+R(k+3)*28,-50+R(k+5)*36,1.5+R(k)*2.6,1.2+R(k+1)*2,k,.36,1)
    c.filter='blur(.5px)'
    B(c,bz([-16,-4],[-27,-28],[-18,-58],[4,-62]),tp(5.5,.5),.85)
    B(c,bz([14,-58],[24,-48],[25,-30],[20,-12]),tp(2.6),.55)
    c.filter='none'
    c.restore()
    // head and eyes
    E(c,0,4,18,10,0,.6,1.2)
    for(const s of[-1,1]){
      cut(c,()=>E(c,s*13,1,6.5,5,0,.4,1.5))
      E(c,s*13,1.5,4.2,2,s*.3,.95)
    }
    c.setTransform(1,0,0,1,0,0)
  }
  fade(c,22);snap(c)
}
