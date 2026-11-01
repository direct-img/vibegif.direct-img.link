// anime girl in pyjamas and cat-ear headphones coding from home while her orange cat hops onto the laptop, walks across the keys typing jjjj, sits, then hops off and she backspaces
export const frames=32,delay=80,rim=3
const P=Math.PI,{sin,cos,min,max,abs,round,floor}=Math,L='#2b1d26'
const E=t=>t<0?0:t>1?1:t*t*(3-2*t),sg=(t,a,b)=>E((t-a)/(b-a))
const F=(c,f,col,w=3.5)=>{c.beginPath();f();c.fillStyle=col;c.fill();if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const T=(c,p,w,col)=>{c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))q.length>2?c.quadraticCurveTo(...q):c.lineTo(...q)
  c.lineWidth=w+7;c.strokeStyle=L;c.stroke();c.lineWidth=w;c.strokeStyle=col;c.stroke()}
const O=(c,x,y,a,b,col,w=3.5,r=0)=>F(c,()=>c.ellipse(x,y,a,b,r,0,2*P),col,w)
const drop=(c,x,y,r,col='#9fd8ff')=>F(c,()=>{c.moveTo(x,y-r*1.6);c.quadraticCurveTo(x+r*1.3,y+r*.6,x,y+r);c.quadraticCurveTo(x-r*1.3,y+r*.6,x,y-r*1.6)},col,2)
const bangs=(c,p,col)=>F(c,()=>{c.moveTo(...p[0]);c.bezierCurveTo(52,-44,26,-60,0,-60);c.bezierCurveTo(-26,-60,-52,-44,p.at(-1)[0],p.at(-1)[1])
  for(let k=p.length-1;k>0;k--){const[a,b]=p[k],[x,y]=p[k-1];y>b?c.quadraticCurveTo(a,b+(y-b)*.8,x,y):c.quadraticCurveTo(x,y+(b-y)*.45,x,y)}},col)
const SK='#ecc39c',HR='#a3304a',HD='#741c33',HL='#e0738a',I=['#22344f','#7fa2cc','#121c2c'],PJ='#bcd7f5',OR='#f39a48',OD='#cf6f26'
// orange cat in side view facing left; st = walk phase, sit 0..1
const cat=(c,x,y,st,sit)=>{c.save();c.translate(x,y);c.scale(1.3,1.3)
  const tw=sin(st*2*P)*.2
  c.beginPath();c.moveTo(22,-12);c.bezierCurveTo(44,-14,40+tw*20,-44,30+tw*30,-50);c.lineWidth=13;c.strokeStyle=L;c.stroke();c.lineWidth=6;c.strokeStyle=OR;c.stroke()
  for(const[k,dx]of[[0,14],[.5,-12]]){const a=sin((st+k)*2*P)*(1-sit);T(c,[[dx+4,-6],[dx+4+a*6,4-sit*4]],6,OD)}
  O(c,4,-14+sit*4,26,15-sit*2,OR)
  c.strokeStyle=OD;c.lineWidth=3;for(const d of[-6,4,14]){c.beginPath();c.moveTo(d,-28+sit*5);c.quadraticCurveTo(d+3,-20+sit*4,d,-14+sit*4);c.stroke()}
  for(const[k,dx]of[[.5,10],[0,-16]]){const a=sin((st+k)*2*P)*(1-sit);T(c,[[dx,-6],[dx+a*7,4-sit*2]],6,OR);O(c,dx+a*7,5-sit*2,4.5,3,'#fff',2.5)}
  // head
  c.translate(-24,-26+sit*2)
  for(const s of[-1,1])F(c,()=>{c.moveTo(s*4-4,-8);c.lineTo(s*9-4,-20);c.lineTo(s*13-2,-6);c.closePath()},OR,3)
  O(c,0,0,14,12,OR)
  O(c,-8,5,6,4.5,'#fff',0)
  c.fillStyle=L;c.beginPath();c.ellipse(-6,-2,2,3,0,0,2*P);c.ellipse(4,-2,2,3,0,0,2*P);c.fill()
  c.fillStyle='#f28aa0';c.beginPath();c.arc(-12,3,1.8,0,2*P);c.fill()
  c.strokeStyle=L;c.lineWidth=1.3;for(const d of[3,6]){c.beginPath();c.moveTo(-10,d);c.lineTo(-20,d-1+d*.2);c.stroke()}
  c.restore()}
export default(c,t)=>{
  c.lineJoin=c.lineCap='round'
  // cat path: leaps up at the right, walks left over the keys, sits, hops off the left edge of the desk
  const jump=sg(t,.2,.3),walk=sg(t,.3,.56),sit=sg(t,.56,.6)*(1-sg(t,.7,.74)),off=sg(t,.74,.84)
  const cx=188-walk*50-off*52,cy=t<.3?262-jump*74-sin(jump*P)*22:t<.74?188:188-sin(off*P)*22+off*off*84,on=t>.2&&t<.86,behind=t<.29||t>.79
  const junk=round(t<.3?0:t<.56?walk*7:t<.74?7+sg(t,.56,.74)*5:t<.84?12:12*(1-sg(t,.84,.96)))
  const seen=t>.24&&t<.86,deadpan=t>.5&&t<.86,typing=!seen
  // girl body behind the desk
  const gx=66,gy=92
  c.save();c.translate(gx,gy);c.scale(1.05,1.05)
  F(c,()=>{c.moveTo(-40,-14);c.bezierCurveTo(-52,12,-50,34,-40,44);c.lineTo(38,44);c.bezierCurveTo(48,30,50,10,40,-14);c.closePath()},HD)
  c.restore()
  F(c,()=>{c.moveTo(gx-14,134);c.quadraticCurveTo(gx-40,136,gx-42,162);c.lineTo(gx-42,206);c.lineTo(gx+42,206);c.lineTo(gx+42,162);c.quadraticCurveTo(gx+40,136,gx+14,134);c.closePath()},PJ)
  c.fillStyle='#fff';for(const[x,y]of[[-28,170],[20,182],[-10,194],[30,150]]){c.beginPath();for(let j=0;j<10;j++){const a=-P/2+j*P/5,r=j%2?2:4.5;c.lineTo(gx+x+cos(a)*r,y+sin(a)*r)}c.fill()}
  F(c,()=>{c.moveTo(gx-12,136);c.lineTo(gx,148);c.lineTo(gx+12,136)},'#fff',3)
  // head
  c.save();c.translate(gx,gy);c.scale(1.05,1.05)
  F(c,()=>{c.moveTo(-37,-8);c.bezierCurveTo(-38,22,-18,41,0,43);c.bezierCurveTo(18,41,38,22,37,-8);c.bezierCurveTo(37,-42,-37,-42,-37,-8)},SK)
  const lx=seen&&t>.66?4:seen?3:4,ly=seen&&!deadpan?-1:2,big=seen&&!deadpan
  for(const s of[-1,1]){c.save();c.translate(s*17,12);c.strokeStyle=L
    const lid=deadpan?.5:0,tp=-12.5+lid*21.9
    c.save();c.beginPath();c.rect(-16,tp,32,40);c.clip();c.beginPath();c.ellipse(0,0,9.5,12.5,0,0,2*P);c.fillStyle='#fff';c.fill();c.clip()
    const g=c.createLinearGradient(0,-12,0,12);g.addColorStop(.1,I[0]);g.addColorStop(.85,I[1]);const k=big?.7:1
    c.beginPath();c.ellipse(lx,1+ly,8.2*k,11.5*k,0,0,2*P);c.fillStyle=g;c.fill();c.beginPath();c.ellipse(lx,ly,3.8*k,5.5*k,0,0,2*P);c.fillStyle=I[2];c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(lx-2.5,ly-3.5,3,0,2*P);c.fill();c.restore()
    c.beginPath();c.moveTo(-10*s,tp+(lid?2:4));c.quadraticCurveTo(0,tp-(lid?0:2.5),11*s,tp+(lid?2:1.5));c.lineTo(13.5*s,tp+(lid?2:-1.5));c.lineWidth=3.6;c.stroke()
    c.restore()}
  c.fillStyle='rgba(235,110,110,.4)';for(const s of[-1,1]){c.beginPath();c.ellipse(s*25,26,7,3.5,0,0,2*P);c.fill()}
  if(big)F(c,()=>c.ellipse(2,33,4,5,0,0,2*P),'#8a2f3d',2.4)
  else if(deadpan){c.beginPath();c.moveTo(-4,33);c.lineTo(6,33);c.lineWidth=2.4;c.strokeStyle=L;c.stroke()}
  else{c.beginPath();c.moveTo(-5,31);c.quadraticCurveTo(1,36,7,31);c.lineWidth=2.4;c.strokeStyle=L;c.stroke()}
  for(const s of[-1,1])F(c,()=>{c.moveTo(s*36,-12);c.quadraticCurveTo(s*48,12,s*42,40);c.lineTo(s*36,32);c.lineTo(s*32,38);c.quadraticCurveTo(s*35,10,s*29,-4)},HR,3)
  bangs(c,[[44,2],[37,-14],[30,4],[24,-20],[14,-2],[8,-20],[-2,2],[-8,-20],[-18,-2],[-24,-18],[-32,4],[-38,-12],[-44,2]],HR)
  c.strokeStyle=HL;c.lineWidth=4;for(const a of[-2.5,-2.15,-1.3])c.beginPath(),c.arc(0,-6,44,a,a+.22),c.stroke()
  c.strokeStyle=HD;c.lineWidth=2.6;for(const s of[-1,1]){const r=big?-4:0;c.beginPath();c.moveTo(s*9,-7+r);c.quadraticCurveTo(s*17,-10+r,s*25,-7+r+(deadpan?3:0));c.stroke()}
  // cat-ear headphones
  c.beginPath();c.arc(0,-6,48,P*1.08,P*1.92);c.lineWidth=13;c.strokeStyle=L;c.stroke();c.lineWidth=7;c.strokeStyle='#fdfdfd';c.stroke()
  for(const s of[-1,1]){F(c,()=>{c.moveTo(s*16,-50);c.lineTo(s*28,-70);c.lineTo(s*36,-44);c.closePath()},'#fdfdfd',3);F(c,()=>{c.moveTo(s*21,-50);c.lineTo(s*28,-62);c.lineTo(s*32,-48);c.closePath()},'#f7a8c0',0)
    F(c,()=>c.roundRect(s*44-8,-6,16,26,7),'#fdfdfd',3);F(c,()=>c.roundRect(s*44-4,-1,8,16,4),'#f7a8c0',0)}
  c.restore()
  if(deadpan)drop(c,118,72,5)
  if(t>.25&&t<.4){c.fillStyle='#e5484d';c.font='bold 26px DejaVu Sans';c.textAlign='center';c.lineWidth=5;c.strokeStyle='#fff';c.strokeText('!',112,58);c.fillText('!',112,58)}
  // laptop screen with code and the cat's junk line
  F(c,()=>c.roundRect(122,74,116,104,8),'#3b3f4a')
  F(c,()=>c.rect(129,81,102,88),'#1f2233',2)
  const C=['#ff79c6','#8be9fd','#50fa7b','#f1fa8c','#bd93f9']
  for(const[j,ln]of[[0,[[0,14,0],[18,30,1]]],[1,[[8,20,2],[32,22,3]]],[2,[[8,12,4],[24,34,1]]],[4,[[8,26,0],[38,18,2]]],[5,[[0,10,3]]]])
    for(const[x,w,k]of ln){c.fillStyle=C[k];c.fillRect(134+x,88+j*12,w,5)}
  c.fillStyle='#e6e6f0';c.font='bold 12px DejaVu Sans Mono';c.textBaseline='middle';c.fillText('j'.repeat(junk),134,126)
  if(floor(t*8)%2==0||junk>0){c.fillStyle='#fff';c.fillRect(134+junk*7.22,120,2,12)}
  // keyboard base
  F(c,()=>{c.moveTo(118,178);c.lineTo(242,178);c.lineTo(248,196);c.lineTo(112,196);c.closePath()},'#c9ccd6')
  c.fillStyle='#8d92a3';for(let r=0;r<2;r++)for(let k=0;k<9;k++)c.fillRect(124+k*13-r*2,182+r*6,10,4)
  // the cat (behind the desk front while leaping up or hopping down)
  if(on){c.save();if(behind){c.beginPath();c.rect(0,0,256,200);c.clip()}cat(c,cx,cy,t*6,sit);c.restore()}
  // desk
  F(c,()=>c.roundRect(10,196,240,12,4),'#c58b55')
  F(c,()=>c.rect(20,208,220,26),'#a8703f')
  F(c,()=>c.roundRect(168,215,40,12,4),'#c58b55',2.5);F(c,()=>c.roundRect(182,219,12,3,1.5),L,0)
  // hands typing, lifted when the cat arrives
  for(const s of[0,1]){const ty=typing&&t>.84||t<.2?-abs(sin((t*16+s*.5)*P))*4:0,hx=s?160:136,lift=sg(t,.24,.3)*(1-sg(t,.84,.9))
    const x=hx+(s?gx+48-hx:gx+20-hx)*lift,y=192+ty-lift*(s?58:48)
    T(c,[[gx+(s?30:22),150],[x-16,y-4,x,y]],11,PJ);O(c,x,y,7.5,7,SK,3)}
}
