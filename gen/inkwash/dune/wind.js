// ink wash sand dunes with sand blowing off the crest in dry streaks, a tiny camel and rider far away
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
// soft round dab
const O=(c,x,y,r,a,sx=1)=>{
  const g=c.createRadialGradient(0,0,0,0,0,r)
  g.addColorStop(0,a>=0?K(a):a);g.addColorStop(.55,a>=0?K(a*.8):a);g.addColorStop(1,a>=0?K(0):'rgba(0,0,0,0)')
  c.save();c.translate(x,y);c.scale(sx,1);c.fillStyle=g;c.beginPath();c.arc(0,0,r,0,T);c.fill();c.restore()
}
// run fn with blur
const F=(c,b,fn)=>{c.save();c.filter=`blur(${b}px)`;fn();c.restore()}
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

export const frames=24,delay=85,dither=true

export default(c,t)=>{
  const cr=C([[18,240],[52,206],[84,166],[112,130],[136,108],[152,100]]),
  bs=C([[18,240],[84,228],[136,196],[162,150],[152,100]]),
  far=C([[146,150],[176,140],[206,133],[232,136],[252,146]])
  // low muted sun
  F(c,1.5,()=>O(c,56,58,16,K(.42,186,84,56)))
  M(c,()=>{
    // far dune: faint ridge with a little lee shade
    F(c,2.5,()=>B(c,u=>{const[x,y]=far(u);return[x,y+9]},14,.16,12,u=>sin(PI*u)**.5))
    B(c,far,2.4,.42,20,u=>sin(PI*u**.6)**.6*(.5+.5*sin(u*8)**2))
    // near dune: lee face as a crescent of wash pooled under the crest, open toward its foot
    const g=c.createLinearGradient(96,150,150,196),q=[]
    g.addColorStop(0,K(.66));g.addColorStop(.5,K(.36));g.addColorStop(1,K(.1))
    for(let j=0;j<=8;j++)q.push(cr(j/8))
    for(let j=7;j>0;j--)q.push(bs(j/8))
    F(c,1.6,()=>{
      c.beginPath();q.map((p,j)=>j?c.lineTo(...p):c.moveTo(...p));c.fillStyle=g;c.fill()
    })
    // a couple of soft slumps down the slip face
    F(c,2,()=>{
      B(c,Q(118,134,122,160,96,196),9,.16,10,u=>1-u*.8)
      B(c,Q(144,118,150,150,134,184),7,.14,10,u=>1-u*.8)
    })
    // crest: one loaded stroke, heaviest toward the peak, then the far shoulder falling away
    B(c,u=>cr(.1+u*.9),6,.88,40,u=>sin(PI*u**1.6)**.6*(.7+.3*sin(u*11)))
    B(c,Q(152,100,178,106,196,130),3,.5,16,u=>1-u*.9)
  })
  D(c,u=>{const[x,y]=cr(.25+u*.6);return[x+6,y+8]},7,.55,3,4,.5)
  // wind ripples on the lit side
  for(let j=0;j<5;j++){
    const y=176+j*15,x=10+j*3
    B(c,Q(x,y+10,x+26-j*3,y-2,x+50-j*8,y-22+j*3),1.7,.4-j*.04,14)
    D(c,Q(x+4,y+15,x+30-j*3,y+3,x+52-j*8,y-15+j*3),1,.3,1,j+11,.4)
  }
  // sand streaming off the crest
  F(c,3,()=>B(c,Q(128,108,176,78,226,86),15,.14+.04*sin(T*t),12,u=>sin(PI*u**.6)))
  for(let j=0;j<14;j++){
    const p=(t+R(j))%1,[x,y]=cr(.72+R(j+20)*.28),X=x-6+p*(50+R(j+5)*30),Y=y-2-p*(12+R(j+8)*20)+3*sin(p*5+j),l=20+R(j+2)*18
    D(c,Q(X,Y,X+l/2,Y-4-2*sin(p*6+j),X+l,Y-5),2.2,.7*sin(PI*p)**.8,2,j+30,.22)
    O(c,X+l+4+R(j+60)*8,Y-6+R(j+70)*6,.9,.6*sin(PI*p))
  }
  // camel and rider on the far ridge
  const x=204,y=120,w=sin(T*t)
  B(c,Q(x-7,y,x-1,y-6,x+6,y-.5),7,.9,10)
  ;[[-5,0],[-3,.6],[3,0],[5,.7]].map(([d,k],j)=>B(c,Q(x+d,y+1,x+d+k,y+7,x+d-.4+k,y+12.5),1.9,.88,6,u=>1-u*.55))
  B(c,Q(x+5,y-1,x+10,y-2,x+10.5,y-9),2.6,.9,8,u=>1-u*.5)
  B(c,Q(x+9.5,y-9.5,x+12,y-9.5,x+14,y-8),2.6,.9,6)
  B(c,Q(x-7,y-1,x-9,y+2,x-8.6+w*.6,y+6),1.1,.8,6)
  B(c,Q(x-.5,y-3,x-.2,y-8,x+.6,y-11),4.2,.93,8,u=>.6+.4*sin(PI*u))
  O(c,x+.9,y-12.6,2.1,.93)
  B(c,Q(x,y-10,x-5,y-11-w,x-9,y-9+w*1.6),1.6,.6,8,u=>1-u*.8)
  fade(c);snap(c)
}
