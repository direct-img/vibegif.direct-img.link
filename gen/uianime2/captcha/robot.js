// orange haired girl clicking a big "not a robot" captcha checkbox, a robot antenna boings out of her head blinking while she sweats nervously at the spinner, then the box ticks green and she beams in relief
const{sin,cos,PI,max,min,atan2,hypot}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#ff922b',HD='#d9480f',HL='#ffe8cc',EYE='#22b8cf',ED='#0b7285',TOP='#d0ebff',TD='#4dabf7',BL='#ffa8a8',CRD='#f8f9fa',GR='#ced4da',BLU='#4c6ef5',OK='#40c057',ANT='#adb5bd',BUL='#ff6b6b',SW='#a5d8ff',CLIP='#b197fc',SP='#ffe066',MO='#c92a2a'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x),L=(a,b,u)=>a+(b-a)*u
const eye=(c,x,y,d,g)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+g,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+g,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+g,y+3,4.5,6.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+g-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+g+5,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
const BX=42,BY=50
export default(c,t,i)=>{
  const ck=i>=9&&i<15,wait=i>=4&&i<9,hap=ck,clk=i==3,nv=wait
  const ant=i<4||i>9?0:i==4?1.3:i==9?.4:1,reach=i<1?.3:i<3?ease(i/3):i<5?1:i<9?.62:i<14?.5:.4
  c.fillStyle=CRD;c.lineWidth=6;c.beginPath();c.roundRect(8,14,156,72,12);c.fill();c.stroke()
  c.fillStyle=clk?'#e9ecef':'#fff';c.lineWidth=5;c.beginPath();c.roundRect(BX-19,BY-19,38,38,7);c.fill();c.stroke()
  c.fillStyle=GR;for(const[y,w]of[[40,48],[58,32]])c.beginPath(),c.roundRect(70,y-5,w,10,5),c.fill()
  c.save();c.translate(138,44);c.rotate(T*t/4)
  ds(c,9,4.5,BLU,()=>{c.arc(0,0,12,.2,PI*1.5)});c.fillStyle=BLU;c.lineWidth=3.5;c.beginPath();c.moveTo(4,-17);c.lineTo(13,-11);c.lineTo(2,-6);c.closePath();c.fill();c.stroke();c.restore()
  c.fillStyle=GR;for(const k of[0,1,2])c.beginPath(),c.roundRect(126+k*9,64,6,6,2),c.fill()
  if(wait){c.save();c.translate(BX,BY);c.rotate(T*(i-4)/5*1.2);ds(c,8,4,BLU,()=>{c.arc(0,0,10,0,PI*1.4)});c.restore()}
  if(ck){const p=i==9?1.35:1;c.save();c.translate(BX,BY);c.scale(p,p);ds(c,12,6,OK,()=>{c.moveTo(-12,0);c.lineTo(-3,10);c.lineTo(15,-14)});c.restore()
    c.fillStyle=SP;c.lineWidth=3;for(const[x,y,o]of[[16,102,0],[90,100,.5],[184,28,.25]]){const r=sin(PI*min(1,max(0,(i-9)/5-o*.3)));if(r>.1)spark(c,x,y,12*r)}}
  if(clk)for(const a of[-2.4,-1.6,-.8])ds(c,6,2.5,'#fff',()=>{c.moveTo(BX+cos(a)*26,BY+sin(a)*26);c.lineTo(BX+cos(a)*36,BY+sin(a)*36)})
  const H=f=>{c.save();c.translate(182,210);c.scale(.66,.66);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,96,206,156);c.quadraticCurveTo(206,182,188,184);c.lineTo(68,184);c.quadraticCurveTo(50,182,50,156);c.bezierCurveTo(42,96,56,34,128,34);c.fill();c.stroke()
    c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,380);c.lineTo(216,380);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(102,192);c.quadraticCurveTo(128,222,154,192);c.lineTo(160,206);c.quadraticCurveTo(128,240,96,206);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(hap){c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}
    else{const g=nv?(i%2?-4:4):-4;eye(c,103,140,-1,g);eye(c,153,140,1,g)}
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,15,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO
    if(hap){c.beginPath();c.moveTo(112,164);c.quadraticCurveTo(128,190,144,164);c.closePath();c.fill();c.stroke()}
    else if(nv){c.fillStyle='#fff';c.beginPath();c.roundRect(116,162,24,13,5);c.fill();c.stroke();c.lineWidth=4;c.beginPath();c.moveTo(118,168.5);c.lineTo(138,168.5);c.stroke()}
    else{c.beginPath();c.moveTo(118,168);c.quadraticCurveTo(128,174,138,168);c.stroke()}
    if(ant>0){const h=48*ant;ds(c,10,5,ANT,()=>{c.moveTo(128,40);for(let k=1;k<=8;k++)c.lineTo(128+(k%2?-8:8)*(k<8?1:0),40-h*k/8)})
      c.fillStyle=i%4<2?BUL:'#fff';c.lineWidth=8;c.beginPath();c.arc(128,32-h,13,0,T);c.fill();c.stroke()
      if(i%4<2)for(const a of[-2.4,-1.57,-.74])ds(c,8,3.5,'#fff',()=>{c.moveTo(128+cos(a)*22,32-h+sin(a)*22);c.lineTo(128+cos(a)*32,32-h+sin(a)*32)})}
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,154)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,154)
    c.quadraticCurveTo(186,118,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,124,68,154);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=8;for(const[a,e]of[[1.24,1.36],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
    if(ant>0){c.fillStyle=ANT;c.lineWidth=8;c.beginPath();c.ellipse(128,42,16,8,0,0,T);c.fill();c.stroke()}
    c.fillStyle=CLIP;c.lineWidth=7;for(const y of[78,96])c.beginPath(),c.roundRect(160,y-5,28,10,5),c.fill(),c.stroke()
    if(nv){c.fillStyle=SW;c.lineWidth=7;for(const[x,y,s]of[[222,92,1],[34,104,.8],[230,128,.65]])c.beginPath(),c.moveTo(x,y-20*s),c.quadraticCurveTo(x+13*s,y,x,y+8*s),c.quadraticCurveTo(x-13*s,y,x,y-20*s),c.fill(),c.stroke()}
  })
  const tx=L(96,BX+4,reach),ty=L(150,BY+6,reach)+(clk?3:0),sx=146,sy=226,a=atan2(ty-sy,tx-sx),hx=tx-cos(a)*24,hy=ty-sin(a)*24
  ds(c,20,11,TOP,()=>{c.moveTo(sx,sy);c.quadraticCurveTo(L(sx,hx,.4),max(sy,hy)+10,hx-cos(a)*6,hy-sin(a)*6)})
  c.save();c.translate(hx,hy);c.rotate(a);c.fillStyle=SKIN;c.lineWidth=5
  c.beginPath();c.roundRect(4,-6,26,12,6);c.fill();c.stroke();c.beginPath();c.ellipse(0,2,14,12,0,0,T);c.fill();c.stroke();c.restore()
}
