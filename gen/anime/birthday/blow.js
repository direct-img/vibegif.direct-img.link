// birthday girl in a party hat behind her cake: makes a wish, puffs her cheeks and blows the candles out one by one, confetti pops, the candles spark back on
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#8f1d4a',HD='#6a1236',HL='#f3a6c4',EYE='#4dabf7',ED='#1864ab',DRESS='#ffd43b',DD='#fab005',HAT='#4dabf7',HS='#fff',POM='#ff6b6b',CAKE='#fff4e6',CR='#f783ac',CRD='#e64980',BERRY='#fa5252',CAN=['#69db7c','#b197fc','#ffa94d'],FL='#ffd43b',FO='#ff922b',BL='#ffa8a8',MO='#c92a2a',CONF=['#ff6b6b','#4dabf7','#ffd43b','#69db7c','#b197fc']
const cl=x=>max(0,min(1,x))
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t)=>{
  const wish=t<.16,puff=t>=.16&&t<.26,blow=t>=.26&&t<.56,happy=t>=.56&&t<.84,out=[.32,.4,.48],relit=t>=.84
  c.save();c.translate(128,-12);c.scale(.86,.86);c.translate(-128,0)
  // braid over her shoulder, then back hair
  c.lineWidth=6;c.fillStyle=HAIR;for(let k=0;k<5;k++){const y=150+k*18;c.beginPath();c.ellipse(186+k*2,y,13-k,11,.2,0,T);c.fill();c.stroke()}
  c.fillStyle='#69db7c';c.beginPath();c.arc(196,240,7,0,T);c.fill();c.stroke()
  c.fillStyle=HD;c.beginPath();c.moveTo(128,40);c.bezierCurveTo(196,40,206,100,196,156);c.lineTo(60,156);c.bezierCurveTo(50,100,60,40,128,40);c.fill();c.stroke()
  // dress shoulders
  c.fillStyle=DRESS;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(60,198,50,262);c.lineTo(206,262);c.quadraticCurveTo(196,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.quadraticCurveTo(128+d*22,190,128+d*30,194),c.quadraticCurveTo(128+d*24,210,128,206),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.lineWidth=6;c.beginPath();c.rect(116,170,24,26);c.fill();c.beginPath();c.moveTo(116,170);c.lineTo(116,192);c.moveTo(140,170);c.lineTo(140,192);c.stroke()
  // face
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(puff||blow){const pf=puff?1.25:1.1;c.fillStyle=SKIN;for(const d of[-1,1])c.beginPath(),c.arc(128+d*42,158,14*pf,d<0?PI*.5:-PI*.5,d<0?PI*1.5:PI*.5),c.fill(),c.stroke()}
  if(wish||happy||puff){c.lineWidth=6;for(const x of[103,153])c.beginPath(),wish||puff?c.arc(x,140,12,PI*.15,PI*.85):c.arc(x,146,13,PI*1.15,PI*1.85),c.stroke()}
  else{eye(c,103,140,-1);eye(c,153,140,1)}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,13,7,0,0,T),c.fill()
  c.lineWidth=3.5;c.fillStyle=MO;c.beginPath()
  if(blow)c.ellipse(128,170,5,6,0,0,T),c.fill(),c.stroke()
  else if(puff)c.moveTo(122,170),c.lineTo(134,170),c.stroke()
  else if(happy)c.moveTo(114,164),c.quadraticCurveTo(128,186,142,164),c.closePath(),c.fill(),c.stroke()
  else c.arc(128,166,7,.15*PI,.85*PI),c.stroke()
  // bangs
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,146);c.bezierCurveTo(50,74,88,40,128,40);c.bezierCurveTo(168,40,206,74,190,146)
  c.quadraticCurveTo(186,118,178,104);c.quadraticCurveTo(170,102,164,110);c.quadraticCurveTo(160,96,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,122,90);c.quadraticCurveTo(116,104,106,108);c.quadraticCurveTo(102,96,92,96);c.quadraticCurveTo(86,106,80,112);c.quadraticCurveTo(70,124,66,146);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  // party hat
  c.save();c.translate(82,74);c.rotate(-.55)
  c.lineWidth=6;c.fillStyle=HAT;c.beginPath();c.moveTo(-24,6);c.lineTo(0,-52);c.lineTo(24,6);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.strokeStyle=HS;c.lineWidth=7;for(const y of[-36,-14])c.beginPath(),c.moveTo(-30,y+12),c.lineTo(30,y-4),c.stroke();c.restore()
  c.beginPath();c.moveTo(-24,6);c.lineTo(0,-52);c.lineTo(24,6);c.closePath();c.stroke()
  c.fillStyle=POM;c.beginPath();c.arc(0,-54,9,0,T);c.fill();c.stroke()
  c.restore()
  c.restore()
  // wind lines while blowing
  if(blow)for(const[dx,o]of[[-14,0],[0,.33],[14,.66]]){const p=(t*8+o)%1;for(const[w,s]of[[7,'#111'],[3,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(128+dx*.6,142+10*p),c.lineTo(128+dx*(1+.5*p),152+10*p),c.stroke()}
  c.strokeStyle='#111'
  // cake
  c.lineWidth=6;c.fillStyle=CAKE;c.beginPath();c.moveTo(52,206);c.lineTo(52,246);c.quadraticCurveTo(128,262,204,246);c.lineTo(204,206);c.closePath();c.fill();c.stroke()
  c.strokeStyle=CR;c.lineWidth=5;c.beginPath();c.moveTo(56,230);c.quadraticCurveTo(128,244,200,230);c.stroke();c.strokeStyle='#111'
  c.fillStyle=CR;c.beginPath();c.moveTo(50,206);for(let k=0;k<=8;k++){const x=50+k*19.5;c.quadraticCurveTo(x-10,222+(k%2)*6,x,210)}c.lineTo(206,206);c.closePath();c.fill();c.stroke()
  c.beginPath();c.ellipse(128,204,78,16,0,0,T);c.fill();c.stroke()
  c.fillStyle=BERRY;c.lineWidth=4;for(const x of[78,178])c.beginPath(),c.moveTo(x,190),c.quadraticCurveTo(x+11,196,x,212),c.quadraticCurveTo(x-11,196,x,190),c.fill(),c.stroke()
  // candles and flames
  for(const[k,x]of[[0,100],[1,128],[2,156]]){
    c.fillStyle=CAN[k];c.lineWidth=5;c.beginPath();c.roundRect(x-6,178,12,24,3);c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=3;for(const y of[186,196])c.beginPath(),c.moveTo(x-5,y+3),c.lineTo(x+5,y-3),c.stroke();c.strokeStyle='#111'
    c.lineWidth=3;c.beginPath();c.moveTo(x,178);c.lineTo(x,172);c.stroke()
    const lit=t<out[k]||relit,lean=blow&&lit?6*cl((t-.26)/.06):0
    if(lit){const f=1+.12*sin(4*T*t+k*2),pop=relit?cl((t-.84)/.06):1
      c.save();c.translate(x,171);c.scale(pop,pop);c.fillStyle=FO;c.lineWidth=4;c.beginPath();c.moveTo(0,0);c.bezierCurveTo(-9,-2,-6,-14,lean,-22*f);c.bezierCurveTo(6,-14,9,-2,0,0);c.fill();c.stroke()
      c.fillStyle=FL;c.beginPath();c.moveTo(0,-3);c.quadraticCurveTo(-4,-8,lean*.6,-14*f);c.quadraticCurveTo(4,-8,0,-3);c.fill();c.restore()
      if(relit&&t<.92){c.lineWidth=3;for(let a=0;a<4;a++)c.beginPath(),c.moveTo(x+12*cos(a*PI/2+.7),160+12*sin(a*PI/2+.7)),c.lineTo(x+18*cos(a*PI/2+.7),160+18*sin(a*PI/2+.7)),c.stroke()}}
    else{const p=cl((t-out[k])/.3);if(p<1){c.globalAlpha=1-p;for(const[w,s]of[[7,'#111'],[3,'#dee2e6']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x,170),c.bezierCurveTo(x-8,158-20*p,x+8,148-20*p,x,136-20*p),c.stroke();c.globalAlpha=1;c.strokeStyle='#111'}}
  }
  // confetti burst
  if(happy){const p=cl((t-.56)/.28);for(let k=0;k<10;k++){const a=-PI/2+(k-4.5)*.3,r=40+70*p,x=128+r*cos(a)*1.4,y=130+r*sin(a)+90*p*p;c.save();c.translate(x,y);c.rotate(k+p*6);c.fillStyle=CONF[k%5];c.lineWidth=3;c.beginPath();c.rect(-5,-3,10,6);c.fill();c.stroke();c.restore()}}
}
