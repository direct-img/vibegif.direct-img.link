// pink odango girl with a napkin bib bouncing eagerly with fork and knife raised, then looking down at her empty plate and tearing up
const{PI}=Math,T=2*PI
export const frames=16,delay=85
const SKIN='#ffe3d1',HAIR='#ff8fab',HD='#f06595',HL='#ffdeeb',EYE='#9775fa',ED='#6741d9',BL='#ffa8a8',DR='#74c0fc',TB='#ffd8a8',TBD='#e0a96d',RM='#99e9f2',SV='#dee2e6',MO='#c92a2a',TG='#ff8fab',TR='#a5d8ff'
const E=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const sp=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.16,y+(b-a)*r*.16,x+a*r,y+b*r);c.fill();c.stroke()}
const eye=(c,x,y,d,s,o)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.clip();c.beginPath();c.ellipse(x,y+3+o,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x,y-7+o,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+4+o,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';if(s){c.lineWidth=2;sp(c,x-3,y-2,8);c.beginPath();c.arc(x+5,y+9,2.5,0,T);c.fill()}
  else{c.beginPath();c.arc(x-4,y-4+o,5.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+3+o,3,0,T);c.fill();c.fillStyle=TR;c.beginPath();c.ellipse(x,y+17,16,7,0,0,T);c.fill();c.strokeStyle='#fff';c.lineWidth=2.5;c.beginPath();c.moveTo(x-12,y+11);c.quadraticCurveTo(x-6,y+8,x,y+11);c.quadraticCurveTo(x+6,y+14,x+12,y+11);c.stroke()}
  c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
// fork or knife standing up in a fist
const ute=(c,x,y,a,k)=>{
  c.save();c.translate(x,y);c.rotate(a)
  ds(c,13,6,SV,()=>{c.moveTo(0,0);c.lineTo(0,-44)})
  c.fillStyle=SV;c.lineWidth=4.5;c.beginPath()
  if(k)c.moveTo(-6,-42),c.lineTo(-6,-92),c.quadraticCurveTo(8,-86,7,-58),c.lineTo(6,-42),c.closePath()
  else{for(const[l,k]of[[10,'#111'],[4,SV]]){c.lineWidth=l;c.strokeStyle=k;c.beginPath();for(const q of[-9,0,9])c.moveTo(q,-62),c.lineTo(q,-92);c.stroke()}c.strokeStyle='#111';c.lineWidth=4.5;c.beginPath();c.moveTo(-13,-64);c.lineTo(13,-64);c.quadraticCurveTo(13,-42,0,-42);c.quadraticCurveTo(-13,-42,-13,-64);c.closePath()}
  c.fill();c.stroke();c.restore()
}
export default(c,t,i)=>{
  const sd=E((t-.46)/.1)-E((t-.9)/.1),hap=sd<.5,hu=hap&&(i==1||i==5),b=hu?-10:0,wb=sd*(i%2?1:-1)
  c.save();c.translate(0,b+4*sd)
  c.save();c.translate(128,154);c.scale(.78,.78);c.translate(-128,-186)
  c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(198,36,210,100,202,164);c.lineTo(54,164);c.bezierCurveTo(46,100,58,36,128,36);c.fill();c.stroke()
  c.fillStyle=HAIR;for(const d of[-1,1])c.beginPath(),c.arc(128+d*48,38,23,0,T),c.fill(),c.stroke()
  c.strokeStyle=HD;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.arc(128+d*48,38,12,d>0?PI*.9:-PI*.1,d>0?PI*2.3:PI*1.3),c.stroke()
  c.strokeStyle='#111'
  c.fillStyle=DR;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(54,198,44,300);c.lineTo(212,300);c.quadraticCurveTo(202,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,194);c.lineTo(140,194);c.lineTo(140,166);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.moveTo(140,166);c.lineTo(140,192);c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(96,192);c.quadraticCurveTo(128,204,160,192);c.lineTo(166,212);c.lineTo(150,228);c.lineTo(128,250);c.lineTo(106,228);c.lineTo(90,212);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,196),c.lineTo(128+d*16,184),c.lineTo(128+d*20,196),c.closePath(),c.fill(),c.stroke()
  c.strokeStyle='#ffc9c9';c.lineWidth=5;c.beginPath();c.moveTo(102,212);c.lineTo(154,212);c.moveTo(112,228);c.lineTo(144,228);c.stroke();c.strokeStyle='#111'
  c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1,hap,hap?0:2+wb);eye(c,153,140,1,hap,hap?0:2-wb)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,7,0,0,T),c.fill()
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,165),c.lineTo(128+d*44+k+2,159),c.stroke()
  if(hap){c.lineWidth=5;c.fillStyle=MO;c.beginPath();c.moveTo(114,164);c.quadraticCurveTo(128,166,142,164);c.quadraticCurveTo(140,184,128,184);c.quadraticCurveTo(116,184,114,164);c.fill();c.stroke()
    c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,186,9,6,0,0,T);c.fill();c.restore()
    c.fillStyle=TR;c.lineWidth=4;c.beginPath();c.moveTo(142,174);c.quadraticCurveTo(150,186,145,190);c.quadraticCurveTo(138,186,142,174);c.fill();c.stroke()}
  else{c.lineWidth=5;c.beginPath();c.moveTo(118,177+wb);c.quadraticCurveTo(128,166,138,177-wb);c.stroke()
    c.fillStyle=TR;c.lineWidth=4;for(const d of[-1,1]){const y=156+14*((t*4+(d>0?.5:0))%1);c.beginPath();c.moveTo(128+d*36,y-9);c.quadraticCurveTo(128+d*36+7,y+3,128+d*36,y+5);c.quadraticCurveTo(128+d*36-7,y+3,128+d*36,y-9);c.fill();c.stroke()}}
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,158)
  c.bezierCurveTo(50,74,88,38,128,38);c.bezierCurveTo(168,38,206,74,188,158)
  c.quadraticCurveTo(186,120,178,104);c.quadraticCurveTo(168,106,160,96);c.quadraticCurveTo(154,108,142,110);c.quadraticCurveTo(138,98,128,92)
  c.quadraticCurveTo(122,106,110,110);c.quadraticCurveTo(102,100,96,96);c.quadraticCurveTo(88,106,78,104);c.quadraticCurveTo(70,126,68,158);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#ffd43b';c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*36,58,13,7,-d*.75,0,T),c.fill(),c.stroke()
  if(!hap){c.lineWidth=6;c.beginPath();c.moveTo(86,114);c.lineTo(112,106);c.moveTo(144,106);c.lineTo(170,114);c.stroke()}
  c.restore()
  // arms down to fists holding the cutlery up
  const ua=hap?0:.5*sd
  ds(c,22,13,DR,()=>{c.moveTo(82,190);c.quadraticCurveTo(62,196,52,206)})
  ds(c,22,13,DR,()=>{c.moveTo(174,190);c.quadraticCurveTo(194,196,204,206)})
  ute(c,48,204,-ua-.06,0);ute(c,208,204,ua+.06,1)
  c.fillStyle=SKIN;c.lineWidth=5;for(const x of[48,208])c.beginPath(),c.ellipse(x,206,13,12,0,0,T),c.fill(),c.stroke()
  c.restore()
  if(hap){c.fillStyle='#ffd43b';c.lineWidth=3.5;for(const[x,y,o]of[[30,70,0],[226,62,.5],[218,128,.25]]){sp(c,x,y,hu?13:8+4*o)}}
  // table and the empty plate
  c.lineWidth=6;c.fillStyle=TB;c.beginPath();c.rect(4,214,248,40);c.fill();c.stroke()
  c.strokeStyle=TBD;c.lineWidth=4;c.beginPath();c.moveTo(14,236);c.lineTo(242,236);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.ellipse(128,222,80,24,0,0,T);c.fill();c.stroke()
  c.strokeStyle=RM;c.lineWidth=5;c.beginPath();c.ellipse(128,221,58,15,0,0,T);c.stroke()
  c.strokeStyle='#111';c.lineWidth=3;c.beginPath();c.ellipse(128,221,52,12,0,0,T);c.stroke()
  c.strokeStyle='#e9ecef';c.lineWidth=4;c.beginPath();c.ellipse(128,221,34,7,0,PI*1.1,PI*1.4);c.stroke();c.strokeStyle='#111'
}
