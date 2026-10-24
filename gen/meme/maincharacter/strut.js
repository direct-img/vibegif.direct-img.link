// main character energy: shades on, scarf in the wind, strutting in his own spotlight with sparkles while grey extras drift past in the background
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=12,delay=Array(12).fill(90),rim=4
const K='#1b1b1f',B='#ff8787'
const spark=(c,x,y,r)=>{c.beginPath();for(let k=0;k<8;k++){const a=k*PI/4,q=k%2?r*.32:r;c.lineTo(x+q*cos(a),y+q*sin(a))}c.closePath();c.fill();c.stroke()}
export default(c,t)=>{
  const ph=T*t*2,bob=abs(sin(ph)),s=sin(ph)
  // spotlight, then the background extras sliding past, identical and all the same grey
  c.fillStyle='#fff3bf';c.beginPath();c.moveTo(106,0);c.lineTo(150,0);c.lineTo(216,236);c.quadraticCurveTo(128,256,40,236);c.closePath();c.fill()
  c.strokeStyle='#868e96';c.lineWidth=4
  for(let k=0;k<5;k++){const x=((k*64-t*64)%320+320)%320-32,h=26,y=176-h
    c.fillStyle='#dee2e6';c.beginPath();c.ellipse(x,y,19,h,0,0,T);c.fill();c.stroke()
    c.fillStyle='#868e96';for(const d of[-6,6])c.beginPath(),c.arc(x+d,y-h*.35,2.5,0,T),c.fill()
    c.beginPath();c.moveTo(x-5,y-h*.35+9);c.lineTo(x+5,y-h*.35+9);c.stroke()}
  c.save();c.translate(128,236);c.rotate(.05*s);c.translate(-128,-236-7*bob);c.strokeStyle=K;c.lineWidth=6
  // legs and arms swing opposite
  for(const[d,lf]of[[-1,s],[1,-s]]){const hx=128+d*14,fx=hx+24*lf,up=lf>.2?10*lf:0
    for(const[w,st]of[[20,K],[9,'#4c6ef5']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(hx,184),c.lineTo(fx,226-up),c.stroke()
    c.fillStyle=K;c.beginPath();c.ellipse(fx+6,232-up,15,8,0,0,T);c.fill()}
  for(const[d,sw]of[[-1,-s],[1,s]]){const sx=128+d*38,hx=sx+d*8+22*sw,hy=194
    for(const[w,st]of[[20,K],[9,B]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(sx,160),c.lineTo(hx,hy),c.stroke()
    c.fillStyle=B;c.strokeStyle=K;c.lineWidth=5;c.beginPath();c.arc(hx,hy,10,0,T);c.fill();c.stroke()}
  // scarf tails stream behind in the wind
  c.fillStyle='#ffd43b';c.strokeStyle=K;c.lineWidth=5
  for(const[o,w]of[[0,17],[1,13]]){const y=k=>158+o*13-k*(o?.6:1.8)+7*sin(ph*2-k*.55+o*1.5)*k/10;c.beginPath();for(let k=0;k<=10;k++)c.lineTo(100-8.5*k,y(k));for(let k=10;k>=0;k--)c.lineTo(100-8.5*k,y(k)+w*(1-k/30));c.closePath();c.fill();c.stroke()}
  c.fillStyle=B;c.lineWidth=6;c.beginPath();c.ellipse(128,140,46,54,0,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.globalAlpha=.5;c.beginPath();c.ellipse(104,106,8,14,.5,0,T);c.fill();c.globalAlpha=1
  c.fillStyle='#ffd43b';c.lineWidth=5;c.beginPath();c.moveTo(84,158);c.quadraticCurveTo(128,176,172,158);c.lineTo(172,172);c.quadraticCurveTo(128,190,84,172);c.closePath();c.fill();c.stroke()
  // shades and a smirk
  c.fillStyle=K;c.lineWidth=5;c.beginPath();c.moveTo(94,112);c.lineTo(162,112);c.stroke()
  for(const x of[112,146]){c.beginPath();c.roundRect(x-16,108,32,19,[3,3,13,13]);c.fill()}
  c.fillStyle='#fff';for(const x of[103,137])c.beginPath(),c.moveTo(x,112),c.lineTo(x+8,112),c.lineTo(x+2,121),c.closePath(),c.fill()
  c.lineWidth=4;c.beginPath();c.moveTo(116,142);c.quadraticCurveTo(136,150,148,136);c.stroke()
  c.restore()
  c.strokeStyle=K;c.lineWidth=3;c.fillStyle='#ffe066'
  for(const[x,y,o]of[[56,70,0],[200,58,.33],[212,150,.66]]){const r=12*abs(sin(PI*((t*2+o)%1)));if(r>2)spark(c,x,y,r)}
}
