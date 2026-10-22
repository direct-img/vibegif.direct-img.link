// two balloons tied together bobbing and swaying out of step, strings waving
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=80
const balloon=(c,x,y,r,a)=>{
  c.save();c.translate(x,y);c.rotate(a)
  c.beginPath();c.moveTo(0,-r*1.15);c.bezierCurveTo(r*1.12,-r*1.15,r*1.05,r*.6,0,r*1.05);c.bezierCurveTo(-r*1.05,r*.6,-r*1.12,-r*1.15,0,-r*1.15);c.fill();c.stroke()
  c.beginPath();c.moveTo(0,r*1.05);c.lineTo(-7,r*1.05+11);c.lineTo(7,r*1.05+11);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.arc(0,-r*.1,r*.75,PI*1.12,PI*1.38);c.stroke();c.lineWidth=7
  c.restore()
}
export default(c,t)=>{
  const B=[[170,96,40,.6],[100,84,52,0]].map(([x,y,r,o])=>{const a=.12*sin(t*T+o*5),bx=x+6*sin(t*T+o*5),by=y+6*sin(2*T*t+o*3);return[bx,by,r,a]})
  for(const[bx,by,r,a]of B){
    const kx=bx-sin(a)*(r*1.05+11),ky=by+cos(a)*(r*1.05+11)
    for(const[w,s]of[[8,'#111'],[3,'#fff']]){
      c.lineWidth=w;c.strokeStyle=s;c.beginPath();c.moveTo(kx,ky)
      for(let u=0;u<=1;u+=.05)c.lineTo(kx+(132-kx)*u+6*sin(u*7-t*T*2)*(1-u),ky+(240-ky)*u)
      c.stroke()
    }
  }
  c.lineWidth=7;c.strokeStyle='#111'
  for(const b of B)balloon(c,...b)
  const[bx,by]=B[1]
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(bx+d*15,by-4,5,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(bx,by+8,10,.15*PI,.85*PI);c.stroke()
}
