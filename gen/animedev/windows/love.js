// girl with a sky-blue wolf cut in a cosy yellow sweater nuzzling a big blue four-pane window, clouds drifting past the glass, hearts popping
export const frames=18,delay=100,rim=4
const P=Math.PI,O='#2b2135',S=Math.sin,C=Math.cos,
B=c=>c.beginPath(),
F=(c,f,w=3)=>{c.fillStyle=f;c.fill();c.strokeStyle=O;c.lineWidth=w;c.stroke()},
E=(c,x,y,a,b,r=0)=>{B(c);c.ellipse(x,y,a,b,r,0,2*P)},
L=(c,f,w,p)=>{B(c);p();c.strokeStyle=O;c.lineWidth=w+6;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()},
heart=(c,x,y,r,f)=>{B(c);c.moveTo(x,y+r*.9);c.bezierCurveTo(x-r*1.4,y-r*.1,x-r*.6,y-r*1.1,x,y-r*.35);c.bezierCurveTo(x+r*.6,y-r*1.1,x+r*1.4,y-r*.1,x,y+r*.9);F(c,f,2.2)}
const SK='#fff0e8',H1='#86ccf5',H2='#5aa4dc',HL='#d6f1ff',SW='#ffd978',SW2='#f0c050',WB='#3a86e8'
// fluffy cloud
const cloud=(c,x,y,k)=>{B(c);for(const[dx,dy,r]of[[-14,4,10],[-2,-4,13],[12,2,10],[2,6,10]])c.moveTo(x+dx*k+r*k,y+dy*k),c.arc(x+dx*k,y+dy*k,r*k,0,2*P);c.fillStyle='#fff';c.fill()}
export default(c,t,i)=>{
  const T=t*2*P,nz=S(T*2),x=82,y=106+nz*1.5
  // ---- the window: blue frame, four panes of sky and hill, a sill with a steaming mug
  c.save();c.translate(172,122);c.scale(1.1,1.1)
  B(c);c.roundRect(-60,-64,120,128,12);F(c,WB)
  c.save();B(c);c.roundRect(-50,-54,100,108,4);c.clip()
  const g=c.createLinearGradient(0,-54,0,54);g.addColorStop(0,'#9fdcff');g.addColorStop(1,'#d9f3ff');c.fillStyle='#aee2ff';c.fillRect(-50,-54,100,108)
  B(c);c.moveTo(-50,30);c.quadraticCurveTo(-10,6,50,26);c.lineTo(50,54);c.lineTo(-50,54);c.closePath();c.fillStyle='#86d46e';c.fill()
  B(c);c.moveTo(-50,40);c.quadraticCurveTo(10,22,50,44);c.lineTo(50,54);c.lineTo(-50,54);c.closePath();c.fillStyle='#6cc25a';c.fill()
  // clouds drifting across, wrapping seamlessly
  for(const[o,yy,k]of[[0,-30,1],[.5,-4,.75]]){const cx=((t+o)%1)*140-70;cloud(c,cx,yy,k);cloud(c,cx+140,yy,k);cloud(c,cx-140,yy,k)}
  c.fillStyle='rgba(255,255,255,.45)';for(const[a,b]of[[-40,-50],[10,-50],[-40,4],[10,4]]){B(c);c.moveTo(a,b+22);c.lineTo(a+14,b+8);c.lineTo(a+20,b+8);c.lineTo(a+6,b+22);c.fill()}
  c.restore()
  B(c);c.roundRect(-50,-54,100,108,4);c.lineWidth=3;c.strokeStyle=O;c.stroke()
  B(c);c.rect(-5,-54,10,108);c.rect(-50,-5,100,10);c.fillStyle=WB;c.fill()
  B(c);c.moveTo(-5,-54);c.lineTo(-5,-5);c.lineTo(-50,-5);c.moveTo(-50,5);c.lineTo(-5,5);c.lineTo(-5,54);c.moveTo(5,54);c.lineTo(5,5);c.lineTo(50,5);c.moveTo(50,-5);c.lineTo(5,-5);c.lineTo(5,-54);c.lineWidth=2.6;c.stroke()
  c.strokeStyle='#7cb8ff';c.lineWidth=3;B(c);c.moveTo(-54,-46);c.lineTo(-54,40);c.stroke()
  B(c);c.roundRect(-64,60,128,12,5);F(c,'#7fb6f4')
  // mug + steam on the sill
  B(c);c.roundRect(32,42,20,19,4);F(c,'#ff8fa0',2.6);B(c);c.arc(53,51,5,-P/2,P/2);c.lineWidth=6;c.stroke();c.lineWidth=2.4;c.strokeStyle='#ff8fa0';c.stroke()
  B(c);c.moveTo(42,56);c.bezierCurveTo(37,51,40,46,42,49);c.bezierCurveTo(44,46,47,51,42,56);c.fillStyle='#fff';c.fill()
  c.strokeStyle='rgba(255,255,255,.95)';c.lineWidth=3;for(const k of[0,1]){const ph=T+k*P;B(c);for(let s=0;s<=6;s++){const yy=38-s*4,xx=38+k*8+S(ph+s*.9)*3;s?c.lineTo(xx,yy):c.moveTo(xx,yy)}c.stroke()}
  c.restore()
  // ---- girl
  // back hair: shaggy wolf cut with wispy strands flaring at the nape
  B(c);c.moveTo(x-48,y-8);c.bezierCurveTo(x-60,y-72,x+60,y-72,x+48,y-8);c.lineTo(x+52,y+26);c.lineTo(x+62,y+46);c.lineTo(x+46,y+40);c.lineTo(x+48,y+56);c.lineTo(x+32,y+44);c.lineTo(x-32,y+44);c.lineTo(x-48,y+56);c.lineTo(x-46,y+40);c.lineTo(x-62,y+46);c.lineTo(x-52,y+26);c.closePath();F(c,H2)
  // legs + fluffy slippers
  for(const s of[-1,1]){L(c,SK,11,()=>{c.moveTo(x+11*s,y+94);c.lineTo(x+13*s,y+114)})
    E(c,x+13*s,y+122,14,8);F(c,'#fff',2.6);E(c,x+13*s+4*s,y+117,4,3);c.fillStyle='#ffb3c6';c.fill()}
  B(c);c.moveTo(x-24,y+80);c.lineTo(x-26,y+98);c.lineTo(x+26,y+98);c.lineTo(x+24,y+80);c.closePath();F(c,'#3b4d8f')
  // oversized knit sweater
  B(c);c.moveTo(x-18,y+40);c.quadraticCurveTo(x-42,y+44,x-42,y+66);c.lineTo(x-38,y+92);c.quadraticCurveTo(x,y+98,x+38,y+92);c.lineTo(x+42,y+66);c.quadraticCurveTo(x+42,y+44,x+18,y+40);c.closePath();F(c,SW)
  c.strokeStyle=SW2;c.lineWidth=2;for(const k of[-24,-12,0,12,24]){B(c);c.moveTo(x+k,y+84);c.lineTo(x+k*1.05,y+94);c.stroke()}
  B(c);c.moveTo(x-14,y+42);c.quadraticCurveTo(x,y+50,x+14,y+42);c.lineWidth=5;c.strokeStyle=SW2;c.stroke()
  // head, cheek squished against the frame, nuzzling
  B(c);c.rect(x-7,y+32,14,12);F(c,SK,2.5)
  c.save();c.translate(x,y+40);c.rotate(.16+nz*.035);c.translate(-x,-y-40)
  B(c);c.moveTo(x-46,y-2);c.bezierCurveTo(x-46,y-62,x+46,y-62,x+46,y-2);c.bezierCurveTo(x+46,y+24,x+22,y+44,x,y+46);c.bezierCurveTo(x-22,y+44,x-46,y+24,x-46,y-2);F(c,SK)
  c.fillStyle='rgba(255,110,140,.5)';E(c,x-27,y+21,9,5);c.fill();E(c,x+28,y+20,11,6);c.fill()
  c.strokeStyle='rgba(230,70,110,.7)';c.lineWidth=1.8;for(const k of[-5,0,5]){B(c);c.moveTo(x+27+k,y+17);c.lineTo(x+25+k,y+23);c.stroke()}
  // blissful closed eyes + cat smile
  c.lineWidth=3.6;c.strokeStyle=O;for(const s of[-1,1]){B(c);c.moveTo(x+21*s-11,y+5);c.quadraticCurveTo(x+21*s,y+14,x+21*s+11,y+5);c.stroke();B(c);c.moveTo(x+21*s+11*s,y+5);c.lineTo(x+21*s+15*s,y+2);c.lineWidth=2.4;c.stroke();c.lineWidth=3.6}
  B(c);c.moveTo(x-8,y+28);c.quadraticCurveTo(x-4,y+33,x,y+28);c.quadraticCurveTo(x+4,y+33,x+8,y+28);c.lineWidth=2.4;c.stroke()
  // choppy layered bangs + flicked side layers
  B(c);c.moveTo(x-50,y+30);c.lineTo(x-58,y+40);c.lineTo(x-52,y+10);c.bezierCurveTo(x-64,y-48,x-28,y-66,x,y-64);c.bezierCurveTo(x+28,y-66,x+64,y-48,x+52,y+10);c.lineTo(x+58,y+40);c.lineTo(x+50,y+30)
  c.lineTo(x+44,y+38);c.lineTo(x+42,y+6);c.lineTo(x+36,y-6);c.lineTo(x+30,y+4);c.lineTo(x+24,y-16);c.lineTo(x+14,y-4);c.lineTo(x+8,y-22);c.lineTo(x+2,y-12);c.lineTo(x-4,y-24);c.lineTo(x-10,y-8);c.lineTo(x-18,y-20);c.lineTo(x-26,y-2);c.lineTo(x-32,y-12);c.lineTo(x-38,y+4);c.lineTo(x-42,y+6);c.lineTo(x-44,y+38);c.closePath();F(c,H1)
  c.strokeStyle=HL;c.lineWidth=3.5;B(c);c.arc(x,y-10,46,-2.6,-2.05);c.stroke();B(c);c.arc(x,y-10,46,-1.1,-.6);c.stroke()
  c.strokeStyle=H2;c.lineWidth=2;B(c);c.moveTo(x-30,y-40);c.lineTo(x-36,y-16);c.moveTo(x+20,y-44);c.lineTo(x+28,y-20);c.stroke()
  c.lineWidth=2.6;c.strokeStyle=O;for(const s of[-1,1]){B(c);c.moveTo(x+30*s,y-12);c.quadraticCurveTo(x+21*s,y-17,x+12*s,y-14);c.stroke()}
  c.restore()
  // arm hugging across the window, sweater paw gripping the mullion
  L(c,SW,15,()=>{c.moveTo(x+32,y+52);c.quadraticCurveTo(x+60,y+70,x+82,y+44)})
  E(c,x+86,y+42,10,9);F(c,SW2,2.6)
  for(const k of[-4,1,6]){B(c);c.moveTo(x+82+k,y+36);c.lineTo(x+83+k,y+42);c.lineWidth=1.6;c.strokeStyle=O;c.stroke()}
  // hearts popping
  for(let k=0;k<6;k++){const a=((t-k/6)%1+1)%1;if(a>.75)continue
    const hx=[126,30,144,118,40,136][k]+S(a*9+k)*5,hy=[60,70,52,48,62,40][k]-a*[40,46,36,30,44,24][k],r=(a<.1?a/.1:a>.6?(.75-a)/.15:1)*[9,7,7,8,6,6][k]
    if(r>3)heart(c,hx,hy,r,k%2?'#ff7aa8':'#ff4f7b')}
}
