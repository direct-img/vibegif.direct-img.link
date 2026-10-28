// cherry red twintail girl winds up and slaps a big red play button, it squashes and flips to a gray subscribed check while a gold notification bell pops out swinging with a ding
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=14,delay=90
const SKIN='#ffe3d1',HAIR='#f03e3e',HD='#b02525',HL='#ffe3e3',EYE='#22b8cf',ED='#0b7285',TOP='#364fc7',TD='#748ffc',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',BT='#ff3b3b',BD='#a61e1e',GY='#adb5bd',GD='#495057',BE='#ffd43b',TIE='#ffd43b',SP='#ffe066'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x-3,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x-3,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x-3,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-7,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+2,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const HP=[[120,160],[116,130],[110,102],[104,84],[84,184],[84,180],[102,168],[120,160],[120,160],[120,160],[120,160],[120,160],[120,160],[120,160]],BS=[0,0,0,0,0,1.2,1,1,1,1,1,.6,.25,0]
export default(c,t,i)=>{
  const wu=i<4,sl=i==4,hp=i>=5&&i<11,sub=i>=5&&i<12,pr=sl?1:i==5?.4:0,[hx,hy]=HP[i],bs=BS[i],ba=bs?.5*sin(i*2.1)*max(0,1-(i-5)/6):0
  const H=f=>{c.save();c.translate(176,170);c.scale(.66,.66);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    for(const d of[-1,1]){c.save();c.translate(128+d*66,66);c.rotate(d*.06*sin(T*t+.5))
      c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(0,0);c.bezierCurveTo(d*44,-6,d*60,70,d*40,140);c.quadraticCurveTo(d*34,170,d*18,184);c.quadraticCurveTo(d*30,150,d*20,110);c.bezierCurveTo(d*14,70,d*10,30,0,0);c.fill();c.stroke()
      c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.moveTo(d*16,10);c.bezierCurveTo(d*36,40,d*42,90,d*32,140);c.stroke();c.strokeStyle='#111';c.restore()}
    c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,204,160);c.quadraticCurveTo(204,190,186,198);c.lineTo(70,198);c.quadraticCurveTo(52,190,52,160);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,212),c.lineTo(128+d*30,188),c.lineTo(128+d*40,214),c.closePath(),c.fill(),c.stroke()
    c.strokeStyle=TD;c.lineWidth=5;c.beginPath();c.moveTo(128,214);c.lineTo(128,330);c.stroke();c.strokeStyle='#111'
    c.fillStyle=SKIN;c.lineWidth=9;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,208,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(sl){c.lineWidth=8;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*38,128),c.lineTo(128+d*18,140),c.lineTo(128+d*38,152),c.stroke()}
    else if(hp){c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.arc(x,148,15,1.15*PI,1.85*PI),c.stroke()}
    else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO
    if(sl||hp){c.beginPath();c.moveTo(110,163);c.quadraticCurveTo(128,168,146,163);c.quadraticCurveTo(144,190,128,190);c.quadraticCurveTo(112,190,110,163);c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,192,10,8,0,0,T);c.fill();c.restore()}
    else if(wu){c.fillStyle='#fff';c.beginPath();c.moveTo(112,164);c.quadraticCurveTo(128,170,144,164);c.quadraticCurveTo(140,180,128,180);c.quadraticCurveTo(116,180,112,164);c.fill();c.stroke();c.beginPath();c.moveTo(114,170);c.lineTo(142,170);c.stroke()}
    else{c.beginPath();c.moveTo(116,166);c.quadraticCurveTo(128,180,140,166);c.closePath();c.fill();c.stroke()}
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,150)
    c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,150)
    c.quadraticCurveTo(186,118,180,104);c.quadraticCurveTo(170,102,162,110);c.quadraticCurveTo(160,96,152,90);c.quadraticCurveTo(144,102,134,106)
    c.quadraticCurveTo(130,94,122,88);c.quadraticCurveTo(116,102,106,108);c.quadraticCurveTo(102,96,94,94);c.quadraticCurveTo(88,104,84,110)
    c.quadraticCurveTo(78,104,76,104);c.quadraticCurveTo(70,120,70,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111'
    if(wu){c.lineWidth=6;c.beginPath();c.moveTo(86,108);c.lineTo(112,118);c.moveTo(144,118);c.lineTo(170,108);c.stroke()}
    c.fillStyle=TIE;c.lineWidth=7;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*66,66,10,15,d*.5,0,T),c.fill(),c.stroke()
  })
  ds(c,26,16,TOP,()=>{c.moveTo(140,200);wu?c.quadraticCurveTo(150,150,hx+6,hy+12):c.quadraticCurveTo(124,214,hx+8,hy+6)})
  const by=170+10*pr,on=!sub
  c.fillStyle=on?BD:GD;c.lineWidth=7;c.beginPath();c.roundRect(12,182,152,62,20);c.fill();c.stroke()
  c.fillStyle=on?BT:GY;c.beginPath();c.roundRect(12,by,152,60,20);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(28,by+16);c.quadraticCurveTo(28,by+10,36,by+9);c.stroke();c.strokeStyle='#111'
  if(on){c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(74,by+14);c.lineTo(108,by+30);c.lineTo(74,by+46);c.closePath();c.fill();c.stroke()}
  else ds(c,14,7,'#fff',()=>{c.moveTo(70,by+30);c.lineTo(84,by+43);c.lineTo(108,by+16)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(hx,hy,sl?16:13,sl?11:13,0,0,T);c.fill();c.stroke()
  if(sl){ds(c,8,4,SP,()=>{for(let k=0;k<5;k++){const a=-PI*.95+k*PI*.22;c.moveTo(hx+cos(a)*24,hy-4+sin(a)*24);c.lineTo(hx+cos(a)*38,hy-4+sin(a)*38)}})}
  if(bs){c.save();c.translate(76,72);c.scale(bs,bs)
    if(i>=5&&i<10)for(const d of[-1,1])ds(c,7,3,BE,()=>{for(const r of[32,42])c.moveTo(d*r*cos(.5),-4-r*sin(.5)),c.arc(0,-4,r,d>0?-.5:PI-.5,d>0?.5:PI+.5)})
    c.rotate(ba);c.lineWidth=6;c.fillStyle=BE
    c.beginPath();c.arc(0,26,7,0,T);c.fill();c.stroke()
    c.beginPath();c.arc(0,-26,6,0,T);c.fill();c.stroke()
    c.beginPath();c.moveTo(-26,20);c.quadraticCurveTo(-18,16,-18,4);c.quadraticCurveTo(-18,-22,0,-22);c.quadraticCurveTo(18,-22,18,4);c.quadraticCurveTo(18,16,26,20);c.closePath();c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(-10,0);c.quadraticCurveTo(-10,-12,-2,-14);c.stroke();c.restore()}
}
