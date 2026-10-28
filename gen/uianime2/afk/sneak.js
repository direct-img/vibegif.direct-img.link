// caramel ponytail girl in a mint hoodie tiptoeing away from her desk with sneaky paws, glancing back nervously at her laptop that reads "AFK" while an idle clock ticks over it
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=16,delay=85
const SKIN='#ffe3d1',HAIR='#d4a373',HD='#9c6644',HL='#faedcd',EYE='#4dabf7',ED='#1864ab',HO='#96f2d7',HOD='#20c997',SHT='#748ffc',SHO='#ff922b',BL='#ffa8a8',DK='#e8b07a',DKD='#c47f45',LP='#ced4da',LPD='#868e96',SCR='#364fc7',AF='#ffd43b',CK='#fff3bf',CKD='#f59f00',SW='#a5d8ff',SCR2='#5c7cfa'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x-6,y+1,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x-6,y-9,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x-7,y+2,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-10,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x-1,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t,i)=>{
  const st=T*t*2,bob=-4*abs(sin(st)),X=176,Y=140+bob,lean=.08
  c.lineWidth=6;c.fillStyle=DK;c.beginPath();c.roundRect(-20,162,136,16,5);c.fill();c.stroke()
  c.fillStyle=DKD;for(const x of[8,90])c.beginPath(),c.rect(x,178,14,90),c.fill(),c.stroke()
  c.fillStyle=LP;c.lineWidth=6;c.beginPath();c.roundRect(14,92,82,62,8);c.fill();c.stroke()
  c.fillStyle=SCR;c.lineWidth=4;c.beginPath();c.roundRect(22,100,66,46,4);c.fill();c.stroke()
  c.fillStyle=LPD;c.lineWidth=5;c.beginPath();c.moveTo(10,154);c.lineTo(100,154);c.lineTo(108,163);c.lineTo(2,163);c.closePath();c.fill();c.stroke()
  c.beginPath()
  c.moveTo(29,132);c.lineTo(37,112);c.lineTo(45,132);c.moveTo(32,125);c.lineTo(42,125)
  c.moveTo(52,132);c.lineTo(52,112);c.lineTo(62,112);c.moveTo(52,122);c.lineTo(60,122)
  c.moveTo(70,112);c.lineTo(70,132);c.moveTo(81,112);c.lineTo(70,124);c.moveTo(74,120);c.lineTo(81,132)
  for(const[w,s]of[[8,'#111'],[4,AF]])c.lineWidth=w,c.strokeStyle=s,c.stroke()
  c.strokeStyle='#111'
  c.fillStyle='rgba(255,255,255,.25)';c.beginPath();c.moveTo(26,104);c.lineTo(42,104);c.lineTo(26,120);c.closePath();c.fill()
  const fy=44+3*sin(T*t)
  c.fillStyle=CK;c.lineWidth=6;c.beginPath();c.arc(54,fy,24,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(let k=0;k<4;k++)c.beginPath(),c.arc(54+17*cos(k*PI/2),fy+17*sin(k*PI/2),2.5,0,T),c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(54,fy);c.lineTo(54-8,fy-6);c.stroke()
  c.strokeStyle=CKD;c.lineWidth=4;c.beginPath();c.moveTo(54,fy);c.lineTo(54+15*cos(T*t-PI/2),fy+15*sin(T*t-PI/2));c.stroke();c.strokeStyle='#111'
  c.fillStyle=CKD;c.lineWidth=3;c.beginPath();c.arc(54,fy,3.5,0,T);c.fill();c.stroke()
  for(const[k,x,y,s]of[[0,88,30,1],[1,100,16,.75]]){const a=.5+.5*sin(T*t*2-k);c.save();c.globalAlpha=.4+.6*a;c.translate(x,y);c.scale(s,s);ds(c,9,4,SCR2,()=>{c.moveTo(-6,-6);c.lineTo(6,-6);c.lineTo(-6,6);c.lineTo(6,6)});c.restore()}
  for(const k of[0,1]){const p=(t*2+k*.5)%1,sw=p<.5,q=sw?p*2:(p-.5)*2,e=q*q*(3-2*q),l=sw?sin(PI*e):0,hx=X-6+k*10
    const fx=sw?hx-12+28*e:hx+16-28*q,fy=236-18*l,kx=(hx+fx)/2+8+8*l,ky=(Y+50+fy)/2-6*l
    ds(c,17,10,SKIN,()=>{c.moveTo(hx,Y+48);c.lineTo(kx,ky);c.lineTo(fx,fy-6)})
    ds(c,17,10,'#fff',()=>{c.moveTo(kx+(fx-kx)*.45,ky+(fy-6-ky)*.45);c.lineTo(fx,fy-6)})
    c.save();c.translate(fx,fy);c.rotate(.6+.3*l);c.fillStyle=SHO;c.lineWidth=5;c.beginPath();c.ellipse(5,0,11,6.5,0,0,T);c.fill();c.stroke();c.restore()}
  c.save();c.translate(X,Y+50);c.rotate(lean);c.translate(-X,-Y-50)
  ds(c,18,10,HO,()=>{c.moveTo(X-16,Y+8);c.quadraticCurveTo(X-28,Y+24,X-36,Y+34)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(X-38,Y+38,8,8,0,0,T);c.fill();c.stroke()
  c.fillStyle=SHT;c.lineWidth=6;c.beginPath();c.roundRect(X-21,Y+36,42,18,6);c.fill();c.stroke()
  c.fillStyle=HO;c.lineWidth=6;c.beginPath();c.moveTo(X-16,Y-2);c.lineTo(X+16,Y-2);c.quadraticCurveTo(X+26,Y,X+26,Y+14);c.lineTo(X+24,Y+44);c.lineTo(X-24,Y+44);c.lineTo(X-26,Y+14);c.quadraticCurveTo(X-26,Y,X-16,Y-2);c.fill();c.stroke()
  c.fillStyle=HOD;c.lineWidth=5;c.beginPath();c.moveTo(X-12,Y+40);c.lineTo(X-8,Y+28);c.lineTo(X+8,Y+28);c.lineTo(X+12,Y+40);c.fill();c.stroke()
  c.beginPath();c.moveTo(X-6,Y+2);c.lineTo(X-8,Y+18);c.moveTo(X+6,Y+2);c.lineTo(X+8,Y+18);c.stroke()
  c.restore()
  const H=f=>{c.save();c.translate(X+2,Y+2);c.rotate(-.1);c.scale(.56,.56);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=9;c.fillStyle=HAIR;c.save();c.translate(186,62);c.rotate(.1*sin(st));c.beginPath();c.moveTo(-4,-8);c.bezierCurveTo(44,-30,72,26,60,100);c.quadraticCurveTo(56,120,40,114);c.bezierCurveTo(52,64,36,20,-4,16);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.moveTo(16,4);c.bezierCurveTo(40,0,56,46,50,96);c.stroke();c.strokeStyle='#111';c.restore()
    c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,210,96,202,150);c.lineTo(54,150);c.bezierCurveTo(46,96,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=HOD;c.beginPath();c.moveTo(70,196);c.quadraticCurveTo(128,170,186,196);c.lineTo(180,222);c.quadraticCurveTo(128,204,76,222);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103,140,-1);eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.beginPath();c.moveTo(112,170);c.quadraticCurveTo(116,164,120,170);c.quadraticCurveTo(124,176,128,170);c.quadraticCurveTo(132,164,136,170);c.quadraticCurveTo(140,176,144,170);c.stroke()
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
    c.quadraticCurveTo(186,118,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,124,68,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=SHO;c.lineWidth=7;c.beginPath();c.ellipse(186,62,11,15,.4,0,T);c.fill();c.stroke()
    c.fillStyle=SW;c.lineWidth=6;c.beginPath();c.moveTo(60,96);c.quadraticCurveTo(74,116,60,124);c.quadraticCurveTo(46,116,60,96);c.fill();c.stroke()
  })
  ds(c,18,10,HO,()=>{c.moveTo(X+18,Y+8);c.quadraticCurveTo(X+30,Y+26,X+16,Y+8)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(X+14,Y+4,8,9,0,0,T);c.fill();c.stroke()
  ds(c,9,4.5,SKIN,()=>{c.moveTo(X+11,Y);c.lineTo(X+9,Y-12)})
}
