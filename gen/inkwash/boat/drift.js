// ink wash lone fisherman in a straw hat sitting in a small boat on wide empty water, boat bobbing gently, fishing line in the water with ripples spreading
const{sin:S,cos:C,PI,min,max,hypot}=Math,T=PI*2,
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
// wet wash: blurred fill of path g, alpha (or colour) a, blur b, with a faint pooled rim
const W=(c,g,a=.2,b=4)=>{
  c.filter=`blur(${b}px)`;c.fillStyle=c.strokeStyle=a>0?K(a):a
  c.beginPath();g();c.fill()
  c.filter=`blur(${b/4}px)`;c.globalAlpha=.4;c.lineWidth=1.2;c.stroke()
  c.globalAlpha=1;c.filter='none'
}
// smooth closed path through points
const Q=(c,p)=>{
  const n=p.length,m=k=>[(p[k%n][0]+p[(k+1)%n][0])/2,(p[k%n][1]+p[(k+1)%n][1])/2]
  c.moveTo(...m(n-1));p.forEach((q,k)=>c.quadraticCurveTo(...q,...m(k)));c.closePath()
}
// soft fade to nothing at the canvas edges
const fade=(c,w=16)=>{
  c.save();c.globalCompositeOperation='destination-out'
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
}
export const frames=24,delay=90,dither=true
export default(c,t)=>{
  const w=S(t*T),v=C(t*T),fx=158,fy=170
  c.globalCompositeOperation='multiply'
  // far shore, barely there
  let g=c.createLinearGradient(0,52,0,84);g.addColorStop(0,K(.2));g.addColorStop(1,K(0))
  c.filter='blur(1px)';c.fillStyle=g;c.beginPath();c.moveTo(110,86)
  for(let x=110;x<=256;x+=3)c.lineTo(x,80-22*max(0,1-Math.abs(x-196)/60)**1.3-12*max(0,1-Math.abs(x-240)/30)**1.3+S(x*.3)*1.2)
  c.lineTo(256,86);c.fill();c.filter='none'
  ;[[150,44],[162,38]].map(([x,y])=>B(c,[[x-4,y-1],[x,y+1.5],[x+4,y-1.5]],1.4,.5))
  // still water: a few pale strokes, foreground reeds
  ;[[30,120,40],[170,112,50],[196,150,34],[40,206,60],[150,222,40]].map(([x,y,l])=>B(c,[[x,y],[x+l/2,y+1],[x+l,y]],1.7,.22))
  ;[[22,240,30,196],[30,242,44,204],[38,242,36,214],[26,242,14,210]].map(([x,y,X,Y])=>B(c,[[x,y],[(x+X)/2,(y+Y)/2+3],[X,Y]],3,.8,1,u=>1-u*.8))
  // reflection and ripples around the hull
  c.filter='blur(3px)';c.fillStyle=K(.22)
  c.beginPath();c.ellipse(96+w,176,36+v*2,5,0,0,T);c.fill();c.filter='none'
  ;[[52,182,34,0],[104,186,44,2],[70,192,30,4]].map(([x,y,l,k])=>{
    const s=S(t*T+k)*5
    B(c,[[x-s,y],[x+l/2,y+1],[x+l+s,y]],2,.4)
  })
  // rings where the line enters
  for(let k=0;k<2;k++){
    const u=(t+k/2)%1
    c.strokeStyle=K(.5*(1-u)*min(1,u*6));c.lineWidth=1.5-u
    c.beginPath();c.ellipse(fx,fy,2+u*15,(2+u*15)*.3,0,0,T);c.stroke()
  }
  // boat, bobbing
  c.save();c.translate(96,164+w*2.4);c.rotate(v*.05)
  const tip=[58,-46-v*1.5]
  B(c,[[-40,-7],[-28,2],[0,5],[26,3],[42,-5]],11,.93,.8,u=>.35+S(PI*u)*.65)
  B(c,[[-36,-6],[0,-1.5],[38,-5]],2,.6)
  // fisherman: straw cape, hat, rod
  W(c,()=>Q(c,[[-22,-2],[-20,-18],[-12,-27],[-4,-18],[0,-2]]),.62,1)
  B(c,[[-17,-22],[-22,-12],[-21,-3]],4,.8,.4);B(c,[[-8,-22],[-3,-12],[-2,-3]],3.5,.7,.4)
  c.fillStyle=K(.85);c.beginPath();c.arc(-11,-28,3.4,0,T);c.fill()
  B(c,[[-25,-28],[-11,-37],[3,-28]],3,.9);B(c,[[-25,-28],[-11,-30.5],[3,-28]],4,.5)
  B(c,[[-6,-17],[4,-21],[12,-24]],3,.8)
  B(c,[[4,-19],[30,-33],tip],1.8,.9,1,u=>1-u*.7)
  c.restore()
  // line from the rod tip down to the float
  const a=96+tip[0]*C(v*.05)-tip[1]*S(v*.05),b=164+w*2.4+tip[0]*S(v*.05)+tip[1]*C(v*.05)
  c.strokeStyle=K(.6);c.lineWidth=.7
  c.beginPath();c.moveTo(a,b);c.quadraticCurveTo(a+2,b+30,fx,fy);c.stroke()
  fade(c)
}
