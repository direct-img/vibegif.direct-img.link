// ink wash mountain landscape on rice paper, layered ridges fading pale into the distance, bands of mist drifting across, tiny pavilion and pines on a near crag
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
// ridge height at x from peaks [x,height,halfwidth] over base b
const rg=(p,b,k)=>x=>b-max(...p.map(([q,h,w])=>h*max(0,1-Math.abs(x-q)/w)**1.25))+S(x*.31+k)*1.5+S(x*.12+k)*2.5
export const frames=20,delay=110
export default(c,t)=>{
  paper(c)
  const pd=c.getImageData(0,0,256,256).data
  c.globalCompositeOperation='multiply'
  // one ridge layer: wash dark at the crest, dissolving into mist below
  const L=(p,b,a,k)=>{
    const f=rg(p,b,k),g=c.createLinearGradient(0,b-max(...p.map(q=>q[1])),0,b+8)
    g.addColorStop(0,K(a));g.addColorStop(.5,K(a*.6));g.addColorStop(1,K(0))
    c.filter='blur(.7px)';c.fillStyle=g;c.beginPath();c.moveTo(0,b+8)
    for(let x=0;x<=256;x+=2)c.lineTo(x,f(x))
    c.lineTo(256,b+8);c.fill();c.filter='none'
    return f
  },
  // mist: soft paper-coloured banks sliding right, repeating every 116px
  M=(y,h,o,a,v=0)=>{
    c.globalCompositeOperation='source-over';c.filter='blur(6px)';c.fillStyle=`rgba(243,236,220,${a})`
    for(let k=-1;k<3;k++){
      const x=k*116+(o+v*t*116)%116
      c.beginPath();c.ellipse(x,y,46,h,0,0,T);c.ellipse(x+52,y+h*.5,30,h*.6,0,0,T);c.fill()
    }
    c.filter='none';c.globalCompositeOperation='multiply'
  },
  pine=(x,y,z)=>{
    B(c,[[x,y+2],[x+1,y-10*z]],1.8*z,.9,1,u=>1-u*.5)
    for(let j=0;j<3;j++)B(c,[[x-(6-j)*z,y-(3+j*3)*z],[x+1,y-(5+j*3)*z],[x+(7-j)*z,y-(3+j*3)*z]],3*z,.85)
  }
  L([[150,98,58],[206,72,46],[96,52,56],[36,34,60]],152,.2,1)
  L([[192,74,44],[236,56,40],[132,34,50]],178,.37,4)
  M(143,7,20,.85,1)
  const f=L([[56,84,40],[18,62,40],[98,46,34]],216,.78,2)
  // rock texture: dry strokes down the near crag
  ;[30,44,58,70,86,102].map((x,k)=>B(c,[[x,f(x)+3],[x+5-k%3*4,f(x)+16],[x+2,f(x)+30+k%2*8]],5,.3,.35,u=>1-u*.5))
  B(c,[[38,f(38)],[56,f(56)-.5],[70,f(70)]],2.5,.7)
  pine(22,f(22),1);pine(70,f(70),.8);pine(112,f(112),.9);pine(120,f(120)+2,.7)
  // pavilion on the shoulder
  c.save();c.translate(91,f(91)-7);c.fillStyle=c.strokeStyle=K(.92)
  c.beginPath();c.moveTo(-11,-.5);c.quadraticCurveTo(-4,-2,0,-9);c.quadraticCurveTo(4,-2,11,-.5);c.quadraticCurveTo(0,-2.5,-11,-.5);c.fill()
  c.lineWidth=1.3;c.beginPath()
  ;[-5,5].map(x=>{c.moveTo(x,0);c.lineTo(x,7)});c.moveTo(-8,7.5);c.lineTo(8,7.5);c.moveTo(0,-9);c.lineTo(0,-11.5);c.stroke()
  c.restore()
  // distant birds
  ;[[70,58],[82,50],[96,56]].map(([x,y])=>B(c,[[x-4,y-1],[x,y+1.5],[x+4,y-1.5]],1.4,.6))
  M(196,10,70,.75)
  seal(c,214,212)
  fix(c,pd)
}
