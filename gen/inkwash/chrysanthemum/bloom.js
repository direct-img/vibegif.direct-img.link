// ink wash chrysanthemum on rice paper unfurling ring by ring from a tight round bud, short loaded petal strokes over a faint yellow wash, deep-lobed leaves, then fading back to the bud
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
const O=[130,98],Yl='rgb(212,172,64)',
// rings of petals from the rim in to the heart: ring radius, petals, length, width
RG=[[31,13,21,3.9],[23,14,17,3.5],[15,12,14,3.1],[8,9,11,2.7],[3,6,8,2.3]],
// the head is many short loaded strokes, darker at the base, loose at the rim and packed at the heart; g = how far it has opened
flower=(c,g,al)=>{
  if(al<=0)return
  const r=rn(41)
  c.filter='none';wash(c,O[0],O[1],10+30*g,10+25*g,Yl,.34*al,0,4,3);c.filter='blur(.45px)'
  RG.forEach(([R,n,l,W],L)=>{
    const o=sm(L*.13,L*.13+.48,g),z=.3+.7*o
    for(let k=0;k<n;k++){
      const a=(k+r()*.7)/n*T+L*.9,d=1+.22*S(a),rb=R*z*(.9+r()*.2),le=l*(.5+.5*o)*(.85+r()*.4)*d,q=a+(r()-.5)*.5*o+(C(a)<0?-.25:.25)*o+1.25*(1-o),
      b=[O[0]+C(a)*rb,O[1]+S(a)*rb*.86],e=[b[0]+C(q)*le,b[1]+S(q)*le*.9],m=[(b[0]+e[0])/2+C(a)*le*.14,(b[1]+e[1])/2+S(a)*le*.14-le*.1*o],
      f=bz(b,m,e),w=u=>W*(.6+.4*o)*S(Math.PI*u**.62)**.75+.25
      st(c,f,w,K[L<2?2:1],al*(L<2?.6:.5)*(.8+.2*o));st(c,f,w,K[L<2?1:0],al*.34,.5)
    }
  })
  // heart: a cluster of dark dots
  c.fillStyle=K[0]
  for(let k=0;k<9;k++){c.globalAlpha=al*.85*sm(.5,1,g);c.beginPath();c.arc(O[0]+C(k*2.4)*(1+k%3*1.6),O[1]+S(k*2.4)*(1+k%3*1.4),.8+k%2*.4,0,T);c.fill()}
  // sepals cupping the bud
  for(let k=-1;k<2;k++)st(c,bz([O[0]+k*3,O[1]+17],[O[0]+k*15,O[1]+15],[O[0]+k*14,O[1]+1]),u=>2.8*S(Math.PI*u**.7)+.3,K[0],al*.8*(1-sm(.1,.5,g)))
  c.globalAlpha=1
},
// leaf: deep lobes laid in as wet dabs along a midrib, veins flicked in dark
leaf=(c,x,y,a,z,tn)=>{
  const P=u=>[x+C(a)*36*z*u+C(a+1.57)*5*z*S(Math.PI*u),y+S(a)*36*z*u+S(a+1.57)*5*z*S(Math.PI*u)],
  lobe=(u,b,l,w)=>{
    const[X,Y]=P(u),e=[X+C(b)*l*z,Y+S(b)*l*z],f=bz([X,Y],[X+C(b-.25)*l*z*.55,Y+S(b-.25)*l*z*.55],e)
    c.filter='blur(.8px)';st(c,f,v=>w*z*S(Math.PI*v**.75)**.7+.4,K[tn],.72)
    c.filter='blur(.4px)';st(c,f,v=>1.1*(1-v)**.8+.12,K[0],.75,.8)
  }
  lobe(.12,a+1.15,15,5);lobe(.12,a-1.15,15,5);lobe(.42,a+.8,17,5.5);lobe(.42,a-.8,17,5.5);lobe(.5,a+.1,19,6.5)
  st(c,P,v=>1.4*(1-v)**.7+.2,K[0],.8,.9)
}
export const frames=30,delay=[...Array(30)].map((_,i)=>i==21?900:85)
export default(c,t)=>{
  paper(c);const pd=grab(c),f=sm(.8,1,t);c.globalCompositeOperation='multiply'
  c.filter='blur(.4px)'
  // stem: one tapered stroke, then leaf stalks and leaves
  st(c,bz([130,113],[150,172],[122,250]),u=>1.5+1.5*u,K[1],.88,1,.82)
  ;[[140,166,3.4,1.1,1],[141,190,.25,1,2],[133,220,2.85,.8,1]].forEach(([x,y,a,z,tn])=>{
    st(c,bz([x,y],[x+C(a)*5,y+S(a)*5+2],[x+C(a)*10,y+S(a)*10]),u=>1.3-.4*u,K[1],.85)
    leaf(c,x+C(a)*9,y+S(a)*9,a,z,tn)
  })
  c.filter='blur(.4px)'
  // bloom, hold, then the ink fades back to the bud
  flower(c,sm(0,.64,t),1-f);flower(c,0,f)
  c.filter='none';seal(c,206,210);fin(c,pd)
}
