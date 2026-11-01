// emoticon with a floating halo sways sweetly side to side, blushing and blinking its big innocent eyes
export const frames=24,delay=80
const K='#111',W='#fff',G='#9a9a9a',P=Math.PI,
cl=x=>x<0?0:x>1?1:x
export default(c,t)=>{
  const a=Math.sin(2*P*t),o=1-Math.sin(P*cl((t-.6)/.12))**2,
  hx=-7*Math.sin(2*P*t-1),hy=-103+3*Math.sin(4*P*t)
  c.translate(128,224);c.rotate(.075*a);c.translate(0,-96)
  // halo: a white band rimmed in black, its back half behind the head
  const ring=()=>{c.beginPath();c.ellipse(hx,hy,44,9,0,0,2*P);c.lineWidth=13;c.strokeStyle=K;c.stroke();c.lineWidth=5;c.strokeStyle=W;c.stroke();c.strokeStyle=K}
  ring()
  c.beginPath();c.arc(0,0,96,0,2*P);c.fillStyle=W;c.fill();c.lineWidth=8;c.stroke()
  c.save();c.beginPath();c.rect(-99,hy,198,40);c.clip();ring();c.restore()
  // big shiny eyes that blink, soft raised brows
  for(const m of[-1,1]){
    const x=34*m
    if(o>.7){
      c.fillStyle=K;c.beginPath();c.ellipse(x,-10,15,19*o,0,0,2*P);c.fill()
      c.fillStyle=W;c.beginPath();c.ellipse(x+5,-17*o,6,6*o,0,0,2*P);c.ellipse(x-5,-2*o,3,3*o,0,0,2*P);c.fill()
    }else{c.lineWidth=8;c.beginPath();c.moveTo(x-15,-8);c.quadraticCurveTo(x,2,x+15,-8);c.stroke()}
    c.lineWidth=6;c.beginPath();c.moveTo(x-12*m,-52);c.quadraticCurveTo(x+2*m,-54,x+13*m,-44);c.stroke()
    // grey blush hatching
    c.strokeStyle=G;c.lineWidth=4
    for(let k=-1;k<=1;k++){c.beginPath();c.moveTo(x*1.6+9*k-5,24+6);c.lineTo(x*1.6+9*k+5,24-6);c.stroke()}
    c.strokeStyle=K
  }
  // small sweet smile
  c.lineWidth=7;c.beginPath();c.moveTo(-14,34);c.quadraticCurveTo(0,46,14,34);c.stroke()
}
