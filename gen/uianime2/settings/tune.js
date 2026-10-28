// teal ponytailed girl in a yellow hoodie with her tongue out in concentration sliding the knob of a three slider settings panel, the other knobs bobbing like an equalizer and a little gear spinning on the corner
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#1fb5a5',HD='#0b7a6e',HL='#c3fae8',EYE='#9775fa',ED='#5f3dc4',HO='#ffe066',HOD='#fab005',BL='#ffa8a8',PN='#f8f9fa',GV='#495057',GR='#ced4da',KC=['#ff8fab','#ffd43b','#74c0fc'],TG='#ff8fab',CLIP='#ff8787',Z=.62
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,b)=>{
  if(b){c.lineWidth=8;c.beginPath();c.moveTo(x-14,y+2);c.quadraticCurveTo(x,y+10,x+14,y+2);c.stroke();return}
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x-4,y+4,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x-4,y-6,13,9,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x-4,y+5,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-8,y-2,4.5,0,T);c.fill();c.beginPath();c.arc(x+1,y+10,2,0,T);c.fill();c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
export default(c,t,i)=>{
  const K=[142+36*sin(T*t*2+1),142+40*sin(T*t*2+3.6),142+46*sin(T*t)],X=[38,68,98],bk=i==6,sw=.12*sin(T*t*2)
  c.fillStyle=PN;c.lineWidth=6;c.beginPath();c.roundRect(10,44,116,194,16);c.fill();c.stroke()
  c.strokeStyle='#e9ecef';c.lineWidth=5;c.beginPath();c.moveTo(20,64);c.lineTo(20,222);c.stroke();c.strokeStyle='#111'
  K.forEach((y,k)=>{const x=X[k];ds(c,10,5,GV,()=>{c.moveTo(x,70);c.lineTo(x,214)});ds(c,10,5,KC[k],()=>{c.moveTo(x,y);c.lineTo(x,214)})
    c.fillStyle=KC[k];c.lineWidth=5;c.beginPath();c.roundRect(x-15,y-9,30,18,6);c.fill();c.stroke();c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(x-8,y-3);c.lineTo(x+2,y-3);c.stroke();c.strokeStyle='#111'})
  for(const[x,y,n,r,a]of[[154,42,8,24,T*t/4],[190,22,6,15,-T*t/3+.3]]){c.save();c.translate(x,y);c.rotate(a);c.fillStyle=GR;c.lineWidth=5;c.beginPath()
    for(let k=0;k<n;k++){const b=k*T/n,w=2.1/n;for(const[q,o]of[[r*.7,-w],[r,-w*.65],[r,w*.65],[r*.7,w]])c.lineTo(cos(b+o)*q,sin(b+o)*q)}
    c.closePath();c.fill();c.stroke();c.fillStyle=PN;c.beginPath();c.arc(0,0,r*.3,0,T);c.fill();c.stroke();c.restore()}
  const H=f=>{c.save();c.translate(186,188);c.scale(Z,Z);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=10;c.save();c.translate(166,42);c.rotate(sw)
    c.fillStyle=HAIR;c.beginPath();c.moveTo(-8,-4);c.bezierCurveTo(50,-24,70,40,56,124);c.quadraticCurveTo(50,150,30,158);c.quadraticCurveTo(46,104,30,64);c.quadraticCurveTo(18,30,-10,16);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=6;c.beginPath();c.moveTo(20,8);c.bezierCurveTo(40,30,50,80,46,120);c.stroke();c.strokeStyle=HL;c.lineWidth=8;c.beginPath();c.moveTo(32,4);c.quadraticCurveTo(48,18,56,44);c.stroke();c.strokeStyle='#111';c.lineWidth=10
    c.fillStyle=CLIP;c.beginPath();c.ellipse(0,4,14,19,.7,0,T);c.fill();c.stroke();c.restore()
    c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,210,96,202,150);c.lineTo(54,150);c.bezierCurveTo(46,96,58,34,128,34);c.fill();c.stroke()
    c.fillStyle=HO;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,380);c.lineTo(216,380);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.beginPath();c.moveTo(70,206);c.quadraticCurveTo(128,262,186,206);c.quadraticCurveTo(160,226,128,228);c.quadraticCurveTo(96,226,70,206);c.fillStyle=HOD;c.fill();c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,206,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.moveTo(142,168);c.lineTo(142,192);c.stroke()
    c.lineWidth=6;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*14,230),c.lineTo(128+d*16,276),c.stroke();c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*16,282,7,0,T),c.fill(),c.stroke()
    c.lineWidth=10;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    eye(c,103,140,-1,bk);eye(c,153,140,1,bk)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=7;c.beginPath();c.moveTo(114,168);c.quadraticCurveTo(126,174,140,166);c.stroke()
    c.fillStyle=TG;c.lineWidth=6;c.beginPath();c.moveTo(116,170);c.quadraticCurveTo(112,184,118,186);c.quadraticCurveTo(126,184,126,172);c.fill();c.stroke()
    c.lineWidth=10;c.fillStyle=HAIR;c.beginPath();c.moveTo(68,150)
    c.bezierCurveTo(52,74,88,36,128,36);c.bezierCurveTo(168,36,204,74,188,150)
    c.quadraticCurveTo(186,118,178,102);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(158,98,148,92);c.quadraticCurveTo(142,104,134,110)
    c.quadraticCurveTo(128,98,120,92);c.quadraticCurveTo(114,104,106,110);c.quadraticCurveTo(100,98,92,96);c.quadraticCurveTo(88,106,84,112)
    c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(70,124,68,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HL;c.lineWidth=9;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke();c.strokeStyle='#111'
  })
  const hy=K[2]
  ds(c,20,11,HO,()=>{c.moveTo(150,222);c.quadraticCurveTo(140,max(hy+40,196),124,hy+8)})
  c.fillStyle=SKIN;c.lineWidth=5;c.beginPath();c.ellipse(122,hy+3,11,12,0,0,T);c.fill();c.stroke()
  c.beginPath();c.ellipse(112,hy-6,5,8,-.6,0,T);c.fill();c.stroke()
}
