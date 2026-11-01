// emoticon with a smug half-lidded smirk lifts its chin and waggles its eyebrows twice
export const frames=24,delay=70
const K='#111',W='#fff',P=Math.PI,
cl=x=>x<0?0:x>1?1:x
export default(c,t)=>{
  const k=(1-Math.cos(2*P*t))/2,s=cl((t-.28)/.44),b=Math.sin(2*P*s)**2
  c.translate(128,128);c.rotate(-.1*k)
  c.beginPath();c.arc(0,0,96,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  c.translate(4*k,-7*k)
  // heavy lids over pupils that peek down and to the side
  for(const m of[-1,1]){
    const x=37*m,y=-14,l=y-2+2*b
    c.save();c.beginPath();c.rect(x-30,l,60,40);c.clip()
    c.fillStyle=K;c.beginPath();c.ellipse(x+5,y+2,17,21,0,0,2*P);c.fill();c.restore()
    c.lineWidth=9;c.beginPath();c.moveTo(x-22,l+1-m);c.lineTo(x+22,l+1+m*1.5);c.stroke()
    // brows, the right one cocked higher, both bouncing
    const r=m>0?5:0,u=y-27-r-10*b
    c.beginPath();c.moveTo(x-16,u+6+(m>0?2:0));c.quadraticCurveTo(x+(m>0?0:2),u-8,x+18,u+(m>0?2:4));c.stroke()
  }
  // lopsided smirk tucked at one corner, curling up at the other
  c.lineWidth=9;c.beginPath();c.moveTo(-36,40);c.quadraticCurveTo(-32,49,-22,49);c.bezierCurveTo(4,50,28,48,44,26);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(39,17);c.quadraticCurveTo(51,19,53,30);c.stroke()
}
