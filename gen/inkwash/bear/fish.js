// ink wash bear standing in a stream, swiping the water with a paw, the fish flung up and caught in its jaws, water splashing
export const frames=32,delay=85,dither=true
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
  c.filter=`blur(${b}px)`;c.fillStyle=a.addColorStop?a:ink(a,k);c.beginPath();c.moveTo(...m(n-1))
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
const Y=198
// keyframes [t,...values], eased between
const key=(t,K)=>{
  const i=K.findIndex(k=>k[0]>t),a=K[i-1],b=K[i],e=sm(a[0],b[0],t)
  return a.map((v,j)=>v+(b[j]-v)*e)
}
const drop=(c,x,y,r,a)=>B(c,bz([x,y-r*1.6],[x,y+r]),u=>r*2*sin(PI*u**1.6)+.3,a,8)
// silver fish: its shape cut out of whatever is behind, then a dark back, tail and eye
const fish=(c,x,y,r,s,w)=>{
  c.save();c.translate(x,y);c.rotate(r);c.scale(s,s)
  const g=bz([20,0],[2,-1],[-16,w*2]),v=u=>13*sin(PI*min(1,u*.86+.1))**.7
  cut(c,()=>B(c,g,u=>v(u)+3,1,14))
  B(c,g,v,.16,14)
  for(const d of[-1,1])B(c,bz([-13,w*1.5],[-20,d*3+w*5],[-28,d*9+w*9]),tp(6,.5),.9,8)
  B(c,bz([20,-2],[2,-7],[-15,-2+w*2]),tp(5,.45),.92,12)
  B(c,bz([16,4],[2,6.5],[-12,3+w*2]),tp(1.4),.5,10)
  B(c,bz([9,-5],[7,0],[9,4]),tp(1.6),.6,6)
  E(c,14,-1,1.7,1.7,0,.96)
  c.restore()
}
export default(c,t)=>{
  const[,hx,hy,ha,op]=key(t,[[0,196,134,.42,0],[.3,196,134,.42,0],[.36,198,138,.48,0],[.5,193,110,-.3,.55],[.6,192,102,-.45,.6],[.64,192,102,-.42,.16],
    [.8,192,102,-.38,.16],[.86,190,98,-.72,.3],[.9,192,106,-.3,0],[1.01,196,134,.42,0]])
  const[,px,py]=key(t,[[0,176,206],[.1,176,206],[.27,212,124],[.3,213,122],[.36,204,208],[.46,202,208],[.62,176,206],[1.01,176,206]])
  const sk=.05*sin(T*8*t)*(t>.64&&t<.8),br=sin(T*2*t)
  // one fur flick: short tapered stroke from [x,y] along angle a
  const fl=(x,y,a,l,w,al)=>B(c,bz([x,y],[x+cos(a)*l*.6+sin(a)*l*.15,y+sin(a)*l*.6-cos(a)*l*.15],[x+cos(a)*l,y+sin(a)*l]),tp(w,.35),al,8)
  // leg: heavy tapered wet stroke, dark accent down its front, dark paw
  const leg=(g,w,a)=>{
    c.filter='blur(1.6px)';B(c,g,u=>(w-w*.5*u)*sm(-.2,.45,u),a,14)
    c.filter='blur(1px)';B(c,u=>g(.62+u*.38),u=>w*.56*sm(-.1,.5,u),a*.5,8)
    E(c,g(1)[0]+3,Y-5,w*.36,6,0,a+.2,1)
    c.filter='none'
  }
  leg(bz([76,140],[88,176],[78,214]),38,.4)
  leg(bz([146,136],[154,174],[147,214]),34,.4)
  // body: one loaded wash, darkest along hump and back, thinning to a soft belly
  const G=c.createLinearGradient(60,74,84,172)
  G.addColorStop(0,ink(.88));G.addColorStop(.42,ink(.66));G.addColorStop(.8,ink(.36));G.addColorStop(1,ink(.2))
  W(c,[[18,150],[17,114],[40,94],[80,89],[112,70],[148,77],[170,100],[176,136],[160,162],[120,170],[76,163],[40,172]],G,3.2)
  W(c,[[84,92],[108,72],[140,74],[162,96],[138,106],[104,104]],.45,5)
  W(c,[[20,130],[24,106],[48,96],[60,112],[44,138]],.3,5)
  // dry fur flicks: along the back, over the hump, rump, under the belly
  const bk=pl([[19,140],[20,116],[36,99],[62,93],[88,91],[102,82],[118,73],[140,75],[160,90],[170,106]])
  for(let k=0;k<22;k++){
    const u=(k+R(k)*.6)/22,[x,y]=bk(u),[X,Y2]=bk(u+.03),a=Math.atan2(Y2-y,X-x)
    fl(x+3*sin(a),y+3-3*cos(a),a+PI-.5-R(k+4)*.5,9+R(k+2)*8,2+R(k+6)*1.6,.55+.35*R(k+8))
  }
  for(let k=0;k<9;k++)fl(96+R(k+20)*60,88+R(k+30)*22,PI+.5+R(k+40)*.5,10+R(k)*7,2.4,.5)
  for(let k=0;k<8;k++)fl(70+k*11+R(k+50)*6,160+3*sin(k),PI*.62+R(k+60)*.3,8+R(k+70)*6,2,.4)
  for(let k=0;k<6;k++)fl(30+R(k+80)*24,112+k*8,PI*.7+R(k+90)*.5,9+R(k)*6,2.2,.5)
  fl(19,126,PI*.75,11,6,.85)
  // near hind leg, neck
  leg(bz([52,132],[32,172],[50,214]),50,.66)
  c.filter='blur(2.4px)'
  B(c,bz([146,104],[168,104+(hy-110)*.4],[hx-4,hy]),u=>52-14*u,.6,10)
  c.filter='none'
  for(let k=0;k<6;k++)fl(160+k*4,(92+hy)/2-14+k*2,-PI*.4+ha*.3-R(k)*.5,9+R(k+3)*5,2.2,.6)
  // head: pale wash, then a few confident strokes for brow, snout, jaw and ears; dark eye and nose
  c.save();c.translate(hx,hy+.8*br);c.rotate(ha+sk)
  E(c,0,0,23,20,0,.5,2)
  c.filter='blur(1px)';B(c,bz([8,3],[24,6],[37,7]),u=>22-9*u,.36,10);c.filter='none'
  c.save();c.rotate(op);B(c,bz([2,11],[18,17],[33,14]),tp(8,.45),.82,10);c.restore()
  B(c,bz([-16,-12],[0,-24],[18,-12],[39,0]),tp(6.5,.35),.9)
  B(c,bz([-18,-14],[-17,-30],[-4,-27],[-5,-17]),tp(6.5,.5),.92,10)
  B(c,bz([3,-20],[6,-31],[14,-26],[11,-17]),tp(4.5,.5),.7,10)
  E(c,39,4,5.8,4.8,.2,.96)
  cut(c,()=>E(c,12,-6,5,4.4,0,.45,1.2))
  E(c,12,-6,2.7,2.7,0,.96)
  for(let k=0;k<5;k++)fl(-16+k*3,2+k*4,PI*.6-k*.12,10,2.2,.6)
  c.restore()
  // striking foreleg, dark paw and claws
  c.filter='blur(1.4px)'
  B(c,bz([150,126],[(150+px)/2-12,(126+py)/2+18],[px,py]),u=>(42-21*u)*sm(-.2,.4,u),.72,14)
  c.filter='blur(.6px)'
  E(c,px+2,py,13,10,0,.9)
  c.filter='none'
  for(let k=0;k<4;k++)B(c,bz([px+7+k,py-8+k*5],[px+18+k,py-6+k*5.5]),tp(3,.4),.96,6)
  // legs dissolve below the waterline
  cut(c,()=>{
    const g=c.createLinearGradient(0,Y-4,0,Y+8)
    g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'#000')
    c.fillStyle=g;c.fillRect(0,Y-4,256,99)
  })
  // stream: broken dry strokes
  for(let k=0;k<8;k++){
    const x=10+R(k+1)*190,y=Y+5+(k*13)%40,l=28+R(k+3)*44
    B(c,u=>[x+l*u,y+2.5*sin(u*5+k)-2*u],tp(2.2+R(k+5)*2.4,.5+.4*R(k)),.24+.26*R(k+7),12)
  }
  // fish: a shadow in the stream, flung up by the paw, caught, gulped
  const m=[hx+31*cos(ha)-10*sin(ha),hy+31*sin(ha)+10*cos(ha)]
  if(t<.34){
    const p=t/.34
    c.filter='blur(2px)';B(c,bz([236-30*p,216],[206-30*p,218+2*sin(T*3*t)]),tp(10),.4*sm(0,.2,p),10);c.filter='none'
  }else if(t<.62){
    const p=(t-.34)/.28
    fish(c,204+(m[0]-204)*p,Y+(m[1]-Y)*p-44*sin(PI*p),-1.2-T*p+(ha+PI/2+T+1.2)*p*p,1.6,sin(T*5*t))
  }else if(t<.9)fish(c,m[0],m[1]+1,ha+PI/2+.45*sin(T*6*t)*(t<.81),1.6*(1-sm(.81,.9,t)),sin(T*6*t+1)*(t<.81))
  // water over the legs: flowing strokes, foam rings cut where the legs stand
  for(let k=0;k<5;k++){
    const p=(t+k/5)%1,y=Y+4+(k*17)%38,x=250-230*p
    c.filter='blur(.6px)'
    B(c,u=>[x+(u-.5)*(56+k*9),y+2*sin(u*5+k)],tp(3.4,.8),.55*sin(PI*p)**.6,12)
    c.filter='none'
  }
  cut(c,()=>{
    for(const[x,w]of[[48,17],[76,12],[146,12],[py<Y-4?-99:px,14]])
      for(let k=0;k<3;k++)E(c,x+(k-1)*w*.7+2*sin(T*2*t+k*2+x),Y+2,w*.45,3+.8*sin(T*2*t+k),0,.9,1.2)
  })
  // splash from the strike
  const p=(t-.335)/.4
  if(p>0&&p<1){
    // a burst of pale wash thrown up, foam and spray cut out of it
    c.filter='blur(2px)'
    for(let k=0;k<5;k++)B(c,bz([206+(k-2)*5,Y+4],[206+(k-2)*13,Y-20-30*p],[206+(k-2)*(20+16*p),Y-34-44*p+60*p*p]),tp(13+8*p,.5),.34*(1-p)**1.2,10)
    c.filter='none'
    cut(c,()=>{
      E(c,206,Y+3,14+26*p,4+5*p,0,.9*(1-p),1.5)
      for(let k=0;k<9;k++)E(c,206+(R(k+2)-.5)*(30+50*p),Y-8-R(k+12)*(26+46*p)+50*p*p,2.4+R(k)*2.6,2+R(k+1)*2,k,.95,.6)
    })
    for(let k=0;k<14;k++){
      const a=-PI/2+(R(k+.5)-.5)*2.6,s=30+R(k+3)*60
      drop(c,206+cos(a)*s*p,Y-2+sin(a)*s*p+80*p*p,(1.8+R(k+5)*2.4)*(1-.5*p),.85*(1-p**3))
    }
    for(let k=0;k<3;k++){
      const e=p-k*.14
      if(e>0)B(c,u=>[206+(14+46*e)*cos(.2+u*2.75+k),Y+8+(3+9*e)*sin(.2+u*2.75+k)],tp(2.6,.8),.6*(1-p)**.8,16)
    }
  }
  fade(c,14);snap(c,8,8)
}
