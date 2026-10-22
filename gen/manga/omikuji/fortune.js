// manga girl in a furisode nervously unrolls a shrine fortune slip, it reads 大吉 (great luck), her eyes turn to stars and sparkles burst
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=80,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const ease=u=>(u=max(0,min(1,u)),u*u*(3-2*u))
const star=(c,x,y,r,k=.4)=>{c.beginPath();for(let i=0;i<10;i++){const q=i%2?r*k:r,b=i*PI/5-PI/2;c.lineTo(x+cos(b)*q,y+sin(b)*q)}c.closePath()}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x,y,x+r,y);c.quadraticCurveTo(x,y,x,y+r);c.quadraticCurveTo(x,y,x-r,y);c.quadraticCurveTo(x,y,x,y-r);c.fill();c.stroke()}
const eye=(c,x,y,d,joy)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,13,16,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,10.5,14,0,0,T);c.clip();c.fillStyle='#111';c.fill();c.fillStyle='#777';c.beginPath();c.ellipse(x,y+13,10,6,0,0,T);c.fill();c.restore()
  c.fillStyle='#fff';if(joy){c.lineWidth=0;star(c,x,y+1,9,.45);c.fill();c.beginPath();c.arc(x+5,y+10,1.8,0,T);c.fill()}else{c.beginPath();c.ellipse(x-4,y-4,4,5.5,0,0,T);c.fill();c.beginPath();c.arc(x+4,y+8,2,0,T);c.fill()}
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-5);c.quadraticCurveTo(x,y-20,x+16,y-5);c.moveTo(x+d*14,y-8);c.lineTo(x+d*21,y-13);c.stroke()
}
const kanji=(c,x,y)=>{
  c.lineWidth=5;c.beginPath()
  c.moveTo(x-34,y-6);c.lineTo(x-6,y-6);c.moveTo(x-20,y-17);c.lineTo(x-20,y-6);c.quadraticCurveTo(x-22,y+8,x-34,y+15);c.moveTo(x-19,y-2);c.quadraticCurveTo(x-14,y+9,x-5,y+15)
  c.moveTo(x+6,y-14);c.lineTo(x+34,y-14);c.moveTo(x+20,y-19);c.lineTo(x+20,y-5);c.moveTo(x+11,y-6);c.lineTo(x+29,y-6)
  c.moveTo(x+9,y);c.lineTo(x+9,y+16);c.moveTo(x+9,y);c.lineTo(x+31,y);c.lineTo(x+31,y+16);c.moveTo(x+9,y+14);c.lineTo(x+31,y+14);c.stroke()
}
export default(c,t)=>{
  const DOT=tone(c,6,1.3),FINE=tone(c,4,.8)
  const w=16+152*(t<.3?0:t<.5?ease((t-.3)/.2):t<.88?1:1-ease((t-.88)/.12)),joy=t>=.5&&t<.9,nerv=t<.3
  // long white wavy hair behind
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(128,36);c.bezierCurveTo(200,36,214,100,206,150)
  for(let k=0;k<4;k++)c.quadraticCurveTo(222-(k%2)*18,166+k*20,210-(k%2?0:10),182+k*20)
  c.lineTo(46,246);for(let k=3;k>=0;k--)c.quadraticCurveTo(34+(k%2)*18,166+k*20,46+(k%2?0:10),166+k*20)
  c.lineTo(50,150);c.bezierCurveTo(42,100,56,36,128,36);c.fill();c.stroke()
  c.lineWidth=3.5;for(const d of[-1,1])for(const k of[0,1,2])c.beginPath(),c.moveTo(128+d*(70+k*8),110+k*14),c.bezierCurveTo(128+d*(82+k*6),150+k*10,128+d*(70+k*8),190,128+d*(78+k*6),226-k*6),c.stroke()
  // furisode: crossed collar, sleeves with flower pattern
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(102,188);c.quadraticCurveTo(60,196,52,252);c.lineTo(204,252);c.quadraticCurveTo(196,196,154,188);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  c.save();c.clip();c.fillStyle='#fff';c.lineWidth=3;for(const[x,y]of[[72,226],[184,214],[100,246],[170,244],[64,250]])for(let k=0;k<5;k++){const b=k*T/5;c.beginPath();c.ellipse(x+cos(b)*6,y+sin(b)*6,5,3.5,b,0,T);c.fill();c.stroke()}c.restore()
  c.lineWidth=5;for(const[a,b,x,y]of[[100,188,136,246],[156,188,118,246]])for(const[l,st]of[[17,'#111'],[8,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.lineCap='butt',c.beginPath(),c.moveTo(a,b),c.lineTo(x,y),c.stroke()
  c.lineCap='round';c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#111';c.beginPath();c.moveTo(58,236);c.lineTo(198,236);c.lineTo(202,252);c.lineTo(54,252);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(60,244);c.lineTo(196,244);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.fillRect(116,166,24,22);c.beginPath();c.moveTo(116,166);c.lineTo(116,186);c.moveTo(140,166);c.lineTo(140,186);c.stroke()
  // face
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1,joy);eye(c,153,140,1,joy)
  c.lineWidth=4;c.beginPath();if(nerv)c.moveTo(88,116),c.lineTo(112,122),c.moveTo(168,116),c.lineTo(144,122);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,155);c.lineTo(126,158);c.stroke()
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*40+k-3,166),c.lineTo(128+d*40+k+3,158),c.stroke()
  c.lineWidth=4.5;c.beginPath()
  if(joy)c.moveTo(112,164),c.quadraticCurveTo(128,190,144,164),c.closePath(),c.fillStyle='#111',c.fill(),c.stroke(),c.save(),c.clip(),c.fillStyle='#fff',c.beginPath(),c.ellipse(128,180,8,5,0,0,T),c.fill(),c.restore()
  else if(nerv)c.moveTo(117,170),c.quadraticCurveTo(121,165,125,170),c.quadraticCurveTo(129,175,133,170),c.quadraticCurveTo(137,165,140,170),c.stroke()
  else c.ellipse(128,170,6,7,0,0,T),c.fillStyle='#111',c.fill(),c.stroke()
  // white bangs with strands
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(66,156)
  c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,190,156)
  c.quadraticCurveTo(186,122,178,104);c.quadraticCurveTo(174,110,168,114);c.quadraticCurveTo(160,98,148,94);c.quadraticCurveTo(144,106,138,112)
  c.quadraticCurveTo(130,96,120,92);c.quadraticCurveTo(116,104,108,110);c.quadraticCurveTo(100,98,92,98);c.quadraticCurveTo(88,108,84,114)
  c.quadraticCurveTo(80,108,78,104);c.quadraticCurveTo(70,124,66,156);c.closePath();c.fill();c.stroke()
  c.lineWidth=3.5;for(const[a,b,x,y]of[[100,52,90,84],[124,44,116,78],[150,48,154,80],[174,64,176,92]])c.beginPath(),c.moveTo(a,b),c.quadraticCurveTo((a+x)/2+5,(b+y)/2,x,y),c.stroke()
  // kanzashi flower with dangling beads
  for(const[x,y,r]of[[70,72,11],[84,58,9],[62,56,8]]){c.fillStyle='#fff';c.lineWidth=3.5;for(let k=0;k<5;k++){const b=k*T/5;c.beginPath();c.ellipse(x+cos(b)*r*.6,y+sin(b)*r*.6,r*.55,r*.38,b,0,T);c.fill();c.stroke()}c.fillStyle='#111';c.beginPath();c.arc(x,y,r*.28,0,T);c.fill()}
  const sw=3*sin(t*T*2);c.lineWidth=2.5;for(const k of[0,1]){const x=64+k*10;c.beginPath();c.moveTo(x,80);c.lineTo(x+sw,104+k*6);c.stroke();c.fillStyle=k?'#111':'#fff';c.beginPath();c.arc(x+sw,108+k*6,4,0,T);c.fill();c.stroke()}
  if(nerv){c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();c.moveTo(192,96);c.quadraticCurveTo(202,112,192,116);c.quadraticCurveTo(182,112,192,96);c.fill();c.stroke()}
  // reveal lines and sparkles
  if(t>=.48&&t<.62){const u=(t-.48)/.14;c.lineWidth=4;for(let k=0;k<10;k++){const b=PI+k*PI/9,r=60+u*30;c.beginPath();c.moveTo(128+cos(b)*r*1.4,212+sin(b)*r*.9);c.lineTo(128+cos(b)*(r+16)*1.4,212+sin(b)*(r+16)*.9);c.stroke()}}
  if(joy){c.fillStyle='#fff';c.lineWidth=3;for(let k=0;k<4;k++){const p=(t*3+k/4)%1,[x,y]=[[30,180],[224,176],[40,120],[216,120]][k];spark(c,x,y-p*14,4+9*sin(PI*p))}}
  // the fortune slip, rolled ends in her hands
  const L=128-w/2,R=128+w/2
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.rect(L,192,w,40);c.fill();c.stroke()
  c.save();c.beginPath();c.rect(L+2,194,w-4,36);c.clip();c.lineWidth=2;c.strokeRect(54,197,148,30);kanji(c,128,212)
  c.lineWidth=2.5;for(const x of[64,192])for(const y of[202,210,218])c.beginPath(),c.moveTo(x-4,y),c.lineTo(x+4,y),c.stroke();c.restore()
  for(const x of[L,R]){c.lineWidth=4.5;c.fillStyle='#fff';c.beginPath();c.roundRect(x-6,186,12,52,5);c.fill();c.stroke();c.lineWidth=2.5;c.beginPath();c.moveTo(x-3,190);c.lineTo(x-3,234);c.stroke()}
  for(const d of[-1,1]){const x=d<0?L-8:R+8;c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(x,214,11,14,0,0,T);c.fill();c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(x-d*4,204);c.lineTo(x-d*9,206);c.moveTo(x-d*4,214);c.lineTo(x-d*10,215);c.stroke()}
}
