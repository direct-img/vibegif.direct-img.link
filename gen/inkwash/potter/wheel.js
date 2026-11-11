// ink wash potter's hands cupping ochre clay on a spinning wheel, the clay rising and flaring into a bowl, then pressed back down, spin streaks sliding round
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
const X=146,Yb=190,O='150,116,74',D='86,64,44'
export const frames=24,delay=80,dither=true
export default(c,t)=>{
  const f=ss(0,.6,t)*(1-ss(.78,1,t)),h=mx(34,70,f),yt=Yb-h
  // half width of the clay at height s (0 base, 1 rim): a squat lump opening into a flared bowl
  const hw=s=>mx(31*(1-s*s*.8)**.5,14+41*s**.55,f),py=s=>Yb-h*s
  // wheel head: a brushed ellipse, thin at the back, loaded and dry-ended at the front, a pale top
  c.save();c.filter='blur(2px)';c.fillStyle=`rgba(${K},.2)`;c.beginPath();c.ellipse(X,198,70,11,0,0,T);c.fill();c.restore()
  br(c,[...Array(11)].map((_,k)=>[X+72*cos(P+.25+k*(P-.7)/10),197+12*sin(P+.25+k*(P-.7)/10)]),3.5,.5,{d:.6,s:2})
  br(c,[...Array(13)].map((_,k)=>[X-74*cos(k*P/12),200+14*sin(k*P/12)]),12,.88,{pr:u=>.2+.8*sin(P*u**.8)**.8,d:.78,s:3})
  // spin streaks sliding round the front of the wheel
  for(let k=0;k<5;k++){
    const p=(t*2+k/5)%1,g=P*(1-p),w=.5+k%2*.3
    br(c,[0,1,2].map(j=>[X+(50+k%3*8)*cos(g-j*.2*w),196+(7+k%3)*sin(g-j*.2*w)]),2.6,.5*sin(P*p),{s:k+2,b:.5})
  }
  // clay: warm grey-ochre wash, pooled darker on the left flank, a broken contour on the lit side
  c.save();c.filter='blur(1.4px)';c.fillStyle=`rgba(${O},.62)`;c.beginPath()
  for(let k=0;k<=20;k++)c.lineTo(X-hw(k/20),py(k/20))
  for(let k=20;k>=0;k--)c.lineTo(X+hw(k/20),py(k/20))
  c.fill();c.restore()
  br(c,[...Array(9)].map((_,k)=>[X-hw(k/8)+4,py(k/8)]),10,.6,{pr:u=>1-.5*u,d:.7,s:5,b:1.2,col:D})
  br(c,[...Array(6)].map((_,k)=>[X+hw(k/8)-1,py(k/8)]),3,.7,{s:6,d:.6})
  // throwing rings: faint curved strokes round the wall, and streaks whipping across it
  for(let k=0;k<3;k++){
    const s=.25+k*.24,w=hw(s)*.8
    br(c,[-1,-.4,.3,.9].map(j=>[X+w*j,py(s)+5*(1-j*j)]),2.4,.34,{d:.5,s:k+31,b:.5,col:D})
  }
  for(let k=0;k<4;k++){
    const s=.2+k*.2,p=(t*2+k*.37)%1,a=-hw(s)*cos(P*p),b=hw(s)*.34
    br(c,[[X+a-b,py(s)+3*sin(P*p)-1],[X+a,py(s)+3*sin(P*p)],[X+a+b,py(s)+3*sin(P*p)-1]],2.6,.5*sin(P*p),{s:k+9,d:.3,b:.5})
  }
  // mouth of the bowl, opening as the wall rises
  if(f>.05){
    c.save();c.filter='blur(.8px)';c.fillStyle=`rgba(${D},${.75*ss(.05,.4,f)})`;c.beginPath();c.ellipse(X,yt+1,hw(1)-2,hw(1)*.17*f+1,0,0,T);c.fill();c.restore()
  }
  // a hand cupping each side: forearm tip, palm, four closed fingers and a thumb laid down as one mid-tone wash,
  // then creases between the fingers, knuckle ticks and a broken contour down the back of the hand
  const hand=(d,s,sd)=>{
    const ax=X+d*(hw(s)+3),ay=py(s),q=(x,y)=>[ax+d*x*1.45,ay+y*1.45],F=[[-9,-13],[-3,-17],[3,-16],[9,-11]]
    L.clearRect(0,0,256,256)
    br(L,[q(18,-5),q(32,-18),q(50,-36)],25,1,{pr:u=>.85-.2*u,d:.3,s:sd,b:0,g:1.3})
    br(L,[q(8,0),q(15,-2),q(22,-5)],30,1,{pr:u=>1-.15*u,b:0})
    for(const[y,x]of F)br(L,[q(9,y),q(-2,y*1.15),q(x,y*1.3+1)],9.5,1,{pr:u=>1-.3*u,b:0})
    br(L,[q(15,-11),q(2,-19),q(-9,-18-3*f)],8.5,1,{pr:u=>1-.35*u,b:0})
    c.save();c.globalAlpha=.5;c.filter='blur(1px)';c.drawImage(L.canvas,0,0);c.restore()
    for(const[y,x]of[[-6,-9],[0,-12],[6,-9]])br(c,[q(7,y),q(-2,y*1.15),q(x,y*1.3+.5)],2,.68,{pr:u=>1-.7*u,s:sd+y,b:.4})
    for(const y of[-9,-3,3])br(c,[q(9,y-2),q(11,y),q(9.5,y+2)],2,.6,{b:.4})
    br(c,[q(22,-16),q(28,-3),q(22,10),q(13,15)],3,.82,{pr:u=>sin(P*u**.6)**.6,d:.6,s:sd+3})
    br(c,[q(15,-13),q(4,-22),q(-6,-22-3*f)],2,.65,{d:.6,s:sd+6,b:.4})
    br(c,[q(29,-24),q(42,-37)],2.6,.7,{d:.3,s:sd+4})
  }
  hand(-1,.55,11);hand(1,.68,21)
  fade(c,14);snap(c)
}
