// Ireland flag (green, white and orange vertical tricolour) waving, with a cheerful anime girl printed in the white band: long wavy chestnut hair with a braided crown and a shamrock hair clip, green eyes, cream Aran cable-knit sweater, winking with a little pink heart as her hair blows in the wind
export const frames=16,delay=80,rim=3
const P=Math.PI*2,S=Math.sin,C=Math.cos
const pth=(c,a)=>{c.beginPath();c.moveTo(a[0],a[1]);for(let k=2;k<a.length;k+=4)c.quadraticCurveTo(a[k],a[k+1],a[k+2],a[k+3])}
const fs=(c,f,s,w)=>{c.fillStyle=f;c.fill();if(s){c.strokeStyle=s;c.lineWidth=w;c.stroke()}}
const st=(c,s,w)=>{c.strokeStyle=s;c.lineWidth=w;c.stroke()}
const el=(c,x,y,rx,ry,r=0)=>{c.beginPath();c.ellipse(x,y,rx,ry,r,0,P)}
const eye=(c,bl)=>{
  if(bl){pth(c,[-.42,.34,-.04,.04,.3,.32]);st(c,'#111',.08);pth(c,[-.42,.34,-.52,.38,-.56,.3]);st(c,'#111',.05);return}
  c.save()
  pth(c,[-.36,.28,-.22,-.02,.3,.1,.38,.48,.04,.67,-.32,.62,-.36,.28]);c.fillStyle='#fff';c.fill();c.clip()
  el(c,0,.36,.25,.33);fs(c,'#2f9a52')
  el(c,0,.05,.3,.15);fs(c,'#0e4a26')
  el(c,0,.55,.17,.12);fs(c,'#8ee09a')
  el(c,0,.35,.09,.13);fs(c,'#0a2414')
  c.restore()
  c.beginPath();c.moveTo(-.42,.32);c.quadraticCurveTo(-.24,-.08,.32,.08);c.quadraticCurveTo(-.2,.04,-.36,.36);c.fillStyle='#111';c.fill()
  pth(c,[-.4,.28,-.5,.26,-.56,.32]);st(c,'#111',.06)
  pth(c,[-.34,.16,-.4,.08,-.46,.06]);st(c,'#111',.035)
  pth(c,[-.14,.67,.06,.71,.26,.56]);st(c,'#7a3a30',.035)
  el(c,-.09,.24,.11,.13,-.3);fs(c,'#fff');el(c,.1,.5,.05,.05);c.fill();el(c,.12,.14,.03,.03);c.fill()
}
const shamrock=(c,x,y,r,a)=>{
  c.save();c.translate(x,y);c.rotate(a)
  pth(c,[0,0,.1*r,.6*r,-.1*r,1.1*r]);st(c,'#111',r*.32);st(c,'#0f7a48',r*.16)
  for(let k=0;k<3;k++){c.save();c.rotate(k*P/3);c.beginPath();c.moveTo(0,0);c.bezierCurveTo(-.9*r,-.4*r,-.6*r,-1.3*r,0,-.85*r);c.bezierCurveTo(.6*r,-1.3*r,.9*r,-.4*r,0,0);fs(c,'#169b62','#111',r*.12);c.restore()}
  c.restore()
}
const bangs=c=>{
  const bg=[[1.12,.45],[.94,-.26],[.8,.06],[.64,-.36],[.44,-.02],[.3,-.46],[.06,-.2],[-.04,-.58],[-.22,-.16],[-.36,-.46],[-.54,-.04],[-.68,-.36],[-.82,.04],[-.94,-.28],[-1.12,.45]]
  c.beginPath();c.moveTo(-1.12,.45)
  for(const[x,y,a,e]of[[-1.26,-.55,-.97,-1.06],[-.5,-1.62,.1,-1.63],[.76,-1.56,1.06,-1.04],[1.3,-.5,1.12,.45]])c.quadraticCurveTo(x,y,a,e)
  for(let k=1;k<bg.length;k++){const[px,py]=bg[k-1],[qx,qy]=bg[k],d=qy>py;c.quadraticCurveTo(d?px*.75+qx*.25:px*.25+qx*.75,d?py*.25+qy*.75:py*.75+qy*.25,qx,qy)}
}
export default(c,t,i)=>{
  const L=248,H=124,X=4,Y=66,b3=L/3
  c.save();c.beginPath();c.rect(X,Y,L,H);c.clip()
  c.fillStyle='#169b62';c.fillRect(X,Y,b3,H)
  c.fillStyle='#fff';c.fillRect(X+b3,Y,b3,H)
  c.fillStyle='#ff883e';c.fillRect(X+2*b3,Y,b3+1,H)
  // girl
  const u=28,sw=S(P*t),s2=S(P*t+1),tl=.04+.025*sw,wk=i>=9&&i<=11
  c.save();c.translate(X+L/2,Y+50);c.scale(u,u)
  c.save();c.rotate(tl)
  // back hair, wavy, blowing right
  c.beginPath();c.moveTo(-1.1,-.5)
  for(const[x,y,a,e]of[[-1.6,.3,-1.38,1],[-1.2,1.5,-1.5+s2*.06,2],[-1.75+sw*.1,2.5,-1.3+sw*.12,3.1],[-.6,2.9,0,3.2],[.8,3.3,1.5+sw*.14,3.1],[1.95+sw*.12,2.4,1.55+s2*.08,1.9],[1.35,1.4,1.5,.9],[1.68,.2,1.1,-.5]])c.quadraticCurveTo(x,y,a,e)
  fs(c,'#5e2f17','#111',.06)
  for(const[x0,y0,x1,y1]of[[-1.2,.6,-1.35,2.6],[1.25,.6,1.5,2.7],[-.8,1.6,-.6,2.9],[.9,1.6,1,3]]){pth(c,[x0,y0,x0+(x1-x0)*.2+sw*.08,(y0+y1)/2,x1+sw*.1,y1]);st(c,'#3a1a0c',.045)}
  c.restore()
  // body: Aran sweater
  pth(c,[-.36,1.2,-.42,1.6,-1.25,1.72,-1.72,1.95,-1.85,3.4,0,3.6,1.85,3.4,1.72,1.95,1.25,1.72,.42,1.6,.36,1.2]);fs(c,'#f1e6cc','#111',.06)
  c.save();c.clip();el(c,2.3,3.2,1.1,1.9,.2);c.fillStyle='#ddd0b0';c.fill();el(c,0,1.5,.75,.32);c.fill()
  for(const cx of[-1.25,-.45,.45,1.25])for(let y=1.95;y<3.4;y+=.3){pth(c,[cx-.16,y,cx,y+.05,cx+.16,y+.3]);st(c,'#b9a479',.06);pth(c,[cx+.16,y,cx+.1,y+.08,cx+.04,y+.12]);st(c,'#b9a479',.06)}
  for(const cx of[-.85,0,.85])for(let y=1.9;y<3.4;y+=.18){el(c,cx,y,.06,.05);c.fillStyle='#cdb98e';c.fill()}
  c.restore()
  pth(c,[-.3,.7,-.32,1.2,-.32,1.5,0,1.62,.32,1.5,.32,1.2,.3,.7]);fs(c,'#f9d9c6','#111',.05)
  pth(c,[-.31,.95,0,1.25,.31,.95]);c.lineTo(.31,.75);c.lineTo(-.31,.75);c.fillStyle='#ebb4a0';c.fill()
  pth(c,[-.6,1.6,-.4,1.36,0,1.4,.4,1.36,.6,1.6,.3,1.9,0,1.9,-.3,1.9,-.6,1.6]);fs(c,'#efe2c4','#111',.05)
  for(let k=-4;k<=4;k++){c.beginPath();c.moveTo(k*.11,1.46+Math.abs(k)*.01);c.lineTo(k*.13,1.82-Math.abs(k)*.02);st(c,'#c4ad7e',.035)}
  c.rotate(tl)
  // face
  pth(c,[-1,-.6,-1.03,.3,-.86,.62,-.5,1.06,0,1.12,.5,1.06,.86,.62,1.03,.3,1,-.6,0,-1.6,-1,-.6]);fs(c,'#fff0e6','#111',.055)
  c.save();c.clip();c.translate(0,.12);bangs(c);c.fillStyle='#f6cdbd';c.fill();c.restore()
  c.save();c.translate(-.43,0);eye(c,0);c.restore()
  c.save();c.translate(.43,0);c.scale(-1,1);eye(c,wk);c.restore()
  for(const s of[-1,1]){el(c,s*.6,.7,.17,.08);c.fillStyle='rgba(255,110,130,.45)';c.fill()}
  pth(c,[.03,.64,.05,.68,0,.7]);st(c,'#c88070',.035)
  pth(c,[-.15,.83,0,.85,.15,.83,.12,1,0,1.01,-.12,1,-.15,.83]);fs(c,'#9b2d3a','#111',.035)
  pth(c,[-.08,.96,0,.9,.08,.96,0,1.01,-.08,.96]);c.fillStyle='#ef7b88';c.fill()
  // crown + bangs, braid, side locks, shamrock clip
  bangs(c);fs(c,'#7a4223','#111',.06)
  c.save();c.clip()
  c.beginPath();for(let k=0;k<=14;k++){const q=-2.5+k*.1,rr=k%2?.86:.96;c.lineTo(C(q)*rr*1.1,-.3+S(q)*rr)}
  for(let k=14;k>=0;k--){const q=-2.5+k*.1;c.lineTo(C(q)*1.06*1.1,-.3+S(q)*1.06)}
  c.fillStyle='#b87444';c.fill();c.restore()
  for(const[x,y]of[[.64,-.36],[.3,-.46],[-.36,-.46],[-.68,-.36]]){pth(c,[x,y,x+.02,y-.25,x-.05,y-.5]);st(c,'#3a1a0c',.03)}
  for(let k=0;k<13;k++){const q=-2.78+k*.18,x=C(q)*1.2,y=-.32+S(q)*1.22,a=q+(k%2?.8:-.8)+P/4;el(c,x,y,.19,.11,a);fs(c,'#9a5a30','#111',.04);el(c,x-C(a)*.04,y-S(a)*.04,.1,.035,a);c.fillStyle='#c98a52';c.fill()}
  for(const s of[-1,1]){pth(c,[s*.95,-.3,s*1.22,.5,s*1.02+sw*.03,1.0,s*.92+sw*.04,1.5,s*1.12+sw*.06,2.0,s*.9,1.5,s*.84,.9,s*1.0,.5,s*.95,-.3]);fs(c,'#7a4223','#111',.05)}
  shamrock(c,1.02,-.72,.3,.5)
  const hz=[0,0,0,0,0,0,0,0,0,.5,.9,1,.7][i]||0
  if(hz){c.save();c.translate(1.32,.12-hz*.15);c.rotate(.3);c.scale(hz*.24,hz*.24);c.beginPath();c.moveTo(0,1);c.bezierCurveTo(-1.6,0,-1,-1.4,0,-.5);c.bezierCurveTo(1,-1.4,1.6,0,0,1);fs(c,'#ff6f91','#111',.22);c.restore()}
  c.restore()
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
