// phone buzzing with an incoming call from a smiley, ring waves on each side, green button pulsing
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=60
const BODY='#9775fa',SCR='#e7f5ff',AV='#ffd43b',GO='#51cf66',NO='#ff6b6b'
export default(c,t,i)=>{
  const buzz=(t*2)%1<.6,r=buzz?(i%2?.07:-.07):0,p=1+.12*sin(4*T*t)
  if(buzz)for(const d of[-1,1])for(const rr of[96,116])for(const[w,st]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.arc(128,128,rr,d>0?-.4:PI-.4,d>0?.4:PI+.4),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  c.translate(128,128);c.rotate(r);c.translate(-128,-128)
  c.fillStyle=BODY;c.beginPath();c.roundRect(76,24,104,208,22);c.fill();c.stroke()
  c.fillStyle=SCR;c.beginPath();c.roundRect(88,46,80,164,10);c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle='#111';c.beginPath();c.roundRect(114,32,28,7,3.5);c.fill()
  c.lineWidth=5;c.fillStyle=AV;c.beginPath();c.arc(128,96,26,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*9,92,3.5,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(128,99,8,.15*PI,.85*PI);c.stroke()
  c.lineWidth=5;for(const[x,col,s]of[[106,NO,1],[150,GO,p]]){
    c.save();c.translate(x,176);c.scale(s,s);c.fillStyle=col;c.beginPath();c.arc(0,0,14,0,T);c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(0,4,7,PI*1.15,PI*1.85);c.stroke();c.restore()
  }
  c.fillStyle='#adb5bd';for(const[x,w]of[[128,44],[128,30]])c.beginPath(),c.roundRect(x-w/2,w>40?132:142,w,6,3),c.fill()
}
