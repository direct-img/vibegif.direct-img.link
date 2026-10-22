// girl in a hoodie with screentone twin tails suddenly gets it: focus lines rush in, a "!" pops over her head and her eyes go wide
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const DK=(()=>{const t=createCanvas(6,6),x=t.getContext('2d');x.fillStyle='#111';x.beginPath();x.arc(3,3,1.4,0,T);x.fill();return t})()
const toned=(c,path)=>{path();c.fillStyle='#fff';c.fill();c.fillStyle=c.createPattern(DK,'repeat');c.fill();c.stroke()}
export default(c,t,i)=>{
  const L=[0,0,0,0,0,1,1,1,1,1,1,1,1,.55,.2,0][i],on=i>=5&&i<=12,fl=on?max(0,1-(i-5)/4):0
  if(L){c.fillStyle='#111';for(let k=0;k<44;k++){const a=k*T/44+((k*37)%11)/40,ro=118,ri=ro-L*(30+((k*53+i*7)%7)*6),w=2.6/ro
    c.beginPath();c.moveTo(128+cos(a-w)*ro,128+sin(a-w)*ro);c.lineTo(128+cos(a)*ri,128+sin(a)*ri);c.lineTo(128+cos(a+w)*ro,128+sin(a+w)*ro);c.closePath();c.fill()}}
  c.lineWidth=5
  for(const d of[-1,1]){c.save();c.translate(128+d*58,70);c.rotate(-d*(.12+.4*fl))
    toned(c,()=>{c.beginPath();c.moveTo(0,-6);c.bezierCurveTo(d*44,0,d*50,70,d*28,128);c.quadraticCurveTo(d*22,142,d*12,148);c.quadraticCurveTo(d*20,90,-d*4,10);c.closePath()})
    c.lineWidth=2.5;c.beginPath();c.moveTo(d*12,14);c.bezierCurveTo(d*30,40,d*36,80,d*26,120);c.stroke();c.lineWidth=5
    c.fillStyle='#fff';c.beginPath();c.ellipse(d*2,0,8,10,d*.5,0,T);c.fill();c.stroke();c.restore()}
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(84,184);c.quadraticCurveTo(128,170,172,184);c.lineTo(186,204);c.quadraticCurveTo(128,186,70,204);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(100,192);c.quadraticCurveTo(62,200,56,246);c.lineTo(200,246);c.quadraticCurveTo(194,200,156,192);c.closePath();c.fill();c.stroke()
  c.beginPath();c.rect(116,166,24,26);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,188);c.moveTo(140,168);c.lineTo(140,188);c.stroke()
  c.lineWidth=3.5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*14,198),c.quadraticCurveTo(128+d*16,218,128+d*12,232),c.stroke(),c.beginPath(),c.arc(128+d*12,235,3.5,0,T),c.fillStyle='#fff',c.fill(),c.stroke()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[103,-1],[153,1]]){const y=140
    if(on){c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.ellipse(x,y,14,18,0,0,T);c.fill();c.stroke();c.fillStyle='#111';c.beginPath();c.arc(x,y+1,4.5,0,T);c.fill()
      c.lineWidth=4;c.beginPath();c.arc(x,y-14,16,PI*1.15,PI*1.85);c.stroke()}
    else{c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,13,17,0,0,T);c.fill();c.fillStyle='#111';c.beginPath();c.ellipse(x-3,y-1,10,14,0,0,T);c.fill()
      c.fillStyle='#fff';c.beginPath();c.arc(x-7,y-6,4.5,0,T);c.fill();c.beginPath();c.arc(x+1,y+7,2,0,T);c.fill()
      c.lineWidth=6;c.beginPath();c.moveTo(x-15,y-7);c.quadraticCurveTo(x,y-19,x+15,y-7);c.moveTo(x+d*14,y-8);c.lineTo(x+d*20,y-13);c.stroke()}
    c.lineWidth=3.5;c.beginPath();c.moveTo(x-10,y-(on?42:30));c.quadraticCurveTo(x,y-(on?48:33),x+10,y-(on?42:31));c.stroke()}
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,156);c.lineTo(127,159);c.stroke()
  c.lineWidth=3.5;c.beginPath()
  if(on){c.fillStyle='#111';c.ellipse(128,170,5,6.5,0,0,T);c.fill()}else{c.moveTo(121,169);c.lineTo(133,167);c.stroke()}
  const hair=()=>{c.beginPath();c.moveTo(70,144);c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,144)
    c.quadraticCurveTo(184,114,174,100);c.lineTo(166,112);c.lineTo(160,96);c.lineTo(148,114);c.lineTo(140,94);c.lineTo(126,116);c.lineTo(116,94);c.lineTo(106,114);c.lineTo(96,96);c.lineTo(88,112);c.lineTo(82,100);c.quadraticCurveTo(72,114,70,144);c.closePath()}
  c.lineWidth=6;hair();c.fillStyle='#fff';c.fill();c.save();c.clip();c.fillStyle=c.createPattern(DK,'repeat');c.fillRect(40,20,180,140)
  c.strokeStyle='#fff';c.lineWidth=10;for(const[a,e]of[[1.24,1.36],[1.44,1.56],[1.64,1.76]])c.beginPath(),c.arc(128,104,52,PI*a,PI*e),c.stroke();c.restore();c.strokeStyle='#111';c.lineWidth=6;hair();c.stroke()
  if(on){const p=i==5?1.35:i==6?.9:1+.06*sin(i*2.1)
    c.save();c.translate(214,58);c.scale(p,p);c.rotate(.12);c.fillStyle='#111';c.beginPath();c.moveTo(-9,-38);c.lineTo(9,-38);c.lineTo(3,6);c.lineTo(-3,6);c.closePath();c.fill();c.beginPath();c.arc(0,18,6,0,T);c.fill()
    c.lineWidth=4;c.beginPath();for(const a of[-2.5,-1.6,-.6])c.moveTo(cos(a)*24,-14+sin(a)*24),c.lineTo(cos(a)*34,-14+sin(a)*34);c.stroke();c.restore()}
}
