// extreme close-up panel of an unblinking stare: hatched shadow under her ink bangs, big eyes with tiny glinting pupils, focus lines, a sweat bead sliding, then one slow blink
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=20,delay=90,rim=4
const F=[...Array(60)].map((_,k)=>[k/60*T+.035*sin(k*12.9),[124,140,132,146][k%4]])
const panel=c=>{c.beginPath();c.roundRect(14,58,228,140,10)}
const hatch=(c,y0,y1,s=4.5)=>{c.beginPath();for(let x=-40;x<300;x+=s)c.moveTo(x,y1),c.lineTo(x+(y1-y0)*.6,y0);c.stroke()}
// eye pieces in local coords, scaled by d (mirror) and o (how open) about the lower lid
const K=1.35,at=(c,x,y,d,o,f)=>{c.save();c.translate(x,y+26*K);c.scale(d*K,max(o,.04)*K);c.translate(0,-26);c.beginPath();f();c.setTransform(1,0,0,1,0,0)}
export default(c,t)=>{
  const o=t>.7&&t<.92?1-sin(PI*(t-.7)/.22):1,g=3.5+3*(.5+.5*sin(2*T*t))
  c.fillStyle='#111'
  for(const[a,r]of F){const w=3.2/200;c.beginPath();c.moveTo(128+cos(a-w)*200,128+sin(a-w)*200);c.lineTo(128+cos(a)*r,128+sin(a)*r);c.lineTo(128+cos(a+w)*200,128+sin(a+w)*200);c.closePath();c.fill()}
  c.lineWidth=7;panel(c);c.fillStyle='#fff';c.fill()
  c.save();panel(c);c.clip()
  c.lineWidth=1.8;hatch(c,96,122)
  for(const[x,d]of[[80,-1],[176,1]]){const y=144
    at(c,x,y,d,o,()=>c.ellipse(0,0,25,28,0,0,T));c.fillStyle='#fff';c.fill();c.clip()
    c.fillStyle='#111';c.beginPath();c.ellipse(x+d*3,y+5,16,23,0,0,T);c.fill()
    c.strokeStyle='#fff';c.lineWidth=1.5;c.beginPath();c.ellipse(x+d*3,y+5,11,16,0,0,T);c.stroke()
    c.fillStyle='#111';c.beginPath();c.arc(x+d*3,y+5,7,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();for(let k=0;k<8;k++){const r=k%2?g*.3:g,a=k*PI/4;c.lineTo(x+d*3-3+cos(a)*r,y+1+sin(a)*r)}c.closePath();c.fill()
    c.strokeStyle='#111';c.lineWidth=1.6;hatch(c,y-40,y-16,4)
    c.restore()
    at(c,x,y,d,o,()=>{c.moveTo(-30,-2);c.bezierCurveTo(-24,-30,16,-36,32,-12)});c.lineWidth=8;c.stroke();c.restore()
    at(c,x,y,d,o,()=>{c.moveTo(30,-14);c.lineTo(40,-24);c.moveTo(31,-9);c.lineTo(41,-12)});c.lineWidth=4.5;c.stroke();c.restore()
    c.lineWidth=2.5;c.beginPath();c.moveTo(x-d*16,y+39);c.quadraticCurveTo(x+d*8,y+43,x+d*27,y+32);c.stroke()}
  c.lineWidth=2.5;c.beginPath();c.moveTo(130,180);c.lineTo(127,188);c.stroke()
  c.fillStyle='#111'
  for(const d of[-1,1]){c.beginPath();c.moveTo(128+d*114,58);c.lineTo(128+d*114,198);c.lineTo(128+d*108,198);c.quadraticCurveTo(128+d*104,140,128+d*92,104);c.closePath();c.fill()}
  c.beginPath();c.moveTo(14,58);c.lineTo(242,58);c.lineTo(242,96);c.lineTo(228,90);c.lineTo(222,108);c.lineTo(206,86);c.lineTo(196,100);c.lineTo(178,84);c.lineTo(166,96);c.lineTo(150,78);c.lineTo(136,92);c.lineTo(122,76);c.lineTo(110,94);c.lineTo(94,80);c.lineTo(84,98);c.lineTo(66,84);c.lineTo(56,104);c.lineTo(42,88);c.lineTo(32,100);c.lineTo(14,94);c.closePath();c.fill()
  c.strokeStyle='#fff';c.lineWidth=4;for(const[x0,y0,x1,y1]of[[60,64,70,76],[146,62,154,72],[198,64,206,76]])c.beginPath(),c.moveTo(x0,y0),c.lineTo(x1,y1),c.stroke()
  for(const d of[-1,1])for(const[l,s]of[[8,'#fff'],[3.5,'#111']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(128+d*16,106),c.lineTo(128+d*62,98),c.stroke()
  const u=min(1,t/.75),ds=t<.08?t/.08:t>.75?max(0,1-(t-.75)/.15):1
  if(ds>.05){c.save();c.translate(226,112+48*u);c.scale(ds,ds);c.fillStyle='#fff';c.strokeStyle='#111';c.lineWidth=3.5;c.beginPath();c.moveTo(0,-15);c.quadraticCurveTo(10,-2,9,5);c.arc(0,5,9,0,PI);c.quadraticCurveTo(-10,-2,0,-15);c.fill();c.stroke();c.lineWidth=2;c.beginPath();c.arc(0,5,5,PI*.7,PI*1.05);c.stroke();c.restore()}
  c.restore()
  c.strokeStyle='#111';c.lineWidth=7;panel(c);c.stroke()
}
