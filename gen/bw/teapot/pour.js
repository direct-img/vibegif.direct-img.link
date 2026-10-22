// teapot tipping forward to pour a stream of tea into a cup, ripples on the cup, steam curling up
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const ease=u=>(u=min(1,max(0,u)),u<.5?2*u*u:1-2*(1-u)**2)
const P=[148,188],rot=(x,y,a)=>[P[0]+(x-P[0])*cos(a)-(y-P[1])*sin(a),P[1]+(x-P[0])*sin(a)+(y-P[1])*cos(a)]
export default(c,t)=>{
  const a=.55*(ease(t/.2)-ease((t-.7)/.2)),pour=a>.45,[sx,sy]=rot(190,108,a)
  for(const[x0,ph]of[[184,0],[222,.5]])for(const[w,s]of[[13,'#111'],[6,'#fff']]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();for(let y=176;y>=128;y-=2)c.lineTo(x0+(2+4*(176-y)/48)*sin((176-y)/36*T-t*T*2+ph*T),y);c.stroke()}
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.ellipse(204,234,46,9,0,0,T);c.fill();c.stroke()
  for(const[w,s]of[[25,'#111'],[11,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(236,204,12,-PI/2,PI/2),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.moveTo(170,186);c.lineTo(176,222);c.quadraticCurveTo(178,230,188,230);c.lineTo(220,230);c.quadraticCurveTo(230,230,232,222);c.lineTo(238,186);c.fill();c.stroke()
  c.beginPath();c.ellipse(204,186,34,8,0,0,T);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(204,187,27,5,0,0,T);c.fill();c.fillStyle='#fff'
  if(pour){c.strokeStyle='#fff';c.lineWidth=2.5;const r=(t*6)%1;c.beginPath();c.ellipse(204,187,6+18*r,1.5+3*r,0,0,T);c.stroke();c.strokeStyle='#111'}
  if(pour)for(const[w,s]of[[14,'#111'],[6,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(sx,sy),c.quadraticCurveTo(sx+8,sy+18+2*sin(8*T*t),204,186),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.save();c.translate(...P);c.rotate(a);c.translate(-P[0],-P[1])
  for(const[w,s]of[[27,'#111'],[13,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.arc(50,140,22,PI*.5,PI*1.5),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  c.beginPath();c.moveTo(136,140);c.quadraticCurveTo(164,138,176,112);c.lineTo(192,104);c.lineTo(186,120);c.quadraticCurveTo(170,164,136,172);c.closePath();c.fill();c.stroke()
  c.beginPath();c.roundRect(72,180,56,12,5);c.fill();c.stroke()
  c.beginPath();c.moveTo(50,150);c.bezierCurveTo(50,104,76,92,100,92);c.bezierCurveTo(124,92,148,104,148,150);c.quadraticCurveTo(148,186,112,186);c.lineTo(88,186);c.quadraticCurveTo(50,186,50,150);c.fill();c.stroke()
  c.beginPath();c.moveTo(70,98);c.quadraticCurveTo(100,64,130,98);c.closePath();c.fill();c.stroke()
  c.beginPath();c.arc(100,72,9,0,T);c.fill();c.stroke()
  c.lineWidth=5
  if(pour)for(const x of[84,116])c.beginPath(),c.arc(x,140,8,PI*1.15,PI*1.85),c.stroke()
  else{c.fillStyle='#111';for(const x of[84,116])c.beginPath(),c.ellipse(x,138,5.5,7.5,0,0,T),c.fill();c.fillStyle='#fff';for(const x of[82,114])c.beginPath(),c.arc(x,135,2.2,0,T),c.fill()}
  c.beginPath();c.arc(100,150,10,.15*PI,.85*PI);c.stroke()
  c.lineWidth=3;for(const x of[66,134])for(const o of[-5,0,5])c.beginPath(),c.moveTo(x+o-2,164),c.lineTo(x+o+2,156),c.stroke()
  c.restore()
}
