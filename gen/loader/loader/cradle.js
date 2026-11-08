// Newton's cradle: a slate-blue frame with a dark outline holding five shiny silver balls on grey strings, the left end ball swings out and clicks back, then the right one does, with real pendulum timing and shadows sliding on the base
const{sin,cos,PI}=Math,T=2*PI
export const frames=48,delay=30
const R=14,L=90,PY=58,A=.31,X=k=>72+k*28
export default(c,t)=>{
  // end balls take turns, half the loop each; sin gives pendulum speed (fastest at impact, hanging at the top)
  const th=sin(PI*(t*2%1))*A*(t<.5?-1:1),ang=k=>k==0&&t<.5||k==4&&t>=.5?th:0,
    pos=k=>[X(k)+L*sin(ang(k)),PY+L*cos(ang(k))],
    dot=(x,y,r,f)=>{c.fillStyle=f,c.beginPath(),c.arc(x,y,r,0,T),c.fill()},
    box=(x,y,w,h,r,f)=>{c.beginPath(),c.roundRect(x,y,w,h,r),c.fillStyle=f,c.fill(),c.stroke()}
  c.lineWidth=5
  // base: top face then front face
  c.beginPath(),c.moveTo(22,184),c.lineTo(234,184),c.lineTo(244,196),c.lineTo(12,196),c.closePath()
  c.fillStyle='#93a6ba',c.fill(),c.stroke()
  box(12,194,232,20,6,'#506378')
  c.fillStyle='#64778c' // ball shadows on the base top, shrinking as a ball rises
  for(let k=0;k<5;k++){const[x,y]=pos(k);c.beginPath(),c.ellipse(x,190,R-(PY+L-y)*.3,2.6,0,0,T),c.fill()}
  // posts and top bar
  box(16,50,9,140,4,'#647a91'),box(231,50,9,140,4,'#647a91'),box(12,40,232,16,8,'#647a91')
  c.strokeStyle='#9cb0c4',c.lineWidth=3,c.beginPath(),c.moveTo(22,45),c.lineTo(234,45) // shine lines on bar, posts, base
  c.moveTo(19.5,60),c.lineTo(19.5,180),c.moveTo(234.5,60),c.lineTo(234.5,180),c.stroke()
  c.strokeStyle='#6c8097',c.beginPath(),c.moveTo(20,199),c.lineTo(236,199),c.stroke()
  for(let k=0;k<5;k++){
    const[x,y]=pos(k)
    c.strokeStyle='#8a96a4',c.lineWidth=3,c.beginPath(),c.moveTo(X(k),PY-2),c.lineTo(x,y),c.stroke()
    // flat-shaded steel: dark rim, lighter body, white glint
    dot(x,y,R,'#7d8997'),dot(x-2,y-2,R*.78,'#c6ced7'),dot(x-1.5,y-1.5,R*.42,'#e4e9ee')
    c.fillStyle='#fff',c.beginPath(),c.ellipse(x-4.5,y-5.5,4,2.6,-.6,0,T),c.fill()
    c.strokeStyle='#111',c.lineWidth=3.5,c.beginPath(),c.arc(x,y,R,0,T),c.stroke()
  }
}
