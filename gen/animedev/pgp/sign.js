// girl with a dark-plum high ponytail in a trench coat going shh as she turns her gold private key in a padlock sealing a -----BEGIN PGP letter, the matching public key glows and verifies
export const frames=16,delay=85,rim=3
export default(c,t)=>{
  const P=Math.PI,S=Math.sin,C=Math.cos,T=2*P*t,K='#22182a',sk='#ffe6d6',ss='#f4c6b2',hr='#4f2148',hs='#331430',hl='#9a5a8f',tc='#cfa56c',td='#a9834e',gd='#f2c14e',gs='#c8902a'
  const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),L=(x,y)=>c.lineTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
  const E=(x,y,a,b=a,r=0)=>{B();c.ellipse(x,y,a,b,r,0,2*P)}
  const F=(f,w=3.5)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.stroke()}}
  const W=(w,s=K)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke();c.strokeStyle=K}
  const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
  const star=(x,y,r)=>{B();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.35:r;L(x+C(a)*q,y+S(a)*q)}c.closePath()}
  // a key along +x: bow ring with a gem, shaft, teeth
  const key=(f,d,g)=>{B();c.roundRect(10,-3.5,30,7,2);F(f,3);B();M(30,3);L(30,10);L(34,10);L(34,6);L(38,6);L(38,3);F(f,2.5);E(0,0,11,11);F(f,3);E(0,0,4.5);F(g,2.5);B();c.arc(0,0,8,-2.4,-1.4);W(2,d)}
  c.strokeStyle=K
  // timeline: slide in, turn a quarter, click at .4, signal flies to the public key, turn back, slide out
  const sl=t<.15?10*(1-sm(t/.15)):t<.85?0:10*sm((t-.85)/.15),tu=t<.18?0:t<.36?sm((t-.18)/.18):t<.62?1:t<.78?1-sm((t-.62)/.16):0,ck=t>=.38&&t<.6
  // the public key floating, glowing harder once the signature reaches it
  const gl=t<.5?0:t<.62?sm((t-.5)/.12):t<.8?1:1-sm((t-.8)/.17),fy=S(T)*3
  c.save();c.translate(206,56+fy)
  c.globalAlpha=.25+.35*gl;E(0,0,30+gl*6);c.fillStyle='#9ff0ff';c.fill();c.globalAlpha=.4+.4*gl;E(0,0,20+gl*4);c.fill();c.globalAlpha=1
  c.rotate(-.7);c.translate(-12,0);key('#dfe6f0','#8f9bb0','#ff5fa8');c.restore()
  if(gl>0){const z=sm(gl*1.5);c.save();c.translate(228,30+fy);c.scale(z,z);E(0,0,10);F('#3fbf6a',3);B();M(-5,0);L(-1,4);L(5,-4);W(3,'#fff');c.restore()}
  // the signal: dots hopping from the lock up to the public key
  if(t>.38&&t<.6){const q=(t-.38)/.22;for(let k=0;k<4;k++){const p=q-k*.08;if(p<0||p>1)continue;const x=196+p*6+S(p*P)*22,y=150-p*84;c.globalAlpha=1-k*.2;star(x,y,6-k);F('#9ff0ff',2);c.globalAlpha=1}}
  // the letter peeking out of its envelope
  B();c.roundRect(142,104,90,60,3);F('#fff')
  c.fillStyle=K;c.font='bold 9px DejaVu Sans Mono';c.fillText('-----BEGIN PGP',148,120)
  for(const[y,w]of[[130,70],[139,58],[148,74]]){B();c.roundRect(148,y,w,4,2);c.fillStyle='#c9cdd9';c.fill()}
  B();c.roundRect(142,104,90,60,3);W(3)
  B();c.roundRect(128,140,116,86,5);F('#fdf3e0')
  B();M(128,226);L(186,184);L(244,226);W(2.5,'#d8c6a2');B();M(130,142);L(186,190);L(242,142);c.closePath();F('#f5e6c8',3)
  B();c.roundRect(128,140,116,86,5);W(3.5)
  // padlock seal, seen a little from the left so the key goes in its side
  const ly=ck?Math.max(0,S((t-.38)/.06*P))*-3:0
  B();M(184,174);L(184,154+ly);Q(184,138+ly,198,138+ly);Q(212,138+ly,212,154+ly);L(212,166);W(11);W(6,'#b9c0cc')
  B();M(170,170);L(178,164);L(178,196);L(170,200);c.closePath();F(gs,3)
  B();c.roundRect(178,164,40,32,5);F(gd,3);B();c.roundRect(184,168,28,6,3);c.fillStyle='#ffe08a';c.fill()
  E(174,182,2.5,4);F(K,0)
  if(ck){const q=(t-.38)/.22;c.globalAlpha=1-q;E(196,180,26+q*24);W(7);W(4,'#ffd43a');for(let k=0;k<6;k++){const a=k*P/3+.3;star(196+C(a)*(30+q*20),180+S(a)*(30+q*20),6*(1-q)+2);F('#ffe066',2)}c.globalAlpha=1}
  // trench coat girl: boots, coat, belt
  for(const x of[64,90]){B();c.roundRect(x-8,214,16,18,4);F('#3a2a2a');B();c.ellipse(x+2,236,12,6,0,P,0);L(x-10,236);F('#2a1e1e')}
  const tor=()=>{B();M(58,140);Q(78,132,98,140);Q(110,146,112,174);L(118,222);Q(78,230,38,222);L(44,174);Q(46,146,58,140)}
  tor();F(tc);c.save();tor();c.clip();B();M(94,130);Q(120,170,112,230);L(140,230);L(140,130);F(td,0);c.restore();tor();W(3.5)
  B();M(78,142);L(78,226);W(2.5,td);for(const y of[160,176,204])for(const x of[70,86]){E(x,y,2.5);F('#6b4a2a',1.5)}
  B();c.roundRect(40,186,76,10,3);F(td,3);B();c.roundRect(72,184,14,14,2);F(gd,2.5)
  for(const s of[-1,1]){B();M(78,140);L(78+s*20,138);L(78+s*14,164);c.closePath();F(tc,3)}
  B();M(70,138);L(78,150);L(86,138);c.closePath();F('#2f3a4a',2.5)
  // high ponytail swinging behind the head
  const hx=78,hy=94,pw=S(T)*.06
  c.save();c.translate(hx+6,hy-46);c.rotate(pw)
  B();M(-6,0);Q(-14,-24,-36,-20);Q(-62,-12,-62,22);Q(-60,52,-46,76);Q(-46,48,-36,30);Q(-30,10,6,4);c.closePath();F(hr)
  B();M(-40,-12);Q(-56,6,-52,40);W(2.5,hs);B();c.arc(-30,-14,12,-2.6,-1.4);W(3.5,hl)
  c.restore()
  // head
  c.save();c.translate(hx,hy)
  const face=()=>{B();M(-42,-6);Z(-42,24,-22,39,0,40);Z(22,39,42,24,42,-6);c.arc(0,-6,42,0,P,true)}
  B();M(-46,16);Z(-54,-70,54,-70,46,16);c.closePath();F(hs)
  face();F(sk)
  const bang=()=>{B();M(-48,18);Z(-54,-66,54,-66,48,18);Q(44,0,38,-6);Q(34,4,30,10);Q(24,-8,16,-2);Q(10,-14,2,0);Q(-4,-12,-12,0);Q(-20,-8,-26,4);Q(-32,-6,-38,-4);Q(-44,4,-48,18)}
  c.save();face();c.clip();c.translate(0,5);bang();F(ss,0);c.restore()
  bang();F(hr)
  B();c.arc(0,-8,40,-2.5,-2.15);M(-2,-48);c.arc(0,-8,40,-1.62,-1.3);W(3.5,hl)
  E(6,-46,8,5);F(gd,2.5)
  // one sly wink, one amber eye
  E(-18,14,9,11);F('#fff',0);E(-17,15,7,9.5);F('#e8a42c',0);B();c.ellipse(-17,15,7,9.5,0,P,2*P);F('#a8650c',0)
  E(-17,15,3,4.5);F('#4a2604',0);E(-19.5,11,2.6,3);F('#fff',0);E(-14.5,19,1.3);F('#fff',0)
  B();M(-8,8);Q(-18,0,-28,7);L(-31,3);W(3.5)
  B();M(10,14);Q(18,6,26,14);W(3.5);B();M(25,13);L(29,10);W(3)
  for(const s of[-1,1]){E(s*28,24,6,3.2);c.fillStyle='rgba(255,110,140,.4)';c.fill()}
  B();M(-4,30);Q(2,33,7,29);W(2.5)
  c.restore()
  // shh: finger to the lips
  B();M(56,150);Q(42,150,62,138);W(13);W(7,tc);E(66,134,7,6);F(sk,3);B();c.roundRect(73,114,6,18,3);F(sk,2.5)
  // key arm: hand on the bow, the key turning about its own axis
  B();M(100,152);Q(124,166,138+sl*.6,180);W(13);W(7,tc)
  c.save();c.translate(138-sl,182);c.scale(1,C(tu*1.25));key(gd,gs,'#ff5fa8');c.restore()
  E(134-sl,184,8,7.5);F(sk,3)
}
