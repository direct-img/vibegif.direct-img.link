// Bangladeshi flag waving on a silver pole: bottle green field with the red disc set toward the hoist, and an anime girl printed on the fly side - long black hair rippling in the wind with a white shapla water lily, red blouse and a red-bordered white sari over her shoulder - who blinks and glances at the red sun as the flag ripples
export const frames=20,delay=70
const P=Math.PI*2,W=232,H=W*.6,K=2,X0=14,Y0=28
const GR='#006747',RD='#da291c',D='#21141a',SK='#f7d6bf',SK2='#e6b193'
const HR=['#2a2430','#16121a','#5d5470']
const wav=(x,t)=>(x/W)**1.1*(7*Math.sin(P*(x/170-t))+2.2*Math.sin(P*(x/85-2*t)+1))
const E=(f,x,y,a,b,r=0)=>(f.beginPath(),f.ellipse(x,y,a,b,r,0,P))
const eye=(f,x,y,m,o,lx)=>{
  f.save();f.translate(x,y);f.scale(m,1);f.strokeStyle=D
  if(o<.2){f.lineWidth=3.4;f.beginPath();f.moveTo(-11,2);f.quadraticCurveTo(2,9,14,0);f.lineTo(17,-2);f.stroke();f.restore();return}
  f.translate(0,10);f.scale(1,o);f.translate(0,-10)
  f.beginPath();f.moveTo(-11,-7);f.bezierCurveTo(-6,-16,6,-16,13,-8);f.bezierCurveTo(14,0,12,8,6,11)
  f.bezierCurveTo(0,13,-8,11,-10,6);f.bezierCurveTo(-12,2,-12,-2,-11,-6);f.fillStyle='#fff';f.fill()
  f.save();f.clip();f.translate(lx*m,0)
  E(f,1,1,10,13.5);f.fillStyle='#7a4a34';f.fill();f.save();f.clip()
  f.fillStyle='#3a2018';f.fillRect(-12,-16,26,11);E(f,1,9,6.5,4);f.fillStyle='#d49a6a';f.fill();f.restore()
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
// shapla: white water lily seen from the side, pointed pink-tipped petals around golden stamens
const shapla=(f,x,y,r,a)=>{
  f.save();f.translate(x,y);f.rotate(a);f.lineWidth=1.6
  const pe=(q,l,w)=>{f.save();f.rotate(q);f.beginPath();f.moveTo(-w,0);f.quadraticCurveTo(-w*1.2,-l*.6,0,-l);f.quadraticCurveTo(w*1.2,-l*.6,w,0);f.closePath()
    f.fillStyle='#fffafc';f.fill();f.save();f.clip();f.fillStyle='#f6bcd2';f.fillRect(-r,-l*1.1,r*2,l*.38);f.restore();f.stroke();f.restore()}
  for(const q of[-1.25,1.25,-.8,.8])pe(q,r*.9,r*.26)
  f.fillStyle='#f6c42f';f.beginPath();f.moveTo(-r*.3,-r*.1);for(let k=0;k<=6;k++)f.lineTo(-r*.3+k*r*.1,-r*(k%2?.32:.48));f.lineTo(r*.3,-r*.1);f.closePath();f.fill();f.stroke()
  for(const q of[-.4,.4,0])pe(q,r,r*.24)
  f.restore()
}
const girl=(f,t,i)=>{
  const sw=Math.sin(P*t),bl=i==4?.45:i==5?0:1,lx=i>=11&&i<18?-3:0
  f.lineJoin=f.lineCap='round';f.strokeStyle=D;f.lineWidth=2.8
  // long hair falling behind the shoulders, its fly-side edge rippling in the wind
  f.beginPath();f.moveTo(-56,-30);f.bezierCurveTo(-76,20,-74,90,-74,160)
  for(let y=160;y>=-10;y-=10)f.lineTo(66+y*.08+Math.sin(P*(y/110-t))*(y+20)*.05+(y%20?0:2),y);f.lineTo(56,-30);f.closePath();f.fillStyle=HR[1];f.fill();f.stroke()
  f.strokeStyle=HR[2];f.lineWidth=1.6;for(const o of[-8,-22]){f.beginPath();for(let y=150;y>=60;y-=10)f.lineTo(66+o+y*.08+Math.sin(P*(y/110-t))*(y+20)*.05,y);f.stroke()}
  f.strokeStyle=D;f.lineWidth=2.8
  // neck, red blouse, sari pallu over the shoulder
  f.fillStyle=SK;f.beginPath();f.moveTo(-11,50);f.lineTo(-12,94);f.lineTo(12,94);f.lineTo(11,50);f.fill();f.stroke()
  f.fillStyle=SK2;f.beginPath();f.moveTo(-11.5,56);f.quadraticCurveTo(0,74,11.5,56);f.lineTo(11,50);f.lineTo(-11,50);f.fill()
  f.fillStyle='#d3203a';f.beginPath();f.moveTo(-14,80);f.bezierCurveTo(-32,86,-56,86,-66,102);f.lineTo(-76,150);f.lineTo(76,150);f.lineTo(66,102)
  f.bezierCurveTo(56,86,32,86,14,80);f.quadraticCurveTo(0,96,-14,80);f.fill();f.stroke()
  f.fillStyle='#f7f3ea';f.beginPath();f.moveTo(26,84);f.bezierCurveTo(48,84,64,92,72,106);f.lineTo(80,150);f.lineTo(4,150);f.quadraticCurveTo(20,120,26,84);f.fill();f.stroke()
  f.fillStyle=RD;f.beginPath();f.moveTo(26,84);f.quadraticCurveTo(20,120,4,150);f.lineTo(16,150);f.quadraticCurveTo(30,122,35,86);f.closePath();f.fill();f.stroke()
  f.fillStyle='#f6c42f';for(let k=0;k<5;k++){E(f,30-k*4.4+k*k*.2,98+k*12,1.8,1.8);f.fill()}
  f.strokeStyle='#d6cfc2';f.lineWidth=1.6;for(const a of[44,56]){f.beginPath();f.moveTo(a,96);f.quadraticCurveTo(a-4,122,a-10,150);f.stroke()}
  f.strokeStyle=D;f.lineWidth=2.8
  // face
  f.beginPath();f.moveTo(-47,-14);f.bezierCurveTo(-47,24,-30,54,0,67);f.bezierCurveTo(30,54,47,24,47,-14);f.closePath();f.fillStyle=SK;f.fill();f.stroke()
  f.fillStyle=SK2;f.beginPath();f.moveTo(-47,-14);f.lineTo(47,-14);f.lineTo(46,8);f.quadraticCurveTo(0,0,-46,8);f.fill()
  f.fillStyle='#f4a7a0';E(f,-30,38,9,4.5);f.fill();E(f,30,38,9,4.5);f.fill()
  eye(f,-21,22,-1,bl,lx);eye(f,21,22,1,bl,lx)
  f.strokeStyle=D;f.lineWidth=1.4;f.beginPath();f.moveTo(1.5,34);f.lineTo(-.5,36.5);f.stroke()
  f.fillStyle='#a92a3a';f.beginPath();f.moveTo(-8,46);f.quadraticCurveTo(0,48,8,46);f.quadraticCurveTo(5,55,0,55);f.quadraticCurveTo(-5,55,-8,46);f.fill()
  f.fillStyle='#f78a90';E(f,0,52.5,3.6,2);f.fill();f.lineWidth=1.8;f.beginPath();f.moveTo(-8,46);f.quadraticCurveTo(0,48,8,46);f.stroke()
  f.lineWidth=2.6
  for(const[a,b,tx,ty,bn]of[[-62,-40,-56,70,-10],[40,62,58,58,14],[-60,-34,-48,22,-8],[-30,-2,-40,6,-6],[24,52,46,18,8],[-44,-14,-26,6,-4],[-18,10,-7,8,-1],[30,6,40,4,6],[0,26,21,7,4],[-6,14,7,2,1]])
    lock(f,a,b,tx,ty,bn)
  const cap=()=>{f.beginPath();f.moveTo(-60,-4);f.bezierCurveTo(-66,-52,-32,-62,0,-62);f.bezierCurveTo(32,-62,66,-52,60,-4)}
  cap();f.quadraticCurveTo(40,-34,0,-34);f.quadraticCurveTo(-40,-34,-60,-4);f.fillStyle=HR[0];f.fill()
  f.save();f.clip();shine(f,-38);f.restore();cap();f.stroke()
  shapla(f,-50,-26,32,-.3)
}
// red disc of radius 1/5 the length, centred 9/20 of the length from the hoist
const flag=f=>{f.fillStyle=GR;f.fillRect(0,0,W,H);f.fillStyle=RD;E(f,W*.45,H/2,W/5,W/5);f.fill()}
export default(c,t,i)=>{
  const F=new c.canvas.constructor(W*K,H*K),f=F.getContext('2d')
  f.scale(K,K);flag(f);f.save();f.translate(188,72);f.scale(.46,.46);girl(f,t,i);f.restore()
  for(let x=0;x<W;x++)c.drawImage(F,x*K,0,K,H*K,X0+x,Y0+wav(x,t),1.6,H)
  c.globalCompositeOperation='source-atop'
  for(let x=0;x<W;x++){const s=Math.max(-6,Math.min(6,Math.round((wav(x+1,t)-wav(x-1,t))*5)))
    if(s){c.fillStyle=s>0?`rgba(0,0,0,${s*.03})`:`rgba(255,255,255,${-s*.045})`;c.fillRect(X0+x,Y0+wav(x,t)-1,1.6,H+2)}}
  c.globalCompositeOperation='source-over'
  c.beginPath();for(let x=0;x<=W;x+=2)c.lineTo(X0+x,Y0+wav(x,t));for(let x=W;x>=0;x-=2)c.lineTo(X0+x,Y0+H+wav(x,t))
  c.closePath();c.lineWidth=2.4;c.strokeStyle='#111';c.stroke()
  c.lineWidth=2;c.fillStyle='#c3c8d1';c.beginPath();c.roundRect(7,18,8,236,3);c.fill();c.stroke()
  c.fillStyle='#eef1f5';c.fillRect(9,20,2,232)
  c.fillStyle='#f0be3c';E(c,11,12,7,7);c.fill();c.stroke();c.fillStyle='#fff3c4';E(c,9,10,2.2,2.2);c.fill()
}
