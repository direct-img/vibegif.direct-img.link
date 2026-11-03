// Polish flag waving on a silver pole: white over red, with a counterchanged anime girl printed in the middle - red hair, twin braids and a poppy and daisy wreath in the white band, her braids and folk blouse turning white in the red band - who tilts her head and blinks as the flag ripples
export const frames=20,delay=70
const P=Math.PI*2,W=232,H=145,K=2,X0=14,Y0=26
const R='#dc143c',D='#5a0b1d',SK='#ffe4d6',SK2='#f6c4b4'
const wav=(u,t)=>(u/W)**1.1*(7*Math.sin(P*(u/170-t))+2.2*Math.sin(P*(u/85-2*t)+1))
const E=(f,x,y,a,b,r=0)=>(f.beginPath(),f.ellipse(x,y,a,b,r,0,P))
// palettes for the two halves: hair, hair shade, hair shine, cloth, cloth shade
const TOP=[R,'#a80f2e','#f45d7c',R,'#a80f2e'],BOT=['#fff','#efd0d6','#fff','#fff','#f3d6dc']
const eye=(f,x,y,m,o)=>{
  f.save();f.translate(x,y);f.scale(m,1);f.strokeStyle=D
  if(o<.2){f.lineWidth=3.2;f.beginPath();f.moveTo(-11,2);f.quadraticCurveTo(2,9,14,0);f.lineTo(17,-2);f.stroke();f.restore();return}
  f.translate(0,10);f.scale(1,o);f.translate(0,-10)
  f.beginPath();f.moveTo(-11,-7);f.bezierCurveTo(-6,-16,6,-16,13,-8);f.bezierCurveTo(14,0,12,8,6,11)
  f.bezierCurveTo(0,13,-8,11,-10,6);f.bezierCurveTo(-12,2,-12,-2,-11,-6);f.fillStyle='#fff';f.fill()
  f.save();f.clip()
  E(f,1,1,9.5,13.5);f.fillStyle='#6d93c2';f.fill();f.save();f.clip()
  f.fillStyle='#2e4c7c';f.fillRect(-12,-16,26,11);E(f,1,9,6.5,4);f.fillStyle='#b4d4f0';f.fill();f.restore()
  E(f,1,2,4.2,6.2);f.fillStyle='#1b2340';f.fill()
  E(f,-3.4,-5,3.6,4.4);f.fillStyle='#fff';f.fill();E(f,5,7,1.8,1.8);f.fill()
  f.restore()
  f.lineWidth=3.6;f.beginPath();f.moveTo(-12,-6);f.bezierCurveTo(-6,-17,6,-17,14,-8);f.lineTo(18,-9);f.stroke()
  f.lineWidth=1.2;f.beginPath();f.moveTo(1,12.5);f.quadraticCurveTo(6,12,9,9.5);f.stroke()
  f.restore()
}
const shine=(f,p,y)=>{f.fillStyle=p[2];f.beginPath();for(let x=-70;x<=70;x+=7)f.lineTo(x,y+6-Math.abs(x)*.12+(x/7%2?6:0));for(let x=70;x>=-70;x-=7)f.lineTo(x,y-4-Math.abs(x)*.12);f.fill()}
// one lock of hair from a root span at the crown to a tip
const lock=(f,p,a,b,tx,ty,bn)=>{
  const s=()=>{f.beginPath();f.moveTo(a,-44);f.quadraticCurveTo(a+bn,(ty-44)/2,tx,ty);f.quadraticCurveTo(b+bn,(ty-44)/2+6,b,-44);f.closePath()}
  s();f.fillStyle=p[0];f.fill();f.save();f.clip();shine(f,p,-38);f.fillStyle=p[1];f.fillRect(-80,ty-7,160,30);f.restore();s();f.stroke()
}
// braid hanging from behind the ear over the shoulder, ending in a ribbon and tuft
const braid=(f,p,m,sw)=>{
  const q=s=>[m*(40+18*s-6*s*s)+sw*s*s,34+138*s]
  const L=(x,y,r,a)=>{f.save();f.translate(x,y);f.rotate(a);f.beginPath();f.moveTo(-r,0);f.quadraticCurveTo(0,-r*.8,r,0);f.quadraticCurveTo(0,r*.8,-r,0);f.restore()}
  for(let k=0;k<11;k++){const s=k/11,[x,y]=q(s),r=14-4*s,a=(k%2?.55:-.55)*m
    L(x,y,r,a);f.fillStyle=p[0];f.fill();f.save();f.clip();L(x+2,y+3,r,a);f.fillStyle=p[1];f.fill();f.restore();L(x,y,r,a);f.stroke()}
  const[x,y]=q(1)
  f.beginPath();f.moveTo(x-5,y-6);f.quadraticCurveTo(x-9,y+10,x-6+sw*.3,y+20);f.lineTo(x,y+14);f.lineTo(x+6+sw*.3,y+20);f.quadraticCurveTo(x+9,y+10,x+5,y-6)
  f.closePath();f.fillStyle=p[0];f.fill();f.stroke()
  f.fillStyle=R;f.beginPath();f.moveTo(x,y-6);f.lineTo(x-12,y-13);f.lineTo(x-11,y+1);f.closePath();f.moveTo(x,y-6);f.lineTo(x+12,y-13);f.lineTo(x+11,y+1);f.closePath();f.fill();f.stroke()
  E(f,x,y-6,3.5,3.5);f.fill();f.stroke()
}
const girl=(f,p,t,i)=>{
  const sw=Math.sin(P*t),bl=i==12?.45:i==13?0:1
  f.lineJoin=f.lineCap='round';f.strokeStyle=D;f.lineWidth=2.6
  f.save();f.translate(0,60);f.rotate(sw*.045);f.translate(0,-60)
  // back hair, bun at the nape
  f.beginPath();f.moveTo(-54,-30);f.bezierCurveTo(-68,0,-62,36,-44,52);f.lineTo(44,52);f.bezierCurveTo(62,36,68,0,54,-30);f.closePath();f.fillStyle=p[1];f.fill();f.stroke()
  f.restore()
  // neck
  f.fillStyle=SK;f.beginPath();f.moveTo(-12,50);f.lineTo(-13,96);f.lineTo(13,96);f.lineTo(12,50);f.fill();f.stroke()
  f.fillStyle=SK2;f.beginPath();f.moveTo(-12.5,56);f.quadraticCurveTo(0,76,12.5,56);f.lineTo(12,50);f.lineTo(-12,50);f.fill()
  // folk blouse with puffed sleeves
  f.fillStyle=p[3];f.beginPath();f.moveTo(-14,84);f.bezierCurveTo(-32,90,-52,90,-62,104);f.bezierCurveTo(-74,120,-76,160,-72,210)
  f.lineTo(72,210);f.bezierCurveTo(76,160,74,120,62,104);f.bezierCurveTo(52,90,32,90,14,84);f.quadraticCurveTo(0,96,-14,84);f.fill();f.stroke()
  f.fillStyle=p[4];for(const m of[-1,1]){f.beginPath();f.moveTo(m*62,104);f.bezierCurveTo(m*74,120,m*76,160,m*72,210);f.lineTo(m*58,210)
    f.bezierCurveTo(m*60,170,m*58,140,m*54,124);f.closePath();f.fill()}
  for(const m of[-1,1]){f.beginPath();f.moveTo(m*54,124);f.bezierCurveTo(m*58,140,m*60,170,m*58,210);f.stroke()
    f.fillStyle=R;for(let k=0;k<4;k++){f.beginPath();f.moveTo(m*61,122+k*20);f.lineTo(m*66,128+k*20);f.lineTo(m*61,134+k*20);f.lineTo(m*56,128+k*20);f.fill()}}
  // embroidered collar and bow
  for(const m of[-1,1]){f.beginPath();f.moveTo(m*1,98);f.quadraticCurveTo(m*12,90,m*15,84);f.quadraticCurveTo(m*36,90,m*38,100)
    f.quadraticCurveTo(m*30,118,m*5,110);f.closePath();f.fillStyle='#fff';f.fill();f.stroke()
    f.fillStyle=R;for(const[a,b]of[[13,101],[22,104],[30,103]]){E(f,m*a,b,2.6,2.6);f.fill()}}
  f.fillStyle=R;f.beginPath();f.moveTo(0,106);f.lineTo(-14,97);f.lineTo(-13,116);f.closePath();f.moveTo(0,106);f.lineTo(14,97);f.lineTo(13,116);f.closePath();f.fill();f.stroke()
  E(f,0,106,4.5,4.5);f.fill();f.stroke()
  // head
  f.save();f.translate(0,60);f.rotate(sw*.045);f.translate(0,-60)
  for(const m of[-1,1])braid(f,p,m,-sw*4)
  f.beginPath();f.moveTo(-47,-14);f.bezierCurveTo(-47,24,-30,54,0,67);f.bezierCurveTo(30,54,47,24,47,-14);f.closePath();f.fillStyle=SK;f.fill();f.stroke()
  f.fillStyle=SK2;f.beginPath();f.moveTo(-47,-14);f.lineTo(47,-14);f.lineTo(46,8);f.quadraticCurveTo(0,0,-46,8);f.fill()
  f.fillStyle='#ffbfba';E(f,-30,37,9,4.5);f.fill();E(f,30,37,9,4.5);f.fill()
  f.strokeStyle='#ec8f98';f.lineWidth=1.2;for(const m of[-1,1])for(let k=0;k<3;k++){f.beginPath();f.moveTo(m*(25+k*5),39.5);f.lineTo(m*(28+k*5),34.5);f.stroke()}
  eye(f,-21,21,-1,bl);eye(f,21,21,1,bl)
  f.strokeStyle=D;f.lineWidth=1.3;f.beginPath();f.moveTo(1.5,33);f.lineTo(-.5,35.5);f.stroke()
  f.fillStyle='#b5303f';f.beginPath();f.moveTo(-8,45);f.quadraticCurveTo(0,47.5,8,45);f.quadraticCurveTo(5,56,0,56);f.quadraticCurveTo(-5,56,-8,45);f.fill()
  f.fillStyle='#ff8d93';E(f,0,53,3.8,2.2);f.fill();f.lineWidth=1.6;f.beginPath();f.moveTo(-8,45);f.quadraticCurveTo(0,47.5,8,45);f.stroke()
  // side locks, bangs, crown
  f.lineWidth=2.4
  for(const[a,b,tx,ty,bn]of[[-62,-40,-52,50,-10],[40,62,52,50,10],[-60,-34,-48,22,-8],[-30,-2,-40,6,-6],[24,52,46,18,8],[-44,-14,-26,6,-4],[-18,10,-7,8,-1],[30,6,40,4,6],[0,26,21,7,4],[-6,14,7,2,1]])
    lock(f,p,a,b,tx,ty,bn)
  const cap=()=>{f.beginPath();f.moveTo(-60,-4);f.bezierCurveTo(-66,-52,-32,-62,0,-62);f.bezierCurveTo(32,-62,66,-52,60,-4)}
  cap();f.quadraticCurveTo(40,-34,0,-34);f.quadraticCurveTo(-40,-34,-60,-4);f.fillStyle=p[0];f.fill()
  f.save();f.clip();shine(f,p,-38);f.restore();cap();f.stroke()
  f.lineWidth=1.3;f.strokeStyle=p[1];for(const x of[-22,4,28]){f.beginPath();f.moveTo(x*.8,-55);f.quadraticCurveTo(x+3,-40,x,-28);f.stroke()}
  // wreath: red poppies and white daisies
  f.strokeStyle=D;f.lineWidth=1.4
  for(let k=0;k<7;k++){const a=Math.PI*(1.1+k*.133),x=Math.cos(a)*57,y=-30+Math.sin(a)*28
    if(k%2){f.fillStyle=R;for(let q=0;q<5;q++){E(f,x+Math.cos(q*1.26+k)*4.5,y+Math.sin(q*1.26+k)*4.5,5,5);f.fill();f.stroke()}E(f,x,y,2.8,2.8);f.fillStyle=D;f.fill()}
    else{f.fillStyle='#fff';for(let q=0;q<8;q++){f.save();f.translate(x,y);f.rotate(q*P/8+k);E(f,0,-5.5,2.4,4.6);f.fill();f.stroke();f.restore()}E(f,x,y,3.2,3.2);f.fillStyle='#f4c430';f.fill();f.stroke()}}
  f.restore()
}
export default(c,t,i)=>{
  const F=new c.canvas.constructor(W*K,H*K),f=F.getContext('2d')
  f.scale(K,K);f.fillStyle='#fff';f.fillRect(0,0,W,H/2);f.fillStyle=R;f.fillRect(0,H/2,W,H/2)
  for(const[p,y]of[[TOP,0],[BOT,H/2]]){f.save();f.beginPath();f.rect(0,y,W,H/2);f.clip();f.translate(118,40);f.scale(.52,.52);girl(f,p,t,i);f.restore()}
  for(let u=0;u<W;u++)c.drawImage(F,u*K,0,K,H*K,X0+u,Y0+wav(u,t),1.6,H)
  c.globalCompositeOperation='source-atop'
  for(let u=0;u<W;u++){const s=Math.max(-6,Math.min(6,Math.round((wav(u+1,t)-wav(u-1,t))*5)))
    if(s){c.fillStyle=s>0?`rgba(0,0,0,${s*.03})`:`rgba(255,255,255,${-s*.045})`;c.fillRect(X0+u,Y0+wav(u,t)-1,1.6,H+2)}}
  c.globalCompositeOperation='source-over'
  c.beginPath();for(let u=0;u<=W;u+=2)c.lineTo(X0+u,Y0+wav(u,t));for(let u=W;u>=0;u-=2)c.lineTo(X0+u,Y0+H+wav(u,t))
  c.closePath();c.lineWidth=2.4;c.strokeStyle='#111';c.stroke()
  c.lineWidth=2;c.fillStyle='#c3c8d1';c.beginPath();c.roundRect(7,18,8,236,3);c.fill();c.stroke()
  c.fillStyle='#eef1f5';c.fillRect(9,20,2,232)
  c.fillStyle='#f0be3c';E(c,11,12,7,7);c.fill();c.stroke();c.fillStyle='#fff3c4';E(c,9,10,2.2,2.2);c.fill()
}
