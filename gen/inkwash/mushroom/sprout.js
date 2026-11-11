// ink wash mushrooms pushing up from the ground after rain, caps unfurling, a drop falling from the biggest cap
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
export const frames=30,dither=true,delay=85

const BR='112,70,44',G=212

// one mushroom: g = growth, z = lean
const mush=(c,x,H,W,g,z,a,s)=>{
  const h=H*ss(.08,1,g),o=ss(.4,1,g),X=x+z*h,Y=G-h,cw=W*lp(.36,1,o)/2,ch=W*lp(.4,.36,o)
  c.save();c.beginPath();c.rect(0,0,256,G+3);c.clip()
  // stem: an open shape
  h>3&&pet(c,[[x,G+2],[x+z*h*.3,G-h*.4],[X,Y+2]],W*.26,{f:u=>1-.3*u+.25*(1-u)**4,s,a:.62,wa:.05})
  c.translate(X,Y);c.rotate(z*.8)
  const cap=()=>{
    c.beginPath();c.moveTo(-cw,0)
    c.bezierCurveTo(-cw*1.05,-ch*1.25,cw*1.05,-ch*1.4,cw,0)
    c.quadraticCurveTo(0,ch*lp(.9,-.22,o),-cw,0)
  }
  // gills show once the cap lifts
  if(o>.3){
    c.strokeStyle=ink(.5*o);c.lineWidth=.9
    for(let k=-4;k<=4;k++){c.beginPath();c.moveTo(k*W*.03,ch*.3*o+3);c.lineTo(k*cw*.21,-1);c.stroke()}
  }
  // cap: a wet tinted mass, ink pooled along the crown, dry streaks toward the rim
  c.filter='blur(1px)'
  c.fillStyle=ink(a*.75,BR);cap();c.fill()
  c.filter='none'
  c.save();cap();c.clip()
  c.globalCompositeOperation='multiply'
  const arc=(q,k)=>[-1,-.5,0,.5,1].map(u=>[u*cw*q+k,-ch*(1-u*u)*q])
  br(c,arc(1.02,-cw*.1),ch*lp(1.3,.95,o),a,{f:u=>sin(PI*u**.8)**.5,s,e:.2})
  c.globalCompositeOperation='source-over'
  dry(c,arc(.6,cw*.1),ch*.5,ink(a*.6),{u0:.4,u:.95,s,k:4})
  c.restore()
  st(c,[[-cw,0],[-cw*.3,ch*lp(.5,-.1,o)*.5],[cw*.4,ch*lp(.5,-.1,o)*.4]],2.6,ink(.8),{s})
  c.restore()
}

const scene=(c,g)=>{
  mush(c,90,58,54,g(.18),-.12,.62,2)
  mush(c,148,118,100,g(0),.07,.82,1)
  mush(c,214,30,34,g(.34),.2,.5,3)
}

export default(c,t)=>{
  // ground: loose sweeps and a few grass flicks
  br(c,[[34,G+4],[100,G+1],[170,G+5],[232,G+2]],9,.5,{s:1,f:u=>sin(PI*u)**.5})
  dry(c,[[20,G+10],[100,G+7],[180,G+12],[240,G+8]],8,ink(.4),{u0:0,s:3,k:4})
  for(const[x,l,q,a]of[[50,30,-.5,.8],[58,22,.2,.5],[226,26,.5,.7],[120,14,-.3,.4],[176,12,.4,.55]])
    st(c,[[x,G+3],[x+q*l*.3,G-l*.6],[x+q*l,G-l]],3.5,ink(a),{f:u=>1-.85*u,s:x})
  // last of the rain
  const ra=max(1-ss(.05,.3,t),ss(.86,1,t))
  for(let k=0;k<6;k++){
    const p=(t*3+k/6)%1,x=30+(k*83)%200,y=-20+p*230
    st(c,[[x,y],[x-5,y+24]],1.6,ink(.3*ra*sin(PI*p)),{f:u=>u**.5})
  }
  const f=ss(.85,1,t)
  lay(c,1-f,x=>scene(x,d=>ss(d*.6,.52+d*.6,t)))
  lay(c,f,x=>scene(x,_=>0))
  // the drop gathers on the rim, falls and splashes
  const d=(t-.6)/.2,X=202,Y=G-118+4
  if(d>-.6&&d<1){
    const y=d<0?Y:lp(Y,G,d*d),r=d<0?3.2*(1+d/.6):3.2
    wash(c,X,y,r*.8,r*1.25,ink(.3),{bl:.4,w:0})
    st(c,[[X-r*.7,y],[X,y+r*1.3],[X+r*.7,y]],1.8,ink(.8))
  }
  const e=(t-.8)/.14
  if(e>0&&e<1){
    c.strokeStyle=ink(.6*(1-e));c.lineWidth=1.4
    c.beginPath();c.ellipse(X,G+4,4+e*13,1.5+e*3.5,0,PI*.1,PI*.9);c.stroke()
    for(const q of[-1,1])st(c,[[X+q*3,G],[X+q*(5+e*7),G-10*sin(PI*e)-2]],1.8,ink(.7*(1-e)),{f:u=>u})
  }
  fade(c);snap(c)
}
