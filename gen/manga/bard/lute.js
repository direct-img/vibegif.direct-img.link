// manga chibi bard with a light screentone braid and a feathered cap, strumming a lute while notes float up and one boot taps the beat
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min,abs}=Math,T=2*PI
export const frames=16,delay=90,rim=4
// a finer, lighter tone tile for the hair
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
const TF=createCanvas(5,5),fx=TF.getContext('2d');fx.fillStyle='#111';fx.beginPath();fx.arc(2.5,2.5,.75,0,T);fx.fill()
// happy closed-eye arc with lashes, for the singing
const shut=(c,x,y,d)=>{c.lineWidth=6;c.beginPath();c.arc(x,y+6,13,PI*1.15,PI*1.85);c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(x+d*12,y);c.lineTo(x+d*18,y-3);c.stroke()}
const note=(c,x,y,s,two)=>{
  c.save();c.translate(x,y);c.scale(s,s);c.fillStyle='#111';c.lineWidth=3
  for(const d of two?[0,14]:[0]){c.beginPath();c.ellipse(d,0,6,4.5,-.4,0,T);c.fill();c.beginPath();c.moveTo(d+5,-2);c.lineTo(d+5,-24);c.stroke()}
  c.lineWidth=5;c.beginPath();c.moveTo(5,-24);two?c.lineTo(19,-24):c.quadraticCurveTo(14,-18,12,-10);c.stroke()
  c.restore()
}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat'),fn=c.createPattern(TF,'repeat')
  const st=sin(t*T*4),tap=max(0,sin(t*T*2))
  // floating notes drift up and out to the left
  for(let k=0;k<2;k++){const p=(t+k/2)%1,s=.9*sin(PI*min(1,p*1.3));if(s>.1)note(c,70-34*p+8*sin(p*T),150-110*p,s,k)}
  // boots: the right one taps
  c.fillStyle='#fff';c.lineWidth=5
  c.beginPath();c.moveTo(94,214);c.lineTo(94,236);c.quadraticCurveTo(80,238,82,246);c.lineTo(108,246);c.lineTo(108,214);c.closePath();c.fill();c.stroke()
  c.save();c.translate(140,246);c.rotate(-.22*tap);c.beginPath();c.moveTo(-10,-32);c.lineTo(-10,-10);c.lineTo(-12,0);c.lineTo(16,0);c.quadraticCurveTo(18,-8,4,-10);c.lineTo(4,-32);c.closePath();c.fill();c.stroke();c.restore()
  if(tap>.8){c.lineWidth=3;c.beginPath();c.moveTo(162,236);c.lineTo(172,232);c.moveTo(162,244);c.lineTo(174,246);c.stroke()}
  // short toned cape and a white tunic with a scalloped hem and belt
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(96,132);c.quadraticCurveTo(70,160,66,206);c.lineTo(170,206);c.quadraticCurveTo(166,160,140,132);c.closePath();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(60,128,120,82);c.restore();c.stroke()
  c.beginPath();c.moveTo(100,134);c.quadraticCurveTo(86,170,84,206);for(let k=0;k<5;k++)c.quadraticCurveTo(90+k*14,220,98+k*14,206);c.quadraticCurveTo(150,170,136,134);c.closePath();c.fillStyle='#fff';c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(88,180);c.lineTo(150,180);c.stroke()
  // head with a fine-tone braid falling over one shoulder
  c.save();c.translate(118,78);c.scale(.58,.58);c.translate(-128,-120)
  const braid=()=>{c.beginPath();for(let k=0;k<6;k++)c.ellipse(70-k*2,170+k*22,14,14,0,0,T)}
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(66,150);c.bezierCurveTo(48,70,86,36,128,36);c.bezierCurveTo(170,36,208,70,190,150);c.closePath();c.fill();c.save();c.clip();c.fillStyle=fn;c.fillRect(40,30,180,130);c.restore();c.stroke()
  for(let k=0;k<6;k++){c.beginPath();c.ellipse(70-k*2,170+k*22,15-k,14,0,0,T);c.fillStyle='#fff';c.fill();c.save();c.clip();c.fillStyle=fn;c.fillRect(40,150,60,150);c.restore();c.stroke()}
  c.fillStyle='#fff';c.beginPath();c.moveTo(62,296);c.lineTo(52,318);c.lineTo(64,312);c.lineTo(70,324);c.lineTo(74,300);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  shut(c,103,136,-1);shut(c,153,136,1)
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-3,166),c.lineTo(128+d*42+k+3,158),c.stroke()
  c.fillStyle='#111';c.lineWidth=4;c.beginPath();c.ellipse(128,168,7,5+3*abs(st),0,0,T);c.fill();c.stroke()
  const fr=()=>{c.beginPath();c.moveTo(70,136);c.bezierCurveTo(56,74,90,44,128,44);c.bezierCurveTo(166,44,200,74,186,136);c.quadraticCurveTo(178,104,160,100);c.quadraticCurveTo(144,112,128,98);c.quadraticCurveTo(110,112,94,100);c.quadraticCurveTo(78,104,70,136);c.closePath()}
  c.lineWidth=7;c.fillStyle='#fff';fr();c.fill();c.save();fr();c.clip();c.fillStyle=fn;c.fillRect(50,40,160,100);c.restore();fr();c.stroke()
  // floppy cap tilted on top with a long feather
  c.save();c.translate(128,52);c.rotate(-.18)
  c.fillStyle='#fff';c.lineWidth=7;c.beginPath();c.ellipse(0,0,74,22,0,0,T);c.fill();c.stroke();c.beginPath();c.moveTo(-60,-4);c.quadraticCurveTo(-40,-48,10,-46);c.quadraticCurveTo(64,-44,62,-4);c.closePath();c.fill();c.save();c.clip();c.fillStyle=tn;c.fillRect(-64,-50,130,46);c.restore();c.stroke()
  c.save();c.translate(40,-30);c.rotate(-.7+.12*sin(t*T*2));c.scale(1.2,1.2)
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(-18,-50,0,-110);c.quadraticCurveTo(22,-50,0,0);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(0,-4);c.lineTo(0,-100);for(let k=1;k<7;k++)c.moveTo(0,-k*14),c.lineTo(-8,-k*14-6),c.moveTo(0,-k*14),c.lineTo(8,-k*14-6);c.stroke()
  c.restore();c.restore()
  c.restore()
  // the lute: toned pear body with an ink rose hole, neck up to the right, bent pegbox
  c.save();c.translate(108,176);c.rotate(-.5)
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.roundRect(20,-7,82,14,4);c.fill();c.stroke()
  c.beginPath();c.moveTo(100,-8);c.lineTo(124,-14);c.lineTo(126,6);c.lineTo(100,8);c.closePath();c.fill();c.stroke()
  c.lineWidth=2.5;for(const x of[108,116])for(const d of[-1,1])c.beginPath(),c.moveTo(x,d*9),c.lineTo(x,d*15),c.stroke()
  const bd=()=>{c.beginPath();c.moveTo(28,0);c.bezierCurveTo(26,-30,-34,-38,-40,0);c.bezierCurveTo(-34,38,26,30,28,0);c.closePath()}
  c.lineWidth=6;bd();c.fill();c.save();bd();c.clip();c.fillStyle=tn;c.fillRect(-44,-40,40,80);c.restore();bd();c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(0,0,9,0,T);c.fill()
  c.lineWidth=1.6;c.beginPath();for(const d of[-3,0,3])c.moveTo(-30,d),c.lineTo(100,d);c.stroke()
  c.restore()
  // fretting hand on the neck, strumming hand flicking over the strings
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(170,136,10,9,0,0,T);c.fill();c.stroke()
  const sx=110+4*st,sy=166+8*st
  for(const[l,s]of[[18,'#111'],[10,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(96,146),c.quadraticCurveTo(86,166,sx-6,sy),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4;c.beginPath();c.ellipse(sx,sy,10,9,0,0,T);c.fill();c.stroke()
  if(abs(st)>.8){c.lineWidth=2.5;c.beginPath();c.moveTo(sx+16,sy-8);c.lineTo(sx+24,sy-12);c.moveTo(sx+16,sy+2);c.lineTo(sx+26,sy+2);c.stroke()}
}
