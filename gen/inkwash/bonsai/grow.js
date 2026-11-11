// ink wash pine bonsai in a shallow pot painted in stroke by stroke on rice paper, trunk then branches then needle pads, held, then the ink fades away
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
// strokes in brush order: from, control, to, width in, width out, dry start, painted from, to (as parts of the whole painting)
const SK=[
  [[62,204],[124,201],[186,204],2.4,1.8,2,0,.06],[[65,205],[69,214],[76,224],2,1.5,2,.05,.09],[[76,224],[126,227],[175,224],1.6,2.3,2,.08,.13],[[175,224],[180,214],[183,205],2.1,1.4,2,.12,.15],
  [[84,226],[85,231],[95,231],2.4,1.4,2,.15,.17],[[157,231],[166,231],[168,226],1.4,2.4,2,.16,.18],
  [[114,203],[90,172],[122,148],9,6.8,.6,.18,.27],[[122,148],[152,128],[130,100],6.8,4.6,2,.27,.35],[[130,100],[114,82],[130,60],4.6,1.6,.7,.35,.42],
  [[108,200],[98,196],[90,203],3,1,2,.2,.24],[[118,200],[128,196],[136,203],3,1,2,.22,.26],
  [[122,148],[158,158],[194,140],3.6,1,2,.42,.5],[[130,100],[98,96],[64,114],3,.9,2,.48,.56],[[142,122],[166,112],[186,98],2.4,.8,2,.54,.6]],
// needle pads: x, y, half width, painted from
PD=[[196,136,25,.56],[62,110,25,.63],[186,94,19,.7],[130,56,23,.76]]
export const frames=32,delay=[...Array(32)].map((_,i)=>i==24?1500:i<24?90:75)
export default(c,t,i)=>{
  paper(c);const pd=grab(c),p=Math.min(1,i/24),A=i>24?1-(i-24)/8:1,r=rn(17);c.globalCompositeOperation='multiply'
  // pot: pale wash inside a few firm lines, moss dots on the soil
  c.filter='blur(1px)';c.fillStyle=K[3];c.globalAlpha=.45*A*sm(.1,.2,p)
  c.beginPath();[[65,205],[183,205],[175,224],[76,224]].forEach(q=>c.lineTo(...q));c.fill()
  c.fillStyle=K[2];c.globalAlpha=.3*A*sm(.12,.22,p)
  c.beginPath();[[65,205],[112,205],[100,224],[76,224]].forEach(q=>c.lineTo(...q));c.fill()
  c.filter='blur(.45px)';c.fillStyle=K[0]
  for(let k=0;k<12;k++){c.globalAlpha=(.4+r()*.5)*A*sm(.15+k*.004,.2+k*.004,p);c.beginPath();c.ellipse(74+r()*100,201.5-r()*2,1.4+r()*2.2,.9+r(),0,0,T);c.fill()}
  SK.forEach(([a,b,d,w,v,dr,s,e])=>p>s&&st(c,bz(a,b,d),u=>(w+(v-w)*u)*(1+.07*S(u*13))+.2,K[0],.9*A,Math.min(1,(p-s)/(e-s)),dr))
  // pads: a pale wet cloud, then fans of needles flicked upward one by one
  PD.forEach(([x,y,R,s],q)=>{
    const g=Math.min(1,Math.max(0,(p-s)/.16))
    if(!g)return
    c.filter='none';wash(c,x,y,R,R*.36,K[2],.42*A*g,0,q+2,1.5);c.filter='blur(.45px)'
    for(let k=0;k<36;k++){
      const f=k/9|0,j=k%9,fx=x+(f-1.5)*R*.52,fy=y+2-(1-Math.abs(f-1.5)/1.5)*R*.16,a=-Math.PI*(.12+j*.76/8)+(f-1.5)*.16,l=R*.48*(.8+j*5%4*.09)
      if(k<g*36)st(c,bz([fx,fy],[fx+C(a)*l*.5,fy+S(a)*l*.5],[fx+C(a)*l,fy+S(a)*l]),u=>1.1*(1-u)**.6+.15,K[f%2?1:0],.9*A)
    }
  })
  c.filter='none';seal(c,206,212);fin(c,pd)
}
