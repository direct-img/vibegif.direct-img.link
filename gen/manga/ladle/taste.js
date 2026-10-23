// girl in an apron dips a ladle into a steaming pot, blows on it, sips, and melts into a happy ^^ with flowers
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=80,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const ease=u=>(u=max(0,min(1,u)),u*u*(3-2*u))
const mix=(a,b,u)=>a.map((v,k)=>v+(b[k]-v)*u)
// ladle keyframes: [bowl x, bowl y, tilt, hand x, hand y]
const K=[[0,[150,252,0,176,226]],[.18,[150,252,0,176,226]],[.3,[126,178,0,184,206]],[.4,[126,178,0,184,206]],[.46,[124,160,-.5,182,196]],[.56,[124,160,-.5,182,196]],[.64,[150,206,0,188,222]],[.86,[150,206,0,188,222]],[1,[150,252,0,176,226]]]
const pose=t=>{for(let k=1;k<K.length;k++)if(t<=K[k][0])return mix(K[k-1][1],K[k][1],ease((t-K[k-1][0])/(K[k][0]-K[k-1][0])));return K[0][1]}
const flower=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle='#fff';c.lineWidth=3;for(let k=0;k<5;k++){const b=k*T/5;c.beginPath();c.ellipse(cos(b)*r*.6,sin(b)*r*.6,r*.5,r*.35,b,0,T);c.fill();c.stroke()}c.fillStyle='#111';c.beginPath();c.arc(0,0,r*.25,0,T);c.fill();c.restore()}
const spark=(c,x,y,r)=>{c.fillStyle='#fff';c.lineWidth=2.5;c.beginPath();for(let k=0;k<8;k++){const q=k%2?r*.3:r,b=k*PI/4;c.lineTo(x+cos(b)*q,y+sin(b)*q)}c.closePath();c.fill();c.stroke()}
export default(c,t)=>{
  const DOT=tone(c,6,1.3),FINE=tone(c,4,.8)
  const[bx,by,ba,hx,hy]=pose(t),dip=t<.24||t>.92,blow=t>=.3&&t<.42,sip=t>=.44&&t<.58,yum=t>=.6&&t<.9
  // girl
  c.save();c.translate(124,112);c.scale(.9,.9);c.translate(-128,-130)
  c.lineWidth=7;c.fillStyle='#111';c.beginPath();c.moveTo(62,170);c.bezierCurveTo(44,70,84,30,128,30);c.bezierCurveTo(172,30,212,70,194,170);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(98,184);c.quadraticCurveTo(48,194,40,290);c.lineTo(216,290);c.quadraticCurveTo(208,194,158,184);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  // apron bib with a frill and neck strap
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(96,214);c.lineTo(160,214);c.lineTo(166,290);c.lineTo(90,290);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();for(let k=0;k<=8;k++)c.lineTo(96+k*8,214+(k%2?-5:0));c.stroke()
  c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*30,214),c.lineTo(128+d*16,188),c.stroke()
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.rect(116,166,24,24);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,188);c.moveTo(140,166);c.lineTo(140,188);c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  // eyes
  if(sip){c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.moveTo(x-14,140),c.quadraticCurveTo(x,148,x+14,140),c.stroke()}
  else if(yum){c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.moveTo(x-14,146),c.quadraticCurveTo(x,128,x+14,146),c.stroke()}
  else for(const[x,d]of[[103,-1],[153,1]]){
    const ly=dip?6:blow?5:0,lx=dip?3:blow?1:0,lid=blow?8:0
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,140,13,16,0,0,T);c.fill()
    c.save();c.beginPath();c.ellipse(x,140,13,16,0,0,T);c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(x+lx,140+ly,10.5,14,0,0,T);c.fill()
    c.fillStyle='#777';c.beginPath();c.ellipse(x+lx,152+ly,9,5,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.ellipse(x+lx-4,135+ly,4,5.5,0,0,T);c.fill();c.beginPath();c.arc(x+lx+4,147+ly,2,0,T);c.fill()
    if(lid){c.fillStyle='#fff';c.fillRect(x-14,122,28,10+lid)}c.restore()
    c.lineWidth=6;c.beginPath();c.moveTo(x-16,135+lid);c.quadraticCurveTo(x,121+lid,x+16,135+lid);c.moveTo(x+d*14,132+lid);c.lineTo(x+d*21,127+lid);c.stroke()}
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,154);c.lineTo(126,157);c.stroke()
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*42+k-3,166),c.lineTo(128+d*42+k+3,158),c.stroke()
  if(yum){c.lineWidth=4.5;c.fillStyle='#111';c.beginPath();c.moveTo(114,166);c.quadraticCurveTo(128,186,142,166);c.closePath();c.fill();c.stroke()}
  else if(blow){c.lineWidth=4;c.beginPath();c.arc(128,170,4,0,T);c.stroke()}
  else if(!sip){c.lineWidth=4;c.beginPath();c.moveTo(121,169);c.quadraticCurveTo(128,173,135,169);c.stroke()}
  // swept ink bangs, forehead showing on her right, two white clips
  c.lineWidth=7;c.fillStyle='#111';c.beginPath();c.moveTo(66,160);c.bezierCurveTo(48,72,86,36,128,36);c.bezierCurveTo(170,36,208,72,190,160)
  c.quadraticCurveTo(188,128,182,112);c.quadraticCurveTo(172,122,162,128);c.quadraticCurveTo(160,114,148,108);c.quadraticCurveTo(140,116,130,118);c.quadraticCurveTo(126,106,114,100)
  c.quadraticCurveTo(100,94,90,98);c.quadraticCurveTo(80,108,76,124);c.quadraticCurveTo(70,140,66,160);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;for(const[s,e]of[[1.28,1.38],[1.46,1.56],[1.64,1.74]])c.beginPath(),c.arc(128,104,52,PI*s,PI*e),c.stroke()
  c.lineWidth=5;for(const k of[0,1])c.beginPath(),c.moveTo(94+k*8,90+k*3),c.lineTo(108+k*8,98+k*3),c.stroke()
  c.strokeStyle='#111'
  // low side ponytail over her shoulder with a white tie
  c.lineWidth=7;c.fillStyle='#111';c.beginPath();c.moveTo(70,150);c.bezierCurveTo(52,190,58,230,44,268);c.quadraticCurveTo(62,258,70,270);c.bezierCurveTo(80,230,90,196,84,160);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(72,190);c.quadraticCurveTo(66,220,58,250);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.roundRect(62,166,22,12,5);c.fill();c.stroke()
  // hand on cheek while it tastes good
  if(yum){c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.ellipse(78,172,14,17,-.3,0,T);c.fill();c.stroke()
    c.lineWidth=4;for(const k of[0,1,2])c.beginPath(),c.moveTo(70+k*6,160+k*2),c.lineTo(76+k*6,170+k*2),c.stroke()}
  c.restore()
  // pot body, soup, back rim
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(28,228);c.lineTo(36,262);c.lineTo(212,262);c.lineTo(220,228);c.closePath();c.fill();c.fillStyle=FINE;c.fill();c.stroke()
  for(const d of[-1,1]){c.beginPath();c.roundRect(124+d*104-8,226,16,12,4);c.fillStyle='#fff';c.fill();c.stroke()}
  c.beginPath();c.ellipse(124,228,96,16,0,0,T);c.fillStyle='#fff';c.fill();c.stroke()
  c.beginPath();c.ellipse(124,230,84,10,0,0,T);c.fillStyle=DOT;c.fill()
  // arm and ladle
  for(const[l,s]of[[30,'#111'],[19,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(196,262),c.quadraticCurveTo(206,236,hx,hy),c.stroke()
  c.strokeStyle='#111'
  c.save();c.beginPath();c.rect(0,0,256,dip?229:256);c.clip()
  for(const[l,s]of[[9,'#111'],[3,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(bx+12*cos(ba),by-4),c.lineTo(hx+6,hy-6),c.stroke()
  c.strokeStyle='#111';c.save();c.translate(bx,by);c.rotate(ba);c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(-14,-4);c.quadraticCurveTo(-14,12,0,12);c.quadraticCurveTo(14,12,14,-4);c.closePath();c.fill();c.stroke()
  c.fillStyle=DOT;c.beginPath();c.ellipse(0,-4,13,3,0,0,T);c.fill();c.restore();c.restore()
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.ellipse(hx,hy,13,11,-.4,0,T);c.fill();c.stroke()
  // steam: from the pot always, from the ladle while she blows
  const steam=(x,y,h,p)=>{for(const[l,s]of[[8,'#111'],[3,'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();for(let k=0;k<=12;k++){const v=k/12;c.lineTo(x+5*sin(v*T*1.5+p*T),y-v*h)}c.stroke()}c.strokeStyle='#111'}
  for(const[x,o]of[[38,0],[58,.5]])steam(x,214,44+8*sin((t+o)*T),t*2+o)
  if(blow){steam(118,170,22,t*4);c.lineWidth=3;for(const k of[-1,0,1])c.beginPath(),c.moveTo(112,150+k*6),c.lineTo(104,154+k*8),c.stroke()}
  if(yum){const u=ease((t-.6)/.08);for(const[x,y,r,a]of[[30,70,11,0],[214,56,9,1],[220,120,8,2]])flower(c,x,y,r*u,a+t*3)
    for(const[x,y,r,o]of[[40,120,9,0],[200,92,8,.5],[60,30,7,.25]])spark(c,x,y,r*(.6+.4*sin((t*4+o)*T))*u)}
}
