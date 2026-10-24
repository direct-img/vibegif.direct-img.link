// blue-haired girl in a hard hat and overalls straining with gritted teeth to shove a long heavy progress bar along the ground, its striped fill crawling, sweat flying
const{sin,cos,PI,min,max,round}=Math,T=2*PI
export const frames=12,delay=90
const SKIN='#ffe3d1',HAIR='#5c7cfa',HD='#3b5bdb',HL='#dbe4ff',HAT='#ffd43b',HTD='#f59f00',OV='#ff922b',OD='#e8590c',SHOE='#845ef7',BLK='#fff',FILL='#69db7c',FD='#2f9e44',BL='#ffa8a8',SW='#a5d8ff'
const dbl=(c,w,col,pts)=>{for(const[lw,s]of[[w,'#111'],[w-9,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();c.moveTo(...pts[0]);for(const p of pts.slice(1))c.lineTo(...p);c.stroke()}c.strokeStyle='#111'}
export default(c,t,i)=>{
  const j=i%2
  for(const[w,st]of[[7,'#111'],[2.5,'#fff']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(8,242),c.lineTo(248,242),c.stroke()
  c.strokeStyle='#111'
  c.lineWidth=6;c.fillStyle='#ced4da';c.beginPath();c.roundRect(92,186,154,52,26);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(92,178,154,52,26);c.fill();c.stroke()
  c.save();c.beginPath();c.roundRect(104,190,130,28,14);c.clip();c.fillStyle='#e9ecef';c.fillRect(0,0,256,256);c.fillStyle=FILL;c.fillRect(100,186,82,36)
  c.fillStyle=FD;const so=18*((t*2)%1);for(let k=-1;k<6;k++)c.beginPath(),c.moveTo(86+k*18+so,220),c.lineTo(96+k*18+so,220),c.lineTo(112+k*18+so,188),c.lineTo(102+k*18+so,188),c.closePath(),c.fill()
  c.fillStyle='#e9ecef';c.fillRect(182,186,60,36);c.restore()
  c.lineWidth=4.5;c.beginPath();c.moveTo(182,191);c.lineTo(182,217);c.stroke();c.beginPath();c.roundRect(104,190,130,28,14);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(118,196);c.lineTo(150,196);c.stroke()
  for(const[l,s]of[[7,'#111'],[2.5,'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();for(const k of[0,1,2])c.moveTo(214+k*12,170-k*3),c.lineTo(220+k*12,154-k*3);c.stroke()}
  c.strokeStyle='#111'
  const sh=[80,164],hip=[48,198]
  dbl(c,20,SKIN,[hip,[34,216],[24,232]]);c.fillStyle=SHOE;c.lineWidth=5;c.beginPath();c.ellipse(22,236,12,7,-.2,0,T);c.fill();c.stroke()
  dbl(c,19,'#fff',[[sh[0]-2,sh[1]+4],[86,190],[96,200]]);c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(98,199,7,10,0,0,T);c.fill();c.stroke()
  c.save();c.translate(...hip);c.rotate(.75);c.lineWidth=6;c.fillStyle=OV;c.beginPath();c.roundRect(-18,-50,36,58,12);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(-14,-48);c.lineTo(14,-48);c.lineTo(9,-34);c.lineTo(-9,-34);c.closePath();c.fill();c.stroke()
  c.fillStyle=OD;c.lineWidth=4;c.beginPath();c.roundRect(-8,-26,16,12,3);c.fill();c.stroke();c.restore()
  dbl(c,22,OV,[hip,[76,212],[70,232]]);c.fillStyle=SHOE;c.lineWidth=5;c.beginPath();c.ellipse(78,236,13,7,0,0,T);c.fill();c.stroke()
  c.save();c.translate(94,104);c.rotate(.12);c.scale(.9,.9)
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(-40,-30);c.bezierCurveTo(-64,-40,-82,-20,-86,6+3*j);c.quadraticCurveTo(-72,0,-66,6);c.quadraticCurveTo(-76,20,-72,34+3*j);c.quadraticCurveTo(-60,16,-44,6);c.closePath();c.fill();c.stroke()
  c.fillStyle=HD;c.beginPath();c.moveTo(10,-62);c.bezierCurveTo(-40,-66,-62,-40,-58,0);c.quadraticCurveTo(-54,40,-30,52);c.lineTo(20,40);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(-42,-6);c.bezierCurveTo(-42,40,-4,60,22,60);c.bezierCurveTo(44,58,58,30,58,-6);c.bezierCurveTo(58,-60,-42,-60,-42,-6);c.fill();c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(-6,0);c.lineTo(12,10);c.lineTo(-6,20);c.moveTo(50,2);c.lineTo(34,11);c.lineTo(50,20);c.stroke()
  c.fillStyle=BL;c.beginPath();c.ellipse(-18,32,11,5.5,0,0,T);c.fill()
  c.lineWidth=2.5;for(const k of[-5,0,5])c.beginPath(),c.moveTo(-18+k-2,35),c.lineTo(-18+k+2,29),c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(10,30,34,16,6);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(11,38);c.lineTo(43,38);for(const x of[19,27,35])c.moveTo(x,31),c.lineTo(x,45);c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(-46,12)
  c.bezierCurveTo(-56,-40,-26,-62,10,-62);c.bezierCurveTo(46,-62,68,-40,62,-8)
  c.lineTo(54,-12);c.lineTo(50,-4);c.lineTo(40,-16);c.lineTo(32,-6);c.lineTo(22,-18);c.lineTo(14,-8);c.lineTo(4,-20);c.lineTo(-6,-8)
  c.lineTo(-16,-20);c.lineTo(-24,-6);c.lineTo(-32,-14);c.lineTo(-38,4);c.closePath();c.fill();c.stroke()
  c.fillStyle=HAT;c.beginPath();c.moveTo(-54,-22);c.bezierCurveTo(-56,-86,70,-90,66,-22);c.closePath();c.fill();c.stroke()
  c.fillStyle=HTD;c.beginPath();c.roundRect(-60,-30,138,13,6);c.fill();c.stroke()
  c.beginPath();c.moveTo(0,-74);c.quadraticCurveTo(6,-50,4,-30);c.lineTo(18,-30);c.quadraticCurveTo(20,-50,14,-76);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(4,-30,40,PI*1.18,PI*1.36);c.stroke();c.strokeStyle='#111'
  c.restore()
  dbl(c,20,'#fff',[[sh[0]+2,sh[1]+4],[90,206],[96,218]]);c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(98,218,7,10,0,0,T);c.fill();c.stroke()
  for(const o of[0,.5]){const p=(t*2+o)%1,x=30-18*p,y=62-24*p+40*p*p,sc=1-p*.4;c.fillStyle=SW;c.lineWidth=4;c.save();c.translate(x,y);c.rotate(-1.1+p);c.scale(sc,sc);c.beginPath();c.moveTo(0,-11);c.quadraticCurveTo(9,2,0,7);c.quadraticCurveTo(-9,2,0,-11);c.fill();c.stroke();c.restore()}
  for(const o of[0,.5]){const p=(t*2+o)%1,x=18+20*(1-p),r=3+7*p;c.fillStyle='#fff';c.lineWidth=4.5;c.beginPath();c.arc(x,226-6*p,r,0,T);c.fill();c.stroke()}
}
