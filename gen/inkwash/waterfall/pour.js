// ink wash waterfall, tall fall pouring between dark cliffs with flowing dry strokes, spray mist rising at the base, leaning pine
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
// filled polygon in a left-to-right gradient of ink (alpha a at x, b at X)
const G=(c,p,x,a,X,b)=>{
  const g=c.createLinearGradient(x,0,X,0)
  g.addColorStop(0,K(a));g.addColorStop(1,K(b))
  c.fillStyle=g;c.beginPath();p.map(q=>c.lineTo(...q));c.fill()
}
export const frames=20,delay=70,dither=true
export default(c,t)=>{
  c.globalCompositeOperation='multiply';c.translate(0,8)
  const r=R(23),v=u=>1-u*.6
  // cliffs: darkest against the water, dissolving outward; a pale far wall behind the lip
  c.filter='blur(3px)'
  G(c,[[100,40],[128,24],[162,28],[182,46],[172,58],[112,56]],100,.16,180,.1)
  c.filter='blur(1.2px)'
  G(c,[[16,222],[20,100],[44,64],[70,54],[90,26],[112,30],[127,44],[131,58],[126,86],[129,114],[122,144],[125,174],[119,222]],26,.04,128,.62)
  G(c,[[90,26],[112,30],[127,44],[131,58],[126,86],[108,74],[98,46]],90,.1,130,.4)
  G(c,[[129,114],[122,144],[125,174],[120,216],[104,210],[108,152],[114,120]],104,.05,128,.4)
  G(c,[[157,222],[159,172],[155,142],[160,112],[156,82],[159,62],[172,50],[190,58],[206,48],[224,72],[240,222]],158,.56,234,.04)
  G(c,[[159,62],[172,50],[178,84],[171,124],[160,112],[156,82]],156,.4,178,.1)
  G(c,[[159,172],[155,142],[170,150],[176,214],[158,216]],156,.4,178,.05)
  c.filter='none'
  // scorched edges hugging the water, crest lines, dry axe-cut texture
  B(c,[[128,42],[131,60],[126,88],[129,116],[122,146],[125,176],[121,208]],8,.93,.6,v)
  B(c,[[158,58],[156,84],[160,112],[155,142],[159,172],[157,206]],6.5,.9,.55,v)
  B(c,[[44,66],[70,54],[90,27],[112,30],[128,44]],4.5,.85,1,u=>.4+S(PI*u)*.6)
  B(c,[[159,62],[172,50],[190,58],[206,48],[223,70]],3.6,.75,.7,v)
  ;[[108,44,100,110],[90,48,78,124],[70,66,60,140],[48,90,40,170],[102,126,96,204],[78,140,70,208],[176,62,184,128],[196,66,204,150],[214,84,220,160],[180,140,188,206]]
    .map(([x,y,X,Y],k)=>B(c,[[x,y],[(x+X)/2+3,(y+Y)/2],[X,Y]],5.5-k%3,.4,.25,v))
  // leaning pine
  B(c,[[86,34],[96,18],[118,13]],4.5,.92,.7,v)
  ;[[100,17,11],[116,11,13],[126,19,9],[106,7,8]].map(([x,y,z])=>B(c,[[x-z,y+1],[x,y-2],[x+z,y+2]],5,.85,.6))
  // falling water: tapered streaks sliding down the empty gap
  for(let j=0;j<8;j++){
    const o=(j-3.5)*2.9+r()*2,s=2+j%2,p=r()
    for(let k=0;k<3;k++){
      const u=((k+s*t)/3+p)%1,y=54+u*128,g=y=>143+o*(1+(y-50)/300)+S(y*.05+j)*1.5,l=22+r()*14
      B(c,[[g(y),y],[g(y+l/2),y+l/2],[g(y+l),y+l]],2+j%3*.6,(.22+j%3*.1)*min(1,u*5,(1-u)*4))
    }
  }
  // pool: rocks and ripples
  c.filter='blur(.8px)'
  G(c,[[38,232],[46,220],[62,214],[80,222],[86,232]],38,.75,86,.5)
  G(c,[[186,234],[194,224],[206,220],[216,234]],186,.6,216,.4)
  c.filter='none'
  ;[[96,230,34],[150,226,50],[124,237,28]].map(([x,y,l])=>B(c,[[x,y],[x+l/2,y+1],[x+l,y]],1.8,.3))
  // mist: static banks dissolving the cliff feet, then spray puffs swelling and rising
  c.globalCompositeOperation='destination-out';c.filter='blur(7px)'
  c.fillStyle='rgba(0,0,0,.9)'
  c.beginPath();c.ellipse(60,208,62,9,0,0,T);c.ellipse(212,208,44,9,0,0,T);c.fill()
  for(let k=0;k<6;k++){
    const u=(t+k/6)%1
    c.fillStyle=`rgba(0,0,0,${S(PI*u)*.85})`
    c.beginPath();c.arc(142+(k%3-1)*(10+u*16),200-u*16,9+u*12,0,T);c.fill()
  }
  c.filter='none'
}
