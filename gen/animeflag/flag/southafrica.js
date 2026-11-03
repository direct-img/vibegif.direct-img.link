// South Africa flag waving on a pole: the red, blue, green Y with gold and white borders and black hoist triangle, with an anime girl peeking up from behind the green band at the fly, big curly dark hair with a gold beaded headband popping out over the top edge, gold hoop earrings, waving hello and blinking as the cloth ripples
export const frames=16,delay=80,rim=2
const P=Math.PI*2,W=232,H=W*2/3,X=17,Y=62,N={M:2,L:2,Q:4,C:6},G={M:'moveTo',L:'lineTo',Q:'quadraticCurveTo',C:'bezierCurveTo'}
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
const HL='#0b0605',HB='#2c1b14',HS='#1b100b',HH='#5e3d2c',SK='#8d5a3b',SS='#71442a',SL='#3a1e10',GD='#ffb81c'
const Yp='M0 0L4.5 3L0 6M4.5 3L9 3'
const band=x=>{c.save();c.scale(W/9,H/6);c.lineCap='butt';c.lineJoin='miter'
  for(const[s,w]of[['#fff',2],['#007749',1.2]]){c.beginPath();c.moveTo(x,3);c.lineTo(9.1,3);c.strokeStyle=s;c.lineWidth=w;c.stroke()}c.restore()}
const flag=()=>{c.save();c.scale(W/9,H/6);c.lineCap='butt';c.lineJoin='miter'
  c.fillStyle='#001489';c.fillRect(0,0,9,6);c.fillStyle='#e03c31';c.fillRect(0,0,9,3)
  D(Yp);c.strokeStyle='#fff';c.lineWidth=2;c.stroke()
  c.save();D('M0 0L4.5 3L0 6Z');c.clip();c.fillStyle=GD;c.fillRect(0,0,5,6);S('M0 1.2018L2.697 3L0 4.798Z','#000');c.restore()
  D(Yp);c.strokeStyle='#007749';c.lineWidth=1.2;c.stroke();c.restore()}
const FG=[[-7.5,-22,-10,-38],[-2.5,-24,-3.5,-43],[2.5,-24,3.5,-42],[7.5,-22,10,-36],[-8,-10,-18,-21]]
const hand=()=>{for(const[f,e]of[[SL,2.6],[SK,0]]){c.strokeStyle=c.fillStyle=f;c.lineWidth=6+e;c.lineCap='round'
  c.beginPath();for(const[a,b,x,y]of FG){c.moveTo(a,b);c.lineTo(x,y)}c.stroke()
  c.beginPath();c.ellipse(0,-13,11+e/2,12+e/2,0,0,P);c.fill()}
  S('M-4 -6Q0 -3 4 -6','',SL,1.4)}
const girl=bl=>{
  // big curly hair: scalloped silhouette with curl marks
  let d=''
  for(let k=0;k<=26;k++){const a=k/26*P,b=(k-.5)/26*P,x=Math.cos(a)*88,y=-34+Math.sin(a)*76
    d+=k?`Q${Math.cos(b)*96} ${-34+Math.sin(b)*83} ${x} ${y}`:`M${x} ${y}`}
  S(d+'Z',HB,HL,2.4)
  for(let k=0;k<40;k++){const a=k*2.4,r=30+(k*17)%54,x=Math.cos(a)*r,y=-34+Math.sin(a)*r*.86
    if(y<-60||Math.abs(x)>56)S(`M${x-5} ${y+2}Q${x} ${y-6} ${x+5} ${y+2}`,'',k%2?HH:HS,2.2)}
  // neck, shoulders, beaded necklace
  S('M-12 30L-13 100L13 100L12 30Z',SK,SL)
  S('M-13 50Q0 64 13 50L13 62Q0 72 -13 62Z',SS)
  S('M-14 76C-26 86 -60 88 -80 100L-90 140L90 140L80 100C60 88 26 86 14 76Q0 84 -14 76Z','#fff',SL)
  for(let k=-5;k<=5;k++)O(k*3.6,74+k*k*.32,2.1,2.1,['#e03c31','#001489','#007749',GD,'#000','#fff'][(k+5)%6])
  // ears with gold hoops
  M(()=>{S('M-48 -6Q-58 -8 -58 4Q-57 16 -47 16Z',SK,SL,2);S('M-50 -1Q-54 4 -50 10','',SL,1.4);c.beginPath();c.arc(-53,24,6.5,0,P);c.strokeStyle='#8a5a00';c.lineWidth=3.6;c.stroke();c.strokeStyle=GD;c.lineWidth=2;c.stroke()})
  // face
  S('M-50 -40Q0 -62 50 -40L50 6C49 32 24 52 0 60C-24 52 -49 32 -50 6Z',SK,SL)
  M(()=>O(-31,30,9,5,'rgba(230,80,80,.28)'))
  M(()=>{c.save();c.translate(23,6)
    if(bl)S('M-14 2Q0 12 16 2','',HL,3.6)
    else{S('M-13 -2Q-8 -13 2 -13Q12 -13 16 -2L15 8Q4 19 -12 12Z','#fff')
      c.save();c.clip();O(1,3,11.5,15,'#8a5428');O(1,-5,11.5,9,'#3a1e0c');O(1,4,5.5,8,'#1a0c04');O(2,13,7.5,4.5,'#d49a52');c.restore()
      S('M-14 -1Q-9 -14 2 -14Q13 -14 17 -2L20 0','',HL,4)
      S('M-4 17Q6 18 12 12','',HL,1.6)}
    c.restore()})
  if(!bl)for(const x of[-23,23]){O(x-4,0,4,4.5,'#fff');O(x+5,12,2,2,'#fff')}
  M(()=>S('M-33 -20Q-24 -26 -13 -23','',HL,2.4))
  S('M-1.5 27Q0 30 2 27','',SL,1.8)
  S('M-12 38Q0 41 12 38Q10 53 0 53Q-10 53 -12 38Z','#6e1c24',SL,1.8);S('M-10 39Q0 42 10 39L9 42Q0 44 -9 42Z','#fff');S('M-6 49Q0 45 6 49Q0 52 -6 49Z','#e0707a')
  // curly hairline over the forehead
  d='M-54 -20'
  for(let k=1;k<=9;k++){const a=Math.PI*(1+k/9),x=Math.cos(a)*54,y=-22+Math.sin(a)*30;d+=`Q${(Math.cos(a-.17)*62).toFixed(1)} ${(-22+Math.sin(a-.17)*38).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`}
  S(d+'L54 -40Q0 -90 -54 -40Z',HB,HL,2)
  // gold beaded headband
  const hb=[-62,-30,-60,-76,-30,-86,0,-86],hc=[0,-86,30,-86,60,-76,62,-30]
  for(const p of[hb,hc]){const q=`M${p.slice(0,2)}C${p.slice(2)}`.replace(/,/g,' ');S(q,'','#7a4a00',10);S(q,'',GD,7)}
  for(let k=1;k<10;k++){const[x,y]=k<5?Bz(hb,k/5):Bz(hc,(k-5)/5);O(x,y,2.4,2.4,['#e03c31','#007749','#001489','#fff','#000'][k%5])}
  // waving hand on a raised forearm
  const a=Math.sin(P*t*2)*.28
  c.save();c.translate(86,22);c.rotate(a);c.scale(1.25,1.25)
  S('M-12 90L-6 0L8 0L12 90Z',SK,SL,2.4);S('M-6 4Q1 8 8 4','',SL,1.4)
  hand();c.restore()
}
export default(C,T,i)=>{
  c=C;t=T;const bl=i==6||i==7,k=x=>(x/W)**.75,f=x=>P*(x/150-t)
  for(let x=0;x<W;x+=2){
    const d=6*k(x)*Math.sin(f(x)),l=k(x)*Math.cos(f(x))
    c.save();c.beginPath();c.rect(X+x,0,2,256);c.clip();c.translate(X,Y+d)
    c.save();c.beginPath();c.rect(0,0,W,H);c.clip();flag();c.restore()
    c.lineWidth=3;c.strokeStyle='#111';c.strokeRect(0,0,W,H)
    c.save();c.beginPath();c.rect(0,-60,W,116);c.clip();c.translate(168,14);c.scale(.54,.54);girl(bl);c.restore()
    band(130*9/W)
    c.globalCompositeOperation='source-atop';c.fillStyle=l>0?`rgba(255,255,255,${.13*l})`:`rgba(0,0,40,${-.13*l})`;c.fillRect(-9,-60,W+18,H+70);c.restore()
  }
  c.lineWidth=2.5;c.strokeStyle='#111'
  c.fillStyle='#c9ced8';c.fillRect(9,52,6,192);c.strokeRect(9,52,6,192)
  c.beginPath();c.arc(12,47,6,0,P);c.fillStyle='#f2c14e';c.fill();c.stroke()
}
