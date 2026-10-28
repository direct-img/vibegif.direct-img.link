// curly peach haired girl warmly holding out an envelope with a heart wax seal, the invitation card slides up out of it as she smiles and little hearts float, then tucks back in
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=16,delay=95
const SKIN='#ffe3d1',HAIR='#ffb38a',HD='#e8835a',HL='#ffe8d6',EYE='#20c997',ED='#087f5b',DR='#d0bfff',BL='#ff8fab',EN='#ffdeeb',END='#fcc2d7',CD='#fff',SL='#e03131',SLD='#a51111',HT=['#ff6b6b','#f783ac','#ffa8a8'],FL='#ffd43b'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+2,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-2,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+7,y+8,2,0,T);c.fill()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const heart=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y+r*.9);c.bezierCurveTo(x-r*1.3,y,x-r*.7,y-r*1.1,x,y-r*.35);c.bezierCurveTo(x+r*.7,y-r*1.1,x+r*1.3,y,x,y+r*.9);c.closePath()}
const cloud=(c,pts,f,w)=>{c.lineWidth=w;c.beginPath();for(const[x,y,r]of pts)c.moveTo(x+r,y),c.arc(x,y,r,0,T);c.stroke();c.fillStyle=f;c.fill()}
export default(c,t,i)=>{
  const s=ease((t-.04)/.3)-ease((t-.66)/.28),hap=s>.55,bk=i==12,by=sin(T*t)*2
  const H=f=>{c.save();c.translate(96,166);c.rotate(.06*s);c.scale(.62,.62);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    cloud(c,[[60,90,30],[54,140,30],[54,190,28],[64,236,26],[196,90,30],[202,140,30],[202,190,28],[192,236,26],[90,52,30],[128,40,30],[166,52,30]],HD,18)
    c.fillStyle=DR;c.lineWidth=9;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,400);c.lineTo(216,400);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.quadraticCurveTo(128+d*24,188,128+d*40,194),c.quadraticCurveTo(128+d*42,222,128,218),c.closePath(),c.fill(),c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,196);c.quadraticCurveTo(128,208,142,196);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.moveTo(142,168);c.lineTo(142,194);c.stroke()
    c.fillStyle=SL;c.lineWidth=6;heart(c,128,214,11);c.fill();c.stroke()
    c.lineWidth=9;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(hap){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,148,14,PI*1.15,PI*1.85),c.stroke()}
    else if(bk){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.moveTo(x-15,142),c.quadraticCurveTo(x,150,x+15,142),c.stroke()}
    else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,15,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle='#c92a2a';if(hap){c.beginPath();c.moveTo(114,166);c.quadraticCurveTo(128,170,142,166);c.quadraticCurveTo(140,182,128,182);c.quadraticCurveTo(116,182,114,166);c.fill();c.stroke()}
    else{c.beginPath();c.moveTo(116,166);c.quadraticCurveTo(128,178,140,166);c.stroke()}
    cloud(c,[[62,128,16],[56,162,15],[194,128,16],[200,162,15]],HAIR,16)
    c.lineWidth=9;c.fillStyle=HAIR;c.beginPath();c.moveTo(64,124)
    c.bezierCurveTo(48,64,90,34,128,34);c.bezierCurveTo(166,34,208,64,192,124)
    c.quadraticCurveTo(190,104,180,96);c.quadraticCurveTo(178,114,160,112);c.quadraticCurveTo(160,96,148,90);c.quadraticCurveTo(146,112,126,110)
    c.quadraticCurveTo(126,92,112,90);c.quadraticCurveTo(110,112,92,112);c.quadraticCurveTo(92,96,80,96);c.quadraticCurveTo(70,104,64,124);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=7;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
    c.lineWidth=5;for(const[x,y]of[[62,128],[194,128],[56,162],[200,162]])c.beginPath(),c.arc(x,y,7,PI*.9,PI*1.6),c.stroke()
    c.strokeStyle='#111';c.fillStyle=FL;c.lineWidth=6;for(let k=0;k<5;k++){const a=k*T/5-PI/2;c.beginPath();c.arc(172+12*cos(a),64+12*sin(a),9,0,T);c.fill();c.stroke()}
    c.fillStyle='#ff922b';c.beginPath();c.arc(172,64,7,0,T);c.fill();c.stroke()
  })
  c.save();c.translate(186,176+by);c.rotate(-.08)
  c.fillStyle=END;c.lineWidth=6;c.beginPath();c.moveTo(-54,-30);c.lineTo(0,-30-40*min(1,s*2+.3));c.lineTo(54,-30);c.closePath();c.fill();c.stroke()
  c.fillStyle=EN;c.beginPath();c.roundRect(-54,-32,108,70,6);c.fill();c.stroke()
  const cy=-46*s
  c.fillStyle=CD;c.lineWidth=5;c.beginPath();c.roundRect(-44,-26+cy,88,58,4);c.fill();c.stroke()
  c.fillStyle='#f783ac';c.lineWidth=4;heart(c,0,-8+cy,10);c.fill();c.stroke()
  c.strokeStyle='#ced4da';c.lineWidth=4;c.beginPath();c.moveTo(-26,10+cy);c.lineTo(26,10+cy);c.moveTo(-18,20+cy);c.lineTo(18,20+cy);c.stroke();c.strokeStyle='#111'
  c.fillStyle=EN;c.lineWidth=6;c.beginPath();c.moveTo(-54,-30);c.lineTo(0,6);c.lineTo(54,-30);c.lineTo(54,32);c.quadraticCurveTo(54,38,48,38);c.lineTo(-48,38);c.quadraticCurveTo(-54,38,-54,32);c.closePath();c.fill();c.stroke()
  c.strokeStyle=END;c.lineWidth=4;c.beginPath();c.moveTo(-48,32);c.lineTo(-14,14);c.moveTo(48,32);c.lineTo(14,14);c.stroke();c.strokeStyle='#111'
  c.fillStyle=SL;c.lineWidth=5;c.beginPath();for(let k=0;k<=24;k++){const a=k*T/24,r=15+(k%2?1.5:-1);c.lineTo(r*cos(a),8+r*sin(a))}c.closePath();c.fill();c.stroke()
  c.fillStyle=SLD;heart(c,0,8,7.5);c.fill()
  c.fillStyle='rgba(255,255,255,.6)';c.beginPath();c.arc(-6,2,3,0,T);c.fill()
  c.restore()
  ds(c,20,12,DR,()=>{c.moveTo(70,214);c.quadraticCurveTo(96,240,136,212+by)})
  ds(c,20,12,DR,()=>{c.moveTo(126,214);c.quadraticCurveTo(170,244,228,204+by)})
  c.fillStyle=SKIN;c.lineWidth=5;for(const[x,y]of[[140,206],[232,196]])c.beginPath(),c.ellipse(x,y+by,11,12,0,0,T),c.fill(),c.stroke()
  for(let k=0;k<3;k++){const p=(t*1.5+k/3)%1,a=s>.3?1:0;if(!a||p>.95)continue;c.save();c.globalAlpha=min(1,(1-p)*3,s*2);c.fillStyle=HT[k];c.lineWidth=4;heart(c,170+k*22+8*sin(T*p+k),118-80*p-24*s,7+4*sin(PI*p));c.fill();c.stroke();c.restore()}
}
