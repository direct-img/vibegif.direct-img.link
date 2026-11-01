// sporty anime girl with a dark ponytail shoving a big crate with an up arrow up a slope towards an "origin" cloud, legs churning and sweat flying
export const frames=16,delay=70,rim=4
export default(c,t)=>{
const P=Math.PI,T=P*2,S=Math.sin,C=Math.cos,L='#2a1f2d',a=T*t
const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
const fs=(f,w=4)=>{if(f){c.fillStyle=f;c.fill()}if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const st=(w,s=L)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const E=(x,y,a,b,r=0)=>{B();c.ellipse(x,y,a,b,r,0,T)}
const ln=(p,w,s=L)=>{B();M(p[0],p[1]);for(let k=2;k<p.length;k+=2)c.lineTo(p[k],p[k+1]);st(w,s)}
const limb=(p,w,f)=>{ln(p,w+8);ln(p,w,f)}
const sk='#b97a52',sh='#9a5f3c',hr='#2b2f4a',hl='#56609a',jk='#ff8a2a',sd='#2a2d3a'
// cloud remote
c.save();c.translate(190,42)
B();M(-50,22);c.arc(-36,8,16,P*.55,P*1.45);c.arc(-10,-6,24,P*1.05,P*1.85);c.arc(22,-2,20,P*1.25,P*.05);c.arc(40,14,13,P*1.4,P*.5);c.closePath();fs('#eef6ff')
c.fillStyle=L;c.font='bold 18px DejaVu Sans';c.textAlign='center';c.fillText('origin',-4,14);c.restore()
// slope frame: x along the hill, y=0 is the ground
c.save();c.translate(146,194);c.rotate(-.3)
B();c.roundRect(-132,0,234,15,7.5);fs('#8fd16a');B();c.roundRect(-132,8,234,7,[0,0,7.5,7.5]);c.fillStyle='#6fae4e';c.fill()
B();c.roundRect(-132,0,234,15,7.5);st(4)
// tufts scrolling back down the hill
for(let k=0;k<5;k++){const p=(t*2+k/5)%1,x=92-p*216,z=S(p*P)*1.3
  B();M(x-6*z,0);c.lineTo(x-3*z,-8*z);c.lineTo(x,-2*z);c.lineTo(x+3*z,-9*z);c.lineTo(x+6*z,0);fs('#8fd16a',2.5)}
// crate with a big up arrow, scraping forward in time with the steps
const cj=S(a*2)*1.6
c.save();c.translate(cj,0)
B();c.rect(0,-78,78,78);fs('#e0a35a',4.5)
B();c.rect(6,-72,66,66);st(2.5,'#b9783a')
for(const y of[-54,-30]){B();M(6,y);c.lineTo(72,y);st(2,'#c98a48')}
B();M(39,-68);c.lineTo(62,-42);c.lineTo(49,-42);c.lineTo(49,-13);c.lineTo(29,-13);c.lineTo(29,-42);c.lineTo(16,-42);c.closePath();fs('#3fb950',4)
for(let k=0;k<3;k++){const p=(t*2+k/3)%1;E(82+p*12,-4-p*10,3+p*6,3+p*5);c.fillStyle='#f3e6d0';c.fill();c.lineWidth=2;c.strokeStyle='#c9b48f';c.stroke()}
c.restore()
// girl, leaning hard into the crate
const bo=Math.abs(S(a*2))*2.5,H=[-76,-38-bo],Sh=[-42,-62-bo*.6],hd=[-30,-88-bo*.4]
// ponytail streaming back
const pw=S(a*2-1)*6
c.save();c.translate(hd[0],hd[1]);c.rotate(.25)
B();M(-20,-22);Z(-40,-34,-62,-28+pw,-76,-10+pw*1.4);Z(-62,-12+pw,-46,-6,-26,-6);c.closePath();fs(hr)
B();M(-28,-20);Q(-46,-26,-64,-14+pw*1.2);st(2,hl);c.restore()
// legs: run cycle with two-bone IK, feet slide back on contact and swing forward in the air
const leg=(ph,sc,sz)=>{const q=(t*2+ph)%1,on=q<.5,s=on?q/.5:(q-.5)/.5,fx=on?-84-44*s:-128+44*s,fy=on?0:-S(s*P)*16
  let dx=fx-H[0],dy=fy-6-H[1],d=Math.hypot(dx,dy);if(d>61){dx*=61/d;dy*=61/d;d=61}
  const h=Math.sqrt(Math.max(0,31*31-d*d/4)),kx=H[0]+dx/2+dy/d*h,ky=H[1]+dy/2-dx/d*h,X=H[0]+dx,Y=H[1]+dy
  limb([kx,ky,X,Y],9,sz);ln([H[0],H[1],kx,ky],19);ln([H[0],H[1],(H[0]+kx)/2,(H[1]+ky)/2],11,sd);ln([(H[0]+kx)/2,(H[1]+ky)/2,kx,ky],11,sk)
  B();M(X-4,Y+2);c.lineTo(X+14,Y+3);Q(X+16,Y-6,X+8,Y-8);c.lineTo(X-4,Y-6);c.closePath();fs(sc,3.5)}
leg(.5,'#d96a1c',sk)
// torso (jacket) + back arm
limb([Sh[0],Sh[1],-20,-50,-2+cj,-62],8,'#e6731a');E(-1+cj,-62,6,7);fs(sh,3)
limb([H[0],H[1],Sh[0],Sh[1]],24,jk)
B();M(H[0]-4,H[1]-9);c.lineTo(Sh[0]-6,Sh[1]-10);st(3,'#fff')
B();M(H[0]-12,H[1]+4);Q(H[0],H[1]+14,H[0]+13,H[1]+6);c.lineTo(H[0]+10,H[1]-4);c.lineTo(H[0]-10,H[1]-8);c.closePath();fs(sd,3.5)
leg(0,'#ff8a2a',sk)
// front arm reaching the crate
limb([Sh[0],Sh[1],-22,-46,-2+cj,-44],9,jk);E(-1+cj,-44,7,8);fs(sk,3.5)
// head, pressed forward
c.save();c.translate(hd[0],hd[1]);c.rotate(.25)
const R=30
B();M(-R,-6);Z(-R,16,-16,31,0,33);Z(16,31,R,16,R,-6);c.arc(0,-6,R,0,P,true);fs(sk)
c.save();c.clip();B();M(-R,-4);Q(0,8,R,-4);c.lineTo(R,-50);c.lineTo(-R,-50);c.fillStyle=sh;c.fill();c.restore()
// determined eyes looking ahead at the crate
for(const k of[-1,1]){const x=k*12+4
  c.save();B();M(x-8,5);Q(x,0,x+8,4);c.lineTo(x+7,13);Q(x,17,x-7,13);c.closePath();c.fillStyle='#fff';c.fill();c.clip()
  E(x+3,9,5.5,7);c.fillStyle='#7a4320';c.fill();E(x+3,6,6,3.5);c.fillStyle='#4a2410';c.fill();E(x+3,9,2.6,3.6);c.fillStyle='#1d0d05';c.fill();E(x+4.5,6.5,1.7,2);c.fillStyle='#fff';c.fill();c.restore()
  B();M(x-9,5);Q(x,-1,x+9,4);st(3.4);B();M(x-8,-4+k*-1);c.lineTo(x+7,-1+k*2.5);st(3.2)}
B();c.roundRect(-3,19,16,8,2.5);fs('#fff',2.6);B();M(-2,23);c.lineTo(12,23);M(5,19);c.lineTo(5,27);st(1.4)
E(-19,16,5,2.6);c.fillStyle='#d9806a';c.fill();E(24,16,5,2.6);c.fill()
// bangs + headband
B();M(-R-4,14);c.arc(0,-6,R+4,P*.9,P*2.1)
const bl=[[R+4,14],[R-2,22,1],[24,-6],[18,2,1],[9,-10],[1,0,1],[-6,-11],[-15,-1,1],[-23,-7],[-R+1,22,1],[-R-4,14]]
for(let k=1;k<bl.length;k++){const[x,y,tp]=bl[k],[u,v]=bl[k-1];tp?Q(u+(x-u)*.1,v+(y-v)*.8,x,y):Q(u+(x-u)*.7,v+(y-v)*.4,x,y)}
c.closePath();fs(hr);B();M(-12,-30);Q-0;Q(-22,-26,-26,-16);st(3.5,hl)
B();M(-R-4,-10);Q(0,-24,R+4,-10);st(12);B();M(-R-4,-10);Q(0,-24,R+4,-10);st(6,'#e8433a')
E(-R+2,-16,6,8,.9);fs('#e8433a',3)
c.restore()
// sweat flying back off her head
for(let k=0;k<2;k++){const p=(t*2+k/2)%1,x=hd[0]-14-p*34,y=hd[1]-34-S(p*P)*16+p*20
  c.save();c.translate(x,y);c.rotate(-1.4);c.scale(1-p*.5,1-p*.5);B();M(0,-8);Q(6,2,0,5);Q(-6,2,0,-8);fs('#8fd8ff',2.5);c.restore()}
c.restore()
}
