// pink-bob girl saying thanks with a heart made of her hands, a red heart beating inside it while little hearts float up
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=12,delay=90
const SKIN='#ffe3d1',HAIR='#faa2c1',HD='#e64980',HL='#fff0f6',EYE='#9775fa',ED='#5f3dc4',SW='#a5d8ff',BL='#ff8fab',MO='#c92a2a',TG='#ff8fab',HR='#fa5252',HT=['#ff6b6b','#f06595','#ffa8a8'],CL='#ffd43b'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const hp=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore()}
export default(c,t,i)=>{
  const pu=1+.12*max(0,sin(2*T*t))**2,bk=i==9,head=f=>f()
  head(()=>{c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,214,100,206,158);c.quadraticCurveTo(204,184,182,182);c.lineTo(74,182);c.quadraticCurveTo(52,184,50,158);c.bezierCurveTo(42,100,58,34,128,34);c.fill();c.stroke()})
  c.lineWidth=6;c.fillStyle=SW;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,252);c.lineTo(202,252);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128,204),c.quadraticCurveTo(128+d*16,212,128+d*30,194),c.lineTo(128+d*12,188),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.lineTo(128,204);c.lineTo(140,192);c.lineTo(140,166);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,190);c.moveTo(140,166);c.lineTo(140,190);c.stroke()
  head(()=>{
    c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(bk){c.lineWidth=5;for(const x of[103,153])c.beginPath(),c.arc(x,148,13,PI*1.15,PI*1.85),c.stroke()}else eye(c,103,140,-1),eye(c,153,140,1)
    c.lineWidth=2.5;c.beginPath();c.moveTo(128,156);c.lineTo(127,159);c.stroke()
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,13,6.5,0,0,T),c.fill()
    c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,164),c.lineTo(128+d*42+k+2,158),c.stroke()
    c.lineWidth=3.5;c.fillStyle=MO;c.beginPath();c.moveTo(118,165);c.quadraticCurveTo(128,184,138,165);c.closePath();c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,179,7,5,0,0,T);c.fill();c.restore()
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(62,172)
    c.bezierCurveTo(46,74,88,36,128,36);c.bezierCurveTo(168,36,210,74,194,172);c.quadraticCurveTo(186,150,184,120)
    c.lineTo(178,106);c.lineTo(168,114);c.lineTo(160,100);c.lineTo(148,112);c.lineTo(138,98);c.lineTo(128,112);c.lineTo(118,98);c.lineTo(108,112);c.lineTo(96,100);c.lineTo(88,114);c.lineTo(78,106)
    c.lineTo(72,120);c.quadraticCurveTo(70,150,62,172);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=CL;c.lineWidth=4;for(const[x,y,r]of[[80,80,-.9],[90,66,-.7]])c.save(),c.translate(x,y),c.rotate(r),c.beginPath(),c.roundRect(-11,-4,22,8,4),c.fill(),c.stroke(),c.restore()
  })
  for(const d of[-1,1])for(const[w,s]of[[30,'#111'],[19,SW]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(128+d*86,262),c.lineTo(128+d*50,226),c.stroke()
  c.save();c.translate(128,216);c.scale(pu,pu);c.translate(-128,-216)
  c.fillStyle=HR;c.strokeStyle='#111';c.lineWidth=5;hp(c,128,214,2.4);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(113,202,5,3.5,-.6,0,T);c.fill()
  for(const[w,s]of[[28,'#111'],[17,SKIN]])c.lineWidth=w,c.strokeStyle=s,hp(c,128,216,4),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN
  for(const d of[-1,1]){c.beginPath();c.ellipse(128+d*38,220,13,17,-d*.3,0,T);c.fill();c.stroke()}
  c.lineWidth=3;c.beginPath()
  for(const d of[-1,1])c.moveTo(128+d*30,228),c.quadraticCurveTo(128+d*22,226,128+d*16,234),c.moveTo(128+d*44,206),c.lineTo(128+d*36,201)
  c.stroke()
  c.restore()
  c.strokeStyle='#111';c.lineWidth=4
  for(const[x0,o,k]of[[28,0,0],[228,.25,1],[36,.5,2],[220,.75,0]]){const p=(t+o)%1,s=1.4*sin(PI*p);if(s>.15)c.fillStyle=HT[k],hp(c,x0+7*sin(T*(p*2+o)),196-p*176,s),c.fill(),c.stroke()}
}
