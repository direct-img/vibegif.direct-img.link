// office worker typing, the printer bursts into flames, he glances at it, looks at you, and quietly rolls his chair away to an identical desk
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=30,delay=90,rim=3
const cl=u=>min(1,max(0,u)),io=u=>(u=cl(u),u<.5?2*u*u:1-2*(1-u)**2),lp=(a,b,u)=>a+(b-a)*u
const WALL='#d3f9d8',FLOOR='#b2f2bb',DESK='#e599f7',DD='#be4bdb',PR='#dee2e6',SKIN='#ffd3b0',HAIR='#343a40',SHIRT='#ffd43b',TIE='#4c6ef5',PANT='#495057',CHAIR='#4263eb',FIRE='#ff922b',FY='#ffe066'
const flame=(c,x,y,s,k)=>{c.save();c.translate(x,y);c.scale(s*(1+.08*sin(k*2.3)),s*(1+.15*sin(k*3.1)));c.fillStyle=FIRE;c.beginPath();c.moveTo(-16,0);c.quadraticCurveTo(-22,-20,-8,-36);c.quadraticCurveTo(-6,-22,0,-26);c.quadraticCurveTo(2,-44,12,-50);c.quadraticCurveTo(8,-30,18,-22);c.quadraticCurveTo(22,-10,16,0);c.closePath();c.fill();c.stroke()
  c.fillStyle=FY;c.beginPath();c.moveTo(-8,0);c.quadraticCurveTo(-10,-14,0,-22);c.quadraticCurveTo(2,-12,8,-14);c.quadraticCurveTo(12,-6,8,0);c.closePath();c.fill();c.restore()}
const mod=(c,ox,fire,t,i)=>{
  c.save();c.translate(ox,0);c.strokeStyle='#111';c.lineWidth=5
  c.fillStyle='#fff';c.beginPath();c.rect(18,40,52,40);c.fill();c.stroke()
  c.fillStyle='#74c0fc';c.beginPath();c.moveTo(22,76);c.lineTo(38,54);c.lineTo(48,66);c.lineTo(54,58);c.lineTo(66,76);c.closePath();c.fill()
  c.lineWidth=6;c.fillStyle=DESK;c.beginPath();c.rect(100,150,82,10);c.fill();c.stroke()
  c.fillStyle=DD;c.beginPath();c.rect(106,160,12,64);c.rect(164,160,12,64);c.fill();c.stroke()
  c.fillStyle='#495057';c.beginPath();c.roundRect(114,92,56,40,6);c.fill();c.stroke()
  c.fillStyle='#a5d8ff';c.beginPath();c.rect(120,98,44,28);c.fill();c.lineWidth=4;c.beginPath();c.moveTo(142,132);c.lineTo(142,148);c.moveTo(130,148);c.lineTo(154,148);c.stroke()
  c.lineWidth=6;c.fillStyle='#adb5bd';c.beginPath();c.rect(190,176,48,48);c.fill();c.stroke()
  const sh=fire?cl((t-.14)/.06)*(1-cl((t-.26)/.02))*2*sin(i*2.7):0
  c.save();c.translate(214+sh,176);c.fillStyle=PR;c.beginPath();c.roundRect(-22,-30,44,30,5);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.rect(-12,-40,24,10);c.fill();c.stroke()
  c.fillStyle='#212529';c.beginPath();c.rect(-14,-16,28,5);c.fill()
  c.fillStyle=fire&&t>.12&&t<.3&&i%2?'#fa5252':'#51cf66';c.beginPath();c.arc(14,-22,3,0,T);c.fill()
  if(fire&&t>.2){c.strokeStyle='#111';c.lineWidth=4;const f=cl((t-.26)/.06);for(let k=0;k<3;k++){const p=(t*3+k/3)%1,r=6+10*p;c.fillStyle='#868e96';c.beginPath();c.arc(-6+10*k-8*p,-60-56*p,r,0,T);c.fill();c.stroke()}
    if(f>0)flame(c,8,-26,f*.9,i+2),flame(c,-8,-28,f*1.15,i)}
  c.restore();c.restore()
}
export default(c,t,i)=>{
  const ox=256*io((t-.5)/.32),look=io((t-.29)/.04)*(1-io((t-.36)/.04)),cam=io((t-.37)/.04)*(1-io((t-.5)/.06)),push=io((t-.46)/.05)*(1-io((t-.53)/.08))
  const typ=t<.28||t>.9,away=t>.5&&t<.86?sin(PI*(t-.5)/.36):0,wx=lp(80,66,away)-10*push+4*io((t-.84)/.06)-4*io((t-.84)/.06),bl=i==13
  c.save();c.beginPath();c.roundRect(6,6,244,244,28);c.fillStyle=WALL;c.fill();c.clip()
  c.fillStyle=FLOOR;c.fillRect(0,222,256,40);c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.moveTo(0,222);c.lineTo(256,222);c.stroke()
  mod(c,ox,1,t,i);mod(c,ox-256,0,t,i)
  if(away>.2){c.strokeStyle='#40c057';c.lineWidth=5;c.beginPath();for(const[y,l]of[[120,30],[170,44],[200,24]])c.moveTo(wx+60,y),c.lineTo(wx+60+l*away,y);c.stroke()}
  const tl=-.12*away,x=wx,y=0
  c.save();c.translate(x,0);c.rotate(tl*.2);c.strokeStyle='#111';c.lineWidth=6
  const sp=t*T*6*(away>0)
  c.lineWidth=6;c.beginPath();c.moveTo(0,176);c.lineTo(0,208);c.moveTo(-26,212);c.lineTo(26,212);c.stroke()
  c.fillStyle='#212529';c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.arc(d*24,218,6,0,T),c.fill(),c.stroke()
  c.strokeStyle='#fff';c.lineWidth=2;for(const d of[-1,1])c.beginPath(),c.moveTo(d*24,218),c.lineTo(d*24+5*cos(sp),218+5*sin(sp)),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=CHAIR
  c.beginPath();c.roundRect(-30,164,64,14,6);c.fill();c.stroke()
  c.beginPath();c.roundRect(-40,96,16,76,8);c.fill();c.stroke()
  for(const[w,s]of[[22,'#111'],[13,PANT]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(-6,158),c.lineTo(34,158),c.lineTo(36,206),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#212529';c.beginPath();c.ellipse(44,210,13,7,0,0,T);c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=SHIRT;c.beginPath();c.moveTo(-22,166);c.lineTo(-20,112);c.quadraticCurveTo(-18,96,0,96);c.quadraticCurveTo(18,96,20,112);c.lineTo(22,166);c.closePath();c.fill();c.stroke()
  c.fillStyle=TIE;c.lineWidth=4;c.beginPath();c.moveTo(4,100);c.lineTo(12,100);c.lineTo(14,130);c.lineTo(8,138);c.lineTo(2,130);c.closePath();c.fill();c.stroke()
  const hb=typ?2*sin(t*T*20):0,ax=lp(60,72,push)+hb,ay=lp(146,140,push)
  for(const[w,s]of[[20,'#111'],[11,SHIRT]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(4,110),c.quadraticCurveTo(14,146,away>.1?30:ax-10,away>.1?150:ay),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.arc(away>.1?34:ax-6,away>.1?150:ay,7.5,0,T);c.fill();c.stroke()
  c.save();c.translate(2,66);c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.arc(0,0,30,0,T);c.fill();c.stroke()
  c.fillStyle=HAIR;c.beginPath();c.moveTo(-30,4);c.quadraticCurveTo(-34,-34,2,-32);c.quadraticCurveTo(30,-32,30,-12);c.quadraticCurveTo(10,-20,-8,-14);c.quadraticCurveTo(-16,-4,-30,4);c.fill();c.stroke()
  const ex=lp(lp(12,16,look),-2,cam),ey=lp(2,-4,look)+3*cam
  c.fillStyle='#111';c.strokeStyle='#111';c.lineWidth=4
  for(const d of[-1,1]){if(bl)c.beginPath(),c.moveTo(ex+d*10-5,ey),c.lineTo(ex+d*10+5,ey),c.stroke();else c.beginPath(),c.arc(ex+d*10,ey,4,0,T),c.fill()
    c.beginPath();c.moveTo(ex+d*10-6,ey-8+2*cam);c.lineTo(ex+d*10+6,ey-8);c.stroke()}
  c.beginPath();c.moveTo(ex-6,ey+16);c.lineTo(ex+6,ey+16);c.stroke()
  if(cam>.5){c.fillStyle='#74c0fc';c.lineWidth=3;c.beginPath();c.moveTo(-24,-12);c.quadraticCurveTo(-18,-2,-24,2);c.quadraticCurveTo(-30,-2,-24,-12);c.fill();c.stroke()}
  c.restore();c.restore()
  c.restore();c.lineWidth=6;c.strokeStyle='#111';c.beginPath();c.roundRect(6,6,244,244,28);c.stroke()
}
