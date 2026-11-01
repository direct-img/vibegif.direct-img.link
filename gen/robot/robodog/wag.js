// white robot dog sitting in side view, happily wagging a curled segmented metal tail with a glowing tip, pointy ears twitching, cyan LED eye blinking, tag jingling on its orange collar
export const frames=24,delay=50
const P=Math.PI*2
export default(c,t)=>{
  const rr=(x,y,w,h,r,f)=>{c.beginPath();c.roundRect(x,y,w,h,r);c.fillStyle=f;c.fill();c.stroke()}
  const ci=(x,y,r,f)=>{c.beginPath();c.arc(x,y,r,0,P);c.fillStyle=f;c.fill();c.stroke()}
  const at=(x,y,r,f)=>{c.save();c.translate(x,y);c.rotate(r);f();c.restore()}
  // fill a path, shade its lower part, outline it
  const sh=(p,f,y0,g=G)=>{p();c.fillStyle=f;c.fill();c.save();p();c.clip();c.fillStyle=g;c.fillRect(-300,y0,600,300);c.restore();p();c.stroke()}
  const w=P*3*t,W='#eef1f4',G='#c3cad3',D='#3c434d'
  // tail: chain of segments curling forward, wave travelling to the tip
  const S=[];let x=58,y=176,a=-1.95
  for(let j=0;j<6;j++){
    a+=(j?.19:0)+Math.sin(w-j*.5)*(j?.07+j*.015:.3)
    S.push([x,y,a,j]);x+=Math.cos(a)*14;y+=Math.sin(a)*14
  }
  for(const[x,y,a,j]of S.reverse())at(x,y,a,()=>rr(-8,-9+j*.7,24,18-j*1.4,8,j%2?G:W))
  const[tx,ty]=[x,y]
  ci(tx,ty,7,'#38d6f5');c.fillStyle='#d8f8ff';c.beginPath();c.arc(tx-2,ty-2,2.5,0,P);c.fill()
  // far front leg
  rr(166,140,20,90,9,G);rr(166,222,38,15,7,D)
  // torso
  sh(()=>{c.beginPath();c.moveTo(62,204);c.bezierCurveTo(52,160,104,116,138,102);c.quadraticCurveTo(176,90,182,128);c.quadraticCurveTo(186,172,156,188);c.lineTo(100,222);c.closePath()},W,170)
  // haunch + hind paw
  rr(66,222,64,16,8,D)
  sh(()=>{c.beginPath();c.ellipse(92,192,36,34,-.2,0,P)},W,208)
  c.lineWidth=3;c.beginPath();c.ellipse(92,190,20,19,-.2,0,P);c.stroke();c.lineWidth=7
  ci(92,190,6,D)
  // near front leg
  rr(150,140,24,94,11,W)
  c.save();c.beginPath();c.roundRect(150,140,24,94,11);c.clip();c.fillStyle=G;c.fillRect(165,140,12,94);c.restore()
  c.beginPath();c.roundRect(150,140,24,94,11);c.stroke()
  ci(162,188,6,D)
  rr(146,222,42,16,7,D)
  ci(158,138,16,W);ci(158,138,5,D)
  // neck, collar, tag
  const hr=Math.sin(w)*.04
  at(170,100,.5,()=>{rr(-15,-26,30,36,8,G);c.lineWidth=3;c.beginPath();c.moveTo(-15,-14);c.lineTo(15,-14);c.stroke();c.lineWidth=7})
  at(168,104,.5,()=>rr(-22,-6,44,14,6,'#f28c28'))
  at(182,110,Math.sin(w*2-.8)*.4,()=>{c.lineWidth=4;c.beginPath();c.moveTo(0,0);c.lineTo(0,7);c.stroke();c.lineWidth=5;ci(0,13,7,'#f2c14e')})
  c.lineWidth=7
  at(182,66,hr,()=>{
    const e=t>.55&&t<.75?Math.sin((t-.55)*5*Math.PI)*.45:0
    const ear=(dx,f,k)=>at(-10+dx,-26,-.15-e*k,()=>{c.beginPath();c.moveTo(-12,4);c.quadraticCurveTo(-14,-18,-12,-34);c.quadraticCurveTo(4,-22,12,4);c.closePath();c.fillStyle=f;c.fill();c.stroke()})
    ear(12,G,.6)
    sh(()=>{c.beginPath();c.roundRect(-34,-30,68,54,20)},W,10)
    c.lineWidth=3;c.beginPath();c.moveTo(-6,-30);c.quadraticCurveTo(-12,-2,-6,24);c.stroke();c.lineWidth=7
    sh(()=>{c.beginPath();c.roundRect(22,-8,34,28,12)},W,12)
    rr(46,-12,14,12,5,D)
    // visor + happy LED eye
    rr(2,-20,28,20,9,'#1b1f25')
    c.strokeStyle='#38d6f5';c.lineWidth=4;c.beginPath()
    if(Math.abs(t-.3)<.03)c.moveTo(10,-9),c.lineTo(22,-9);else c.arc(16,-7,6,Math.PI+.3,-.3)
    c.stroke();c.strokeStyle='#111';c.lineWidth=7
    ci(-18,8,6,D)
    ear(0,W,1)
  })
}
