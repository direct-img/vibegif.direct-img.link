// manga elf girl with wavy white hair: long ears twitch twice, droop as she blushes hard, then spring back up
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=20,delay=80,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
const ease=x=>x<0?0:x>1?1:x*x*(3-2*x)
const eye=(c,x,y,d,tn)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=tn;c.fillRect(x-12,y-14,24,32);c.fillStyle='#111';c.fillRect(x-12,y-14,24,12);c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke();c.beginPath();c.ellipse(x,y+3,7,10,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,4,6.5,0,0,T);c.fill()
  // star highlight
  c.fillStyle='#fff';c.save();c.translate(x-4,y-4);c.beginPath();for(let k=0;k<8;k++){const r=k%2?1.8:5.5,a=k*PI/4;c.lineTo(r*cos(a),r*sin(a))}c.fill();c.restore();c.beginPath();c.arc(x+5,y+9,2,0,T);c.fill()
  c.lineWidth=7;c.beginPath();c.moveTo(x-17,y-6);c.quadraticCurveTo(x,y-21,x+17,y-6);c.stroke()
  c.lineWidth=3;c.beginPath();for(const k of[0,1,2])c.moveTo(x+d*(13+k*2),y-9+k*4),c.lineTo(x+d*(21+k*2),y-13+k*5);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+19);c.lineTo(x+8,y+19);c.stroke()
}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat')
  const tw=.26*(max(0,sin((t-.04)/.08*PI))*(t>.04&&t<.12)+max(0,sin((t-.16)/.08*PI))*(t>.16&&t<.24))
  const dr=ease((t-.34)/.1)-ease((t-.72)/.08),sp=t>.8?.22*sin((t-.8)/.2*T*1.5)*(1-(t-.8)/.2):0
  const ang=-tw+.95*dr-sp,bl=ease((t-.32)/.08)*(1-ease((t-.76)/.08)),sh=bl>.5
  c.save();c.translate(128,118);c.scale(.82,.82);c.translate(-128,-120)
  // long wavy hair behind
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(128,36);c.bezierCurveTo(56,36,46,110,58,170)
  for(const[x,y]of[[44,196],[62,216],[46,240],[78,252]])c.quadraticCurveTo(x-14,y-12,x,y)
  c.lineTo(178,252);for(const[x,y]of[[210,240],[194,216],[212,196],[198,170]])c.quadraticCurveTo(x+14,y-12,x,y)
  c.bezierCurveTo(210,110,200,36,128,36);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();for(const d of[-1,1])for(const[a,b,e,f]of[[62,120,52,180],[72,150,66,226],[60,200,54,234]])c.moveTo(128+d*(a-128),b),c.quadraticCurveTo(128+d*(a-138),(b+f)/2,128+d*(e-128),f);c.stroke()
  // ears
  for(const d of[-1,1]){
    c.save();c.translate(128+d*50,132);c.rotate(d*ang)
    c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(0,-14);c.quadraticCurveTo(d*40,-26,d*80,-40);c.quadraticCurveTo(d*50,-6,d*6,16);c.closePath();c.fill();c.stroke()
    c.lineWidth=2.5;c.beginPath();c.moveTo(d*8,-4);c.quadraticCurveTo(d*36,-16,d*62,-30);c.stroke()
    if(bl>0){c.lineWidth=2;c.globalAlpha=1;for(let k=0;k<4*bl;k++)c.beginPath(),c.moveTo(d*(16+k*9),-4-k*4),c.lineTo(d*(22+k*9),4-k*4),c.stroke()}
    c.restore()
  }
  // tunic with a leafy collar
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(100,186);c.quadraticCurveTo(66,196,58,252);c.lineTo(198,252);c.quadraticCurveTo(190,196,156,186);c.closePath();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(50,210,160,50);c.restore();c.stroke()
  c.lineWidth=4;for(const[x,a]of[[100,-.5],[116,-.2],[140,.2],[156,.5]])c.save(),c.translate(x,200),c.rotate(a),c.beginPath(),c.ellipse(0,0,9,16,0,0,T),c.fill(),c.stroke(),c.beginPath(),c.moveTo(0,-12),c.lineTo(0,12),c.lineWidth=2,c.stroke(),c.lineWidth=4,c.restore()
  c.fillStyle='#fff';c.beginPath();c.rect(116,166,24,22);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,166);c.lineTo(116,186);c.moveTo(140,166);c.lineTo(140,186);c.stroke()
  // face
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(sh){c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*13,132),c.lineTo(128+d*35,140),c.lineTo(128+d*13,148),c.stroke()}
  else{eye(c,103,140,-1,tn);eye(c,153,140,1,tn)}
  // blush hatching spreads across the cheeks and nose
  const n=3+round6(bl)
  c.lineWidth=2.5;for(const d of[-1,1])for(let k=0;k<n;k++){const x=128+d*(46-k*5);c.beginPath();c.moveTo(x-3,168);c.lineTo(x+3,158);c.stroke()}
  if(sh){c.lineWidth=3.5;c.fillStyle='#fff';c.beginPath();c.moveTo(116,172);for(let k=0;k<6;k++)c.lineTo(120+k*4,k%2?168:174);c.stroke()
    // steam puffs
    for(const[x,y,r]of[[182,60,7],[200,42,5.5]]){c.lineWidth=3;c.beginPath();c.arc(x-r,y-4*bl,r*.8,PI*.5,PI*1.5);c.arc(x,y-4*bl-r*.5,r,PI,0);c.arc(x+r,y-4*bl,r*.8,PI*1.5,PI*.5);c.closePath();c.fill();c.stroke()}}
  else{c.lineWidth=3.5;c.beginPath();c.arc(128,166,6,.2*PI,.8*PI);c.stroke()}
  // bangs, wavy white with strand lines
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(70,150);c.bezierCurveTo(52,76,86,40,128,40);c.bezierCurveTo(170,40,204,76,186,150)
  c.quadraticCurveTo(184,118,174,104);c.quadraticCurveTo(168,114,160,116);c.quadraticCurveTo(156,98,144,92);c.quadraticCurveTo(140,108,128,114);c.quadraticCurveTo(122,98,108,92)
  c.quadraticCurveTo(102,110,94,116);c.quadraticCurveTo(88,112,82,104);c.quadraticCurveTo(72,120,70,150);c.closePath();c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();for(const[a,b,e,f]of[[100,54,88,90],[120,48,114,84],[146,50,154,84],[164,60,176,96]])c.moveTo(a,b),c.quadraticCurveTo((a+e)/2+6,(b+f)/2,e,f);c.stroke()
  // braided crown with a leaf circlet gem
  c.lineWidth=4;for(let k=0;k<7;k++){const a=PI*(1.18+k*.107);c.beginPath();c.ellipse(128+64*cos(a),112+64*sin(a),8,6,a+PI/2,0,T);c.fill();c.stroke()}
  c.save();c.translate(128,52);c.rotate(PI/4);c.beginPath();c.rect(-8,-8,16,16);c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(-8,-8,16,16);c.restore();c.stroke();c.restore()
  c.restore()
}
const round6=x=>Math.round(x*5)
