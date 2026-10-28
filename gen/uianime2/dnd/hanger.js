// midnight blue haired girl in pajamas and a sleep mask dozing while hugging a pillow, breathing slowly as Zzz drift up and a moon "DND" hanger sways on the doorknob beside her
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=110
const SKIN='#ffe3d1',HAIR='#3b4a8c',HD='#232c5e',HL='#91a7ff',PJ='#a5d8ff',PW='#f3f0ff',PWD='#d0bfff',MK='#f783ac',MKD='#d6336c',BL='#ffa8a8',DR='#e8b07a',DRD='#c47f45',KN='#fcc419',HG='#fff3bf',NV='#364fc7',MN='#ffd43b',RD='#fa5252',ZC='#91a7ff'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const zed=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.rotate(-.15);ds(c,11,5,ZC,()=>{c.moveTo(-9,-9);c.lineTo(9,-9);c.lineTo(-9,9);c.lineTo(9,9)});c.restore()}
export default(c,t)=>{
  const br=sin(T*t),sw=.13*sin(T*t+.6)
  c.lineWidth=6;c.fillStyle=DR;c.beginPath();c.roundRect(170,-20,110,300,8);c.fill();c.stroke()
  c.strokeStyle=DRD;c.lineWidth=5;c.beginPath();c.roundRect(188,10,80,96,6);c.roundRect(188,128,80,150,6);c.stroke();c.strokeStyle='#111'
  c.fillStyle=KN;c.lineWidth=5;c.beginPath();c.roundRect(186,74,22,46,8);c.fill();c.stroke()
  c.save();c.translate(197,86);c.rotate(sw)
  c.fillStyle=HG;c.lineWidth=6;c.beginPath();c.roundRect(-30,-16,60,112,12);c.moveTo(9,0);c.arc(0,0,9,0,T,true);c.fill('evenodd');c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(0,-9);c.lineTo(0,-16);c.stroke()
  c.fillStyle=NV;c.lineWidth=5;c.beginPath();c.arc(0,34,19,0,T);c.fill();c.stroke()
  c.fillStyle=MN;c.lineWidth=4;c.beginPath();c.arc(-2,34,12,PI*.3,PI*1.7);c.quadraticCurveTo(-8,34,4,43);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(10,26,2.5,0,T);c.arc(12,40,1.8,0,T);c.fill()
  c.beginPath();for(const x of[-18,0,18]){if(x)c.moveTo(x-5,64),c.lineTo(x-5,82),c.lineTo(x-1,82),c.quadraticCurveTo(x+6,82,x+6,73),c.quadraticCurveTo(x+6,64,x-1,64),c.closePath();else c.moveTo(x-5,82),c.lineTo(x-5,64),c.lineTo(x+5,82),c.lineTo(x+5,64)}
  for(const[w,s]of[[9,'#111'],[4,RD]])c.lineWidth=w,c.strokeStyle=s,c.stroke()
  c.restore();c.strokeStyle='#111'
  c.fillStyle=KN;c.lineWidth=5;c.beginPath();c.arc(197,86,7,0,T);c.fill();c.stroke()
  const H=f=>{c.save();c.translate(92,176+2*br);c.rotate(-.16);c.scale(.64,.64);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(204,34,216,110,212,190);c.quadraticCurveTo(214,240,200,260);c.lineTo(56,260);c.quadraticCurveTo(42,240,44,190);c.bezierCurveTo(40,110,52,34,128,34);c.fill();c.stroke()
    c.fillStyle=PJ;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,400);c.lineTo(216,400);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.lineWidth=7;for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.quadraticCurveTo(128+d*22,190,128+d*34,192),c.quadraticCurveTo(128+d*40,214,128,222),c.closePath(),c.fill(),c.stroke()
    c.fillStyle=SKIN;c.lineWidth=9;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,208,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,166,13,7,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,169),c.lineTo(128+d*44+k+2,162),c.stroke()
    c.fillStyle='#c92a2a';c.lineWidth=5;c.beginPath();c.ellipse(128,173,5+br,4+1.5*br,0,0,T);c.fill();c.stroke()
    c.fillStyle=MK;c.lineWidth=7;c.beginPath();c.moveTo(70,128);c.bezierCurveTo(74,112,116,112,128,122);c.bezierCurveTo(140,112,182,112,186,128);c.bezierCurveTo(190,150,160,160,128,148);c.bezierCurveTo(96,160,66,150,70,128);c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=5;for(const x of[100,156]){c.beginPath();c.arc(x,128,12,PI*.15,PI*.85);c.stroke();for(const a of[.35,.65])c.beginPath(),c.moveTo(x+12*cos(PI*a),128+12*sin(PI*a)),c.lineTo(x+18*cos(PI*a),128+18*sin(PI*a)),c.stroke()}
    c.strokeStyle='#111'
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(62,190)
    c.bezierCurveTo(44,74,88,36,128,36);c.bezierCurveTo(168,36,212,74,194,190);c.quadraticCurveTo(186,194,180,188)
    c.quadraticCurveTo(184,130,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,140,76,188);c.quadraticCurveTo(70,194,62,190);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    ds(c,14,7,MKD,()=>{c.moveTo(60,124);c.lineTo(72,128);c.moveTo(184,128);c.lineTo(196,124)})
    c.fillStyle=MN;c.lineWidth=6;c.beginPath();for(let k=0;k<10;k++){const a=-PI/2+k*PI/5,r=k%2?7:15;c.lineTo(84+r*cos(a),70+r*sin(a))}c.closePath();c.fill();c.stroke()
  })
  c.fillStyle=PW;c.lineWidth=6;c.beginPath();c.moveTo(26,208+br);c.quadraticCurveTo(92,198+br,158,210+br);c.quadraticCurveTo(166,238,158,266);c.lineTo(26,266);c.quadraticCurveTo(18,238,26,208+br);c.fill();c.stroke()
  c.strokeStyle=PWD;c.lineWidth=4;c.beginPath();c.moveTo(44,238+br);c.quadraticCurveTo(92,230+br,140,240+br);c.stroke();c.strokeStyle='#111'
  for(const[x,y,e,d]of[[36,194,70,1],[150,190,118,-1]])ds(c,22,13,PJ,()=>{c.moveTo(x,y+br);c.quadraticCurveTo(x+d*2,y+28+br,e-d*6,222+br)})
  c.fillStyle=SKIN;c.lineWidth=5;for(const x of[72,116])c.beginPath(),c.ellipse(x,220+br,11,9,0,0,T),c.fill(),c.stroke()
  for(const o of[0,1/3,2/3]){const p=(t+o)%1;zed(c,128+30*p+5*sin(p*T),118-96*p,.45+.6*sin(PI*p))}
}
