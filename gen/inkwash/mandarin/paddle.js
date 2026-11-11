// ink wash pair of mandarin ducks paddling side by side on still water, ripples spreading behind them, soft orange on the drake
export const frames=24,delay=85,dither=true
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
const O='188,112,56'
// broken ripple arc, tapered at both ends
const rip=(c,x,y,rx,ry,a0,a1,w,a)=>B(c,u=>[x+rx*cos(a0+u*(a1-a0)),y+ry*sin(a0+u*(a1-a0))],tp(w,.8),a,18)
const duck=(c,t,x,y,s,dk,ph)=>{
  const b=sin(T*2*t+ph),n=1.8*sin(T*2*t+ph+1)
  c.save();c.translate(x,y+1.2*b);c.scale(s,s)
  // reflection, wavering
  c.save();c.scale(1,.42);c.translate(0,34)
  W(c,[[-36,0],[-20,8+2*b],[10,10-2*b],[42,4],[30,-4],[-20,-4]],.16,4)
  c.restore()
  // body
  W(c,[[-36,-3],[-30,-19],[-6,-25],[22,-21],[40,-13],[50,-12],[44,0],[28,10],[0,12],[-26,10]],dk?.5:.36,1.4)
  c.globalCompositeOperation='multiply'
  if(dk){
    W(c,[[-12,-9],[14,-12],[32,-2],[14,10],[-12,9]],.55,2.5,O)
    W(c,[[6,-19],[18,-43],[30,-26],[27,-14],[14,-12]],.7,1.2,O)
    c.globalCompositeOperation='source-over'
    B(c,bz([6,-18],[10,-34],[18,-44]),tp(3,.5),.8)
    W(c,[[-38,-5],[-31,-21],[-17,-19],[-17,6],[-28,10]],.82,1.2)
    cut(c,()=>{
      B(c,bz([-15,-19],[-11,-8],[-13,6]),tp(2.6),1,10)
      B(c,bz([-9,-18],[-5,-8],[-7,5]),tp(2.2),1,10)
    })
  }else{
    c.globalCompositeOperation='source-over'
    for(let k=0;k<7;k++)E(c,-30+R(k)*18,-12+R(k+3)*18,2.2,1.6,k,.45,.6)
  }
  // back and tail strokes, wing dry brush
  B(c,bz([-22,-21],[0,-28],[26,-22],[52,-13]),tp(dk?6:5,.45),dk?.85:.6)
  D(c,bz([-4,-14],[14,-14],[30,-8],[46,-6]),()=>12,dk?.7:.5,5,dk+2)
  // neck and head, nodding with the stroke
  c.translate(n,0)
  W(c,[[-39,-30],[-24,-32],[-17,-14],[-35,-9]],dk?.55:.4,1.2)
  if(dk){
    W(c,[[-47,-38],[-41,-49],[-26,-52],[-10,-46],[-2,-33],[-18,-34],[-28,-27],[-41,-28]],.85,1)
    cut(c,()=>B(c,bz([-42,-42],[-30,-47],[-18,-42],[-6,-36]),tp(6.5,.4),1,14))
    for(let k=0;k<4;k++)B(c,bz([-36,-33],[-32-k,-24],[-25-k*2.5,-13+k]),tp(3),.75,10,O)
    B(c,bz([-46,-38],[-52,-37],[-56,-34]),tp(4.5,.4),.85,8,'170,66,48')
  }else{
    W(c,[[-46,-37],[-40,-47],[-27,-48],[-17,-40],[-19,-31],[-30,-27],[-41,-29]],.6,1)
    cut(c,()=>{
      E(c,-37,-39,3.6,3.2,0,1)
      B(c,bz([-35,-39],[-28,-40],[-20,-36]),tp(2),1,8)
    })
    B(c,bz([-45,-37],[-51,-36],[-55,-34]),tp(4,.4),.85,8)
  }
  E(c,-37,-39.5,1.9,1.9,0,.95)
  c.restore()
}
export default(c,t)=>{
  // still water: a few long pale strokes
  c.filter='blur(1px)'
  B(c,bz([10,196],[80,190],[170,200],[246,192]),tp(7,.7),.16)
  B(c,bz([40,228],[110,222],[170,230],[236,224]),tp(5,.7),.14)
  c.filter='none'
  // ripples slide back from each bird
  for(const[x,y,s]of[[176,110,1.1],[100,168,1.4]])
    for(let k=0;k<3;k++){
      const p=(t+k/3)%1,a=.55*sin(PI*p)**.7
      rip(c,x+(26+50*p)*s,y+4*s,(34+30*p)*s,(5+8*p)*s,-1.1,1.2,2.6,a)
      rip(c,x+(26+50*p)*s,y+4*s,(34+30*p)*s,(5+8*p)*s,1.7,2.9-p,2,a*.7)
      rip(c,x-(36-10*p)*s,y+(8+10*p)*s,(16+30*p)*s,(3+5*p)*s,.5,2.5,2,a*.8)
    }
  duck(c,t,178,106,1.12,0,1.6)
  duck(c,t,106,162,1.4,1,0)
  fade(c,14);snap(c)
}
