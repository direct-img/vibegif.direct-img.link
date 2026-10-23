// peach-haired girl rolled up in a starry blanket burrito, only her sleepy face peeking out, wobbling side to side with a slow blink and a drifting z
const{sin,cos,PI}=Math,T=2*PI
export const frames=12,delay=110
const SKIN='#ffe3d1',HAIR='#ffcfa8',HD='#f2a26b',HL='#fff0e4',EYE='#51cf66',ED='#2b8a3e',BLK='#91a7ff',BKD='#5c7cfa',LIN='#fcc2d7',SOCK='#fff',SKS='#ff8787',BL='#ffa8a8',MO='#c92a2a',ZC='#d0bfff'
const eye=(c,x,y,d,shut)=>{
  if(shut){c.lineWidth=6;c.beginPath();c.arc(x,y-2,13,PI*.15,PI*.85);c.stroke();return}
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+4,5.5,7.5,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x-4,y+6,3,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(x-19,y+3);c.quadraticCurveTo(x,y-10,x+19,y+3);c.lineTo(x+19,y-24);c.lineTo(x-19,y-24);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y+3);c.quadraticCurveTo(x,y-9,x+16,y+3);c.moveTo(x+d*15,y+2);c.lineTo(x+d*20,y-2);c.stroke()
}
const star=(c,x,y,r)=>{c.beginPath();for(let k=0;k<10;k++){const rr=k%2?r*.45:r,a=k*PI/5-PI/2;c.lineTo(x+cos(a)*rr,y+sin(a)*rr)}c.closePath();c.fill();c.stroke()}
export default(c,t,i)=>{
  const a=.12*sin(T*t),shut=i==7||i==8
  c.fillStyle='rgba(17,17,17,.15)';c.beginPath();c.ellipse(128,246,56,6,0,0,T);c.fill()
  c.save();c.translate(128,244);c.rotate(a);c.translate(-128,-244)
  // socks peeking out the bottom
  c.lineWidth=5;for(const d of[-1,1]){c.fillStyle=SOCK;c.beginPath();c.ellipse(128+d*18,238,13,8,0,0,T);c.fill();c.stroke();c.strokeStyle=SKS;c.lineWidth=3;c.beginPath();c.moveTo(128+d*18-10,236);c.lineTo(128+d*18+10,236);c.stroke();c.strokeStyle='#111';c.lineWidth=5}
  // the burrito
  const body=()=>{c.beginPath();c.moveTo(128,32);c.bezierCurveTo(206,32,214,120,204,190);c.quadraticCurveTo(196,236,128,236);c.quadraticCurveTo(60,236,52,190);c.bezierCurveTo(42,120,50,32,128,32);c.closePath()}
  c.lineWidth=6;c.fillStyle=BLK;body();c.fill()
  c.save();body();c.clip()
  c.fillStyle='#fff';c.lineWidth=2.5;for(const[x,y]of[[70,170],[176,150],[110,214],[160,206],[66,96],[192,90],[92,140]])star(c,x,y,6)
  // wrapped edge spiralling round the front, with the lining showing
  c.lineWidth=6;c.fillStyle=LIN;c.beginPath();c.moveTo(40,180);c.quadraticCurveTo(140,176,220,226);c.lineTo(220,240);c.quadraticCurveTo(140,192,40,196);c.closePath();c.fill();c.stroke()
  c.fillStyle=BLK;c.beginPath();c.moveTo(40,196);c.quadraticCurveTo(140,192,220,240);c.lineTo(220,260);c.lineTo(40,260);c.closePath();c.fill()
  c.fillStyle='#fff';c.lineWidth=2.5;for(const[x,y]of[[82,216],[140,224]])star(c,x,y,6)
  c.lineWidth=6;c.beginPath();c.moveTo(40,196);c.quadraticCurveTo(140,192,220,240);c.stroke()
  c.restore()
  c.lineWidth=6;body();c.stroke()
  // face peeking out of the opening, under a folded hood of blanket
  c.fillStyle=LIN;c.beginPath();c.ellipse(128,108,70,62,0,0,T);c.fill();c.stroke()
  c.save();c.beginPath();c.ellipse(128,110,60,53,0,0,T);c.clip()
  c.fillStyle=HD;c.fillRect(60,50,140,130)
  c.translate(128,118);c.scale(.82,.82);c.translate(-128,-132)
  c.lineWidth=7;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,142,-1,shut);eye(c,153,142,1,shut)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,164,14,7,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,167),c.lineTo(128+d*44+k+2,161),c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(120,172);c.quadraticCurveTo(124,176,128,173);c.quadraticCurveTo(132,176,136,172);c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(60,160);c.bezierCurveTo(46,74,88,36,128,36);c.bezierCurveTo(168,36,210,74,196,160)
  c.quadraticCurveTo(186,124,180,108);c.quadraticCurveTo(170,100,162,114);c.quadraticCurveTo(154,96,140,94);c.quadraticCurveTo(136,108,128,114)
  c.quadraticCurveTo(120,98,106,96);c.quadraticCurveTo(102,108,94,114);c.quadraticCurveTo(86,100,76,108);c.quadraticCurveTo(68,128,60,160);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[a0,e]of[[1.3,1.4],[1.46,1.56],[1.62,1.7]])c.beginPath(),c.arc(128,110,56,PI*a0,PI*e),c.stroke()
  c.restore()
  c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.ellipse(128,110,60,53,0,0,T);c.stroke()
  c.restore()
  // z drifting up and fading
  const p=(t*2)%1,s=.6+.6*p
  c.save();c.globalAlpha=p<.8?1:1-(p-.8)/.2;c.translate(214+8*p,44-28*p);c.scale(s,s);c.rotate(-.2)
  for(const[l,st]of[[9,'#111'],[4,ZC]])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(-8,-8),c.lineTo(8,-8),c.lineTo(-8,8),c.lineTo(8,8),c.stroke()
  c.restore()
}
