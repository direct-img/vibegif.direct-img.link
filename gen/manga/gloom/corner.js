// chibi with ink-black braids sulking with her knees hugged, gloom lines on her face, a dark aura wavering up and mushrooms sprouting beside her
import{createCanvas}from'@napi-rs/canvas'
const{sin,PI,min,max}=Math,T=2*PI
export const frames=12,delay=100,rim=4
const DK=(()=>{const t=createCanvas(5,5),x=t.getContext('2d');x.fillStyle='#111';x.beginPath();x.arc(2.5,2.5,1.1,0,T);x.fill();return t})()
const shroom=(c,x,s,dot)=>{
  if(s<=0)return
  c.save();c.translate(x,236);c.scale(s,s);c.lineWidth=3.5;c.fillStyle='#fff'
  c.beginPath();c.roundRect(-5,-18,10,18,4);c.fill();c.stroke()
  c.beginPath();c.moveTo(-15,-16);c.quadraticCurveTo(-14,-34,0,-34);c.quadraticCurveTo(14,-34,15,-16);c.closePath();c.fill()
  if(dot){c.save();c.clip();c.fillStyle=c.createPattern(DK,'repeat');c.fillRect(-16,-36,32,22);c.restore()}else{c.fillStyle='#111';for(const[a,b,r]of[[-6,-25,3],[5,-27,2.5],[8,-20,2]])c.beginPath(),c.arc(a,b,r,0,T),c.fill()}
  c.stroke();c.restore()
}
export default(c,t)=>{
  c.lineWidth=3.5
  for(const x0 of[34,58,198,222]){c.beginPath();for(let y=40;y<=200;y+=6)c.lineTo(x0+5*sin(y*.09+T*t*2+x0),y);c.stroke()}
  c.lineWidth=3;c.fillStyle='#fff';c.beginPath();c.ellipse(128,238,104,12,0,0,T);c.fill();c.save();c.clip();c.fillStyle=c.createPattern(DK,'repeat');c.fillRect(20,224,216,30);c.restore();c.stroke()
  for(const[x,o,d]of[[40,0,1],[66,.3,0],[192,.55,1],[216,.8,0]]){const a=(t+o)%1;shroom(c,x,a<.18?a/.18:a>.88?(1-a)/.12:1+.04*sin(T*a*3),d)}
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(76,234);c.bezierCurveTo(70,186,86,160,128,158);c.bezierCurveTo(170,160,186,186,180,234);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(128,164);c.lineTo(128,230);c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*20,238,16,7,0,0,T),c.fill()
  c.save();c.translate(128,124);c.scale(.82,.82);c.translate(-128,-124)
  for(const d of[-1,1]){c.lineWidth=5;for(let k=0;k<5;k++){const x=128+d*(60+k*1.5),y=128+k*20;c.fillStyle='#111';c.beginPath();c.ellipse(x,y,11-k*.6,12,d*.2,0,T);c.fill();c.strokeStyle='#fff';c.lineWidth=2;c.beginPath();c.arc(x,y-3,8-k*.5,PI*.2,PI*.8);c.stroke();c.strokeStyle='#111'}
    c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();c.roundRect(128+d*67-7,224,14,6,2);c.fill();c.stroke()}
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){const y=142
    c.save();c.beginPath();c.ellipse(x,y,13,15,0,0,T);c.clip();c.fillStyle='#fff';c.fill();c.fillStyle='#111';c.beginPath();c.ellipse(x,y+6,9,11,0,0,T);c.fill();c.fillStyle=c.createPattern(DK,'repeat');c.fillRect(x-14,y-16,28,13);c.restore()
    c.lineWidth=6;c.beginPath();c.moveTo(x-15,y-3);c.lineTo(x+15,y-3);c.stroke();c.lineWidth=2.5;c.beginPath();c.moveTo(x-9,y+18);c.quadraticCurveTo(x,y+21,x+9,y+18);c.stroke()}
  c.save();c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.clip()
  c.lineWidth=2.2;for(let x=82;x<176;x+=6){c.beginPath();c.moveTo(x,80);c.lineTo(x,112+((x*7)%4)*4);c.stroke()}c.restore()
  c.lineWidth=3.5;c.beginPath();c.moveTo(118,172);c.quadraticCurveTo(121,169,124,172);c.quadraticCurveTo(127,175,130,172);c.quadraticCurveTo(133,169,137,172);c.stroke()
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(70,150);c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,150)
  c.quadraticCurveTo(184,118,178,104);c.quadraticCurveTo(166,108,160,118);c.quadraticCurveTo(152,104,140,100);c.quadraticCurveTo(134,112,128,118);c.quadraticCurveTo(120,104,110,100);c.quadraticCurveTo(100,112,96,118);c.quadraticCurveTo(88,106,78,104);c.quadraticCurveTo(72,118,70,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.56],[1.64,1.76]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  c.restore()
  for(const d of[-1,1]){c.lineWidth=24;c.beginPath();c.moveTo(128+d*52,176);c.quadraticCurveTo(128+d*46,208,128+d*12,206);c.stroke();c.lineWidth=14;c.strokeStyle='#fff';c.stroke();c.strokeStyle='#111'
    c.fillStyle='#fff';c.lineWidth=4.5;c.beginPath();c.ellipse(128+d*8,204,9,8,0,0,T);c.fill();c.stroke()}
  if(t>=.5&&t<.85){const p=(t-.5)/.35,x=150+p*30,y=166-p*24,r=4+p*5;c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.arc(x,y,r,0,T);c.arc(x+r*.9,y-r*.5,r*.7,0,T);c.fill();c.beginPath();c.arc(x,y,r,0,T);c.stroke();c.beginPath();c.arc(x+r*.9,y-r*.5,r*.7,-PI*.9,PI*.6);c.stroke()}
}
