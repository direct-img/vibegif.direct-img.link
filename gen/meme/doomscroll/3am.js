// 3am doomscroll: wide awake eyes peek over the blanket, lit by the phone, flicking post after post while the bedside clock races on
const{cos,sin,PI}=Math,T=2*PI
export const frames=16,delay=Array(16).fill(95),rim=4
const K='#1b1b1f',GL=['#74c0fc','#f783ac','#8ce99a','#ffd43b'],FC=['#d0ebff','#ffdeeb','#d3f9d8','#fff3bf']
const SEG=[63,6,91,79,102,109,125,7,127,111]
const digit=(c,x,y,n,s)=>{c.beginPath();[[0,0,1,0],[1,0,1,1],[1,1,1,2],[0,2,1,2],[0,1,0,2],[0,0,0,1],[0,1,1,1]].forEach(([a,b,e,f],k)=>{if(SEG[n]>>k&1)c.moveTo(x+a*s,y+b*s),c.lineTo(x+e*s,y+f*s)});c.stroke()}
export default(c,t,i)=>{
  const f=i>>2,p=i%4,col=GL[f],jerk=p==0?-5:0,up=[16,8,3,0][p]
  c.strokeStyle=K;c.lineWidth=6
  c.fillStyle='#1c2541';c.beginPath();c.roundRect(14,14,228,228,28);c.fill();c.stroke()
  c.save();c.clip()
  // window with moon, clock
  c.fillStyle='#3a506b';c.lineWidth=5;c.beginPath();c.roundRect(32,32,72,68,8);c.fill();c.stroke()
  c.fillStyle='#ffe066';c.beginPath();c.arc(78,58,15,0,T);c.fill();c.fillStyle='#3a506b';c.beginPath();c.arc(70,52,13,0,T);c.fill()
  c.fillStyle='#fff';for(const[x,y]of[[46,46],[54,82],[90,86]])c.fillRect(x-1.5,y-1.5,3,3)
  c.strokeStyle=K;c.beginPath();c.moveTo(68,32);c.lineTo(68,100);c.moveTo(32,66);c.lineTo(104,66);c.stroke()
  c.fillStyle='#111';c.beginPath();c.roundRect(140,34,86,44,9);c.fill();c.stroke()
  const mm=[7,24,41,58][f];c.strokeStyle='#ff6b6b';c.lineWidth=4;c.lineCap='round'
  digit(c,154,44,3,12);digit(c,184,44,mm/10|0,12);digit(c,204,44,mm%10,12)
  c.fillStyle='#ff6b6b';if(p<2)for(const y of[51,63])c.beginPath(),c.arc(174,y,2.5,0,T),c.fill()
  // pillow, head lit by the screen
  c.strokeStyle=K;c.lineWidth=6;c.fillStyle='#5c6b8a';c.beginPath();c.roundRect(46,112,164,70,30);c.fill();c.stroke()
  const g=c.createRadialGradient(128,176,10,128,176,110);g.addColorStop(0,col+'aa');g.addColorStop(1,col+'00');c.fillStyle=g;c.fillRect(14,60,228,180)
  c.fillStyle=FC[f];c.beginPath();c.arc(128,158,50,0,T);c.fill();c.stroke()
  c.fillStyle='#5c3d2e';c.beginPath();c.moveTo(80,150);c.quadraticCurveTo(80,104,128,106);c.quadraticCurveTo(178,104,177,150);c.quadraticCurveTo(160,126,140,128);c.lineTo(146,114);c.lineTo(126,128);c.quadraticCurveTo(98,126,80,150);c.fill();c.stroke()
  for(const d of[-1,1]){const x=128+d*21,y=154
    c.strokeStyle='#9775fa';c.lineWidth=4;c.beginPath();c.arc(x,y+4,17,PI*.2,PI*.8);c.stroke();c.beginPath();c.arc(x,y+9,14,PI*.3,PI*.7);c.stroke()
    c.fillStyle='#fff';c.strokeStyle=K;c.lineWidth=4;c.beginPath();c.arc(x,y,15,0,T);c.fill();c.stroke()
    c.strokeStyle='#ff8787';c.lineWidth=2;for(const a of[2.6,.5,3.4])c.beginPath(),c.moveTo(x+14*cos(a),y+14*sin(a)),c.lineTo(x+8*cos(a+.2),y+8*sin(a+.2)),c.stroke()
    c.fillStyle=K;c.beginPath();c.arc(x,y+4-up*.5,5,0,T);c.fill();c.fillStyle=col;c.fillRect(x+1,y-1-up*.5,4,3)}
  // blanket and phone
  c.strokeStyle=K;c.lineWidth=6;c.fillStyle='#7048e8';c.beginPath();c.moveTo(10,190);c.quadraticCurveTo(128,170,250,190);c.lineTo(250,250);c.lineTo(10,250);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#845ef7';c.lineWidth=5;for(const x of[50,206])c.beginPath(),c.moveTo(x,196),c.quadraticCurveTo(x+6,220,x-4,244),c.stroke()
  c.restore()
  c.save();c.translate(0,jerk);c.strokeStyle=K;c.lineWidth=6
  c.fillStyle='#343a40';c.beginPath();c.roundRect(100,176,56,62,10);c.fill();c.stroke()
  c.fillStyle='#495057';c.beginPath();c.roundRect(110,184,16,16,5);c.fill()
  c.fillStyle=col;c.fillRect(108,173,40,3)
  c.fillStyle=FC[f];c.lineWidth=5;for(const x of[98,158])c.beginPath(),c.ellipse(x,212,11,14,0,0,T),c.fill(),c.stroke()
  c.restore()
  if(p==0){c.strokeStyle='#fff';c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*38,172),c.lineTo(128+d*48,164),c.stroke()}
}
