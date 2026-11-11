// ink wash full moon over a lake on rice paper, the moon left as bare paper in a grey sky wash, its reflection breaking into ripples and re-forming, reeds swaying
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
const{sin:S,cos:C,PI,min,max,hypot}=Math,T=PI*2,
R=s=>()=>(s=s*16807%2147483647)/2147483647,
K=(a,v=20)=>`rgba(${v+4},${v},${v-3},${a})`
// brush stroke through points p: width w, alpha (or colour) a, dry-brush hairlines from fraction d, pressure profile f
const B=(c,p,w,a=.85,d=1,f=u=>S(PI*u**.6)**.6)=>{
  const n=p.length-1,m=n*8,g=j=>p[max(0,min(n,j))],o=[]
  for(let k=0;k<=m;k++){
    const u=min(k/8,n-1e-6),i=u|0,v=u-i,
    q=z=>{const[a,b,e,h]=[g(i-1)[z],g(i)[z],g(i+1)[z],g(i+2)[z]];return b+.5*v*(e-a+v*(2*a-5*b+4*e-h+v*(3*(b-e)+h-a)))}
    o.push([q(0),q(1)])
  }
  o.forEach((q,k)=>{
    const[x0,y0]=o[max(0,k-1)],[x1,y1]=o[min(m,k+1)],h=hypot(x1-x0,y1-y0)||1,r=f(k/m)*w/2
    q.push((y0-y1)/h*r,(x1-x0)/h*r)
  })
  // wet part tapers out where the dry-brush hairlines take over
  const e=u=>d<1?max(0,min(1,(d+.1-u)*4)):1
  c.fillStyle=c.strokeStyle=a>0?K(a):a
  c.beginPath()
  for(let k=0;k<=m;k++)c.lineTo(o[k][0]+o[k][2]*e(k/m),o[k][1]+o[k][3]*e(k/m))
  for(let k=m;k>=0;k--)c.lineTo(o[k][0]-o[k][2]*e(k/m),o[k][1]-o[k][3]*e(k/m))
  c.fill()
  for(let j=0;d<1&&j<7;j++){
    c.beginPath();c.lineWidth=max(.5,w*(.06+j*7%3*.035))
    for(let k=max(0,(d-.2)*m|0)+j*3%4;k<=m-j*5%4*2;k++)c.lineTo(o[k][0]+o[k][2]*(j/3-1)*.85,o[k][1]+o[k][3]*(j/3-1)*.85)
    c.stroke()
  }
}
// vermilion seal with uneven edges and carved marks
const seal=(c,x,y,z=15,r=R(5))=>{
  const j=()=>r()*1.4-.7,l=(a,b,d,e)=>{c.moveTo(x+a*z,y+b*z);c.lineTo(x+d*z,y+e*z)}
  c.globalCompositeOperation='source-over';c.filter='none'
  c.fillStyle='rgba(184,50,42,.9)';c.beginPath()
  for(let k=0;k<24;k++){
    const e=k/6|0,f=k%6/6*z
    c.lineTo(...[[x+f+j(),y+j()],[x+z+j(),y+f+j()],[x+z-f+j(),y+z+j()],[x+j(),y+z-f+j()]][e])
  }
  c.fill()
  c.strokeStyle='#f3ecdc';c.lineWidth=z*.1;c.lineCap='butt';c.beginPath()
  l(.22,.26,.78,.24);l(.5,.2,.5,.56);l(.24,.55,.76,.56);l(.3,.56,.24,.8);l(.7,.56,.78,.8);l(.4,.8,.62,.79)
  c.stroke()
}
// put back the sheet's half-transparent deckle pixels (d = pixels grabbed right after paper) so moving ink never alters them
const fix=(c,d)=>{
  const m=c.getImageData(0,0,256,256),e=m.data
  for(let k=0;k<e.length;k+=4)if(d[k+3]<255)for(let j=0;j<4;j++)e[k+j]=d[k+j]
  c.putImageData(m,0,0)
}
const pc='rgba(243,236,220,.96)'
export const frames=28,delay=80
export default(c,t)=>{
  paper(c)
  const pd=c.getImageData(0,0,256,256).data
  c.globalCompositeOperation='multiply'
  const A=.5-C(t*T)/2,w=S(t*T),mx=166,my=66
  // sky: wash pooled around the moon, which stays unpainted
  let g=c.createRadialGradient(mx,my,29,mx,my,150)
  g.addColorStop(0,K(.4));g.addColorStop(.3,K(.2));g.addColorStop(1,K(.03))
  c.filter='blur(.8px)';c.fillStyle=g;c.beginPath();c.rect(0,0,256,140);c.arc(mx,my,29,0,T);c.fill('evenodd')
  c.filter='blur(3px)';c.fillStyle=K(.07)
  c.beginPath();c.ellipse(mx-8,my-6,9,6,.5,0,T);c.ellipse(mx+9,my+8,7,5,0,0,T);c.fill()
  // cloud wisps and the far shore
  c.filter='blur(2.5px)'
  B(c,[[96,84],[130,78],[168,88],[204,84]],9,.2);B(c,[[150,40],[186,34],[226,42]],7,.16)
  c.filter='blur(1px)'
  g=c.createLinearGradient(0,112,0,144);g.addColorStop(0,K(.5));g.addColorStop(1,K(.2))
  c.fillStyle=g;c.beginPath();c.moveTo(0,144)
  for(let x=0;x<=150;x+=3)c.lineTo(x,142-26*max(0,1-Math.abs(x-44)/70)**1.4-10*max(0,1-Math.abs(x-104)/40)**1.4+S(x*.3)*1.2)
  c.lineTo(150,144);c.fill()
  // water wash, paler toward the viewer
  g=c.createLinearGradient(0,142,0,240);g.addColorStop(0,K(.3));g.addColorStop(.6,K(.2));g.addColorStop(1,K(.02))
  c.fillStyle=g;c.fillRect(0,143,256,113);c.filter='none'
  ;[[30,160,50],[96,172,36],[208,164,30],[84,206,44],[200,222,26]].map(([x,y,l])=>B(c,[[x,y],[x+l/2,y+1],[x+l,y]],1.6,.3))
  // reflection: slices of bare paper sliding apart and back together
  c.globalCompositeOperation='source-over'
  for(let k=-7;k<8;k++){
    const d=k*3.7,h=Math.sqrt(784-d*d)*(1+A*.45*S(k*1.9+t*T*2)),x=mx+A*11*S(k*1.1+t*T*3),y=188+d*(1+A*.35)
    B(c,[[x-h,y],[x,y+A*S(k+t*T*2)],[x+h,y]],4.1-A*1.6,pc,1,u=>S(PI*u)**.35)
  }
  c.globalCompositeOperation='multiply'
  // reeds
  ;[[40,236,52,112,0],[52,238,74,132,1],[30,238,24,150,2]].map(([x,y,X,Y,k])=>{
    const s=w*4+S(t*T+k)*2,q=[[x,y],[(x+X)/2-4+s*.3,(y+Y)/2],[X+s,Y]]
    B(c,q,2.6,.9,1,u=>1-u*.6)
    B(c,[q[2],[X+s+7,Y+3],[X+s*1.4+13,Y+13]],4.5,.75,.4)
    B(c,[q[1],[q[1][0]+12+s*.5,q[1][1]-16],[q[1][0]+30+s,q[1][1]-10]],3.2,.8)
    B(c,[[x+2,y-30],[x-10+s*.3,y-56],[x-22+s*.5,y-58]],3,.7)
  })
  seal(c,216,214)
  fix(c,pd)
}
