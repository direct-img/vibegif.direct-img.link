// girl with light-brown shoulder-length hair, blunt bangs and a green hoodie squeezing a chubby penguin, terminal prompt blinking, hearts popping
export const frames=16,delay=110,rim=4
const P=Math.PI,O='#2b2135',S=Math.sin,C=Math.cos,
B=c=>c.beginPath(),
F=(c,f,w=3)=>{c.fillStyle=f;c.fill();c.strokeStyle=O;c.lineWidth=w;c.stroke()},
E=(c,x,y,a,b,r=0)=>{B(c);c.ellipse(x,y,a,b,r,0,2*P)},
L=(c,f,w,p)=>{B(c);p();c.strokeStyle=O;c.lineWidth=w+6;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()},
cl=v=>v<0?0:v>1?1:v,ez=v=>(v=cl(v),v*v*(3-2*v)),
eye=(c,x,y,s,k1,k2,lx=0,ly=0,r=1)=>{
  const sh=()=>{B(c);c.moveTo(x-11*s,y-7);c.bezierCurveTo(x-13*s,y+8,x-6*s,y+14,x+s,y+14);c.bezierCurveTo(x+9*s,y+14,x+13*s,y+6,x+12*s,y-8);c.bezierCurveTo(x+8*s,y-15,x-7*s,y-15,x-11*s,y-7)}
  sh();c.fillStyle='#fff';c.fill()
  c.save();sh();c.clip()
  const X=x+lx,Y=y+2+ly,g=c.createLinearGradient(0,Y-12,0,Y+12);g.addColorStop(0,k1);g.addColorStop(1,k2)
  E(c,X,Y,9.5*r,12.5*r);c.fillStyle=g;c.fill();c.lineWidth=1.5;c.strokeStyle=O;c.stroke()
  E(c,X,Y+r,4.4*r,6.5*r);c.fillStyle=O;c.fill()
  E(c,X-3.5*r,Y-4.5*r,3.6*r,4.4*r);c.fillStyle='#fff';c.fill()
  E(c,X+3.8*r,Y+5.5*r,1.9*r,1.9*r);c.fill()
  c.fillStyle='rgba(60,40,90,.2)';c.fillRect(x-15,y-16,30,9)
  c.restore()
  B(c);c.moveTo(x-12*s,y-6);c.bezierCurveTo(x-9*s,y-15,x+8*s,y-17,x+13*s,y-8);c.lineTo(x+16*s,y-6);c.lineWidth=4.6;c.strokeStyle=O;c.stroke()
  B(c);c.moveTo(x+6*s,y+13);c.quadraticCurveTo(x+10*s,y+12,x+12*s,y+8);c.lineWidth=2;c.stroke()
},
heart=(c,x,y,r,f)=>{B(c);c.moveTo(x,y+r*.9);c.bezierCurveTo(x-r*1.4,y-r*.1,x-r*.6,y-r*1.1,x,y-r*.35);c.bezierCurveTo(x+r*.6,y-r*1.1,x+r*1.4,y-r*.1,x,y+r*.9);F(c,f,2.2)}
const SK='#fff0e6',H1='#c98f5e',H2='#a06a3e',HL='#ecc39a',HD='#3f8f62',HD2='#2f7550',K1='#0f4a3a',K2='#46cfa0',PG='#3c4c78',PB='#fff4df'
// chubby penguin: slate body, heart-shaped cream face, tuft, red scarf
const peng=(c,x,y,q,fl)=>{c.save();c.translate(x,y+46);c.scale(1.2*(1+.07*q),1.2*(1-.07*q));c.translate(0,-38)
  for(const s of[-1,1]){E(c,s*13,36,11,6);F(c,'#ff9a3c',2.6)}
  for(const s of[-1,1]){c.save();c.translate(s*30,2);c.rotate(s*(.5+fl*.5));E(c,s*6,10,9,17);F(c,PG,2.8);c.restore()}
  E(c,0,0,34,38);F(c,PG)
  B(c);c.moveTo(10,-36);c.quadraticCurveTo(12,-48,18,-50);c.quadraticCurveTo(18,-42,18,-34);c.moveTo(16,-34);c.quadraticCurveTo(22,-44,28,-42);c.quadraticCurveTo(24,-36,22,-30);F(c,PG,2.4)
  E(c,0,14,24,22);c.fillStyle=PB;c.fill()
  B(c);c.moveTo(0,4);c.bezierCurveTo(-26,4,-30,-26,-12,-26);c.quadraticCurveTo(-4,-26,0,-18);c.quadraticCurveTo(4,-26,12,-26);c.bezierCurveTo(30,-26,26,4,0,4);c.fill()
  c.lineWidth=2.6;c.strokeStyle=O;E(c,0,14,24,22);c.stroke()
  B(c);c.moveTo(0,4);c.bezierCurveTo(-26,4,-30,-26,-12,-26);c.quadraticCurveTo(-4,-26,0,-18);c.quadraticCurveTo(4,-26,12,-26);c.bezierCurveTo(30,-26,26,4,0,4);c.stroke()
  // happy ^^ eyes, blush, beak
  for(const s of[-1,1]){B(c);c.moveTo(s*11-5,-11);c.quadraticCurveTo(s*11,-18,s*11+5,-11);c.lineWidth=3;c.stroke();E(c,s*17,-5,4.5,2.6);c.fillStyle='rgba(255,110,140,.55)';c.fill()}
  B(c);c.moveTo(-6,-7);c.quadraticCurveTo(0,-11,6,-7);c.quadraticCurveTo(1,2,0,2);c.quadraticCurveTo(-1,2,-6,-7);F(c,'#ff8a3c',2.2)
  // scarf
  B(c);c.moveTo(-28,8);c.quadraticCurveTo(0,18,28,8);c.lineTo(29,15);c.quadraticCurveTo(0,26,-29,15);c.closePath();F(c,'#e8414f',2.4)
  B(c);c.moveTo(14,16);c.lineTo(20,34);c.lineTo(28,32);c.lineTo(23,14);F(c,'#e8414f',2.4)
  c.strokeStyle='#fff';c.lineWidth=2;for(const k of[-14,0,14]){B(c);c.moveTo(k,12+Math.abs(k)*-.12+2);c.lineTo(k+3,18+Math.abs(k)*-.12+2);c.stroke()}
  c.restore()}
export default(c,t,i)=>{
  const T=t*2*P,q=(1-C(T*2))/2,fl=S(T*4)*.5+.5,x=98,y=96,px=110,py=180,happy=q>.35
  // ---- terminal window with a blinking prompt
  c.save();c.translate(212,160);c.rotate(.05);c.scale(.88,.88)
  B(c);c.roundRect(-38,-30,76,58,9);F(c,'#20242f')
  c.save();B(c);c.roundRect(-38,-30,76,58,9);c.clip();c.fillStyle='#3a4050';c.fillRect(-38,-30,76,13);c.restore()
  B(c);c.roundRect(-38,-30,76,58,9);c.lineWidth=3;c.strokeStyle=O;c.stroke()
  B(c);c.moveTo(-38,-17);c.lineTo(38,-17);c.lineWidth=2;c.stroke()
  ;['#ff5f57','#febc2e','#28c840'].forEach((k,j)=>{E(c,-29+j*9,-23.5,2.8,2.8);c.fillStyle=k;c.fill()})
  c.font='bold 15px DejaVu Sans Mono';c.textBaseline='middle';c.fillStyle='#5ff08a';c.fillText('$',-30,4)
  if(i%8<4){c.fillStyle='#e8f0ff';c.fillRect(-17,-4,9,16)}
  c.restore()
  // ---- girl
  // back hair, shoulder length, blunt ends
  B(c);c.moveTo(x-50,y-6);c.bezierCurveTo(x-62,y-70,x+62,y-70,x+50,y-6);c.lineTo(x+54,y+56);c.quadraticCurveTo(x+40,y+62,x+26,y+58);c.lineTo(x-26,y+58);c.quadraticCurveTo(x-40,y+62,x-54,y+56);c.closePath();F(c,H2)
  // legs + sneakers
  for(const s of[-1,1]){L(c,'#4a5a86',11,()=>{c.moveTo(x+11*s,y+96);c.lineTo(x+12*s,y+120)})
    B(c);c.moveTo(x+12*s-12,y+136);c.quadraticCurveTo(x+12*s-12,y+120,x+12*s,y+120);c.quadraticCurveTo(x+12*s+13,y+122,x+12*s+13,y+136);c.closePath();F(c,'#fff',2.6)
    B(c);c.moveTo(x+12*s-11,y+130);c.lineTo(x+12*s+12,y+130);c.lineWidth=2.6;c.strokeStyle='#ff9a3c';c.stroke()}
  // hoodie
  B(c);c.moveTo(x-18,y+42);c.quadraticCurveTo(x-40,y+46,x-40,y+66);c.lineTo(x-36,y+102);c.quadraticCurveTo(x,y+108,x+36,y+102);c.lineTo(x+40,y+66);c.quadraticCurveTo(x+40,y+46,x+18,y+42);c.closePath();F(c,HD)
  B(c);c.moveTo(x-36,y+96);c.quadraticCurveTo(x,y+102,x+36,y+96);c.lineWidth=2.4;c.strokeStyle=O;c.stroke()
  // head, tilted onto the penguin
  B(c);c.rect(x-7,y+34,14,12);F(c,SK,2.5)
  c.save();c.translate(x,y+40);c.rotate(.12);c.translate(-x,-y-40)
  B(c);c.moveTo(x-46,y-2);c.bezierCurveTo(x-46,y-62,x+46,y-62,x+46,y-2);c.bezierCurveTo(x+46,y+24,x+22,y+44,x,y+46);c.bezierCurveTo(x-22,y+44,x-46,y+24,x-46,y-2);F(c,SK)
  c.fillStyle='rgba(255,110,130,.45)';E(c,x-27,y+21,9,5);c.fill();E(c,x+27,y+21,9,5);c.fill()
  if(happy){for(const s of[-1,1]){B(c);c.moveTo(x+21*s-11,y+10);c.quadraticCurveTo(x+21*s,y-5,x+21*s+11,y+10);c.lineWidth=4;c.strokeStyle=O;c.stroke()}}
  else{eye(c,x-21,y+6,-1,K1,K2,4,4);eye(c,x+21,y+6,1,K1,K2,4,4)}
  B(c);c.moveTo(x-10,y+26);c.quadraticCurveTo(x,y+29,x+10,y+26);c.quadraticCurveTo(x+8,y+38,x,y+38);c.quadraticCurveTo(x-8,y+38,x-10,y+26);F(c,'#8c2f3f',2.3)
  E(c,x,y+35,4.5,2.2);c.fillStyle='#f27d86';c.fill()
  // blunt straight bangs + side locks to the shoulders
  B(c);c.moveTo(x-52,y+50);c.lineTo(x-54,y+6);c.bezierCurveTo(x-62,y-50,x-28,y-64,x,y-62);c.bezierCurveTo(x+28,y-64,x+62,y-50,x+54,y+6);c.lineTo(x+52,y+52);c.quadraticCurveTo(x+46,y+56,x+41,y+50);c.quadraticCurveTo(x+44,y+20,x+40,y-6);c.quadraticCurveTo(x,y-11,x-40,y-6);c.quadraticCurveTo(x-44,y+20,x-41,y+50);c.quadraticCurveTo(x-46,y+56,x-52,y+52);c.closePath();F(c,H1)
  c.strokeStyle=H2;c.lineWidth=2;for(const k of[-26,-10,8,24]){B(c);c.moveTo(x+k,y-8);c.lineTo(x+k*1.08,y-24);c.stroke()}
  c.strokeStyle=HL;c.lineWidth=3.5;B(c);c.arc(x,y-10,44,-2.55,-2);c.stroke();B(c);c.arc(x,y-10,44,-1.15,-.7);c.stroke()
  c.lineWidth=2.6;c.strokeStyle=O;for(const s of[-1,1]){B(c);c.moveTo(x+30*s,y-14);c.quadraticCurveTo(x+21*s,y-20,x+12*s,y-16);c.stroke()}
  c.restore()
  // ---- penguin in her arms
  peng(c,px,py,q,fl)
  for(const s of[-1,1]){const hx=px+s*22,hy=py+28
    L(c,HD,14,()=>{c.moveTo(x+34*s,y+56);c.quadraticCurveTo(px+s*62,py+2,hx+s*4,hy)})
    E(c,hx,hy,8,7);F(c,SK,2.6)}
  // ---- hearts popping up
  for(let k=0;k<6;k++){const a=((t-k/6)%1+1)%1;if(a>.75)continue
    const hx=[166,34,182,160,42,176][k]+S(a*9+k)*5,hy=[118,128,104,96,110,84][k]-a*[84,70,70,64,74,58][k],r=(a<.1?a/.1:a>.6?(.75-a)/.15:1)*[9,7,7,8,6,6][k]
    if(r>3)heart(c,hx,hy,r,k%2?'#ff7aa8':'#ff4f7b')}
}
