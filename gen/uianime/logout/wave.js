// silver haired girl in a beret and red scarf by an open door, smiling and waving goodbye, a wink and little hearts as she heads out
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#e9ecef',HD='#adb5bd',EYE='#4dabf7',ED='#1864ab',BER='#ff6b6b',BD='#c92a2a',COAT='#e8b07a',CD='#b9773f',SCF='#fa5252',BL='#ffa8a8',DR='#96f2d7',DD='#20c997',IN='#495057',HT='#ff8fab'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const heart=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore();c.fill();c.stroke()}
export default(c,t)=>{
  const a=-PI/2+.32*sin(2*T*t),ex=212,ey=204,hx=ex+60*cos(a),hy=ey+60*sin(a),w=t>=.5&&t<.8125
  c.lineWidth=6;c.fillStyle=IN;c.beginPath();c.roundRect(12,40,68,212,[10,10,0,0]);c.fill();c.stroke()
  c.fillStyle='#ffe066';c.beginPath();c.moveTo(18,248);c.lineTo(74,248);c.lineTo(74,46);c.closePath();c.globalAlpha=.25;c.fill();c.globalAlpha=1
  c.fillStyle=DR;c.beginPath();c.moveTo(12,40);c.lineTo(46,54);c.lineTo(46,238);c.lineTo(12,252);c.closePath();c.fill();c.stroke()
  c.strokeStyle=DD;c.lineWidth=4;c.beginPath();c.moveTo(20,62);c.lineTo(38,70);c.lineTo(38,138);c.lineTo(20,136);c.closePath();c.moveTo(20,158);c.lineTo(38,158);c.lineTo(38,222);c.lineTo(20,230);c.closePath();c.stroke();c.strokeStyle='#111'
  c.fillStyle='#ffd43b';c.lineWidth=4;c.beginPath();c.arc(39,150,5,0,T);c.fill();c.stroke()
  const H=f=>{c.save();c.translate(140,182);c.scale(.72,.72);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,96,206,150);c.quadraticCurveTo(216,190,204,226);c.quadraticCurveTo(196,236,186,228);c.lineTo(70,228);c.quadraticCurveTo(60,236,52,226);c.quadraticCurveTo(40,190,50,150);c.bezierCurveTo(42,96,56,34,128,34);c.fill();c.stroke()
    c.fillStyle=COAT;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.lineWidth=6;c.beginPath();c.moveTo(128,214);c.lineTo(128,330);c.stroke()
    c.fillStyle=CD;for(const y of[246,282])c.beginPath(),c.arc(146,y,6,0,T),c.fill(),c.stroke()
    c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.lineTo(142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SCF;c.beginPath();c.moveTo(94,196);c.quadraticCurveTo(128,184,162,196);c.quadraticCurveTo(168,212,160,220);c.quadraticCurveTo(128,208,96,220);c.quadraticCurveTo(88,210,94,196);c.fill();c.stroke()
    c.beginPath();c.moveTo(102,214);c.lineTo(90,266);c.lineTo(114,266);c.lineTo(116,216);c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(96,256);c.lineTo(110,256);c.stroke();c.strokeStyle='#111'
    c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103,140,-1)
    if(w){c.lineWidth=8;c.beginPath();c.arc(153,148,14,1.15*PI,1.85*PI);c.stroke()}else eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(114,164);c.quadraticCurveTo(128,186,142,164);c.closePath();c.fill();c.stroke()
    c.save();c.clip();c.fillStyle='#ff8fab';c.beginPath();c.ellipse(128,178,8,6,0,0,T);c.fill();c.restore()
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
    c.quadraticCurveTo(186,118,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,124,68,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=6;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=BER;c.lineWidth=8;c.beginPath();c.ellipse(148,48,62,24,.18,0,T);c.fill();c.stroke()
    c.strokeStyle=BD;c.lineWidth=5;c.beginPath();c.ellipse(148,48,46,13,.18,.2,PI-.4);c.stroke();c.strokeStyle='#111'
    c.fillStyle=BD;c.lineWidth=6;c.beginPath();c.roundRect(150,14,12,14,4);c.fill();c.stroke()
  })
  ds(c,24,14,COAT,()=>{c.moveTo(168,226);c.lineTo(ex,ey);c.lineTo(ex+42*cos(a),ey+42*sin(a))})
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN
  c.save();c.translate(hx,hy);c.rotate(a+PI/2)
  for(const x of[-9,-3,3,9])c.beginPath(),c.ellipse(x,-14,3.6,8,0,0,T),c.fill(),c.stroke()
  c.beginPath();c.ellipse(-14,-2,4,8,-.7,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(0,-2,13,12,0,0,T);c.fill();c.stroke()
  c.restore()
  c.fillStyle=HT;c.lineWidth=3.5;for(const o of[0,.5]){const p=(t+o)%1,s=sin(PI*p);if(s>.15)heart(c,232+6*sin(T*p*2),100-80*p,.5+.6*s)}
}
