// short orange-red haired girl cradling a flickering flame in her palm as a streak badge pops in, its day counter rolls from 6 to 7 with a +1 and she fist pumps beaming while the flame flares up
const{sin,cos,PI,max,min,abs}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#ff7043',HD='#d9480f',HL='#ffe8cc',EYE='#4dabf7',ED='#1864ab',JK='#20c997',JD='#087f5b',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',F1='#ff922b',F2='#ffd43b',F3='#fff9db',BG='#fff4e6',PIN='#74c0fc'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,gx,gy)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+gx,y+gy+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+gx,y+gy-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+gx,y+gy+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+gx-4,y+gy-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+gx+5,y+gy+8,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const flame=(c,x,y,s,w)=>{c.save();c.translate(x,y);c.scale(s,s*(1+.08*w))
  for(const[k,f]of[[1,F1],[.62,F2],[.3,F3]]){c.save();c.translate(0,20*(1-k));c.scale(k,k);c.fillStyle=f;c.lineWidth=(k==1?6:4)/s/k;c.beginPath()
    c.moveTo(0,20);c.bezierCurveTo(-24,18,-26,-6,-10,-22);c.quadraticCurveTo(-8,-8,-1,-6);c.quadraticCurveTo(-2,-30,10+3*w,-44);c.quadraticCurveTo(8,-24,18,-14);c.bezierCurveTo(28,-2,24,18,0,20);c.fill();if(k>.5)c.stroke();c.restore()}
  c.restore()}
const dig=(c,n,x,y)=>{if(n==6)c.moveTo(x+12,y+1),c.quadraticCurveTo(x+1,y+6,x+1,y+18),c.moveTo(x+13,y+19),c.ellipse(x+7,y+19,6,6.5,0,0,T);else c.moveTo(x,y),c.lineTo(x+13,y),c.lineTo(x+5,y+26)}
export default(c,t,i)=>{
  const bs=i==0?.5:i==1?1.15:i<14?1:i==14?.6:.2,r=min(1,max(0,(i-6)/2)),pm=i>=8&&i<14,hp=pm,w=sin(T*t*4),fs=pm?1.25:1
  const H=f=>{c.save();c.translate(140,180-(pm?4:0));c.scale(.68,.68);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,96,200,150);c.quadraticCurveTo(196,170,182,176);c.lineTo(74,176);c.quadraticCurveTo(60,170,56,150);c.bezierCurveTo(44,96,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=JK;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(106,188);c.lineTo(128,230);c.lineTo(150,188);c.closePath();c.fill();c.stroke()
    c.fillStyle=JD;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*24,186),c.lineTo(128+d*4,236),c.lineTo(128+d*44,214),c.closePath(),c.fill(),c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(hp){c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.arc(x,148,15,1.15*PI,1.85*PI),c.stroke()}
    else eye(c,103,140,-1,-4,3),eye(c,153,140,1,-4,3)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO
    if(hp){c.beginPath();c.moveTo(110,163);c.quadraticCurveTo(128,168,146,163);c.quadraticCurveTo(144,190,128,190);c.quadraticCurveTo(112,190,110,163);c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,192,10,8,0,0,T);c.fill();c.restore()}
    else{c.beginPath();c.moveTo(116,166);c.quadraticCurveTo(128,180,140,166);c.closePath();c.fill();c.stroke()}
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,158)
    c.bezierCurveTo(46,74,88,36,128,36);c.bezierCurveTo(168,36,212,74,192,158);c.lineTo(184,140);c.lineTo(180,106)
    c.quadraticCurveTo(172,104,166,114);c.quadraticCurveTo(162,96,150,88);c.quadraticCurveTo(146,104,136,110)
    c.quadraticCurveTo(130,94,118,86);c.quadraticCurveTo(116,102,106,110);c.quadraticCurveTo(100,96,92,94);c.quadraticCurveTo(90,106,84,112)
    c.quadraticCurveTo(78,104,76,104);c.lineTo(72,140);c.closePath();c.fill();c.stroke()
    c.beginPath();c.moveTo(118,40);c.quadraticCurveTo(112,14,138,10);c.quadraticCurveTo(124,22,132,38);c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=PIN;c.lineWidth=6;for(const a of[-.5,.5])c.save(),c.translate(168,84),c.rotate(a),c.beginPath(),c.roundRect(-16,-5,32,10,5),c.fill(),c.stroke(),c.restore()
  })
  const pf=pm?(i%2?160:130):0
  ds(c,24,15,JK,()=>{c.moveTo(108,206);c.quadraticCurveTo(76,236,70,214)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(74,206,20,10,-.15,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(90,198,6,9,-.6,0,T);c.fill();c.stroke()
  flame(c,74,170-6*sin(T*t*2),fs,w)
  if(pm){ds(c,24,15,JK,()=>{c.moveTo(178,206);c.quadraticCurveTo(222,214,216,pf+14)})
    c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.roundRect(204,pf-12,24,24,9);c.fill();c.stroke();c.lineWidth=3;c.beginPath();for(const k of[-5,3])c.moveTo(204,pf+k),c.lineTo(212,pf+k);c.stroke()
    if(i%2==0)ds(c,7,3,'#fff',()=>{for(const a of[-2.4,-1.6,-.8]){c.moveTo(216+cos(a)*24,pf+sin(a)*24);c.lineTo(216+cos(a)*34,pf+sin(a)*34)}})}
  else{ds(c,24,15,JK,()=>{c.moveTo(176,208);c.quadraticCurveTo(150,240,104,214)})
    c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(100,210,13,11,0,0,T);c.fill();c.stroke()}
  if(bs>.3){c.save();c.translate(196,44);c.scale(bs,bs);c.rotate(-.06)
    c.fillStyle=BG;c.lineWidth=6;c.beginPath();c.roundRect(-46,-28,92,56,28);c.fill();c.stroke()
    flame(c,-20,4,.5,w)
    c.save();c.beginPath();c.rect(0,-24,40,48);c.clip()
    for(const[n,o]of[[6,-34*r],[7,34*(1-r)]])if(abs(o)<34)ds(c,11,5.5,F1,()=>dig(c,n,6,-13+o))
    c.restore();c.restore()}
  if(i>=7&&i<12){const q=(i-7)/5,y=96-26*q;ds(c,10,5,F2,()=>{c.moveTo(214,y);c.lineTo(230,y);c.moveTo(222,y-8);c.lineTo(222,y+8);c.moveTo(236,y-4);c.lineTo(241,y-8);c.lineTo(241,y+9)})}
}
