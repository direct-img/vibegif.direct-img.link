// ink wash dew drop swelling on a leaf tip, falling, and rippling a puddle below
const{sin,cos,PI,abs,min,max,floor,hypot,atan2,exp}=Math,T=2*PI
const K=(a,r=20,g=18,b=16)=>`rgba(${r},${g},${b},${a})`
const R=s=>(s=sin(s*127.1+3.7)*43758.5453)-floor(s)
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

export const frames=28,delay=80,dither=true

// bead of water: pale body, dark crescent underneath, open highlight
const bead=(c,x,y,r,h=r)=>{
  if(r<.6)return
  c.save();c.translate(x,y)
  c.beginPath();c.moveTo(0,-h*1.5);c.bezierCurveTo(r*.5,-h*.6,r,-h*.3,r,h*.25)
  c.bezierCurveTo(r,h*1.1,-r,h*1.1,-r,h*.25);c.bezierCurveTo(-r,-h*.3,-r*.5,-h*.6,0,-h*1.5)
  c.fillStyle=K(.22);c.fill()
  B(c,Q(-r*.95,0,-r*.75,h*1.02,r*.45,h*.82),r*.62,.86,10)
  B(c,Q(r*.2,-h*.9,r*1.02,-h*.2,r*.8,h*.5),r*.2,.6,8)
  c.restore()
  E(c,()=>O(c,x+r*.3,y-h*.1,r*.42,.9))
}

export default(c,t)=>{
  const s=t-.4,g=S(t/.38),
  bd=t<.4?7*g:7*exp(-6*s)*cos(22*s)*(1-s/.6),
  r=t<.4?10*g**.7:0,
  tx=150,ty=92+bd,
  f=(t-.4)/.15
  // stem, two lesser leaves, and the main leaf: one loaded stroke pressed in at the stem and drawn out to the tip
  const lg=c.createLinearGradient(22,46,tx,ty)
  lg.addColorStop(0,K(.92));lg.addColorStop(.55,K(.74));lg.addColorStop(1,K(.5))
  M(c,()=>{
    F(c,.7,()=>B(c,Q(24,50,74,78,92,132+bd*.3),14,.36,20,u=>sin(PI*u**.55)**.8))
    B(c,Q(22,44,44,16,82,12-bd*.2),10,.56,16,u=>sin(PI*u**.55)**.8)
    B(c,Q(0,28,14,36,30,47),4.4,.86,8,u=>.5+.5*u)
    B(c,Q(22,46,112,22,tx,ty),27,lg,30,u=>sin(PI*u**.5)**.85)
  })
  E(c,()=>B(c,Q(30,46,108,29,tx-4,ty-5),1.6,K(.7),24,u=>1-u*.7))
  D(c,Q(64,34,112,32,tx-8,ty-13),8,.6,3,4,.5)
  D(c,Q(40,62,70,84,88,120),5,.4,2,6,.5)
  // small beads resting on the leaf
  bead(c,84,31,2.6);bead(c,112,40,2)
  // the drop: hanging and swelling, then falling
  t<.4?bead(c,tx+1,ty+r*1.5+1,r,r*(1+.25*g)):
  f<1&&bead(c,tx+1,ty+16+(192-ty-16)*f*f+9*(1-f),7.4,9+f*3)
  // puddle: two loose sweeps, pooled on the near edge
  M(c,()=>{
    F(c,1.6,()=>{
      B(c,Q(70,210,140,194,236,208),19,.3,24,u=>sin(PI*u**.7)**.5*(.7+.3*sin(u*10)))
      B(c,Q(98,222,150,214,206,224),8,.24,16,u=>sin(PI*u)**.6*(.6+.4*sin(u*8+2)))
    })
    B(c,Q(88,218,150,225,226,215),2.6,.55,24,u=>sin(PI*u)*(.4+.6*sin(u*9)**2))
  })
  D(c,Q(80,200,150,192,226,202),4,.4,2,9,.5)
  // ripples: rings spreading from where it lands, light inside the ink and a thin dark edge
  for(let j=0;j<3;j++){
    const p=(t-.55-j*.075)/.38
    if(p<=0||p>=1)continue
    const a=(1-p)**.8,rx=5+p*62,ry=1.5+p*13
    E(c,()=>{
      c.strokeStyle=K(.9*a);c.lineWidth=2.4-p
      c.beginPath();c.ellipse(151,206,rx,ry,0,0,T);c.stroke()
    })
    c.strokeStyle=K(.6*a);c.lineWidth=1.1
    c.beginPath();c.ellipse(151,206,rx+2,ry+1,0,PI*.08,PI*.92);c.stroke()
    c.beginPath();c.ellipse(151,206,rx+2,ry+1,0,PI*1.2,PI*1.75);c.stroke()
  }
  // splash: a little crown of droplets and a rebound bead
  const q=(t-.55)/.22
  if(q>0&&q<1){
    for(let j=0;j<6;j++){
      const d=(j-2.5)*7*q*(1+R(j)),h=sin(PI*q)*(16+R(j+3)*12)
      O(c,151+d,204-h,1.3+R(j+6),.8*(1-q*.7))
    }
    B(c,Q(151,206,151,206-6*sin(PI*q),151,204-11*sin(PI*q)),5*(1-q),.7,6,u=>1-u*.6)
  }
  fade(c);snap(c)
}
