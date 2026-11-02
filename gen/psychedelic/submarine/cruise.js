// yellow submarine bobbing through a wobbly blob of wavy rainbow water, bubbles streaming from its spinning propeller, neon portholes glowing and periscope turning to look around
export const frames=16,delay=80
const P=Math.PI*2,H=(h,l=56,s=88)=>`hsl(${(h%360+360)%360},${s}%,${l}%)`
let z=11;const R=()=>(z=z*16807%2147483647)/2147483647
const bb=[...Array(6)].map(()=>[R(),R(),4+R()*5])
export default(c,t)=>{
  const s=t*P,L=(w,k='#111')=>(c.lineWidth=w,c.strokeStyle=k,c.stroke()),F=k=>(c.fillStyle=k,c.fill())
  // wobbly blob of rainbow water
  const blob=()=>{c.beginPath();for(let a=0;a<P;a+=P/90){const r=112+6*Math.sin(3*a+s)+4*Math.sin(5*a-2*s);c.lineTo(128+Math.cos(a)*r,130+Math.sin(a)*r)}c.closePath()}
  blob();F('#111')
  c.save();c.clip()
  const ey=(b,x)=>b*17+Math.sin(x*P/128+s+b*.6)*6
  for(let b=0;b<16;b++){
    c.beginPath();for(let x=0;x<=256;x+=8)c.lineTo(x,ey(b,x));for(let x=256;x>=0;x-=8)c.lineTo(x,ey(b+1,x)+.5)
    F(H(b*36-30,50,82))
  }
  for(const[u,v,r]of bb){
    const y=((v*300-t*300)%300+300)%300-20,x=30+u*196+Math.sin(s*2+u*P)*5
    c.beginPath();c.arc(x,y,r,0,P);F('rgba(255,255,255,.3)');L(2,'#fff')
  }
  for(let k=0;k<9;k++){
    const p=(k/9+t)%1,x=44-p*16+Math.sin(p*9+k)*5,y=146-p*136+Math.sin(s)*5
    c.beginPath();c.arc(x,y,2+p*7,0,P);F('rgba(255,255,255,.3)');L(2.5,'#fff')
  }
  c.restore()
  blob();L(6)
  // submarine
  c.translate(136,140+Math.sin(s)*5);c.rotate(Math.sin(s+1)*.05);c.scale(.92,.92);c.translate(-128,-140)
  // propeller
  c.beginPath();c.moveTo(40,142);c.lineTo(30,142);L(6)
  for(let k=0;k<3;k++){
    const a=s*3+k*P/3
    c.beginPath();c.ellipse(28,142+Math.sin(a)*9,4,Math.abs(Math.sin(a))*9+1.5,0,0,P);F(H(k*120+t*360,60));L(3)
  }
  // periscope
  const d=Math.cos(s),e=140+16*d
  c.beginPath();c.moveTo(140,90);c.lineTo(140,58);c.lineTo(e,58);L(13);L(6,'#ffcf1f')
  c.beginPath();c.ellipse(e,58,1.5+4*Math.abs(Math.sin(s)),6,0,0,P);F(H(t*360+180,62));L(3)
  // tail fins
  for(const m of[-1,1]){c.beginPath();c.moveTo(70,142+m*26);c.lineTo(46,142+m*42);c.lineTo(48,142+m*18);c.closePath();F('#ff4b2b');L(4)}
  // conning tower
  c.beginPath();c.moveTo(98,116);c.lineTo(102,90);c.quadraticCurveTo(103,84,110,84);c.lineTo(146,84);c.quadraticCurveTo(152,84,153,90);c.lineTo(158,116);c.closePath()
  F('#ffcf1f');L(5)
  c.beginPath();c.arc(127,100,6,0,P);F(H(t*360+90,62));L(3)
  // hull
  const hull=()=>{c.beginPath();c.moveTo(72,112);c.lineTo(174,112);c.arc(174,142,30,-P/4,P/4);c.lineTo(72,172)
    c.bezierCurveTo(52,172,40,158,40,148);c.lineTo(40,136);c.bezierCurveTo(40,126,52,112,72,112);c.closePath()}
  hull();F('#ffcf1f')
  c.save();c.clip()
  c.fillStyle='#ff8a1f';c.fillRect(30,158,190,8)
  c.beginPath();c.ellipse(130,118,70,5,0,0,P);F('#fff07a')
  c.restore()
  hull();L(6)
  for(let k=0;k<9;k++){c.beginPath();c.arc(66+k*14,124,1.8,0,P);F('#111')}
  // painted daisy on the nose
  c.save();c.translate(186,140);c.rotate(Math.sin(s)*.6)
  for(let k=0;k<5;k++){c.rotate(P/5);c.beginPath();c.ellipse(6,0,5,3.2,0,0,P);F(H(t*360+300,62));L(2)}
  c.beginPath();c.arc(0,0,3,0,P);F('#fff');L(2);c.restore()
  // neon portholes
  for(let k=0;k<3;k++){
    const x=94+k*34
    c.beginPath();c.arc(x,142,11,0,P);F('#c9c9d6');L(4)
    c.beginPath();c.arc(x,142,7,0,P);F(H(k*90-t*360,58,100));L(2.5)
    c.beginPath();c.arc(x-2.5,139.5,2,0,P);F('#fff')
  }
}
