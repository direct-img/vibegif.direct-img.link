// green-haired girl in a beret shaking her empty wallet upside down with teary eyes, only dust puffs and specks falling out
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=12,delay=80
const SKIN='#ffe3d1',HAIR='#8ce99a',HD='#2f9e44',HL='#ebfbee',EYE='#f76707',ED='#c2410c',BR='#c2255c',SW='#d0bfff',SWD='#9775fa',BL='#ffa8a8',WA='#a5d8ff',WL='#e8590c',WLD='#b35400',DU='#ced4da',Z=.8
const puff=(c,x,y,r)=>{c.beginPath();for(const[a,b,s]of[[-.8,0,.7],[0,-.5,.8],[.8,0,.7],[0,.3,.75]])c.moveTo(x+a*r+s*r,y+b*r),c.arc(x+a*r,y+b*r,s*r,0,T);c.lineWidth=7;c.strokeStyle='#111';c.stroke();c.fillStyle=DU;c.fill()}
export default(c,t)=>{
  const w=sin(4*T*t),L=v=>c.lineWidth=v/Z,wb=sin(2*T*t)
  const head=f=>{c.save();c.translate(106,124);c.scale(Z,Z);c.translate(-128,-128);f();c.restore()}
  head(()=>{
    L(6);c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,204,160);c.quadraticCurveTo(198,180,178,176);c.lineTo(78,176);c.quadraticCurveTo(58,180,52,160);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=SW;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(56,196,44,320);c.lineTo(212,320);c.quadraticCurveTo(200,196,156,190);c.closePath();c.fill();c.stroke()
    c.strokeStyle=SWD;L(4);for(let x=70;x<200;x+=20)c.beginPath(),c.moveTo(x,236),c.lineTo(x+(x-128)*.08,320),c.stroke();c.strokeStyle='#111'
    c.fillStyle=SW;L(6);c.beginPath();c.roundRect(96,184,64,22,11);c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,190);c.quadraticCurveTo(128,198,140,190);c.lineTo(140,166);c.fill();L(5);c.beginPath();c.moveTo(116,166);c.lineTo(116,188);c.moveTo(140,166);c.lineTo(140,188);c.stroke()
    L(6);c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    for(const[x,d]of[[103,-1],[153,1]]){
      c.fillStyle='#fff';c.beginPath();c.ellipse(x,140,14,17,0,0,T);c.fill()
      c.save();c.beginPath();c.ellipse(x,142,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,132,13,10,0,0,T);c.fill()
      c.fillStyle='#111';c.beginPath();c.ellipse(x+4,136,5,6.5,0,0,T);c.fill()
      c.fillStyle=WA;c.beginPath();c.moveTo(x-16,150+wb);c.quadraticCurveTo(x,145-wb,x+16,150+wb);c.lineTo(x+16,160);c.lineTo(x-16,160);c.fill();c.restore()
      L(2.5);c.beginPath();c.ellipse(x,142,11.5,15,0,0,T);c.stroke()
      c.fillStyle='#fff';c.beginPath();c.arc(x,131,4.5,0,T);c.fill();c.beginPath();c.arc(x+7,146,2.5,0,T);c.fill();c.beginPath();c.arc(x-5,151,2,0,T);c.fill()
      L(6);c.beginPath();c.moveTo(x-16,134);c.quadraticCurveTo(x,120,x+16,134);c.moveTo(x+d*15,133);c.lineTo(x+d*21,128);c.stroke()
    }
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,163,12,6,0,0,T),c.fill()
    L(2.5);for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*42+k-2,166),c.lineTo(128+d*42+k+2,160),c.stroke()
    L(3.5);c.beginPath();c.moveTo(116,174);for(let k=1;k<=6;k++)c.lineTo(116+k*4,174+(k%2?-3:2));c.stroke()
    L(6);c.fillStyle=HAIR;c.beginPath();c.moveTo(66,158)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,190,158)
    c.quadraticCurveTo(186,124,180,106);c.quadraticCurveTo(172,100,166,110);c.quadraticCurveTo(160,96,150,92);c.quadraticCurveTo(144,104,136,108)
    c.quadraticCurveTo(130,96,118,94);c.quadraticCurveTo(112,104,102,108);c.quadraticCurveTo(96,98,86,100);c.quadraticCurveTo(70,124,66,158);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;L(5);for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';L(4.5);c.beginPath();c.moveTo(90,116);c.lineTo(114,110);c.moveTo(166,116);c.lineTo(142,110);c.stroke()
    c.fillStyle=BR;L(6);c.beginPath();c.moveTo(60,72);c.bezierCurveTo(50,30,110,10,150,22);c.bezierCurveTo(196,34,210,58,196,74);c.quadraticCurveTo(128,54,60,72);c.fill();c.stroke()
    c.beginPath();c.moveTo(124,16);c.lineTo(128,4);c.stroke()
    c.fillStyle=SWD;L(4);c.beginPath();c.ellipse(80,86,7,7,0,0,T);c.fill();c.stroke()
    c.fillStyle=WA;L(4);c.beginPath();c.moveTo(56,110);c.quadraticCurveTo(46,124,56,131);c.quadraticCurveTo(66,124,56,110);c.fill();c.stroke()
  })
  const hx=178+3*w,hy=80
  for(const[l,s]of[[30,'#111'],[19,SW]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(160,262),c.quadraticCurveTo(184,180,hx-2,hy+30),c.stroke()
  c.strokeStyle='#111'
  c.fillStyle=DU;c.lineWidth=3
  for(let k=0;k<6;k++){const p=(t*2+k/6)%1,x=206+16*sin(k*2.1)+6*sin(T*p+k),y=116+120*p;c.beginPath();c.arc(x,y,2.5+1.5*(k%2),0,T);c.fill();c.stroke()}
  for(const o of[0,.5]){const p=(t*2+o)%1;const r=13*sin(PI*p);if(r>3)puff(c,204+(o?12:-8)+8*p,116+56*p,r)}
  c.save();c.translate(hx,hy);c.rotate(.2*w)
  c.lineWidth=6;c.fillStyle=WLD;c.beginPath();c.roundRect(-4,-28,64,64,9);c.fill();c.stroke()
  c.fillStyle='#343a40';c.beginPath();c.moveTo(0,16);c.lineTo(56,16);c.quadraticCurveTo(54,32,28,32);c.quadraticCurveTo(2,32,0,16);c.fill();c.lineWidth=4;c.stroke()
  c.lineWidth=6;c.fillStyle=WL;c.beginPath();c.moveTo(-4,-19);c.quadraticCurveTo(-4,-28,5,-28);c.lineTo(51,-28);c.quadraticCurveTo(60,-28,60,-19);c.lineTo(60,10);c.quadraticCurveTo(28,24,-4,10);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#ffd8a8';c.lineWidth=2.5;c.setLineDash([5,5]);c.beginPath();c.moveTo(3,-21);c.lineTo(53,-21);c.lineTo(53,4);c.quadraticCurveTo(28,15,3,4);c.closePath();c.stroke();c.setLineDash([])
  c.strokeStyle='#111';c.fillStyle='#ffd43b';c.lineWidth=4;c.beginPath();c.roundRect(20,-34,16,12,4);c.fill();c.stroke()
  c.restore()
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(hx-2,hy+4,12,15,.2,0,T);c.fill();c.stroke()
  for(const[l,s]of[[7,'#111'],[2.5,'#fff']]){c.lineWidth=l;c.strokeStyle=s;for(const d of[-1,1])c.beginPath(),c.arc(hx+28,hy,46,d<0?PI*.82:-PI*.18,d<0?PI*1.05:PI*.05),c.stroke()}
  c.strokeStyle='#111'
}
