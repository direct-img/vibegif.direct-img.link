// nervous anime girl with pink hair buns pulling the bottom commit block out of a wobbly tower and restacking it on top
export const frames=20,delay=90,rim=4
export default(c,t)=>{
const P=Math.PI,T=P*2,S=Math.sin,C=Math.cos,L='#2a1f2d',a=T*t
const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
const fs=(f,w=4)=>{if(f){c.fillStyle=f;c.fill()}if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const st=(w,s=L)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const E=(x,y,a,b,r=0)=>{B();c.ellipse(x,y,a,b,r,0,T)}
const ln=(p,w,s=L)=>{B();M(p[0],p[1]);for(let k=2;k<p.length;k+=2)c.lineTo(p[k],p[k+1]);st(w,s)}
const limb=(p,w,f)=>{ln(p,w+8);ln(p,w,f)}
c.translate(132,247);c.scale(1.15,1.15);c.translate(-135,-249)
const cl=x=>Math.min(1,Math.max(0,x)),ez=x=>x*x*(3-2*x),sg=(u,v)=>cl((t-u)/(v-u))
const sk='#ffe6dc',sh='#f4c4b4',hr='#ff9ec8',hs='#e06aa4',hl='#ffd8ec',BH=27,TX=178,G=238
// commit block
const blk=(x,y,r=0)=>{c.save();c.translate(x,y);c.rotate(r);B();c.roundRect(-30,-BH/2,60,BH,5);fs('#6cc3ff',4);B();c.roundRect(-26,-BH/2+3,52,6,3);c.fillStyle='#b5e3ff';c.fill()
  B();M(-20,2);c.lineTo(20,2);st(3.4);E(0,2,6.5,6.5);fs('#fff',3.4);c.restore()}
// timeline
const out=ez(sg(.08,.34)),dr=sg(.34,.42),lf=ez(sg(.46,.78)),bk=ez(sg(.84,1))
const drop=dr*dr*BH,wb=t>.42?S((t-.42)*44)*.07*Math.exp(-(t-.42)*9):0,wb2=t>.78?S((t-.78)*50)*.035*Math.exp(-(t-.78)*14):0
// block in hand
let bx,by
if(t<.46){bx=TX-60*out;by=G-BH/2}else if(t<.84){bx=116+(TX-116)*lf;by=G-BH/2-(G-BH/2-(G-BH*3.5))*lf-S(lf*P)*34}else{bx=TX;by=G-BH*3.5+BH*3*bk}
// girl pose: squat s, body x
const s=t<.46?1:t<.84?1-ez(sg(.46,.6))*1+0:bk,gx=96+(t>.46&&t<.84?S(lf*P)*4+lf*10:t>=.84?10-10*bk:0)
const sq=s*20,lean=s*10,hip=[gx+lean*.4,G-44+sq],sho=[gx+lean,G-80+sq*1.3],hd=[gx+lean*1.5,G-114+sq*1.4]
const nv=S(a*9)*1.2
// legs
for(const k of[-1,1]){const fx=gx+k*11,fy=G-4,kx=(hip[0]+fx)/2+s*16+k*2,ky=(hip[1]+fy)/2-s*6
  limb([hip[0]+k*6,hip[1],kx,ky,fx,fy],9,'#fff');E(fx+4,G-3,10,5.5);fs('#3a2a3a')}
// dashed rebase arrow: bottom goes to the top
c.save();c.setLineDash([7,6]);c.lineDashOffset=-t*26;B();M(TX+38,G-12);Q(TX+62,G-BH*2,TX+40,G-BH*3.6);st(4,'#8fa6c8');c.restore()
B();M(TX+50,G-BH*3.6-8);c.lineTo(TX+36,G-BH*3.6-2);c.lineTo(TX+46,G-BH*3.6+10);fs(0,4);B();M(TX+50,G-BH*3.6-8);c.lineTo(TX+36,G-BH*3.6-2);c.lineTo(TX+46,G-BH*3.6+10);st(4,'#8fa6c8')
// tower (blocks above the base drop when the base is pulled, then wobble)
c.save();c.translate(TX-30,G);c.rotate(-(wb+wb2))
const up=t<.34?BH:t<.42?BH-drop:0
for(let k=0;k<3;k++)blk(30,-BH/2-BH*k-up)
if(t>=.84)blk(30,-BH/2-BH*3)
c.restore()
// dress + body
B();M(sho[0]-15,sho[1]);c.lineTo(sho[0]+15,sho[1]);c.lineTo(hip[0]+24,hip[1]+8);Q(hip[0],hip[1]+14,hip[0]-24,hip[1]+8);c.closePath();fs('#e8434f')
B();M(sho[0]-9,sho[1]);c.lineTo(sho[0],sho[1]+12);c.lineTo(sho[0]+9,sho[1]);fs('#fff',3)
// arm behind
const h1=[bx-31,by+7],h2=[bx-31,by-6]
limb([sho[0]-8,sho[1]+4,(sho[0]+h1[0])/2,(sho[1]+h1[1])/2+8,h1[0],h1[1]],8,'#fff')
// block in hand (when out of the tower)
if(t<.84)blk(bx,by,t>.46?-S(lf*P)*.25:0)
// front arm + hands
limb([sho[0]+6,sho[1]+4,(sho[0]+h2[0])/2,(sho[1]+h2[1])/2+6,h2[0],h2[1]],8,'#fff')
E(h1[0],h1[1],6,6.5);fs(sk,3.2);E(h2[0],h2[1],6,6.5);fs(sk,3.2)
// head
c.save();c.translate(hd[0]+nv*.4,hd[1]);c.rotate(.08+s*.08)
const R=36,sk2=t>.36&&t<.6
// buns
for(const k of[-1,1]){E(k*30,-36,15,14);fs(hr);B();c.arc(k*30,-36,9,P*1.1,P*1.7);st(2.5,hl)}
B();M(-R,-6);Z(-R,18,-19,35,0,37);Z(19,35,R,18,R,-6);c.arc(0,-6,R,0,P,true);fs(sk)
c.save();c.clip();B();M(-R,-2);Q(0,10,R,-2);c.lineTo(R,-60);c.lineTo(-R,-60);c.fillStyle=sh;c.fill();c.restore()
// eyes: darting nervous irises, shrinking on the drop
for(const k of[-1,1]){const x=k*15+3,ir=sk2?3.4:6,dx=sk2?0:S(a*3)*2.4+1.5
  E(x,11,9.5,11.5);c.fillStyle='#fff';c.fill()
  c.save();E(x,11,9.5,11.5);c.clip();E(x+dx,12,ir,ir*1.25);c.fillStyle='#3fb3c9';c.fill();E(x+dx,12,ir*.5,ir*.65);c.fillStyle='#14343c';c.fill();E(x+dx+1.6,9,ir*.32,ir*.38);c.fillStyle='#fff';c.fill();c.restore()
  B();c.ellipse(x,11,9.5,11.5,0,P*1.05,P*1.95);st(3.4)
  B();M(x-k*-1-7,-6+(k<0?2:0));Q(x,-10,x+7,-4+(k<0?0:2));st(2.4,'#c44a86')}
// worried wavy mouth / tiny o on the drop
if(sk2){E(3,28,4,5);fs('#a0304a',2.6)}else{B();M(-6,28);Q(-3,25,0,28);Q(3,31,6,28);Q(9,25,11,28);st(2.4)}
E(-24,22,5.5,3);c.fillStyle='#ffb3c2';c.fill();E(28,22,5.5,3);c.fill()
// bangs
B();M(-R-4,14);c.arc(0,-6,R+4,P*.92,P*2.08)
const bl=[[R+4,14],[R,30,1],[28,-2],[22,6,1],[12,-10],[4,2,1],[-4,-12],[-12,2,1],[-22,-8],[-30,6,1],[-32,-2],[-R,28,1],[-R-4,14]]
for(let k=1;k<bl.length;k++){const[x,y,tp]=bl[k],[u,v]=bl[k-1];tp?Q(u+(x-u)*.1,v+(y-v)*.8,x,y):Q(u+(x-u)*.7,v+(y-v)*.4,x,y)}
c.closePath();fs(hr);B();M(-10,-34);Q(-22,-30,-26,-18);st(3.5,hl)
c.restore()
// sweat: a steady drop, and a burst when the tower drops
const sp=sg(.38,.62)
for(let k=0;k<3;k++){if(sp<=0||sp>=1)break;const q=-2.4+k*.6,r=40+sp*18,z=S(sp*P);c.save();c.translate(hd[0]+C(q)*r,hd[1]-10+S(q)*r);c.rotate(q+P/2);c.scale(z,z);B();M(0,-8);Q(6,2,0,5);Q(-6,2,0,-8);fs('#8fd8ff',2.5);c.restore()}
{const p=(t*2)%1;c.save();c.translate(hd[0]-38,hd[1]-8+p*16);c.scale(1-p*.3,1-p*.3);B();M(0,-8);Q(6,2,0,5);Q(-6,2,0,-8);fs('#8fd8ff',2.5);c.restore()}
}
