// snow maiden with long ice-blue hair blowing frosty breath over her palm, the wisps curling away and turning into spinning snowflakes, sleeve drifting
const{sin,cos,PI,max,min,round}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#f8f0fc',HAIR='#a5d8ff',HD='#4dabf7',HL='#fff',EYE='#91a7ff',ED='#364fc7',KI='#fff',KP='#d0ebff',OBI='#9775fa',OD='#7048e8',ICE='#e7f5ff',BL='#d0bfff'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+3,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y+1,4,0,T);c.fill();c.beginPath();c.arc(x+7,y+9,2,0,T);c.fill()
  c.fillStyle=SKIN;c.beginPath();c.rect(x-17,y-21,34,15);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-5);c.quadraticCurveTo(x,y-11,x+16,y-5);c.moveTo(x+d*15,y-6);c.lineTo(x+d*21,y-11);c.stroke()
  c.lineWidth=2.5;for(const k of[-6,0,6])c.beginPath(),c.moveTo(x+k,y-6),c.lineTo(x+k*1.4,y-11),c.stroke()
}
const flake=(c,x,y,r,a)=>{for(const[lw,col]of[[8,'#111'],[3.5,'#fff']]){c.lineWidth=lw;c.strokeStyle=col;c.beginPath()
  for(let k=0;k<6;k++){const b=a+k*PI/3,ex=x+cos(b)*r,ey=y+sin(b)*r,mx=x+cos(b)*r*.55,my=y+sin(b)*r*.55
    c.moveTo(x,y);c.lineTo(ex,ey);for(const s of[-1,1])c.moveTo(mx,my),c.lineTo(mx+cos(b+s*.8)*r*.35,my+sin(b+s*.8)*r*.35)}
  c.stroke()}c.strokeStyle='#111'}
const path=p=>[146+92*p+6*sin(p*T*2),178-24*p-96*p*p]
export default(c,t)=>{
  const sw=.06*sin(T*t),puff=1+.12*sin(4*T*t)
  c.save();c.translate(116,256);c.scale(.9,.9);c.translate(-128,-256)
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,100,206,160);c.bezierCurveTo(214,200,206,236,214,256);c.lineTo(42,256);c.bezierCurveTo(50,236,42,200,50,160);c.bezierCurveTo(42,100,56,34,128,34);c.fill();c.stroke()
  c.fillStyle=KI;c.beginPath();c.moveTo(98,186);c.quadraticCurveTo(58,194,48,256);c.lineTo(208,256);c.quadraticCurveTo(198,194,158,186);c.closePath();c.fill();c.stroke()
  c.fillStyle=KP;for(const[x,y]of[[70,236],[96,220],[180,230]])c.beginPath(),c.arc(x,y,7,0,T),c.fill()
  c.fillStyle=KI;c.beginPath();c.moveTo(104,186);c.lineTo(128,222);c.lineTo(152,186);c.fill();c.stroke()
  c.fillStyle=OBI;c.beginPath();c.moveTo(68,240);c.quadraticCurveTo(128,230,190,240);c.lineTo(194,256);c.lineTo(64,256);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.rect(116,168,24,24);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.lineWidth=6;for(const[x,d]of[[103,-1],[153,1]]){c.beginPath();c.moveTo(x-16,138);c.quadraticCurveTo(x,150,x+16,138);c.moveTo(x+d*15,140);c.lineTo(x+d*21,136);c.stroke();c.lineWidth=3;for(const k of[-8,0,8])c.beginPath(),c.moveTo(x+k,145),c.lineTo(x+k*1.2,151),c.stroke();c.lineWidth=6}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,162,12,6,0,0,T),c.fill()
  c.lineWidth=4;c.fillStyle='#e64980';c.beginPath();c.ellipse(140,168,5*puff,6*puff,0,0,T);c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(62,170)
  c.bezierCurveTo(46,74,88,34,128,34);c.bezierCurveTo(168,34,210,74,194,170)
  c.quadraticCurveTo(188,128,182,106);c.quadraticCurveTo(176,108,170,116);c.quadraticCurveTo(164,100,156,94);c.quadraticCurveTo(150,104,142,110)
  c.quadraticCurveTo(136,98,128,92);c.quadraticCurveTo(120,98,114,110);c.quadraticCurveTo(106,104,100,94);c.quadraticCurveTo(92,100,86,116)
  c.quadraticCurveTo(80,108,74,106);c.quadraticCurveTo(68,128,62,170);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  for(const d of[-1,1]){c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(128+d*58,106);c.quadraticCurveTo(128+d*70,170,128+d*62,226);c.quadraticCurveTo(128+d*52,212,128+d*50,196);c.quadraticCurveTo(128+d*54,150,128+d*48,112);c.closePath();c.fill();c.stroke()}
  flake(c,82,62,13,PI/6)
  c.save();c.translate(182,192);c.rotate(sw)
  c.fillStyle=KI;c.lineWidth=6;c.beginPath();c.moveTo(-14,0);c.lineTo(8,-6);c.lineTo(42,52);c.quadraticCurveTo(36,76,30,80);c.quadraticCurveTo(10,70,-2,74);c.closePath();c.fill();c.stroke()
  c.fillStyle=KP;c.beginPath();c.arc(18,46,7,0,T);c.fill();c.strokeStyle=KP;c.lineWidth=4;c.beginPath();c.moveTo(6,68);c.quadraticCurveTo(20,72,30,72);c.stroke();c.strokeStyle='#111'
  c.restore()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.moveTo(168,196);c.quadraticCurveTo(170,180,188,178);c.quadraticCurveTo(204,176,212,180);c.quadraticCurveTo(212,188,202,190);c.quadraticCurveTo(186,196,178,200);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(196,180);c.quadraticCurveTo(204,182,206,186);c.stroke()
  c.restore()
  for(let k=0;k<5;k++){const p=(t*2+k/5)%1,[x,y]=path(p)
    if(p<.35){const r=4+9*p/.35;c.fillStyle=ICE;c.lineWidth=4;c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke();c.strokeStyle=KP;c.lineWidth=2.5;c.beginPath();c.arc(x,y,r*.55,PI,PI*1.7);c.stroke();c.strokeStyle='#111'}
    else{const r=round(14*min(1,(1-p)/.2)*min(1,(p-.35)/.12+.5));if(r>2)flake(c,x,y,r,p*5)}}
}
