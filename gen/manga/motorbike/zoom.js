// chibi scooter rider in a starred helmet with goggles zooms right, striped scarf streaming back, wheels spinning past speed lines
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=16,delay=60,rim=4
const tile=(s,col,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[s/2,s/2],[0,0],[s,0],[0,s],[s,s]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const DOT=tile(6,'#111',1.4),LITE=tile(5,'#fff',1)
const limb=(c,p,w)=>{for(const[l,s]of[[w+8,'#111'],[w,'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))c.lineTo(...q);c.stroke()}c.strokeStyle='#111'}
const star=(c,x,y,r)=>{c.beginPath();for(let k=0;k<10;k++){const q=k%2?r*.45:r,a=k*PI/5-PI/2;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath()}
const wheel=(c,x,y,a,dt)=>{c.lineWidth=11;c.beginPath();c.arc(x,y,22,0,T);c.stroke();c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(x,y,16,0,T);c.fill();c.stroke()
  c.fillStyle=dt;c.beginPath();c.arc(x,y,16,.3,1.5);c.lineTo(x,y);c.fill()
  c.lineWidth=4;for(let k=0;k<5;k++){const b=a+k*T/5;c.beginPath();c.moveTo(x+cos(b)*5,y+sin(b)*5);c.lineTo(x+cos(b)*15,y+sin(b)*15);c.stroke()}
  c.fillStyle='#111';c.beginPath();c.arc(x,y,5,0,T);c.fill()
  c.strokeStyle='#fff';c.lineWidth=2.5;c.beginPath();c.arc(x,y,22,3.6,4.6);c.stroke();c.beginPath();c.arc(x,y,22,.4,1.2);c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,lt)=>{
  c.save();c.beginPath();c.moveTo(x-17,y-4+d*3);c.lineTo(x+17,y-4-d*3);c.lineTo(x+17,y+22);c.lineTo(x-17,y+22);c.clip()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,13,15,0,0,T);c.fill();c.clip()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+6,y+3,9,12,0,0,T);c.fill();c.fillStyle=lt;c.fillRect(x-4,y+7,22,10)
  c.fillStyle='#fff';c.beginPath();c.arc(x+3,y-1,4,0,T);c.fill();c.beginPath();c.arc(x+10,y+9,1.8,0,T);c.fill();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-4+d*3);c.lineTo(x+16,y-4-d*3);c.lineTo(x+d*21,y-10);c.stroke()
}
export default(c,t)=>{
  const dt=c.createPattern(DOT,'repeat'),lt=c.createPattern(LITE,'repeat')
  // wheels turn 27deg a frame (6 spoke-periods a loop) so they read as rolling forward
  const sp=t*T*1.2,b=2*sin(t*T*4),g=2*sin(t*T*4-1),fl=sin(t*T*3)
  c.lineWidth=4;for(const[y,o,l]of[[34,0,52],[92,.5,40],[150,.25,44],[200,.75,30]]){const x=((o-t*2)%1+1)%1*300-60;c.beginPath();c.moveTo(x,y);c.lineTo(x+l,y);c.stroke()}
  c.lineWidth=5;c.beginPath();for(let k=0;k<3;k++){const x=((k/3-t*2)%1+1)%1*300-40;c.moveTo(x,246);c.lineTo(x+30,246)}c.stroke()
  // exhaust puffs drift back and grow
  c.fillStyle='#fff';c.lineWidth=4;for(let k=0;k<3;k++){const u=(t*2+k/3)%1,x=40-34*u,y=212-10*u-b;c.beginPath();c.arc(x,y,5+9*u,0,T);c.fill();c.stroke()}
  c.save();c.translate(0,b)
  // scarf streams back behind everything
  const nk=[110,120+g-b]
  c.fillStyle='#fff';c.lineWidth=5
  for(const[d,len]of[[0,92],[1,70]]){const top=[],bot=[];for(let k=0;k<=6;k++){const x=nk[0]-k*len/6,y=nk[1]-2+d*10-k*3+8*sin(t*T*3-k*.9+d*1.3)*(k/6),h=10-k*.7;top.push([x,y-h]);bot.push([x,y+h])}
    const sc=()=>{c.beginPath();c.moveTo(...top[0]);for(const p of top.slice(1))c.lineTo(...p);for(const p of [...bot].reverse())c.lineTo(...p);c.closePath()}
    sc();c.fill();c.save();c.clip();c.lineWidth=5;c.beginPath();for(let k=1;k<6;k+=2){const x=nk[0]-k*len/6;c.moveTo(x,60);c.lineTo(x-4,180)}c.stroke();c.restore();c.lineWidth=5;sc();c.stroke()
    c.lineWidth=3;for(const q of[-4,0,4]){const p=[nk[0]-len,nk[1]-2+d*10-18+8*sin(t*T*3-5.4+d*1.3)];c.beginPath();c.moveTo(p[0]+2,p[1]+q);c.lineTo(p[0]-8,p[1]+q*1.6);c.stroke()}}
  // rear cowling, floorboard, leg shield and fork
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(44,196);c.quadraticCurveTo(38,160,76,156);c.lineTo(122,158);c.quadraticCurveTo(136,168,132,200);c.lineTo(96,206);c.quadraticCurveTo(70,186,44,196);c.closePath();c.fill();c.save();c.clip();c.fillStyle=dt;c.fillRect(30,176,110,40);c.fillStyle='#111';c.fillRect(30,170,110,6);c.restore();c.stroke()
  c.fillStyle='#111';c.beginPath();c.roundRect(64,146,64,14,7);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(96,204);c.lineTo(166,204);c.lineTo(170,214);c.lineTo(100,216);c.closePath();c.fill();c.stroke()
  c.lineWidth=8;c.beginPath();c.moveTo(184,128);c.lineTo(198,212);c.stroke()
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(160,206);c.quadraticCurveTo(158,160,176,124);c.lineTo(190,126);c.quadraticCurveTo(196,170,186,206);c.closePath();c.fill();c.save();c.clip();c.fillStyle=dt;c.fillRect(176,110,30,100);c.restore();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(186,124);c.quadraticCurveTo(212,124,212,140);c.lineTo(186,144);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(184,184);c.quadraticCurveTo(206,180,214,196);c.lineTo(196,198);c.closePath();c.fill();c.stroke()
  wheel(c,70,214-b,sp,dt);wheel(c,196,214-b,sp,dt)
  // rider: legs on the floorboard, torso, then arms to the bars
  const H=[96,152+g-b]
  limb(c,[[H[0]+4,H[1]+2],[136,158+g-b],[146,198]],17);c.fillStyle='#111';c.lineWidth=5;c.beginPath();c.roundRect(136,192,26,13,5);c.fill();c.stroke()
  c.save();c.translate(...H);c.rotate(.22)
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-18,6);c.lineTo(20,6);c.lineTo(22,-38);c.quadraticCurveTo(2,-48,-18,-40);c.closePath();c.fill();c.save();c.clip();c.fillStyle=dt;c.fillRect(-24,-50,18,60);c.restore();c.stroke()
  c.lineWidth=3.5;c.beginPath();c.moveTo(4,-42);c.lineTo(6,4);c.stroke();c.fillStyle='#111';for(const y of[-30,-16])c.beginPath(),c.arc(10,y,2.5,0,T),c.fill()
  c.restore()
  // head: helmet with goggles and a star decal
  c.save();c.translate(122,84+g-b);c.rotate(.08);c.scale(.62,.62);c.translate(-128,-121)
  c.lineWidth=9;c.fillStyle='#fff'
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,116,140,-1,lt);eye(c,164,140,1,lt)
  c.lineWidth=3.5;for(const d of[-1,1])for(const j of[-6,0,6])c.beginPath(),c.moveTo(140+d*42+j-3,168),c.lineTo(140+d*42+j+3,160),c.stroke()
  c.lineWidth=5;c.fillStyle='#111';c.beginPath();c.moveTo(128,162);c.lineTo(160,160);c.quadraticCurveTo(156,184,144,184);c.quadraticCurveTo(132,184,128,162);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(134,163);c.lineTo(154,162);c.lineTo(152,168);c.lineTo(136,169);c.closePath();c.fill()
  c.fillStyle=dt;c.lineWidth=8;c.beginPath();c.moveTo(80,128);c.quadraticCurveTo(84,96,104,96);c.lineTo(112,118);c.lineTo(122,98);c.lineTo(134,116);c.lineTo(146,98);c.lineTo(156,116);c.lineTo(166,98);c.lineTo(176,112);c.quadraticCurveTo(180,100,180,96);c.lineTo(80,100);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=9;c.beginPath();c.moveTo(62,150);c.bezierCurveTo(46,40,98,18,134,20);c.bezierCurveTo(186,22,210,60,200,104);c.lineTo(176,104);c.quadraticCurveTo(128,88,80,104);c.lineTo(76,150);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(118,22);c.quadraticCurveTo(122,60,124,96);c.lineTo(140,94);c.quadraticCurveTo(140,58,134,21);c.closePath();c.fill()
  c.fillStyle='#fff';c.lineWidth=5;star(c,86,70,16);c.fill();c.stroke()
  c.lineWidth=9;c.fillStyle='#111';c.beginPath();c.moveTo(80,92);c.quadraticCurveTo(134,72,196,90);c.stroke()
  for(const x of[146,182]){c.fillStyle='#fff';c.beginPath();c.arc(x,78,15,0,T);c.fill();c.stroke();c.fillStyle=dt;c.beginPath();c.arc(x,78,9,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x-3,74,3.5,0,T);c.fill()}
  c.lineWidth=4;c.beginPath();c.moveTo(70,146);c.quadraticCurveTo(80,180,104,184);c.stroke()
  c.restore()
  // scarf wrap around the neck
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.roundRect(100,122+g-b,34,14,7);c.fill();c.save();c.clip();c.beginPath();for(const x of[106,118,130])c.moveTo(x,110),c.lineTo(x-4,150);c.stroke();c.restore();c.beginPath();c.roundRect(100,122+g-b,34,14,7);c.stroke()
  // arms reach to the handlebar grip
  const sh=[104,118+g-b];limb(c,[sh,[146,136],[184,126]],13);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(184,126,9,0,T);c.fill();c.stroke()
  c.restore()
}
