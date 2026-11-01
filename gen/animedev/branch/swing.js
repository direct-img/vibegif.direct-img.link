// anime girl with long blonde hair and a flower crown swinging happily on a rope swing that hangs from a git branch with commit dots
export const frames=14,delay=95,rim=4
export default(c,t)=>{
c.translate(0,3)
const P=Math.PI,T=P*2,S=Math.sin,C=Math.cos,L='#2a1f2d',a=T*t
const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
const fs=(f,w=4)=>{if(f){c.fillStyle=f;c.fill()}if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const st=(w,s=L)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const E=(x,y,a,b,r=0)=>{B();c.ellipse(x,y,a,b,r,0,T)}
const ln=(p,w,s=L)=>{B();M(p[0],p[1]);for(let k=2;k<p.length;k+=2)c.lineTo(p[k],p[k+1]);st(w,s)}
const limb=(p,w,f)=>{ln(p,w+8);ln(p,w,f)}
const sk='#fde2cf',sh='#f0c2a8',hr='#f7d46a',hs='#dca63e',hl='#fff3c4',gr='#3fb950',bl='#4a8fe0'
const th=.3*S(a),v=C(a),L0=160,by=24
// git tree: main line + branch curving off it
B();M(30,238);c.lineTo(30,52);st(13);B();M(30,238);c.lineTo(30,52);st(6,bl)
B();M(30,176);Z(30,110,40,by,100,by);c.lineTo(238,by);st(13);B();M(30,176);Z(30,110,40,by,100,by);c.lineTo(238,by);st(6,gr)
const nd=(x,y,k)=>{E(x,y,8,8);fs('#fff',4);E(x,y,3.4,3.4);fs(k,0)}
nd(30,226,bl);nd(30,176,bl);nd(30,112,bl);nd(30,52,bl);nd(84,by,gr);nd(148,by,gr);nd(232,by,gr)
// leaves on the branch
for(const[x,y,r,k]of[[60,48,-.6,0],[112,22,-.7,1],[198,22,-1,2],[224,42,.5,3],[46,84,2.6,4]]){c.save();c.translate(x,y);c.rotate(r+S(a*2+k)*.15)
  B();M(0,0);Q(6,-8,16,0);Q(6,8,0,0);fs('#7bd389',2.5);c.restore()}
// leaves drifting down
for(let k=0;k<2;k++){const p=(t+k/2)%1,y=40+p*170,x=[70,200][k]+S(p*T*1.5+k)*14,z=S(p*P)*1.2
  c.save();c.translate(x,y);c.rotate(S(p*T*1.5+k)*.9);c.scale(z,z);B();M(-8,0);Q(-2,-7,8,0);Q(-2,7,-8,0);fs('#7bd389',2.5);c.restore()}
// swing: parallelogram, both ropes turn by th about their knots
const sx=L0*S(th),sy=L0*C(th),cx=138+sx,cy=by+sy
c.save();c.translate(cx,cy);c.scale(.9,.9)
const lg=-v*.5,hx=-v*16
// hair behind: two wavy curtains ending in curls, trailing the motion
B();M(-38,-100);Z(-60,-66,-48+hx*.3,-36,-56+hx,-12);Q(-50+hx,6,-34+hx,-4);Q(-26+hx*.5,-22,-20,-44)
c.lineTo(20,-44);Q(26+hx*.5,-22,34+hx,-4);Q(50+hx,6,56+hx,-12);Z(48+hx*.3,-36,60,-66,38,-100);c.closePath();fs(hr)
for(const k of[-1,1]){B();M(k*40,-70);Q(k*44+hx*.2,-36,k*44+hx,-10);st(2.5,hs)}
// ropes (drawn in seat space so they sit in front of the hair)
c.save();for(const k of[-1,1]){const x=k*42;B();M(x,0);c.lineTo(x-sx/.9,-sy/.9);st(6.5);B();M(x,0);c.lineTo(x-sx/.9,-sy/.9);st(3,'#d9b07a')}c.restore()
// legs
for(const k of[-1,1]){c.save();c.translate(k*11,0);c.rotate(lg+k*.05);limb([0,0,0,40],10,sk);E(k*2,44,8,10,0);fs('#ff8fa3');c.restore()}
// seat
B();c.roundRect(-50,-2,100,11,4);fs('#b97a45',3.5)
// dress
B();M(-14,-46);c.lineTo(14,-46);c.lineTo(30,2);Q(0,10,-30,2);c.closePath();fs('#8fe3c8')
B();M(-28,-4);Q(0,4,28,-4);st(2.5,'#fff')
B();M(-14,-46);c.lineTo(-10,-58);M(14,-46);c.lineTo(10,-58);st(3)
// arms up to ropes
for(const k of[-1,1]){limb([k*15,-42,k*32,-40,k*41,-62],7,sk);E(k*42,-64,6,6.5);fs(sk,3)}
// head
c.save();c.translate(0,-96);c.rotate(-th*.4)
const R=40
B();M(-R,-8);Z(-R,20,-21,39,0,41);Z(21,39,R,20,R,-8);c.arc(0,-8,R,0,P,true);fs(sk)
c.save();c.clip();B();M(-R,-6);Q(0,10,R,-6);c.lineTo(R,-60);c.lineTo(-R,-60);c.fillStyle=sh;c.fill();c.restore()
// happy closed eyes
for(const k of[-1,1]){B();M(k*17-9,12);Q(k*17,0,k*17+9,12);st(4);B();M(k*17+k*9,12);c.lineTo(k*17+k*13,9);st(3)}
E(-28,22,6,3.5);c.fillStyle='#ffb0b0';c.fill();E(28,22,6,3.5);c.fill()
// open smile
B();M(-9,24);Q(0,40,9,24);Q(0,27,-9,24);fs('#c0394f',3);B();M(-4,32);Q(0,28,4,32);Q(0,36,-4,32);c.fillStyle='#ff8a9a';c.fill()
// bangs swept to one side
B();M(-R-5,22);c.arc(0,-8,R+5,P*.9,P*2.1)
const bl2=[[R+5,22],[R-2,36,1],[30,-4],[28,8,1],[16,-14],[6,2,1],[-2,-16],[-14,2,1],[-20,-12],[-32,8,1],[-35,-4],[-R+1,38,1],[-R-5,22]]
for(let k=1;k<bl2.length;k++){const[x,y,tp]=bl2[k],[u,v]=bl2[k-1];tp?Q(u+(x-u)*.1,v+(y-v)*.8,x,y):Q(u+(x-u)*.7,v+(y-v)*.4,x,y)}
c.closePath();fs(hr)
B();M(-10,-40);Q(-22,-36,-26,-22);st(4,hl);B();M(8,-36);Q(14,-18,6,0);st(2,hs);B();M(-8,-38);Q(-12,-22,-14,0);st(2,hs)
// flower crown
for(let k=0;k<7;k++){const q=P*1.12+k*P*.126,x=C(q)*(R+2),y=-8+S(q)*(R+2),f=['#ff8fa3','#fff','#ffd84a'][k%3]
  for(let j=0;j<5;j++){E(x+C(j*T/5)*4,y+S(j*T/5)*4,3.6,3.6);fs(f,1.6)}E(x,y,2.4,2.4);fs('#f5a623',0)}
c.restore()
c.restore()
}
