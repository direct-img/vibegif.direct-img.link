// ink wash village of thatched roofs in a valley, chimney smoke rising and drifting, mist between the houses
const{sin,cos,PI,abs,min,max,floor,hypot,atan2,exp}=Math,T=2*PI
const K=(a,r=20,g=18,b=16)=>`rgba(${r},${g},${b},${a})`
const R=s=>(s=sin(s*127.1+3.7)*43758.5453)-floor(s)
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

export const frames=24,delay=90,dither=true

// thatched house: heavy wet roof mass with dry-brush thatch, open wall below with a few posts
const hut=(c,x,y,w,s,a=.86)=>{
  const h=w*.5
  M(c,()=>{
    F(c,1.2,()=>W(c,[[x-w*.62,y+2],[x-w*.34,y-h*.7],[x-w*.08,y-h*1.02],[x+w*.14,y-h],[x+w*.4,y-h*.6],[x+w*.64,y+1],[x+w*.2,y+4],[x-w*.2,y+3]],a*.62,1))
    B(c,Q(x-w*.6,y+1,x-w*.3,y-h*.8,x-w*.02,y-h),w*.2,a,12,u=>.5+.5*u)
    B(c,Q(x-w*.66,y+2.5,x,y+5,x+w*.68,y+1.5),w*.1,a,12)
  })
  D(c,Q(x-w*.1,y-h*.9,x+w*.2,y-h*.5,x+w*.5,y-1),w*.3,a*.8,4,s,.4)
  // wall: pale wash under the eave, end posts and a dark doorway
  F(c,1,()=>B(c,Q(x-w*.44,y+h*.3,x,y+h*.34,x+w*.44,y+h*.3),h*.5,a*.24,8,u=>1))
  ;[-.45,.45].map(k=>B(c,Q(x+w*k,y+3,x+w*k+.5,y+h*.3,x+w*k,y+h*.56),1.8,a*.8,6,u=>1-u*.5))
  B(c,Q(x-w*.08,y+5,x-w*.06,y+h*.35,x-w*.08,y+h*.56),w*.13,a*.8,6,u=>1-u*.3)
  B(c,Q(x-w*.5,y+h*.58,x,y+h*.62,x+w*.52,y+h*.57),1.3,a*.5,8)
}

// hillside: wash pooling under a broken ridge stroke and thinning to nothing
const hill=(c,q,a,d,s)=>{
  const f=C(q),n=q.length-1,y=min(...q.map(p=>p[1])),g=c.createLinearGradient(0,y,0,y+d+50)
  g.addColorStop(0,K(a*.8));g.addColorStop(.5,K(a*.35));g.addColorStop(1,K(0))
  W(c,[...q,[q[n][0],q[n][1]+d*.6],[(q[0][0]+q[n][0])/2,y+d+50],[q[0][0],q[0][1]+d]],g,3)
  B(c,u=>f(.05+u*.6),4,min(.9,a*1.6),24,u=>sin(PI*u**.5)**.6*(.5+.5*sin(u*7+s)**2))
  D(c,u=>{const[x,y]=f(.2+u*.6);return[x,y+9+u*4]},9,a,3,s,.55)
}

export default(c,t)=>{
  // valley sides falling toward the village
  M(c,()=>{
    hill(c,[[0,62],[30,70],[58,96],[84,130],[106,162]],.36,44,1)
    hill(c,[[256,138],[238,138],[218,146],[200,160]],.2,24,2)
  })
  // far trees
  ;[[146,150,7],[158,146,9],[206,160,8]].map(([x,y,r])=>F(c,1,()=>O(c,x,y,r,.4,1.3)))
  // houses, far to near
  hut(c,176,160,30,1,.6)
  hut(c,112,170,36,2,.74)
  hut(c,150,196,48,3,.86)
  hut(c,78,206,54,4,.93)
  // near trees: dark dabs
  ;[[196,202,10],[208,208,8],[30,206,11]].map(([x,y,r],j)=>{
    F(c,1,()=>{O(c,x,y,r,.7,1.2);O(c,x+r*.6,y-r*.5,r*.7,.6)})
    B(c,Q(x,y+r*.5,x+1,y+r,x,y+r*1.7),2.4,.85,6)
  })
  // mist lying between the houses: soft cut-out bands drifting across
  E(c,()=>F(c,7,()=>{
    for(let j=0;j<4;j++){
      const x=(R(j)*380+t*380*(j%2?1:-1)+760)%380-60,y=178+j*13
      c.fillStyle=K(.55);c.beginPath();c.ellipse(x,y,56+R(j+4)*30,5+R(j+8)*3,0,0,T);c.fill()
    }
    c.fillStyle=K(.85);c.beginPath();c.ellipse(128,236,150,12,0,0,T);c.fill()
  }))
  // smoke: thin at the chimney, swelling and leaning right as it rises and thins out
  ;[[90,178,0,96],[160,174,2,78],[116,154,4,60]].map(([x,y,o,h],k)=>F(c,2.2,()=>{
    for(let j=0;j<26;j++){
      const q=j/25,X=x+q*q*(40+k*10)+(2+q*7)*sin(q*7+o-T*t),Y=y-q*h
      O(c,X,Y,2.5+q*13,.34*(1-q)**.8*(.6+.4*sin(q*10+o-T*t)),.8)
    }
  }))
  fade(c);snap(c)
}
