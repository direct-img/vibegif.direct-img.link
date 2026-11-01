// curly-haired girl in star pyjamas asleep in bed jolts awake when her pager buzzes at 3:00, then flops back down
export const frames=16,delay=95,rim=3
export default(c,t)=>{
  const P=Math.PI,S=Math.sin,C=Math.cos,T=2*P*t,K='#22181e',sk='#7a4a2e',ss='#5e3620',hr='#8e2f55',hs='#5f1d3a',hl='#d26a96',pj='#9fc8f2',pd='#6f9fd6'
  const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),L=(x,y)=>c.lineTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
  const E=(x,y,a,b=a,r=0)=>{B();c.ellipse(x,y,a,b,r,0,2*P)}
  const F=(f,w=3.5)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.stroke()}}
  const W=(w,s=K)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke();c.strokeStyle=K}
  const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
  c.strokeStyle=K;c.textAlign='center'
  // u: 0 asleep, 1 bolt upright. buzz runs from just before the jolt until she flops back
  const u=t<.36?0:t<.42?1-((.42-t)/.06)**2:t<.72?1:1-sm((t-.72)/.2),bz=t>.26&&t<.8,jo=t>.38&&t<.74
  // moon and stars
  B();M(206,16);Z(238,12,246,58,204,62);Z(226,50,228,26,206,16);F('#ffe27a',3)
  for(const[x,y,r]of[[174,24,5],[236,80,3.5]]){B();for(let k=0;k<8;k++){const a=k*P/4,q=k%2?r*.4:r;L(x+C(a)*q,y+S(a)*q)}c.closePath();F('#ffe27a',2)}
  // headboard and pillow
  B();c.roundRect(20,70,162,104,[30,30,4,4]);F('#b07a4e');B();c.roundRect(32,82,138,84,[22,22,4,4]);F('#c98e5f',3)
  E(92,138,62,22);F('#fff')
  // girl: head, hair, body tilt with u
  const hx=92+10*u,hy=114-28*u,hr0=-.3*(1-u)
  // pyjama torso and arms when sitting up
  if(u>0){c.save();c.translate(0,(1-u)*40)
    B();M(68,184);L(72,140);Q(102,128,132,140);L(136,184);c.closePath();F(pj)
    for(const[x,y]of[[86,154],[118,166],[96,176]]){B();for(let k=0;k<10;k++){const a=k*P/5-P/2,q=k%2?2:5;L(x+C(a)*q,y+S(a)*q)}c.closePath();F('#fff',0)}
    B();M(88,136);L(102,150);L(116,136);W(3,'#fff')
    c.restore()}
  c.save();c.translate(hx,hy);c.rotate(hr0);c.translate(0,jo?S(T*10)*1.2:0)
  // hair: a curly cloud that poofs when she jolts
  const pf=1+.14*u,cl=(r,n,b)=>{B();for(let k=0;k<=n;k++){const a=k*2*P/n-P/2;const x=C(a)*r*pf*1.08,y=S(a)*r*pf-6;k?c.arc(x,y,b,a-1.6,a+1.6):M(x+C(a-1.6)*b,y+S(a-1.6)*b)}c.closePath()}
  cl(50,14,13);F(hs)
  const face=()=>{B();M(-44,-6);Z(-44,24,-23,40,0,41);Z(23,40,44,24,44,-6);c.arc(0,-6,44,0,P,true)}
  face();F(sk)
  // fluffy fringe
  const fr=()=>{B();M(-46,6);Z(-50,-50,50,-50,46,6);for(let k=4;k>=-4;k--){const x=k*11.5;c.arc(x,-10+Math.abs(k)*1.2+(k%2?3:0),7,0,P)}c.closePath()}
  c.save();face();c.clip();c.translate(0,5);fr();F(ss,0);c.restore()
  fr();F(hr)
  for(const[x,y]of[[-24,-38],[0,-44],[22,-38]]){B();c.arc(x,y,8,-2.6,-1.2);W(3.5,hl)}
  // pink sleep mask pushed up
  B();M(-48,-30);Q(0,-56,48,-30);W(7);W(3,'#ff8fb8')
  c.save();c.translate(0,-38);c.rotate(-.02);B();c.roundRect(-30,-12,60,22,11);F('#ff8fb8',3);for(const s of[-1,1]){B();M(s*14-7,0);Q(s*14,5,s*14+7,0);W(2)}c.restore()
  // eyes: sleeping curves, then shocked wide with tiny pupils
  for(const s of[-1,1]){const x=s*19
    if(u<.5){B();M(x-9,16);Q(x,22,x+9,16);W(3.5)}
    else{E(x,15,11,13);F('#fff',3);const j=jo?S(T*10+s)*1:0;E(x+j,16,3.2,3.6);F(K,0);E(x+j-1,15,1.2);F('#fff',0)
      B();M(x-8*s,-6);Q(x+2*s,-10,x+12*s,-6);W(3)}
    E(s*30,26,6,3.2);c.fillStyle='rgba(255,120,140,.3)';c.fill()}
  // mouth: drooly sleep o, then a shocked open shout
  if(u<.5){E(4,31,3,2.2);F('#3a1a1a',2);B();M(-12,30);Q(-14,36,-11,38);W(2,'#9fe0ff')}
  else{B();M(-8,28);Q(0,24,8,28);Q(8,40,0,40);Q(-8,40,-8,28);F('#5a1a24',2.5);E(0,36,4,2.5);F('#ff7a8a',0)}
  c.restore()
  if(u>0){c.save();c.translate(0,(1-u)*40)
    // arms flung up in shock
    for(const s of[-1,1]){const ax=102+s*30,bx=hx+s*44,by=hy+30+(jo?S(T*10+s)*2:0)
      B();M(ax,146);Q(ax+s*18,by+26,bx,by);W(16);W(10,pj);E(bx,by-2,8);F(sk,3)}
    c.restore()}
  // blanket, up to her chin asleep, slipping to her lap when she sits up
  const by=152+30*u+(u?0:S(T*2)*1.5)
  B();M(16,by+4);Q(100,by-8-4*(1-u),190,by+2);L(192,226);Q(104,234,12,226);c.closePath();F('#b9a6e8')
  B();M(16,by+4);Q(100,by-8-4*(1-u),190,by+2);L(190,by+14);Q(100,by+4,16,by+16);c.closePath();F('#fff',3)
  for(const x of[56,102,148]){B();M(x,by+24);Q(x+6,by+44,x-2,226);W(2.5,'#9784cc')}
  for(const x of[26,178]){B();c.roundRect(x-6,224,12,14,3);F('#8a5a3a',3)}
  // nightstand and buzzing pager
  B();c.roundRect(190,168,48,70,5);F('#c98e5f');B();M(196,198);L(232,198);W(2.5);E(214,214,3);F(K,0)
  const px=214+(bz?S(T*18)*2.5:0)
  c.save();c.translate(px,150);c.rotate(bz?S(T*18+1)*.08:0)
  B();c.roundRect(-23,-17,46,34,7);F('#3a3f4e');B();c.roundRect(-18,-12,36,17,2);F(bz?'#b6f27a':'#7a9a5a',2)
  c.fillStyle=K;c.font='bold 14px DejaVu Sans Mono';c.fillText('3:00',0,1);E(14,10,2.6);F(bz&&Math.floor(t*16)%2?'#ff4b4b':'#7a2a2a',1.5)
  c.restore()
  if(bz)for(const s of[-1,1])for(let k=0;k<2;k++){B();c.arc(214,150,27+k*5+(Math.floor(t*16)%2)*1.5,s<0?P-.5:-.5,s<0?P+.5:.5);W(3,'#ff6a3d')}
  // a big ! when she jolts, Zzz while she sleeps
  if(t>.38&&t<.56){const q=(t-.38)/.18;c.globalAlpha=1-q;for(let k=0;k<6;k++){const a=(k<3?P:0)+(k%3-1)*.42-.25,r=78+q*6;B();M(hx+C(a)*r,hy-6+S(a)*r);L(hx+C(a)*(r+10),hy-6+S(a)*(r+10));W(4,'#ffb020')}c.globalAlpha=1}
  if(jo){const k=sm((t-.38)/.05);c.save();c.translate(hx+52,hy-50);c.scale(k,k);c.rotate(.2);B();c.roundRect(-5,-22,10,26,5);F('#ffd34d',3);E(0,12,5);F('#ffd34d',3);c.restore()}
  c.font='bold 16px DejaVu Sans';c.lineWidth=4
  for(let k=0;k<3;k++){const p=(t*2+k/3)%1,a=(1-u)*Math.min(1,p*4,(1-p)*3);if(a<=0)continue
    c.globalAlpha=a;const x=134+p*30+S(p*6)*4,y=100-p*50,z=14+p*12;c.font=`bold ${z|0}px DejaVu Sans`;c.strokeText('z',x,y);c.fillStyle='#fff';c.fillText('z',x,y);c.globalAlpha=1}
}
