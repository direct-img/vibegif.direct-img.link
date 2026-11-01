// anime girl with blue twin tails holding up a "PR #42" card with pleading sparkly eyes, bouncing on her toes while she waits for review
export const frames=16,delay=80,rim=4
export default(c,t)=>{
const P=Math.PI,T=P*2,S=Math.sin,C=Math.cos,L='#2a1f2d',a=T*t
const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
const fs=(f,w=4)=>{if(f){c.fillStyle=f;c.fill()}if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const st=(w,s=L)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const E=(x,y,a,b,r=0)=>{B();c.ellipse(x,y,a,b,r,0,T)}
const ln=(p,w,s=L)=>{B();M(p[0],p[1]);for(let k=2;k<p.length;k+=2)c.lineTo(p[k],p[k+1]);st(w,s)}
const limb=(p,w,f)=>{ln(p,w+8);ln(p,w,f)}
const sk='#eab48c',sh='#cf9168',hr='#8fd3f4',hs='#5aaedb',hl='#dff6ff'
const bo=-Math.abs(S(a*2))*5,sw=S(a*2-.8),hy=86+bo
// twin tails (behind)
const tail=k=>{const x=128+k*42,y=hy-30,e=S(a*2-1.4)*5
  B();M(x-k*4,y-8);Z(x+k*46,y+4,x+k*36+e,y+92,x+k*16+e*1.8,y+150)
  Z(x+k*10+e,y+118,x+k*8,y+66,x-k*10,y+16);c.closePath();fs(hr)
  B();M(x+k*12,y+12);Z(x+k*26,y+48,x+k*22+e,y+96,x+k*16+e*1.8,y+140);st(2.5,hs)}
tail(-1);tail(1)
// back hair
B();M(128-50,hy-10);Z(128-56,hy+30,128-50,hy+50,128-40,hy+58);c.lineTo(128+40,hy+58);Z(128+50,hy+50,128+56,hy+30,128+50,hy-10);c.closePath();fs(hs)
// legs, skirt, body
limb([113,206+bo,111,238],10,sk);limb([143,206+bo,145,238],10,sk)
E(108,242,12,6.5);fs('#e2505e');E(148,242,12,6.5);fs('#e2505e')
c.save();c.translate(0,bo)
B();M(98,186);c.lineTo(86,220);Q(128,230,170,220);c.lineTo(158,186);c.closePath();fs('#2f4a8a')
B();M(103,138);Q(128,130,153,138);c.lineTo(162,196);Q(128,202,94,196);c.closePath();fs('#fafaff')
B();M(112,134);c.lineTo(128,150);c.lineTo(144,134);fs(0,3)
c.restore()
// head
c.save();c.translate(128,hy);c.rotate(sw*.07)
const R=46
B();M(-R,-8);Z(-R,22,-24,44,0,46);Z(24,44,R,22,R,-8);c.arc(0,-8,R,0,P,true);fs(sk)
c.save();c.clip();B();M(-R,-6);Q(0,14,R,-6);c.lineTo(R,-60);c.lineTo(-R,-60);c.fillStyle=sh;c.fill();c.restore()
// eyes
const eye=(x,k)=>{
  E(x,13,12,15);c.fillStyle='#fff';c.fill()
  c.save();E(x,14,10.5,14);c.clip();c.fillStyle='#8a5cd6';c.fill()
  E(x,3,13,10);c.fillStyle='#4c2a8c';c.fill()
  E(x,26,10,7);c.fillStyle='#c4a4ff';c.fill()
  E(x,13,5,6.8);c.fillStyle='#24123a';c.fill();c.restore()
  const j=S(a*2+k),g=1+.18*S(a*4+k)
  E(x+k*3.6+j*.7,6,4.2*g,5*g);c.fillStyle='#fff';c.fill();E(x-k*3.8-j*.7,20,2.3*g,2.3*g);c.fill();E(x-k,12,1.5,1.5);c.fill()
  B();c.ellipse(x,14,12,15.5,0,P*1.06,P*1.94);st(4)
  B();M(x+k*11,7);Q(x+k*14,3,x+k*16,2);st(3.2)
  B();c.ellipse(x,14,10,14.5,0,P*.28,P*.72);st(2.4,'#a6e6ff')
  E(x+k*10,26+S(a*2+k)*.6,2.2,3);c.fillStyle='#bfefff';c.fill();c.lineWidth=1.4;c.strokeStyle='#5aaedb';c.stroke()}
eye(-20,-1);eye(20,1)
E(-33,33,7,4);c.fillStyle='#f0a090';c.fill();E(33,33,7,4);c.fill()
for(const k of[-1,1])for(const d of[-3,0,3]){B();M(k*33+d+1.5,30.5);c.lineTo(k*33+d-1.5,35.5);st(1.4,'#e0607a')}
B();M(-5,37);Q(-2.5,34,0,36.5);Q(2.5,34,5,37);st(2.4)
B();M(0,27);c.lineTo(1,28);st(2,sh)
// bangs: leaf shaped locks, notch -> tip -> notch
B();M(-R-5,26);c.arc(0,-8,R+5,P*.9,P*2.1)
const bl=[[R+5,26],[R-1,42,1],[35,-6],[31,6,1],[21,-15],[11,2,1],[2,-20],[-8,3,1],[-18,-15],[-30,6,1],[-35,-6],[-R+1,42,1],[-R-5,26]]
for(let k=1;k<bl.length;k++){const[x,y,tp]=bl[k],[u,v]=bl[k-1];tp?Q(u+(x-u)*.1,v+(y-v)*.8,x,y):Q(u+(x-u)*.7,v+(y-v)*.4,x,y)}
c.closePath();fs(hr)
B();M(-12,-46);Q(-26,-40,-30,-26);st(4,hl);B();M(-22,-20);Q(-14,-24,-6,-20);st(3,hl)
B();M(12,-40);Q(18,-20,10,4);st(2,hs);B();M(-4,-44);Q(-8,-24,-8,4);st(2,hs);B();M(32,-34);Q(38,-12,30,8);st(2,hs);B();M(-30,-34);Q(-36,-12,-30,8);st(2,hs)
// ribbons
for(const k of[-1,1]){c.save();c.translate(k*40,-36);c.rotate(k*.5)
  B();M(0,0);c.lineTo(-13,-9);c.lineTo(-12,8);c.closePath();M(0,0);c.lineTo(13,-9);c.lineTo(12,8);c.closePath();fs('#e2505e',3)
  E(0,0,4.5,4.5);fs('#e2505e',3);c.restore()}
c.restore()
// card + hands
c.save();c.translate(128,172+bo);c.rotate(S(a*2)*.05)
B();c.roundRect(-58,-30,116,64,9);fs('#fff',4.5)
B();c.roundRect(-58,-30,116,15,[9,9,0,0]);fs('#3fb950',0);B();M(-58,-15);c.lineTo(58,-15);st(3)
c.fillStyle=L;c.font='bold 26px DejaVu Sans';c.textAlign='center';c.fillText('PR #42',1,20)
for(const k of[-1,1]){E(k*57,-4,9,10);fs(sk,3.5)}
c.restore()
// sparkles
for(let k=0;k<4;k++){const p=(t*2+k/4)%1,s=S(p*P)*11,x=[34,220,24,230][k],y=[62,46,146,128][k]
  if(s<2)continue
  c.save();c.translate(x,y);c.rotate(p*.6);B();for(let j=0;j<8;j++){const r=j%2?s*.28:s;c.lineTo(C(j*P/4)*r,S(j*P/4)*r)}c.closePath();fs('#ffe066',2);c.restore()}
}
