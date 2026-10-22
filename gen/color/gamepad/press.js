// game controller wiggling as its four colored buttons get pressed one after another
const{sin,cos,PI,floor}=Math,T=2*PI
export const frames=24,delay=70
const BODY='#9775fa',DP='#495057',BTN=[['#ffd43b',0,-20],['#4dabf7',-20,0],['#51cf66',0,20],['#ff6b6b',20,0]]
export default(c,t)=>{
  const k=floor(t*4),u=(t*4)%1,pr=u<.45,r=.05*sin(t*T*4)
  c.translate(128,140);c.rotate(r);c.translate(-128,-140)
  const body=()=>{c.roundRect(34,84,188,86,43)},grips=[[70,168,32],[186,168,32]]
  c.lineWidth=14;c.beginPath();body();c.stroke();for(const[x,y,rr]of grips)c.beginPath(),c.arc(x,y,rr,0,T),c.stroke()
  c.fillStyle=BODY;c.beginPath();body();c.fill();for(const[x,y,rr]of grips)c.beginPath(),c.arc(x,y,rr,0,T),c.fill()
  c.lineWidth=7;c.fillStyle=DP;c.beginPath();c.moveTo(78,104);for(const[x,y]of[[90,104],[90,116],[102,116],[102,128],[90,128],[90,140],[78,140],[78,128],[66,128],[66,116],[78,116]])c.lineTo(x,y);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  BTN.forEach(([col,dx,dy],i)=>{
    const on=i==k&&pr,s=on?.78:1,x=176+dx,y=122+dy
    c.fillStyle=col;c.beginPath();c.arc(x,y+(on?2:0),10*s,0,T);c.fill();c.lineWidth=5;c.stroke()
    if(on)for(let j=0;j<3;j++){const a=-PI/2+(j-1)*.7+Math.atan2(dy,dx)+PI/2;for(const[w,st]of[[9,'#111'],[3,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(x+cos(a)*16,y+sin(a)*16),c.lineTo(x+cos(a)*24,y+sin(a)*24),c.stroke();c.strokeStyle='#111'}
  })
  c.fillStyle='#e5dbff';c.lineWidth=4;for(const x of[118,138])c.beginPath(),c.roundRect(x-7,104,14,6,3),c.fill(),c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*12,134,4.5,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(128,140,6,.15*PI,.85*PI);c.stroke()
}
