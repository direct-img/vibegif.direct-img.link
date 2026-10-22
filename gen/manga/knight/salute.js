// manga knight girl raising her sword to her face in salute with a glint, then sweeping it down; cape and helm plume blowing
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
const ease=x=>x<0?0:x>1?1:x*x*(3-2*x)
const eye=(c,x,y,d,tn)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,16,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11,14,0,0,T);c.clip();c.fillStyle=tn;c.fillRect(x-12,y-12,24,30);c.fillStyle='#111';c.fillRect(x-12,y-12,24,10);c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11,14,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,4.5,6.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x-4,y-3,3.5,4.5,-.4,0,T);c.fill();c.beginPath();c.arc(x+4,y+8,2,0,T);c.fill()
  c.lineWidth=7;c.beginPath();c.moveTo(x-17,y-4);c.quadraticCurveTo(x,y-15,x+17,y-4);c.moveTo(x+d*16,y-5);c.lineTo(x+d*22,y-9);c.stroke()
  // determined brows
  c.lineWidth=5;c.beginPath();c.moveTo(x-d*14,y-20);c.lineTo(x+d*12,y-25);c.stroke()
}
const star=(c,x,y,s)=>{c.beginPath();for(let k=0;k<8;k++){const r=k%2?s*.22:s,a=k*PI/4;c.lineTo(x+r*cos(a),y+r*sin(a))}c.closePath();c.fill();c.stroke()}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat'),w=sin(t*T*2),s=ease((t-.05)/.15)-ease((t-.55)/.15)
  const hx=150-26*s,hy=206-48*s,a=-.75-(PI/2-.75)*s
  // cape behind, ink black, blowing out to the left
  const cp=()=>{c.beginPath();c.moveTo(90,118);c.quadraticCurveTo(60,170,34+6*w,236);c.quadraticCurveTo(50,230,62+4*w,246);c.quadraticCurveTo(76,236,92,250);c.lineTo(168,250);c.quadraticCurveTo(170,170,150,118);c.closePath()}
  c.lineWidth=5;c.fillStyle='#111';cp();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=2.5;c.beginPath();c.moveTo(80,150);c.quadraticCurveTo(62,196,48+5*w,232);c.stroke();c.strokeStyle='#111'
  // screentone ponytail streaming left
  const pt=()=>{c.beginPath();c.moveTo(92,52);c.bezierCurveTo(60,48,30,70,16+4*w,96+6*w);c.quadraticCurveTo(40,88,46+3*w,104);c.quadraticCurveTo(58,84,88,80);c.closePath()}
  c.lineWidth=5;c.fillStyle='#fff';pt();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(0,40,100,80);c.restore();pt();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(84,64);c.quadraticCurveTo(56,64,30+4*w,90+5*w);c.moveTo(84,74);c.quadraticCurveTo(62,78,46+3*w,96);c.stroke()
  // breastplate and pauldrons
  const bp=()=>{c.beginPath();c.moveTo(96,124);c.quadraticCurveTo(84,170,92,232);c.lineTo(150,232);c.quadraticCurveTo(158,170,144,124);c.closePath()}
  c.lineWidth=5;c.fillStyle='#fff';bp();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(132,120,30,120);c.restore();bp();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(120,150);c.lineTo(120,190);c.moveTo(106,166);c.lineTo(134,166);c.stroke()
  c.beginPath();c.moveTo(92,206);c.quadraticCurveTo(120,214,150,206);c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;for(const[x,d]of[[94,-1],[146,1]]){c.beginPath();c.ellipse(x,130,20,14,d*.3,PI,0);c.lineTo(x+d*16,142);c.quadraticCurveTo(x,148,x-d*16,140);c.closePath();c.fill();c.stroke();c.beginPath();c.ellipse(x,134,13,7,d*.3,PI,0);c.stroke()}
  const arms=()=>{
  // arms out to the gauntlets on the hilt
  for(const sx of[96,146])for(const[l,st]of[[18,'#111'],[10,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(sx,140),c.quadraticCurveTo((sx+hx)/2+(sx<120?-10:14),(140+hy)/2+16,hx,hy),c.stroke()
  c.strokeStyle='#111'
  // sword
  c.save();c.translate(hx,hy);c.rotate(a)
  c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(16,-6);c.lineTo(98,-5);c.lineTo(110,0);c.lineTo(98,5);c.lineTo(16,6);c.closePath();c.fill();c.stroke()
  c.lineWidth=2;c.beginPath();c.moveTo(20,0);c.lineTo(94,0);c.stroke()
  c.lineWidth=4;c.beginPath();c.rect(10,-18,7,36);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.rect(-16,-4,26,8);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(-20,0,6,0,T);c.fill();c.stroke()
  c.restore()
  for(const o of[-6,6]){c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.ellipse(hx+o*cos(a),hy+o*sin(a),9,9,0,0,T);c.fill();c.stroke()}
  if(s>.95){c.fillStyle='#fff';c.lineWidth=2.5;const g=1-Math.abs((t-.38)/.12);if(g>0)star(c,hx+112*cos(a),hy+112*sin(a)+2,14*g)}
  }
  if(s<.5)arms()
  // head
  c.save();c.translate(118,84);c.scale(.6,.6);c.translate(-128,-120)
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,142,-1,tn);eye(c,153,142,1,tn)
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-5,1])c.beginPath(),c.moveTo(128+d*44+k-3,168),c.lineTo(128+d*44+k+3,160),c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(120,172);c.lineTo(136,172);c.stroke()
  // screentone side locks framing the face
  for(const d of[-1,1]){const sl=()=>{c.beginPath();c.moveTo(128+d*50,96);c.quadraticCurveTo(128+d*64,150,128+d*58,196);c.quadraticCurveTo(128+d*50,184,128+d*44,190);c.quadraticCurveTo(128+d*48,140,128+d*40,104);c.closePath()}
    c.lineWidth=6;c.fillStyle='#fff';sl();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(0,0,256,256);c.restore();sl();c.stroke()}
  // screentone bangs
  const bg=()=>{c.beginPath();c.moveTo(72,150);c.bezierCurveTo(56,80,90,48,128,48);c.bezierCurveTo(166,48,200,80,184,150);c.quadraticCurveTo(180,118,172,108);c.quadraticCurveTo(162,114,156,120);c.quadraticCurveTo(150,104,138,98)
    c.quadraticCurveTo(132,112,122,116);c.quadraticCurveTo(116,102,104,98);c.quadraticCurveTo(98,112,90,118);c.quadraticCurveTo(84,110,80,104);c.quadraticCurveTo(72,124,72,150);c.closePath()}
  c.lineWidth=7;c.fillStyle='#fff';bg();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(0,0,256,256);c.restore();bg();c.stroke()
  // half helm with a cheek guard line and a blowing plume
  c.fillStyle='#fff';c.lineWidth=7;c.beginPath();c.moveTo(72,92);c.bezierCurveTo(70,36,186,36,184,92);c.quadraticCurveTo(128,72,72,92);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(80,80);c.quadraticCurveTo(128,62,176,80);c.stroke()
  c.beginPath();c.moveTo(128,40);c.lineTo(128,72);c.stroke()
  const pl=()=>{c.beginPath();c.moveTo(124,42);c.bezierCurveTo(110,4,72,-4,36+8*w,8+6*w);c.quadraticCurveTo(66,14,74,22);c.quadraticCurveTo(46,26,30+6*w,40+6*w);c.quadraticCurveTo(80,40,118,50);c.closePath()}
  c.lineWidth=6;c.fillStyle='#fff';pl();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(118,40);c.quadraticCurveTo(84,14,50+6*w,12+4*w);c.moveTo(112,46);c.quadraticCurveTo(80,32,46+5*w,36+5*w);c.stroke()
  c.restore()
  if(s>=.5)arms()
}
