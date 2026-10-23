// new year girl in a red furisode pulling a stretchy mochi out of her ozoni bowl with chopsticks, it stretches long, she bites it and chews happily
const{sin,cos,PI,max,min,abs}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#364fc7',HD='#253789',HL='#91a7ff',EYE='#12b886',ED='#087f5b',KIM='#e03131',KD='#a61e1e',COL='#fff',COL2='#faa2c1',BOWL='#c92a2a',BI='#2b2b2b',SOUP='#ffe8cc',MOCHI='#fff',STICK='#a9744f',KAN='#ffd43b',BL='#ffa8a8',MO='#c92a2a'
const cl=x=>max(0,min(1,x)),ease=x=>x*x*(3-2*x)
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t)=>{
  const up=ease(cl(t/.38)),go=ease(cl((t-.38)/.12)),down=ease(cl((t-.72)/.26)),bite=t>=.48&&t<.72,chew=t>=.56&&t<.95,snap=t>=.56,u=snap?1-down:up
  // chopstick tip pulls up and out beside her face, swings to her mouth for the bite, then goes back to the bowl
  const [tx,ty]=snap?[136+10*down,170+40*down]:[146+44*up-54*go,210-92*up+52*go]
  // hair up in a bun
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.arc(128,34,28,0,T);c.fill();c.stroke()
  c.strokeStyle=HAIR;c.lineWidth=4;c.beginPath();c.arc(128,34,16,PI*1.1,PI*1.9);c.stroke();c.strokeStyle='#111';c.lineWidth=6
  c.fillStyle=HD;c.beginPath();c.moveTo(128,40);c.bezierCurveTo(196,40,206,100,196,150);c.lineTo(60,150);c.bezierCurveTo(50,100,60,40,128,40);c.fill();c.stroke()
  // furisode
  c.fillStyle=KIM;c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(58,198,48,262);c.lineTo(208,262);c.quadraticCurveTo(198,198,156,188);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=3;for(const[x,y]of[[70,236],[188,226],[82,208]]){for(let k=0;k<5;k++){const a=k*T/5-PI/2;c.beginPath();c.arc(x+5*cos(a),y+5*sin(a),3.5,0,T);c.fill();c.stroke()}c.fillStyle='#ffd43b';c.beginPath();c.arc(x,y,2.5,0,T);c.fill();c.fillStyle='#fff'}
  c.lineWidth=5;c.fillStyle=COL;c.beginPath();c.moveTo(108,188);c.lineTo(128,226);c.lineTo(148,188);c.lineTo(140,188);c.lineTo(128,212);c.lineTo(116,188);c.closePath();c.fill();c.stroke()
  c.fillStyle=COL2;c.beginPath();c.moveTo(100,190);c.lineTo(126,236);c.lineTo(114,236);c.lineTo(92,194);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(156,190);c.lineTo(130,236);c.lineTo(142,236);c.lineTo(164,194);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,188);c.lineTo(128,208);c.lineTo(140,188);c.lineTo(140,168);c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,188);c.moveTo(140,168);c.lineTo(140,188);c.stroke()
  // face
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(chew){const pf=1+.2*abs(sin(4*T*t));c.fillStyle=SKIN;for(const d of[-1,1])c.beginPath(),c.arc(128+d*40,162,13*pf,d<0?PI*.5:-PI*.5,d<0?PI*1.5:PI*.5),c.fill(),c.stroke()
    c.lineWidth=5;for(const x of[103,153])c.beginPath(),c.arc(x,144,12,PI*1.15,PI*1.85),c.stroke()}
  else{eye(c,103,140,-1);eye(c,153,140,1)}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,12,6,0,0,T),c.fill()
  c.lineWidth=3.5;c.fillStyle=MO;c.beginPath()
  if(bite&&!snap)c.ellipse(128,170,9,10,0,0,T),c.fill(),c.stroke()
  else if(chew)c.ellipse(128,170,4+2*abs(sin(4*T*t)),3,0,0,T),c.stroke()
  else c.moveTo(118,166),c.quadraticCurveTo(128,175,138,166),c.stroke()
  // swept bangs and thin side locks
  c.lineWidth=6;c.fillStyle=HAIR;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*52,118),c.quadraticCurveTo(128+d*62,150,128+d*56,178),c.quadraticCurveTo(128+d*50,160,128+d*44,124),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.moveTo(66,146);c.bezierCurveTo(50,74,88,40,128,40);c.bezierCurveTo(168,40,206,74,190,146)
  c.quadraticCurveTo(186,118,178,104);c.quadraticCurveTo(170,102,164,110);c.quadraticCurveTo(160,96,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,122,90);c.quadraticCurveTo(116,104,106,108);c.quadraticCurveTo(102,96,92,96);c.quadraticCurveTo(86,106,80,112);c.quadraticCurveTo(70,124,66,146);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  c.fillStyle=KAN;c.lineWidth=4;for(let k=0;k<5;k++){const a=k*T/5;c.beginPath();c.arc(160+8*cos(a),30+8*sin(a),6,0,T);c.fill();c.stroke()}
  c.fillStyle=KIM;c.beginPath();c.arc(160,30,5,0,T);c.fill();c.stroke()
  const sw=4*sin(T*t);c.lineWidth=3;c.beginPath();c.moveTo(166,38);c.lineTo(178+sw,62);c.stroke();c.fillStyle=COL2;c.beginPath();c.arc(178+sw,66,5,0,T);c.fill();c.stroke()
  // ozoni bowl
  c.lineWidth=6;c.fillStyle=BOWL;c.beginPath();c.moveTo(84,214);c.quadraticCurveTo(88,254,128,254);c.quadraticCurveTo(168,254,172,214);c.closePath();c.fill();c.stroke()
  c.fillStyle=SOUP;c.beginPath();c.ellipse(128,214,44,9,0,0,T);c.fill();c.stroke()
  c.fillStyle='#51cf66';c.lineWidth=3;c.beginPath();c.ellipse(108,214,8,3,.3,0,T);c.fill();c.stroke()
  c.fillStyle='#ffa8a8';c.beginPath();c.ellipse(112,216,5,3,0,0,T);c.fill();c.stroke()
  c.strokeStyle='#ffd43b';c.lineWidth=4;c.beginPath();c.arc(128,238,10,PI*1.1,PI*1.9);c.stroke();c.strokeStyle='#111'
  // the mochi: a blob in the bowl stretching up to the chopstick tip, snapping back after the bite
  const st=snap?0:u,mh=8+6*(1-st),bx=146,by=212
  c.fillStyle=MOCHI;c.lineWidth=4
  if(st>.05){const w=max(4,14*(1-st*.7));c.beginPath();c.moveTo(bx-14,by);c.bezierCurveTo(bx-w,by-12,tx-w,ty+18,tx-10,ty+4);c.lineTo(tx+10,ty+4);c.bezierCurveTo(tx+w,ty+18,bx+w,by-12,bx+14,by);c.closePath();c.fill();c.stroke()}
  c.beginPath();c.ellipse(bx,by-2,18,mh*.6,0,0,T);c.fill();c.stroke()
  if(!snap&&u>.05){c.beginPath();c.ellipse(tx,ty+2,13,9,0,0,T);c.fill();c.stroke()}
  // steam
  c.strokeStyle='#fff';c.lineWidth=3;for(const x of[100,118]){const p=(t*2+(x-100)/36)%1;c.globalAlpha=sin(PI*p);for(const[w,s]of[[7,'#111'],[3,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x,206-12*p),c.quadraticCurveTo(x+6,200-12*p,x,192-12*p),c.stroke()}
  c.globalAlpha=1;c.strokeStyle='#111'
  // chopsticks in her hand
  const hx=min(tx+52,222),hy=ty+28
  for(const k of[0,1])for(const[l,s]of[[9,'#111'],[4,STICK]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(hx+8+k*4,hy-2+k*6),c.lineTo(tx+(k?2:-2),ty+(k?3:-1)),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(hx,hy,13,11,-.4,0,T);c.fill();c.stroke()
  for(const[l,s]of[[30,'#111'],[19,KIM]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(214,262),c.quadraticCurveTo(214,244,hx+10,hy+8),c.stroke()
  c.strokeStyle='#111'
  if(chew&&t<.9){c.fillStyle='#ffd43b';c.lineWidth=3;for(const[x,y,o]of[[52,110,0],[206,104,.5]]){const s=8*sin(PI*((t*4+o)%1));if(s>1.5){c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}}}
}
