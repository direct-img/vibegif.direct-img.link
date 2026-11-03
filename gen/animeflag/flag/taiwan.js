// Taiwan flag (red field, blue canton with the twelve-rayed white sun) waving, with a smiling anime girl printed on the red field: long black hair with plum blossom hairpins, blue and white outfit, blinking beside a blossoming plum branch whose petals drift across the flag
export const frames=16,delay=80,rim=3
const P=Math.PI*2,S=Math.sin,C=Math.cos
const pth=(c,a)=>{c.beginPath();c.moveTo(a[0],a[1]);for(let k=2;k<a.length;k+=4)c.quadraticCurveTo(a[k],a[k+1],a[k+2],a[k+3])}
const fs=(c,f,s,w)=>{c.fillStyle=f;c.fill();if(s){c.strokeStyle=s;c.lineWidth=w;c.stroke()}}
const st=(c,s,w)=>{c.strokeStyle=s;c.lineWidth=w;c.stroke()}
const el=(c,x,y,rx,ry,r=0)=>{c.beginPath();c.ellipse(x,y,rx,ry,r,0,P)}
const bloom=(c,x,y,r,a)=>{
  c.save();c.translate(x,y);c.rotate(a)
  for(let k=0;k<5;k++){const q=k*P/5;el(c,C(q)*r*.55,S(q)*r*.55,r*.5,r*.46,q);fs(c,'#fff4f6','#8a2038',r*.07)}
  el(c,0,0,r*.28,r*.28);fs(c,'#e0506e')
  c.fillStyle='#ffd54a';for(let k=0;k<5;k++){const q=k*P/5+.6;el(c,C(q)*r*.3,S(q)*r*.3,r*.08,r*.08);c.fill()}
  c.restore()
}
const eye=(c,bl)=>{
  if(bl){pth(c,[-.4,.3,-.04,.52,.3,.32]);st(c,'#111',.08);pth(c,[-.4,.3,-.5,.26,-.55,.18]);st(c,'#111',.05);return}
  c.save()
  pth(c,[-.36,.28,-.22,-.02,.3,.1,.38,.48,.04,.67,-.32,.62,-.36,.28]);c.fillStyle='#fff';c.fill();c.clip()
  el(c,0,.36,.25,.33);fs(c,'#b0602a')
  el(c,0,.05,.3,.15);fs(c,'#5a2612')
  el(c,0,.55,.17,.12);fs(c,'#f2a24e')
  el(c,0,.35,.09,.13);fs(c,'#2a1006')
  c.restore()
  c.beginPath();c.moveTo(-.42,.32);c.quadraticCurveTo(-.24,-.08,.32,.08);c.quadraticCurveTo(-.2,.04,-.36,.36);c.fillStyle='#111';c.fill()
  pth(c,[-.4,.28,-.5,.26,-.56,.32]);st(c,'#111',.06)
  pth(c,[-.34,.16,-.4,.08,-.46,.06]);st(c,'#111',.035)
  pth(c,[-.14,.67,.06,.71,.26,.56]);st(c,'#7a3a30',.035)
  el(c,-.09,.24,.11,.13,-.3);fs(c,'#fff');el(c,.1,.5,.05,.05);c.fill();el(c,.12,.14,.03,.03);c.fill()
}
const bangs=c=>{
  const bg=[[1.12,.45],[.92,-.3],[.76,.04],[.6,-.34],[.44,-.04],[.3,-.42],[.14,-.2],[.02,-.56],[-.12,-.18],[-.28,-.44],[-.44,-.04],[-.6,-.34],[-.76,.04],[-.92,-.3],[-1.12,.45]]
  c.beginPath();c.moveTo(-1.12,.45)
  for(const[x,y,a,e]of[[-1.26,-.55,-.97,-1.06],[-.5,-1.62,.1,-1.63],[.76,-1.56,1.06,-1.04],[1.3,-.5,1.12,.45]])c.quadraticCurveTo(x,y,a,e)
  for(let k=1;k<bg.length;k++){const[px,py]=bg[k-1],[qx,qy]=bg[k],d=qy>py;c.quadraticCurveTo(d?px*.75+qx*.25:px*.25+qx*.75,d?py*.25+qy*.75:py*.75+qy*.25,qx,qy)}
}
export default(c,t,i)=>{
  const L=248,H=165,X=4,Y=46,cw=L/2,ch=H/2
  c.save();c.beginPath();c.rect(X,Y,L,H);c.clip()
  c.fillStyle='#fe0000';c.fillRect(X,Y,L,H)
  c.fillStyle='#000095';c.fillRect(X,Y,cw,ch)
  // sun: 12 rays, blue ring, white disc
  const sx=X+cw/2,sy=Y+ch/2,R=cw/4,r=cw/8,w=r*2/15
  c.beginPath();for(let k=0;k<24;k++){const q=k*P/24-P/4,d=k%2?(r+w*1.6)/C(P/24):R;c.lineTo(sx+C(q)*d,sy+S(q)*d)}
  c.fillStyle='#fff';c.fill()
  el(c,sx,sy,r+w,r+w);c.fillStyle='#000095';c.fill();el(c,sx,sy,r,r);c.fillStyle='#fff';c.fill()
  // plum branch lower left
  pth(c,[X-4,Y+H+2,X+30,Y+128,X+52,Y+120,X+80,Y+112,X+104,Y+96]);st(c,'#111',8);st(c,'#5a2a1a',5)
  pth(c,[X+40,Y+124,X+50,Y+145,X+70,Y+152]);st(c,'#111',5.5);st(c,'#5a2a1a',3)
  for(const[a,b,s,q]of[[X+104,Y+96,8,.3],[X+82,Y+110,9.5,1.1],[X+56,Y+117,8,2],[X+70,Y+151,8.5,.7],[X+28,Y+132,7,1.6],[X+93,Y+124,5.5,2.4]])bloom(c,a,b,s,q)
  // girl
  const u=33,sw=S(P*t),tl=-.05+.03*sw,b=i==6||i==7
  c.save();c.translate(X+180,Y+66);c.scale(u,u)
  c.save();c.rotate(tl)
  pth(c,[-1.08,-.5,-1.52,.6,-1.4+sw*.04,1.6,-1.32+sw*.06,2.3,-1.58+sw*.1,2.95,-1.12,2.8,-.92,2.6,-.4,3.2,0,3.2,.4,3.2,.92,2.6,1.12,2.8,1.58-sw*.1,2.95,1.32-sw*.06,2.3,1.4-sw*.04,1.6,1.52,.6,1.08,-.5])
  fs(c,'#1a1424','#111',.06)
  for(const s of[-1,1]){pth(c,[s*1.2,.4,s*1.3,1.4,s*1.28+sw*.08,2.6]);st(c,'#3a3258',.04)}
  c.restore()
  // body: blue top, white mandarin collar, plum brooch
  pth(c,[-.34,1.2,-.4,1.62,-1.3,1.72,-1.78,1.9,-1.88,3.4,0,3.6,1.88,3.4,1.78,1.9,1.3,1.72,.4,1.62,.34,1.2]);fs(c,'#1f2fb0','#111',.06)
  c.save();c.clip();el(c,2.3,3.2,1.1,1.9,.2);c.fillStyle='#17228a';c.fill();el(c,0,1.5,.75,.32);c.fill();c.restore()
  for(const s of[-1,1]){pth(c,[s*.8,1.76,s*.6,2.5,s*.6,3.4]);st(c,'#fff',.07);pth(c,[s*1.55,2.1,s*1.45,2.8,s*1.5,3.4]);st(c,'#16228a',.05)}
  pth(c,[-.3,.7,-.32,1.2,-.32,1.5,0,1.62,.32,1.5,.32,1.2,.3,.7]);fs(c,'#f7d2bd','#111',.05)
  pth(c,[-.31,.95,0,1.25,.31,.95]);c.lineTo(.31,.75);c.lineTo(-.31,.75);c.fillStyle='#e8ae98';c.fill()
  pth(c,[-.4,1.48,-.45,1.3,0,1.38,.45,1.3,.4,1.48,.42,1.72,0,1.7,-.42,1.72,-.4,1.48]);fs(c,'#fff','#111',.05)
  bloom(c,0,1.8,.17,0)
  c.rotate(tl)
  // face
  pth(c,[-1,-.6,-1.03,.3,-.86,.62,-.5,1.06,0,1.12,.5,1.06,.86,.62,1.03,.3,1,-.6,0,-1.6,-1,-.6]);fs(c,'#ffe2d0','#111',.055)
  c.save();c.clip();c.translate(0,.12);bangs(c);c.fillStyle='#f5c3b0';c.fill();c.restore()
  c.save();c.translate(-.43,0);eye(c,b);c.restore()
  c.save();c.translate(.43,0);c.scale(-1,1);eye(c,b);c.restore()
  for(const s of[-1,1]){el(c,s*.6,.7,.17,.08);c.fillStyle='rgba(255,110,130,.45)';c.fill()}
  pth(c,[.03,.64,.05,.68,0,.7]);st(c,'#c88070',.035)
  pth(c,[-.13,.84,0,.86,.13,.84,.11,.98,0,.99,-.11,.98,-.13,.84]);fs(c,'#9b2d3a','#111',.035)
  pth(c,[-.07,.95,0,.9,.07,.95,0,.99,-.07,.95]);c.fillStyle='#ef7b88';c.fill()
  // crown + bangs
  bangs(c);fs(c,'#231a30','#111',.06)
  c.save();c.clip()
  c.beginPath();for(let k=0;k<=14;k++){const q=-2.5+k*.1,rr=k%2?.86:.96;c.lineTo(C(q)*rr*1.1,-.3+S(q)*rr)}
  for(let k=14;k>=0;k--){const q=-2.5+k*.1;c.lineTo(C(q)*1.06*1.1,-.3+S(q)*1.06)}
  c.fillStyle='#4e4672';c.fill();c.restore()
  for(const[x,y]of[[.6,-.34],[.3,-.42],[-.28,-.44],[-.6,-.34]]){pth(c,[x,y,x+.02,y-.25,x-.05,y-.5]);st(c,'#111',.03)}
  for(const s of[-1,1]){pth(c,[s*.95,-.3,s*1.2,.6,s*1.06+sw*.03,1.4,s*1.12+sw*.05,1.95,s*.95,1.5,s*.86,.6,s*.95,-.3]);fs(c,'#231a30','#111',.05)}
  bloom(c,.86,-.8,.25,.4);bloom(c,1.1,-.46,.18,1.3)
  c.restore()
  // drifting petals
  for(let k=0;k<6;k++){
    const q=(t+k/6)%1,px=X+60+q*170+S(P*(q*2+k))*8,py=Y+100+q*60+S(P*(q+k*.3))*10,z=3.6*S(Math.PI*q)
    if(z>1.2&&(px>X+cw-6||py>Y+ch+6)){c.save();c.translate(px,py);c.rotate(P*(q*2+k/5));el(c,0,0,z,2.2);fs(c,'#ffe0e8','#a02848',.8);c.restore()}
  }
  c.strokeStyle='#111';c.lineWidth=5;c.strokeRect(X,Y,L,H)
  c.restore()
  wave(c,X,L,t)
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
