// North Korean flag waving on a silver pole: blue, white and red bands with the red star in a white disc near the hoist, and a smiling anime girl printed in the red panel on the fly side - black hair with a white magnolia flower and a long ponytail streaming in the wind, sky-blue hanbok jacket with white collar - who blinks and beams as the flag ripples
export const frames=20,delay=70
const P=Math.PI*2,W=232,H=116,K=2,X0=14,Y0=30,u=H/36
const RD='#ec1d25',BL='#034da2',D='#1c1622',SK='#ffe6d8',SK2='#f5c5b3'
const HR=['#2a2633','#16141c','#5c5a78']
const wav=(x,t)=>(x/W)**1.1*(7*Math.sin(P*(x/170-t))+2.2*Math.sin(P*(x/85-2*t)+1))
const E=(f,x,y,a,b,r=0)=>(f.beginPath(),f.ellipse(x,y,a,b,r,0,P))
const eye=(f,x,y,m,o)=>{
  f.save();f.translate(x,y);f.scale(m,1);f.strokeStyle=D
  if(o<0){f.lineWidth=3.6;f.beginPath();f.moveTo(-11,4);f.quadraticCurveTo(1,-9,14,3);f.stroke();f.restore();return}
  if(o<.2){f.lineWidth=3.4;f.beginPath();f.moveTo(-11,2);f.quadraticCurveTo(2,9,14,0);f.lineTo(17,-2);f.stroke();f.restore();return}
  f.translate(0,10);f.scale(1,o);f.translate(0,-10)
  f.beginPath();f.moveTo(-11,-7);f.bezierCurveTo(-6,-16,6,-16,13,-8);f.bezierCurveTo(14,0,12,8,6,11)
  f.bezierCurveTo(0,13,-8,11,-10,6);f.bezierCurveTo(-12,2,-12,-2,-11,-6);f.fillStyle='#fff';f.fill()
  f.save();f.clip()
  E(f,1,1,10,13.5);f.fillStyle='#6a4a3c';f.fill();f.save();f.clip()
  f.fillStyle='#331f19';f.fillRect(-12,-16,26,11);E(f,1,9,6.5,4);f.fillStyle='#c4906c';f.fill();f.restore()
  E(f,1,2,4.4,6.4);f.fillStyle='#1d1010';f.fill()
  E(f,-3.4,-5,3.8,4.6);f.fillStyle='#fff';f.fill();E(f,5,7,1.9,1.9);f.fill()
  f.restore()
  f.lineWidth=4;f.beginPath();f.moveTo(-12,-6);f.bezierCurveTo(-6,-17,6,-17,14,-8);f.lineTo(18,-9);f.stroke()
  f.lineWidth=1.3;f.beginPath();f.moveTo(1,12.5);f.quadraticCurveTo(6,12,9,9.5);f.stroke()
  f.restore()
}
const shine=(f,y)=>{f.fillStyle=HR[2];f.beginPath();for(let x=-70;x<=70;x+=7)f.lineTo(x,y+6-Math.abs(x)*.12+(x/7%2?6:0));for(let x=70;x>=-70;x-=7)f.lineTo(x,y-4-Math.abs(x)*.12);f.fill()}
const lock=(f,a,b,tx,ty,bn)=>{
  const s=()=>{f.beginPath();f.moveTo(a,-44);f.quadraticCurveTo(a+bn,(ty-44)/2,tx,ty);f.quadraticCurveTo(b+bn,(ty-44)/2+6,b,-44);f.closePath()}
  s();f.fillStyle=HR[0];f.fill();f.save();f.clip();shine(f,-38);f.fillStyle=HR[1];f.fillRect(-80,ty-7,160,30);f.restore();s();f.stroke()
}
// white magnolia: cupped petals around a crimson heart
const mag=(f,x,y,r)=>{
  f.save();f.translate(x,y);f.lineWidth=1.8
  for(const a of[-1.9,-.95,0,.95,1.9,2.85,3.8,-2.85].slice(0,7)){f.save();f.rotate(a);f.beginPath();f.moveTo(0,0);f.bezierCurveTo(-r*.55,-r*.3,-r*.4,-r,0,-r*1.05)
    f.bezierCurveTo(r*.4,-r,r*.55,-r*.3,0,0);f.fillStyle='#fffdf6';f.fill();f.stroke();f.restore()}
  E(f,0,0,r*.34,r*.34);f.fillStyle='#c2185b';f.fill();f.stroke()
  f.fillStyle='#ffd34d';for(let k=0;k<6;k++){E(f,Math.cos(k)*r*.2,Math.sin(k)*r*.2,r*.07,r*.07);f.fill()}
  f.restore()
}
const girl=(f,t,i)=>{
  const sw=Math.sin(P*t),bl=i==5?.45:i==6?0:1,hp=i>=12&&i<17
  f.lineJoin=f.lineCap='round';f.strokeStyle=D;f.lineWidth=2.8
  // ponytail streaming toward the fly
  const cl=v=>[38+v*170,-42+v*40+Math.sin(P*(v*.8-t))*v*16],hw=v=>(9+27*Math.sin(Math.PI*Math.min(1,v*1.1)**.8))*(1-v*.25)
  const pt=()=>{f.beginPath();for(let k=0;k<=20;k++){const v=k/20,[x,y]=cl(v);f.lineTo(x,y-hw(v))}
    const[x,y]=cl(1);for(const[a,b]of[[16,-14],[-2,-6],[14,2],[-4,8],[10,16]])f.lineTo(x+a,y+b)
    for(let k=20;k>=0;k--){const v=k/20,[x,y]=cl(v);f.lineTo(x,y+hw(v))};f.closePath()}
  pt();f.fillStyle=HR[0];f.fill();f.save();f.clip()
  f.fillStyle=HR[1];f.beginPath();for(let k=0;k<=20;k++){const v=k/20,[x,y]=cl(v);f.lineTo(x,y+hw(v)*.35)};for(let k=20;k>=0;k--){const v=k/20,[x,y]=cl(v);f.lineTo(x,y+hw(v)+4)};f.fill()
  f.fillStyle=HR[2];f.beginPath();for(let k=2;k<=17;k++){const v=k/20,[x,y]=cl(v);f.lineTo(x,y-hw(v)*.55)};for(let k=17;k>=2;k--){const v=k/20,[x,y]=cl(v);f.lineTo(x,y-hw(v)*.3)};f.fill()
  f.strokeStyle=HR[1];f.lineWidth=1.8;for(const o of[-.1,.6]){f.beginPath();for(let k=1;k<=19;k++){const v=k/20,[x,y]=cl(v);f.lineTo(x,y+hw(v)*o)};f.stroke()}
  f.restore();f.strokeStyle=D;f.lineWidth=2.6;pt();f.stroke()
  // back hair
  f.beginPath();f.moveTo(-56,-30);f.bezierCurveTo(-72,10,-66,50,-50,70);f.lineTo(50,70);f.bezierCurveTo(66,50,72,10,56,-30);f.closePath();f.fillStyle=HR[1];f.fill();f.stroke()
  // neck and jeogori
  f.fillStyle=SK;f.beginPath();f.moveTo(-11,50);f.lineTo(-12,94);f.lineTo(12,94);f.lineTo(11,50);f.fill();f.stroke()
  f.fillStyle=SK2;f.beginPath();f.moveTo(-11.5,56);f.quadraticCurveTo(0,74,11.5,56);f.lineTo(11,50);f.lineTo(-11,50);f.fill()
  f.fillStyle='#8cc4ef';f.beginPath();f.moveTo(-12,78);f.bezierCurveTo(-34,82,-58,86,-66,104);f.lineTo(-74,140);f.lineTo(74,140);f.lineTo(66,104)
  f.bezierCurveTo(58,86,34,82,12,78);f.quadraticCurveTo(0,90,-12,78);f.fill();f.stroke()
  f.fillStyle='#5f9fd6';for(const m of[-1,1]){f.beginPath();f.moveTo(m*66,104);f.lineTo(m*74,140);f.lineTo(m*58,140);f.quadraticCurveTo(m*58,118,m*54,108);f.closePath();f.fill()}
  f.fillStyle='#fff';f.beginPath();f.moveTo(-12,78);f.lineTo(22,124);f.lineTo(13,130);f.lineTo(-20,84);f.closePath();f.fill();f.stroke()
  f.beginPath();f.moveTo(12,78);f.lineTo(24,90);f.lineTo(18,96);f.lineTo(6,84);f.closePath();f.fill();f.stroke()
  f.beginPath();f.moveTo(18,124);f.quadraticCurveTo(10,134,12,142);f.lineTo(22,142);f.quadraticCurveTo(20,132,22,126);f.closePath();f.fill();f.stroke()
  f.beginPath();f.moveTo(20,124);f.quadraticCurveTo(32,132,36,142);f.lineTo(44,140);f.quadraticCurveTo(36,126,22,121);f.closePath();f.fill();f.stroke()
  E(f,20,124,7,5);f.fill();f.stroke()
  // face
  f.beginPath();f.moveTo(-47,-14);f.bezierCurveTo(-47,24,-30,54,0,67);f.bezierCurveTo(30,54,47,24,47,-14);f.closePath();f.fillStyle=SK;f.fill();f.stroke()
  f.fillStyle=SK2;f.beginPath();f.moveTo(-47,-14);f.lineTo(47,-14);f.lineTo(46,8);f.quadraticCurveTo(0,0,-46,8);f.fill()
  f.fillStyle='#ffbfba';E(f,-30,38,9,4.5);f.fill();E(f,30,38,9,4.5);f.fill()
  eye(f,-21,22,-1,hp?-1:bl);eye(f,21,22,1,hp?-1:bl)
  f.strokeStyle=D;f.lineWidth=1.4;f.beginPath();f.moveTo(1.5,34);f.lineTo(-.5,36.5);f.stroke()
  const mw=hp?10:7,mh=hp?60:55
  f.fillStyle='#b5303f';f.beginPath();f.moveTo(-mw,46);f.quadraticCurveTo(0,48,mw,46);f.quadraticCurveTo(mw*.7,mh,0,mh);f.quadraticCurveTo(-mw*.7,mh,-mw,46);f.fill()
  f.fillStyle='#ff8d93';E(f,0,mh-2.5,mw*.5,2.2);f.fill();f.lineWidth=1.8;f.beginPath();f.moveTo(-mw,46);f.quadraticCurveTo(0,48,mw,46);f.stroke()
  // side locks, bangs, crown
  f.lineWidth=2.6
  for(const[a,b,tx,ty,bn]of[[-62,-40,-54,58,-10],[40,62,54,58,10],[-60,-34,-48,22,-8],[-30,-2,-40,6,-6],[24,52,46,18,8],[-44,-14,-26,6,-4],[-18,10,-7,8,-1],[30,6,40,4,6],[0,26,21,7,4],[-6,14,7,2,1]])
    lock(f,a,b,tx,ty,bn)
  const cap=()=>{f.beginPath();f.moveTo(-60,-4);f.bezierCurveTo(-66,-52,-32,-62,0,-62);f.bezierCurveTo(32,-62,66,-52,60,-4)}
  cap();f.quadraticCurveTo(40,-34,0,-34);f.quadraticCurveTo(-40,-34,-60,-4);f.fillStyle=HR[0];f.fill()
  f.save();f.clip();shine(f,-38);f.restore();cap();f.stroke()
  mag(f,44,-46,17)
}
// bands 6:1:22:1:6, white disc at a third of the length, red star just inside its rim
const flag=f=>{
  f.fillStyle=BL;f.fillRect(0,0,W,H);f.fillStyle='#fff';f.fillRect(0,6*u,W,24*u);f.fillStyle=RD;f.fillRect(0,7*u,W,22*u)
  const r=8*u,x=W/3,y=H/2;f.fillStyle='#fff';E(f,x,y,r,r);f.fill()
  f.fillStyle=RD;f.beginPath();for(let k=0;k<10;k++){const a=k*Math.PI/5,d=(k%2?.382:1)*7.75*u;f.lineTo(x+Math.sin(a)*d,y-Math.cos(a)*d)};f.fill()
}
export default(c,t,i)=>{
  const F=new c.canvas.constructor(W*K,H*K),f=F.getContext('2d')
  f.scale(K,K);flag(f)
  f.save();f.beginPath();f.rect(0,7*u,W,22*u);f.clip();f.translate(156,53);f.scale(.4,.4);girl(f,t,i);f.restore()
  for(let x=0;x<W;x++)c.drawImage(F,x*K,0,K,H*K,X0+x,Y0+wav(x,t),1.6,H)
  c.globalCompositeOperation='source-atop'
  for(let x=0;x<W;x++){const s=Math.max(-6,Math.min(6,Math.round((wav(x+1,t)-wav(x-1,t))*5)))
    if(s){c.fillStyle=s>0?`rgba(0,0,0,${s*.03})`:`rgba(255,255,255,${-s*.045})`;c.fillRect(X0+x,Y0+wav(x,t)-1,1.6,H+2)}}
  c.globalCompositeOperation='source-over'
  c.beginPath();for(let x=0;x<=W;x+=2)c.lineTo(X0+x,Y0+wav(x,t));for(let x=W;x>=0;x-=2)c.lineTo(X0+x,Y0+H+wav(x,t))
  c.closePath();c.lineWidth=2.4;c.strokeStyle='#111';c.stroke()
  c.lineWidth=2;c.fillStyle='#c3c8d1';c.beginPath();c.roundRect(7,22,8,232,3);c.fill();c.stroke()
  c.fillStyle='#eef1f5';c.fillRect(9,24,2,228)
  c.fillStyle='#f0be3c';E(c,11,16,7,7);c.fill();c.stroke();c.fillStyle='#fff3c4';E(c,9,14,2.2,2.2);c.fill()
}
