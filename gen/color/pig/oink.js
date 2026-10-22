// pig bobbing its head, ears flapping, snout scrunching up with each oink
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=20,delay=70
const P='#ffc9d6',S='#ff8fab',D='#c2255c',BL='#ffa8c5'
export default(c,t)=>{
  const k=max(0,sin(2*T*t)),y=-6*k,sx=1+.1*k,sy=1-.16*k
  if(k>.6)for(const d of[-1,1])for(const a of[-.35,0,.35]){
    const ang=(d<0?PI:0)+d*a,x0=128+cos(ang)*98,y0=150+y+sin(ang)*72
    for(const[w,s]of[[11,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x0,y0),c.lineTo(x0+cos(ang)*18,y0+sin(ang)*14),c.stroke()
  }
  c.lineWidth=7;c.strokeStyle='#111'
  for(const d of[-1,1]){
    c.save();c.translate(128+d*54,80+y);c.rotate(d*(.55+.25*sin(2*T*t+1)))
    c.fillStyle=P;c.beginPath();c.moveTo(-24,14);c.lineTo(0,-36);c.lineTo(24,14);c.closePath();c.fill();c.stroke()
    c.fillStyle=S;c.beginPath();c.moveTo(-12,8);c.lineTo(0,-20);c.lineTo(12,8);c.closePath();c.fill()
    c.restore()
  }
  c.fillStyle=P;c.beginPath();c.ellipse(128,138+y,84,74,0,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*30,114+y,7,9,0,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*30-2,110+y,2.5,0,T),c.fill()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*50,150+y,13,8,0,0,T),c.fill()
  c.fillStyle=S;c.beginPath();c.ellipse(128,154+y,34*sx,24*sy,0,0,T);c.fill();c.stroke()
  c.fillStyle=D;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*12*sx,154+y,5,8*sy,0,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(128,186+y,10,.2*PI,.8*PI);c.stroke()
}
