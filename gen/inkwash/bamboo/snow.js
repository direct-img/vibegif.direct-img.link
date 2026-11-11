// ink wash bamboo leaves bowed under snow, the snow sliding off in a spray of flecks and the leaves springing back up
const{PI,sin,cos,min,max,abs,hypot,round}=Math,T=PI*2
const ink=(a,k='20,18,16')=>`rgba(${k},${a})`
const rnd=s=>()=>(s=s*16807%2147483647)/2147483647
const cl=(x,a=0,b=1)=>min(b,max(a,x))
const ss=(a,b,x)=>(x=cl((x-a)/(b-a)))*x*(3-2*x)
const lp=(a,b,x)=>a+(b-a)*x
// smooth curve through points, sampled as [x,y,normal x,normal y]
const sp=(P,n=32)=>{
  const Q=[P[0],...P,P.at(-1)],o=[]
  for(let k=0;k<=n;k++){
    const u=k/n*(P.length-1),j=min(u|0,P.length-2),f=u-j,[a,b,d,e]=Q.slice(j,j+4)
    o.push([0,1].map(m=>.5*(2*b[m]+(d[m]-a[m])*f+(2*a[m]-5*b[m]+4*d[m]-e[m])*f*f+(3*b[m]-a[m]-3*d[m]+e[m])*f**3)))
  }
  return o.map(([x,y],k)=>{
    const[a,b]=o[max(k-1,0)],[g,h]=o[min(k+1,n)],l=hypot(g-a,h-b)||1
    return[x,y,(b-h)/l,(g-a)/l]
  })
}
// outline of a brush stroke: f = pressure along it, u = how much is painted, d = sideways lean, s = seed for the wobbly edge
const ol=(c,P,w,{f=u=>sin(PI*u**.6)**.8,u=1,d=0,n=32,s=1,e=.1}={})=>{
  const q=sp(P,n),m=round(n*u),L=[],B=[]
  for(let k=0;k<=m;k++){
    const[x,y,i,j]=q[k],r=w/2*f(k/n)*(1+e*sin(k*.6+s*9))*min(1,(m-k)/3+(u<1?.2:1))
    L.push([x+i*r*(1+d),y+j*r*(1+d)]);B.push([x-i*r*(1-d),y-j*r*(1-d)])
  }
  c.beginPath()
  for(const[x,y]of[...L,...[...B].reverse()])c.lineTo(x,y)
  c.closePath()
  return[L,B]
}
const st=(c,P,w,col,o)=>{c.fillStyle=col;ol(c,P,w,o);c.fill()}
// loaded brush: a paler full stroke with a darker core leaning to one side
const br=(c,P,w,a,o={})=>{
  st(c,P,w,ink(a*.55,o.k),o)
  st(c,P,w*.6,ink(a*.8,o.k),{...o,d:(o.d||0)+.45})
}
// dry brush: broken hairlines running along the stroke
const dry=(c,P,w,col,{u0=.4,u=1,n=32,k=5,s=1}={})=>{
  const q=sp(P,n),r=rnd(s*77+1)
  c.strokeStyle=col
  for(let j=0;j<k;j++){
    const o=(j/(k-1)-.5)*w*.8,a=round(n*lp(u0,u,r()*.5)),b=round(n*lp(u0,u,.6+r()*.4))
    c.lineWidth=.5+r()
    c.beginPath()
    for(let i=a;i<=b;i++)c.lineTo(q[i][0]+q[i][2]*o,q[i][1]+q[i][3]*o)
    c.stroke()
  }
}
// wet wash: a soft wobbly blob
const wash=(c,x,y,a,b,col,{bl=3,s=1,ro=0,w=.15}={})=>{
  c.save();c.translate(x,y);c.rotate(ro);c.filter=`blur(${bl}px)`;c.fillStyle=col
  c.beginPath()
  for(let k=0;k<40;k++){
    const h=k/40*T,r=1+w*sin(2*h+s*5)+w*.6*sin(3*h+s*11)
    c.lineTo(a*r*cos(h),b*r*sin(h))
  }
  c.fill();c.restore()
}
// light areas are holes in the ink
const cut=(c,f)=>{c.save();c.globalCompositeOperation='destination-out';c.fillStyle=c.strokeStyle='#000';f();c.restore()}
const fade=(c,w=16)=>{
  c.save();c.globalCompositeOperation='destination-out'
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
}
const snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=round(d[k+j]/s)*s;d[k+3]=min(255,round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}
export const frames=32,dither=true,delay=80

// a leaf from x,y; returns its sampled centreline
const leaf=(c,x,y,h,L,w,a,s)=>{
  const d=(l,q)=>[x+l*cos(h+q),y+l*sin(h+q)],P=[[x,y],d(L*.4,-.06),d(L*.75,0),d(L,.1)]
  st(c,P,w,ink(a),{f:u=>sin(PI*u**.5)**1.1,s,e:.04})
  a>.6&&dry(c,P,w*.5,ink(.5),{u0:.6,u:1,k:3,s})
  return sp(P,24)
}

// snow lying on a leaf: m = how much, v = how far it has slid; a bare hole in the ink, ink pooled and shadowed just under its edge
const snow=(c,q,w,m,v)=>{
  if(m<.03)return
  const a=round(lp(1,12,v)),b=min(24,a+18),e=q[9][3]<0?1:-1,
    lo=k=>{const[x,y,i,j]=q[k],o=e*w*(.2*m+.09*sin(k*.75+a)-.1)*sin(PI*(k/24)**.5);return[x-i*o,y-j*o]},E=[]
  for(let k=a;k<=b;k++)E.push(lo(k))
  c.filter='blur(1.6px)';st(c,E,w*.5,ink(.5*m),{f:u=>sin(PI*u)**.4});c.filter='none'
  st(c,E,2.6,ink(.9*m),{f:u=>sin(PI*u)**.4,e:.3})
  cut(c,()=>{
    c.beginPath()
    for(let k=a;k<=b;k++){
      const u=(k-a)/(b-a),[x,y,i,j]=q[k],r=w*.5*sin(PI*(k/24)**.5)+m*(6*sin(PI*u)**.45*(1+.2*sin(u*9+a))+1)
      c.lineTo(x+i*e*r,y+j*e*r)
    }
    for(let k=b;k>=a;k--)c.lineTo(...lo(k))
    c.fill()
  })
}

// snow shaken loose: a faint mist that spreads and thins, and a spray of pale dry specks
const puff=(c,x,y,u,s)=>{
  const r=rnd(s*31+7)
  wash(c,x+4*u,y+u*46,7+u*20,5+u*15,ink(.17*(1-u)**1.5),{bl:4,s})
  for(let k=0;k<11;k++){
    const d=r(),h=r()*T,l=(3+r()*16)*u**.6,X=x+l*cos(h)+6*u,Y=y+l*sin(h)*.6+u*u*(70+d*90)+u*14,z=.7+r()
    st(c,[[X,Y-z*(1+3*u)],[X+.4,Y+z]],z*1.5,ink((.28+.2*r())*(1-u)**.8),{f:v=>.5+.5*v})
  }
}

// a spray of leaves: p = its own clock; loaded, the snow slips, the spray springs back, snow settles again
const spray=(c,x,y,lv,p,t)=>{
  const z=p-.12,ld=z<0?1:z<.42?Math.exp(-9*z)*cos(24*z):ss(.5,.98,p),
    m=z<.14?1-ss(.02,.14,z):ss(.5,.98,p),v=ss(-.1,.14,z)
  lv.forEach(([h,L,w,a,sn],k)=>{
    const q=leaf(c,x,y+4*ld,h+(.34+.05*k)*ld*(cos(h)>0?1:-1)+.02*sin(T*t+k),L,w,a,k+x)
    sn&&snow(c,q,w,m,v)
    // the slid snow shakes off the tip
    sn&&z>0&&z<.45&&puff(c,q[20][0],q[20][1]+3,z/.45,k+x)
  })
}

export default(c,t)=>{
  // culm and twigs
  const cu=(P,s)=>{br(c,P,13,.62,{f:u=>.9+.1*cos(u*T),s,e:.03});dry(c,P,10,ink(.35),{u0:.1,u:.9,k:3,s})}
  cu([[60,262],[63,206],[66,152]],1);cu([[66,147],[70,96],[73,48]],2);cu([[73,43],[75,16],[76,-8]],3)
  for(const[x,y]of[[66,150],[73,46]])st(c,[[x-9,y-1],[x,y+1.5],[x+9,y-1]],4,ink(.93),{f:u=>.6+.4*sin(PI*u)})
  const A=(t+.02)%1,B=(t+.52)%1,sg=p=>{const z=p-.12;return z<0?1:z<.42?Math.exp(-9*z)*cos(24*z):ss(.5,.98,p)}
  st(c,[[68,149],[110,134],[152,126+4*sg(A)]],3.4,ink(.85),{f:u=>1-.5*u})
  st(c,[[74,45],[104,42],[128,48+4*sg(B)]],3,ink(.85),{f:u=>1-.5*u})
  // a loose pale wash behind each spray, so the snow on top has something to sit against
  c.filter='blur(5px)'
  st(c,[[104,22],[150,40],[200,78]],40,ink(.17),{s:2,e:.25,f:u=>sin(PI*u)**.6})
  st(c,[[120,104],[176,118],[232,160]],44,ink(.15),{s:5,e:.25,f:u=>sin(PI*u)**.6})
  c.filter='none'
  spray(c,128,48,[[.05,74,15,.36],[.5,84,17,.9,1],[1.05,62,14,.8],[-.5,50,12,.55,1]],B,t)
  spray(c,152,126,[[.55,66,14,.36],[.1,88,18,.9,1],[.85,76,16,.82,1],[2.3,54,13,.6]],A,t)
  // a few flakes still drifting down
  for(let k=0;k<6;k++){
    const p=(t+k/6)%1,x=30+(k*89)%200+8*sin(T*p+k)
    wash(c,x,p*262-4,1.7,1.5,ink(.34*sin(PI*p)),{bl:.5,w:.2,s:k})
  }
  fade(c);snap(c)
}
