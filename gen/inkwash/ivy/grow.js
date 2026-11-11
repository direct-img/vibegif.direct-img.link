// ink wash ivy vine growing across, lobed leaves unfurling along it in brush order, then fading away
import{createCanvas}from'@napi-rs/canvas'
const{PI,sin,cos,min,max,abs,hypot,round}=Math,T=PI*2
const ink=(a,k='20,18,16')=>`rgba(${k},${a})`
const rnd=s=>()=>(s=s*16807%2147483647)/2147483647
const cl=(x,a=0,b=1)=>min(b,max(a,x))
const ss=(a,b,x)=>(x=cl((x-a)/(b-a)))*x*(3-2*x)
const lp=(a,b,x)=>a+(b-a)*x
// smooth curve through points, sampled as [x,y,normal x,normal y]
const sp=(P,n=32)=>{
  const Q=[P[0],...P,P.at(-1)],o=[]
  for(let k=0;k<=n;k++){
    const u=k/n*(P.length-1),j=min(u|0,P.length-2),f=u-j,[a,b,d,e]=Q.slice(j,j+4)
    o.push([0,1].map(m=>.5*(2*b[m]+(d[m]-a[m])*f+(2*a[m]-5*b[m]+4*d[m]-e[m])*f*f+(3*b[m]-a[m]-3*d[m]+e[m])*f**3)))
  }
  return o.map(([x,y],k)=>{
    const[a,b]=o[max(k-1,0)],[g,h]=o[min(k+1,n)],l=hypot(g-a,h-b)||1
    return[x,y,(b-h)/l,(g-a)/l]
  })
}
// outline of a brush stroke: f = pressure along it, u = how much is painted, d = sideways lean, s = seed for the wobbly edge
const ol=(c,P,w,{f=u=>sin(PI*u**.6)**.8,u=1,d=0,n=32,s=1,e=.1}={})=>{
  const q=sp(P,n),m=round(n*u),L=[],B=[]
  for(let k=0;k<=m;k++){
    const[x,y,i,j]=q[k],r=w/2*f(k/n)*(1+e*sin(k*.6+s*9))*min(1,(m-k)/3+(u<1?.2:1))
    L.push([x+i*r*(1+d),y+j*r*(1+d)]);B.push([x-i*r*(1-d),y-j*r*(1-d)])
  }
  c.beginPath()
  for(const[x,y]of[...L,...[...B].reverse()])c.lineTo(x,y)
  c.closePath()
  return[L,B]
}
const st=(c,P,w,col,o)=>{c.fillStyle=col;ol(c,P,w,o);c.fill()}
// dry brush: broken hairlines running along the stroke
const dry=(c,P,w,col,{u0=.4,u=1,n=32,k=5,s=1}={})=>{
  const q=sp(P,n),r=rnd(s*77+1)
  c.strokeStyle=col
  for(let j=0;j<k;j++){
    const o=(j/(k-1)-.5)*w*.8,a=round(n*lp(u0,u,r()*.5)),b=round(n*lp(u0,u,.6+r()*.4))
    c.lineWidth=.5+r()
    c.beginPath()
    for(let i=a;i<=b;i++)c.lineTo(q[i][0]+q[i][2]*o,q[i][1]+q[i][3]*o)
    c.stroke()
  }
}
// paint onto a spare layer so a whole group can fade as one
const lay=(c,a,f)=>{
  if(a<.01)return
  const o=createCanvas(256,256)
  f(o.getContext('2d'));c.globalAlpha=a;c.drawImage(o,0,0);c.globalAlpha=1
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
const snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=round(d[k+j]/s)*s;d[k+3]=min(255,round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}
export const frames=30,dither=true,delay=[...Array(30)].map((_,k)=>k==21?1300:85)

const V=[[4,214],[40,196],[76,150],[120,146],[150,98],[196,88],[224,44]],
  W=[[76,150],[104,186],[150,196],[186,228]]

// leaves as [vine, place along it, side, size, tone]
const LV=[[V,.1,1,26,.5],[V,.23,-1,34,.85],[V,.4,1,22,.36],[V,.52,-1,38,.8],[V,.6,1,18,.55],
  [V,.75,1,30,.85],[V,.86,-1,20,.4],[V,.96,1,12,.7],[W,.45,-1,24,.7],[W,.8,1,30,.45],[W,.97,-1,13,.8]]


export default(c,t)=>{
  const sc=(c,r,v)=>{
    const vine=(P,a,b,w,s)=>{
      const u=cl((r-a)/(b-a))
      if(u>.03){st(c,P,w,ink(.86),{f:u=>1-.75*u,u,s,n:48});dry(c,P,w,ink(.4),{u0:0,u,k:3,s,n:48})}
    }
    vine(V,0,.8,6.5,1);vine(W,.3,.75,4.5,2)
    LV.forEach(([P,u,e,z,a],k)=>{
      const q=sp(P,48)[round(u*48)],g=ss(0,.16,r-(P==V?u*.8:.3+u*.45)),[x,y,i,j]=q
      if(g<.02)return
      const h=Math.atan2(j*e,i*e)+.5*e*(1-g)+.3*sin(k*5),l=z*.45*g,X=x+l*cos(h),Y=y+l*sin(h),Z=z*g
      st(c,[[x,y],[X,Y]],2,ink(.8),{f:u=>1-.4*u})
      const d=(q,l)=>[X+l*cos(h+q),Y+l*sin(h+q)],
        lb=(c,w,col)=>[[0,1],[.95,.78],[-.9,.8],[2,.5],[-1.95,.46]].forEach(([q,l],m)=>
          st(c,[[X,Y],d(q*.9,Z*l*.5),d(q,Z*l)],Z*w*(m?.9:1),col,{f:u=>sin(PI*u**.7)**.7,s:k+m}))
      lay(c,a,x=>lb(x,.5,ink(1)))
      lb(c,.05,ink(.75))
    })
  }
  const f=ss(.76,1,t)
  lay(c,1-f,x=>sc(x,lp(.17,1,ss(0,.7,t)*.6+.4*cl(t/.7))))
  lay(c,f,x=>sc(x,.17))
  fade(c);snap(c)
}
