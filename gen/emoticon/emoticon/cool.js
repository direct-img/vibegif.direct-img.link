// emoticon in sunglasses gives a slow cool nod with a half smile, then a glint slides across the shades and twinkles
export const frames=24,delay=70
const K='#111',W='#fff',P=Math.PI,
cl=x=>x<0?0:x>1?1:x,
sm=x=>(x=cl(x),x*x*(3-2*x))
export default(c,t)=>{
  const u=t/.42,n=u<.35?sm(u/.35):1-sm((u-.35)/.65),g=sm((t-.38)/.3),q=Math.sin(P*cl((t-.58)/.3))
  c.translate(128,128+5*n);c.rotate(-.05*n)
  c.beginPath();c.ellipse(0,0,96,96-3*n,0,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  c.translate(0,15*n)
  // shades: flat top bar, two rounded lenses, arms to the ears
  const lens=()=>{c.beginPath();for(const m of[1,-1]){c.moveTo(6*m,-27);c.lineTo(78*m,-27);c.bezierCurveTo(78*m,2,66*m,13,42*m,13);c.bezierCurveTo(16*m,13,6*m,2,6*m,-27);c.closePath()}}
  c.fillStyle=K;lens();c.fill()
  c.beginPath();c.moveTo(-93,-14);c.lineTo(-76,-24);c.lineTo(76,-24);c.lineTo(93,-14);c.stroke()
  // glint: two slanted white bars sweeping through both lenses
  c.save();lens();c.clip();c.fillStyle=W
  const x=-120+250*g,bar=(o,w)=>{c.beginPath();c.moveTo(x+o,-30);c.lineTo(x+o+w,-30);c.lineTo(x+o+w-22,16);c.lineTo(x+o-22,16);c.fill()}
  bar(0,13);bar(20,5);c.restore()
  // easy half smile, rising to one side
  c.lineWidth=8;c.beginPath();c.moveTo(-28,48);c.bezierCurveTo(-8,56,20,54,36,38);c.stroke()
  // sparkle pops on the lens corner after the glint
  if(q>0){
    c.save();c.translate(70,-26);c.rotate(q*.8);c.scale(q,q);c.beginPath()
    for(let k=0;k<8;k++){const r=k%2?6:26,a=k*P/4;c.lineTo(r*Math.cos(a),r*Math.sin(a))}
    c.closePath();c.fillStyle=W;c.fill();c.lineWidth=4;c.stroke();c.restore()
  }
}
