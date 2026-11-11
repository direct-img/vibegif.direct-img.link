// ink wash hydrangea head of blue-violet dabs nodding in the rain, drops rolling off its dark leaves
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
export const frames=24,dither=true,delay=85

const leaf=(c,x,y,h,L,w,a,s)=>{
  const d=(l,q)=>[x+l*cos(h+q),y+l*sin(h+q)],P=[[x,y],d(L*.35,.16),d(L*.7,.12),d(L,-.02)],q=sp(P,10)
  br(c,P,w,a,{f:u=>sin(PI*u**.7)**.6,s})
  cut(c,()=>{
    st(c,P,1.8,'#000',{f:u=>1-.7*u,u:.9})
    ;[[2,1],[3,-1],[5,1],[6,-1]].forEach(([k,e])=>{
      const[x,y,i,j]=q[k],l=w*.36*sin(PI*k/10)
      st(c,[[x,y],[x+(j*.8+i*e)*l,y+(-i*.8+j*e)*l]],1.3,'#000',{f:u=>1-u})
    })
  })
  return P
}

// florets: seeded, spaced out over a dome
const r=rnd(11),FL=[]
for(let k=0;k<400&&FL.length<34;k++){
  const h=r()*T,l=r()**.5,x=l*58*cos(h),y=l*46*sin(h)
  FL.every(([a,b])=>hypot(a-x,b-y)>14.5)&&FL.push([x,y,r(),r(),r()])
}

export default(c,t)=>{
  const w=k=>sin(T*t-k),nod=.05*w(0)+.015*sin(2*T*t+1)
  // rain
  for(let k=0;k<7;k++){
    const p=(t*2+k/7)%1,x=20+(k*97)%230,y=-30+p*290
    st(c,[[x,y],[x-6,y+28]],1.7,ink(.34*sin(PI*p)),{f:u=>u**.5})
  }
  c.translate(0,-12)
  br(c,[[112,262],[116,206],[126,160]],8,.85,{f:u=>1-.3*u,s:1})
  // a bead rolls down each leaf, tips it, drops off
  const lf=(x,y,h,L,wd,a,s,ph)=>{
    const p=(t+ph)%1,dip=.09*ss(.15,.55,p)*(1-ss(.55,.7,p)),P=leaf(c,x,y,h+dip*(cos(h)>0?1:-1),L,wd,a,s),
      [X,Y]=sp(P,20)[round(lp(5,20,cl(p/.55)))],v=cl((p-.55)/.45)
    v>0?(wash(c,X,Y+v*v*90+3,2.2,3.3,ink(.34*(1-v**3)),{bl:.4,w:0}),st(c,[[X-2,Y+v*v*90+3],[X,Y+v*v*90+7],[X+2,Y+v*v*90+3]],1.6,ink(.8*(1-v**3))))
      :cut(c,()=>{c.filter='blur(.6px)';c.beginPath();c.arc(X,Y-1,3*min(1,p*8),0,T);c.fill()})
  }
  lf(120,200,-.42+.02*w(1),74,32,.36,5,.5)
  lf(116,206,2.72+.03*w(.5),96,42,.86,2,0)
  lf(122,190,.3+.03*w(1.2),88,38,.8,3,.62)
  // the head
  c.translate(116,236);c.rotate(nod);c.translate(-116,-236)
  br(c,[[122,178],[131,138],[140,112]],7,.85,{f:u=>1-.3*u,s:2})
  c.globalCompositeOperation='multiply'
  FL.forEach(([x,y,p,q,v],k)=>{
    const X=140+x,Y=92+y,a=lp(.26,.62,cl(v*.6+(y+46)/150+.1)),
      col=[lp(88,132,p),lp(106,98,p),lp(170,162,p)].map(round)+''
    for(let m=0;m<4;m++){
      const h=q*T+m*PI/2
      wash(c,X+5*cos(h),Y+5*sin(h),5.4,4.6,ink(a,col),{bl:.6,s:k+m,ro:h,w:.1})
    }
    v>.4&&wash(c,X,Y,1.4,1.4,ink(.8),{bl:.3})
  })
  c.globalCompositeOperation='source-over'
  c.resetTransform()
  fade(c);snap(c)
}
