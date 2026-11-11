// ink wash shrine torii gate standing in still water, mist drifting through it, its reflection wavering
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

export const frames=28,delay=90,dither=true

const V=a=>K(a,160,70,52)

// the gate, drawn through a point mapping m so it can be mirrored into the water
const gate=(c,m,a,n=1)=>{
  const q=(...p)=>{const f=Q(...p);return u=>m(...f(u))}
  M(c,()=>{
    // pillars leaning in a little, pressed harder at the foot, ink down their shaded side
    B(c,q(81,180,83,120,89,72),12.5,V(.72*a),20*n,u=>.8+.2*(1-u)**2+.05*sin(u*14))
    B(c,q(157,180,155,120,149,72),12.5,V(.68*a),20*n,u=>.8+.2*(1-u)**2+.05*sin(u*11+2))
    B(c,q(85,178,87,124,92,78),4,K(.5*a),16*n,u=>1-u*.8)
    B(c,q(161,178,159,124,153,78),4,K(.55*a),16*n,u=>1-u*.8)
    // tie beam and its little centre post
    B(c,q(62,101,119,98,176,101),8.4,V(.7*a),16*n,u=>.75+.25*sin(PI*u))
    B(c,q(64,105,119,102.5,174,105),2,K(.6*a),16*n)
    B(c,q(119,96,119.5,86,119,76),7,V(.66*a),8*n,u=>.8)
    // top lintel sweeping up at the ends, with its dark ink cap
    B(c,q(50,66,119,80,188,66),10,V(.76*a),24*n,u=>.7+.3*abs(2*u-1)**1.5)
    B(c,q(45,57,119,72,193,57),7,K(.92*a),24*n,u=>.5+.5*abs(2*u-1)**1.5)
    // dark feet
    B(c,q(81,181,81.5,172,82.5,160),13.5,K(.84*a),8*n,u=>1-u*.3)
    B(c,q(157,181,156.5,172,155.5,160),13.5,K(.8*a),8*n,u=>1-u*.3)
  })
}

export default(c,t)=>{
  // reflection first: squashed, wavering more with depth, broken by ripples, thinning away
  gate(c,(x,y)=>{const d=(180-y)*.56;return[x+(1+d*.07)*sin(d*.3-T*t),180+d]},.72,2)
  E(c,()=>{
    for(let j=0;j<9;j++){
      const p=(j+t)/9,y=182+p*p*66
      c.fillStyle=K(.5+.4*p);c.beginPath();c.ellipse(119+12*sin(j*2.3),y,90,.7+p*2.2,0,0,T);c.fill()
    }
    const g=c.createLinearGradient(0,184,0,246)
    g.addColorStop(0,K(0));g.addColorStop(1,K(.9))
    c.fillStyle=g;c.fillRect(0,180,256,76)
  })
  // far shore: one pale hill sliding into the mist
  M(c,()=>{
    F(c,2.5,()=>B(c,Q(172,172,220,150,256,166),15,.16,14,u=>sin(PI*u**.8)**.7))
    B(c,Q(178,166,218,146,252,158),2.2,.3,16,u=>sin(PI*u)*(.5+.5*sin(u*9)**2))
  })
  gate(c,(x,y)=>[x,y],1)
  // dry-brush grain on the pillars and lintel
  D(c,Q(83,160,85,120,89,80),7,.55,3,3,.5)
  D(c,Q(155,164,153,124,149,82),7,.5,3,7,.5)
  D(c,Q(70,62,119,72,170,61),3,.6,2,9,.5)
  // waterline: a few thin sweeps and rings round the feet
  M(c,()=>F(c,1.4,()=>{
    B(c,Q(30,184,110,180,214,185),5,.3,20)
    B(c,Q(96,196,150,193,232,198),3.4,.2,14)
    B(c,Q(14,200,40,198,74,201),3,.16,10)
  }))
  for(let j=0;j<4;j++){
    const p=(t+j/2)%1,x=j%2?156:82
    c.strokeStyle=K(.5*(1-p));c.lineWidth=1
    c.beginPath();c.ellipse(x,182,8+p*16,1.6+p*3,0,PI*.1,PI*.9);c.stroke()
  }
  // mist: soft cut-out bands drifting through the gate, with a breath of pale ink so it shows beside it
  for(let j=0;j<5;j++){
    const p=(t+j/5)%1,a=sin(PI*p)**.8,x=20+j%2*70+p*150,y=112+(j*37%50)
    E(c,()=>F(c,6,()=>{
      c.fillStyle=K(.78*a);c.beginPath();c.ellipse(x,y,62,7+j%3*2,0,0,T);c.fill()
    }))
    F(c,5,()=>B(c,Q(x-74,y+3,x,y-3,x+78,y+2),8,.11*a,10))
  }
  fade(c);snap(c)
}
