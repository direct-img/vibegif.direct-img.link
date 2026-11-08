// chunky yellow pencil swaying like a wrist as it draws a big bold red heart in one thick stroke, then flipping end over end in 3D so its pink eraser scrubs the heart away in a spray of crumbs, then flipping back to draw again
const{sin,cos,abs,hypot,PI}=Math,T=2*PI
export const frames=60,delay=40
const ink='#111',red='#ef2d56',L=102,N=240,P0=.25
const ease=u=>u<.5?2*u*u:1-2*(1-u)**2
// heart curve starting at the top dip, resampled by arc length so the pencil moves evenly
const raw=[...Array(721)].map((_,k)=>{
  const a=k/720*T,x=16*sin(a)**3,y=13*cos(a)-5*cos(2*a)-2*cos(3*a)-cos(4*a)
  return[-6+4.3*x,28-4.3*y]
})
const len=[0];for(let k=1;k<raw.length;k++)len.push(len[k-1]+hypot(raw[k][0]-raw[k-1][0],raw[k][1]-raw[k-1][1]))
const path=[];for(let j=0,k=0;j<=N;j++){const d=j/N*len[720];while(k<719&&len[k+1]<d)k++;const f=(d-len[k])/(len[k+1]-len[k]||1);path.push([raw[k][0]+(raw[k+1][0]-raw[k][0])*f,raw[k][1]+(raw[k+1][1]-raw[k][1])*f])}
const pt=s=>{const m=s*N,k=Math.min(m|0,N-1),f=m-k;return[path[k][0]+(path[k+1][0]-path[k][0])*f,path[k][1]+(path[k+1][1]-path[k][1])*f]}
// pencil sections from tip to eraser end: [x0,x1,r0,r1,colour]
const secs=[[0,12,0,6,red],[12,33,6,17,'#f6d7a7'],[33,77,17,17,'#ffc83d'],[77,89,17.5,17.5,'#c3c8d2'],[89,102,16.5,16.5,'#ff9ebb']]
const hull=pts=>{
  pts.sort((a,b)=>a[0]-b[0]||a[1]-b[1])
  const cr=(o,a,b)=>(a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0]),h=[]
  for(const k of[0,1]){
    const s=[]
    for(const p of k?pts.slice().reverse():pts){while(s.length>1&&cr(s[s.length-2],s[s.length-1],p)<=0)s.pop();s.push(p)}
    s.pop(),h.push(...s)
  }
  return h
}
// pencil with its working end on p, turned psi end over end about its middle, in light perspective
// (psi=P0 leans its top slightly towards us, psi=P0+PI is flipped eraser-down)
// like a wrist it leans right near the top of the heart and stands up lower down, keeping it on the canvas
const pencil=(c,p,psi,lift)=>{
  const A=Math.max(-1.5,Math.min(-.86,-1.2-.012*p[1])),cp=cos(psi),sp=sin(psi),dx=cos(A),dy=sin(A),K=x=>300/(300-(x-L/2)*sp),w=cp>0?0:L,o=-K(w)*(w-L/2)*cp
  c.save(),c.translate(p[0]+o*dx,p[1]+o*dy-lift),c.rotate(A)
  const ring=(x,r)=>{const k=K(x);return[...Array(20)].map((_,j)=>{const b=j*T/20;return[k*((x-L/2)*cp+r*sin(b)*sp),k*r*cos(b)]})}
  for(const[x0,x1,r0,r1,col]of secs.slice().sort((a,b)=>(a[0]+a[1]-L)*sp-(b[0]+b[1]-L)*sp)){
    c.beginPath(),hull([...ring(x0,r0),...ring(x1,r1)]).forEach(q=>c.lineTo(...q)),c.closePath()
    c.fillStyle=col,c.fill(),c.lineWidth=6,c.strokeStyle=ink,c.stroke()
    if(x0==33&&abs(cp)>.1)for(const[y,s]of[[7,'#e0a21c'],[-7,'#ffe08a']]){
      // facet stripes along the body
      c.beginPath(),c.moveTo(K(x0)*(x0-L/2+4)*cp,y*K(x0)),c.lineTo(K(x1)*(x1-L/2-4)*cp,y*K(x1))
      c.lineWidth=5,c.strokeStyle=s,c.stroke()
    }
  }
  // flat eraser end when it faces us
  const e=K(L)
  if(sp>.05)c.beginPath(),c.ellipse(e*L/2*cp,0,e*16.5*sp,e*16.5,0,0,T),c.fillStyle='#ffc4d6',c.fill(),c.lineWidth=6,c.strokeStyle=ink,c.stroke()
  c.restore()
}
const line=(c,s)=>{
  if(s<=0)return
  const m=s*N,k=m|0
  c.beginPath(),c.moveTo(...path[0])
  for(let j=1;j<=k;j++)c.lineTo(...path[j])
  c.lineTo(...pt(s)),c.lineWidth=16,c.strokeStyle=red,c.stroke()
}
export default(c,t)=>{
  c.translate(128,128)
  let s,psi=P0,lift=0
  if(t<.42)s=ease(t/.42)
  else if(t<.54){const u=(t-.42)/.12;s=1,psi+=PI*ease(u),lift=12*sin(PI*u)}
  else if(t<.86)s=1-ease((t-.54)/.32),psi+=PI
  else{const u=(t-.86)/.14;s=0,psi+=PI+PI*ease(u),lift=12*sin(PI*u)}
  line(c,s)
  // eraser crumbs flick off and shrink away
  for(let k=0;k<8;k++){
    const ts=.56+k*.036,v=(t-ts)/.12
    if(v<0||v>1)continue
    const q=pt(1-ease((ts-.54)/.32)),r=7*(1-v*v)
    c.beginPath(),c.arc(q[0]+(k%2?-1:1)*(8+18*v),q[1]+10+20*v*v-12*sin(PI*v),r,0,T),c.fillStyle='#ff7aa2',c.fill()
  }
  const p=pt(s)
  // scrub wiggle while erasing
  if(t>=.54&&t<.86){const w=sin(T*12*(t-.54)/.32)*5;p[0]+=w*.6,p[1]+=w*.4}
  pencil(c,p,psi,lift)
}
