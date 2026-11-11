// ink wash lily, a bud opening into a trumpet bloom with curled-back petals and dark stamens, then fading back to a bud
import{createCanvas}from'@napi-rs/canvas'
const{PI,sin,cos,min,max,abs,hypot,round}=Math,T=PI*2
const ink=(a,k='20,18,16')=>`rgba(${k},${a})`
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

const leaf=(c,x,y,h,L,w,a,s)=>{
  const d=(l,q)=>[x+l*cos(h+q),y+l*sin(h+q)]
  br(c,[[x,y],d(L*.4,.12),d(L*.75,.16),d(L,.3)],w,a,{f:u=>sin(PI*u**.6)**.9,s,e:.05})
}

// g = which way the flower faces, o = how open; petals as [side, length]
const fl=(c,x,y,g,L,o,s)=>{
  const D=(p,l,h)=>[p[0]+l*cos(h),p[1]+l*sin(h)]
  const pt=([q,l],k)=>{
    const f=q*lp(.05,1.25,o),a=[x,y],b=D(a,L*l*.4,g+f*.2),d=D(b,L*l*.34,g+f*.85),e=D(d,L*l*lp(.22,.36,o),g+f*2.2)
    pet(c,[a,b,d,e],L*lp(.15,.25,o),{f:u=>sin(PI*u**.95)**.75,s:s+k,tint:'rgba(196,112,96,.45)',tr:L*.55,a:.66,d:q*.35,e:.04})
    // midrib
    st(c,[D(a,L*.2,g+f*.25),b,d],1.3,ink(.4),{f:u=>1-u*.6,u:.9})
  }
  ;[[-1,1],[1,.96],[.22,.9]].forEach(pt)
  ;[[-.62,.95],[.68,.92],[-.04,.5]].forEach((p,k)=>pt(p,k+3))
  // stamens: fine filaments, dark anthers
  if(o>.25)[-.42,-.2,.02,.2,.4].forEach((q,k)=>{
    const l=L*(.86+.08*sin(k*3))*lp(.6,1,ss(.25,.9,o)),m=ss(.25,.5,o),b=D([x,y],L*.3,g),e=D(b,l-L*.3,g+q*o*1.3+.06),h=g+q*2+1.2
    st(c,[b,D(b,(l-L*.3)*.5,g+q*o*.6),e],1.5,ink(.6*m),{f:u=>1-.3*u})
    st(c,[D(e,-5,h),D(e,5,h)],4.4,ink(.93*m),{f:u=>sin(PI*u)**.5})
  })
  st(c,[D([x,y],-3,g),D([x,y],7,g)],7,ink(.85),{f:u=>1-.6*u})
}

export default(c,t)=>{
  const S=[[78,252],[92,200],[112,150],[124,118]]
  leaf(c,96,190,-2.5,62,13,.36,1)
  br(c,S,7,.88,{f:u=>1-.35*u,s:1})
  st(c,[[104,170],[130,160],[158,168]],3.2,ink(.8),{f:u=>1-.5*u})
  leaf(c,86,226,-.5,78,15,.85,2)
  leaf(c,90,206,-2.3,66,14,.7,3)
  leaf(c,110,154,-2.9,48,11,.55,4)
  fl(c,158,168,.15,44,0,9)
  const f=ss(.74,1,t)
  lay(c,1-f,x=>fl(x,124,118,-.95,112,ss(.04,.62,t),1))
  lay(c,f,x=>fl(x,124,118,-.95,112,0,1))
  fade(c);snap(c)
}
