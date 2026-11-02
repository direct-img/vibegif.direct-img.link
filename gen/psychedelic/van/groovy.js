// hippie camper van with wavy rainbow side stripes, daisies and a peace sign, bouncing as it cruises right with flower hubcaps spinning and hearts puffing from the exhaust
export const frames=20,delay=70
const T=Math.PI*2,{sin,cos,PI}=Math,P=['#ff2e93','#ff7a1a','#ffd21f','#3ddc6a','#1ec8ff','#7b5cff']
const heart=(c,x,y,s)=>{
  c.beginPath()
  c.moveTo(x,y+s*.9)
  c.bezierCurveTo(x-s*1.4,y,x-s*.9,y-s,x,y-s*.35)
  c.bezierCurveTo(x+s*.9,y-s,x+s*1.4,y,x,y+s*.9)
  c.fill()
  c.stroke()
}
const daisy=(c,x,y,r,a)=>{
  c.fillStyle='#fff'
  for(let k=0;k<6;k++){
    const b=a+k*T/6
    c.beginPath()
    c.ellipse(x+r*.6*cos(b),y+r*.6*sin(b),r*.5,r*.3,b,0,T)
    c.fill()
    c.stroke()
  }
  c.fillStyle='#ffd21f'
  c.beginPath()
  c.arc(x,y,r*.3,0,T)
  c.fill()
  c.stroke()
}
export default(c,t)=>{
  const dy=-2.5-2.5*sin(T*t*2),body=()=>{
    c.beginPath()
    c.moveTo(56,192)
    c.quadraticCurveTo(44,192,44,180)
    c.lineTo(44,104)
    c.bezierCurveTo(44,82,58,72,80,72)
    c.lineTo(196,72)
    c.bezierCurveTo(226,72,240,100,240,140)
    c.lineTo(240,180)
    c.quadraticCurveTo(240,192,228,192)
    c.closePath()
  },sw=x=>126+Math.max(0,x-190)**2/80
  // road dashes
  c.strokeStyle='#9a8fb0'
  c.lineWidth=5
  for(let d=0;d<4;d++){
    const x=(d*80-t*80+320)%320-40
    c.beginPath()
    c.moveTo(x,230)
    c.lineTo(x+22,230)
    c.stroke()
  }
  c.strokeStyle='#111'
  // exhaust hearts
  c.lineWidth=3
  for(let j=0;j<3;j++){
    const p=(t+j/3)%1
    c.fillStyle=P[j*2]
    heart(c,50-p*30+7*sin(p*T),190-p*160,14*sin(PI*p**.7)+1)
  }
  c.save()
  c.translate(248,222)
  c.scale(.9,.9)
  c.translate(-248,-222)
  c.save()
  c.translate(0,dy)
  c.lineWidth=7
  // arches
  c.fillStyle='#2a1b3d'
  for(const x of[86,196]){
    c.beginPath()
    c.arc(x,192,29,PI,T)
    c.fill()
  }
  // upper body
  c.fillStyle='#fff3d1'
  body()
  c.fill()
  // stripes
  c.save()
  body()
  c.clip()
  c.beginPath()
  c.moveTo(0,256)
  for(let x=0;x<=256;x+=4)c.lineTo(x,sw(x))
  c.lineTo(256,256)
  c.clip()
  for(let k=0;k<9;k++){
    c.fillStyle=P[k%6]
    c.beginPath()
    c.moveTo(0,256)
    for(let x=0;x<=256;x+=4)c.lineTo(x,sw(x)+k*9.5+3.5*sin(x*.055+T*t+k*.35)-6)
    c.lineTo(256,256)
    c.fill()
  }
  c.lineWidth=4
  daisy(c,96,160,26,t*T/3)
  daisy(c,150,170,18,-t*T/3)
  c.restore()
  // windows
  c.lineWidth=5
  c.fillStyle='#a8e6ff'
  for(const x of[58,104,150]){
    c.beginPath()
    c.roundRect(x,84,38,30,7)
    c.fill()
    c.stroke()
  }
  c.beginPath()
  c.moveTo(198,84)
  c.lineTo(212,84)
  c.quadraticCurveTo(228,88,232,114)
  c.lineTo(198,114)
  c.closePath()
  c.fill()
  c.stroke()
  c.strokeStyle='#fff'
  c.lineWidth=4
  for(const x of[64,110,156,204]){
    c.beginPath()
    c.moveTo(x+4,90)
    c.lineTo(x,98)
    c.stroke()
  }
  c.strokeStyle='#111'
  // peace sign
  c.lineWidth=4
  c.fillStyle='#fff'
  c.beginPath()
  c.arc(212,160,15,0,T)
  c.fill()
  c.stroke()
  c.beginPath()
  c.moveTo(212,147)
  c.lineTo(212,173)
  c.moveTo(212,160)
  c.lineTo(202,169)
  c.moveTo(212,160)
  c.lineTo(222,169)
  c.stroke()
  // headlight + bumpers
  c.fillStyle='#ffe96b'
  c.beginPath()
  c.ellipse(238,132,6,10,0,0,T)
  c.fill()
  c.stroke()
  c.lineWidth=7
  body()
  c.stroke()
  c.fillStyle='#d9d4e6'
  c.lineWidth=4
  c.beginPath()
  c.roundRect(222,186,26,9,4)
  c.roundRect(36,186,26,9,4)
  c.fill()
  c.stroke()
  c.restore()
  // wheels
  c.lineWidth=5
  for(const x of[86,196]){
    c.fillStyle='#1a1226'
    c.beginPath()
    c.arc(x,196,23,0,T)
    c.fill()
    c.stroke()
    c.lineWidth=3
    daisy(c,x,196,16,t*PI)
    c.lineWidth=5
  }
  c.restore()
}
