// robot in a yellow welding helmet running a weld bead along a steel plate seam, white-hot arc flash, glowing bead cooling from yellow to red to grey, sparks showering and bouncing
export const frames=24,delay=50
const P=Math.PI*2
const h=n=>{n=Math.sin(n*127.1+311.7)*43758.5453;return n-Math.floor(n)}
const bar=(c,a,b,w,col)=>{
  c.beginPath();c.moveTo(...a);c.lineTo(...b)
  c.strokeStyle='#111';c.lineWidth=w+7;c.stroke();c.strokeStyle=col;c.lineWidth=w;c.stroke()
}
const AX=176,AY=192
export default(c,t,i)=>{
  const sc=t*48,wx=AX+2*Math.cos(P*t*6),wy=AY+1.2*Math.sin(P*t*6)
  // robot torso (behind the plate)
  c.beginPath();c.roundRect(34,96,72,110,18);c.fillStyle='#b9c3cd';c.fill()
  c.save();c.clip();c.fillStyle='#96a2ae';c.fillRect(34,96,16,120);c.fillStyle='#d4dbe2';c.fillRect(84,96,22,120);c.restore()
  c.lineWidth=7;c.stroke()
  c.beginPath();c.roundRect(52,120,30,22,5);c.fillStyle='#2a3038';c.fill();c.lineWidth=4;c.stroke()
  for(let k=0;k<3;k++){c.fillStyle=k==i%3?'#ffb02e':'#6b4a1a';c.fillRect(57+k*8,128,5,7)}
  // hose from back to torch
  c.beginPath();c.moveTo(40,150);c.bezierCurveTo(10,200,130,120,148,150);c.strokeStyle='#111';c.lineWidth=9;c.stroke();c.strokeStyle='#3a414a';c.lineWidth=4;c.stroke()
  // neck + welding helmet
  c.strokeStyle='#111'
  c.beginPath();c.roundRect(62,86,22,14,3);c.fillStyle='#4b5560';c.fill();c.lineWidth=5;c.stroke()
  c.beginPath();c.moveTo(46,58);c.quadraticCurveTo(48,26,82,26);c.quadraticCurveTo(110,26,116,54);c.lineTo(120,82);c.quadraticCurveTo(120,92,108,92);c.lineTo(56,92);c.quadraticCurveTo(44,90,46,74);c.closePath()
  c.fillStyle='#f2c230';c.fill();c.save();c.clip();c.fillStyle='#d49c1c';c.fillRect(40,74,90,30);c.fillStyle='#fde58a';c.fillRect(54,30,10,30);c.restore()
  c.lineWidth=7;c.stroke()
  c.beginPath();c.arc(64,60,7,0,P);c.fillStyle='#4b5560';c.fill();c.lineWidth=4;c.stroke()
  // dark visor glass catching the arc light
  const fl=.6+.4*h(i*7)
  c.beginPath();c.roundRect(90,44,30,30,6);c.fillStyle='#1b2a1f';c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle=`rgb(${120+130*fl|0},${70+90*fl|0},20)`;c.beginPath();c.arc(108,62,4+fl*2,0,P);c.fill()
  c.fillStyle='#4a6a50';c.fillRect(95,49,4,18)
  // arm to torch
  const sh=[86,118],el=[122,150],hd=[146+(wx-AX)*.6,164+(wy-AY)*.6]
  bar(c,sh,el,13,'#9aa6b2');bar(c,el,hd,11,'#9aa6b2')
  c.beginPath();c.arc(...el,7,0,P);c.fillStyle='#4b5560';c.fill();c.lineWidth=4;c.stroke()
  c.beginPath();c.arc(...sh,10,0,P);c.fillStyle='#f2c230';c.fill();c.lineWidth=5;c.stroke()
  // plate: top surface + front face
  c.beginPath();c.moveTo(24,180);c.lineTo(240,180);c.lineTo(232,206);c.lineTo(16,206);c.closePath()
  c.fillStyle='#aab3bc';c.fill();c.lineWidth=6;c.stroke()
  c.beginPath();c.moveTo(16,206);c.lineTo(232,206);c.lineTo(232,222);c.lineTo(16,222);c.closePath()
  c.fillStyle='#78838e';c.fill();c.stroke()
  c.save();c.beginPath();c.rect(19,183,212,21);c.clip()
  // scrolling scuffs on the plate so it reads as moving
  c.strokeStyle='#939da7';c.lineWidth=2
  for(let x=-sc%48-48;x<260;x+=48){c.beginPath();c.moveTo(x+20,185);c.lineTo(x+34,185);c.moveTo(x+8,201);c.lineTo(x+16,201);c.stroke()}
  // open seam ahead of the torch
  c.strokeStyle='#2a3038';c.lineWidth=3;c.beginPath();c.moveTo(AX,193);c.lineTo(240,193);c.stroke()
  // weld bead ripples, hot near the arc
  for(let x=AX-(sc%6)-6*30;x<=AX-2;x+=6){
    const d=AX-x,col=d<10?'#fff3c4':d<22?'#ffd04a':d<40?'#ff8a2a':d<62?'#d2461f':d<90?'#7a3a30':'#8a939c'
    c.beginPath();c.ellipse(x,193,5,5,0,0,P);c.fillStyle=col;c.fill();c.strokeStyle=d<62?'#8a2a10':'#5a6068';c.lineWidth=1.5;c.stroke()
  }
  c.restore()
  // torch
  const ang=Math.atan2(wy-hd[1],wx-hd[0])
  c.save();c.translate(...hd);c.rotate(ang)
  c.beginPath();c.roundRect(-12,-8,24,16,5);c.fillStyle='#2a3038';c.fill();c.strokeStyle='#111';c.lineWidth=4;c.stroke()
  const ln=Math.hypot(wx-hd[0],wy-hd[1])
  c.beginPath();c.moveTo(10,-5);c.lineTo(ln-9,-4);c.lineTo(ln-9,4);c.lineTo(10,5);c.closePath();c.fillStyle='#c9862a';c.fill();c.stroke()
  c.restore()
  // arc light tinting everything already drawn
  c.globalCompositeOperation='source-atop'
  const g=c.createRadialGradient(wx,wy,2,wx,wy,70+10*fl)
  g.addColorStop(0,`rgba(255,240,200,${.55*fl})`);g.addColorStop(.4,`rgba(255,170,60,${.22*fl})`);g.addColorStop(1,'rgba(255,140,40,0)')
  c.fillStyle=g;c.fillRect(0,0,256,256)
  c.globalCompositeOperation='source-over'
  // sparks: thrown up, fall, one bounce on the plate
  const G=1000
  for(let k=0;k<64;k++){
    const e=k/64,age=((t-e)%1+1)%1,life=.18+.22*h(k)
    if(age>life)continue
    const a=-Math.PI*(k%3?.06+.6*h(k+50):.1+.85*h(k+50)),v=200+230*h(k+90),vx=v*Math.cos(a),vy=v*Math.sin(a)
    const pos=s=>{
      const th=-2*vy/G
      if(s<th)return[wx+vx*s,wy+vy*s+G*s*s/2]
      const u=s-th,x0=wx+vx*th
      return[x0+vx*.5*u,wy+vy*.3*u+G*u*u/2]
    }
    const p=pos(age),q=pos(Math.max(0,age-.05)),f=age/life
    c.beginPath();c.moveTo(...q);c.lineTo(...p)
    c.strokeStyle=f<.3?'#fffbe0':f<.65?'#ffd23f':'#ff7a1f';c.lineWidth=f<.5?3.2:2.4;c.stroke()
  }
  // arc flash star
  c.fillStyle='#fff';c.strokeStyle='#bfefff';c.lineWidth=2.5
  for(let k=0;k<8;k++){
    const a=k*P/8+h(i)*.4,r=(k%2?9:16)*(.7+.5*h(i*8+k))
    c.beginPath();c.moveTo(wx,wy);c.lineTo(wx+r*Math.cos(a),wy+r*Math.sin(a));c.stroke()
  }
  c.beginPath();c.arc(wx,wy,5+2*fl,0,P);c.fillStyle='#e8fbff';c.fill()
  c.beginPath();c.arc(wx,wy,3,0,P);c.fillStyle='#fff';c.fill()
}
