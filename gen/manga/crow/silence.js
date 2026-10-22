// deadpan girl with an ink-black pixie cut staring with dot eyes in awkward silence while ellipsis dots appear and a crow flaps across
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=80,rim=4
const DK=(()=>{const t=createCanvas(5,5),x=t.getContext('2d');x.fillStyle='#111';x.beginPath();x.arc(2.5,2.5,1.2,0,T);x.fill();return t})()
const crow=(c,x,y,w)=>{
  c.save();c.translate(x,y);c.fillStyle='#111';c.lineWidth=3
  c.beginPath();c.moveTo(-14,0);c.lineTo(-30,-4);c.lineTo(-31,6);c.closePath();c.fill()
  c.beginPath();c.ellipse(0,0,16,9,-.1,0,T);c.fill();c.beginPath();c.arc(15,-5,8,0,T);c.fill()
  c.beginPath();c.moveTo(21,-8);c.lineTo(33,-3);c.lineTo(21,-1);c.closePath();c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(17,-7,2,0,T);c.fill();c.fillStyle='#111'
  c.beginPath();c.moveTo(-8,-4);c.lineTo(8,-4);c.lineTo(-2+6*w,-4-26*w);c.lineTo(-10+4*w,-6-22*w);c.lineTo(-14,-4-14*w);c.closePath();c.fill()
  c.restore()
}
export default(c,t,i)=>{
  const cx=-50+t*356,cy=38+5*sin(T*t*2),blink=i==13
  c.save();c.translate(128,250);c.scale(.84,.84);c.translate(-128,-250)
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(100,186);c.quadraticCurveTo(62,196,56,248);c.lineTo(200,248);c.quadraticCurveTo(194,196,156,186);c.closePath();c.fill()
  c.save();c.clip();c.fillStyle=c.createPattern(DK,'repeat');c.fillRect(50,180,160,70);c.restore();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(108,170,40,30,10);c.fill();c.save();c.clip();c.lineWidth=2.5;for(const y of[178,186,194])c.beginPath(),c.moveTo(106,y),c.lineTo(150,y),c.stroke();c.restore();c.lineWidth=5;c.beginPath();c.roundRect(108,170,40,30,10);c.stroke()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.fillStyle='#111';c.lineWidth=5
  for(const[x,d]of[[106,-1],[150,1]]){if(blink){c.beginPath();c.moveTo(x-7,142);c.lineTo(x+7,142);c.stroke()}else{c.beginPath();c.arc(x,142,5,0,T);c.fill()}c.lineWidth=3.5;c.beginPath();c.moveTo(x+d*9,138);c.lineTo(x+d*14,134);c.stroke();c.lineWidth=5}
  c.lineWidth=3.5;c.beginPath();c.moveTo(94,124);c.lineTo(116,124);c.moveTo(140,124);c.lineTo(162,124);c.stroke()
  c.beginPath();c.moveTo(120,168);c.lineTo(136,168);c.stroke()
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(68,168);c.bezierCurveTo(48,76,84,38,128,38);c.bezierCurveTo(172,38,208,76,188,168)
  c.lineTo(180,160);c.lineTo(176,170);c.lineTo(172,118);c.lineTo(164,124);c.lineTo(160,104);c.lineTo(150,116);c.lineTo(146,98);c.lineTo(136,114);c.lineTo(128,98);c.lineTo(120,114);c.lineTo(110,98);c.lineTo(104,116);c.lineTo(94,104);c.lineTo(90,124);c.lineTo(84,118);c.lineTo(80,170);c.lineTo(76,160);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.56],[1.64,1.76]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.save();c.translate(86,80);c.rotate(-.5);for(const d of[-1,1])c.beginPath(),c.moveTo(0,0),c.lineTo(d*16,-9),c.lineTo(d*16,9),c.closePath(),c.fill(),c.stroke();c.beginPath();c.arc(0,0,5,0,T);c.fill();c.stroke();c.restore()
  c.restore()
  c.fillStyle='#111';for(let k=0;k<3;k++)if(t>=.12+k*.1&&t<.92)c.beginPath(),c.arc(178+k*18,104,6,0,T),c.fill()
  c.save();c.translate(cx,cy);c.scale(1.35,1.35);crow(c,0,0,sin(T*t*6));c.restore()
}
