// manga girl with a short white bob presses a vending machine button, the can clunks out and flies to her hand, she cracks it and it fizzes all over her
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=80,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const lerp=(a,b,u)=>a+(b-a)*max(0,min(1,u)),ease=u=>(u=max(0,min(1,u)),u*u*(3-2*u))
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,13,16,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,10.5,14,0,0,T);c.clip();c.fillStyle='#111';c.fill();c.fillStyle='#777';c.beginPath();c.ellipse(x,y+13,10,6,0,0,T);c.fill();c.restore()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x-4,y-4,4,5.5,0,0,T);c.fill();c.beginPath();c.arc(x+4,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-5);c.quadraticCurveTo(x,y-20,x+16,y-5);c.moveTo(x+d*14,y-8);c.lineTo(x+d*21,y-13);c.stroke()
}
const can=(c,x,y,a,DOT)=>{
  c.save();c.translate(x,y);c.rotate(a);c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.roundRect(-9,-14,18,28,4);c.fill();c.stroke()
  c.fillStyle=DOT;c.fillRect(-7,-4,14,10);c.lineWidth=2.5;c.beginPath();c.moveTo(-9,-4);c.lineTo(9,-4);c.moveTo(-9,6);c.lineTo(9,6);c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(-4,0);c.lineTo(0,-3);c.lineTo(4,0);c.lineTo(0,3);c.fill();c.restore()
}
export default(c,t)=>{
  const DOT=tone(c,6,1.3),FINE=tone(c,4,.8)
  // vending machine
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.roundRect(10,14,92,232,8);c.fill();c.stroke()
  c.fillStyle=DOT;c.fillRect(88,20,10,222);c.lineWidth=4;c.beginPath();c.moveTo(88,17);c.lineTo(88,243);c.stroke()
  c.fillStyle='#111';c.beginPath();c.roundRect(16,20,68,16,4);c.fill();c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();for(let x=22;x<=78;x+=4)c.lineTo(x,28+3*sin(x*.5));c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(18,44,64,92,4);c.fill();c.fillStyle=FINE;c.fill();c.stroke()
  for(const y of[50,92])for(const x of[24,44,64]){can(c,x+6,y+18,0,DOT)}
  const press=t<.12,lit=t>=.06&&t<.16
  for(const x of[24,44,64]){c.fillStyle=x==64&&lit?'#111':'#fff';c.lineWidth=3;c.beginPath();c.roundRect(x+1,140,12,8,3);c.fill();c.stroke()}
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(66,158,14,24,3);c.fill();c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(73,163);c.lineTo(73,177);c.stroke()
  c.fillStyle='#111';c.beginPath();c.roundRect(20,198,62,32,5);c.fill()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(24,202,54,12,3);c.fill();c.stroke()
  // clunk
  if(t>=.1&&t<.2){c.lineWidth=4;for(let k=0;k<7;k++){const b=-PI+k*PI/6,r=lerp(30,40,(t-.1)/.1);c.beginPath();c.moveTo(51+cos(b)*r,214+sin(b)*r*.7);c.lineTo(51+cos(b)*(r+12),214+sin(b)*(r+12)*.7);c.stroke()}}
  // girl
  const s=.62,fz=t>=.46&&t<.82,dead=t>=.82,bub=t>=.46?ease((t-.46)/.1)*(1-ease((t-.72)/.12)):0
  c.save();c.translate(-10,0);c.lineWidth=5;c.fillStyle='#fff'
  for(const x of[164,190]){c.lineWidth=13;c.beginPath();c.moveTo(x,208);c.lineTo(x+(x<170?-2:2),236);c.stroke();c.lineWidth=5;c.strokeStyle='#fff';c.stroke();c.strokeStyle='#111'
    c.lineWidth=4.5;c.beginPath();c.ellipse(x+(x<170?-6:6),240,12,7,0,0,T);c.fill();c.stroke();c.fillStyle=DOT;c.beginPath();c.ellipse(x+(x<170?-6:6),242,9,3,0,0,PI);c.fill();c.fillStyle='#fff'}
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(146,188);c.lineTo(210,188);c.lineTo(220,216);c.lineTo(136,216);c.closePath();c.fill();c.fillStyle=FINE;c.fill();c.stroke()
  c.lineWidth=3;for(const x of[160,178,196])c.beginPath(),c.moveTo(x,192),c.lineTo(x+(x-178)*.4,214),c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(164,124);c.quadraticCurveTo(144,132,142,196);c.lineTo(214,196);c.quadraticCurveTo(212,132,192,124);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=DOT;c.fillRect(196,120,24,80);c.restore();c.beginPath();c.moveTo(164,124);c.quadraticCurveTo(144,132,142,196);c.lineTo(214,196);c.quadraticCurveTo(212,132,192,124);c.closePath();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(178,128);c.lineTo(178,194);c.stroke();c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(160,124);c.quadraticCurveTo(178,140,196,124);c.quadraticCurveTo(178,130,160,124);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.moveTo(178,136),c.lineTo(178+d*14,128),c.lineTo(178+d*14,144),c.closePath(),c.fill()
  c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.arc(178,136,4,0,T);c.fill();c.stroke()
  // hands: one presses the button, then both hold the can at her chest
  const hold=t>=.26&&t<.94,toss=t>=.94,[lx,ly]=t<.12?[lerp(152,114,t/.05),lerp(176,144,t/.05)]:t<.36?[lerp(114,152,(t-.12)/.1),lerp(144,176,(t-.12)/.1)]:t<.48?[lerp(152,210,(t-.36)/.06),lerp(176,152,(t-.36)/.06)]:[lerp(210,152,(t-.48)/.06),lerp(152,178,(t-.48)/.06)]
  const[cx,cy]=t<.18?[61,214]:t<.26?[lerp(61,220,(t-.18)/.08),lerp(214,164,(t-.18)/.08)-sin((t-.18)/.08*PI)*70]:toss?[lerp(220,250,(t-.94)/.06),lerp(164,40,(t-.94)/.06)]:[220,164]
  const sh=fz?2*sin(t*T*20):0
  for(const[sx,sy,hx,hy]of[[150,140,lx,ly],[206,140,hold?224:204,hold?174:184]]){c.lineWidth=15;c.beginPath();c.moveTo(sx,sy);c.lineTo(hx+sh,hy);c.stroke();c.lineWidth=7;c.strokeStyle='#fff';c.stroke();c.strokeStyle='#111'}
  if(t>=.1)can(c,cx+sh,cy,t<.26?(t-.18)*60:toss?(t-.94)*60:0,DOT)
  if(t>=.42&&t<.5){c.lineWidth=3.5;for(let k=0;k<8;k++){const b=k*PI/4,r=10+(t-.42)*120;c.beginPath();c.moveTo(220+cos(b)*r,150+sin(b)*r);c.lineTo(220+cos(b)*(r+7),150+sin(b)*(r+7));c.stroke()}}
  for(const[sx,sy,hx,hy]of[[150,140,lx,ly],[206,140,hold?224:204,hold?174:184]]){c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.arc(hx+sh,hy,7,0,T);c.fill();c.stroke()}
  // head
  c.save();c.translate(176,84);c.scale(s,s);c.translate(-128,-128)
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(fz){c.lineWidth=6;c.fillStyle='#fff';for(const x of[103,153])c.beginPath(),c.ellipse(x,140,14,17,0,0,T),c.stroke(),c.fillStyle='#111',c.beginPath(),c.arc(x,140,3.5,0,T),c.fill()
    c.lineWidth=5;c.fillStyle='#111';c.beginPath();c.moveTo(114,166);c.quadraticCurveTo(120,160,128,166);c.quadraticCurveTo(136,172,142,166);c.lineTo(138,180);c.quadraticCurveTo(128,186,118,180);c.closePath();c.fill();c.stroke()}
  else if(dead){c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,138),c.lineTo(x+15,138),c.stroke(),c.fillStyle='#111',c.beginPath(),c.arc(x,140,5,0,PI),c.fill()
    c.lineWidth=4;c.beginPath();c.moveTo(118,172);c.lineTo(138,172);c.stroke()}
  else{eye(c,103,140,-1);eye(c,153,140,1);c.lineWidth=4.5;c.beginPath();if(t<.42)c.arc(128,164,9,.15*PI,.85*PI);else c.moveTo(120,166),c.quadraticCurveTo(128,176,136,166),c.closePath();c.fillStyle='#fff';c.fill();c.stroke()}
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*38+k-3,166),c.lineTo(128+d*38+k+3,158),c.stroke()
  // white pixie hair with strand lines
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(68,172)
  c.bezierCurveTo(46,70,86,30,130,32);c.bezierCurveTo(176,34,212,72,188,172)
  c.quadraticCurveTo(184,140,178,112);c.lineTo(168,120);c.lineTo(160,100);c.lineTo(146,112);c.lineTo(136,92);c.lineTo(122,110);c.lineTo(110,94);c.lineTo(98,112);c.lineTo(86,100);c.lineTo(80,114);c.quadraticCurveTo(72,140,68,172);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;for(const[a,b,x,y]of[[96,56,86,84],[120,44,112,74],[146,46,150,76],[170,62,174,90],[108,40,92,60]])c.beginPath(),c.moveTo(a,b),c.quadraticCurveTo((a+x)/2+6,(b+y)/2,x,y),c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(130,32);c.quadraticCurveTo(140,14,154,18);c.stroke()
  c.lineWidth=8;c.beginPath();c.moveTo(150,66);c.lineTo(172,80);c.moveTo(152,80);c.lineTo(170,64);c.stroke()
  c.restore()
  // fizz eruption and drips
  if(bub>0){const top=148-bub*100,B=[]
    for(let k=0;k<7;k++){const u=k/6;B.push([220+u*4+(k%2?1:-1)*(3+u*6*bub)+3*sin(t*T*7+k),lerp(150,top,u),6+u*11*bub])}
    for(let k=0;k<5;k++){const b=-PI/2+(k-2)*.5,r=bub*(40+k*9)+((t*9+k*.3)%1)*16;B.push([214+cos(b)*r*.6,top+30+sin(b)*r*.4+r*.3,3+k%2*2])}
    c.lineWidth=10;for(const[x,y,r]of B)c.beginPath(),c.arc(x,y,r,0,T),c.stroke()
    c.fillStyle='#fff';for(const[x,y,r]of B)c.beginPath(),c.arc(x,y,r,0,T),c.fill()
    c.lineWidth=2.5;for(const[x,y,r]of B)if(r>9)c.beginPath(),c.arc(x-r*.3,y-r*.3,r*.35,PI,1.5*PI),c.stroke()
    c.fillStyle='#fff';c.lineWidth=3;for(let k=0;k<4;k++){const p=(t*5+k/4)%1;c.beginPath();c.arc(210+(k-1.5)*16*p,top-6-p*30+p*p*80,3,0,T);c.fill();c.stroke()}}
  if(dead||fz&&t>.6){c.lineWidth=4;c.fillStyle='#fff';for(const[x,y]of[[156,58],[200,60],[180,40]]){const d=dead?(t-.82)*30:0;c.beginPath();c.moveTo(x-8,y-8);c.quadraticCurveTo(x,y-14,x+8,y-8);c.lineTo(x+4,y+d);c.quadraticCurveTo(x,y+6+d,x-4,y+d);c.closePath();c.fill();c.stroke()}}
  if(fz){c.fillStyle='#fff';c.lineWidth=3.5;for(const[x,y]of[[132,74],[148,52]]){c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+8,y+14,x,y+18);c.quadraticCurveTo(x-8,y+14,x,y);c.fill();c.stroke()}}
  c.restore()
}
