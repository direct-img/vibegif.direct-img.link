// stern silver-haired student council girl slamming her white sleeves into a big batsu X, frowning as red impact lines pop
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=12,delay=90
const SKIN='#ffe3d1',HAIR='#e9ecef',HD='#adb5bd',EYE='#5c7cfa',ED='#364fc7',BZ='#364fc7',SL='#fff',TIE='#f03e3e',BL='#ffa8a8',RD='#ff6b6b',Z=.84
const O=[0,0,0,0,0,0,0,0,.35,.75,.95,.55]
const eye=(c,L,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  L(2.5);c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+4,5,6.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-1,3.5,0,T);c.fill()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(x-d*20,y-26);c.lineTo(x-d*20,y-6);c.lineTo(x+d*20,y-16);c.lineTo(x+d*20,y-26);c.fill()
  L(6);c.beginPath();c.moveTo(x-d*18,y-6);c.lineTo(x+d*17,y-15);c.stroke()
}
export default(c,t,i)=>{
  const o=O[i],L=v=>c.lineWidth=v/Z,sh=i>1&&i<8?.04*sin(T*(i-2)/3):0
  const head=f=>{c.save();c.translate(128,104);c.rotate(sh);c.scale(Z,Z);c.translate(-128,-128);f();c.restore()}
  head(()=>{L(6);c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,96,206,150);c.lineTo(214,330);c.lineTo(42,330);c.lineTo(50,150);c.bezierCurveTo(42,96,56,34,128,34);c.fill();c.stroke()})
  c.save();c.translate(128,104);c.scale(Z,Z);c.translate(-128,-128)
  L(6);c.fillStyle=BZ;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(56,196,44,330);c.lineTo(212,330);c.quadraticCurveTo(200,196,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(104,188);c.lineTo(128,250);c.lineTo(152,188);c.closePath();c.fill();c.stroke()
  c.fillStyle=TIE;L(4.5);c.beginPath();c.moveTo(120,204);c.lineTo(136,204);c.lineTo(132,212);c.lineTo(138,240);c.lineTo(128,250);c.lineTo(118,240);c.lineTo(124,212);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;L(5);c.beginPath();c.moveTo(116,166);c.lineTo(116,194);c.lineTo(128,204);c.lineTo(140,194);c.lineTo(140,166);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,190);c.moveTo(140,166);c.lineTo(140,190);c.stroke()
  c.restore()
  head(()=>{
    L(6);c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,L,103,142,-1);eye(c,L,153,142,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,163,11,5,0,0,T),c.fill()
    L(4);c.beginPath();c.moveTo(118,174);c.quadraticCurveTo(128,166,138,174);c.stroke()
    L(6);c.fillStyle=HAIR;c.beginPath();c.moveTo(64,204);c.lineTo(66,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,190,150);c.lineTo(192,204);c.lineTo(174,196);c.lineTo(176,120)
    c.lineTo(176,108);c.lineTo(166,114);c.lineTo(156,100);c.lineTo(146,112);c.lineTo(136,98);c.lineTo(128,112);c.lineTo(120,98);c.lineTo(110,112);c.lineTo(100,100);c.lineTo(90,114);c.lineTo(80,108)
    c.lineTo(80,120);c.lineTo(82,196);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;L(5);for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle='#212529';L(5);c.beginPath();c.moveTo(70,92);c.bezierCurveTo(70,40,186,40,186,92);c.lineTo(180,84);c.bezierCurveTo(170,52,86,52,76,84);c.closePath();c.fill();c.stroke()
  })
  for(const d of[1,-1]){
    const ex=128-d*58,ey=226,a=(d>0?-.58:PI+.58)-d*1.05*o,fx=ex+130*cos(a),fy=ey+130*sin(a)
    for(const[w,s]of[[32,'#111'],[21,SL]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(ex-d*10,ey+40),c.lineTo(ex,ey),c.lineTo(fx-cos(a)*16,fy-sin(a)*16),c.stroke()
    c.strokeStyle='#111';c.save();c.translate(fx,fy);c.rotate(a)
    c.lineWidth=5;c.fillStyle=BZ;c.beginPath();c.roundRect(-24,-14,10,28,4);c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.roundRect(-14,-15,30,30,12);c.fill();c.stroke()
    c.lineWidth=2.5;c.beginPath();for(const k of[-6,1,8])c.moveTo(14,k*d),c.lineTo(6,k*d);c.stroke()
    c.restore()
  }
  if(i<3)for(const[w,s]of[[9,'#111'],[4,RD]]){c.lineWidth=w;c.strokeStyle=s;const r=i*8;for(const a of[-2.6,-2.1,-1,-.5,.5,2.6]){const x=128+cos(a)*(84+r),y=176+sin(a)*(64+r);c.beginPath();c.moveTo(x,y);c.lineTo(x+cos(a)*16,y+sin(a)*16);c.stroke()}}
}
