// ink wash loquat branch, a cluster of apricot fruit and big veined leaves swaying
const{PI,sin,cos,min,max,abs,hypot,round}=Math,T=PI*2
const ink=(a,k='20,18,16')=>`rgba(${k},${a})`
const rnd=s=>()=>(s=s*16807%2147483647)/2147483647
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
export const frames=24,dither=true,delay=85

const leaf=(c,x,y,h,L,w,a,s)=>{
  const d=(l,q)=>[x+l*cos(h+q),y+l*sin(h+q)],P=[[x,y],d(L*.35,.13),d(L*.7,.1),d(L,-.03)],q=sp(P,10)
  br(c,P,w,a,{f:u=>sin(PI*u**.75)**.7,s})
  // veins are scratched out of the ink
  cut(c,()=>{
    st(c,P,1.8,'#000',{f:u=>1-.7*u,u:.9})
    ;[[2,1],[4,-1],[5,1],[7,-1]].forEach(([k,e])=>{
      const[x,y,i,j]=q[k],l=w*.34*sin(PI*k/10)
      st(c,[[x,y],[x+(j*.8+i*e)*l,y+(-i*.8+j*e)*l]],1.3,'#000',{f:u=>1-u})
    })
  })
}

const AP='206,138,62'
const fr=(c,x,y,r,s)=>{
  wash(c,x,y,r*.88,r,ink(.6,AP),{bl:.9,s,w:.05})
  wash(c,x-r*.3,y+r*.35,r*.5,r*.5,ink(.32,'170,92,40'),{bl:2,s})
  st(c,[[x-r*.85,y-r*.5],[x-r*.95,y+r*.2],[x-r*.4,y+r*.95]],2.6,ink(.6),{s})
  wash(c,x+r*.1,y+r*.92,2.6,1.8,ink(.9),{bl:.4,s})
}

export default(c,t)=>{
  const w=k=>sin(T*t-k)
  c.translate(0,54);c.rotate(.03*w(0));c.translate(0,-36)
  leaf(c,96,70,-.55+.05*w(.6),84,30,.34,5)
  br(c,[[2,36],[52,50],[98,72],[128,104]],11,.9,{f:u=>1-.55*u,s:1})
  dry(c,[[2,36],[52,50],[98,72],[128,104]],10,ink(.5),{u0:.1,k:4})
  leaf(c,124,100,.2+.06*w(.9),104,34,.86,2)
  leaf(c,58,52,1.25+.07*w(.4),92,32,.6,3)
  // the cluster hangs and swings a beat behind
  c.translate(128,104);c.rotate(.07*w(1.1));c.translate(-128,-104)
  for(const[x,y]of[[118,134],[146,138],[132,160]])st(c,[[128,104],[(x+128)/2+3,(y+104)/2],[x,y-12]],3.4,ink(.85),{f:u=>1-.5*u})
  c.globalCompositeOperation='multiply'
  ;[[106,150,20],[152,154,21],[129,142,19],[118,182,21],[148,186,19]].forEach(([x,y,r],k)=>fr(c,x,y,r,k+1))
  c.globalCompositeOperation='source-over'
  c.resetTransform()
  c.translate(0,54);c.rotate(.03*w(0));c.translate(0,-36)
  leaf(c,116,96,2.2+.08*w(1.4),72,28,.8,4)
  c.resetTransform()
  fade(c);snap(c)
}
