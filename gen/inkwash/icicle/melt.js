// ink wash icicles hanging from a snowy eave, dripping as they melt, drops falling and splashing below
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

export const frames=28,delay=80,dither=true

export default(c,t)=>{
  const ev=Q(-6,62,150,64,236,36),G=228
  // snow lying on the roof: left open, held by one pale line and a breath of shade
  B(c,Q(8,30,110,14,212,16),2.2,.5,24,u=>sin(PI*u**.8)*(.35+.65*sin(u*7)**2))
  F(c,3,()=>B(c,Q(40,44,124,40,206,32),10,.15,12))
  B(c,Q(212,16,226,20,236,32),1.6,.4,8)
  // eave: one heavy loaded stroke curling up at the corner, tile ends tucked under the snow
  M(c,()=>{
    B(c,ev,10,.9,30,u=>.5+.5*sin(PI*u**1.4)**.5)
    for(let j=0;j<9;j++){
      const[x,y]=ev(.08+j*.1)
      O(c,x,y-7,5,.62,1.2)
    }
    B(c,Q(20,74,120,76,206,58),2.6,.5,20)
  })
  D(c,u=>{const[x,y]=ev(.1+u*.8);return[x,y+2]},7,.9,3,4,.5)
  E(c,()=>F(c,1,()=>B(c,Q(0,50,140,50,232,26),7,'#000',24,u=>.7+.3*sin(u*30))))
  // icicles: pale tapering bodies, dark down one side, a cut-out glint down the other
  ;[[.14,58],[.27,30],[.4,82],[.55,44],[.68,64],[.8,26]].map(([u,l],j)=>{
    const[x,y0]=ev(u),y=y0+3,p=(t+R(j+2))%1,sw=S(p/.45),
    ic=v=>[x+1.2*sin(v*5+j)*(1-v),y+v*(l+sw*1.2)],wd=5+l*.09
    M(c,()=>{
      B(c,ic,wd*2,.2,16,v=>(1-v)**.75*(1+.12*sin(v*13+j)))
      F(c,.8,()=>B(c,v=>{const[a,b]=ic(v*.8);return[a+wd*.3*(1-v)**.75,b]},wd*.8,.2,12,v=>(1-v)**.6))
      B(c,v=>{const[a,b]=ic(v);return[a+wd*.62*(1-v)**.75,b]},2.2,.66,16,v=>(1-v*.8)*(.6+.4*sin(v*9+j)**2))
      B(c,v=>{const[a,b]=ic(v*.5);return[a-wd*.8*(1-v*.5)**.75,b]},1.3,.5,10,v=>1-v)
    })
    E(c,()=>B(c,v=>{const[a,b]=ic(.06+v*.6);return[a-wd*.25*(1-v),b]},1.5,K(.85),10,v=>sin(PI*v)))
    // meltwater bead sliding down, the drop swelling at the tip, falling, splashing
    const[tx,ty]=ic(1)
    p<.45&&O(c,...ic(sw*.95),1.5,.6)
    if(p<.45){
      const r=.6+3*sw
      O(c,tx,ty+r*.6,r,.34,.85)
      B(c,Q(tx-r*.8,ty+r*.5,tx-r*.3,ty+r*1.6,tx+r*.7,ty+r),r*.5,.84,6)
    }else if(p<.7){
      const f=((p-.45)/.25)**2,yd=L(ty+4,G-4,f)
      O(c,tx,yd,3,.4,.8)
      B(c,Q(tx-1,yd-7-f*6,tx-1.6,yd+2,tx+1.6,yd+3),3.2,.84,6,v=>.15+.85*v)
    }else{
      const q=(p-.7)/.3,a=(1-q)**.8
      c.strokeStyle=K(.7*a);c.lineWidth=1.3
      c.beginPath();c.ellipse(tx,G,3+q*15,1+q*4,0,PI*.1,PI*.95);c.stroke()
      c.beginPath();c.ellipse(tx,G,3+q*15,1+q*4,0,PI*1.2,PI*1.8);c.stroke()
      for(let i=0;i<4;i++){
        const d=(i-1.5)*5*q*(1+R(i+j)),h=sin(PI*min(1,q*1.6))*(8+R(i+j*3)*8)
        q<.62&&O(c,tx+d,G-2-h,1.3,.8*(1-q))
      }
    }
  })
  // wet ground: two loose sweeps of meltwater and a broken line
  M(c,()=>F(c,2,()=>{
    B(c,Q(20,G+2,90,G-3,170,G+3),7,.22,16)
    B(c,Q(120,G+6,180,G+1,236,G+5),5,.18,12)
  }))
  B(c,Q(14,G+8,120,G+3,238,G+9),2,.4,30,u=>sin(PI*u)*(.3+.7*sin(u*9)**2))
  fade(c);snap(c)
}
