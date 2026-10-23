// otter floating on its back, banging a clam on the stone on its tummy while it bobs on the waves
const{sin,cos,PI,abs,max}=Math,T=2*PI
export const frames=16,delay=80
const BR='#a9744f',BD='#8d6346',BE='#ffd8a8',WA='#4dabf7',WL='#a5d8ff',ST='#ced4da',SD='#868e96',CL='#faa2c1',CD='#f06595',BL='#ffa8a8'
export default(c,t)=>{
  const b=Math.round(4*sin(T*t)),r=.05*sin(T*t+.6),h=max(0,(abs(sin(T*t))-.4)/.6),bang=h==0
  const wy=(x,o=0)=>186+5*sin(x/20-T*t+o)
  const sea=(o,dy)=>{c.fillStyle=WA;c.beginPath();c.moveTo(22,244);c.quadraticCurveTo(8,244,8,230);for(let x=8;x<=248;x+=4)c.lineTo(x,wy(x,o)+dy);c.lineTo(248,230);c.quadraticCurveTo(248,244,234,244);c.closePath();c.fill();c.stroke()}
  sea(2,-14)
  c.save();c.translate(128,170+b);c.rotate(r);c.translate(-128,-170)
  c.fillStyle=BR
  c.beginPath();c.moveTo(48,166);c.quadraticCurveTo(14,170,10,148);c.quadraticCurveTo(26,156,50,152);c.fill();c.stroke()
  for(const[x,a]of[[56,-.5],[76,-.2]])c.save(),c.translate(x,150),c.rotate(a),c.beginPath(),c.ellipse(0,-14,9,16,0,0,T),c.fill(),c.stroke(),c.restore()
  c.beginPath();c.ellipse(116,168,76,30,0,0,T);c.fill();c.stroke()
  c.fillStyle=BE;c.beginPath();c.ellipse(118,160,56,18,0,0,T);c.fill()
  c.fillStyle=BR;c.beginPath();c.arc(194,140,36,0,T);c.fill();c.stroke()
  c.fillStyle=BE;c.beginPath();c.ellipse(204,150,22,16,0,0,T);c.fill()
  for(const[x,y]of[[176,108],[216,112]])c.fillStyle=BR,c.beginPath(),c.arc(x,y,8,0,T),c.fill(),c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(206,142,6,4,0,0,T);c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(206,146);c.lineTo(206,152);c.moveTo(196,154);c.quadraticCurveTo(206,160,216,154);c.stroke()
  for(const[x,y]of[[184,128],[220,130]])c.beginPath(),bang?(c.moveTo(x-6,y-4),c.lineTo(x+2,y),c.lineTo(x-6,y+4)):c.arc(x,y+2,6,1.15*PI,1.85*PI),c.stroke()
  c.lineWidth=3;for(const d of[-1,1])c.beginPath(),c.moveTo(222,150+d*3),c.lineTo(236,148+d*6),c.stroke()
  c.fillStyle=BL;c.beginPath();c.ellipse(180,148,7,4,0,0,T);c.fill()
  c.lineWidth=7
  c.fillStyle=ST;c.beginPath();c.ellipse(118,140,22,12,0,0,T);c.fill();c.stroke()
  c.fillStyle=SD;c.beginPath();c.ellipse(112,136,6,3,0,0,T);c.fill()
  const cy=118-26*h
  c.save();c.translate(122,cy);c.rotate(-.2)
  c.fillStyle=CL;c.beginPath();c.moveTo(-18,4);c.quadraticCurveTo(0,-26,18,4);c.quadraticCurveTo(0,12,-18,4);c.fill();c.stroke()
  c.lineWidth=3;c.strokeStyle=CD;for(const a of[-.5,0,.5])c.beginPath(),c.moveTo(0,6),c.lineTo(sin(a)*14,-10+abs(a)*6),c.stroke()
  c.restore();c.lineWidth=7;c.strokeStyle='#111'
  c.fillStyle=BR;for(const d of[-1,1])c.beginPath(),c.moveTo(d<0?98:146,154),c.quadraticCurveTo(d<0?94:150,cy+16,122+d*20,cy+4),c.lineWidth=16,c.stroke(),c.strokeStyle=BR,c.lineWidth=6,c.stroke(),c.strokeStyle='#111',c.lineWidth=7,c.beginPath(),c.arc(122+d*20,cy+4,9,0,T),c.fill(),c.stroke()
  if(bang){c.lineWidth=4;for(const[a,l]of[[-2.5,14],[-1.9,16],[-.6,14],[-1.25,16]])c.beginPath(),c.moveTo(122+cos(a)*30,130+sin(a)*22),c.lineTo(122+cos(a)*(30+l),130+sin(a)*(22+l)),c.stroke();c.lineWidth=7}
  c.restore()
  sea(0,6)
  c.strokeStyle=WL;c.lineWidth=4;for(const[x,y,w]of[[60,224,18],[150,230,24],[210,222,14]])c.beginPath(),c.moveTo(x-w,y+2*sin(T*t+x)),c.lineTo(x+w,y+2*sin(T*t+x)),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
}
