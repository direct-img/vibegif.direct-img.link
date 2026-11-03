// South Korean flag (Taegukgi) waving on a silver pole: white field, red and blue taegeuk and the four black trigrams, with a chibi anime girl in a white hanbok with a blue collar, red ribbon and red skirt printed by the hoist, black hair in a side braid tied with a red daenggi and a pink mugunghwa flower, who holds a flower, blinks and glances at the taegeuk as the flag ripples
export const frames=20,delay=70
const P=Math.PI*2,W=232,H=W*2/3,K=2,X0=14,Y0=26,u=H/48
const RD='#cd2e3a',BL='#0047a0',D='#1c1622',SK='#ffe6d8',SK2='#f5c5b3'
const HR=['#2b2838','#17151f','#5b5a7c']
const wav=(x,t)=>(x/W)**1.1*(7*Math.sin(P*(x/170-t))+2.2*Math.sin(P*(x/85-2*t)+1))
const E=(f,x,y,a,b,r=0)=>(f.beginPath(),f.ellipse(x,y,a,b,r,0,P))
const eye=(f,x,y,m,o,lx)=>{
  f.save();f.translate(x,y);f.scale(m,1);f.strokeStyle=D
  if(o<.2){f.lineWidth=3.4;f.beginPath();f.moveTo(-11,2);f.quadraticCurveTo(2,9,14,0);f.lineTo(17,-2);f.stroke();f.restore();return}
  f.translate(0,10);f.scale(1,o);f.translate(0,-10)
  f.beginPath();f.moveTo(-11,-7);f.bezierCurveTo(-6,-16,6,-16,13,-8);f.bezierCurveTo(14,0,12,8,6,11)
  f.bezierCurveTo(0,13,-8,11,-10,6);f.bezierCurveTo(-12,2,-12,-2,-11,-6);f.fillStyle='#fff';f.fill()
  f.save();f.clip();f.translate(lx*m,0)
  E(f,1,1,10,13.5);f.fillStyle='#8a5a44';f.fill();f.save();f.clip()
  f.fillStyle='#43261e';f.fillRect(-12,-16,26,11);E(f,1,9,6.5,4);f.fillStyle='#d9a47c';f.fill();f.restore()
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
// mugunghwa: five pink petals around a deep red heart
const mu=(f,x,y,r,a)=>{
  f.save();f.translate(x,y);f.rotate(a);f.fillStyle='#f3a6cf';f.lineWidth=1.6
  for(let k=0;k<5;k++){f.save();f.rotate(k*P/5);E(f,0,-r*.55,r*.48,r*.6);f.fill();f.stroke();f.restore()}
  f.fillStyle='#c41d55';f.beginPath();for(let k=0;k<10;k++){const q=k*P/10,d=k%2?r*.16:r*.42;f.lineTo(Math.sin(q)*d,-Math.cos(q)*d)};f.fill()
  E(f,0,0,r*.12,r*.12);f.fillStyle='#fff6b0';f.fill();f.restore()
}
const girl=(f,t,i)=>{
  const sw=Math.sin(P*t),bl=i==6?.45:i==7?0:1,lx=i>=10&&i<17?3:0
  f.lineJoin=f.lineCap='round';f.strokeStyle=D;f.lineWidth=2.8
  // back hair: bob on the right, a long side braid over her right shoulder tied with a red daenggi
  f.beginPath();f.moveTo(-56,-30);f.bezierCurveTo(-74,20,-72,70,-62,96);f.lineTo(-30,96);f.lineTo(40,52);f.bezierCurveTo(60,40,66,20,56,-30);f.closePath();f.fillStyle=HR[1];f.fill();f.stroke()
  // chima skirt and jeogori
  f.fillStyle=RD;f.beginPath();f.moveTo(-32,92);f.bezierCurveTo(-46,120,-58,160,-64,200);f.lineTo(84,200);f.bezierCurveTo(70,170,50,130,30,92);f.closePath();f.fill();f.stroke()
  f.strokeStyle='#8e1a26';f.lineWidth=1.8;for(const x of[-40,-14,14,42]){f.beginPath();f.moveTo(x*.4,118);f.quadraticCurveTo(x*.8,160,x+(x>0?16:0),200);f.stroke()}
  f.strokeStyle=D;f.lineWidth=2.8
  f.fillStyle=SK;f.beginPath();f.moveTo(-11,50);f.lineTo(-12,80);f.lineTo(12,80);f.lineTo(11,50);f.fill();f.stroke()
  f.fillStyle=SK2;f.beginPath();f.moveTo(-11.5,56);f.quadraticCurveTo(0,74,11.5,56);f.lineTo(11,50);f.lineTo(-11,50);f.fill()
  f.fillStyle='#fff';f.beginPath();f.moveTo(-10,70);f.quadraticCurveTo(-34,70,-42,86);f.lineTo(-46,112);f.lineTo(-26,116);f.lineTo(-24,102);f.lineTo(0,108)
  f.lineTo(24,102);f.lineTo(26,114);f.lineTo(40,110);f.lineTo(32,84);f.quadraticCurveTo(26,70,10,70);f.closePath();f.fill();f.stroke()
  f.fillStyle=BL;for(const[a,b,c,d,e,g,h,k]of[[-46,112,-26,116,-27,106,-45,102],[40,110,26,114,25,104,37,100]]){f.beginPath();f.moveTo(a,b);f.lineTo(c,d);f.lineTo(e,g);f.lineTo(h,k);f.closePath();f.fill();f.stroke()}
  f.beginPath();f.moveTo(-10,70);f.lineTo(16,100);f.lineTo(9,105);f.lineTo(-17,76);f.closePath();f.fill();f.stroke()
  f.fillStyle='#fff';f.beginPath();f.moveTo(-10,70);f.lineTo(-3,78);f.lineTo(-11,82);f.lineTo(-17,76);f.closePath();f.fill();f.stroke()
  f.fillStyle=RD;f.beginPath();f.moveTo(12,102);f.quadraticCurveTo(4,122,8,144+sw*2);f.lineTo(16,143+sw*2);f.quadraticCurveTo(14,122,18,104);f.closePath();f.fill();f.stroke()
  f.beginPath();f.moveTo(14,102);f.quadraticCurveTo(26,118,24,134-sw*2);f.lineTo(32,132-sw*2);f.quadraticCurveTo(30,116,17,100);f.closePath();f.fill();f.stroke()
  E(f,14,102,6,4.5);f.fill();f.stroke()
  // hands together holding a flower
  f.fillStyle=SK;E(f,-14,116,8,7);f.fill();f.stroke();E(f,-2,117,8,7);f.fill();f.stroke()
  mu(f,-8,104,13,.2)
  // side braid
  const q=v=>[-40-8*v+sw*3*v*v,30+86*v]
  const L=(x,y,r,a)=>{f.save();f.translate(x,y);f.rotate(a);f.beginPath();f.moveTo(-r,0);f.quadraticCurveTo(0,-r*.8,r,0);f.quadraticCurveTo(0,r*.8,-r,0);f.restore()}
  for(let k=0;k<8;k++){const v=k/8,[x,y]=q(v),r=13-3*v,a=k%2?.55:-.55
    L(x,y,r,a);f.fillStyle=HR[0];f.fill();f.save();f.clip();L(x+2,y+3,r,a);f.fillStyle=HR[1];f.fill();L(x-3,y-3,r*.5,a);f.fillStyle=HR[2];f.fill();f.restore();L(x,y,r,a);f.stroke()}
  {const[x,y]=q(1);f.fillStyle=RD;f.beginPath();f.moveTo(x-6,y-4);f.lineTo(x-14+sw*3,y+34);f.lineTo(x-4+sw*3,y+38);f.lineTo(x+2,y-2);f.closePath();f.fill();f.stroke()
    f.beginPath();f.moveTo(x-2,y-4);f.lineTo(x+4+sw*2,y+30);f.lineTo(x+12+sw*2,y+28);f.lineTo(x+6,y-6);f.closePath();f.fill();f.stroke()
    f.beginPath();f.roundRect(x-9,y-8,18,9,3);f.fill();f.stroke()}
  // face
  f.lineWidth=2.8;f.beginPath();f.moveTo(-47,-14);f.bezierCurveTo(-47,24,-30,54,0,67);f.bezierCurveTo(30,54,47,24,47,-14);f.closePath();f.fillStyle=SK;f.fill();f.stroke()
  f.fillStyle=SK2;f.beginPath();f.moveTo(-47,-14);f.lineTo(47,-14);f.lineTo(46,8);f.quadraticCurveTo(0,0,-46,8);f.fill()
  f.fillStyle='#ffbfba';E(f,-30,38,9,4.5);f.fill();E(f,30,38,9,4.5);f.fill()
  eye(f,-21,22,-1,bl,lx);eye(f,21,22,1,bl,lx)
  f.strokeStyle=D;f.lineWidth=1.4;f.beginPath();f.moveTo(1.5,34);f.lineTo(-.5,36.5);f.stroke()
  f.fillStyle='#b5303f';f.beginPath();f.moveTo(-7,46);f.quadraticCurveTo(0,48,7,46);f.quadraticCurveTo(5,55,0,55);f.quadraticCurveTo(-5,55,-7,46);f.fill()
  f.fillStyle='#ff8d93';E(f,0,52.5,3.4,2);f.fill();f.lineWidth=1.8;f.beginPath();f.moveTo(-7,46);f.quadraticCurveTo(0,48,7,46);f.stroke()
  // side locks, bangs, crown
  f.lineWidth=2.6
  for(const[a,b,tx,ty,bn]of[[-62,-40,-54,60,-10],[40,62,52,40,8],[-60,-34,-48,22,-8],[-30,-2,-40,6,-6],[24,52,46,18,8],[-44,-14,-26,6,-4],[-18,10,-7,8,-1],[30,6,40,4,6],[0,26,21,7,4],[-6,14,7,2,1]])
    lock(f,a,b,tx,ty,bn)
  const cap=()=>{f.beginPath();f.moveTo(-60,-4);f.bezierCurveTo(-66,-52,-32,-62,0,-62);f.bezierCurveTo(32,-62,66,-52,60,-4)}
  cap();f.quadraticCurveTo(40,-34,0,-34);f.quadraticCurveTo(-40,-34,-60,-4);f.fillStyle=HR[0];f.fill()
  f.save();f.clip();shine(f,-38);f.restore();cap();f.stroke()
  mu(f,44,-36,16,-.3)
}
// the taegeuk and trigrams, after the official construction (flag 72x48 units)
const flag=f=>{
  f.fillStyle='#fff';f.fillRect(0,0,W,H);f.save();f.translate(W/2,H/2);f.scale(u,u)
  for(const[r,g]of[[-56.31,[[17,27]]],[-123.69,[[-23.5,-20.5],[17,20.5],[23.5,26.5]]]]){
    f.save();f.rotate(r*Math.PI/180);f.fillStyle='#000'
    for(const y of[-26,-23,-20,18,21,24])f.fillRect(-6,y,12,2)
    f.fillStyle='#fff';for(const[a,b]of g)f.fillRect(-.5,a,1,b-a)
    if(r>-60){f.fillStyle=RD;f.beginPath();f.arc(0,0,12,-Math.PI/2,Math.PI/2);f.fill()
      f.fillStyle=BL;f.beginPath();f.arc(0,0,12,Math.PI/2,Math.PI*1.5);f.fill();f.beginPath();f.arc(0,6,6,-Math.PI/2,Math.PI/2);f.fill()
      f.fillStyle=RD;f.beginPath();f.arc(0,-6,6,0,P);f.fill()}
    f.restore()}
  f.restore()
}
export default(c,t,i)=>{
  const F=new c.canvas.constructor(W*K,H*K),f=F.getContext('2d')
  f.scale(K,K);flag(f);f.save();f.translate(25,78);f.scale(.4,.4);girl(f,t,i);f.restore()
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
