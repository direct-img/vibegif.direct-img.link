// forest green haired tour guide girl in a mustard beret waving a little pennant flag and presenting three step dots that light up 1 2 3 in sequence with a hop each, then all bounce and reset
const{sin,cos,PI}=Math,T=2*PI
export const frames=15,delay=100
const SKIN='#ffe3d1',HAIR='#4c9a5f',HD='#2d6a3e',HL='#d3f9d8',EYE='#f08c00',ED='#d9480f',VE='#364fc7',SC='#ff6b6b',BE='#ffd43b',BED='#f59f00',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',FL='#ff6b6b',ON='#4dabf7',OFF='#f1f3f5',GR='#adb5bd',WD='#c47f45'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+4,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+4,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+9,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const star=(c,x,y,r)=>{c.beginPath();for(let k=0;k<10;k++){const a=-PI/2+k*PI/5,q=k%2?r*.45:r;c.lineTo(x+cos(a)*q,y+sin(a)*q)}c.closePath();c.fill();c.stroke()}
const dig=(c,n,x,y)=>{n==1?(c.moveTo(x+2,y+5),c.lineTo(x+7,y),c.lineTo(x+7,y+20)):n==2?(c.moveTo(x+1,y+5),c.quadraticCurveTo(x+1,y,x+6,y),c.quadraticCurveTo(x+12,y,x+12,y+6),c.quadraticCurveTo(x+12,y+10,x+1,y+20),c.lineTo(x+12,y+20)):(c.moveTo(x+1,y),c.lineTo(x+12,y),c.lineTo(x+5,y+8),c.quadraticCurveTo(x+13,y+8,x+13,y+14),c.quadraticCurveTo(x+13,y+20,x+6,y+20),c.quadraticCurveTo(x+2,y+20,x,y+18))}
const SY=[64,128,192],LT=[1,5,9]
export default(c,t,i)=>{
  const al=i>=10&&i<14,hop=LT.includes(i)?-8:LT.includes(i-1)?-3:al?-5*sin(PI*(i-10)/2)**2:0,wv=T*t*3
  const lit=k=>i>=LT[k]&&i<14
  c.fillStyle=OFF;c.lineWidth=6;c.beginPath();c.roundRect(202,SY[0],16,SY[2]-SY[0],8);c.fill();c.stroke()
  const fe=i>=14?0:i<2?0:i<5?(i-1)/4*64:i<6?64:i<9?64+(i-5)/4*64:128;if(fe>4){c.fillStyle=ON;c.lineWidth=4;c.beginPath();c.roundRect(205,SY[0],10,fe,5);c.fill();c.stroke()}
  for(let k=0;k<3;k++){const on=lit(k),p=i-LT[k],s=on?(p==0?1.3:p==1?1.1:al?1+.1*sin(PI*(i-10+k*.5)/1.5):1):1
    c.save();c.translate(210,SY[k]);c.scale(s,s);c.fillStyle=on?ON:OFF;c.lineWidth=6;c.beginPath();c.arc(0,0,22,0,T);c.fill();c.stroke()
    if(on){c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(0,0,15,PI*1.1,PI*1.4);c.stroke();ds(c,9,4.5,'#fff',()=>dig(c,k+1,-6,-10))}
    else{c.strokeStyle=GR;c.lineWidth=5;c.beginPath();dig(c,k+1,-6,-10);c.stroke();c.strokeStyle='#111'}
    c.restore()
    if(on&&p==0)ds(c,7,3,BE,()=>{for(const a of[-.7,0,.7]){c.moveTo(210+cos(a)*31,SY[k]+sin(a)*31);c.lineTo(210+cos(a)*40,SY[k]+sin(a)*40)}})}
  c.save();c.translate(0,hop)
  const H=f=>{c.save();c.translate(104,180);c.scale(.68,.68);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,100,208,160);c.quadraticCurveTo(212,200,200,236);c.lineTo(56,236);c.quadraticCurveTo(44,200,48,160);c.bezierCurveTo(42,100,56,34,128,34);c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=VE;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*30,192),c.quadraticCurveTo(128+d*72,200,128+d*84,330),c.lineTo(128+d*12,330),c.lineTo(128+d*12,260),c.closePath(),c.fill(),c.stroke()
    c.fillStyle=BE;c.lineWidth=5;for(const y of[280,310])c.beginPath(),c.arc(110,y,5,0,T),c.fill(),c.stroke()
    c.fillStyle=SKIN;c.lineWidth=8;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle=SC;c.beginPath();c.moveTo(102,194);c.quadraticCurveTo(128,214,154,194);c.lineTo(160,206);c.quadraticCurveTo(128,228,96,206);c.closePath();c.fill();c.stroke()
    c.beginPath();c.moveTo(128,214);c.lineTo(116,250);c.lineTo(132,246);c.lineTo(140,212);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(al){c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.arc(x,148,15,1.15*PI,1.85*PI),c.stroke()}
    else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO;c.beginPath();c.moveTo(112,164);c.quadraticCurveTo(128,168,144,164);c.quadraticCurveTo(142,186,128,186);c.quadraticCurveTo(114,186,112,164);c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,188,9,7,0,0,T);c.fill();c.restore()
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(62,176)
    c.bezierCurveTo(44,74,88,40,128,40);c.bezierCurveTo(168,40,212,74,194,176);c.quadraticCurveTo(186,180,180,172)
    c.quadraticCurveTo(184,128,178,104);c.quadraticCurveTo(170,106,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(72,128,76,172);c.quadraticCurveTo(70,180,62,176);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.3,1.4],[1.48,1.56],[1.64,1.74]])c.beginPath(),c.arc(128,106,54,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.save();c.translate(116,50);c.rotate(-.18)
    c.fillStyle=BED;c.lineWidth=7;c.beginPath();c.roundRect(-4,-42,10,16,4);c.fill();c.stroke()
    c.fillStyle=BE;c.lineWidth=8;c.beginPath();c.moveTo(-62,10);c.bezierCurveTo(-80,-30,-20,-44,20,-36);c.bezierCurveTo(70,-28,84,0,62,12);c.quadraticCurveTo(0,26,-62,10);c.fill();c.stroke()
    c.strokeStyle=BED;c.lineWidth=5;c.beginPath();c.moveTo(-50,6);c.quadraticCurveTo(0,16,50,8);c.stroke();c.strokeStyle='#111'
    c.fillStyle=FL;c.lineWidth=5;star(c,40,-10,11);c.restore()
  })
  ds(c,9,5,WD,()=>{c.moveTo(42,166);c.lineTo(36,20)})
  c.fillStyle=FL;c.lineWidth=6;c.beginPath();const fx=s=>[38+s*62,22+9*s*sin(wv-s*3.5)]
  for(let k=0;k<=8;k++){const[x,y]=fx(k/8);c.lineTo(x,y+(k==8?18:0)*(1-k/8))}
  for(let k=8;k>=0;k--){const[x,y]=fx(k/8);c.lineTo(x,y+36-18*k/8)}
  c.closePath();c.fill();c.stroke()
  const[sx,sy]=fx(.42);c.fillStyle=BE;c.lineWidth=4;star(c,sx,sy+13,9)
  c.fillStyle=BE;c.lineWidth=5;c.beginPath();c.arc(36,18,6,0,T);c.fill();c.stroke()
  ds(c,24,15,'#fff',()=>{c.moveTo(70,206);c.quadraticCurveTo(40,200,44,160)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(43,154,12,13,0,0,T);c.fill();c.stroke()
  ds(c,24,15,'#fff',()=>{c.moveTo(136,204);c.quadraticCurveTo(160,214,170,184)})
  c.fillStyle=SKIN;c.lineWidth=5;c.save();c.translate(176,176);c.rotate(-.5);c.beginPath();c.ellipse(0,0,16,9,0,0,T);c.fill();c.stroke();c.beginPath();c.ellipse(-4,-9,4.5,8,.3,0,T);c.fill();c.stroke();c.restore()
  c.restore()
}
