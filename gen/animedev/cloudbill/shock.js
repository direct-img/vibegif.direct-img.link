// auburn-haired girl in glasses frozen in shock as an endless cloud invoice full of $ charges unrolls and piles up
export const frames=16,delay=80,rim=3
export default(c,t)=>{
  const P=Math.PI,S=Math.sin,C=Math.cos,T=2*P*t,K='#211a1e',sk='#d9a374',ss='#b98256',hr='#b5512e',hs='#80341a',hl='#ec9068',gr='#2f6b4f',gd='#1f4a36'
  const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),L=(x,y)=>c.lineTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
  const E=(x,y,a,b=a,r=0)=>{B();c.ellipse(x,y,a,b,r,0,2*P)}
  const F=(f,w=3.5)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.stroke()}}
  const W=(w,s=K)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke();c.strokeStyle=K}
  c.strokeStyle=K;c.textAlign='right'
  // invoice rows: four-row pattern scrolling down two patterns per loop
  const rows=(x,y0,y1,w,off)=>{c.save();B();c.rect(x,y0,w,y1-y0);c.clip()
    for(let y=y0-64+off;y<y1+16;y+=16){const k=Math.round((y-off-y0)/16)&3
      if(k==3){c.fillStyle='#e2343c';c.font='bold 14px DejaVu Sans Mono';c.fillText('$$$$',x+w-6,y+12)}
      else{B();c.roundRect(x+6,y+5,[18,24,14][k],5,2);c.fillStyle='#b8bccb';c.fill();c.fillStyle='#3a3f4e';c.font='bold 11px DejaVu Sans Mono';c.fillText(['$420','$9k','$1.2k'][k],x+w-5,y+11)}}
    c.restore()}
  const off=(t*128)%64
  // the pile of paper at the bottom
  B();M(108,240);Q(104,222,124,216);Q(150,206,176,214);Q(200,204,226,212);Q(250,214,246,236);Q(242,246,200,244);L(120,246);Q(108,246,108,240);F('#fff')
  for(const[a,b]of[[124,226],[160,220],[198,222],[228,230]]){B();M(a-14,b+4);Q(a,b-6,a+14,b+4);W(2.5,'#c8ccd8')}
  // falling strip with a slight sway
  const sx=150,sw=58,sway=S(T)*3
  B();M(sx,60);L(sx+sw,60);Q(sx+sw+sway,150,sx+sw+8,212);L(sx+8,214);Q(sx+sway,150,sx,60);F('#fff')
  rows(sx+2,60,212,sw-2,off)
  B();M(sx,60);L(sx+sw,60);Q(sx+sw+sway,150,sx+sw+8,212);L(sx+8,214);Q(sx+sway,150,sx,60);W(3.5)
  // the cloud printing it
  B();M(118,54);Q(108,34,128,30);Q(132,10,158,16);Q(174,2,196,14);Q(222,8,228,30);Q(248,36,238,54);Q(240,66,220,64);L(128,64);Q(110,66,118,54);F('#e6f1ff')
  B();M(132,56);Q(178,62,226,56);W(3,'#b9cfee')
  B();c.roundRect(146,56,66,8,4);F('#3b4152',3)
  c.fillStyle='#4a7bd6';c.font='bold 26px DejaVu Sans';c.textAlign='center';c.fillText('$',178,48);c.textAlign='right'
  // girl trembling
  const j=S(T*8)*1.2
  c.save();c.translate(j,0)
  for(const x of[56,86]){B();c.roundRect(x-8,206,16,26,4);F('#3a3550');B();c.ellipse(x,236,11,6,0,P,0);L(x-11,236);F('#2a2230')}
  const tor=()=>{B();M(46,152);Q(72,142,98,152);Q(110,158,110,186);L(112,212);L(32,212);L(34,186);Q(34,158,46,152)}
  tor();F(gr);B();M(62,148);L(72,180);L(82,148);c.closePath();F('#fff',2.5);tor();W(3.5)
  B();M(62,148);L(54,170);L(72,180);M(82,148);L(90,170);L(72,180);W(3,gd)
  E(72,196,2.5);F('#fff',1.5)
  c.save();c.translate(72,100)
  // bun with a pencil
  E(0,-56,20,16);F(hr);B();M(-26,-70);L(28,-46);W(7);W(4,'#f5c542');B();M(28,-46);L(34,-43);W(4,'#f4a3a3')
  B();c.arc(0,-56,12,-2.6,-1.2);W(3,hl)
  B();M(-48,20);Z(-56,-78,56,-78,48,20);c.closePath();F(hs)
  const face=()=>{B();M(-44,-6);Z(-44,24,-23,40,0,41);Z(23,40,44,24,44,-6);c.arc(0,-6,44,0,P,true)}
  face();F(sk)
  const bang=()=>{B();M(-48,16);Z(-52,-74,52,-74,48,16);Q(44,0,38,-8);Q(20,-10,6,-26);Q(-10,-4,-40,-4);Q(-44,4,-48,16)}
  c.save();face();c.clip();c.translate(0,5);bang();F(ss,0);c.restore()
  // gloom lines of horror
  c.save();face();c.clip();B();c.rect(-50,-30,100,38);c.fillStyle='rgba(80,70,200,.3)';c.fill();for(let k=-3;k<=3;k++){B();M(k*11,-20);L(k*11,(k&1)*5);W(2.5,'#4a3fa8')}c.restore()
  bang();F(hr)
  B();c.arc(0,-6,40,-2.4,-2);M(14,-40);c.arc(0,-6,40,-1.3,-1);W(3.5,hl)
  // shocked eyes behind round glasses, pupils shrunk
  for(const s of[-1,1]){const x=s*19
    E(x,15,10,11);F('#fff',0);E(x+S(T*8+s)*.8,16,2.6,3);F(K,0)
    E(x,15,14,13);W(3,'#5a3a2a');B();M(x-8,8);L(x-3,4);W(2.5,'rgba(255,255,255,.9)')}
  B();M(-5,14);Q(0,11,5,14);W(3,'#5a3a2a');B();M(-33,12);L(-44,8);M(33,12);L(44,8);W(3,'#5a3a2a')
  // jaw dropped
  B();M(-8,27);Q(0,24,8,27);Q(9,44,0,46);Q(-9,44,-8,27);F('#5a1a24',2.5);E(0,41,5,3);F('#ff7a8a',0)
  // sweat
  B();M(44,0);Q(50,10,44,14);Q(38,10,44,0);F('#8fd3ff',2.5)
  c.restore()
  // hands pressed to the cheeks
  for(const s of[-1,1]){B();M(72+s*30,160);Q(72+s*46,150,72+s*40,130);W(15);W(9,gr);E(72+s*39,126,8,10);F(sk,3)}
  c.restore()
}
