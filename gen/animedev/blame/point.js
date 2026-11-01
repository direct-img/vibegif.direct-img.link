// anime girl with a white-blonde pixie cut and black turtleneck angrily pointing at a buggy line of code until the git blame tag pops up with her own name and face, then sheepishly pointing at herself
export const frames=24,rim=4
export const delay=[...Array(24)].map((_,i)=>[11,17,18].includes(i)?200:80)
export default(c,t)=>{
const P=Math.PI,T=P*2,S=Math.sin,C=Math.cos,L='#2a1f2d',a=T*t
const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
const fs=(f,w=4)=>{if(f){c.fillStyle=f;c.fill()}if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const st=(w,s=L)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const E=(x,y,a,b,r=0)=>{B();c.ellipse(x,y,a,b,r,0,T)}
const ln=(p,w,s=L)=>{B();M(p[0],p[1]);for(let k=2;k<p.length;k+=2)c.lineTo(p[k],p[k+1]);st(w,s)}
const limb=(p,w,f)=>{ln(p,w+8);ln(p,w,f)}
const cl=x=>Math.min(1,Math.max(0,x)),ez=x=>x*x*(3-2*x),sg=(u,v)=>cl((t-u)/(v-u))
const sk='#c98f62',sh='#ab7148',hr='#f7efcf',hs='#d9c88e',hl='#fff',ct='#2e2b36',cf='#4a4658',br='#2a1a14'
// phases: angry -> tag pops -> shock -> point at self -> shake it off
const pop=sg(.26,.36)*(1-sg(.86,.94)),shock=t>.4&&t<.88,self=ez(sg(.52,.66))*(1-ez(sg(.86,.98))),angry=t<.4||t>.92
// code panel
B();c.roundRect(128,66,118,150,10);fs('#1f2433',4.5)
B();c.roundRect(128,66,118,18,[10,10,0,0]);fs('#30374d',0);B();M(128,84);c.lineTo(246,84);st(3)
;['#ff6b6b','#ffd166','#6be38f'].forEach((f,k)=>{E(141+k*11,75,3.5,3.5);c.fillStyle=f;c.fill()})
const rows=[[0,40,'#7fd6ff'],[8,46,'#ff9ec4'],[8,30,'#ffd166'],[16,52,'#c7a8ff'],[8,36,'#7fd6ff'],[0,20,'#9be27a'],[8,44,'#ff9ec4']]
rows.forEach(([x,w,f],k)=>{const y=96+k*15;c.fillStyle='#4a5270';c.fillRect(136,y,8,5);c.fillStyle=f;c.fillRect(152+x,y,w*.9,5)})
// buggy line: red band + squiggle
B();c.rect(131,152,112,15);c.fillStyle='#6b2b3a';c.fill()
B();for(let x=152;x<228;x+=2)c.lineTo(x,168+S(x*.6+a*4)*1.6);st(2,'#ff5a5a')
c.fillStyle='#ff6b6b';c.fillRect(136,156,8,5);c.fillStyle='#fff';c.fillRect(152,156,58,5)
// girl
const hb=angry?S(a*6)*1.2:0
// body: black turtleneck
B();M(22,246);c.lineTo(34,178);Q(74,160,114,178);c.lineTo(126,246);c.closePath();fs(ct)
B();M(48,214);Q(60,222,58,240);M(100,214);Q(88,222,90,240);st(2.5,cf)
B();c.roundRect(52,152,44,24,10);fs(ct);for(const x of[60,68,76,84,92]){B();M(x-2,156);c.lineTo(x-2,172);st(2,cf)}
// free arm on hip
limb([36,190,22,222,40,240],10,ct);E(41,238,7,7.5);fs(sk,3)
// pointing arm: from accusing the line to pointing at herself
const jab=angry?Math.abs(S(a*6))*6:0,hx=126+jab+(106-126-jab)*self,hy=158+(150-158)*self,ang=-.05+(-2.75+.05)*self
limb([106,190,(106+hx)/2+4+self*16,(190+hy)/2+12+self*8,hx,hy],10,ct)
c.save();c.translate(hx,hy);c.rotate(ang);B();c.roundRect(3,-5,20,9,4.5);fs(sk,3);E(0,1,9.5,9.5);fs(sk,3.2);B();M(-3,-4);c.lineTo(5,-4);st(1.5,sh);c.restore()
// head
c.save();c.translate(70,110+hb);c.rotate(-.05+self*.12)
const R=43
// ears with small silver hoops
for(const k of[-1,1]){E(k*(R-1),12,7,10);fs(sk,3.5);B();c.arc(k*(R-1),26,5,0,T);st(5.5);B();c.arc(k*(R-1),26,5,0,T);st(2.4,'#d5dae4')}
B();M(-R,-8);Z(-R,18,-20,37,0,39);Z(20,37,R,18,R,-8);c.arc(0,-8,R,0,P,true);fs(sk)
c.save();c.clip();B();M(-R,-14);Q(0,-2,R,-14);c.lineTo(R,-60);c.lineTo(-R,-60);c.fillStyle=sh;c.fill()
if(shock){c.fillStyle='rgba(90,110,200,.5)';for(let k=0;k<5;k++)c.fillRect(-20+k*9,-30,4,16)}c.restore()
// eyes
for(const k of[-1,1]){const x=k*15+2
  if(angry){c.save();B();M(x-9,4+k*2);c.lineTo(x+9,4-k*2);Q(x+8,15,x,16);Q(x-8,15,x-9,4+k*2);c.closePath();c.fillStyle='#fff';c.fill();c.clip()
    E(x+2,10,6,7.5);c.fillStyle='#e8a628';c.fill();E(x+2,7,7,3.6);c.fillStyle='#9a5a10';c.fill();E(x+2,10,2.6,3.6);c.fillStyle='#2a1404';c.fill();E(x+4,7.5,1.6,2);c.fillStyle='#fff';c.fill();c.restore()
    B();M(x-10,4+k*2.4);c.lineTo(x+10,4-k*2.4);st(3.6)}
  else{E(x,9,9,11.5);c.fillStyle='#fff';c.fill();E(x,10,3,4);c.fillStyle='#e8a628';c.fill();E(x,10,1.4,2);c.fillStyle=L;c.fill()
    B();c.ellipse(x,9,9,11.5,0,P*1.08,P*1.92);st(3.4)}}
// mouths: gritted angry, gaping shock, awkward grin
if(angry){B();c.roundRect(-8,24,18,8,3);fs('#fff',2.6);B();M(-7,28);c.lineTo(9,28);st(1.3)}
else if(self<.5){E(1,29,6,7);fs('#5a1a2a',2.8)}
else{B();M(-9,26);Q(1,36,11,25);Q(1,30,-9,26);fs('#fff',2.6);B();M(-5,25);c.lineTo(-6,30);M(6,25);c.lineTo(7,30);st(1.2)}
if(!angry){E(-26,24,6,3.4);c.fillStyle='#d9705a';c.fill();E(28,24,6,3.4);c.fill()}
// white-blonde pixie cut
B();M(-R-3,2);c.arc(0,-8,R+4,P*.96,P*2.04)
const bl=[[R+3,2],[R,8,1],[R-6,-12],[30,-14,1],[22,-22],[14,-12,1],[6,-24],[-4,-14,1],[-12,-26],[-24,-14,1],[-30,-22],[-R+2,-10,1],[-R+1,-14],[-R-1,8,1],[-R-3,2]]
for(let k=1;k<bl.length;k++){const[x,y,tp]=bl[k],[u,v]=bl[k-1];tp?Q(u+(x-u)*.1,v+(y-v)*.8,x,y):Q(u+(x-u)*.7,v+(y-v)*.4,x,y)}
c.closePath();fs(hr)
for(const[x,y,r]of[[-6,-52,.5],[10,-51,.9]]){c.save();c.translate(x,y);c.rotate(r);B();M(-7,4);Q(-1,-6,8,-7);Q(4,-1,7,4);fs(hr,3.5);c.restore()}
B();M(-14,-40);Q(-26,-36,-32,-24);st(4,hl);B();M(12,-40);Q(18,-30,14,-20);st(2,hs);B();M(-4,-42);Q(-8,-32,-8,-24);st(2,hs)
// dark eyebrows: angry slant, raised in shock
for(const k of[-1,1]){const x=k*15+2;B();if(angry){M(x-k*9,-2);c.lineTo(x+k*9,-9)}else{M(x-9,-8);Q(x,-14,x+9,-8)}st(4.2,br)}
c.restore()
// anger vein while accusing, "?!" while shocked
if(angry){c.save();c.translate(112,62+hb);const z=1+S(a*6)*.12;c.scale(z,z);for(let k=0;k<4;k++){c.save();c.rotate(k*P/2);B();M(3,-9);Q(3,-3,9,-3);st(6.5);B();M(3,-9);Q(3,-3,9,-3);st(3.2,'#ff4a4a');c.restore()}c.restore()}
else{const z=ez(sg(.4,.46));c.save();c.translate(112,58);c.scale(z,z);c.rotate(.15);c.font='bold 24px DejaVu Sans';c.textAlign='center';c.lineWidth=5;c.strokeStyle=L;c.strokeText('?!',0,0);c.fillStyle='#ffd166';c.fillText('?!',0,0);c.restore()}
// blame tag popping out of the buggy line with her own name and face
if(pop>0){const z=ez(pop)*(1+S(pop*P)*.15);c.save();c.translate(188,120);c.scale(z,z)
  B();c.roundRect(-52,-20,104,38,9);M(-6,18);c.lineTo(4,28);c.lineTo(12,18);fs('#fffbe6',3.5)
  E(-30,-1,13,13);fs(sk,3);B();c.arc(-30,-2,14.5,P*.98,P*2.02);c.lineTo(-17,-5);c.lineTo(-21,-8);c.lineTo(-26,-5);c.lineTo(-31,-9);c.lineTo(-37,-5);c.lineTo(-44,-4);c.closePath();fs(hr,2.5)
  E(-34,3,1.7,2.2);c.fillStyle=L;c.fill();E(-26,3,1.7,2.2);c.fill();B();M(-37,-1.5);c.lineTo(-32,-1.5);M(-28,-1.5);c.lineTo(-23,-1.5);st(1.8,br)
  for(const x of[-43,-17]){B();c.arc(x,7,2.2,0,T);st(1.4,'#9aa0ae')}
  c.fillStyle=L;c.font='bold 21px DejaVu Sans';c.textAlign='left';c.fillText('Noor',-13,7);c.restore()}
}
