// magical girl with violet twin tails raising her heart wand while a pink ribbon spirals up around her skirt, sparkles popping
const{sin,cos,PI,max,round}=Math,T=2*PI
export const frames=12,delay=80
const SKIN='#ffe3d1',HAIR='#9775fa',HD='#7048e8',HL='#e5dbff',EYE='#f783ac',ED='#c2255c',DR='#fff',PK='#faa2c1',PD='#f06595',GO='#ffd43b',GD='#f59f00',BL='#ffa8a8'
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=3;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#fff';c.beginPath();for(let k=0;k<10;k++){const r=k%2?3:8,a=k*PI/5-PI/2;c.lineTo(x+cos(a)*r,y+3+sin(a)*r)}c.closePath();c.fill()
  c.beginPath();c.arc(x+6,y+10,2.5,0,T);c.fill()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
const heart=(c,x,y,s)=>{c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-13,-1,-9,-12,0,-5);c.bezierCurveTo(9,-12,13,-1,0,8);c.restore();c.fill();c.stroke()}
const spark=(c,x,y,r)=>{const q=r*.2;c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x+q,y-q,x+r,y);c.quadraticCurveTo(x+q,y+q,x,y+r);c.quadraticCurveTo(x-q,y+q,x-r,y);c.quadraticCurveTo(x-q,y-q,x,y-r);c.fill();c.stroke()}
const ribbon=(c,ph,col,front)=>{
  const P=[];for(let k=0;k<=36;k++){const s=k/36,a=T*1.2*s+ph,r=86-22*s;P.push([128+r*cos(a),230-104*s+12*sin(a),sin(a)>0])}
  for(const[lw,st]of[[13,'#111'],[6,col]]){c.lineWidth=lw;c.strokeStyle=st;c.beginPath();let on=false
    for(let k=1;k<P.length;k++){const f=P[k][2]&&P[k-1][2];if(f==front){if(!on)c.moveTo(P[k-1][0],P[k-1][1]),on=true;c.lineTo(P[k][0],P[k][1])}else on=false}c.stroke()}
  c.strokeStyle='#111'
}
export default(c,t)=>{
  const ph=-T*t,sw=.12*sin(T*t)
  ribbon(c,ph,PD,false)
  c.save();c.translate(128,90);c.scale(.6,.6);c.translate(-128,-128)
  for(const d of[-1,1]){c.save();c.translate(128+d*66,64);c.rotate(d*(.15+sw*d))
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(0,0);c.bezierCurveTo(d*70,10,d*84,110,d*44,170);c.bezierCurveTo(d*20,206,d*60,236,d*74,214);c.bezierCurveTo(d*70,250,d*10,236,d*14,190);c.bezierCurveTo(d*20,130,d*24,60,0,20);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.moveTo(d*18,30);c.bezierCurveTo(d*50,70,d*54,120,d*30,170);c.stroke();c.restore()}
  c.restore()
  for(const x of[118,138]){line(c,[[x,192],[x+(x<128?-2:2),214]],8,SKIN);c.lineWidth=5;c.fillStyle=PD;c.beginPath();c.roundRect(x-9+(x<128?-2:2),208,18,20,6);c.fill();c.stroke()}
  c.fillStyle=PK;c.lineWidth=5;c.beginPath();c.moveTo(110,148);c.lineTo(146,148);c.bezierCurveTo(166,160,176,180,182,196);for(let k=0;k<6;k++)c.quadraticCurveTo(174-k*18,206,164-k*18,198);c.bezierCurveTo(80,180,90,160,110,148);c.closePath();c.fill();c.stroke()
  c.fillStyle=DR;c.beginPath();c.moveTo(112,148);c.lineTo(144,148);c.bezierCurveTo(158,160,164,172,166,184);for(let k=0;k<5;k++)c.quadraticCurveTo(160-k*16,192,154-k*16,186);c.bezierCurveTo(92,172,98,160,112,148);c.closePath();c.fill();c.stroke()
  c.fillStyle=DR;c.beginPath();c.moveTo(112,124);c.lineTo(144,124);c.lineTo(146,150);c.lineTo(110,150);c.closePath();c.fill();c.stroke()
  c.fillStyle=PD;for(const d of[-1,1])c.beginPath(),c.moveTo(128,132),c.quadraticCurveTo(128+d*22,118,128+d*24,136),c.quadraticCurveTo(128+d*20,148,128,134),c.fill(),c.stroke()
  c.fillStyle=GO;heart(c,128,133,.7)
  line(c,[[112,130],[96,146],[94,160]],7,SKIN)
  c.lineWidth=4;c.fillStyle=SKIN;c.beginPath();c.arc(94,162,6,0,T);c.fill();c.stroke()
  const wx=190,wy=40+round(3*sin(2*T*t))
  line(c,[[144,128],[172,112],[wx,wy+30]],7,SKIN)
  for(const[lw,col]of[[11,'#111'],[5,GO]])c.lineWidth=lw,c.strokeStyle=col,c.beginPath(),c.moveTo(wx-2,wy+44),c.lineTo(wx,wy),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4;c.fillStyle=SKIN;c.beginPath();c.arc(wx,wy+30,7,0,T);c.fill();c.stroke()
  c.lineWidth=5;c.fillStyle=PD;heart(c,wx,wy-6,1.7);c.fillStyle='#fff';c.lineWidth=0;c.beginPath();c.ellipse(wx-6,wy-10,3,2,-.5,0,T);c.fill()
  c.fillStyle=GO;c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(wx+d*10,wy-2),c.lineTo(wx+d*24,wy-12),c.lineTo(wx+d*20,wy+2),c.closePath(),c.fill(),c.stroke()
  c.save();c.translate(128,90);c.scale(.6,.6);c.translate(-128,-128)
  c.lineWidth=9;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,163,13,7,0,0,T),c.fill()
  c.lineWidth=6;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(114,164);c.quadraticCurveTo(128,184,142,164);c.closePath();c.fill();c.stroke()
  c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,140)
  c.bezierCurveTo(52,70,90,36,128,36);c.bezierCurveTo(166,36,204,70,190,140)
  c.quadraticCurveTo(186,112,176,100);c.quadraticCurveTo(168,104,162,112);c.quadraticCurveTo(156,96,146,90);c.quadraticCurveTo(140,104,132,110)
  c.quadraticCurveTo(126,94,116,90);c.quadraticCurveTo(110,104,100,110);c.quadraticCurveTo(96,96,88,96);c.quadraticCurveTo(82,108,80,114)
  c.quadraticCurveTo(70,112,66,140);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.26,1.38],[1.46,1.54],[1.62,1.72]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7;c.fillStyle=GO;for(const d of[-1,1])heart(c,128+d*66,62,1.6)
  c.restore()
  ribbon(c,ph,PD,true)
  for(let k=0;k<4;k++){const p=(t+k/4)%1,a=k*1.7,r=round(10*sin(PI*p));if(r>2){c.fillStyle=[GO,PK,'#fff','#99e9f2'][k];c.lineWidth=3;spark(c,128+92*cos(a),120+86*sin(a)*.8,r)}}
}
