// sleepy lilac-haired anime girl at morning standup holding a coffee mug, fighting a yawn behind her hand then snapping wide awake
export const frames=36,delay=72,rim=3
const P=Math.PI,{sin,cos,min,max}=Math,L='#2b1d26'
const E=t=>t<0?0:t>1?1:t*t*(3-2*t),sg=(t,a,b)=>E((t-a)/(b-a))
const F=(c,f,col,w=3.5)=>{c.beginPath();f();c.fillStyle=col;c.fill();if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const T=(c,p,w,col)=>{c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))q.length>2?c.quadraticCurveTo(...q):c.lineTo(...q)
  c.lineWidth=w+7;c.strokeStyle=L;c.stroke();c.lineWidth=w;c.strokeStyle=col;c.stroke()}
const O=(c,x,y,a,b,col,w=3.5)=>F(c,()=>c.ellipse(x,y,a,b,0,0,2*P),col,w)
const drop=(c,x,y,r,col='#9fd8ff')=>F(c,()=>{c.moveTo(x,y-r*1.6);c.quadraticCurveTo(x+r*1.3,y+r*.6,x,y+r);c.quadraticCurveTo(x-r*1.3,y+r*.6,x,y-r*1.6)},col,2)
// hair cap + pointed bangs; p lists tip/notch points from right temple to left temple
const bangs=(c,p,col)=>F(c,()=>{c.moveTo(...p[0]);c.bezierCurveTo(52,-44,26,-60,0,-60);c.bezierCurveTo(-26,-60,-52,-44,p.at(-1)[0],p.at(-1)[1])
  for(let k=p.length-1;k>0;k--){const[a,b]=p[k],[x,y]=p[k-1];y>b?c.quadraticCurveTo(a,b+(y-b)*.8,x,y):c.quadraticCurveTo(x,y+(b-y)*.45,x,y)}},col)
// palette: skin, hair, iris
const SK='#fde3d3',HR='#b9a5e6',HD='#8f7bc8',HL='#e6ddfb',I=['#3d3360','#a99ad6','#241d3d']
// one eye: s side (+1 viewer right), lid 0 open..1 shut, k 'x' squeezed shut
const eye=(c,x,y,s,lid,k)=>{
  c.save();c.translate(x,y);c.strokeStyle=L
  if(k=='x'){c.beginPath();c.moveTo(9*s,-7);c.lineTo(-6*s,0);c.lineTo(9*s,6);c.lineWidth=3.6;c.stroke();c.restore();return}
  const h=12.5,tp=-h+lid*h*1.75
  if(lid>.97){c.beginPath();c.moveTo(-9*s,1);c.quadraticCurveTo(1*s,6,11*s,-1);c.lineWidth=3.3;c.stroke();c.restore();return}
  c.save();c.beginPath();c.rect(-16,tp,32,40);c.clip()
  c.beginPath();c.ellipse(0,0,9.5,h,0,0,2*P);c.fillStyle='#fff';c.fill();c.clip()
  const g=c.createLinearGradient(0,-h,0,h);g.addColorStop(.1,I[0]);g.addColorStop(.85,I[1])
  c.beginPath();c.ellipse(0,1,8.2,11.5,0,0,2*P);c.fillStyle=g;c.fill()
  c.beginPath();c.ellipse(0,0,4,6,0,0,2*P);c.fillStyle=I[2];c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(-3,-4.5,3.4,0,2*P);c.fill();c.beginPath();c.arc(3.5,5,1.7,0,2*P);c.fill()
  c.restore()
  c.beginPath();c.moveTo(-10*s,tp+4);c.quadraticCurveTo(0,tp-2.5,11*s,tp+1.5);c.lineTo(13.5*s,tp-1.5);c.lineWidth=3.6;c.stroke()
  if(lid<.5){c.beginPath();c.moveTo(-3*s,h+.6);c.quadraticCurveTo(4*s,h+1,7.5*s,h-2.5);c.lineWidth=1.6;c.stroke()}
  c.restore()
}
export default(c,t)=>{
  // phases: yawn builds, hidden behind hand, head shake, forced wide-awake, eyes droop back
  const up=sg(t,.2,.3)*(1-sg(t,.56,.66)),hand=sg(t,.23,.32)*(1-sg(t,.54,.64)),sup=t>.1&&t<.24
  const shake=t>.62&&t<.76?sin((t-.62)/.14*4*P)*(1-sg(t,.7,.76)):0
  const awake=sg(t,.72,.76)*(1-sg(t,.86,.98)),br=sin(t*4*P)
  const nod=t<.12?sin(t/.12*P):0,by=Math.round(-up*5+nod*4),hx=128,hy=96+by,rot=-up*.08+shake*.12+nod*.05
  c.lineJoin=c.lineCap='round';c.translate(0,5)
  // legs + shoes
  for(const s of[-1,1]){T(c,[[128+s*10,204],[128+s*11,228]],15,'#4d5168');O(c,128+s*13,234,12,6,'#7a5240')}
  // back hair: bob with flicked ends
  c.save();c.translate(hx,hy);c.rotate(rot);c.scale(1.2,1.2)
  F(c,()=>{c.moveTo(-44,-20);c.bezierCurveTo(-56,10,-52,32,-48,42);c.lineTo(-40,36);c.lineTo(-36,44);c.lineTo(-20,30)
    c.lineTo(20,30);c.lineTo(36,44);c.lineTo(40,36);c.lineTo(48,42);c.bezierCurveTo(52,32,56,10,44,-20);c.closePath()},HD)
  c.restore()
  // torso: white tee, mustard cardigan, lanyard badge
  const ty=Math.round(by*.6)
  F(c,()=>{c.moveTo(110,152+ty);c.lineTo(146,152+ty);c.lineTo(150,206);c.lineTo(106,206);c.closePath()},'#fff')
  for(const s of[-1,1])F(c,()=>{c.moveTo(128+s*11,150+ty);c.quadraticCurveTo(128+s*28,148+ty,128+s*30,164+ty);c.lineTo(128+s*32,208);c.lineTo(128+s*8,208);c.quadraticCurveTo(128+s*4,176,128+s*11,150+ty)},'#e9b94c')
  c.strokeStyle='#d0475a';c.lineWidth=2.5;c.beginPath();c.moveTo(119,152+ty);c.lineTo(126,178+ty*.5);c.lineTo(137,152+ty);c.stroke()
  F(c,()=>c.rect(119,176+ty*.5,15,11),'#fff',2.5);F(c,()=>c.rect(122,179+ty*.5,9,2.5),'#7fb0e0',0)
  F(c,()=>c.rect(122,140+by*.8,12,14),SK,3)
  // arm holding the mug, steam curls
  T(c,[[106,160+ty],[94,186,110,190]],13,'#e9b94c')
  const my=180
  F(c,()=>{c.moveTo(103,my);c.lineTo(105,my+22);c.lineTo(121,my+22);c.lineTo(123,my);c.closePath()},'#4bb3a8')
  c.beginPath();c.arc(124,my+10,6,-1.2,1.2);c.lineWidth=7;c.strokeStyle=L;c.stroke();c.lineWidth=2.5;c.strokeStyle='#4bb3a8';c.stroke()
  F(c,()=>c.ellipse(113,my,10,3,0,0,2*P),'#5a3628',3)
  O(c,108,192,7,7,SK,3)
  for(let k=0;k<3;k++){const p=(t*2+k/3)%1,x=109+k*4+sin(p*2*P+k)*4,y=my-6-p*26
    c.globalAlpha=sin(p*P)*.9;c.beginPath();c.moveTo(x,y+6);c.quadraticCurveTo(x+4,y,x,y-6);c.lineWidth=2.5;c.strokeStyle='#b5b5b5';c.stroke();c.globalAlpha=1}
  // head
  c.save();c.translate(hx,hy);c.rotate(rot);c.scale(1.2,1.2)
  F(c,()=>{c.moveTo(-37,-8);c.bezierCurveTo(-38,22,-18,41,0,43);c.bezierCurveTo(18,41,38,22,37,-8);c.bezierCurveTo(37,-42,-37,-42,-37,-8)},SK)
  const lid=awake?max(0,.45-.5*awake):.45+.25*sg(t,.1,.14)+.3*sg(t,.2,.24),k=up>.6?'x':0
  for(const s of[-1,1])eye(c,s*17,12,s,lid,k)
  if(up>.6)for(const s of[-1,1])drop(c,s*30,15,3)
  c.fillStyle='rgba(247,140,150,.45)';for(const s of[-1,1]){c.beginPath();c.ellipse(s*25,26,7,3.5,0,0,2*P);c.fill()}
  c.fillStyle=L;c.beginPath();c.arc(1,25,1.2,0,2*P);c.fill()
  // mouth: sleepy line -> wobbly yawn -> forced grin
  const yw=up
  if(yw>.12)F(c,()=>c.ellipse(0,33,3+yw*5,1.5+yw*9,0,0,2*P),'#8a2f3d',2.6)
  else if(sup){c.beginPath();c.moveTo(-6,33);for(let k=1;k<=4;k++)c.lineTo(-6+k*3,33+(k%2?-1.5:1.5)*(1+(t*80|0)%2*.4));c.lineWidth=2.4;c.strokeStyle=L;c.stroke()}
  else if(awake>.4){F(c,()=>{c.moveTo(-8,30);c.quadraticCurveTo(0,41,8,30);c.closePath()},'#8a2f3d',2.4);F(c,()=>{c.moveTo(-6,31);c.lineTo(6,31);c.lineTo(5,33);c.lineTo(-5,33)},'#fff',0)}
  else{c.beginPath();c.moveTo(-4,32);c.quadraticCurveTo(0,33.5,4,32);c.lineWidth=2.4;c.strokeStyle=L;c.stroke()}
  // side locks + bangs
  for(const s of[-1,1])F(c,()=>{c.moveTo(s*36,-14);c.quadraticCurveTo(s*47,14,s*43,40);c.quadraticCurveTo(s*38,30,s*33,30);c.quadraticCurveTo(s*36,10,s*29,-6)},HR,3)
  bangs(c,[[45,4],[38,-14],[34,6],[25,-17],[17,1],[9,-16],[1,4],[-8,-18],[-15,1],[-22,-15],[-31,6],[-37,-12],[-45,4]],HR)
  c.lineWidth=1.8;c.strokeStyle=HD;for(const[a,b,d]of[[-26,-40,-18],[6,-44,8],[28,-36,24]]){c.beginPath();c.moveTo(a,b);c.quadraticCurveTo(a+2,b+14,d,-8);c.stroke()}
  c.strokeStyle=HL;c.lineWidth=4;for(const a of[-2.55,-2.2,-1.25])c.beginPath(),c.arc(0,-6,44,a,a+.22),c.stroke()
  // brows over the bangs: drowsy, scrunched, raised
  c.strokeStyle='#4b3c78';c.lineWidth=2.6;for(const s of[-1,1]){const q=up>.6||sup?1:0,r=awake>.4?-6:0;c.beginPath();c.moveTo(s*9,-3+r+q*5);c.quadraticCurveTo(s*17,-6+r+q*1,s*25,-4+r-q*1);c.stroke()}
  // ahoge: droops when sleepy, springs up when awake
  const ah=awake>.3?-1:1-up*.3
  c.beginPath();c.moveTo(-2,-58);c.bezierCurveTo(-2,-70,10+ah*4,-72+ah*3,14+ah*8,-64+ah*9);c.lineWidth=7;c.strokeStyle=L;c.stroke();c.lineWidth=3.5;c.strokeStyle=HR;c.stroke()
  F(c,()=>c.rect(-35,-20,11,5),'#ff8fa3',2.5)
  c.restore()
  // free arm hangs, then the hand covers the yawn
  const ex=158+hand*10,ey=180-hand*24,hdx=156-hand*22,hdy=204-hand*66+by
  T(c,[[150,160+ty],[ex,ey,hdx,hdy]],13,'#e9b94c');O(c,hdx,hdy,7.5,7.5,SK,3)
  if(awake>.3){c.globalAlpha=min(1,awake*2);drop(c,182,54+by,5);c.globalAlpha=1}
  // tear droplets flung off during the head shake
  if(t>.62&&t<.8)for(const s of[-1,1]){const p=(t-.62)/.18;c.globalAlpha=1-p;drop(c,128+s*(48+p*36),110-p*12+p*p*36,3);c.globalAlpha=1}
}
