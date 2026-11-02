// great ocean wave curling over in flowing rainbow stripes, white foam claws flexing at the crest, spray drops flying, scalloped sea below
export const frames=20,delay=80
const P=Math.PI*2,cx=98,cy=134,ts=-.35*Math.PI,te=1.45*Math.PI,R0=146,b=.38,W0=103
const pal=[[255,43,214],[255,60,60],[255,150,0],[255,230,0],[70,235,80],[0,210,255],[90,90,255]]
const rm=q=>R0*Math.exp(-b*(q-ts)),wd=q=>W0*Math.pow(Math.max(0,(te-q)/(te-ts)),.7)
const sm=(a,b,x)=>(x=Math.min(1,Math.max(0,(x-a)/(b-a))),x*x*(3-2*x))
let s=3
const R=()=>(s=s*16807%2147483647)/2147483647
const sp=[...Array(11)].map(()=>[R(),.6+R()*.5,R(),2.5+R()*3])
export default(c,t)=>{
  const d=c.createImageData(256,256),D=d.data
  for(let y=0;y<256;y++)for(let x=0;x<256;x++){
    const X=x+.5-cx,Y=cy-y-.5,r=Math.hypot(X,Y)
    let q=Math.atan2(Y,X)
    if(q<ts)q+=P
    if(q>te)continue
    const m=rm(q),w=wd(q),e=Math.min(r-m+w/2,m+w/2-r)
    if(e<-1)continue
    const v=(m+w/2-r)/w,fo=10*sm(.15*Math.PI,.6*Math.PI,q)
    const f=v*6+.45*Math.sin(q*5-P*t*2)-7*t,k=Math.floor(f),fr=f-k,px=6/w,C=j=>pal[((k+j)%7+7)%7]
    let col=C(0),u=Math.max(0,.5-fr/px),h=Math.max(0,.5-(1-fr)/px)
    col=col.map((z,i)=>z+(C(-1)[i]-z)*u+(C(1)[i]-z)*h)
    const fw=Math.min(1,Math.max(0,.5+fo+1.2*Math.sin(q*14)-v*w))
    col=col.map(z=>z+(255-z)*fw)
    const a=sm(2.6,3.6,e),o=(y*256+x)*4
    D[o]=17+(col[0]-17)*a;D[o+1]=17+(col[1]-17)*a;D[o+2]=17+(col[2]-17)*a;D[o+3]=255*Math.min(1,e+1)
  }
  c.putImageData(d,0,0)
  // foam claws
  const cl=[]
  for(let j=0;j<9;j++){
    const q=.45*Math.PI+j*.09*Math.PI,n=[Math.cos(q),-Math.sin(q)],g=[-Math.sin(q),-Math.cos(q)]
    const r=rm(q)+wd(q)/2-3,L=(21-j*1.2)*(j%2?.75:1)*(1+.16*Math.sin(P*t+j*1.7)),x=cx+n[0]*r,y=cy+n[1]*r
    const p=[[0,0],[1,-.15],[1.2,.6],[.6,.95]].map(([a,b])=>[x+n[0]*L*a+g[0]*L*b,y+n[1]*L*a+g[1]*L*b])
    cl.push([p,L])
  }
  for(const o of[1,0])for(const[p,L]of cl)for(let k=0;k<10;k++){
    const B=(u,i)=>(1-u)**3*p[0][i]+3*u*(1-u)**2*p[1][i]+3*u*u*(1-u)*p[2][i]+u**3*p[3][i],u=k/10,z=u+.1
    c.lineWidth=(10-k*.85)*L/18+(o?6:0);c.strokeStyle=o?'#111':'#fff'
    c.beginPath();c.moveTo(B(u,0),B(u,1));c.lineTo(B(z,0),B(z,1));c.stroke()
  }
  // spray
  c.strokeStyle="#111"
  for(const[o,v,h,z]of sp){
    const p=(t+o)%1,q=.62*Math.PI+h*.5*Math.PI,r=rm(q)+wd(q)/2+6
    const x=cx+Math.cos(q)*(r+p*60*v)-p*30,y=cy-Math.sin(q)*(r+p*60*v)-p*40*v+p*p*90
    const rr=z*(1-p)*Math.min(1,p*6)
    if(rr<.8)continue
    c.lineWidth=2;c.fillStyle="#fff"
    c.beginPath();c.arc(x,y,rr,0,P);c.fill();c.stroke()
  }
  // sea
  ;[[222,'#6a3cff',1],[240,'#00a8ff',-1]].forEach(([y0,f,dir],k)=>{
    const r=11,sh=(dir*2*r*t+k*9)%(2*r)
    c.beginPath();c.moveTo(-40,256)
    for(let x=-2*r+sh-2*r;x<290;x+=2*r)c.arc(x+r,y0,r,Math.PI,0)
    c.lineTo(300,256);c.closePath()
    c.fillStyle=f;c.lineWidth=5;c.fill();c.stroke()
  })
}
