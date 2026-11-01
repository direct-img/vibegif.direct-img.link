// pink twin-tailed anime girl getting buried under a growing pile of backlog tickets until only one hand waves out, then she bursts free
export const frames=26,delay=100,rim=3
const P=Math.PI,{sin,cos,min,max,abs,round}=Math,L='#2b1d26'
const E=t=>t<0?0:t>1?1:t*t*(3-2*t),sg=(t,a,b)=>E((t-a)/(b-a))
const F=(c,f,col,w=3.5)=>{c.beginPath();f();c.fillStyle=col;c.fill();if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const T=(c,p,w,col)=>{c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))q.length>2?c.quadraticCurveTo(...q):c.lineTo(...q)
  c.lineWidth=w+7;c.strokeStyle=L;c.stroke();c.lineWidth=w;c.strokeStyle=col;c.stroke()}
const O=(c,x,y,a,b,col,w=3.5,r=0)=>F(c,()=>c.ellipse(x,y,a,b,r,0,2*P),col,w)
const drop=(c,x,y,r,col='#9fd8ff')=>F(c,()=>{c.moveTo(x,y-r*1.6);c.quadraticCurveTo(x+r*1.3,y+r*.6,x,y+r);c.quadraticCurveTo(x-r*1.3,y+r*.6,x,y-r*1.6)},col,2)
const bangs=(c,p,col)=>F(c,()=>{c.moveTo(...p[0]);c.bezierCurveTo(52,-44,26,-60,0,-60);c.bezierCurveTo(-26,-60,-52,-44,p.at(-1)[0],p.at(-1)[1])
  for(let k=p.length-1;k>0;k--){const[a,b]=p[k],[x,y]=p[k-1];y>b?c.quadraticCurveTo(a,b+(y-b)*.8,x,y):c.quadraticCurveTo(x,y+(b-y)*.45,x,y)}},col)
const SK='#ffe3d6',HR='#ff74b1',HD='#d8478c',HL='#ffbfdc',I=['#3a1d5c','#a274e0','#22103a'],ST=['#e5484d','#3b82f6','#30a46c','#f5b400','#8e4ec6']
// ticket pile: rows from the floor up, each card with its rest spot, tilt, stripe colour and drop time
const R=(n)=>{const x=sin(n*127.1)*43758.5453;return x-Math.floor(x)},K=[]
for(let r=0;r<11;r++){const hw=110-r*8.2,n=max(2,round(hw*2/32)),y=230-r*16
  for(let j=0;j<n;j++){const k=K.length;K.push({x:128-hw+16+(hw*2-32)*(n>1?j/(n-1):.5)+(R(k)-.5)*8,y:y+(R(k+9)-.5)*4,a:(R(k+3)-.5)*.7,s:ST[k*7%5]})}}
K.forEach((k,i)=>{k.t=.06+i/K.length*.6+(R(i+5)-.5)*.02})
const card=(c,x,y,a,s,al=1)=>{c.save();c.globalAlpha=al;c.translate(x,y);c.rotate(a)
  F(c,()=>c.roundRect(-17,-11,34,22,3),'#fff',2.8);c.fillStyle=s;c.fillRect(-15.5,-9.5,5,19)
  c.strokeStyle='#b8b8c4';c.lineWidth=2;for(const[d,w]of[[-4,18],[1,14],[6,10]]){c.beginPath();c.moveTo(-7,d);c.lineTo(-7+w,d);c.stroke()}
  c.restore()}
export default(c,t)=>{
  c.lineJoin=c.lineCap='round'
  const burst=t>.82,bp=burst?(t-.82)/.18:0
  // pile height reached so far (top of the landed cards)
  let top=240;for(const k of K)if(t>=k.t+.06&&!burst)top=min(top,k.y-11)
  const fear=top<196?1:0,panic=top<150?1:0,gone=top<66,up=sg(160-top,0,30)*(burst?0:1),cheer=burst?sg(bp,0,.3)*(1-sg(bp,.72,1)):0
  // girl
  const gx=128,gy=118
  for(const s of[-1,1]){T(c,[[gx+s*9,200],[gx+s*10,224]],12,SK);O(c,gx+s*12,231,11,6,'#2e2e3a')}
  F(c,()=>{c.moveTo(gx-24,190);c.lineTo(gx+24,190);c.lineTo(gx+32,212);c.lineTo(gx-32,212);c.closePath()},'#2c3e75')
  F(c,()=>{c.moveTo(gx-12,156);c.quadraticCurveTo(gx-27,158,gx-25,172);c.lineTo(gx-22,194);c.lineTo(gx+22,194);c.lineTo(gx+25,172);c.quadraticCurveTo(gx+27,158,gx+12,156);c.closePath()},'#fff')
  F(c,()=>{c.moveTo(gx,162);c.lineTo(gx-9,156);c.lineTo(gx-9,168);c.closePath();c.moveTo(gx,162);c.lineTo(gx+9,156);c.lineTo(gx+9,168);c.closePath()},'#e5484d',2.5)
  // left arm: hip, then cheering when free
  const lx=gx-34-cheer*8,ly=190-cheer*56
  T(c,[[gx-22,164],[gx-34,176-cheer*16,lx,ly]],10,'#fff');O(c,lx,ly,7,7,SK,3)
  if(!gone||burst){
    // twin tails
    for(const s of[-1,1]){c.save();c.translate(gx+s*40,gy-36);c.rotate(s*(.1+sin(t*8*P)*.05*(panic?1:0)))
      F(c,()=>{c.moveTo(0,-6);c.bezierCurveTo(s*30,0,s*34,40,s*18,72);c.lineTo(s*14,58);c.lineTo(s*6,70);c.bezierCurveTo(s*14,40,s*6,16,0,8);c.closePath()},HR)
      c.restore();O(c,gx+s*40,gy-38,6,6,'#ffd84d',3)}
    c.save();c.translate(gx,gy)
    F(c,()=>{c.moveTo(-37,-8);c.bezierCurveTo(-38,22,-18,41,0,43);c.bezierCurveTo(18,41,38,22,37,-8);c.bezierCurveTo(37,-42,-37,-42,-37,-8)},SK)
    // eyes: happy -> nervous -> panicked
    for(const s of[-1,1]){c.save();c.translate(s*17,12);c.strokeStyle=L
      if(!fear||burst){c.beginPath();c.moveTo(-9,3);c.quadraticCurveTo(0,-8,9,3);c.lineWidth=3.6;c.stroke()}
      else{const sm=panic?.55:1;c.save();c.beginPath();c.ellipse(0,0,9.5,12.5,0,0,2*P);c.fillStyle='#fff';c.fill();c.clip()
        const g=c.createLinearGradient(0,-12,0,12);g.addColorStop(.1,I[0]);g.addColorStop(.85,I[1]);c.beginPath();c.ellipse(0,1,8.2*sm,11.5*sm,0,0,2*P);c.fillStyle=g;c.fill()
        c.beginPath();c.ellipse(0,1,3.6*sm,5*sm,0,0,2*P);c.fillStyle=I[2];c.fill();c.fillStyle='#fff';c.beginPath();c.arc(-3*sm,-3*sm,2.8,0,2*P);c.fill();c.restore()
        c.beginPath();c.moveTo(-10*s,-8.5);c.quadraticCurveTo(0,-15,11*s,-11);c.lineTo(13.5*s,-14);c.lineWidth=3.6;c.stroke()}
      c.restore()}
    c.fillStyle='rgba(250,110,150,.45)';for(const s of[-1,1]){c.beginPath();c.ellipse(s*25,26,7,3.5,0,0,2*P);c.fill()}
    if(panic)F(c,()=>c.ellipse(0,33,6,7,0,0,2*P),'#8a2f3d',2.6)
    else if(fear){c.beginPath();c.moveTo(-7,32);for(let k=1;k<=4;k++)c.lineTo(-7+k*3.5,32+(k%2?-2:0));c.lineWidth=2.5;c.strokeStyle=L;c.stroke()}
    else F(c,()=>{c.moveTo(-8,29);c.quadraticCurveTo(0,40,8,29);c.closePath()},'#8a2f3d',2.4)
    bangs(c,[[44,0],[38,-14],[33,4],[24,-18],[16,0],[8,-18],[0,4],[-8,-18],[-16,0],[-24,-18],[-33,4],[-38,-14],[-44,0]],HR)
    c.strokeStyle=HL;c.lineWidth=4;for(const a of[-2.5,-2.15,-1.3])c.beginPath(),c.arc(0,-6,44,a,a+.22),c.stroke()
    c.strokeStyle=HD;c.lineWidth=2.6;for(const s of[-1,1]){const w=fear&&!burst;c.beginPath();c.moveTo(s*9,w?-9:-6);c.quadraticCurveTo(s*17,w?-9:-10,s*25,w?-4:-7);c.stroke()}
    c.restore()
    if(fear&&!burst)drop(c,174,84,5)
  }
  // right arm: rises as the pile grows, waving from the top when she is buried
  let hx=gx+36+up*(gone?0:-4),hy=192-up*(192-min(120,top-(gone?24:14)))
  if(gone&&!burst)hx+=sin(t*16*P)*7
  if(burst){hx=gx+44+cheer*6;hy=190-cheer*56}
  T(c,[[gx+22,164],[gx+34+up*4,(164+hy)/2+8*(1-up),hx,hy]],10,'#fff');O(c,hx,hy,7.5,7.5,SK,3)
  // paper mound filling the gaps under the landed tickets
  if(top<196&&!burst){const m=Math.ceil((top-2)/16)*16+2;F(c,()=>{c.moveTo(26,236);c.lineTo(104,m+12);c.quadraticCurveTo(128,m,152,m+12);c.lineTo(230,236);c.closePath()},'#dcdce6',0)}
  // tickets: falling, landed, then flung away in the burst
  for(const[i,k]of K.entries()){
    if(burst){const q=1-sg(bp,.25,.6);if(q>.18){c.save();c.translate(k.x+(k.x-128)*.25*bp,k.y-(50+(240-k.y)*.5)*bp+70*bp*bp);c.scale(q,q);card(c,0,0,k.a+bp*(i%2?5:-5),k.s);c.restore()}continue}
    const f=(t-k.t)/.06;if(f<0)continue
    if(f<1){const y0=max(24,k.y-120),y=y0+(k.y-y0)*f*f;card(c,k.x+(1-f)*(k.x<128?12:-12),y,k.a*f+(1-f)*(i%2?.8:-.8),k.s,min(1,f*4))}
    else card(c,k.x,k.y,k.a,k.s)}
  // the waving hand pokes out over the pile
  if(gone&&!burst){T(c,[[hx-sin(t*16*P)*5,top+24],[hx,hy]],11,'#fff');F(c,()=>c.roundRect(hx-8,hy+4,16,6,2),'#fff',2.5);O(c,hx,hy-2,9,9,SK,3);for(let j=0;j<2;j++)card(c,hx+(j?14:-12),top+16,j?.3:-.25,ST[j+1]);c.strokeStyle=L;c.lineWidth=3;for(const s of[-1,1])for(const r of[17,24]){c.beginPath();c.arc(hx,hy+2,r,s>0?-.8:P-.3,s>0?.3:P+.8);c.stroke()}}
  // burst puff
  if(burst&&bp<.4){c.globalAlpha=1-bp*2.5;c.strokeStyle=L;c.lineWidth=3.5;for(let j=0;j<10;j++){const a=j*P/5,r=60+bp*100;c.beginPath();c.moveTo(128+cos(a)*r,150+sin(a)*r*.8);c.lineTo(128+cos(a)*(r+16),150+sin(a)*(r+16)*.8);c.stroke()}c.globalAlpha=1}
}
