// manga genie girl with a high ink ponytail swirls up out of an oil lamp on a puffy smoke tail, arms crossed and smirking, bobs, then gets sucked back in
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
const ease=x=>x<0?0:x>1?1:x*x*(3-2*x)
// half-lidded sly eye
const eye=(c,x,y,d,tn)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+3,14,12,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+5,10,11,0,0,T);c.clip();c.fillStyle='#111';c.fillRect(x-11,y-6,22,22);c.fillStyle=tn;c.beginPath();c.ellipse(x,y+11,8,5,0,0,T);c.fill();c.restore()
  c.fillStyle='#fff';c.beginPath();c.arc(x-3,y+3,3,0,T);c.fill()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y);c.lineTo(x+16,y-1);c.lineTo(x+d*20,y-6);c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(x-d*12,y-14);c.quadraticCurveTo(x,y-20,x+d*14,y-16);c.stroke()
}
const genie=(c,tn,t)=>{
  // high ink ponytail flowing back, white band
  c.save();c.translate(150,34);c.rotate(.3+.12*sin(t*T*2))
  c.fillStyle='#111';c.lineWidth=5;c.beginPath();c.moveTo(-10,0);c.bezierCurveTo(40,-30,70,20,76,70);c.quadraticCurveTo(54,50,46,64);c.quadraticCurveTo(36,30,8,14);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(14,0);c.bezierCurveTo(40,-8,56,24,62,52);c.stroke();c.strokeStyle='#111'
  c.restore()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(146,40,10,14,.5,0,T);c.fill();c.stroke()
  // ink hair shell, face, side-parted ink bangs with shine
  c.fillStyle='#111';c.lineWidth=6;c.beginPath();c.moveTo(70,140);c.bezierCurveTo(52,70,88,42,128,42);c.bezierCurveTo(168,42,204,70,186,140);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,138,-1,tn);eye(c,153,138,1,tn)
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-3,168),c.lineTo(128+d*44+k+3,160),c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(116,168);c.quadraticCurveTo(130,176,142,164);c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(70,140);c.bezierCurveTo(54,76,88,46,128,46);c.bezierCurveTo(168,46,202,76,186,140);c.quadraticCurveTo(180,108,164,98);c.quadraticCurveTo(130,108,96,92);c.quadraticCurveTo(80,104,70,140);c.closePath();c.fill()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(128,110,58,PI*1.27,PI*1.42);c.stroke();c.beginPath();c.arc(128,110,58,PI*1.55,PI*1.72);c.stroke();c.strokeStyle='#111'
  // hoop earrings
  c.lineWidth=3;for(const d of[-1,1])c.beginPath(),c.arc(128+d*56,168,8,0,T),c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(116,180,24,16);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,180);c.lineTo(116,196);c.moveTo(140,180);c.lineTo(140,196);c.stroke()
  // white top with a toned vest, waist fading into the smoke
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(100,194);c.quadraticCurveTo(70,200,68,236);c.quadraticCurveTo(96,262,128,264);c.quadraticCurveTo(160,262,188,236);c.quadraticCurveTo(186,200,156,194);c.closePath();c.fill();c.stroke()
  c.fillStyle=tn;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*28,196),c.quadraticCurveTo(128+d*58,206,128+d*56,250),c.lineTo(128+d*20,258),c.quadraticCurveTo(128+d*14,220,128+d*14,200),c.closePath(),c.fill(),c.stroke()
  // arms crossed: upper arms down the sides, forearms folded one over the other, bangles at the wrists
  const tube=(x0,y0,x1,y1)=>{for(const[l,s]of[[22,'#111'],[13,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(x0,y0),c.lineTo(x1,y1),c.stroke();c.strokeStyle='#111'}
  tube(84,204,80,234);tube(172,204,176,234);tube(80,236,150,226);tube(176,236,106,226)
  c.lineWidth=3;for(const x of[142,114])c.beginPath(),c.ellipse(x,226,3,8,0,0,T),c.stroke()
}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat')
  const e=ease(t/.3)-ease((t-.72)/.22),bob=e>.98?3*sin((t-.3)/.42*T*2):0
  const sx=184,sy=200,gx=sx+(112-sx)*e,gy=sy+(72-sy)*e+bob,gs=.66*max(e,.04)
  // smoke trail: puffs along a curve from the spout up to her waist, unioned under one outline
  if(e>.02){const wx=gx+(128-128)*gs,wy=gy+(250-128)*gs,pts=[];for(let k=0;k<=10;k++){const s=k/10,x=sx+(wx-sx)*s+26*e*sin(s*PI*1.6+t*T*2),y=sy+(wy-sy)*s;pts.push([x,y,3+16*e*s+3*sin(k*1.7+t*T*4)])}
    c.fillStyle='#111';for(const[x,y,r]of pts)c.beginPath(),c.arc(x,y,r+4,0,T),c.fill()
    c.fillStyle='#fff';for(const[x,y,r]of pts)c.beginPath(),c.arc(x,y,r,0,T),c.fill()
    c.lineWidth=2.5;for(const[x,y,r]of pts.filter((_,k)=>k%3==2))c.beginPath(),c.arc(x,y,r*.5,0,PI*1.4),c.stroke()}
  // the lamp: toned body, curved spout, handle loop, lidded top on a foot
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.ellipse(108,240,30,8,0,0,T);c.fill();c.stroke()
  c.beginPath();c.moveTo(150,222);c.quadraticCurveTo(170,214,sx,sy);c.lineTo(sx+6,sy+6);c.quadraticCurveTo(176,224,152,234);c.closePath();c.fill();c.stroke()
  c.beginPath();c.arc(54,218,14,PI*.4,PI*1.7);c.stroke()
  const body=()=>{c.beginPath();c.moveTo(58,226);c.quadraticCurveTo(64,200,108,200);c.quadraticCurveTo(152,200,158,226);c.quadraticCurveTo(108,246,58,226);c.closePath()}
  body();c.fill();c.save();body();c.clip();c.fillStyle=tn;c.fillRect(50,220,120,30);c.restore();body();c.stroke()
  c.beginPath();c.ellipse(108,200,22,6,0,0,T);c.fill();c.stroke();c.beginPath();c.arc(108,190,7,0,T);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.arc(108,214,34,PI*1.15,PI*1.35);c.stroke();c.strokeStyle='#111'
  if(e<=.02){c.lineWidth=3;c.beginPath();c.moveTo(sx+2,sy-4);c.quadraticCurveTo(sx+10,sy-14,sx+2,sy-22);c.stroke()}
  // the genie herself
  if(e>.02){c.save();c.translate(gx,gy);c.scale(gs,gs);c.translate(-128,-128);genie(c,tn,t);c.restore()}
  // sparkles while she's out
  if(e>.9){c.fillStyle='#fff';c.lineWidth=2.5;for(const[x,y,r,o]of[[30,70,8,0],[222,120,7,2]]){const q=r*(.6+.4*sin(t*T*4+o));c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,w=k%2?q*.35:q;c.lineTo(x+w*cos(a),y+w*sin(a))}c.closePath();c.fill();c.stroke()}}
}
