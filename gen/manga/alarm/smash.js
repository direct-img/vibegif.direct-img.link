// bedhead manga girl under the blanket smashes her ringing alarm clock flat, dozes off happily, then it springs back up ringing
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const ease=u=>(u=max(0,min(1,u)),u*u*(3-2*u)),lerp=(a,b,u)=>a+(b-a)*ease(u)
const zz=(c,x,y,s)=>{c.lineWidth=4;c.beginPath();c.moveTo(x-s,y-s);c.lineTo(x+s,y-s);c.lineTo(x-s,y+s);c.lineTo(x+s,y+s);c.stroke()}
export default(c,t)=>{
  const DOT=tone(c,6,1.3),FINE=tone(c,4,.8)
  const ring=t<.4||t>=.85,hit=t>=.4&&t<.47,flat=t>=.4&&t<.75,sleep=t>=.47&&t<.8
  const sy=flat?.5:t<.85?.5+.5*ease((t-.75)/.06)+.18*sin(min(1,(t-.75)/.1)*PI)*(t<.85?1:0):1,rot=ring?.14*sin(t*T*8):0
  // nightstand
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.rect(166,186,78,62);c.fill();c.fillStyle=FINE;c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.rect(176,198,58,20);c.fill();c.stroke();c.beginPath();c.arc(205,208,3,0,T);c.stroke()
  // alarm clock
  c.save();c.translate(205,184);c.scale(1,sy);c.rotate(rot);c.translate(-205,-184)
  c.lineWidth=5;c.beginPath();c.moveTo(186,176);c.lineTo(180,186);c.moveTo(224,176);c.lineTo(230,186);c.stroke()
  for(const d of[-1,1]){c.save();c.translate(205+d*19,126);c.rotate(d*.6);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(0,0,12,PI,0);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke();c.restore()}
  c.lineWidth=5;c.beginPath();c.moveTo(205,118);c.lineTo(205+(ring?6*sin(t*T*16):0),108);c.stroke();c.fillStyle='#111';c.beginPath();c.arc(205+(ring?6*sin(t*T*16):0),106,4,0,T);c.fill()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.arc(205,152,28,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.arc(205,152,21,0,T);c.stroke();c.fillStyle='#111';for(let k=0;k<12;k++){const b=k*PI/6;c.beginPath();c.arc(205+cos(b)*17,152+sin(b)*17,k%3?1.2:2.2,0,T);c.fill()}
  c.lineWidth=3.5;c.beginPath();c.moveTo(205,152);c.lineTo(205,138);c.moveTo(205,152);c.lineTo(214,156);c.stroke()
  if(flat){c.lineWidth=3;c.beginPath();for(const d of[-1,1])c.moveTo(205+d*9,146),c.lineTo(205+d*3,150),c.moveTo(205+d*9,150),c.lineTo(205+d*3,146);c.stroke()}
  c.restore()
  if(ring){c.lineWidth=4;for(const d of[-1,1])for(const k of[0,1])c.beginPath(),c.arc(205,140,40+k*11,d<0?PI*.82:-PI*.18,d<0?PI*1.18:PI*.18),c.stroke()
    c.lineWidth=3.5;for(const d of[-1,1])for(const k of[0,1,2]){const b=-PI/2+d*(.3+k*.28);c.beginPath();c.moveTo(205+cos(b)*42,128+sin(b)*30);c.lineTo(205+cos(b)*52,128+sin(b)*38);c.stroke()}}
  if(hit){c.fillStyle='#fff';c.lineWidth=5;c.beginPath();for(let k=0;k<16;k++){const r=k%2?18:34,b=k*PI/8;c.lineTo(205+cos(b)*r*1.3,150+sin(b)*r*.8)}c.closePath();c.fill();c.stroke()}
  // pillow and the bedhead girl's head
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.roundRect(12,112,124,62,26);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(26,124);c.lineTo(34,132);c.moveTo(122,124);c.lineTo(114,132);c.stroke()
  c.save();c.translate(70,112);c.rotate(-.28);c.scale(.6,.6);c.translate(-128,-128)
  c.lineWidth=10;c.fillStyle='#111';c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,210,96,200,150);c.lineTo(56,150);c.bezierCurveTo(46,96,60,36,128,36);c.fill();c.stroke()
  c.lineWidth=10;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(sleep){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,138,13,.15*PI,.85*PI),c.stroke();c.lineWidth=6;c.beginPath();c.arc(128,164,9,.1*PI,.9*PI);c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(138,170);c.quadraticCurveTo(142,182,138,190);c.stroke()}
  else if(hit){c.lineWidth=9;for(const d of[-1,1]){const x=128+d*25;c.beginPath();c.moveTo(x-d*13,126);c.lineTo(x+d*11,138);c.lineTo(x-d*13,150);c.stroke()}
    c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.rect(112,160,32,14);c.fill();c.stroke();c.lineWidth=3;c.beginPath();for(const x of[120,128,136])c.moveTo(x,160),c.lineTo(x,174);c.stroke()}
  else{c.lineWidth=8;c.beginPath();c.moveTo(88,140);c.lineTo(118,140);c.stroke()
    c.fillStyle='#fff';c.beginPath();c.ellipse(153,142,13,10,0,0,T);c.fill();c.save();c.clip();c.fillStyle='#111';c.beginPath();c.arc(155,148,9,0,T);c.fill();c.restore();c.lineWidth=8;c.beginPath();c.moveTo(138,136);c.lineTo(168,136);c.stroke()
    c.lineWidth=6;c.beginPath();c.moveTo(114,168);c.lineTo(120,163);c.lineTo(126,168);c.lineTo(132,163);c.lineTo(138,168);c.lineTo(144,163);c.stroke()}
  c.lineWidth=4;for(const d of[-1,1])for(const k of[-7,0,7])c.beginPath(),c.moveTo(128+d*42+k-3,168),c.lineTo(128+d*42+k+3,158),c.stroke()
  // ink black bedhead with strands sticking out
  c.lineWidth=10;c.fillStyle='#111';c.beginPath();c.moveTo(70,140)
  c.bezierCurveTo(54,70,88,38,128,38);c.bezierCurveTo(168,38,202,70,186,140)
  c.lineTo(178,106);c.lineTo(168,116);c.lineTo(160,94);c.lineTo(146,110);c.lineTo(138,90);c.lineTo(126,108);c.lineTo(114,88);c.lineTo(104,108);c.lineTo(94,94);c.lineTo(86,114);c.lineTo(78,104);c.closePath();c.fill();c.stroke()
  c.lineWidth=12;c.beginPath();c.moveTo(110,44);c.quadraticCurveTo(92,14,70,22);c.moveTo(140,40);c.quadraticCurveTo(150,8,176,14);c.moveTo(180,64);c.quadraticCurveTo(212,52,222,68);c.moveTo(70,70);c.quadraticCurveTo(40,60,34,76);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=8;for(const[s,e]of[[1.26,1.38],[1.46,1.56],[1.64,1.74]])c.beginPath(),c.arc(128,106,52,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
  if(ring&&!sleep){c.lineWidth=7;c.save();c.translate(170,62);c.scale(1+.15*sin(t*T*4),1+.15*sin(t*T*4));for(let k=0;k<4;k++){c.rotate(PI/2);c.beginPath();c.moveTo(4,-14);c.quadraticCurveTo(4,-4,14,-4);c.stroke()}c.restore()}
  c.restore()
  // blanket mound
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(14,248);c.lineTo(14,178);c.quadraticCurveTo(40,158,92,166);c.quadraticCurveTo(140,150,172,186);c.quadraticCurveTo(186,214,176,248);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(14,178);c.quadraticCurveTo(40,158,92,166);c.quadraticCurveTo(140,150,172,186);c.lineTo(166,196);c.quadraticCurveTo(136,166,92,178);c.quadraticCurveTo(40,172,14,192);c.closePath();c.fill();c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(60,200);c.quadraticCurveTo(90,214,96,240);c.moveTo(120,196);c.quadraticCurveTo(140,214,140,240);c.stroke()
  // her arm out of the blanket: creeping, smashing, resting, retracting
  const[hx,hy]=t<.38?[lerp(150,200,t/.38),lerp(176,72,t/.38)]:t<.4?[200,72]:t<.75?[204,lerp(72,140,(t-.4)/.04)]:t<.85?[lerp(204,150,(t-.75)/.1),lerp(140,176,(t-.75)/.1)]:[150,176]
  for(const[l,st]of[[18,'#111'],[10,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(140,184),c.quadraticCurveTo((140+hx)/2,min(184,hy)-10,hx,hy),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(hx,hy,11,10,0,0,T);c.fill();c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(hx-6,hy-3);c.lineTo(hx+6,hy-3);c.moveTo(hx-6,hy+3);c.lineTo(hx+6,hy+3);c.stroke()
  if(hit){c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(hx+d*18,hy-30),c.lineTo(hx+d*14,hy-12),c.stroke()}
  if(sleep)for(let k=0;k<3;k++){const p=((t-.47)/.33*1.5+k/3)%1;c.globalAlpha=min(1,(1-p)*3);zz(c,104+p*20,40-p*26+k*3,4+p*5)}
  c.globalAlpha=1
}
