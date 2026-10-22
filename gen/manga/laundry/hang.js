// manga girl in a bandana and apron pins a bedsheet to the clothesline while gusts of wind billow it, then smiles at the job done
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=16,delay=90,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const ease=u=>(u=max(0,min(1,u)),u*u*(3-2*u)),lerp=(a,b,u)=>a+(b-a)*ease(u)
const ly=x=>62+4*x/256+16*(x/128)*(2-x/128)
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x,y,x+r,y);c.quadraticCurveTo(x,y,x,y+r);c.quadraticCurveTo(x,y,x-r,y);c.quadraticCurveTo(x,y,x,y-r);c.fill();c.stroke()}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,13,16,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,13,16,0,0,T);c.clip();c.beginPath();c.ellipse(x-3,y-2,10.5,14,0,0,T);c.fillStyle='#111';c.fill();c.fillStyle='#777';c.beginPath();c.ellipse(x-3,y+9,10,6,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x-7,y-6,4,5.5,0,0,T);c.fill();c.beginPath();c.arc(x+1,y+6,2,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-5);c.quadraticCurveTo(x,y-20,x+16,y-5);c.moveTo(x+d*14,y-8);c.lineTo(x+d*21,y-13);c.stroke()
}
const pin=(c,x,y)=>{c.lineWidth=3.5;c.fillStyle='#fff';c.beginPath();c.roundRect(x-4,y-9,8,20,2);c.fill();c.stroke();c.beginPath();c.moveTo(x,y-9);c.lineTo(x,y+11);c.stroke()}
export default(c,t)=>{
  const DOT=tone(c,6,1.3),FINE=tone(c,4,.8)
  const w=.5+.5*sin(t*T*2),push=t<.45,done=t>=.55&&t<.9
  // clothesline
  c.lineWidth=4;c.beginPath();c.moveTo(8,ly(8));for(let x=16;x<=248;x+=8)c.lineTo(x,ly(x));c.stroke()
  // the sheet, billowing
  const x1=30,x2=156,bl=[34+22*w,198-14*w],br=[150+20*w,198-10*w],hold=[lerp(160,162,0)+6*w,132]
  const sheet=()=>{c.beginPath();c.moveTo(x1,ly(x1));for(let x=x1;x<=x2;x+=6)c.lineTo(x,ly(x)+2);c.quadraticCurveTo(x2+18*w,96,hold[0],hold[1]);c.quadraticCurveTo(br[0]+8*w,170,br[0],br[1])
    for(let k=1;k<=4;k++){const u=k/4,x=br[0]+(bl[0]-br[0])*u,y=br[1]+(bl[1]-br[1])*u;c.quadraticCurveTo(x+(br[0]-bl[0])/8,y+(k%2?10:-6)*(.4+w),x,y)}
    c.quadraticCurveTo(x1+16*w,130,x1,ly(x1))}
  sheet();c.lineWidth=6;c.fillStyle='#fff';c.fill();c.save();c.clip()
  c.fillStyle=DOT;c.beginPath();c.moveTo(70+12*w,70);c.quadraticCurveTo(90+30*w,140,80+24*w,210);c.lineTo(104+24*w,210);c.quadraticCurveTo(108+30*w,140,92+12*w,70);c.fill()
  c.lineWidth=3;for(const o of[0,46])c.beginPath(),c.moveTo(52+o+8*w,76),c.quadraticCurveTo(64+o+26*w,140,58+o+22*w,196),c.stroke()
  c.restore();sheet();c.lineWidth=6;c.stroke()
  pin(c,x1+6,ly(x1+6));pin(c,93,ly(93))
  // wind streaks
  c.lineWidth=4;for(let k=0;k<3;k++){const p=(t*2+k/3)%1,x=10+p*120,y=[30,112,200][k];c.globalAlpha=sin(PI*p);c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+18,y-8,x+34,y);c.quadraticCurveTo(x+44,y+6,x+40,y+12);c.stroke()}c.globalAlpha=1
  // laundry basket
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(70,212);c.quadraticCurveTo(80,206,86,198);c.lineTo(102,204);c.lineTo(118,196);c.lineTo(132,206);c.quadraticCurveTo(144,204,150,212);c.fill();c.stroke()
  c.beginPath();c.moveTo(62,210);c.lineTo(158,210);c.lineTo(150,246);c.lineTo(70,246);c.closePath();c.fill();c.save();c.clip();c.lineWidth=2.5;for(let k=-8;k<14;k++)c.beginPath(),c.moveTo(56+k*10,210),c.lineTo(76+k*10,246),c.moveTo(76+k*10,210),c.lineTo(56+k*10,246),c.stroke();c.restore();c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(60,212);c.lineTo(160,212);c.stroke()
  // girl: skirt, apron, legs
  const G=[204,96]
  for(const x of[194,214]){c.lineWidth=12;c.beginPath();c.moveTo(x,212);c.lineTo(x,234);c.stroke();c.lineWidth=5;c.strokeStyle='#fff';c.stroke();c.strokeStyle='#111';c.lineWidth=4.5;c.fillStyle='#fff';c.beginPath();c.ellipse(x+(x<204?-4:4),240,11,6,0,0,T);c.fill();c.fillStyle='#111';c.fill()}
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.moveTo(184,184);c.lineTo(226,184);c.lineTo(240,216);c.lineTo(170,216);c.closePath();c.fill();c.fillStyle=FINE;c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(186,138);c.quadraticCurveTo(176,150,176,190);c.lineTo(234,190);c.quadraticCurveTo(234,150,224,138);c.closePath();c.fill();c.fillStyle=FINE;c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(190,150);c.lineTo(220,150);c.lineTo(228,210);c.quadraticCurveTo(205,216,182,210);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(188,166);c.lineTo(222,166);c.stroke();c.beginPath();c.rect(196,176,18,14);c.stroke()
  // arms: one pinning the corner, one holding the edge down
  const[px,py]=push?[160+2*sin(t*T*10),ly(160)+4]:t<.55?[lerp(160,224,(t-.45)/.1),lerp(ly(160)+4,140,(t-.45)/.1)]:done?[224,140]:[lerp(224,160,(t-.9)/.1),lerp(140,ly(160)+4,(t-.9)/.1)]
  for(const[[sx,sy],[hx,hy]]of[[[188,146],[px,py+8]],[[190,150],hold]]){for(const[l,st]of[[15,'#111'],[8,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(sx,sy),c.lineTo(hx,hy),c.stroke();c.strokeStyle='#111'}
  pin(c,push?px:160,ly(160)+4);for(const[hx,hy]of[[px,py+8],hold]){c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.arc(hx,hy,7,0,T);c.fill();c.stroke()}
  if(t>=.45&&t<.6){c.fillStyle='#fff';c.lineWidth=3;spark(c,148,ly(148)-14,8);spark(c,172,ly(172)-10,5)}
  // head with bandana, hair and tails blowing right
  c.save();c.translate(...G);c.scale(.52,.52);c.translate(-128,-128)
  const f=10*sin(t*T*4)
  c.lineWidth=11;c.fillStyle='#fff';for(const k of[0,1]){c.beginPath();c.moveTo(184,74);c.quadraticCurveTo(208,70+k*30+f,218+k*4,84+k*34+f);c.lineTo(200,96+k*28+f);c.closePath();c.fill();c.stroke()}
  c.fillStyle='#fff';c.beginPath();c.moveTo(128,40);c.bezierCurveTo(196,40,210,100,204,166);c.lineTo(52,166);c.bezierCurveTo(46,100,60,40,128,40);c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  c.lineWidth=11;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(done){c.lineWidth=10;for(const x of[103,153])c.beginPath(),c.arc(x,144,13,PI*1.15,PI*1.85),c.stroke()}
  else if(push){c.lineWidth=10;for(const d of[-1,1]){const x=128+d*25;c.beginPath();c.moveTo(x-d*13,128);c.lineTo(x+d*11,140);c.lineTo(x-d*13,152);c.stroke()}}
  else{eye(c,103,140,-1);eye(c,153,140,1)}
  c.lineWidth=5;for(const d of[-1,1])for(const k of[-7,0,7])c.beginPath(),c.moveTo(128+d*40+k-3,168),c.lineTo(128+d*40+k+3,158),c.stroke()
  c.lineWidth=8;c.beginPath();if(push)c.moveTo(116,170),c.lineTo(140,170);else c.arc(128,164,10,.15*PI,.85*PI);c.stroke()
  c.lineWidth=11;c.fillStyle='#fff';c.beginPath();c.moveTo(72,140);c.bezierCurveTo(60,100,80,80,128,80);c.bezierCurveTo(176,80,196,100,184,140);c.quadraticCurveTo(178,112,168,104);c.lineTo(156,114);c.lineTo(146,100);c.lineTo(130,112);c.lineTo(118,98);c.lineTo(104,112);c.lineTo(94,102);c.lineTo(84,114);c.quadraticCurveTo(76,124,72,140);c.fill();c.fillStyle=DOT;c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(66,94);c.bezierCurveTo(66,30,190,30,190,94);c.quadraticCurveTo(128,74,66,94);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle='#111';for(const[x,y]of[[96,56],[128,46],[160,56],[112,74],[146,72],[80,78],[176,80]])c.beginPath(),c.arc(x,y,6,0,T),c.fill();c.restore()
  c.restore()
  if(push){c.fillStyle='#fff';c.lineWidth=3.5;c.beginPath();c.moveTo(178,72);c.quadraticCurveTo(186,86,178,90);c.quadraticCurveTo(170,86,178,72);c.fill();c.stroke()}
  if(done){c.fillStyle='#fff';c.lineWidth=3;for(let k=0;k<2;k++){const p=((t-.55)/.35*2+k/2)%1;spark(c,[176,236][k],[54,70][k]-p*8,3+6*sin(PI*p))}}
}
