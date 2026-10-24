// "404" adrift in outer space: the 0 is a spinning pink ringed planet with a little smile, the 4s bob gently up and down, stars twinkling all around
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=90
const A='#4dabf7',B='#b197fc',PL='#f783ac',PB='#faa2c1',PD='#e64980',RG='#ffd43b',BL='#ff8787'
const dig=(c,f,col)=>{for(const[w,s]of[[32,'#111'],[19,col]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-17,-30);c.lineTo(-19,-14);c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
const four=c=>()=>{c.moveTo(-14,-40);c.lineTo(-20,10);c.lineTo(24,10);c.moveTo(12,-40);c.lineTo(12,40)}
const spark=(c,x,y,s)=>{c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.2,-s*.2],[0,s,s*.2,s*.2],[-s,0,-s*.2,s*.2],[0,-s,-s*.2,-s*.2]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  for(const[x,y,o]of[[26,34,0],[128,24,.5],[226,44,.25],[30,222,.75],[222,224,.4],[128,232,.1]])spark(c,x,y,4+6*(1+sin((t+o)*T))/2)
  c.lineWidth=7
  const py=128+Math.round(4*sin(T*t+1)),tl=-.26
  for(const[x,ph,col]of[[44,0,A],[208,PI,B]]){c.save();c.translate(x,128+Math.round(9*sin(T*t+ph)));dig(c,four(c),col);c.restore()}
  const ring=(a,b)=>{c.save();c.translate(128,py);c.rotate(tl);for(const[w,s]of[[22,'#111'],[10,RG]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.ellipse(0,0,66,15,0,a,b),c.stroke();c.restore();c.strokeStyle='#111';c.lineWidth=7}
  ring(PI,T)
  c.fillStyle=PL;c.beginPath();c.arc(128,py,42,0,T);c.fill()
  c.save();c.clip();c.translate(128,py);c.rotate(tl)
  c.fillStyle=PB;c.fillRect(-46,-31,92,10);c.fillRect(-46,20,92,8)
  for(const[a,y,r]of[[0,-27,5],[2.1,27,5],[4,-26,4],[5.2,24,5],[1,-37,3.5],[3.2,35,3.5]]){const q=a+t*T,x=38*sin(q);if(cos(q)>0){c.fillStyle=PD;c.beginPath();c.ellipse(x,y,r*cos(q),r,0,0,T);c.fill()}}
  c.restore()
  c.beginPath();c.arc(128,py,42,0,T);c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*15,py-2,5.5,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*15-2,py-4,2,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(128,py+5,7,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*26,py+9,6,3.5,0,0,T),c.fill()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(128,py,33,PI*1.1,PI*1.35);c.stroke();c.strokeStyle='#111'
  ring(0,PI)
}
