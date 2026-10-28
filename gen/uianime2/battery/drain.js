// lime bob girl with an ahoge slumps lower and dozes off with a snot bubble as the battery above her drains green to yellow to red, then a plug zaps in, the battery refills and she pops back up wide awake
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=18,delay=95
const SKIN='#ffe3d1',HAIR='#a9e34b',HD='#74b816',HL='#f4fce3',EYE='#3bc9db',ED='#0c8599',TEE='#a5d8ff',TD='#4dabf7',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',BUB='rgba(165,216,255,.75)',ZP='#ffd43b',PL='#ced4da',LV=['#ff6b6b','#ffd43b','#69db7c']
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const eye=(c,x,y,d,lid)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.restore();const ly=y-17+34*lid
  if(lid)c.save(),c.beginPath(),c.rect(x-20,y-24,40,ly-y+24),c.clip(),c.fillStyle=SKIN,c.beginPath(),c.ellipse(x,y,16,19,0,0,T),c.fill(),c.restore()
  c.lineWidth=6;c.beginPath();if(lid)c.moveTo(x-16,ly),c.quadraticCurveTo(x,ly-5,x+16,ly),c.moveTo(x+d*15,ly),c.lineTo(x+d*20,ly+3)
  else c.moveTo(x-16,y-6),c.quadraticCurveTo(x,y-20,x+16,y-6),c.moveTo(x+d*15,y-7),c.lineTo(x+d*21,y-12);c.stroke()
}
const bolt=(c,x,y,s)=>{c.beginPath();c.moveTo(x+3*s,y-12*s);c.lineTo(x-7*s,y+2*s);c.lineTo(x,y+2*s);c.lineTo(x-3*s,y+12*s);c.lineTo(x+7*s,y-2*s);c.lineTo(x,y-2*s);c.closePath();c.fill();c.stroke()}
export default(c,t,i)=>{
  const dr=ez(t,0,.6),ch=ez(t,.7,.86),L=t<.7?1-.88*dr:.12+.88*ch,z=t<.7?dr:0,pk=t>=.7&&t<.82
  const px=t<.62?290:t<.7?290-84*ez(t,.62,.7):t<.9?206:206+84*ez(t,.9,1)
  const sl=t<.7?24*z:-12*sin(PI*min(1,(t-.7)/.14)),tl=.12*z
  c.fillStyle='#fff';c.lineWidth=7;c.beginPath();c.roundRect(58,16,124,58,14);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.roundRect(182,32,12,26,5);c.fill();c.stroke()
  const col=t>=.7?LV[2]:LV[L>.6?2:L>.3?1:0],w=(124-20)*L
  if(!(L<.2&&t<.7&&(i>>1)%2))c.fillStyle=col,c.lineWidth=4,c.beginPath(),c.roundRect(68,26,w,38,7),c.fill(),c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(74,34);c.lineTo(90,34);c.stroke();c.strokeStyle='#111'
  if(t>=.7&&t<.9){c.fillStyle='#fff';c.lineWidth=4;bolt(c,120,45,1.5)}
  if(px<280){ds(c,14,7,PL,()=>{c.moveTo(px+28,45);c.quadraticCurveTo(px+50,45,px+56,80);c.lineTo(px+60,120)})
    c.fillStyle='#868e96';for(const y of[38,52])c.lineWidth=4,c.beginPath(),c.rect(px-12,y-3,14,6),c.fill(),c.stroke()
    c.fillStyle=PL;c.lineWidth=6;c.beginPath();c.roundRect(px,28,32,34,8);c.fill();c.stroke()}
  if(t>=.68&&t<.84){c.fillStyle=ZP;c.lineWidth=3.5;for(const[x,y,s]of[[204,12,1],[220,80,.9],[172,92,.8]])bolt(c,x+(i%2)*3,y,s)}
  c.save();c.translate(128,204+sl);c.rotate(tl);c.scale(.7,.7);c.translate(-128,-186)
  const ah=t<.7?z*1.6:0
  c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,100,206,160);c.quadraticCurveTo(212,186,222,196);c.quadraticCurveTo(196,206,180,196);c.lineTo(76,196);c.quadraticCurveTo(60,206,34,196);c.quadraticCurveTo(44,186,50,160);c.bezierCurveTo(42,100,56,34,128,34);c.fill();c.stroke()
  c.fillStyle=TEE;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.lineTo(128+d*30,188),c.lineTo(128+d*34,212),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=TD;c.lineWidth=5;for(const y of[226,252])c.beginPath(),c.arc(128,y,5,0,T),c.fill(),c.stroke()
  c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,192);c.quadraticCurveTo(128,204,142,192);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,190);c.moveTo(142,168);c.lineTo(142,190);c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(z>.9){c.lineWidth=7;for(const x of[103,153])c.beginPath(),c.arc(x,142,13,.15*PI,.85*PI),c.stroke()}
  else{const lid=z<.25?0:z<.55?.4:.7;eye(c,103,140,-1,lid);eye(c,153,140,1,lid)}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
  c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
  c.lineWidth=6;c.fillStyle=MO
  if(pk){c.beginPath();c.moveTo(112,164);c.quadraticCurveTo(128,168,144,164);c.quadraticCurveTo(142,188,128,188);c.quadraticCurveTo(114,188,112,164);c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(128,190,9,7,0,0,T);c.fill();c.restore()}
  else if(z>.9){c.beginPath();c.ellipse(128,172,6,5,0,0,T);c.fill();c.stroke()}
  else if(z>.4){c.beginPath();c.moveTo(118,170);c.lineTo(138,170);c.stroke()}
  else{c.beginPath();c.moveTo(116,166);c.quadraticCurveTo(128,176,140,166);c.stroke()}
  c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(62,176)
  c.bezierCurveTo(44,74,88,36,128,36);c.bezierCurveTo(168,36,212,74,194,176);c.quadraticCurveTo(186,182,180,174)
  c.quadraticCurveTo(184,128,178,104);c.quadraticCurveTo(170,106,164,112);c.quadraticCurveTo(160,98,152,92);c.quadraticCurveTo(146,104,138,108)
  c.quadraticCurveTo(132,96,126,90);c.quadraticCurveTo(120,104,112,108);c.quadraticCurveTo(104,96,96,94);c.quadraticCurveTo(92,104,86,112)
  c.quadraticCurveTo(80,104,78,104);c.quadraticCurveTo(72,128,76,174);c.quadraticCurveTo(70,182,62,176);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
  c.strokeStyle='#111';c.save();c.translate(130,40);c.rotate(ah);c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(-8,2);c.bezierCurveTo(-14,-30,20,-50,30,-40);c.bezierCurveTo(10,-36,4,-16,10,2);c.fill();c.stroke();c.restore()
  c.fillStyle=LV[0];c.lineWidth=6;c.beginPath();c.moveTo(168,70);c.lineTo(190,62);c.lineTo(186,84);c.closePath();c.fill();c.stroke()
  if(z>.9){const r=6+8*sin(PI*min(1,(t-.5)/.2));c.fillStyle=BUB;c.lineWidth=4;c.beginPath();c.arc(142+r*.6,168,r,0,T);c.fill();c.stroke();c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.arc(142+r*.6,168,r*.6,PI*1.1,PI*1.4);c.stroke();c.strokeStyle='#111'}
  c.restore()
  if(pk)for(const d of[-1,1])ds(c,8,4,ZP,()=>{for(const k of[-1,0,1]){const a=-PI/2+d*.9+k*.32;c.moveTo(128+cos(a)*74,140+sin(a)*74);c.lineTo(128+cos(a)*92,140+sin(a)*92)}})
}
