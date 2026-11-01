// emoticon confused with a wide ⊙ eye, an o eye that blinks to - and a ~ mouth that flattens to - and flips with each head tilt, as bold ? glyphs pop up on alternate sides
export const frames=28,delay=80
export default(c,t)=>{
  const P=Math.PI*2,S=Math.sin,K=v=>v<0?0:v>1?1:v
  const E=(x,y,a,b,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,P)}
  const pop=p=>p<=0?0:p>=1?1:1+2.7*(p-1)**3+1.7*(p-1)**2
  const sm=v=>v*v*(3-2*v),w=S(t*P),tilt=.15*Math.sign(w)*sm(K(Math.abs(w)*1.6))
  // ? glyph: bold sans hook and stem with a square dot, white halo under black ink so it reads on dark too
  const Q=(x,y,s,r)=>{
    c.save();c.translate(x,y);c.rotate(r);c.scale(s,s);c.lineCap='butt';c.lineJoin='miter'
    for(const[col,lw,d]of[['#fff',20,10.5],['#111',10,5.5]]){
      c.strokeStyle=col;c.lineWidth=lw;c.beginPath();c.arc(0,-13,12,Math.PI*.95,P+.45);c.quadraticCurveTo(1,-1,1,8);c.stroke()
      c.fillStyle=col;c.fillRect(1-d,21-d,2*d,2*d)
    }
    c.restore()
  }
  // puppy head tilt, pivoting at the neck
  c.save();c.translate(128,236);c.rotate(tilt);c.translate(0,-98)
  E(0,0,96,96);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle='#111';c.stroke()
  c.fillStyle='#111';c.lineWidth=7
  // ⊙ big eye: bold ring whose dot drifts with the tilt
  c.lineWidth=9;E(-30,-12,13,16);c.stroke();E(-30+tilt*14,-12,4.5,5.5);c.fill()
  // o small eye, squeezing to a - as the head swings through upright
  const b=K(1-Math.abs(w)*3.2)
  c.save();c.translate(32,-8);c.lineCap='butt'
  if(b<.5){c.scale(1,1-b*1.6);E(0,0,8,8);c.stroke()}else{c.fillRect(-10,-4.5,20,9)}
  c.restore()
  c.lineWidth=7
  c.beginPath();c.moveTo(-48,-44);c.quadraticCurveTo(-32,-62,-14,-48);c.stroke()   // raised brow
  c.beginPath();c.moveTo(18,-36);c.lineTo(46,-30);c.stroke()                       // low brow
  // ~ mouth: a bold tilde that flattens to a - and flips over as the head swings
  const a=tilt/.15;c.save();c.translate(2,42);c.rotate(-.12);c.lineWidth=10;c.lineCap='butt'
  c.beginPath();c.moveTo(-23,6*a);c.bezierCurveTo(-15,-10*a,-6,-8*a,0,0);c.bezierCurveTo(6,8*a,15,10*a,23,-6*a);c.stroke();c.restore()
  c.restore()
  // ? glyphs drawn last so they sit on top of the head
  ;[[-1,.06,.44,0,0,1],[1,.56,.94,0,0,1],[1,.63,.94,-46,-20,.68]].forEach(([d,t0,t1,dx,dy,z])=>{
    const s=pop((t-t0)/.11)*K((t1-t)/.07);if(s>0)Q(128+d*88+dx,55+dy+3*S(t*P*2),s*1.3*z,d*-.25+.12*S(t*P*3)*d)
  })
}
