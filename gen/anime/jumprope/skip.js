// girl with lime pigtails skipping rope, the rope sweeping over her head and under her hopping feet, pigtails bouncing
const{sin,cos,PI,max,min,abs}=Math,T=2*PI
export const frames=16,delay=70
const SKIN='#ffe3d1',HAIR='#94d82d',HD='#66a80f',HL='#e9fac8',EYE='#f06595',ED='#a61e4d',TEE='#ff922b',TD='#e8590c',JEAN='#4dabf7',JD='#1c7ed6',ROPE='#38d9a9',GRIP='#9775fa',TIE='#f783ac',BL='#ffa8a8'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
export default(c,t,i)=>{
  const f=T*2*t,h=26*max(0,-cos(f)),cr=7*max(0,(cos(f)-.55)/.45),oy=cr-h,sw=sin(f)
  const hy=162+oy,hl=[84-4*sw,hy-5*cos(f)],hr=[172+4*sw,hy-5*cos(f)],by=hy-(cos(f)>0?134:100)*cos(f)
  const rope=()=>{const q=[2*128-(hl[0]+hr[0])/2,2*by-(hl[1]+hr[1])/2];for(const[lw,s]of[[10,'#111'],[5,ROPE]])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.moveTo(...hl),c.quadraticCurveTo(...q,...hr),c.stroke();c.strokeStyle='#111'}
  c.translate(128,134);c.scale(1.06,1.06);c.translate(-128,-134)
  c.fillStyle='#dee2e6';c.beginPath();c.ellipse(128,232,44*(1-h/70),6*(1-h/70),0,0,T);c.fill()
  if(sw<=0)rope()
  const head=g=>{c.save();c.translate(128,88+oy);c.scale(.56,.56);c.translate(-128,-120);g();c.restore()}
  head(()=>{
    for(const d of[-1,1]){
      c.save();c.translate(128+d*60,78);c.rotate(-d*(.3-.32*sin(f-.6)))
      c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(0,-6);c.bezierCurveTo(d*44,0,d*50,70,d*22,118);c.quadraticCurveTo(d*14,128,d*6,116);c.bezierCurveTo(d*18,70,d*6,30,0,-6);c.closePath();c.fill();c.stroke()
      c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.moveTo(d*12,14);c.bezierCurveTo(d*28,40,d*30,74,d*20,100);c.stroke();c.strokeStyle='#111'
      c.restore()
    }
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(194,36,204,96,196,150);c.lineTo(60,150);c.bezierCurveTo(52,96,62,36,128,36);c.fill();c.stroke()
  })
  const lg=[[118,-1],[138,1]],fy=224-h
  for(const[x,d]of lg){const air=h>4?min(1,h/14):0,kx=x+d*(3+cr*.8)-d*air*2,ky=(186+oy+fy)/2-air*4;line(c,[[x,184+oy],[kx,ky],[x+d*2-d*air*6*0,fy-6]],8,SKIN)}
  for(const[x,d]of lg){c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(x+d*5,fy-3,11,7,0,0,T);c.fill();c.stroke();c.strokeStyle=TD;c.lineWidth=3;c.beginPath();c.moveTo(x+d*5-7,fy-5);c.lineTo(x+d*5+7,fy-5);c.stroke();c.strokeStyle='#111'}
  c.fillStyle=JEAN;c.lineWidth=5;c.beginPath();c.moveTo(106,166+oy);c.lineTo(150,166+oy);c.lineTo(154,190+oy);c.lineTo(131,190+oy);c.lineTo(128,182+oy);c.lineTo(125,190+oy);c.lineTo(102,190+oy);c.closePath();c.fill();c.stroke()
  c.strokeStyle=JD;c.lineWidth=3;c.beginPath();c.moveTo(128,168+oy);c.lineTo(128,180+oy);c.stroke();c.strokeStyle='#111'
  for(const[s,hd,d]of[[[110,136+oy],hl,-1],[[146,136+oy],hr,1]]){const e=[s[0]+d*12,(s[1]+hd[1])/2+4];line(c,[s,e,hd],8,SKIN)}
  c.fillStyle=SKIN;c.beginPath();c.rect(122,122+oy,12,10);c.fill()
  c.fillStyle=TEE;c.lineWidth=5;c.beginPath();c.moveTo(114,128+oy);c.lineTo(142,128+oy);c.lineTo(158,138+oy);c.lineTo(152,150+oy);c.lineTo(146,146+oy);c.lineTo(150,172+oy);c.lineTo(106,172+oy);c.lineTo(110,146+oy);c.lineTo(104,150+oy);c.lineTo(98,138+oy);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(118,129+oy);c.quadraticCurveTo(128,138+oy,138,129+oy);c.stroke()
  c.fillStyle='#ffd43b';c.lineWidth=3.5;c.beginPath();for(let k=0;k<10;k++){const r=k%2?3.5:8,a=k*PI/5-PI/2;c.lineTo(128+r*cos(a),154+oy+r*sin(a))}c.closePath();c.fill();c.stroke()
  for(const hd of[hl,hr]){c.save();c.translate(...hd);c.rotate(hd==hl?-.3:.3);c.fillStyle=GRIP;c.lineWidth=4;c.beginPath();c.roundRect(-5,-12,10,22,5);c.fill();c.stroke();c.restore();c.fillStyle=SKIN;c.lineWidth=4;c.beginPath();c.arc(hd[0],hd[1],6.5,0,T);c.fill();c.stroke()}
  head(()=>{
    c.lineWidth=9;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(i==11){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,150,x+15,142),c.stroke()}else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,162,12,6,0,0,T),c.fill()
    c.fillStyle='#c92a2a';c.lineWidth=6;c.beginPath();c.moveTo(116,164);c.quadraticCurveTo(128,186,140,164);c.closePath();c.fill();c.stroke()
    c.fillStyle=HAIR;c.lineWidth=9;c.beginPath();c.moveTo(70,140);c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,140)
    c.quadraticCurveTo(184,116,176,102);c.quadraticCurveTo(168,100,162,110);c.quadraticCurveTo(156,96,146,92);c.quadraticCurveTo(140,104,132,110)
    c.quadraticCurveTo(126,96,118,92);c.quadraticCurveTo(112,104,104,110);c.quadraticCurveTo(98,96,90,98);c.quadraticCurveTo(84,104,80,110);c.quadraticCurveTo(72,118,70,140);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=8;for(const[a,e]of[[1.26,1.38],[1.46,1.54],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
    c.fillStyle=TIE;c.lineWidth=7;for(const d of[-1,1])c.beginPath(),c.arc(128+d*60,76,11,0,T),c.fill(),c.stroke()
  })
  if(sw>0)rope()
}
