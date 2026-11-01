// teal-haired mechanic girl in goggles cranking a gear that spins a giant clock backwards, rewind arrows pulsing
export const frames=12,delay=80,rim=3
export default(c,t)=>{
  const P=Math.PI,S=Math.sin,C=Math.cos,T=2*P*t,K='#231a1c',sk='#c68a5e',ss='#a46a44',hr='#2ec4b6',hs='#1b8f86',hl='#9ff3ea'
  const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),L=(x,y)=>c.lineTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
  const E=(x,y,a,b=a,r=0)=>{B();c.ellipse(x,y,a,b,r,0,2*P)}
  const F=(f,w=3.5)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.stroke()}}
  const W=(w,s=K)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke();c.strokeStyle=K}
  c.strokeStyle=K;c.translate(136,130);c.scale(.95,.95);c.translate(-128,-128)
  // gear: n teeth on pitch radius r, turned by a
  const gear=(x,y,r,n,a,f)=>{B();for(let k=0;k<n;k++){const q=a+k*2*P/n,w=P/n
    for(const[d,h]of[[-.55,-4],[-.32,5],[.32,5],[.55,-4]])L(x+C(q+d*w)*(r+h),y+S(q+d*w)*(r+h))}c.closePath();F(f)}
  // big clock gear turns 1/3 back, the small crank gear one full turn forward, so they mesh
  const gx=168,gy=90,al=130*P/180,sx=gx+C(al)*80,sy=gy+S(al)*80,ab=al-T/3,as=al+P+P/7+T
  gear(gx,gy,60,21,ab,'#e0b04a')
  E(gx,gy,49);F('#fffaf0')
  E(gx,gy,49);c.save();c.clip();E(gx+8,gy+8,49);F('#efe6d2',0);c.restore();E(gx,gy,49);W(3.5)
  for(let k=0;k<12;k++){const q=k*P/6,a=k%3?40:36;B();M(gx+C(q)*a,gy+S(q)*a);L(gx+C(q)*44,gy+S(q)*44);W(k%3?2.5:4)}
  // hands spinning backwards, with a blur trail on the minute hand
  const mh=-P/2-2*T,hh=-P/2+1-T
  c.globalAlpha=.55;B();c.arc(gx,gy,28,mh+.15,mh+1.1);W(12,'#7fb2ff');c.globalAlpha=1
  B();M(gx,gy);L(gx+C(hh)*22,gy+S(hh)*22);W(6);B();M(gx,gy);L(gx+C(mh)*36,gy+S(mh)*36);W(4)
  E(gx,gy,5);F('#e4513b',2.5)
  // rewind badge pulsing
  const pz=1+.12*Math.max(0,S(T*2));c.save();c.translate(214,26);c.scale(pz,pz)
  B();c.roundRect(-21,-13,42,26,8);F('#4a7bd6',3)
  c.fillStyle='#fff';for(const o of[-9,4]){B();M(o-6,0);L(o+6,-8);L(o+6,8);c.fill()}
  c.restore()
  // small gear with the crank arm
  gear(sx,sy,20,7,as,'#e0b04a');E(sx,sy,7);F('#b8862e',3)
  const ca=-T*1+P*.75,kx=sx+C(-ca)*28,ky=sy+S(-ca)*28
  // body leans with the crank
  const dx=(kx-sx)*.22,dy=(ky-sy)*.12
  // legs and boots
  for(const x of[46,72]){B();c.roundRect(x-9,204,18,24,4);F('#e8812f');B();c.ellipse(x+2,232,13,8,0,P,0);L(x-11,234);F('#5a3b2a')}
  // overalls
  c.save();c.translate(dx*.5,dy*.5)
  const tor=()=>{B();M(36,150);Q(60,142,84,150);Q(94,156,94,180);L(96,212);L(24,212);L(26,180);Q(26,156,36,150)}
  tor();F('#ffffff');B();M(30,176);L(90,176);L(94,212);L(26,212);c.closePath();F('#e8812f')
  B();c.roundRect(40,166,40,24,4);F('#e8812f',3);for(const x of[38,82]){B();M(x,150);L(x+(x<60?6:-6),170);W(5,'#e8812f');E(x+(x<60?6:-6),170,2.5);F('#ffd34d',1.5)}
  tor();W(3.5);B();M(60,194);L(60,212);W(2.5)
  c.restore()
  // head
  c.save();c.translate(60+dx,92+dy);c.rotate(dx*.008)
  const face=()=>{B();M(-46,-6);Z(-46,24,-24,42,0,43);Z(24,42,46,24,46,-6);c.arc(0,-6,46,0,P,true)}
  const bang=()=>{B();M(-50,28);Z(-58,-40,-30,-62,0,-62);Z(30,-62,58,-40,50,28);Q(44,10,40,-2);Q(30,-8,26,4);Q(18,-14,8,0);Q(-2,-16,-12,2);Q(-22,-12,-30,4);Q(-38,-4,-40,-2);Q(-44,10,-50,28)}
  // bob, back layer
  B();M(-50,30);Z(-64,-6,-60,-68,0,-68);Z(60,-68,64,-6,50,30);Q(56,40,40,42);L(-40,42);Q(-56,40,-50,30);F(hs)
  face();F(sk)
  c.save();face();c.clip();c.translate(0,6);bang();F(ss,0);c.restore()
  bang();F(hr)
  for(const[a,b]of[[-2.6,-2.25],[-2,-1.7],[-1.45,-1.15]]){B();c.arc(0,-8,44,a,b);W(4,hl)}
  // goggles on the forehead
  B();M(-54,-30);Q(0,-50,54,-30);W(9);W(5,'#6b4a35')
  for(const s of[-1,1]){E(s*17,-40,13,11);F('#c9ced8',3);E(s*17,-40,8,6.5);F('#ffb347',2.5);E(s*17-3,-42,2.5,2);F('#fff',0)}
  // determined eyes, brows down, gritted grin
  for(const s of[-1,1]){const x=s*20
    E(x,16,10.5,12);F('#fff',0)
    E(x,17,8,10.5);F('#f0a020',0);B();c.ellipse(x,17,8,10.5,0,P,2*P);F('#b8650e',0)
    E(x,17,3.5,5);F('#4a2208',0);E(x-3,13,2.8,3.2);F('#fff',0);E(x+3,22,1.3);F('#fff',0)
    B();M(x-11*s,11);Q(x,2,x+12*s,8);L(x+15*s,4);W(4)
    B();M(x-4*s,0);L(x+12*s,-6);W(3.5)
    E(s*32,28,6,3.5);c.fillStyle='rgba(255,90,90,.3)';c.fill()}
  B();M(-11,31);Q(0,36,11,31);L(9,38);Q(0,41,-9,38);c.closePath();F('#fff',2.5);B();M(-10,34.5);L(10,34.5);W(1.5)
  // effort sweat
  B();M(48,-8);Q(54,2,48,6);Q(42,2,48,-8);F('#8fd3ff',2.5)
  c.restore()
  // crank arm and handle, hands gripping it
  B();M(sx,sy);L(kx,ky);W(11);W(6,'#5a5f6e')
  c.globalAlpha=.4;B();c.arc(sx,sy,28,-ca,-ca+1.1);W(9,'#ffd34d');c.globalAlpha=1
  E(kx,ky,8);F('#e4513b',3)
  for(const[a,b]of[[42,156],[80,156]]){const x=a+dx*.5,y=b+dy*.5;B();M(x,y);Q((x+kx)/2,Math.max(y,ky)+12,kx+(a<60?-5:5),ky+(a<60?2:-2));W(14);W(8,sk);E(x,y-2,9,8);F('#fff',3)}
  E(kx-5,ky+2,7);F(sk,3);E(kx+5,ky-2,7);F(sk,3)
}
