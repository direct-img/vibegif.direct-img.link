// griffin sitting: eagle front, lion back, both wings beating up and down while the tufted tail swishes and it blinks
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=75,rim=3
export default(c,t)=>{
  const f=sin(T*t),bl=t>.78&&t<.84,sw=sin(T*t-1)
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  const shape=(x,y,r,g)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();g();c.fill();c.stroke();c.restore()}
  const wing=(x,y,r,s)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(s,-s);c.beginPath()
    c.moveTo(0,-10);c.quadraticCurveTo(46,-52,100,-46);c.lineTo(80,-26);c.lineTo(88,-12);c.lineTo(66,-8);c.lineTo(70,8)
    c.lineTo(48,4);c.lineTo(48,18);c.lineTo(28,10);c.lineTo(4,14);c.closePath();c.fill();c.stroke();c.restore()}
  c.lineWidth=9;c.beginPath();c.moveTo(70,204);c.bezierCurveTo(40,210,26,190,30+6*sw,160);c.stroke();c.lineWidth=6
  shape(30+6*sw,160,.3*sw,()=>c.ellipse(0,-8,9,14,0,0,T))
  wing(142,132,-2.45+.5*f,.8)
  shape(0,0,0,()=>c.ellipse(90,186,40,36,0,0,T))
  shape(0,0,0,()=>c.ellipse(96,218,26,8,0,0,T))
  shape(128,168,-.35,()=>c.ellipse(0,0,50,32,0,0,T))
  shape(158,150,0,()=>c.ellipse(0,0,26,36,0,0,T))
  for(const x of[152,170]){
    c.lineWidth=11;c.beginPath();c.moveTo(x,170);c.lineTo(x+2,216);c.stroke()
    c.lineWidth=5;c.beginPath();for(const[dx,dy]of[[14,4],[8,7],[-9,4]])c.moveTo(x+2,218),c.lineTo(x+2+dx,218+dy);c.stroke()
  }
  c.lineWidth=34;c.beginPath();c.moveTo(160,140);c.lineTo(172,102);c.stroke();c.lineWidth=6
  shape(0,0,0,()=>c.arc(178,92,21,0,T))
  shape(0,0,0,()=>{c.moveTo(162,80);c.lineTo(142,72);c.lineTo(158,90);c.lineTo(144,98);c.lineTo(164,102)})
  shape(0,0,0,()=>{c.moveTo(194,82);c.quadraticCurveTo(216,82,214,106);c.quadraticCurveTo(206,96,194,100)})
  wing(130,138,-2.15+.5*f,.95)
  c.fillStyle=c.strokeStyle='#fff'
  if(bl)c.lineWidth=3,c.beginPath(),c.moveTo(179,89),c.lineTo(189,89),c.stroke()
  else c.beginPath(),c.arc(184,88,4.2,0,T),c.fill()
}
