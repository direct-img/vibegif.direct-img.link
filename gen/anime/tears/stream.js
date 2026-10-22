// caramel-braided girl bawling waterfall tears, two streams arcing out of her shut eyes and splashing into puddles
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=12,delay=70
const SKIN='#ffe3d1',HAIR='#f4b860',HD='#d4892a',HL='#fff0d4',TOP='#ffc078',TIE='#4dabf7',BL='#ffa8a8',WA='#74c0fc',WD='#339af0',MO='#c92a2a',TG='#ff8fab'
export default(c,t)=>{
  const w=sin(3*T*t),a=t*T
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,206,96,198,150);c.lineTo(58,150);c.bezierCurveTo(50,96,60,34,128,34);c.fill();c.stroke()
  c.fillStyle=WA;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*92,238,32,11,0,0,T),c.fill(),c.stroke()
  c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(66,198,60,256);c.lineTo(196,256);c.quadraticCurveTo(190,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.quadraticCurveTo(128+d*16,212,128+d*30,192),c.lineTo(128+d*12,188),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.lineTo(128,206);c.lineTo(140,192);c.lineTo(140,166);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,166);c.lineTo(116,190);c.moveTo(140,166);c.lineTo(140,190);c.stroke()
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  c.lineWidth=6;for(const d of[-1,1]){const x=128+d*25;c.beginPath();c.moveTo(x-d*14,132);c.lineTo(x+d*8,142);c.lineTo(x-d*14,150);c.stroke()}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*40,163,11,5.5,0,0,T),c.fill()
  c.save();c.translate(128,170);c.scale(1.25,1.25);c.translate(-128,-170);c.fillStyle=MO;c.lineWidth=3.5;c.beginPath();c.moveTo(112,170+w);c.quadraticCurveTo(116,164-w,120,168+w);c.quadraticCurveTo(124,164+w,128,168-w);c.quadraticCurveTo(132,164+w,136,168+w);c.quadraticCurveTo(140,164-w,144,170+w);c.quadraticCurveTo(140,184,128,184);c.quadraticCurveTo(116,184,112,170+w);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,184,9,6,0,0,T);c.fill();c.restore();c.restore()
  for(const d of[-1,1]){
    c.save();c.translate(128+d*64,146)
    for(let k=0;k<5;k++){const y=14+k*17,x=d*(2-k*1.5);c.fillStyle=k%2?HAIR:HD;c.lineWidth=5;c.beginPath();c.ellipse(x,y,12,11,d*.15,0,T);c.fill();c.stroke()}
    c.fillStyle=TIE;c.beginPath();c.ellipse(d*-5,100,9,6,0,0,T);c.fill();c.stroke()
    c.fillStyle=HAIR;c.beginPath();c.moveTo(d*-5,104);c.quadraticCurveTo(d*-17,120,d*-11,128);c.quadraticCurveTo(d*-3,122,d*3,128);c.quadraticCurveTo(d*5,116,d*-5,104);c.fill();c.stroke()
    c.restore()
  }
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,146)
  c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,146)
  c.quadraticCurveTo(186,116,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,124,90);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(106,96,96,94);c.quadraticCurveTo(90,104,86,112)
  c.quadraticCurveTo(80,104,78,102);c.quadraticCurveTo(70,120,70,146);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,b]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*b),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.moveTo(88,124);c.lineTo(112,116);c.moveTo(168,124);c.lineTo(144,116);c.stroke()
  for(const d of[-1,1]){
    const arc=()=>{c.beginPath();c.moveTo(128+d*40,148);c.bezierCurveTo(128+d*86,104,128+d*110,150,128+d*92,236)}
    for(const[lw,s]of[[22,'#111'],[14,WA]])c.lineWidth=lw,c.strokeStyle=s,arc(),c.stroke()
    c.strokeStyle='#fff';c.lineWidth=4;c.setLineDash([10,18]);c.lineDashOffset=-t*28*3;arc();c.stroke();c.setLineDash([])
    c.strokeStyle='#111';c.fillStyle=WA;c.lineWidth=3.5
    for(const o of[0,.33,.66]){const p=(t*3+o)%1,k=o*3-1,x=128+d*(92+(18+6*k)*p*(o>.5?-1:1)),y=232-40*p+46*p*p;c.beginPath();c.arc(x,y,5.5*(1-p*.5),0,T);c.fill();c.stroke()}
  }
}
