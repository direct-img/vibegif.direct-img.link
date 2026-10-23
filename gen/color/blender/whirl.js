// blender whirling a pink smoothie, fruit chunks circling in the vortex while the lid rattles and the base hums
const{sin,cos,PI,exp}=Math,T=2*PI
export const frames=16,delay=60
const GL='#e7f5ff',SM='#f783ac',SL='#faa2c1',BA='#ff6b6b',BD='#e03131',LID='#b197fc',BL='#ffc9c9',FR=['#ff6b6b','#fff3bf','#69db7c','#748ffc','#ffa94d','#69db7c']
const LV=[[96,34],[120,26],[142,18]]
const jar=c=>{c.beginPath();c.moveTo(70,42);c.lineTo(186,42);c.lineTo(172,164);c.lineTo(84,164);c.closePath()}
export default(c,t,i)=>{
  const sp=T*t*2,ly=i%2?-3:1,lr=i%2?.03:-.02
  for(const[w,s]of[[20,'#111'],[10,GL]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(182,66),c.lineTo(208,72),c.lineTo(204,128),c.lineTo(176,136),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  jar(c);c.fillStyle=GL;c.fill()
  const ch=(back)=>FR.forEach((col,k)=>{const[y,rx]=LV[k%3],a=sp+k*PI+(k%3)*1.1;if((sin(a)<0)!=back)return;const s=back?.75:1;c.save();c.translate(128+cos(a)*rx*1.6,y+sin(a)*6);c.rotate(a*2+k);c.scale(s,s);c.fillStyle=col;c.lineWidth=3.5;c.beginPath();c.roundRect(-7,-7,14,14,4);c.fill();c.stroke();c.restore()})
  c.save();jar(c);c.clip()
  c.fillStyle=SM;c.beginPath();c.moveTo(60,72);for(let x=60;x<=196;x+=4)c.lineTo(x,72+30*exp(-(((x-128)/22)**2))+2*sin(x/9-sp*2));c.lineTo(196,170);c.lineTo(60,170);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  ch(true)
  c.strokeStyle=SL;c.lineWidth=5;for(const[y,rx]of LV)for(const o of[0,PI])c.beginPath(),c.ellipse(128,y,rx*1.6,7,0,sp+o+.3,sp+o+1.5),c.stroke()
  ch(false)
  c.strokeStyle='#fff';c.lineWidth=7;c.beginPath();c.moveTo(86,58);c.lineTo(94,146);c.stroke()
  c.restore();c.strokeStyle='#111';c.lineWidth=7;jar(c);c.stroke()
  c.lineWidth=4;for(const y of[72,98,124])c.beginPath(),c.moveTo(164-(y-42)*.11,y),c.lineTo(176-(y-42)*.11,y),c.stroke()
  c.lineWidth=7
  c.save();c.translate(128,36+ly);c.rotate(lr);c.fillStyle=LID;c.beginPath();c.roundRect(-66,-8,132,16,8);c.fill();c.stroke();c.beginPath();c.roundRect(-16,-20,32,14,6);c.fill();c.stroke();c.restore()
  c.fillStyle=BD;c.beginPath();c.roundRect(78,160,100,14,6);c.fill();c.stroke()
  c.fillStyle=BA;c.beginPath();c.roundRect(66,172,124,62,[12,12,18,18]);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*24,192,6,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*24-2,190,2.2,0,T),c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(128,206,7,8,0,0,T);c.fill()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,204,9,5,0,0,T),c.fill()
  c.lineWidth=4;['#fff','#ffd43b','#69db7c'].forEach((col,k)=>{c.fillStyle=k==Math.floor(t*3)?col:'#dee2e6';c.beginPath();c.arc(104+k*24,224,4.5,0,T);c.fill();c.stroke()})
  c.lineWidth=7
  for(const d of[-1,1])for(const[w,s]of[[9,'#111'],[4,'#fff']]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();const x=128+d*(i%2?78:82);c.moveTo(x,186);c.quadraticCurveTo(x+d*6,200,x,214);c.stroke()}
  c.strokeStyle='#111';c.lineWidth=7
}
