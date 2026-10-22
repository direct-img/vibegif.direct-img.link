// girl with a screentone side tail daydreaming of manga meat, drooling with starry eyes while the thought bubble bobs and sparkles
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=90,rim=4
const DK=(()=>{const t=createCanvas(5,5),x=t.getContext('2d');x.fillStyle='#111';x.beginPath();x.arc(2.5,2.5,1.1,0,T);x.fill();return t})()
const star=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.14,y+(b-a)*r*.14,x+a*r,y+b*r);c.fill()}
const tone=(c,f)=>{f();c.fillStyle='#fff';c.fill();c.save();c.clip();c.fillStyle=c.createPattern(DK,'repeat');c.fillRect(0,0,256,256);c.restore();f();c.stroke()}
export default(c,t)=>{
  const dr=.5+.5*sin(T*t),by=3*sin(T*t*2)
  c.save();c.translate(96,248);c.scale(.8,.8);c.translate(-128,-250)
  c.save();c.translate(186,74);c.rotate(.1+.06*sin(T*t));c.lineWidth=6;tone(c,()=>{c.beginPath();c.moveTo(-8,0);c.bezierCurveTo(40,0,56,70,40,130);c.quadraticCurveTo(34,150,20,156);c.quadraticCurveTo(30,90,0,20);c.closePath()})
  c.lineWidth=2.5;c.beginPath();c.moveTo(10,14);c.bezierCurveTo(30,40,38,80,32,124);c.stroke();c.fillStyle='#fff';c.lineWidth=4.5;c.beginPath();c.ellipse(0,4,9,12,.4,0,T);c.fill();c.stroke();c.restore()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,56,248);c.lineTo(200,248);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(104,192);c.quadraticCurveTo(128,206,152,192);c.stroke();c.fillStyle='#111';c.beginPath();c.ellipse(128,228,16,10,0,0,T);c.fill();c.fillStyle='#fff';star(c,128,228,6)
  c.beginPath();c.rect(116,166,24,26);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){const y=142
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,13,17,0,0,T);c.fill();c.fillStyle='#111';c.beginPath();c.ellipse(x+3,y-3,10,13,0,0,T);c.fill()
    c.fillStyle='#fff';star(c,x+1,y-5,7+2*sin(T*t*2+d));c.beginPath();c.arc(x+7,y+5,2.2,0,T);c.fill();c.beginPath();c.arc(x-3,y+6,1.5,0,T);c.fill()
    c.lineWidth=6;c.beginPath();c.moveTo(x-15,y-7);c.quadraticCurveTo(x,y-19,x+15,y-7);c.moveTo(x+d*14,y-8);c.lineTo(x+d*20,y-13);c.stroke()
    c.lineWidth=3;c.beginPath();c.arc(x,y-14,18,PI*1.3,PI*1.7);c.stroke()}
  c.lineWidth=2.2;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-3,166),c.lineTo(128+d*42+k+3,159),c.stroke()
  c.lineWidth=3.5;c.fillStyle='#111';c.beginPath();c.moveTo(114,166);c.quadraticCurveTo(128,170,144,164);c.quadraticCurveTo(140,182,126,180);c.quadraticCurveTo(114,178,114,166);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(130,176,7,3.5,-.1,0,T);c.fill()
  c.fillStyle='#fff';c.lineWidth=3;const dl=6+16*dr;c.beginPath();c.moveTo(141,170);c.quadraticCurveTo(147,170+dl*.5,146,170+dl);c.arc(144,170+dl,3.5+dr*1.5,0,PI);c.quadraticCurveTo(140,170+dl*.5,139,172);c.fill();c.stroke()
  c.lineWidth=6;tone(c,()=>{c.beginPath();c.moveTo(70,144);c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,144)
    c.quadraticCurveTo(184,116,176,104);c.quadraticCurveTo(166,108,160,116);c.quadraticCurveTo(156,100,146,94);c.quadraticCurveTo(138,108,128,112);c.quadraticCurveTo(124,98,114,92);c.quadraticCurveTo(106,106,96,112);c.quadraticCurveTo(92,102,84,100);c.quadraticCurveTo(72,114,70,144);c.closePath()})
  c.strokeStyle='#fff';c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.56],[1.64,1.76]])c.beginPath(),c.arc(128,106,56,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  c.restore()
  c.save();c.translate(0,by)
  for(const[x,y,r]of[[150,122,4],[162,106,6.5]]){c.lineWidth=3.5;c.fillStyle='#fff';c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke()}
  const cb=[[190,52,34],[160,58,20],[220,58,22],[176,30,20],[208,30,20],[190,80,20],[164,78,14],[216,78,16]]
  c.lineWidth=11;for(const[x,y,r]of cb)c.beginPath(),c.arc(x,y,r,0,T),c.stroke()
  c.fillStyle='#fff';for(const[x,y,r]of cb)c.beginPath(),c.arc(x,y,r,0,T),c.fill()
  c.save();c.translate(190,56);c.rotate(-.35+.12*sin(T*t))
  c.lineWidth=4.5;c.fillStyle='#fff';for(const d of[-1,1])for(const e of[-1,1])c.beginPath(),c.arc(d*38,e*5,5.5,0,T),c.fill(),c.stroke()
  c.beginPath();c.roundRect(-40,-4,80,8,4);c.fill();c.stroke();for(const d of[-1,1])for(const e of[-1,1])c.beginPath(),c.arc(d*38,e*5,3.5,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(-28,-4);c.bezierCurveTo(-30,-26,22,-30,28,-8);c.bezierCurveTo(34,14,8,26,-8,22);c.bezierCurveTo(-26,18,-30,8,-28,-4);c.closePath();c.fill()
  c.save();c.clip();c.lineWidth=2;c.beginPath();for(let k=-40;k<40;k+=5)c.moveTo(k,26),c.lineTo(k+16,4);c.stroke();c.fillStyle='#fff';c.beginPath();c.ellipse(-6,-6,20,12,-.2,0,T);c.fill();c.restore();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(-10,-12,8,3.5,-.4,0,T);c.fill();c.restore()
  c.fillStyle='#111';for(const[x,y,o]of[[154,30,0],[228,40,.33],[222,94,.66]])star(c,x,y,7*Math.abs(sin(T*(t+o))))
  c.restore()
}
