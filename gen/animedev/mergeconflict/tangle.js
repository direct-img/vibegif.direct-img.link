// flustered anime girl with a cobalt-blue bob, yellow hairband and spinning swirl eyes wriggling while tangled up in two crossed git branch lines, conflict markers on each
export const frames=14,delay=85,rim=4
export default(c,t)=>{
const P=Math.PI,T=P*2,S=Math.sin,C=Math.cos,L='#2a1f2d',a=T*t
const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
const fs=(f,w=4)=>{if(f){c.fillStyle=f;c.fill()}if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const st=(w,s=L)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const E=(x,y,a,b,r=0)=>{B();c.ellipse(x,y,a,b,r,0,T)}
const sk='#f0c7a0',sh='#dcaa82',hr='#2a48c8',hs='#1c2f8e',hl='#6a8cf0',cg='#7fd1a8',cs2='#4fa880',OR='#ff8a3c',BL='#3d8be0'
// body wriggle: rotation about the feet plus a little hop
const w=S(a*2)*.09,hp=Math.abs(S(a*2))*-4,X0=128,Y0=232+hp
const W=(x,y)=>[X0+x*C(w)-y*S(w),Y0+x*S(w)+y*C(w)]
// a branch line drawn as a thick coloured cord
const cord=(f,col,wd=7)=>{f();st(wd+8);f();st(wd,col)}
const nd=(x,y,col)=>{E(x,y,9,9);fs('#fff',4);E(x,y,4,4);fs(col,0)}
// loose ends from the corners into the tangle
const tug=S(a*2)*9
const ends=[[26,44,-28,-96,OR],[230,44,30,-100,BL],[30,220,-32,-62,BL],[226,222,32,-56,OR]]
for(const[x,y,u,v,col]of ends){const[p,q]=W(u,v);cord(()=>{B();M(x,y);Q((x+p)/2+tug*(x<128?1:-1),(y+q)/2-10,p,q)},col)}
// coil back halves (behind her)
const coil=(y,r,col,fr)=>{c.save();c.translate(X0,Y0);c.rotate(w);cord(()=>{B();c.ellipse(0,y,39,9,r,fr?0:P,fr?P:T)},col);c.restore()}
const cs=[[-96,.32,OR],[-92,-.34,BL],[-68,.3,OR],[-66,-.3,BL]]
for(const[y,r,col]of cs)coil(y,r,col,0)
c.save();c.translate(X0,Y0);c.rotate(w)
// chin-length bob behind the head
c.save();c.translate(0,-150);c.rotate(w*.6);B();M(-47,-14);Z(-52,16,-50,34,-40,42);Q(-30,46,-24,36);c.lineTo(24,36);Q(30,46,40,42);Z(50,34,52,16,47,-14);c.closePath();fs(hs);c.restore()
// legs kicking
for(const k of[-1,1]){const s=S(a*2+(k>0?P:0))*.25;c.save();c.translate(k*10,-44);c.rotate(s);B();M(0,0);c.lineTo(0,34);st(18);B();M(0,0);c.lineTo(0,34);st(10,'#fafafa');E(k*2,38,10,6.5);fs('#2f3e7a',3.5);c.restore()}
// cardigan body
B();M(-28,-112);Q(0,-120,28,-112);c.lineTo(36,-44);Q(0,-36,-36,-44);c.closePath();fs(cg)
B();M(-6,-114);c.lineTo(-4,-44);M(6,-114);c.lineTo(4,-44);st(2.5,cs2);B();M(-6,-114);c.lineTo(6,-114);c.lineTo(5,-44);c.lineTo(-5,-44);c.closePath();c.fillStyle='#fff';c.fill()
// pinned arms with flapping hands
for(const k of[-1,1]){B();M(k*30,-110);Q(k*42,-90,k*40,-60);st(18);B();M(k*30,-110);Q(k*42,-90,k*40,-60);st(10,cg);const f=S(a*4+k)*.5;c.save();c.translate(k*41,-56);c.rotate(f*k);E(k*3,2,7,8);fs(sk,3.5);c.restore()}
c.restore()
// coil front halves (over her), crossing each other
for(const[y,r,col]of cs)coil(y,r,col,1)
// head
c.save();const[hx,hy]=W(0,-150);c.translate(hx,hy);c.rotate(w*1.6)
const R=40
B();M(-R,-8);Z(-R,20,-21,39,0,41);Z(21,39,R,20,R,-8);c.arc(0,-8,R,0,P,true);fs(sk)
c.save();c.clip();B();M(-R,-4);Q(0,10,R,-4);c.lineTo(R,-60);c.lineTo(-R,-60);c.fillStyle=sh;c.fill();c.restore()
// dizzy swirl eyes
for(const k of[-1,1]){const x=k*16;E(x,11,10,12);c.fillStyle='#fff';c.fill();c.save();E(x,11,10,12);c.clip();B()
  for(let j=0;j<40;j++){const q=j*.42+a*2*k,r=j*.25;c.lineTo(x+C(q)*r,11+S(q)*r*1.15)}st(2.6,'#1c2f8e');c.restore()
  B();c.ellipse(x,11,10,12,0,P*1.05,P*1.95);st(3.6);B();M(x+k*9,4);c.lineTo(x+k*13,1);st(3)}
E(-30,26,6,3.5);c.fillStyle='#ffb0c0';c.fill();E(30,26,6,3.5);c.fill()
// wobbly panicked mouth
B();M(-8,30);Q(-4,25,0,30);Q(4,35,8,30);st(2.6)
// side-parted bangs
B();M(-R-5,22);c.arc(0,-8,R+5,P*.9,P*2.1)
const bl=[[R+5,22],[R+2,44,1],[32,0],[28,-2,1],[18,-14],[4,-2,1],[-4,-18],[-14,-4,1],[-22,-14],[-32,0,1],[-36,-4],[-R-2,44,1],[-R-5,22]]
for(let k=1;k<bl.length;k++){const[x,y,tp]=bl[k],[u,v]=bl[k-1];tp?Q(u+(x-u)*.1,v+(y-v)*.8,x,y):Q(u+(x-u)*.7,v+(y-v)*.4,x,y)}
c.closePath();fs(hr)
B();M(-10,-42);Q(-24,-38,-30,-24);st(4,hl);B();M(10,-38);Q(16,-22,8,-6);st(2,hs);B();M(-8,-40);Q(-12,-24,-12,-8);st(2,hs)
// yellow hairband
B();M(-R-3,-4);Q(0,-58,R+3,-4);st(11);B();M(-R-3,-4);Q(0,-58,R+3,-4);st(5.5,'#ffd23a')
c.restore()
// sweat drops popping off
for(let k=0;k<2;k++){const p=(t*2+k/2)%1,s=k?1:-1,x=hx+s*(44+p*16),y=hy-26-p*10+p*p*30,z=S(p*P)
  c.save();c.translate(x,y);c.rotate(s*.5);c.scale(z,z);B();M(0,-9);Q(7,2,0,6);Q(-7,2,0,-9);fs('#8fd8ff',2.5);c.restore()}
// corner commit nodes + conflict markers
for(const[x,y,,,col]of ends)nd(x,y,col)
c.font='bold 13px DejaVu Sans Mono';c.textAlign='center';c.lineWidth=4;c.strokeStyle='#fff'
for(const[s,x,y,col]of[['<<<<<<<',50,22,OR],['>>>>>>>',206,22,BL]]){c.strokeText(s,x,y);c.fillStyle=col;c.fillText(s,x,y)}
}
