// golden blonde girl with twin buns tapping five rating stars one by one with alternating hands, each lights up gold with a pop, then she throws her arms up beaming as they shimmer before resetting
const{sin,cos,PI}=Math,T=2*PI
export const frames=20,delay=85
const SKIN='#ffe3d1',HAIR='#ffe066',HD='#f0b429',HL='#fff9db',EYE='#9775fa',ED='#5f3dc4',TOP='#74c0fc',RB='#ff6b6b',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',ST='#fcc419',OFF='#e9ecef',SP='#ffe066'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,gx,gy)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+gx,y+gy+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+gx,y+gy-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+gx,y+gy+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+gx-4,y+gy-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+gx+5,y+gy+8,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const star=(c,x,y,r,f)=>{c.fillStyle=f;c.beginPath();for(let k=0;k<10;k++){const a=-PI/2+k*PI/5,q=k%2?r*.48:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();c.fill();c.stroke()}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
const SX=[38,83,128,173,218],SY=218
const LH=[[38,178],[38,190],[60,172],[83,190],[106,172],[128,190],[86,194],[80,196],[80,196],[80,196]],RH=[[176,196],[176,196],[176,196],[176,196],[176,196],[176,196],[150,172],[173,190],[196,172],[218,190]]
export default(c,t,i)=>{
  const bm=i>=10&&i<17,lit=k=>i>=17?i<19-(k>2?1:0)&&k<4-(i-17)*2:i>=1+2*k,up=bm?1:0
  const L=bm?[46,104]:i<10?LH[i]:[80,196],R=bm?[210,104]:i<10?RH[i]:[176,196],act=i<6?L:R
  const H=f=>{c.save();c.translate(128,160-4*up);c.scale(.74,.74);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,204,160);c.quadraticCurveTo(204,190,186,198);c.lineTo(70,198);c.quadraticCurveTo(52,190,52,160);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(98,190);c.lineTo(128,236);c.lineTo(158,190);c.lineTo(176,198);c.lineTo(128,262);c.lineTo(80,198);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=RB;c.lineWidth=7;for(const d of[-1,1])c.beginPath(),c.moveTo(128,232),c.lineTo(128+d*22,220),c.lineTo(128+d*20,246),c.closePath(),c.fill(),c.stroke()
    c.beginPath();c.arc(128,233,7,0,T);c.fill();c.stroke()
    c.lineWidth=9;for(const d of[-1,1]){c.fillStyle=HAIR;c.beginPath();c.arc(128+d*58,50,30,0,T);c.fill();c.stroke()
      c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.arc(128+d*58,50,18,PI*(d>0?1.1:1.6),PI*(d>0?1.6:2.1));c.stroke();c.strokeStyle='#111';c.lineWidth=9}
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(bm){c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.arc(x,148,15,1.15*PI,1.85*PI),c.stroke()}
    else{const gx=i<17?(act[0]-128)/14:0,gy=i<17?5:0;eye(c,103,140,-1,gx,gy);eye(c,153,140,1,gx,gy)}
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO
    if(bm){c.beginPath();c.moveTo(110,163);c.quadraticCurveTo(128,168,146,163);c.quadraticCurveTo(144,190,128,190);c.quadraticCurveTo(112,190,110,163);c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,192,10,8,0,0,T);c.fill();c.restore()}
    else{c.beginPath();c.moveTo(118,166);c.quadraticCurveTo(128,180,138,166);c.closePath();c.fill();c.stroke()}
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(70,150)
    c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,150)
    c.quadraticCurveTo(186,118,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
    c.quadraticCurveTo(132,96,124,90);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(106,96,96,94);c.quadraticCurveTo(90,104,86,112)
    c.quadraticCurveTo(80,104,78,102);c.quadraticCurveTo(70,120,70,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
  })
  c.fillStyle='#fff';c.lineWidth=7;c.beginPath();c.roundRect(10,188,236,60,18);c.fill();c.stroke()
  for(let k=0;k<5;k++){const on=lit(k),p=i-1-2*k,s=on&&i<10?(p==0?1.35:p==1?1.12:1):bm?1+.08*sin(T*(t*3-k*.2)):1
    c.lineWidth=5;star(c,SX[k],SY,19*s,on?ST:OFF)
    if(on){c.strokeStyle='#fff';c.lineWidth=3.5;c.beginPath();c.moveTo(SX[k]-6*s,SY-6*s);c.lineTo(SX[k]-2*s,SY-11*s);c.stroke();c.strokeStyle='#111'}
    if(on&&i<10&&p==0)ds(c,7,3,SP,()=>{for(let j=0;j<6;j++){const a=-PI/2+j*PI/3+.5;c.moveTo(SX[k]+cos(a)*26,SY+sin(a)*26);c.lineTo(SX[k]+cos(a)*36,SY+sin(a)*36)}})}
  for(const[[x,y],sx,d]of[[L,92,-1],[R,164,1]]){ds(c,24,14,TOP,()=>{c.moveTo(sx,180-4*up);bm?c.quadraticCurveTo(sx+d*40,180,x,y+10):c.quadraticCurveTo(sx+d*26,200,x,y)})
    c.fillStyle=SKIN;c.lineWidth=5;if(!bm&&x==act[0]&&y==act[1]&&i<10)c.beginPath(),c.roundRect(x-4.5,y,9,17,4.5),c.fill(),c.stroke()
    c.beginPath();c.ellipse(x,y,12,12,0,0,T);c.fill();c.stroke()}
  if(bm){c.fillStyle=SP;c.lineWidth=3.5;for(const[x,y,o]of[[30,58,0],[226,52,.33],[214,140,.66],[44,150,.5]]){const r=10*(.6+.4*sin(T*(t*2+o)));spark(c,x,y,r)}}
}
