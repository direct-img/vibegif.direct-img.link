// nova star: eight long cream kite spikes outlined in dark brown glide one way while sixteen short orange spikes behind them glide the other, then both rest while the gold core in its orange ring swells a soft amber glow and settles
const{sin,cos,min,max,PI}=Math,T=2*PI
// 12 gliding frames at 40ms, then 10 resting frames at 60ms while the core glows
export const frames=22,delay=[...Array(12).fill(40),...Array(10).fill(60)]
const cl=x=>min(1,max(0,x)),
  ss=x=>(x=cl(x),x*x*x*(x*(6*x-15)+10)),
  // kite spike pointing along angle a: base point r0, widest (half-width w) at rw, tip r1
  kite=(c,a,r0,rw,r1,w)=>{const x=cos(a),y=sin(a)
    c.beginPath(),c.moveTo(r0*x,r0*y),c.lineTo(rw*x-w*y,rw*y+w*x)
    c.lineTo(r1*x,r1*y),c.lineTo(rw*x+w*y,rw*y-w*x),c.closePath()},
  disc=(c,r,f,x=0)=>{c.fillStyle=f,c.beginPath(),c.arc(x,x,r,0,T),c.fill()}
export default(c,t,i)=>{
  // rings glide one slot each (opposite ways), then hold still while the core glows
  const g=ss(i/11),b=sin(PI*cl((i-11)/11))**2,r=28+4*b
  c.translate(128,128)
  c.fillStyle='#e27a4e'
  for(let k=0;k<16;k++)kite(c,(k+.5+g)*T/16,32,48,80,8),c.fill()
  disc(c,r+8+16*b,'#f9c46a')
  c.lineWidth=4,c.strokeStyle='#3b2618',c.fillStyle='#fdf0dc'
  for(let k=0;k<8;k++)kite(c,(k-g)*T/8,30,50,104,10),c.fill(),c.stroke()
  disc(c,r+7,'#d9653c'),disc(c,r,'#f6ad48'),disc(c,r*.64,'#ffd27a',-3),disc(c,r*.3,'#fff3cf',-5)
}
