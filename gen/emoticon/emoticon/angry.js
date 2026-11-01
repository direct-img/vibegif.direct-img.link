// emoticon angry, glaring and huffing as puffs of steam blast out of both sides of the head
export const frames=40,delay=50
const P=Math.PI,{sin,max,min,abs}=Math,K='#111',G='#9a9a9a'
const cl=x=>max(0,min(1,x)),ez=x=>(x=cl(x),x*x*(3-2*x))
// steam plume: every blob outlined in black first, then all filled white, so they merge
const plume=(c,B)=>{
  c.fillStyle=K;for(const[x,y,r]of B){c.beginPath();c.arc(x,y,r+4,0,2*P);c.fill()}
  c.fillStyle='#fff';for(const[x,y,r]of B){c.beginPath();c.arc(x,y,r,0,2*P);c.fill()}
}
export default(c,t,i)=>{
  // two huffs per loop: breathe in, then blast
  const u=t*2%1,inh=ez(u/.2)*(1-ez((u-.2)/.06)),bl=max(0,1-abs(u-.27)/.12)
  // the blast rattles the head side to side
  c.translate(128+(i%2*2-1)*2.5*bl,134-4*inh+3*bl)
  // steam: a train of puffs per huff, shooting up and out of both sides of the head
  const B=[]
  for(const s of[-1,1]){
    for(let k=0;k<3;k++){
      const f=(u-.2-k*.07)/.6;if(f<=0||f>=1)continue
      const g=1-(1-f)**2.6,r=(17-4*k)*sin(P*f)**.5,x=s*(48+45*g),y=-78-14*g-10*sin(P*g)
      B.push([x,y,r],[x+s*r*.85,y+r*.3,r*.68],[x-s*r*.8,y+r*.35,r*.62],[x+s*r*.15,y-r*.6,r*.62])
    }
    // jet streaks at the vent while it blasts
    if(bl>.15){c.lineWidth=5;c.strokeStyle=G
      for(const o of[-12,12]){c.beginPath();c.moveTo(s*(58+o*.5),-74+o*.4);c.lineTo(s*(58+o*.5+20*bl),-74+o*.4-18*bl);c.stroke()}}
  }
  plume(c,B)
  c.beginPath();c.ellipse(0,0,96+3*bl-2*inh,96-3*bl+3*inh,0,0,2*P)
  c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=K;c.stroke()
  // glaring eyes, lids cut on a slant
  for(const s of[-1,1]){
    c.save();c.beginPath();c.moveTo(s*12,-9+6*bl);c.lineTo(s*64,-30+2*bl);c.lineTo(s*64,30);c.lineTo(s*12,30);c.clip()
    c.beginPath();c.arc(s*37,-4,16,0,2*P);c.fillStyle=K;c.fill()
    c.beginPath();c.arc(s*33,1,3.5,0,2*P);c.fillStyle='#fff';c.fill()
    c.restore()
  }
  // heavy brows in a hard V
  c.lineWidth=11;c.strokeStyle=K
  for(const s of[-1,1]){
    c.beginPath();c.moveTo(s*12,-24+6*bl-2*inh);c.lineTo(s*64,-50-3*inh+2*bl);c.stroke()
  }
  // clamped frown, corners dragged down on the blast
  const d=6*bl
  c.lineWidth=9
  c.beginPath();c.moveTo(-30,64+d);c.bezierCurveTo(-20,42,20,42,30,64+d);c.stroke()
}
