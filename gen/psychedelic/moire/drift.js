// two sets of concentric rings orbiting each other inside a disc, overlapping into shifting rainbow moire interference patterns
export const frames=18,delay=80
const R=118,P=Math.PI*2,B=18
export default(c,t)=>{
  const a=P*t,d=22
  const set=(x,y,w)=>{
    c.lineWidth=w
    for(let r=w/2;r<R+60;r+=2*w)c.beginPath(),c.arc(x,y,r,0,P),c.stroke()
  }
  c.save()
  c.beginPath();c.arc(128,128,R,0,P);c.clip()
  set(128+d*Math.cos(a),128+d*Math.sin(a),7)
  c.globalCompositeOperation='xor'
  set(128-d*Math.cos(a),128-d*Math.sin(a),8)
  c.globalCompositeOperation='source-atop'
  for(let k=8,o=6*B*t;k>-7;k--){
    c.beginPath();c.arc(128,128,Math.max(0,k*B+o),0,P)
    c.fillStyle=`hsl(${(k+60)%6*60},100%,55%)`;c.fill()
  }
  c.restore()
  // hard alpha so the gif matches and the webp stays small
  const m=c.getImageData(0,0,256,256),p=m.data
  for(let j=3;j<p.length;j+=4)p[j]=p[j]>127?255:0
  c.putImageData(m,0,0)
  c.lineWidth=7
  c.beginPath();c.arc(128,128,R,0,P);c.stroke()
}
