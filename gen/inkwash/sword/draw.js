// ink wash swordsman in a straw hat crouched low, drawing his blade in one motion, the cut leaving a single sweeping brush stroke in the air that fades
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
export const frames=24,delay=[...Array(24)].map((_,i)=>i>6&&i<10?45:i==6?260:80),dither=true
export default(c,t,i)=>{
  const p=i<7?0:i<10?[.4,.82,1][i-7]:1-ss(16,24,i),tn=ss(0,6,i)*(i<7),lg=ss(0,.6,p),fd=i<7?0:cl((i-9)/7)
  const dx=7*lg-2*tn,dy=3*tn-1*lg
  const Hd=q=>[mx(mx(98,142,q),mx(142,172,q),q)+dx*.6,mx(mx(150,152,q),mx(152,116,q),q)]
  const tip=q=>{const g=mx(3,-.32,q),[x,y]=Hd(q);return[x+76*cos(g),y+76*.4*sin(g)-24*q*q]}
  // ground
  br(c,[[26,230],[90,226],[150,229],[200,225]],9,.2,{d:.3,s:4,b:1})
  // scabbard at the hip, pointing back
  br(c,[[94+dx*.5,150+dy],[60,154],[26,160]],6,.85,{pr:u=>1-.3*u,d:.8,s:3})
  // hakama: back leg stretched, front leg bent, dry-brush hems; feet
  br(c,[[88+dx,158+dy],[70,188],[50,220]],30,.78,{pr:u=>.6+.4*u,d:.6,s:5,b:1})
  br(c,[[98+dx,160+dy],[122+dx,178],[134+dx*.5,192]],30,.7,{pr:u=>.75+.25*u,s:6,b:1})
  br(c,[[134+dx*.5,188],[132,204],[130,220]],22,.62,{pr:u=>.7+.3*u,d:.5,s:7,b:1})
  br(c,[[36,224],[48,223],[58,225]],9,.93,{s:2});br(c,[[122,224],[136,223],[146,225]],9,.93,{s:3})
  // torso leaning into the cut, sash
  br(c,[[108+dx*1.4,112+dy],[100+dx*1.2,136+dy],[92+dx,160+dy]],46,.78,{pr:u=>1-.3*u,d:.85,s:8,b:1})
  br(c,[[80+dx,156+dy],[93+dx,160+dy],[106+dx,158+dy]],8,.93,{pr:u=>.6+.4*sin(P*u),s:9})
  // the cut: one sweeping stroke along the path of the point, fading from its tail
  if(p>0&&i>6&&fd<1){
    const n=14,pa=[...Array(n)].map((_,k)=>tip(i<10?p*(1-k/(n-1)):1-k/(n-1)))
    br(c,pa,30,.2*(1-fd),{pr:u=>sin(P*(.08+.92*u)**.7)**.8,b:4,s:11})
    br(c,pa,24,.72*(1-fd)**.8,{e:1-.5*fd,pr:u=>sin(P*(.08+.92*u)**.7)**.8,d:.3,s:11,g:1.3})
  }
  // sword arm, blade and hilt
  const H=Hd(p),S=[112+dx*1.4,120+dy],E=[mx(S[0],H[0],.5)+6*(1-p),mx(S[1],H[1],.5)+10*(1-p)+4],T2=tip(p),bl=ss(0,.4,p)
  const D=[(T2[0]-H[0]),(T2[1]-H[1])],l=hypot(...D)
  if(bl)br(c,[H,[H[0]+D[0]*bl*.5,H[1]+D[1]*bl*.5],[H[0]+D[0]*bl,H[1]+D[1]*bl]],5,.93,{pr:u=>1-.6*u,s:4,b:.4})
  br(c,[[H[0]-D[0]/l*13,H[1]-D[1]/l*13],H],6.5,.93,{pr:u=>1,s:5,b:.4})
  br(c,[[H[0]-D[1]/l*5,H[1]+D[0]/l*5],[H[0]+D[1]/l*5,H[1]-D[0]/l*5]],4,.93,{pr:u=>1,s:6,b:.4})
  ws(c,[[S[0]-8,S[1]+4],[E[0]+4,E[1]-2],[E[0]-4,E[1]+26],[S[0]-6,S[1]+22]],.36,2)
  br(c,[S,E],15,.82,{pr:u=>1-.25*u,s:12});br(c,[E,H],12,.82,{pr:u=>1-.45*u,s:13})
  // head under a wide straw hat tipped forward
  const hx=118+dx*1.6,hy=98+dy*1.5
  ws(c,[[hx-6,hy],[hx+10,hy],[hx+9,hy+16],[hx-4,hy+16]],.4,1)
  pg(c,[[hx-28,hy+7],[hx-3,hy-16],[hx+1,hy-16],[hx+30,hy+3],[hx+2,hy+6]],.74,1)
  br(c,[[hx,hy-17],[hx-14,hy-6],[hx-30,hy+7]],8,.93,{pr:u=>.6+.4*u,d:.55,s:7,b:.5})
  br(c,[[hx-1,hy-17],[hx+15,hy-8],[hx+32,hy+2]],7,.93,{pr:u=>.6+.4*u,d:.5,s:9,b:.5})
  fade(c,12);snap(c)
}
