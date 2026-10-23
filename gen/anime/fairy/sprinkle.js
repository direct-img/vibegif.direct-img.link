// tiny emerald-haired fairy hovering on buzzing dragonfly wings, waving her star wand so glitter sprinkles down
const{sin,cos,PI,round,abs}=Math,T=2*PI
export const frames=12,delay=80
const SKIN='#ffe3d1',HAIR='#12b886',HD='#087f5b',HL='#c3fae8',EYE='#fab005',ED='#e67700',DR='#faa2c1',DD='#f06595',WG='#e3fafc',WV='#66d9e8',BL='#ffa8a8',FL='#fff3bf',GL=['#ffd43b','#f783ac','#66d9e8','#b197fc']
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=3;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const line=(c,pts,w,col)=>{for(const[lw,s]of[[w+8,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}c.strokeStyle='#111'}
const spark=(c,x,y,r)=>{const q=r*.2;c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x+q,y-q,x+r,y);c.quadraticCurveTo(x+q,y+q,x,y+r);c.quadraticCurveTo(x-q,y+q,x-r,y);c.quadraticCurveTo(x-q,y-q,x,y-r);c.fill();c.stroke()}
const star=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.beginPath();for(let k=0;k<10;k++){const q=k%2?r*.45:r,b=k*PI/5-PI/2;c.lineTo(cos(b)*q,sin(b)*q)}c.closePath();c.restore();c.fill();c.stroke()}
const wing=(c,a,len,w)=>{c.save();c.rotate(a);c.fillStyle=WG;c.lineWidth=4;c.beginPath();c.ellipse(len/2+4,0,len/2,w,0,0,T);c.fill();c.stroke();c.strokeStyle=WV;c.lineWidth=2.5;c.beginPath();c.moveTo(10,0);c.lineTo(len-6,0);for(const k of[.35,.6,.82])c.moveTo(len*k,0),c.lineTo(len*k+8,-w*.6),c.moveTo(len*k,0),c.lineTo(len*k+8,w*.6);c.stroke();c.restore()}
export default(c,t)=>{
  const by=round(5*sin(T*t)),fl=abs(sin(3*T*t)),wa=.3*sin(2*T*t)
  for(let k=0;k<5;k++){const p=(t*2+k/5)%1,x=204+18*p+7*sin(T*(p+k*.3)),y=92+by+70*p*p+50*p,r=12*(1-p)+3
    c.fillStyle=GL[k%4];c.lineWidth=3;spark(c,x,y,r)}
  c.translate(0,by)
  c.save();c.translate(128,142)
  for(const d of[-1,1]){c.save();c.scale(d,1);wing(c,-.55-.18*fl,74,14+5*fl);wing(c,.35+.12*fl,56,11+4*fl);c.restore()}
  c.restore()
  for(const x of[118,138]){line(c,[[x,186],[x+(x<128?-2:2),212]],6,SKIN);c.lineWidth=4;c.fillStyle=DD;c.beginPath();c.moveTo(x-7,210);c.quadraticCurveTo(x+(x<128?-14:14),214,x+(x<128?-16:16),206);c.quadraticCurveTo(x+(x<128?-8:8),220,x-6,218);c.closePath();c.fill();c.stroke()}
  line(c,[[112,140],[98,162],[104,176]],6,SKIN)
  c.fillStyle=DR;c.lineWidth=5;c.beginPath();c.moveTo(114,128);c.lineTo(142,128);c.bezierCurveTo(150,150,158,170,168,186);for(let k=0;k<5;k++)c.quadraticCurveTo(160-k*16,198-(k%2)*4,152-k*16,190);c.bezierCurveTo(98,170,106,150,114,128);c.closePath();c.fill();c.stroke()
  c.strokeStyle=DD;c.lineWidth=3;c.beginPath();for(const x of[120,136])c.moveTo(x,150),c.quadraticCurveTo(x+(x-128)*.6,168,x+(x-128),186);c.stroke();c.strokeStyle='#111'
  c.fillStyle=HAIR;c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*8,132,8,5,d*.5,0,T),c.fill(),c.stroke()
  const sx=146,sy=134,ex=184+6*cos(wa),ey=116-10*sin(wa)
  c.save();c.translate(ex,ey);c.rotate(.5+wa)
  for(const[lw,col]of[[9,'#111'],[4,FL]])c.lineWidth=lw,c.strokeStyle=col,c.beginPath(),c.moveTo(0,4),c.lineTo(0,-34),c.stroke()
  c.strokeStyle='#111';c.fillStyle=GL[0];c.lineWidth=4;star(c,0,-42,13,wa*2);c.restore()
  line(c,[[sx,sy],[164,132],[ex,ey]],6,SKIN)
  c.lineWidth=4;c.fillStyle=SKIN;c.beginPath();c.arc(ex,ey,6,0,T);c.fill();c.stroke()
  c.save();c.translate(128,92);c.scale(.55,.55);c.translate(-128,-128)
  c.lineWidth=9;c.fillStyle=HD;c.beginPath();c.moveTo(128,36);c.bezierCurveTo(198,36,210,100,198,156);c.quadraticCurveTo(184,170,170,156);c.lineTo(86,156);c.quadraticCurveTo(72,170,58,156);c.bezierCurveTo(46,100,58,36,128,36);c.fill();c.stroke()
  c.fillStyle=SKIN;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*50,108),c.quadraticCurveTo(128+d*86,82,128+d*96,70),c.quadraticCurveTo(128+d*84,118,128+d*54,138),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1);eye(c,153,140,1)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,162,13,7,0,0,T),c.fill()
  c.lineWidth=6;c.fillStyle='#c92a2a';c.beginPath();c.moveTo(116,164);c.quadraticCurveTo(128,182,140,164);c.closePath();c.fill();c.stroke()
  c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,140)
  c.bezierCurveTo(52,70,90,38,128,38);c.bezierCurveTo(166,38,204,70,192,140)
  c.quadraticCurveTo(186,112,176,100);c.quadraticCurveTo(168,106,162,114);c.quadraticCurveTo(156,98,146,92);c.quadraticCurveTo(140,104,132,110)
  c.quadraticCurveTo(126,96,116,92);c.quadraticCurveTo(110,106,100,110);c.quadraticCurveTo(96,98,88,98);c.quadraticCurveTo(82,108,80,114)
  c.quadraticCurveTo(70,110,64,140);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.26,1.38],[1.46,1.54],[1.62,1.72]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=DR;for(let k=0;k<5;k++){const a=k*T/5-PI/2;c.beginPath();c.ellipse(78+16*cos(a),66+16*sin(a),11,9,a,0,T);c.fill();c.stroke()}
  c.fillStyle='#ffd43b';c.beginPath();c.arc(78,66,8,0,T);c.fill();c.stroke()
  c.restore()
}
