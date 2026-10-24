// serene duck gliding along with its eyes closed humming a little tune, while under the water its legs are paddling like crazy
const{sin,cos,PI}=Math,T=2*PI
export const frames=12,delay=Array(12).fill(70),rim=4
const W='#4dabf7',WD='#1c7ed6',WL='#a5d8ff',DU='#fff',DS='#dee2e6',BK='#ff922b',LG='#fd7e14',SY=126
const leg=(c,x,y,a,col)=>{
  const kx=x+cos(a)*20,ky=y+16+sin(a)*12,fx=kx+cos(a+1)*20,fy=ky+18+sin(a+1)*8
  c.strokeStyle='#111';c.lineWidth=12;c.beginPath();c.moveTo(x,y);c.lineTo(kx,ky);c.lineTo(fx,fy);c.stroke()
  c.strokeStyle=col;c.lineWidth=6;c.stroke()
  c.fillStyle=col;c.strokeStyle='#111';c.lineWidth=4;c.beginPath();c.moveTo(fx,fy);c.lineTo(fx-24,fy+2+cos(a)*8);c.quadraticCurveTo(fx-20,fy+14,fx-8,fy+14);c.closePath();c.fill();c.stroke()
}
const body=c=>{c.beginPath();c.moveTo(48,96);c.quadraticCurveTo(70,104,90,104);c.bezierCurveTo(120,94,170,96,186,118);c.bezierCurveTo(196,140,170,156,128,156);c.bezierCurveTo(80,156,56,140,48,96)}
export default(c,t,i)=>{
  const g=4*sin(T*t),bob=Math.round(2*sin(2*T*t))
  // water block
  c.fillStyle=W;c.beginPath();c.moveTo(10,SY);for(let x=10;x<=246;x+=6)c.lineTo(x,SY+3*sin(x/14-T*t));c.lineTo(246,226);c.quadraticCurveTo(246,244,228,244);c.lineTo(28,244);c.quadraticCurveTo(10,244,10,226);c.closePath();c.fill();c.stroke()
  // bubbles from all the effort
  c.save();c.clip();c.fillStyle=WL;c.strokeStyle=WD;c.lineWidth=3
  for(let k=0;k<5;k++){const p=(t*2+k/5)%1,x=60+((k*53)%130),y=238-p*96,r=3+(k%3)*2;c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke()}
  // whirl of motion where the legs are going round
  c.strokeStyle=WL;c.lineWidth=5;for(const x of[112,140])for(let k=0;k<2;k++){const a=-T*t*3+k*PI;c.beginPath();c.arc(x-4,176,34-k*8,a,a+1.6);c.stroke()}
  c.restore();c.strokeStyle='#111'
  // frantic legs, pale ghost poses for blur
  const a=-T*t*3
  for(const[x,o]of[[112,0],[140,PI]]){leg(c,x,146+bob,a+o+1.2,'#ffd8a8');leg(c,x,146+bob,a+o+.6,'#ffa94d');leg(c,x,146+bob,a+o,LG)}
  // effort marks
  c.strokeStyle=WD;c.lineWidth=4;for(const[x,y,d]of[[62,170,-1],[58,192,-1],[192,170,1],[196,192,1]])c.beginPath(),c.moveTo(x+d*(i%2)*3,y),c.lineTo(x+d*(14+(i%2)*3),y-4*(y<180?1:-1)),c.stroke()
  c.strokeStyle='#111'
  // duck body, tinted below the surface
  c.save();c.translate(0,bob);c.fillStyle=DU;c.lineWidth=7;body(c);c.fill();c.stroke()
  c.save();body(c);c.clip();c.fillStyle=W;c.globalAlpha=.45;c.fillRect(0,SY-bob,256,80);c.globalAlpha=1;c.restore()
  c.fillStyle=DS;c.lineWidth=5;c.beginPath();c.moveTo(96,116);c.quadraticCurveTo(126,108,150,118);c.quadraticCurveTo(128,134,100,126);c.closePath();c.fill();c.stroke()
  // neck and head
  c.fillStyle=DU;c.lineWidth=7;c.beginPath();c.moveTo(150,110);c.quadraticCurveTo(160,86,158,72);c.arc(176,64,24,PI*.85,PI*.42,false);c.quadraticCurveTo(184,100,184,116);c.closePath();c.fill();c.stroke()
  c.fillStyle=DU;c.beginPath();c.arc(176,64,24,0,T);c.fill()
  c.fillStyle=BK;c.lineWidth=6;c.beginPath();c.moveTo(196,58);c.quadraticCurveTo(226,58,228,68);c.quadraticCurveTo(222,78,196,74);c.closePath();c.fill();c.stroke()
  c.beginPath();c.arc(176,64,24,-PI*.9,PI*.12);c.stroke()
  // closed content eye and a little smile line on the beak
  c.lineWidth=4;c.beginPath();c.arc(180,60,6,PI*1.1,PI*1.9);c.stroke()
  c.fillStyle='#ffc9c9';c.beginPath();c.ellipse(182,76,6,3.5,0,0,T);c.fill()
  c.restore()
  // calm ripples at the waterline
  c.strokeStyle=WL;c.lineWidth=4;for(const[x,d]of[[34,-1],[206,1]])c.beginPath(),c.moveTo(x-10-d*g,SY+6),c.lineTo(x+10-d*g,SY+6),c.stroke()
  // floating note
  const nx=206+6*sin(T*t),ny=40-t*16,ns=sin(PI*t)
  c.save();c.translate(nx,ny);c.scale(ns,ns);c.fillStyle='#111';c.lineWidth=3.5;c.beginPath();c.ellipse(0,0,6,4.5,-.4,0,T);c.fill();c.beginPath();c.moveTo(5,-1);c.lineTo(5,-22);c.quadraticCurveTo(9,-14,15,-12);c.stroke();c.restore()
}
