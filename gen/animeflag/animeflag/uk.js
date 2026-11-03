// United Kingdom flag waving on a pole: the Union Jack (blue field, red and white crosses and saltires) with an anime girl peeking over its top edge from behind, auburn twin tails with red bows streaming in the wind, green eyes, hands gripping the edge, tilting her head and blinking as the cloth ripples
export const frames=14,delay=85,rim=2
const P=Math.PI*2,W=232,H=116,X=17,Y=126,N={M:2,L:2,Q:4,C:6},G={M:'moveTo',L:'lineTo',Q:'quadraticCurveTo',C:'bezierCurveTo'}
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
const HL='#4a1a0a',HB='#b5542b',HS='#8a3b1c',HH='#e48a52',SK='#fde6d6',SS='#f3c2aa',SL='#7a4230',RD='#c8102e'
const bow=(x,y,r)=>{c.save();c.translate(x,y);c.rotate(r)
  M(()=>S('M0 0C-8 -16 -26 -14 -24 0C-26 14 -8 16 0 0ZM-2 2L-10 20L-3 18L1 24L2 4Z',RD,'#5e0612',2))
  M(()=>S('M-6 -3Q-14 -6 -18 0','','#8a0a1e',1.6));O(0,0,5,6,'#a50c22');c.restore()}
const girl=bl=>{
  // twin tails streaming outward, then the head
  for(const s of[-1,1]){const p=[s*58,-50,s*104,-60,s*(s>0?112:96),10,s*(s>0?150:118),66]
    R(p,40,HS,HL,9,s>0?0:2,2.4);R(p.map((v,k)=>k%2?v+3:v*.97),24,HB,'',9,s>0?0:2)
    for(const o of[-6,6])R(p.map((v,k)=>k%2?v+o*.4:v*.97+o),3,HH,'',9,s>0?0:2)}
  S('M-56 -50C-74 0 -70 40 -64 90L64 90C70 40 74 0 56 -50Z',HS,HL)
  S('M-12 30L-13 90L13 90L12 30Z',SK,SL)
  S('M-13 50Q0 64 13 50L13 62Q0 72 -13 62Z',SS)
  S('M-50 -44Q0 -70 50 -44L50 6C49 32 24 52 0 60C-24 52 -49 32 -50 6Z',SK,SL)
  M(()=>O(-31,30,9,5,'rgba(255,110,120,.35)'))
  M(()=>{c.save();c.translate(23,6)
    if(bl)S('M-14 2Q0 12 16 2','',HL,3.6)
    else{S('M-13 -2Q-8 -13 2 -13Q12 -13 16 -2L15 8Q4 19 -12 12Z','#fff')
      c.save();c.clip();O(1,3,11.5,15,'#3a8a4a');O(1,-5,11.5,9,'#1b4a26');O(1,4,5.5,8,'#0e2a14');O(2,13,7.5,4.5,'#9fe0a0');c.restore()
      S('M-14 -1Q-9 -14 2 -14Q13 -14 17 -2L20 0','',HL,4)
      S('M-4 17Q6 18 12 12','',HL,1.6)}
    c.restore()})
  if(!bl)for(const x of[-23,23]){O(x-4,0,4,4.5,'#fff');O(x+5,12,2,2,'#fff')}
  M(()=>S('M-33 -20Q-24 -26 -13 -23','',HL,2))
  S('M-1 28L1 30','',SL,1.8)
  S('M-10 39Q0 41 10 39Q8 49 0 49Q-8 49 -10 39Z','#b8404c',SL,1.8);S('M-5 46Q0 43 5 46Q0 49 -5 46Z','#f08a94')
  // bangs
  c.save();D('M-64 100L-64 14C-72 -44 -38 -83 2 -83C42 -83 72 -44 64 14L64 100Z');c.clip()
  S('M-62 14C-72 -44 -38 -84 2 -84C42 -84 72 -44 62 14L52 -26Q0 -40 -52 -26Z',HB,HL)
  for(const[x,y,wd]of[[-52,12,22],[50,10,22],[-38,0,26],[40,-2,26],[-22,-6,28],[26,-8,28],[-6,-4,30],[10,-8,28]])
    R([x*.3+4,-82,x*.8,-66,x*1.04,-36,x,y],wd,HB,HL,0,0,1.8)
  for(const x of[-30,-12,14,32])R([x*.8,-70,x*.9,-64,x,-58,x*1.08,-48],7,HH)
  c.restore()
  M(()=>R([-48,-36,-62,0,-58,40,-54,84],18,HB,HL,2,1.5,2))
  bow(-58,-50,-.5);bow(58,-50,.5)
}
const flag=()=>{c.save();c.scale(W/60,H/30);c.lineCap='butt'
  c.fillStyle='#012169';c.fillRect(0,0,60,30)
  D('M0 0L60 30M60 0L0 30');c.strokeStyle='#fff';c.lineWidth=6;c.stroke()
  c.save();D('M30 15L60 15L60 30ZM30 15L30 30L0 30ZM30 15L0 15L0 0ZM30 15L30 0L60 0Z');c.clip()
  D('M0 0L60 30M60 0L0 30');c.strokeStyle=RD;c.lineWidth=4;c.stroke();c.restore()
  D('M30 0L30 30M0 15L60 15');c.strokeStyle='#fff';c.lineWidth=10;c.stroke();c.strokeStyle=RD;c.lineWidth=6;c.stroke();c.restore()}
// fingers curled over the top edge, back of the hand behind it
const hand=(x,y,r)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(.85,.85)
  S('M-15 2C-16 -12 16 -12 15 2Z',SK,SL,2.4)
  for(const[f,e]of[[SL,2.6],[SK,0]]){c.strokeStyle=f;c.lineWidth=6.4+e;c.lineCap='round';c.beginPath()
    for(const a of[-9.5,-3.2,3.2,9.5]){c.moveTo(a,-1);c.lineTo(a*1.02,a*a>50?8:10)}c.stroke()}
  c.restore()}
export default(C,T,i)=>{
  c=C;t=T;const bl=i==6||i==7,k=x=>(x/W)**.75,f=x=>P*(x/150-t),dy=x=>6*k(x)*Math.sin(f(x))
  c.save();c.translate(133,79);c.translate(0,43);c.rotate(Math.sin(P*t)*.05);c.translate(0,-43);c.scale(.72,.72);girl(bl);c.restore()
  for(let x=0;x<W;x+=2){
    const d=dy(x),l=k(x)*Math.cos(f(x))
    c.save();c.beginPath();c.rect(X+x,0,2,256);c.clip();c.translate(X,Y+d)
    c.save();c.beginPath();c.rect(0,0,W,H);c.clip();flag()
    c.fillStyle=l>0?`rgba(255,255,255,${.13*l})`:`rgba(0,0,40,${-.13*l})`;c.fillRect(0,0,W,H);c.restore()
    c.lineWidth=3;c.strokeStyle='#111';c.strokeRect(0,0,W,H);c.restore()
  }
  for(const x of[56,176])hand(X+x,Y+dy(x),Math.atan((dy(x+4)-dy(x-4))/8))
  c.lineWidth=2.5;c.strokeStyle='#111'
  c.fillStyle='#c9ced8';c.fillRect(9,116,6,132);c.strokeRect(9,116,6,132)
  c.beginPath();c.arc(12,111,6,0,P);c.fillStyle='#f2c14e';c.fill();c.stroke()
}
