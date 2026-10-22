// bunny sitting still, one ear stays up while the other keeps flopping over, nose twitching
const{sin,cos,PI}=Math,T=2*PI
export default(c,t)=>{
  const ear=(x,y,a,b)=>{
    const mx=x+34*sin(a),my=y-34*cos(a),ex=mx+34*sin(a+b),ey=my-34*cos(a+b)
    for(const[l,s]of[[36,'#111'],[22,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(x,y),c.lineTo(mx,my),c.lineTo(ex,ey),c.stroke()
    c.lineWidth=4;c.strokeStyle='#111';c.beginPath();c.moveTo(x+14*sin(a),y-14*cos(a));c.lineTo(mx,my);c.lineTo(mx+16*sin(a+b),my-16*cos(a+b));c.stroke()
  }
  ear(108,100,-.2+.05*sin(t*T),.08*sin(t*T))
  ear(148,100,.2,.8-.8*cos(t*T))
  c.lineWidth=7
  c.beginPath();c.ellipse(128,200,50,40,0,0,T);c.fill();c.stroke()
  for(const x of[100,156])c.beginPath(),c.ellipse(x,232,20,9,0,0,T),c.fill(),c.stroke()
  c.beginPath();c.ellipse(128,136,54,46,0,0,T);c.fill();c.stroke()
  c.fillStyle='#111'
  for(const x of[108,148])c.beginPath(),c.ellipse(x,132,6,8,0,0,T),c.fill()
  c.fillStyle='#fff';for(const x of[106,146])c.beginPath(),c.arc(x,129,2.5,0,T),c.fill()
  const n=1+.3*Math.max(0,sin(3*T*t))
  c.save();c.translate(128,148);c.scale(1,n);c.fillStyle='#111';c.beginPath();c.moveTo(-7,-3);c.lineTo(7,-3);c.lineTo(0,5);c.closePath();c.restore();c.lineWidth=3;c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(128,152);c.arc(122,152,6,0,PI);c.moveTo(140,152);c.arc(134,152,6,0,PI);c.stroke()
  c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.rect(124,158,8,7);c.fill();c.stroke()
  for(const s of[-1,1])c.beginPath(),c.moveTo(128+s*26,148),c.lineTo(128+s*44,144),c.moveTo(128+s*26,153),c.lineTo(128+s*44,155),c.stroke()
}
