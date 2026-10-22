// slime blob jiggling: squashes and stretches, a ripple rolls over its top, mouth goes "o"
const{sin,cos,PI}=Math,T=2*PI
export default(c,t)=>{
  const q=sin(2*T*t),rx=80*(1+.07*q),ry=92*(1-.09*q),cy=212
  c.beginPath()
  for(let a=PI;a<=T+.01;a+=.04){const r=1+.025*sin(3*a-2*T*t);c.lineTo(128+rx*r*cos(a),cy+ry*r*sin(a))}
  c.ellipse(128,cy,rx,16,0,0,PI);c.closePath();c.fill();c.stroke()
  c.lineWidth=6;c.beginPath();c.arc(128,cy,ry*.78,PI*1.16,PI*1.33);c.stroke()
  const fy=cy-ry*.45
  c.fillStyle='#111'
  for(const d of[-1,1]){
    c.beginPath();c.ellipse(128+d*28,fy,11,15*(1-.08*q),0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(128+d*28-4,fy-6,4.5,0,T);c.fill();c.fillStyle='#111'
  }
  c.beginPath();c.ellipse(128,fy+30,9+3*q,11-2*q,0,0,T);c.fill()
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*52+k-2,fy+24),c.lineTo(128+d*52+k+2,fy+17),c.stroke()
}
