// coral haired girl with a side ponytail double tapping a photo card with her finger, ripples ring out and a big red heart pops and bounces over the photo as she beams
const{sin,PI,min}=Math,T=2*PI
export const frames=16,delay=85
const SKIN='#ffe3d1',HAIR='#ff8a80',HD='#f0605a',HL='#fff0ee',EYE='#4dabf7',ED='#1864ab',TOP='#96f2d7',TD='#20c997',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',SCR='#ffd43b',SKY='#a5d8ff',SUN='#ffd43b',G1='#8ce99a',G2='#51cf66',HR='#ff6b6b',GRY='#ced4da'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,g)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+g,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+g,y-9,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+g,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+g-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+g+5,y+8,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const heart=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,24);c.bezierCurveTo(-34,2,-30,-26,-13,-26);c.bezierCurveTo(-5,-26,0,-19,0,-13);c.bezierCurveTo(0,-19,5,-26,13,-26);c.bezierCurveTo(30,-26,34,2,0,24);c.closePath();c.restore()}
const HP=[[124,204],[108,154],[98,166],[108,154],[98,166],[110,152],[116,180],[122,200]],HS=[0,0,0,0,.4,1.25,.9,1.06,1,1,1,1,1,.95,.6,0]
export default(c,t,i)=>{
  const[hx,hy]=HP[min(i,7)],pr=i==2||i==4,hap=i>=5&&i<14,hs=HS[i],by=i>=8&&i<14?-6*sin(PI*(i-8)/3):0
  c.save();c.translate(70,130);c.rotate(-.06)
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.roundRect(-60,-74,120,148,10);c.fill();c.stroke()
  c.save();c.beginPath();c.rect(-48,-62,96,96);c.clip();c.fillStyle=SKY;c.fillRect(-48,-62,96,96)
  c.fillStyle=SUN;c.lineWidth=4;c.beginPath();c.arc(22,-36,12,0,T);c.fill();c.stroke()
  c.fillStyle=G1;c.beginPath();c.moveTo(-60,40);c.quadraticCurveTo(-30,-26,10,10);c.quadraticCurveTo(30,-12,60,4);c.lineTo(60,40);c.closePath();c.fill();c.stroke()
  c.fillStyle=G2;c.beginPath();c.moveTo(-60,40);c.quadraticCurveTo(-14,4,30,40);c.closePath();c.fill();c.stroke();c.restore()
  c.lineWidth=4;c.beginPath();c.rect(-48,-62,96,96);c.stroke()
  c.lineWidth=4;c.fillStyle=hap?HR:'#fff';heart(c,-34,54,.42);c.fill();c.stroke()
  c.strokeStyle=GRY;c.lineWidth=5;c.beginPath();c.moveTo(-14,50);c.lineTo(36,50);c.moveTo(-14,60);c.lineTo(20,60);c.stroke();c.strokeStyle='#111'
  c.restore()
  const H=f=>{c.save();c.translate(172,156+(hap?-2*sin(PI*(i-5)/2):0));c.rotate(hap?.04:-.03);c.scale(.62,.62);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,212,96,204,170);c.lineTo(52,170);c.bezierCurveTo(44,96,58,34,128,34);c.fill();c.stroke()
    c.save();c.translate(196,70);c.rotate(.1*sin(T*t*2))
    c.fillStyle=HAIR;c.beginPath();c.moveTo(-6,0);c.bezierCurveTo(60,0,72,90,52,150);c.quadraticCurveTo(40,186,10,190);c.quadraticCurveTo(34,160,32,120);c.quadraticCurveTo(28,60,-4,28);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.moveTo(16,20);c.bezierCurveTo(44,46,52,100,40,150);c.stroke();c.strokeStyle='#111';c.lineWidth=9
    c.fillStyle=SCR;c.beginPath();c.ellipse(2,8,14,20,.5,0,T);c.fill();c.stroke();c.restore()
    c.fillStyle=TOP;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=TD;c.beginPath();c.moveTo(96,192);c.quadraticCurveTo(128,230,160,192);c.lineTo(166,206);c.quadraticCurveTo(128,250,90,206);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,210,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.lineWidth=9;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(hap){c.lineWidth=9;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}
    else if(i==14){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,149,x+15,142),c.stroke()}
    else eye(c,103,140,-1,-4),eye(c,153,140,1,-4)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,15,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO;c.beginPath()
    if(hap)c.moveTo(110,163),c.quadraticCurveTo(128,168,146,163),c.quadraticCurveTo(144,190,128,190),c.quadraticCurveTo(112,190,110,163)
    else c.moveTo(116,166),c.quadraticCurveTo(128,170,140,166),c.quadraticCurveTo(138,180,128,180),c.quadraticCurveTo(118,180,116,166)
    c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,hap?191:181,9,7,0,0,T);c.fill();c.restore()
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,168)
    c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,190,150)
    c.quadraticCurveTo(186,118,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
    c.quadraticCurveTo(130,96,120,88);c.quadraticCurveTo(116,102,108,110);c.quadraticCurveTo(102,98,94,96);c.quadraticCurveTo(90,104,86,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,130,78,166);c.quadraticCurveTo(72,160,66,168);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111'
  })
  for(const k of[2,4])if(i==k||i==k+1){const r=i==k?8:20;ds(c,i==k?7:5,i==k?3:2,'#fff',()=>{c.arc(86,152,r,0,T)})}
  ds(c,22,13,TOP,()=>{c.moveTo(138,204);c.quadraticCurveTo(104,262,hx+6,hy+12)})
  const s=pr?.92:1;c.save();c.translate(hx,hy);c.scale(s,s);c.rotate(-.75)
  ds(c,13,6,SKIN,()=>{c.moveTo(0,-2);c.lineTo(0,-18)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(2,8,12,13,0,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(-4,6);c.lineTo(4,6);c.moveTo(-4,12);c.lineTo(4,12);c.stroke();c.restore()
  if(hs>0){c.save();c.translate(66,96+by);c.rotate(.12*sin(PI*i/3));c.lineWidth=7;c.fillStyle=HR;heart(c,0,0,1.5*hs);c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(-16*hs,-16*hs,9*hs,PI*1.05,PI*1.5);c.stroke();c.restore()
    if(i>=5&&i<13)for(const[k,[x,o]]of[[0,[24,0]],[1,[108,2]],[2,[44,4]]].entries()){const p=(i-5-o)/5;if(p>0&&p<1){c.fillStyle=k%2?'#ff8fab':HR;c.lineWidth=3.5;heart(c,x+6*sin(p*5),58-50*p,.4*(1-p*.4));c.fill();c.stroke()}}}
}
