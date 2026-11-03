// Saudi Arabia flag (green field, white Shahada inscription above a white sword pointing to the hoist) waving, with a gentle anime girl standing in front of its lower fly corner, well clear of the inscription and sword: white headscarf with gold trim, rose-pink dress, holding a pink Taif rose, blinking as her scarf flutters
export const frames=16,delay=80,rim=3
const P=Math.PI*2,S=Math.sin,C=Math.cos
const pth=(c,a)=>{c.beginPath();c.moveTo(a[0],a[1]);for(let k=2;k<a.length;k+=4)c.quadraticCurveTo(a[k],a[k+1],a[k+2],a[k+3])}
const fs=(c,f,s,w)=>{c.fillStyle=f;c.fill();if(s){c.strokeStyle=s;c.lineWidth=w;c.stroke()}}
const st=(c,s,w)=>{c.strokeStyle=s;c.lineWidth=w;c.stroke()}
const el=(c,x,y,rx,ry,r=0)=>{c.beginPath();c.ellipse(x,y,rx,ry,r,0,P)}
const eye=(c,bl)=>{
  if(bl){pth(c,[-.4,.3,-.04,.52,.3,.32]);st(c,'#111',.08);pth(c,[-.4,.3,-.5,.26,-.55,.18]);st(c,'#111',.05);return}
  c.save()
  pth(c,[-.36,.28,-.22,-.02,.3,.1,.38,.48,.04,.67,-.32,.62,-.36,.28]);c.fillStyle='#fff';c.fill();c.clip()
  el(c,0,.36,.25,.33);fs(c,'#7a4a24')
  el(c,0,.05,.3,.15);fs(c,'#3a200e')
  el(c,0,.55,.17,.12);fs(c,'#c8904a')
  el(c,0,.35,.09,.13);fs(c,'#1e0e06')
  c.restore()
  c.beginPath();c.moveTo(-.42,.32);c.quadraticCurveTo(-.24,-.08,.32,.08);c.quadraticCurveTo(-.2,.04,-.36,.36);c.fillStyle='#111';c.fill()
  pth(c,[-.4,.28,-.5,.26,-.56,.32]);st(c,'#111',.06)
  pth(c,[-.34,.16,-.4,.08,-.46,.06]);st(c,'#111',.035)
  pth(c,[-.38,.22,-.48,.18,-.52,.2]);st(c,'#111',.03)
  pth(c,[-.14,.67,.06,.71,.26,.56]);st(c,'#7a3a30',.035)
  el(c,-.09,.24,.11,.13,-.3);fs(c,'#fff');el(c,.1,.5,.05,.05);c.fill();el(c,.12,.14,.03,.03);c.fill()
}
const rose=(c,x,y,r)=>{
  c.save();c.translate(x,y)
  for(let k=0;k<5;k++){const q=k*P/5-.3;el(c,C(q)*r*.5,S(q)*r*.5,r*.55,r*.45,q);fs(c,'#f07a9a','#7a1a38',r*.08)}
  for(let k=0;k<3;k++){const q=k*P/3+.5;el(c,C(q)*r*.22,S(q)*r*.22,r*.36,r*.3,q);fs(c,'#e2557e','#7a1a38',r*.07)}
  pth(c,[-r*.15,-r*.05,0,-r*.25,r*.15,-r*.02]);st(c,'#7a1a38',r*.08)
  c.restore()
}
export default(c,t,i)=>{
  const L=236,H=L/1.5,X=6,Y=10,z=L/248
  c.save();c.beginPath();c.rect(X,Y,L,H);c.clip()
  c.fillStyle='#005430';c.fillRect(X,Y,L,H)
  // Shahada
  c.fillStyle='#fff';c.font='bold 40px "DejaVu Sans"';c.textAlign='center';c.textBaseline='middle'
  const tx='لا إله إلا الله محمد رسول الله',k=L*.58/c.measureText(tx).width
  c.save();c.translate(X+L/2,Y+H*.36);c.scale(k,k*1.9);c.strokeStyle='#fff';c.lineWidth=2;c.strokeText(tx,0,0);c.fillText(tx,0,0);c.restore()
  // sword, tip to the hoist
  c.save();c.translate(X+L/2,Y+H*.64);c.scale(z,z)
  c.beginPath();c.moveTo(-54,-4);c.quadraticCurveTo(-10,-4.5,28,-3.5);c.lineTo(28,3.5);c.quadraticCurveTo(-20,4,-46,2);c.quadraticCurveTo(-54,0,-60,-7);c.closePath();c.fill()
  c.beginPath();c.roundRect(27,-10,5,20,2.5);c.fill()
  c.beginPath();c.roundRect(31,-2.5,18,5,2);c.fill()
  c.beginPath();c.moveTo(47,-3);c.quadraticCurveTo(56,-2.5,55,6);c.lineTo(50,6);c.quadraticCurveTo(51,1.5,47,2);c.fill()
  c.restore()
  c.strokeStyle='#111';c.lineWidth=5;c.strokeRect(X,Y,L,H)
  c.restore()
  wave(c,X,L,t)
  // girl standing in front of the lower fly corner
  const u=28,sw=S(P*t),s2=S(P*t+1.3),b=i==11||i==12
  c.save();c.translate(X+L*.855,Y+H+13);c.scale(u,u)
  pth(c,[-1.2,-.6,-1.7,.6,-1.62,1.6,-1.8,2.6,-1.6,3.2,0,3.3,1.5,3.2,1.6+sw*.04,2.6,1.52+s2*.05,1.6,1.62,.6,1.2,-.6]);fs(c,'#e6e3d6','#111',.06)
  pth(c,[-.36,1.2,-.42,1.6,-1.25,1.72,-1.72,1.95,-1.8,3.4,0,3.6,1.8,3.4,1.72,1.95,1.25,1.72,.42,1.6,.36,1.2]);fs(c,'#e9a3b4','#111',.06)
  c.save();c.clip();el(c,2.3,3.2,1.1,1.9,.2);c.fillStyle='#d68a9e';c.fill();el(c,0,1.5,.75,.32);c.fill();c.restore()
  for(const s of[-1,1]){pth(c,[s*1.1,2,s*1.2,2.6,s*1.15,3.3]);st(c,'#c97d92',.06)}
  // scarf around the head, wrapped under the chin and over the shoulders
  pth(c,[-1.12,.2,-1.32,-.95,-.1,-1.68,1.05,-1.6,1.3,-.7,1.42,.3,1.2,1.1,1.05,1.6,.45,1.85,0,1.8,-.45,1.85,-1.05,1.6,-1.2,1.1,-1.3,.6,-1.12,.2])
  fs(c,'#fbfaf4','#111',.06)
  for(const s of[-1,1]){pth(c,[s*1.0,1.25,s*.65,1.62,s*.15,1.66]);st(c,'#d8d5c6',.06);pth(c,[s*1.2,-.2,s*1.28,.5,s*1.12,1.1]);st(c,'#e2dfd2',.05)}
  pth(c,[1.12,1.25,1.42+s2*.05,1.8,1.5+sw*.08,2.5,1.25,2.45,1.02,1.9]);fs(c,'#f4f2e8','#111',.05)
  // face
  pth(c,[-.92,-.4,-.99,.3,-.83,.62,-.48,1.05,0,1.11,.48,1.05,.83,.62,.99,.3,.92,-.4,0,-1.2,-.92,-.4]);fs(c,'#ffe6d4','#111',.05)
  c.beginPath();c.moveTo(-1.04,.55);c.quadraticCurveTo(-1.1,-.72,0,-.78);c.quadraticCurveTo(1.1,-.72,1.04,.55);c.lineTo(1.25,.55);c.quadraticCurveTo(1.3,-1.25,0,-1.3);c.quadraticCurveTo(-1.3,-1.25,-1.25,.55);c.closePath();fs(c,'#fbfaf4')
  pth(c,[-1.04,.55,-1.1,-.72,0,-.78,1.1,-.72,1.04,.55]);st(c,'#c9a227',.09);st(c,'#7a5a10',.025)
  pth(c,[-.6,-1.12,0,-1.24,.6,-1.12]);st(c,'#dedbcc',.05)
  for(const s of[-1,1]){pth(c,[s*.62,-.2,s*.44,-.3,s*.22,-.24]);st(c,'#3a2216',.045)}
  c.save();c.translate(-.42,0);eye(c,b);c.restore()
  c.save();c.translate(.42,0);c.scale(-1,1);eye(c,b);c.restore()
  for(const s of[-1,1]){el(c,s*.58,.7,.16,.075);c.fillStyle='rgba(255,110,130,.42)';c.fill()}
  pth(c,[.03,.64,.05,.68,0,.7]);st(c,'#c88070',.035)
  pth(c,[-.13,.8,0,.82,.13,.8,.1,.94,0,.95,-.1,.94,-.13,.8]);fs(c,'#9b2d3a','#111',.035)
  pth(c,[-.06,.91,0,.87,.06,.91,0,.95,-.06,.91]);c.fillStyle='#ef7b88';c.fill()
  // hands holding a Taif rose
  pth(c,[.02,1.85,-.02,2.2,.05,2.6]);st(c,'#111',.13);st(c,'#3f8a3a',.07)
  for(const s of[-1,1]){c.save();c.translate(s*.2,1.95);c.rotate(s*.5);el(c,0,0,.13,.07);fs(c,'#5aa84a','#111',.04);c.restore()}
  rose(c,.02,1.68,.36)
  for(const s of[-1,1]){el(c,s*.17,2.3,.21,.17,s*.3);fs(c,'#ffe6d4','#111',.05);pth(c,[s*.05,2.24,s*.12,2.3,s*.2,2.24]);st(c,'#d49a84',.03)}
  c.restore()
}
// cloth wave: shift each column, shade in bands
const wave=(c,X,L,t)=>{
  const d=c.getImageData(0,0,256,256).data,o=c.createImageData(256,256),q=o.data
  for(let x=0;x<256;x++){
    const ph=P*((x-X)/L-t),dy=3.5*S(ph),sh=1+.07*Math.round(C(ph)*8)/8
    for(let y=0;y<256;y++){
      const sy=y-dy,y0=Math.floor(sy),f=sy-y0
      if(y0<-1||y0>255)continue
      const a=y0>=0?(y0*256+x)*4:-1,b=y0<255?((y0+1)*256+x)*4:-1
      const A0=a<0?0:d[a+3]*(1-f),A1=b<0?0:d[b+3]*f,A=A0+A1,j=(y*256+x)*4
      if(!A)continue
      for(let ch=0;ch<3;ch++)q[j+ch]=Math.min(255,((a<0?0:d[a+ch]*A0)+(b<0?0:d[b+ch]*A1))/A*sh)
      q[j+3]=A
    }
  }
  c.putImageData(o,0,0)
}
