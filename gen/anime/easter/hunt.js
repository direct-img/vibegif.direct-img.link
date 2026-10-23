// easter chibi with bunny-ear headband and a basket: spots a painted egg in the grass, pulls it out, holds it up sparkling, drops it in her basket
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=20,delay=80
const SKIN='#ffe3d1',HAIR='#ffe066',HD='#f59f00',HL='#fff9db',EYE='#f06595',ED='#a61e4d',DRESS='#a5d8ff',DD='#4dabf7',EAR='#fff',PINK='#faa2c1',BASK='#c08a5e',BD='#8d6346',GRASS='#69db7c',GD='#2f9e44',SHOE='#f783ac',BL='#ffa8a8',MO='#c92a2a',EGG=[['#b197fc','#fff'],['#f783ac','#ffd43b'],['#4dabf7','#fff'],['#ffd43b','#69db7c']]
const cl=x=>max(0,min(1,x)),ease=x=>x*x*(3-2*x),lerp=(a,b,k)=>[a[0]+(b[0]-a[0])*k,a[1]+(b[1]-a[1])*k]
const eye=(c,x,y,d,dx,dy)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip()
  c.fillStyle=EYE;c.beginPath();c.ellipse(x+dx,y+2+dy,11.5,15,0,0,T);c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x+dx,y-8+dy,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+dx,y+3+dy,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4+dx,y-5+dy,4.5,0,T);c.fill();c.beginPath();c.arc(x+5+dx,y+8+dy,2,0,T);c.fill();c.restore()
  c.lineWidth=3.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const egg=(c,x,y,s,k,a=0)=>{const[f,p]=EGG[k];c.save();c.translate(x,y);c.rotate(a);c.scale(s,s)
  const sh=()=>{c.beginPath();c.moveTo(0,-15);c.bezierCurveTo(11,-15,13,4,12,7);c.bezierCurveTo(10,15,-10,15,-12,7);c.bezierCurveTo(-13,4,-11,-15,0,-15)}
  sh();c.fillStyle=f;c.lineWidth=4/s;c.fill();c.save();c.clip();c.strokeStyle=p;c.lineWidth=3.5/s;c.beginPath();for(let i=0;i<=6;i++)c.lineTo(-14+i*4.7,(i%2?-1:3));c.stroke()
  c.fillStyle=p;for(const[px,py]of[[-5,-8],[5,-8],[0,9]])c.beginPath(),c.arc(px,py,2.2,0,T),c.fill();c.restore();sh();c.stroke();c.restore()}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[px,py,qx,qy]of[[r,0,r*.18,-r*.18],[0,r,r*.18,r*.18],[-r,0,-r*.18,r*.18],[0,-r,-r*.18,-r*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  const BK=[78,198],GR=[192,222],UP=[170,64]
  const H=t<.15?lerp(BK,GR,ease(t/.15)):t<.3?GR:t<.5?lerp(GR,UP,ease((t-.3)/.2)):t<.78?UP:t<.86?lerp(UP,[150,192],ease((t-.78)/.08)):t<.95?lerp([150,192],BK,ease((t-.86)/.09)):BK
  const held=t>=.3&&t<.95,inGrass=t<.3||t>=.9,up=t>=.5&&t<.78,Z=.62,look=t<.3?[4,6]:t<.5?[3,-2]:t<.78?[3,-6]:[-3,4],pop=t>=.9?ease(cl((t-.9)/.06)):1
  // grass tuft with an egg peeking out
  const blades=(x0,y0,n,hs,sw)=>{c.fillStyle=GRASS;c.lineWidth=4;for(let k=0;k<n;k++){const x=x0+k*13,h=hs[k%hs.length],b=sw*sin(T*t+k);c.beginPath();c.moveTo(x-8,y0);c.quadraticCurveTo(x-2,y0-h*.6,x+b,y0-h);c.quadraticCurveTo(x+3,y0-h*.5,x+8,y0);c.closePath();c.fill();c.stroke()}}
  blades(162,242,6,[30,38,26],3)
  if(inGrass)egg(c,GR[0],228,.95*pop,0,-.2)
  blades(168,248,6,[18,24,14],1.5)
  if(t>=.9&&t<.98){c.fillStyle='#ffd43b';c.lineWidth=3;spark(c,GR[0]+18,206,8*sin(PI*(t-.9)/.08))}
  // legs and shoes
  for(const d of[-1,1])for(const[l,s]of[[15,'#111'],[8,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(112+d*12,212),c.lineTo(112+d*12,234),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SHOE;for(const d of[-1,1])c.beginPath(),c.ellipse(112+d*14,240,11,6.5,0,0,T),c.fill(),c.stroke()
  // dress
  c.lineWidth=5;c.fillStyle=DRESS;c.beginPath();c.moveTo(96,166);c.quadraticCurveTo(86,170,84,184);c.lineTo(72,220);c.quadraticCurveTo(112,230,152,220);c.lineTo(140,184);c.quadraticCurveTo(138,170,128,166);c.closePath();c.fill();c.stroke()
  c.strokeStyle=DD;c.lineWidth=3;c.beginPath();c.moveTo(76,214);c.quadraticCurveTo(112,222,148,214);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(112,170),c.quadraticCurveTo(112+d*14,166,112+d*16,176),c.quadraticCurveTo(112+d*8,184,112,176),c.fill(),c.stroke()
  // basket arm and basket
  for(const[l,s]of[[15,'#111'],[8,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(94,178),c.lineTo(70,196),c.stroke()
  c.strokeStyle='#111';c.lineWidth=9;c.beginPath();c.arc(60,206,22,PI*1.05,PI*1.95);c.stroke();c.strokeStyle=BASK;c.lineWidth=4;c.stroke();c.strokeStyle='#111'
  egg(c,50,200,.75,1,-.3);egg(c,68,198,.75,2,.25);egg(c,59,195,.7,3,0)
  c.lineWidth=5;c.fillStyle=BASK;c.beginPath();c.moveTo(34,204);c.lineTo(86,204);c.lineTo(80,230);c.quadraticCurveTo(60,236,40,230);c.closePath();c.fill();c.stroke()
  c.strokeStyle=BD;c.lineWidth=3;for(const y of[212,220])c.beginPath(),c.moveTo(38,y),c.lineTo(83,y),c.stroke();for(const x of[48,60,72])c.beginPath(),c.moveTo(x,206),c.lineTo(x,230),c.stroke();c.strokeStyle='#111'
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.arc(70,198,7,0,T);c.fill();c.stroke()
  // head
  c.save();c.translate(112,72);c.scale(Z,Z);c.translate(-128,-40)
  c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,206,96,198,150);c.quadraticCurveTo(186,162,170,152);c.lineTo(86,152);c.quadraticCurveTo(70,162,58,150);c.bezierCurveTo(50,96,60,36,128,36);c.fill();c.stroke()
  // bunny-ear headband
  for(const d of[-1,1]){c.save();c.translate(128+d*30,44);c.rotate(d*(.18+(d>0?.5+.12*sin(2*T*t):0)))
    c.fillStyle=EAR;c.lineWidth=8;c.beginPath();c.ellipse(0,-44,15,44,0,0,T);c.fill();c.stroke();c.fillStyle=PINK;c.beginPath();c.ellipse(0,-42,7,32,0,0,T);c.fill();c.restore()}
  c.fillStyle=SKIN;c.lineWidth=8;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(up){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,146,13,PI*1.15,PI*1.85),c.stroke()}
  else eye(c,103,140,-1,...look),eye(c,153,140,1,...look)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,7,0,0,T),c.fill()
  c.lineWidth=4.5;c.fillStyle=MO;c.beginPath()
  if(up||t>=.3&&t<.5)c.moveTo(114,164),c.quadraticCurveTo(128,186,142,164),c.closePath(),c.fill(),c.stroke();else c.ellipse(128,170,6,7,0,0,T),c.fill(),c.stroke()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,146);c.bezierCurveTo(50,74,88,38,128,38);c.bezierCurveTo(168,38,206,74,190,146)
  c.quadraticCurveTo(186,118,178,104);c.quadraticCurveTo(170,102,164,110);c.quadraticCurveTo(160,96,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,122,90);c.quadraticCurveTo(116,104,106,108);c.quadraticCurveTo(102,96,92,96);c.quadraticCurveTo(86,106,80,112);c.quadraticCurveTo(70,124,66,146);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,58,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  c.fillStyle=PINK;c.lineWidth=8;c.beginPath();c.roundRect(76,52,104,12,6);c.fill();c.stroke()
  c.restore()
  // reaching arm with the egg
  const E=[150+.3*(H[0]-150),Math.min(176,H[1]+40)]
  for(const[l,s]of[[15,'#111'],[8,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(130,178),c.quadraticCurveTo(E[0]+14,E[1],H[0],H[1]),c.stroke()
  c.strokeStyle='#111'
  if(held)egg(c,H[0],H[1]-12,1.05,0,0)
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.arc(H[0],H[1],8,0,T);c.fill();c.stroke()
  if(up){c.fillStyle='#ffd43b';c.lineWidth=3;for(const[dx,dy,o]of[[-22,-26,0],[24,-30,.5],[26,4,.25]]){const s=10*sin(PI*((((t-.5)/.28)*2+o)%1));if(s>1.5)spark(c,H[0]+dx,H[1]+dy-12,s)}}
}
