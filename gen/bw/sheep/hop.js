// fluffy sheep hopping in place, its wool squashing on landing and stretching in the air
// the wool is one outline: every puff is stroked wide first, then all of them are filled
const{sin,cos,PI}=Math,T=2*PI
export const delay=60
export default(c,t)=>{
  const air=t>=.25,a=(t-.25)/.75,h=air?70*4*a*(1-a):0,g=air?0:sin(PI*t/.25),st=air?.08*(1-4*a*(1-a)):0
  const sx=1+.16*g-.4*st,sy=1-.16*g+st
  const wool=(L,r)=>{c.lineWidth=14;c.strokeStyle='#111';for(const[x,y]of L)c.beginPath(),c.arc(x,y,r,0,T),c.stroke();c.fillStyle='#fff';for(const[x,y]of L)c.beginPath(),c.arc(x,y,r,0,T),c.fill()}
  const dark=f=>{c.beginPath();f();c.lineWidth=14;c.strokeStyle='#fff';c.stroke();c.fillStyle='#111';c.fill()}
  c.save();c.translate(128,232-h);c.scale(sx,sy)
  for(const x of[-38,-14,14,38])for(const[l,s]of[[22,'#fff'],[12,'#111']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(x,-50),c.lineTo(x,-6),c.stroke()
  wool([...Array(14)].map((_,i)=>[66*cos(i*T/14),-90+40*sin(i*T/14)]),22)
  c.beginPath();c.ellipse(0,-90,66,40,0,0,T);c.fill()
  for(const d of[-1,1])dark(()=>c.ellipse(d*34,-92,20,9,d*.45,0,T))
  dark(()=>c.ellipse(0,-76,27,33,0,0,T))
  wool([[-13,-104],[0,-111],[13,-104]],12)
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*11,-80,8,0,T),c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*10,-79,4.5,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*10-1.5,-81,1.6,0,T),c.fill()
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(-8,-60);c.quadraticCurveTo(-4,-54,0,-59);c.quadraticCurveTo(4,-54,8,-60);c.stroke()
  c.restore();c.strokeStyle='#111';c.lineWidth=7;c.fillStyle='#fff'
  if(g>.2)for(const s of[-1,1])c.beginPath(),c.arc(128+s*(100+12*g),226,9*g,0,T),c.fill(),c.stroke()
}
