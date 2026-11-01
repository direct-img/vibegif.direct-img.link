// retro red tin toy robot waddling side to side on the spot, a brass wind-up key in its side turning, accordion arms with pincer hands swinging, chest gauge needle twitching, springy antenna
export const frames=24,delay=70
const P=Math.PI*2
export default(c,t)=>{
  const rr=(x,y,w,h,r,f)=>{c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=f;c.fill();c.stroke()}
  const ci=(x,y,r,f)=>{c.beginPath();c.arc(x,y,r,0,P);c.fillStyle=f;c.fill();c.stroke()}
  const ph=P*2*t,a=Math.sin(ph)*.1,X=118
  // pivot on whichever foot is planted
  const px=X+(a>0?44:-44)
  c.translate(px,240);c.rotate(a);c.translate(-px,-240)
  // legs + feet
  for(const s of[-1,1]){
    rr(X+s*24-11,192,22,38,5,'#aab3bd')
    c.lineWidth=3;for(const y of[204,214])c.beginPath(),c.moveTo(X+s*24-9,y),c.lineTo(X+s*24+9,y),c.stroke()
    c.lineWidth=7
    rr(X+s*26-21,224,42,16,6,'#3c434d')
  }
  // wind-up key on the right side
  const k=P*t,q=Math.cos(k*2)
  c.beginPath();c.moveTo(X+50,168);c.lineTo(X+96,168)
  c.lineWidth=14;c.stroke();c.lineWidth=7;c.strokeStyle='#b8892a';c.stroke();c.strokeStyle='#111'
  c.save();c.translate(X+104,168)
  c.beginPath()
  const sy=Math.max(Math.abs(q),.12)*Math.sign(q||1)
  for(const s of[-1,1]){
    c.moveTo(-6,0);c.bezierCurveTo(-30,s*42*sy,30,s*42*sy,6,0)
  }
  c.closePath()
  c.fillStyle=q>0?'#f2c14e':'#c99a2e';c.fill();c.stroke()
  c.beginPath();c.arc(0,0,5,0,P);c.fillStyle='#8a6a1f';c.fill();c.stroke()
  if(q>.3){c.fillStyle='#fff3c4';c.beginPath();c.ellipse(-6,-20*sy,3,7*sy,0,0,P);c.fill()}
  c.restore()
  // body
  rr(X-56,118,112,84,16,'#d8432f')
  c.save();c.beginPath();c.roundRect(X-56,118,112,84,16);c.clip()
  c.fillStyle='#a83224';c.fillRect(X+34,118,30,84)
  c.fillStyle='#f2c14e';c.fillRect(X-60,184,120,10)
  c.fillStyle='#f07a62';c.fillRect(X-46,124,7,52)
  c.restore()
  c.beginPath();c.roundRect(X-56,118,112,84,16);c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(X-56,184);c.lineTo(X+56,184);c.moveTo(X-56,194);c.lineTo(X+56,194);c.stroke();c.lineWidth=7
  // chest panel: gauge + buttons
  rr(X-34,130,68,46,9,'#f4ead2')
  ci(X-15,153,13,'#fff')
  const n=-.9+Math.sin(ph*3)*.35+Math.sin(ph*.5)*.5
  c.lineWidth=3.5;c.beginPath();c.moveTo(X-15,153);c.lineTo(X-15+Math.sin(n)*10,153-Math.cos(n)*10);c.stroke()
  c.lineWidth=2.5;for(let j=-2;j<=2;j++){const b=j*.55;c.beginPath();c.moveTo(X-15+Math.sin(b)*9,153-Math.cos(b)*9);c.lineTo(X-15+Math.sin(b)*12,153-Math.cos(b)*12);c.stroke()}
  c.lineWidth=5
  const L=Math.floor(t*12)%3
  ;['#3fa34d','#f2c14e','#3a7bd5'].forEach((f,j)=>{c.beginPath();c.arc(X+11+j%2*12,141+j*11,5,0,P);c.fillStyle=j==L?f:'#7d7466';c.fill();c.stroke()})
  c.lineWidth=7
  for(const[x,y]of[[X-46,128],[X+46,128],[X-46,174],[X+46,174]]){c.fillStyle='#111';c.beginPath();c.arc(x,y,2.5,0,P);c.fill()}
  // head, wobbling a little behind the body
  c.save();c.translate(X,114);c.rotate(-a*.6);c.translate(-X,-114)
  rr(X-15,104,30,16,4,'#7f8995')
  // spring antenna
  const w=-Math.sin(ph-.9)*14
  c.lineWidth=4;c.beginPath();c.moveTo(X,44)
  for(let j=1;j<=8;j++){const u=j/8;c.lineTo(X+w*u*u+(j%2?-6:6)*(j<8),44-u*28)}
  c.stroke();c.lineWidth=7
  ci(X+w,12,7,'#e3382a');c.fillStyle='#ffd0c8';c.beginPath();c.arc(X+w-2,10,2.2,0,P);c.fill()
  for(const s of[-1,1]){c.beginPath();c.moveTo(X+s*46,62);c.lineTo(X+s*58,58);c.lineTo(X+s*58,92);c.lineTo(X+s*46,88);c.closePath();c.fillStyle='#f2c14e';c.fill();c.stroke()}
  rr(X-48,42,96,68,20,'#d5dbe1')
  c.save();c.beginPath();c.roundRect(X-48,42,96,68,20);c.clip()
  c.fillStyle='#b4bdc7';c.fillRect(X+30,42,20,68)
  c.fillStyle='#f4f6f8';c.fillRect(X-38,48,40,6)
  c.restore()
  c.beginPath();c.roundRect(X-48,42,96,68,20);c.stroke()
  // eyes look the way it leans
  for(const s of[-1,1]){
    ci(X+s*20,72,13,'#fdf6e3')
    c.fillStyle='#111';c.beginPath();c.arc(X+s*20+a*40,73,6,0,P);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(X+s*20+a*40-2,71,2,0,P);c.fill()
  }
  rr(X-22,92,44,12,4,'#fdf6e3')
  c.lineWidth=3;for(let j=-2;j<=2;j++){c.beginPath();c.moveTo(X+j*8,92);c.lineTo(X+j*8,104);c.stroke()}
  c.lineWidth=7
  c.restore()
  // accordion arms with pincers
  for(const s of[-1,1]){
    const r=-s*(.22+Math.sin(ph+(s>0?Math.PI:0))*.18)
    c.save();c.translate(X+s*58,132);c.rotate(r)
    for(let j=0;j<4;j++)rr(-9,j*11-6,18,13,5,j%2?'#aab3bd':'#c9d0d7')
    c.fillStyle='#d8432f';c.beginPath();c.arc(0,0,11,0,P);c.fill();c.stroke()
    c.translate(0,46)
    for(const[w,f]of[[14,'#111'],[7,'#7f8995']]){
      c.lineWidth=w;c.strokeStyle=f
      c.beginPath();c.arc(-6,10,10,-1.2,1.9);c.stroke()
      c.beginPath();c.arc(6,10,10,Math.PI-1.9,Math.PI+1.2,1);c.stroke()
    }
    c.lineWidth=7;c.strokeStyle='#111'
    ci(0,0,7,'#7f8995')
    c.restore()
  }
}
