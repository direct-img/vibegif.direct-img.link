// lost explorer girl with honey pigtails and a safari hat holding her map upside down, looking left and right in confusion while question marks pop up
const{sin,PI,min,max}=Math,T=2*PI
export const frames=12,delay=120
const SKIN='#ffe3d1',HAIR='#ffd43b',HD='#f08c00',HL='#fff9db',EYE='#a9744f',ED='#6f4518',HAT='#e9cf96',HB='#a9744f',SH='#8ce99a',SD='#40c057',MAP='#fff3bf',MP='#ffe699',MT='#91a7ff',PINE='#51cf66',BL='#ffa8a8',SW='#a5d8ff',QC=['#ff8787','#74c0fc','#b197fc'],Z=.84
const eye=(c,x,y,d,lx)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+lx,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+lx,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+lx,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+lx-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+lx+5,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const qm=(c,x,y,s,col,a)=>{
  c.save();c.translate(x,y);c.rotate(a);c.scale(s,s)
  for(const[w,st]of[[14,'#111'],[6.5,col]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(-9,-10),c.bezierCurveTo(-9,-24,11,-24,11,-11),c.bezierCurveTo(11,-2,0,-2,0,8),c.stroke()
  c.strokeStyle='#111';c.fillStyle=col;c.lineWidth=4;c.beginPath();c.arc(0,20,5,0,T);c.fill();c.stroke();c.restore()
}
export default(c,t)=>{
  // s saturates so she holds each glance, and held frames come out identical
  const s=max(-1,min(1,1.8*sin(T*t))),lx=5*s,fx=3*s
  for(const[x,y,d,k]of[[26,70,-1,0],[230,70,1,1],[58,22,-1,2],[198,22,1,2]]){const sc=2*(d*s-.5);if(sc>0)qm(c,x,y,sc*(y<40?.75:1.15),QC[k],d*.25)}
  c.save();c.translate(128,12);c.scale(Z,Z);c.translate(-128,-20)
  const head=f=>{c.save();c.translate(128,180);c.rotate(.06*s);c.translate(-128,-180);f();c.restore()}
  head(()=>{
    c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(196,36,206,96,198,150);c.lineTo(58,150);c.bezierCurveTo(50,96,60,36,128,36);c.fill();c.stroke()
    for(const d of[-1,1]){
      c.save();c.translate(128+d*62,126);c.scale(d,1);c.rotate(-.15-.12*d*s)
      c.fillStyle=HAIR;c.beginPath();c.moveTo(0,-12);c.bezierCurveTo(40,-16,52,40,32,74);c.quadraticCurveTo(26,60,14,68);c.bezierCurveTo(22,40,12,12,0,12);c.closePath();c.fill();c.stroke()
      c.strokeStyle=HL;c.lineWidth=5;c.beginPath();c.moveTo(14,-4);c.bezierCurveTo(30,4,36,26,32,44);c.stroke();c.strokeStyle='#111'
      c.fillStyle='#ff8787';c.lineWidth=6;c.beginPath();c.arc(2,0,10,0,T);c.fill();c.stroke()
      c.restore()
    }
  })
  c.lineWidth=7;c.fillStyle=SH;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.lineTo(128,206);c.lineTo(140,194);c.lineTo(140,168);c.fill();c.lineWidth=6;c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  head(()=>{
    c.lineWidth=7;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103+fx,140,-1,lx);eye(c,153+fx,140,1,lx)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+fx+d*42,162,12,6,0,0,T),c.fill()
    c.lineWidth=3;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+fx+d*42+k-2,165),c.lineTo(128+fx+d*42+k+2,159),c.stroke()
    c.lineWidth=4;c.beginPath();c.moveTo(117+fx,171);c.quadraticCurveTo(120.5+fx,165,124+fx,171);c.quadraticCurveTo(127.5+fx,177,131+fx,171);c.quadraticCurveTo(134.5+fx,165,138+fx,171);c.stroke()
    c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,146)
    c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,146)
    c.quadraticCurveTo(184,116,176,102);c.quadraticCurveTo(168,104,162,112);c.quadraticCurveTo(156,98,146,92);c.quadraticCurveTo(140,104,132,110)
    c.quadraticCurveTo(126,96,116,92);c.quadraticCurveTo(110,104,102,110);c.quadraticCurveTo(96,98,88,98);c.quadraticCurveTo(82,108,80,104)
    c.quadraticCurveTo(72,122,70,146);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=6;for(const[a,e]of[[1.1,1.18],[1.82,1.9]])c.beginPath(),c.arc(128,110,54,PI*a,PI*e),c.stroke()
    c.strokeStyle='#111';c.lineWidth=5;c.beginPath();c.moveTo(90+fx,113);c.lineTo(112+fx,119);c.moveTo(144+fx,112);c.lineTo(166+fx,103);c.stroke()
    c.lineWidth=7;c.fillStyle=HAT;c.beginPath();c.ellipse(128,70,84,15,0,0,T);c.fill();c.stroke()
    c.beginPath();c.moveTo(76,72);c.bezierCurveTo(74,10,182,10,180,72);c.quadraticCurveTo(128,82,76,72);c.fill();c.stroke()
    c.fillStyle=HB;c.lineWidth=6;c.beginPath();c.moveTo(77,58);c.quadraticCurveTo(128,68,179,58);c.lineTo(180,70);c.quadraticCurveTo(128,80,76,70);c.closePath();c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=6;c.beginPath();c.arc(128,64,40,PI*1.25,PI*1.42);c.stroke();c.strokeStyle='#111'
    c.fillStyle=SW;c.lineWidth=5;const sy=106;c.beginPath();c.moveTo(198,sy-14);c.quadraticCurveTo(208,sy,198,sy+7);c.quadraticCurveTo(188,sy,198,sy-14);c.fill();c.stroke()
  })
  c.restore()
  c.save();c.translate(128,202)
  for(const[k,a,b]of[[0,-102,-34],[1,-34,34],[2,34,102]]){const u=k%2?-4:0,v=k%2?0:-4;c.fillStyle=k%2?MP:MAP;c.beginPath();c.moveTo(a,-42-u);c.lineTo(b,-42-v);c.lineTo(b,42+v);c.lineTo(a,42+u);c.closePath();c.fill();c.lineWidth=6;c.stroke()}
  c.save();c.rotate(PI)
  c.strokeStyle='#ff6b6b';c.lineWidth=4.5;c.setLineDash([7,7]);c.beginPath();c.moveTo(-34,26);c.bezierCurveTo(0,30,20,-6,58,-4);c.stroke();c.setLineDash([]);c.strokeStyle='#111'
  c.lineWidth=4.5;for(const[x,h,w]of[[-70,34,24],[-44,26,20]]){c.fillStyle=MT;c.beginPath();c.moveTo(x-w,26);c.lineTo(x,26-h);c.lineTo(x+w,26);c.closePath();c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.moveTo(x-w*.35,26-h*.65);c.lineTo(x,26-h);c.lineTo(x+w*.35,26-h*.65);c.lineTo(x,26-h*.55);c.closePath();c.fill();c.stroke()}
  c.strokeStyle=HB;c.lineWidth=5;c.beginPath();c.moveTo(-8,30);c.lineTo(-8,22);c.stroke();c.strokeStyle='#111';c.lineWidth=4.5;c.fillStyle=PINE
  for(const[y,w]of[[22,15],[10,12],[-2,9]])c.beginPath(),c.moveTo(-8-w,y),c.lineTo(-8,y-16),c.lineTo(-8+w,y),c.closePath(),c.fill(),c.stroke()
  c.fillStyle='#fff';c.beginPath();c.rect(22,-24,24,18);c.fill();c.stroke();c.fillStyle='#ff8787';c.beginPath();c.moveTo(17,-22);c.lineTo(34,-38);c.lineTo(51,-22);c.closePath();c.fill();c.stroke()
  for(const[w,st]of[[12,'#111'],[5.5,'#fa5252']])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(60,-14),c.lineTo(78,4),c.moveTo(78,-14),c.lineTo(60,4),c.stroke()
  c.restore()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN
  for(const d of[-1,1]){c.beginPath();c.ellipse(d*96,-34,11,14,0,0,T);c.fill();c.stroke();c.beginPath();c.ellipse(d*87,-41,6,9,d*.6,0,T);c.fill();c.stroke()}
  c.restore()
}
