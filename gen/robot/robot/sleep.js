// sleeping robot sitting slumped on the floor, head drooped with closed eyes on its visor, slow breathing, droopy antenna, low battery light blinking red on its chest and Zzz floating up
export const frames=24,delay=100
const T=Math.PI*2
const LT='#b4cdea',SH='#84a5cc',DK='#1b2433'
const sb=(c,x,y,w,h,r,a=LT,b=SH)=>{
  const p=()=>{c.beginPath();c.roundRect(x,y,w,h,r)}
  p();c.fillStyle=b;c.fill();c.save();c.clip();c.beginPath();c.roundRect(x-6,y-5,w-2,h,r);c.fillStyle=a;c.fill();c.restore();p();c.stroke()
}
const disc=(c,x,y,r,f)=>{c.beginPath();c.arc(x,y,r,0,T);c.fillStyle=f;c.fill();c.stroke()}
const tube=(c,p,w,col)=>{
  for(const[lw,s]of[[w+7,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();p.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}
  c.lineWidth=4.5;c.strokeStyle='#111'
}
export default(c,t,i)=>{
  const br=Math.sin(T*t),hy=4*br,bat=i%8<4
  c.lineWidth=4.5
  c.fillStyle='#8b939c';c.beginPath();c.ellipse(128,228,84,8,0,0,T);c.fill()
  // limp arms, hands resting on the floor
  for(const s of[-1,1]){
    const sx=128+s*40,sy=126+hy*.4
    tube(c,[[sx,sy],[sx+s*12,sy+36],[sx+s*20,sy+66]],10,'#9fb9d8')
    disc(c,sx+s*12,sy+36,6,'#5d6b7d')
    c.save();c.translate(sx+s*22,214);c.rotate(s*.3);sb(c,-12,-10,24,18,8);c.restore()
  }
  // torso, breathing
  c.save();c.translate(128,186);c.scale(1+br*.012,1+br*.025);c.translate(-128,-186)
  sb(c,88,110,80,78,20)
  for(const x of[88,168])disc(c,x,126,7,'#5d6b7d')
  // low battery gauge
  c.beginPath();c.roundRect(108,136,36,18,4);c.fillStyle=DK;c.fill();c.stroke()
  c.beginPath();c.roundRect(144,141,5,8,2);c.fillStyle='#111';c.fill()
  if(bat){c.fillStyle='#ff4a3d';c.fillRect(112,140,7,10)}
  c.lineWidth=3.5;c.beginPath();c.moveTo(110,168);c.lineTo(146,168);c.moveTo(114,176);c.lineTo(142,176);c.stroke();c.lineWidth=4.5
  c.restore()
  // legs stretched toward us, soles up
  for(const s of[-1,1]){
    const x=128+s*24
    sb(c,x-14,176,28,30,8,'#9fb9d8','#7894b7')
    c.save();c.translate(x+s*4,208);c.rotate(s*.18)
    sb(c,-18,-20,36,40,14,'#5d6b7d','#465263')
    c.lineWidth=3;c.beginPath();for(const y of[-8,0,8]){c.moveTo(-10,y);c.lineTo(10,y)}c.stroke();c.lineWidth=4.5
    c.restore()
  }
  // drooped head
  c.save();c.translate(122,94+hy);c.rotate(-.27+br*.03)
  sb(c,-6,8,12,10,3,'#5d6b7d','#465263')
  for(const s of[-1,1])sb(c,s*42-6,-12,12,24,5,'#5d6b7d','#465263')
  // antenna flops over to the side
  c.lineWidth=10;c.beginPath();c.moveTo(6,-28);c.quadraticCurveTo(4,-60,-26,-52+br*2);c.stroke()
  c.lineWidth=4;c.strokeStyle='#9fb9d8';c.stroke();c.strokeStyle='#111';c.lineWidth=4.5
  disc(c,-28,-50+br*2,7,i%12<2?'#ff6a5e':'#7a3a36')
  sb(c,-40,-30,80,60,18)
  c.beginPath();c.roundRect(-30,-18,60,26,11);c.fillStyle=DK;c.fill();c.stroke()
  c.lineWidth=3.5;c.strokeStyle='#5fd0ff'
  for(const x of[-14,14]){c.beginPath();c.arc(x,-7,7,.3,Math.PI-.3);c.stroke()}
  c.strokeStyle='#111';c.lineWidth=3.5
  const m=2.5+1.5*Math.max(0,br)
  c.beginPath();c.ellipse(0,18,5,m,0,0,T);c.fillStyle=DK;c.fill();c.stroke()
  c.restore()
  // Zzz drifting up
  const zs=[0,1,2].map(k=>{const u=(t+k/3)%1;return[(3+u*8)*Math.min(1,(1-u)*6,u*12),150+u*78+Math.sin(u*T)*4,82-u*72]}).filter(z=>z[0]>2)
  for(const[w,col]of[[6,'#111'],[0,'#fff']])for(const[s,x,y]of zs){
    c.beginPath();c.moveTo(x-s,y-s);c.lineTo(x+s,y-s);c.lineTo(x-s,y+s);c.lineTo(x+s,y+s)
    c.lineWidth=s*.45+w;c.strokeStyle=col;c.stroke()
  }
}
