// mimic: a treasure chest that chomps twice, white teeth snapping, tongue lolling out the side, eyes on the lid
const{sin,max}=Math,T=2*Math.PI
export const frames=24,delay=70,rim=3
export default(c,t)=>{
  const o=max(0,sin(T*t*2)),O=34*o,w=6*sin(T*t*2+1),bl=t>.86&&t<.92
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  c.translate(0,4-4*o)
  const tx=222+w*.4,ty=188+w
  c.beginPath();c.moveTo(184,132-O*.5);c.bezierCurveTo(214,128-O*.5,236,150,tx+10,ty-6);c.arc(tx,ty-4,10,.2,Math.PI*.9)
  c.bezierCurveTo(212,174,206,156,186,150-O*.3);c.closePath();c.fill();c.stroke()
  c.beginPath();c.roundRect(52,138,152,76,8);c.fill();c.stroke()
  c.fillRect(58,136-O,140,O+4)
  c.save();c.translate(128,140-O);c.rotate(-.05*o);c.translate(-128,-140)
  c.beginPath();c.moveTo(52,140);c.lineTo(52,108);c.quadraticCurveTo(128,72,204,108);c.lineTo(204,140);c.closePath();c.fill();c.stroke()
  c.fillStyle=c.strokeStyle='#fff'
  for(let x=64;x<192;x+=16)c.beginPath(),c.moveTo(x,140),c.lineTo(x+16,140),c.lineTo(x+8,152),c.fill()
  c.lineWidth=3.5;for(const x of[82,174])c.beginPath(),c.moveTo(x,101),c.lineTo(x,124),c.stroke()
  for(const d of[-1,1])if(bl)c.beginPath(),c.moveTo(128+d*14,114),c.lineTo(128+d*32,110),c.stroke()
  else{c.beginPath();c.ellipse(128+d*23,112,10,7,d*.3,0,T);c.fill();c.fillStyle='#111';c.beginPath();c.arc(128+d*19,113,4,0,T);c.fill();c.fillStyle='#fff'}
  c.restore();c.fillStyle=c.strokeStyle='#fff'
  c.lineWidth=3;c.beginPath();c.moveTo(204,142-O*.4);c.quadraticCurveTo(222,154,tx-1,ty-10);c.stroke()
  for(let x=72;x<184;x+=16)c.beginPath(),c.moveTo(x,140),c.lineTo(x+16,140),c.lineTo(x+8,128),c.fill()
  c.lineWidth=3.5;for(const x of[82,174])c.beginPath(),c.moveTo(x,152),c.lineTo(x,206),c.stroke()
  c.beginPath();c.arc(128,166,7,0,T);c.fill();c.beginPath();c.moveTo(123,168);c.lineTo(133,168);c.lineTo(128,186);c.fill()
}
