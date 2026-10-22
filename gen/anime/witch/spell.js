// chibi witch with long blonde hair twirling her star wand, leaving a trail of colored sparkles, hat tip flopping
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#ffd43b',HD='#fab005',HL='#fff9db',EYE='#fa5252',ED='#c92a2a',HAT='#7048e8',HATD='#5f3dc4',BAND='#ffd43b',ROBE='#845ef7',BL='#ffa8a8',SP=['#ffd43b','#f783ac','#66d9e8','#b2f2bb']
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+18);c.lineTo(x+8,y+18);c.stroke()
}
const star=(c,x,y,r,a=0)=>{c.save();c.translate(x,y);c.rotate(a);c.beginPath();for(let k=0;k<10;k++){const rr=k%2?r*.45:r,b=k*PI/5-PI/2;c.lineTo(cos(b)*rr,sin(b)*rr)}c.closePath();c.restore();c.fill();c.stroke()}
const tipAt=u=>{const a=u*T,hx=196+12*cos(a),hy=190+12*sin(a);return[hx+cos(a*.5-1.1)*0+36*cos(-1.1+.3*sin(a)),hy+36*sin(-1.1+.3*sin(a)),hx,hy]}
export default(c,t)=>{
  const fl=10*sin(t*T)
  c.lineWidth=6
  c.fillStyle=HD;c.beginPath();c.moveTo(128,40);c.bezierCurveTo(204,40,214,110,208,170);c.quadraticCurveTo(216,206,204,234);c.quadraticCurveTo(190,226,180,236);c.lineTo(76,236);c.quadraticCurveTo(66,226,52,234);c.quadraticCurveTo(40,206,48,170);c.bezierCurveTo(42,110,52,40,128,40);c.fill();c.stroke()
  c.fillStyle=ROBE;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,212),c.lineTo(128+d*30,190),c.lineTo(128+d*34,206),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=BAND;c.beginPath();c.arc(128,214,7,0,T);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.rect(116,168,24,26);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,156);c.lineTo(127,159);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,12,6,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,164),c.lineTo(128+d*42+k+2,158),c.stroke()
  c.lineWidth=3.5;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(120,166);c.quadraticCurveTo(128,178,136,166);c.closePath();c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,160)
  c.bezierCurveTo(50,80,88,46,128,46);c.bezierCurveTo(168,46,206,80,190,160)
  c.quadraticCurveTo(188,124,180,106);c.quadraticCurveTo(172,104,166,112);c.quadraticCurveTo(160,98,150,94);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,98,124,92);c.quadraticCurveTo(118,104,110,108);c.quadraticCurveTo(104,98,96,96);c.quadraticCurveTo(90,104,86,112)
  c.quadraticCurveTo(80,104,76,106);c.quadraticCurveTo(68,126,66,160);c.closePath();c.fill();c.stroke()
  c.fillStyle=HAT;c.beginPath();c.moveTo(80,66);c.bezierCurveTo(94,44,108,24,126,14);c.quadraticCurveTo(152+fl,2,184+fl,22);c.quadraticCurveTo(160+fl*.6,20,148,34);c.bezierCurveTo(156,46,168,56,176,66);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=BAND;c.fillRect(70,48,120,12);c.restore();c.beginPath();c.moveTo(80,66);c.bezierCurveTo(94,44,108,24,126,14);c.quadraticCurveTo(152+fl,2,184+fl,22);c.quadraticCurveTo(160+fl*.6,20,148,34);c.bezierCurveTo(156,46,168,56,176,66);c.closePath();c.stroke()
  c.fillStyle=HATD;c.beginPath();c.ellipse(128,68,94,16,0,0,T);c.fill();c.stroke()
  c.fillStyle=BAND;c.lineWidth=4;star(c,108,40,9,-.2)
  c.lineWidth=6
  for(let k=1;k<=6;k++){const[x,y]=tipAt(t-k*.05);const s=9*(1-k/7);c.fillStyle=SP[k%4];c.lineWidth=3;star(c,x,y,s,k)}
  const[sx,sy,hx,hy]=tipAt(t)
  for(const[l,s]of[[30,'#111'],[19,ROBE]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(166,222),c.lineTo(hx-6,hy+10),c.stroke()
  c.strokeStyle='#111'
  for(const[l,s]of[[11,'#111'],[5,'#8d6346']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(hx,hy),c.lineTo(sx,sy),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(hx,hy,12,11,0,0,T);c.fill();c.stroke()
  c.fillStyle='#ffd43b';c.lineWidth=5;star(c,sx,sy,14,t*T)
}
