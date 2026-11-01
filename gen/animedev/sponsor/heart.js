// freckled ginger anime girl hugging a big pink Sponsor heart that beats lub-dub, little hearts floating up, one foot kicking
export const frames=24,delay=80,rim=3
const P=Math.PI,{sin,cos,min,max,abs}=Math,L='#2b1d26'
const F=(c,f,col,w=3.5)=>{c.beginPath();f();c.fillStyle=col;c.fill();if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const T=(c,p,w,col)=>{c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))q.length>2?c.quadraticCurveTo(...q):c.lineTo(...q)
  c.lineWidth=w+7;c.strokeStyle=L;c.stroke();c.lineWidth=w;c.strokeStyle=col;c.stroke()}
const O=(c,x,y,a,b,col,w=3.5,r=0)=>F(c,()=>c.ellipse(x,y,a,b,r,0,2*P),col,w)
const hp=(c,x,y,s)=>{c.moveTo(x,y+.9*s);c.bezierCurveTo(x-.35*s,y+.6*s,x-s,y+.25*s,x-s,y-.25*s);c.bezierCurveTo(x-s,y-.78*s,x-.4*s,y-.98*s,x,y-.5*s)
  c.bezierCurveTo(x+.4*s,y-.98*s,x+s,y-.78*s,x+s,y-.25*s);c.bezierCurveTo(x+s,y+.25*s,x+.35*s,y+.6*s,x,y+.9*s)}
const bangs=(c,p,col)=>F(c,()=>{c.moveTo(...p[0]);c.bezierCurveTo(52,-44,26,-60,0,-60);c.bezierCurveTo(-26,-60,-52,-44,p.at(-1)[0],p.at(-1)[1])
  for(let k=p.length-1;k>0;k--){const[a,b]=p[k],[x,y]=p[k-1];y>b?c.quadraticCurveTo(a,b+(y-b)*.8,x,y):c.quadraticCurveTo(x,y+(b-y)*.45,x,y)}},col)
const SK='#ffe6d6',HR='#f2873a',HD='#c8601c',HL='#ffc28f',PK='#ea4aaa',PL='#ff8fd0',SH='#f6f1e7',DN='#3f62a8'
// heartbeat: two lub-dubs per loop
const beat=t=>{const u=t*2%1;return .08*max(0,sin(min(1,u/.15)*P))+.05*max(0,sin(min(1,max(0,u-.22)/.15)*P))}
export default(c,t)=>{
  c.lineJoin=c.lineCap='round'
  const b=beat(t),hx=146,hy=152,s=76*(1+b),sq=b*14,kk=sin(t*4*P)
  // legs: one planted, one kicking happily behind the heart
  T(c,[[112,196],[110,232]],12,DN);O(c,108,237,12,6,'#f0546a')
  const fx=212+kk*7,fy=206-abs(kk)*10
  T(c,[[150,196],[186,214,fx,fy]],12,DN);O(c,fx+3,fy-3,7,11,'#f0546a',3.5,-.5)
  // long back hair, shoulders and striped shirt behind the heart
  c.save();c.translate(92,84);c.rotate(.26)
  F(c,()=>{c.moveTo(-40,-18);c.bezierCurveTo(-60,20,-56,58,-44,80);c.lineTo(30,80);c.bezierCurveTo(54,58,60,20,40,-18);c.closePath()},HD)
  c.restore()
  F(c,()=>{c.moveTo(60,140);c.quadraticCurveTo(90,116,128,126);c.lineTo(132,186);c.lineTo(70,186);c.closePath()},SH)
  // the heart, with its word
  F(c,()=>hp(c,hx,hy,s),PK,4.5)
  c.save();c.beginPath();hp(c,hx,hy,s);c.clip();F(c,()=>hp(c,hx-s*.07,hy-s*.09,s*.86),'#f466bd',0);c.restore()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(hx+s*.5,hy-s*.3,s*.28,-2.4,-1.5);c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(hx+s*.8,hy-s*.1,3,0,2*P);c.fill()
  c.save();c.translate(hx+8,hy+14);c.rotate(-.12);c.scale(1+b,1+b);c.font='bold 22px DejaVu Sans';c.textAlign='center';c.textBaseline='middle'
  c.lineWidth=5;c.strokeStyle='#a3166e';c.strokeText('Sponsor',0,0);c.fillStyle='#fff';c.fillText('Sponsor',0,0);c.restore()
  // head resting on top of the heart
  c.save();c.translate(92,84);c.rotate(.26)
  F(c,()=>{c.moveTo(-37,-8);c.bezierCurveTo(-38,22,-18,41,0,43);c.bezierCurveTo(18,41,38,22,37,-8);c.bezierCurveTo(37,-42,-37,-42,-37,-8)},'#ffe6d6')
  // blissful closed eyes with lashes, freckles, blush that flushes on each beat, cat smile
  c.strokeStyle=L;for(const s of[-1,1]){c.lineWidth=3.6;c.beginPath();c.moveTo(s*17-10,12);c.quadraticCurveTo(s*17,1,s*17+10,12);c.stroke()
    c.lineWidth=2.4;c.beginPath();c.moveTo(s*27,11);c.lineTo(s*31,8);c.stroke()}
  c.fillStyle='rgba(250,100,140,.5)';for(const s of[-1,1]){c.beginPath();c.ellipse(s*24,24,8+b*18,4+b*7,0,0,2*P);c.fill()}
  c.fillStyle='#c4703f';for(const s of[-1,1])for(const[a,d]of[[19,21],[25,19],[22,26],[28,24]]){c.beginPath();c.arc(s*a,d,1.2,0,2*P);c.fill()}
  c.beginPath();c.moveTo(-7,30);c.quadraticCurveTo(-3.5,35,0,31);c.quadraticCurveTo(3.5,35,7,30);c.lineWidth=2.6;c.strokeStyle=L;c.stroke()
  F(c,()=>{c.moveTo(36,-14);c.quadraticCurveTo(46,14,42,40);c.quadraticCurveTo(37,30,32,28);c.quadraticCurveTo(35,10,29,-6)},HR,3)
  bangs(c,[[45,4],[39,-12],[35,4],[30,-18],[18,-2],[14,-20],[0,0],[-4,-22],[-14,-4],[-20,-20],[-32,2],[-38,-12],[-45,4]],HR)
  c.strokeStyle=HL;c.lineWidth=4;for(const a of[-2.5,-2.15,-1.3])c.beginPath(),c.arc(0,-6,44,a,a+.22),c.stroke()
  c.strokeStyle='#a5541d';c.lineWidth=2.4;for(const s of[-1,1]){c.beginPath();c.moveTo(s*10,-5);c.quadraticCurveTo(s*17,-9,s*24,-6);c.stroke()}
  for(const s of[-1,1])F(c,()=>{c.moveTo(26,-42);c.lineTo(26+s*14,-50);c.lineTo(26+s*12,-34);c.closePath()},'#4fbf73',2.6)
  O(c,26,-42,4,4,'#4fbf73',2.6)
  c.restore()
  // arms squeezing around the heart: one around the side, one over the top
  T(c,[[66,142],[54-sq*.3,178,82+sq*.5,194-sq*.3]],12,SH);O(c,84+sq*.5,194-sq*.3,8,7.5,SK,3)
  T(c,[[118,126],[156,92-sq*.3,198-sq*.6,104+sq*.2]],12,SH);O(c,199-sq*.6,107+sq*.2,8,8,SK,3)
  // side braid falling over her shoulder
  for(let j=0;j<5;j++)O(c,52+j*1.5+(j%2?2:-2),124+j*12,8-j*.5,9,j%2?HR:'#f79a55',3,(j%2?.5:-.5))
  F(c,()=>{c.moveTo(56,188);c.lineTo(52,204);c.lineTo(60,198);c.lineTo(67,203);c.lineTo(63,188)},HR,2.5)
  O(c,60,186,4.5,4,'#4fbf73',2.5)
  // little hearts floating up and away
  for(let j=0;j<5;j++){const p=(t*2+j/5)%1,x=[164,214,190,228,176][j]+sin(p*2*P+j)*5,y=74-p*52+(j%2)*8,a=sin(p*P)
    if(a>.05){c.globalAlpha=min(1,a*1.8);F(c,()=>hp(c,x,y,(7+j%3*2)*min(1,p*5)),j%2?PL:PK,2.5);c.globalAlpha=1}}
}
