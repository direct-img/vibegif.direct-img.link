// teal braided girl in a yellow hard hat and safety vest hammering a nail into a striped under construction sign, tongue out, sparks on every bonk
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=75
const SKIN='#ffe3d1',HAIR='#38d9a9',EYE='#20c997',ED='#087f5b',BL='#ffa8a8',HAT='#ffd43b',HTD='#f59f00',VS='#ff922b',SH='#74c0fc',RF='#e9ecef',WD='#c98a52',ST='#ff922b',MT='#adb5bd',TG='#ff8fab',SP='#ffd43b'
const A=[-.45,-.6,-.95,-1.35,-1.65,-1.75,-1.1,-.45]
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,16,0,0,T);c.fill()
  c.save();c.clip();c.beginPath();c.ellipse(x+5,y+3,11.5,14,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+5,y-6,13,8,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+6,y+4,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+1,y-2,4.5,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-4);c.quadraticCurveTo(x,y-14,x+16,y-4);c.moveTo(x+d*15,y-5);c.lineTo(x+d*21,y-10);c.stroke()
}
export default(c,t,i)=>{
  const k=i%8,a=A[k],hit=k==7||k==0,jx=hit?3:0
  // sign on its post
  c.save();c.translate(jx,0)
  c.lineWidth=6;c.fillStyle=WD;c.beginPath();c.rect(190,140,18,110);c.fill();c.stroke()
  c.save();c.translate(198,104);c.rotate(hit?.04:0)
  const bd=()=>{c.beginPath();c.roundRect(-46,-40,92,82,6)}
  c.fillStyle='#fff';bd();c.fill();c.save();bd();c.clip();c.fillStyle=ST;for(let x=-90;x<70;x+=30)c.beginPath(),c.moveTo(x,-50),c.lineTo(x+16,-50),c.lineTo(x+56,40),c.lineTo(x+40,40),c.closePath(),c.fill();c.restore()
  c.lineWidth=6;bd();c.stroke()
  c.fillStyle=MT;c.lineWidth=3.5;for(const[x,y]of[[-34,-28],[34,-28],[34,30],[-14,28]])c.beginPath(),c.arc(x,y,4.5,0,T),c.fill(),c.stroke()
  c.restore();c.restore()
  // girl
  c.save();c.translate(74,170);c.scale(.72,.72);c.translate(-128,-186)
  c.lineWidth=8;c.fillStyle=HAIR;for(const d of[-1,1])for(let j=4;j>=0;j--)c.beginPath(),c.ellipse(128+d*(64+j*1.5),156+j*20,14-j*.8,12,d*.4*(j%2?1:-1),0,T),c.fill(),c.stroke()
  c.fillStyle=SH;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(54,198,44,300);c.lineTo(212,300);c.quadraticCurveTo(202,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=VS;c.beginPath();c.moveTo(94,194);c.quadraticCurveTo(58,204,52,300);c.lineTo(112,300);c.lineTo(112,232);c.lineTo(104,198);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(162,194);c.quadraticCurveTo(198,204,204,300);c.lineTo(144,300);c.lineTo(144,232);c.lineTo(152,198);c.closePath();c.fill();c.stroke()
  c.strokeStyle=RF;c.lineWidth=9;c.beginPath();c.moveTo(56,262);c.lineTo(110,262);c.moveTo(146,262);c.lineTo(200,262);c.stroke();c.strokeStyle='#111'
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,194);c.quadraticCurveTo(128,204,140,194);c.lineTo(140,166);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.moveTo(140,166);c.lineTo(140,192);c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(hit){c.lineWidth=7;c.beginPath();c.moveTo(92,130);c.lineTo(114,141);c.lineTo(92,151);c.moveTo(164,130);c.lineTo(142,141);c.lineTo(164,151);c.stroke()}
  else eye(c,103,140,-1),eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,7,0,0,T),c.fill()
  c.lineWidth=3;for(const d of[-1,1])for(const j of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+j-2,165),c.lineTo(128+d*44+j+2,159),c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.quadraticCurveTo(128,176,142,166);c.stroke()
  c.fillStyle=TG;c.lineWidth=4;c.beginPath();c.ellipse(140,174,5,6,-.5,0,T);c.fill();c.stroke()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,154)
  c.bezierCurveTo(52,90,84,60,128,60);c.bezierCurveTo(172,60,204,90,188,154)
  c.quadraticCurveTo(186,120,180,106);c.quadraticCurveTo(170,108,162,98);c.quadraticCurveTo(154,110,142,110);c.quadraticCurveTo(138,100,130,94)
  c.quadraticCurveTo(122,106,110,110);c.quadraticCurveTo(104,100,96,96);c.quadraticCurveTo(88,108,78,106);c.quadraticCurveTo(70,126,68,154);c.closePath();c.fill();c.stroke()
  // hard hat
  c.fillStyle=HAT;c.beginPath();c.moveTo(60,86);c.bezierCurveTo(56,20,200,20,196,86);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(44,90);c.quadraticCurveTo(128,72,212,90);c.quadraticCurveTo(216,100,206,100);c.quadraticCurveTo(128,86,50,100);c.quadraticCurveTo(40,100,44,90);c.fill();c.stroke()
  c.fillStyle=HTD;c.beginPath();c.moveTo(116,34);c.quadraticCurveTo(128,28,140,34);c.lineTo(142,80);c.quadraticCurveTo(128,78,114,80);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=7;c.beginPath();c.arc(128,90,58,PI*1.2,PI*1.34);c.stroke();c.strokeStyle='#111'
  c.restore()
  // arm and hammer
  const hx=hit?138:134,hy=hit?166:162,ex=hx+54*cos(a),ey=hy+54*sin(a)
  ds(c,20,11,SH,()=>{c.moveTo(106,196);c.quadraticCurveTo(128,204,hx,hy+4)})
  ds(c,12,6,WD,()=>{c.moveTo(hx-10*cos(a),hy-10*sin(a));c.lineTo(ex,ey)})
  c.save();c.translate(ex,ey);c.rotate(a);c.fillStyle='#868e96';c.lineWidth=5;c.beginPath();c.roundRect(-10,-22,20,38,4);c.fill();c.stroke();c.fillStyle='#ced4da';c.beginPath();c.rect(-10,10,20,6);c.fill();c.stroke();c.restore()
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx,hy+2,11,10,0,0,T);c.fill();c.stroke()
  if(k==6)for(const j of[0,1])ds(c,7,3,'#fff',()=>{c.arc(hx,hy,66+j*11,-1.7+j*.1,-.9)})
  if(hit){const s=k==7?1:.7;c.fillStyle=SP;c.lineWidth=4;c.beginPath();for(let j=0;j<16;j++){const r=j%2?8*s:20*s,b=j*PI/8;c.lineTo(174+cos(b)*r,124+sin(b)*r)}c.closePath();c.fill();c.stroke()
    for(const[d,e]of[[-1.6,1],[-.6,1],[.5,1]])ds(c,7,3,'#fff',()=>{c.moveTo(174+cos(d)*24*s,124+sin(d)*24*s);c.lineTo(174+cos(d)*34*s,124+sin(d)*34*s)})}
}
