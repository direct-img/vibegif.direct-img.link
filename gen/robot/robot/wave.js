// friendly little silver robot with a round head and glowing cyan eyes waving hello with one arm raised, three-finger hand wiggling, antenna bobbing, blinks once
export const frames=16,delay=70
const P=Math.PI,K='#111',M='#dfe5ea',D='#aab6c0',A='#f39a2b'
const tube=(c,pts,w,f)=>{
  c.beginPath();pts.forEach(([x,y],j)=>j?c.lineTo(x,y):c.moveTo(x,y))
  c.strokeStyle=K;c.lineWidth=w+9;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()
}
const blob=(c,fs,f)=>{
  for(const s of fs){c.beginPath();s();c.lineWidth=9;c.strokeStyle=K;c.stroke()}
  c.fillStyle=f;for(const s of fs){c.beginPath();s();c.fill()}
}
const dot=(c,x,y,r,f,w=4)=>{c.beginPath();c.arc(x,y,r,0,2*P);c.fillStyle=f;c.fill();c.lineWidth=w;c.strokeStyle=K;c.stroke()}
const rr=(c,x,y,w,h,r,f)=>{c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=f;c.fill();c.lineWidth=5;c.strokeStyle=K;c.stroke()}
// cel shade: fill shape, then a darker band on its right side clipped inside
const shade=(c,path,f,x0)=>{
  path();c.fillStyle=f;c.fill()
  c.save();path();c.clip();c.fillStyle=D;c.fillRect(x0,0,256,256);c.restore()
  path();c.lineWidth=5;c.strokeStyle=K;c.stroke()
}
export default(c,t)=>{
  const w=Math.sin(2*P*2*t),w2=Math.sin(2*P*2*t-1),bob=Math.sin(2*P*2*t-.6)
  const lean=w*.025,blink=Math.max(0,1-Math.abs(t-.62)*16)
  c.translate(128,246);c.rotate(lean*.4);c.translate(-128,-246)
  // legs and feet
  for(const x of[106,150]){
    rr(c,x-9,206,18,30,4,D)
    rr(c,x-19,232,38,14,7,M)
  }
  // hanging arm (screen left), small sway
  const hs=bob*3
  tube(c,[[84,154],[66,182+hs*.3],[64+hs,208]],11,D)
  dot(c,66,182+hs*.3,6,M)
  c.save();c.translate(64+hs,212);c.rotate(hs*.03)
  blob(c,[()=>c.roundRect(-9,-7,18,14,6),()=>c.roundRect(-9,0,6,12,3),()=>c.roundRect(3,0,6,12,3)],M)
  c.restore()
  // waving arm: shoulder -> elbow -> hand swings around elbow
  const ex=210,ey=128+w*2,a=-P/2+w*.5,hx=ex+34*Math.cos(a),hy=ey+34*Math.sin(a)
  tube(c,[[172,152],[ex,ey]],11,D)
  tube(c,[[ex,ey],[hx,hy]],11,D)
  dot(c,ex,ey,7,M)
  // hand: palm + three wiggling fingers + thumb, outlined as one blob
  c.save();c.translate(hx,hy);c.rotate(a+P/2)
  const hand=[()=>c.roundRect(-12,-10,24,18,7),()=>{c.save();c.translate(-12,-2);c.rotate(-.9);c.roundRect(-4,-12,8,12,4);c.restore()}]
  for(let k=-1;k<2;k++)hand.push(()=>{
    c.save();c.translate(k*7.5,-8);c.rotate(k*.22+Math.sin(2*P*4*t+k*1.3)*.2);c.roundRect(-4,-14,8,15,4);c.restore()
  })
  blob(c,hand,M)
  c.restore()
  // torso
  shade(c,()=>{c.beginPath();c.roundRect(78,138,100,76,18)},M,156)
  // chest panel: speaker slits + lights
  rr(c,94,154,46,30,6,'#2a3440')
  for(let k=0;k<3;k++){
    c.beginPath();c.arc(105+k*12,169,4,0,2*P)
    c.fillStyle=['#ff5d5d','#ffd23f','#5ee08c'][k];c.globalAlpha=(k+Math.floor(t*8))%3?1:.35;c.fill();c.globalAlpha=1
  }
  dot(c,160,162,7,A);dot(c,160,190,5,M,3)
  c.lineWidth=3;c.strokeStyle=K
  for(let k=0;k<3;k++){c.beginPath();c.moveTo(98+k*8,198);c.lineTo(98+k*8,206);c.stroke()}
  // neck
  rr(c,116,124,24,16,4,D)
  // antenna: springy stalk bobbing
  const aa=w2*.4,tx=128+30*Math.sin(aa),ty=45-30*Math.cos(aa)
  c.beginPath()
  for(let k=0;k<=24;k++){
    const u=k/24,bx=128+(tx-128)*u*u,by=46+(ty-46)*u,z=k%4<2?-1:1
    c.lineTo(bx+(k>2&&k<22?z*5:0),by)
  }
  c.lineWidth=3;c.strokeStyle=K;c.stroke()
  dot(c,tx,ty,9,A)
  c.beginPath();c.arc(tx-3,ty-3,2.5,0,2*P);c.fillStyle='#fff';c.fill()
  // ear bolts
  dot(c,80,88,10,A);dot(c,176,88,10,A)
  // head
  shade(c,()=>{c.beginPath();c.ellipse(128,86,48,42,0,0,2*P)},M,156)
  // visor screen
  rr(c,94,66,68,40,14,'#1d2833')
  // eyes
  const eh=12*(1-blink)+1.5
  c.fillStyle='#5fe3f0'
  for(const x of[112,144]){c.beginPath();c.ellipse(x,84,7,eh/2+2,0,0,2*P);c.fill()}
  if(blink<.5){
    c.fillStyle='#fff'
    for(const x of[110,142]){c.beginPath();c.arc(x,81,2.2,0,2*P);c.fill()}
  }
  // smile
  c.beginPath();c.arc(128,92,7,.2*P,.8*P);c.lineWidth=3;c.strokeStyle='#5fe3f0';c.stroke()
  // head gloss
  c.beginPath();c.ellipse(104,56,10,5,-.5,0,2*P);c.fillStyle='#fff';c.fill()
}
