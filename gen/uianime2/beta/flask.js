// messy lilac haired scientist girl in a lab coat with goggles on her head holding up a bubbling "β" flask with a gleeful grin, bubbles rise out of it and pop into little puffs
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=85
const SKIN='#ffe3d1',HAIR='#d0a8f5',HD='#9c6ade',HL='#f3e8ff',EYE='#ff922b',ED='#d9480f',CT='#fff',CTD='#dee2e6',SH='#63e6be',SHD='#20c997',BL='#ffa8a8',LQ='#69db7c',BB='#d3f9d8',GL='#e7f5ff',GF='#fab005',GS='#495057',LB='#fff',BT='#9c6ade'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+4,y+1,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+4,y-9,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y+2,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+9,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const fl=c=>{c.beginPath();c.moveTo(188,98);c.lineTo(188,128);c.lineTo(160,196);c.quadraticCurveTo(156,212,172,212);c.lineTo(222,212);c.quadraticCurveTo(238,212,234,196);c.lineTo(206,128);c.lineTo(206,98);c.closePath()}
export default(c,t,i)=>{
  const bob=2*sin(T*t*2),wv=sin(T*t*3)*3,bk=i==11
  const H=f=>{c.save();c.translate(100,160+bob*.5);c.rotate(-.04);c.scale(.68,.68);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,212,96,204,150);c.lineTo(216,168);c.lineTo(194,172);c.lineTo(198,188);c.lineTo(58,188);c.lineTo(62,172);c.lineTo(40,168);c.lineTo(52,150);c.bezierCurveTo(44,96,56,34,128,34);c.fill();c.stroke()
    c.fillStyle=CT;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,400);c.lineTo(216,400);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SH;c.beginPath();c.moveTo(108,190);c.lineTo(128,260);c.lineTo(148,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SHD;c.lineWidth=6;c.beginPath();c.moveTo(128,206);c.lineTo(120,214);c.lineTo(128,250);c.lineTo(136,214);c.closePath();c.fill();c.stroke()
    c.fillStyle=CT;c.lineWidth=8;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*22,188),c.lineTo(128+d*6,290),c.lineTo(128+d*30,240),c.lineTo(128+d*42,250),c.lineTo(128+d*40,196),c.closePath(),c.fill(),c.stroke()
    c.strokeStyle=CTD;c.lineWidth=5;c.beginPath();c.moveTo(78,300);c.lineTo(74,230);c.stroke();c.strokeStyle='#111'
    c.fillStyle=SKIN;c.lineWidth=9;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(bk){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,150,x+15,142),c.stroke()}
    else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(110,164);c.quadraticCurveTo(130,170,150,160);c.quadraticCurveTo(148,184,130,184);c.quadraticCurveTo(112,184,110,164);c.fill();c.stroke()
    c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(112,166);c.quadraticCurveTo(130,171,148,162);c.lineTo(147,169);c.quadraticCurveTo(130,177,113,172);c.closePath();c.fill();c.stroke()
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(62,150)
    c.lineTo(48,138);c.lineTo(62,128);c.bezierCurveTo(46,70,88,36,128,36);c.bezierCurveTo(168,36,210,70,194,128);c.lineTo(210,136);c.lineTo(190,148)
    c.quadraticCurveTo(186,118,178,100);c.lineTo(172,116);c.lineTo(160,94);c.lineTo(150,112);c.lineTo(140,88);c.lineTo(130,110)
    c.lineTo(118,86);c.lineTo(110,112);c.lineTo(96,92);c.lineTo(90,114);c.lineTo(80,100)
    c.quadraticCurveTo(68,120,62,150);c.closePath();c.fill();c.stroke()
    c.beginPath();c.moveTo(118,40);c.quadraticCurveTo(100,4,132,8);c.quadraticCurveTo(116,18,132,38);c.fill();c.stroke()
    c.beginPath();c.moveTo(134,38);c.quadraticCurveTo(150,10,170,20);c.quadraticCurveTo(150,24,146,40);c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    ds(c,16,9,GS,()=>{c.moveTo(68,82);c.quadraticCurveTo(128,54,188,82)})
    for(const x of[102,154]){c.fillStyle=GF;c.lineWidth=7;c.beginPath();c.arc(x,68,21,0,T);c.fill();c.stroke()
      c.fillStyle=GL;c.lineWidth=4;c.beginPath();c.arc(x,68,13,0,T);c.fill();c.stroke()
      c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(x,68,8,PI*1.1,PI*1.5);c.stroke();c.strokeStyle='#111'}
    c.lineWidth=7;c.beginPath();c.moveTo(123,68);c.lineTo(133,68);c.stroke()
  })
  c.save();fl(c);c.clip()
  c.fillStyle='#fff';c.fillRect(150,90,100,130)
  c.fillStyle=LQ;c.beginPath();c.moveTo(150,158+wv);c.bezierCurveTo(180,150-wv,200,166+wv,250,156-wv);c.lineTo(250,220);c.lineTo(150,220);c.closePath();c.fill()
  c.lineWidth=5;c.beginPath();c.moveTo(150,158+wv);c.bezierCurveTo(180,150-wv,200,166+wv,250,156-wv);c.stroke()
  c.fillStyle=BB;c.lineWidth=3;for(let k=0;k<4;k++){const p=(t*2+k/4)%1,x=180+k*12+4*sin(T*p*2+k),y=206-50*p;c.beginPath();c.arc(x,y,3+3*p,0,T);c.fill();c.stroke()}
  c.fillStyle='rgba(255,255,255,.55)';c.beginPath();c.roundRect(166,170,8,30,4);c.fill();c.beginPath();c.roundRect(191,102,6,22,3);c.fill()
  c.restore()
  c.lineWidth=7;fl(c);c.stroke()
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.roundRect(182,90,30,10,5);c.fill();c.stroke()
  c.fillStyle=LB;c.lineWidth=5;c.beginPath();c.arc(197,186,17,0,T);c.fill();c.stroke()
  for(const[w,s]of[[9,'#111'],[4,BT]]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();c.moveTo(192,200);c.lineTo(192,180);c.bezierCurveTo(192,170,205,170,204,178);c.bezierCurveTo(204,184,198,185,195,185);c.bezierCurveTo(207,185,208,197,198,197);c.bezierCurveTo(195,197,193,195,192,193);c.stroke()}
  c.strokeStyle='#111'
  for(let k=0;k<3;k++){const p=(t+k/3)%1,x=197+10*sin(T*p+k*2),y=84-50*p,r=4+6*p
    if(p<.82){c.fillStyle=BB;c.lineWidth=4;c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(x-r*.35,y-r*.35,r*.3,0,T);c.fill()}
    else{const q=(p-.82)/.18;c.save();c.globalAlpha=1-q*q;c.fillStyle='#e9ecef';c.lineWidth=4;c.beginPath();for(const[dx,dy,s]of[[-8,2,8],[0,-5,10],[8,2,8]])c.moveTo(x+dx+s*(.6+q*.6),y+dy),c.arc(x+dx,y+dy,s*(.6+q*.6),0,T);c.stroke();c.fill()
      c.lineWidth=4;c.beginPath();for(let a=0;a<6;a++){const b=a*PI/3;c.moveTo(x+cos(b)*(12+10*q),y+sin(b)*(12+10*q));c.lineTo(x+cos(b)*(17+12*q),y+sin(b)*(17+12*q))}c.stroke();c.restore()}}
  ds(c,22,13,CT,()=>{c.moveTo(144,192);c.quadraticCurveTo(170,154,186,136)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(192,128,12,11,0,0,T);c.fill();c.stroke()
  c.lineWidth=3.5;c.beginPath();for(const y of[124,131])c.moveTo(199,y),c.lineTo(205,y);c.stroke()
}
