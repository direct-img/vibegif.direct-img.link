// emoticon blushing shyly, poking its mitten fingertips together, stealing a glance up as its hatched cheeks deepen
export const frames=24,delay=95
export default(c,t)=>{
  const P=Math.PI*2,S=Math.sin,K=v=>v<0?0:v>1?1:v,io=v=>(v=K(v),v<.5?2*v*v:1-2*(1-v)**2)
  const E=(x,y,a,b,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,P)}
  const L=(...p)=>{c.beginPath();c.moveTo(p[0],p[1]);for(let k=2;k<p.length;k+=2)c.lineTo(p[k],p[k+1]);c.stroke()}
  // g: 0 eyes down and away .. 1 peeking at you; the blush deepens while it peeks, then it squirms away
  const g=io((t-.36)/.1)*(1-io((t-.62)/.1)),hot=K(io((t-.38)/.14)-io((t-.86)/.14)),sq=S(Math.PI*K((t-.5)/.3))
  c.save();c.translate(137,226);c.rotate(-.1+.05*S(t*P)+.05*sq*S(t*P*6));c.scale(1+.02*sq,1-.02*sq);c.translate(0,-98)
  c.beginPath();c.arc(0,0,96,0,P);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle='#111';c.stroke()
  // hatched cheeks: three strokes, two more as it gets flustered
  c.save();c.lineWidth=5;c.strokeStyle='#111'
  for(const d of[-1,1])for(let k=0;k<5;k++){const v=k<3?1:K(hot*2-(k-3));if(v<=0)continue
    const x=d*48+(k-2)*9,y=20;L(x-4.5*v,y+8*v,x+4.5*v,y-8*v)}
  c.restore()
  // eyes: looking down and aside, then up at you, with soft brows tilted up in the middle
  const ex=-7*(1-g),ey=8*(1-g)
  c.fillStyle='#111';for(const d of[-1,1]){E(d*30+ex,-12+ey,9,12+g*2);c.fill()
    c.lineWidth=6;L(d*44,-40+2*g,d*18,-46-2*g)}
  // tiny wobbly smile
  c.lineWidth=7;c.beginPath();c.moveTo(-16,40);c.bezierCurveTo(-8,48,-4,40,0,44);c.bezierCurveTo(4,40,8,48,16,40);c.stroke()
  c.restore()
  // two fists below the chin, index fingers poking each other
  const tap=1-Math.abs(Math.cos(3*Math.PI*t)) // three pokes, fingertips meeting sharply
  for(const d of[-1,1]){c.save();c.translate(128+d*(48-7*tap),220);c.scale(-d,1);c.rotate(-.28)
    c.lineWidth=24;L(4,-4,34,-4);c.strokeStyle='#fff';c.lineWidth=10;L(4,-4,34,-4);c.strokeStyle='#111'
    c.fillStyle='#fff';c.lineWidth=7;E(-4,6,23,19);c.fill();c.stroke()
    c.restore()}
}
