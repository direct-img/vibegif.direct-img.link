// worried girl with an orange bob holding her phone up high and waving it around hunting for signal, ahoge twitching like an antenna
const{sin,cos,PI,max,min,abs}=Math,T=2*PI
export const frames=12,delay=95
const SKIN='#ffe3d1',HAIR='#ffa94d',HD='#f76707',HL='#fff4e6',EYE='#748ffc',ED='#364fc7',HOOD='#74c0fc',HOD='#339af0',BL='#ffa8a8',PH='#ffd43b',SCR='#e3fafc',RED='#fa5252',SW='#a5d8ff'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,gx)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+gx,y,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+gx,y-10,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+gx,y+1,5,7,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+gx-4,y-6,4.5,0,T);c.fill();c.beginPath();c.arc(x+gx+5,y+7,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
  c.lineWidth=2.5;c.beginPath();c.moveTo(x-8,y+18);c.lineTo(x+8,y+18);c.stroke()
}
export default(c,t)=>{
  const a=-1.4+.17*sin(2*T*t),sx=150,sy=226,hx=sx+140*cos(a),hy=sy+140*sin(a),gx=4,aw=.35*sin(2*T*t+1)
  const H=f=>{c.save();c.translate(112,198);c.scale(.8,.8);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,206,158);c.quadraticCurveTo(204,180,184,180);c.lineTo(72,180);c.quadraticCurveTo(52,180,50,158);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=HOD;c.beginPath();c.ellipse(128,206,62,22,0,0,T);c.fill();c.stroke()
    c.fillStyle=HOOD;c.beginPath();c.moveTo(96,196);c.quadraticCurveTo(56,206,48,262);c.lineTo(208,262);c.quadraticCurveTo(200,206,160,196);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,208,142,194);c.lineTo(142,168);c.fill();c.lineWidth=6;c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    for(const d of[-1,1])ds(c,10,4,'#fff',()=>{c.moveTo(128+d*14,206);c.lineTo(128+d*16,240)})
    c.fillStyle='#fff';c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.roundRect(128+d*16-5,238,10,12,4),c.fill(),c.stroke()
    c.save();c.translate(130,40);c.rotate(aw)
    c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(-8,4);c.quadraticCurveTo(-14,-30,16,-34);c.quadraticCurveTo(-2,-24,8,4);c.closePath();c.fill();c.stroke()
    c.restore()
    c.lineWidth=7;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103,142,-1,gx);eye(c,153,142,1,gx)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,13,7,0,0,T),c.fill()
    c.lineWidth=3;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,167),c.lineTo(128+d*44+k+2,161),c.stroke()
    c.lineWidth=4.5;c.fillStyle='#c92a2a';c.beginPath();c.ellipse(130,172,7,6,0,0,T);c.fill();c.stroke()
    c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,160)
    c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,190,160)
    c.quadraticCurveTo(188,122,180,106);c.lineTo(168,112);c.lineTo(162,96);c.lineTo(148,108);c.lineTo(140,92);c.lineTo(128,108)
    c.lineTo(116,92);c.lineTo(106,108);c.lineTo(94,96);c.lineTo(88,112);c.lineTo(78,106);c.quadraticCurveTo(70,128,66,160);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=6;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.moveTo(86,124);c.lineTo(110,115);c.moveTo(146,115);c.lineTo(170,124);c.stroke()
    c.fillStyle=SW;c.lineWidth=5;c.beginPath();c.moveTo(66,110);c.quadraticCurveTo(76,128,66,134);c.quadraticCurveTo(56,128,66,110);c.fill();c.stroke()
  })
  const v=cos(2*T*t),g=v>0?1:-1
  if(abs(v)>.3)for(const r of[160,190])ds(c,8,3.5,'#fff',()=>{c.arc(sx,sy,r,min(a-g*.38,a-g*.2),max(a-g*.38,a-g*.2))})
  ds(c,26,15,HOOD,()=>{c.moveTo(sx,sy);c.lineTo(sx+70*cos(a+.28),sy+70*sin(a+.28));c.lineTo(hx,hy+4)})
  c.save();c.translate(hx+cos(a)*30,hy+sin(a)*30);c.rotate(a+PI/2)
  c.fillStyle=PH;c.lineWidth=5;c.beginPath();c.roundRect(-22,-38,44,76,9);c.fill();c.stroke()
  c.fillStyle=SCR;c.lineWidth=3.5;c.beginPath();c.roundRect(-16,-30,32,58,4);c.fill();c.stroke()
  c.fillStyle='#ced4da';c.lineWidth=2.5;for(let k=0;k<4;k++)c.beginPath(),c.roundRect(-11+k*6,8-k*6,4.5,9+k*6,1.5),c.fill(),c.stroke()
  ds(c,7,3.5,RED,()=>{c.moveTo(2,-24);c.lineTo(12,-14);c.moveTo(12,-24);c.lineTo(2,-14)})
  c.restore()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(hx,hy,12,13,a,0,T);c.fill();c.stroke()
  const q=max(0,sin(T*t*2-1))
  c.save();c.translate(44,44-6*q);c.rotate(.2*sin(T*t*2))
  for(const[l,s]of[[13,'#111'],[6,RED]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(-10,-12),c.quadraticCurveTo(-10,-24,2,-24),c.quadraticCurveTo(14,-24,12,-12),c.quadraticCurveTo(10,-4,1,0),c.lineTo(1,6),c.stroke()
  c.fillStyle=RED;c.lineWidth=4;c.strokeStyle='#111';c.beginPath();c.arc(1,19,5,0,T);c.fill();c.stroke()
  c.restore()
}
