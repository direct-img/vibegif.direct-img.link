// ink wash blizzard, snow swirling around a lone pine and a small figure in a straw hat leaning into the wind
const{sin,cos,PI,abs,min,max,floor,hypot,atan2,exp}=Math,T=2*PI
const K=(a,r=20,g=18,b=16)=>`rgba(${r},${g},${b},${a})`
const R=s=>(s=sin(s*127.1+3.7)*43758.5453)-floor(s)
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

export const frames=24,delay=80,dither=true

export default(c,t)=>{
  const w=sin(T*2*t),w2=sin(T*t+1)
  // wind: a few loose pale sweeps curling across, never filling the tile
  M(c,()=>F(c,3.5,()=>{
    B(c,Q(10,70+w2*4,110,22,236,84-w2*5),24,.15+.03*w2,16,u=>sin(PI*u**.7)**.7)
    B(c,Q(0,168-w2*4,120,120,214,150+w2*4),20,.13-.03*w2,16,u=>sin(PI*u**.6)**.7)
    B(c,Q(150,196,226,206,236,150+w2*3),15,.12,14,u=>sin(PI*u**.7)**.8)
  }))
  // snowy ground: a broken line and a little drift shade
  B(c,Q(18,226,96,216,170,226),2.4,.4,20,u=>sin(PI*u)*(.4+.6*sin(u*8)**2))
  B(c,Q(150,232,200,224,244,230),2,.34,16,u=>sin(PI*u)*(.4+.6*sin(u*7+1)**2))
  F(c,2.5,()=>B(c,Q(60,232,110,226,160,234),8,.14,10))
  // pine: leaning trunk, wind-swept boughs with snow lying on them
  const tr=Q(66,224,58,150,92+w*1.5,74)
  M(c,()=>{
    B(c,tr,13,.86,24,u=>1-u*.72)
    B(c,Q(60,224,50,222,38,228),5,.7,8,u=>1-u*.8)
    B(c,Q(70,224,84,221,96,226),5,.7,8,u=>1-u*.8)
  })
  D(c,u=>tr(u*.8),8,.9,4,3,.4)
  ;[[.42,54,-6,1],[.6,62,-16,1.1],[.78,46,-14,.9],[.52,-36,-4,.8],[.97,30,-22,.8]].map(([u,dx,dy,k],j)=>{
    const[x,y]=tr(u),s=w*(2+j*.5),X=x+dx,Y=y+dy+s,d=dx>0?1:-1
    B(c,Q(x,y,x+dx*.5,y+dy*.2,X,Y),4.6*k,.88,10,u=>1-u*.6)
    M(c,()=>F(c,1.4,()=>{
      W(c,[[X-20*k*d,Y+1],[X-9*k*d,Y-9*k],[X+8*k*d,Y-10*k],[X+25*k*d,Y-1],[X+14*k*d,Y+8*k],[X-2*k*d,Y+5*k],[X-12*k*d,Y+8*k]],.74,1)
      O(c,X+6*k*d,Y+3,9*k,.5,1.5)
    }))
    for(let i=0;i<4;i++){
      const a=X+(-14+i*11+R(i+j*9)*5)*k*d,b=Y+4+R(i+j*5)*3,l=7+R(i+j)*8
      B(c,Q(a,b-3,a+l*.5*d,b+l*.3,a+l*d,b+l*(.3+R(i+j*3)*.6)),2.6,.9,5,u=>1-u*.85)
    }
    // snow: cut the top of the bough away
    E(c,()=>F(c,.8,()=>W(c,[[X-20*k*d,Y-2],[X-8*k*d,Y-12*k],[X+10*k*d,Y-11*k],[X+22*k*d,Y-5],[X+6*k*d,Y-3*k],[X-8*k*d,Y-2*k]],'#000',1)))
    B(c,Q(X-18*k*d,Y-4,X,Y-13*k,X+20*k*d,Y-6),1,.34,10)
  })
  // figure: bent forward under a wide straw hat, cape blown back, staff planted ahead
  const fx=190,fy=226,b=abs(w)*1.2,hx=fx-13,hy=fy-40-b
  M(c,()=>{
    B(c,Q(fx-1,fy-13,fx-5-w*3,fy-7,fx-8-w*4,fy),4,.9,8,u=>1-u*.45)
    B(c,Q(fx+5,fy-13,fx+6+w*3,fy-7,fx+7+w*4,fy),4,.86,8,u=>1-u*.45)
    F(c,.8,()=>W(c,[[hx-3,hy+5],[hx+8,hy+3],[fx+9,fy-28-b],[fx+17+w2*2,fy-13],[fx+6,fy-10],[fx-6,fy-12],[fx-13,fy-26-b]],.82,1))
    B(c,Q(fx+4,fy-30-b,fx+16,fy-26-w2*2,fx+27,fy-27+w2*4),5,.6,8,u=>1-u*.85)
    for(let i=0;i<3;i++){
      const a=fx+1+i*5
      B(c,Q(a,fy-15,a+2,fy-10,a+4+w2*1.5,fy-5+R(i)*3),2.8,.88,5,u=>1-u*.8)
    }
    // hat
    B(c,Q(hx-15,hy+7,hx-3,hy-11,hx+14,hy+1),9,.93,10,u=>.3+.7*sin(PI*u))
    B(c,Q(hx-17,hy+8,hx-2,hy+2,hx+16,hy+1),2.6,.9,8)
  })
  E(c,()=>B(c,Q(hx-10,hy,hx-3,hy-9,hx+7,hy-5),2.6,'#000',8))
  B(c,Q(hx-4,hy+12,hx-9,hy+15,hx-12,hy+17),3,.86,6,u=>1-u*.4)
  B(c,Q(hx-11,hy+8,hx-13,fy-14,hx-15,fy+1),1.9,.84,8,u=>1-u*.3)
  // driven snow: dry streaks and flakes whirling through, cut out of whatever ink they cross
  for(let j=0;j<9;j++){
    const p=(t+R(j))%1,x=p*330-60,y=30+R(j+20)*190+16*sin(p*T+j),l=30+R(j+4)*30
    D(c,Q(x,y,x+l/2,y-6*cos(p*T+j),x+l,y+3),4,.4*sin(PI*p)**.6,2,j+50,.3)
  }
  for(let j=0;j<70;j++){
    const p=(t*(1+j%2)+R(j))%1,q=T*(t*(1+j%3)+R(j+7)),m=5+R(j+9)*13,
    x=p*300-22+m*cos(q),y=10+R(j+30)*226+20*sin(p*T+R(j+3)*6)+p*18+m*sin(q),r=1.1+R(j+60)*1.9
    E(c,()=>O(c,x,y,r*1.5,1,1.5))
    O(c,x,y,r,.34+.2*R(j+5),1.4)
  }
  fade(c,18);snap(c)
}
