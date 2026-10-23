// french fries in a red carton bobbing and wiggling one after another like a wave, salt specks drifting down
const{sin,PI,max}=Math,T=2*PI
export const frames=20,delay=70
const FY='#ffd43b',FD='#f59f00',CA='#ff6b6b',CB='#e03131',BL='#ffc9c9',PK='#ff8fab'
const FR=[[90,48],[118,40],[146,42],[172,52],[104,64],[132,58],[160,66]]
export default(c,t)=>{
  ;[[96,0],[138,.33],[164,.66]].forEach(([x,o])=>{const p=(t+o)%1;c.fillStyle='#fff';c.lineWidth=2.5;c.save();c.translate(x+4*sin(T*p*2),8+p*56);c.rotate(p*6);c.beginPath();c.rect(-3,-3,6,6);c.fill();c.stroke();c.restore()})
  c.lineWidth=7
  c.fillStyle=CB;c.beginPath();c.moveTo(60,128);c.quadraticCurveTo(128,100,196,128);c.lineTo(196,150);c.lineTo(60,150);c.closePath();c.fill();c.stroke()
  FR.forEach(([x,top],k)=>{
    const ph=T*t*2-k*.9,dy=-14*max(0,sin(ph)),r=(x-128)/420+.1*sin(ph)
    c.save();c.translate(x,150+dy);c.rotate(r);const L=150-top
    c.fillStyle=FY;c.beginPath();c.roundRect(-9,-L,18,L+30,4);c.fill()
    c.fillStyle=FD;c.fillRect(3,-L+4,6,L+24);c.beginPath();c.roundRect(-9,-L,18,8,4);c.fill()
    c.beginPath();c.roundRect(-9,-L,18,L+30,4);c.stroke()
    c.fillStyle='#fff';for(const[sx,sy]of[[-4,-L+18],[0,-L+34]])c.fillRect(sx,sy+(k%3)*4,3,3)
    c.restore()
  })
  c.fillStyle=CA;c.beginPath();c.moveTo(54,124);c.quadraticCurveTo(128,156,202,124);c.lineTo(180,236);c.lineTo(76,236);c.closePath();c.fill();c.stroke()
  c.strokeStyle=CB;c.lineWidth=5;c.beginPath();c.moveTo(68,150);c.quadraticCurveTo(128,176,188,150);c.stroke();c.strokeStyle='#111';c.lineWidth=7
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*24,186,6,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*24-2,184,2.2,0,T),c.fill()
  const mo=.55+.45*max(0,sin(T*t*4)),mouth=()=>{c.beginPath();c.moveTo(116,196);c.lineTo(140,196);c.bezierCurveTo(140,196+18*mo,116,196+18*mo,116,196);c.closePath()}
  c.fillStyle='#111';mouth();c.fill()
  c.save();mouth();c.clip();c.fillStyle=PK;c.beginPath();c.ellipse(128,196+14*mo,7,5,0,0,T);c.fill();c.restore()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,198,9,5,0,0,T),c.fill()
}
