// silver haired girl flicking a big dark mode toggle, the backdrop fades from a sunny sky to a starry night with a moon and she drowses in a striped nightcap, then flicks it back to day
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=95
const SKIN='#ffe3d1',HAIR='#e9ecef',HD='#adb5bd',HL='#fff',EYE='#4dabf7',ED='#1864ab',PJ='#ffc9de',PD='#f06595',BL='#ffa8a8',SKY='#a5d8ff',NT='#25285a',SUN='#ffd43b',SD='#fab005',MN='#ffec99',TK='#fff',TD='#5c7cfa',CAP='#748ffc',SP='#ffe066'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const moon=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.arc(0,0,18,.395,4.711);c.arc(9,-6,15,4.069,1.037,true);c.closePath();c.restore()}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
export default(c,t,i)=>{
  const s=ease((t-.4)/.1)-ease((t-.9)/.1),dk=s>.5,kx=46+48*s,pr=(t>.36&&t<.46)||t>.86?1:0,cp=dk?min(1,(t-.45)/.08):0
  const box=()=>{c.beginPath();c.roundRect(8,8,240,240,30)}
  c.lineWidth=7;box();c.fillStyle=SKY;c.fill()
  c.save();box();c.clip()
  c.globalAlpha=s;c.fillStyle=NT;c.fillRect(0,0,256,256);c.globalAlpha=1
  c.fillStyle='#fff';c.globalAlpha=1-s;c.lineWidth=5;c.beginPath();c.moveTo(108,52);c.quadraticCurveTo(102,38,118,36);c.quadraticCurveTo(124,20,142,26);c.quadraticCurveTo(160,24,158,40);c.quadraticCurveTo(170,44,164,52);c.closePath();c.fill();c.stroke()
  c.save();c.translate(54,58);c.rotate(T*t/8);for(let k=0;k<8;k++){const a=k*T/8;ds(c,9,4,SUN,()=>{c.moveTo(cos(a)*28,sin(a)*28);c.lineTo(cos(a)*38,sin(a)*38)})}c.restore()
  c.fillStyle=SUN;c.lineWidth=6;c.beginPath();c.arc(54,58,21,0,T);c.fill();c.stroke()
  c.globalAlpha=s;c.fillStyle=MN;c.lineWidth=6;moon(c,54,58,1.3);c.fill();c.stroke()
  c.fillStyle=SP;c.lineWidth=3;for(const[x,y,o]of[[118,34,0],[150,62,.3],[96,96,.6],[26,118,.15],[214,30,.8]]){const r=.55+.45*sin(T*(t*2+o));spark(c,x,y,9*r)}
  c.globalAlpha=1
  const H=f=>{c.save();c.translate(178,200);c.scale(.64,.64);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(206,34,220,100,214,170);c.lineTo(226,330);c.lineTo(30,330);c.lineTo(42,170);c.bezierCurveTo(36,100,50,34,128,34);c.fill();c.stroke()
    c.fillStyle=PJ;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,380);c.lineTo(216,380);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.quadraticCurveTo(128+d*20,186,128+d*36,194),c.quadraticCurveTo(128+d*30,214,128,206),c.fill(),c.stroke()
    c.fillStyle=PD;for(const y of[236,270])c.beginPath(),c.arc(128,y,6,0,T),c.fill(),c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(dk){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,140),c.quadraticCurveTo(x,150,x+15,140),c.stroke()}
    else if(i==2){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.moveTo(x-14,142),c.quadraticCurveTo(x,150,x+14,142),c.stroke()}
    else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,15,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle='#c92a2a';if(dk)c.beginPath(),c.ellipse(128,172,5,7,0,0,T),c.fill(),c.stroke();else c.beginPath(),c.moveTo(114,164),c.quadraticCurveTo(128,184,142,164),c.closePath(),c.fill(),c.stroke()
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,170)
    c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,190,170)
    c.quadraticCurveTo(186,120,180,104);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,76,104);c.quadraticCurveTo(68,128,66,170);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=5;for(const x of[84,172])c.beginPath(),c.moveTo(x,120),c.quadraticCurveTo(x+(x<128?-8:8),140,x+(x<128?-6:6),164),c.stroke()
    c.strokeStyle=HL;c.lineWidth=8;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
    if(cp>0){c.save();c.translate(128,70);c.scale(cp,cp);c.lineWidth=9
      c.fillStyle=CAP;c.beginPath();c.moveTo(-64,6);c.quadraticCurveTo(-60,-50,0,-56);c.quadraticCurveTo(-60,-70,-96,-20);c.quadraticCurveTo(-60,-40,-66,4);c.fill()
      c.beginPath();c.moveTo(-64,6);c.quadraticCurveTo(-60,-50,0,-56);c.quadraticCurveTo(60,-50,64,6);c.closePath();c.fill()
      c.save();c.clip();c.strokeStyle='#fff';c.lineWidth=12;for(const x of[-34,0,34])c.beginPath(),c.moveTo(x-20,10),c.lineTo(x+16,-60),c.stroke();c.restore()
      c.beginPath();c.moveTo(-64,6);c.quadraticCurveTo(-60,-50,0,-56);c.quadraticCurveTo(-60,-70,-96,-20);c.moveTo(0,-56);c.quadraticCurveTo(60,-50,64,6);c.stroke()
      c.fillStyle='#fff';c.beginPath();c.roundRect(-70,-4,140,22,11);c.fill();c.stroke();c.beginPath();c.arc(-98,-16,13,0,T);c.fill();c.stroke();c.restore()}
  })
  if(dk)for(const[o,x0]of[[0,0],[.5,14]]){const p=((t-.5)*4+o)%1;c.globalAlpha=min(1,(1-p)*3);c.lineWidth=4;c.strokeStyle='#fff';c.beginPath();const x=214+x0*.6+10*p,y=110-40*p,z=7+3*p;c.moveTo(x-z,y-z);c.lineTo(x+z,y-z);c.lineTo(x-z,y+z);c.lineTo(x+z,y+z);c.stroke();c.globalAlpha=1}
  c.strokeStyle='#111'
  c.fillStyle=dk?TD:TK;c.lineWidth=6;c.beginPath();c.roundRect(20,150,100,52,26);c.fill();c.stroke()
  c.fillStyle=dk?'#dee2e6':SUN;c.beginPath();c.arc(kx,176,20,0,T);c.fill();c.stroke()
  if(dk){c.fillStyle=MN;c.lineWidth=3.5;moon(c,kx-1,177,.55);c.fill();c.stroke()}
  else{c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();c.arc(kx,176,7,0,T);c.fill();c.stroke()}
  const hx=kx+30+6*(1-pr),hy=190+3*(1-pr)
  ds(c,20,11,PJ,()=>{c.moveTo(152,250);c.quadraticCurveTo(150,212,hx+16,hy+6)})
  c.fillStyle=SKIN;c.lineWidth=5;c.save();c.translate(hx,hy);c.rotate(-.35);c.beginPath();c.roundRect(-18,-5,20,10,5);c.fill();c.stroke();c.beginPath();c.ellipse(8,4,12,11,0,0,T);c.fill();c.stroke();c.restore()
  c.restore()
  c.lineWidth=7;box();c.stroke()
}
