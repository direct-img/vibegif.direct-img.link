// round microscope view inside a blood vessel: a silver medical nanobot capsule with a glowing cyan band and a spinning corkscrew tail swims right while tumbling red blood cells stream past
export const frames=24,delay=60
const P=Math.PI,K='#111',X=128,Y=128,R=110
const rng=s=>()=>(s=s*1664525+1013904223>>>0)/4294967296
const r=rng(7),cells=[...Array(22)].map((_,k)=>{
  const f=k>=10
  return{f,x:r()*280,y:f?(k%2?20+r()*80:160+r()*80):20+r()*220,s:f?15+r()*7:8+r()*4,a:r()*P,p:r()*P,m:(r()*3|0)-1}
})
const mod=(a,b)=>(a%b+b)%b
const rbc=(c,x,y,s,a,asp,f)=>{
  c.save();c.translate(x,y);c.rotate(a)
  c.beginPath();c.ellipse(0,0,s,s*asp,0,0,2*P)
  c.fillStyle=f?'#d3333d':'#e98a87';c.fill();c.lineWidth=f?3:2;c.strokeStyle=f?'#7a1520':'#b8545a';c.stroke()
  if(asp>.42){
    c.beginPath();c.ellipse(0,0,s*.5,s*asp*.48,0,0,2*P);c.fillStyle=f?'#ea6a6c':'#f2acaa';c.fill()
    if(f){c.beginPath();c.ellipse(-s*.45,-s*asp*.55,s*.22,s*asp*.12,-.3,0,2*P);c.fillStyle='#f6a3a0';c.fill()}
  }
  c.restore()
}
const wall=(c,top,u)=>{
  const sg=top?1:-1,y0=top?Y-R:Y+R,h=x=>16+6*Math.sin(2*P*(x+u)/140)+4*Math.sin(2*P*(x+u)/70+1)
  c.beginPath();c.moveTo(0,y0-sg*20)
  for(let x=0;x<=256;x+=4)c.lineTo(x,y0+sg*h(x))
  c.lineTo(256,y0-sg*20);c.closePath();c.fillStyle='#e49a8c';c.fill()
  c.beginPath();for(let x=0;x<=256;x+=4)c.lineTo(x,y0+sg*h(x))
  c.lineWidth=3;c.strokeStyle='#b9604f';c.stroke()
  c.beginPath();for(let x=0;x<=256;x+=4)c.lineTo(x,y0+sg*(h(x)-7))
  c.lineWidth=2;c.strokeStyle='#cf7c6c';c.stroke()
}
export default(c,t)=>{
  const T=2*P*t
  c.save();c.beginPath();c.arc(X,Y,R,0,2*P);c.clip()
  c.fillStyle='#f6dcd0';c.fillRect(0,0,256,256)
  // plasma flow streaks
  c.lineWidth=3;c.strokeStyle='#ecc0b2'
  for(const e of cells){const x=mod(e.x*1.7-560*t,280)-12;c.beginPath();c.moveTo(x,e.y*.9+12);c.lineTo(x+18+e.s,e.y*.9+12);c.stroke()}
  for(const e of cells.filter(e=>!e.f)){
    rbc(c,mod(e.x-280*t,280)-12,e.y+3*Math.sin(T+e.p),e.s,e.a+e.m*T,.4+.6*Math.abs(Math.cos(e.p+e.m*T)),0)
  }
  wall(c,1,280*t);wall(c,0,280*t+50)
  for(const e of cells.filter(e=>e.f)){
    rbc(c,mod(e.x-560*t,280)-12,e.y+4*Math.sin(T+e.p),e.s,e.a+e.m*T,.35+.65*Math.abs(Math.cos(e.p+e.m*T)),1)
  }
  // nanobot
  const by=Y+5*Math.sin(T),tilt=.06*Math.cos(T)
  c.save();c.translate(X+12,by);c.rotate(tilt);c.scale(1.3,1.3)
  // corkscrew tail: travelling wave, drawn as an outlined tube
  const tail=[...Array(31)].map((_,k)=>{const s=k/30;return[-40-s*50,(3+6*s)*Math.sin(2.5*2*P*s-4*T)]})
  c.beginPath();tail.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y))
  c.lineWidth=9;c.strokeStyle=K;c.stroke();c.lineWidth=3.5;c.strokeStyle='#c9d2da';c.stroke()
  // rear hub
  c.beginPath();c.roundRect(-44,-8,14,16,4);c.fillStyle='#8f9ba6';c.fill();c.lineWidth=4;c.strokeStyle=K;c.stroke()
  // fins, flapping a little
  for(const s of[-1,1]){
    const q=2*Math.sin(2*T+s)
    c.beginPath();c.moveTo(-4,s*15);c.lineTo(-28,s*(29+q));c.lineTo(-38,s*(28+q));c.lineTo(-30,s*12);c.closePath()
    c.fillStyle='#4fd8ea';c.fill();c.lineWidth=4;c.strokeStyle=K;c.stroke()
  }
  // body capsule with shading
  const body=()=>{c.beginPath();c.roundRect(-34,-17,74,34,17)}
  body();c.fillStyle='#e6ebf0';c.fill()
  c.save();body();c.clip();c.fillStyle='#a9b4bf';c.fillRect(-40,6,90,20);c.fillStyle='#fff';c.fillRect(-20,-12,40,4);c.restore()
  // glowing band, blinking dots
  c.fillStyle='#4fd8ea';c.fillRect(-12,-16,8,32)
  for(let k=0;k<3;k++){c.beginPath();c.arc(-24+k*5,0,1.8,0,2*P);c.fillStyle=(k+Math.floor(t*12))%3?'#55606a':'#ff4d5e';c.fill()}
  body();c.lineWidth=5;c.strokeStyle=K;c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(-12,-17);c.lineTo(-12,17);c.moveTo(-4,-17);c.lineTo(-4,17);c.stroke()
  // glass nose dome with a camera eye
  c.beginPath();c.arc(30,0,15,-P/2,P/2);c.closePath();c.fillStyle='#8fdcff';c.fill();c.lineWidth=4;c.stroke()
  c.beginPath();c.arc(34,0,5,0,2*P);c.fillStyle='#16324a';c.fill()
  c.beginPath();c.arc(32.5,-1.5,1.6,0,2*P);c.fillStyle='#fff';c.fill()
  c.beginPath();c.arc(30,0,10,-1.2,-.5);c.lineWidth=2.5;c.strokeStyle='#fff';c.stroke()
  c.restore()
  c.restore()
  // eyepiece ring
  c.beginPath();c.arc(X,Y,R+7,0,2*P);c.lineWidth=14;c.strokeStyle='#cfd6dc';c.stroke()
  c.save();c.beginPath();c.arc(X,Y,R+7,.1*P,.9*P);c.lineWidth=14;c.strokeStyle='#9aa6b1';c.stroke();c.restore()
  for(const rr of[R,R+14]){c.beginPath();c.arc(X,Y,rr,0,2*P);c.lineWidth=4;c.strokeStyle=K;c.stroke()}
  // glare
  c.beginPath();c.arc(X,Y,R-12,1.1*P,1.35*P);c.lineWidth=5;c.strokeStyle='#fff';c.stroke()
}
