// Nowruz sabzeh: a turquoise dish of sprouted wheat grass tied with a red ribbon, the blades swaying in a spring breeze and the bow's tails fluttering
export const frames=16,delay=110,rim=5
const P=Math.PI*2,S=Math.sin,C=Math.cos
const hs=n=>{n=S(n*127.1+311.7)*43758.5453;return n-Math.floor(n)}
// blades: base offset, tip height above the rim, fan-out, base width, layer (0 back, 1 front), phase
const BL=[...Array(28)].map((_,i)=>{const f=i<15,u=f?i/14:(i-15)/12,o=(u-.5)*(f?128:110)+(hs(i)-.5)*6
  return[o,(f?150:138)+hs(i+.3)*18-o*o*.012,1.2+hs(i+.6)*.25,f?13:14,f?0:1,hs(i+.9)*2]})
export default(c,t)=>{
  const D=190,YR=D-52 // dish rim centre, ribbon height
  // blade centre at height y: drawn in to the ribbon, fanning above it, the top bent by the breeze
  const pt=(b,y)=>{const[o,h,k,,,r]=b,yt=D-h
    if(y>YR){const v=(D+4-y)/(D+4-YR);return[128+o*(1-.42*v**.9),y]}
    const w=(YR-y)/(YR-yt),z=Math.max(0,w-.3)/.7,br=z*z*(11*S(P*t-o*.025-r)+6)
    return[128+o*(.58+(k-.58)*w**1.15)+br,y]}
  const blade=b=>{const L=[],R=[],n=12,yt=D-b[1]
    for(let j=0;j<=n;j++){const y=D+4+(yt-D-4)*j/n,s=j/n,[x,yy]=pt(b,y),[x2,y2]=pt(b,y-2),dx=x2-x,dy=y2-yy,l=Math.hypot(dx,dy)||1,w=b[3]*(1-s**1.8)/2
      L.push([x-dy/l*w,yy+dx/l*w]);R.push([x+dy/l*w,yy-dx/l*w])}
    c.beginPath();for(const[x,y]of L)c.lineTo(x,y);for(const[x,y]of R.reverse())c.lineTo(x,y);c.closePath()}
  // solid body of the bundle so no gaps show low down; blade tips stay separate
  const body=()=>{const bs=[...BL].sort((p,q)=>p[0]-q[0]),Lb=bs[0],Rb=bs[bs.length-1],top=y=>bs.map(b=>pt(b,D-b[1]*y))
    c.beginPath();for(let j=0;j<=8;j++){const y=D+4-(D+4-(D-Lb[1]*.8))*j/8;c.lineTo(pt(Lb,y)[0]-3,y)}
    for(const[x,y]of top(.78))c.lineTo(x,y)
    for(let j=8;j>=0;j--){const y=D+4-(D+4-(D-Rb[1]*.8))*j/8;c.lineTo(pt(Rb,y)[0]+3,y)}c.closePath()}
  // dish: back half of the rim and the bed of seeds first
  c.lineWidth=6
  c.beginPath();c.ellipse(128,D,86,19,0,0,P);c.fillStyle='#1f97a6';c.fill();c.stroke()
  c.beginPath();c.ellipse(128,D+2,74,13,0,0,P);c.fillStyle='#6b4a2a';c.fill()
  // grass: one dark outline pass under everything, then the fills on top
  c.lineWidth=6;c.strokeStyle='#111';c.fillStyle='#111'
  body();c.fill();c.stroke();for(const b of BL){blade(b);c.fill();c.stroke()}
  body();c.fillStyle='#41b64b';c.fill()
  for(const b of BL){blade(b);c.fillStyle=b[4]?b[5]<1?'#5cd257':'#8be672':'#41b64b';c.fill()}
  // blade creases, only where the bundle holds still
  c.lineWidth=2;c.strokeStyle='#2a8a38'
  for(const b of BL)if(b[4]){const yt=D-b[1],y1=YR-(YR-yt)*.3;c.beginPath();for(let y=D+2;y>=y1;y-=4){const[x]=pt(b,y);c.lineTo(x+b[3]*.22,y)}c.stroke()}
  c.strokeStyle='#111'
  // ribbon round the pinched waist
  const ry=YR,rw=38
  c.lineWidth=5;c.strokeStyle='#111'
  c.beginPath();c.moveTo(128-rw,ry-8);c.quadraticCurveTo(128,ry,128+rw,ry-8);c.lineTo(128+rw,ry+5);c.quadraticCurveTo(128,ry+13,128-rw,ry+5);c.closePath();c.fillStyle='#e8343f';c.fill();c.stroke()
  // bow tails flutter: a travelling ripple, stronger toward the ends
  const tail=m=>{const L=[],R=[]
    for(let j=0;j<=8;j++){const s=j/8,x=128+m*(5+s*20)+6*s*S(P*(t*2-s*.9)+(m>0?1.3:0)),y=ry+5+s*32,w=7-s*1.5
      L.push([x-w,y]);R.push([x+w,y])}
    c.beginPath();for(const[x,y]of L)c.lineTo(x,y);const e=R[8],l=L[8];c.lineTo((l[0]+e[0])/2,l[1]-6);for(const[x,y]of R.reverse())c.lineTo(x,y);c.closePath();c.fillStyle='#d42634';c.fill();c.stroke()}
  tail(-1);tail(1)
  for(const m of[-1,1]){const g=1+.06*S(P*t+(m>0?1:0));c.beginPath();c.moveTo(128,ry+1);c.bezierCurveTo(128+m*34*g,ry-32*g,128+m*44*g,ry+18,128,ry+1);c.fillStyle='#e8343f';c.fill();c.stroke()
    c.beginPath();c.moveTo(128+m*6,ry-2);c.quadraticCurveTo(128+m*20,ry-13*g,128+m*28*g,ry-7);c.lineWidth=2.5;c.strokeStyle='#ff8a8f';c.stroke();c.lineWidth=5;c.strokeStyle='#111'}
  c.beginPath();c.ellipse(128,ry+1,8.5,7.5,0,0,P);c.fillStyle='#c81f2d';c.fill();c.stroke()
  // front of the dish: glazed bowl with a cobalt band of white dots, on a little foot
  c.lineWidth=6
  const bowl=()=>{c.beginPath();c.moveTo(38,D);c.bezierCurveTo(44,D+34,80,D+40,128,D+40);c.bezierCurveTo(176,D+40,212,D+34,218,D);c.ellipse(128,D,90,20,0,0,Math.PI)}
  c.beginPath();c.moveTo(98,D+36);c.lineTo(102,D+48);c.lineTo(154,D+48);c.lineTo(158,D+36);c.fillStyle='#1b8796';c.fill();c.stroke()
  bowl();c.fillStyle='#2cb8c6';c.fill()
  c.save();bowl();c.clip()
  c.beginPath();c.ellipse(128,D+14,96,20,0,0,P);c.ellipse(128,D+4,96,20,0,0,P);c.fillStyle='#2a57b8';c.fill('evenodd')
  c.fillStyle='#fff';for(let k=-4;k<=4;k++){const a=k/4*1.2;c.beginPath();c.arc(128+88*S(a),D+11+16*C(a)*.55,2.6,0,P);c.fill()}
  c.beginPath();c.ellipse(150,D+30,100,30,0,0,P);c.ellipse(128,D+20,100,30,0,0,P);c.fillStyle='rgba(0,40,70,.22)';c.fill('evenodd')
  c.beginPath();c.ellipse(64,D+18,14,5,.35,0,P);c.fillStyle='rgba(255,255,255,.65)';c.fill()
  c.restore()
  bowl();c.stroke()
  // a couple of twinkles
  c.lineWidth=3.5;c.fillStyle='#fff3a6'
  for(const[p,x,y,r]of[[.1,40,70,13],[.6,218,92,12]]){const u=(t-p+1)%1;if(u>.35)continue;const z=r*S(Math.PI*u/.35)
    c.save();c.translate(x,y);c.rotate(u*1.5);c.beginPath();for(let k=0;k<8;k++){const m=k%2?z*.3:z;c.lineTo(m*S(k*P/8),-m*C(k*P/8))}c.closePath();c.fill();c.stroke();c.restore()}
}
