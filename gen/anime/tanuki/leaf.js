// tanuki girl with silver-blue hair, round ears and a ringed tail wagging, then the leaf on her head spins and she vanishes in a puff of smoke and pops back
const{sin,cos,PI,max,min,round}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#a5b4cb',HD='#748ba8',HL='#e7ecf5',DK='#5c677d',EYE='#a9744f',ED='#6b4226',TOP='#ffa94d',TD='#e8590c',OBI='#38d9a9',LF='#51cf66',LD='#2f9e44',BL='#ffa8a8',SM='#f1f3f5'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=3;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
const leaf=(c,x,y,a,s)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,1)
  c.fillStyle=LF;c.lineWidth=5;c.beginPath();c.moveTo(0,16);c.bezierCurveTo(-22,4,-18,-18,0,-26);c.bezierCurveTo(18,-18,22,4,0,16);c.fill();c.stroke()
  c.strokeStyle=LD;c.lineWidth=3;c.beginPath();c.moveTo(0,20);c.lineTo(0,-20);c.moveTo(0,0);c.lineTo(-9,-8);c.moveTo(0,0);c.lineTo(9,-8);c.stroke();c.strokeStyle='#111';c.restore()}
const cloud=(c,cx,cy,r,a)=>{
  const P=[[0,0,1]];for(let k=0;k<8;k++){const b=k*T/8+a;P.push([cos(b)*.7,sin(b)*.62,.48+.08*(k%2)])}
  for(const[lw,col]of[[12,'#111'],[0,SM]])for(const[x,y,s]of P){c.beginPath();c.arc(cx+x*r,cy+y*r,s*r*.7,0,T);if(lw)c.lineWidth=lw,c.strokeStyle=col,c.stroke();else c.fillStyle=col,c.fill()}
  c.strokeStyle='#ced4da';c.lineWidth=4;for(let k=0;k<3;k++){const b=k*T/3+a*2;c.beginPath();c.arc(cx+cos(b)*r*.3,cy+sin(b)*r*.25,r*.16,b,b+PI*1.2);c.stroke()}c.strokeStyle='#111'
}
export default(c,t,i)=>{
  const r=[0,0,0,0,0,0,0,.55,1,1,1,1,.7,.35,0,0][i],hide=i>=8&&i<12
  const tada=i>=12||i==0,wag=.25*sin(2*T*t),la=i==6||i==7?(i-5)*1.6:0
  if(!hide){
    c.save();c.translate(160,192);c.rotate(.4+wag)
    const tp=()=>{c.beginPath();c.moveTo(-12,0);c.bezierCurveTo(-44,-30,-34,-96,10,-98);c.bezierCurveTo(52,-96,56,-34,20,2);c.closePath()}
    c.fillStyle=HAIR;c.lineWidth=6;tp();c.fill();c.save();tp();c.clip();c.fillStyle=DK;for(const y of[-30,-62])c.beginPath(),c.ellipse(8,y,40,8,-.06,0,T),c.fill();c.beginPath();c.ellipse(10,-98,34,16,0,0,T);c.fill();c.restore();tp();c.stroke();c.restore()
    for(const x of[118,138]){line(c,[[x,198],[x,220]],8,SKIN);c.lineWidth=5;c.fillStyle=DK;c.beginPath();c.ellipse(x+(x<128?-3:3),224,11,7,0,0,T);c.fill();c.lineWidth=10;c.strokeStyle='#fff';c.stroke();c.lineWidth=5;c.strokeStyle='#111';c.stroke()}
    c.fillStyle=TOP;c.lineWidth=5;c.beginPath();c.moveTo(110,136);c.lineTo(146,136);c.quadraticCurveTo(160,170,162,204);c.lineTo(94,204);c.quadraticCurveTo(96,170,110,136);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(114,136);c.lineTo(128,156);c.lineTo(142,136);c.closePath();c.fill();c.stroke()
    c.fillStyle=OBI;c.beginPath();c.rect(102,164,52,14);c.fill();c.stroke()
    c.strokeStyle=TD;c.lineWidth=3;c.beginPath();c.moveTo(108,186);c.lineTo(104,200);c.moveTo(148,186);c.lineTo(152,200);c.stroke();c.strokeStyle='#111'
    for(const d of[-1,1]){line(c,[[128+d*16,140],[128+d*30,160],[128+d*22,176]],8,TOP);c.lineWidth=4;c.fillStyle=SKIN;c.beginPath();c.arc(128+d*20,176,6,0,T);c.fill();c.stroke()}
    c.save();c.translate(128,92);c.scale(.6,.6);c.translate(-128,-128)
    c.lineWidth=9;c.fillStyle=HAIR;for(const d of[-1,1]){c.beginPath();c.arc(128+d*58,50,24,0,T);c.fill();c.stroke();c.fillStyle=DK;c.beginPath();c.arc(128+d*58,52,12,0,T);c.fill();c.fillStyle=HAIR}
    c.fillStyle=HD;c.beginPath();c.moveTo(128,40);c.bezierCurveTo(200,40,212,100,202,160);c.quadraticCurveTo(190,174,176,166);c.lineTo(80,166);c.quadraticCurveTo(66,174,54,160);c.bezierCurveTo(44,100,56,40,128,40);c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(tada||i==3){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,144),c.quadraticCurveTo(x,128,x+15,144),c.stroke()}else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,163,13,7,0,0,T),c.fill()
    c.lineWidth=6;if(tada){c.fillStyle='#c92a2a';c.beginPath();c.moveTo(114,164);c.quadraticCurveTo(128,184,142,164);c.closePath();c.fill();c.stroke()}else{c.beginPath();c.moveTo(116,166);c.quadraticCurveTo(122,172,128,166);c.quadraticCurveTo(134,172,140,166);c.stroke()}
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,146)
    c.bezierCurveTo(54,72,90,40,128,40);c.bezierCurveTo(166,40,202,72,190,146)
    c.quadraticCurveTo(186,114,176,102);c.quadraticCurveTo(168,106,162,114);c.quadraticCurveTo(156,98,146,92);c.quadraticCurveTo(140,106,130,112)
    c.quadraticCurveTo(124,98,114,92);c.quadraticCurveTo(108,106,98,112);c.quadraticCurveTo(94,100,86,100);c.quadraticCurveTo(80,110,78,116)
    c.quadraticCurveTo(70,116,66,146);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.26,1.38],[1.46,1.54],[1.62,1.72]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
    c.restore()
  }
  if(r>0)cloud(c,128,138,94*r,t*T)
  const ly=hide?84-6*sin(T*t*4):42,ls=hide||la?cos(T*t*4+la):1
  leaf(c,128,ly,hide?.3*sin(T*t*2):-.2,max(.15,Math.abs(ls)))
  if(tada&&!r){const k=i?i-14:2;c.lineWidth=5;for(const a of[-2.4,-1.6,-.8])c.beginPath(),c.moveTo(128+cos(a)*(60+k*10),110+sin(a)*(60+k*10)),c.lineTo(128+cos(a)*(74+k*10),110+sin(a)*(74+k*10)),c.stroke()}
}
