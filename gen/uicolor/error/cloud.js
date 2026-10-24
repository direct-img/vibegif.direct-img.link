// grumpy gray storm cloud with an anger mark, blue rain pouring down and a yellow lightning bolt cracking out as it shudders
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=16,delay=80
const CL='#ced4da',CD='#adb5bd',RN='#4dabf7',BT='#ffd43b',AN='#ff6b6b'
const PF=[[-64,8,34],[-30,-18,42],[18,-30,46],[60,-4,38],[-20,16,40],[28,14,40]]
export default(c,t,i)=>{
  const z=i==5||i==6||i==12,sh=z?(i%2?4:-4):0,y=98+3*sin(t*T)
  for(let k=0;k<7;k++){
    const p=(t*2+k*.43)%1,x=56+k*24+(k%2)*4,yy=y+30+p*112,s=min(1,(1-p)*5)
    if(s<=0)continue
    c.save();c.translate(x-p*8,yy);c.rotate(.1);c.scale(s,s);c.fillStyle=RN;c.lineWidth=4;c.beginPath();c.moveTo(0,-14);c.quadraticCurveTo(10,3,0,8);c.quadraticCurveTo(-10,3,0,-14);c.fill();c.stroke();c.restore()
  }
  if(z){
    c.fillStyle=BT;c.lineWidth=5;c.beginPath();for(const[x,yy]of[[134,120],[108,180],[128,180],[108,240],[160,166],[138,166],[156,120]])c.lineTo(x+sh,yy);c.closePath();c.fill();c.stroke()
    for(const[a,r]of[[-2.6,0],[-.5,1],[2.2,2]]){const x=118+cos(a)*40+sh,yy=206+sin(a)*24;for(const[w,s]of[[10,'#111'],[4,BT]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x,yy),c.lineTo(x+cos(a)*14,yy+sin(a)*10),c.stroke()}
    c.strokeStyle='#111'
  }
  c.translate(128+sh,y)
  c.lineWidth=14;for(const[a,d,r]of PF)c.beginPath(),c.arc(a,d,r,0,T),c.stroke()
  c.fillStyle=CL;for(const[a,d,r]of PF)c.beginPath(),c.arc(a,d,r,0,T),c.fill()
  c.save();c.beginPath();for(const[a,d,r]of PF)c.moveTo(a+r,d),c.arc(a,d,r,0,T);c.clip();c.fillStyle=CD;c.beginPath();c.ellipse(0,64,120,34,0,0,T);c.fill();c.restore()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(18,-30,36,PI*1.15,PI*1.45);c.stroke();c.strokeStyle='#111'
  c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.moveTo(d*36,-14),c.lineTo(d*14,-4),c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*24,6,z?4:6,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(0,34,12,PI*1.15,PI*1.85);c.stroke()
  c.save();c.translate(58,-34);c.rotate(.2*sin(2*T*t));for(const[w,s]of[[11,'#111'],[5,AN]]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();for(const r of[0,1,2,3]){const a=r*PI/2+PI/4;c.moveTo(cos(a)*7+cos(a+PI/4)*10,sin(a)*7+sin(a+PI/4)*10);c.quadraticCurveTo(cos(a)*7,sin(a)*7,cos(a)*7+cos(a-PI/4)*10,sin(a)*7+sin(a-PI/4)*10)}c.stroke()}c.restore()
}
