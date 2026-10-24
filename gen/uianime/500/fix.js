// red-haired mechanic girl in a bandana whacking a broken 500 server with a big wrench, sparks flying off it
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=10,delay=80
const SKIN='#ffe3d1',HAIR='#ff8787',HD='#e03131',EYE='#fab005',ED='#e67700',OV='#4dabf7',TS='#ffe066',BN='#ffd43b',BL='#ffa8a8',SV='#ced4da',SD='#868e96',RD='#fa5252',SP='#ffd43b',Z=.72
const S=[0,0,.2,.45,.7,.9,1,1,.55,.15]
const eye=(c,L,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  L(2.5);c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(x-d*20,y-26);c.lineTo(x-d*20,y-5);c.lineTo(x+d*20,y-19);c.lineTo(x+d*20,y-26);c.fill()
  L(6);c.beginPath();c.moveTo(x-d*18,y-5);c.lineTo(x+d*17,y-17);c.stroke()
}
const dig=(c,x,y,n)=>{c.beginPath();if(n)c.ellipse(x,y,7,11,0,0,T);else c.moveTo(x+7,y-11),c.lineTo(x-6,y-11),c.lineTo(x-7,y-1),c.quadraticCurveTo(x+8,y-5,x+7,y+4),c.quadraticCurveTo(x+6,y+12,x-7,y+9);c.stroke()}
export default(c,t,i)=>{
  const s=S[i],hit=i<2,L=v=>c.lineWidth=v/Z,hx=100-4*s,hy=140-66*s,a=-2.55+.85*s,wx=hx+58*cos(a),wy=hy+58*sin(a)
  const head=f=>{c.save();c.translate(168,108);c.scale(Z,Z);c.translate(-128,-128);f();c.restore()}
  head(()=>{
    c.save();c.translate(186,74);c.rotate(.5+.12*s)
    L(6);c.fillStyle=HAIR;c.beginPath();c.moveTo(-8,0);c.bezierCurveTo(40,-8,62,50,50,112);c.quadraticCurveTo(44,132,28,138);c.quadraticCurveTo(38,96,20,56);c.quadraticCurveTo(10,28,-8,14);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;L(3);c.beginPath();c.moveTo(12,12);c.bezierCurveTo(30,30,40,70,38,108);c.stroke();c.strokeStyle='#111';c.restore()
    L(6);c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,206,96,198,160);c.lineTo(58,160);c.bezierCurveTo(50,96,60,34,128,34);c.fill();c.stroke()
    c.fillStyle=TS;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(58,196,46,330);c.lineTo(210,330);c.quadraticCurveTo(198,196,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=OV;c.beginPath();c.moveTo(84,236);c.lineTo(172,236);c.lineTo(180,330);c.lineTo(76,330);c.closePath();c.fill();c.stroke()
    for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*42,240),c.lineTo(128+d*52,196),c.lineTo(128+d*38,194),c.lineTo(128+d*28,240),c.fill(),c.stroke()
    c.fillStyle=BN;for(const d of[-1,1])c.beginPath(),c.arc(128+d*36,246,6,0,T),c.fill(),c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,194);c.lineTo(128,204);c.lineTo(140,194);c.lineTo(140,166);c.fill();L(5);c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.moveTo(140,166);c.lineTo(140,192);c.stroke()
    L(6);c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,L,103,142,-1);eye(c,L,153,142,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,11,5.5,0,0,T),c.fill()
    const m=()=>{c.beginPath();c.moveTo(110,163);c.quadraticCurveTo(128,170,148,160);c.quadraticCurveTo(142,186,126,184);c.quadraticCurveTo(110,182,110,163)}
    c.fillStyle='#c92a2a';m();c.fill();c.save();c.clip();c.fillStyle='#fff';c.fillRect(100,150,60,21);c.restore();L(4);m();c.stroke()
    L(6);c.fillStyle=HAIR;c.beginPath();c.moveTo(70,150)
    c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,150)
    c.quadraticCurveTo(186,118,178,104);c.lineTo(170,112);c.lineTo(160,96);c.lineTo(150,110);c.lineTo(138,92);c.lineTo(126,108)
    c.lineTo(114,92);c.lineTo(104,108);c.lineTo(94,96);c.lineTo(84,112);c.lineTo(78,104);c.quadraticCurveTo(70,124,70,150);c.closePath();c.fill();c.stroke()
    c.fillStyle=BN;c.beginPath();c.moveTo(70,92);c.bezierCurveTo(70,40,186,40,186,92);c.lineTo(182,74);c.bezierCurveTo(170,46,86,46,74,74);c.closePath();c.fill();c.stroke()
    c.beginPath();c.moveTo(184,78);c.lineTo(214,62);c.lineTo(206,86);c.closePath();c.moveTo(184,80);c.lineTo(216,96);c.lineTo(194,100);c.closePath();c.fill();c.stroke()
    c.fillStyle=RD;for(const[x,y]of[[100,56],[128,50],[156,56]])c.beginPath(),c.arc(x,y,4,0,T),c.fill()
    c.save();c.translate(84,60);c.scale(hit?1.6:1.3,hit?1.6:1.3)
    for(const[w,k]of[[11,'#111'],[5,RD]]){c.lineWidth=w;c.strokeStyle=k;c.beginPath();for(let k=0;k<4;k++){const a=k*PI/2+PI/4,ca=cos(a),sa=sin(a),q=(x,y)=>[x*ca-y*sa,x*sa+y*ca];const[a1,b1]=q(5,-11),[a2,b2]=q(5,-4),[a3,b3]=q(11,-4);c.moveTo(a1,b1);c.quadraticCurveTo(a2,b2,a3,b3)}c.stroke()}
    c.restore();c.strokeStyle='#111'
  })
  c.save();c.translate(hit?-3*(1-i):0,0)
  c.lineWidth=6;c.fillStyle=SV;c.beginPath();c.roundRect(8,116,98,132,10);c.fill();c.stroke()
  c.fillStyle='#343a40';c.beginPath();c.roundRect(17,126,80,36,6);c.fill();c.lineWidth=4;c.stroke()
  for(const[w,k]of[[8,'#111'],[4,RD]])c.lineWidth=w,c.strokeStyle=k,dig(c,37,144,0),dig(c,58,144,1),dig(c,78,144,1)
  c.strokeStyle='#111';c.lineWidth=4
  for(const y of[170,196,222]){c.fillStyle=SD;c.beginPath();c.roundRect(17,y,80,20,5);c.fill();c.stroke();c.fillStyle=(i+y/26)%3<1.5?RD:'#495057';c.beginPath();c.arc(85,y+10,5,0,T);c.fill();c.stroke()
    c.lineWidth=3;c.beginPath();for(const x of[28,40,52])c.moveTo(x,y+5),c.lineTo(x,y+15);c.stroke();c.lineWidth=4}
  c.restore()
  for(const[w,k]of[[26,'#111'],[16,SKIN]])c.lineWidth=w,c.strokeStyle=k,c.beginPath(),c.moveTo(122,186),c.quadraticCurveTo(106-8*s,168-40*s,hx,hy),c.stroke()
  c.strokeStyle='#111';c.fillStyle=TS;c.lineWidth=5;c.beginPath();c.ellipse(122,190,15,17,.3,0,T);c.fill();c.stroke()
  c.save();c.translate(hx,hy);c.rotate(a)
  c.lineWidth=5;c.fillStyle='#adb5bd';c.beginPath();c.roundRect(-14,-6,62,12,5);c.fill();c.stroke()
  c.beginPath();c.moveTo(46,-6);c.lineTo(48,-18);c.quadraticCurveTo(52,-24,60,-20);c.lineTo(58,-8);c.lineTo(68,-6);c.lineTo(70,8);c.lineTo(58,10);c.lineTo(58,22);c.quadraticCurveTo(52,24,48,18);c.lineTo(46,6);c.closePath();c.fill();c.stroke()
  c.restore()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx,hy,13,12,a,0,T);c.fill();c.stroke()
  if(i<3){const q=i/3;c.fillStyle=SP;c.lineWidth=4
    c.beginPath();for(let k=0;k<16;k++){const r=k%2?10:28*(1-q*.5),b=k*PI/8;c.lineTo(wx-6+cos(b)*r,wy-4+sin(b)*r)}c.closePath();if(i<2)c.fill(),c.stroke()
    for(const b of[-2.4,-1.8,-1.2,-.6,2.5]){const r=30+24*q,x=wx-6+cos(b)*r,y=wy-4+sin(b)*r;for(const[w,k]of[[9,'#111'],[4,SP]])c.lineWidth=w,c.strokeStyle=k,c.beginPath(),c.moveTo(x,y),c.lineTo(x+cos(b)*12,y+sin(b)*12),c.stroke()}
    c.strokeStyle='#111'}
}
