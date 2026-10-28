// periwinkle haired streamer with a side ponytail chatting excitedly into a desk mic while a red muted icon blinks, she notices, freezes in panic with gloom lines and a sweatdrop, then slaps the mic and the icon pops away
const{sin,cos,PI}=Math,T=2*PI
export const frames=18,delay=90
const SKIN='#ffe3d1',HAIR='#91a7ff',HD='#5c7cfa',HL='#edf2ff',EYE='#f06595',ED='#c2255c',HO='#96f2d7',HOD='#20c997',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',MIC='#495057',GR='#ced4da',ST='#adb5bd',RED='#ff6b6b',WOOD='#e8b07a',WD='#c47f45',SW='#a5d8ff',SC='#ffd43b',GL='#748ffc'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,gx,gy,sk)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip()
  if(sk){c.fillStyle=EYE;c.lineWidth=2.5;c.beginPath();c.ellipse(x+gx,y+gy,6,7,0,0,T);c.fill();c.stroke();c.fillStyle='#111';c.beginPath();c.arc(x+gx,y+gy,2.5,0,T);c.fill()}
  else{c.beginPath();c.ellipse(x+gx,y+gy+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
    c.fillStyle=ED;c.beginPath();c.ellipse(x+gx,y+gy-8,13,10,0,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(x+gx,y+gy+3,5.5,7.5,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x+gx-4,y+gy-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+gx+5,y+gy+8,2,0,T);c.fill()}
  c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t,i)=>{
  const tk=i<8,nt=i==8||i==9,pn=i>=10&&i<15,sl=i==15,ok=i>15,on=tk?(i>>1)%2==1:i<15,b=tk||ok?3*sin(T*t*4.5):0,jx=pn?(i%2?2:-2):0
  if(on||sl){const s=sl?.6:nt||pn?1.1:1
    c.save();c.translate(46,46);c.scale(s,s)
    c.fillStyle=RED;c.lineWidth=6;c.beginPath();c.arc(0,0,34,0,T);c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.roundRect(-8,-24,16,28,8);c.fill()
    c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-14,-6);c.arc(0,-6,14,PI,0,true);c.moveTo(0,8);c.lineTo(0,17);c.moveTo(-9,18);c.lineTo(9,18);c.stroke()
    for(const[w,k]of[[13,RED],[5,'#fff']])c.lineWidth=w,c.strokeStyle=k,c.beginPath(),c.moveTo(-22,-22),c.lineTo(22,22),c.stroke();c.strokeStyle='#111';c.restore()}
  if(sl)ds(c,9,4,SC,()=>{for(let k=0;k<8;k++){const a=k*PI/4;c.moveTo(46+30*cos(a),46+30*sin(a));c.lineTo(46+42*cos(a),46+42*sin(a))}})
  c.save();c.translate(150+jx,180+b);c.scale(.8,.8);c.translate(-128,-186)
  const pw=.08*sin(T*t*2)
  c.save();c.translate(186,72);c.rotate(pw)
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(-6,-10);c.bezierCurveTo(50,-26,72,40,58,96);c.quadraticCurveTo(52,124,34,134);c.quadraticCurveTo(46,96,30,60);c.quadraticCurveTo(22,32,0,12);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.moveTo(18,0);c.bezierCurveTo(44,10,52,56,44,100);c.stroke();c.strokeStyle='#111';c.restore()
  c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,204,160);c.quadraticCurveTo(204,188,186,196);c.lineTo(70,196);c.quadraticCurveTo(52,188,52,160);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
  c.fillStyle=HO;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=HOD;c.beginPath();c.moveTo(86,198);c.quadraticCurveTo(128,176,170,198);c.lineTo(164,214);c.quadraticCurveTo(128,198,92,214);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*14,206),c.lineTo(128+d*16,246),c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*16,250,5,0,T),c.fill(),c.stroke()
  c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.quadraticCurveTo(128,202,142,192);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,190);c.moveTo(142,168);c.lineTo(142,190);c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(pn){c.save();c.clip();c.strokeStyle=GL;c.lineWidth=3.5;for(let x=90;x<170;x+=9)c.beginPath(),c.moveTo(x,100),c.lineTo(x,x%2?122:130),c.stroke();c.restore();c.strokeStyle='#111'}
  if(sl){c.lineWidth=8;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*38,128),c.lineTo(128+d*18,140),c.lineTo(128+d*38,152),c.stroke()}
  else if(ok){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,148,15,1.15*PI,1.85*PI),c.stroke()}
  else if(tk)eye(c,103,140,-1,-3,-1),eye(c,153,140,1,-3,-1)
  else eye(c,103,140,-1,nt?-5:0,nt?-6:2,1),eye(c,153,140,1,nt?-5:0,nt?-6:2,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
  c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
  c.lineWidth=6;c.fillStyle=MO
  if(tk&&i%2==0||ok){c.beginPath();c.moveTo(112,164);c.quadraticCurveTo(128,168,144,164);c.quadraticCurveTo(142,188,128,188);c.quadraticCurveTo(114,188,112,164);c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,190,9,7,0,0,T);c.fill();c.restore()}
  else if(tk){c.beginPath();c.ellipse(128,171,9,6,0,0,T);c.fill();c.stroke()}
  else if(nt){c.beginPath();c.ellipse(128,172,6,8,0,0,T);c.fill();c.stroke()}
  else if(sl){c.fillStyle='#fff';c.beginPath();c.roundRect(110,162,36,16,6);c.fill();c.stroke();c.beginPath();c.moveTo(112,170);c.lineTo(144,170);c.stroke()}
  else{c.beginPath();c.moveTo(108,172);for(let k=0;k<4;k++)c.quadraticCurveTo(113+k*10,k%2?178:166,118+k*10,172);c.stroke()}
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,156)
  c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,188,156)
  c.quadraticCurveTo(186,120,180,104);c.quadraticCurveTo(172,104,166,110);c.quadraticCurveTo(162,96,154,90);c.quadraticCurveTo(148,102,138,106)
  c.quadraticCurveTo(134,92,126,84);c.quadraticCurveTo(118,100,104,106);c.quadraticCurveTo(100,94,92,90);c.quadraticCurveTo(86,104,80,108)
  c.quadraticCurveTo(70,126,68,156);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
  c.strokeStyle='#111'
  if(pn){c.lineWidth=5;c.beginPath();c.moveTo(88,116);c.lineTo(112,106);c.moveTo(144,106);c.lineTo(168,116);c.stroke()}
  c.fillStyle=SC;c.lineWidth=7;c.beginPath();c.arc(184,72,13,0,T);c.fill();c.stroke()
  if(pn){c.fillStyle=SW;c.lineWidth=6;c.beginPath();c.moveTo(62,96);c.quadraticCurveTo(76,118,62,126);c.quadraticCurveTo(48,118,62,96);c.fill();c.stroke()}
  c.restore()
  if(nt)ds(c,13,6,RED,()=>{c.moveTo(224,16);c.lineTo(222,40);c.moveTo(221,52);c.lineTo(221,53)})
  if(tk&&(i>>1)%2==0){c.fillStyle=SC;c.lineWidth=3.5;for(const[x,y,r]of[[230,40,11],[210,18,7]]){c.beginPath();c.moveTo(x,y-r);for(const[a,q]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+q)*r*.15,y+(q-a)*r*.15,x+a*r,y+q*r);c.fill();c.stroke()}}
  c.lineWidth=6;c.fillStyle=WOOD;c.beginPath();c.roundRect(-12,228,280,50,10);c.fill();c.stroke()
  c.strokeStyle=WD;c.lineWidth=4;c.beginPath();c.moveTo(150,242);c.lineTo(230,242);c.stroke();c.strokeStyle='#111'
  ds(c,14,7,ST,()=>{c.moveTo(60,160);c.lineTo(60,226)})
  c.fillStyle=MIC;c.lineWidth=6;c.beginPath();c.ellipse(60,230,36,9,0,0,T);c.fill();c.stroke()
  c.fillStyle=on||sl?RED:'#69db7c';c.lineWidth=3;c.beginPath();c.arc(82,229,4,0,T);c.fill();c.stroke()
  c.save();c.translate(66,126);c.rotate(.28)
  c.fillStyle=MIC;c.lineWidth=6;c.beginPath();c.roundRect(-21,-34,42,70,21);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=GR;c.fillRect(-22,-36,44,34);c.strokeStyle='#868e96';c.lineWidth=2.5;c.beginPath();for(let k=-30;k<0;k+=7)c.moveTo(-22,k),c.lineTo(22,k);for(let k=-21;k<22;k+=8)c.moveTo(k,-36),c.lineTo(k,-2);c.stroke();c.restore()
  c.lineWidth=5;c.fillStyle=ST;c.beginPath();c.rect(-22,-4,44,9);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(-13,12);c.lineTo(-13,24);c.stroke();c.strokeStyle='#111'
  c.restore()
  const L=pn?[110,166]:sl?[62,220]:[64,192],R=pn?[190,166]:tk||ok?[230,166+b]:[188,224]
  for(const[[x,y],sx,d]of[[L,106,-1],[R,194,1]]){ds(c,28,17,HO,()=>{c.moveTo(sx,206+b);c.quadraticCurveTo(sx+d*(pn?28:16),230,x,y+8)})
    c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(x,y,14,15,0,0,T);c.fill();c.stroke()}
}
