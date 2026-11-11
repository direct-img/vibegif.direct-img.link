// ink wash bamboo whisk whipping matcha in a tea bowl, muted green foam swirling round with bubbles
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
const G='112,138,66',X=116,Y=150
export const frames=20,delay=70,dither=true
export default(c,t)=>{
  const ox=17*sin(T*2*t),oy=3*sin(T*4*t),an=.12*sin(T*2*t+.6),r=rn(9)
  // bowl body: loose wet wash, pooled dark on the left flank, dry sweeps round the belly, open lit right side, small foot
  c.save();c.filter='blur(2.5px)';c.fillStyle=`rgba(${K},.3)`;c.beginPath()
  c.moveTo(40,Y+4);c.bezierCurveTo(46,200,74,224,100,224);c.lineTo(134,224);c.bezierCurveTo(158,224,184,204,190,Y+10);c.fill();c.restore()
  br(c,[[40,158],[50,190],[76,214],[108,224]],19,.78,{pr:u=>.9-.5*u,d:.6,s:3,b:1})
  br(c,[[62,196],[100,210],[150,204],[180,180]],13,.36,{d:.3,s:11,b:1})
  br(c,[[192,160],[184,190],[164,212]],4.5,.6,{d:.5,s:5})
  br(c,[[98,227],[117,229],[138,226]],8,.9,{pr:u=>.6+.4*sin(P*u),d:.6,s:6})
  // inside wall, then the tea: a muted green wash
  c.save();c.filter='blur(1.2px)';c.fillStyle=`rgba(${K},.5)`;c.beginPath();c.ellipse(X,Y,77,29,0,0,T);c.fill()
  c.fillStyle=`rgba(${G},.95)`;c.globalCompositeOperation='source-over'
  c.globalCompositeOperation='destination-out';c.fillStyle='#000';c.beginPath();c.ellipse(X,Y+5,66,22,0,0,T);c.fill()
  c.globalCompositeOperation='source-over';c.fillStyle=`rgba(${G},.62)`;c.beginPath();c.ellipse(X,Y+5,66,22,0,0,T);c.fill();c.restore()
  // foam: a paler swirl and bubbles cut out of the green, turning once per loop
  c.save();c.beginPath();c.ellipse(X,Y+5,64,20.5,0,0,T);c.clip();c.globalCompositeOperation='destination-out'
  c.filter='blur(1.6px)';c.strokeStyle='rgba(0,0,0,.42)';c.lineWidth=5
  for(let k=0;k<3;k++){
    c.beginPath()
    for(let j=0;j<=30;j++){const g=T*t+k*T/3+j*.11,R=10+j*1.75;c.lineTo(X+R*cos(g),Y+5+R*.33*sin(g))}
    c.stroke()
  }
  c.filter='none';c.fillStyle='rgba(0,0,0,.55)'
  for(let k=0;k<34;k++){
    const g=T*t+r()*T,R=8+r()*52,s=.7+r()*1.5
    c.beginPath();c.arc(X+R*cos(g),Y+5+R*.33*sin(g),s,0,T);c.fill()
  }
  c.restore()
  // whisk: handle, dark binding, a fan of fine tines with a trailing ghost
  const wk=(dx,a,al)=>{
    const cx=X+12+dx,cy=Y+4+oy,W=(x,y)=>[cx+x*cos(a)-y*sin(a),cy+x*sin(a)+y*cos(a)]
    if(al==1){
      br(c,[W(32,-128),W(20,-98),W(8,-68)],23,.6,{pr:u=>1-.1*u,d:.72,s:4,b:.8})
      br(c,[W(22,-125),W(10,-97),W(-1,-70)],4.5,.85,{s:5})
      br(c,[W(-6,-68),W(6,-64),W(18,-67)],8,.93,{pr:u=>.7+.3*sin(P*u),s:6})
    }
    c.strokeStyle=`rgba(${K},${.8*al})`;c.lineWidth=1.15
    for(let k=0;k<17;k++){
      const f=k/16-.5,e=1-(k*7%5)/22
      c.beginPath();c.moveTo(...W(6+f*18,-63));c.bezierCurveTo(...W(6+f*66,-44),...W(6+f*78,-16*e),...W(6+f*56,-2*e));c.stroke()
    }
  }
  wk(17*sin(T*2*t-.5),.12*sin(T*2*t+.1),.3);wk(ox,an,1)
  // front rim: one loaded stroke, lighter at the back
  br(c,[...Array(13)].map((_,k)=>[X-78*cos(k*P/12),Y-29*sin(k*P/12)]),4,.55,{pr:u=>.5+.5*sin(P*u),s:7})
  br(c,[...Array(13)].map((_,k)=>[X-78*cos(k*P/12),Y+1+30*sin(k*P/12)]),8,.9,{pr:u=>.3+.7*sin(P*u**.8)**.7,d:.8,s:8})
  // flecks of foam thrown up
  for(let k=0;k<4;k++){
    const p=(t*2+k/4)%1,x=X+ox*.5+(k-1.5)*26
    c.fillStyle=`rgba(${G},${.7*(1-p)})`;c.beginPath();c.arc(x+p*(k-1.5)*8,Y-4-40*p*(1-p)*1.6,1.8,0,T);c.fill()
  }
  snap(c)
}
