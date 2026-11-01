// three candy corns hopping one after another in a wave, squashing on takeoff and landing
export const frames=30,delay=45,rim=5
const K='#2a1810',PI=Math.PI,H=86,W=31,G=206
// one candy corn standing on the origin
const corn=c=>{
  const p=()=>{c.beginPath();c.moveTo(0,-H);c.bezierCurveTo(W*.4,-H,W*.92,-H*.42,W,-12);c.quadraticCurveTo(W+1,0,W-12,0);c.lineTo(12-W,0);c.quadraticCurveTo(-W-1,0,-W,-12);c.bezierCurveTo(-W*.92,-H*.42,-W*.4,-H,0,-H)}
  c.save();p();c.clip()
  c.fillStyle='#ffc93c';c.fillRect(-40,-40,80,44)
  c.fillStyle='#f47a1f';c.beginPath();c.moveTo(-40,-30);c.quadraticCurveTo(0,-22,40,-30);c.lineTo(40,-62);c.quadraticCurveTo(0,-54,-40,-62);c.fill()
  c.fillStyle='#fff8ec';c.beginPath();c.moveTo(-40,-62);c.quadraticCurveTo(0,-54,40,-62);c.lineTo(40,-H-4);c.lineTo(-40,-H-4);c.fill()
  c.fillStyle='rgba(120,40,0,.22)';c.beginPath();c.moveTo(14,4);c.bezierCurveTo(20,-30,14,-64,0,-H-6);c.lineTo(40,-H);c.lineTo(40,4);c.fill()
  c.strokeStyle='rgba(255,255,255,.75)';c.lineWidth=5;c.beginPath();c.moveTo(-18,-14);c.bezierCurveTo(-18,-34,-14,-52,-6,-66);c.stroke()
  c.restore();c.lineWidth=5.5;p();c.stroke()
}
export default(c,t)=>{
  c.strokeStyle=K
  for(let k=0;k<3;k++){
    const p=(t-k/3+1)%1
    let y=0,s=0,st=0,r=0
    if(p<.1)s=Math.sin(PI*p/.1)
    else if(p<.42){const u=(p-.1)/.32;y=64*4*u*(1-u);st=.13*Math.abs(1-2*u);r=.16*Math.sin(2*PI*u)}
    else if(p<.54)s=Math.sin(PI*(p-.42)/.12)
    c.save();c.translate(54+74*k,G-y);c.rotate(r);c.scale(1+.15*s-st*.4,1-.2*s+st);corn(c);c.restore()
  }
}
