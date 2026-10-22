// manga girl with messy white hair squeezes a pillow over her blushing face and rocks side to side kicking her feet, hearts popping
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=12,delay=80,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const heart=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore();c.fill();c.stroke()}
export default(c,t)=>{
  const DOT=tone(c,6,1.3),a=.2*sin(t*T*2),sq=1+.04*abs(sin(t*T*4))
  // hearts popping out to the sides
  c.lineWidth=3.5;for(let k=0;k<4;k++){const p=(t*2+k/4)%1,d=k%2?1:-1,s=1.3*sin(PI*p);if(s>.15){c.fillStyle=k%3?'#fff':'#111';heart(c,128+d*(70+p*30),120-p*70+(k>1?40:0),s)}}
  c.save();c.translate(128,248);c.rotate(a);c.translate(-128,-248)
  // kicking feet behind the pillow
  for(const d of[-1,1]){const k=8*sin(t*T*4+(d>0?PI:0));c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(128+d*30,236-max(0,k),13,9,d*.3,0,T);c.fill();c.stroke()
    c.lineWidth=2.5;for(const j of[-5,0,5])c.beginPath(),c.arc(128+d*30+j,229-max(0,k),2,PI,0),c.stroke()}
  // messy white hair behind
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(128,30);c.bezierCurveTo(196,30,212,92,204,140);c.lineTo(214,160);c.lineTo(198,162);c.lineTo(204,184);c.lineTo(52,184);c.lineTo(58,162);c.lineTo(42,160);c.lineTo(52,140);c.bezierCurveTo(44,92,60,30,128,30);c.fill();c.stroke()
  c.lineWidth=3.5;for(const d of[-1,1])for(const k of[0,1])c.beginPath(),c.moveTo(128+d*(66+k*8),96+k*16),c.quadraticCurveTo(128+d*(80+k*6),130,128+d*(70+k*10),170),c.stroke()
  // pajama shoulders with stars
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(100,176);c.quadraticCurveTo(62,184,56,228);c.lineTo(200,228);c.quadraticCurveTo(194,184,156,176);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  // face, half buried
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.save();c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.clip()
  c.lineWidth=2.5;for(const d of[-1,1])for(let k=-3;k<=3;k++){const x=128+d*44+k*6;c.beginPath();c.moveTo(x+3,146);c.lineTo(x-4,162);c.stroke()}c.restore()
  c.lineWidth=7;for(const d of[-1,1]){const x=128+d*25;c.beginPath();c.moveTo(x-d*13,124);c.lineTo(x+d*11,136);c.lineTo(x-d*13,148);c.stroke()}
  c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*16,112),c.lineTo(128+d*36,104),c.stroke()
  // messy bangs with stray strands
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(70,142)
  c.bezierCurveTo(52,70,88,36,128,36);c.bezierCurveTo(168,36,204,70,186,142)
  c.lineTo(178,104);c.lineTo(168,114);c.lineTo(162,92);c.lineTo(150,106);c.lineTo(140,88);c.lineTo(128,104);c.lineTo(116,86);c.lineTo(106,104);c.lineTo(96,92);c.lineTo(88,112);c.lineTo(78,104);c.closePath();c.fill();c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(118,38);c.quadraticCurveTo(104,16,90,22);c.moveTo(140,38);c.quadraticCurveTo(152,12,170,20);c.moveTo(184,72);c.quadraticCurveTo(206,64,212,76);c.stroke()
  c.lineWidth=3.5;for(const[x0,y0,x1,y1]of[[104,50,96,76],[130,46,132,74],[156,52,164,78]])c.beginPath(),c.moveTo(x0,y0),c.quadraticCurveTo((x0+x1)/2+5,(y0+y1)/2,x1,y1),c.stroke()
  // pillow squeezed in her arms
  c.save();c.translate(128,190);c.scale(sq,2-sq);c.translate(-128,-190)
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(70,160);c.quadraticCurveTo(128,148,186,160);c.quadraticCurveTo(196,196,186,234);c.quadraticCurveTo(128,244,70,234);c.quadraticCurveTo(60,196,70,160);c.fill();c.stroke()
  c.lineWidth=3;c.setLineDash([5,5]);c.beginPath();c.moveTo(78,168);c.quadraticCurveTo(128,158,178,168);c.quadraticCurveTo(186,196,178,226);c.quadraticCurveTo(128,234,78,226);c.quadraticCurveTo(70,196,78,168);c.stroke();c.setLineDash([])
  c.fillStyle=DOT;c.lineWidth=4;c.beginPath();c.moveTo(128,218);c.bezierCurveTo(100,200,108,176,128,188);c.bezierCurveTo(148,176,156,200,128,218);c.fill();c.stroke()
  c.lineWidth=5;for(const[x,y,d]of[[70,160,-1],[186,160,1],[70,234,-1],[186,234,1]])c.beginPath(),c.moveTo(x,y),c.lineTo(x+d*8,y+(y<190?-6:6)),c.moveTo(x,y),c.lineTo(x+d*10,y+(y<190?2:-2)),c.stroke()
  c.restore()
  // arms wrapped around the pillow
  for(const d of[-1,1]){for(const[l,st]of[[22,'#111'],[13,'#fff'],[13,DOT]])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(128+d*64,190),c.quadraticCurveTo(128+d*60,218,128+d*26,210),c.stroke()
    c.strokeStyle='#111';c.lineWidth=4.5;c.fillStyle='#fff';c.beginPath();c.ellipse(128+d*20,208,9,8,0,0,T);c.fill();c.stroke()}
  c.restore()
  // wiggle lines
  c.lineWidth=4;for(const d of[-1,1]){const o=a*d>0?1:.4;c.beginPath();c.moveTo(128+d*96,170);c.quadraticCurveTo(128+d*104,180,128+d*96,190);c.quadraticCurveTo(128+d*88,200,128+d*96,210);c.globalAlpha=o;c.stroke();c.globalAlpha=1}
}
