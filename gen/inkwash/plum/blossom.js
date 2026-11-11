// ink wash gnarled plum branch on rice paper, pale rose blossoms opening one by one with dark stamens, petals drifting down
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
// old wood: a kinked chain of points and widths, then young shoots: from, control, to, width
const PT=[[4,216,7.5],[50,201,7],[70,160,6],[116,143,5],[136,108,4.2],[180,93,3.3],[194,58,2.3],[230,38,.6]],
SH=[[[70,160],[104,170],[140,200],2.4],[[136,108],[126,74],[134,34],2.6],[[180,93],[206,92],[232,108],2],[[50,201],[38,176],[52,148],2.2],[[116,143],[150,150],[172,140],1.8]],
// blossoms: x, y, radius, turn, cycle offset (-1 = always open)
BL=[[134,36,12,.3,0],[127,74,13,1.1,.36],[158,100,14,2,-1],[232,108,12,1.6,.18],[140,200,13,.2,.8],[52,148,12,2.6,.5],[200,50,11,1.3,-1],[104,170,11,.9,.08],[172,140,12,.5,.62]],
R='rgb(198,96,108)',
pet=(c,x,y,rx,ry,a,al)=>{
  c.fillStyle=c.strokeStyle=R;c.beginPath();c.ellipse(x,y,rx,ry,a,0,T)
  c.globalAlpha=al*.34;c.fill();c.globalAlpha=al*.5;c.lineWidth=1.1;c.stroke()
},
bloom=(c,[x,y,r,a,o],t)=>{
  const p=o<0?.5:(t+o)%1,g=sm(0,.34,p),f=1-sm(.8,1,p)
  // bud with a dark calyx
  c.filter='blur(.6px)';pet(c,x,y,r*.36,r*.36,0,1.5*Math.max(1-g,1-f))
  for(let k=0;k<5;k++){
    const b=a+k*T/5
    pet(c,x+C(b)*r*.5*g,y+S(b)*r*.5*g,r*.5*g+.01,r*.42*g+.01,b,f)
  }
  c.filter='none';c.globalAlpha=Math.max(f*sm(.4,1,g),.7*(1-g));c.fillStyle=c.strokeStyle=K[0];c.lineWidth=.6
  c.beginPath();c.arc(x,y,1.3,0,T);c.fill();c.globalAlpha=f*sm(.4,1,g)
  for(let k=0;k<8;k++){
    const b=a+k*.8,l=r*(.34+k%3*.1)
    c.beginPath();c.moveTo(x,y);c.lineTo(x+C(b)*l,y+S(b)*l);c.stroke()
    c.beginPath();c.arc(x+C(b)*l,y+S(b)*l,1,0,T);c.fill()
  }
  c.globalAlpha=1
}
export const frames=32,delay=90
export default(c,t)=>{
  paper(c);const pd=grab(c),r=rn(5);c.globalCompositeOperation='multiply'
  c.filter='blur(.5px)'
  PT.slice(1).forEach(([x,y,v],k)=>{
    const[X,Y,w]=PT[k],q=k%2*2-1,f=bz([X,Y],[(X+x)/2+(y-Y)*.12*q,(Y+y)/2-(x-X)*.12*q],[x,y]),wf=u=>(w+(v-w)*u)*(1+.1*(2*u-1)**4)
    st(c,f,u=>wf(u)*1.12,K[2],.3);st(c,f,wf,K[0],.9,1,k%3==1?.6:2)
  })
  SH.forEach(([a,b,d,w])=>st(c,bz(a,b,d),u=>w*(1-u)**.7+.4,K[0],.88))
  // moss dots along the old wood
  c.fillStyle=K[0]
  for(let k=0;k<14;k++){
    const a=PT[k%5],b=PT[k%5+1],u=r(),x=a[0]+(b[0]-a[0])*u,y=a[1]+(b[1]-a[1])*u;c.globalAlpha=.75
    c.beginPath();c.ellipse(x+r()*10-5,y-4-r()*5,1+r()*1.6,.8+r(),r()*3,0,T);c.fill()
  }
  c.filter='none'
  BL.forEach(b=>bloom(c,b,t))
  // loose petals drifting down
  for(let k=0;k<3;k++){
    const p=(t+k/3+.1)%1,x=[128,186,70][k]+p*34+S(T*p*2+k)*8,y=[90,84,160][k]+p*120
    c.filter='blur(.5px)';pet(c,x,y,4.6,2.8*Math.abs(C(T*p*1.5+k))+.9,p*5+k,1.3*S(Math.PI*p)**.5)
  }
  c.filter='none';c.globalAlpha=1;seal(c,202,206);fin(c,pd)
}
