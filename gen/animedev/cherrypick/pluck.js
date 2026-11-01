// anime girl with twin braids hopping up to pluck the one shiny cherry off a git branch of commit cherries and dropping it into her "main" basket
export const frames=20,delay=95,rim=4
export default(c,t)=>{
const P=Math.PI,T=P*2,S=Math.sin,C=Math.cos,L='#2a1f2d',a=T*t
const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
const fs=(f,w=4)=>{if(f){c.fillStyle=f;c.fill()}if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const st=(w,s=L)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke()}
const E=(x,y,a,b,r=0)=>{B();c.ellipse(x,y,a,b,r,0,T)}
const ln=(p,w,s=L)=>{B();M(p[0],p[1]);for(let k=2;k<p.length;k+=2)c.lineTo(p[k],p[k+1]);st(w,s)}
const limb=(p,w,f)=>{ln(p,w+8);ln(p,w,f)}
const cl=x=>Math.min(1,Math.max(0,x)),ez=x=>x*x*(3-2*x),sg=(u,v)=>cl((t-u)/(v-u)),lp=(u,v,k)=>u+(v-u)*k
const sk='#6b4228',sh='#55321c',hr='#1e1a2a',hl='#4a4466'
// cherry (shiny one gets a glint)
const ch=(x,y,z=1,sh2)=>{c.save();c.translate(x,y);c.scale(z,z);E(0,0,9,8.5);fs(sh2?'#ff2e4d':'#d42a3c',3.5);E(-3,-3,2.6,2);c.fillStyle='#fff';c.fill();c.restore()}
// branch spring after the pluck
const sp=t>.24?-7*Math.exp(-(t-.24)*12)*C((t-.24)*60):0
const by=x=>36+S(x/256*P)*22+sp*Math.max(0,1-Math.abs(x-188)/90)
B();M(16,by(16));for(let x=16;x<=242;x+=6)c.lineTo(x,by(x));st(15);B();M(16,by(16));for(let x=16;x<=242;x+=6)c.lineTo(x,by(x));st(7,'#7a5230')
for(const[x,r]of[[58,-.8],[150,-1],[226,.7]]){c.save();c.translate(x,by(x));c.rotate(r+S(a+x)*.1);B();M(0,0);Q(8,-9,20,0);Q(8,9,0,0);fs('#62c46e',3);c.restore()}
// dull cherry pairs on commit nodes
for(const x of[36,84]){const y=by(x);ln([x,y,x-8,y+30],3,'#5a8a2a');ln([x,y,x+9,y+28],3,'#5a8a2a');ch(x-8,y+36);ch(x+9,y+34);E(x,y,7,7);fs('#fff',3.5)}
// timeline
const reach=ez(sg(0,.2)),hold=t>=.24&&t<.6,drop=sg(.6,.68),back=ez(sg(.66,1)),jy=-20*S(sg(.1,.32)*P)
const gx=128,tl=-.08*S(sg(.48,.64)*P)
// shiny target cherry: on the branch until plucked, regrows after
const tx=190,ty=by(156),gr=ez(sg(.6,.92))
let hx,hy
if(t<.24){hx=lp(176,190,reach);hy=lp(128,ty+40,reach)+jy*(1-reach)}
else if(t<.48){const k=ez(sg(.24,.34));hx=lp(190,174,k);hy=lp(ty+40+jy,112+jy,k)}
else if(t<.66){const k=ez(sg(.48,.6));hx=lp(174,84,k);hy=lp(112,184,k)}
else{hx=lp(84,176,back);hy=lp(184,128,back)-S(back*P)*24}
// regrowing stem + cherry
if(t>=.24){ln([tx,ty,tx,ty+gr*42],3,'#5a8a2a');if(gr>0)ch(tx,ty+gr*52,gr*1.25,1)}
else if(t<.2){ln([tx,ty,tx,ty+42],3,'#5a8a2a');ch(tx,ty+52,1.25,1)}else ln([tx,ty,hx,hy+4],3,'#5a8a2a')
E(tx,ty,7,7);fs('#fff',3.5)
// basket labelled main
const bb=t>.64&&t<.74?S(sg(.64,.74)*P)*3:0
c.save();c.translate(70,212+bb)
ch(-12,-14);ch(6,-16);ch(18,-12)
B();M(-34,-12);c.lineTo(34,-12);c.lineTo(26,24);c.lineTo(-26,24);c.closePath();fs('#d9a35a',4)
for(const y of[-2,10]){B();M(-31,y);c.lineTo(31,y);st(2,'#a8742e')}
B();c.roundRect(-20,-4,40,18,4);fs('#fff',3);c.fillStyle=L;c.font='bold 13px DejaVu Sans Mono';c.textAlign='center';c.fillText('main',0,10)
B();M(-30,-12);Q(0,-50,30,-12);st(8);B();M(-30,-12);Q(0,-50,30,-12);st(3.5,'#d9a35a')
c.restore()
// cherry in flight into the basket
if(t>=.6&&t<.68)ch(lp(84,72,drop),lp(194,200,drop),1.25,1)
// girl
c.save();c.translate(gx,240+jy);c.rotate(tl)
// legs (tiptoe on the hop)
for(const k of[-1,1]){limb([k*8,-40,k*9,-12],9,sk);E(k*10,-7,9,6,k*.2);fs('#e8433a',3.5)}
// overalls + tee
B();M(-20,-82);Q(0,-90,20,-82);c.lineTo(24,-38);Q(0,-32,-24,-38);c.closePath();fs('#fff7e8')
B();M(-18,-66);c.lineTo(18,-66);c.lineTo(24,-38);Q(0,-32,-24,-38);c.closePath();fs('#4a78c8',3.5)
ln([-12,-66,-14,-84],4,'#4a78c8');ln([12,-66,14,-84],4,'#4a78c8')
B();c.roundRect(-8,-60,16,12,3);fs('#3a64ae',2.5);ch(0,-54,.45,1)
// free arm
limb([-18,-78,-30,-60,-34,-46],8,'#fff7e8');E(-34,-44,6,6.5);fs(sk,3)
c.restore()
// picking arm (world space), holding the cherry when plucked
const[sx,sy]=[gx+16,240+jy-80]
limb([sx,sy,(sx+hx)/2+10,(sy+hy)/2+6,hx,hy],8,'#fff7e8')
if((t>=.2&&t<.6))ch(hx,hy+12,1.25,1)
E(hx,hy,7,7.5);fs(sk,3.2)
// head
const look=t<.24?-.18:t<.48?.12:t<.66?.2:-.12*back
c.save();c.translate(gx-4,240+jy-118);c.rotate(tl+look*.4)
const R=36,hap=t>=.26&&t<.5
// braids
for(const k of[-1,1]){for(let j=0;j<4;j++){E(k*(32+j*1.5),18+j*12,8-j*.6,8);fs(hr,3)}E(k*38,62,5,5);fs('#e8433a',3)}
B();M(-R,-6);Z(-R,18,-19,35,0,37);Z(19,35,R,18,R,-6);c.arc(0,-6,R,0,P,true);fs(sk)
c.save();c.clip();B();M(-R,-2);Q(0,10,R,-2);c.lineTo(R,-60);c.lineTo(-R,-60);c.fillStyle=sh;c.fill();c.restore()
const ey=look<0?-3:2
for(const k of[-1,1]){const x=k*14+2
  if(hap){B();M(x-8,12);Q(x,2,x+8,12);st(3.8)}
  else{E(x,10,8.5,11);c.fillStyle='#fff';c.fill();c.save();E(x,10,8.5,11);c.clip();E(x+2,10+ey,6,8);c.fillStyle='#e0507a';c.fill();E(x+2,7+ey,6.5,4);c.fillStyle='#902848';c.fill();E(x+2,10+ey,2.6,3.6);c.fillStyle='#3a0a1a';c.fill();E(x+4,6+ey,2.4,2.8);c.fillStyle='#fff';c.fill();E(x,14+ey,1.2,1.2);c.fill();c.restore()
    B();c.ellipse(x,10,8.5,11,0,P*1.05,P*1.95);st(3.4)}}
if(hap){B();M(-8,24);Q(2,38,12,24);Q(2,28,-8,24);fs('#b8344c',3);B();M(-2,31);Q(3,27,7,31);c.fillStyle='#ff8c9c';c.fill()}
else{B();M(-4,26);Q(2,31,8,26);st(2.6)}
E(-24,22,5.5,3);c.fillStyle='#c0605a';c.fill();E(28,22,5.5,3);c.fill()
// bangs
B();M(-R-4,16);c.arc(0,-6,R+4,P*.9,P*2.1)
const bl=[[R+4,16],[R,26,1],[28,-4],[22,4,1],[12,-10],[4,0,1],[-4,-12],[-12,0,1],[-20,-10],[-28,4,1],[-30,-4],[-R,26,1],[-R-4,16]]
for(let k=1;k<bl.length;k++){const[x,y,tp]=bl[k],[u,v]=bl[k-1];tp?Q(u+(x-u)*.1,v+(y-v)*.8,x,y):Q(u+(x-u)*.7,v+(y-v)*.4,x,y)}
c.closePath();fs(hr);B();M(-10,-34);Q(-22,-30,-26,-18);st(3.5,hl)
// cherry hairclip
ch(24,-30,.6,1)
c.restore()
// sparkles round the prize while she shows it off, glint on the regrown one
const sp2=sg(.26,.5)
if(sp2>0&&sp2<1)for(let k=0;k<3;k++){const q=k*2.1+sp2*2,r=20+sp2*10,z=S(sp2*P)*8;c.save();c.translate(hx-2+C(q)*r,hy+12+S(q)*r);B();for(let j=0;j<8;j++){const o=j%2?z*.3:z;c.lineTo(C(j*P/4)*o,S(j*P/4)*o)}c.closePath();fs('#ffe066',2);c.restore()}
const gl=t<.22?1:sg(.88,.96)
if(gl>0){const z=(4+S(a*4)*2.5)*gl;c.save();c.translate(tx+11,ty+44);B();for(let j=0;j<8;j++){const o=j%2?z*.3:z;c.lineTo(C(j*P/4)*o,S(j*P/4)*o)}c.closePath();fs('#ffe066',1.8);c.restore()}
}
