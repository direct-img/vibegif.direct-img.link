// potter girl with a mahogany ponytail and a clay smudge on her cheek coning clay up into a tall pot and pressing it back down on a spinning wheel
// the dark back hair gets a white rim so it doesn't vanish on black
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#8a3330',HD='#5c1f1f',HL='#d19494',EYE='#0ca678',ED='#087f5b',BL='#ffa8a8',APR='#4dabf7',APD='#1c7ed6',CLAY='#c08552',CLD='#8d5a33',CLL='#dba67a',WH='#ced4da',WHD='#868e96',BASE='#495057'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip()
  c.beginPath();c.ellipse(x,y+7,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-3,13,10,0,0,T);c.fill();c.restore()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+8,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y+2,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+12,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t)=>{
  const h=(1-cos(T*t))/2,H=24+34*h,top=206-H,bw=34-6*h,mw=30-12*h,tw=18-4*h,sp=t*6%1
  c.lineWidth=7;c.fillStyle='#fff';c.beginPath();c.moveTo(100,148);c.quadraticCurveTo(60,158,52,240);c.lineTo(204,240);c.quadraticCurveTo(196,158,156,148);c.closePath();c.fill();c.stroke()
  c.fillStyle=APR;c.lineWidth=6;c.beginPath();c.moveTo(104,170);c.lineTo(152,170);c.lineTo(160,240);c.lineTo(96,240);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(106,170);c.lineTo(112,152);c.moveTo(150,170);c.lineTo(144,152);c.stroke()
  c.fillStyle=CLD;for(const[x,y]of[[112,190],[140,184],[148,202]])c.beginPath(),c.ellipse(x,y,4,3,.5,0,T),c.fill()
  c.fillStyle=SKIN;c.lineWidth=6;c.beginPath();c.moveTo(118,134);c.lineTo(118,152);c.quadraticCurveTo(128,160,138,152);c.lineTo(138,134);c.fill();c.beginPath();c.moveTo(118,134);c.lineTo(118,150);c.moveTo(138,134);c.lineTo(138,150);c.stroke()
  c.save();c.translate(128,94);c.scale(.68,.68);c.translate(-128,-120)
  const tail=()=>{c.moveTo(150,40);c.bezierCurveTo(206,10,236,60,222,120);c.quadraticCurveTo(218,150,200,170);c.quadraticCurveTo(206,130,196,96);c.quadraticCurveTo(186,70,164,62)}
  const back=()=>{c.moveTo(128,36);c.bezierCurveTo(196,36,208,100,198,150);c.lineTo(58,150);c.bezierCurveTo(48,100,60,36,128,36)}
  c.strokeStyle='#fff';c.lineWidth=20;for(const f of[tail,back])c.beginPath(),f(),c.stroke();c.strokeStyle='#111'
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();tail();c.fill();c.stroke()
  c.fillStyle=HD;c.beginPath();back();c.fill();c.stroke()
  c.fillStyle=APR;c.lineWidth=5;c.beginPath();c.ellipse(158,50,12,9,.5,0,T);c.fill();c.stroke()
  c.lineWidth=7;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.fillStyle=BL;c.beginPath();c.ellipse(172,164,13,7,0,0,T);c.fill()
  c.fillStyle=CLAY;c.lineWidth=3;c.beginPath();c.moveTo(70,158);c.quadraticCurveTo(84,150,96,156);c.quadraticCurveTo(92,164,80,166);c.quadraticCurveTo(72,166,70,158);c.fill();c.stroke()
  c.lineWidth=5;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(118,166);c.quadraticCurveTo(128,176,138,166);c.closePath();c.fill();c.stroke()
  c.fillStyle='#ff8fab';c.lineWidth=3;c.beginPath();c.ellipse(132,171,4,3,0,0,T);c.fill();c.stroke()
  const fr=()=>{c.moveTo(68,150);c.bezierCurveTo(52,78,90,40,128,40);c.bezierCurveTo(166,40,204,78,188,150)
    c.quadraticCurveTo(186,120,178,104);c.quadraticCurveTo(168,98,156,104);c.quadraticCurveTo(150,92,138,88);c.quadraticCurveTo(134,102,124,108)
    c.quadraticCurveTo(120,96,110,94);c.quadraticCurveTo(102,106,90,110);c.quadraticCurveTo(80,104,76,108);c.quadraticCurveTo(70,126,68,150);c.closePath()}
  c.strokeStyle='#fff';c.lineWidth=20;c.beginPath();fr();c.stroke();c.strokeStyle='#111'
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();fr();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[s,e]of[[1.26,1.38],[1.46,1.54],[1.62,1.72]])c.beginPath(),c.arc(128,106,58,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
  c.restore()
  c.lineWidth=7;c.fillStyle=BASE;c.strokeStyle='#fff';c.lineWidth=14;c.beginPath();c.moveTo(90,222);c.lineTo(166,222);c.lineTo(178,250);c.lineTo(78,250);c.closePath();c.stroke();c.strokeStyle='#111';c.lineWidth=7;c.fill();c.stroke()
  c.fillStyle=WHD;c.lineWidth=6;c.beginPath();c.ellipse(128,217,62,12,0,0,PI);c.lineTo(66,212);c.ellipse(128,212,62,12,0,PI,0,true);c.closePath();c.fill();c.stroke()
  c.fillStyle=WH;c.beginPath();c.ellipse(128,212,62,12,0,0,T);c.fill();c.stroke()
  c.fillStyle=WHD;for(let k=0;k<6;k++){const a=k*T/6+t*T*2;if(sin(a)>0)c.beginPath(),c.ellipse(128+50*cos(a),212+9*sin(a),4,2,0,0,T),c.fill()}
  const pot=()=>{c.moveTo(128-bw,207);c.bezierCurveTo(128-bw-8,207-H*.4,128-mw,207-H*.7,128-tw,top);c.lineTo(128+tw,top);c.bezierCurveTo(128+mw,207-H*.7,128+bw+8,207-H*.4,128+bw,207);c.quadraticCurveTo(128,214,128-bw,207)}
  c.fillStyle=CLAY;c.lineWidth=6;c.beginPath();pot();c.fill();c.stroke()
  c.save();c.beginPath();pot();c.clip();c.strokeStyle=CLD;c.lineWidth=2.5
  for(let k=0;k<4;k++){const y=207-H*(k+.5)/4;c.beginPath();c.moveTo(80,y);c.lineTo(176,y);c.stroke()}
  c.strokeStyle=CLL;c.lineWidth=4;for(const o of[0,.5]){const x=128-bw+2*bw*((sp+o)%1);c.beginPath();c.moveTo(x,214);c.lineTo(x+(128-x)*.4,top);c.stroke()}
  c.restore()
  c.fillStyle=CLD;c.lineWidth=4;c.beginPath();c.ellipse(128,top,tw,4,0,0,T);c.fill();c.stroke()
  const hy=207-H*.55,hw=bw*.5+mw*.5+4
  ds(c,20,11,'#fff',()=>{c.moveTo(100,164);c.lineTo(78,186)});ds(c,18,9,SKIN,()=>{c.moveTo(78,186);c.lineTo(128-hw-6,hy)})
  ds(c,20,11,'#fff',()=>{c.moveTo(156,164);c.lineTo(178,186)});ds(c,18,9,SKIN,()=>{c.moveTo(178,186);c.lineTo(128+hw+6,hy)})
  c.fillStyle=SKIN;c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*hw,hy,10,13,d*.2,0,T),c.fill(),c.stroke()
}
