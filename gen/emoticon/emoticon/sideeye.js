// emoticon darts a suspicious side-eye glance, narrowing its eyes and cocking a brow, then looks back
export const frames=28,delay=70
const K='#111',W='#fff',P=Math.PI,
cl=x=>x<0?0:x>1?1:x,
sm=x=>(x=cl(x),x*x*(3-2*x)),
out=x=>1-(1-cl(x))**3
export default(c,t)=>{
  const g=out((t-.04)/.1)-sm((t-.8)/.14),   // glance over and back
  n=.2+.8*sm((t-.1)/.3)*(1-sm((t-.78)/.14)), // squint deepens while it stares
  f=Math.sin(P*cl((t-.5)/.12))              // a little suspicious lean partway through
  c.translate(128,128);c.rotate(-.06*g)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  c.translate(-8*g-3*f,0)
  for(const m of[-1,1]){
    // heavy flat lid over a white bowl, the pupil sliding into the corner as the lid sinks
    const x=38*m,R=24,l=-26+8*n+2*f,D=26-9*n,z=4*n*m,
    eye=()=>{c.beginPath();c.moveTo(x-R,l+z);c.lineTo(x+R,l-z);c.ellipse(x,l,R,D,0,0,P)}
    eye();c.fillStyle=W;c.fill();c.save();c.clip()
    c.fillStyle=K;c.beginPath();c.arc(x+14*g,l+D*.42,12.5,0,2*P);c.fill();c.restore()
    c.lineWidth=6;eye();c.stroke()
    c.lineWidth=10;c.beginPath();c.moveTo(x-R-2,l+z*1.1);c.lineTo(x+R+2,l-z*1.1);c.stroke()
    // one brow pulled down hard, the other cocked up
    const u=m<0?-40+5*n:-46-5*n-3*f
    c.lineWidth=8;c.beginPath()
    m<0?(c.moveTo(x-18,u-4*g),c.lineTo(x+18,u+6*g)):(c.moveTo(x-16,u+2),c.quadraticCurveTo(x,u-8*g,x+18,u-2*g))
    c.stroke()
  }
  // tight little mouth pulled to the side
  c.lineWidth=8;c.beginPath();c.moveTo(-12+10*g,46);c.quadraticCurveTo(4+12*g,42-2*g,18+14*g,44+3*g);c.stroke()
}
