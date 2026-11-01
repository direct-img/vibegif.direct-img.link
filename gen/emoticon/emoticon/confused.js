// emoticon confused, tilting its head side to side as question marks pop up on alternate sides
export const frames=28,delay=80
export default(c,t)=>{
  const P=Math.PI*2,S=Math.sin,K=v=>v<0?0:v>1?1:v
  const E=(x,y,a,b,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,P)}
  const pop=p=>p<=0?0:p>=1?1:1+2.7*(p-1)**3+1.7*(p-1)**2
  const sm=v=>v*v*(3-2*v),w=S(t*P),tilt=.15*Math.sign(w)*sm(K(Math.abs(w)*1.6))
  // question mark: white halo under black ink so it reads on dark too
  const Q=(x,y,s,r)=>{
    c.save();c.translate(x,y);c.rotate(r);c.scale(s,s)
    for(const[col,lw,d]of[['#fff',19,9],['#111',8,4.5]]){
      c.strokeStyle=col;c.lineWidth=lw;c.beginPath();c.arc(0,-12,12,Math.PI,P+.55);c.quadraticCurveTo(0,-2,0,6);c.stroke()
      c.fillStyle=col;E(0,20,d,d);c.fill()
    }
    c.restore()
  }
  ;[[-1,.06],[1,.56]].forEach(([d,t0])=>{
    const s=pop((t-t0)/.11)*K((t0+.38-t)/.07);if(s>0)Q(128+d*88,55+3*S(t*P*2),s*1.3,d*-.25+.12*S(t*P*3)*d)
  })
  // puppy head tilt, pivoting at the neck
  c.translate(128,236);c.rotate(tilt);c.translate(0,-98)
  E(0,0,96,96);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle='#111';c.stroke()
  c.fillStyle='#111';c.lineWidth=7
  E(-30,-12,11,15);c.fill()        // big eye
  E(32,-8,7,8);c.fill()            // small eye
  c.beginPath();c.moveTo(-48,-44);c.quadraticCurveTo(-32,-62,-14,-48);c.stroke()   // raised brow
  c.beginPath();c.moveTo(18,-36);c.lineTo(46,-30);c.stroke()                       // low brow
  c.beginPath();c.moveTo(-20,46);c.bezierCurveTo(-8,32,4,52,22,36);c.stroke()   // crooked mouth
}
