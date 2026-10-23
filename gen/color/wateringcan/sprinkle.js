// watering can with a face tips forward and sprinkles a droopy sprout in a pot, which perks up, then gets thirsty again
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=80
const CAN='#4dabf7',CD='#1c7ed6',POT='#ff922b',PD='#e8590c',SOIL='#a9744f',LF='#69db7c',LD='#2f9e44',DROP='#a5d8ff',BL='#faa2c1'
const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
const sparkle=(c,x,y,s)=>{c.fillStyle='#fff9db';c.lineWidth=3.5;c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  const tip=sm((t-.04)/.14)-sm((t-.6)/.14),a=.5*tip,perk=sm((t-.34)/.2)-sm((t-.8)/.18)
  const PX=74,PY=112,rose=[PX+86*cos(a)+34*sin(a),PY+86*sin(a)-34*cos(a)]
  c.fillStyle=SOIL;c.beginPath();c.ellipse(190,190,38,7,0,0,T);c.fill();c.stroke()
  const tx=214-24*perk,ty=170-34*perk,qx=204-14*perk,qy=176-24*perk
  for(const[w,st]of[[11,'#111'],[5,LD]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(190,190),c.quadraticCurveTo(qx,qy,tx,ty),c.stroke()
  c.strokeStyle='#111'
  for(const[up,dn]of[[3.78,2.2],[-.6,.9]]){
    const th=dn+(up-dn)*perk,x=tx+15*cos(th),y=ty+15*sin(th)
    c.fillStyle=LF;c.lineWidth=5;c.beginPath();c.ellipse(x,y,15,8,th,0,T);c.fill();c.stroke()
    c.lineWidth=2.5;c.beginPath();c.moveTo(tx,ty);c.lineTo(x+8*cos(th),y+8*sin(th));c.stroke()
  }
  if(perk>.7){const s=10*(perk-.7)/.3;sparkle(c,166,132,s);sparkle(c,226,142,s*.7)}
  c.lineWidth=7;c.fillStyle=POT;c.beginPath();c.moveTo(154,204);c.lineTo(226,204);c.lineTo(216,246);c.lineTo(164,246);c.closePath();c.fill();c.stroke()
  c.fillStyle=PD;c.beginPath();c.roundRect(146,188,88,18,6);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(190+d*13,222,4,0,T),c.fill()
  c.lineWidth=3.5;c.beginPath();if(perk>.5)c.arc(190,227,6,.15*PI,.85*PI);else c.moveTo(184,232),c.quadraticCurveTo(190,227,196,232);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(190+d*24,230,5,3,0,0,T),c.fill()
  if(t>.18&&t<.74)for(let j=0;j<12;j++){
    const s0=.18+j*.04,u=(t-s0)/.12;if(u<0||u>1||s0>.62)continue
    const off=((j*5)%3-1)*6,x=rose[0]+off+22*u,y=rose[1]+4+(188-rose[1]-4)*u
    c.fillStyle=DROP;c.lineWidth=3;c.beginPath();c.moveTo(x,y-7);c.quadraticCurveTo(x+5,y,x,y+3);c.quadraticCurveTo(x-5,y,x,y-7);c.fill();c.stroke()
  }
  c.save();c.translate(PX,PY);c.rotate(a);c.lineWidth=7
  for(const[w,st]of[[15,'#111'],[7,CD]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.arc(-18,-30,22,PI*1.05,PI*1.95),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  c.fillStyle=CAN;c.beginPath();c.moveTo(30,4);c.lineTo(80,-30);c.lineTo(88,-20);c.lineTo(34,24);c.closePath();c.fill();c.stroke()
  c.save();c.translate(86,-32);c.rotate(-.6);c.fillStyle=CD;c.beginPath();c.roundRect(-6,-14,14,28,5);c.fill();c.stroke()
  c.fillStyle='#e7f5ff';for(const y of[-6,0,6])c.beginPath(),c.arc(8,y,1.8,0,T),c.fill();c.restore()
  c.fillStyle=CAN;c.beginPath();c.roundRect(-50,-32,86,72,16);c.fill();c.stroke()
  c.fillStyle=CD;c.beginPath();c.roundRect(-50,-32,86,14,[16,16,0,0]);c.fill();c.lineWidth=5;c.stroke()
  const happy=tip>.5
  c.fillStyle='#111';c.lineWidth=4
  if(happy)for(const d of[-1,1])c.beginPath(),c.arc(-7+d*14,4,5,PI*1.1,PI*1.9),c.stroke()
  else for(const d of[-1,1])c.beginPath(),c.arc(-7+d*14,2,4.5,0,T),c.fill()
  c.beginPath();c.arc(-7,12,7,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(-7+d*26,16,5,3,0,0,T),c.fill()
  c.restore()
}
