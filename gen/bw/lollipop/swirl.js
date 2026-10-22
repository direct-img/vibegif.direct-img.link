// swirl lollipop spinning its spiral round, a ribbon on the stick and a sparkle twinkling beside it
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=70
const star=(c,x,y,r)=>{const k=r*.18;c.beginPath();c.moveTo(x,y-r);for(const[px,py,qx,qy]of[[r,0,k,-k],[0,r,k,k],[-r,0,-k,k],[0,-r,-k,-k]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  c.beginPath();c.roundRect(119,150,18,96,7);c.fill();c.stroke()
  c.beginPath();c.arc(128,98,72,0,T);c.fill()
  c.save();c.clip();c.lineWidth=13;c.beginPath()
  for(let th=0;th<=T*4.6;th+=.08){const r=th/T*16,a=th-T*t;c.lineTo(128+r*cos(a),98+r*sin(a))}
  c.stroke();c.restore()
  c.lineWidth=7;c.beginPath();c.arc(128,98,72,0,T);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(128,98,58,PI*1.12,PI*1.38);c.stroke();c.strokeStyle='#111';c.lineWidth=7
  for(const d of[-1,1])c.beginPath(),c.moveTo(128,184),c.quadraticCurveTo(128+d*30,160,128+d*34,180),c.quadraticCurveTo(128+d*30,200,128,184),c.fill(),c.stroke()
  for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*3,188),c.lineTo(128+d*14,214),c.lineTo(128+d*22,206),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.arc(128,185,7,0,T);c.fill();c.stroke()
  c.lineWidth=4;for(const[x,y,ph,R]of[[214,36,0,15],[44,170,.5,10]]){const r=R*max(0,sin(PI*((t*2+ph)%1)));if(r>2)star(c,x,y,r)}
}
