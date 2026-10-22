// chibi kendo girl in full armor raises her shinai overhead, then stomps and strikes with a shout and an impact flash
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=70,rim=4
const dots=(col,r,s=6)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[s/2,s/2],[0,0],[s,0],[0,s],[s,s]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const TONE=dots('#111',1.9),SOFT=dots('#111',1.2),LITE=dots('#fff',1.2)
const ease=u=>u<0?0:u>1?1:u*u*(3-2*u)
const burst=(c,x,y,R,n)=>{c.beginPath();for(let k=0;k<n*2;k++){const r=k%2?R*.5:R,a=k*PI/n;c.lineTo(x+cos(a)*r,y+sin(a)*r)}c.closePath()}
const shinai=(c,tn)=>{
  c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.roundRect(-16,-6,44,12,5);c.fill();c.stroke()
  c.beginPath();c.moveTo(30,-5);c.lineTo(84,-4);c.lineTo(84,4);c.lineTo(30,5);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(29,0,3.5,9,0,0,T);c.fill();c.fillRect(80,-5,8,10)
  c.lineWidth=2;c.beginPath();c.moveTo(48,-4);c.lineTo(48,4);c.moveTo(64,-3);c.lineTo(64,3);c.stroke()
}
const kote=(c,x,y,a,tn)=>{c.save();c.translate(x,y);c.rotate(a);c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.ellipse(0,0,14,12,0,0,T);c.fill();c.fillStyle=tn;c.fill();c.stroke();c.restore()}
export default(c,t)=>{
  const tn=c.createPattern(TONE,'repeat'),sf=c.createPattern(SOFT,'repeat'),lt=c.createPattern(LITE,'repeat')
  const k=t<.375?0:t<.4375?.5:t<.6875?1:1-ease((t-.6875)/.3125),hit=t>=.4375&&t<.6875,tr=t<.35?1.2*sin(t*T*8):0
  const a=-3.24+3.14*k**.5,gx=118+20*k+tr,gy=max(24+104*k**.5,12-86*sin(a)),lean=.12*k
  c.fillStyle=sf;c.beginPath();c.ellipse(118,240,62,8,0,0,T);c.fill()
  if(hit){c.lineWidth=4;for(const x of[60,72,166,178])c.beginPath(),c.moveTo(x,236),c.lineTo(x+(x<120?-8:8),224),c.stroke()}
  const bx=118,by=150
  c.save();c.translate(bx,240);c.rotate(lean*.5);c.translate(-bx,-240)
  c.lineWidth=5;c.fillStyle='#fff';const st=hit?10:0
  c.beginPath();c.ellipse(96,236,14,6,0,0,T);c.fill();c.stroke();c.beginPath();c.ellipse(146+st,236,14,6,0,0,T);c.fill();c.stroke()
  c.lineWidth=6;c.fillStyle=tn;c.beginPath();c.moveTo(90,170);c.lineTo(74,234);c.lineTo(118,234);c.lineTo(120,206);c.lineTo(124,234);c.lineTo(162+st,234);c.lineTo(146,170);c.closePath();c.fill();c.stroke()
  c.lineWidth=2.5;c.strokeStyle='#fff';c.beginPath();for(const x of[94,106,134,146])c.moveTo(x,180),c.lineTo(x+(x<120?-6:6),228);c.stroke();c.strokeStyle='#111'
  c.restore()
  c.save();c.translate(bx,by+40);c.rotate(lean);c.translate(-bx,-by-40)
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(84,166);c.lineTo(80,198);c.lineTo(156,198);c.lineTo(152,166);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();for(const x of[99,118,137])c.moveTo(x,170),c.lineTo(x+(x-118)*.08,198);c.stroke()
  c.fillStyle=tn;for(const x of[86,104,123,141])c.fillRect(x,174,10,20)
  c.lineWidth=6;c.fillStyle=tn;c.beginPath();c.moveTo(92,122);c.quadraticCurveTo(76,126,78,150);c.lineTo(80,170);c.lineTo(156,170);c.lineTo(158,150);c.quadraticCurveTo(160,126,144,122);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(84,132);c.quadraticCurveTo(118,120,152,132);c.lineTo(154,166);c.quadraticCurveTo(118,174,82,166);c.closePath();c.fill()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(92,140);c.quadraticCurveTo(110,134,124,136);c.stroke();c.lineWidth=2.5;c.beginPath();c.moveTo(86,150);c.quadraticCurveTo(118,142,150,150);c.stroke();c.strokeStyle='#111'
  c.restore()
  const sh=[[92+4*k,130],[144+4*k,130]],g1=[gx+cos(a)*-6,gy+sin(a)*-6],g2=[gx+cos(a)*14,gy+sin(a)*14]
  const arm=(s,g)=>{for(const[l,st]of[[22,'#111'],[14,tn]])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(...s),c.quadraticCurveTo((s[0]+g[0])/2+(k<.5?-6:0),(s[1]+g[1])/2+8,...g),c.stroke();c.strokeStyle='#111'}
  const fr=gy>110
  if(!fr){arm(sh[0],g1);arm(sh[1],g2);if(gy>40)kote(c,...g1,a,tn),kote(c,...g2,a,tn)}
  c.save();c.translate(100+6*k,82+4*k);c.rotate(lean*.6);c.scale(.62,.62);c.translate(-128,-128)
  c.lineWidth=8;c.fillStyle=tn;c.beginPath();c.moveTo(128,30);c.bezierCurveTo(206,30,214,110,214,160);c.lineTo(226,200);c.quadraticCurveTo(196,212,178,200);c.lineTo(176,170);c.lineTo(80,170);c.lineTo(78,200);c.quadraticCurveTo(60,212,30,200);c.lineTo(42,160);c.bezierCurveTo(42,110,50,30,128,30);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;c.setLineDash([6,6]);c.beginPath();for(const y of[60,80])c.moveTo(70,y+20),c.quadraticCurveTo(128,y-20,186,y+20);for(const x of[54,202])c.moveTo(x,172),c.lineTo(x+(x<128?-4:4),198);c.stroke();c.setLineDash([]);c.strokeStyle='#111'
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,72,160,64,128,64);c.bezierCurveTo(96,64,74,72,74,96);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle=sf;c.fillRect(70,60,120,40);c.restore()
  for(const[x,d]of[[106,-1],[154,1]]){const y=136
    c.save();c.beginPath();c.moveTo(x-16,y-4+d*4);c.lineTo(x+16,y-4-d*4);c.lineTo(x+16,y+20);c.lineTo(x-16,y+20);c.clip()
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,13,14,0,0,T);c.fill();c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y+3,9,12,0,0,T);c.fill();c.fillStyle=lt;c.fillRect(x-4,y+6,20,10)
    c.fillStyle='#fff';c.beginPath();c.arc(x+3,y-1,3.5,0,T);c.fill();c.restore()
    c.lineWidth=7;c.beginPath();c.moveTo(x-15,y-4+d*4);c.lineTo(x+15,y-4-d*4);c.lineTo(x+d*20,y-8);c.stroke()}
  c.lineWidth=5;c.fillStyle='#111';c.beginPath();if(hit)c.ellipse(132,170,10,9,0,0,T),c.fill();else c.moveTo(124,170),c.lineTo(140,168),c.stroke()
  c.lineWidth=8;c.strokeStyle='#111';c.beginPath();c.roundRect(68,92,120,100,30);c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(128,94);c.lineTo(128,190);for(const y of[114,160,176])c.moveTo(72,y),c.quadraticCurveTo(128,y+6,184,y);c.stroke()
  c.lineWidth=6;c.fillStyle=tn;c.beginPath();c.moveTo(96,192);c.lineTo(160,192);c.lineTo(154,226);c.lineTo(102,226);c.closePath();c.fill();c.stroke()
  const fl=hit?8*sin(t*T*8):3*sin(t*T*2);c.lineWidth=5;c.beginPath();c.moveTo(70,90);c.quadraticCurveTo(40,100,22,120+fl);c.moveTo(70,96);c.quadraticCurveTo(46,112,34,140+fl);c.strokeStyle='#fff';c.lineWidth=9;c.stroke();c.strokeStyle='#111';c.lineWidth=3;c.stroke()
  c.restore()
  c.save();c.translate(gx,gy);c.rotate(a);shinai(c,tn);c.restore()
  if(fr){arm(sh[0],g1);arm(sh[1],g2)}
  if(fr||gy<=40)kote(c,...g1,a,tn),kote(c,...g2,a,tn)
  if(k==.5){c.lineWidth=3;for(const r of[56,68,80])c.beginPath(),c.arc(gx,gy,r,-1.0,-.2),c.stroke()}
  if(hit){const p=(t-.4375)/.25,tx=gx+cos(a)*88,ty=gy+sin(a)*88,R=20*(1.15-.45*p);c.lineWidth=4;c.fillStyle='#fff';burst(c,tx,ty,R,10);c.fill();c.stroke()
    for(let j=0;j<7;j++){const b=j*T/7+.3;c.beginPath();c.moveTo(tx+cos(b)*(R+4),ty+sin(b)*(R+4));c.lineTo(tx+cos(b)*(R+11),ty+sin(b)*(R+11));c.stroke()}}
}
