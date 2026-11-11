// ink wash chrysanthemum unfurling ring by ring from a tight round bud, short loaded petal strokes over a faint yellow wash, deep-lobed leaves, then fading back to the bud
const T=Math.PI*2,S=Math.sin,C=Math.cos,
// five tones of one warm black ink, as see-through washes
K=[.95,.78,.55,.36,.2].map(a=>`rgba(20,18,16,${a})`),
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
// soft fade where the painting runs off the canvas
fade=(c,w=16)=>{
  c.save();c.filter='none';c.globalAlpha=1;c.globalCompositeOperation='destination-out'
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
},
// snap colour (and, more finely, alpha) to coarser steps so the frames compress well
snap=(c,q=3)=>{
  const m=c.getImageData(0,0,256,256),e=m.data,h=1<<q>>1
  for(let k=0;k<e.length;k+=4)if(e[k+3]){
    for(let j=0;j<3;j++)e[k+j]=Math.min(255,(e[k+j]>>q<<q)+h)
    e[k+3]=e[k+3]<3?0:Math.min(255,e[k+3]+2>>2<<2)
  }
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
      // each petal partly lifts the ink behind it, so the rings read one over another instead of pooling black
      c.globalCompositeOperation='destination-out';st(c,f,w,'#000',.3*al);c.globalCompositeOperation='multiply'
      st(c,f,w,K[L<2?2:1],al*(L<2?.85:.75)*(.8+.2*o));st(c,f,w,K[L<2?1:0],al*.45,.5)
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
export const frames=30,delay=[...Array(30)].map((_,i)=>i==21?900:85),dither=true
export default(c,t)=>{
  const f=sm(.8,1,t);c.globalCompositeOperation='multiply'
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
  c.filter='none';fade(c,18);snap(c)
}
