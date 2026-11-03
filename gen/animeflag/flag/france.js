// France flag waving on a pole: the blue-white-red tricolor with an anime girl printed in the white stripe, golden-brown hair streaming toward the red, blue eyes, navy sailor top with a red bow, blinking as the cloth ripples
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
const HL='#5a3418',HB='#d9a35a',HS='#b57a3a',HH='#f5d797',SK='#fde4d2',SS='#f1bea4',SL='#7a4230'
const girl=bl=>{
  // hair behind: streaming locks to the right, hanging locks on the left
  S('M-56 -50C-76 0 -72 60 -66 110L66 110C72 60 76 0 56 -50Z',HS,HL)
  for(const[p,wd,f,k]of[[[46,50,80,70,100,110,134,128],34,HS,3],[[48,8,90,20,112,84,162,86],42,HS,2],[[50,-30,100,-30,124,40,174,28],46,HB,1],[[44,-62,90,-82,124,-20,172,-26],40,HB,0]])R(p,wd,f,HL,9,k)
  for(const[p,wd,k]of[[[-46,-30,-74,30,-60,96,-80,158],34,0],[[-54,0,-70,50,-56,110,-66,166],26,1]])R(p,wd,HB,HL,3,k)
  // body
  S('M-12 38L-13 76L13 76L12 38Z',SK,SL)
  S('M-13 50Q0 64 13 50L13 62Q0 72 -13 62Z',SS)
  S('M-14 70C-26 84 -60 84 -80 100L-96 200L96 200L80 100C60 84 26 84 14 70Q0 80 -14 70Z','#22306b','#111a40')
  M(()=>{S('M-14 70Q-6 88 0 108L-28 122C-46 106 -62 102 -80 100C-58 86 -26 84 -14 70Z','#fff','#111a40')
    S('M-9 84Q-4 96 1 104M-30 114C-44 104 -58 100 -70 99','',`#3b5bb5`,2.4)})
  // chest bow
  M(()=>S('M0 108C-10 94 -30 98 -26 110C-24 120 -10 116 0 108ZM-2 110L-14 136L-6 132L0 140L2 112Z','#e3303f','#7a1020',2))
  O(0,108,5,5,'#c31f30')
  // face
  S('M-50 -30L-50 6C-49 32 -24 52 0 60C24 52 49 32 50 6L50 -30Z',SK,SL)
  M(()=>O(-31,29,9,5,'rgba(255,120,130,.35)'))
  // eyes
  M(()=>{c.save();c.translate(23,6)
    if(bl)S('M-14 2Q0 12 16 2','',HL,3.6)
    else{S('M-13 -2Q-8 -13 2 -13Q12 -13 16 -2L15 8Q4 19 -12 12Z','#fff')
      c.save();c.clip();O(1,3,11.5,15,'#3f7fd6');O(1,-5,11.5,9,'#1d3f8a');O(1,4,5.5,8,'#14245a');O(2,13,7.5,4.5,'#8fd3ff');c.restore()
      S('M-14 -1Q-9 -14 2 -14Q13 -14 17 -2L20 0','',HL,4)
      S('M-4 17Q6 18 12 12','',HL,1.6)}
    c.restore()})
  if(!bl)for(const x of[-23,23]){O(x-4,0,4,4.5,'#fff');O(x+5,12,2,2,'#fff')}
  S('M-1 28L1 30','',SL,1.8)
  S('M-8 40Q0 47 8 40Q0 43 -8 40Z','#c2484f',SL,1.8)
  // crown and bangs: locks fanning from the crown down over the forehead
  S('M-60 14C-70 -44 -38 -84 2 -84C42 -84 70 -44 60 14L52 -26Q0 -40 -52 -26Z',HB,HL)
  c.save();D('M-64 100L-64 14C-72 -44 -38 -83 2 -83C42 -83 72 -44 64 14L64 100Z');c.clip()
  for(const[x,y,wd]of[[-52,12,22],[50,10,22],[-38,0,26],[40,-2,26],[-22,-4,28],[26,-6,28],[-6,-2,30],[10,-6,28]])
    R([x*.3+4,-82,x*.8,-66,x*1.04,-36,x,y],wd,HB,HL,0,0,1.8)
  for(const x of[-30,-12,14,32])R([x*.8,-70,x*.9,-64,x,-58,x*1.08,-48],7,HH)
  c.restore()
  M(()=>R([-46,-40,-60,0,-58,40,-54,84],18,HB,HL,2,1.5,2))
  M(()=>S('M-33 -19Q-24 -24 -14 -21','',HL,1.8))
  // hair bow
  c.save();c.translate(50,-64);c.rotate(.4)
  M(()=>S('M0 0C-8 -16 -26 -14 -24 0C-26 14 -8 16 0 0ZM-2 2L-10 20L-3 18L1 24L2 4Z','#e3303f','#7a1020',2))
  M(()=>S('M-6 -3Q-14 -6 -18 0','',`#a3162a`,1.6))
  O(0,0,5,6,'#c31f30');c.restore()
}
const flag=bl=>{
  c.fillStyle='#0055a4';c.fillRect(0,0,W/3,H)
  c.fillStyle='#fff';c.fillRect(W/3,0,W/3,H)
  c.fillStyle='#ef4135';c.fillRect(W*2/3,0,W/3,H)
  c.save();c.translate(W/2,82);c.scale(.6,.6);girl(bl);c.restore()
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
