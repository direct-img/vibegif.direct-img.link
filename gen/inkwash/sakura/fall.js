// ink wash cherry blossom branch on rice paper, pale pink sakura petals falling and drifting across the sheet in the breeze
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
const pk=a=>`rgba(206,104,128,${a})`,
// blossoms: x, y, size
F=[[214,52,1],[196,70,.8],[176,58,1.1],[160,82,.9],[139,66,1],[120,52,.8],[104,74,1.1],[84,66,.8],[66,88,1],[150,104,.8],[186,34,.7],[228,76,.8]]
export const frames=26,delay=80
export default(c,t)=>{
  paper(c)
  c.globalCompositeOperation='multiply'
  const r=R(11)
  // branch and twigs
  B(c,[[252,34],[214,60],[170,66],[128,60],[92,74],[58,92]],9,.9,.7,u=>1-u*.75)
  B(c,[[176,66],[160,86],[146,108]],4,.85,.6,u=>1-u*.8)
  B(c,[[206,58],[190,40],[184,26]],3.5,.85,1,u=>1-u*.8)
  B(c,[[128,60],[118,48],[102,42]],3,.8,1,u=>1-u*.8)
  B(c,[[222,56],[234,72],[232,86]],3,.8,1,u=>1-u*.8)
  B(c,[[240,42],[226,44],[200,56],[160,62]],3,.35,1)
  ;[[196,62],[150,64],[110,66],[168,76]].map(([x,y])=>B(c,[[x,y],[x+3,y-5]],3,.9))
  // blossoms
  F.map(([x,y,z],k)=>{
    const a=r()*T
    c.filter='blur(.6px)'
    for(let j=0;j<5;j++){
      const b=a+j*T/5
      c.fillStyle=pk(.3+r()*.15);c.beginPath()
      c.ellipse(x+C(b)*5*z,y+S(b)*5*z,5.2*z,3.6*z,b,0,T);c.fill()
    }
    c.fillStyle=pk(.55);c.beginPath();c.arc(x,y,1.8*z,0,T);c.fill()
    c.filter='none';c.fillStyle=K(.8)
    for(let j=0;j<5;j++)c.beginPath(),c.arc(x+C(a+j*1.3)*3.4*z,y+S(a+j*1.3)*3.4*z,.6,0,T),c.fill()
  })
  // buds
  ;[[58,92],[146,110],[184,24],[100,41],[232,88],[74,82],[128,84]].map(([x,y])=>{
    c.fillStyle=pk(.7);c.beginPath();c.ellipse(x,y,2.6,2,1,0,T);c.fill()
  })
  // falling petals
  for(let k=0;k<24;k++){
    const u=(t+k*.618)%1,x=92+r()*130-u*44+S(u*T*2+k)*7,y=62+r()*30+u*(118+r()*36),z=1+r()*.7
    c.save();c.translate(x,y);c.rotate(k+u*T*(k%2?1:-1));c.scale(1,C(u*T*2+k)*.6+.4)
    c.globalAlpha=min(1,u*7,(1-u)*5)
    c.fillStyle=pk(.62);c.beginPath();c.moveTo(-4*z,0);c.quadraticCurveTo(0,-4*z,4.4*z,0);c.quadraticCurveTo(0,3*z,-4*z,0);c.fill()
    c.restore()
  }
  seal(c,24,212)
}
