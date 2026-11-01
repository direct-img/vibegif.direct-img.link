// nervous girl with messy black hair and a white streak, in a grey cardigan, slamming a big red DEPLOY button next to a FRI calendar, sweat flying
export const frames=16,delay=85,rim=3
export default(c,t)=>{
  const P=Math.PI,S=Math.sin,K='#2a1b1e',sk='#ffe4d4',ss='#f6c0aa',hr='#2b2a35',hs='#17161e',hl='#70778f',pu='#9096a4',ps='#6c7282'
  const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),L=(x,y)=>c.lineTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
  const E=(x,y,a,b=a,r=0)=>{B();c.ellipse(x,y,a,b,r,0,2*P)}
  const F=(f,w=3.5)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.stroke()}}
  const W=(w,s=K)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke();c.strokeStyle=K}
  const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
  c.strokeStyle=K;c.textAlign='center';c.translate(128,140);c.scale(.95,.95);c.translate(-128,-140)
  // press timeline: hover, slam, hold, lift
  const pr=t<.4?0:t<.5?((t-.4)/.1)**2:t<.75?1:1-sm((t-.75)/.2),hit=t>.45&&t<.75
  const sh=hit?0:S(t*P*8)*1.2
  // calendar on the wall, rattled by the slam
  c.save();c.translate(198,14);c.rotate(hit?S((t-.45)*P*13)*.06*(1.75-t):0)
  B();c.roundRect(-38,4,76,82,6);F('#fff')
  B();c.roundRect(-38,4,76,22,[6,6,0,0]);F('#e8434a')
  for(const x of[-18,18]){B();c.roundRect(x-3,-3,6,14,3);F('#d9dce6',2.5)}
  c.fillStyle='#c62a33';c.font='bold 30px DejaVu Sans';c.fillText('FRI',0,68)
  c.restore()
  // pedestal with hazard band and label
  B();c.roundRect(158,192,76,54,6);F('#4b5160')
  c.save();B();c.rect(158,192,76,13);c.clip();c.fillStyle='#ffcc33';c.fill()
  c.fillStyle=K;for(let x=150;x<240;x+=14){B();M(x,205);L(x+7,192);L(x+14,192);L(x+7,205);c.fill()}
  c.restore();B();c.roundRect(158,192,76,54,6);W(3.5)
  c.fillStyle='#fff';c.font='bold 15px DejaVu Sans';c.fillText('DEPLOY',196,232)
  // dome squashes when pressed
  const dh=14-7*pr
  E(196,192,30,8);F('#c9ced8')
  B();c.ellipse(196,190,24,dh,0,P,2*P);L(220,190);F('#e8333a')
  E(188,190-dh*.55,6,dh*.25+1,-.3);F('#ff9a9a',0)
  if(hit)for(let k=0;k<7;k++){const a=P+.3+k*.42,r=34+(t-.45)*30;B();M(196+Math.cos(a)*r,188+S(a)*r*.6);L(196+Math.cos(a)*(r+9),188+S(a)*(r+9)*.6);W(3,'#ffcc33')}
  // legs and sneakers
  for(const x of[86,114]){B();c.roundRect(x-9,196,18,32,5);F('#38334f');B();c.ellipse(x+3,234,14,8,0,P,0);L(x-11,236);F('#fff');B();M(x-8,230);L(x+14,230);W(3,'#e04848')}
  // grey cardigan open over a striped tee
  const tor=()=>{B();M(72,148);Q(100,142,128,148);Q(142,152,144,180);L(146,204);L(54,204);L(56,180);Q(58,152,72,148)}
  tor();F(pu);c.save();tor();c.clip();B();M(124,140);Q(150,170,140,210);L(170,210);L(170,140);F(ps,0)
  B();M(86,140);L(114,140);L(110,210);L(90,210);c.closePath();F('#fff',0);c.fillStyle='#34407a';for(let y=153;y<206;y+=9)c.fillRect(80,y,40,4.5)
  c.restore();B();M(86,147);L(90,204);M(114,147);L(110,204);W(3);tor();W(3.5)
  B();c.roundRect(54,200,92,10,4);F(ps,3)
  for(const x of[60,124]){B();c.roundRect(x,178,16,15,2);F(ps,2.5)}
  for(const y of[166,184]){E(85.5+(y-150)*.07,y,2.5);F('#e9e9f0',1.5)}
  // crew neck
  B();M(88,146);Q(100,160,112,146);F(ss,2.5)
  // arm reaching to the button
  const hx=196+sh*(1-pr),hy=160+18*pr
  B();M(132,158);Q(160,152,hx-8,hy+4);W(19);W(12,pu)
  E(hx,hy,12,9);F(sk,3);B();M(hx-6,hy-2);L(hx+6,hy-2);W(2)
  // head
  c.save();c.translate(100+sh*.5,90)
  const face=()=>{B();M(-50,-6);Z(-50,26,-26,46,0,47);Z(26,46,50,26,50,-6);c.arc(0,-6,50,0,P,true)}
  const bang=()=>{B();M(-58,26);Z(-66,-34,-40,-64,0,-64);Z(40,-64,66,-34,58,26);Q(50,10,46,-4)
    Q(38,-6,34,6);Q(28,-16,20,0);Q(12,-20,3,3);Q(-6,-18,-14,1);Q(-22,-16,-30,5);Q(-38,-8,-46,-4);Q(-50,10,-58,26)}
  // back hair with messy outward flicks
  B();M(-50,30);Q(-62,40,-74,36);Q(-62,30,-64,22);Q(-76,18,-80,6);Q(-66,6,-66,-6);Z(-76,-50,-40,-72,0,-72);Z(40,-72,76,-50,66,-6);Q(66,6,80,6);Q(76,18,64,22);Q(62,30,74,36);Q(62,40,50,30);L(0,20);c.closePath();F(hs)
  face();F(sk)
  c.save();face();c.clip();c.translate(0,6);bang();F(ss,0);c.restore()
  // ahoge
  B();M(-4,-62);Z(-10,-84,20,-90,14,-76);Z(10,-82,2,-78,6,-62);F(hr,3)
  bang();F(hr)
  // one white streak through the fringe
  c.save();bang();c.clip();B();M(-6,-72);Q(-20,-34,-30,8);W(11,'#f2f2f6');c.restore();bang();W(3.5)
  for(const[a,b]of[[-2.55,-2.2],[-1.6,-1.4],[-1.25,-1.05]]){B();c.arc(0,-8,47,a,b);W(4,hl)}
  B();M(28,-54);Q(36,-30,32,-14);W(2,'#4c5066')
  // eyes: wide and shaky, squeezed shut while the button is down
  for(const s of[-1,1]){const x=s*21
    if(hit){B();M(x-10*s,9);L(x+8*s,16);L(x-10*s,23);W(3.5)}
    else{const j=S(t*P*16+s)*1.2
      E(x,17,11.5,13.5);F('#fff',0)
      E(x+j,18,6,8);F('#2fa565',0);B();c.ellipse(x+j,18,6,8,0,P,2*P);F('#1d7a48',0)
      E(x+j,18,2.5,3.5);F('#123b25',0);E(x+j-2.5,14.5,2.2,2.6);F('#fff',0);E(x+j+2.5,22,1.2);F('#fff',0)
      B();M(x-12*s,10);Q(x,-1,x+12*s,9);L(x+15*s,5);W(4);B();M(x-8*s,30);Q(x,31.5,x+8*s,29);W(1.8)}
    // worried brows showing through the fringe, blush
    B();M(x-6*s,-11);Q(x+4*s,-10,x+12*s,-3);W(6,sk);W(3.5)
    E(s*33,30,7,4);c.fillStyle='rgba(255,110,110,.35)';c.fill()}
  // wavy mouth
  B();M(-9,38);for(let k=1;k<=6;k++)L(-9+k*3,38+(k%2?-2:2));W(2.5)
  // sweat drops sliding down the temple
  for(let k=0;k<2;k++){const p=(t+k/2)%1,dy=-8+p*20;c.globalAlpha=S(p*P);B();M(-54,dy-8);Q(-48,dy+2,-54,dy+5);Q(-60,dy+2,-54,dy-8);F('#8fd3ff',2.5)}c.globalAlpha=1
  c.restore()
  // nervous hand clutching the drawstring
  B();M(66,160);Q(62,186,88,176);W(18);W(11,pu);E(91,173,8);F(sk,3)
  // sweat flying off
  for(let k=0;k<4;k++){const p=(t+k/4)%1,a=-P/2+(k-1.5)*.6,r=58+p*34,x=100+Math.cos(a)*r,y=78+S(a)*r+p*p*30
    c.globalAlpha=Math.min(1,p*6,(1-p)*4);c.save();c.translate(x,y);c.rotate(a+P/2);B();M(0,-6);Q(5,2,0,5);Q(-5,2,0,-6);F('#8fd3ff',2.5);c.restore();c.globalAlpha=1}
}
