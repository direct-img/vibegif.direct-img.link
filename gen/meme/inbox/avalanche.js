// blob back from vacation opens the laptop, 999+ pops up and an avalanche of envelopes piles up over it until a white flag pokes out, then poof, back to the start
const{sin,cos,PI,max,min,abs,sqrt}=Math,T=2*PI
export const frames=24,delay=100,rim=5
const Y='#ffd43b',BL='#ff8787',LG='#ced4da',LD='#868e96',EC=['#fff','#d0ebff','#fff','#fff3bf','#fff','#ffdeeb'],RD='#fa5252'
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const R=n=>abs(sin(n*127.1+311.7)*43758.5)%1
const P=[];for(let r=0;r<11;r++)for(let k=0;k<8;k++)P.push([6+k*34+(r%2?17:0)+(R(r*10+k)-.5)*8,238-r*19,(R(r*10+k+300)-.5)*.9,EC[(r*3+k)%6]])
const env=(c,x,y,a,col)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle=col;c.lineWidth=4;c.beginPath();c.roundRect(-19,-13,38,26,3);c.fill();c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(-16,-10);c.lineTo(0,3);c.lineTo(16,-10);c.stroke();c.restore()}
const SG=[63,6,91,79,102,109,125,7,127,111],SP=[[0,0,1,0],[1,0,1,.5],[1,.5,1,1],[0,1,1,1],[0,.5,0,1],[0,0,0,.5],[0,.5,1,.5]]
const dig=(c,x,y,n,w,h)=>SP.forEach(([a,b,e,f],k)=>{if(SG[n]>>k&1)c.moveTo(x+a*w,y+b*h),c.lineTo(x+e*w,y+f*h)})
const cloud=(c,s)=>{const B=[[128,140,62],[70,168,42],[186,168,42],[88,104,38],[168,104,38],[128,82,36],[128,196,44],[34,196,34],[222,196,34],[40,122,16],[214,118,14],[200,54,10]];c.lineWidth=14*s;for(const[x,y,r]of B)c.beginPath(),c.arc(128+(x-128)*s,140+(y-140)*s,r*s,0,T),c.stroke();c.fillStyle='#f1f3f5';for(const[x,y,r]of B)c.beginPath(),c.arc(128+(x-128)*s,140+(y-140)*s,r*s,0,T),c.fill()}
export default(c,t)=>{
  const reset=t>=.9,open=reset?0:ez(t,.06,.14),lt=214-84*open,shock=t>=.16&&!reset,H=reset?0:182*ez(t,.18,.64)
  // blob behind the laptop
  c.fillStyle=Y;c.beginPath();c.moveTo(62,222);c.bezierCurveTo(56,110,84,58,128,58);c.bezierCurveTo(172,58,200,110,194,222);c.closePath();c.fill();c.stroke()
  c.fillStyle='#212529';c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.roundRect(128+d*24-15,70,30,18,7),c.fill(),c.stroke()
  c.beginPath();c.moveTo(119,78);c.lineTo(137,78);c.stroke()
  c.fillStyle='#ff6b6b';c.lineWidth=4;for(let k=0;k<5;k++){const a=k*T/5;c.beginPath();c.ellipse(180+cos(a)*8,88+sin(a)*8,6,4,a,0,T);c.fill();c.stroke()}c.fillStyle=Y;c.beginPath();c.arc(180,88,4,0,T);c.fill();c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*40,128,10,5,0,0,T),c.fill()
  if(shock){for(const d of[-1,1]){c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(128+d*22,110,12,0,T);c.fill();c.stroke();c.fillStyle='#111';c.beginPath();c.arc(128+d*22,110,3.5,0,T);c.fill()}
    c.fillStyle='#c92a2a';c.lineWidth=4;c.beginPath();c.ellipse(128,136,8,10,0,0,T);c.fill();c.stroke()}
  else{c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.arc(128+d*22,114,8,PI*1.1,PI*1.9),c.stroke()
    c.beginPath();c.arc(128,124,12,.15*PI,.85*PI);c.stroke()}
  // the heap rising up over it
  const top=x=>236-H*sqrt(max(0,1-((x-128)/128)**4))
  for(const[x,y,a,col]of P)if(y>top(x)+4)env(c,x,y,a,col)
  // white flag of surrender
  if(t>=.64&&!reset){const u=ez(t,.64,.7),fx=92,fy=top(92)+30-34*u,w=sin(t*T*6)
    c.lineWidth=5;c.beginPath();c.moveTo(fx,fy);c.lineTo(fx,fy-38);c.stroke()
    c.fillStyle='#fff';c.lineWidth=4.5;c.beginPath();c.moveTo(fx,fy-38);c.quadraticCurveTo(fx+13,fy-44+4*w,fx+28,fy-36);c.lineTo(fx+28,fy-16);c.quadraticCurveTo(fx+13,fy-24-4*w,fx,fy-18);c.closePath();c.fill();c.stroke()
    c.fillStyle=Y;c.lineWidth=6;c.beginPath();c.ellipse(fx,fy,12,13,0,0,T);c.fill();c.stroke()
    if(u<1)env(c,fx-12,top(92)+8,.3,'#fff')}
  // laptop
  c.lineWidth=6;c.fillStyle=LD;c.beginPath();c.moveTo(36,214);c.lineTo(220,214);c.lineTo(232,234);c.lineTo(24,234);c.closePath();c.fill();c.stroke()
  c.fillStyle=LG;c.beginPath();c.moveTo(42,214);c.lineTo(214,214);c.lineTo(214-6*open,lt);c.lineTo(42+6*open,lt);c.closePath();c.fill();c.stroke()
  if(open>.5){c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(128,lt+(214-lt)*.45,9,0,T);c.fill();c.stroke()}
  // envelopes geysering out of the screen
  if(t>=.16&&t<.62)for(let k=0;k<7;k++){const p=(t*9+k/7)%1,d=k%2?1:-1,x=128+d*(10+p*(40+R(k)*60)),y=150-170*p+(150+H*.4)*p*p;env(c,x,y,(p*4+k)*d,EC[k%6])}
  // 999+ badge
  const bs=reset?0:ez(t,.14,.18),bp=1+.25*sin(ez(t,.14,.24)*PI)
  if(bs>.05){c.save();c.translate(190,46);c.scale(bs*bp,bs*bp);c.rotate(.12)
    c.fillStyle=RD;c.lineWidth=6;c.beginPath();c.roundRect(-42,-21,84,42,21);c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();for(let k=0;k<3;k++)dig(c,-30+k*17,-11,9,9,22);c.moveTo(22,0);c.lineTo(36,0);c.moveTo(29,-7);c.lineTo(29,7);c.stroke()
    c.restore();c.strokeStyle='#111'}
  // poof back to the start
  if(t>=.82){const s=t<.9?ez(t,.82,.9):1-ez(t,.9,1);if(s>.03)cloud(c,.3+s*.9)}
}
