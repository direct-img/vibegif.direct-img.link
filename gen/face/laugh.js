// face laughing so hard it shakes, with tears of joy squirting out both sides
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=18,delay=60
export default(c,t)=>{
  const r=.1*sin(3*T*t),b=-5*abs(sin(3*PI*t)),m=38+5*sin(6*T*t)
  for(const d of[-1,1])for(let k=0;k<3;k++){
    const p=(t*2+k/3)%1,x=128+d*(56+p*58),y=112+b-34*p+70*p*p,s=7*sin(PI*p)+2,vx=d*58,vy=-34+140*p,a=Math.atan2(vy,vx)
    c.save();c.translate(x,y);c.rotate(a-PI/2);c.beginPath();c.moveTo(0,-s*1.8);c.quadraticCurveTo(s,-s*.2,s,s*.3);c.arc(0,s*.3,s,0,PI);c.quadraticCurveTo(-s,-s*.2,0,-s*1.8);c.restore();c.lineWidth=4;c.fill();c.stroke()
  }
  c.lineWidth=7
  c.translate(128,132+b);c.rotate(r);c.translate(-128,-132)
  c.beginPath();c.arc(128,132,76,0,T);c.fill();c.stroke()
  for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*44,104),c.lineTo(128+d*24,112),c.lineTo(128+d*44,120),c.stroke()
  c.save();c.beginPath();c.moveTo(128-m,140);c.arc(128,140,m,0,PI);c.closePath();c.fillStyle='#111';c.fill();c.clip()
  c.fillStyle='#fff';c.fillRect(80,136,96,12);c.beginPath();c.ellipse(128,140+m,m*.55,m*.42,0,0,T);c.fill();c.lineWidth=5;c.stroke();c.restore()
  c.beginPath();c.moveTo(128-m,140);c.arc(128,140,m,0,PI);c.closePath();c.stroke()
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*58+k-2,140),c.lineTo(128+d*58+k+2,133),c.stroke()
}
