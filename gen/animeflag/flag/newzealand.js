// New Zealand flag (blue ensign: Union Jack canton, four red white-bordered stars of the Southern Cross) waving, with a smiling anime girl in front of the lower middle: long dark hair blowing in the wind with a red pohutukawa flower, black top with a silver fern, hugging a fluffy kiwi bird that blinks along with her
export const frames=16,delay=80,rim=3
const P=Math.PI*2,S=Math.sin,C=Math.cos
const pth=(c,a)=>{c.beginPath();c.moveTo(a[0],a[1]);for(let k=2;k<a.length;k+=4)c.quadraticCurveTo(a[k],a[k+1],a[k+2],a[k+3])}
const fs=(c,f,s,w)=>{c.fillStyle=f;c.fill();if(s){c.strokeStyle=s;c.lineWidth=w;c.stroke()}}
const st=(c,s,w)=>{c.strokeStyle=s;c.lineWidth=w;c.stroke()}
const el=(c,x,y,rx,ry,r=0)=>{c.beginPath();c.ellipse(x,y,rx,ry,r,0,P)}
const star=(c,x,y,r)=>{c.beginPath();for(let k=0;k<10;k++){const q=k*P/10-P/4,d=k%2?r*.382:r;c.lineTo(x+C(q)*d,y+S(q)*d)}c.closePath()}
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
  el(c,0,.36,.25,.33);fs(c,'#1f8a8e')
  el(c,0,.05,.3,.15);fs(c,'#0b4248')
  el(c,0,.55,.17,.12);fs(c,'#7fe0d8')
  el(c,0,.35,.09,.13);fs(c,'#06222a')
  c.restore()
  c.beginPath();c.moveTo(-.42,.32);c.quadraticCurveTo(-.24,-.08,.32,.08);c.quadraticCurveTo(-.2,.04,-.36,.36);c.fillStyle='#111';c.fill()
  pth(c,[-.4,.28,-.5,.26,-.56,.32]);st(c,'#111',.06)
  pth(c,[-.34,.16,-.4,.08,-.46,.06]);st(c,'#111',.035)
  pth(c,[-.14,.67,.06,.71,.26,.56]);st(c,'#7a3a30',.035)
  el(c,-.09,.24,.11,.13,-.3);fs(c,'#fff');el(c,.1,.5,.05,.05);c.fill();el(c,.12,.14,.03,.03);c.fill()
}
const pohutukawa=(c,x,y,r)=>{
  c.save();c.translate(x,y)
  for(let k=0;k<18;k++){const q=k*P/18,l=r*(k%2?.85:1);c.beginPath();c.moveTo(0,0);c.lineTo(C(q)*l,S(q)*l);st(c,'#5a0614',r*.2)}
  for(let k=0;k<18;k++){const q=k*P/18,l=r*(k%2?.85:1);c.beginPath();c.moveTo(0,0);c.lineTo(C(q)*l,S(q)*l);st(c,'#f0283e',r*.1);el(c,C(q)*l,S(q)*l,r*.08,r*.08);c.fillStyle='#ffe04a';c.fill()}
  el(c,0,0,r*.3,r*.3);fs(c,'#c8102e')
  c.restore()
}
const fern=(c,x,y,s,a)=>{
  c.save();c.translate(x,y);c.rotate(a);c.scale(s,s)
  pth(c,[0,0,.1,-.5,0,-1]);st(c,'#e8eef0',.06)
  for(let k=1;k<9;k++){const v=k/9,l=.32*(1-v*.8),py=-v,px=.1*S(v*Math.PI)
    for(const d of[-1,1]){el(c,px+d*l*.5,py+.03,l*.5,.045,d*-.5);c.fillStyle='#e8eef0';c.fill()}}
  c.restore()
}
const bangs=c=>{
  const bg=[[1.12,.45],[.94,-.24],[.82,.08],[.66,-.36],[.48,.0],[.34,-.46],[.1,-.18],[-.02,-.58],[-.2,-.14],[-.36,-.46],[-.54,-.02],[-.7,-.36],[-.84,.04],[-.95,-.28],[-1.12,.45]]
  c.beginPath();c.moveTo(-1.12,.45)
  for(const[x,y,a,e]of[[-1.26,-.55,-.97,-1.06],[-.5,-1.62,.1,-1.63],[.76,-1.56,1.06,-1.04],[1.3,-.5,1.12,.45]])c.quadraticCurveTo(x,y,a,e)
  for(let k=1;k<bg.length;k++){const[px,py]=bg[k-1],[qx,qy]=bg[k],d=qy>py;c.quadraticCurveTo(d?px*.75+qx*.25:px*.25+qx*.75,d?py*.25+qy*.75:py*.75+qy*.25,qx,qy)}
}
export default(c,t,i)=>{
  const L=248,H=124,X=4,Y=8
  c.save();c.beginPath();c.rect(X,Y,L,H);c.clip()
  c.fillStyle='#012169';c.fillRect(X,Y,L,H)
  uj(c,X,Y,L/2,H/2)
  const q=8*Math.PI/180
  for(const[a,b,d]of[[1.5,.2,6],[1.5,.8,7],[1.5+.2*C(q),.4-.2*S(q),5],[1.5-14/60*C(q),.4+14/60*S(q),6]]){
    star(c,X+a*H,Y+b*H,d/120*H);c.lineJoin='miter';st(c,'#fff',H/60)
    star(c,X+a*H,Y+b*H,d/120*H);c.fillStyle='#c8102e';c.fill()
  }
  c.strokeStyle='#111';c.lineWidth=5;c.lineJoin='round';c.strokeRect(X,Y,L,H)
  c.restore()
  wave(c,X,L,t)
  // girl in front of the lower middle of the flag
  const u=27,sw=S(P*t),s2=S(P*t+1),tl=.04+.02*sw,b=i==5||i==6,kb=i==6||i==7
  c.save();c.translate(X+L*.45,Y+H+12);c.scale(u,u)
  c.save();c.rotate(tl)
  // long hair blowing right
  c.beginPath();c.moveTo(-1.1,-.5)
  for(const[x,y,a,e]of[[-1.55,.4,-1.35,1.2],[-1.2,1.8,-1.5+s2*.05,2.3],[-1.1,2.6,-.6,2.2],[.2,2.5,1.1,2.4],[1.9+sw*.1,2.4,2.3+sw*.16,1.9],[1.95,1.7,2.4+s2*.14,1.0],[1.95,.9,1.7,.5],[1.75,-.2,1.1,-.5]])c.quadraticCurveTo(x,y,a,e)
  fs(c,'#2a1a14','#111',.06)
  for(const[a,b,e,f]of[[1.2,.2,2.1+s2*.12,1.1],[1.3,.9,2.1+sw*.14,1.9],[-1.25,.5,-1.35,2.1]]){pth(c,[a,b,(a+e)/2,(b+f)/2+.15,e,f]);st(c,'#4a3428',.045)}
  c.restore()
  // body: black top
  c.beginPath();c.moveTo(-.36,1.2);c.quadraticCurveTo(-.42,1.6,-1.25,1.72);c.quadraticCurveTo(-1.72,1.85,-1.85,2.4);c.lineTo(-1.95,5);c.lineTo(1.95,5);c.lineTo(1.85,2.4);c.quadraticCurveTo(1.72,1.85,1.25,1.72);c.quadraticCurveTo(.42,1.6,.36,1.2);fs(c,'#1c1c22','#111',.06)
  c.save();c.clip();el(c,2.3,3.2,1.1,1.9,.2);c.fillStyle='#0e0e12';c.fill();el(c,0,1.5,.75,.32);c.fill();c.restore()
  for(const s of[-1,1]){pth(c,[s*1.55,2.1,s*1.45,2.8,s*1.5,3.6]);st(c,'#3a3a46',.05)}
  pth(c,[-.3,.7,-.32,1.2,-.32,1.5,0,1.62,.32,1.5,.32,1.2,.3,.7]);fs(c,'#f3cdb4','#111',.05)
  pth(c,[-.31,.95,0,1.25,.31,.95]);c.lineTo(.31,.75);c.lineTo(-.31,.75);c.fillStyle='#e0a690';c.fill()
  pth(c,[-.5,1.56,0,1.95,.5,1.56]);st(c,'#e8eef0',.07)
  fern(c,-1.05,2.6,.75,.25)
  // kiwi hugged in her arms
  const ky=2.72+.03*S(P*t*2)
  c.save();c.translate(.15,ky)
  pth(c,[.95,-.12,1.5,-.05,1.95,.42]);st(c,'#111',.13);st(c,'#e6d29a',.07)
  el(c,0,0,.95,.62,-.1);fs(c,'#8a6440','#111',.06)
  for(const[x,y]of[[-.55,-.15],[-.2,-.3],[-.35,.2],[.05,.05],[.3,.3],[-.65,.25],[.0,.38]]){pth(c,[x-.1,y-.05,x,y+.05,x+.1,y-.05]);st(c,'#5e4026',.045)}
  el(c,.58,-.28,.4,.34);fs(c,'#9a7650');c.beginPath();c.arc(.58,-.28,.4,-2.6,-.2);st(c,'#111',.05)
  if(kb){pth(c,[.56,-.34,.64,-.3,.72,-.34]);st(c,'#111',.05)}else{el(c,.64,-.34,.07,.08);fs(c,'#111');el(c,.62,-.37,.025,.025);fs(c,'#fff')}
  c.restore()
  for(const[x,y,r]of[[-.75,3.0,.4],[.95,3.15,-.3]]){c.save();c.translate(x,y+ky-2.72);c.rotate(r);el(c,0,0,.26,.2);fs(c,'#f3cdb4','#111',.05);for(const d of[-.08,.06]){c.beginPath();c.moveTo(d,-.18);c.lineTo(d+.02,-.04);st(c,'#c48c76',.03)}c.restore()}
  c.rotate(tl)
  // face
  pth(c,[-1,-.6,-1.03,.3,-.86,.62,-.5,1.06,0,1.12,.5,1.06,.86,.62,1.03,.3,1,-.6,0,-1.6,-1,-.6]);fs(c,'#ffe0cc','#111',.055)
  c.save();c.clip();c.translate(0,.12);bangs(c);c.fillStyle='#f2bea8';c.fill();c.restore()
  c.save();c.translate(-.43,0);eye(c,b);c.restore()
  c.save();c.translate(.43,0);c.scale(-1,1);eye(c,b);c.restore()
  for(const s of[-1,1]){el(c,s*.6,.7,.17,.08);c.fillStyle='rgba(255,110,130,.45)';c.fill()}
  pth(c,[.03,.64,.05,.68,0,.7]);st(c,'#c88070',.035)
  pth(c,[-.15,.83,0,.85,.15,.83,.12,1,0,1.01,-.12,1,-.15,.83]);fs(c,'#9b2d3a','#111',.035)
  pth(c,[-.08,.96,0,.9,.08,.96,0,1.01,-.08,.96]);c.fillStyle='#ef7b88';c.fill()
  // crown + bangs, swept
  bangs(c);fs(c,'#3a241a','#111',.06)
  c.save();c.clip()
  c.beginPath();for(let k=0;k<=14;k++){const q=-2.5+k*.1,rr=k%2?.86:.96;c.lineTo(C(q)*rr*1.1,-.3+S(q)*rr)}
  for(let k=14;k>=0;k--){const q=-2.5+k*.1;c.lineTo(C(q)*1.06*1.1,-.3+S(q)*1.06)}
  c.fillStyle='#6e4a38';c.fill();c.restore()
  for(const[x,y]of[[.66,-.36],[.34,-.46],[-.36,-.46],[-.7,-.36]]){pth(c,[x,y,x+.02,y-.25,x-.05,y-.5]);st(c,'#111',.03)}
  for(const s of[-1,1]){pth(c,[s*.95,-.3,s*1.2,.6,s*1.06+sw*.04,1.4,s*1.14+sw*.06,1.95,s*.95,1.5,s*.86,.6,s*.95,-.3]);fs(c,'#3a241a','#111',.05)}
  pohutukawa(c,-.95,-.8,.36)
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
