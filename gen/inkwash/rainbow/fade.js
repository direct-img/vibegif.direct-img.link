// ink wash rainbow fading in and out over wet hills after rain, last drops still falling
const{sin,cos,PI,abs,min,max,floor,hypot,atan2,exp}=Math,T=2*PI
const K=(a,r=20,g=18,b=16)=>`rgba(${r},${g},${b},${a})`
const R=s=>(s=sin(s*127.1+3.7)*43758.5453)-floor(s)
const S=u=>u<0?0:u>1?1:u*u*(3-2*u)
// quadratic curve as a function of u
const Q=(a,b,p,q,x,y)=>u=>[(1-u)**2*a+2*u*(1-u)*p+u*u*x,(1-u)**2*b+2*u*(1-u)*q+u*u*y]
// smooth curve through points as a function of u
const C=p=>u=>{
  const n=p.length-1,v=min(n-1e-6,max(0,u)*n),i=floor(v),s=v-i,g=k=>p[min(n,max(0,k))],a=g(i-1),b=g(i),d=g(i+1),e=g(i+2)
  return[0,1].map(k=>.5*(2*b[k]+(d[k]-a[k])*s+(2*a[k]-5*b[k]+4*d[k]-e[k])*s*s+(3*b[k]-a[k]-3*d[k]+e[k])*s**3))
}
// tapered brush stroke along f(u) with width w, ink a, pressure p
const B=(c,f,w,a,n=20,p=u=>sin(PI*min(1,max(0,u))**.6)**.7)=>{
  const l=[],r=[]
  for(let i=0;i<=n;i++){
    const u=i/n,[x,y]=f(u),[x1,y1]=f(u+.01),[x0,y0]=f(u-.01),d=hypot(x1-x0,y1-y0)||1,h=w*p(u)/2,nx=(y0-y1)/d*h,ny=(x1-x0)/d*h
    l.push([x+nx,y+ny]);r.unshift([x-nx,y-ny])
  }
  c.beginPath();[...l,...r].map(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath()
  c.fillStyle=a>=0?K(a):a;c.fill()
}
// dry-brush hairlines along f, k hairs across width w, seeded gaps
const D=(c,f,w,a,k=5,s=1,g=.3,lw=.9)=>{
  c.lineWidth=lw;c.strokeStyle=a>=0?K(a):a
  for(let j=0;j<k;j++){
    const o=(k>1?j/(k-1)-.5:0)*w;let on=0
    c.beginPath()
    for(let i=0;i<=30;i++){
      const u=i/30,[x,y]=f(u),[x1,y1]=f(u+.01),d=hypot(x1-x,y1-y)||1,v=R(s+j*7+floor(i/3)*13)>g,X=x-(y1-y)/d*o,Y=y+(x1-x)/d*o
      v&&(on?c.lineTo(X,Y):c.moveTo(X,Y));on=v
    }
    c.stroke()
  }
}
// smooth closed blob through points
const P=(c,q)=>{
  const n=q.length,m=i=>[(q[i%n][0]+q[(i+1)%n][0])/2,(q[i%n][1]+q[(i+1)%n][1])/2]
  c.beginPath();c.moveTo(...m(0))
  for(let i=1;i<=n;i++)c.quadraticCurveTo(...q[i%n],...m(i))
}
// wet wash: blurred blob
const W=(c,q,a,b=4)=>{c.save();c.filter=`blur(${b}px)`;P(c,q);c.fillStyle=a>=0?K(a):a;c.fill();c.restore()}
// soft round dab
const O=(c,x,y,r,a,sx=1)=>{
  const g=c.createRadialGradient(0,0,0,0,0,r)
  g.addColorStop(0,a>=0?K(a):a);g.addColorStop(.55,a>=0?K(a*.8):a);g.addColorStop(1,a>=0?K(0):'rgba(0,0,0,0)')
  c.save();c.translate(x,y);c.scale(sx,1);c.fillStyle=g;c.beginPath();c.arc(0,0,r,0,T);c.fill();c.restore()
}
// run fn with blur
const F=(c,b,fn)=>{c.save();c.filter=`blur(${b}px)`;fn();c.restore()}
// run fn as an eraser (cut-outs for light)
const E=(c,fn)=>{c.save();c.globalCompositeOperation='destination-out';fn();c.restore()}
// run fn multiplied over existing ink
const M=(c,fn)=>{c.save();c.globalCompositeOperation='multiply';fn();c.restore()}
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
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=Math.round(d[k+j]/s)*s;d[k+3]=Math.min(255,Math.round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}

export const frames=20,delay=100,dither=true

// hill: wash pooling under a broken ridge stroke and thinning to nothing, a few texture strokes down the slope
const hill=(c,q,a,d,s,w=4)=>{
  const f=C(q),n=q.length-1,y=min(...q.map(p=>p[1])),g=c.createLinearGradient(0,y,0,y+d+34)
  g.addColorStop(0,K(a*.85));g.addColorStop(.45,K(a*.4));g.addColorStop(1,K(0))
  W(c,[...q,[q[n][0]-14,q[n][1]+d*.5],[(q[0][0]+q[n][0])/2,y+d+38],[q[0][0]+14,q[0][1]+d*.5]],g,2.2)
  B(c,u=>f(.06+u*.5),w,min(.93,a*1.5),24,u=>sin(PI*u**.5)**.6*(.55+.45*sin(u*7+s)**2))
  B(c,u=>f(.66+u*.3),w*.6,a*1.1,12)
  for(let j=0;j<3;j++){
    const[x,y]=f(.3+j*.14+R(s+j)*.05),k=6+R(s+j+3)*8
    B(c,Q(x+2,y+3,x+k*.3,y+d*.25,x+k,y+d*(.4+.2*R(s+j+5))),2.6,a*.9,8,u=>1-u*.9)
  }
  D(c,u=>{const[x,y]=f(.5+u*.4);return[x-4,y+6+u*5]},8,a,3,s,.55)
}

export default(c,t)=>{
  const A=S((1-cos(T*t))*.75)
  // rainbow: soft muted bands, dissolving before they come down on the right
  F(c,1.6,()=>[[176,84,62],[198,150,70],[98,142,112],[92,98,152]].map((k,j)=>
    B(c,u=>[146-(122-j*5)*cos(.12+u*2.2),214-(122-j*5)*sin(.12+u*2.2)],5.6,K(.5*A,...k),36,u=>.55+.45*sin(PI*u))))
  E(c,()=>{
    const g=c.createLinearGradient(150,0,236,40)
    g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'#000')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  })
  // thinning rain cloud
  F(c,5,()=>{
    B(c,Q(8,34,50,14,104,30),20,.2,16)
    B(c,Q(30,48,66,40,92,50),12,.2,16)
  })
  M(c,()=>{
    // far, middle and near hills
    hill(c,[[20,196],[52,170],[84,142],[104,134],[128,152],[160,162],[196,188]],.26,40,1,3)
    hill(c,[[122,210],[160,186],[196,160],[214,152],[232,170],[252,198]],.4,38,2,3.6)
    hill(c,[[0,232],[24,206],[52,184],[70,180],[96,202],[124,214],[152,234]],.62,34,3,5)
  })
  // tree clumps on the near ridge
  ;[[34,197,9],[45,188,12],[54,183,8],[88,196,8]].map(([x,y,h],j)=>{
    B(c,Q(x,y+3,x+1,y-h/2,x+.5,y-h),6+j%2*2,.9,10,u=>sin(PI*(.2+u*.8))**.8)
    O(c,x+2,y-h*.4,4.5,.5)
  })
  // falling drops
  for(let j=0;j<13;j++){
    const p=(R(j)+t*(1+j%2))%1,x=14+R(j+40)*226-p*26,y=p*280-16,a=.3+.3*R(j+9)
    B(c,Q(x+2.4,y-9,x+1.2,y-4.5,x,y),2.6,a+.12,6,u=>.2+.8*u)
  }
  // wet ground: a couple of light puddle rings where drops land
  for(let j=0;j<2;j++){
    const p=(t+j/2)%1,x=[176,214][j],y=[236,222][j]
    c.strokeStyle=K(.4*(1-p));c.lineWidth=1.1
    c.beginPath();c.ellipse(x,y,3+p*11,1+p*3.4,0,0,T);c.stroke()
  }
  fade(c);snap(c)
}
