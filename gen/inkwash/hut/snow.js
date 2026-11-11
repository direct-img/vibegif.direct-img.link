// ink wash thatched hut under snow-laden pines on rice paper, snow left as bare paper against a soft grey wash, sparse snowflakes falling, warm orange glow in the window, chimney smoke curling up
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
// smooth closed path through points
const Q=(c,p)=>{
  const n=p.length,m=k=>[(p[k%n][0]+p[(k+1)%n][0])/2,(p[k%n][1]+p[(k+1)%n][1])/2]
  c.moveTo(...m(n-1));p.forEach((q,k)=>c.quadraticCurveTo(...q,...m(k)));c.closePath()
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
const pc='rgba(243,236,220,.97)'
export const frames=24,delay=90
export default(c,t)=>{
  paper(c)
  const pd=c.getImageData(0,0,256,256).data,r=R(53),
  M=()=>c.globalCompositeOperation='multiply',O=()=>c.globalCompositeOperation='source-over',
  // pine: dry trunk, wet drooping boughs [height up the trunk, side, reach], each topped with a lick of bare paper
  pine=(x,y,h,b)=>{
    B(c,[[x-2,y],[x+2,y-h*.45],[x-1,y-h]],h*.05+2,.9,.5,u=>1-u*.7)
    b.map(([v,s,l],k)=>{
      const Y=y-h*v,p=[[x,Y],[x+s*l*.5,Y-2+k%2*2],[x+s*l,Y+l*.3+3]]
      c.filter='blur(1.1px)';B(c,p,10+l*.25,.6,1,u=>S(PI*u**.5)**.6);c.filter='none'
      B(c,p.map(([a,b],j)=>[a+s*j*2,b+2+j]),4+l*.08,.88,.45)
      O();B(c,p.map(([a,b],j)=>[a-s*j*l*.14,b-4.5+j*.5]),3+l*.07,pc,1,u=>S(PI*u**.8)**.5);M()
    })
  }
  M()
  // one soft grey wash behind the trees and hut, everything else stays paper
  c.filter='blur(10px)';c.fillStyle=K(.25)
  c.beginPath();Q(c,[[34,128],[52,74],[112,58],[174,78],[224,108],[224,152],[186,172],[110,174],[52,168]]);c.fill()
  c.filter='blur(6px)';c.fillStyle=K(.12)
  c.beginPath();Q(c,[[90,140],[120,100],[176,104],[200,140],[150,168]]);c.fill()
  // snowbank: paper lifted back along the foot of the wash
  O();c.fillStyle=pc;c.beginPath();c.ellipse(128,190,120,13,0,0,T);c.fill();M()
  c.filter='none'
  B(c,[[20,206],[76,198],[134,204]],2,.24);B(c,[[150,214],[200,208],[240,212]],2,.2)
  ;[[100,200],[106,202],[198,196],[36,212]].map(([x,y],k)=>B(c,[[x,y],[x+2-k,y-7],[x+5-k*2,y-12]],1.6,.7))
  pine(208,180,74,[[.9,-1,10],[.8,1,14],[.62,-1,20],[.5,1,18],[.3,-1,24],[.22,1,20]])
  // hut: two posts, a breath of wash for the wall, door dab, glowing window
  c.filter='blur(1.5px)';c.fillStyle=K(.3);c.fillRect(126,152,54,30);c.filter='none'
  B(c,[[125,150],[124,184]],4,.9,.6,u=>1-u*.3);B(c,[[181,150],[182,184]],3.5,.85,.7,u=>1-u*.3)
  B(c,[[137,160],[137,184]],8,.8,1,u=>1-u*.2)
  B(c,[[120,185],[152,187],[186,184]],2.6,.6,.6)
  const f=.85+S(t*T*3)*.08+S(t*T*5)*.05
  O();c.filter='blur(5px)';c.fillStyle=`rgba(232,150,70,${.42*f})`
  c.beginPath();c.arc(163,167,12,0,T);c.fill()
  c.filter='blur(.6px)';c.fillStyle=`rgba(236,160,78,${f})`;c.fillRect(157,162,12,10);c.filter='none';M()
  B(c,[[163,161],[163,173]],1.3,.8,1,u=>1);B(c,[[156,167],[170,167]],1.2,.7,1,u=>1)
  // chimney and smoke
  B(c,[[171,128],[172,112]],6,.8,1,u=>1)
  c.filter='blur(3px)'
  for(let k=0;k<6;k++){
    const u=(t+k/6)%1
    c.fillStyle=K(.3*S(PI*u));c.beginPath()
    c.arc(173+S(u*5+k)*5+u*u*20,106-u*56,3+u*9,0,T);c.fill()
  }
  c.filter='none'
  // roof: one heavy thatch stroke, snow mound of bare paper above it, a thin shadow contour
  B(c,[[104,154],[128,146],[156,145],[184,148],[204,156]],11,.92,.7,u=>.35+S(PI*u)*.65)
  O();c.fillStyle=pc;c.beginPath()
  c.moveTo(106,149);c.quadraticCurveTo(116,138,128,120);c.quadraticCurveTo(152,104,178,120);c.quadraticCurveTo(190,138,201,150);c.quadraticCurveTo(154,138,106,149);c.fill()
  c.fillRect(166,107,11,6);M()
  B(c,[[176,120],[188,136],[199,148]],2,.4);B(c,[[130,118],[152,109],[172,115]],1.4,.3)
  pine(60,200,142,[[.93,1,12],[.86,-1,18],[.74,1,26],[.66,-1,30],[.52,1,36],[.44,-1,38],[.3,1,42],[.22,-1,34],[.1,1,26]])
  // sparse snowflakes drifting down across the wash
  O()
  for(let k=0;k<22;k++){
    const u=(t+k*.618)%1,x=40+r()*176+S(u*T+k)*5,y=52+u*128
    c.fillStyle=`rgba(250,246,236,${min(1,u*7,(1-u)*5)})`
    c.beginPath();c.arc(x,y,1.1+r()*1.2,0,T);c.fill()
  }
  seal(c,216,214)
  fix(c,pd)
}
