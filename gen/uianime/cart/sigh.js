// brown-haired girl with a side braid leaning on an empty shopping cart, peering in and letting out a long gloomy sigh
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#b5835a',HD='#8d5a3b',HL='#f1d2b6',EYE='#3bc9db',ED='#0b7285',CD='#fab005',BL='#ffa8a8',GL='#9775fa',CW='#e7f5ff',WR='#74c0fc',HN='#fa5252',Z=.72
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const puff=(c,x,y,r)=>{c.beginPath();for(const[a,b,s]of[[-.8,0,.7],[0,-.5,.8],[.8,0,.7],[0,.3,.75]])c.moveTo(x+a*r+s*r,y+b*r),c.arc(x+a*r,y+b*r,s*r,0,T);c.lineWidth=8;c.strokeStyle='#111';c.stroke();c.fillStyle='#fff';c.fill()}
export default(c,t)=>{
  const up=ez(t,.05,.3)-ez(t,.38,.55),dr=ez(t,.38,.55)-ez(t,.85,1),L=v=>c.lineWidth=v/Z,so=t>.36&&t<.8
  const head=f=>{c.save();c.translate(150,88-5*up+6*dr);c.rotate(-.1-.08*dr);c.scale(Z,Z);c.translate(-128,-128);f();c.restore()}
  head(()=>{
    L(6);c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,206,96,198,150);c.lineTo(58,150);c.bezierCurveTo(50,96,60,34,128,34);c.fill();c.stroke()
  })
  c.save();c.translate(150,88-3*up+3*dr);c.scale(Z,Z);c.translate(-128,-128)
  L(6);c.fillStyle=CD;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(56,196,52,270);c.lineTo(204,270);c.quadraticCurveTo(200,196,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(106,190);c.lineTo(128,226);c.lineTo(150,190);c.closePath();c.fill();L(5);c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,194);c.lineTo(128,206);c.lineTo(140,194);c.lineTo(140,166);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.moveTo(140,166);c.lineTo(140,192);c.stroke()
  c.restore()
  head(()=>{
    L(6);c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    for(const[x,d]of[[103,-1],[153,1]]){
      c.save();c.beginPath();c.ellipse(x,140,14,17,0,0,T);c.clip()
      c.fillStyle='#fff';c.fill();c.fillStyle=EYE;c.beginPath();c.ellipse(x,150,11.5,15,0,0,T);c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,141,13,9,0,0,T);c.fill()
      c.fillStyle='#111';c.beginPath();c.ellipse(x,152,5,6.5,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x-4,148,3.5,0,T);c.fill()
      c.fillStyle=SKIN;c.fillRect(x-16,118,32,20);c.restore()
      L(6);c.beginPath();c.moveTo(x-16,137);c.quadraticCurveTo(x,132,x+16,137);c.moveTo(x+d*15,136);c.lineTo(x+d*20,140);c.stroke()
      L(4);c.beginPath();c.moveTo(x-d*14,118);c.lineTo(x+d*12,126);c.stroke()
    }
    c.strokeStyle=GL;L(3.5);for(const x of[96,108,120,136,148,160])c.beginPath(),c.moveTo(x,106),c.lineTo(x,118+(x%24?4:0)),c.stroke()
    c.strokeStyle='#111';c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,163,11,5,0,0,T),c.fill()
    L(3.5);c.beginPath();if(so)c.ellipse(128,172,5,6.5,0,0,T);else c.moveTo(120,172),c.quadraticCurveTo(124,168,128,172),c.quadraticCurveTo(132,176,136,172);c.stroke()
    L(6);c.fillStyle=HAIR;c.beginPath();c.moveTo(70,146)
    c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,146)
    c.quadraticCurveTo(186,116,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
    c.quadraticCurveTo(132,96,124,90);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(106,96,96,94);c.quadraticCurveTo(90,104,86,112)
    c.quadraticCurveTo(80,104,78,102);c.quadraticCurveTo(70,120,70,146);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;L(5);for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111'
    for(let k=0;k<4;k++){c.fillStyle=k%2?HAIR:HD;L(5);c.beginPath();c.ellipse(186+k*2,150+k*17,12,11,.2,0,T);c.fill();c.stroke()}
    c.fillStyle=HN;L(4);c.beginPath();c.ellipse(194,218,9,6,0,0,T);c.fill();c.stroke()
  })
  c.lineWidth=6;c.strokeStyle='#111'
  for(const x of[50,178]){c.fillStyle='#868e96';c.beginPath();c.arc(x,236,10,0,T);c.fill();c.stroke();c.fillStyle='#dee2e6';c.beginPath();c.arc(x,236,3.5,0,T);c.fill()}
  c.lineWidth=6;c.beginPath();c.moveTo(36,220);c.lineTo(50,236);c.moveTo(192,220);c.lineTo(178,236);c.moveTo(40,226);c.lineTo(190,226);c.stroke()
  c.strokeStyle='#adb5bd';c.lineWidth=3;c.beginPath();c.moveTo(42,226);c.lineTo(188,226);c.stroke();c.strokeStyle='#111'
  const bk=()=>{c.beginPath();c.moveTo(12,152);c.lineTo(214,152);c.lineTo(196,220);c.lineTo(32,220);c.closePath()}
  c.fillStyle=CW;bk();c.fill()
  c.save();bk();c.clip();c.strokeStyle=WR;c.lineWidth=4;c.beginPath();for(let x=20;x<214;x+=22)c.moveTo(x,150),c.lineTo(x+(x<113?6:-6),222);for(const y of[175,198])c.moveTo(0,y),c.lineTo(256,y);c.stroke();c.restore()
  c.lineWidth=6;c.strokeStyle='#111';bk();c.stroke()
  c.lineWidth=11;c.beginPath();c.moveTo(10,152);c.lineTo(216,152);c.stroke();c.strokeStyle='#dee2e6';c.lineWidth=4;c.stroke();c.strokeStyle='#111'
  c.lineWidth=6;c.beginPath();c.moveTo(214,152);c.lineTo(230,136);c.stroke()
  c.fillStyle=HN;c.save();c.translate(232,132);c.rotate(-.8);c.beginPath();c.roundRect(-16,-7,32,14,7);c.fill();c.stroke();c.restore()
  c.strokeStyle='#868e96';c.lineWidth=3;c.beginPath();for(const r of[12,22])c.moveTo(18+r,156),c.arc(18,156,r,0,PI/2);for(const a of[.15,.78,1.4])c.moveTo(18,156),c.lineTo(18+30*cos(a),156+30*sin(a));c.stroke();c.strokeStyle='#111'
  c.lineWidth=5;c.fillStyle=SKIN;for(const[x,y]of[[104,150],[188,150]])c.beginPath(),c.ellipse(x,y-1-3*up+3*dr,13,10,0,0,T),c.fill(),c.stroke()
  if(t>.38){const p=(t-.38)/.62,x=116-62*p,y=124+18*p;puff(c,x,y,(7+13*sin(PI*min(1,p*1.3)))*min(1,(1-p)*5))}
}
