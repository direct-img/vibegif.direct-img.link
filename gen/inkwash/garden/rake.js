// ink wash zen gravel garden being raked, the rake drawing curved parallel lines around a rock stroke by stroke, then fading
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

export const frames=32,dither=true
export const delay=[...Array(32)].map((_,i)=>i>21&&i<26?260:85)

export default(c,t)=>{
  const X=114,Y=130,
  // ring point: oblique circle of radius k around the rock
  pt=(a,k)=>[X+k*cos(a)-k*.12*sin(a),Y+k*.55*sin(a)],
  A0=1.15,
  // two passes of the rake, four tines each
  u1=S(t/.33),u2=S((t-.36)/.33),
  al=1-S((t-.84)/.14),
  // rake head radius and angle
  k=t<.345?46:L(46,82,S((t-.345)/.03)),
  ar=A0+T*(t<.345?u1:t<.36?1:u2)
  // gravel: sparse stipple
  for(let j=0;j<30;j++){
    const a=R(j)*T,q=30+R(j+40)*90
    O(c,...pt(a,q),.7+R(j+80)*.6,.36)
  }
  // raked furrows, dry at the end of each pull
  for(let j=0;j<8;j++){
    const u=j<4?u1:u2,q=(j<4?35.5:71.5)+j%4*7
    if(u<=0)continue
    B(c,v=>pt(A0+T*u*v,q),2.3,(.62-j%2*.14)*al,floor(8+70*u),v=>.5+.5*sin(PI*min(1,v*u*9+.05))**.6*(.7+.3*sin(v*u*40+j)))
    D(c,v=>pt(A0+T*u*v,q+2.6),1,.3*al,1,j,.45)
  }
  // rake: toothed head across the furrows, long handle fading toward the raker
  const ra=min(S(t/.03),1-S((t-.7)/.05)),rake=()=>{
    const[x0,y0]=pt(ar,k-15),[x1,y1]=pt(ar,k+15),[mx,my]=pt(ar,k),
    dx=-sin(ar)-.12*cos(ar),dy=.55*cos(ar),d=hypot(dx,dy),hx=mx+dx/d*62,hy=my+dy/d*62-40
    c.save();c.globalAlpha=ra
    for(let j=0;j<4;j++){
      const[x,y]=pt(ar,k-10.5+j*7)
      B(c,Q(x,y-9,x+.5,y-4,x,y+1),2.6,.9,5,u=>1-u*.5)
    }
    B(c,Q(x0,y0-9,mx,my-10,x1,y1-9),4.6,.92,10,u=>.7+.3*sin(PI*u))
    const g=c.createLinearGradient(mx,my,hx,hy)
    g.addColorStop(0,K(.9));g.addColorStop(.5,K(.6));g.addColorStop(1,K(0))
    B(c,Q(mx,my-10,L(mx,hx,.5)+3,L(my,hy,.5)-2,hx,hy),3.4,g,12,u=>1-u*.3)
    c.restore()
  }
  ra>0&&sin(ar)<0&&rake()
  // rock: wet mass with a dark shaded flank, open lit top, dry-brush face, moss at its foot
  E(c,()=>W(c,[[88,131],[85,110],[92,92],[103,79],[114,84],[121,99],[133,103],[141,117],[139,131],[112,136]],'#000',1))
  M(c,()=>{
    F(c,1.5,()=>{
      W(c,[[88,131],[85,110],[92,92],[103,79],[114,84],[121,99],[133,103],[141,117],[139,131],[112,136]],.24,1)
      W(c,[[88,131],[86,112],[92,96],[100,104],[102,120],[112,128],[134,124],[139,131],[112,137]],.4,2)
    })
    B(c,Q(88,132,82,104,103,79),8,.92,14,u=>.35+.65*sin(PI*u**.8))
    B(c,Q(103,79,113,82,121,98),3,.8,10,u=>1-u*.75)
    B(c,Q(124,101,138,104,141,126),4.4,.84,10,u=>.3+.7*u)
    B(c,Q(86,131,114,140,142,129),5.4,.92,12)
    B(c,Q(110,88,104,106,112,126),3,.6,10,u=>1-u*.8)
    B(c,Q(121,99,118,110,124,122),2.4,.5,8,u=>1-u*.8)
  })
  D(c,Q(126,106,132,116,132,128),8,.7,4,2,.45)
  D(c,Q(96,96,94,110,98,124),7,.6,3,5,.5)
  F(c,1,()=>{O(c,92,133,5,K(.45,74,98,64),1.6);O(c,136,131,4,K(.4,74,98,64),1.5)})
  ra>0&&sin(ar)>=0&&rake()
  fade(c);snap(c)
}
