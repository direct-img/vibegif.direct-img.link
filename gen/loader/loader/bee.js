// round yellow and black striped bee with buzzing pale blue wings flying a wide figure-eight over a big pink flower with green leaves, bobbing and turning to face you at each end of the loop, all in bold black outlines
export const frames=40,delay=50
const{sin,cos,sqrt,acos,atan2,abs,max,PI}=Math,T=2*PI,R=25,S=1.7
const circ=(c,x,y,r)=>(c.beginPath(),c.arc(x,y,r,0,T))
// caps of the body sphere past axial position a (axis tilted by angle l toward the viewer), painted tail to head
const CAPS=[[-1,'#2a2118'],[-.62,'#ffd23f'],[-.3,'#2a2118'],[.02,'#ffd23f']]
const cap=(c,a,s,o)=>{
  const q=sqrt(1-a*a),cx=R*a*s,rx=R*q*o,ry=R*q,k=a*o/(q*s)
  c.beginPath()
  if(k>=1)c.ellipse(cx,0,rx+.01,ry,0,0,T)
  else if(k<=-1){if(o>a)c.arc(0,0,R,0,T);else return}
  else{
    const g=acos(k),ey=ry*sin(g),ex=cx+rx*k
    c.ellipse(cx,0,rx+.01,ry,0,g,T-g),c.arc(0,0,R,atan2(-ey,ex),atan2(ey,ex))
  }
  c.fill()
}
// point on the sphere at longitude u from the viewer, latitude v
const pt=(u,v)=>[R*cos(v)*sin(u),-R*sin(v),cos(v)*cos(u)]
const wing=(c,l,k,up,f)=>{
  const s=sin(l),o=cos(l),x=(k*o*.8-.7*s)*(up?.6:.9),y=up?-1:-.75,a=atan2(y,x)
  c.save(),c.translate(-6*s+k*6*o,-R+6),c.rotate(a),c.beginPath(),c.ellipse(12,0,13,8,0,0,T),c.fillStyle=f
  if(f[1]=='e')c.lineWidth=3.6,c.stroke()
  c.fill(),c.restore()
}
export default(c,t,i)=>{
  // flower: big pink head on a short stem with two leaves
  c.lineWidth=13,c.beginPath(),c.moveTo(128,240),c.lineTo(128,214),c.stroke()
  c.strokeStyle='#5cb85c',c.lineWidth=6,c.stroke(),c.strokeStyle='#111'
  for(const k of[-1,1]){
    c.save(),c.translate(128,226),c.scale(k,1),c.rotate(-.3),c.beginPath(),c.ellipse(30,0,26,12,0,0,T)
    c.fillStyle='#5cb85c',c.lineWidth=6,c.stroke(),c.fill(),c.restore()
  }
  c.lineWidth=7,c.fillStyle='#ff8fb3'
  for(let a=0;a<6;a++)circ(c,128+25*cos(a*PI/3+PI/6),192+25*sin(a*PI/3+PI/6),18),c.stroke()
  for(let a=0;a<6;a++)circ(c,128+25*cos(a*PI/3+PI/6),192+25*sin(a*PI/3+PI/6),18),c.fill()
  c.fillStyle='#ffc2d6';for(let a=0;a<6;a++)circ(c,128+30*cos(a*PI/3+PI/6),192+30*sin(a*PI/3+PI/6),7),c.fill()
  circ(c,128,192,18),c.fillStyle='#f08a24',c.stroke(),c.fill()
  c.fillStyle='#c4621a';for(const[x,y]of[[-6,-5],[6,-4],[0,5],[-7,6],[7,6]])circ(c,128+x,192+y,2.6),c.fill()
  // bee on a figure-eight
  const th=T*(t+.375),x=128+57*sin(th),y=106+16*sin(2*th)+4*sin(4*th),dx=cos(th),dy=.7*cos(2*th)
  const l=PI/2*abs(dx),s=sin(l)||1e-3,o=cos(l)
  c.save(),c.translate(x,y),c.scale(dx<0?-S:S,S),c.rotate(atan2(dy,1.6)*.5)
  // back wings, stinger
  wing(c,l,-1,i%2,'#d6ecfb'),wing(c,l,-1,1-i%2,'#eef8ff')
  c.save(),c.translate(-R*s+2,2),c.beginPath(),c.moveTo(4,-6),c.lineTo(-14*s,0),c.lineTo(4,6),c.closePath()
  c.lineWidth=4,c.fillStyle='#2a2118',c.stroke(),c.fill(),c.restore()
  // body
  c.lineWidth=5,circ(c,0,0,R),c.stroke()
  CAPS.forEach(([a,f])=>{c.fillStyle=f,cap(c,a,s,o)})
  // face
  for(const e of[-.42,.42]){const[px,py,z]=pt(l+e,.15);if(z>.15)c.fillStyle='#111',c.beginPath(),c.ellipse(px,py,3.6*sqrt(z),5,0,0,T),c.fill()}
  for(const e of[-.8,.8]){const[px,py,z]=pt(l+e,-.12);if(z>.1)c.fillStyle='#ff8fa3',c.beginPath(),c.ellipse(px,py,5*z,3.4,0,0,T),c.fill()}
  {const[px,py,z]=pt(l,-.2);if(z>.1)c.lineWidth=2.4,c.beginPath(),c.ellipse(px,py,5*z,3,0,.2,PI-.2),c.stroke()}
  // antennae
  c.lineWidth=3
  for(const e of[-.35,.35]){
    const[px,py]=pt(l+e,.95),ax=px+16*s+8*e*o
    c.beginPath(),c.moveTo(px,py+2),c.quadraticCurveTo(px+4*s,py-12,ax,py-14),c.stroke(),circ(c,ax,py-14,3.5),c.fillStyle='#111',c.fill()
  }
  // front wings with a pale ghost of the other flap position
  wing(c,l,1,i%2,'#d6ecfb'),wing(c,l,1,1-i%2,'#eef8ff')
  c.restore()
}
