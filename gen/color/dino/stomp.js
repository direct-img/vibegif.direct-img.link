// little dinosaur stomping in place, roaring each time a foot lands and kicking up dust
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=80
const G='#69db7c',BE='#d8f5a2',SP='#ffa94d',BL='#ffa8a8'
export default(c,t)=>{
  const u=(t*2)%1,y=-5*sin(PI*u),la=t<.5?18*sin(2*PI*t):0,lb=t>=.5?18*sin(2*PI*(t-.5)):0,roar=u<.3,tw=.12*sin(T*t)
  const tail=()=>{c.moveTo(78,132+y);c.quadraticCurveTo(40,150+y,14,196+y+20*tw);c.quadraticCurveTo(54,190+y,90,184+y)}
  for(const[x,l]of[[98,la],[146,lb]]){c.fillStyle=G;c.beginPath();c.roundRect(x-17,170+y,34,58-y-l,12);c.fill();c.stroke()
    c.lineWidth=4;c.beginPath();c.moveTo(x+6,226-l);c.lineTo(x+6,218-l);c.moveTo(x-4,226-l);c.lineTo(x-4,218-l);c.stroke();c.lineWidth=7}
  if(u<.25)for(const d of[-1,1]){const fx=t<.5?98:146,s=(1-u/.25);c.fillStyle='#fff';c.beginPath();c.arc(fx+d*(30+18*(1-s)),222,8*s+2,0,T);c.fill();c.stroke()}
  c.fillStyle=SP
  for(const[x,yy,a]of[[64,126,-.9],[90,104,-.5],[118,96,-.1],[146,98,.2]])c.save(),c.translate(x,yy+y),c.rotate(a),c.beginPath(),c.moveTo(-12,8),c.lineTo(0,-18),c.lineTo(12,8),c.closePath(),c.fill(),c.stroke(),c.restore()
  const head=()=>c.ellipse(186,90+y,44,32,-.08,0,T),body=()=>c.ellipse(120,150+y,60,50,0,0,T),neck=()=>{c.moveTo(146,134+y);c.lineTo(172,104+y)}
  c.lineWidth=14;c.beginPath();tail();c.stroke();for(const f of[head,body])c.beginPath(),f(),c.stroke()
  c.lineWidth=58;c.beginPath();neck();c.stroke()
  c.fillStyle=c.strokeStyle=G;c.lineWidth=44;c.beginPath();neck();c.stroke()
  c.beginPath();tail();c.fill();for(const f of[head,body])c.beginPath(),f(),c.fill()
  c.strokeStyle='#111';c.lineWidth=7
  c.save();c.beginPath();body();c.clip();c.fillStyle=BE;c.beginPath();c.ellipse(140,184+y,42,40,0,0,T);c.fill();c.lineWidth=5;c.stroke()
  c.lineWidth=3;for(const yy of[166,180,194])c.beginPath(),c.moveTo(112,yy+y),c.lineTo(170,yy+y),c.stroke();c.restore()
  for(const[w,s]of[[16,'#111'],[8,G]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(160,148+y),c.lineTo(176,160+y+(roar?-8:0)),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.fillStyle='#111';c.beginPath();c.arc(190,80+y,6,0,T);c.fill();c.beginPath();c.arc(222,82+y,2.5,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(188,78+y,2.2,0,T);c.fill()
  c.fillStyle=BL;c.beginPath();c.ellipse(176,98+y,8,5,0,0,T);c.fill()
  if(roar){c.fillStyle='#111';c.beginPath();c.moveTo(194,104+y);c.quadraticCurveTo(212,124+y,228,100+y);c.closePath();c.fill()
    c.fillStyle='#fff';for(const x of[202,214])c.beginPath(),c.moveTo(x,104+y),c.lineTo(x+4,111+y),c.lineTo(x+8,103+y),c.fill()}
  else{c.lineWidth=5;c.beginPath();c.moveTo(196,104+y);c.quadraticCurveTo(212,110+y,226,100+y);c.stroke()}
}
