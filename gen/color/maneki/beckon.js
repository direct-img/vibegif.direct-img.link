// maneki-neko lucky cat beckoning with its raised paw, hugging a gold koban coin, collar bell swinging
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=80
const W='#fff',OR='#ffa94d',DK='#495057',PK='#faa2c1',CO='#ff6b6b',G='#ffd43b',GD='#fab005',CU='#f783ac',CUD='#e64980'
export default(c,t)=>{
  // the paw curls down twice per loop: its height squashes by cos of the curl and the toe beans tip out of view
  const cu=.5-.5*cos(2*T*t),k=cos(cu*1.2),bell=.35*sin(2*T*t-.8)
  c.fillStyle=CU;c.beginPath();c.roundRect(34,206,188,36,16);c.fill();c.stroke()
  c.fillStyle=CUD;for(const x of[44,212])c.beginPath(),c.arc(x,238,7,0,T),c.fill(),c.stroke()
  c.fillStyle=W;c.beginPath();c.ellipse(128,176,64,50,0,0,T);c.fill();c.stroke()
  c.fillStyle=OR;c.save();c.beginPath();c.ellipse(128,176,64,50,0,0,T);c.clip();c.beginPath();c.ellipse(78,206,30,26,0,0,T);c.fill();c.restore()
  c.beginPath();c.ellipse(128,176,64,50,0,0,T);c.stroke()
  c.fillStyle=W;for(const x of[100,156])c.beginPath(),c.ellipse(x,220,18,10,0,0,T),c.fill(),c.stroke()
  c.fillStyle=W;c.beginPath();c.moveTo(78,74);c.lineTo(84,30);c.lineTo(114,58);c.closePath();c.fill();c.stroke()
  c.fillStyle=DK;c.beginPath();c.moveTo(142,58);c.lineTo(172,30);c.lineTo(178,74);c.closePath();c.fill();c.stroke()
  c.fillStyle=PK;c.lineWidth=4;c.beginPath();c.moveTo(88,60);c.lineTo(89,42);c.lineTo(104,56);c.closePath();c.fill()
  c.lineWidth=7;c.fillStyle=W;c.beginPath();c.ellipse(128,100,64,52,0,0,T);c.fill()
  c.save();c.clip();c.fillStyle=OR;c.beginPath();c.ellipse(82,66,34,26,.3,0,T);c.fill();c.fillStyle=DK;c.beginPath();c.ellipse(170,60,22,16,-.3,0,T);c.fill();c.restore()
  c.beginPath();c.ellipse(128,100,64,52,0,0,T);c.stroke()
  c.lineWidth=5;for(const x of[104,152])c.beginPath(),c.arc(x,104,10,PI*1.15,PI*1.85),c.stroke()
  c.fillStyle=PK;for(const x of[90,166])c.beginPath(),c.ellipse(x,118,9,5,0,0,T),c.fill()
  c.fillStyle=CUD;c.lineWidth=3;c.beginPath();c.moveTo(123,112);c.lineTo(133,112);c.lineTo(128,118);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.arc(122,120,6,.1*PI,.9*PI);c.arc(134,120,6,.1*PI,.9*PI);c.stroke()
  for(const d of[-1,1])for(const[dy,ang]of[[-4,-.12],[6,.12]])for(const[w,s]of[[7,'#111'],[2,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(128+d*48,116+dy),c.lineTo(128+d*78,116+dy+ang*30),c.stroke()
  c.strokeStyle='#111'
  c.lineWidth=6;c.fillStyle=CO;c.beginPath();c.roundRect(84,144,88,14,7);c.fill();c.stroke()
  c.save();c.translate(128,156);c.rotate(bell)
  c.fillStyle=G;c.lineWidth=5;c.beginPath();c.arc(0,12,11,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(-10,10);c.lineTo(10,10);c.moveTo(0,14);c.lineTo(0,22);c.stroke();c.beginPath();c.arc(0,16,2.5,0,T);c.fillStyle='#111';c.fill()
  c.restore()
  c.lineWidth=6;c.fillStyle=G;c.beginPath();c.ellipse(96,188,20,30,0,0,T);c.fill();c.stroke()
  c.fillStyle=GD;c.beginPath();c.ellipse(96,188,13,22,0,0,T);c.fill()
  c.lineWidth=3;c.beginPath();for(const y of[176,184,192,200])c.moveTo(88,y),c.lineTo(104,y);c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.arc(96,188,16,PI*1.15,PI*1.45);c.stroke();c.strokeStyle='#111'
  c.lineWidth=6;c.fillStyle=W;c.beginPath();c.ellipse(108,176,14,12,.3,0,T);c.fill();c.stroke()
  for(const[w,s]of[[30,'#111'],[18,W]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(170,166),c.quadraticCurveTo(192,150,194,108),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6
  const py=96-14*k
  c.fillStyle=W;c.beginPath();c.ellipse(194,py+14*(1-k)*.4,18,18*max(.45,k),0,0,T);c.fill();c.stroke()
  if(k>.5){c.fillStyle=PK;c.beginPath();c.ellipse(194,py+4,7,6*k,0,0,T);c.fill();for(const d of[-9,0,9])c.beginPath(),c.ellipse(194+d,py-9*k,3.5,3.5*k,0,0,T),c.fill()}
  else{c.lineWidth=4;c.beginPath();for(const d of[-6,6])c.moveTo(194+d,py+4),c.lineTo(194+d,py+12);c.stroke()}
}
