// blue-haired girl in glasses and a lab coat coughing into her fist as gray smoke billows out of her crashed computer
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=12,delay=90
const SKIN='#ffe3d1',HAIR='#5c7cfa',HD='#3b5bdb',HL='#dbe4ff',CO='#fff',SH='#a5d8ff',BL='#ffa8a8',PC='#e9d8a6',PD='#c9b37e',SC='#495057',SM='#ced4da',SMD='#adb5bd',SW='#a5d8ff',SP='#ffd43b',Z=.76
const puff=(c,x,y,r,f)=>{c.beginPath();for(const[a,b,s]of[[-.8,0,.7],[0,-.5,.8],[.8,0,.7],[0,.3,.75]])c.moveTo(x+a*r+s*r,y+b*r),c.arc(x+a*r,y+b*r,s*r,0,T);c.lineWidth=9;c.strokeStyle='#111';c.stroke();c.fillStyle=f;c.fill()}
export default(c,t,i)=>{
  const k=max(0,sin(2*T*t))**2,L=v=>c.lineWidth=v/Z,fl=i%3==0
  const head=f=>{c.save();c.translate(158,112+5*k);c.rotate(-.12*k);c.scale(Z,Z);c.translate(-128,-128);f();c.restore()}
  head(()=>{
    L(6);c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,96,206,150);c.lineTo(212,320);c.lineTo(44,320);c.lineTo(50,150);c.bezierCurveTo(44,96,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=CO;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(58,196,46,320);c.lineTo(210,320);c.quadraticCurveTo(198,196,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SH;c.beginPath();c.moveTo(108,190);c.lineTo(128,236);c.lineTo(148,190);c.closePath();c.fill();c.stroke()
    L(5);for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*20,188),c.lineTo(128+d*34,214),c.lineTo(128+d*22,218),c.lineTo(128,250),c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,194);c.lineTo(128,206);c.lineTo(140,194);c.lineTo(140,166);c.fill();L(5);c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.moveTo(140,166);c.lineTo(140,192);c.stroke()
    L(6);c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    L(6.5);for(const d of[-1,1]){const x=128+d*25;c.beginPath();c.moveTo(x-d*13,130);c.lineTo(x+d*9,140);c.lineTo(x-d*13,150);c.stroke()}
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,11,5.5,0,0,T),c.fill()
    for(const[w,s]of[[8,'#111'],[3.5,'#fab005']]){c.strokeStyle=s;L(w);for(const x of[103,153])c.beginPath(),c.arc(x,140,22,0,T),c.stroke();c.beginPath();c.moveTo(123,136);c.quadraticCurveTo(128,131,133,136);c.stroke()}
    c.strokeStyle='#111';L(6);c.fillStyle=HAIR;c.beginPath();c.moveTo(66,170)
    c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,190,170)
    c.quadraticCurveTo(184,130,180,104);c.quadraticCurveTo(172,100,164,112);c.quadraticCurveTo(158,96,146,92);c.quadraticCurveTo(140,104,130,108)
    c.quadraticCurveTo(124,96,112,92);c.quadraticCurveTo(106,104,96,108);c.quadraticCurveTo(90,98,82,102)
    c.quadraticCurveTo(72,130,66,170);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;L(5);for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';L(4.5);c.beginPath();c.moveTo(88,112);c.lineTo(114,118);c.moveTo(168,112);c.lineTo(142,118);c.stroke()
    c.fillStyle=SW;L(4);const sy=96+4*k;c.beginPath();c.moveTo(196,sy-14);c.quadraticCurveTo(206,sy,196,sy+7);c.quadraticCurveTo(186,sy,196,sy-14);c.fill();c.stroke()
  })
  for(const[w,s]of[[28,'#111'],[17,CO]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(118,262),c.quadraticCurveTo(110,200,140,170+4*k),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.roundRect(130,146+4*k,28,26,10);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();for(const y of[154,161])c.moveTo(150,y+4*k),c.lineTo(158,y+4*k);c.stroke()
  if(k>.2)for(const[w,s]of[[9,'#111'],[4,'#fff']]){c.lineWidth=w;c.strokeStyle=s;for(const a of[-.6,0,.6])c.beginPath(),c.moveTo(144-22*cos(a),160+4*k+22*sin(a)),c.lineTo(144-(26+16*k)*cos(a),160+4*k+(26+16*k)*sin(a)),c.stroke()}
  c.strokeStyle='#111'
  c.lineWidth=6;c.fillStyle=PD;c.beginPath();c.moveTo(44,226);c.lineTo(92,226);c.lineTo(104,248);c.lineTo(32,248);c.closePath();c.fill();c.stroke()
  c.fillStyle=PC;c.beginPath();c.roundRect(10,122,116,106,12);c.fill();c.stroke()
  c.fillStyle=fl?'#868e96':SC;c.beginPath();c.roundRect(24,136,88,70,8);c.fill();c.lineWidth=5;c.stroke()
  for(const[w,s]of[[9,'#111'],[4,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(44,140),c.lineTo(58,160),c.lineTo(50,172),c.lineTo(66,202),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4;c.fillStyle=SP;for(const[x,y]of[[96,130],[22,140]])if((i+(x>50?0:1))%2)c.beginPath(),c.moveTo(x,y-11),c.lineTo(x+4,y-3),c.lineTo(x+12,y),c.lineTo(x+4,y+3),c.lineTo(x,y+11),c.lineTo(x-4,y+3),c.lineTo(x-12,y),c.lineTo(x-4,y-3),c.closePath(),c.fill(),c.stroke()
  for(let n=3;n>=0;n--){const p=(t+n/4)%1;puff(c,56+96*p+10*sin(T*p),108-90*p,(12+18*p)*min(1,(1-p)*5),n%2?SM:SMD)}
}
