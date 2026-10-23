// lilac-haired girl with two braids blowing soap bubbles through a wand, rainbow-sheen bubbles growing, drifting up and popping
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=16,delay=80
const SKIN='#ffe3d1',HAIR='#d0bfff',HD='#9775fa',HL='#f3f0ff',EYE='#4c6ef5',ED='#364fc7',DR='#ffc9c9',DD='#ff8787',COL='#fff',BOW='#69db7c',WAND='#ffd43b',BUB='#f8f9fa',BL='#ffa8a8',MO='#c92a2a'
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+4,y+1,5.5,7.5,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x,y-6,4.5,0,T);c.fill();c.beginPath();c.arc(x+8,y+6,2,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
// soap bubble with a rainbow sheen and a shine
const bubble=(c,x,y,r)=>{
  c.fillStyle=BUB;c.lineWidth=3.5;c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke()
  c.lineWidth=max(2,r*.16);for(const[a,col]of[[0,'#faa2c1'],[1,'#a5d8ff'],[2,'#b2f2bb']]){c.strokeStyle=col;c.beginPath();c.arc(x,y,r*(.72-a*.13),PI*.15,PI*.6);c.stroke()}
  c.strokeStyle='#111';c.fillStyle='#fff';c.beginPath();c.ellipse(x-r*.4,y-r*.4,r*.2,r*.13,-.7,0,T);c.fill()
}
const pop=(c,x,y,r)=>{for(const[l,s]of[[6,'#111'],[2.5,'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();for(let k=0;k<8;k++){const a=k*T/8;c.moveTo(x+cos(a)*r*.55,y+sin(a)*r*.55);c.lineTo(x+cos(a)*r,y+sin(a)*r)}c.stroke()}c.strokeStyle='#111'}
export default(c,t)=>{
  const blow=sin(PI*((t*2)%1)),puff=blow>.3
  c.lineWidth=6
  c.save();c.translate(100,256);c.scale(.94,.94);c.translate(-128,-256)
  // braids hang down either side, a tapered plait with chevrons
  for(const d of[-1,1]){
    const x=128+d*64
    c.fillStyle=HAIR;c.beginPath();c.moveTo(x-14,138);c.quadraticCurveTo(x-16,190,x-8,228);c.lineTo(x+8,228);c.quadraticCurveTo(x+16,190,x+14,138);c.closePath();c.fill();c.stroke()
    c.lineWidth=4;c.beginPath();for(let y=150;y<224;y+=14)c.moveTo(x-12+(y-150)/14,y),c.quadraticCurveTo(x,y+9,x+12-(y-150)/14,y);c.stroke();c.lineWidth=6
    c.fillStyle=BOW;c.beginPath();c.moveTo(x,232);c.lineTo(x-12,222);c.lineTo(x-12,242);c.closePath();c.moveTo(x,232);c.lineTo(x+12,222);c.lineTo(x+12,242);c.closePath();c.fill();c.stroke()
    c.beginPath();c.arc(x,232,4,0,T);c.fill();c.stroke()
    c.fillStyle=HAIR;c.beginPath();c.moveTo(x-8,236);c.lineTo(x+8,236);c.lineTo(x,254);c.closePath();c.fill();c.stroke()
  }
  c.fillStyle=DR;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,256);c.lineTo(202,256);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=COL;for(const d of[-1,1])c.beginPath(),c.moveTo(128,200),c.quadraticCurveTo(128+d*30,186,128+d*36,204),c.quadraticCurveTo(128+d*20,214,128,204),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=DD;for(const[x,y]of[[86,236],[170,232],[128,246]])c.beginPath(),c.arc(x,y,5,0,T),c.fill()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.quadraticCurveTo(128,204,140,194);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,160,13+3*blow*(d>0),6,0,0,T),c.fill()
  // pursed lips blowing, cheeks puffing
  c.lineWidth=3.5;c.fillStyle=MO;c.beginPath();c.ellipse(140,170,4+2*blow,4+2*blow,0,0,T);c.fill();c.stroke()
  if(puff){c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.arc(166,164,8+5*blow,-PI*.5,PI*.5);c.fill();c.stroke()}
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
  c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
  c.quadraticCurveTo(184,124,180,108);c.quadraticCurveTo(160,90,150,112);c.quadraticCurveTo(146,92,126,90);c.quadraticCurveTo(120,104,112,110)
  c.quadraticCurveTo(108,94,94,96);c.quadraticCurveTo(86,108,78,112);c.quadraticCurveTo(70,128,68,150);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,102,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111'
  // wand held up to her lips
  for(const[l,s]of[[24,'#111'],[15,SKIN]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(196,262),c.lineTo(186,214),c.stroke()
  c.strokeStyle='#111'
  for(const[l,s]of[[11,'#111'],[5,WAND]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(186,214),c.lineTo(166,180),c.stroke()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(188,214,12,13,0,0,T);c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(178,210);c.lineTo(192,210);c.moveTo(178,218);c.lineTo(192,218);c.stroke()
  for(const[l,s]of[[11,'#111'],[5,WAND]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.arc(160,170,11,0,T),c.stroke()
  c.strokeStyle='#111'
  c.restore()
  // ring position in screen space after the girl's transform
  const rx=100+(160-128)*.94,ry=256+(170-256)*.94
  // a bubble swelling on the wand, then the stream of released bubbles drifting up and popping
  const g=(t*2)%1
  if(g<.5)bubble(c,rx+ease(g/.5)*8,ry-ease(g/.5)*4,3+11*ease(g/.5))
  for(const[o,dx,r]of[[0,4,15],[.25,-14,11],[.5,0,19],[.75,-22,10]]){
    const p=(t+o)%1,x=rx+16+80*min(1,p*1.6)+dx*p+6*sin(T*p*2+o*7),y=ry-4-118*p
    if(p<.86)bubble(c,x,y,r*min(1,.4+p*3))
    else pop(c,x,y,r*1.4)
  }
}
