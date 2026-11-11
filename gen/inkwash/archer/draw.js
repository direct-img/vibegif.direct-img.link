// ink wash archer in a wide stance drawing a long bow and loosing an arrow that leaves a fading dry-brush streak
import{createCanvas}from'@napi-rs/canvas'
const K='20,18,16',{PI:P,sin,cos,min,max,abs,hypot}=Math,T=P*2
const cl=(x,a=0,b=1)=>min(b,max(a,x)),ss=(a,b,x)=>(x=cl((x-a)/(b-a)),x*x*(3-2*x)),mx=(a,b,f)=>a+(b-a)*f
const rn=s=>()=>(s=s*16807%2147483647)/2147483647
const S=createCanvas(256,256).getContext('2d'),L=createCanvas(256,256).getContext('2d')
// point at u on a smooth curve through p
const cr=(p,u)=>{
  const n=p.length-1,s=min(n-1e-6,u*n),i=s|0,f=s-i,g=k=>p[cl(k,0,n)],a=g(i-1),b=g(i),d=g(i+1),e=g(i+2)
  return[0,1].map(j=>.5*(2*b[j]+(d[j]-a[j])*f+(2*a[j]-5*b[j]+4*d[j]-e[j])*f*f+(3*b[j]-a[j]-3*d[j]+e[j])*f*f*f))
}
// polyline with sharp corners, by length
const pl=(p,u)=>{
  const l=p.map((q,i)=>i?hypot(q[0]-p[i-1][0],q[1]-p[i-1][1]):0),s=l.reduce((a,b)=>a+b)
  let d=u*s,i=1
  while(i<p.length-1&&d>l[i])d-=l[i++]
  return[0,1].map(j=>mx(p[i-1][j],p[i][j],d/l[i]))
}
// brush stroke: width w, alpha a, e painted fraction, d where dry brush starts, pr pressure, b blur, s seed, f curve, col colour
const br=(c,p,w,a,{e=1,d=1,pr=u=>sin(P*u**.55)**.6,b=.7,s=7,f=cr,col=K,g=1}={})=>{
  if(e<=0||a<=0)return
  const r=rn(s),N=p.reduce((l,q,i)=>i?l+hypot(q[0]-p[i-1][0],q[1]-p[i-1][1]):0,0)|0,q=[]
  S.clearRect(0,0,256,256);S.fillStyle=`rgb(${col})`;S.beginPath()
  for(let k=0;k<=N*e;k++){
    const u=k/N,[x,y]=f(p,u),h=w/2*pr(u)+.4
    S.moveTo(x+h,y);S.arc(x,y,h,0,T);q.push([x,y,h,u])
  }
  S.fill()
  if(d<1){
    // carry the hairline gaps on through the round tip
    for(let k=0,n=q.length-1,[x,y,h,u]=q[n],[X,Y]=q[n-1]||q[n],l=hypot(x-X,y-Y)||1;k++<w/2+2;)q.push([x+(x-X)/l*k,y+(y-Y)/l*k,h,u])
    S.globalCompositeOperation='destination-out';S.beginPath()
    for(let j=w*.6*g+2|0;j--;){
      const o=r()*2.4-1.2,u0=d+r()*(1-d)*.7,z=.4+r()
      let H=0
      q.forEach(([x,y,h,u],k)=>{
        if(u<u0||!k)return
        H=max(H,h);h=H
        const[X,Y]=q[k-1],l=hypot(x-X,y-Y)||1,g=min(w*.05+.5,(u-u0)/(1-u0)*z*w*.045+.4)
        S.moveTo(x-(y-Y)/l*o*h+g,y+(x-X)/l*o*h);S.arc(x-(y-Y)/l*o*h,y+(x-X)/l*o*h,g,0,T)
      })
    }
    S.fill();S.globalCompositeOperation='source-over'
  }
  c.save();c.globalAlpha=a;c.filter=`blur(${b}px)`;c.drawImage(S.canvas,0,0);c.restore()
}
// soft wash: blurred fill of a smooth closed blob through p
const ws=(c,p,a,b=4,col=K)=>{
  c.save();c.filter=`blur(${b}px)`;c.fillStyle=`rgba(${col},${a})`;c.beginPath()
  p.forEach((q,i)=>{const n=p[(i+1)%p.length],m=[(q[0]+n[0])/2,(q[1]+n[1])/2];i?0:c.moveTo((p.at(-1)[0]+q[0])/2,(p.at(-1)[1]+q[1])/2);c.quadraticCurveTo(...q,...m)})
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
// coarse alpha steps, pure ink colour for anything neutral, coarse colour steps for the tinted accents
const snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){
    const n=max(d[k],d[k+1],d[k+2])-min(d[k],d[k+1],d[k+2])<10
    for(let j=0;j<3;j++)d[k+j]=n?[20,18,16][j]:Math.round(d[k+j]/s)*s
    d[k+3]=min(255,Math.round(d[k+3]/a)*a)
  }
  c.putImageData(m,0,0)
}
const ln=(c,p,w,a)=>{c.strokeStyle=`rgba(${K},${a})`;c.lineWidth=w;c.beginPath();p.forEach(q=>c.lineTo(...q));c.stroke()}
export const frames=26,delay=80,dither=true
export default(c,t)=>{
  const R=.56,fl=t>=R,d=fl?0:ss(0,.44,t),v=fl?sin((t-R)*70)*4*max(0,1-(t-R)*5):0
  const bk=ss(R,R+.06,t)*(1-ss(.8,.98,t)),nw=ss(.86,1,t),ln2=1-ss(.8,1,t)
  const G=[150-2*d,112],tp=[136-15*d,34+9*d],bt=[136-15*d,188-9*d],N=[136-50*d+v,112-d*2]
  const lean=-3*d-2*bk,sh=[80+lean,116],H=fl?[mx(134,40,bk),mx(112,108,bk)]:N,E=fl?[mx(108,58,bk),mx(126,113,bk)]:[mx(108,50,d),mx(126,104,d)]
  // ground: one dry sweep
  br(c,[[30,228],[80,224],[130,227],[176,223]],9,.2,{d:.3,s:4,b:1})
  // hakama: two loaded strokes splaying to the feet, a paler wash between
  ws(c,[[76,150],[102,150],[112,214],[62,214]],.36,3)
  br(c,[[80+lean,148],[72,176],[58,216]],34,.78,{pr:u=>.5+.5*u,d:.55,s:5,b:1})
  br(c,[[96+lean,148],[104,178],[114,216]],30,.6,{pr:u=>.5+.5*u,d:.5,s:8,b:1})
  br(c,[[50,222],[62,221],[70,223]],9,.93,{s:2});br(c,[[108,222],[120,221],[128,223]],9,.93,{s:3})
  // torso: one loaded stroke, shoulders, a dark sash
  ws(c,[[68+lean,108],[106+lean,108],[101+lean,152],[75+lean,152]],.6,1.6)
  br(c,[[71+lean,112],[72+lean,132],[77+lean,150]],6,.78,{s:12})
  br(c,[[72+lean,114],[86+lean,110],[102+lean,114]],13,.78,{pr:u=>.7+.3*sin(P*u),s:13})
  br(c,[[75+lean,152],[88+lean,150],[101+lean,153]],8,.93,{pr:u=>.6+.4*sin(P*u),s:6})
  // bow: thick at the grip, whipping out to the tips
  br(c,[tp,[tp[0]+13,66],G,[bt[0]+13,156],bt],9,.9,{pr:u=>.35+.65*sin(P*u)**.7,s:3,b:.5})
  ln(c,[tp,N,bt],1.1,.75)
  // bow arm and its hanging sleeve
  ws(c,[[92+lean,112],[122,112],[108,138],[94+lean,132]],.36,2)
  br(c,[[90+lean,113],[120,111],G],13,.8,{pr:u=>1-.6*u,s:4})
  // drawing arm: shoulder, elbow, hand
  br(c,[sh,E],14,.8,{pr:u=>1-.3*u,s:5});br(c,[E,H],9,.8,{pr:u=>1-.5*u,s:6})
  // head: pale face, a brow and jaw flick, dark hair swept back into a topknot
  ws(c,[[86+lean,80],[98+lean,88],[94+lean,103],[83+lean,101]],.36,1)
  br(c,[[96+lean,88],[99+lean,95],[93+lean,103]],2.6,.78,{s:3,b:.4})
  br(c,[[96+lean,82],[86+lean,78],[77+lean,84],[77+lean,97]],13,.93,{pr:u=>.75+.25*sin(P*u),s:7})
  br(c,[[82+lean,80],[79+lean,71],[75+lean,65]],8,.93,{pr:u=>.5+.5*u,s:8})
  // arrow: nocked, or flying off with its streak
  const ar=(x,y,a)=>{
    ln(c,[[x,y],[x+72,y]],1.6,.9*a);br(c,[[x+68,y],[x+78,y]],5,.93*a,{pr:u=>1-u})
    br(c,[[x+12,y-1],[x+2,y-4]],4,.7*a,{s:2});br(c,[[x+12,y+1],[x+2,y+4]],4,.7*a,{s:2})
  }
  if(!fl)ar(N[0],N[1],1)
  else{
    const p=(t-R)/.09,x=136+p*p*60+p*70
    if(x<250)ar(x,111,1)
    br(c,[[150,111],[190,110],[232,112],[262,110]],13,.6*ln2,{e:cl(p*.8+.1),d:0,pr:u=>.5+.5*u,s:9,b:.6,g:2})
    if(nw)ar(136,112,nw)
  }
  fade(c,14);snap(c)
}
