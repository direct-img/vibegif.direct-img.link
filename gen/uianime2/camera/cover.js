// black haired girl with a purple streak peeking over a laptop eyes the live webcam suspiciously, slides the privacy cover shut so the screen flips to camera off, then gives a sly wink
const{sin,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#3b3f45',HD='#212529',HL='#868e96',ST='#b197fc',STD='#7950f2',EYE='#9775fa',ED='#5f3dc4',BL='#ffa8a8',LP='#dee2e6',LPD='#adb5bd',SCR='#a5d8ff',OFF='#ced4da',RED='#ff6b6b',CV='#b197fc',SP='#ffd43b'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const eye=(c,x,y,d,gx,gy,h)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+gx,y+gy,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+gx,y+gy-10,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+gx,y+gy+1,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+gx-4,y+gy-6,4.5,0,T);c.fill();c.beginPath();c.arc(x+gx+5,y+gy+7,2,0,T);c.fill()
  if(h){c.fillStyle=SKIN;c.fillRect(x-16,y-20,32,20*h)}c.restore()
  c.lineWidth=6;c.beginPath();if(h)c.moveTo(x-16,y-20+20*h),c.lineTo(x+16,y-20+20*h),c.lineTo(x+d*21,y-24+20*h);else c.moveTo(x-16,y-6),c.quadraticCurveTo(x,y-20,x+16,y-6),c.moveTo(x+d*15,y-7),c.lineTo(x+d*21,y-12);c.stroke()
}
const cam=(c,x,y,on)=>{c.save();c.translate(x,y);c.fillStyle=on?'#fff':'#f1f3f5';c.lineWidth=6;c.beginPath();c.roundRect(-36,-20,48,40,9);c.fill();c.stroke()
  c.beginPath();c.moveTo(12,-6);c.lineTo(32,-18);c.lineTo(32,18);c.lineTo(12,6);c.closePath();c.fill();c.stroke()
  c.fillStyle=on?RED:LPD;c.lineWidth=4;c.beginPath();c.arc(-24,-8,5,0,T);c.fill();c.stroke()
  if(!on)ds(c,12,6,RED,()=>{c.moveTo(-40,-26);c.lineTo(38,26)});c.restore()}
export default(c,t,i)=>{
  const sh=ez(t,.24,.42)-ez(t,.8,.88),on=sh<.5,hu=ez(t,.08,.16)-ez(t,.86,.96),wk=t>=.48&&t<.8,cx=158-32*sh
  const H=f=>{c.save();c.translate(104,130+2*sin(T*t));c.rotate(wk?-.08:.04*hu);c.scale(.7,.7);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=10;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,216,100,212,240);c.lineTo(44,240);c.bezierCurveTo(40,100,56,34,128,34);c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(wk){c.lineWidth=9;c.beginPath();c.moveTo(88,146);c.quadraticCurveTo(103,132,118,146);c.stroke();eye(c,153,140,1,0,2,.35)}
    else{const g=on?[6,6]:[0,2],h=on?.45:0;eye(c,103,140,-1,...g,h);eye(c,153,140,1,...g,h)}
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*46,164,15,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*46+k-2,168),c.lineTo(128+d*46+k+2,160),c.stroke()
    c.lineWidth=7;if(wk){c.beginPath();c.moveTo(112,168);c.quadraticCurveTo(120,174,128,168);c.quadraticCurveTo(136,174,146,164);c.stroke()}
    else if(on){c.beginPath();c.moveTo(116,172);c.lineTo(138,170);c.stroke()}
    else{c.beginPath();c.moveTo(116,168);c.quadraticCurveTo(128,176,140,168);c.stroke()}
    c.lineWidth=10;c.fillStyle=HAIR;c.beginPath();c.moveTo(60,240)
    c.bezierCurveTo(44,74,88,36,128,36);c.bezierCurveTo(168,36,212,74,196,240);c.lineTo(180,240)
    c.quadraticCurveTo(186,140,178,104);c.quadraticCurveTo(170,106,164,114);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
    c.quadraticCurveTo(132,96,124,88);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(104,96,94,94);c.quadraticCurveTo(90,104,86,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,140,76,240);c.closePath();c.fill();c.stroke()
    c.fillStyle=ST;c.beginPath();c.moveTo(150,48);c.quadraticCurveTo(170,70,164,114);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110);c.quadraticCurveTo(144,70,130,44);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=8;for(const[s,e]of[[1.24,1.36],[1.44,1.52]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle=STD;c.beginPath();c.moveTo(146,62);c.quadraticCurveTo(154,76,152,88);c.stroke();c.strokeStyle='#111'
  })
  c.fillStyle=LP;c.lineWidth=7;c.beginPath();c.roundRect(22,126,212,124,16);c.fill();c.stroke()
  c.fillStyle=on?SCR:OFF;c.lineWidth=5;c.beginPath();c.roundRect(36,152,184,88,6);c.fill();c.stroke()
  cam(c,128,197,on);if(on&&i%4<2)c.fillStyle=RED,c.lineWidth=3.5,c.beginPath(),c.arc(52,166,6,0,T),c.fill(),c.stroke()
  c.fillStyle='#495057';c.lineWidth=4;c.beginPath();c.roundRect(110,131,64,15,7.5);c.fill();c.stroke()
  c.fillStyle='#212529';c.beginPath();c.arc(126,138.5,6,0,T);c.fill();c.fillStyle='#74c0fc';c.beginPath();c.arc(124,136.5,2,0,T);c.fill()
  c.fillStyle=on?RED:'#868e96';c.lineWidth=3;c.beginPath();c.arc(98,138.5,4,0,T);c.fill();c.stroke()
  c.fillStyle=CV;c.lineWidth=4;c.beginPath();c.roundRect(cx-15,130,30,17,8);c.fill();c.stroke()
  c.strokeStyle=STD;c.lineWidth=2.5;c.beginPath();for(const k of[-5,0,5])c.moveTo(cx+k,134),c.lineTo(cx+k,143);c.stroke();c.strokeStyle='#111'
  c.fillStyle=LPD;c.lineWidth=7;c.beginPath();c.moveTo(16,250);c.lineTo(240,250);c.lineTo(254,264);c.lineTo(2,264);c.closePath();c.fill();c.stroke()
  if(hu>.3){const hx=cx+24,hy=118+(1-hu)*34
    c.save();c.beginPath();c.rect(0,0,256,128);c.clip()
    ds(c,26,16,STD,()=>{c.moveTo(hx+34,hy+44);c.lineTo(hx+8,hy+4)})
    c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx,hy,14,12,-.3,0,T);c.fill();c.stroke();c.restore()
    if(hu>.6){ds(c,13,7,SKIN,()=>{c.moveTo(hx-6,hy+4);c.lineTo(cx+8,138)});c.fillStyle=SKIN;c.lineWidth=4.5;for(const k of[0,1])c.beginPath(),c.ellipse(hx+5+k*9,128,5,7,0,0,T),c.fill(),c.stroke()}}
  if(wk){const q=(t-.48)/.32,r=sin(PI*min(1,q*1.5));if(r>.1){c.fillStyle=SP;c.lineWidth=3.5;const x=34,y=50;c.beginPath();c.moveTo(x,y-14*r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*2*r,y+(b-a)*2*r,x+a*14*r,y+b*14*r);c.fill();c.stroke()}}
}
