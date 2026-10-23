// yellow submarine bobbing underwater, periscope turning, propeller spinning, bubbles rising past swaying seaweed
const{sin,cos,PI,abs,min,max,round}=Math,T=2*PI
export const frames=20,delay=80
const Y='#ffd43b',YD='#fab005',GL='#a5d8ff',PR='#ced4da',SW='#51cf66',SA='#ffd8a8',BU='#d0ebff',BL='#ffa8a8'
export default(c,t)=>{
  const b=round(5*sin(t*T)),th=t*T*4,pa=t*T,w=20*cos(pa)
  for(const[x,h,o]of[[34,74,0],[222,58,1.7]]){const s=8*sin(t*T+o);for(const[lw,st]of[[16,'#111'],[8,SW]])c.lineWidth=lw,c.strokeStyle=st,c.beginPath(),c.moveTo(x,238),c.quadraticCurveTo(x-12,238-h*.5,x+s,238-h),c.stroke()}
  c.strokeStyle='#111';c.lineWidth=7
  c.fillStyle=SA;c.beginPath();c.moveTo(8,246);c.quadraticCurveTo(128,206,248,246);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4
  for(let k=0;k<3;k++){const p=(t+k/3)%1,s=3+5*p;c.fillStyle=BU;c.beginPath();c.arc(36+8*sin(p*T*2+k),146+b-p*118,s,0,T);c.fill();c.stroke()}
  c.save();c.translate(0,b)
  c.lineWidth=7
  c.fillStyle=YD;c.beginPath();c.moveTo(56,124);c.lineTo(40,100);c.lineTo(66,104);c.lineTo(84,122);c.closePath();c.fill();c.stroke()
  for(const[lw,st]of[[12,'#111'],[5,PR]])c.lineWidth=lw,c.strokeStyle=st,c.beginPath(),c.moveTo(144,100),c.lineTo(144,60),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5
  c.fillStyle=YD;c.beginPath();c.roundRect(144+min(0,w)-7,50,abs(w)+14,15,7);c.fill();c.stroke()
  c.fillStyle=GL
  if(abs(w)>5)c.beginPath(),c.ellipse(144+w,57.5,3,6,0,0,T),c.fill(),c.stroke()
  else if(sin(pa)>0)c.beginPath(),c.arc(144,57.5,5,0,T),c.fill(),c.stroke()
  c.lineWidth=7;c.fillStyle=YD;c.beginPath();c.roundRect(100,96,56,36,10);c.fill();c.stroke()
  c.fillStyle=PR;c.lineWidth=5;c.beginPath();c.roundRect(20,140,22,22,6);c.fill();c.stroke()
  for(const L of[22*cos(th),-22*cos(th),22*sin(th),-22*sin(th)])if(abs(L)>2)c.beginPath(),c.ellipse(18,151+L/2,5,abs(L/2),0,0,T),c.fill(),c.stroke()
  c.lineWidth=7;c.fillStyle=Y;c.beginPath();c.roundRect(36,118,188,66,33);c.fill();c.stroke()
  c.save();c.beginPath();c.roundRect(36,118,188,66,33);c.clip();c.fillStyle=YD;c.fillRect(30,168,200,20);c.restore()
  c.beginPath();c.roundRect(36,118,188,66,33);c.stroke()
  c.lineWidth=5;for(const x of[78,112,146]){c.fillStyle=GL;c.beginPath();c.arc(x,148,11,0,T);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(x-4,144,3,0,T);c.fill()}
  c.fillStyle='#111';c.beginPath();c.ellipse(194,142,5,7,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(192,139,2.5,0,T);c.fill()
  c.fillStyle=BL;c.beginPath();c.ellipse(182,160,8,5,0,0,T);c.fill()
  c.lineWidth=4;c.beginPath();c.arc(202,154,7,.2*PI,.8*PI);c.stroke()
  c.restore()
}
