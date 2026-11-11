// ink wash waves lapping onto a sandy shore and drawing back, foam lines along the edge, a few pebbles
const{sin,cos,PI,abs,min,max,floor,hypot,atan2,exp}=Math,T=2*PI
const K=(a,r=20,g=18,b=16)=>`rgba(${r},${g},${b},${a})`
const R=s=>(s=sin(s*127.1+3.7)*43758.5453)-floor(s)
const L=(a,b,u)=>a+(b-a)*u
const S=u=>u<0?0:u>1?1:u*u*(3-2*u)
// quadratic curve as a function of u
const Q=(a,b,p,q,x,y)=>u=>[(1-u)**2*a+2*u*(1-u)*p+u*u*x,(1-u)**2*b+2*u*(1-u)*q+u*u*y]
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

// pebble: loaded dab, dark underside, open lit top
const peb=(c,x,y,r,a,s)=>{
  O(c,x,y,r,a*.55,1.5)
  B(c,Q(x-r*1.3,y,x+R(s)*2,y+r*1.2,x+r*1.4,y-.5),r*.9,a,10)
  B(c,Q(x-r*1.8,y+r*.9,x,y+r*1.5,x+r*2.2,y+r*.8),1.4,.3,8)
}

export default(c,t)=>{
  const A=sin(PI*t**.75)**1.5,
  // water's edge at run-up a, scaled waviness k, lifted by o: scalloped lobes of swash
  f=(a,k=1,o=0)=>u=>[-10+276*u,150-62*u+k*(9*abs(sin(u*9+.5+.3*sin(T*t)))+7*sin(u*3+1))+60*a-o]
  // sand: sparse stipple and pebbles
  for(let j=0;j<22;j++){
    const x=30+R(j)*206,y=186+R(j+50)*70-x*.12
    O(c,x,y,.8+R(j+90),.5)
  }
  peb(c,118,180,4.5,.8,1);peb(c,196,222,6.5,.9,2);peb(c,172,204,3.4,.7,3)
  peb(c,90,232,5,.85,4);peb(c,226,178,3.6,.75,5)
  // wet sand left behind as the wave draws back
  t>.4&&F(c,3,()=>B(c,f((A+1)/2,.8),60*(1-A),.2*(1-S((t-.5)*2.2)),24,u=>sin(PI*u)**.3))
  // water: loose sweeps that thin out up the tile and toward the right
  M(c,()=>{
    F(c,2.4,()=>{
      for(let j=0;j<4;j++){
        const g=f(A*(1-j*.2),.6**j,15+j*21+R(j+3)*6),a=R(j)*.1,b=1-j*.17-R(j+7)*.1
        B(c,u=>g(L(a,b,u)),20-j*3,.4-j*.07,24,u=>sin(PI*u**.7)**.5*(.7+.3*sin(u*8+j*2)))
      }
    })
    // darker pooled band just behind the foam
    F(c,1.2,()=>B(c,f(A,1,10),9,.6,40,u=>sin(PI*u)**.3*(.6+.4*sin(u*13+T*t)**2)))
  })
  D(c,f(A*.8,.5,30),10,.4,3,2,.5)
  D(c,u=>f(A*.5,.3,62)(u*.7),8,.3,3,5,.6)
  // foam: cut-out line at the edge, and an older foam line riding in behind
  E(c,()=>{
    B(c,f(A,1,3.5),6.5,'#000',60,u=>sin(PI*u)**.3*(.5+.5*sin(u*23+3)**2))
    for(let j=0;j<2;j++){
      const p=(t+j/2)%1
      D(c,f(A*.8,.8-p*.3,52-p*40-j*4),3,K(sin(PI*p)),2,j+3,.35,1.8)
    }
  })
  // thin wet line where water meets sand
  B(c,f(A,1,-.5),2,.62,60,u=>sin(PI*u)**.3*(.3+.7*sin(u*17+1)**2))
  // broken high-water line drying out
  D(c,f(1,1,-1.5),1,.45*S((t-.4)*8)*(1-S((t-.62)*3)),1,9,.4)
  fade(c,20);snap(c)
}
