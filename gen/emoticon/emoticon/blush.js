// emoticon blushing shyly with ˘ ˘ eyes that pop open into ◕ ◕ for a peek, an ω mouth and /// cheeks that type in more slashes, poking its mitten fingertips together
export const frames=24,delay=95
export default(c,t)=>{
  const P=Math.PI*2,S=Math.sin,K=v=>v<0?0:v>1?1:v,io=v=>(v=K(v),v<.5?2*v*v:1-2*(1-v)**2)
  const E=(x,y,a,b,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,P)}
  const L=(...p)=>{c.beginPath();c.moveTo(p[0],p[1]);for(let k=2;k<p.length;k+=2)c.lineTo(p[k],p[k+1]);c.stroke()}
  // g: 0 eyes down and away .. 1 peeking at you; the blush deepens while it peeks, then it squirms away
  const g=io((t-.36)/.1)*(1-io((t-.62)/.1)),hot=K(io((t-.38)/.14)-io((t-.86)/.14)),sq=S(Math.PI*K((t-.5)/.3))
  c.save();c.translate(137,226);c.rotate(-.1+.05*S(t*P)+.05*sq*S(t*P*6));c.scale(1+.02*sq,1-.02*sq);c.translate(0,-98)
  c.beginPath();c.arc(0,0,96,0,P);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle='#111';c.stroke()
  // /// cheeks: bold typed slashes (slanted bars with flat ends), two always, two more type in as it gets flustered
  c.fillStyle='#111'
  for(const d of[-1,1])for(let k=0;k<4;k++){const v=k<2?1:K(hot*2-(k-2));if(v<=0)continue
    const x=d*50+(k-1.5)*12,y=22,h=11*(.4+.6*v);c.beginPath();c.moveTo(x-8,y+h);c.lineTo(x-1,y+h);c.lineTo(x+8,y-h);c.lineTo(x+1,y-h);c.fill()}
  // eyes: ˘ ˘ closed and looking down-aside, popping open into ◕ ◕ peeking up at you, soft brows tilted up in the middle
  const ex=-7*(1-g),ey=8*(1-g),o=K(g*2.5-.75)
  for(const d of[-1,1]){c.save();c.translate(d*30+ex,-12+ey)
    if(o>0){c.scale(1,o*(2-o)*.9+.1);c.lineWidth=7;E(0,0,13,15);c.fillStyle='#fff';c.fill();c.stroke()
      c.fillStyle='#111';c.beginPath();c.moveTo(0,0);c.arc(0,0,13,-Math.PI/2,Math.PI*1.95,true);c.fill()}
    else{c.lineWidth=9;c.lineCap='butt';c.beginPath();c.arc(0,-4,12,.25,Math.PI-.25);c.stroke()}
    c.restore();c.lineWidth=6;L(d*44,-40+2*g,d*18,-46-2*g)}
  // ω mouth: two little bowls with a peak, squirming wider and narrower
  c.save();c.translate(0,44);c.scale(1+.12*sq*S(t*P*6),1);c.lineWidth=8;c.lineCap='butt'
  c.beginPath();c.moveTo(-16,-4);c.bezierCurveTo(-15,7,-2,7,0,-1);c.bezierCurveTo(2,7,15,7,16,-4);c.stroke();c.restore()
  c.restore()
  // two fists below the chin, index fingers poking each other
  const tap=1-Math.abs(Math.cos(3*Math.PI*t)) // three pokes, fingertips meeting sharply
  for(const d of[-1,1]){c.save();c.translate(128+d*(48-7*tap),220);c.scale(-d,1);c.rotate(-.28)
    c.lineWidth=24;L(4,-4,34,-4);c.strokeStyle='#fff';c.lineWidth=10;L(4,-4,34,-4);c.strokeStyle='#111'
    c.fillStyle='#fff';c.lineWidth=7;E(-4,6,23,19);c.fill();c.stroke()
    c.restore()}
}
