// emoticon tipping its head and giving a playful wink, a little sparkle pinging off the winking eye
const P=Math.PI,K='#111',W='#fff'
export const frames=32,delay=55
const cl=x=>Math.min(1,Math.max(0,x)),sm=x=>(x=cl(x),x*x*(3-2*x))
export default(c,t,i)=>{
  // w: wink amount, snaps shut fast and opens slow; e: overshoot of the head on the snap
  const w=sm((t-.2)/.07)-sm((t-.72)/.12),e=Math.sin(cl((t-.2)/.2)*P)*(1-cl((t-.2)/.2)),a=Math.sin(cl((t-.06)/.17)*P)
  c.translate(128+4*w-3*a,128+2*w-5*e);c.rotate(.16*w+.06*e-.06*a)
  c.beginPath();c.ellipse(0,0,96,96,0,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  c.fillStyle=K
  // open eye, a touch wider while winking
  c.beginPath();c.ellipse(-34,-22-2*w,11+w,16+2*w,0,0,2*P);c.fill()
  // winking eye: the brow drops down and becomes the closed lid
  if(w<.9)c.beginPath(),c.ellipse(34,-22+8*w,11,16*(1-w),0,0,2*P),c.fill()
  c.lineWidth=8;c.beginPath();c.arc(-34,-50-10*w,16,1.2*P,1.8*P);c.stroke()
  c.lineWidth=8+w;c.beginPath();c.moveTo(20,-52+37*w);c.quadraticCurveTo(36,-60+24*w,50,-50+35*w);c.stroke()
  // lopsided smile hitching up on the wink side, dimple at that corner
  c.lineWidth=9;c.beginPath();c.moveTo(-40,26-2*w);c.quadraticCurveTo(0,64,46,18-10*w);c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(42,10-10*w);c.lineTo(52,25-10*w);c.stroke()
  // ping
  const k=Math.sin(cl((t-.24)/.24)*P)
  if(k>.02){
    c.save();c.translate(70,-58);c.rotate(k);c.scale(k,k);c.beginPath()
    for(let n=0;n<8;n++){const q=n%2?5:22,a=n*P/4;c.lineTo(q*Math.sin(a),-q*Math.cos(a))}
    c.closePath();c.lineWidth=6;c.strokeStyle=W;c.stroke();c.fill();c.restore()
  }
}
