// two-tone popsicle slowly melting, drips swelling on its bottom edge and falling into a little puddle
// the body and its drips are stroked wide first and filled after, so they read as one outline
const{sin,PI,min}=Math,T=2*PI
export const frames=24,delay=70
const PK='#f783ac',YE='#ffd43b',STK='#e0a96d',BL='#ffa8a8',SW='#a5d8ff',DX=[98,154]
const body=c=>{c.beginPath();c.moveTo(178,170);c.lineTo(178,64);c.bezierCurveTo(178,20,78,20,78,64);c.lineTo(78,170);for(let k=0;k<5;k++)c.quadraticCurveTo(88+k*20,k%2?166:180,98+k*20,172);c.closePath()}
export default(c,t)=>{
  const dr=DX.map((x,k)=>{const p=(t+k*.5)%1,g=min(1,p/.65);return{x,p,L:p<.65?6+30*g:6,r:p<.65?5+4.5*g:5}})
  const tongue=({x,L,r})=>{c.beginPath();c.moveTo(x-12,164);c.quadraticCurveTo(x-7,172+L*.5,x-r,172+L);c.arc(x,172+L,r,PI,0,true);c.quadraticCurveTo(x+7,172+L*.5,x+12,164);c.closePath()}
  c.fillStyle=YE;c.beginPath();c.ellipse(128,230,78,12,0,0,T);c.fill();c.stroke()
  c.lineWidth=4;for(const d of dr)if(d.p>.8){const q=(d.p-.8)/.2;c.beginPath();c.ellipse(d.x,230,6+20*q,2+4*q,0,0,T);c.stroke()}
  c.lineWidth=7
  c.fillStyle=STK;c.beginPath();c.roundRect(114,150,28,82,[0,0,12,12]);c.fill();c.stroke()
  c.lineWidth=14;body(c);c.stroke();for(const d of dr)tongue(d),c.stroke()
  c.save();body(c);c.clip();c.fillStyle=YE;c.fillRect(70,20,116,170);c.fillStyle=PK;c.beginPath();c.moveTo(70,20);c.lineTo(186,20);for(let x=186;x>=70;x-=4)c.lineTo(x,104+6*sin(x/11));c.closePath();c.fill()
  c.strokeStyle='#fff';c.lineWidth=8;c.beginPath();c.moveTo(94,56);c.lineTo(94,86);c.stroke();c.restore()
  c.fillStyle=YE;for(const d of dr)tongue(d),c.fill()
  c.lineWidth=7;c.strokeStyle='#111'
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*22,128,6,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*22-2,126,2.2,0,T),c.fill()
  c.lineWidth=4.5;c.beginPath();c.moveTo(116,144);for(let k=1;k<=4;k++)c.lineTo(116+k*6,k%2?140:144);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*38,142,8,4.5,0,0,T),c.fill()
  c.fillStyle=SW;c.lineWidth=4;c.beginPath();c.moveTo(164,74);c.quadraticCurveTo(172,90,164,94);c.quadraticCurveTo(156,90,164,74);c.fill();c.stroke()
  c.lineWidth=6
  for(const d of dr)if(d.p>=.65&&d.p<.8){const y=200+(d.p-.65)/.15*26;c.fillStyle=YE;c.beginPath();c.moveTo(d.x,y-12);c.quadraticCurveTo(d.x+7,y-2,d.x+6,y+2);c.arc(d.x,y+2,6,0,PI);c.quadraticCurveTo(d.x-7,y-2,d.x,y-12);c.fill();c.stroke()}
}
