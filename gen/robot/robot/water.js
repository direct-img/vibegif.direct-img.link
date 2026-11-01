// little yellow robot on tank treads tilting a green watering can over a drooping potted pink flower, water drops raining down until the flower perks up with sparkles and the robot smiles
export const frames=24,delay=70
const T=Math.PI*2,{sin:S,cos:C,max,min}=Math
const P=(c,f,s=1)=>{f&&(c.fillStyle=f,c.fill());s&&c.stroke()}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const O=(c,x,y,r)=>{c.beginPath();c.arc(x,y,r,0,T)}
const sm=x=>(x=max(0,min(1,x)),x*x*(3-2*x))
// can tilt over the loop: tip, pour, level
const tilt=t=>.6*(sm((t-.04)/.14)-sm((t-.6)/.14))-.08
const HX=132,HY=66
const tip=a=>[HX+C(a)*78+S(a)*6,HY+S(a)*78-C(a)*6]
const leaf=(c,x,y,a,l)=>{
  c.save();c.translate(x,y);c.rotate(a)
  c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(l*.5,-l*.42,l,0);c.quadraticCurveTo(l*.5,l*.42,0,0);P(c,'#5cc46a')
  c.lineWidth=2.5;c.beginPath();c.moveTo(3,0);c.lineTo(l*.75,0);c.stroke()
  c.restore();c.lineWidth=5
}
export default(c,t)=>{
  const a=tilt(t)
  // plant perk: sags when thirsty, springs up and wiggles once water lands
  const w=sm((t-.26)/.2)-sm((t-.7)/.3),pk=w*.55+w*S(t*T*4)*.12
  // stem, leaves, flower
  const sx=198,th=.72-pk*1.05,top=[sx+S(th)*50,188-C(th)*50]
  c.lineWidth=11;c.beginPath();c.moveTo(sx,190);c.quadraticCurveTo(sx+2,160,top[0],top[1]);c.stroke()
  c.strokeStyle='#3e9a52';c.lineWidth=5;c.stroke();c.strokeStyle='#111';c.lineWidth=5
  leaf(c,sx+1,178,.45-pk*1.2,30);leaf(c,sx+1,172,Math.PI-.45+pk*1.2,28)
  c.save();c.translate(...top);c.rotate(th*.9)
  for(let k=0;k<5;k++){const q=k/5*T;O(c,C(q)*11,S(q)*11,9);P(c,'#ff8fb1')}
  O(c,0,0,7);P(c,'#ffd34a')
  c.restore()
  // water drops, over the plant
  c.lineWidth=3
  for(let k=0;k<14;k++){
    const t0=.13+k*.03,age=t-t0
    if(age<0||age>.18)continue
    const[x0,y0]=tip(tilt(t0)),d=age/.18
    const x=x0+(k%3-1)*5+d*4,y=y0+d*d*60+d*24
    if(y>184){const r=(y-184)/2;c.beginPath();c.moveTo(x-5-r,186);c.lineTo(x-10-r,179);c.moveTo(x+5+r,186);c.lineTo(x+10+r,179);c.strokeStyle='#5cb8ff';c.lineWidth=4;c.stroke();c.strokeStyle='#111';c.lineWidth=3;continue}
    c.beginPath();c.moveTo(x,y-11);c.quadraticCurveTo(x+6,y-1,x,y+3);c.quadraticCurveTo(x-6,y-1,x,y-11);P(c,'#5cb8ff')
  }
  // pot
  c.lineWidth=6
  const pot=()=>{c.beginPath();c.moveTo(166,200);c.lineTo(234,200);c.lineTo(226,246);c.lineTo(174,246);c.closePath()}
  pot();P(c,'#d9774a',0)
  c.save();c.clip();c.fillStyle='#b85d36';c.fillRect(214,196,30,54);c.restore()
  pot();P(c,0)
  rr(c,160,186,80,16,5);P(c,'#e8895a')
  // sparkles of joy
  const sp=(t-.48)/.32
  if(sp>0&&sp<1){
    const s=S(sp*Math.PI)
    for(const[x,y,z]of[[160,136,1],[242,128,.8],[224,100,.95],[172,104,.7]]){
      const r=12*s*z
      c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x,y,x+r*.8,y);c.quadraticCurveTo(x,y,x,y+r);c.quadraticCurveTo(x,y,x-r*.8,y);c.quadraticCurveTo(x,y,x,y-r)
      c.lineWidth=3;P(c,'#ffe066')
    }
  }
  // treads
  c.lineWidth=6
  rr(c,12,206,94,34,17);P(c,'#5c6670')
  for(const x of[30,59,88]){O(c,x,223,10);P(c,'#b9c3cc');O(c,x,223,3);P(c,'#5c6670',0)}
  // body
  rr(c,24,144,72,64,12);P(c,'#ffcf4a',0)
  c.save();c.clip();c.fillStyle='#eaa82e';c.fillRect(20,192,80,20);c.fillRect(82,140,20,80);c.restore()
  rr(c,24,144,72,64,12);P(c,0)
  rr(c,36,158,30,22,5);P(c,'#2a3138')
  c.fillStyle=t%.25<.12?'#7dffa0':'#2c8f52';O(c,44,169,3.5);c.fill()
  c.fillStyle='#ff7a3d';O(c,57,169,3.5);c.fill()
  // neck and head, looking at the flower
  rr(c,50,128,20,20,4);P(c,'#9aa5b0')
  const hp=sp>0&&sp<1
  c.save();c.translate(60,130);c.rotate(.08+(a+.08)*.2)
  c.lineWidth=5;c.beginPath();c.moveTo(-8,-46);c.quadraticCurveTo(-12,-56,-6,-64);c.stroke()
  leaf(c,-6,-64,-1.1,16)
  c.lineWidth=6
  rr(c,-32,-48,64,48,16);P(c,'#ffcf4a',0)
  c.save();c.clip();c.fillStyle='#eaa82e';c.fillRect(-36,-12,72,14);c.restore()
  rr(c,-32,-48,64,48,16);P(c,0)
  O(c,12,-24,15);P(c,'#2a3138')
  if(hp){c.strokeStyle='#5ee6dc';c.lineWidth=4;c.beginPath();c.arc(12,-20,7,Math.PI*1.15,Math.PI*1.85);c.stroke();c.strokeStyle='#111'}
  else{O(c,16,-22,8);P(c,'#5ee6dc',0);O(c,19,-21,3.5);P(c,'#0e3b3a',0);O(c,14,-25,2.2);P(c,'#fff',0)}
  c.fillStyle='#ff9aa8';c.beginPath();c.ellipse(26,-8,4,2.5,0,0,T);c.fill()
  c.restore()
  // telescoping arm up to the can handle
  c.lineWidth=14;c.beginPath();c.moveTo(90,162);c.lineTo(116,124);c.lineTo(HX,HY);c.stroke()
  c.strokeStyle='#b9c3cc';c.lineWidth=6;c.stroke();c.strokeStyle='#111';c.lineWidth=5
  O(c,116,124,6);P(c,'#9aa5b0')
  // watering can, pivoting on the hand
  c.save();c.translate(HX,HY);c.rotate(a);c.lineWidth=5
  c.beginPath();c.moveTo(28,34);c.lineTo(74,-2);c.lineWidth=9;c.stroke()
  c.strokeStyle='#3fae8c';c.lineWidth=4;c.stroke();c.strokeStyle='#111';c.lineWidth=5
  c.beginPath();c.moveTo(70,-10);c.lineTo(84,2);c.lineTo(78,10);c.lineTo(64,-1);c.closePath();P(c,'#2f8f72')
  c.lineWidth=8;c.beginPath();c.moveTo(-14,16);c.quadraticCurveTo(-6,-14,24,10);c.stroke()
  c.strokeStyle='#3fae8c';c.lineWidth=3;c.stroke();c.strokeStyle='#111';c.lineWidth=5
  const can=()=>{c.beginPath();c.moveTo(-18,14);c.lineTo(32,14);c.lineTo(30,48);c.lineTo(-16,48);c.closePath()}
  can();P(c,'#3fae8c',0)
  c.save();c.clip();c.fillStyle='#2f8f72';c.fillRect(18,8,20,44);c.fillStyle='#7fd8bd';c.fillRect(-11,19,6,24);c.restore()
  can();P(c,0)
  c.restore()
  c.lineWidth=5;O(c,HX,HY,7);P(c,'#9aa5b0')
}
