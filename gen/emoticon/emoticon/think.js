// emoticon thinking with a mitten finger tapping its chin, eyes wandering up while thought bubbles rise
export const frames=24,delay=85
export default(c,t)=>{
  const P=Math.PI*2,S=Math.sin,K=v=>v<0?0:v>1?1:v
  const E=(x,y,a,b,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,P)}
  const L=(...p)=>{c.beginPath();c.moveTo(p[0],p[1]);for(let k=2;k<p.length;k+=2)c.lineTo(p[k],p[k+1]);c.stroke()}
  const pop=p=>p<=0?0:p>=1?1:1+2.7*(p-1)**3+1.7*(p-1)**2 // ease out back
  const g=S(t*P),tap=t>=.25&&t<.75?Math.max(0,S(t*P*4)):0 // gaze sway, two finger taps mid-loop
  c.translate(120,132)
  // head, tilting around the chin so the finger stays put
  c.save();c.translate(0,80);c.rotate(-.06+.05*g);c.translate(0,-80)
  E(0,0,96,96);c.fillStyle='#fff';c.fill();c.lineWidth=8;c.stroke()
  c.fillStyle='#111';const gx=7*g,gy=-8,bl=t>.84&&t<.9?.15:1 // one slow blink
  E(-30+gx,-10+gy,9,11*bl);c.fill()              // squinting eye
  E(30+gx,-14+gy,10,15*bl);c.fill()              // wide eye
  c.lineWidth=7
  L(-46,-38,-16,-34)                              // low flat brow
  c.beginPath();c.moveTo(14,-50-4*g);c.quadraticCurveTo(30,-64-5*g,48,-52-3*g);c.stroke() // raised brow
  c.beginPath();c.moveTo(-30+4*g,38);c.bezierCurveTo(-18+4*g,30,-8+4*g,42,6+4*g,34);c.stroke() // hmm mouth
  c.restore()
  // fist under the chin, index finger resting on it and tapping
  c.save();c.translate(40+2*tap,86+3*tap);c.rotate(-.55)
  c.save();c.translate(-8,-8);c.rotate(-.3*tap)
  c.lineWidth=26;L(0,0,0,-30);c.strokeStyle='#fff';c.lineWidth=12;L(0,0,0,-30);c.restore()
  c.fillStyle='#fff';c.strokeStyle='#111';c.lineWidth=7;E(2,4,26,21);c.fill();c.stroke()
  c.beginPath();c.moveTo(-8,0);c.quadraticCurveTo(8,-4,16,8);c.stroke()      // curled fingers
  c.restore()
  // thought bubbles pop up one by one, then vanish together
  ;[[80,-82,6],[95,-99,8],[110,-114,10]].forEach(([x,y,r],k)=>{
    const s=pop((t-.1-k*.14)/.1)*K((.96-t)/.08);if(s<=0)return
    c.fillStyle='#fff';c.lineWidth=6;E(x,y-1.5*S(t*P*2+k),r*s,r*s);c.fill();c.stroke()
  })
}
