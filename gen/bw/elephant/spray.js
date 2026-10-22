// elephant lifting its trunk and spraying a shower of water back over its head onto its back
const{sin,cos,PI,atan2}=Math,T=2*PI
export const frames=24,delay=70
const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
export default(c,t)=>{
  const k=t<.3?sm(t/.3):t<.65?1:sm(1-(t-.65)/.25),L=(a,b)=>a+(b-a)*k,fl=.07*sin(2*T*t)
  const B=[198,148],C=[L(224,248),L(180,116)],P=[L(212,232),L(224,50)]
  const q=s=>[0,1].map(i=>(1-s)**2*B[i]+2*s*(1-s)*C[i]+s*s*P[i]),qd=s=>[0,1].map(i=>2*(1-s)*(C[i]-B[i])+2*s*(P[i]-C[i]))
  for(const x of[54,86,120,150]){
    c.beginPath();c.roundRect(x,172,28,52,[0,0,10,10]);c.fill();c.stroke()
    c.lineWidth=4;for(const o of[8,20])c.beginPath(),c.arc(x+o,224,4,PI,0),c.stroke();c.lineWidth=7
  }
  for(const[l,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(42,146),c.quadraticCurveTo(26,160,28,186),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.moveTo(28,184);c.quadraticCurveTo(20,196,28,202);c.quadraticCurveTo(36,196,28,184);c.fill();c.stroke();c.lineWidth=7
  c.beginPath();c.ellipse(108,150,72,54,0,0,T);c.fill();c.stroke()
  c.beginPath();c.arc(176,114,46,0,T);c.fill();c.stroke()
  c.beginPath();c.moveTo(...B);c.quadraticCurveTo(...C,...P)
  for(const[l,s]of[[34,'#111'],[22,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.stroke()
  c.strokeStyle='#111';c.lineWidth=3
  for(const s of[.55,.7,.85]){const[x,y]=q(s),[dx,dy]=qd(s),a=atan2(dy,dx)+PI/2;c.beginPath();c.moveTo(x-7*cos(a),y-7*sin(a));c.lineTo(x+7*cos(a),y+7*sin(a));c.stroke()}
  const[dx,dy]=qd(1);c.lineWidth=5;c.beginPath();c.ellipse(...P,15,7,atan2(dy,dx)+PI/2,0,T);c.fill();c.stroke()
  c.beginPath();c.arc(176,114,42,0,T);c.fill()
  c.lineWidth=7;c.save();c.translate(150,118);c.scale(1+fl,1)
  c.beginPath();c.ellipse(0,0,30,42,0,0,T);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.ellipse(-3,4,18,28,0,0,T);c.stroke();c.restore();c.lineWidth=7
  c.fillStyle='#111';c.beginPath();c.arc(192,100,6,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(190,98,2,0,T);c.fill()
  c.lineWidth=3;for(const o of[-5,0,5])c.beginPath(),c.moveTo(196+o-2,124),c.lineTo(196+o+2,118),c.stroke()
  c.lineWidth=4
  for(let i=0;i<8;i++){
    const s=(t-.3-i*.034)/.22;if(s<=0||s>=1)continue
    const vx=-(110+14*(i%3)),x=232+vx*s,y=50-76*s+150*s*s,a=atan2(-76+300*s,vx),r=8.5*(1-.35*s)
    c.save();c.translate(x,y);c.rotate(a);c.beginPath();c.arc(0,0,r,-PI/2,PI/2);c.lineTo(-r*2.4,0);c.closePath();c.restore();c.fill();c.stroke()
  }
}
