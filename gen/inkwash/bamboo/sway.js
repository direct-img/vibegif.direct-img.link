// ink wash bamboo stalks with node rings and dagger leaves swaying in the wind on rice paper, one leaf drifting off
const paper=(c,s=7)=>{
  const r=()=>(s=s*16807%2147483647)/2147483647,P=[...Array(160)].map((_,k)=>{
    const e=k/40|0,f=k%40/40,d=9+r()*3.5,w=256-2*d
    return[[d+f*w,d],[256-d,d+f*w],[256-d-f*w,256-d],[d,256-d-f*w]][e]
  }),edge=()=>{c.beginPath();P.forEach(p=>c.lineTo(...p));c.closePath()}
  c.save();edge();c.fillStyle='#f3ecdc';c.fill();c.clip()
  for(let k=0;k<7;k++){
    const x=r()*256,y=r()*256,g=c.createRadialGradient(x,y,0,x,y,40+r()*70)
    g.addColorStop(0,'rgba(190,170,130,.07)');g.addColorStop(1,'rgba(190,170,130,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  for(let k=0;k<170;k++){
    const x=r()*256,y=r()*256,a=r()*6.3,l=8+r()*24
    c.strokeStyle=r()<.7?'rgba(150,128,95,.13)':'rgba(255,253,245,.6)';c.lineWidth=.5+r()*.7
    c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+Math.cos(a+.5)*l/2,y+Math.sin(a+.5)*l/2,x+Math.cos(a)*l,y+Math.sin(a)*l);c.stroke()
  }
  c.restore();edge();c.clip()
}
const T=Math.PI*2,S=Math.sin,C=Math.cos,
K=['#141210','#37322d','#6b655c','#9d968a','#c9c2b4'],
rn=s=>()=>(s=s*16807%2147483647)/2147483647,
// quadratic curve as a point function
bz=(a,b,d)=>u=>[(1-u)**2*a[0]+2*u*(1-u)*b[0]+u*u*d[0],(1-u)**2*a[1]+2*u*(1-u)*b[1]+u*u*d[1]],
// fill a ribbon between two normal offsets a(u), b(u) along curve f
rib=(c,f,a,b,u0,u1,n=18)=>{
  const L=[],M=[]
  for(let k=0;k<=n;k++){
    const u=u0+(u1-u0)*k/n,[x,y]=f(u),[X,Y]=f(u+.01),[p,q]=f(u-.01),d=Math.hypot(X-p,Y-q)||1,nx=(q-Y)/d,ny=(X-p)/d
    L.push([x+nx*a(u),y+ny*a(u)]);M.unshift([x+nx*b(u),y+ny*b(u)])
  }
  c.beginPath();[...L,...M].forEach(p=>c.lineTo(...p));c.fill()
},
// brush stroke: half width w(u), painted up to u1 (ending in a point while still under way), splitting into dry hairlines after u=dry
st=(c,f,w,col,al=1,u1=1,dry=2)=>{
  const v=w;if(u1<1)w=u=>v(u)*Math.min(1,(u1-u)*9)**.6
  c.fillStyle=col;c.globalAlpha=al
  rib(c,f,u=>-w(u),w,0,Math.min(u1,dry))
  if(u1>dry)for(let j=0;j<5;j++)rib(c,f,u=>w(u)*(j*.42-1),u=>w(u)*(j*.42-.84+.2*S(u*8+j*2.3)+j%3*.07),dry-.02,u1,26)
  c.globalAlpha=1
},
// soft wet wash blob with a darker pooled rim
wash=(c,x,y,rx,ry,col,al=.4,rot=0,sd=3,bl=2)=>{
  const r=rn(sd),p=[...Array(14)].map((_,k)=>{const a=k/14*T,m=.85+r()*.3;return[C(a)*rx*m,S(a)*ry*m]}),
  path=()=>{c.beginPath();p.forEach((q,k)=>{const n=p[(k+1)%14];c.quadraticCurveTo(q[0],q[1],(q[0]+n[0])/2,(q[1]+n[1])/2)});c.closePath()}
  c.save();c.translate(x,y);c.rotate(rot);c.filter=`blur(${bl}px)`
  c.fillStyle=c.strokeStyle=col;c.globalAlpha=al;path();c.fill()
  c.filter='blur(.8px)';c.globalAlpha=al*.55;c.lineWidth=1.3;path();c.stroke();c.restore()
},
// vermilion seal with carved marks
seal=(c,x,y,s=16)=>{
  const r=rn(11);c.save();c.globalCompositeOperation='multiply';c.fillStyle='#b8322a';c.globalAlpha=.88
  c.beginPath()
  for(let k=0;k<24;k++){const e=k/6|0,f=k%6/6,j=r()*1.4,p=[[f*s,j],[s-j,f*s],[s-f*s,s-j],[j,s-f*s]][e];c.lineTo(x+p[0],y+p[1])}
  c.fill();c.globalCompositeOperation='source-over';c.strokeStyle='#f3ecdc';c.lineWidth=s/11;c.lineCap='square'
  c.beginPath()
  ;[[.22,.24,.78,.24],[.78,.24,.78,.78],[.78,.78,.24,.78],[.24,.78,.24,.5],[.24,.5,.54,.5],[.54,.5,.54,.62]]
    .forEach(([a,b,d,e])=>{c.moveTo(x+a*s,y+b*s);c.lineTo(x+d*s,y+e*s)})
  c.stroke();c.restore()
}
// d = paper pixels grabbed right after paper(c). Ink pixels are snapped to coarser steps so frames compress well, and the
// half-transparent deckle edge is put back as plain paper: a changed see-through pixel makes the webp encoder store the whole changed area again
const grab=c=>c.getImageData(0,0,256,256).data,
fin=(c,d,q=2)=>{
  const m=c.getImageData(0,0,256,256),e=m.data
  for(let k=0;k<e.length;k+=4)if(e[k]!=d[k]||e[k+1]!=d[k+1]||e[k+2]!=d[k+2]||e[k+3]!=d[k+3])
    for(let j=0;j<4;j++)e[k+j]=d[k+3]<255?d[k+j]:j<3?Math.min(255,(e[k+j]>>q<<q)+(1<<q>>1)):255
  c.putImageData(m,0,0)
},
sm=(a,b,x)=>(x=Math.min(1,Math.max(0,(x-a)/(b-a))))*x*(3-2*x)
// stalks: x0, half width, length, lean, phase, tone
const SK=[[38,2.6,205,-10,2,4],[100,4,236,20,.9,3],[64,6.5,270,12,0,2]],
P=(s,h,t)=>[s[0]+s[3]*h+(9+7*S(T*t+s[4]))*h*h*s[2]/260,252-h*s[2]],
// leaf clusters: stalk, height, twig dx, dy, leaves, base angle, tone, size
CL=[[1,.83,40,2,4,1.1,3,.95],[2,.36,-24,-14,3,2.3,3,.8],[2,.55,46,-14,4,1.2,0,1.05],[2,.72,62,-4,5,1.45,0,1.15],[1,.56,50,-18,3,.75,1,.95],[1,.3,34,-20,3,.9,1,.8],[2,.88,-30,2,3,2.2,1,.8]],
leaf=(c,x,y,a,l,w,col,al)=>{
  const e=[x+C(a)*l,y+S(a)*l]
  st(c,bz([x,y],[x+C(a-.16)*l*.55,y+S(a-.16)*l*.55],e),u=>w*S(Math.PI*u**.55)**.8+.2,col,al)
}
export const frames=30,delay=80
export default(c,t)=>{
  paper(c);const pd=grab(c);c.globalCompositeOperation='multiply';c.filter='blur(.4px)'
  SK.forEach(s=>{
    for(let k=0;k<7;k++){
      const a=k*.17+.006,b=a+.158,f=u=>P(s,a+(b-a)*u,t),w=u=>s[1]*(1+.22*(2*u-1)**6)
      st(c,f,w,K[s[5]],.55,1,k%3==1?.7:2)
      c.globalAlpha=.5;rib(c,f,u=>-w(u),u=>-w(u)*.35,0,1)
      // node ring
      const[x,y]=P(s,b+.006,t),m=s[1]*1.25
      st(c,bz([x-m,y+1],[x,y-1.5],[x+m,y+.6]),u=>.5+1.1*(2*u-1)**2,K[s[5]>2?2:0],.9)
    }
  })
  CL.forEach(([si,h,dx,dy,n,ba,tn,z],q)=>{
    const s=SK[si],[x,y]=P(s,h,t),sw=S(T*t+s[4]-.6),ex=x+dx+sw*4,ey=y+dy+sw*1.5
    st(c,bz([x,y],[x+dx*.5,y+dy*.8],[ex,ey]),u=>1.3-.8*u,K[1],.85)
    for(let j=0;j<n;j++)
      leaf(c,ex,ey,ba+(j-(n-1)/2)*.5+.1*S(T*t+q*1.7+j*1.3)+.05*S(T*2*t+j*2.1+q)+sw*.06,(32+(j*37+q*11)%17)*z,(3.3+j%2*.8)*z,K[tn],tn?.6:.92)
  })
  // one leaf lets go and drifts off
  const a=S(Math.PI*t)**.6,x=150+t*34+S(T*t*2)*9,y=96+t*124
  leaf(c,x,y,1.1+S(T*t*2+1)*.9,24,3.2,K[1],a*.8)
  c.filter='none';seal(c,208,208);fin(c,pd,3)
}
