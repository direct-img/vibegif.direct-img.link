// scarecrow on its post waving one floppy arm, head tilting and straw tufts swaying
export const frames=24,delay=60,rim=5
const K='#2a1810',P=Math.PI*2,PI=Math.PI,S=Math.sin,C=Math.cos
export default(c,t)=>{
  const w=S(P*2*t),tl=.06*S(P*2*t-.6),sw=S(P*2*t-1)
  c.strokeStyle=K;c.translate(128,130);c.scale(.9,.9);c.translate(-128,-128)
  const L=(p,f,lw=6)=>{c.beginPath();p.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fillStyle=f;c.fill();c.lineWidth=lw;c.stroke()},
    // straw tuft: a fan of short strands from (x,y) pointing along angle a
    tuft=(x,y,a,n=5,l=18,sp=.9)=>{for(let k=0;k<n;k++){const b=a+(k/(n-1)-.5)*sp+.08*S(P*2*t+k),e=l*(.8+.3*(k%2));
      c.lineWidth=8;c.strokeStyle=K;c.beginPath();c.moveTo(x,y);c.lineTo(x+e*C(b),y+e*S(b));c.stroke()
      c.lineWidth=3.5;c.strokeStyle='#f2cf5b';c.stroke()}c.strokeStyle=K},
    pole=(x0,y0,x1,y1,lw)=>{c.lineWidth=lw+6;c.beginPath();c.moveTo(x0,y0);c.lineTo(x1,y1);c.stroke();c.lineWidth=lw;c.strokeStyle='#9b6a3c';c.stroke();c.strokeStyle=K}
  // post and crossbar
  pole(128,120,128,234,14);pole(34,132,222,132,12)
  c.lineWidth=5;c.fillStyle='#6fa043'
  for(const[x,h,d]of[[106,18,-.7],[116,28,-.3],[140,26,.3],[150,17,.7],[128,20,0]]){const b=.08*S(P*2*t+x),q=x+h*(d+b);c.beginPath();c.moveTo(x-8,240);c.quadraticCurveTo(x-6+(q-x)*.2,240-h*.5,q,240-h);c.quadraticCurveTo(x+6+(q-x)*.2,240-h*.5,x+8,240);c.closePath();c.fill();c.stroke()}
  // waist straw, torso with plaid and a patch
  tuft(112,186,PI/2+.25,4,22,.6);tuft(144,186,PI/2-.25,4,22,.6)
  const tor=()=>{c.beginPath();c.moveTo(94,122);c.lineTo(162,122);c.lineTo(160,190);c.lineTo(96,190);c.closePath()}
  c.save();tor();c.fillStyle='#c43d2a';c.fill();c.clip()
  c.fillStyle='rgba(90,20,10,.35)';for(let x=100;x<170;x+=22)c.fillRect(x,110,9,90);for(let y=130;y<200;y+=22)c.fillRect(80,y,100,9)
  c.strokeStyle='#f2c14e';c.lineWidth=2;c.beginPath();for(let x=110;x<170;x+=22){c.moveTo(x,110);c.lineTo(x,200)}c.stroke()
  c.fillStyle='#5f86b5';c.fillRect(130,160,22,20)
  c.strokeStyle='#f6ecd8';c.setLineDash([3,4]);c.lineWidth=2;c.strokeRect(133,163,16,14);c.setLineDash([])
  c.restore();c.lineWidth=6;tor();c.stroke()
  c.lineWidth=7;c.strokeStyle='#c99a52';c.beginPath();c.moveTo(97,184);c.lineTo(159,184);c.stroke();c.strokeStyle=K;c.lineWidth=3;c.stroke()
  // sleeves: left one tied along the bar, right one waving
  const sleeve=(x0,y0,cx,cy,x1,y1)=>{
    c.lineWidth=34;c.beginPath();c.moveTo(x0,y0);c.quadraticCurveTo(cx,cy,x1,y1);c.stroke()
    c.lineWidth=22;c.strokeStyle='#c43d2a';c.stroke()
    c.lineWidth=9;c.strokeStyle='rgba(90,20,10,.3)';c.setLineDash([4,14]);c.stroke();c.setLineDash([]);c.strokeStyle=K}
  sleeve(100,134,72,134,50,134);tuft(42,134,PI,5,20,1.1)
  const a1=-.4+.08*w,a2=-1.3+.45*w,ex=158+38*C(a1),ey=134+38*S(a1),hx=ex+36*C(a2),hy=ey+36*S(a2)
  sleeve(156,134,ex+6*C(a1),ey+6*S(a1),hx,hy);tuft(hx+6*C(a2),hy+6*S(a2),a2,5,20,1.1)
  // head on a rope collar, tilting toward the wave
  c.save();c.translate(128,118);c.rotate(tl);c.translate(-128,-118)
  tuft(118,118,PI/2+.5,3,14,.5);tuft(138,118,PI/2-.5,3,14,.5)
  c.beginPath();c.arc(128,84,36,0,P);c.fillStyle='#d6b06e';c.fill();c.save();c.clip()
  c.beginPath();c.arc(122,78,36,0,P);c.fillStyle='#e8c98a';c.fill()
  c.strokeStyle='rgba(140,100,50,.25)';c.lineWidth=2;c.beginPath();for(let k=-40;k<40;k+=6){c.moveTo(128+k,40);c.lineTo(128+k,130)}c.stroke()
  c.restore();c.lineWidth=6;c.beginPath();c.arc(128,84,36,0,P);c.stroke()
  c.fillStyle='#e9a0a0';for(const x of[104,152]){c.beginPath();c.ellipse(x,94,7,4.5,0,0,P);c.fill()}
  for(const x of[114,142]){c.beginPath();c.arc(x,80,6.5,0,P);c.fillStyle=K;c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x-2,78,2,0,P);c.fill()}
  L([[128,86],[121,98],[135,98]],'#ef8a2a',4)
  c.lineWidth=4.5;c.beginPath();c.moveTo(110,102);c.quadraticCurveTo(128,116,146,102);c.stroke()
  c.lineWidth=2.5;c.beginPath();for(const u of[.25,.5,.75]){const x=110+36*u,y=102+28*u*(1-u);c.moveTo(x-3,y-3);c.lineTo(x+3,y+3);c.moveTo(x+3,y-3);c.lineTo(x-3,y+3)}c.stroke()
  // rope collar
  c.lineWidth=10;c.beginPath();c.moveTo(106,116);c.quadraticCurveTo(128,124,150,116);c.stroke();c.lineWidth=5;c.strokeStyle='#c99a52';c.stroke();c.strokeStyle=K
  // floppy felt hat with band
  c.save();c.translate(128,56);c.rotate(-.1+.05*sw)
  c.beginPath();c.ellipse(0,0,56,13,0,0,P);c.fillStyle='#6e4a2c';c.fill();c.lineWidth=6;c.stroke()
  c.beginPath();c.moveTo(-30,0);c.bezierCurveTo(-32,-30,-14,-40,4,-40);c.bezierCurveTo(22,-40,32,-24,30,0);c.quadraticCurveTo(0,6,-30,0);c.fillStyle='#86603a';c.fill();c.stroke()
  c.beginPath();c.moveTo(-31,-6);c.quadraticCurveTo(0,0,31,-6);c.lineTo(31,-14);c.quadraticCurveTo(0,-8,-31,-14);c.closePath();c.fillStyle='#ef8a2a';c.fill();c.lineWidth=4;c.stroke()
  c.restore();c.restore()
}
