// ink wash bamboo shoot pushing up from the ground, its sheaths peeling open as it grows into a young stalk
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
// light areas are holes in the ink
const cut=(c,f)=>{c.save();c.globalCompositeOperation='destination-out';c.fillStyle=c.strokeStyle='#000';f();c.restore()}
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

const G=224,GR='112,136,106',OC='128,88,48',N=9

const shoot=(c,g)=>{
  const h=lp(74,200,g),P=[[118,G+3],[118+4*g,G-h*.5],[118+14*g,G-h]],q=sp(P,96),
    wb=lp(56,24,g),f=u=>min(1,(1-u)/lp(1,.36,g))**.7,U=k=>k/N*.86,pl=k=>k<6?ss(k/N*.5+.18,k/N*.5+.5,g):0,
    at=(u,o)=>{const[x,y,i,j]=q[round(u*96)];return[x+i*o,y+j*o]}
  // culm: a pale wash between two loaded strokes per joint, nodes as dark swelling dashes
  for(let k=0;k<6;k+=2){
    const a=U(k)+.01,b=U(k+2)-.01,m=(a+b)/2,W=wb*f(m)*.8,J=o=>[a,m,b].map(u=>at(u,o)),e={f:v=>.74+.26*cos(v*T),s:k,e:.1}
    c.globalAlpha=pl(k+1)
    st(c,J(0),W-3,ink(.34,GR),{f:_=>1,e:.03})
    st(c,J(1.5-W/2),4.6,ink(.82),e)
    st(c,J(W/2-1.5),3.2,ink(.5),e)
    dry(c,J(W*.15),W*.3,ink(.3),{u0:.1,u:.9,k:2,s:k})
    st(c,[at(U(k+2),-W/2-1),at(U(k+2)-.005,0),at(U(k+2),W/2+1)],3,ink(.9),{f:v=>.45+.55*abs(cos(PI*v))})
  }
  c.globalAlpha=1
  // leaf tips at the top: a couple of dagger strokes
  const[tx,ty,ti,tj]=q[90],A=Math.atan2(-ti,tj),z=ss(.55,1,g)
  if(z>.02)for(const[o,l,a]of[[-.5,30,.88],[.42,22,.6]])
    st(c,[[tx,ty],[tx+l*z*.5*cos(A+o*.8),ty+l*z*.5*sin(A+o*.8)],[tx+l*z*cos(A+o),ty+l*z*sin(A+o)]],7*z,ink(a),{f:v=>sin(PI*v**.5),e:.04})
  // sheaths, top first so each lower tip laps the one above; pressed at the base, dry at the point
  for(let k=N-1;k>=0;k--){
    const u=U(k),[x,y,i,j]=q[round(u*96)],e=k%2||k%4?1:-1,p=pl(k),R=wb*f(u),w=lp(R*.72+5,14,p),l=lp(42,50,g)*(1-.42*u),
      a=Math.atan2(-i,j)+e*(.17+p*.7),b=[x+i*e*R*lp(.17,.4,p),y+j*e*R*lp(.17,.4,p)],
      d=(m,o)=>[b[0]+m*cos(a+o),b[1]+m*sin(a+o)],S=[b,d(l*.5,e*lp(-.1,.3,p)),d(l,e*lp(-.34,.85,p))],ga=k%2&&k<6?1-p:1,
      o={f:v=>min(1,v*7)**.5*(1-v)**lp(.6,.9,p),s:k+1,e:.07,d:e*.25,u:lp(1,.8,p)}
    c.globalAlpha=1-p
    cut(c,()=>{ol(c,S,w,o);c.fill()})
    c.globalAlpha=ga
    br(c,S,w,k%3?lp(.88,.5,p):lp(.58,.4,p),o)
    c.globalCompositeOperation='multiply'
    st(c,S,w*.55,ink(lp(.5,.25,p),OC),{...o,u:.62,d:-e*.35})
    c.globalCompositeOperation='source-over'
    dry(c,S,w*.75,ink(.55),{u0:lp(.5,.3,p),u:1,k:4,s:k})
    st(c,sp(S,10).slice(7),2+w*.12,ink(.92*(1-p)),{f:v=>1-v})
    c.globalAlpha=1
  }
}

export default(c,t)=>{
  // ground
  br(c,[[40,G+5],[104,G+2],[172,G+6],[228,G+3]],10,.5,{s:1,f:u=>sin(PI*u)**.5})
  dry(c,[[26,G+11],[104,G+8],[184,G+13],[238,G+9]],8,ink(.4),{u0:0,s:3,k:4})
  for(const[x,l,q,a]of[[64,24,-.5,.7],[72,14,.3,.45],[176,20,.5,.6],[196,12,-.2,.4]])
    st(c,[[x,G+3],[x+q*l*.3,G-l*.6],[x+q*l,G-l]],3.4,ink(a),{f:u=>1-.85*u,s:x})
  const f=ss(.76,1,t)
  lay(c,1-f,x=>shoot(x,ss(0,.7,t)*.5+.5*cl(t/.7)))
  lay(c,f,x=>shoot(x,0))
  fade(c);snap(c)
}
