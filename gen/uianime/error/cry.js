// orange-haired girl bawling over her laptop as a big red X error flashes on the screen, tears gushing into puddles
const{sin,cos,PI,max,abs}=Math,T=2*PI
export const frames=8,delay=90
const SKIN='#ffe3d1',HAIR='#ffa94d',HD='#e8590c',HL='#fff4e6',HO='#b197fc',HOD='#7950f2',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',WA='#74c0fc',LT='#dee2e6',LD='#adb5bd',RD='#fa5252',CL='#ff6b6b',Z=.8
export default(c,t,i)=>{
  const b=i%2*2,w=sin(2*T*t),L=v=>c.lineWidth=v/Z,fl=i%4<2
  const head=f=>{c.save();c.translate(128,96+b);c.scale(Z,Z);c.translate(-128,-128);f();c.restore()}
  head(()=>{
    L(6);c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,204,160);c.quadraticCurveTo(196,180,176,176);c.lineTo(80,176);c.quadraticCurveTo(60,180,52,160);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=HO;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(58,196,48,262);c.lineTo(208,262);c.quadraticCurveTo(198,196,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=HOD;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*8,196),c.quadraticCurveTo(128+d*34,190,128+d*46,206),c.quadraticCurveTo(128+d*30,218,128+d*8,210),c.closePath(),c.fill(),c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,194);c.lineTo(128,204);c.lineTo(140,194);c.lineTo(140,166);c.fill();L(5);c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.moveTo(140,166);c.lineTo(140,192);c.stroke()
    L(6);c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    L(6.5);for(const d of[-1,1]){const x=128+d*25;c.beginPath();c.moveTo(x-d*14,128);c.lineTo(x+d*9,140);c.lineTo(x-d*14,152);c.stroke()}
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,11,5.5,0,0,T),c.fill()
    c.save();c.translate(128,170);c.scale(1.2,1.2);c.translate(-128,-170);c.fillStyle=MO;L(3.5);c.beginPath();c.moveTo(114,170+w);c.quadraticCurveTo(118,164-w,121,168+w);c.quadraticCurveTo(124.5,164+w,128,168-w);c.quadraticCurveTo(131.5,164+w,135,168+w);c.quadraticCurveTo(138,164-w,142,170+w);c.quadraticCurveTo(140,184,128,184);c.quadraticCurveTo(116,184,114,170+w);c.fill();c.stroke()
    c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,184,8,5,0,0,T);c.fill();c.restore();c.restore()
    L(6);c.fillStyle=HAIR;c.beginPath();c.moveTo(66,160)
    c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,190,160);c.quadraticCurveTo(182,130,180,108)
    c.quadraticCurveTo(172,104,166,112);c.quadraticCurveTo(160,98,150,94);c.quadraticCurveTo(144,104,136,108)
    c.quadraticCurveTo(130,96,120,92);c.quadraticCurveTo(114,104,104,108);c.quadraticCurveTo(98,98,88,100);c.quadraticCurveTo(84,108,78,112)
    c.quadraticCurveTo(74,134,66,160);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;L(5);for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';L(5);c.beginPath();c.moveTo(88,118);c.lineTo(114,110);c.moveTo(168,118);c.lineTo(142,110);c.stroke()
    c.fillStyle=CL;L(4);c.save();c.translate(170,72);c.rotate(.6);c.beginPath();c.roundRect(-13,-5,26,10,5);c.fill();c.stroke();c.restore()
  })
  c.fillStyle=WA;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*96,240,26,9,0,0,T),c.fill(),c.stroke()
    c.lineWidth=6;c.fillStyle=LD;c.beginPath();c.moveTo(48,236);c.lineTo(208,236);c.lineTo(216,250);c.lineTo(40,250);c.closePath();c.fill();c.stroke()
  c.fillStyle=LT;c.beginPath();c.roundRect(60,146,136,94,10);c.fill();c.stroke()
  c.fillStyle=fl?'#fff5f5':'#fff';c.beginPath();c.roundRect(72,156,112,72,4);c.fill();c.lineWidth=4;c.stroke()
  const s=fl?1.08:1;c.save();c.translate(128,192);c.scale(s,s)
  for(const[l,k]of[[22,'#111'],[12,RD]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),c.moveTo(-22,-22),c.lineTo(22,22),c.moveTo(22,-22),c.lineTo(-22,22),c.stroke()
  c.restore();c.strokeStyle='#111'
  for(const d of[-1,1]){c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(128+d*66,150,11,14,d*.3,0,T);c.fill();c.stroke()}
  head(()=>{
    for(const d of[-1,1]){
      const arc=()=>{c.beginPath();c.moveTo(128+d*40,146);c.bezierCurveTo(128+d*90,104,128+d*128,150,128+d*120,240)}
      for(const[lw,s]of[[17,'#111'],[9,WA]])L(lw*Z),c.strokeStyle=s,arc(),c.stroke()
      c.strokeStyle='#fff';L(3*Z);c.setLineDash([8,16]);c.lineDashOffset=-t*48;arc();c.stroke();c.setLineDash([])
    }
  })
  c.strokeStyle='#111';c.fillStyle=WA;c.lineWidth=3.5
  for(const d of[-1,1])for(const o of[0,.33,.66]){const p=(t*2+o)%1,x=128+d*(96+(o>.5?-1:1)*22*p),y=234-34*p+40*p*p;c.beginPath();c.arc(x,y,5*(1-p*.5),0,T);c.fill();c.stroke()}
}
