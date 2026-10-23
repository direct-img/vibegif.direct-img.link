// student council girl with long white hair and an ink alice band stamping a document twice with her hanko, thunk lines, a smug beat, then the sheet goes on the pile
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=80,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const toned=(c,p)=>{c.fillStyle='#fff';c.fill();c.fillStyle=p;c.fill();c.stroke()}
const ease=f=>f<=0?0:f>=1?1:.5-.5*cos(PI*f)
const P1=138,P2=178,UP=138,DN=180
// the seal: a ring with 可 inside
const seal=(c,x,y)=>{c.lineWidth=3;c.beginPath();c.arc(x,y,12,0,T);c.stroke();c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y-6);c.lineTo(x+8,y-6);c.moveTo(x+5,y-6);c.lineTo(x+5,y+8);c.lineTo(x+2,y+6);c.stroke();c.beginPath();c.rect(x-6,y-2,7,6);c.stroke()}
const doc=(c,x,m1,m2)=>{c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.rect(x,198,96,50);c.fill();c.stroke()
  c.lineWidth=2;for(const[y,l]of[[208,70],[215,56],[222,40]])c.beginPath(),c.moveTo(x+8,y),c.lineTo(x+8+l,y),c.stroke()
  c.setLineDash([3,3]);for(const o of[24,64])c.beginPath(),c.arc(x+o+14,230,13,0,T),c.stroke();c.setLineDash([])
  if(m1)seal(c,x+38,230);if(m2)seal(c,x+78,230)}
export default(c,t)=>{
  const dot=c.createPattern(tile,'repeat')
  // where the stamp is: [x, fist y, down]
  let sx=P1,fy=UP,down=0
  if(t<.08);else if(t<.14)fy=UP+(DN-UP)*ease((t-.08)/.06);else if(t<.2)fy=DN,down=1;else if(t<.28)fy=DN+(UP-DN)*ease((t-.2)/.08)
  else if(t<.36)sx=P1+(P2-P1)*ease((t-.28)/.08);else if(t<.42)sx=P2,fy=UP+(DN-UP)*ease((t-.36)/.06);else if(t<.48)sx=P2,fy=DN,down=1
  else if(t<.56)sx=P2,fy=DN+(UP-DN)*ease((t-.48)/.08);else if(t<.76)sx=P2;else if(t<.9)sx=P2+(P1-P2)*ease((t-.76)/.14)
  const smug=t>=.56&&t<.76,m1=t>=.2&&t<.9,m2=t>=.48&&t<.9,slide=t>=.76&&t<.9?ease((t-.76)/.14):0
  c.save();c.translate(128,-8);c.scale(.9,.9);c.translate(-128,0)
  // long straight white hair behind
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(128,34);c.bezierCurveTo(202,34,214,100,206,230);c.lineTo(50,230);c.bezierCurveTo(42,100,54,34,128,34);c.fill();c.stroke()
  c.lineWidth=2.5;for(const d of[-1,1])for(const o of[10,26])c.beginPath(),c.moveTo(128+d*(78-o*.3),130),c.lineTo(128+d*(80-o*.3),226),c.stroke()
  // dotted blazer, white shirt, ink tie
  c.lineWidth=6;c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(62,196,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,196,156,188);c.closePath();toned(c,dot)
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(108,189);c.lineTo(128,232);c.lineTo(148,189);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(123,194);c.lineTo(133,194);c.lineTo(137,226);c.lineTo(128,234);c.lineTo(119,226);c.closePath();c.fill()
  c.fillStyle='#fff';c.beginPath();c.rect(116,168,24,22);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,188);c.moveTo(140,168);c.lineTo(140,188);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  // sharp almond eyes watching the stamp, or shut smug
  for(const[x,d]of[[103,-1],[153,1]]){
    if(smug){c.lineWidth=5;c.beginPath();c.moveTo(x-13,142);c.quadraticCurveTo(x,148,x+13,141);c.lineTo(x+d*18,137);c.stroke();continue}
    c.save();c.beginPath();c.moveTo(x-15,142);c.quadraticCurveTo(x,122,x+16,137);c.quadraticCurveTo(x+4,162,x-15,142);c.clip()
    c.fillStyle='#fff';c.fillRect(x-16,126,32,32);c.fillStyle='#111';c.beginPath();c.ellipse(x+3,144,9,12,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x,139,3.4,0,T);c.fill();c.beginPath();c.arc(x+6,150,1.6,0,T);c.fill();c.restore()
    c.lineWidth=6;c.beginPath();c.moveTo(x-15,142);c.quadraticCurveTo(x,122,x+16,137);c.lineTo(x+d*20,132);c.stroke()
    c.lineWidth=2.5;c.beginPath();c.moveTo(x-10,148);c.quadraticCurveTo(x,152,x+10,146);c.stroke()
  }
  c.lineWidth=3.5;for(const[x,d]of[[103,1],[153,-1]])c.beginPath(),c.moveTo(x-13,118+d*2),c.quadraticCurveTo(x,113,x+13,118-d*2),c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(120,168);c.quadraticCurveTo(130,172,138,166);c.stroke()
  // side-swept white bangs under an ink alice band
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(68,156);c.bezierCurveTo(52,76,88,40,128,40);c.bezierCurveTo(168,40,206,76,188,156)
  c.quadraticCurveTo(188,120,180,106);c.quadraticCurveTo(160,104,140,116);c.quadraticCurveTo(150,104,152,92);c.quadraticCurveTo(124,106,100,118)
  c.quadraticCurveTo(108,104,108,94);c.quadraticCurveTo(92,104,80,120);c.quadraticCurveTo(70,132,68,156);c.closePath();c.fill();c.stroke()
  c.lineWidth=2.5;for(const[x,y]of[[150,64],[124,62],[98,70]])c.beginPath(),c.moveTo(x,y),c.quadraticCurveTo(x-14,y+18,x-22,y+34),c.stroke()
  c.lineWidth=12;c.beginPath();c.arc(128,104,62,1.12*PI,1.88*PI);c.stroke()
  c.restore()
  if(smug){c.fillStyle='#fff';c.lineWidth=3;const s=7+3*sin(T*(t-.56)*5);for(const[x,y]of[[36,44],[214,30]]){c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,r=k%2?s*.35:s;c.lineTo(x+r*cos(a),y+r*sin(a))}c.closePath();c.fill();c.stroke()}}
  // desk, the finished pile, the sheet being stamped
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(16,188);c.lineTo(240,188);c.lineTo(250,252);c.lineTo(6,252);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;for(let k=0;k<4;k++){c.beginPath();c.rect(12+k%2*3,232-k*8,72,14);c.fill();c.stroke()}seal(c,58,214)
  doc(c,100,0,0)
  if(m1&&t<.9){c.save();c.translate(-90*slide,-8*slide);doc(c,100,m1,m2);c.restore()}
  // impact lines when the stamp lands
  if(down){c.lineWidth=3.5;for(let k=0;k<7;k++){const a=PI*(1.05+k*.15);c.beginPath();c.moveTo(sx+20*cos(a),226+14*sin(a));c.lineTo(sx+34*cos(a),226+26*sin(a));c.stroke()}}
  // stamping arm with the council armband, fist and hanko
  const S=[166,156],F=[sx+4,fy],at=f=>[S[0]+(F[0]-S[0])*f,S[1]+(F[1]-S[1])*f]
  for(const[l,st]of[[30,'#111'],[23,'#fff'],[23,dot]])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(...S),c.lineTo(...F),c.stroke()
  const[a0,a1]=[at(.25),at(.45)];c.lineCap='butt';for(const[l,st]of[[30,'#111'],[24,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(...a0),c.lineTo(...a1),c.stroke()
  c.strokeStyle='#111';c.lineWidth=3;const m=at(.35);c.beginPath();c.arc(m[0],m[1],5,0,T);c.stroke();c.lineCap='round'
  c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.roundRect(sx-9,fy+8,18,38,4);c.fill();c.stroke()
  c.lineWidth=2;c.beginPath();c.moveTo(sx-9,fy+40);c.lineTo(sx+9,fy+40);c.stroke()
  c.lineWidth=4;c.beginPath();c.roundRect(sx-14,fy-6,30,20,9);c.fill();c.stroke()
  c.lineWidth=2.5;for(const y of[fy,fy+7])c.beginPath(),c.moveTo(sx-10,y),c.lineTo(sx+4,y),c.stroke()
}
