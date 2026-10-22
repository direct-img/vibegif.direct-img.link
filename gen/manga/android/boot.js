// manga android girl booting up: progress bar fills with eyes shut, a scan line sweeps her eyes open, lens irises focus, antenna blinks, then she powers down
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=20,delay=90,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
// camera-lens eye: rings, crosshair ticks, a pupil that focuses down to size f
const eye=(c,x,y,d,f,tn)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,16,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,14,0,0,T);c.clip();c.fillStyle=tn;c.fillRect(x-12,y-12,24,30);c.fillStyle='#111';c.fillRect(x-12,y-12,24,8);c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,14,0,0,T);c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y+3,7.5,0,T);c.fill();c.stroke()
  c.lineWidth=1.8;c.beginPath();for(const a of[0,PI/2,PI,PI*1.5])c.moveTo(x+cos(a)*5.5,y+3+sin(a)*5.5),c.lineTo(x+cos(a)*7.5,y+3+sin(a)*7.5);c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(x,y+3,f,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-5,y-4,3,0,T);c.fill()
  c.lineWidth=7;c.beginPath();c.moveTo(x-17,y-6);c.quadraticCurveTo(x,y-19,x+17,y-6);c.moveTo(x+d*16,y-7);c.lineTo(x+d*22,y-11);c.stroke()
}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat'),on=t>=.35&&t<.9,sc=t>=.35&&t<.5?(t-.35)/.15:-1
  const prog=t<.35?t/.3:t<.9?1:0,f=on?max(3,8-(t-.35)*40):0,ant=on&&t>=.5&&(t*20|0)%4<2
  c.save();c.translate(128,124);c.scale(.95,.95);c.translate(-128,-120)
  // bodysuit with panel lines and a status bar
  const body=()=>{c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(60,198,52,256);c.lineTo(204,256);c.quadraticCurveTo(196,198,156,190);c.closePath()}
  c.lineWidth=6;c.fillStyle='#fff';body();c.fill()
  c.save();c.clip();c.fillStyle=tn;c.beginPath();c.moveTo(40,200);c.lineTo(104,200);c.lineTo(96,260);c.lineTo(40,260);c.moveTo(216,200);c.lineTo(152,200);c.lineTo(160,260);c.lineTo(216,260);c.fill();c.restore();body();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(104,196);c.lineTo(96,256);c.moveTo(152,196);c.lineTo(160,256);c.stroke()
  c.lineWidth=4;c.beginPath();c.rect(104,222,48,14);c.fill();c.stroke();if(prog>0){c.fillStyle='#111';c.fillRect(107,225,42*min(1,prog),8)}
  if(on){c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(118,244);c.lineTo(126,250);c.lineTo(140,238);c.stroke()}
  // segmented neck
  c.fillStyle='#fff';c.beginPath();c.rect(114,166,28,28);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(114,166);c.lineTo(114,192);c.moveTo(142,166);c.lineTo(142,192);c.stroke()
  c.lineWidth=3;c.beginPath();for(const y of[176,184])c.moveTo(114,y),c.lineTo(142,y);c.stroke()
  // ink black bob, back
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,208,100,200,168);c.lineTo(56,168);c.bezierCurveTo(48,100,60,34,128,34);c.fill();c.stroke()
  // face
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  // cheek panel seams
  c.lineWidth=2.5;c.setLineDash([5,4]);c.beginPath();c.moveTo(166,152);c.lineTo(160,174);c.moveTo(90,152);c.lineTo(96,174);c.stroke();c.setLineDash([])
  c.beginPath();c.arc(163,162,2,0,T);c.stroke()
  if(on){eye(c,103,140,-1,f,tn);eye(c,153,140,1,f,tn)}
  else{c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,144),c.quadraticCurveTo(x,149,x+15,144),c.stroke()
    c.lineWidth=3;c.beginPath();for(const x of[103,153])for(const k of[-8,0,8])c.moveTo(x+k,148),c.lineTo(x+k*1.2,154);c.stroke()}
  c.lineWidth=3.5;c.beginPath();if(on)c.arc(128,166,6,.2*PI,.8*PI);else c.moveTo(123,170),c.lineTo(133,170);c.stroke()
  // scan line sweeping down across the eyes
  if(sc>=0){const y=110+sc*60;c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.rect(68,y-4,120,8);c.fill();c.stroke()
    c.lineWidth=1.8;for(const k of[1,2])c.beginPath(),c.moveTo(72,y-4-k*5),c.lineTo(184,y-4-k*5),c.stroke()}
  // blunt bangs with a shine band
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(70,150);c.bezierCurveTo(52,72,88,38,128,38);c.bezierCurveTo(168,38,204,72,186,150);c.lineTo(182,108);c.lineTo(74,108);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;for(const[a,e]of[[1.2,1.34],[1.42,1.56],[1.64,1.78]])c.beginPath(),c.arc(128,106,54,PI*a,PI*e),c.stroke()
  c.lineWidth=2.5;for(const x of[96,116,140,160])c.beginPath(),c.moveTo(x,90),c.lineTo(x,106),c.stroke();c.strokeStyle='#111'
  // ear modules and antenna
  for(const d of[-1,1]){c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(128+d*58,128,13,20,0,0,T);c.fill();c.stroke();c.lineWidth=2.5;c.beginPath();c.ellipse(128+d*58,128,6,11,0,0,T);c.stroke()
    c.save();c.beginPath();c.ellipse(128+d*58,128,6,11,0,0,T);c.clip();c.fillStyle=tn;c.fillRect(128+d*58-8,114,16,28);c.restore()}
  c.lineWidth=4;c.beginPath();c.moveTo(192,112);c.lineTo(214,58);c.stroke()
  c.fillStyle=ant?'#fff':'#111';c.beginPath();c.arc(216,52,8,0,T);c.fill();c.stroke()
  if(ant){c.lineWidth=3;c.beginPath();for(const a of[-2.4,-1.6,-.8,0])c.moveTo(216+cos(a)*13,52+sin(a)*13),c.lineTo(216+cos(a)*20,52+sin(a)*20);c.stroke()}
  // boot dots while loading
  if(!on&&t<.35){c.fillStyle='#111';for(let k=0;k<3;k++)if(k<=(t*30|0)%4)c.beginPath(),c.arc(110+k*18,26,4,0,T),c.fill()}
  c.restore()
}
