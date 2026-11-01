// nervous olive-skinned anime girl with a brown pixie cut and an oversized sweater hiding behind a giant SENIOR DEV badge, peeking over the top with darting eyes, then ducking down
export const frames=28,delay=80,rim=3
const P=Math.PI,{sin,cos,min,max,abs,round}=Math,L='#2b1d26'
const E=t=>t<0?0:t>1?1:t*t*(3-2*t),sg=(t,a,b)=>E((t-a)/(b-a))
const F=(c,f,col,w=3.5)=>{c.beginPath();f();c.fillStyle=col;c.fill();if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const T=(c,p,w,col)=>{c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))q.length>2?c.quadraticCurveTo(...q):c.lineTo(...q)
  c.lineWidth=w+7;c.strokeStyle=L;c.stroke();c.lineWidth=w;c.strokeStyle=col;c.stroke()}
const O=(c,x,y,a,b,col,w=3.5,r=0)=>F(c,()=>c.ellipse(x,y,a,b,r,0,2*P),col,w)
const drop=(c,x,y,r,col='#9fd8ff')=>F(c,()=>{c.moveTo(x,y-r*1.6);c.quadraticCurveTo(x+r*1.3,y+r*.6,x,y+r);c.quadraticCurveTo(x-r*1.3,y+r*.6,x,y-r*1.6)},col,2)
const bangs=(c,p,col)=>F(c,()=>{c.moveTo(...p[0]);c.bezierCurveTo(52,-44,26,-60,0,-60);c.bezierCurveTo(-26,-60,-52,-44,p.at(-1)[0],p.at(-1)[1])
  for(let k=p.length-1;k>0;k--){const[a,b]=p[k],[x,y]=p[k-1];y>b?c.quadraticCurveTo(a,b+(y-b)*.8,x,y):c.quadraticCurveTo(x,y+(b-y)*.45,x,y)}},col)
const SK='#d2a77c',HR='#5b3521',HD='#3a1f12',HL='#93624a',I=['#173f24','#5fbf72','#0b2414'],PU='#8197b2',PD='#61758f'
const eye=(c,x,y,s,lx,sm)=>{
  c.save();c.translate(x,y);c.strokeStyle=L
  c.save();c.beginPath();c.ellipse(0,0,9.5,12.5,0,0,2*P);c.fillStyle='#fff';c.fill();c.clip()
  const g=c.createLinearGradient(0,-12,0,12);g.addColorStop(.1,I[0]);g.addColorStop(.85,I[1])
  c.beginPath();c.ellipse(lx,1.5,8*sm,11*sm,0,0,2*P);c.fillStyle=g;c.fill()
  c.beginPath();c.ellipse(lx,1.5,3.6*sm,5.2*sm,0,0,2*P);c.fillStyle=I[2];c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(lx-3,-3.5,3.2,0,2*P);c.fill();c.beginPath();c.arc(lx+3,5,1.5,0,2*P);c.fill()
  c.restore()
  c.beginPath();c.moveTo(-10*s,-7.5);c.quadraticCurveTo(-1*s,-15.5,11*s,-10);c.lineTo(13*s,-12.5);c.lineWidth=3.6;c.stroke()
  c.beginPath();c.moveTo(-3*s,13);c.quadraticCurveTo(4*s,13.5,7.5*s,10);c.lineWidth=1.6;c.stroke()
  c.restore()
}
export default(c,t)=>{
  c.lineJoin=c.lineCap='round'
  // head height: peeking over the badge, duck down to hide, slowly rise again
  const duck=sg(t,.42,.48)*(1-sg(t,.7,.92)),hy=round(92+duck*70),jt=duck>.5?round(sin(t*60*P)):0
  const dart=t<.42?(sin(t/.42*3*P)>0?4:-4):t>.9?-4:0,wide=t>.36&&t<.5
  // legs: knock-kneed, toes turned in
  for(const s of[-1,1]){T(c,[[128+s*14,210],[128+s*8,226,128+s*14,232]],13,'#3b3448');O(c,128+s*11,237,12,6,'#f2ede4',3.5,-s*.3)}
  F(c,()=>{c.moveTo(94,214);c.lineTo(162,214);c.lineTo(164,233);c.quadraticCurveTo(128,236,92,233);c.closePath()},PU)
  c.strokeStyle=PD;c.lineWidth=2;for(let x=100;x<160;x+=7){c.beginPath();c.moveTo(x,229);c.lineTo(x,233);c.stroke()}
  // head
  c.save();c.translate(128,hy);c.scale(1.12,1.12)
  F(c,()=>{c.moveTo(-42,-16);c.bezierCurveTo(-48,0,-46,12,-42,20);c.lineTo(-36,16);c.lineTo(-34,26);c.lineTo(34,26);c.lineTo(36,16);c.lineTo(42,20);c.bezierCurveTo(46,12,48,0,42,-16);c.closePath()},HD)
  O(c,0,44,24,9,PU)
  F(c,()=>{c.moveTo(-37,-8);c.bezierCurveTo(-38,22,-18,41,0,43);c.bezierCurveTo(18,41,38,22,37,-8);c.bezierCurveTo(37,-42,-37,-42,-37,-8)},SK)
  for(const s of[-1,1])eye(c,s*17,12,s,dart,wide?.62:.82)
  c.fillStyle='#9a6e4c';c.beginPath();c.arc(1,25,1.3,0,2*P);c.fill()
  c.fillStyle='rgba(225,105,105,.4)';for(const s of[-1,1]){c.beginPath();c.ellipse(s*25,27,7,3.5,0,0,2*P);c.fill()}
  c.beginPath();c.moveTo(-7,35);for(let k=1;k<=4;k++)c.lineTo(-7+k*3.5,35+(k%2?-2:0));c.lineWidth=2.5;c.strokeStyle=L;c.stroke()
  // hair: short pixie with a side-swept fringe and a nervous tuft
  for(const s of[-1,1])F(c,()=>{c.moveTo(s*36,-14);c.quadraticCurveTo(s*44,2,s*40,16);c.lineTo(s*35,10);c.lineTo(s*33,18);c.quadraticCurveTo(s*34,4,s*29,-6)},HR,3)
  bangs(c,[[44,-6],[39,-20],[33,-10],[26,-24],[16,-12],[8,-26],[-4,-8],[-8,-24],[-20,-2],[-24,-20],[-36,6],[-38,-10],[-44,2]],HR)
  c.strokeStyle=HL;c.lineWidth=4;for(const a of[-2.4,-2.1,-1.25])c.beginPath(),c.arc(0,-8,44,a,a+.2),c.stroke()
  // worried brows over the bangs
  c.strokeStyle='#24110a';c.lineWidth=2.6;for(const s of[-1,1]){c.beginPath();c.moveTo(s*8,-16);c.quadraticCurveTo(s*15,-16,s*25,-7);c.stroke()}
  const ah=sin(t*16*P)*.25
  c.save();c.translate(-4,-58);c.rotate(ah);c.beginPath();c.moveTo(0,0);c.bezierCurveTo(-4,-10,-16,-12,-18,-4);c.lineWidth=7;c.strokeStyle=L;c.stroke();c.lineWidth=3.5;c.strokeStyle=HR;c.stroke();c.restore()
  c.restore()
  // sweat drops flicking off while peeking, and when ducking
  for(const[a,b,x,y,s]of[[.05,.2,176,62,1],[.22,.36,80,66,-1],[.5,.66,182,124,1]]){if(t>a&&t<b){const p=(t-a)/(b-a);c.globalAlpha=1-sg(p,.6,1);drop(c,x+s*p*16,y-sin(p*P)*12+p*10,4.5);c.globalAlpha=1}}
  // tremble marks while hiding
  if(duck>.8){c.strokeStyle=L;c.lineWidth=2.5;for(const s of[-1,1])for(let j=0;j<3;j++){const x=128+s*(60+j*7),y=128-j*4+jt;c.beginPath();c.moveTo(x,y-6+j*2);c.quadraticCurveTo(x+s*3,y,x,y+6-j*2);c.stroke()}}
  // the badge, trembling a little
  const bx=128+jt,by=188
  F(c,()=>c.roundRect(bx-86,by-50,172,92,14),'#fffdf5',4)
  F(c,()=>{c.moveTo(bx-86,by-26);c.lineTo(bx-86,by-36);c.quadraticCurveTo(bx-86,by-50,bx-72,by-50);c.lineTo(bx+72,by-50);c.quadraticCurveTo(bx+86,by-50,bx+86,by-36);c.lineTo(bx+86,by-26);c.closePath()},'#3a6fd8',0)
  c.lineWidth=4;c.strokeStyle=L;c.beginPath();c.roundRect(bx-86,by-50,172,92,14);c.stroke()
    F(c,()=>{for(let j=0;j<10;j++){const a=-P/2+j*P/5,r=j%2?4:9;c.lineTo(bx-66+cos(a)*r,by-38+sin(a)*r)}c.closePath()},'#f7c531',2)
  c.textAlign='center';c.textBaseline='middle';c.fillStyle=L
  c.font='bold 31px DejaVu Sans';c.fillText('SENIOR',bx,by-2)
  c.font='bold 31px DejaVu Sans';c.fillStyle='#3a6fd8';c.fillText('DEV',bx,by+26)
  c.fillStyle='#fff';c.font='bold 13px DejaVu Sans';c.fillText('HELLO',bx+6,by-38)
  // hands gripping the badge edges
  for(const s of[-1,1]){const x=bx+s*86,y=by-6+(duck>.5?-6:0)
    for(const d of[-5,1,7])O(c,x-s*7,y+d,4.5,3.6,SK,2.5)
    F(c,()=>c.roundRect(x-(s>0?2:12),y-13,14,24,6),PU,3.5);c.strokeStyle=PD;c.lineWidth=2;for(const d of[-6,0,6]){c.beginPath();c.moveTo(x+(s>0?1:-9),y+d);c.lineTo(x+(s>0?9:-1),y+d);c.stroke()}}
}
