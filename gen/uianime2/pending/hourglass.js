// sandy haired girl with a side braid flips a big hourglass over with both hands, then sways her head tick-tock and blinks while she watches the sand trickle down
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=100
const SKIN='#ffe3d1',HAIR='#ecd2a2',HD='#c9a066',HL='#fdf6e8',EYE='#20c997',ED='#087f5b',SW='#d0bfff',BL='#ffa8a8',MO='#c92a2a',WD='#c0805a',WDD='#8d5a3a',GL='#e7f5ff',SA='#ffc078',SAD='#e8590c',RIB='#ff8787'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const eye=(c,x,y,d,gy)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x,y+gy,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x,y+gy-10,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+gy+1,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y+gy-6,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+gy+7,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const G=c=>{c.beginPath();c.moveTo(-30,-48);c.bezierCurveTo(-34,-14,-6,-8,-5,0);c.bezierCurveTo(-6,8,-34,14,-30,48);c.lineTo(30,48);c.bezierCurveTo(34,14,6,8,5,0);c.bezierCurveTo(6,-8,34,-14,30,-48);c.closePath()}
const glass=(c,p,fl)=>{
  G(c);c.fillStyle=GL;c.fill()
  c.save();G(c);c.clip();c.fillStyle=SA;c.lineWidth=4
  if(p<1){const y=-40*(1-p);c.beginPath();c.moveTo(-40,y);c.quadraticCurveTo(0,y+10*(1-p),40,y);c.lineTo(40,2);c.lineTo(-40,2);c.closePath();c.fill();c.stroke()}
  const h=4+40*p;c.beginPath();c.moveTo(-40,52);c.lineTo(-40,48-h*.3);c.quadraticCurveTo(-14,48-h*.5,0,48-h);c.quadraticCurveTo(14,48-h*.5,40,48-h*.3);c.lineTo(40,52);c.closePath();c.fill();c.stroke()
  if(fl){c.strokeStyle=SAD;c.lineWidth=3.5;c.beginPath();c.moveTo(0,0);c.lineTo(0,48-h);c.stroke();c.strokeStyle='#111'}
  c.restore()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(-22,-40);c.quadraticCurveTo(-24,-22,-12,-12);c.moveTo(-22,40);c.lineTo(-23,30);c.stroke();c.strokeStyle='#111'
  c.lineWidth=5;G(c);c.stroke()
}
export default(c,t,i)=>{
  const th=PI*ez(t,0,.19),fl=t>=.19,p=fl?ez(t,.19,.9)*.9+.1*min(1,max(0,(t-.19)/.71)):1,ly=-12*sin(th),ok=t>=.9
  const tl=fl?.07*sin(T*(t-.19)/.81*2):0,bk=i==8,gy=fl?5:-2
  const H=(f,a)=>{c.save();c.translate(128,144);c.rotate(a);c.scale(.8,.8);c.translate(-128,-186);f();c.restore()}
  H(()=>{c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,100,206,160);c.quadraticCurveTo(208,186,190,196);c.lineTo(66,196);c.quadraticCurveTo(48,186,50,160);c.bezierCurveTo(44,100,58,34,128,34);c.fill();c.stroke()},tl)
  H(()=>{
    c.lineWidth=8;c.fillStyle=SW;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.moveTo(102,190);c.quadraticCurveTo(110,214,128,208);c.quadraticCurveTo(146,214,154,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
  },0)
  H(()=>{
    c.fillStyle=HAIR;c.lineWidth=8;for(let k=5;k>=0;k--)c.beginPath(),c.ellipse(54-k*1.5,168+k*19,14-k*.6,12,k%2?.5:-.5,0,T),c.fill(),c.stroke()
    c.fillStyle=RIB;c.lineWidth=6;c.beginPath();c.ellipse(46,286,12,8,0,0,T);c.fill();c.stroke()
    c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(!fl){c.lineWidth=8;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*38,128),c.lineTo(128+d*18,140),c.lineTo(128+d*38,152),c.stroke()}
    else if(bk){c.lineWidth=7;for(const x of[103,153])c.beginPath(),c.moveTo(x-14,146),c.quadraticCurveTo(x,153,x+14,146),c.stroke()}
    else eye(c,103,140,-1,gy),eye(c,153,140,1,gy)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO
    if(!fl){c.beginPath();c.moveTo(116,164);c.lineTo(140,164);c.quadraticCurveTo(140,178,128,178);c.quadraticCurveTo(116,178,116,164);c.fill();c.stroke()}
    else if(ok){c.beginPath();c.moveTo(116,165);c.quadraticCurveTo(128,182,140,165);c.closePath();c.fill();c.stroke()}
    else{c.beginPath();c.moveTo(118,170);c.quadraticCurveTo(123,166,128,170);c.quadraticCurveTo(133,174,138,170);c.stroke()}
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
    c.quadraticCurveTo(186,118,178,102);c.quadraticCurveTo(168,98,160,108);c.quadraticCurveTo(152,90,140,84);c.quadraticCurveTo(136,102,124,110)
    c.quadraticCurveTo(118,96,108,92);c.quadraticCurveTo(102,104,94,108);c.quadraticCurveTo(90,98,84,96);c.quadraticCurveTo(80,108,78,112)
    c.quadraticCurveTo(70,124,68,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111';c.fillStyle=RIB;c.lineWidth=6;for(const y of[70,86])c.beginPath(),c.roundRect(156,y-5,26,10,5),c.fill(),c.stroke()
  },tl)
  const X=128,Y=202+ly,S=.8
  for(const d of[-1,1])ds(c,22,13,SW,()=>{c.moveTo(128+d*52,176);c.quadraticCurveTo(128+d*72,Y+8,X+d*38,Y+4)})
  c.save();c.translate(X,Y);c.scale(S,S*(fl?1:cos(th)||.01))
  glass(c,fl?p:1,fl&&p<.98)
  for(const s of[-1,1]){ds(c,14,7,WD,()=>{c.moveTo(s*38,-50);c.lineTo(s*38,50)})}
  c.fillStyle=WD;c.lineWidth=6;for(const y of[-62,48])c.beginPath(),c.roundRect(-48,y,96,14,6),c.fill(),c.stroke()
  c.strokeStyle=WDD;c.lineWidth=3;for(const y of[-55,55])c.beginPath(),c.moveTo(-36,y),c.lineTo(36,y),c.stroke();c.strokeStyle='#111'
  c.restore()
  if(th>.2&&th<3)for(const d of[0,PI])ds(c,8,3.5,'#fff',()=>{c.ellipse(X,Y,62,48,0,d-.6,d+.6)})
  c.fillStyle=SKIN;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.ellipse(X+d*37,Y+2,11,13,0,0,T),c.fill(),c.stroke()
  if(ok){const q=(t-.9)/.1;c.fillStyle='#ffe066';c.lineWidth=3.5;for(const[x,y]of[[212,150],[44,140]]){const r=12*sin(PI*q);if(r>1){c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}}}
}
