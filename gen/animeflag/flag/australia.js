// Australia flag (blue ensign: Union Jack canton, large seven-pointed Commonwealth Star, Southern Cross on the fly) waving while its white stars twinkle, with a cheerful anime girl in front of the lower middle: honey-brown ponytail with a golden wattle sprig, blue eyes, green and gold jersey, waving hello
export const frames=16,delay=80,rim=3
const P=Math.PI*2,S=Math.sin,C=Math.cos
const pth=(c,a)=>{c.beginPath();c.moveTo(a[0],a[1]);for(let k=2;k<a.length;k+=4)c.quadraticCurveTo(a[k],a[k+1],a[k+2],a[k+3])}
const fs=(c,f,s,w)=>{c.fillStyle=f;c.fill();if(s){c.strokeStyle=s;c.lineWidth=w;c.stroke()}}
const st=(c,s,w)=>{c.strokeStyle=s;c.lineWidth=w;c.stroke()}
const el=(c,x,y,rx,ry,r=0)=>{c.beginPath();c.ellipse(x,y,rx,ry,r,0,P)}
const star=(c,x,y,r,n)=>{c.beginPath();for(let k=0;k<2*n;k++){const q=k*P/2/n-P/4,d=k%2?r*4/9:r;c.lineTo(x+C(q)*d,y+S(q)*d)}c.fill()}
const uj=(c,x,y,w,h)=>{
  const u=h/30,cx=x+w/2,cy=y+h/2,R='#c8102e'
  c.save();c.beginPath();c.rect(x,y,w,h);c.clip();c.lineCap='butt'
  c.beginPath();c.moveTo(x,y);c.lineTo(x+w,y+h);c.moveTo(x+w,y);c.lineTo(x,y+h);st(c,'#fff',6*u)
  for(const[a,b]of[[-1,-1],[1,-1],[1,1],[-1,1]]){
    const dx=a*w/2,dy=b*h/2,m=Math.hypot(dx,dy),nx=dy/m*u,ny=-dx/m*u
    c.save();c.beginPath();c.rect(a<0?x:cx,b<0?y:cy,w/2,h/2);c.clip()
    c.beginPath();c.moveTo(cx+nx,cy+ny);c.lineTo(cx+dx*1.2+nx,cy+dy*1.2+ny);st(c,R,2*u);c.restore()
  }
  c.fillStyle='#fff';c.fillRect(cx-5*u,y,10*u,h);c.fillRect(x,cy-5*u,w,10*u)
  c.fillStyle=R;c.fillRect(cx-3*u,y,6*u,h);c.fillRect(x,cy-3*u,w,6*u)
  c.restore()
}
const eye=(c,bl)=>{
  if(bl){pth(c,[-.42,.34,-.04,.04,.3,.32]);st(c,'#111',.08);pth(c,[-.42,.34,-.52,.38,-.56,.3]);st(c,'#111',.05);return}
  c.save()
  pth(c,[-.36,.28,-.22,-.02,.3,.1,.38,.48,.04,.67,-.32,.62,-.36,.28]);c.fillStyle='#fff';c.fill();c.clip()
  el(c,0,.36,.25,.33);fs(c,'#3a78d0')
  el(c,0,.05,.3,.15);fs(c,'#173a7a')
  el(c,0,.55,.17,.12);fs(c,'#8cc8ff')
  el(c,0,.35,.09,.13);fs(c,'#0c1a3a')
  c.restore()
  c.beginPath();c.moveTo(-.42,.32);c.quadraticCurveTo(-.24,-.08,.32,.08);c.quadraticCurveTo(-.2,.04,-.36,.36);c.fillStyle='#111';c.fill()
  pth(c,[-.4,.28,-.5,.26,-.56,.32]);st(c,'#111',.06)
  pth(c,[-.34,.16,-.4,.08,-.46,.06]);st(c,'#111',.035)
  pth(c,[-.14,.67,.06,.71,.26,.56]);st(c,'#7a3a30',.035)
  el(c,-.09,.24,.11,.13,-.3);fs(c,'#fff');el(c,.1,.5,.05,.05);c.fill();el(c,.12,.14,.03,.03);c.fill()
}
const wattle=(c,x,y,s)=>{
  c.save();c.translate(x,y);c.scale(s,s)
  for(const[a,b,r]of[[-.9,-.5,.5],[.9,-.3,-.4],[.1,.9,.2]]){c.save();c.rotate(r);el(c,a*.5,b*.5,.75,.16,Math.atan2(b,a));fs(c,'#3f8f3a','#111',.08);c.restore()}
  for(const[a,b]of[[0,0],[-.45,-.25],[.45,-.3],[-.2,.45],[.3,.35],[0,-.55],[-.6,.25],[.65,.15]]){el(c,a,b,.27,.27);fs(c,'#ffd21a','#8a6a00',.06)}
  c.restore()
}
const bangs=c=>{
  const bg=[[1.12,.45],[.92,-.3],[.76,.04],[.6,-.34],[.44,-.04],[.3,-.42],[.14,-.2],[.02,-.56],[-.12,-.18],[-.28,-.44],[-.44,-.04],[-.6,-.34],[-.76,.04],[-.92,-.3],[-1.12,.45]]
  c.beginPath();c.moveTo(-1.12,.45)
  for(const[x,y,a,e]of[[-1.26,-.55,-.97,-1.06],[-.5,-1.62,.1,-1.63],[.76,-1.56,1.06,-1.04],[1.3,-.5,1.12,.45]])c.quadraticCurveTo(x,y,a,e)
  for(let k=1;k<bg.length;k++){const[px,py]=bg[k-1],[qx,qy]=bg[k],d=qy>py;c.quadraticCurveTo(d?px*.75+qx*.25:px*.25+qx*.75,d?py*.25+qy*.75:py*.75+qy*.25,qx,qy)}
}
export default(c,t,i)=>{
  const L=248,H=124,X=4,Y=8
  c.save();c.beginPath();c.rect(X,Y,L,H);c.clip()
  c.fillStyle='#012169';c.fillRect(X,Y,L,H)
  uj(c,X,Y,L/2,H/2)
  c.fillStyle='#fff'
  star(c,X+L/4,Y+H*.75,H*.15,7)
  const sc=[[1.5,5/6,7],[1.25,.4375,7],[1.5,1/6,7],[1.5+2/9,.5-31/240,7],[1.6,.5+1/24,5]]
  for(const[a,b,n]of sc)star(c,X+a*H,Y+b*H,n>5?H/14:H/24,n)
  // twinkles beside the stars
  for(const[k,[a,b,e,f]]of[[1.5,5/6,.1,-.1],[1.25,.4375,-.11,-.09],[1.5,1/6,.11,.04],[1.5+2/9,.5-31/240,.1,-.1],[.5,.75,-.22,-.15]].entries()){
    const q=Math.max(0,S(P*(t-k/5))),x=X+(a+e)*H,y=Y+(b+f)*H,r=q*q*6.5
    if(r>1.2){c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x,y,x+r*.7,y);c.quadraticCurveTo(x,y,x,y+r);c.quadraticCurveTo(x,y,x-r*.7,y);c.quadraticCurveTo(x,y,x,y-r);c.fillStyle='#fff';c.fill()}
  }
  c.strokeStyle='#111';c.lineWidth=5;c.strokeRect(X,Y,L,H)
  c.restore()
  wave(c,X,L,t)
  // girl in front of the lower middle of the flag
  const u=27,sw=S(P*t),s2=S(P*t*2),tl=-.04+.02*sw,b=i==12||i==13
  c.save();c.translate(X+L*.49,Y+H+12);c.scale(u,u)
  c.save();c.rotate(tl)
  // ponytail streaming right
  pth(c,[.7,-1.2,1.6,-1.5,2.0+sw*.08,-.6,2.25+sw*.12,.4,2.0+sw*.18,1.3,1.75,.6,1.6,.2,1.4,-.3,.7,-1.2]);fs(c,'#a8703a','#111',.06)
  pth(c,[1.05,-1.15,1.7,-1.0,1.95+sw*.15,.9]);st(c,'#7a4c22',.04)
  pth(c,[-1.08,-.5,-1.4,.5,-1.25,1.3,-1.0,1.5,0,1.4,1.0,1.5,1.25,1.3,1.4,.5,1.08,-.5]);fs(c,'#a8703a','#111',.06)
  c.restore()
  // body: green jersey, gold collar
  c.beginPath();c.moveTo(-.36,1.2);c.quadraticCurveTo(-.42,1.6,-1.25,1.72);c.quadraticCurveTo(-1.72,1.85,-1.85,2.4);c.lineTo(-1.95,5);c.lineTo(1.95,5);c.lineTo(1.85,2.4);c.quadraticCurveTo(1.72,1.85,1.25,1.72);c.quadraticCurveTo(.42,1.6,.36,1.2);fs(c,'#00843d','#111',.06)
  c.save();c.clip();el(c,2.3,3.2,1.1,1.9,.2);c.fillStyle='#006a31';c.fill();el(c,0,1.5,.75,.32);c.fill();c.restore()
  for(const s of[-1,1]){pth(c,[s*1.8,2.3,s*1.2,2.4,s*.95,4]);st(c,'#ffcd00',.12)}
  pth(c,[-.3,.7,-.32,1.2,-.32,1.5,0,1.62,.32,1.5,.32,1.2,.3,.7]);fs(c,'#f7d2bd','#111',.05)
  pth(c,[-.31,.95,0,1.25,.31,.95]);c.lineTo(.31,.75);c.lineTo(-.31,.75);c.fillStyle='#e8ae98';c.fill()
  pth(c,[-.5,1.55,-.3,1.5,0,2.0,.3,1.5,.5,1.55,.25,2.25,0,2.25,-.25,2.25,-.5,1.55]);fs(c,'#ffcd00','#111',.05)
  pth(c,[-.36,1.62,0,2.1,.36,1.62,0,1.75,-.36,1.62]);c.fillStyle='#f7d2bd';c.fill()
  // waving arm
  const wa=.3*S(P*t*2)
  c.save();c.scale(-1,1)
  pth(c,[1.45,1.85,2.1,2.4,2.2,1.6]);st(c,'#111',.62);st(c,'#00843d',.5)
  c.save();c.translate(2.2,1.6);c.rotate(wa)
  pth(c,[0,0,.02,-.35,0,-.7]);st(c,'#111',.4);st(c,'#f7d2bd',.3)
  c.translate(0,-.98)
  for(const[a,l]of[[-.42,.36],[-.14,.44],[.13,.44],[.4,.38]]){c.beginPath();c.moveTo(S(a)*.1,0);c.lineTo(S(a)*l*1.1,-C(a)*l*1.05);st(c,'#111',.2);st(c,'#f7d2bd',.11)}
  c.beginPath();c.moveTo(-.08,.14);c.lineTo(-.4,-.02);st(c,'#111',.2);st(c,'#f7d2bd',.11)
  el(c,0,.06,.25,.23);fs(c,'#f7d2bd','#111',.045)
  pth(c,[-.08,-.1,0,-.14,.1,-.1]);st(c,'#d49a84',.03)
  c.restore();c.restore()
  c.rotate(tl)
  // face
  pth(c,[-1,-.6,-1.03,.3,-.86,.62,-.5,1.06,0,1.12,.5,1.06,.86,.62,1.03,.3,1,-.6,0,-1.6,-1,-.6]);fs(c,'#ffe2d0','#111',.055)
  c.save();c.clip();c.translate(0,.12);bangs(c);c.fillStyle='#f5c3b0';c.fill();c.restore()
  c.save();c.translate(-.43,0);eye(c,b);c.restore()
  c.save();c.translate(.43,0);c.scale(-1,1);eye(c,b);c.restore()
  for(const s of[-1,1]){el(c,s*.6,.7,.17,.08);c.fillStyle='rgba(255,110,130,.45)';c.fill()}
  pth(c,[.03,.64,.05,.68,0,.7]);st(c,'#c88070',.035)
  pth(c,[-.2,.8,0,.83,.2,.8,.16,1.02,0,1.03,-.16,1.02,-.2,.8]);fs(c,'#9b2d3a','#111',.035)
  pth(c,[-.1,.97,0,.9,.1,.97,0,1.03,-.1,.97]);c.fillStyle='#ef7b88';c.fill()
  pth(c,[-.17,.82,0,.85,.17,.82,0,.87,-.17,.82]);c.fillStyle='#fff';c.fill()
  // crown + bangs
  bangs(c);fs(c,'#c08442','#111',.06)
  c.save();c.clip()
  c.beginPath();for(let k=0;k<=14;k++){const q=-2.5+k*.1,rr=k%2?.86:.96;c.lineTo(C(q)*rr*1.1,-.3+S(q)*rr)}
  for(let k=14;k>=0;k--){const q=-2.5+k*.1;c.lineTo(C(q)*1.06*1.1,-.3+S(q)*1.06)}
  c.fillStyle='#ecc07a';c.fill();c.restore()
  for(const[x,y]of[[.6,-.34],[.3,-.42],[-.28,-.44],[-.6,-.34]]){pth(c,[x,y,x+.02,y-.25,x-.05,y-.5]);st(c,'#7a4c22',.03)}
  for(const s of[-1,1]){pth(c,[s*.95,-.3,s*1.18,.5,s*1.04+sw*.03,1.1,s*.92,.9,s*.86,.5,s*.95,-.3]);fs(c,'#c08442','#111',.05)}
  // hair tie + wattle sprig
  el(c,.85,-1.2,.16,.12,.6);fs(c,'#ffcd00','#111',.04)
  wattle(c,-.92,-.92,.36)
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
