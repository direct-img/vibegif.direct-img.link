// ink wash pomegranate hanging on a twig, splitting open to show translucent red seeds, leaves swaying
import{createCanvas}from'@napi-rs/canvas'
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
// paint onto a spare layer so a whole group can fade as one
const lay=(c,a,f)=>{
  if(a<.01)return
  const o=createCanvas(256,256)
  f(o.getContext('2d'));c.globalAlpha=a;c.drawImage(o,0,0);c.globalAlpha=1
}
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
export const frames=28,dither=true,delay=[...Array(28)].map((_,k)=>k==19?1300:85)

const RD='150,44,38',X=120,Y=152

const leaf=(c,x,y,h,L,w,a,s)=>{
  const d=(l,q)=>[x+l*cos(h+q),y+l*sin(h+q)]
  br(c,[[x,y],d(L*.4,.14),d(L*.75,.1),d(L,-.04)],w,a,{f:u=>sin(PI*u**.7)**.8,s})
}

// the split: a jagged wedge down the front, r = [x, half width] per step
const wedge=(c,o)=>{
  const r=rnd(5),L=[],B=[]
  for(let k=0;k<=12;k++){
    const u=k/12,w=o*24*sin(PI*u**.8)**.6*(.75+.5*r()),x=X+10+8*sin(u*4)+3*u,y=Y-36+u*74
    L.push([x-w,y]);B.unshift([x+w*.9,y])
  }
  c.beginPath()
  for(const[x,y]of[...L,...B])c.lineTo(x,y)
  c.closePath()
  return[L,B.reverse()]
}

const fruit=(c,o)=>{
  c.globalCompositeOperation='multiply'
  const A=(a,b,r=45)=>[0,.33,.66,1].map(u=>[X+r*cos(lp(a,b,u)),Y+r*.96*sin(lp(a,b,u))])
  wash(c,X,Y,45,43,ink(.5,RD),{bl:1.2,s:2,w:.06})
  // colour pools along the low side
  c.filter='blur(2px)'
  st(c,A(1.2,3.7,35),20,ink(.4,RD),{s:3})
  st(c,A(1.9,3.2,39),9,ink(.3),{s:4})
  c.filter='none'
  c.globalCompositeOperation='source-over'
  // broken contour
  st(c,A(1.9,3.9),5,ink(.78),{s:1})
  st(c,A(5.2,6.1),3,ink(.5),{s:2})
  st(c,A(.5,1.2),3.5,ink(.6),{s:3})
  // crown
  for(const[q,l]of[[-.7,15],[-.15,19],[.4,17],[.9,12]])
    st(c,[[X+4+q*7,Y+41],[X+4+q*12,Y+41+l*.6],[X+4+q*20,Y+41+l]],6,ink(.88),{f:u=>1-.8*u,s:q})
  if(o<.02)return
  // inside: a hole in the skin, packed with seeds
  cut(c,()=>{wedge(c,o);c.fill()})
  const[L,B]=wedge(c,o),r=rnd(9)
  c.save();c.clip()
  c.fillStyle=ink(.16,RD);c.fillRect(0,0,256,256)
  for(let j=0;j<12;j++)for(let i=0;i<7;i++){
    const x=X-22+i*8.5+(j%2)*4+r()*3,y=Y-40+j*7.2+r()*3
    wash(c,x,y,3.4,4.3,ink(.5+r()*.3,'186,30,44'),{bl:.5,s:i+j,ro:r()*3})
    r()<.5&&wash(c,x+1,y+1.5,1,1.3,ink(.6),{bl:.3})
  }
  c.restore()
  st(c,L.filter((_,k)=>k%2==0),3.5,ink(.85),{s:4})
  st(c,B.filter((_,k)=>k%2==0),2.6,ink(.7),{s:5,u:.9})
}

export default(c,t)=>{
  const w=k=>.09*sin(T*t-k)+.04*sin(2*T*t+k*2)
  leaf(c,196,50,2.5+w(0),58,20,.36,1)
  br(c,[[254,14],[214,36],[168,60],[134,86],[122,108]],9,.9,{f:u=>1-.6*u,s:1})
  dry(c,[[254,14],[214,36],[168,60],[134,86],[122,108]],9,ink(.5),{u0:.1,s:2,k:4})
  st(c,[[168,60],[150,48],[130,44]],4,ink(.8),{f:u=>1-.7*u})
  leaf(c,168,60,1.15+w(1),62,22,.85,2)
  leaf(c,130,44,3.5+w(2),50,18,.8,3)
  leaf(c,214,36,.55+w(3),46,17,.6,4)
  const f=ss(.74,1,t)
  lay(c,1-f,x=>fruit(x,ss(.05,.62,t)))
  lay(c,f,x=>fruit(x,0))
  fade(c);snap(c)
}
