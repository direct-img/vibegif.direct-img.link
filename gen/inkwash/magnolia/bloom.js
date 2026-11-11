// ink wash magnolia branch, goblet buds opening into pale blossoms with a rose blush, then fading back to buds
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
// loaded brush: a paler full stroke with a darker core leaning to one side
const br=(c,P,w,a,o={})=>{
  st(c,P,w,ink(a*.55,o.k),o)
  st(c,P,w*.6,ink(a*.8,o.k),{...o,d:(o.d||0)+.45})
}
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
// wet wash: a soft wobbly blob
const wash=(c,x,y,a,b,col,{bl=3,s=1,ro=0,w=.15}={})=>{
  c.save();c.translate(x,y);c.rotate(ro);c.filter=`blur(${bl}px)`;c.fillStyle=col
  c.beginPath()
  for(let k=0;k<40;k++){
    const h=k/40*T,r=1+w*sin(2*h+s*5)+w*.6*sin(3*h+s*11)
    c.lineTo(a*r*cos(h),b*r*sin(h))
  }
  c.fill();c.restore()
}
// light areas are holes in the ink
const cut=(c,f)=>{c.save();c.globalCompositeOperation='destination-out';c.fillStyle=c.strokeStyle='#000';f();c.restore()}
// open petal: a hole through the ink behind, a faint wash, a blush at the base and two contour strokes of unequal weight
const pet=(c,P,w,{a=.6,tint,tr=30,wa=.07,...o}={})=>{
  cut(c,()=>{ol(c,P,w,o);c.fill()})
  const[L,B]=ol(c,P,w,o)
  c.fillStyle=ink(wa);c.fill()
  if(tint){
    const[x,y]=P[0],g=c.createRadialGradient(x,y,0,x,y,tr)
    g.addColorStop(0,tint);g.addColorStop(1,tint.replace(/[\d.]+\)$/,'0)'))
    c.save();c.clip();c.fillStyle=g;c.fillRect(0,0,256,256);c.restore()
  }
  const e=(E,w,a,u)=>st(c,E.filter((_,k)=>k%4==0),w,ink(a),{u,s:o.s})
  e(L,2.8,a,1);e(B,1.9,a*.75,.82)
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
export const frames=28,dither=true,delay=[...Array(28)].map((_,k)=>k==19?1300:85)

const twig=(c,P,w,s)=>{
  br(c,P,w,.9,{f:u=>1-.72*u,s})
  dry(c,P,w,ink(.5),{u0:.15,s,k:4})
}

// petals as [side, length, front]
const PT=[[-1,.86],[1,.9],[-.48,1],[.52,.97],[-.8,.66,1],[.82,.7,1],[.04,.9,1]]

const fl=(c,x,y,g,z,o,s)=>{
  const L=z*lp(.62,1,o),d=(h,l)=>[x+l*sin(h),y-l*cos(h)]
  PT.forEach(([q,l,fr],k)=>{
    const h=g+q*lp(.1,fr?1.25:.95,o),b=g+q*lp(.1,.45,o)
    pet(c,[[x,y],d(b,L*l*.5),d(h*.8+g*.2+q*.1,L*l*.82),d(h+q*.25*o,L*l)],z*lp(.3,.5,o)*(fr?.8:1),
      {f:u=>sin(PI*u**.85)**.55,s:s+k,tint:'rgba(178,92,112,.5)',tr:L*.6,a:fr?.7:.55,d:q*.3})
  })
  // dark bud scales hugging the base
  for(const q of[-1,1])st(c,[d(g+q*1.9,z*.1),d(g+q*.9,z*.13),d(g+q*lp(.25,.7,o),z*.3)],z*.14,ink(.9),{f:u=>sin(PI*u**.5),s})
}

export default(c,t)=>{
  c.globalCompositeOperation='multiply'
  twig(c,[[4,244],[58,204],[104,180],[146,146],[176,108]],14,1)
  twig(c,[[104,180],[92,150],[74,128]],7,2)
  twig(c,[[146,146],[186,146],[212,158]],6,3)
  twig(c,[[58,204],[84,218],[116,222]],5,4)
  for(const[x,y,r]of[[104,180,5],[146,146,4.5],[58,204,5],[126,164,3]])wash(c,x,y,r,r*.8,ink(.8),{bl:.8,s:x})
  c.globalCompositeOperation='source-over'
  const F=o=>x=>{
    fl(x,74,128,-.3,58,o(.06),7)
    fl(x,212,158,.8,32,o(.3)*.5,5)
    fl(x,176,108,.2,76,o(0),3)
  }
  const f=ss(.72,1,t)
  lay(c,1-f,F(d=>ss(.04+d,.5+d,t)))
  lay(c,f,F(_=>0))
  fade(c);snap(c)
}
