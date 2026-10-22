// instant camera fires its flash, a photo with a heart on it slides out the bottom and drops away
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const BODY='#fff4e6',TOP='#ced4da',LENS='#343a40',GLASS='#74c0fc',STR=['#ff6b6b','#ffa94d','#ffd43b','#51cf66','#4dabf7'],PIC='#a5d8ff'
export default(c,t,i)=>{
  const fl=t>=.18&&t<.3,out=min(1,max(0,(t-.3)/.35)),drop=max(0,(t-.72)/.2)
  const py=150+out*62+drop*drop*160
  c.save();c.translate(128,py);c.rotate(drop*.6)
  c.fillStyle='#fff';c.beginPath();c.roundRect(-46,-30,92,100,6);c.fill();c.stroke()
  c.fillStyle=PIC;c.beginPath();c.rect(-36,-20,72,62);c.fill();c.lineWidth=4;c.stroke()
  c.fillStyle='#ff6b6b';c.beginPath();c.moveTo(0,22);c.bezierCurveTo(-22,6,-14,-12,0,-2);c.bezierCurveTo(14,-12,22,6,0,22);c.fill();c.stroke()
  c.restore();c.lineWidth=7
  if(fl)for(let k=0;k<8;k++){const a=k*T/8,r1=26,r2=44;for(const[w,st]of[[11,'#111'],[4,'#ffd43b']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(70+cos(a)*r1,58+sin(a)*r1),c.lineTo(70+cos(a)*r2,58+sin(a)*r2),c.stroke();c.strokeStyle='#111'}
  c.lineWidth=7
  c.fillStyle=TOP;c.beginPath();c.roundRect(40,62,176,40,[20,20,0,0]);c.fill();c.stroke()
  c.fillStyle='#ff6b6b';c.beginPath();c.roundRect(176,48,26,16,5);c.fill();c.stroke()
  c.fillStyle=BODY;c.beginPath();c.roundRect(36,92,184,110,22);c.fill();c.stroke()
  c.save();c.beginPath();c.roundRect(36,92,184,110,22);c.clip();STR.forEach((col,k)=>{c.fillStyle=col;c.fillRect(56+k*9,92,9,110)});c.restore()
  c.beginPath();c.roundRect(36,92,184,110,22);c.stroke()
  c.fillStyle=fl?'#fff':'#e7f5ff';c.beginPath();c.roundRect(54,70,32,22,6);c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle='#111';c.beginPath();c.roundRect(170,70,26,18,5);c.fill()
  c.lineWidth=7;c.fillStyle=LENS;c.beginPath();c.arc(140,146,44,0,T);c.fill();c.stroke()
  const ap=fl?18:28
  c.fillStyle=GLASS;c.beginPath();c.arc(140,146,ap,0,T);c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(132,138,ap*.28,ap*.18,-.6,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.roundRect(64,194,128,8,4);c.fill()
}
