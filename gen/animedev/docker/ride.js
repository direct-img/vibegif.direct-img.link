// cowgirl with chestnut braids riding a blue whale stacked with shipping containers through the waves, waving yeehaw
export const frames=12,delay=100,rim=3
export default(c,t)=>{
  const P=Math.PI,S=Math.sin,C=Math.cos,T=2*P*t,K='#1f1a24',sk='#f4c9a4',ss='#dda27c',hr='#8a4b2a',hs='#5e301a',hl='#c98a5e',wb='#2496ed',wd='#1673c2'
  const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),L=(x,y)=>c.lineTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
  const E=(x,y,a,b=a,r=0)=>{B();c.ellipse(x,y,a,b,r,0,2*P)}
  const F=(f,w=3.5)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.stroke()}}
  const W=(w,s=K)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke();c.strokeStyle=K}
  c.strokeStyle=K;c.translate(128,134);c.scale(.95,.95);c.translate(-128,-128)
  // water behind: back wave band
  const wave=(y,a,ph,f,w)=>{B();M(10,y+20);for(let x=10;x<=246;x+=4)L(x,y+a*S(x/64*2*P+ph));L(246,y+10);Q(244,y+26,206,y+26);L(50,y+26);Q(12,y+26,10,y+10);c.closePath();F(f,w)}
  wave(196,4,T+1,'#8fd0ff',3)
  // whale bobbing, tilting a little
  const wy=S(T)*5,wr=S(T-.5)*.03
  c.save();c.translate(128,170+wy);c.rotate(wr);c.translate(-128,-170)
  // tail flukes flapping
  c.save();c.translate(218,128);c.rotate(S(T+1)*.22)
  B();M(0,6);Q(-6,-18,-18,-28);Q(-2,-26,4,-14);Q(12,-28,30,-26);Q(18,-12,0,6);F(wb)
  c.restore()
  const body=()=>{B();M(14,170);Z(12,140,38,126,80,126);L(194,128);Q(212,130,220,124);Q(226,150,206,170);Q(170,206,100,206);Q(34,206,14,170)}
  body();F(wb);c.save();body();c.clip();E(110,214,104,34);F('#cfeaff',3);c.restore();body();W(3.5)
  B();M(16,178);Q(30,186,44,180);W(3)
  E(40,156,6,7);F(K,0);E(38,153,2.2);F('#fff',0)
  E(52,170,7,4);c.fillStyle='rgba(255,120,160,.45)';c.fill()
  // containers stacked on its back
  const box=(x,y,w,f,d)=>{B();c.roundRect(x,y,w,24,2);F(f,3);for(let k=x+6;k<x+w-3;k+=6){B();M(k,y+5);L(k,y+20);W(2,d)}B();M(x,y+4);L(x+w,y+4);W(2.5,d)}
  box(100,104,34,'#e2483d','#a52a22');box(136,104,34,'#2bb3a8','#1a7a72');box(172,104,32,'#f29a2e','#b0631a')
  box(114,80,34,'#f5c542','#b8902a');box(150,80,36,'#3b5bdb','#25399a')
  // rope tied round the stack and reins to the whale's mouth
  c.restore()
  // girl riding up front, bouncing a beat behind the whale
  const gy=wy*.8+Math.abs(S(T*2))*-3,gx=66
  c.save();c.translate(66,124+gy);c.scale(.9,.9);c.translate(-66,-124)
  // dangling leg and boot
  B();M(70,124);Q(80,140,76,152);W(15);W(9,'#4a78c2');B();M(66,150);L(86,150);L(88,160);Q(74,164,64,158);c.closePath();F('#8a4a2a',3)
  // torso: white shirt, denim vest, bandana
  const tor=()=>{B();M(46,98);Q(66,90,86,98);Q(94,104,94,124);L(40,124);Q(38,104,46,98)}
  tor();F('#fff');B();M(44,100);L(56,96);L(60,124);L(40,124);Q(38,106,44,100);F('#4a78c2',3);B();M(88,100);L(76,96);L(72,124);L(94,124);Q(94,106,88,100);F('#4a78c2',3)
  tor();W(3.5);B();M(52,96);L(66,112);L(80,96);c.closePath();F('#e2483d',2.5)
  // rein hand
  B();M(48,104);Q(34,116,32,124);W(14);W(8,'#fff');E(30,126,7);F(sk,3)
  B();M(30,128);Q(18,150,20,170);W(2.5,'#a8743c')
  // head
  c.save();c.translate(gx,62)
  // braids over the shoulders, swinging
  for(const s of[-1,1]){const sw=S(T*2+s)*3;for(let k=0;k<4;k++){E(s*30+sw*k/3,22+k*12,7-k*.5,7);F(hr,2.5)}
    B();c.roundRect(s*30+sw-5,64,10,5,2);F('#e2483d',2);B();M(s*30+sw,69);L(s*30+sw-3,78);L(s*30+sw+3,78);c.closePath();F(hr,2)}
  const face=()=>{B();M(-40,-6);Z(-40,22,-20,36,0,37);Z(20,36,40,22,40,-6);c.arc(0,-6,40,0,P,true)}
  B();M(-44,10);Z(-52,-50,52,-50,44,10);c.closePath();F(hs)
  face();F(sk)
  const bang=()=>{B();M(-44,4);Z(-46,-44,46,-44,44,4);Q(36,-8,28,2);Q(20,-12,12,-2);Q(4,-14,-6,0);Q(-14,-12,-22,2);Q(-30,-10,-36,0);Q(-40,-4,-44,4)}
  c.save();face();c.clip();c.translate(0,5);bang();F(ss,0);c.restore()
  bang();F(hr)
  // cowgirl hat
  B();M(-56,-24);Q(-30,-38,0,-36);Q(30,-38,56,-24);Q(62,-32,58,-38);Q(30,-28,0,-28);Q(-30,-28,-58,-38);Q(-62,-32,-56,-24);F('#c68a4a')
  B();M(-30,-30);Q(-32,-62,-12,-62);Q(0,-54,12,-62);Q(32,-62,30,-30);Q(0,-36,-30,-30);F('#d9a05c')
  B();M(-30,-36);Q(0,-42,30,-36);W(6);W(3,'#e2483d')
  // sparkly happy eyes, open laughing mouth
  for(const s of[-1,1]){const x=s*17
    E(x,12,9,11);F('#fff',0);E(x,13,7,9.5);F('#4ab0f0',0);B();c.ellipse(x,13,7,9.5,0,P,2*P);F('#1f6fb8',0)
    E(x,13,3,4.5);F('#0c2d50',0);E(x-2.5,9,2.6,3);F('#fff',0);E(x+2.5,17,1.3);F('#fff',0)
    B();M(x-10*s,6);Q(x,-2,x+10*s,5);L(x+13*s,2);W(3.5)
    E(s*28,23,6,3.5);c.fillStyle='rgba(255,100,100,.35)';c.fill()}
  B();M(-9,25);Q(0,23,9,25);Q(8,36,0,36);Q(-8,36,-9,25);F('#7a2030',2.5);E(0,32,4,2.5);F('#ff7a8a',0)
  c.restore()
  // waving arm
  const wa=S(T*2)*.35
  c.save();c.translate(88,102);c.rotate(wa)
  B();M(0,0);Q(26,-6,34,-30);W(14);W(8,'#fff');E(35,-35,7.5);F(sk,3)
  c.restore()
  c.restore()
  // front waves and splashes
  wave(214,5,T,'#4cb4ff',3.5)
  B();M(14,224);for(let x=14;x<=242;x+=4)L(x,224+3*S(x/32*2*P+T+2));W(2.5,'#d6f0ff')
  for(let k=0;k<5;k++){const p=(t*2+k/5)%1,x=k<3?22-p*16+k*8:212+p*14+(k-3)*10,y=200-S(p*P)*26;c.globalAlpha=Math.min(1,p*6,(1-p)*5);E(x,y,3.5-p*1.5);F('#bfe6ff',2);c.globalAlpha=1}
}
