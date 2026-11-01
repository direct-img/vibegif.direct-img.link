// anime girl with long strawberry-blonde wavy hair, a yellow ribbon and a periwinkle sweater hugging and nuzzling a big yellow JS block with heart eyes as hearts pop up
export const frames=16,delay=80,rim=4
export default(c,t)=>{
const P=Math.PI,T=P*2,S=Math.sin,C=Math.cos,L='#2a1f2d',a=T*t
const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
const fs=(f,w=4)=>{if(f){c.fillStyle=f;c.fill()}if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const st=(w,s=L)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const E=(x,y,a,b,r=0)=>{B();c.ellipse(x,y,a,b,r,0,T)}
const ln=(p,w,s=L)=>{B();M(p[0],p[1]);for(let k=2;k<p.length;k+=2)c.lineTo(p[k],p[k+1]);st(w,s)}
const limb=(p,w,f)=>{ln(p,w+8);ln(p,w,f)}
const ht=(x,y,s)=>{B();M(x,y+s*.9);Z(x-s*1.4,y,x-s*.9,y-s*1.1,x,y-s*.45);Z(x+s*.9,y-s*1.1,x+s*1.4,y,x,y+s*.9)}
const sk='#ffe9df',sh='#f7cdbd',hr='#f4b98a',hs='#dc8f5e',hl='#ffe1c2',sw='#8fa6ef',sw2='#6a82d6',yl='#f7df1e'
const nz=S(a*2),bx=nz*3.5
// long wavy hair flowing down behind her
B();M(64,70);Z(28,110,52,150,34,186);Q(26,214,46,236);Q(60,226,64,240);Q(80,224,92,238);Q(104,220,112,200);c.lineTo(126,96);c.closePath();fs(hr)
for(const[x,y]of[[50,120],[66,150],[82,180]]){B();M(x,y);Q(x-14,y+30,x-4,y+58);st(2.5,hs)}
// sweater body (behind the block)
B();M(58,240);c.lineTo(64,156);Q(92,136,124,148);c.lineTo(126,240);c.closePath();fs(sw)
B();M(76,146);Q(94,160,112,146);st(3,'#fff')
// back arm wrapping round the block's side
limb([70,160,74,196,120,196],10,sw);B();M(100,190);c.lineTo(102,202);st(2.5,sw2)
// the JS block, squished a touch by the hug
c.save();c.translate(170+bx*.3,238);c.scale(1+nz*.012,1-nz*.012)
B();c.rect(-58,-118,116,116);fs(yl,4.5)
c.fillStyle='#111';c.font='bold 50px DejaVu Sans';c.textAlign='right';c.fillText('JS',52,-12)
c.restore()
// hand on the block front
E(124,196,9,10);fs(sk,3.5)
// head nuzzling the top corner
c.save();c.translate(116+bx,98);c.rotate(.26+nz*.1)
const R=42
// yellow ribbon
c.save();c.translate(-30,-42);c.rotate(-.5);B();M(0,0);Q(-20,-20,-24,-2);Q(-20,12,0,0);M(0,0);Q(20,-20,24,-2);Q(20,12,0,0);fs(yl,3.5)
B();M(-2,2);Q(-8,18,-14,26);M(2,2);Q(8,18,6,28);st(9);B();M(-2,2);Q(-8,18,-14,26);M(2,2);Q(8,18,6,28);st(4,yl);E(0,0,5,5);fs(yl,3);c.restore()
B();M(-R,-8);Z(-R,20,-21,39,0,41);Z(21,39,R,20,R,-8);c.arc(0,-8,R,0,P,true);fs(sk)
c.save();c.clip();B();M(-R,-4);Q(0,10,R,-4);c.lineTo(R,-60);c.lineTo(-R,-60);c.fillStyle=sh;c.fill();c.restore()
// heart eyes, pulsing
const hp=1+S(a*4)*.1
for(const k of[-1,1]){const x=k*16;E(x,11,10,12);c.fillStyle='#fff';c.fill()
  ht(x,12,8.5*hp);fs('#ff4f86',2.4);E(x-3,8,2.2,2.4);c.fillStyle='#fff';c.fill()
  B();c.ellipse(x,11,10,12.5,0,P*1.06,P*1.94);st(3.6);B();M(x+k*9,5);c.lineTo(x+k*13,2);st(3)}
E(-29,28,7.5,4);c.fillStyle='#ffa0b4';c.fill();E(29,28,7.5,4);c.fill()
for(const k of[-1,1])for(const d of[-3,0,3]){B();M(k*29+d+1.5,25.5);c.lineTo(k*29+d-1.5,30.5);st(1.4,'#ff7090')}
// happy cat mouth
B();M(-8,29);Q(-4,35,0,30);Q(4,35,8,29);st(2.6)
// wavy bangs
B();M(-R-5,22);c.arc(0,-8,R+5,P*.9,P*2.1)
const bl=[[R+5,22],[R+2,40,1],[32,-2],[28,6,1],[18,-12],[8,2,1],[0,-16],[-10,2,1],[-18,-12],[-30,6,1],[-34,-2],[-R-2,40,1],[-R-5,22]]
for(let k=1;k<bl.length;k++){const[x,y,tp]=bl[k],[u,v]=bl[k-1];tp?Q(u+(x-u)*.1,v+(y-v)*.8,x,y):Q(u+(x-u)*.7,v+(y-v)*.4,x,y)}
c.closePath();fs(hr);B();M(-12,-42);Q(-26,-38,-30,-24);st(4,hl);B();M(12,-38);Q(18,-22,10,-4);st(2,hs);B();M(-6,-40);Q(-10,-24,-10,-6);st(2,hs)
c.restore()
// front arm draped over the top of the block
const fa=()=>{B();M(130,146);Q(166,100,196,140)};fa();st(18);fa();st(10,sw);E(197,144,9,10);fs(sk,3.5)
// hearts popping up and drifting
for(let k=0;k<4;k++){const p=(t+k/4)%1,x=[206,172,230,190][k]+S(p*T+k)*8,y=116-p*96,z=S(Math.min(1,p*1.3)*P)*([11,9,8,10][k])
  if(z<1)continue;ht(x,y,z);fs(['#ff4f86','#ff7aa8','#ff4f86','#ff9ec4'][k],2.6)}
}
