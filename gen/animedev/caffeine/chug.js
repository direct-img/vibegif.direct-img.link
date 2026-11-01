// sleepy anime girl in a hoodie chugs a JAVA coffee mug and powers up, her long dark hair flying up spiky and gold with lightning, then flopping back down
export const frames=28,delay=80,rim=3
const P=Math.PI,{sin,cos,min,max,abs,round}=Math,L='#2b1d26'
const E=t=>t<0?0:t>1?1:t*t*(3-2*t),sg=(t,a,b)=>E((t-a)/(b-a))
const F=(c,f,col,w=3.5)=>{c.beginPath();f();c.fillStyle=col;c.fill();if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const T=(c,p,w,col)=>{c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))q.length>2?c.quadraticCurveTo(...q):c.lineTo(...q)
  c.lineWidth=w+7;c.strokeStyle=L;c.stroke();c.lineWidth=w;c.strokeStyle=col;c.stroke()}
const O=(c,x,y,a,b,col,w=3.5,r=0)=>F(c,()=>c.ellipse(x,y,a,b,r,0,2*P),col,w)
const SK='#fbe8de',GR='#8c93a3',I=['#5e0c18','#e8434f','#32000a']
const bolt=(c,x,y,a,s)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);F(c,()=>{c.moveTo(0,-14);c.lineTo(7,-14);c.lineTo(2,-3);c.lineTo(8,-3);c.lineTo(-4,14);c.lineTo(-1,1);c.lineTo(-7,1);c.closePath()},'#ffe44d',2.5);c.restore()}
export default(c,t)=>{
  c.lineJoin=c.lineCap='round'
  // phases: lift mug, chug, eyes snap open, power up, fade back to sleepy
  const lift=sg(t,.04,.14)*(1-sg(t,.38,.46)),chug=t>.14&&t<.4,pw=sg(t,.44,.52)*(1-sg(t,.74,.9)),jolt=t>.42&&t<.48,on=pw>.22||jolt
  const sh=pw>.5?round(sin(t*99*P)*1.5):0,hx=128+sh,hy=124
  const[HC,HDK,HLT]=on?['#ffd23a','#f0a020','#fff6b8']:['#2b3366','#1a1f45','#4c5596']
  // aura flames around the upper body
  if(pw>.05){c.save();c.translate(128,196);c.scale(pw,pw)
    F(c,()=>{c.moveTo(-62,30);for(let j=0;j<=16;j++){const a=-P/2+(j-8)/8*P*.5,r=(j%2?104:142)+sin(t*12*P+j*1.7)*7;c.lineTo(cos(a)*r*.74,sin(a)*r*(j==0||j==16?.1:1))}c.lineTo(62,30);c.closePath()},'#fff3a0',3)
    c.restore()}
  // head transform shared by hair and face
  const H=()=>{c.translate(hx,hy);c.scale(1.2,1.2)}
  // long hair strands: hanging down when sleepy, flying up spiky when powered
  c.save();H()
  const N=11
  for(let j=0;j<N;j++){const u=j/(N-1)-.5,a=-P/2+u*P*1.2,rx=cos(a)*34,ry=-10+sin(a)*36
    const dn=[u*104,78-abs(u)*16],l=34+(j%2?0:10),up=[rx+cos(a)*l,ry+sin(a)*l-6],k=E(pw)
    const tx=dn[0]+(up[0]-dn[0])*k,ty=dn[1]+(up[1]-dn[1])*k,w=11
    const d=Math.hypot(tx-rx,ty-ry)||1,nx=-(ty-ry)/d*w,ny=(tx-rx)/d*w,mx=(rx+tx)/2,my=(ry+ty)/2
    F(c,()=>{c.moveTo(rx-nx,ry-ny);c.quadraticCurveTo(mx-nx*.6,my-ny*.6,tx,ty);c.quadraticCurveTo(mx+nx*.6,my+ny*.6,rx+nx,ry+ny);c.closePath()},j%2?HDK:HC,3)}
  c.restore()
  // body: oversized hoodie, feet
  for(const s of[-1,1])O(c,128+s*15+sh,236,13,6,'#e9e9ef')
  F(c,()=>{c.moveTo(hx-16,170);c.quadraticCurveTo(hx-42,172,hx-42,192);c.lineTo(hx-38,232);c.lineTo(hx+38,232);c.lineTo(hx+42,192);c.quadraticCurveTo(hx+42,172,hx+16,170);c.closePath()},GR)
  F(c,()=>c.roundRect(hx-22,208,44,16,6),'#7b8292',2.5)
  c.strokeStyle='#f2f2f2';c.lineWidth=2.5;for(const s of[-1,1]){c.beginPath();c.moveTo(hx+s*7,176);c.lineTo(hx+s*8,194);c.stroke()}
  // free arm: limp, then a clenched fist when powered
  const fx=hx+46+pw*4,fy=214-pw*30
  T(c,[[hx+36,180],[hx+50,196-pw*8,fx,fy]],13,GR);O(c,fx,fy,8,8,SK,3)
  // head
  c.save();H();c.rotate(chug?-.08:0)
  F(c,()=>{c.moveTo(-37,-8);c.bezierCurveTo(-38,22,-18,41,0,43);c.bezierCurveTo(18,41,38,22,37,-8);c.bezierCurveTo(37,-42,-37,-42,-37,-8)},SK)
  // eyes: heavy-lidded with dark circles -> shut while chugging -> huge with pinprick pupils
  for(const s of[-1,1]){c.save();c.translate(s*17,12);c.strokeStyle=L
    if(chug){c.beginPath();c.moveTo(-9,1);c.quadraticCurveTo(0,6,9,1);c.lineWidth=3.4;c.stroke()}
    else{const lid=on?0:.55,tp=-12.5+lid*21.9
      c.save();c.beginPath();c.rect(-16,tp,32,40);c.clip();c.beginPath();c.ellipse(0,0,10,13,0,0,2*P);c.fillStyle='#fff';c.fill();c.clip()
      if(on){c.beginPath();c.arc(0,1,4.5,0,2*P);c.fillStyle=I[1];c.fill();c.beginPath();c.arc(0,1,2.2,0,2*P);c.fillStyle=I[2];c.fill()}
      else{const g=c.createLinearGradient(0,-12,0,12);g.addColorStop(.1,I[0]);g.addColorStop(.85,I[1]);c.beginPath();c.ellipse(0,1,8.2,11.5,0,0,2*P);c.fillStyle=g;c.fill()
        c.beginPath();c.ellipse(0,1,4,6,0,0,2*P);c.fillStyle=I[2];c.fill();c.fillStyle='#fff';c.beginPath();c.arc(-3,-2,2.6,0,2*P);c.fill()}
      c.restore()
      c.beginPath();c.moveTo(-10*s,tp+(on?4:2));c.quadraticCurveTo(0,tp-(on?2.5:0),11*s,tp+(on?1.5:2));c.lineTo(13.5*s,tp+(on?-1.5:4));c.lineWidth=3.6;c.stroke()
      if(!on){c.strokeStyle='rgba(110,80,150,.6)';c.lineWidth=2;for(const d of[15,18.5]){c.beginPath();c.moveTo(-7,d);c.quadraticCurveTo(0,d+3,7,d);c.stroke()}}}
    c.restore()}
  c.fillStyle='rgba(240,120,130,.35)';for(const s of[-1,1]){c.beginPath();c.ellipse(s*25,27,6,3,0,0,2*P);c.fill()}
  // mouth: flat -> hidden by mug -> manic toothy grin
  if(on){F(c,()=>{c.moveTo(-11,28);c.quadraticCurveTo(0,42,11,28);c.closePath()},'#fff',2.6);c.strokeStyle=L;c.lineWidth=1.5;c.beginPath();c.moveTo(-10,31);c.lineTo(10,31);for(const x of[-5,0,5])c.moveTo(x,29),c.lineTo(x,37);c.stroke()}
  else if(!chug){c.beginPath();c.moveTo(-4,33);c.quadraticCurveTo(0,32,4,33);c.lineWidth=2.4;c.strokeStyle=L;c.stroke()}
  // bangs: droopy strands that lift and spike up
  const k=E(pw)
  F(c,()=>{c.moveTo(42,4);c.bezierCurveTo(48,-40,24,-58,0,-58);c.bezierCurveTo(-24,-58,-48,-40,-42,4)
    for(const[x,y]of[[-34,8],[-24,-22],[-17,10],[-8,-24],[0,8],[8,-24],[17,10],[24,-22],[34,8]])c.lineTo(x*(1+(y>0?.25*k:0)),y>0?y*(1-k)-24*k:y-6*k)
    c.closePath()},HC)
  c.strokeStyle=HLT;c.lineWidth=4;for(const a of[-2.45,-2.1,-1.3])c.beginPath(),c.arc(0,-10,40,a,a+.22),c.stroke()
  // brows: tired slant -> fierce
  c.strokeStyle=on?'#c07a10':'#1a1f45';c.lineWidth=2.8;for(const s of[-1,1]){c.beginPath();if(on){c.moveTo(s*8,-6);c.lineTo(s*25,-11)}else{c.moveTo(s*8,-6);c.quadraticCurveTo(s*17,-6,s*25,-1)}c.stroke()}
  c.restore()
  // mug arm: lifted to the mouth and tipped up while chugging
  const ma=lift,mx=hx-46+ma*14,my=206-ma*50,mr=ma*(chug?2:.5)
  const gx=mx+cos(mr+P)*30,gy=my+sin(mr+P)*30
  T(c,[[hx-36,180],[hx-56+ma*6,200-ma*26,gx,gy]],13,GR)
  c.save();c.translate(mx,my);c.rotate(mr)
  F(c,()=>c.roundRect(-20,-22,40,44,7),'#fff')
  F(c,()=>c.ellipse(0,-22,19,5,0,0,2*P),'#6b3e26',2.5)
  c.fillStyle='#c0392b';c.font='bold 15px DejaVu Sans Mono';c.textAlign='center';c.textBaseline='middle';c.fillText('JAVA',0,3)
  c.beginPath();c.arc(-21,0,9,P*.5,P*1.5);c.lineWidth=11;c.strokeStyle=L;c.stroke();c.lineWidth=4;c.strokeStyle='#fff';c.stroke()
  c.restore()
  O(c,gx,gy,8,8,SK,3)
  // fizzle smoke as the power runs out
  if(t>.835&&t<.97){const p=(t-.835)/.135;c.globalAlpha=1-p;for(let j=0;j<3;j++)O(c,104+j*24+sin(p*4+j)*4,54-p*26-(j%2)*8,8+p*6,7+p*5,'#d6d6de',2.5);c.globalAlpha=1}
  // jolt lines and lightning
  if(jolt){c.strokeStyle=L;c.lineWidth=3.5;for(let j=0;j<9;j++){const a=-P+j*P/8;c.beginPath();c.moveTo(128+cos(a)*82,124+sin(a)*82);c.lineTo(128+cos(a)*100,124+sin(a)*100);c.stroke()}}
  if(pw>.4)for(let j=0;j<4;j++){if((t*28+j*2|0)%3==0)continue;const a=[-2.55,-.6,-3.05,-.1][j];bolt(c,128+cos(a)*98,140+sin(a)*92,a+P/2+.3,1.5)}
}
