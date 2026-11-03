// Israel flag waving on a pole: white field with two blue stripes and the blue Star of David kept clear in the center, and an anime girl printed in the white field at the hoist side, long dark-brown hair with a blue Alice band, hazel eyes glancing toward the star, white top with a blue collar, blinking and smiling as the cloth ripples
export const frames=16,delay=80,rim=2
const P=Math.PI*2,W=232,H=169,X=17,Y=40,N={M:2,L:2,Q:4,C:6},G={M:'moveTo',L:'lineTo',Q:'quadraticCurveTo',C:'bezierCurveTo'}
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
const HL='#2b160c',HB='#5b3520',HS='#3f2314',HH='#8a5a3a',SK='#f6d6bb',SS='#e2b393',SL='#7a4a30',BL='#0038b8'
const girl=bl=>{
  const g=2.5
  // wavy shoulder-length hair behind
  S('M-58 -50C-76 0 -66 40 -64 80L64 80C66 40 76 0 58 -50Z',HS,HL)
  for(const[x,k]of[[-1,0],[1,2]])for(const[a,b,wd]of[[50,146,28],[38,132,24]]){const q=x>0?.6:1;R([x*a,-30,x*(a+22*q),30,x*(a-18*q),80,x*(a+12*q),b],wd,k?HS:HB,HL,3,k+a/20)}
  // body: white top with blue collar
  S('M-12 30L-13 80L13 80L12 30Z',SK,SL)
  S('M-13 50Q0 64 13 50L13 62Q0 72 -13 62Z',SS)
  S('M-14 70C-26 84 -52 86 -70 100L-80 200L80 200L70 100C52 86 26 84 14 70Q0 86 -14 70Z','#fff','#2a3a66')
  M(()=>S('M-14 70Q-8 84 0 86L-6 100L-30 92Q-22 82 -14 70Z',BL,'#00215e',2))
  // face
  S('M-50 -44Q0 -70 50 -44L50 6C49 32 24 52 0 60C-24 52 -49 32 -50 6Z',SK,SL)
  M(()=>O(-31,30,9,5,'rgba(255,110,120,.32)'))
  M(s=>{c.save();c.translate(23,6);const h=g*(s||1)
    if(bl)S('M-14 2Q0 12 16 2','',HL,3.6)
    else{S('M-13 -2Q-8 -13 2 -13Q12 -13 16 -2L15 8Q4 19 -12 12Z','#fff')
      c.save();c.clip();O(1+h,3,11.5,15,'#7a7a3a');O(1+h,-5,11.5,9,'#3e3a18');O(1+h,4,5.5,8,'#1f1c0a');O(2+h,13,7.5,4.5,'#b9b46a');c.restore()
      S('M-14 -1Q-9 -14 2 -14Q13 -14 17 -2L20 0','',HL,4)
      S('M-4 17Q6 18 12 12','',HL,1.6)}
    c.restore()})
  if(!bl)for(const x of[-23,23]){O(x-4+g,0,4,4.5,'#fff');O(x+5+g,12,2,2,'#fff')}
  M(()=>S('M-33 -20Q-24 -26 -13 -23','',HL,2))
  S('M-1 28L1 30','',SL,1.8)
  S('M-9 40Q0 46 9 39Q2 44 -9 40Z','#c4505a',SL,1.8)
  // side-swept bangs
  c.save();D('M-64 100L-64 14C-72 -44 -38 -83 2 -83C42 -83 72 -44 64 14L64 100Z');c.clip()
  S('M-62 14C-72 -44 -38 -84 2 -84C42 -84 72 -44 62 14L52 -26Q0 -40 -52 -26Z',HB,HL)
  for(const[x,y,wd]of[[56,12,22],[-52,10,22],[42,-4,26],[-40,-8,26],[24,-12,28],[-22,-16,28],[2,-16,30]])
    R([-18+x*.15,-82,x*.4-14,-74,x*.85-8,-46,x,y],wd,HB,HL,0,0,1.8)
  for(const x of[-28,-10,12,30])R([x*.8-4,-70,x*.9-2,-64,x,-58,x*1.08+2,-48],6,HH)
  c.restore()
  // Alice band, then wavy side locks
  S('M-60 -26C-60 -64 -34 -82 0 -82C34 -82 60 -64 60 -26','','#00215e',10);S('M-60 -26C-60 -64 -34 -82 0 -82C34 -82 60 -64 60 -26','',BL,6.5)
  M(()=>{R([-48,-36,-68,8,-38,52,-62,118],24,HB,HL,3,1.5,2);R([-50,-10,-60,20,-44,50,-54,84],12,HS,"",3,1.5)})
}
const flag=bl=>{
  c.fillStyle='#fff';c.fillRect(0,0,W,H)
  c.fillStyle=BL;c.fillRect(0,H*.09375,W,H*.15625);c.fillRect(0,H*.75,W,H*.15625)
  c.save();c.translate(W/2,H/2);c.beginPath()
  for(const o of[-1,1])for(let k=0;k<4;k++){const a=o*P/4+k*P/3;c[k?'lineTo':'moveTo'](Math.cos(a)*H*.1821,Math.sin(a)*H*.1821)}
  c.lineJoin='miter';c.lineWidth=H*.034375;c.strokeStyle=BL;c.stroke();c.restore()
  c.save();c.translate(42,97);c.scale(.56,.56);girl(bl);c.restore()
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
  c.fillStyle='#c9ced8';c.fillRect(9,30,6,212);c.strokeRect(9,30,6,212)
  c.beginPath();c.arc(12,25,6,0,P);c.fillStyle='#f2c14e';c.fill();c.stroke()
}
