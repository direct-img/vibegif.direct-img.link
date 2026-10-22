// taco dancing side to side, lettuce flapping and its fillings jiggling
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=70
const SH='#ffd43b',SD='#f59f00',LT='#69db7c',TM='#fa5252',MT='#8b5a3c',CH='#fff3bf',BL='#ffa8a8'
export default(c,t)=>{
  const r=.16*sin(t*T),j=3*sin(2*T*t)
  c.translate(128,214);c.rotate(r);c.translate(-128,-214)
  c.fillStyle=MT;c.beginPath();c.ellipse(128,108+j,82,26,0,0,T);c.fill();c.stroke()
  c.fillStyle=LT;c.beginPath();c.moveTo(40,116);for(let k=0;k<=12;k++){const x=40+k*176/12;c.lineTo(x,(k%2?84:100)+j*(k%3-1))}c.lineTo(216,116);c.closePath();c.fill();c.stroke()
  c.fillStyle=TM;for(const[x,y]of[[72,96],[104,86],[150,88],[184,98],[128,96]])c.beginPath(),c.arc(x,y+j,12,0,T),c.fill(),c.stroke()
  c.lineWidth=5;c.strokeStyle='#111';c.fillStyle=CH;for(const[x,y,a]of[[90,104,.6],[120,100,-.4],[166,104,.3]])c.save(),c.translate(x,y-j),c.rotate(a),c.beginPath(),c.roundRect(-12,-3,24,6,3),c.fill(),c.stroke(),c.restore()
  c.lineWidth=7
  c.fillStyle=SH;c.beginPath();c.moveTo(30,112);c.arc(128,112,98,PI,0,true);c.closePath();c.fill();c.stroke()
  c.fillStyle=SD;for(const[x,y]of[[70,150],[96,186],[160,184],[186,146],[128,196],[56,124],[200,122]])c.beginPath(),c.arc(x,y,4,0,T),c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*26,140,6,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*26-2,138,2.2,0,T),c.fill()
  c.fillStyle='#111';c.beginPath();c.moveTo(114,154);c.quadraticCurveTo(128,174,142,154);c.closePath();c.fill()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*46,154,9,5,0,0,T),c.fill()
}
