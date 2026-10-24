// empty dashed star outline waiting to be filled, its dashes marching round as it breathes, sparkles twinkling on and off around it
const{sin,cos,PI,max,hypot}=Math,T=2*PI
export const frames=16,delay=80
const SY='#ffd43b',R=104,r=46,P=10*hypot(R-r*cos(PI/5),r*sin(PI/5))/20
const sp=(c,x,y,s)=>{if(s<1.5)return;c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  for(const[x,y,o,s]of[[46,50,0,16],[210,48,.35,14],[30,196,.6,12],[226,196,.15,13],[128,232,.8,11],[128,146,.45,15]])sp(c,x,y,s*max(0,sin(PI*((t*2+o)%1))))
  c.save();c.translate(128,138);const k=1+.04*sin(t*T*2);c.scale(k,k);c.rotate(.04*sin(t*T))
  c.beginPath();for(let n=0;n<10;n++){const q=n%2?r:R,a=n*PI/5-PI/2;c.lineTo(cos(a)*q,sin(a)*q)}c.closePath()
  c.setLineDash([P*.55,P*.45]);c.lineDashOffset=-t*P*2
  for(const[w,s]of[[17,'#111'],[8,SY]])c.lineWidth=w,c.strokeStyle=s,c.stroke()
  c.restore()
}
