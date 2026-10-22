// round potion flask bubbling away, purple liquid sloshing, little puffs of vapor drifting out the top
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=70
const LQ='#b197fc',LD='#9775fa',GL='#e7f5ff',VP='#e5dbff',LB='#fff9db'
const flask=c=>{c.beginPath();c.moveTo(108,58);c.lineTo(108,104);c.arc(128,164,64,-PI/2-.32,-PI/2+.32,true);c.lineTo(148,104);c.lineTo(148,58);c.closePath()}
export default(c,t)=>{
  for(let k=0;k<3;k++){const p=(t+k/3)%1;c.fillStyle=VP;c.lineWidth=5;c.beginPath();c.arc(128+14*sin(p*T+k*2)+(k-1)*8,46-p*44,8+10*p,0,T);c.fill();c.stroke()}
  c.lineWidth=7
  flask(c);c.fillStyle=GL;c.fill()
  c.save();flask(c);c.clip()
  const lv=x=>132+5*sin(x/18-t*T*2)
  c.fillStyle=LQ;c.beginPath();c.moveTo(40,250);for(let x=40;x<=216;x+=4)c.lineTo(x,lv(x));c.lineTo(216,250);c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle=LD;c.beginPath();c.ellipse(150,200,40,22,-.3,0,T);c.fill()
  c.fillStyle='#fff';c.lineWidth=4
  for(const[x0,o,r]of[[104,0,7],[140,.3,5],[124,.6,9],[160,.8,6],[92,.45,4]]){const p=(t*1.5+o)%1,y=212-p*(212-lv(x0)),s=r*(p<.9?1:(1-p)*10);if(s>.5)c.beginPath(),c.arc(x0+4*sin(p*T*2+o*9),y,s,0,T),c.fill(),c.stroke()}
  c.restore();c.lineWidth=7;flask(c);c.stroke()
  c.fillStyle=LB;c.beginPath();c.roundRect(102,144,52,40,6);c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle='#ff6b6b';c.beginPath();c.moveTo(128,176);c.bezierCurveTo(112,166,116,152,128,160);c.bezierCurveTo(140,152,144,166,128,176);c.fill();c.lineWidth=4;c.stroke()
  c.lineWidth=7;c.fillStyle=GL;c.beginPath();c.roundRect(100,52,56,12,6);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(128,164,48,PI*1.12,PI*1.38);c.stroke()
}
