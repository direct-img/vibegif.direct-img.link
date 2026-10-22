// chunky bubble letters "lol" hopping one after another like a wave
const{sin,max}=Math,T=2*Math.PI
export const frames=20,delay=60
export default(c,t)=>{
  const L=[[x=>{c.moveTo(x,70);c.lineTo(x,180)},48],[x=>{c.moveTo(x+32,148);c.arc(x,148,32,0,T)},128],[x=>{c.moveTo(x,70);c.lineTo(x,180)},208]]
  L.forEach(([f,x],k)=>{
    const h=max(0,sin(T*(t-k*.14))),y=-38*h**.8,sq=h<.15?1-(.15-h)*.6:1
    c.save();c.translate(x,212);c.scale(2-sq,sq);c.translate(-x,-212+y/sq)
    for(const[w,s]of[[44,'#111'],[28,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),f(x),c.stroke()
    c.restore()
  })
}
