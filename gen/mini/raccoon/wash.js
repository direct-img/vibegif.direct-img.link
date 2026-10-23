// raccoon sitting up washing its paws: the two paws circle and rub, a white bandit mask holds its eyes, the ringed tail sways
const{sin,cos,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3
export default(c,t)=>{
  const f=2*T*t,hb=1.5*sin(f),sw=.08*sin(T*t),tw=t>.4&&t<.48?.3:0,bl=t>.75&&t<.81
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=(x,y,r,fn)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();fn();c.fill();c.stroke();c.restore()}
  c.translate(-20,0)
  c.save();c.translate(150,200);c.rotate(sw);c.translate(-150,-200)
  const P=[];for(let i=0;i<=10;i++){const u=i/10;P.push([(1-u)**2*146+2*(1-u)*u*214+u*u*212,(1-u)**2*204+2*(1-u)*u*206+u*u*128,17-7*u])}
  for(const[x,y,r]of P)c.beginPath(),c.arc(x,y,r,0,T),c.fill()
  c.strokeStyle='#fff';c.lineWidth=5
  for(const i of[4,6,8]){const[x,y,r]=P[i],[x2,y2]=P[i+1],dx=x2-x,dy=y2-y,l=Math.hypot(dx,dy),nx=-dy/l*r*.8,ny=dx/l*r*.8
    c.beginPath();c.moveTo(x-nx,y-ny);c.lineTo(x+nx,y+ny);c.stroke()}
  c.restore();c.strokeStyle='#111';c.lineWidth=6
  for(const d of[-1,1])shape(128+d*22,212,0,()=>c.ellipse(0,0,15,7,0,0,T))
  shape(128,184,0,()=>c.ellipse(0,0,50,30,0,0,T))
  shape(128,160,0,()=>c.ellipse(0,0,42,40,0,0,T))
  c.translate(0,hb)
  for(const d of[-1,1])shape(128+d*30,66,d*(.25+tw*(d>0)),()=>{c.moveTo(-12,10);c.lineTo(0,-14);c.lineTo(12,10);c.closePath()})
  shape(128,98,0,()=>{c.ellipse(0,0,44,32,0,0,T);c.moveTo(-36,4);c.lineTo(-52,18);c.lineTo(-28,24);c.moveTo(36,4);c.lineTo(52,18);c.lineTo(28,24)})
  c.fillStyle=c.strokeStyle='#fff'
  for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*24,69),c.lineTo(128+d*30,58),c.lineTo(128+d*36,69),c.closePath(),c.fill()
  c.lineWidth=18;c.beginPath();c.moveTo(94,92);c.quadraticCurveTo(128,108,162,92);c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(120,116);c.quadraticCurveTo(124,121,128,116);c.quadraticCurveTo(132,121,136,116);c.stroke()
  c.fillStyle=c.strokeStyle='#111'
  for(const d of[-1,1])if(bl)c.lineWidth=3,c.beginPath(),c.arc(128+d*17,95,5,.15*PI,.85*PI),c.stroke()
  else c.beginPath(),c.arc(128+d*17,97,5.5,0,T),c.fill()
  c.beginPath();c.ellipse(128,108,6,4,0,0,T);c.fill()
  c.translate(0,-hb)
  // arms reach in from the shoulders, a thin white gap keeps them readable against the body
  const pw=[-1,1].map(d=>[128+d*(10-6*cos(f)),146+d*5*sin(f)+hb])
  for(const[w,col]of[[16,'#fff'],[9,'#111']])for(const[d,[x,y]]of[[-1,pw[0]],[1,pw[1]]])
    c.strokeStyle=col,c.lineWidth=w,c.beginPath(),c.moveTo(128+d*34,138),c.quadraticCurveTo(128+d*30,154,x,y),c.stroke()
  for(const[x,y]of pw){
    c.strokeStyle='#fff';c.lineWidth=11;c.beginPath();c.ellipse(x,y,8,7,0,0,T);c.stroke()
    c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.ellipse(x,y,8,7,0,0,T);c.fill();c.stroke()
  }
}
