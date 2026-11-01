// boxy grey robot head on an accordion neck, a row of red LEDs in its black visor lights up in a back-and-forth scanning sweep with a fading trail, glow reflecting on its face, antenna bulb blinks
export const frames=24,delay=60
const P=Math.PI*2
export default(c,t)=>{
  const rr=(x,y,w,h,r,f,s=1)=>{c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=f;c.fill();s&&c.stroke()}
  const ci=(x,y,r,f)=>{c.beginPath();c.arc(x,y,r,0,P);c.fillStyle=f;c.fill();c.stroke()}
  const ln=(...p)=>{c.beginPath();for(let k=0;k<p.length;k+=2)c.lineTo(p[k],p[k+1]);c.stroke()}
  const X=u=>72.5+(1-Math.cos(P*u))/2*112
  // shoulders + neck
  c.beginPath();c.moveTo(50,252);c.lineTo(72,226);c.lineTo(184,226);c.lineTo(206,252);c.closePath()
  c.fillStyle='#c3cad3';c.fill();c.stroke()
  c.fillStyle='#e9edf1';c.fillRect(80,233,60,5)
  rr(104,186,48,44,8,'#7f8995')
  c.lineWidth=4
  for(const y of[198,208,218])ln(106,y,150,y)
  c.lineWidth=7
  c.save()
  c.translate(128,130);c.rotate(Math.sin(P*t)*.03);c.translate(-128,-130)
  // antenna
  ln(128,52,128,26)
  const on=t%.5<.25
  ci(128,20,9,on?'#ff4a3d':'#6e2622')
  if(on){c.fillStyle='#ffe0da';c.beginPath();c.arc(125,17,3,0,P);c.fill()}
  rr(96,46,64,18,8,'#aeb6c0')
  // ears
  for(const s of[-1,1]){
    const x=128+s*98
    rr(x-14,100,28,60,11,'#9aa3ae');ci(x,130,9,'#c3cad3');ci(x,130,1,'#111')
  }
  // head
  const H=[34,58,188,134,26]
  rr(...H,'#dde2e8')
  c.save();c.beginPath();c.roundRect(...H);c.clip()
  c.fillStyle='#c3cad3';c.fillRect(186,58,40,134)
  c.fillStyle='#f6f8fa';c.fillRect(48,66,104,7)
  // red spill on the face
  const g=c.createRadialGradient(X(t),110,20,X(t),110,64)
  g.addColorStop(0,'rgba(255,70,50,.22)');g.addColorStop(1,'rgba(255,70,50,0)')
  c.fillStyle=g;c.fillRect(34,58,188,134)
  c.restore()
  c.beginPath();c.roundRect(...H);c.stroke()
  c.lineWidth=3;c.strokeStyle='#7f8995'
  ln(50,146,50,176,206,176,206,146)
  c.strokeStyle='#111';c.lineWidth=7
  for(const[x,y]of[[50,74],[206,74],[50,176],[206,176]])ci(x,y,3.5,'#9aa3ae')
  // visor with a row of LEDs
  const V=[50,88,156,46,23]
  rr(...V,'#14171c')
  c.save();c.beginPath();c.roundRect(...V);c.clip()
  const gl=c.createRadialGradient(X(t),111,4,X(t),111,46)
  gl.addColorStop(0,'rgba(255,60,40,.7)');gl.addColorStop(1,'rgba(255,40,30,0)')
  c.fillStyle=gl;c.fillRect(50,88,156,46)
  for(let j=0;j<8;j++){
    const x=66+j*16,cx=x+6.5
    let b=0
    for(let k=0;k<14;k++)b=Math.max(b,(1-k/14)**2*Math.max(0,1-Math.abs(cx-X(t-k*.02))/16))
    const L=(a,z)=>Math.round(a+(z-a)*b)
    c.fillStyle=`rgb(${L(52,255)},${L(14,64)},${L(14,46)})`
    c.beginPath();c.roundRect(x,97,13,28,4);c.fill()
    if(b>.6){c.fillStyle=b>.85?'#fff0e6':'#ff9c84';c.beginPath();c.roundRect(x+3.5,101,6,20,3);c.fill()}
  }
  c.globalCompositeOperation='lighter'
  const h=c.createRadialGradient(X(t),111,2,X(t),111,30)
  h.addColorStop(0,'rgba(255,90,60,.55)');h.addColorStop(1,'rgba(255,40,20,0)')
  c.fillStyle=h;c.fillRect(50,88,156,46)
  c.globalCompositeOperation='source-over'
  c.strokeStyle='#3c434d';c.lineWidth=3
  ln(68,94,188,94)
  c.restore()
  c.strokeStyle='#111';c.lineWidth=7
  c.beginPath();c.roundRect(...V);c.stroke()
  // mouth grille
  rr(94,146,68,26,9,'#4c545f')
  c.lineWidth=4
  for(const x of[108,121,135,148])ln(x,151,x,167)
  c.restore()
}
