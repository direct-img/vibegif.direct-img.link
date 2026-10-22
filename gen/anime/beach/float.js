// red-haired girl bobbing on the waves in a striped inner tube, sunglasses on her head, licking a grape popsicle that drips
const{sin,cos,PI,max,min,round}=Math,T=2*PI
export const frames=12,delay=100
const SKIN='#ffe3d1',HAIR='#e599f7',HD='#be4bdb',HL='#f8f0fc',EYE='#339af0',ED='#1864ab',RG='#38d9a9',RGD='#0ca678',TUBE='#ffd43b',WA='#74c0fc',WL='#d0ebff',POP='#9775fa',PL='#d0bfff',BL='#ffa8a8',SG='#495057',Z=.78
const cl=x=>max(0,min(1,x))
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=3;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2.5,0,T);c.fill()
  c.lineWidth=7.5;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const wave=(c,t,y0,a)=>{c.moveTo(14,y0);for(let x=14;x<242;x+=19)c.quadraticCurveTo(x+9.5,y0+a*sin(x*.165-t*T)-6,x+19,y0)}
const ring=(c,lo)=>{c.beginPath();if(lo){c.ellipse(128,186,86,30,0,0,PI);c.ellipse(128,181,46,12,0,PI,0,true)}else{c.ellipse(128,186,86,30,0,0,T);c.ellipse(128,181,46,12,0,0,T,true)}c.closePath()}
export default(c,t)=>{
  const dy=round(3*sin(t*T)),lk=cl((t-.45)/.15)-cl((t-.75)/.15),lick=t>=.6&&t<.75
  c.lineWidth=6;c.fillStyle=WA;c.beginPath();wave(c,t,172,4);c.quadraticCurveTo(254,200,242,228);c.quadraticCurveTo(128,252,14,228);c.quadraticCurveTo(2,200,14,172);c.fill();c.stroke()
  c.save();c.translate(0,dy)
  const tube=lo=>{ring(c,lo);c.fillStyle=TUBE;c.fill();c.save();c.clip();c.fillStyle='#fff';for(let k=0;k<8;k+=2){c.beginPath();c.moveTo(128,186);c.arc(128,186,96,k*PI/4+.2,(k+1)*PI/4+.2);c.fill()}c.restore();ring(c,lo);c.lineWidth=6;c.stroke()}
  tube(0);c.fillStyle=WA;c.beginPath();c.ellipse(128,181,46,12,0,0,T);c.fill();c.stroke()
  c.fillStyle=RG;c.beginPath();c.moveTo(102,152);c.quadraticCurveTo(80,158,78,196);c.lineTo(178,196);c.quadraticCurveTo(176,158,154,152);c.closePath();c.fill();c.stroke()
  c.strokeStyle=RGD;c.lineWidth=4;c.beginPath();c.moveTo(86,172);c.lineTo(170,172);c.stroke();c.strokeStyle='#111'
  c.save();c.translate(128,150);c.scale(Z,Z);c.translate(-128,-186)
  c.lineWidth=7.5;c.fillStyle=HD;c.beginPath();c.moveTo(128,48);c.bezierCurveTo(60,48,58,110,70,160);c.lineTo(186,160);c.bezierCurveTo(198,110,196,48,128,48);c.fill();c.stroke()
  const sw=.1*sin(t*T-1)
  c.save();c.translate(184,70);c.rotate(sw);c.fillStyle=HAIR;c.beginPath();c.moveTo(-6,-10);c.bezierCurveTo(40,-16,50,50,34,96);c.quadraticCurveTo(26,112,16,104);c.quadraticCurveTo(30,50,-4,14);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=4;c.beginPath();c.moveTo(8,0);c.bezierCurveTo(30,10,36,50,28,88);c.stroke();c.strokeStyle='#111';c.restore()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(lick){c.lineWidth=7.5;for(const x of[103,153])c.beginPath(),c.arc(x,146,13,PI*1.15,PI*1.85),c.stroke()}else eye(c,103,140,-1),eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,161,14,7,0,0,T),c.fill()
  c.lineWidth=4.5;if(lick){c.fillStyle='#c92a2a';c.beginPath();c.moveTo(118,164);c.quadraticCurveTo(128,180,138,164);c.closePath();c.fill();c.stroke();c.fillStyle='#ff8fab';c.beginPath();c.ellipse(132,174,7,8,.3,0,T);c.fill();c.stroke()}
  else{c.beginPath();c.arc(128,164,8,.2*PI,.8*PI);c.stroke()}
  c.lineWidth=7.5;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,144)
  c.bezierCurveTo(54,74,88,40,128,40);c.bezierCurveTo(168,40,202,74,186,144)
  c.quadraticCurveTo(182,114,170,100);c.quadraticCurveTo(162,108,156,116);c.quadraticCurveTo(148,98,132,92);c.quadraticCurveTo(126,104,120,112)
  c.quadraticCurveTo(114,98,102,96);c.quadraticCurveTo(96,108,94,116);c.quadraticCurveTo(88,104,82,102);c.quadraticCurveTo(72,118,70,144);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.3,1.42],[1.5,1.58],[1.66,1.74]])c.beginPath(),c.arc(128,104,54,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  c.lineWidth=6;c.beginPath();c.moveTo(80,74);c.quadraticCurveTo(128,52,176,74);c.stroke()
  c.fillStyle=SG;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*24,64,20,15,d*.12,0,T),c.fill(),c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.arc(128+d*24,64,10,PI*1.1,PI*1.5),c.stroke();c.strokeStyle='#111'
  c.restore()
  tube(1)
  const hx=180-36*lk,hy=170-24*lk,px=hx+2,py=hy-24
  for(const[a,b]of[[[96,160],[62,178]],[[160,160],[hx,hy]]])for(const[l,s]of[[24,'#111'],[13,RG]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(...a),c.lineTo(...b),c.stroke()
  c.strokeStyle='#111'
  c.save();c.translate(px,py);c.rotate(-.25*lk)
  for(const[l,s]of[[11,'#111'],[5,'#e8c39e']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(0,4),c.lineTo(0,30),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=POP;c.beginPath();c.moveTo(-11,6);c.lineTo(-11,-22);c.quadraticCurveTo(-11,-32,-2,-32);c.arc(4,-30,6,PI,0,true);c.lineTo(11,-24);c.lineTo(11,6);c.closePath();c.fill();c.stroke()
  c.strokeStyle=PL;c.lineWidth=4;c.beginPath();c.moveTo(-5,-18);c.lineTo(-5,0);c.stroke();c.strokeStyle='#111';c.restore()
  for(const[x,y]of[[62,178],[hx,hy]])c.lineWidth=5,c.fillStyle=SKIN,c.beginPath(),c.ellipse(x,y,10,9,0,0,T),c.fill(),c.stroke()
  c.restore()
  const dp=cl((t-.05)/.35);if(dp>0&&dp<1){const y=170+dy+dp*40;c.fillStyle=POP;c.lineWidth=3;c.beginPath();c.moveTo(192,y-6);c.quadraticCurveTo(197,y+2,192,y+4);c.quadraticCurveTo(187,y+2,192,y-6);c.fill();c.stroke()}
  c.fillStyle=WA;c.lineWidth=6;c.beginPath();wave(c,t+.5,214,3);c.quadraticCurveTo(250,220,242,228);c.quadraticCurveTo(128,252,14,228);c.quadraticCurveTo(6,220,14,214);c.fill();c.stroke()
  c.strokeStyle=WL;c.lineWidth=4;for(const[x,y]of[[50,228],[150,234],[204,226]])c.beginPath(),c.moveTo(x-12+6*sin(t*T),y),c.quadraticCurveTo(x+6*sin(t*T),y-5,x+12+6*sin(t*T),y),c.stroke();c.strokeStyle='#111'
}
