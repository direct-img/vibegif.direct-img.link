// ink wash five-pointed star painted in one confident brush stroke, a soft gold wash blooming inside, then fading (favourite, rating, bookmark state)
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
const r=rn(11),V=[...Array(11)].map((_,k)=>{
  const a=-P/2+k%10*P/5+.06,R=(k%2?41:94)+(k%10?r()*8-4:0)
  return[128+R*cos(a),134+R*sin(a)]
})
export const frames=24,delay=[...Array(24)].map((_,i)=>i==17?900:i==23?260:70),dither=true
export default(c,t,i)=>{
  const f=ss(17,23,i),e=cl(i/11)*.985,g=ss(11,16,i)
  const pr=u=>min(1,u*30)**.5*(.62+.38*abs(sin(u*10*P)))*(1-.25*u)*min(1,(1-u)*12)**.6
  L.clearRect(0,0,256,256)
  if(g){
    // gold wash blooms from the centre and pools toward the points, kept inside the star
    L.save();L.beginPath();V.forEach(([x,y])=>L.lineTo(mx(128,x,.9),mx(134,y,.9)));L.clip()
    L.filter='blur(6px)'
    // one loose pool in the middle and five uneven ones running out toward the points
    for(const[x,y,R,a]of[[128,134,60,.5],...V.filter((_,k)=>k%2==0&&k<10).map(([x,y],k)=>[mx(128,x,.52),mx(134,y,.52),24+k*2,.3+k%3*.12])]){
      L.fillStyle=`rgba(216,156,36,${a*g})`
      L.beginPath();L.arc(x,y,R*g**.7,0,T);L.fill()
    }
    L.restore()
  }
  br(L,V,24,.2,{e,pr,f:pl,b:3,s:3})
  br(L,V,19,.88,{e,d:.86,pr,f:pl,s:3})
  c.globalAlpha=1-f;c.filter=`blur(${f*7}px)`;c.drawImage(L.canvas,0,0)
  c.globalAlpha=1;c.filter='none';snap(c)
}
