// moon viewing: silver-haired girl in a kimono sits on the veranda with a tri-color dango skewer under a huge full moon, susuki swaying, the moon rabbit pounding mochi
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=12,delay=110
const SKIN='#ffe3d1',HAIR='#e9ecef',HD='#adb5bd',HL='#fff',EYE='#fab005',ED='#e67700',KIM='#7048e8',KD='#5f3dc4',OBI='#ffd43b',MOON='#fff3bf',MD='#ffe066',RAB='#fcc419',WOOD='#c08a5e',WD='#8d6346',SUS='#e8c99b',SUD='#c9a46a',STEM='#94d82d',D1='#faa2c1',D2='#fff',D3='#8ce99a',BL='#ffa8a8',MO='#c92a2a'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip()
  c.fillStyle=EYE;c.beginPath();c.ellipse(x+3,y,11.5,15,0,0,T);c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x+3,y-10,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+3,y+1,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-1,y-7,4.5,0,T);c.fill();c.beginPath();c.arc(x+8,y+6,2,0,T);c.fill();c.restore()
  c.lineWidth=3.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const plume=(c,x,y,a)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle=SUS;c.lineWidth=4;c.beginPath();c.moveTo(0,0);c.bezierCurveTo(-12,-14,-8,-40,4,-54);c.bezierCurveTo(14,-36,12,-12,0,0);c.fill();c.stroke()
  c.strokeStyle=SUD;c.lineWidth=2.5;for(const k of[-14,-26,-38])c.beginPath(),c.moveTo(2,k),c.lineTo(-5,k+6),c.moveTo(3,k),c.lineTo(9,k+6),c.stroke();c.strokeStyle='#111';c.restore()}
export default(c,t)=>{
  const sw=k=>.12*sin(T*t+k),blink=t>=.58&&t<.67,pound=sin(2*T*t),db=3*sin(T*t)
  // full moon
  c.lineWidth=7;c.fillStyle=MOON;c.beginPath();c.arc(150,100,90,0,T);c.fill();c.stroke()
  c.fillStyle=MD;for(const[x,y,r]of[[112,58,12],[196,72,9],[184,150,14],[120,150,8]])c.beginPath(),c.arc(x,y,r,0,T),c.fill()
  // moon rabbit pounding mochi
  c.fillStyle=RAB;c.save();c.translate(166,108)
  c.beginPath();c.ellipse(0,0,16,13,0,0,T);c.fill();c.beginPath();c.arc(10,-12,9,0,T);c.fill()
  for(const k of[0,1])c.beginPath(),c.ellipse(8+k*7,-28,4,11,.2+k*.25,0,T),c.fill()
  c.beginPath();c.ellipse(-16,12,13,6,0,0,T);c.fill();c.beginPath();c.rect(-20,12,8,12);c.fill()
  c.save();c.translate(2,-4);c.rotate(-.9+.5*pound);c.fillRect(-2,-26,4,26);c.fillRect(-8,-32,16,8);c.restore()
  c.restore()
  // susuki grass in a vase
  for(const[k,a0]of[[0,-.3],[1,-.02],[2,.2]]){const a=a0+sw(k)
    c.lineWidth=8;c.strokeStyle='#111';c.beginPath();c.moveTo(214,190);c.quadraticCurveTo(214+40*sin(a)*.4,150,214+90*sin(a),190-90*cos(a));c.stroke()
    c.lineWidth=3.5;c.strokeStyle=STEM;c.stroke();c.strokeStyle='#111';plume(c,214+90*sin(a),190-90*cos(a),a)}
  c.fillStyle='#4dabf7';c.lineWidth=6;c.beginPath();c.moveTo(200,186);c.lineTo(228,186);c.quadraticCurveTo(232,200,226,210);c.lineTo(202,210);c.quadraticCurveTo(196,200,200,186);c.fill();c.stroke()
  // veranda plank
  c.lineWidth=6;c.fillStyle=WOOD;c.beginPath();c.roundRect(14,208,228,16,5);c.fill();c.stroke()
  c.strokeStyle=WD;c.lineWidth=3;for(const x of[60,130,196])c.beginPath(),c.moveTo(x,212),c.lineTo(x+18,212),c.stroke();c.strokeStyle='#111'
  // dangling legs
  for(const[d,ph]of[[-1,0],[1,PI]]){const k=7*sin(T*t+ph)
    for(const[l,s]of[[17,'#111'],[10,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(84+d*11,214),c.lineTo(84+d*11+k*.4,234),c.stroke()
    c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(84+d*11+k*.5,240,9,6,0,0,T);c.fill();c.stroke()
    c.fillStyle=WD;c.beginPath();c.roundRect(76+d*11+k*.5,242,16,5,2);c.fill();c.stroke()}
  // ponytail flowing behind
  c.fillStyle=HAIR;c.lineWidth=6;c.beginPath();c.moveTo(56,118);c.bezierCurveTo(30,140,30,180,40,206);c.quadraticCurveTo(52,196,54,206);c.bezierCurveTo(56,176,60,150,72,130);c.closePath();c.fill();c.stroke()
  // kimono body sitting
  c.fillStyle=KIM;c.beginPath();c.moveTo(72,146);c.quadraticCurveTo(58,154,56,178);c.lineTo(50,212);c.quadraticCurveTo(84,220,118,212);c.lineTo(112,178);c.quadraticCurveTo(110,154,96,146);c.closePath();c.fill();c.stroke()
  c.fillStyle=OBI;c.beginPath();c.rect(56,178,56,14);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(74,146);c.lineTo(84,166);c.lineTo(94,146);c.fill();c.stroke()
  c.fillStyle='#ff922b';c.lineWidth=3;for(const[x,y]of[[64,202],[100,204],[66,164]]){c.beginPath();for(let k=0;k<5;k++){const a=k*T/5-PI/2;c.lineTo(x+6*cos(a),y+6*sin(a));c.lineTo(x+2.5*cos(a+PI/5),y+2.5*sin(a+PI/5))}c.closePath();c.fill();c.stroke()}
  // head
  const Z=.58;c.save();c.translate(84,64);c.scale(Z,Z);c.translate(-128,-40)
  c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,206,96,196,150);c.lineTo(60,150);c.bezierCurveTo(50,96,60,36,128,36);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(blink){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,140,12,PI*.15,PI*.85),c.stroke()}else eye(c,103,140,-1),eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,7,0,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.arc(132,166,8,.15*PI,.85*PI);c.stroke()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,146);c.bezierCurveTo(50,74,88,38,128,38);c.bezierCurveTo(168,38,206,74,190,146)
  c.quadraticCurveTo(186,118,178,104);c.quadraticCurveTo(170,102,164,110);c.quadraticCurveTo(160,96,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,122,90);c.quadraticCurveTo(116,104,106,108);c.quadraticCurveTo(102,96,92,96);c.quadraticCurveTo(86,106,80,112);c.quadraticCurveTo(70,124,66,146);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,58,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  c.fillStyle='#e64980';c.lineWidth=6;for(let k=0;k<5;k++){const a=k*T/5;c.beginPath();c.arc(66+9*cos(a),84+9*sin(a),7,0,T);c.fill();c.stroke()}
  c.fillStyle=OBI;c.beginPath();c.arc(66,84,6,0,T);c.fill();c.stroke()
  c.restore()
  // dango in her hand
  c.save();c.translate(110,168+db);c.rotate(.55)
  c.lineWidth=7;c.beginPath();c.moveTo(0,10);c.lineTo(0,-66);c.stroke();c.strokeStyle=WOOD;c.lineWidth=3;c.stroke();c.strokeStyle='#111'
  c.lineWidth=5;for(const[k,f]of[[0,D3],[1,D2],[2,D1]])c.fillStyle=f,c.beginPath(),c.arc(0,-16-k*18,10,0,T),c.fill(),c.stroke()
  c.restore()
  for(const[l,s]of[[16,'#111'],[9,KIM]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(96,154),c.quadraticCurveTo(104,176,110,170+db),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.arc(111,169+db,7,0,T);c.fill();c.stroke()
}
