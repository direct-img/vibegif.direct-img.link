// slice of pizza being lifted off the pie with cheese strings stretching under it
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=70
const CR='#e8a15a',CH='#ffd43b',PP='#fa5252',SAUCE='#ff8787'
export default(c,t)=>{
  const L=46*(1-cos(t*T))/2
  c.fillStyle=CR;c.beginPath();c.ellipse(128,212,112,30,0,0,T);c.fill();c.stroke()
  c.fillStyle=CH;c.beginPath();c.ellipse(128,208,96,22,0,0,T);c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle=PP;for(const[x,y]of[[70,206],[180,210],[150,200],[96,216]])c.beginPath(),c.ellipse(x,y,12,6,0,0,T),c.fill(),c.stroke()
  c.lineWidth=7
  for(const[x0,x1]of[[96,98],[112,112],[128,128],[144,146],[160,158]]){
    const w=Math.max(4,14-L*.18),sag=6*sin(t*T*2+x0)
    for(const[l,s]of[[w+7,'#111'],[w,CH]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(x0,150-L+(x0-128)**2/80),c.quadraticCurveTo((x0+x1)/2+sag,(150-L+200)/2,x1,200),c.stroke()
  }
  c.lineWidth=7;c.strokeStyle='#111'
  c.translate(0,-L)
  c.fillStyle=CH;c.beginPath();c.moveTo(60,56);c.lineTo(196,56);c.lineTo(128,182);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=SAUCE;for(const[x,y]of[[100,80],[156,84]])c.beginPath(),c.ellipse(x,y,14,8,0,0,T),c.fill();c.restore()
  c.fillStyle=PP;for(const[x,y]of[[96,78],[150,92],[124,130]])c.beginPath(),c.arc(x,y,13,0,T),c.fill(),c.stroke()
  c.fillStyle=CR;c.beginPath();c.roundRect(52,40,152,24,12);c.fill();c.stroke()
  c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.arc(128+d*14,104,6,PI*1.15,PI*1.85),c.stroke()
  c.beginPath();c.arc(128,110,7,.15*PI,.85*PI);c.stroke()
}
