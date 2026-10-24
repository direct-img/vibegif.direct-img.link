// side profile of a blank-staring head shown in cross-section, and up top there's nothing but empty desert with a tumbleweed bouncing through on the wind
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=24,delay=Array(24).fill(70),rim=4
const SK='#ffd8b5',SKD='#e8a27a',SKY='#fff1d0',SAND='#f2c879',SD='#cf9440',TW='#a5692c',CA='#69db7c',FL=118
const head=c=>{c.beginPath();c.moveTo(84,256);c.lineTo(86,206);c.bezierCurveTo(36,186,22,104,52,62);c.bezierCurveTo(86,14,176,12,202,64);c.bezierCurveTo(214,90,214,112,208,128);c.lineTo(228,158);c.quadraticCurveTo(224,164,210,166);c.quadraticCurveTo(216,174,211,180);c.quadraticCurveTo(217,188,209,194);c.quadraticCurveTo(208,210,194,214);c.quadraticCurveTo(178,220,162,218);c.lineTo(160,256)}
export default(c,t)=>{
  c.fillStyle=SK;head(c);c.fill()
  c.save();head(c);c.clip()
  // inside the skull: sky, sun, dunes, cactus
  c.fillStyle=SKY;c.fillRect(0,0,256,FL)
  c.fillStyle='#ffe066';c.lineWidth=4;c.beginPath();c.arc(168,58,13,0,T);c.fill()
  c.fillStyle=SAND;c.beginPath();c.moveTo(0,104);c.quadraticCurveTo(70,88,120,100);c.quadraticCurveTo(170,110,256,94);c.lineTo(256,FL);c.lineTo(0,FL);c.fill();c.stroke()
  c.lineWidth=3;c.strokeStyle=SD;for(const[x,y]of[[70,108],[132,110],[176,104]])c.beginPath(),c.moveTo(x,y),c.lineTo(x+10,y),c.stroke()
  c.strokeStyle='#111';c.fillStyle=CA;c.lineWidth=4;c.beginPath();c.roundRect(64,64,11,34,5.5);c.fill();c.stroke()
  for(const[a,b,d]of[[64,82,-1],[75,76,1]])c.beginPath(),c.moveTo(a,b),c.quadraticCurveTo(a+d*10,b,a+d*10,b-10),c.stroke()
  // wind streaks
  c.lineWidth=3;c.globalAlpha=.55;for(let k=0;k<4;k++){const x=((t+k*.31)%1)*220+10,y=44+k*14;c.beginPath();c.moveTo(x,y);c.lineTo(x+18+k*5,y);c.stroke()}c.globalAlpha=1
  // tumbleweed, comes in from behind the skull wall and leaves through the forehead so the loop jump is hidden
  const x=22+t*204,h=abs(sin(2*T*t)),r=20,y=FL-6-r-h*28,a=x/r*.9
  c.fillStyle=SD;c.globalAlpha=.45;c.beginPath();c.ellipse(x,FL-5,r*(1-h*.5),3,0,0,T);c.fill();c.globalAlpha=1
  c.save();c.translate(x,y);c.rotate(a);c.fillStyle='#ecd09a';c.beginPath();c.arc(0,0,r-2,0,T);c.fill();c.strokeStyle=TW;c.lineWidth=4
  for(let k=0;k<6;k++){c.beginPath();c.ellipse(sin(k*2.1)*3,cos(k*1.7)*3,r-3,(r-3)*(.3+.13*(k%3)),k*PI/6,0,T);c.stroke()}
  c.strokeStyle='#5c3a17';c.lineWidth=2.5;for(let k=0;k<5;k++){const b=k*1.26;c.beginPath();c.moveTo(cos(b)*r,sin(b)*r);c.lineTo(cos(b)*(r+4),sin(b)*(r+4));c.stroke()}
  c.restore()
  // skull wall: thick skin band hugging the outline, with the cut floor
  for(const[w,s]of[[30,'#111'],[24,SKD],[14,SK]])c.lineWidth=w,c.strokeStyle=s,head(c),c.stroke()
  c.fillStyle=SK;c.fillRect(0,FL,256,140);c.fillStyle=SKD;c.fillRect(0,FL,256,5);c.lineWidth=3.5;c.strokeStyle='#111';c.beginPath();c.moveTo(0,FL);c.lineTo(256,FL);c.stroke()
  c.restore()
  c.lineWidth=7;head(c);c.stroke()
  // ear, blank stare, flat mouth
  c.fillStyle=SK;c.lineWidth=6;c.beginPath();c.ellipse(106,176,13,18,.15,0,T);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.arc(108,176,6,-1.6,1.4);c.stroke()
  const bl=t>.82&&t<.88
  c.fillStyle='#111';if(bl){c.beginPath();c.moveTo(182,140);c.lineTo(196,140);c.stroke()}else{c.beginPath();c.arc(190,140,5.5,0,T);c.fill()}
  c.beginPath();c.moveTo(178,131);c.lineTo(200,132);c.stroke()
  c.beginPath();c.moveTo(198,187);c.lineTo(210,187);c.stroke()
}
