// ink wash jellyfish pulsing upward, translucent layered bell with a dark rim, frilly arms and trailing hairline tentacles
export const frames=24,delay=80,dither=true
const{sin,cos,PI,hypot,min,round,floor}=Math,T=2*PI
const ink=(a,k='20,18,16')=>`rgba(${k},${a})`
const bz=(...p)=>u=>{
  let q=p
  while(q[1])q=q.slice(1).map((v,k)=>[q[k][0]+(v[0]-q[k][0])*u,q[k][1]+(v[1]-q[k][1])*u])
  return q[0]
}
// brush stroke: outline offset from centerline f by width profile w
const B=(c,f,w,a,n=22)=>{
  const P=[],Q=[]
  for(let k=0;k<=n;k++){
    const u=k/n,[x,y]=f(u),[X,Y]=f(u+.02),d=hypot(X-x,Y-y)||1,h=w(u)/2,nx=(Y-y)/d*h,ny=(x-X)/d*h
    P.push([x+nx,y+ny]);Q.unshift([x-nx,y-ny])
  }
  c.fillStyle=ink(a);c.beginPath();[...P,...Q].map(([x,y])=>c.lineTo(x,y));c.fill()
}
const tp=(w,e=.6)=>u=>w*sin(PI*min(1,u)**e)+.4
const snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=round(d[k+j]/s)*s;d[k+3]=min(255,round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}
export default(c,t)=>{
  const s=sin(T*t),q=sin(T*t-1.3),w=43-7*s,h=37+7*s
  const dome=(m=1,o=0)=>{
    const W=w*m,H=h*m
    c.beginPath();c.moveTo(-W,6+o)
    c.bezierCurveTo(-W*1.04,-H*.7+o,-W*.62,-H+o,0,-H+o)
    c.bezierCurveTo(W*.62,-H+o,W*1.04,-H*.7+o,W,6+o)
    for(let k=0;k<4;k++)c.quadraticCurveTo(W-(k+.5)*W/2,o-3-2*s,W-(k+1)*W/2,6+o)
  }
  // drifting specks
  for(let k=0;k<5;k++){
    const p=(t+k/5)%1
    c.fillStyle=ink(.36*sin(PI*p));c.beginPath()
    c.arc(30+((k*97)%190)+6*sin(T*p+k),40+((k*61)%60)+p*90,1.2+k%2*.6,0,T);c.fill()
  }
  c.translate(102,84-7*q);c.rotate(-.28);c.scale(1.3,1.3)
  // tentacles: travelling wave down each hairline
  for(let k=0;k<7;k++){
    const x=(k/6-.5)*1.7*w,L=(78+((k*37)%30))*(1-.07*q)
    B(c,u=>[x*(1-.45*u)+(4+9*u)*u*sin(u*5.5-T*t+k*1.9),7+u*L],u=>(2.4*(1-u)+.6)*(1+.4*sin(u*9+k)),k%2?.36:.6,30)
  }
  // frilly oral arms
  c.globalCompositeOperation='multiply'
  c.filter='blur(1px)'
  for(let k=0;k<3;k++){
    const x=(k-1)*.3*w
    B(c,u=>[x*(1-.3*u)+9*u*sin(u*4.5-T*t+k*2.3+1),5+u*(64-k*9)*(1-.08*q)],u=>(12*(1-u)**.7+1.5)*(1+.4*sin(u*17+k*2-T*t)),.36,30)
  }
  // bell: wash pooling toward the edge
  const g=c.createRadialGradient(-w*.1,-h*.25,w*.2,0,-h*.3,w*1.1)
  g.addColorStop(0,ink(.07));g.addColorStop(.75,ink(.3));g.addColorStop(1,ink(.42))
  c.filter='blur(2px)';c.fillStyle=g;dome();c.fill()
  c.fillStyle='rgba(84,78,138,.16)';dome(.92,-1);c.fill()
  // four soft lobes inside
  c.filter='blur(2.5px)'
  for(let k=0;k<4;k++){
    c.fillStyle=ink(.26);c.beginPath()
    c.ellipse((k-1.5)*w*.27,-h*.52+3*(k%3==0),w*.11,h*.17,(k-1.5)*.25,0,T);c.fill()
  }
  c.filter='blur(.6px)'
  // rim and broken contour
  B(c,bz([-w-1,4],[-w*.5,13+2*s],[w*.5,13+2*s],[w+1,4]),tp(7.5,.5),.78)
  B(c,bz([-w,5],[-w*1.06,-h*.72],[-w*.6,-h*1.02],[-w*.05,-h]),tp(4.6,.45),.6)
  B(c,bz([w*.55,-h*.84],[w*.95,-h*.62],[w*1.02,-h*.3],[w,-2]),tp(2.4),.36)
  c.filter='none'
  B(c,bz([-w*.8,7],[-w*.3,11+2*s],[w*.1,11+2*s],[w*.45,9]),tp(2.6),.93)
  c.setTransform(1,0,0,1,0,0);c.globalCompositeOperation='source-over'
  snap(c)
}
