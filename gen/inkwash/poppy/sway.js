// ink wash poppies, translucent red petals with dark centres swaying on thin wiry stems in a breeze
const{PI,sin,cos,min,max,abs,hypot,round}=Math,T=PI*2
const ink=(a,k='20,18,16')=>`rgba(${k},${a})`
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

const RD='196,46,34',DK='122,22,20'

// open flower facing us: four crinkled wet petals, dark heart, a ring of stamens
const face=(c,x,y,z,a,s,v)=>{
  c.globalCompositeOperation='multiply'
  for(let k=0;k<4;k++){
    const h=a+k*PI/2+.1*sin(k*7),l=z*(.4+.03*sin(v+k*2))
    wash(c,x+l*cos(h),y+l*sin(h)*.9,z*.56,z*.5,ink(k%2?.5:.4,RD),{bl:1.2,s:s+k,ro:h,w:.14})
    wash(c,x+l*.45*cos(h),y+l*.45*sin(h),z*.2,z*.16,ink(.4,DK),{bl:2,s:k,ro:h})
  }
  c.globalCompositeOperation='source-over'
  wash(c,x,y,z*.17,z*.15,ink(.92),{bl:.6,s})
  for(let k=0;k<9;k++){
    const h=k/9*T+s,l=z*(.26+.04*sin(k*5))
    st(c,[[x+l*.6*cos(h),y+l*.6*sin(h)],[x+l*cos(h),y+l*sin(h)]],2.2,ink(.8),{f:u=>.4+.6*u})
  }
}

// flower seen from the side: a bowl of petals on the stem tip, tilted by a
const cup=(c,x,y,z,a,s,v)=>{
  c.save();c.translate(x,y);c.rotate(a)
  c.globalCompositeOperation='multiply'
  for(const[px,py,rx,ry,al,ro]of[[-.34,-.62,.5,.6,.36,-.3],[.36,-.6,.5,.58,.4,.3],[0,-.66,.4,.5,.3,0],[-.3,-.36,.56,.42,.52,.5],[.32,-.34,.54,.42,.56,-.5]])
    wash(c,px*z,py*z+.02*z*sin(v+px*9),rx*z,ry*z,ink(al,RD),{bl:1.2,s:s+rx*9,ro,w:.13})
  wash(c,0,-z*.2,z*.3,z*.16,ink(.4,DK),{bl:2,s})
  c.globalCompositeOperation='source-over'
  // stamens peeking over the front petals, dark knot where the stem joins
  for(let k=-2;k<=2;k++)st(c,[[k*z*.05,-z*.6],[k*z*.11,-z*.78-z*.04*(k&1)]],2,ink(.8),{f:u=>.4+.6*u})
  wash(c,0,0,z*.1,z*.08,ink(.9),{bl:.5})
  c.restore()
}

export default(c,t)=>{
  const w=k=>sin(T*t-k)+.3*sin(2*T*t-k*2),v=T*t*2
  // stem bent by the breeze, more toward the top; returns the tip
  const stem=(x,y,X,Y,k,A,b=0)=>{
    const s=A*w(k),P=[[x,y],[lp(x,X,.3)+b+s*.1,lp(y,Y,.35)],[lp(x,X,.7)-b*.6+s*.5,lp(y,Y,.7)],[X+s,Y+abs(s)*.08]]
    st(c,P,3,ink(.85),{f:u=>1-.5*u,s:k+1,e:.15})
    return[P[3],s]
  }
  // leaves low down
  for(const[x,y,h,L,a]of[[112,240,-2.5,50,.55],[128,244,-.75,56,.82],[140,246,-.25,40,.36]])
    for(const[q,l]of[[0,1],[.5,.6],[-.5,.55]])
      st(c,[[x,y],[x+L*l*.5*cos(h+q*.7),y+L*l*.5*sin(h+q*.7)],[x+L*l*cos(h+q+.04*w(1)),y+L*l*sin(h+q+.04*w(1))]],L*.2,ink(a),{f:u=>sin(PI*u**.6),s:x+q})
  let[p,s]=stem(132,254,176,76,.3,9,6)
  cup(c,...p,40,.15+s*.02,3,v)
  ;[p,s]=stem(112,254,84,96,0,7,-6)
  face(c,p[0],p[1]-6,44,.4+s*.012,1,v)
  ;[p,s]=stem(140,254,210,138,.8,6,10)
  cup(c,...p,28,.55+s*.03,7,v+2)
  // a nodding bud on a hooked stem
  ;[p,s]=stem(104,254,44,150,1.2,6,-4)
  st(c,[p,[p[0]-9,p[1]-7],[p[0]-17,p[1]+2],[p[0]-18,p[1]+12]],2.4,ink(.85),{f:u=>1-.3*u})
  wash(c,p[0]-18,p[1]+21,6,10,ink(.82),{bl:.7,s:2,ro:.1})
  wash(c,p[0]-17,p[1]+30,3,3,ink(.5,RD),{bl:.8})
  fade(c);snap(c,8,8)
}
