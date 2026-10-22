// menacing girl with crosshatched hair: her face sinks into shadow with glinting eyes, black aura flames rise behind her and menace symbols drift up
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const DK=(()=>{const t=createCanvas(5,5),x=t.getContext('2d');x.fillStyle='#111';x.beginPath();x.arc(2.5,2.5,1.2,0,T);x.fill();return t})()
const xh=(c,x0,x1,y0,y1)=>{c.lineWidth=1.4;c.beginPath();for(let x=x0-(y1-y0);x<x1;x+=5)c.moveTo(x,y1),c.lineTo(x+(y1-y0),y0),c.moveTo(x,y0),c.lineTo(x+(y1-y0),y1);c.stroke()}
const go=(c,x,y,s,a)=>{c.save();c.translate(x,y);c.scale(s,s);c.rotate(a);c.transform(1,0,-.25,1,0,0);c.lineWidth=6;c.lineJoin='miter'
  c.beginPath();c.moveTo(-11,-12);c.lineTo(10,-12);c.lineTo(10,12);c.lineTo(-11,12);c.stroke();c.lineWidth=3.5;c.beginPath();c.moveTo(15,-22);c.lineTo(17,-15);c.moveTo(21,-23);c.lineTo(23,-16);c.stroke();c.restore()}
const face=c=>{c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96)}
const hair=c=>{c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,210,100,206,170);c.quadraticCurveTo(212,214,220,244);c.lineTo(36,244);c.quadraticCurveTo(44,214,50,170);c.bezierCurveTo(46,100,58,34,128,34);c.closePath()}
export default(c,t,i)=>{
  c.fillStyle='#111'
  for(let x=24;x<=232;x+=16){const dx=abs(x-128),b=dx<56?84:84+(dx-56)*1.7,h=(dx<70?58:40)+14*sin(2*T*t+x*.7)+8*sin(T*t*3+x),sw=6*sin(T*t*2+x*.3),tip=max(10,b-h)
    c.beginPath();c.moveTo(x-14,b+30);c.quadraticCurveTo(x-12,(b+tip)/2,x+sw,tip);c.quadraticCurveTo(x+12,(b+tip)/2,x+14,b+30);c.closePath();c.fill()
    c.strokeStyle='#fff';c.lineWidth=2;c.beginPath();c.moveTo(x-4,b+10);c.quadraticCurveTo(x-3,(b+tip)/2+8,x+sw*.6,tip+16);c.stroke();c.strokeStyle='#111'}
  c.lineWidth=6;hair(c);c.fillStyle='#fff';c.fill();c.save();c.clip();xh(c,30,226,30,250);c.restore();c.lineWidth=6;hair(c);c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(64,198,58,246);c.lineTo(198,246);c.quadraticCurveTo(192,198,156,190);c.closePath();c.fill()
  c.save();c.clip();c.fillStyle=c.createPattern(DK,'repeat');c.fillRect(50,186,160,64);c.fillStyle='#fff';c.beginPath();c.moveTo(108,190);c.lineTo(128,240);c.lineTo(148,190);c.fill();c.restore();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(108,190);c.lineTo(122,244);c.moveTo(148,190);c.lineTo(134,244);c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(122,206);c.lineTo(134,206);c.lineTo(137,236);c.lineTo(128,244);c.lineTo(119,236);c.closePath();c.fill()
  c.fillStyle='#fff';c.beginPath();c.rect(116,166,24,26);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.lineWidth=6;c.fillStyle='#fff';face(c);c.fill();c.stroke()
  c.save();face(c);c.clip();c.fillStyle='#111';c.fillRect(60,40,140,104);c.lineWidth=2.4;for(let x=76;x<182;x+=4){c.beginPath();c.moveTo(x,140);c.lineTo(x,150+((x*13)%7)*2.4);c.stroke()}c.restore()
  for(const[x,d]of[[103,-1],[153,1]]){const y=138
    c.fillStyle='#fff';c.beginPath();c.moveTo(x-d*15,y-6);c.quadraticCurveTo(x,y-10,x+d*15,y+2);c.quadraticCurveTo(x,y+8,x-d*15,y-6);c.fill()
    c.fillStyle='#111';c.beginPath();c.arc(x+d,y,2.6,0,T);c.fill()}
  const g=[1,.6,.35,.8][i%4];c.fillStyle='#fff';for(const[x,y]of[[87,128],[169,128]]){c.beginPath();c.moveTo(x,y-11*g);c.quadraticCurveTo(x+1.5,y-1.5,x+11*g,y);c.quadraticCurveTo(x+1.5,y+1.5,x,y+11*g);c.quadraticCurveTo(x-1.5,y+1.5,x-11*g,y);c.quadraticCurveTo(x-1.5,y-1.5,x,y-11*g);c.fill()}
  c.lineWidth=3.5;c.beginPath();c.moveTo(114,168);c.quadraticCurveTo(128,172,142,164);c.stroke();c.fillStyle='#fff';c.lineWidth=2.5;c.beginPath();c.moveTo(134,169);c.lineTo(137,176);c.lineTo(139,167);c.fill();c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(72,150);c.bezierCurveTo(56,74,88,36,128,36);c.bezierCurveTo(168,36,200,74,184,150);c.quadraticCurveTo(184,116,176,102);c.quadraticCurveTo(162,112,152,100);c.quadraticCurveTo(140,114,128,104);c.quadraticCurveTo(116,114,104,100);c.quadraticCurveTo(94,112,80,102);c.quadraticCurveTo(72,116,72,150);c.closePath()
  c.fillStyle='#fff';c.fill();c.save();c.clip();xh(c,50,206,30,160);c.strokeStyle='#fff';c.lineWidth=8;c.beginPath();c.arc(128,108,58,PI*1.25,PI*1.45);c.stroke();c.beginPath();c.arc(128,108,58,PI*1.55,PI*1.75);c.stroke();c.restore()
  c.strokeStyle='#111';c.lineWidth=6;c.stroke()
  c.strokeStyle='#111';for(const[x,o]of[[34,0],[222,.33],[30,.66],[226,.85]]){const p=(t+o)%1;{const k=1.15*sin(PI*p);if(k>.15)go(c,x+4*sin(T*p*2),214-p*160,k,.15*sin(T*p))}}
}
