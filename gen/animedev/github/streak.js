// girl with a short ash-brown bob, a green hair clip and a green raglan tee painting this week's column of a contribution grid green square by square, cheering as her streak flame flares and the grid scrolls on
export const frames=16,delay=90,rim=3
export default(c,t)=>{
  const P=Math.PI,S=Math.sin,C=Math.cos,T=2*P*t,K='#1d1b22',sk='#ffe7d8',ss='#f4c8b4',hr='#8b7f77',hs='#655b55',hl='#c4bab1',gn='#2f9e55'
  const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),L=(x,y)=>c.lineTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
  const E=(x,y,a,b=a,r=0)=>{B();c.ellipse(x,y,a,b,r,0,2*P)}
  const F=(f,w=3.5)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.stroke()}}
  const W=(w,s=K)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke();c.strokeStyle=K}
  const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
  c.strokeStyle=K;c.translate(0,7)
  // timeline: dab the 7 days of this week (.06-.48), cheer (.5-.8), grid scrolls one week left (.8-1)
  const f=(t-.06)/.07,sl=sm((t-.8)/.2),w=sm((t-.5)/.06)-sm((t-.74)/.1),jp=t>.52&&t<.78?S((t-.52)/.26*P)*10:0
  // green by position: older weeks lighter, this week darkest; each row a touch different
  const lv=[.02,-.1,.06,-.04,.1,-.08,0],col=(x,r)=>{const u=Math.max(0,Math.min(1,(x-18)/105+lv[r]))
    const a=[155,233,168],b=[33,110,57];return`rgb(${a.map((v,i)=>v+(b[i]-v)*u|0)})`}
  // board
  B();c.roundRect(10,38,136,122,8);F('#fff')
  c.save();B();c.roundRect(13,41,130,116,6);c.clip()
  const cell=(x,y,f,z=1)=>{B();c.roundRect(x+6-6*z,y+6-6*z,12*z,12*z,3);c.fillStyle=f;c.fill()}
  for(let k=0;k<9;k++){const x=18+(k-sl)*15;if(x<2)continue
    c.globalAlpha=k==0?1-sl:k==8?sl:1
    for(let r=0;r<7;r++){const y=46+r*15
      if(k<7)cell(x,y,col(x,r))
      else if(k==7){const d=f-r;if(d<0)cell(x,y,'#e3e6ea');else{const z=d<.6?1+.35*S(d/.6*P):1;cell(x,y,col(x,r),z)}}
      else cell(x,y,'#e3e6ea')}}
  c.globalAlpha=1;c.restore();B();c.roundRect(10,38,136,122,8);W(3.5)
  // the streak flame, flaring on the cheer
  const fz=1+.35*w+.05*S(T*4)
  c.save();c.translate(226,40);c.scale(fz,fz)
  B();M(0,16);Q(-16,14,-14,-2);Q(-12,-10,-4,-18);Q(-4,-8,2,-6);Q(2,-16,8,-22);Q(16,-6,14,4);Q(14,16,0,16);F('#ff8a2a',3)
  B();M(0,14);Q(-8,12,-7,3);Q(-5,-4,0,-8);Q(1,-2,4,-2);Q(8,4,7,8);Q(6,14,0,14);F('#ffd84a',0)
  c.restore()
  // confetti squares popping from the finished week
  if(t>.5&&t<.86){const q=(t-.5)/.36;c.globalAlpha=Math.min(1,(1-q)*3);for(let k=0;k<8;k++){const a=-P/2+(k-3.5)*.42,v=60+(k%3)*14,x=129+C(a)*v*q,y=96+S(a)*v*q+90*q*q
    c.save();c.translate(x,y);c.rotate(q*6+k);B();c.rect(-4,-4,8,8);F(['#40c463','#216e39','#9be9a8','#30a14e'][k%4],2);c.restore()}c.globalAlpha=1}
  // girl
  const gx=194,gy=104-jp
  // legs and sneakers
  for(const x of[180,204]){B();c.roundRect(x-8,206-jp,16,24,4);F('#3b4a6b');B();c.ellipse(x+2,232-jp,12,6,0,P,0);L(x-10,232-jp);F('#fff');B();M(x-8,229-jp);L(x+12,229-jp);W(2.5,gn)}
  // raglan tee
  const tor=()=>{B();M(172,150-jp);Q(194,142-jp,216,150-jp);Q(228,156-jp,228,184-jp);L(230,210-jp);L(158,210-jp);L(160,184-jp);Q(160,156-jp,172,150-jp)}
  tor();F('#f6f4ee');c.save();tor();c.clip();for(const s of[-1,1]){B();M(194+s*10,144-jp);L(194+s*40,170-jp);L(194+s*40,140-jp);c.closePath();F(gn,0)}c.restore();tor();W(3.5)
  B();M(184,148-jp);Q(194,158-jp,204,148-jp);W(3,gn)
  // head
  c.save();c.translate(gx,gy)
  const face=()=>{B();M(-40,-6);Z(-40,22,-21,37,0,38);Z(21,37,40,22,40,-6);c.arc(0,-6,40,0,P,true)}
  // ash-brown bob, back
  B();M(-48,34);Q(-44,22,-48,4);Z(-56,-44,-36,-62,0,-62);Z(36,-62,56,-44,48,4);Q(44,22,48,34);Q(36,34,30,26);L(-30,26);Q(-36,34,-48,34);F(hs)
  face();F(sk)
  const bang=()=>{B();M(-48,32);Q(-40,24,-44,14);Z(-56,-82,56,-82,44,14);Q(40,24,48,32);Q(40,24,40,12);Q(42,12,38,0);Q(30,-4,26,4);Q(22,-8,14,-2);Q(8,-12,0,0);Q(-6,-10,-14,0);Q(-22,-8,-28,4);Q(-34,-4,-40,0);Q(-42,12,-46,28)}
  c.save();face();c.clip();c.translate(0,5);bang();F(ss,0);c.restore()
  bang();F(hr)
  B();c.arc(0,-8,38,-2.45,-2.25);M(10,-45);c.arc(0,-8,38,-1.3,-1.12);W(3,hl)
  // green hair clip
  c.save();c.translate(-30,-18);c.rotate(-.9);B();c.roundRect(-11,-4,22,8,4);F('#3fbf6a',2.5);B();c.roundRect(-5,-2,10,4,2);c.fillStyle='#a6f0bf';c.fill();c.restore()
  // eyes: focused while painting, ^ ^ on the cheer
  for(const s of[-1,1]){const x=s*17
    if(w>.5){B();M(x-9,16);Q(x,6,x+9,16);W(3.5)}
    else{E(x,15,9,11);F('#fff',0);E(x-2,16,7,9.5);F('#b0702c',0);B();c.ellipse(x-2,16,7,9.5,0,P,2*P);F('#6e3f12',0)
      E(x-2,16,3,4.5);F('#33190a',0);E(x-4.5,12,2.6,3);F('#fff',0);E(x+.5,20,1.3);F('#fff',0)
      B();M(x-10*s,9);Q(x,1,x+10*s,8);L(x+13*s,4);W(3.5)}
    E(s*27,24,6,3.2);c.fillStyle='rgba(255,110,130,.4)';c.fill()}
  if(w>.5){B();M(-9,26);Q(0,25,9,26);Q(8,38,0,38);Q(-8,38,-9,26);F('#7a2030',2.5);E(0,34,4,2.4);F('#ff7a8a',0)}
  else{B();M(-6,28);Q(0,32,6,28);W(2.5);B();M(1,30);Q(4,35,7,31);F('#ff7a8a',2)}
  c.restore()
  // brush hand: dabs each day's square, swings up on the cheer, then back to the top of the new week
  const fr=Math.max(0,Math.min(6,f)),ph=f<0||f>6.3?1:Math.abs(S(f*P)),back=t>.8?1-sm((t-.8)/.2):0
  let tx=132+ph*8,ty=52+(t>.8?6*back:fr)*15
  let hx=156,hy=ty+Math.sqrt(2500-(hx-tx)**2)
  hx+=(166-hx)*w;hy+=(70-hy)*w-jp*w
  const ba=Math.atan2(ty-hy,tx-hx)*(1-w)+(-P/2-.5)*w,bx=hx+C(ba)*44,by=hy+S(ba)*44
  B();M(174,158-jp);Q(162,hy+30,hx,hy);W(13);W(7,gn)
  B();M(hx-C(ba)*8,hy-S(ba)*8);L(bx,by);W(8);W(4,'#e0b26a')
  c.save();c.translate(bx,by);c.rotate(ba);B();M(-4,-5);L(6,-5);Q(14,0,6,5);L(-4,5);c.closePath();F('#40c463',2.5);B();c.rect(-8,-5,5,10);F('#b9c0cc',2);c.restore()
  E(hx,hy,7);F(sk,3)
  // other arm: at her side, punching the air on the cheer
  const ox=226+8*w,oy=196-110*w-jp
  B();M(214,158-jp);Q(228+10*w,180-60*w-jp,ox,oy);W(13);W(7,gn);E(ox,oy,7);F(sk,3)
}
