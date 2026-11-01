// anime girl in a beret snapping a photo with an instant camera, the flash fires and a polaroid of her code slides out and drops onto a pile of snapshots
export const frames=18,delay=85,rim=4
export default(c,t)=>{
const P=Math.PI,T=P*2,S=Math.sin,C=Math.cos,L='#2a1f2d'
const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
const fs=(f,w=4)=>{if(f){c.fillStyle=f;c.fill()}if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const st=(w,s=L)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const E=(x,y,a,b,r=0)=>{B();c.ellipse(x,y,a,b,r,0,T)}
const ln=(p,w,s=L)=>{B();M(p[0],p[1]);for(let k=2;k<p.length;k+=2)c.lineTo(p[k],p[k+1]);st(w,s)}
const limb=(p,w,f)=>{ln(p,w+8);ln(p,w,f)}
const cl=(x,y=0)=>Math.min(1,Math.max(0,x)),ez=x=>x*x*(3-2*x)
c.translate(128,130);c.scale(.94,.94);c.translate(-128,-128)
const sk='#ffdcc6',sh='#f2b9a0',hr='#6fd8c1',hs='#3fae98',hl='#c9fff2'
// polaroid of code: d = how developed (0 dark .. 1 code shows)
const pic=(x,y,r,d=1)=>{c.save();c.translate(x,y);c.rotate(r)
  B();c.rect(-26,-31,52,62);fs('#fffdf6',3.5)
  B();c.rect(-21,-26,42,40);fs('#22303f',0)
  if(d>0){c.globalAlpha=d;[[-17,-21,24,'#ff7aa8'],[-12,-14,26,'#7fd6ff'],[-12,-7,16,'#ffd166'],[-17,0,20,'#9be27a'],[-12,7,22,'#7fd6ff']].forEach(([a,b,w,f])=>{c.fillStyle=f;c.fillRect(a,b,w,4)});c.globalAlpha=1}
  c.fillStyle='#6b5a7a';c.font='bold 9px DejaVu Sans Mono';c.textAlign='center';c.fillText('a3f9c2',0,25);c.restore()}
// pile of earlier snapshots
pic(214,206,.24);pic(206,196,-.14)
const top=[212,188,.1]
// timeline
const fl=cl((t-.1)/.06)*cl((.26-t)/.08),out=ez(cl((t-.16)/.28)),fa=ez(cl((t-.46)/.3)),dv=cl((t-.3)/.4)
const jo=t>.1&&t<.18?3:0,bb=u=>S(T*u*2)*2.5,bo=bb(t)
// body: striped top
c.save();c.translate(0,bo)
B();M(56,240);c.lineTo(62,140);Q(64,126,100,118);Q(136,126,138,140);c.lineTo(144,240);c.closePath();c.save();fs('#fafcff');c.clip()
for(let y=120;y<244;y+=13){c.fillStyle='#2f3e7a';c.fillRect(50,y,110,6)}c.restore();B();M(56,240);c.lineTo(62,140);Q(64,126,100,118);Q(136,126,138,140);c.lineTo(144,240);st(4)
// head
c.save();c.translate(100,70);c.rotate(S(T*t)*.05)
const R=40
// bob back hair
B();M(-R-6,-6);Z(-R-10,30,-R-6,44,-R+4,50);Q(-20,58,-10,40);c.lineTo(10,40);Q(20,58,R-4,50);Z(R+6,44,R+10,30,R+6,-6);c.closePath();fs(hs)
B();M(-R,-8);Z(-R,22,-23,42,0,44);Z(23,42,R,22,R,-8);c.arc(0,-8,R,0,P,true);fs(sk)
c.save();c.clip();B();M(-R,-4);Q(0,12,R,-4);c.lineTo(R,-60);c.lineTo(-R,-60);c.fillStyle=sh;c.fill();c.restore()
// left eye open (amber), right eye winks; squints during flash
const eo=1-fl*.6
c.save();c.translate(-18,14);c.scale(1,eo)
E(0,0,10.5,13);c.fillStyle='#fff';c.fill()
c.save();E(0,1,9,12);c.clip();c.fillStyle='#e8962c';c.fill();E(0,-9,12,9);c.fillStyle='#9a4a12';c.fill();E(0,12,9,6);c.fillStyle='#ffd08a';c.fill();E(0,1,4.4,6);c.fillStyle='#3a1a08';c.fill();c.restore()
E(3.5,-5,3.6,4.4);c.fillStyle='#fff';c.fill();E(-3.5,6,1.8,1.8);c.fill()
B();c.ellipse(0,1,10.5,13.5,0,P*1.06,P*1.94);st(3.8);B();M(-10,-4);Q(-13,-8,-15,-9);st(3)
c.restore()
B();M(10,12);Q(19,4,28,10);st(4);B();M(10,12);Q(18,16,26,18);st(3.2);B();M(28,10);c.lineTo(31,7);st(3)
E(-30,30,6.5,3.6);c.fillStyle='#ffaaa0';c.fill();E(30,30,6.5,3.6);c.fill()
// grin with tongue
B();M(-10,28);Q(0,44,10,28);Q(0,31,-10,28);fs('#b8344c',3);B();M(-4,36);Q(3,30,7,34);Q(4,40,-4,36);c.fillStyle='#ff8c9c';c.fill()
// blunt bangs
B();M(-R-6,-6);c.arc(0,-8,R+6,P,P*2);c.lineTo(R+6,24)
;[[R+2,30],[R-4,6],[30,2],[24,4],[14,0],[6,3],[-4,0],[-12,3],[-22,0],[-30,3],[-R+4,6],[-R-2,30],[-R-6,24]].forEach(([x,y])=>c.lineTo(x,y))
c.closePath();fs(hr)
B();M(-16,-38);Q(-30,-32,-34,-16);st(4,hl);for(const x of[-24,-6,12,28]){B();M(x+2,-30);Q(x,-14,x,-2);st(2,hs)}
// beret
c.save();c.translate(8,-40);c.rotate(.24);E(0,0,42,15);fs('#8c2f45');B();c.ellipse(0,0,36,9,0,.2,P-.2);st(2.5,'#5e1a2c');B();M(0,-15);c.lineTo(3,-22);st(4);c.restore()
c.restore()
// arms + camera
c.save();c.translate(108,160+jo+bo)
limb([-36,-28,-64,-10,-60,2],11,'#2f3e7a');limb([36,-28,64,-10,60,2],11,'#2f3e7a')
// photo sliding out of the slot (before it drops)
if(out>0&&fa<=0)pic(0,out*54,0,dv)
B();c.roundRect(-58,-32,116,62,10);fs('#f4ede0',4.5)
B();c.roundRect(-58,-32,116,16,[10,10,0,0]);fs('#e7ddcb',0);B();M(-58,-16);c.lineTo(58,-16);st(3)
;['#e8473f','#f39a2b','#f5d33a','#55b85b','#3d8be0'].forEach((f,k)=>{c.fillStyle=f;c.fillRect(-7+k*3,-15,3,45)})
E(0,5,22,22);fs('#2b2b33',4.5);E(0,5,14,14);fs('#4a4f66',3);E(-5,0,5,5);c.fillStyle='#cfe0ff';c.fill();E(5,10,2.4,2.4);c.fill()
B();c.roundRect(-50,-28,22,10,3);fs(fl>.2?'#fffbe0':'#bfc6d6',3);B();c.roundRect(30,-28,18,10,3);fs('#3a3f52',3)
B();c.roundRect(32,-40,13,8,2);fs('#e8473f',3)
B();c.rect(-28,26,56,4);fs(L,0)
if(t>.08&&t<.2)for(const r of[-.6,0,.6]){B();M(38+S(r)*12,-44-C(r)*12);c.lineTo(38+S(r)*20,-44-C(r)*20);st(3)}
// hands on camera sides
E(-59,2,9,11);fs(sk,3.5);E(59,2,9,11);fs(sk,3.5)
// flash burst
if(fl>0){c.save();c.translate(-39,-23);c.scale(fl,fl);c.rotate(.2);B();for(let j=0;j<16;j++){const r=j%2?20:(j%4?46:66);c.lineTo(C(j*P/8)*r,S(j*P/8)*r)}c.closePath();fs('#fff7b0',3);E(0,0,18,18);fs('#fff',0);c.restore()}
c.restore()
c.restore()
// photo dropping onto the pile (lands exactly where the top one sits)
if(fa>0){const x0=108,y0=214+bb(.46),[x1,y1,r1]=top,x=x0+(x1-x0)*fa,y=y0+(y1-y0)*fa-S(fa*P)*30;pic(x,y,r1*fa+S(fa*P)*.6,dv)}
else pic(...top)
const sp=cl((t-.74)/.2)
if(sp>0&&sp<1)for(let k=0;k<3;k++){const q=-2.2+k*.75,r=32+sp*12,z=S(sp*P)*8;c.save();c.translate(212+C(q)*r,188+S(q)*r);B();for(let j=0;j<8;j++){const o=j%2?z*.3:z;c.lineTo(C(j*P/4)*o,S(j*P/4)*o)}c.closePath();fs('#ffe066',2);c.restore()}
}
