// chibi jiangshi with dark violet hair and a qing hat hopping with stiff arms held out, long sleeves swinging, the paper talisman fluttering up on each fall
const{sin,cos,PI,max,round}=Math,T=2*PI
export const frames=12,delay=80
const SKIN='#e9f5e1',HAIR='#5f3dc4',HD='#3b2a8c',HL='#b197fc',EYE='#fcc419',ED='#e67700',ROBE='#3bc9db',RD='#1098ad',GO='#ffd43b',HAT='#7048e8',HTD='#4c2fb0',RED='#fa5252',PAP='#ffe066',SH='#845ef7',BL='#ffc9c9'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=3;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y+1,4,0,T);c.fill()
  c.fillStyle=SKIN;c.beginPath();c.rect(x-18,y-22,36,18);c.fill()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-4);c.quadraticCurveTo(x,y-8,x+16,y-4);c.moveTo(x+d*15,y-5);c.lineTo(x+d*21,y-9);c.stroke()
}
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
export default(c,t)=>{
  let sq=0,h=0,v=0
  if(t<.2)sq=.7*sin(PI*t/.2)
  else if(t<.8){const p=(t-.2)/.6;h=round(30*sin(PI*p));v=cos(PI*p)}
  else sq=.5*sin(PI*(t-.8)/.2)
  const fl=max(0,-v)
  c.fillStyle='#e9ecef';c.beginPath();c.ellipse(128,240,44-h*.4,7-h*.08,0,0,T);c.fill()
  c.save();c.translate(128,236-h);c.scale(.95*(1+sq*.1),.95*(1-sq*.12));c.translate(-128,-236)
  for(const x of[120,136]){line(c,[[x,202],[x,224]],8,SKIN);c.lineWidth=5;c.fillStyle=SH;c.beginPath();c.ellipse(x+(x<128?-3:3),228,11,7,0,0,T);c.fill();c.stroke()}
  c.fillStyle=ROBE;c.lineWidth=5;c.beginPath();c.moveTo(110,134);c.lineTo(146,134);c.lineTo(158,208);c.lineTo(98,208);c.closePath();c.fill();c.stroke()
  c.fillStyle=GO;c.beginPath();c.rect(100,196,56,12);c.fill();c.stroke()
  c.fillStyle=RD;c.beginPath();c.moveTo(128,136);c.lineTo(128,196);c.stroke()
  c.fillStyle=GO;c.lineWidth=4;c.beginPath();c.arc(128,170,9,0,T);c.fill();c.stroke();c.beginPath();c.moveTo(122,170);c.lineTo(134,170);c.moveTo(128,164);c.lineTo(128,176);c.stroke()
  const ay=146-6*v,dr=6+10*fl
  for(const d of[-1,1]){
    c.fillStyle=ROBE;c.lineWidth=5;c.beginPath();c.moveTo(128+d*14,136);c.lineTo(128+d*64,ay-8);c.lineTo(128+d*70,ay+12+dr);c.lineTo(128+d*50,ay+18+dr*.6);c.lineTo(128+d*16,156);c.closePath();c.fill();c.stroke()
    c.fillStyle=GO;c.beginPath();c.moveTo(128+d*64,ay-8);c.lineTo(128+d*72,ay-6);c.lineTo(128+d*78,ay+14+dr);c.lineTo(128+d*70,ay+12+dr);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.ellipse(128+d*84,ay+8+dr*.5,7,10,-d*.3,0,T);c.fill();c.stroke()}
  c.save();c.translate(128,92);c.scale(.6,.6);c.translate(-128,-128)
  c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,44);c.bezierCurveTo(200,44,212,104,202,162);c.quadraticCurveTo(190,176,176,168);c.lineTo(80,168);c.quadraticCurveTo(66,176,54,162);c.bezierCurveTo(44,104,56,44,128,44);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,101,142,-1);eye(c,155,142,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,13,7,0,0,T),c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(114,168);c.quadraticCurveTo(128,178,142,168);c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(132,171);c.lineTo(136,180);c.lineTo(140,170);c.fill();c.stroke()
  c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
  c.bezierCurveTo(56,90,90,64,128,64);c.bezierCurveTo(166,64,200,90,188,150)
  c.quadraticCurveTo(184,118,174,106);c.lineTo(160,114);c.lineTo(150,100);c.lineTo(138,112);c.lineTo(118,112);c.lineTo(106,100);c.lineTo(96,114);c.lineTo(82,106);c.quadraticCurveTo(72,118,68,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=7;c.beginPath();c.moveTo(80,92);c.quadraticCurveTo(86,80,96,76);c.moveTo(168,86);c.quadraticCurveTo(174,96,176,104);c.stroke();c.strokeStyle='#111'
  c.fillStyle=HAT;c.beginPath();c.moveTo(70,76);c.bezierCurveTo(70,20,186,20,186,76);c.closePath();c.fill();c.stroke()
  c.fillStyle=HTD;c.beginPath();c.ellipse(128,78,76,16,0,0,T);c.fill();c.stroke()
  c.fillStyle=RED;c.beginPath();c.arc(128,22,13,0,T);c.fill();c.stroke()
  c.save();c.translate(128,82);c.transform(1,0,-.25*fl,1,0,0);c.scale(1,1-.55*fl)
  c.fillStyle=PAP;c.lineWidth=6;c.beginPath();c.rect(-15,0,30,80);c.fill();c.stroke()
  c.strokeStyle=RED;c.lineWidth=4;c.beginPath();c.moveTo(-6,10);c.lineTo(6,10);c.moveTo(0,10);c.lineTo(0,30);c.moveTo(-6,22);c.quadraticCurveTo(8,26,-4,36);c.quadraticCurveTo(8,44,-6,52);c.moveTo(-6,64);c.lineTo(6,64);c.moveTo(0,58);c.lineTo(0,72);c.stroke()
  c.restore();c.restore();c.restore()
}
