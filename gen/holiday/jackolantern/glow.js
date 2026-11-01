// carved jack-o'-lantern glowing, candlelight flickering through its face and warming the rind
export const frames=24,delay=60,rim=5
const K='#2a1810',P=Math.PI*2,S=Math.sin
export default(c,t)=>{
  const f=.62+.22*S(P*3*t)+.16*S(P*5*t+1),hx=128+6*S(P*2*t),
    E=(x,y,rx,ry)=>{c.beginPath();c.ellipse(x,y,rx,ry,0,0,P)},
    L=p=>{c.beginPath();p.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.closePath()},
    glow=(r,a)=>{for(const k of[1,.68,.4]){E(hx,156,r*k*1.2,r*k);c.fillStyle=`rgba(255,206,84,${a*.36})`;c.fill()}}
  c.strokeStyle=K;c.lineWidth=6
  // stem and curly vine
  c.beginPath();c.moveTo(118,80);c.quadraticCurveTo(116,50,132,30);c.lineTo(148,36);c.quadraticCurveTo(136,54,140,80);c.closePath()
  c.fillStyle='#7a6a2c';c.fill();c.save();c.clip();c.fillStyle='#57491c';c.fillRect(134,20,30,70);c.restore();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(118,66);c.bezierCurveTo(96,60,84,40,96,32);c.bezierCurveTo(106,26,112,40,102,44);c.stroke()
  // lobes back to front, rind lit from the face
  for(const[x,rx,ry]of[[66,46,72],[190,46,72],[94,50,78],[162,50,78],[128,50,84]]){
    const p=()=>E(x,150,rx,ry)
    c.save();p();c.clip()
    c.fillStyle='#a8400f';c.fill()
    E(x-7,144,rx,ry);c.fillStyle='#dc6a18';c.fill()
    c.fillStyle=`rgba(70,12,0,${.38*(1-f)})`;c.fillRect(0,0,256,256)
    glow(60+60*f,.95*f)
    c.strokeStyle='rgba(255,220,150,.75)';c.lineWidth=5;c.beginPath();c.ellipse(x-4,150,rx-14,ry-14,0,3.6,4.3);c.stroke()
    c.restore();c.strokeStyle=K;c.lineWidth=6;p();c.stroke()
  }
  // carved holes: flesh wall on the upper left, candlelight deeper in
  const holes=[
    [[72,140],[118,132],[96,96]],
    [[184,140],[138,132],[160,96]],
    [[116,162],[140,162],[128,144]],
    [[64,160],[92,178],[106,178],[106,192],[122,192],[122,180],[152,178],[166,176],[192,158],[180,192],[156,212],[150,212],[150,198],[134,198],[134,214],[106,212],[80,196]]]
  for(const h of holes){
    c.save();L(h);c.fillStyle='#f59a2e';c.fill();c.clip()
    c.translate(4,6);L(h);c.translate(-4,-6)
    c.fillStyle=`rgb(255,${150+50*f|0},${30+20*f|0})`;c.fill()
    E(hx,164,52+44*f,34+30*f);c.fillStyle='#ffdd55';c.fill()
    E(hx,166,18+34*f,12+22*f);c.fillStyle='#fff7cc';c.fill();c.restore()
    c.lineWidth=5;L(h);c.stroke()
  }
}
