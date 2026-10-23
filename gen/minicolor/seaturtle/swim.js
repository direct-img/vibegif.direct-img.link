// sea turtle seen from above, gliding: front flippers sweep together, back flippers steer, head sways
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=85
const B='#2ec4b6',L='#96e1da',A='#8cc084',D='#2b2633'
export default(c,t)=>{
  const s=sin(T*t),fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  c.translate(128,130+4*sin(T*t*2));c.rotate(.08*sin(T*t-.5));c.scale(.94,.94);c.translate(-128,-128)
  for(const d of[-1,1]){c.save();c.translate(128+d*36,100);c.rotate(d*(-.2+.5*s))
    fill(A,()=>{c.moveTo(0,-10);c.quadraticCurveTo(d*44,-24,d*76,14);c.quadraticCurveTo(d*38,6,0,12)});c.restore()}
  for(const d of[-1,1]){c.save();c.translate(128+d*30,176);c.rotate(d*.3*sin(T*t+1));fill(A,()=>c.ellipse(d*14,10,18,9,d*.6,0,T));c.restore()}
  fill(A,()=>{c.moveTo(122,186);c.lineTo(134,186);c.lineTo(128,204);c.closePath()})
  c.save();c.translate(128,82);c.rotate(.12*sin(T*t*2-1));fill(A,()=>c.ellipse(0,-16,17,22,0,0,T))
  c.fillStyle=D;for(const d of[-1,1])c.beginPath(),c.arc(d*10,-20,3.5,0,T),c.fill();c.restore()
  fill(B,()=>c.ellipse(128,134,52,62,0,0,T))
  const hex=k=>[128+20*cos(k*PI/3+PI/6),132+20*sin(k*PI/3+PI/6)]
  fill(L,()=>{for(let k=0;k<6;k++)c.lineTo(...hex(k));c.closePath()})
  c.strokeStyle=L;c.lineWidth=4;c.lineCap='round'
  for(let k=0;k<6;k++){const a=k*PI/3+PI/6,[x,y]=hex(k);c.beginPath();c.moveTo(x,y);c.lineTo(128+40*cos(a),132+50*sin(a));c.stroke()}
}
