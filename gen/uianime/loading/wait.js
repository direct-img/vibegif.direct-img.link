// impatient office girl with a brown bun tapping her foot and glaring at her ticking wristwatch, then letting out a long sigh
const{sin,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#a9744f',HD='#7f5539',HL='#e6c9a8',EYE='#e8590c',ED='#a33c08',BZ='#748ffc',BD='#4c6ef5',SK='#364fc7',SHOE='#495057',BAND='#ff8787',BL='#ffa8a8',Z=.66
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+5,y+5,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=3;c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+6,y+7,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+2,y+3,4,0,T);c.fill()
  c.fillStyle=SKIN;c.fillRect(x-16,y-20,32,19);c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-17,y-1);c.lineTo(x+16,y-1);c.lineTo(x+d*16+d*4,y-6);c.stroke()
}
export default(c,t,i)=>{
  const sg=ease((t-.56)/.08)-ease((t-.9)/.08),tap=i<8?i%2:0,dr=3*sg
  for(const[w,s]of[[15,'#111'],[8,SKIN]])for(const x of[118,138])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x,206),c.lineTo(x,236),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SHOE;c.beginPath();c.ellipse(114,240,12,6.5,0,0,T);c.fill();c.stroke()
  c.save();c.translate(132,244);c.rotate(-.6*tap);c.beginPath();c.ellipse(10,-4,12,6.5,0,0,T);c.fill();c.stroke();c.restore()
  if(tap)for(const[w,s]of[[7,'#111'],[2.5,'#fff']]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();c.moveTo(160,226);c.lineTo(170,220);c.moveTo(164,238);c.lineTo(176,238);c.stroke()}
  c.strokeStyle='#111'
  c.save();c.translate(0,dr)
  c.lineWidth=6;c.fillStyle=SK;c.beginPath();c.moveTo(102,190);c.lineTo(154,190);c.lineTo(162,214);c.quadraticCurveTo(128,220,94,214);c.closePath();c.fill();c.stroke()
  for(const[w,s]of[[22,'#111'],[13,BZ]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(102,148),c.lineTo(80,174),c.lineTo(98,192),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=BZ;c.beginPath();c.moveTo(104,136);c.quadraticCurveTo(92,140,94,160);c.lineTo(96,198);c.lineTo(160,198);c.lineTo(162,160);c.quadraticCurveTo(164,140,152,136);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(112,136);c.lineTo(128,166);c.lineTo(144,136);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle=BD;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*16,136),c.lineTo(128+d*8,158),c.lineTo(128+d*2,170),c.lineTo(128+d*24,150),c.closePath(),c.fill(),c.stroke()
  c.fillStyle='#ffd43b';c.lineWidth=4;c.beginPath();c.arc(128,182,4,0,T);c.fill();c.stroke()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(98,192,9,8,0,0,T);c.fill();c.stroke()
  c.restore()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.moveTo(121,126);c.lineTo(121,138);c.lineTo(128,146);c.lineTo(135,138);c.lineTo(135,126);c.fill();c.beginPath();c.moveTo(121,126);c.lineTo(121,137);c.moveTo(135,126);c.lineTo(135,137);c.stroke()
  c.save();c.translate(128,32+dr*1.5);c.rotate(-.06*sg);c.scale(Z,Z);c.translate(-128,-36)
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,206,96,198,150);c.lineTo(58,150);c.bezierCurveTo(50,96,60,36,128,36);c.fill();c.stroke()
  c.fillStyle=HAIR;c.beginPath();c.arc(128,26,20,0,T);c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;c.beginPath();c.arc(128,26,12,PI*1.15,PI*1.5);c.stroke();c.strokeStyle='#111'
  c.fillStyle=BAND;c.beginPath();c.roundRect(104,32,48,12,6);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(sg>.5){c.lineWidth=7;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,140),c.quadraticCurveTo(x,150,x+15,140),c.stroke()}
  else{eye(c,103,140,-1);eye(c,153,140,1)}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,12,6,0,0,T),c.fill()
  c.lineWidth=5;if(sg>.5){c.fillStyle='#c92a2a';c.beginPath();c.ellipse(128,172,7,6,0,0,T);c.fill();c.stroke()}else{c.beginPath();c.moveTo(118,172);c.quadraticCurveTo(128,166,138,172);c.stroke()}
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
  c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
  c.quadraticCurveTo(184,118,176,100);c.quadraticCurveTo(166,108,160,116);c.quadraticCurveTo(154,94,140,86);c.quadraticCurveTo(136,102,126,110)
  c.quadraticCurveTo(116,92,100,88);c.quadraticCurveTo(96,104,88,112);c.quadraticCurveTo(82,104,80,102)
  c.quadraticCurveTo(70,122,68,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;if(sg<.5)c.beginPath(),c.moveTo(88,112),c.lineTo(114,120),c.moveTo(142,120),c.lineTo(168,112),c.stroke()
  if(sg<.5){c.strokeStyle='#ff6b6b';c.lineWidth=5;c.save();c.translate(178,72);for(const r of[0,1,2,3]){c.rotate(PI/2);c.beginPath();c.moveTo(4,4);c.quadraticCurveTo(5,12,14,12);c.stroke()}c.restore();c.strokeStyle='#111'}
  c.restore()
  if(sg>.05){const p=min(1,(t-.56)/.3),x=94-46*p,y=150-40*p,r=7+11*p;c.fillStyle='#fff';c.lineWidth=5;c.beginPath();for(const[dx,dy,k]of[[-r*.7,0,.8],[0,-r*.5,1],[r*.7,0,.8]])c.moveTo(x+dx+k*r,y+dy),c.arc(x+dx,y+dy,k*r,0,T);c.stroke();c.fill()
    c.lineWidth=4;c.beginPath();c.moveTo(x+r*1.4,y+r*.6);c.quadraticCurveTo(x+r*1.9,y+r*.9,108,152);c.stroke()}
  const wx=182,wy=150
  for(const[w,s]of[[22,'#111'],[13,BZ]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(154,150+dr),c.lineTo(190,180+dr),c.lineTo(wx,wy+14),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(wx-1,wy-20,10,11,0,0,T);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.rect(wx-8,wy-12,16,22);c.fill();c.beginPath();c.moveTo(wx-8,wy-12);c.lineTo(wx-8,wy+10);c.moveTo(wx+8,wy-12);c.lineTo(wx+8,wy+10);c.stroke()
  c.fillStyle=BAND;c.beginPath();c.roundRect(wx-10,wy-14,20,28,4);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(wx,wy,15,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(wx,wy);c.lineTo(wx-6,wy-4);c.stroke()
  const h=i*T/16;c.strokeStyle='#f03e3e';c.lineWidth=3;c.beginPath();c.moveTo(wx,wy);c.lineTo(wx+11*sin(h),wy-11*Math.cos(h));c.stroke();c.strokeStyle='#111'
  c.fillStyle='#111';c.beginPath();c.arc(wx,wy,2.5,0,T);c.fill()
}
