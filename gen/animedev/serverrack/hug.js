// mint-haired girl bundled in a beanie and scarf hugging a warm blinking server rack, nuzzling it as hearts float up
export const frames=14,delay=100,rim=3
export default(c,t,i)=>{
  const P=Math.PI,S=Math.sin,C=Math.cos,T=2*P*t,K='#211a20',sk='#eec9a0',ss='#d6a87c',hr='#7fd6b0',hs='#4fa688',hl='#c8f5e2',jk='#f58fb0',jd='#d0688e'
  const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),L=(x,y)=>c.lineTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
  const E=(x,y,a,b=a,r=0)=>{B();c.ellipse(x,y,a,b,r,0,2*P)}
  const F=(f,w=3.5)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.stroke()}}
  const W=(w,s=K)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke();c.strokeStyle=K}
  const heart=(x,y,r)=>{B();M(x,y+r);Z(x-r*1.6,y-r*.2,x-r*.7,y-r*1.3,x,y-r*.45);Z(x+r*.7,y-r*1.3,x+r*1.6,y-r*.2,x,y+r)}
  c.strokeStyle=K
  // warmth rising off the rack
  for(let k=0;k<3;k++){const p=(t+k/3)%1,x=148+k*28,y=38-p*14;c.globalAlpha=S(p*P);B();M(x,y+14);Q(x+6,y+7,x,y);Q(x-6,y-7,x,y-14);W(3.5,'#ff9a4d');c.globalAlpha=1}
  // server rack
  B();c.roundRect(122,40,104,204,8);F('#3b4152')
  B();c.roundRect(122,40,104,204,8);c.save();c.clip();B();c.rect(200,40,30,210);F('#2f3442',0);c.restore()
  for(let k=0;k<5;k++){const y=54+k*36
    B();c.roundRect(132,y,84,28,3);F('#5d6577',2.5)
    for(let v=0;v<4;v++){B();M(142+v*8,y+8);L(142+v*8,y+20);W(2.5,'#3b4152')}
    for(let v=0;v<3;v++){const on=(k*5+v*3+i)%7>2;E(184+v*9,y+14,3);F(on?(v==2?'#ffb84d':'#5dff8a'):'#2f5a3a',1.5)}}
  // snow drifting on the cold side
  for(let k=0;k<3;k++){const p=(t+k/3)%1,x=18+k*20+S(T+k*2)*5,y=24+p*80+k*12;c.globalAlpha=S(p*P);c.save();c.translate(x,y);c.rotate(p*2)
    for(let a=0;a<3;a++){B();M(-6,0);L(6,0);W(2.5,'#9fd0ff');c.rotate(P/3)}c.restore();c.globalAlpha=1}
  // nuzzle: head rocks against the rack
  const nz=S(T*2),hx=92,hy=100+nz*2
  // puffer jacket body
  const tor=()=>{B();M(52,150);Q(84,138,116,150);Q(128,160,128,196);L(130,232);Q(84,240,40,232);L(42,196);Q(42,160,52,150)}
  for(const x of[64,96]){B();c.roundRect(x-9,226,18,16,4);F('#3a3550',3)}
  tor();F(jk);c.save();tor();c.clip();for(const y of[176,204]){B();M(30,y);Q(86,y+8,140,y);W(3,jd)}c.restore();tor();W(3.5)
  // head
  c.save();c.translate(hx,hy);c.rotate(.26+nz*.04)
  const face=()=>{B();M(-46,-6);Z(-46,24,-24,40,0,41);Z(24,40,46,24,46,-6);c.arc(0,-6,46,0,P,true)}
  B();M(-50,30);Q(-58,-10,-40,-34);L(40,-34);Q(58,-10,50,30);Q(40,40,30,30);L(-30,30);Q(-40,40,-50,30);F(hs)
  face();F(sk)
  const bang=()=>{B();M(-52,22);Q(-56,-20,-44,-34);L(44,-34);Q(56,-20,52,22);Q(46,6,42,-4);Q(34,-6,30,6);Q(24,-12,16,0);Q(8,-14,0,2);Q(-8,-12,-16,0);Q(-24,-10,-30,6);Q(-36,-6,-42,-4);Q(-46,6,-52,22)}
  c.save();face();c.clip();c.translate(0,5);bang();F(ss,0);c.restore()
  bang();F(hr)
  // red beanie with a pompom
  B();M(-52,-22);Q(-54,-76,0,-78);Q(54,-76,52,-22);c.closePath();F('#e2483d')
  for(let k=-3;k<=3;k++){B();M(k*13,-26);Q(k*12,-50,k*9,-72);W(2.5,'#b8302a')}
  B();c.roundRect(-55,-34,110,16,8);F('#f2f2f2',3)
  E(0,-80,11);F('#fff',3)
  // blissful closed eyes, squished cheek, blush
  for(const s of[-1,1]){const x=s*19
    B();M(x-9,18);Q(x,10,x+9,18);W(3.5)
    E(s*30,26,8,4.5);c.fillStyle='rgba(255,100,120,.45)';c.fill()
    for(let k=0;k<3;k++){B();M(s*30-5+k*4,23);L(s*30-7+k*4,29);W(1.6,'#e0607a')}}
  B();M(-6,30);Q(-3,34,0,30);Q(3,34,6,30);W(2.5)
  c.restore()
  // chunky scarf
  B();M(48,148);Q(86,164,124,146);L(126,160);Q(86,178,46,162);c.closePath();F('#f2b134')
  B();M(60,158);L(58,190);L(76,192);L(76,166);c.closePath();F('#f2b134',3)
  for(const x of[62,70]){B();M(x,188);L(x,196);W(2.5,'#c88a1c')}
  B();M(48,148);Q(86,164,124,146);L(126,160);Q(86,178,46,162);c.closePath();W(3.5)
  // arm wrapped round the front of the rack, mitten on top; the other mitten peeks round the far side
  const sq=nz*2
  E(227,112+sq*.5,9,11);F('#e2483d',3);E(222,104+sq*.5,4,5);F('#e2483d',2.5)
  B();M(110,160);Q(140,150,166+sq,128);W(19);W(12,jk)
  E(172+sq,124,11,12);F('#e2483d',3);E(164+sq,130,5,4);F('#e2483d',2.5)
  // hearts drifting up
  for(let k=0;k<3;k++){const p=(t+k/3)%1,x=152+k*9+S(p*6+k)*7,y=104-p*66,r=6+p*5;c.globalAlpha=Math.min(1,(1-p)*2.5,p*6);heart(x,y,r);F('#ff5d8a',2.5);c.globalAlpha=1}
}
