// magenta twintailed chibi girl crouches and jumps to stomp a giant Z key next to a little Ctrl key, both keys clunk down and a big orange undo arrow swings back around
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=85
const SKIN='#ffe3d1',HAIR='#e64fc0',HD='#a61e8d',HL='#fde4f7',EYE='#7950f2',ED='#4c2a9e',TEE='#63e6be',TD='#0ca678',SHO='#5c7cfa',SN='#ff6b6b',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',KT='#f3f0ff',KB='#b197fc',KC='#f1f3f5',KCB='#adb5bd',AR='#ffa94d',SP='#ffd43b'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+4,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-6,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+4,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+6,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-2,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+11,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const key=(c,x,y,w,h,p,f,b,g)=>{c.fillStyle=b;c.lineWidth=6;c.beginPath();c.roundRect(x-4,y+6,w+8,h+6,14);c.fill();c.stroke()
  c.fillStyle=f;c.beginPath();c.roundRect(x,y+p*7-6,w,h-4,11);c.fill();c.stroke();g(y+p*7-6)}
export default(c,t,i)=>{
  const cr=ez(t,.02,.14)*(1-ez(t,.16,.2))+ez(t,.45,.48)*(1-ez(t,.5,.58)),air=t>=.2&&t<.46,jy=air?-38*sin(PI*(t-.2)/.26):0,kp=ez(t,.44,.47)*(1-ez(t,.62,.7))
  const u=(t-.46)/.42,ang=u>0&&u<1?-1.1*sin(PI*u)*(1-.25*u)-.15*sin(3*PI*u)*(1-u):0,hap=t>=.48&&t<.9
  ds(c,22,13,AR,()=>{c.save();c.translate(70,82);c.rotate(ang);c.arc(0,0,36,.5,PI,true);c.restore()})
  c.save();c.translate(70,82);c.rotate(ang);c.fillStyle=AR;c.lineWidth=6;c.beginPath();c.moveTo(-58,-6);c.lineTo(-14,-6);c.lineTo(-36,22);c.closePath();c.fill();c.stroke();c.restore()
  if(u>0&&u<.6)for(const k of[0,1])ds(c,6,2.5,'#fff',()=>{const r=48+k*9,b=-PI/2+ang*.5;c.arc(70,82,r,b-.1,b+.6)})
  key(c,14,198,78,44,kp*.8,KC,KCB,y=>{c.strokeStyle='#495057';c.lineWidth=5;c.beginPath();c.arc(32,y+20,8,.8,T-.8);c.moveTo(46,y+10);c.lineTo(46,y+28);c.lineTo(50,y+28);c.moveTo(42,y+15);c.lineTo(51,y+15);c.moveTo(57,y+16);c.lineTo(57,y+28);c.moveTo(57,y+20);c.quadraticCurveTo(59,y+15,65,y+16);c.moveTo(71,y+8);c.lineTo(71,y+28);c.stroke();c.strokeStyle='#111'})
  ds(c,9,4,'#fff',()=>{c.moveTo(102,212);c.lineTo(102,228);c.moveTo(94,220);c.lineTo(110,220)})
  key(c,114,170,122,70,kp,KT,KB,y=>{ds(c,18,10,'#7950f2',()=>{c.moveTo(152,y+30);c.lineTo(198,y+30);c.lineTo(152,y+56);c.lineTo(198,y+56)})})
  if(kp>.5&&t<.62){c.lineWidth=5;for(const[x1,y1,x2,y2]of[[110,168,98,158],[106,186,92,184],[240,168,252,158],[244,186,254,184]])ds(c,6,3,SP,()=>{c.moveTo(x1,y1);c.lineTo(x2,y2)})}
  const gx=176,gy=184+kp*7+jy,sq=1-.18*cr,hy=gy-34*sq-34*sq
  for(const d of[-1,1]){ds(c,15,8,SKIN,()=>{c.moveTo(gx+d*7,gy-30*sq);c.quadraticCurveTo(gx+d*(10+10*cr+(air?6:0)),gy-16*sq,gx+d*9,gy-6)})
    c.fillStyle=SN;c.lineWidth=5;c.beginPath();c.ellipse(gx+d*12,gy-4,11,7,d*(air?.3:0),0,T);c.fill();c.stroke()
    c.fillStyle='#fff';c.lineWidth=3;c.beginPath();c.rect(gx+d*12-9,gy-6,18,3);c.fill()}
  c.fillStyle=SHO;c.lineWidth=5;c.beginPath();c.moveTo(gx-15,gy-48*sq);c.lineTo(gx+15,gy-48*sq);c.lineTo(gx+19,gy-28*sq);c.lineTo(gx+2,gy-28*sq);c.lineTo(gx,gy-34*sq);c.lineTo(gx-2,gy-28*sq);c.lineTo(gx-19,gy-28*sq);c.closePath();c.fill();c.stroke()
  const ay=air?-1:hap?-.6:cr>.3?.6:.2
  for(const d of[-1,1]){const hx=gx+d*(hap?30:air?24:26),hhy=hy+16+(ay<0?-34*(-ay):24*ay)
    ds(c,14,8,TEE,()=>{c.moveTo(gx+d*12,hy+10);c.lineTo(gx+d*16,hy+16)})
    ds(c,13,7,SKIN,()=>{c.moveTo(gx+d*15,hy+14);c.lineTo(hx,hhy)})
    c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.arc(hx,hhy,7,0,T);c.fill();c.stroke()}
  c.fillStyle=TEE;c.lineWidth=5;c.beginPath();c.moveTo(gx-12,hy+6);c.quadraticCurveTo(gx-18,hy+8,gx-17,gy-44*sq);c.lineTo(gx+17,gy-44*sq);c.quadraticCurveTo(gx+18,hy+8,gx+12,hy+6);c.closePath();c.fill();c.stroke()
  c.fillStyle=TD;c.lineWidth=3.5;c.beginPath();for(let k=0;k<10;k++){const r=k%2?3:7,b=k*PI/5-PI/2;c.lineTo(gx+cos(b)*r,hy+20*sq+sin(b)*r)}c.closePath();c.fill();c.stroke()
  c.save();c.translate(gx,hy+8);c.rotate(air?-.06:hap?.05*sin(T*t*3):0);c.scale(.46,.46);c.translate(-128,-186);c.lineWidth=11
  for(const d of[-1,1]){c.save();c.translate(128+d*62,82);c.rotate(d*(air?.45:-.05+.12*sin(T*t*2+d)))
    c.fillStyle=HAIR;c.beginPath();c.moveTo(0,0);c.bezierCurveTo(d*44,0,d*52,60,d*34,110);c.quadraticCurveTo(d*26,128,d*8,124);c.bezierCurveTo(d*24,80,d*8,36,0,0);c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=6;c.beginPath();c.moveTo(d*14,18);c.bezierCurveTo(d*30,42,d*34,74,d*26,104);c.stroke();c.strokeStyle='#111';c.lineWidth=11
    c.fillStyle=SP;c.beginPath();c.arc(0,0,14,0,T);c.fill();c.stroke();c.restore()}
  c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(196,34,206,96,198,150);c.lineTo(58,150);c.bezierCurveTo(50,96,60,34,128,34);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(hap){c.lineWidth=11;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}
  else if(air||cr>.5){c.lineWidth=10;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*38,128),c.lineTo(128+d*18,140),c.lineTo(128+d*38,152),c.stroke()}
  else eye(c,103,140,-1),eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*46,164,15,8,0,0,T),c.fill()
  c.lineWidth=5;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*46+k-2,168),c.lineTo(128+d*46+k+2,160),c.stroke()
  c.lineWidth=7;c.fillStyle=MO;c.beginPath()
  if(hap||air)c.moveTo(110,163),c.quadraticCurveTo(128,168,146,163),c.quadraticCurveTo(144,190,128,190),c.quadraticCurveTo(112,190,110,163)
  else c.moveTo(118,166),c.quadraticCurveTo(128,170,138,166),c.quadraticCurveTo(136,178,128,178),c.quadraticCurveTo(120,178,118,166)
  c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,hap||air?191:179,9,7,0,0,T);c.fill();c.restore()
  c.lineWidth=11;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,146)
  c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,146)
  c.quadraticCurveTo(186,116,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,124,90);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(106,96,96,94);c.quadraticCurveTo(90,104,86,112)
  c.quadraticCurveTo(80,104,78,102);c.quadraticCurveTo(70,120,70,146);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(126,38);c.quadraticCurveTo(120,6,154,10);c.quadraticCurveTo(130,20,138,38);c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=8;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.restore()
}
