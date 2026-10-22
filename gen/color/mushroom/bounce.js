// red spotted mushroom hopping in place with squash and stretch, grass tuft waving below
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=20,delay=60
const CAP='#fa5252',ST='#fff4e6',GR='#69db7c',BL='#ffa8a8'
export default(c,t)=>{
  const h=abs(sin(PI*t)),y=-56*h,sq=h<.18?1-(.18-h)*1.1:1+.06*h
  c.fillStyle=GR
  for(const[x,a]of[[86,-.4],[100,-.15],[156,.15],[170,.4]]){c.save();c.translate(x,236);c.rotate(a+.1*sin(t*T*2+x));c.beginPath();c.moveTo(-6,0);c.quadraticCurveTo(-2,-20,0,-30);c.quadraticCurveTo(4,-16,6,0);c.closePath();c.restore();c.fill();c.stroke()}
  c.fillStyle='rgba(0,0,0,0)'
  c.translate(128,232);c.scale(2-sq,sq);c.translate(-128,-232+y/sq)
  c.fillStyle=ST;c.beginPath();c.moveTo(100,232);c.quadraticCurveTo(96,170,108,140);c.lineTo(148,140);c.quadraticCurveTo(160,170,156,232);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*12,182,5,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*12-2,180,1.8,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(128,190,7,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*22,194,5,3,0,0,T),c.fill()
  c.lineWidth=7;c.fillStyle=CAP;c.beginPath();c.moveTo(40,146);c.bezierCurveTo(40,46,216,46,216,146);c.quadraticCurveTo(216,156,204,156);c.lineTo(52,156);c.quadraticCurveTo(40,156,40,146);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;for(const[x,yy,r]of[[96,92,13],[148,80,10],[176,118,11],[70,130,8],[124,124,9]])c.beginPath(),c.arc(x,yy,r,0,T),c.fill(),c.stroke()
}
