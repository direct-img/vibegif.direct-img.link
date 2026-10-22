// striped popcorn bucket with kernels popping up out of the pile and dropping back in
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=60
const kernel=(c,x,y,a,s=1)=>{
  const B=[[0,0,11],[10,-6,9],[-9,-7,9],[2,-14,8]]
  c.save();c.translate(x,y);c.rotate(a);c.scale(s,s)
  c.lineWidth=12/s;for(const[bx,by,r]of B)c.beginPath(),c.arc(bx,by,r,0,T),c.stroke()
  for(const[bx,by,r]of B)c.beginPath(),c.arc(bx,by,r,0,T),c.fill()
  c.restore()
}
export default(c,t)=>{
  const pile=[[84,120],[106,108],[130,104],[154,110],[174,122],[96,128],[120,124],[146,126],[164,130]]
  for(const[x,y]of pile)kernel(c,x,y,x*.1)
  for(const[x0,vx,h,o]of[[100,-50,80,0],[150,46,70,.35],[124,10,88,.7]]){
    const p=(t*1.5+o)%1,x=x0+vx*sin(PI*p),y=112-h*4*p*(1-p)
    kernel(c,x,y,p*T*(vx>0?1:-1),1.1)
  }
  c.lineWidth=7
  const bucket=()=>{c.beginPath();c.moveTo(68,132);c.lineTo(188,132);c.lineTo(172,238);c.lineTo(84,238);c.closePath()}
  bucket();c.fill()
  c.save();bucket();c.clip();c.fillStyle='#111'
  for(const k of[-1,1])c.beginPath(),c.moveTo(128+k*30-10,132),c.lineTo(128+k*30+10,132),c.lineTo(128+k*25+8,238),c.lineTo(128+k*25-8,238),c.fill()
  c.restore();bucket();c.stroke()
  c.beginPath();c.roundRect(62,126,132,14,5);c.fill();c.stroke()
}
