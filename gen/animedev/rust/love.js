// anime girl with a thick dark-brown side braid, a little crab hair clip and a green sweater cuddling a happy orange crab cheek to cheek, its claws snipping as hearts float up
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
const sk='#ffeae0',sh='#f6cdbd',hr='#4a2c1e',hs='#2e1a10',hl='#7d5238',sw='#2f7a58',sw2='#1f5a40',cr='#f5793a',cr2='#d9561e'
const rk=S(a),ry=Math.abs(S(a*2))*-2
// little crab: body, eye stalks, snipping claws, wiggling legs (also used small as the hair clip)
const crab=(x,y,z,r,sn,big)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(z,z)
  for(const k of[-1,1])for(let j=0;j<3;j++){const q=S(a*4+j+k)*(big?.25:0);c.save();c.translate(k*(22+j*7),12);c.rotate(k*(.5+j*.25)+q);B();M(0,0);c.lineTo(k*10,10);st(big?9:7);B();M(0,0);c.lineTo(k*10,10);st(big?4.5:3,cr2);c.restore()}
  B();M(-38,4);Q(-36,-20,-20,-24);for(let j=0;j<4;j++){const x0=-20+j*13.3;Q(x0+6.6,-32,x0+13.3,-24)}Q(36,-20,38,4);Q(36,22,0,24);Q(-36,22,-38,4);c.closePath();fs(cr,big?4:3)
  if(big){for(const k of[-1,1]){const o=.25+.25*sn;c.save();c.translate(k*36,-12);c.rotate(k*.35)
    B();M(-k*8,16);Q(-k*2,6,0,-8);st(10);B();M(-k*8,16);Q(-k*2,6,0,-8);st(5,cr)
    c.translate(0,-14);c.save();c.rotate(-k*o);B();M(0,5);Q(k*-17,-5,k*-3,-22);Q(k*8,-11,0,5);fs(cr,3.5);c.restore()
    c.save();c.rotate(k*o);B();M(0,5);Q(k*16,-3,k*8,-19);Q(k*-3,-8,0,5);fs(cr,3.5);c.restore();c.restore()}
  B();M(-30,10);Q(0,20,30,10);st(2.5,cr2)
    for(const k of[-1,1]){ln([k*9,-22,k*11,-36],6);ln([k*9,-22,k*11,-36],2.5,cr2);E(k*11,-40,7,7.5);fs('#fff',3);E(k*11+2,-39,3.4,4);c.fillStyle=L;c.fill();E(k*11+3,-41,1.3,1.3);c.fillStyle='#fff';c.fill()}
    B();M(-8,-4);Q(0,6,8,-4);st(3);E(-20,0,5,3);c.fillStyle='#ff9a8a';c.fill();E(20,0,5,3);c.fill()}
  else{for(const k of[-1,1]){E(k*36,-26,9,10);fs(cr,3);ln([k*36,-36,k*36,-28],3)}E(-8,-8,3,3);c.fillStyle=L;c.fill();E(8,-8,3,3);c.fill()}
  c.restore()}
// neck + sweater body
B();c.rect(90,128,30,34);fs(sk,3.5)
B();M(30,246);c.lineTo(36,174);Q(56,152,84,152);Q(105,166,126,152);Q(154,152,162,174);c.lineTo(166,246);c.closePath();fs(sw)
B();M(84,152);Q(105,170,126,152);st(4,'#fff')
for(const x of[56,136]){B();M(x,200);c.lineTo(x+2,240);st(2.5,sw2)}
const cx=178+rk*3,cy=128+ry
// head, tilted onto the crab
c.save();c.translate(104+rk*3,100+ry);c.rotate(.14+rk*.05)
const R=44
// back of the hair
B();c.arc(0,-8,R+6,P*.85,P*2.15);Q(R+4,30,R-6,34);c.lineTo(-R+6,34);Q(-R-4,30,-R-6*C(.15*P),-8+(R+6)*S(.15*P));c.closePath();fs(hs)
B();M(-R,-8);Z(-R,20,-22,41,0,43);Z(22,41,R,20,R,-8);c.arc(0,-8,R,0,P,true);fs(sk)
c.save();c.clip();B();M(-R,-4);Q(0,10,R,-4);c.lineTo(R,-60);c.lineTo(-R,-60);c.fillStyle=sh;c.fill();c.restore()
// blissful closed eyes, blush, open smile
for(const k of[-1,1]){B();M(k*17-10,14);Q(k*17,2,k*17+10,14);st(4.2);B();M(k*17+k*10,14);c.lineTo(k*17+k*14,11);st(3)}
E(-30,28,7.5,4);c.fillStyle='#ffa6b4';c.fill();E(30,28,7.5,4);c.fill()
B();M(-10,28);Q(0,44,10,28);Q(0,31,-10,28);fs('#c0394f',3);B();M(-5,36);Q(0,31,5,36);Q(0,40,-5,36);c.fillStyle='#ff8c9c';c.fill()
// bangs
B();M(-R-5,22);c.arc(0,-8,R+5,P*.9,P*2.1)
const bl=[[R+5,22],[R+2,38,1],[32,-4],[28,6,1],[18,-12],[8,2,1],[-2,-16],[-12,0,1],[-20,-12],[-32,4,1],[-36,-4],[-R-2,36,1],[-R-5,22]]
for(let k=1;k<bl.length;k++){const[x,y,tp]=bl[k],[u,v]=bl[k-1];tp?Q(u+(x-u)*.1,v+(y-v)*.8,x,y):Q(u+(x-u)*.7,v+(y-v)*.4,x,y)}
c.closePath();fs(hr);B();M(-12,-42);Q(-26,-38,-30,-24);st(4,hl);B();M(12,-38);Q(18,-22,10,-4);st(2,hs);B();M(-6,-42);Q(-10,-24,-10,-6);st(2,hs)
// crab hair clip
crab(-30,-38,.3,-.4,0,0)
c.restore()
// the crab, held up against her cheek
crab(cx,cy,1,.08+rk*.06,(S(a*4)+1)/2,1)
// arms + hands holding it from below
limb([140,182,156,172,cx-20,cy+30],11,sw);limb([62,186,96,206,cx+14,cy+34],11,sw)
E(cx-20,cy+30,9,9.5);fs(sk,3.5);E(cx+14,cy+34,9,9.5);fs(sk,3.5)
// thick side braid over her shoulder
const bs=S(a+1)*3
for(let j=0;j<7;j++){const x=58-j*1.5+bs*j/6+(j%2?3:-3),y=124+j*15;E(x,y,13-j*.6,10,j%2?.4:-.4);fs(hr,3.5);B();M(x-6,y-2);Q(x,y+4,x+6,y-2);st(2,hl)}
E(56+bs,232,7,5);fs(cr,3);B();M(52+bs,236);c.lineTo(48+bs,246);M(58+bs,236);c.lineTo(60+bs,246);st(5,hr)
// hearts drifting up between them
for(let k=0;k<3;k++){const p=(t+k/3)%1,x=148+S(p*T+k*2)*10+k*6,y=86-p*70,z=S(Math.min(1,p*1.3)*P)*[11,9,10][k]
  if(z<1)continue;ht(x,y,z);fs(['#ff4f6e','#ff7a8a','#ff9ab0'][k],2.6)}
}
