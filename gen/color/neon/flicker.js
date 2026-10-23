// neon smiley heart sign on a dark board, glowing pink then flickering off and on with a little buzz
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=70
const BOARD='#343a40',SCREW='#5c636a',PK='#f783ac',PL='#fff0f6',OFF='#7a3352',WIRE='#ced4da',ZAP='#ffd43b'
const ON=[1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1]
const heart=c=>{c.beginPath();c.moveTo(128,196);c.bezierCurveTo(42,140,62,58,128,100);c.bezierCurveTo(194,58,214,140,128,196)}
const face=c=>{c.beginPath();for(const x of[110,146])c.moveTo(x,122),c.lineTo(x,132);c.moveTo(112,146);c.quadraticCurveTo(128,160,144,146)}
export default(c,t,i)=>{
  const on=ON[i],zap=ON[i]!=ON[(i+23)%24]
  for(const[x0,x1]of[[58,74],[198,182]])for(const[w,st]of[[11,'#111'],[4,WIRE]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(x0,2),c.lineTo(x1,46),c.stroke()
  const board=()=>{c.beginPath();c.roundRect(22,42,212,190,22)}
  c.lineWidth=18;c.strokeStyle='#fff';board();c.stroke()
  c.fillStyle=BOARD;board();c.fill();c.lineWidth=7;c.strokeStyle='#111';c.stroke()
  c.fillStyle=SCREW;for(const[x,y]of[[40,60],[216,60],[40,214],[216,214]])c.beginPath(),c.arc(x,y,5,0,T),c.fill()
  if(on){
    c.save();board();c.clip();c.globalAlpha=.16;c.fillStyle=PK;c.beginPath();c.ellipse(128,140,100,82,0,0,T);c.fill()
    c.strokeStyle=PK;for(const[w,al]of[[30,.22],[19,.4]]){c.globalAlpha=al;c.lineWidth=w;heart(c);c.stroke();face(c);c.stroke()}
    c.restore()
  }
  c.strokeStyle='#111';c.lineWidth=13;heart(c);c.stroke();face(c);c.stroke()
  c.strokeStyle=on?PK:OFF;c.lineWidth=7;heart(c);c.stroke();face(c);c.stroke()
  if(on){c.strokeStyle=PL;c.lineWidth=2.5;heart(c);c.stroke();face(c);c.stroke()}
  c.strokeStyle='#111'
  if(zap)for(const[x,y,d]of[[190,84,1],[66,84,-1]])for(const[w,st]of[[9,'#111'],[3.5,ZAP]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(x,y),c.lineTo(x+d*8,y-6),c.lineTo(x+d*4,y-12),c.lineTo(x+d*14,y-20),c.stroke()
}
