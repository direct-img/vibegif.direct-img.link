// manga chibi detective in a deerstalker sweeping her magnifying glass along a trail of footprints, then lifting it so her eye looms huge through the lens
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min,hypot}=Math,T=2*PI
export const frames=20,delay=90,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
const ease=x=>x<0?0:x>1?1:x*x*(3-2*x)
const lerp=(a,b,u)=>a.map((v,i)=>v+(b[i]-v)*u)
const xh=(c,f,g=7)=>{c.save();f();c.clip();c.lineWidth=1.8;c.beginPath();for(let k=-256;k<256;k+=g)c.moveTo(k,0),c.lineTo(k+256,256),c.moveTo(k+256,0),c.lineTo(k,256);c.stroke();c.restore()}
const eye=(c,x,y,d,lx,ly,tn,bl)=>{
  if(bl){c.lineWidth=6;c.beginPath();c.moveTo(x-15,y+2);c.quadraticCurveTo(x,y+8,x+15,y+2);c.stroke();return}
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+lx,y+2+ly,11,14,0,0,T);c.save();c.clip();c.fillStyle=tn;c.fillRect(x-20,y-20,40,40);c.fillStyle='#111';c.fillRect(x-20,y-14+ly,40,11);c.restore();c.lineWidth=2.5;c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+lx,y+3+ly,4.5,7,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x+lx-4,y-4+ly,4,5,-.4,0,T);c.fill();c.beginPath();c.arc(x+lx+4,y+8+ly,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-17,y-6);c.quadraticCurveTo(x,y-20,x+17,y-6);c.moveTo(x+d*16,y-7);c.lineTo(x+d*22,y-12);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+19);c.lineTo(x+8,y+19);c.stroke()
}
// shoe print: sole and heel in dotted tone
const print=(c,x,y,a,tn)=>{c.save();c.translate(x,y);c.rotate(a);c.lineWidth=3
  c.fillStyle='#fff';c.beginPath();c.moveTo(0,-15);c.bezierCurveTo(9,-15,9,-1,6,3);c.quadraticCurveTo(0,6,-6,3);c.bezierCurveTo(-9,-1,-9,-15,0,-15);c.fill();c.stroke();c.lineWidth=2;c.beginPath();for(const v of[-10,-5,0])c.moveTo(-4,v),c.lineTo(4,v);c.stroke();c.lineWidth=3
  c.beginPath();c.ellipse(0,11,5.5,5,0,0,T);c.fill();c.stroke();c.lineWidth=2;c.beginPath();c.moveTo(-3,11);c.lineTo(3,11);c.stroke()
  c.restore()}
const PR=[[232,236,-1.75],[206,222,-1.4],[180,236,-1.75],[154,222,-1.4]]
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat')
  // lens path: sweep along the prints, rise to her eye, hold, drop back
  const A=[226,226],B=[164,226],E=[132,99]
  const L=t<.4?lerp(A,B,ease(t/.4)):t<.55?lerp(B,E,ease((t-.4)/.15)):t<.82?E:lerp(E,A,ease((t-.82)/.18))
  const up=t>=.55&&t<.82,R=up?28:22,look=up?[0,0]:[5,6],bl=t>.68&&t<.73
  const scene=()=>{
    for(const[x,y,a]of PR)print(c,x,y,a,tn)
    // short legs and boots
    c.lineWidth=4;c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.rect(118+d*10-5,186,10,18),c.fill(),c.stroke(),c.beginPath(),c.ellipse(118+d*10+3,208,10,6,0,0,T),c.fillStyle='#111',c.fill(),c.stroke(),c.fillStyle='#fff'
    // coat and inverness cape in tone
    c.lineWidth=5;c.beginPath();c.moveTo(102,128);c.quadraticCurveTo(88,160,90,192);c.lineTo(146,192);c.quadraticCurveTo(148,160,134,128);c.closePath();c.fill();xh(c,()=>{c.beginPath();c.rect(88,126,60,70)},9);c.beginPath();c.moveTo(102,128);c.quadraticCurveTo(88,160,90,192);c.lineTo(146,192);c.quadraticCurveTo(148,160,134,128);c.closePath();c.stroke()
    const cp=()=>{c.beginPath();c.moveTo(104,124);c.quadraticCurveTo(78,134,72,166);c.quadraticCurveTo(118,176,164,166);c.quadraticCurveTo(158,134,132,124);c.closePath()}
    c.fillStyle='#fff';cp();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(60,120,120,60);c.restore();cp();c.stroke()
    c.fillStyle='#111';c.beginPath();c.moveTo(118,128);c.lineTo(106,122);c.lineTo(106,134);c.closePath();c.moveTo(118,128);c.lineTo(130,122);c.lineTo(130,134);c.closePath();c.fill();c.stroke()
    // head
    c.save();c.translate(118,88);c.scale(.55,.55);c.translate(-128,-120)
    // crosshatched bob
    const bb=()=>{c.beginPath();c.moveTo(128,40);c.bezierCurveTo(194,40,206,100,198,170);c.lineTo(58,170);c.bezierCurveTo(50,100,62,40,128,40)}
    c.lineWidth=7;c.fillStyle='#fff';bb();c.fill();xh(c,bb,9);bb();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103,140,-1,...look,tn,bl);eye(c,153,140,1,...look,tn,bl)
    c.lineWidth=5;c.beginPath();c.moveTo(88,112);c.lineTo(114,116);c.moveTo(142,110);c.quadraticCurveTo(156,100,168,108);c.stroke()
    c.lineWidth=3;for(const d of[-1,1])for(const k of[-5,1])c.beginPath(),c.moveTo(128+d*42+k-3,168),c.lineTo(128+d*42+k+3,160),c.stroke()
    c.lineWidth=4;c.beginPath();if(up)c.arc(128,168,7,.15*PI,.85*PI);else c.moveTo(120,172),c.quadraticCurveTo(128,168,136,173);c.stroke()
    const bg=()=>{c.beginPath();c.moveTo(72,140);c.bezierCurveTo(60,84,90,60,128,60);c.bezierCurveTo(166,60,196,84,184,140);c.quadraticCurveTo(178,112,170,104);c.lineTo(156,116);c.lineTo(150,98);c.lineTo(136,112);c.lineTo(126,96);c.lineTo(114,112);c.lineTo(104,98);c.lineTo(94,114);c.lineTo(84,104);c.quadraticCurveTo(76,118,72,140);c.closePath()}
    c.lineWidth=7;c.fillStyle='#fff';bg();c.fill();xh(c,bg,9);bg();c.stroke()
    // deerstalker: checked cap, front and back bills, ear flaps tied on top
    const cap=()=>{c.beginPath();c.moveTo(70,86);c.bezierCurveTo(66,24,190,24,186,86);c.quadraticCurveTo(128,70,70,86);c.closePath()}
    c.fillStyle='#fff';cap();c.fill();c.save();cap();c.clip();c.fillStyle='#111';for(let x=60;x<200;x+=16)for(let y=20;y<90;y+=16)c.fillRect(x+((y/16|0)%2)*8,y,8,8);c.restore();cap();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(150,82);c.quadraticCurveTo(190,74,212,94);c.quadraticCurveTo(184,96,156,90);c.closePath();c.fill();c.stroke()
    c.beginPath();c.moveTo(106,80);c.quadraticCurveTo(70,72,50,88);c.quadraticCurveTo(76,92,100,88);c.closePath();c.fill();c.stroke()
    c.lineWidth=5;c.beginPath();c.moveTo(128,34);c.quadraticCurveTo(110,14,104,30);c.quadraticCurveTo(116,34,128,34);c.quadraticCurveTo(146,14,152,30);c.quadraticCurveTo(140,34,128,34);c.fill();c.stroke()
    c.restore()
  }
  scene()
  // magnified view inside the lens
  c.save();c.beginPath();c.arc(...L,R,0,T);c.clip();c.fillStyle='#fff';c.fillRect(0,0,256,256);c.translate(...L);c.scale(2,2);c.translate(-L[0],-L[1]);c.lineWidth=7;c.strokeStyle='#111';scene();c.restore()
  c.lineWidth=3;c.strokeStyle='#fff';c.beginPath();c.arc(...L,R-6,PI*1.1,PI*1.4);c.stroke();c.strokeStyle='#111'
  // handle points back toward her hand, arm from the shoulder
  const S=[140,150],dx=S[0]-L[0],dy=S[1]-L[1],dl=hypot(dx,dy),u=[dx/dl,dy/dl],h0=[L[0]+u[0]*(R+4),L[1]+u[1]*(R+4)],h1=[L[0]+u[0]*(R+28),L[1]+u[1]*(R+28)]
  for(const[l,s]of[[13,'#111'],[6,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(...h0),c.lineTo(...h1),c.stroke()
  c.strokeStyle='#111'
  for(const[l,s]of[[16,'#111'],[8,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(134,140),c.quadraticCurveTo((134+h1[0])/2+6,(140+h1[1])/2+10,...h1),c.stroke()
  c.strokeStyle='#111';c.lineWidth=3.5;c.fillStyle='#fff';c.beginPath();c.arc(...h1,7,0,T);c.fill();c.stroke()
  c.lineWidth=6;c.beginPath();c.arc(...L,R,0,T);c.stroke();c.lineWidth=2;c.strokeStyle='#fff';c.beginPath();c.arc(...L,R-3.5,0,T);c.stroke();c.strokeStyle='#111'
}
