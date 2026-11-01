// emoticon smiling warmly, rocking gently side to side with a slow contented blink
const P=Math.PI,K='#111',G='#9a9a9a'
export const frames=30,delay=66
const sm=x=>(x=Math.min(1,Math.max(0,x)),x*x*(3-2*x))
export default(c,t,i)=>{
  const s=Math.sin(2*P*t),q=1-s*s
  // slow contented blink: b is how shut the eyes are; past halfway they become happy arches
  const b=sm((t-.5)/.08)-sm((t-.74)/.08),o=b<.5?1-1.6*b:0,w=b<.5?0:2*b-1
  c.translate(128+8*s,128-8*s*s+3*q);c.rotate(.11*s)
  c.beginPath();c.ellipse(0,0,96+3*q,96-3*q,0,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  c.fillStyle=K
  for(const x of[-34,34]){
    c.beginPath()
    if(o>0)c.ellipse(x,-22,11,16*o,0,0,2*P),c.fill()
    else c.ellipse(x,-15,15,10*w,0,P,2*P),c.stroke()
  }
  const r=52+4*w,y0=2-3*w
  c.lineWidth=9;c.beginPath();c.arc(0,y0,r,.21*P,.79*P);c.stroke()
  c.lineWidth=7
  for(const a of[.21*P,.79*P]){
    const x=r*Math.cos(a),y=y0+r*Math.sin(a),u=Math.cos(a),v=Math.sin(a)
    c.beginPath();c.moveTo(x-6*u,y-6*v);c.lineTo(x+7*u,y+7*v);c.stroke()
  }
  c.strokeStyle=G;c.lineWidth=4
  for(const d of[-1,1])for(let k=-1;k<2;k++){
    const x=d*62+k*9;c.beginPath();c.moveTo(x-4,20-2*w);c.lineTo(x+4,8-2*w);c.stroke()
  }
}
