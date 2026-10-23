// glossy ink-haired girl with a side ponytail sneaking a folded note across the desk under her long sleeve, eyes darting, sweat drop, a hand snatches it, phew
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max,floor}=Math,T=2*PI
export const frames=20,delay=90,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const toned=(c,p)=>{c.fillStyle='#fff';c.fill();c.fillStyle=p;c.fill();c.stroke()}
const ease=f=>f<=0?0:f>=1?1:.5-.5*cos(PI*f)
const X0=134,X1=196
const memo=(c,x,y)=>{c.save();c.translate(x,y);c.scale(1.45,1.45);c.lineWidth=2.6;c.fillStyle='#fff';c.beginPath();c.moveTo(-12,-6);c.lineTo(12,-8);c.lineTo(13,6);c.lineTo(-11,8);c.closePath();c.fill();c.stroke();c.lineWidth=1.6;c.beginPath();c.moveTo(-12,-6);c.lineTo(1,1);c.lineTo(12,-8);c.stroke();c.restore()}
export default(c,t,i)=>{
  const dot=c.createPattern(tile,'repeat')
  const nx=t<.06||t>=.9?X0:t<.32?X0+(X1-X0)*ease((t-.06)/.26):X1,sx=t<.6?nx:t<.74?X1+(X0-X1)*ease((t-.6)/.14):X0
  const hx=t<.52||t>=.74?280:t<.6?262-48*ease((t-.52)/.08):t<.64?214:214+52*ease((t-.64)/.1)
  const hasNote=t<.64||t>=.9,taken=t>=.64&&t<.74,phew=t>=.74&&t<.96,dart=t>=.32&&t<.52
  const px=dart?[6,-6,6,-6][min(3,floor((t-.32)/.05))]:6,sweat=t>=.2&&t<.64
  c.save();c.translate(-16,2)
  // side ponytail behind, then the back hair
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(186,70);c.quadraticCurveTo(236,92,226,150);c.quadraticCurveTo(222,176,206,186);c.quadraticCurveTo(214,140,190,100);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=2;for(const o of[0,8])c.beginPath(),c.moveTo(196+o,86),c.quadraticCurveTo(222-o*.5,120,212-o,170),c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(190,80,11,8,.6,0,T);c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,206,100,196,166);c.lineTo(60,166);c.bezierCurveTo(50,100,60,36,128,36);c.fill();c.stroke()
  // long-sleeved dotted cardigan
  c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(62,196,54,236);c.lineTo(202,236);c.quadraticCurveTo(194,196,156,188);c.closePath();toned(c,dot)
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(110,189);c.lineTo(128,214);c.lineTo(146,189);c.closePath();c.fill();c.stroke()
  c.beginPath();c.rect(116,168,24,22);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,188);c.moveTo(140,168);c.lineTo(140,188);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  // eyes: sly and sideways, darting, or shut in relief
  for(const[x,d]of[[103,-1],[153,1]]){
    if(phew){c.lineWidth=5;c.beginPath();c.moveTo(x-13,142);c.quadraticCurveTo(x,148,x+13,142);c.stroke();continue}
    c.save();c.beginPath();c.rect(x-16,135,32,26);c.clip()
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,143,13,14,0,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(x+px,145,8,11,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x+px-2,141,3,0,T);c.fill();c.restore()
    c.lineWidth=6;c.beginPath();c.moveTo(x-14,136);c.quadraticCurveTo(x,132,x+14,136);c.lineTo(x+d*19,131);c.stroke()
    c.lineWidth=3.5;c.beginPath();c.moveTo(x-12,120+d*-2);c.quadraticCurveTo(x,115,x+12,120+d*2);c.stroke()
  }
  if(dart){c.lineWidth=3;for(const x of[103,153])for(const d of[-1,1])c.beginPath(),c.moveTo(x+d*18,150),c.lineTo(x+d*24,150),c.stroke()}
  c.lineWidth=3;c.beginPath();if(phew)c.ellipse(128,170,4,5,0,0,T);else c.moveTo(118,170),c.lineTo(124,167),c.lineTo(130,170),c.lineTo(136,167);c.stroke()
  // glossy ink bangs, side parted, with white strand lines and a cowlick
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(68,140);c.bezierCurveTo(52,74,88,38,128,38);c.bezierCurveTo(168,38,204,74,188,140)
  c.quadraticCurveTo(186,112,174,102);c.quadraticCurveTo(170,110,162,114);c.quadraticCurveTo(156,94,140,86);c.quadraticCurveTo(122,104,96,112);c.quadraticCurveTo(104,100,104,90);c.quadraticCurveTo(86,104,80,116);c.quadraticCurveTo(70,124,68,140);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=2;for(const[x,y,e,f]of[[96,58,82,100],[114,48,96,96],[150,48,160,92],[168,60,178,98]])c.beginPath(),c.moveTo(x,y),c.quadraticCurveTo((x+e)/2+4,(y+f)/2,e,f),c.stroke();c.strokeStyle='#111'
  c.lineWidth=5;c.beginPath();c.moveTo(138,40);c.quadraticCurveTo(148,18,162,24);c.stroke()
  if(sweat){c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();c.moveTo(70,96);c.quadraticCurveTo(82,114,70,120);c.quadraticCurveTo(58,114,70,96);c.fill();c.stroke()}
  if(phew){const p=(t-.74)/.22;c.fillStyle='#fff';c.lineWidth=3;for(const[o,r]of[[0,8],[12,6]])c.beginPath(),c.arc(108-p*30-o,176+o*.4,r*(1-p*.4),0,T),c.fill(),c.stroke()}
  c.restore()
  // desk: top surface and dotted front
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(20,204);c.lineTo(236,204);c.lineTo(248,222);c.lineTo(8,222);c.closePath();c.fill();c.stroke()
  c.beginPath();c.rect(12,222,232,22);toned(c,dot)
  // the note, her long sleeve pushing it, the other hand that takes it
  if(hasNote&&!taken)memo(c,nx,212)
  for(const[l,st]of[[28,'#111'],[21,'#fff'],[21,dot]])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(150,200),c.quadraticCurveTo(160,214,sx-20,212),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=3.5;for(const k of[0,1])c.beginPath(),c.ellipse(sx-8,208+k*7,4,3,0,0,T),c.fill(),c.stroke()
  if(hx<270){if(taken)memo(c,hx-6,212)
    for(const[l,st]of[[26,'#111'],[20,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(hx+20,206),c.lineTo(290,198),c.stroke()
    c.strokeStyle='#111';c.lineWidth=3;c.beginPath();c.moveTo(hx+20,195);c.lineTo(hx+22,217);c.stroke()
    c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.roundRect(hx-8,198,28,18,8);c.fill();c.stroke();c.lineWidth=2.5;for(const y of[203,209])c.beginPath(),c.moveTo(hx-4,y),c.lineTo(hx+6,y),c.stroke()}
}
