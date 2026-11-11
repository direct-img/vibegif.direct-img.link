// ink wash lotus pad and pink-tinted bud in the rain on rice paper, a drop gathering and rolling off the leaf, rings on the water
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
const E=(x,y,rx,ry,a0=0,a1=T)=>u=>[x+C(a0+(a1-a0)*u)*rx,y+S(a0+(a1-a0)*u)*ry],
ring=(c,x,y,p,al=.6)=>{
  const rx=4+p*36
  for(let k=0;k<3;k++)st(c,E(x,y,rx,rx*.34,k*2.1+.4,k*2.1+2.1),u=>1.2*S(Math.PI*u)*(1-p*.5)+.15,K[1],al*(1-p)**.7)
},
// rain rings: x, y, phase
RG=[[200,228,.1],[60,226,.6],[226,176,.35]]
export const frames=30,delay=80
export default(c,t)=>{
  paper(c);const pd=grab(c),r=rn(21);c.globalCompositeOperation='multiply'
  // far pad, pale
  wash(c,206,196,30,8,K[3],.4,0,8,1.5)
  // stems, with prickle dots
  const s1=bz([104,176],[96,210],[108,250]),s2=bz([172,112],[188,180],[160,250])
  c.filter='blur(.4px)'
  st(c,s1,u=>2.6-.6*u,K[2],.7);st(c,s2,u=>1.4+.8*u,K[2],.75)
  c.fillStyle=K[1]
  for(let k=0;k<16;k++){const[x,y]=(k%2?s1:s2)(.1+r()*.8);c.globalAlpha=.7;c.beginPath();c.arc(x+r()*4-2,y,.7,0,T);c.fill()}
  c.filter='none'
  // big pad: layered wet washes, dark front lip, veins
  wash(c,102,150,74,31,K[2],.5,-.06,3,2.5);wash(c,92,145,50,19,K[1],.3,-.06,6,3);wash(c,128,160,34,13,K[2],.3,0,7,3)
  c.filter='blur(.5px)'
  st(c,E(102,151,73,31,.25,2.75),u=>3.2*S(Math.PI*u)**.6+.3,K[0],.8,1,.72)
  for(let k=0;k<10;k++){
    const a=k/10*T+.2
    st(c,bz([100,149],[100+C(a+.12)*36,149+S(a+.12)*15],[100+C(a)*68,149+S(a)*28]),u=>1.5*(1-u)+.2,K[0],.5)
  }
  // bud: rose wash, darker tip, a few ink petal lines
  c.filter='none'
  wash(c,170,84,12,24,'rgb(204,108,122)',.5,.12,4,1.5);wash(c,167,68,6,10,'rgb(176,70,90)',.4,.1,5,1.5)
  c.filter='blur(.4px)'
  st(c,bz([172,110],[152,92],[166,58]),u=>1.5*S(Math.PI*u)+.2,K[1],.75)
  st(c,bz([172,110],[188,94],[167,58]),u=>1.5*S(Math.PI*u)+.2,K[1],.75)
  st(c,bz([170,108],[172,88],[167,66]),u=>.9*S(Math.PI*u)+.1,K[1],.5)
  // rain
  for(let k=0;k<16;k++){
    const y=(r()+t*(1+k%2))%1*300-30,x=18+r()*240-y*.1
    st(c,bz([x,y],[x-1.2,y+12],[x-2.4,y+24]),u=>S(Math.PI*u**.6)+.1,K[2],.42)
  }
  // rings where rain meets the water
  RG.forEach(([x,y,p])=>ring(c,x,y,(t+p)%1))
  // a bead gathers on the pad, rolls to the lip, drops, and rings the water
  const g=sm(0,.45,t),o=sm(.45,.7,t)**2,d=sm(.7,.82,t)**2,bx=92+o*38+d*2,by=147+o*27+d*40,br=6.5*g**.5
  if(t<.82&&br>.3){
    c.fillStyle=K[3];c.globalAlpha=.55;c.beginPath();c.ellipse(bx,by,br,br*(.8+d*.5),0,0,T);c.fill();c.globalAlpha=1
    st(c,E(bx,by,br,br*(.8+d*.5),.2,2.6),u=>S(Math.PI*u)+.1,K[0],.8)
    c.globalCompositeOperation='source-over';c.fillStyle='#f3ecdc';c.beginPath();c.arc(bx-br*.3,by-br*.3,br*.28,0,T);c.fill()
    c.globalCompositeOperation='multiply'
  }
  const q=(t+.18)%1/.5
  if(q<1)ring(c,132,216,q,.85)
  c.filter='none';seal(c,26,26);fin(c,pd)
}
