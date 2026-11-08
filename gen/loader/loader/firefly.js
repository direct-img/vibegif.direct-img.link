// glass jar with a golden lid and night-blue inside, three little fireflies drifting about over a grass tuft and taking turns to blink their tails bright yellow-green, each glow lighting up the jar around it, bold black outlines
export const frames=36,delay=50
const{sin,cos,min,max,round,PI}=Math,T=2*PI
const cl=x=>min(1,max(0,x))
const hx=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16)),BG=hx('#2c4a6e'),GL=hx('#d8ff60')
const mix=(a,b,f)=>'rgb('+a.map((v,i)=>round(v+(b[i]-v)*f))+')'
// jar silhouette
const jar=c=>{
  c.beginPath(),c.moveTo(74,62),c.lineTo(74,70),c.quadraticCurveTo(54,74,54,98),c.lineTo(54,202),c.quadraticCurveTo(54,228,80,228)
  c.lineTo(176,228),c.quadraticCurveTo(202,228,202,202),c.lineTo(202,98),c.quadraticCurveTo(202,74,182,70),c.lineTo(182,62),c.closePath()
}
// flies: centre, drift radii, phase
const F=[[98,106,22,10,0],[160,126,18,14,2.1],[124,172,28,10,4.2]]
export default(c,t)=>{
  const B=F.map((_,k)=>sin(PI*cl(((t+.16-k/3+1)%1)/.36))**2),P=F.map(([x,y,ax,ay,p],k)=>[x+ax*sin(T*t+p),y+ay*sin(2*T*t+p*1.3),cos(T*t+p)])
  // inside of the jar, tinted a step brighter while any fly is lit
  c.save(),jar(c),c.fillStyle=mix(BG,GL,round(max(...B)*2)/2*.07),c.fill(),c.clip()
  P.forEach(([x,y],k)=>{const b=B[k];if(b>.05)[[34,.18],[23,.36],[14,.6]].forEach(([r,f])=>{c.fillStyle=mix(BG,GL,f),c.beginPath(),c.arc(x,y,r*(.4+.6*b),0,T),c.fill()})})
  // grass tuft
  c.lineWidth=11;for(const[x,h,l]of[[96,46,-14],[112,64,-4],[128,40,10],[146,56,16],[162,36,22]])c.beginPath(),c.moveTo(x,232),c.quadraticCurveTo(x,232-h*.6,x+l,232-h),c.stroke()
  c.lineWidth=5,c.strokeStyle='#5aa65c';for(const[x,h,l]of[[96,46,-14],[112,64,-4],[128,40,10],[146,56,16],[162,36,22]])c.beginPath(),c.moveTo(x,232),c.quadraticCurveTo(x,232-h*.6,x+l,232-h),c.stroke()
  c.strokeStyle='#111'
  // fireflies, tails lit in turn
  P.forEach(([x,y,d],k)=>{
    const b=round(B[k]*4)/4
    c.save(),c.translate(x,y),c.scale(d<0?-1.2:1.2,1.2),c.rotate(.18*sin(T*t*2+k)),c.lineWidth=3.2
    c.fillStyle=mix(hx('#6f7a3c'),hx('#f0ff7a'),b),c.beginPath(),c.ellipse(-9,2,10,8,.2,0,T),c.stroke(),c.fill()
    c.fillStyle='#4a3a30',c.beginPath(),c.ellipse(4,0,8,7,0,0,T),c.stroke(),c.fill()
    c.beginPath(),c.moveTo(10,-4),c.quadraticCurveTo(15,-12,19,-11),c.moveTo(9,-2),c.quadraticCurveTo(17,-6,20,-3),c.lineWidth=2.5,c.stroke()
    c.fillStyle='#e4eefb',c.lineWidth=3,c.beginPath(),c.ellipse(-4,-8,9,5,-.5+.25*sin(T*12*t+k),0,T),c.stroke(),c.fill()
    c.fillStyle='#fff',c.beginPath(),c.arc(8,-2,2.4,0,T),c.fill()
    c.restore()
  })
  c.restore()
  // glass shine, outline, lid
  c.lineWidth=7,c.strokeStyle='#cfe6ff',c.beginPath(),c.moveTo(68,112),c.lineTo(68,170),c.stroke(),c.beginPath(),c.moveTo(68,186),c.lineTo(68,196),c.stroke()
  c.strokeStyle='#111',c.lineWidth=8,jar(c),c.stroke()
  c.lineWidth=7,c.fillStyle='#e0a34e',c.beginPath(),c.roundRect(64,32,128,32,8),c.stroke(),c.fill()
  c.lineWidth=3.5,c.strokeStyle='#a8692a',c.beginPath();for(let x=78;x<190;x+=12)c.moveTo(x,38),c.lineTo(x,58);c.stroke()
  c.strokeStyle='#111',c.lineWidth=7,c.beginPath(),c.roundRect(64,32,128,32,8),c.stroke()
}
