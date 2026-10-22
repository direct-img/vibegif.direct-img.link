// carrot tugged at in its soil mound, then pops up out of the ground happy with dirt flying, and sinks back down
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const ease=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
const mound=c=>{c.beginPath();c.moveTo(22,238);c.bezierCurveTo(28,196,82,184,128,184);c.bezierCurveTo(174,184,228,196,234,238);c.closePath()}
export default(c,t)=>{
  const r=t<.3?10*sin(PI*((t/.1)%1))**2:t<.42?118*ease((t-.3)/.12):t<.64?118+4*sin((t-.42)/.22*T):118*(1-ease((t-.64)/.28))
  const y=184-r,out=r>60,strain=t<.3,sw=t<.3?.25*sin(6*T*t):.08*sin(2*T*t)
  if(r>20){c.fillStyle='#111';c.beginPath();c.ellipse(128,190,30,6,0,0,T);c.fill();c.fillStyle='#fff'}
  c.save();c.beginPath();c.rect(0,0,256,232);c.clip();c.translate(128,y)
  for(const a of[-.42,0,.42]){
    c.save();c.rotate(a+sw*(a?1:-1));for(const[w,s]of[[13,'#111'],[5,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(0,-8),c.lineTo(0,-34),c.stroke()
    c.lineWidth=7;c.strokeStyle='#111';c.beginPath();c.ellipse(0,-46,10,17,0,0,T);c.fill();c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(0,-36);c.lineTo(0,-56);c.stroke();c.restore()
  }
  c.lineWidth=7;c.beginPath();c.moveTo(-32,2);c.quadraticCurveTo(-32,-10,-18,-10);c.lineTo(18,-10);c.quadraticCurveTo(32,-10,32,2);c.lineTo(5,120);c.quadraticCurveTo(0,128,-5,120);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;for(const[x,yy,d]of[[-27,40,1],[-22,66,1],[25,52,-1],[19,80,-1]])c.beginPath(),c.moveTo(x,yy),c.lineTo(x+d*10,yy),c.stroke()
  c.lineWidth=5
  if(strain)for(const d of[-1,1])c.beginPath(),c.moveTo(d*6,10),c.lineTo(d*16,16),c.lineTo(d*6,22),c.stroke()
  else{c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(d*12,16,4.5,6,0,0,T),c.fill();c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(d*12-1.5,14,1.8,0,T),c.fill()}
  if(out){c.beginPath();c.arc(0,30,7,.1*PI,.9*PI);c.stroke()}else{c.beginPath();c.moveTo(-6,32);c.lineTo(6,32);c.stroke()}
  c.restore()
  c.lineWidth=7;mound(c);c.fill();c.stroke()
  c.lineWidth=3;for(const[x,yy,rr]of[[64,214,4],[90,200,3],[176,206,4],[196,222,3],[112,224,3],[150,218,4]])c.beginPath(),c.arc(x,yy,rr,0,T),c.stroke()
  if(t>=.3&&t<.5){const u=(t-.3)/.2;c.lineWidth=4;for(const[vx,vy]of[[-1,1],[-.5,1.3],[.5,1.25],[1,1.05],[.1,1.4]]){const x=128+vx*70*u,yy=186-vy*120*u+150*u*u;c.beginPath();c.arc(x,yy,4.5,0,T);c.fill();c.stroke()}}
}
