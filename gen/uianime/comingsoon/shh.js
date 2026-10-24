// girl with long plum hair holding a finger to her lips and winking "it's a secret", a little shh bubble puffing beside her
const{sin,PI,max,min}=Math,T=2*PI
export const frames=16,delay=85
const SKIN='#ffe3d1',HAIR='#da77f2',HD='#ae3ec9',HL='#f8f0fc',EYE='#20c997',ED='#087f5b',CARD='#96f2d7',CD='#38d9a9',BL='#ffa8a8',STAR='#ffd43b'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+18);c.lineTo(x+8,y+18);c.stroke()
}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
export default(c,t,i)=>{
  const w=t>=.375&&t<.75,tilt=.08*min(1,max(0,min(i-4,13-i)/2)),pf=1+.1*sin(2*T*t)
  const head=f=>{c.save();c.translate(128,186);c.rotate(tilt);c.translate(-128,-186);f();c.restore()}
  head(()=>{c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,96,206,150);c.quadraticCurveTo(212,200,200,228);c.lineTo(56,228);c.quadraticCurveTo(44,200,50,150);c.bezierCurveTo(42,96,56,34,128,34);c.fill();c.stroke()})
  c.lineWidth=6;c.fillStyle=CARD;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(104,190);c.lineTo(128,250);c.lineTo(152,190);c.closePath();c.fill();c.lineWidth=5;c.stroke()
  c.fillStyle=CD;for(const y of[226,242])c.beginPath(),c.arc(162,y,4,0,T),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.quadraticCurveTo(128,204,140,192);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  head(()=>{
    c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103,140,-1)
    if(w){c.lineWidth=6;c.beginPath();c.arc(153,146,13,PI*1.12,PI*1.88);c.moveTo(166,140);c.lineTo(172,135);c.stroke()}else eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,7,0,0,T),c.fill()
    c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,165),c.lineTo(128+d*44+k+2,159),c.stroke()
    c.lineWidth=3.5;c.fillStyle='#e8590c';c.beginPath();c.ellipse(130,169,6,5,0,0,T);c.fill();c.stroke()
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,150)
    c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,150)
    c.quadraticCurveTo(184,118,178,104);c.quadraticCurveTo(170,106,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(72,124,70,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=STAR;c.lineWidth=4;spark(c,174,70,14)
  })
  if(w){const p=(t-.375)/.375;c.fillStyle=STAR;c.lineWidth=3.5;spark(c,178+40*p,124-50*p,12*sin(PI*p))}
  for(const[x,y,o]of[[30,60,0],[226,190,.5]]){const s=max(0,sin(T*(t+o)));if(s>.1)c.fillStyle='#fff',c.lineWidth=3.5,spark(c,x,y,13*s)}
  c.save();c.translate(212,40);c.scale(pf,pf)
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(0,0,34,22,0,0,T);c.fill();c.stroke()
  c.beginPath();c.moveTo(-22,14);c.lineTo(-34,32);c.lineTo(-8,20);c.fill();c.stroke()
  c.beginPath();c.ellipse(0,0,31.5,19.5,0,0,T);c.fill()
  c.lineWidth=4.5;c.strokeStyle=HD;c.beginPath()
  c.moveTo(-12,-6);c.quadraticCurveTo(-22,-8,-21,-2);c.quadraticCurveTo(-20,2,-14,3);c.quadraticCurveTo(-8,5,-11,10);c.quadraticCurveTo(-15,13,-22,9)
  for(const x of[-2,14]){c.moveTo(x,-11);c.lineTo(x,10);c.moveTo(x,2);c.quadraticCurveTo(x+8,-8,x+9,3);c.lineTo(x+9,10)}
  c.stroke();c.restore();c.strokeStyle='#111'
  ds(c,30,19,CARD,()=>{c.moveTo(70,252);c.lineTo(92,234);c.lineTo(114,214)})
  ds(c,14,7,SKIN,()=>{c.moveTo(127,198);c.lineTo(127,162)})
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(122,208,13,12,-.3,0,T);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();for(const y of[204,211])c.moveTo(114,y),c.lineTo(122,y-1);c.stroke()
}
