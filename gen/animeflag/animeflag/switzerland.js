// Swiss flag waving on a silver pole: square red flag with the white cross, and an anime girl printed in the lower hoist corner beside the cross - wavy golden hair with an edelweiss pin, white puff-sleeved blouse and black bodice with red flowers - who tilts her head, blinks and smiles as the flag ripples
export const frames=20,delay=70
const P=Math.PI*2,W=210,H=210,K=2,X0=14,Y0=24,u=W/32
const RD='#f00',D='#2a1416',SK='#ffe6d8',SK2='#f5c5b3'
const HR=['#f2cf72','#d6a245','#fff1bf']
const wav=(x,t)=>(x/W)**1.1*(7*Math.sin(P*(x/170-t))+2.2*Math.sin(P*(x/85-2*t)+1))
const E=(f,x,y,a,b,r=0)=>(f.beginPath(),f.ellipse(x,y,a,b,r,0,P))
const eye=(f,x,y,m,o)=>{
  f.save();f.translate(x,y);f.scale(m,1);f.strokeStyle=D
  if(o<.2){f.lineWidth=3.4;f.beginPath();f.moveTo(-11,2);f.quadraticCurveTo(2,9,14,0);f.lineTo(17,-2);f.stroke();f.restore();return}
  f.translate(0,10);f.scale(1,o);f.translate(0,-10)
  f.beginPath();f.moveTo(-11,-7);f.bezierCurveTo(-6,-16,6,-16,13,-8);f.bezierCurveTo(14,0,12,8,6,11)
  f.bezierCurveTo(0,13,-8,11,-10,6);f.bezierCurveTo(-12,2,-12,-2,-11,-6);f.fillStyle='#fff';f.fill()
  f.save();f.clip()
  E(f,1,1,10,13.5);f.fillStyle='#3d9db4';f.fill();f.save();f.clip()
  f.fillStyle='#1d5468';f.fillRect(-12,-16,26,11);E(f,1,9,6.5,4);f.fillStyle='#9fe0e6';f.fill();f.restore()
  E(f,1,2,4.4,6.4);f.fillStyle='#132630';f.fill()
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
// edelweiss: woolly white star of pointed bracts around a cluster of yellow buds
const edel=(f,x,y,r,a)=>{
  f.save();f.translate(x,y);f.rotate(a);f.lineWidth=1.6
  for(let k=0;k<7;k++){f.save();f.rotate(k*P/7);f.beginPath();f.moveTo(-r*.2,0);f.quadraticCurveTo(-r*.3,-r*.7,0,-r);f.quadraticCurveTo(r*.3,-r*.7,r*.2,0)
    f.fillStyle='#fbfbf4';f.fill();f.stroke();f.restore()}
  f.fillStyle='#f2c230';for(const[a,b]of[[0,0],[-3,-2],[3,-2],[0,3],[-3,2.5],[3,2.5]]){E(f,a*r/12,b*r/12,r*.17,r*.17);f.fill();f.stroke()}
  f.restore()
}
const girl=(f,t,i)=>{
  const sw=Math.sin(P*t),bl=i==9?.45:i==10?0:1
  f.lineJoin=f.lineCap='round';f.strokeStyle=D;f.lineWidth=2.8
  f.save();f.translate(0,60);f.rotate(sw*.05);f.translate(0,-60)
  // wavy back hair to the shoulders
  f.beginPath();f.moveTo(-56,-30);f.bezierCurveTo(-76,10,-70,50,-80,84+sw*2)
  for(const[a,b]of[[-66,96],[-56,84],[-44,96]])f.quadraticCurveTo(a-6,b+6,a,b+sw*2)
  f.lineTo(44,96);for(const[a,b]of[[56,84],[66,96],[80,84]])f.quadraticCurveTo(a-6,b+8,a,b-sw*2)
  f.bezierCurveTo(70,50,76,10,56,-30);f.closePath();f.fillStyle=HR[1];f.fill();f.stroke()
  f.restore()
  // neck, blouse, bodice
  f.fillStyle=SK;f.beginPath();f.moveTo(-11,50);f.lineTo(-12,94);f.lineTo(12,94);f.lineTo(11,50);f.fill();f.stroke()
  f.fillStyle=SK2;f.beginPath();f.moveTo(-11.5,56);f.quadraticCurveTo(0,74,11.5,56);f.lineTo(11,50);f.lineTo(-11,50);f.fill()
  f.fillStyle='#fff';f.beginPath();f.moveTo(-12,80);f.bezierCurveTo(-30,84,-50,82,-70,96);f.bezierCurveTo(-92,108,-92,140,-80,150);f.lineTo(80,150)
  f.bezierCurveTo(92,140,92,108,70,96);f.bezierCurveTo(50,82,30,84,12,80);f.quadraticCurveTo(0,88,-12,80);f.fill();f.stroke()
  f.strokeStyle='#d9cfcf';f.lineWidth=1.6;for(const m of[-1,1])for(const a of[0,1,2]){f.beginPath();f.moveTo(m*(62+a*6),100+a*2);f.quadraticCurveTo(m*(70+a*7),118,m*(66+a*6),140);f.stroke()}
  f.strokeStyle=D;f.lineWidth=2.8
  f.fillStyle='#2b2633';f.beginPath();f.moveTo(-40,98);f.quadraticCurveTo(-30,96,-24,104);f.quadraticCurveTo(0,124,24,104);f.quadraticCurveTo(30,96,40,98);f.lineTo(44,150);f.lineTo(-44,150);f.closePath();f.fill();f.stroke()
  f.fillStyle=RD;for(const[a,b]of[[-30,124],[30,124],[0,138]]){for(let k=0;k<5;k++){E(f,a+Math.cos(k*1.26)*3.6,b+Math.sin(k*1.26)*3.6,3,3);f.fill()}E(f,a,b,1.6,1.6);f.fillStyle='#f2c230';f.fill();f.fillStyle=RD}
  f.strokeStyle='#fff';f.lineWidth=1.4;f.beginPath();for(let k=0;k<4;k++){f.moveTo(-6,122+k*7);f.lineTo(6,126+k*7);f.moveTo(6,122+k*7);f.lineTo(-6,126+k*7)};f.stroke()
  f.strokeStyle=D;f.lineWidth=2.8
  // head
  f.save();f.translate(0,60);f.rotate(sw*.05);f.translate(0,-60)
  f.beginPath();f.moveTo(-47,-14);f.bezierCurveTo(-47,24,-30,54,0,67);f.bezierCurveTo(30,54,47,24,47,-14);f.closePath();f.fillStyle=SK;f.fill();f.stroke()
  f.fillStyle=SK2;f.beginPath();f.moveTo(-47,-14);f.lineTo(47,-14);f.lineTo(46,8);f.quadraticCurveTo(0,0,-46,8);f.fill()
  f.fillStyle='#ffbfba';E(f,-30,38,9,4.5);f.fill();E(f,30,38,9,4.5);f.fill()
  f.strokeStyle='#ec8f98';f.lineWidth=1.2;for(const m of[-1,1])for(let k=0;k<3;k++){f.beginPath();f.moveTo(m*(25+k*5),40.5);f.lineTo(m*(28+k*5),35.5);f.stroke()}
  eye(f,-21,22,-1,bl);eye(f,21,22,1,bl)
  f.strokeStyle=D;f.lineWidth=1.4;f.beginPath();f.moveTo(1.5,34);f.lineTo(-.5,36.5);f.stroke()
  f.fillStyle='#b5303f';f.beginPath();f.moveTo(-8,46);f.quadraticCurveTo(0,48,8,46);f.quadraticCurveTo(5,56,0,56);f.quadraticCurveTo(-5,56,-8,46);f.fill()
  f.fillStyle='#ff8d93';E(f,0,53.5,3.6,2);f.fill();f.lineWidth=1.8;f.beginPath();f.moveTo(-8,46);f.quadraticCurveTo(0,48,8,46);f.stroke()
  f.lineWidth=2.6
  for(const[a,b,tx,ty,bn]of[[-62,-40,-56,62,-12],[40,62,56,62,12],[-60,-34,-48,22,-8],[-30,-2,-40,6,-6],[24,52,46,18,8],[-44,-14,-26,6,-4],[-18,10,-7,8,-1],[30,6,40,4,6],[0,26,21,7,4],[-6,14,7,2,1]])
    lock(f,a,b,tx,ty,bn)
  const cap=()=>{f.beginPath();f.moveTo(-60,-4);f.bezierCurveTo(-66,-52,-32,-62,0,-62);f.bezierCurveTo(32,-62,66,-52,60,-4)}
  cap();f.quadraticCurveTo(40,-34,0,-34);f.quadraticCurveTo(-40,-34,-60,-4);f.fillStyle=HR[0];f.fill()
  f.save();f.clip();shine(f,-38);f.restore();cap();f.stroke()
  f.fillStyle='#8fa892';for(const a of[-.9,.5]){f.save();f.translate(-46,-30);f.rotate(a);E(f,0,-16,4,10);f.fill();f.stroke();f.restore()}
  edel(f,-46,-30,17,.2)
  f.restore()
}
// white cross: arms 6 wide and 7 long on a 32 square
const flag=f=>{f.fillStyle=RD;f.fillRect(0,0,W,H);f.fillStyle='#fff';f.fillRect(13*u,6*u,6*u,20*u);f.fillRect(6*u,13*u,20*u,6*u)}
export default(c,t,i)=>{
  const F=new c.canvas.constructor(W*K,H*K),f=F.getContext('2d')
  f.scale(K,K);flag(f);f.save();f.translate(44,157);f.scale(.46,.46);girl(f,t,i);f.restore()
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
