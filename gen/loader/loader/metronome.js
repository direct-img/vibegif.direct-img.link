// wooden pyramid metronome with a dark outline, cream scale plate and brass weight, its steel arm swings side to side with pendulum easing and the body gives a tiny squash bounce at each tick
const{sin,PI,max}=Math,T=2*PI
export const frames=40,delay=40
const A=.45, // swing amplitude (rad)
  poly=(c,p)=>{c.beginPath(),p.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y)),c.closePath()}
export default(c,t)=>{
  const th=A*sin(T*t),
    // ticks at both extremes (t=.25, .75): short damped squash
    d=(t+.75)%.5,k=d<.12?sin(PI*d/.12)*(1-d/.12):0
  c.save(),c.translate(128,224),c.scale(1+.03*k,1-.045*k),c.translate(-128,-224)
  c.lineWidth=6,c.strokeStyle='#111'
  // base slab
  c.fillStyle='#7c4a26',c.beginPath(),c.roundRect(42,204,172,18,6),c.fill(),c.stroke()
  // body, right side shaded
  poly(c,[[60,206],[196,206],[150,44],[106,44]]),c.fillStyle='#cd8b4c',c.fill()
  poly(c,[[170,206],[196,206],[150,44],[140,44]]),c.fillStyle='#ac6c35',c.fill()
  poly(c,[[60,206],[196,206],[150,44],[106,44]]),c.stroke()
  c.fillStyle='#7c4a26',c.beginPath(),c.roundRect(112,34,32,14,5),c.fill(),c.stroke()
  // cream scale plate with tick marks
  poly(c,[[94,184],[162,184],[141,64],[115,64]]),c.fillStyle='#f8e9cb',c.fill(),c.lineWidth=4,c.stroke()
  c.strokeStyle='#c99c63',c.lineWidth=3,c.beginPath()
  for(let y=76;y<172;y+=12){const w=y%24?5:9;c.moveTo(128-w,y),c.lineTo(128+w,y)}
  c.stroke()
  // arm: steel rod with outline, brass weight, pivot cap
  c.save(),c.translate(128,182),c.rotate(th)
  c.strokeStyle='#111',c.lineWidth=11,c.beginPath(),c.moveTo(0,0),c.lineTo(0,-150),c.stroke()
  c.strokeStyle='#d5dbe2',c.lineWidth=5,c.beginPath(),c.moveTo(0,0),c.lineTo(0,-150),c.stroke()
  c.lineWidth=4.5,c.strokeStyle='#111',c.fillStyle='#f2b63e'
  poly(c,[[-15,-84],[15,-84],[11,-108],[-11,-108]]),c.fill(),c.stroke()
  c.fillStyle='#ffd77a',c.fillRect(-8,-103,4,14)
  c.restore()
  c.lineWidth=4.5,c.strokeStyle='#111',c.fillStyle='#f2b63e',c.beginPath(),c.arc(128,182,9,0,T),c.fill(),c.stroke()
  c.restore()
}
