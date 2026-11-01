// emoticon angry with wedge-shaped ◣ ◢ glyph eyes and a box-drawn ╭━━╮ frown, huffing as ≈ jets and puffs of steam blast out of both sides of the head
export const frames=40,delay=50
const P=Math.PI,{sin,max,min,abs}=Math,K='#111',G='#9a9a9a'
const cl=x=>max(0,min(1,x)),ez=x=>(x=cl(x),x*x*(3-2*x))
// ≈ glyph: two drawn tildes, centred at the origin
const tilde=(c,y,w)=>{c.beginPath();c.moveTo(-w,y+3);c.bezierCurveTo(-w*.4,y-9,w*.1,y+9,w,y-3);c.stroke()}
const approx=(c,x,y,a,k)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(k,k);tilde(c,-6,14);tilde(c,7,14);c.restore()}
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
    // ≈ jets shoot off the vents while it blasts, white-backed so they read on dark pages
    if(bl>.1)for(const[w,K2]of[[16,'#fff'],[9,G]]){c.lineWidth=w;c.strokeStyle=K2;c.lineCap='round'
      approx(c,s*(58+26*bl),-82-22*bl,s*.6,.7+.5*bl)}
  }
  plume(c,B)
  c.beginPath();c.ellipse(0,0,96+3*bl-2*inh,96-3*bl+3*inh,0,0,2*P)
  c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=K;c.stroke()
  // glaring eyes as ◣ ◢ wedge glyphs, outer edge upright, slanting edge pointing in; they squint down on the blast
  for(const s of[-1,1]){
    const tp=-26+12*bl+2*inh
    c.beginPath();c.moveTo(s*54,tp);c.lineTo(s*54,8);c.lineTo(s*20,8);c.closePath()
    c.fillStyle=K;c.lineJoin='miter';c.lineWidth=4;c.strokeStyle=K;c.fill();c.stroke()
    c.beginPath();c.arc(s*44,-1+5*bl,3.5,0,2*P);c.fillStyle='#fff';c.fill()
  }
  c.lineJoin='round'
  // heavy brows in a hard V
  c.lineWidth=11;c.strokeStyle=K;c.lineCap='round'
  for(const s of[-1,1]){
    c.beginPath();c.moveTo(s*12,-34+6*bl-2*inh);c.lineTo(s*64,-58-3*inh+2*bl);c.stroke()
  }
  // ╭━━╮ frown drawn as one box-drawing stroke, legs dragged down on the blast
  const d=8*bl,y=50
  c.lineCap='butt';c.lineWidth=10;c.beginPath();c.moveTo(-35,y+24+d);c.lineTo(-35,y+13)
  c.arc(-22,y+13,13,P,-P/2);c.lineTo(22,y);c.arc(22,y+13,13,-P/2,0);c.lineTo(35,y+24+d);c.stroke()
}
