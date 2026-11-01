// maid with platinum twin tails sweeping dusty stale cache cubes away with a broom, the screen behind refreshes with sparkles
export const frames=16,delay=90,rim=3
export default(c,t)=>{
  const P=Math.PI,S=Math.sin,C=Math.cos,T=2*P*t,K='#1f1a22',sk='#6b4228',ss='#53311d',hr='#f3ead2',hs='#cfc0a0',hl='#ffffff',dr='#2b2b3a'
  const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),L=(x,y)=>c.lineTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
  const E=(x,y,a,b=a,r=0)=>{B();c.ellipse(x,y,a,b,r,0,2*P)}
  const F=(f,w=3.5)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.stroke()}}
  const W=(w,s=K)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke();c.strokeStyle=K}
  const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
  const star=(x,y,r)=>{B();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.32:r;L(x+C(a)*q,y+S(a)*q)}c.closePath()}
  c.strokeStyle=K
  // two sweeps per loop; s is the phase of the current one
  const s=(t*2)%1,hit=.6,fr=s<.1?1-sm(s/.1):s<hit?0:1,st=1-fr
  // browser window: dusty and grey until the hit, then it refreshes sparkling
  B();c.roundRect(150,18,92,82,6);F('#fff')
  B();c.roundRect(150,18,92,15,[6,6,0,0]);F('#d6dbe8',3)
  for(const[x,f]of[[160,'#ff6b6b'],[170,'#ffd34d'],[180,'#5dd67a']]){E(x,25.5,3);F(f,1.5)}
  B();c.roundRect(158,40,38,30,3);F('#8fd0ff',2.5);B();M(160,68);L(172,52);L(180,62);L(186,56);L(194,68);c.closePath();F('#5dd67a',0);E(186,47,4);F('#ffd34d',0)
  for(const[y,w]of[[44,36],[54,30],[64,38],[80,74],[90,56]]){B();c.roundRect(y<70?202:158,y,y<70?w-6:w,5,2);c.fillStyle=y<70?'#b8bccb':'#c9cdd9';c.fill()}
  c.save();B();c.roundRect(150,33,92,67,[0,0,6,6]);c.clip();c.globalAlpha=st*.75;c.fillStyle='#9a9688';c.fillRect(150,33,92,67)
  B();M(242,33);L(218,33);Q(228,43,242,57);M(242,33);L(226,49);M(232,33);Q(236,41,242,45);W(1.5,'#5a5650');c.globalAlpha=1;c.restore()
  B();c.roundRect(150,18,92,82,6);W(3.5)
  // refresh arrow spinning after the hit, sparkles popping
  if(fr>0){c.save();c.translate(198,58);c.rotate(s*4*P);c.globalAlpha=fr;B();c.arc(0,0,13,.3,5.4);W(8,'#fff');B();c.arc(0,0,13,.3,5.4);W(4,'#4a7bd6')
    B();M(13*C(5.4)+6,13*S(5.4)-4);L(13*C(5.4)-3,13*S(5.4)-8);L(13*C(5.4)+1,13*S(5.4)+4);c.closePath();F('#4a7bd6',0);c.restore()
    for(let k=0;k<5;k++){const q=(s<hit?1:sm((s-hit)/.1))*fr,x=[146,234,168,228,200][k],y=[24,36,98,96,20][k],r=(8+(k%2)*4)*q*(1+.15*S(s*8*P+k));star(x,y,r);F('#ffe066',2.5)}
    c.globalAlpha=1}
  // floor shadow
  E(118,236,78,6);c.fillStyle='rgba(0,0,0,.12)';c.fill()
  // the maid: legs, dress, apron
  for(const x of[94,118]){B();c.roundRect(x-7,204,14,26,4);F('#fff',3);B();c.ellipse(x+2,232,11,6,0,P,0);L(x-9,232);F('#1f1a22')}
  B();M(84,148);Q(106,140,128,148);L(146,210);Q(106,220,66,210);c.closePath();F(dr)
  B();M(90,162);L(122,162);L(132,206);Q(106,212,80,206);c.closePath();F('#fff',3)
  for(let k=0;k<6;k++){B();c.arc(84+k*9,207+(k%2),5,0,P);F('#fff',2.5)}
  B();M(94,148);L(106,160);L(118,148);c.closePath();F('#fff',2.5);B();M(100,156);L(106,164);L(112,156);c.closePath();F('#e2483d',2)
  for(const x of[84,128]){E(x,152,11,9);F(dr,3)}
  // head
  const bt0=s<.3?168:s<.55?168+54*sm((s-.3)/.25):s<.64?222-62*sm((s-.55)/.09):160+8*sm((s-.64)/.36)
  c.save();c.translate(106,92)
  // long twin tails
  for(const q of[-1,1]){const sw=0;B();M(q*36,-30);Q(q*68+sw,0,q*58+sw,60);Q(q*54+sw,100,q*64+sw*1.5,122);Q(q*44+sw,104,q*40+sw,70);Q(q*36,20,q*26,-20);c.closePath();F(hr)
    B();M(q*52+sw,20);Q(q*58+sw,60,q*52+sw,96);W(2.5,hs);B();c.roundRect(q*36-7,-38,14,12,4);F('#e2483d',3)}
  B();M(-46,20);Z(-56,-76,56,-76,46,20);c.closePath();F(hs)
  const face=()=>{B();M(-44,-6);Z(-44,24,-23,40,0,41);Z(23,40,44,24,44,-6);c.arc(0,-6,44,0,P,true)}
  face();F(sk)
  const bang=()=>{B();M(-48,20);Z(-54,-72,54,-72,48,20);Q(44,2,38,-6);Q(32,-2,28,6);Q(22,-12,14,0);Q(8,-16,0,2);Q(-8,-14,-14,0);Q(-22,-12,-28,6);Q(-32,-2,-38,-6);Q(-44,2,-48,20)}
  c.save();face();c.clip();c.translate(0,5);bang();F(ss,0);c.restore()
  bang();F(hr)
  B();c.arc(0,-8,42,-2.5,-2.1);M(-6,-50);c.arc(0,-8,42,-1.7,-1.35);W(3.5,hl)
  // frilly headband
  B();M(-40,-34);Q(0,-56,40,-34);W(10);W(6,'#fff');for(let k=-3;k<=3;k++){E(k*11,-46+Math.abs(k)*2.2,5);F('#fff',2.5)}
  // focused cheerful eyes
  const hp=s>.58&&s<.8
  for(const q of[-1,1]){const x=q*18
    if(hp){B();M(x-9,18);Q(x,6,x+9,18);W(3.5);E(q*29,25,6,3.2);c.fillStyle='rgba(255,120,140,.4)';c.fill();continue}
    E(x,15,10,12);F('#fff',0);E(x,16,7.5,10);F('#2aa7b8',0);B();c.ellipse(x,16,7.5,10,0,P,2*P);F('#13707e',0)
    E(x,16,3.2,4.8);F('#08343a',0);E(x-2.5,12,2.6,3);F('#fff',0);E(x+2.5,21,1.3);F('#fff',0)
    B();M(x-11*q,9);Q(x,0,x+11*q,8);L(x+14*q,4);W(3.5)
    E(q*29,25,6,3.2);c.fillStyle='rgba(255,120,140,.4)';c.fill()}
  if(hp){B();M(-8,27);Q(0,26,8,27);Q(7,37,0,37);Q(-7,37,-8,27);F('#7a2030',2.5)}else{B();M(-6,29);Q(0,34,6,29);W(2.5)}
  c.restore()
  // broom: brush rests, swings back past the cube, strikes through it at the hit, drifts back
  const bt=bt0,lift=s>.3&&s<.6?S((s-.3)/.3*P)*10:0
  const hx=114+(bt-168)*.45,hy=150,bx=bt,by=224-lift,ba=Math.atan2(by-hy,bx-hx)
  B();M(hx-C(ba)*10,hy-S(ba)*10);L(bx,by);W(9);W(5,'#b07a4e')
  c.save();c.translate(bx,by);c.rotate(ba-P/2);B();M(-10,-4);L(10,-4);L(18,16);Q(0,22,-18,16);c.closePath();F('#f2c14e');for(let k=-2;k<=2;k++){B();M(k*4,0);L(k*7,16);W(2,'#c8902a')}B();c.roundRect(-11,-8,22,7,3);F('#e2483d',2.5);c.restore()
  const h2=[hx+(bx-hx)*.38,hy+(by-hy)*.38]
  B();M(96,156);Q(100,170,hx,hy);M(126,156);Q(140,172,h2[0],h2[1]);W(13);W(7,sk)
  for(const[x,y]of[[hx,hy],h2]){E(x,y,7.5,7);F(sk,3)}
  // stale cache cubes: pop out of the window, drop, get whacked, slide off and poof
  const cube=(x,y,a,z)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(z,z);B();M(-11,-6);L(0,-12);L(11,-6);L(0,0);c.closePath();F('#c9c4b4',2.5);B();M(-11,-6);L(0,0);L(0,14);L(-11,8);c.closePath();F('#a39e8e',2.5);B();M(11,-6);L(0,0);L(0,14);L(11,8);c.closePath();F('#8a8576',2.5)
    E(-5,4,1.2);E(5,6,1.2);c.fillStyle='#6a6658';c.fill();B();M(-11,-6);Q(-4,-8,0,-12);W(1.2,'#f4f0e4');c.restore()}
  for(let j=0;j<2;j++){const g=s+j
    if(g<.08||g>=1.45)continue
    if(g<.6){const d=Math.min(1,(g-.08)/.22),b=g>.3&&g<.45?S((g-.3)/.15*P)*8:0
      cube(200,104+d*d*112-b,0,Math.min(1,.4+(g-.08)*6))}
    else{const p=(g-.6)/.85,x=200-175*(1-(1-p)**2),o=p<.8?1:1-(p-.8)/.2
      c.globalAlpha=o;cube(x,216,-p*9,1);c.globalAlpha=1
      if(p>.75){const k=(p-.75)/.25;c.globalAlpha=1-k;for(let m=0;m<3;m++){E(x-6+m*7,214-k*12-m*4,5+k*7);F('#e2dccb',2)}c.globalAlpha=1}
      if(p<.5)for(let m=0;m<3;m++){B();M(x+16+m*4,206+m*7);L(x+30+m*8+p*20,206+m*7);W(2.5,'#bdb6a2')}}}
  // whack dust
  if(s>=.6&&s<.85){const k=(s-.6)/.25;c.globalAlpha=1-k;for(let m=0;m<3;m++){E(206+m*8,220-k*16-m*3,4+k*6);F('#e2dccb',2)}c.globalAlpha=1}
}
