// emoticon with a huge toothy grin, waggling its brows while a sparkle glints off its teeth
const P=Math.PI,K='#111',W='#fff'
export const frames=32,delay=55
const ty=x=>{const u=(x+64)/128;return 6+48*u*(1-u)}
export default(c,t,i)=>{
  // brow waggle: two quick hops in the first third
  const b=t<.36?Math.abs(Math.sin(t/.36*2*P)):0,h=b*b
  // glint: grows and spins between t .45 and .75
  const g=Math.max(0,Math.sin(Math.min(1,Math.max(0,(t-.45)/.3))*P))
  c.translate(128,130-4*h);c.rotate(-.06*g)
  c.beginPath();c.ellipse(0,0,96-2*h,96+3*h,0,0,2*P);c.fill();c.lineWidth=8;c.stroke()
  // happy squinting eyes, cheeks pushing the bottoms up
  for(const x of[-34,34]){
    c.fillStyle=K;c.beginPath();c.ellipse(x,-30,13,18,0,0,2*P);c.fill()
    c.fillStyle=W;c.beginPath();c.ellipse(x,-6,20,13,0,0,2*P);c.fill()
  }
  // brows
  c.lineWidth=8
  for(const d of[-1,1]){c.beginPath();c.arc(d*36,-48-9*h,17,1.2*P,1.8*P);c.stroke()}
  // mouth
  const m=()=>{c.beginPath();c.moveTo(-66,6);c.quadraticCurveTo(0,30,66,6);c.quadraticCurveTo(0,120,-66,6);c.closePath()}
  c.save();m();c.fillStyle=K;c.fill();c.clip()
  c.beginPath();c.moveTo(-70,6);c.quadraticCurveTo(0,30,70,6);c.lineTo(70,26);c.quadraticCurveTo(0,50,-70,26);c.fillStyle=W;c.fill()
  c.lineWidth=4
  for(const x of[-40,-20,0,20,40]){c.beginPath();c.moveTo(x,ty(x));c.lineTo(x,ty(x)+20);c.stroke()}
  c.restore();c.lineWidth=8;m();c.stroke()
  // the glint, a big sparkle and a little one trailing it
  const st=(x,y,k,r)=>{
    if(k<.02)return
    c.save();c.translate(x,y);c.rotate(k*P/2);c.scale(k,k);c.beginPath()
    for(let n=0;n<8;n++){const q=n%2?r/4:r,a=n*P/4;c.lineTo(q*Math.sin(a),-q*Math.cos(a))}
    c.closePath();c.lineWidth=6;c.strokeStyle=W;c.stroke();c.fillStyle=K;c.fill();c.restore()
  }
  st(62,4,g,26);st(84,-20,Math.max(0,Math.sin(Math.min(1,Math.max(0,(t-.52)/.26))*P)),13)
}
