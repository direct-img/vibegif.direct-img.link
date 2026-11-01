// anime girl in a hard hat grinning wildly as she drives a tiny bulldozer marked --force, its blade scattering commit blocks
export const frames=15,delay=75,rim=4
export default(c,t)=>{
const P=Math.PI,T=P*2,S=Math.sin,C=Math.cos,L='#2a1f2d',a=T*t
const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
const fs=(f,w=4)=>{if(f){c.fillStyle=f;c.fill()}if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const st=(w,s=L)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const E=(x,y,a,b,r=0)=>{B();c.ellipse(x,y,a,b,r,0,T)}
const ln=(p,w,s=L)=>{B();M(p[0],p[1]);for(let k=2;k<p.length;k+=2)c.lineTo(p[k],p[k+1]);st(w,s)}
const limb=(p,w,f)=>{ln(p,w+8);ln(p,w,f)}
const sk='#e3a77c',sh='#c98a60',hr='#e8452c',hs='#b62a1a',hl='#ff8a5c',yl='#ffc93c',ys='#e09a1a'
const rb=S(a*4)*1.5,hb=S(a*4-.6)*2
// commit block (a little square with a commit dot)
const blk=(x,y,r,z,f)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(z,z);B();c.roundRect(-11,-11,22,22,4);fs(f,3.5);B();M(-11,0);c.lineTo(11,0);st(3);E(0,0,4.5,4.5);fs('#fff',3);c.restore()}
// blocks waiting to be shoved, then flung up and away
for(let k=0;k<4;k++){const p=(t+k/4)%1,f=['#7fd6ff','#b39cff','#9be27a','#ff9ec4'][k]
  if(p<.3){const q=p/.3;blk(238-q*18,224-(k%2)*2,0,Math.min(1,q*4),f)}
  else{const q=(p-.3)/.7;blk(220+q*20,214-S(q*P)*150+q*q*30-q*40,q*7*(k%2?1:-1),1-q*q,f)}}
// exhaust puffs
for(let k=0;k<3;k++){const p=(t*2+k/3)%1;E(164-p*14,98-p*50+rb,5+p*8,5+p*7);c.fillStyle='#d9d9e3';c.fill();c.lineWidth=2.5;c.strokeStyle='#8a8a9a';c.stroke()}
// ground dust behind
for(let k=0;k<3;k++){const p=(t*2+k/3)%1;E(48-p*24,232-p*14,4+p*7,4+p*6);c.fillStyle='#f3e6d0';c.fill();c.lineWidth=2;c.strokeStyle='#c9b48f';c.stroke()}
for(let k=0;k<3;k++){const p=(t*2+k/3)%1,y=[150,176,128][k],x=38-p*22;B();M(x,y);c.lineTo(x+16-p*8,y);st(3.5)}
c.save();c.translate(0,rb)
// exhaust pipe
B();c.rect(159,106,10,40);fs('#5a5a66',3.5);B();c.rect(157,102,14,7);fs('#3a3a44',3)
// girl in the seat: free arm pumping a fist
const fp=S(a*2)*6
limb([82,132,52,110,40,78+fp],9,'#ff7a1a');E(39,72+fp,8.5,9);fs(sk,3.5);B();M(33,68+fp);c.lineTo(45,68+fp);M(33,73+fp);c.lineTo(45,73+fp);st(1.8)
c.save();c.translate(0,hb*.5)
B();M(76,166);c.lineTo(78,124);Q(96,112,114,124);c.lineTo(118,166);c.closePath();fs('#ff7a1a')
B();M(84,124);c.lineTo(86,166);M(108,124);c.lineTo(106,166);st(4,'#e9ff5a')
c.restore()
limb([108,128+hb*.5,128,148,138,140],9,'#ff7a1a');E(139,139,7,7.5);fs(sk,3.5)
// body
B();M(52,204);c.lineTo(52,150);c.lineTo(124,150);c.lineTo(132,138);c.lineTo(172,140);c.lineTo(176,204);c.closePath();fs(yl,4.5)
B();M(56,160);c.lineTo(172,160);st(3,ys)
c.fillStyle=L;c.font='bold 21px DejaVu Sans Mono';c.textAlign='center';c.fillText('--force',113,191)
// lever in her hand
ln([136,150,140,132],5);E(140,131,5,5);fs('#e8433a',3)
// blade arm + blade
B();c.rect(172,182,26,10);fs('#5a5a66',3.5)
B();M(194,148);c.lineTo(214,140);Q(200,190,226,234);c.lineTo(206,238);Q(184,192,194,148);c.closePath();fs('#9aa3b5',4.5)
B();M(208,148);Q(198,190,214,230);st(3,'#cfd6e3');B();M(206,238);c.lineTo(226,234);st(5,'#5a5a66')
c.restore()
// tracks
B();c.roundRect(42,202,146,36,18);fs('#3a3a44',4.5)
B();c.roundRect(49,208,132,24,12);c.fillStyle='#5a5a66';c.fill()
for(let k=0;k<4;k++){const x=62+k*35;c.save();c.translate(x,220);c.rotate(a);E(0,0,10,10);fs('#8a8a9a',3);ln([-7,0,7,0],2.5);ln([0,-7,0,7],2.5);c.restore()}
// tread lugs sliding round the track
for(let k=0;k<10;k++){const p=(t*2+k/10)%1,x=60+p*110;B();M(x,202);c.lineTo(x+4,198);st(4)}
// head
c.save();c.translate(98,86+rb+hb);c.rotate(-.06+S(a*4)*.03)
const R=36
B();M(-R,-6);Z(-R,18,-20,35,0,37);Z(20,35,R,18,R,-6);c.arc(0,-6,R,0,P,true);fs(sk)
c.save();c.clip();B();M(-R,-2);Q(0,10,R,-2);c.lineTo(R,-50);c.lineTo(-R,-50);c.fillStyle=sh;c.fill();c.restore()
// crazed eyes: sharp lids, tiny pupils
for(const k of[-1,1]){const x=k*15+3
  c.save();B();M(x-10,4+k*1);Q(x,-2,x+10,4-k*1);Q(x+9,16,x,17);Q(x-9,16,x-10,4+k*1);c.closePath();c.fillStyle='#fff';c.fill();c.clip()
  E(x,9,7,8);c.fillStyle='#3cc46a';c.fill();E(x,5,8,4);c.fillStyle='#1d7a3c';c.fill();E(x,9,2.4,3.2);c.fillStyle='#0e2a16';c.fill();E(x+3,6,2,2.4);c.fillStyle='#fff';c.fill();c.restore()
  B();M(x-11,4+k*1);Q(x,-3,x+11,4-k*1);st(3.6);B();M(x-k*-11,-8);c.lineTo(x+k*-9,-2);st(3.4)}
// freckles
for(const[x,y]of[[-24,20],[-20,23],[-27,24],[24,20],[28,23],[21,24]]){E(x,y,1.3,1.3);c.fillStyle='#a8603a';c.fill()}
// huge toothy grin with a fang
B();M(-15,22);Q(0,44,16,21);Q(0,27,-15,22);fs('#8a1f2e',3.2);B();M(-12,23.5);Q(0,28,13,22.5);c.lineTo(12,26);Q(0,31,-11,27);c.closePath();c.fillStyle='#fff';c.fill()
B();M(6,26);c.lineTo(8,32);c.lineTo(10,25.5);c.fillStyle='#fff';c.fill();st(1.6)
// messy spiky red hair under the hat
B();M(-R-5,14);c.arc(0,-6,R+5,P*.92,P*2.08)
const bl=[[R+5,14],[R+8,26,1],[28,-2],[24,8,1],[14,-8],[6,4,1],[-2,-10],[-12,2,1],[-20,-6],[-32,8,1],[-R+2,2],[-R-8,24,1],[-R-5,14]]
for(let k=1;k<bl.length;k++){const[x,y,tp]=bl[k],[u,v]=bl[k-1];tp?Q(u+(x-u)*.1,v+(y-v)*.8,x,y):Q(u+(x-u)*.7,v+(y-v)*.4,x,y)}
c.closePath();fs(hr)
// hard hat with goggles
B();M(-R-10,-20);Q(0,-30,R+10,-20);c.lineTo(R+6,-14);Q(0,-24,-R-6,-14);c.closePath();fs(yl,4)
B();M(-R+2,-20);Z(-R+2,-62,R-2,-62,R-2,-20);c.closePath();fs(yl,4);B();M(0,-52);c.lineTo(0,-24);st(5,ys)
B();M(-R+2,-26);Q(0,-34,R-2,-26);st(6,'#5a4a3a')
for(const k of[-1,1]){E(k*12,-31,9,7);fs('#7fe0ff',3.5);E(k*12-3,-33,2.5,2);c.fillStyle='#fff';c.fill()}
c.restore()
}
