// potted flower swaying while its petals open wide and close back into a bud
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=90
export default(c,t)=>{
  const k=.55-.45*cos(t*T),hx=128+10*sin(t*T),hy=100
  for(const[l,s]of[[16,'#111'],[4,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(128,206),c.quadraticCurveTo(128,150,hx,hy),c.stroke()
  c.lineWidth=7;c.strokeStyle='#111'
  for(const d of[-1,1]){
    const lx=128+d*4+(hx-128)*.3,ly=168
    c.save();c.translate(lx,ly);c.rotate(d*(-.6+.08*sin(t*T+d)));c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(d*16,-22,d*40,-6);c.quadraticCurveTo(d*20,8,0,0);c.restore();c.fill();c.stroke()
  }
  for(let p=0;p<8;p++){
    const a=p*T/8+t*T/8,o=18+16*k
    c.save();c.translate(hx+o*cos(a),hy+o*sin(a));c.rotate(a+PI/2);c.beginPath();c.ellipse(0,0,10+8*k,14+18*k,0,0,T);c.restore();c.fill();c.stroke()
  }
  c.beginPath();c.arc(hx,hy,24,0,T);c.fill();c.stroke()
  c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.arc(hx+d*8,hy-2,4,PI*1.1,PI*1.9),c.stroke()
  c.beginPath();c.arc(hx,hy+4,7,.15*PI,.85*PI);c.stroke()
  c.lineWidth=7
  c.beginPath();c.moveTo(98,212);c.lineTo(158,212);c.lineTo(150,244);c.lineTo(106,244);c.closePath();c.fill();c.stroke()
  c.beginPath();c.roundRect(90,198,76,16,5);c.fill();c.stroke()
}
