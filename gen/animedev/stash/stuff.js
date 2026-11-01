// anime girl in a teal hoodie leaning back against a cabinet and shoving its overstuffed "stash" drawer shut as messy changes keep bursting out
export const frames=20,delay=75,rim=4
export default(c,t)=>{
const P=Math.PI,T=P*2,S=Math.sin,C=Math.cos,L='#2a1f2d',a=T*t
const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
const fs=(f,w=4)=>{if(f){c.fillStyle=f;c.fill()}if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const st=(w,s=L)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const E=(x,y,a,b,r=0)=>{B();c.ellipse(x,y,a,b,r,0,T)}
const ln=(p,w,s=L)=>{B();M(p[0],p[1]);for(let k=2;k<p.length;k+=2)c.lineTo(p[k],p[k+1]);st(w,s)}
const limb=(p,w,f)=>{ln(p,w+8);ln(p,w,f)}
c.translate(141,240);c.scale(.96,.96);c.translate(-128,-242)
const ez=x=>x*x*(3-2*x)
const bump=(u,v,w)=>t<u?0:t<u+.05?1-(1-(t-u)/.05)**2:t<v?1:t<w?1-ez((t-v)/(w-v)):0
const p=bump(.06,.3,.44)+.65*bump(.58,.68,.8),dx=p*22
const sk='#e2b48a',sh='#c99468',hr='#7a4a2c',hs='#5a321c',hl='#a8714a',hd='#2fa08a'
const sheet=(x,y,r,w=26,h=32)=>{c.save();c.translate(x,y);c.rotate(r);B();c.rect(-w/2,-h/2,w,h);fs('#fff',3);for(let k=0;k<3;k++){c.fillStyle=k%2?'#ff6b6b':'#4fc46a';c.fillRect(-w/2+4,-h/2+6+k*8,w-10-k*3,3.5)}c.restore()}
// stuff bursting out of the drawer top
const up=4+p*30,ox=-dx
sheet(140+ox*.7,118-up*.8,-.5+p*.3);sheet(190,116-up*.5,.45-p*.2)
c.save();c.translate(168+ox*.4,112-up*1.05);c.rotate(-.2+p*.4)
E(0,0,13,10);fs('#ffd84a',3.5);E(8,-11,8,8);fs('#ffd84a',3.5);B();M(15,-11);c.lineTo(22,-9);c.lineTo(15,-7);fs('#ff8a2a',2.5);E(10,-13,1.6,1.6);c.fillStyle=L;c.fill();c.restore()
const cb=()=>{B();M(126+ox,122);Z(116+ox,106-up,138+ox,92-up*1.1,142+ox,108-up*.6);Z(146+ox,122-up*.4,128+ox,120-up,134+ox,104-up*1.1)}
cb();st(7);cb();st(3,'#ff6bb0')
sheet(208,120-up*.6,.2-p*.3,24,30);sheet(124+ox,120-up*.95,-.15,22,28)
// a sheet that escapes and flutters off
{const q=(t+.94)%1;if(q<.55){const z=S(q/.55*P),x=150+q*80,y=96-q*66+S(q*22)*5;sheet(x,y,q*9,22*Math.max(.15,z),28*Math.max(.15,z))}}
// cabinet (side view): body, top, label
B();c.rect(124,128,98,108);fs('#d98f52',4.5)
B();c.roundRect(116,120,112,10,3);fs('#b8733c',4)
for(const x of[132,214]){B();c.rect(x-5,234,10,8);fs('#8a5530',3)}
B();c.roundRect(138,142,74,30,5);fs('#fff4d6',3.5);c.fillStyle=L;c.font='bold 20px DejaVu Sans Mono';c.textAlign='center';c.fillText('stash',175,164)
B();M(132,186);c.lineTo(222,186);st(3,'#b8733c')
// bottom drawer front with a sock poking out
B();M(120,198);Q(112,194+S(a*2)*2,106,200);Q(104,208,112,206);fs('#f4f4ff',3)
B();c.rect(116,190,10,42);fs('#e9a668',3.5)
// top drawer: box slides out to the left, front plank
B();c.rect(118-dx,136,10+dx,46);fs('#c47a40',3.5);B();M(122-dx,136);c.lineTo(128,136);st(3)
B();c.rect(114-dx,134,10,50);fs('#e9a668',3.5);B();c.roundRect(108-dx,152,8,14,3);fs('#8a5530',3)
// girl hip-checking the drawer shut, upper body leaning away
const lx=-dx*.9,lean=-.16-p*.06,bx=94+lx,W=(x,y)=>[bx+x*C(lean)-y*S(lean),240+x*S(lean)+y*C(lean)]
c.save();c.translate(bx,240);c.rotate(lean)
limb([-4,-60,-14,-30,-24,-4],10,'#3a4a6a');limb([12,-60,14,-30,10,-4],10,'#3a4a6a')
for(const x of[-24,10]){E(x-2,-3,11,6.5);fs('#fff',3.5);B();M(x-12,-1);c.lineTo(x+8,-1);st(3,'#e8433a')}
B();M(-16,-114);Q(4,-124,24,-114);c.lineTo(30,-56);Q(6,-48,-18,-58);c.closePath();fs(hd)
B();M(-14,-72);Q(6,-68,28,-72);st(2.5,'#1f7a68');ln([-2,-112,-4,-92],2.5,'#fff');ln([10,-112,12,-92],2.5,'#fff')
const wv=S(a*3)*.3
c.save();c.translate(-12,-104);limb([0,0,-18,8,-30,-8],9,hd);c.translate(-32,-12);c.rotate(wv);E(0,0,8,9);fs(sk,3.2);for(const k of[-1,0,1]){B();M(-2+k*4,-6);c.lineTo(-3+k*5,-14);st(5);B();M(-2+k*4,-6);c.lineTo(-3+k*5,-14);st(2.5,sk)}c.restore()
c.restore()
// other arm pressing down on the cabinet top
const[sx,sy]=W(20,-106),hx=128-dx*.5,hy=118
limb([sx,sy,(sx+hx)/2+2,(sy+hy)/2+12,hx,hy],9,hd);E(hx+2,hy,9,6.5);fs(sk,3.2)
// head
{const[x,y]=W(4,-148);c.save();c.translate(x,y)}c.rotate(-.1-p*.06)
const R=38
const sw=S(a*2)*3+p*3
B();M(-R+6,-30);Z(-R-16,-38,-R-16-sw,0,-R-6-sw,26);Z(-R-4,8,-R-2,-12,-R+10,-14);c.closePath();fs(hr);E(-R+2,-26,6,7);fs('#ffd84a',3)
B();M(-R,-8);Z(-R,18,-20,36,0,38);Z(20,36,R,18,R,-8);c.arc(0,-8,R,0,P,true);fs(sk)
c.save();c.clip();B();M(-R,-4);Q(0,10,R,-4);c.lineTo(R,-60);c.lineTo(-R,-60);c.fillStyle=sh;c.fill();c.restore()
for(const k of[-1,1]){const x=k*15
  if(p>.5){B();M(x-8*k,3);c.lineTo(x+6*k,9);c.lineTo(x-8*k,15);st(3.8)}
  else{c.save();E(x,10,9,11);c.fillStyle='#fff';c.fill();c.clip();E(x-4,11,6,8);c.fillStyle='#6a8a3a';c.fill();E(x-4,8,7,4);c.fillStyle='#3a5a1a';c.fill();E(x-4,11,2.6,3.6);c.fillStyle='#1a2a0a';c.fill();E(x-2,8,2,2.4);c.fillStyle='#fff';c.fill();c.restore()
    B();c.ellipse(x,10,9,11,0,P*1.05,P*1.95);st(3.4)}}
if(p>.5){B();c.roundRect(-10,22,20,9,3);fs('#fff',2.6);B();M(-9,26.5);c.lineTo(9,26.5);st(1.2)}
else{B();M(-11,23);Q(0,35,11,23);Q(0,27,-11,23);fs('#fff',2.8);B();M(-6,24);c.lineTo(-6,29);M(0,25);c.lineTo(0,30);M(6,24);c.lineTo(6,29);st(1.2)}
E(-26,21,6,3.4);c.fillStyle='#e88a7a';c.fill();E(26,21,6,3.4);c.fill()
B();M(-R-5,18);c.arc(0,-8,R+5,P*.9,P*2.1)
const bl=[[R+5,18],[R+4,32,1],[30,-2],[30,10,1],[18,-10],[10,4,1],[0,-14],[-8,2,1],[-16,-10],[-30,8,1],[-32,-4],[-R-4,30,1],[-R-5,18]]
for(let k=1;k<bl.length;k++){const[x,y,tp]=bl[k],[u,v]=bl[k-1];tp?Q(u+(x-u)*.1,v+(y-v)*.8,x,y):Q(u+(x-u)*.7,v+(y-v)*.4,x,y)}
c.closePath();fs(hr);B();M(-12,-38);Q(-24,-34,-28,-20);st(4,hl)
B();M(4,-46);Q(-2,-58,10,-62);st(5);B();M(4,-46);Q(-2,-58,10,-62);st(2.5,hr)
c.restore()
// sweat
{const q=(t*2)%1;c.save();c.translate(bx-58,86+q*14);c.scale(1-q*.3,1-q*.3);B();M(0,-8);Q(6,2,0,5);Q(-6,2,0,-8);fs('#8fd8ff',2.5);c.restore()}
}
