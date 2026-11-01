// retro robot head talking, its mouth a green oscilloscope screen whose waveform wiggles with each word, antenna bulb flashing and eyes blinking
export const frames=24,delay=70
const T=Math.PI*2,S=Math.sin
const P=(c,f,s=1)=>{f&&(c.fillStyle=f,c.fill());s&&c.stroke()}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const O=(c,x,y,r)=>{c.beginPath();c.arc(x,y,r,0,T)}
export default(c,t)=>{
  // three words then a pause
  const u=t/.72,e=u<1?Math.abs(S(u*Math.PI*5))**.6*(.7+.3*S(u*T*2)):0
  c.translate(128,140+e*-3)
  c.rotate(.035*S(t*T)+e*.02)
  c.translate(-128,-140)
  // antenna, springy stem
  const sw=4*S(t*T*2)
  c.lineWidth=5
  c.beginPath();c.moveTo(128,64)
  for(let k=1;k<=6;k++)c.lineTo(128+(k%2?-6:6)*(1-k/9)+sw*k/6,64-k*5)
  c.lineTo(128+sw,26);c.lineWidth=8;c.stroke()
  c.strokeStyle='#c3ccd4';c.lineWidth=3;c.stroke();c.strokeStyle='#111'
  c.lineWidth=6
  const on=e>.35||(t>.8&&t<.88)
  O(c,128+sw,24,10);P(c,on?'#ff4b4b':'#8a2b2b')
  O(c,125+sw,21,3);P(c,on?'#ffd0c8':'#b85a5a',0)
  // ear dials
  for(const s of[-1,1]){
    rr(c,128+s*84-13,98,26,64,10);P(c,'#b9c3cc')
    O(c,128+s*92,130,13);P(c,'#ff7a3d')
    c.lineWidth=4;c.beginPath()
    const a=t*T*s+1
    c.moveTo(128+s*92,130);c.lineTo(128+s*92+Math.cos(a)*9,130+S(a)*9);c.stroke()
    c.lineWidth=6
  }
  // head shell with flat shading
  rr(c,52,62,152,152,28);P(c,'#e3e8ec',0)
  c.save();c.clip()
  c.fillStyle='#c3ccd4';c.fillRect(178,40,40,200);c.fillRect(30,196,200,30)
  c.fillStyle='#f7f9fa';c.fillRect(64,72,100,7)
  c.restore()
  rr(c,52,62,152,152,28);P(c,0)
  // rivets
  c.fillStyle='#8e9aa6'
  for(const[x,y]of[[66,76],[190,76],[66,200],[190,200]]){O(c,x,y,4);c.fill()}
  // eyes
  const bl=t>.6&&t<.7?S((t-.6)/.1*Math.PI):0,gx=3*S(t*T)
  for(const s of[-1,1]){
    const x=128+s*34
    O(c,x,112,23);P(c,'#2a3138')
    O(c,x+gx,112,14);P(c,'#3cc8c0',0)
    O(c,x+gx,112,6);P(c,'#0e3b3a',0)
    O(c,x+gx+5,107,3.5);P(c,'#fff',0)
    if(bl>0){
      c.save();O(c,x,112,23);c.clip()
      c.fillStyle='#b9c3cc';c.fillRect(x-25,88,50,48*bl)
      c.beginPath();c.moveTo(x-25,88+48*bl);c.lineTo(x+25,88+48*bl);c.lineWidth=5;c.stroke()
      c.restore()
    }
    O(c,x,112,23);c.lineWidth=6;P(c,0)
  }
  // mouth scope screen
  rr(c,70,150,116,48,10);P(c,'#0d2117',0)
  c.save();c.clip()
  c.strokeStyle='#1e4630';c.lineWidth=1.5;c.beginPath()
  for(let x=82;x<186;x+=12)c.moveTo(x,150),c.lineTo(x,198)
  for(let y=162;y<198;y+=12)c.moveTo(70,y),c.lineTo(186,y)
  c.stroke()
  c.beginPath()
  for(let x=72;x<=184;x+=2){
    const v=(x-72)/112,w=S(v*Math.PI)**.8
    const y=174-w*(23*e*(S(v*21+t*T*7)*.6+S(v*47-t*T*11)*.3+S(v*9+t*T*3)*.3)+1.2*S(v*30-t*T*4))
    x>72?c.lineTo(x,y):c.moveTo(x,y)
  }
  c.strokeStyle='#2c8f52';c.lineWidth=8;c.stroke()
  c.strokeStyle='#9dffb6';c.lineWidth=3;c.stroke()
  c.restore()
  c.strokeStyle='#111';c.lineWidth=6
  rr(c,70,150,116,48,10);P(c,0)
  // neck collar
  rr(c,98,214,60,20,6);P(c,'#b9c3cc')
  c.lineWidth=4;c.beginPath()
  for(const x of[113,128,143])c.moveTo(x,218),c.lineTo(x,230)
  c.stroke()
}
