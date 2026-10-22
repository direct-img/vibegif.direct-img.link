// watermelon slice getting chomped three times, then popping back whole for another round
const{sin,PI,min,max}=Math,T=2*PI
export const frames=24,delay=80
const RD='#51cf66',RL='#d3f9d8',FL='#ff6b6b'
const B=[[.12,84],[.3,170],[.5,128]]
const slice=c=>{c.beginPath();c.moveTo(232,108);c.arc(128,108,104,0,PI);c.closePath()}
export default(c,t)=>{
  const pop=t>.78?(t-.78)/.22:0,s=pop?1+.12*sin(PI*min(1,pop*1.4)):1,done=B.filter(([at])=>t>=at&&!pop)
  c.translate(128,160);c.scale(s,s);c.translate(-128,-160)
  slice(c);c.fillStyle=RD;c.fill()
  c.fillStyle=RL;c.beginPath();c.moveTo(220,108);c.arc(128,108,92,0,PI);c.closePath();c.fill()
  c.fillStyle=FL;c.beginPath();c.moveTo(212,108);c.arc(128,108,84,0,PI);c.closePath();c.fill()
  c.fillStyle='#111';for(const[x,y,a]of[[68,140,.5],[94,168,.2],[128,184,0],[162,168,-.2],[188,140,-.5]])c.save(),c.translate(x,y),c.rotate(a),c.beginPath(),c.ellipse(0,0,4,7,0,0,T),c.fill(),c.restore()
  const surprised=done.some(([at])=>t-at<.08)
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*30,128,6,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*30-2,126,2.2,0,T),c.fill()
  c.lineWidth=5;c.strokeStyle='#111';c.beginPath();if(surprised)c.ellipse(128,148,7,9,0,0,T);else c.arc(128,140,10,.15*PI,.85*PI);c.stroke();c.lineWidth=7
  c.globalCompositeOperation='destination-out';for(const[,x]of done)c.beginPath(),c.arc(x,108,26,0,T),c.fill();c.globalCompositeOperation='source-over'
  c.save();c.beginPath();c.rect(0,0,256,256);for(const[,x]of done)c.moveTo(x+26,108),c.arc(x,108,26,0,T);c.clip('evenodd');slice(c);c.stroke();c.restore()
  c.save();slice(c);c.clip();for(const[,x]of done)c.beginPath(),c.arc(x,108,26,0,T),c.stroke();c.restore()
}
