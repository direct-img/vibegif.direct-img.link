// ink wash fisherman in a conical hat standing in a small rocking boat, casting a net that billows open in the air, drapes onto the water and sinks in spreading ripples
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
const pg=(c,p,a,b)=>{c.save();c.filter=`blur(${b}px)`;c.fillStyle=`rgba(${K},${a})`;c.beginPath();p.forEach(q=>c.lineTo(...q));c.fill();c.restore()}
const ln=(c,p,w,a)=>{c.strokeStyle=`rgba(${K},${a})`;c.lineWidth=w;c.beginPath();p.forEach(q=>c.lineTo(...q));c.stroke()}
const el=(c,x,y,rx,ry,w,a,a0=0,a1=T)=>{c.strokeStyle=`rgba(${K},${a})`;c.lineWidth=w;c.beginPath();c.ellipse(x,y,rx,ry,0,a0,a1);c.stroke()}
export const frames=28,delay=80,dither=true
export default(c,t)=>{
  const wd=ss(0,.14,t)*(1-ss(.14,.26,t)),th=ss(.14,.3,t)*(1-ss(.78,1,t)),bob=sin(T*t)*1.5,rk=sin(T*t+1)*.025
  const fly=cl((t-.2)/.5),ld=ss(.68,.8,t),gone=ss(.72,.9,t),z=1.36
  // boat and figure are laid out round (80,196), then scaled up and rocked
  const M=([x,y])=>{x=(x-80)*z;y=(y-196)*z;return[80+x*cos(rk)-y*sin(rk),200+bob+x*sin(rk)+y*cos(rk)]}
  const B=(p,w,a,o)=>br(c,p.map(M),w*z,a,o)
  // water: a few loose dry sweeps
  br(c,[[10,220],[70,216],[130,220],[170,217]],8,.2,{d:.4,s:4,b:1})
  br(c,[[120,238],[170,234],[236,237]],7,.2,{d:.3,s:6,b:1})
  br(c,[[160,198],[200,196],[246,199]],5,.2,{d:.2,s:8,b:1})
  // ripples where the net lands
  for(let k=0;k<3;k++){
    const p=cl((t-.7-k*.07)/.3)
    if(p>0&&p<1)for(let j=0;j<3;j++)el(c,196,204,(28+p*30)*(1+k*.12),(8+p*9)*(1+k*.12),1.6-p,.5*sin(P*p)**.7,j*2.1+k,j*2.1+k+1.5)
  }
  // reflection, hull, a paler inside
  ws(c,[[40,204],[120,204],[106,214],[56,214]].map(M),.2,4)
  B([[32,181],[56,197],[104,198],[130,183]],16,.9,{pr:u=>.3+.7*sin(P*u)**.6,d:.82,s:3})
  B([[46,187],[80,190],[116,185]],4,.36,{s:5})
  // fisherman: short legs, robe in two loaded strokes, a trailing arm and a long throwing arm, hat in one wet stroke
  const lx=-7*wd+5*th,sh=[87+lx*.8,134]
  const hn=[mx(mx(102,60,wd),128,th),mx(mx(150,152,wd),112,th)]
  B([[82,172],[80,182],[78,191]],10,.88,{pr:u=>1-.4*u,s:2});B([[92,172],[95,182],[98,191]],10,.88,{pr:u=>1-.4*u,s:3})
  B([[84+lx,128],[82+lx*.5,152],[80,177]],22,.84,{pr:u=>.72+.28*u,d:.86,s:6,b:.6})
  B([[94+lx,130],[95+lx*.5,152],[96,175]],13,.55,{pr:u=>.7+.3*u,d:.7,s:8,b:.6})
  B([[sh[0]-7,sh[1]],[76+lx*.5+10*th,150],[mx(84,100,th),mx(160,150,th)]],7,.8,{pr:u=>1-.45*u,s:4})
  B([[sh[0]+3,sh[1]-1],[mx(sh[0],hn[0],.55)+4,mx(sh[1],hn[1],.55)+5*(1-th)],hn],9,.93,{pr:u=>1-.4*u,s:5})
  ws(c,[[80+lx,116],[95+lx,116],[94+lx,131],[81+lx,131]].map(M),.4,1)
  pg(c,[[66+lx,123],[86+lx,107],[108+lx,122],[87+lx,121]].map(M),.72,1)
  B([[61+lx,126],[75+lx,114],[87+lx,105],[100+lx,114],[113+lx,124]],6.5,.93,{pr:u=>.3+.7*sin(P*u)**.6,d:.86,s:7,b:.5})
  // the bundled net in hand before the throw (and again once it is hauled back)
  const bn=max(1-ss(.18,.24,t),ss(.9,1,t))
  if(bn)B([[hn[0]-2,hn[1]],[hn[0]+2,hn[1]+10],[hn[0]-1,hn[1]+22]],11,.7*bn,{pr:u=>.5+.5*u,d:.3,s:9,g:1.5})
  // the net: thrown, billowing open as it turns, draping flat and sinking away
  if(fly>0&&gone<1){
    const u=fly,x=mx(150,196,u**.8),y=104-150*u*(1-u)+100*u*u,R=3+48*ss(0,.7,u),q=mx(.82,.26,ss(.45,1,u)),a=1-gone,sp=u*1.5
    const dm=R*.3*sin(P*cl(u*1.25))*(1-ld),r=rn(5),[hx,hy]=M(hn)
    // a point of the cloth: ρ out from the middle, g round it; the edge ripples and the middle bellies up like a sail
    const pt=(g,p=1)=>{const w=p*(1+.1*p*sin(3*g+u*5)+.06*p*sin(5*g-u*8));return[x+R*w*cos(g+sp),y+R*w*q*sin(g+sp)-dm*(1-p*p)]}
    const ms=(a0,b0,a1,b1,n=12)=>{c.beginPath();for(let k=0;k<=n;k++){const X=mx(a0,a1,k/n),Y=mx(b0,b1,k/n);c.lineTo(...pt(Math.atan2(Y,X),hypot(X,Y)))}c.stroke()}
    ln(c,[[hx,hy],[mx(hx,x,.5),mx(hy,y,.5)+14*u],pt(0,0)],.9,.45*a*(1-ld))
    // pale wash, pooling toward the rim
    c.save();c.filter='blur(2px)'
    for(const[f,o]of[[1,.1],[.72,-1]]){
      c.globalCompositeOperation=o<0?'destination-out':'source-over';c.fillStyle=o<0?'rgba(0,0,0,.55)':`rgba(${K},${.2*a})`
      c.beginPath();for(let k=0;k<40;k++)c.lineTo(...pt(k*T/40,f));c.fill()
    }
    c.restore()
    // crossing dry hairlines of mesh, broken, drawn twice over toward the rim so it darkens there
    c.save();c.lineWidth=.75
    for(const[lo,o,ds]of[[0,.3,[7,2,13,3,5,2]],[.62,.34,[4,2,9,3]]]){
      c.strokeStyle=`rgba(${K},${o*a})`;c.setLineDash(ds)
      for(let k=-7;k<=7;k++){
        const v=k/7.4+(r()-.5)*.05,h=(1-v*v)**.5,l=lo>abs(v)?(lo*lo-v*v)**.5:0
        for(const s of[1,-1])for(const[e0,e1]of l?[[-h,-l],[l,h]]:[[-h,h]]){
          c.lineDashOffset=r()*20
          s>0?ms(v,e0,v,e1):ms(e0,v,e1,v)
        }
      }
    }
    c.restore()
    // rim rope: broken loaded strokes, with uneven lead weights beaded along it
    for(let k=0;k<5;k++){
      const g0=k*T/5+r(),n=6
      br(c,[...Array(n)].map((_,j)=>pt(g0+j*(.75+r()*.3)/n)),2.2+r()*1.6,.82*a,{pr:u=>.35+.65*sin(P*u)**.6,d:.7,s:k+4,b:.4})
    }
    for(let k=0;k<13;k++){
      const g=k*T/13+r()*.3,w=2.4+r()*2.6
      br(c,[pt(g,1),pt(g+.03,1.03)],w,.93*a,{pr:u=>1,s:k+1,b:.4})
    }
  }
  fade(c,14);snap(c)
}
