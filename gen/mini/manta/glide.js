// manta ray seen from above: its wide wings ripple in a slow wave, the thin tail trails and sways, it rises and sinks gently
const{sin,cos,abs,PI}=Math,T=2*PI
export const frames=24,delay=85,rim=3
export default(c,t)=>{
  const w=sin(T*t),w2=sin(T*t-1.1),tx=128+(100-6*abs(w)),ty=116+20*w
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  c.translate(0,-6*sin(T*t+1.2))
  c.lineWidth=4;c.beginPath();c.moveTo(128,170);c.quadraticCurveTo(128-10*sin(T*t-1),204,128+12*sin(T*t-2),232);c.stroke();c.lineWidth=6
  c.beginPath();c.moveTo(128,94)
  for(const d of[-1,1]){
    const x=v=>128+d*(v-128)
    if(d<0)c.lineTo(108,86),c.quadraticCurveTo(68,88+8*w,x(tx),ty),c.quadraticCurveTo(62,140+12*w2,102,162),c.quadraticCurveTo(116,176,128,178)
    else c.quadraticCurveTo(140,176,154,162),c.quadraticCurveTo(194,140+12*w2,tx,ty),c.quadraticCurveTo(188,88+8*w,148,86),c.lineTo(128,94)
  }
  c.fill();c.stroke()
  for(const d of[-1,1]){c.save();c.translate(128+d*16,82);c.rotate(d*(-.12+.08*sin(T*t*2)));c.beginPath();c.ellipse(0,-9,4.5,12,0,0,T);c.fill();c.stroke();c.restore()}
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*22,100,4.5,0,T),c.fill()
}
