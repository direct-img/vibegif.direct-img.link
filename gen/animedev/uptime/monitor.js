// pink-ponytailed girl in a safari vest watching an uptime graph through binoculars, flinching back when it spikes
export const frames=20,delay=75,rim=3
export default(c,t)=>{
  const P=Math.PI,S=Math.sin,C=Math.cos,T=2*P*t,K='#1e1a22',sk='#b9805a',ss='#9a6442',hr='#ff5fa8',hs='#c8337a',hl='#ffb0d6',vs='#a89a5e',vd='#7d7140'
  const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),L=(x,y)=>c.lineTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
  const E=(x,y,a,b=a,r=0)=>{B();c.ellipse(x,y,a,b,r,0,2*P)}
  const F=(f,w=3.5)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.stroke()}}
  const W=(w,s=K)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke();c.strokeStyle=K}
  const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
  c.strokeStyle=K
  // graph scrolls one 224px pattern per loop; the spike is on screen from t=.3 to t=.8
  const sx=128,sw=110,sy=82,sh=72,us=sw+.3*224,val=u=>{u=((u%224)+224)%224;return 14+5*S(u/224*2*P*5)+3*S(u/224*2*P*13+1)+2*S(u/224*2*P*23)+52*Math.exp(-(((u-us)/5)**2))}
  const al=t>.3&&t<.8
  // monitor on a stand
  B();M(178,180);L(176,212);W(12);W(6,'#9aa0b2');B();c.roundRect(150,208,56,10,5);F('#9aa0b2',3)
  B();c.roundRect(118,58,128,124,10);F('#3b4152')
  B();c.roundRect(sx-4,sy-12,sw+8,sh+20,4);F('#11161f',2.5)
  c.save();B();c.rect(sx,sy-8,sw,sh+12);c.clip()
  for(let k=1;k<4;k++){B();M(sx,sy+k*sh/4);L(sx+sw,sy+k*sh/4);W(1,'#2a3446')}
  const pt=x=>[sx+x,sy+sh-val(x+t*224)]
  B();M(sx,sy+sh+4);for(let x=0;x<=sw;x+=2)L(...pt(x));L(sx+sw,sy+sh+4);c.closePath();c.fillStyle='rgba(80,230,140,.18)';c.fill()
  B();for(let x=0;x<=sw;x+=2)L(...pt(x));W(2.5,'#5dff8a')
  B();for(let x=0;x<=sw;x+=2){const[a,b]=pt(x);val(x+t*224)>30?L(a,b):M(a,b)}W(3,'#ff4b4b')
  c.restore()
  c.font='bold 13px DejaVu Sans Mono';c.fillStyle=al?'#ff6b6b':'#5dff8a';c.textAlign='right';c.fillText(al?'98.7%':'99.9%',sx+sw-3,sy+4)
  E(234,172,4.5);F(al&&Math.floor(t*20)%2?'#ff4b4b':'#5a2a2a',2)
  // flinch: snap back when the spike lands, ease back to watching
  const f=t<.3?0:t<.35?sm((t-.3)/.05):t<.58?1:1-sm((t-.58)/.22),sk2=t>.3&&t<.5?S(T*20)*1.5*(1-(t-.3)*5):0
  const gx=88-10*f+sk2,gy=106-8*f
  // legs and boots
  for(const x of[70,96]){B();c.roundRect(x-8-f*4,208,16,24,4);F('#5a4a3a');B();c.ellipse(x+3-f*4,234,12,7,0,P,0);L(x-9-f*4,236);F('#3a2a22')}
  // body: teal tee and safari vest, leaning back on the flinch
  c.save();c.translate(84,220);c.rotate(-.12*f);c.translate(-70,-220)
  const tor=()=>{B();M(46,150);Q(70,140,96,150);Q(106,156,106,184);L(108,212);L(36,212);L(38,184);Q(38,156,46,150)}
  tor();F('#2bb3a8');B();M(40,156);L(60,150);L(64,212);L(36,212);c.closePath();F(vs,3);B();M(102,156);L(82,150);L(80,212);L(108,212);c.closePath();F(vs,3)
  for(const[x,y]of[[50,176],[94,176]]){B();c.roundRect(x-9,y-7,18,15,2);F(vd,2.5)}
  tor();W(3.5)
  c.restore()
  // far arm reaching up behind
  const bx=gx+12-f*8,by=gy+11+f*48
  B();M(gx-20,gy+52);Q(gx-14,gy+30-f*10,bx+4,by+6);W(13);W(7,sk);E(gx-20,gy+52,9,8);F('#2bb3a8',3)
  // head, three-quarter view looking right
  c.save();c.translate(gx,gy);c.rotate(-.18*f)
  // high ponytail swinging
  const sw2=S(T*2)*.08+f*.25
  c.save();c.translate(-20,-48);c.rotate(-.2+sw2);c.scale(.88,.88)
  B();M(-6,-4);Q(-34,-14,-46,18);Q(-50,44,-34,66);Q(-36,40,-22,22);Q(-14,10,6,6);c.closePath();F(hr)
  B();M(-30,6);Q(-40,24,-36,46);W(2.5,hs)
  c.restore();E(-18,-46,7,6);F('#ffd34d',3)
  B();M(-46,20);Z(-58,-58,50,-66,50,4);L(40,26);L(-30,34);c.closePath();F(hs)
  const face=()=>{B();M(-42,-6);Z(-42,26,-16,42,8,42);Z(32,42,48,24,48,-4);c.arc(3,-6,45,0,P,true)}
  face();F(sk)
  E(-30,12,8,10);F(sk,3);B();c.arc(-30,12,4,-1,1.2);W(2,ss)
  const bang=()=>{B();M(-46,14);Z(-56,-60,54,-70,52,8);Q(48,-4,44,-8);Q(40,0,38,6);Q(34,-10,26,-4);Q(20,-14,12,0);Q(6,-12,-2,-2);Q(-10,-8,-16,2);Q(-18,-14,-30,-14);Q(-40,0,-46,14)}
  c.save();face();c.clip();c.translate(3,5);bang();F(ss,0);c.restore()
  bang();F(hr)
  B();c.arc(2,-8,42,-2.5,-2.1);M(-2,-49);c.arc(2,-8,42,-1.75,-1.4);W(3.5,hl)
  if(f>.5){
    // wide shocked eyes
    for(const[x,r]of[[8,1],[34,.72]]){E(x,14,10*r,12);F('#fff',2.5);E(x+1,15,2.8*r,3.2);F(K,0)}
    B();M(14,30);Q(20,26,26,30);Q(26,40,20,40);Q(14,40,14,30);F('#5a1a24',2.5)
    B();M(52,-6);Q(58,4,52,8);Q(46,4,52,-6);F('#8fd3ff',2.5)
  }else{B();M(17,35);Q(22,32,27,35);W(2.5)}
  E(30,26,6,3);c.fillStyle='rgba(255,90,120,.3)';c.fill()
  c.restore()
  // binoculars at the eyes, dropped to the chest on the flinch
  c.save();c.translate(bx,by);c.rotate(-.18*f)
  for(const o of[-9,7]){B();c.roundRect(-4,o-9,34,18,5);F('#4a4f5e',3);B();c.roundRect(26,o-12,18,24,5);F('#2f3442',3);E(44,o,3.5,10);F('#7fd0ff',2.5)}
  B();c.roundRect(8,-6,14,12,2);F('#6b7080',2.5)
  c.restore()
  B();M(gx+20,gy+52);Q(gx+34,gy+56,bx+30,by+2);W(13);W(7,sk);E(bx+30,by-2,7);F(sk,3);E(gx+18,gy+52,9,8);F('#2bb3a8',3)
  // ! pop
  if(t>.3&&t<.6){const k=sm((t-.3)/.04);c.save();c.translate(gx+40,gy-62);c.scale(k,k);c.rotate(.25);B();c.roundRect(-5,-20,10,24,5);F('#ffd34d',3);E(0,12,5);F('#ffd34d',3);c.restore()}
}
