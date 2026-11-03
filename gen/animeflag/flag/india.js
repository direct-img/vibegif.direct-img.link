// India flag waving on a pole: saffron-white-green tricolor with the navy 24-spoke Ashoka Chakra kept clear in the center, and an anime girl printed at the hoist side with long black hair in a side braid with white jasmine flowers, brown eyes, a navy kurta with gold trim and a pink dupatta, blinking and smiling as the cloth ripples
export const frames=16,delay=80,rim=2
const P=Math.PI*2,W=232,H=155,X=17,Y=46,N={M:2,L:2,Q:4,C:6},G={M:'moveTo',L:'lineTo',Q:'quadraticCurveTo',C:'bezierCurveTo'}
let c,t
const D=s=>{c.beginPath();s.replace(/([MLQCZ])([^MLQCZ]*)/g,(_,k,a)=>{const n=(a.match(/-?[\d.]+(e-?\d+)?/g)||[]).map(Number);if(k=='Z')c.closePath();else for(let j=0;j<n.length;j+=N[k])c[G[k]](...n.slice(j,j+N[k]))})}
const S=(d,f,l,w=2.6)=>{D(d);if(f){c.fillStyle=f;c.fill()}if(l){c.strokeStyle=l;c.lineWidth=w;c.stroke()}}
const M=(f)=>{f();c.save();c.scale(-1,1);f(-1);c.restore()}
const O=(x,y,rx,ry,f)=>{c.beginPath();c.ellipse(x,y,rx,ry,0,0,P);c.fillStyle=f;c.fill()}
// ribbon along a cubic bezier, tapering to a point, with a travelling wave toward the tip (for hair locks)
const Bz=(p,u)=>{const a=(1-u)**3,b=3*(1-u)**2*u,d=3*(1-u)*u*u,e=u**3;return[a*p[0]+b*p[2]+d*p[4]+e*p[6],a*p[1]+b*p[3]+d*p[5]+e*p[7]]}
const R=(p,w,f,l,wv=0,ph=0,lw=2)=>{
  const A=[],Z=[]
  for(let j=0;j<=24;j++){
    const u=j/24,[x,y]=Bz(p,u),[a,b]=Bz(p,Math.max(0,u-.02)),[d,e]=Bz(p,Math.min(1,u+.02)),m=Math.hypot(d-a,e-b)||1,h=w/2*(1-u)**.8,o=Math.sin(P*t-u*4+ph)*wv*u
    A.push([x-(e-b)/m*h,y+(d-a)/m*h+o]);Z.unshift([x+(e-b)/m*h,y-(d-a)/m*h+o])}
  c.beginPath();[...A,...Z].forEach(([x,y],j)=>j?c.lineTo(x,y):c.moveTo(x,y));c.closePath()
  c.fillStyle=f;c.fill();if(l){c.strokeStyle=l;c.lineWidth=lw;c.stroke()}
}
const HL='#0d0a12',HB='#2e2537',HS='#1d1724',HH='#5d5574',SK='#d49a6f',SS='#b97c52',SL='#5e3119'
// braid: overlapping lobes along a bezier, swaying toward the tip
const BR=(p,n,w)=>{for(let j=n;j>=0;j--){
  const u=j/n,[x,y]=Bz(p,u),[a,b]=Bz(p,Math.min(1,u+.02)),o=Math.sin(P*t-u*3)*5*u,h=w*(1-u*.35)
  c.save();c.translate(x+o,y);c.rotate(Math.atan2(b-y,a-x)+(j%2?.5:-.5))
  c.beginPath();c.ellipse(0,0,h*.8,h*.42,0,0,P);c.fillStyle=j%2?HB:HS;c.fill();c.strokeStyle=HL;c.lineWidth=1.8;c.stroke();c.restore()}}
const bp=u=>{const[x,y]=Bz(BP,u);return[x+Math.sin(P*t-u*3)*5*u,y]},BP=[-46,10,-72,46,-52,90,-60,128]
const fl=(x,y,r)=>{for(let k=0;k<5;k++)O(x+Math.cos(k*P/5)*r*.55,y+Math.sin(k*P/5)*r*.55,r*.5,r*.5,'#fff');O(x,y,r*.28,r*.28,'#f3d36b')}
const girl=bl=>{
  // long hair behind
  S('M-56 -50C-78 0 -76 80 -78 200L78 200C76 80 78 0 56 -50Z',HS,HL)
  // body: navy kurta with gold neckline
  S('M-12 30L-13 80L13 80L12 30Z',SK,SL)
  S('M-13 50Q0 64 13 50L13 62Q0 72 -13 62Z',SS)
  S('M-14 70C-26 84 -60 84 -80 100L-96 200L96 200L80 100C60 84 26 84 14 70Q0 98 -14 70Z','#1f2d78','#0b1240')
  S('M-15 71Q0 99 15 71','','#e6b422',5);S('M-15 71Q0 99 15 71','','#8a5a0a',1.2)
  for(let k=-2;k<=2;k++)O(k*7,92-k*k*2.2,2,2,'#ffd84a')
  S('M28 78C50 82 70 90 86 102L78 200L38 200C44 150 42 110 28 78Z','#d6407a','#5e0f33',2.2)
  S('M33 84C42 120 46 160 44 200','','#e6b422',3)
  // face
  S('M-50 -44Q0 -70 50 -44L50 6C49 32 24 52 0 60C-24 52 -49 32 -50 6Z',SK,SL)
  M(()=>O(-31,30,9,5,'rgba(220,80,80,.3)'))
  M(()=>{c.save();c.translate(23,6)
    if(bl)S('M-14 2Q0 12 16 2','',HL,3.6)
    else{S('M-13 -2Q-8 -13 2 -13Q12 -13 16 -2L15 8Q4 19 -12 12Z','#fff')
      c.save();c.clip();O(1,3,11.5,15,'#7a4524');O(1,-5,11.5,9,'#3a1c0c');O(1,4,5.5,8,'#1e0e06');O(2,13,7.5,4.5,'#c98f55');c.restore()
      S('M-14 -1Q-9 -14 2 -14Q13 -14 17 -2L20 0','',HL,4)
      S('M-4 17Q6 18 12 12','',HL,1.6)}
    c.restore()})
  if(!bl)for(const x of[-23,23]){O(x-4,0,4,4.5,'#fff');O(x+5,12,2,2,'#fff')}
  M(()=>S('M-33 -19Q-24 -25 -13 -22','',HL,2.2))
  S('M-1 28L1 30','',SL,1.8)
  S('M-10 39Q0 41 10 39Q8 50 0 50Q-8 50 -10 39Z','#a63a3a',SL,1.8);S('M-5 47Q0 44 5 47Q0 50 -5 47Z','#e8858a')
  // center-parted bangs
  c.save();D('M-64 100L-64 14C-72 -44 -38 -83 2 -83C42 -83 72 -44 64 14L64 100Z');c.clip()
  S('M-62 14C-72 -44 -38 -84 2 -84C42 -84 72 -44 62 14L42 -38Q2 -58 -38 -38Z',HB,HL)
  for(const[x,y,wd]of[[-54,14,22],[56,14,22],[-44,-2,26],[46,-2,26],[-30,-14,26],[32,-14,26],[-14,-26,22],[16,-26,22]])
    R([2+x*.1,-82,x*.5,-76,x*.95,-52,x,y],wd,HB,HL,0,0,1.8)
  for(const x of[-30,-14,16,32])R([x*.7,-72,x*.85,-66,x,-60,x*1.1,-50],6,HH)
  c.restore()
  // side lock and braid over her shoulder
  R([48,-40,62,0,60,50,56,96],20,HB,HL,2,1.5,2)
  R([-48,-40,-60,-10,-58,10,-50,26],22,HB,HL,0,0,2)
  BR(BP,11,26)
  for(const u of[.14,.3,.46,.62])fl(...bp(u),7.5)
  const[tx,ty]=bp(1);c.save();c.translate(tx,ty+8);c.rotate(Math.sin(P*t-2.4)*.2)
  S('M-5 0L5 0L9 26L-9 26Z','#d33b2f','#6a1410',1.6);O(0,0,6,5,'#e6b422');S('M-4 26L-6 32M0 26L0 33M4 26L6 32','','#e6b422',2);c.restore()
}
const chakra=()=>{c.save();c.translate(W/2,H/2);c.scale(H/150,H/150)
  O(0,0,20,20,'#008');O(0,0,17.5,17.5,'#fff');O(0,0,3.5,3.5,'#008')
  for(let k=0;k<24;k++){c.save();c.rotate(k*P/24);S('M0 17.5L.6 7L0 2L-.6 7Z','#008');c.rotate(P/48);O(17.5,0,.875,.875,'#008');c.restore()}
  c.restore()}
const flag=bl=>{
  c.fillStyle='#f93';c.fillRect(0,0,W,H/3)
  c.fillStyle='#fff';c.fillRect(0,H/3,W,H/3)
  c.fillStyle='#128807';c.fillRect(0,H*2/3,W,H/3)
  chakra()
  c.save();c.translate(50,64);c.scale(.55,.55);girl(bl);c.restore()
}
export default(C,T,i)=>{
  c=C;t=T;const bl=i==6||i==7,k=x=>(x/W)**.75,f=x=>P*(x/150-t)
  for(let x=0;x<W;x+=2){
    const d=6*k(x)*Math.sin(f(x)),l=k(x)*Math.cos(f(x))
    c.save();c.beginPath();c.rect(X+x,0,2,256);c.clip();c.translate(X,Y+d)
    c.save();c.beginPath();c.rect(0,0,W,H);c.clip();flag(bl)
    c.fillStyle=l>0?`rgba(255,255,255,${.13*l})`:`rgba(0,0,40,${-.13*l})`;c.fillRect(0,0,W,H);c.restore()
    c.lineWidth=3;c.strokeStyle='#111';c.strokeRect(0,0,W,H);c.restore()
  }
  c.lineWidth=2.5;c.strokeStyle='#111'
  c.fillStyle='#c9ced8';c.fillRect(9,36,6,206);c.strokeRect(9,36,6,206)
  c.beginPath();c.arc(12,31,6,0,P);c.fillStyle='#f2c14e';c.fill();c.stroke()
}
