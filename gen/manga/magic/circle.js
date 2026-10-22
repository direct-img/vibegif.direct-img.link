// manga mage girl floating over a spinning summoning circle, hatched twin tails lifting in the updraft, spellbook pages fluttering, light rising
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min,round}=Math,T=2*PI
export const frames=12,delay=100,rim=4
const TL=createCanvas(6,6),tx=TL.getContext('2d');tx.fillStyle='#111';for(const[a,b]of[[1.5,1.5],[4.5,4.5]])tx.beginPath(),tx.arc(a,b,1.05,0,T),tx.fill()
const eye=(c,x,y,d,tn)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=tn;c.fillRect(x-12,y-14,24,32);c.fillStyle='#111';c.fillRect(x-12,y-14,24,11);c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,4.5,7,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x-4,y-5,4,5,-.4,0,T);c.fill();c.save();c.translate(x+4,y+8);c.beginPath();for(let k=0;k<8;k++){const r=k%2?1:3.5,a=k*PI/4;c.lineTo(r*cos(a),r*sin(a))}c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-17,y-6);c.quadraticCurveTo(x,y-21,x+17,y-6);c.moveTo(x+d*16,y-7);c.lineTo(x+d*22,y-12);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+19);c.lineTo(x+8,y+19);c.stroke()
}
const hatch=(c,f,g=6)=>{c.save();f();c.clip();c.lineWidth=2;c.beginPath();for(let k=-256;k<256;k+=g)c.moveTo(k,0),c.lineTo(k+256,256);c.stroke();c.restore()}
export default(c,t)=>{
  const tn=c.createPattern(TL,'repeat'),w=sin(t*T),fl=round(3*sin(t*T))
  const cx=128,cy=214,RX=110,RY=28,P=(r,a)=>[cx+RX*r*cos(a),cy+RY*r*sin(a)]
  // summoning circle: double ring, rune ticks spinning one way, hexagram the other
  c.lineWidth=4;for(const r of[1,.86])c.beginPath(),c.ellipse(cx,cy,RX*r,RY*r,0,0,T),c.stroke()
  c.lineWidth=2.5;for(let k=0;k<12;k++){const a=-t*T/12+k*T/12,[x,y]=P(.93,a),[x2,y2]=P(.93,a+.16);c.beginPath();if(k%3==0)c.ellipse(x,y,3.5,2,0,0,T);else c.moveTo(x,y),c.lineTo(x2,y2);c.stroke()}
  c.lineWidth=3;for(const o of[0,PI/3]){c.beginPath();for(let k=0;k<3;k++){const[x,y]=P(.86,t*PI/3+o+k*T/3);k?c.lineTo(x,y):c.moveTo(x,y)}c.closePath();c.stroke()}
  c.beginPath();c.ellipse(cx,cy,RX*.42,RY*.42,0,0,T);c.stroke()
  // rising light streaks
  c.lineWidth=2.5;c.fillStyle='#fff';for(let k=0;k<4;k++){const p=(t+k/4)%1,[x]=P(.72,k*1.9+.4),y=cy-10-p*110,s=6*sin(p*PI);if(s>1.5){c.beginPath();for(let j=0;j<8;j++){const r=j%2?s*.3:s,a=j*PI/4;c.lineTo(x+r*cos(a),y+r*sin(a))}c.closePath();c.fill();c.stroke()}}
  c.save();c.translate(0,fl-4)
  // long hatched hair fanning up and out in the updraft, locks waving
  c.save();c.translate(128,70);c.scale(.52,.52);c.translate(-128,-120)
  for(const d of[-1,1]){const X=x=>128+d*x,v=k=>8*sin(t*T+k)
    const hr=()=>{c.beginPath();c.moveTo(128,40);c.quadraticCurveTo(X(44),18,X(64+v(0)),8+v(1));c.quadraticCurveTo(X(70),34,X(84),44);c.quadraticCurveTo(X(112),34,X(130+v(2)),34+v(0))
      c.quadraticCurveTo(X(100),64,X(96),78);c.quadraticCurveTo(X(124),86,X(136+v(1)),104+v(2));c.quadraticCurveTo(X(100),118,X(56),156);c.lineTo(128,156);c.closePath()}
    c.lineWidth=7;c.fillStyle='#fff';hr();c.fill();hatch(c,hr,8);hr();c.stroke()
    c.lineWidth=3;c.beginPath();c.moveTo(X(70),70);c.quadraticCurveTo(X(96),56,X(112),46);c.moveTo(X(78),110);c.quadraticCurveTo(X(104),96,X(120),96);c.stroke()}
  c.restore()
  // cloak: ink black with a white star trim
  const ck=()=>{c.beginPath();c.moveTo(112,96);c.quadraticCurveTo(84,116,78,170);c.quadraticCurveTo(96,178,104,172);c.quadraticCurveTo(116,180,128,174);c.quadraticCurveTo(140,180,152,172);c.quadraticCurveTo(160,178,178,170);c.quadraticCurveTo(172,116,144,96);c.closePath()}
  c.lineWidth=4;c.fillStyle='#111';ck();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=2;c.beginPath();c.moveTo(84,164);c.quadraticCurveTo(96,170,104,166);c.quadraticCurveTo(116,173,128,168);c.quadraticCurveTo(140,173,152,166);c.quadraticCurveTo(160,170,172,164);c.stroke()
  c.fillStyle='#fff';for(const[x,y]of[[94,148],[164,140],[100,124]]){c.beginPath();for(let k=0;k<8;k++){const r=k%2?1.2:4,a=k*PI/4;c.lineTo(x+r*cos(a),y+r*sin(a))}c.fill()}
  c.strokeStyle='#111'
  // legs dangling
  c.lineWidth=4;c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.rect(128+d*12-5,172,10,16),c.fill(),c.stroke(),c.beginPath(),c.ellipse(128+d*12,192,8,6,0,0,T),c.fillStyle='#111',c.fill(),c.stroke(),c.fillStyle='#fff'
  // open spellbook with a page fluttering
  c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(128,140);c.quadraticCurveTo(110,132,94,138);c.lineTo(96,160);c.quadraticCurveTo(112,154,128,162);c.quadraticCurveTo(144,154,160,160);c.lineTo(162,138);c.quadraticCurveTo(146,132,128,140);c.fill();c.stroke()
  c.beginPath();c.moveTo(128,140);c.lineTo(128,162);c.stroke()
  c.lineWidth=2;for(const d of[-1,1])for(const y of[144,149,154])c.beginPath(),c.moveTo(128+d*8,y),c.lineTo(128+d*26,y-2),c.stroke()
  const pg=(t*2)%1,pa=PI*min(1,pg/.6),px=cos(pa)*30
  if(pg<.6){c.lineWidth=3;c.fillStyle='#fff';c.beginPath();c.moveTo(128,140);c.quadraticCurveTo(128+px*.5,132-14*sin(pa),128+px,138-10*sin(pa));c.lineTo(128+px,158-10*sin(pa));c.quadraticCurveTo(128+px*.5,152-14*sin(pa),128,162);c.closePath();c.fill();c.stroke()}
  for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*34,154,6,7,0,0,T),c.fill(),c.stroke()
  // glow sparkles above the book
  c.fillStyle='#fff';c.lineWidth=2.5;for(const[x,y,o]of[[118,120,0],[140,114,.5]]){const s=5*max(0,sin((t*2+o)*PI));if(s>1){c.beginPath();for(let k=0;k<8;k++){const r=k%2?s*.3:s,a=k*PI/4;c.lineTo(x+r*cos(a),y+r*sin(a))}c.closePath();c.fill();c.stroke()}}
  // head
  c.save();c.translate(128,70);c.scale(.52,.52);c.translate(-128,-120)
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1,tn);eye(c,153,140,1,tn)
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*42+k-3,166),c.lineTo(128+d*42+k+3,158),c.stroke()
  c.lineWidth=4;c.beginPath();c.ellipse(128,170,6,5,0,0,T);c.stroke()
  const bg=()=>{c.beginPath();c.moveTo(70,150);c.bezierCurveTo(52,72,88,36,128,36);c.bezierCurveTo(168,36,204,72,186,150);c.quadraticCurveTo(182,114,174,102)
    c.quadraticCurveTo(166,112,158,114);c.quadraticCurveTo(152,96,140,92);c.quadraticCurveTo(136,108,126,112);c.quadraticCurveTo(120,96,106,92);c.quadraticCurveTo(100,108,92,112);c.quadraticCurveTo(86,108,82,102);c.quadraticCurveTo(72,118,70,150);c.closePath()}
  c.lineWidth=7;c.fillStyle='#fff';bg();c.fill();hatch(c,bg,8);bg();c.stroke()
  c.restore()
  c.restore()
}
