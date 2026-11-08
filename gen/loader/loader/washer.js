// white front-loading washing machine with a teal display, its round porthole showing a yellow shirt, red sock, green towel, purple shorts and orange cloth tumbling round the turning drum in sloshing blue water with rising bubbles, the machine thumping and shaking twice per spin
const{sin,cos,max,PI}=Math,T=2*PI
export const frames=40,delay=50
const ink='#111',DY=14
const P=(c,f,fill,lw=6)=>{c.beginPath(),f(),fill&&(c.fillStyle=fill,c.fill()),lw&&(c.lineWidth=lw,c.strokeStyle=ink,c.stroke())}
// clothes drawn around their own centre
const items=[
  ['#ffd166',c=>{c.moveTo(-14,-11),c.lineTo(-5,-13),c.quadraticCurveTo(0,-8,5,-13),c.lineTo(14,-11),c.lineTo(17,-2),c.lineTo(10,-1),c.lineTo(10,13),c.lineTo(-10,13),c.lineTo(-10,-1),c.lineTo(-17,-2),c.closePath()}],
  ['#ef476f',c=>{c.moveTo(-5,-15),c.lineTo(5,-15),c.lineTo(5,3),c.quadraticCurveTo(5,9,11,9),c.lineTo(13,9),c.quadraticCurveTo(16,15,10,16),c.lineTo(-1,16),c.quadraticCurveTo(-5,16,-5,10),c.closePath()}],
  ['#06d6a0',c=>c.roundRect(-12,-10,24,20,4)],
  ['#8b6cf6',c=>{c.moveTo(-12,-11),c.lineTo(12,-11),c.lineTo(14,11),c.lineTo(3,11),c.lineTo(0,1),c.lineTo(-3,11),c.lineTo(-14,11),c.closePath()}],
  ['#ff9f1c',c=>c.ellipse(0,0,11,8,0,0,T)],
]
export default(c,t)=>{
  // thumps: two short bursts of whole-pixel shaking per loop
  const sh=[0,0,0,2,-2,2,-1,1,-1],k=(t*40|0)%20,j=sh[k]??0
  c.translate(128+j,128+(k==4||k==6?-1:0))
  const D=T*t
  // feet and body
  P(c,()=>{c.roundRect(-66,84,22,16,4),c.roundRect(44,84,22,16,4)},'#5b6378',5)
  P(c,()=>c.roundRect(-80,-100,160,190,16),'#f4f5f8')
  P(c,()=>{c.moveTo(-80,-64),c.lineTo(80,-64)},0,5)
  // panel: display with lights, two buttons, dial
  P(c,()=>c.roundRect(-64,-90,46,18,5),'#2ec4b6',4)
  P(c,()=>{c.arc(-54,-81,3,0,T),c.moveTo(-40,-81),c.arc(-43,-81,3,0,T)},'#e9fffb',0)
  P(c,()=>c.arc(-2,-81,6,0,T),'#ff6b6b',4),P(c,()=>c.arc(16,-81,6,0,T),'#ffd166',4)
  P(c,()=>c.arc(52,-82,12,0,T),'#c9ced8',5),P(c,()=>{c.moveTo(52,-82),c.lineTo(52,-91)},0,4)
  // door ring and handle
  P(c,()=>c.roundRect(58,DY-14,14,28,5),'#8e96a6',5)
  P(c,()=>c.arc(0,DY,66,0,T),'#c9ced8')
  P(c,()=>c.arc(0,DY,53,0,T),'#2b3a67',5)
  c.save(),c.beginPath(),c.arc(0,DY,50,0,T),c.clip(),c.translate(0,DY)
  // drum lifters turn with the drum
  for(let i=0;i<3;i++){const a=D+i*T/3;c.save(),c.rotate(a),P(c,()=>c.roundRect(42,-7,14,14,4),'#5b6b8c',3.5),c.restore()}
  // clothes ride up with the drum and fall back through the middle
  items.forEach(([col,f],i)=>{
    const o=i*T/items.length,a=D+o+.4*sin(D+o),up=max(0,-sin(a)),r=32-20*up*up
    c.save(),c.translate(r*cos(a),r*sin(a)+4),c.rotate(D*(i%2?2:-1)+o),c.scale(1.15,1.15)
    P(c,()=>f(c),col,3.2),c.restore()
  })
  // water with a sloshing surface, see-through over the clothes
  const tl=.22*sin(2*D),wl=x=>16+tl*x+4*sin(x/9+3*D)
  c.beginPath(),c.moveTo(-52,60)
  for(let x=-52;x<=52;x+=4)c.lineTo(x,wl(x))
  c.lineTo(52,60),c.closePath()
  c.globalAlpha=.55,c.fillStyle='#4cc9f0',c.fill(),c.globalAlpha=1
  c.beginPath()
  for(let x=-52;x<=52;x+=4)c.lineTo(x,wl(x))
  c.lineWidth=4,c.strokeStyle='#bdeeff',c.stroke()
  // bubbles rise and pop at the surface
  for(let i=0;i<5;i++){
    const u=(t*2+i/5)%1,x=-30+i*15+4*sin(T*u+i),y=48-(48-wl(x))*u
    P(c,()=>c.arc(x,y,2.5+2*u,0,T),'#e8f8ff',0)
  }
  // glass shine
  c.lineWidth=6,c.strokeStyle='#fff',c.beginPath(),c.arc(0,0,40,PI*1.1,PI*1.4),c.stroke()
  c.restore()
  P(c,()=>c.arc(0,DY,50,0,T),0,5)
}
