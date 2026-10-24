// ginger bob girl pulls open her mailbox to find it totally empty, staring with dot eyes and a sweatdrop while a tumbleweed rolls past
const{sin,cos,PI,max,min,abs,hypot,sqrt}=Math,T=2*PI
export const frames=16,delay=85
const SKIN='#ffe3d1',HAIR='#ff922b',HD='#e8590c',HL='#ffe8cc',EYE='#51cf66',ED='#2b8a3e',BL='#ffa8a8',TOP='#d0bfff',TD='#9775fa',MB='#74c0fc',MBD='#339af0',IN='#343a40',FL='#fa5252',WD='#c98a52',TW='#e0b46c',TWD='#a0763c',SW='#a5d8ff'
const E=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const arch=(c,x,y,w,h)=>{c.moveTo(x,y);c.lineTo(x,y-h+w/2);c.arc(x+w/2,y-h+w/2,w/2,PI,0);c.lineTo(x+w,y);c.closePath()}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.clip();c.beginPath();c.ellipse(x+4,y+3,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+4,y-7,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y+4,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y-3,4.5,0,T);c.fill();c.beginPath();c.arc(x+8,y+9,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t)=>{
  const op=E((t-.1)/.14)-E((t-.82)/.12),ln=E((t-.22)/.1)-E((t-.8)/.1),bk=t>.3&&t<.82,sy=1-1.4*op
  const p=(t-.28)/.62,tx=290-350*p,ty=228-16*abs(sin(3*PI*p))
  // post and mailbox body
  c.lineWidth=6;c.fillStyle=WD;c.beginPath();c.rect(176,164,24,86);c.fill();c.stroke()
  c.fillStyle=MBD;c.beginPath();c.moveTo(148,170);c.lineTo(148,134);c.arc(188,134,40,PI,PI*1.31);c.lineTo(188+40*cos(PI*1.31)+16,134+40*sin(PI*1.31)-10);c.arc(204,124,40,PI*1.31,0);c.lineTo(244,160);c.lineTo(228,170);c.closePath();c.fill();c.stroke()
  ds(c,10,5,'#fff',()=>{c.moveTo(236,110);c.lineTo(236,140)})
  c.fillStyle=FL;c.lineWidth=5;c.beginPath();c.rect(230,138,12,20);c.fill();c.stroke()
  // inside: dark and empty, just a cobweb
  c.fillStyle=IN;c.lineWidth=6;c.beginPath();arch(c,148,170,80,76);c.fill()
  c.fillStyle='#495057';c.lineWidth=3;c.beginPath();arch(c,164,160,48,54);c.fill();c.stroke()
  c.strokeStyle='#868e96';c.lineWidth=3;c.beginPath();c.moveTo(154,166);c.lineTo(164,160);c.moveTo(222,166);c.lineTo(212,160);c.stroke()
  c.strokeStyle='#dee2e6';c.lineWidth=2.5;c.beginPath();c.moveTo(160,136);c.lineTo(180,112);for(const r of[9,17])c.moveTo(160,136-r),c.quadraticCurveTo(165+r*.2,131-r*.2,160+r,136);c.moveTo(160,136);c.lineTo(174,118);c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.beginPath();arch(c,148,170,80,76);c.stroke()
  // girl
  c.save();c.translate(78,162);c.scale(.8,.8);c.translate(-128,-186)
  c.save();c.translate(128,186);c.rotate(.07*ln);c.translate(-128,-186)
  c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,214,100,204,160);c.quadraticCurveTo(204,186,180,184);c.lineTo(76,184);c.quadraticCurveTo(52,186,52,160);c.bezierCurveTo(42,100,58,34,128,34);c.fill();c.stroke()
  c.restore()
  c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(58,198,48,304);c.lineTo(208,304);c.quadraticCurveTo(198,198,156,190);c.closePath();c.fill();c.stroke()
  c.strokeStyle=TD;c.lineWidth=5;c.beginPath();c.moveTo(128,212);c.lineTo(128,304);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;for(const y of[236,266])c.beginPath(),c.arc(136,y,5,0,T),c.fill(),c.stroke()
  c.fillStyle=SKIN;c.lineWidth=7;c.beginPath();c.moveTo(116,166);c.lineTo(116,194);c.lineTo(128,204);c.lineTo(140,194);c.lineTo(140,166);c.fill();c.beginPath();c.moveTo(116,166);c.lineTo(116,192);c.moveTo(140,166);c.lineTo(140,192);c.stroke()
  c.fillStyle='#fff';c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.quadraticCurveTo(128+d*34,212,128+d*30,190),c.quadraticCurveTo(128+d*16,192,128,206),c.fill(),c.stroke()
  c.save();c.translate(128,186);c.rotate(.07*ln);c.translate(-128,-186)
  c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(bk){c.fillStyle='#111';for(const x of[105,155])c.beginPath(),c.ellipse(x,140,7.5,9,0,0,T),c.fill()
    c.lineWidth=5;c.beginPath();c.moveTo(121,170);c.lineTo(135,170);c.stroke()}
  else{eye(c,103,140,-1);eye(c,153,140,1);c.lineWidth=5;c.beginPath();c.arc(128,164,8,.2*PI,.8*PI);c.stroke()}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,7,0,0,T),c.fill()
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,165),c.lineTo(128+d*44+k+2,159),c.stroke()
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,160)
  c.bezierCurveTo(48,74,88,36,128,36);c.bezierCurveTo(168,36,208,74,190,160)
  c.quadraticCurveTo(188,120,180,104);c.quadraticCurveTo(170,104,164,96);c.quadraticCurveTo(156,108,144,110);c.quadraticCurveTo(140,98,130,92)
  c.quadraticCurveTo(122,106,108,110);c.quadraticCurveTo(104,98,96,94);c.quadraticCurveTo(88,106,78,106);c.quadraticCurveTo(68,128,66,160);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(126,38);c.quadraticCurveTo(120,14,100,14);c.quadraticCurveTo(118,24,116,40);c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle=FL;c.lineWidth=6;c.beginPath();c.roundRect(150,66,30,11,5);c.fill();c.stroke()
  c.restore();c.restore()
  // door swinging down on its hinge
  c.save();c.translate(0,170);c.scale(1,sy);c.beginPath();arch(c,148,0,80,76);c.restore()
  c.fillStyle=sy>0?MB:'#d0ebff';c.lineWidth=6;c.fill();c.stroke()
  if(sy>.3){c.strokeStyle='#d0ebff';c.lineWidth=5;c.beginPath();c.arc(188,170-36*sy,30,PI*1.15,PI*1.45);c.stroke();c.strokeStyle='#111'}
  const hx=188,hy=170-70*sy,sx=118,sh=186,d=hypot(hx-sx,hy-sh),h=sqrt(max(0,58*58-d*d/4)),ex=(sx+hx)/2-(hy-sh)/d*h,ey=(sh+hy)/2+(hx-sx)/d*h
  ds(c,20,11,TOP,()=>{c.moveTo(sx,sh);c.lineTo(ex,ey);c.lineTo(hx,hy+4)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx,hy+4,10,9,0,0,T);c.fill();c.stroke()
  // tumbleweed bouncing past
  if(p>0&&p<1){
    for(const k of[1,2,3]){const q=(p*3+k/3)%1,r=7*(1-q);if(r>1){c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();c.arc(tx+18+q*34,246-q*6,r,0,T);c.fill();c.stroke()}}
    c.save();c.translate(tx,ty);c.rotate(-p*14)
    c.fillStyle=TW;c.lineWidth=5;c.beginPath();for(let k=0;k<12;k++){const a=k*T/12,b=a+T/24;c.quadraticCurveTo(28*cos(a),28*sin(a),22*cos(b),22*sin(b))}c.closePath();c.fill();c.stroke()
    c.strokeStyle=TWD;c.lineWidth=3;for(let k=0;k<5;k++)c.beginPath(),c.ellipse(4*cos(k*2.4),4*sin(k*2.4),15,7,k*1.3,0,T),c.stroke()
    c.restore()
  }
  // sweatdrop and silent dots
  if(bk){const s=min(1,(t-.3)/.08),y=90;c.fillStyle=SW;c.lineWidth=4;c.beginPath();c.moveTo(24,y-16*s);c.quadraticCurveTo(34*s+24*(1-s),y+4,24,y+6*s);c.quadraticCurveTo(14*s+24*(1-s),y+4,24,y-16*s);c.fill();c.stroke()}
  c.fillStyle='#fff';c.lineWidth=4;for(let k=0;k<3;k++)if(t>.4+k*.08&&t<.82)c.beginPath(),c.arc(134+k*16,46-k*5,6,0,T),c.fill(),c.stroke()
}
