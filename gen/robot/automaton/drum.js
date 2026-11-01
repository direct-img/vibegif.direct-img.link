// antique brass clockwork drummer automaton in a red tunic and tall plumed shako hat, standing on a wooden pedestal beating a snare drum with alternating sticks, gears turning in its open chest window
export const frames=16,delay=75,rim=3
const P=Math.PI,{sin,cos}=Math
const B='#d9a441',BH='#f6d47c',BS='#a8742a',BD='#6b4618',RD='#c7362b',RS='#8f241d'
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const ln=(c,p,w,col)=>{c.beginPath();p.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.strokeStyle='#111';c.lineWidth=w+7;c.stroke();c.strokeStyle=col;c.lineWidth=w;c.stroke();c.strokeStyle='#111'}
const gear=(c,x,y,r,n,a,col)=>{c.beginPath();for(let k=0;k<n*4;k++){const q=a+k*P/(n*2),R=k%4<2?r:r*.74;c.lineTo(x+R*cos(q),y+R*sin(q))}c.closePath()
  c.fillStyle=col;c.fill();c.lineWidth=2.5;c.stroke();c.beginPath();c.arc(x,y,r*.28,0,2*P);c.fillStyle=BD;c.fill();c.stroke()}
const lift=f=>f<.6?sin(P/2*f/.6):cos(P/2*(f-.6)/.4)
export default(c,t,i)=>{
  c.translate(128,252);c.scale(.95,.95);c.translate(-128,-252)
  const nod=i%4==0?3:i%4==1?1.5:0,hit=[i%8==0,i%8==4]
  // pedestal
  c.lineWidth=6
  c.beginPath();c.ellipse(128,240,64,10,0,0,P);c.lineTo(64,228);c.ellipse(128,228,64,10,0,P,0,true);c.closePath();c.fillStyle='#7a4a26';c.fill();c.stroke()
  c.beginPath();c.ellipse(128,228,64,10,0,0,2*P);c.fillStyle='#a8683a';c.fill();c.stroke()
  c.fillStyle=BH;c.fillRect(70,233,116,3)
  // legs
  for(const s of[-1,1]){rr(c,128+s*14-9,186,18,40,4);c.fillStyle='#f3efe6';c.fill();c.stroke()
    c.beginPath();c.ellipse(128+s*16,226,13,6,0,P,2*P);c.closePath();c.fillStyle='#2a2522';c.fill();c.stroke()
    c.fillStyle=RD;c.fillRect(128+s*14-1.5,190,3,30)}
  // torso
  c.beginPath();c.moveTo(98,108);c.lineTo(158,108);c.lineTo(152,180);c.lineTo(104,180);c.closePath()
  c.fillStyle=RD;c.fill();c.save();c.clip();c.fillStyle=RS;c.fillRect(146,100,20,90);c.restore();c.lineWidth=7;c.stroke()
  // cross belts
  c.lineWidth=11;c.strokeStyle='#111';c.beginPath();c.moveTo(102,110);c.lineTo(150,176);c.moveTo(154,110);c.lineTo(106,176);c.stroke()
  c.lineWidth=5;c.strokeStyle='#f3efe6';c.stroke();c.strokeStyle='#111'
  // chest window with gears
  c.beginPath();c.arc(128,136,20,0,2*P);c.fillStyle=B;c.fill();c.lineWidth=6;c.stroke()
  c.beginPath();c.arc(128,136,15,0,2*P);c.fillStyle='#2b1d10';c.fill();c.lineWidth=3;c.stroke()
  c.save();c.clip()
  gear(c,123,140,11,10,-2*P*t,B);gear(c,136.5,129,7.5,6,2*P*t*10/6+.3,BH);c.restore()
  c.strokeStyle=BH;c.lineWidth=2;c.beginPath();c.arc(128,136,17.5,-2.4,-1);c.stroke();c.strokeStyle='#111'
  for(let k=0;k<8;k++){c.fillStyle=BD;c.beginPath();c.arc(128+20*cos(k*P/4),136+20*sin(k*P/4),1.6,0,2*P);c.fill()}
  // drum
  const dj=hit[0]||hit[1]?1:0,dy=170+dj
  c.lineWidth=6
  c.beginPath();c.ellipse(128,dy+34,50,14,0,0,P);c.lineTo(78,dy);c.ellipse(128,dy,50,14,0,P,0,true);c.closePath();c.fillStyle='#f3efe6';c.fill();c.stroke()
  c.save();c.clip();c.fillStyle='#e0dacd';c.fillRect(156,dy,30,52)
  c.strokeStyle=RD;c.lineWidth=3;c.beginPath();for(let k=0;k<=10;k++){const x=78+k*10,y=k%2?dy+30+14*sin(P*(x-78)/100):dy+5+14*sin(P*(x-78)/100);k?c.lineTo(x,y):c.moveTo(x,y)}c.stroke()
  c.fillStyle=RD;c.beginPath();c.ellipse(128,dy+34,50,14,0,0,P);c.lineTo(78,dy+27);c.ellipse(128,dy+27,50,14,0,P,0,true);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.ellipse(128,dy+34,50,14,0,0,P);c.stroke()
  c.beginPath();c.ellipse(128,dy,50,14,0,0,2*P);c.fillStyle=RD;c.fill();c.stroke()
  c.beginPath();c.ellipse(128,dy,44,11,0,0,2*P);c.fillStyle='#f7f0dc';c.fill();c.lineWidth=3;c.stroke()
  for(let k=0;k<6;k++){const x=84+k*17.6;c.fillStyle=B;c.beginPath();c.arc(x,dy+3+10*sin(P*(x-78)/100),2.2,0,2*P);c.fill()}
  // epaulettes
  for(const s of[-1,1]){const X=x=>128-s*(x-128)
    c.beginPath();c.ellipse(X(99),111,13,7,s*.2,0,2*P);c.fillStyle=B;c.fill();c.lineWidth=5;c.stroke()
    c.strokeStyle=BS;c.lineWidth=2;for(let k=-2;k<=2;k++){c.beginPath();c.moveTo(X(99)+k*4,117);c.lineTo(X(99)+k*4.5,123);c.stroke()}c.strokeStyle='#111'
  }
  // arms with sticks
  for(const s of[-1,1]){
    const f=((i+(s<0?4:0))%8)/8,h=lift(f),X=x=>128-s*(x-128)
    const A=v=>s<0?v:P-v,sx=X(99),sy=114
    const al=A(2.5+.1*h),ex=sx+28*cos(al),ey2=sy+28*sin(al)
    const be=A(.5-2*h),hx=ex+25*cos(be),hy2=ey2+25*sin(be)
    const a=A(1-3*h*h),tx=hx+36*cos(a),ty=hy2+36*sin(a),bx=hx-6*cos(a),by=hy2-6*sin(a)
    ln(c,[[sx,sy],[ex,ey2],[hx,hy2]],11,RD)
    c.beginPath();c.arc(ex,ey2,4,0,2*P);c.fillStyle=B;c.fill();c.lineWidth=2.5;c.stroke()
    ln(c,[[bx,by],[tx,ty]],4,'#c98d4c')
    c.beginPath();c.arc(tx,ty,4.5,0,2*P);c.fillStyle='#e9c58f';c.fill();c.lineWidth=3;c.stroke()
    c.beginPath();c.arc(ex+(hx-ex)*.78,ey2+(hy2-ey2)*.78,5.5,0,2*P);c.fillStyle=B;c.fill();c.lineWidth=4;c.stroke()
    c.beginPath();c.arc(hx,hy2,7.5,0,2*P);c.fillStyle='#f7f3ea';c.fill();c.lineWidth=5;c.stroke()
    if(f==0){c.lineWidth=3;for(const q of[-.3,.25,P-.25,P+.3]){c.beginPath();c.moveTo(tx+9*cos(q),ty+2+5*sin(q));c.lineTo(tx+17*cos(q),ty+2+9*sin(q));c.stroke()}}
  }
  // neck + head
  rr(c,120,98,16,14,3);c.fillStyle=BS;c.fill();c.lineWidth=5;c.stroke()
  const hy=86+nod*.7,ey=hy+2,lk=hit[0]?2:hit[1]?-2:0
  c.beginPath();c.ellipse(128,hy,20,22,0,0,2*P);c.fillStyle=B;c.fill()
  c.save();c.clip();c.fillStyle=BS;c.beginPath();c.ellipse(149,hy+4,10,24,0,0,2*P);c.fill();c.fillStyle=BH;c.beginPath();c.ellipse(116,hy+8,4,7,.3,0,2*P);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.ellipse(128,hy,20,22,0,0,2*P);c.stroke()
  c.fillStyle='#ff8a7a';for(const s of[-1,1]){c.beginPath();c.arc(128+s*12,ey+7,4,0,2*P);c.fill()}
  for(const s of[-1,1]){c.beginPath();c.arc(128+s*8,ey,4.5,0,2*P);c.fillStyle='#fff8e6';c.fill();c.lineWidth=2.5;c.stroke()
    c.fillStyle='#111';c.beginPath();c.arc(128+s*8+lk,ey,2.3,0,2*P);c.fill()}
  c.beginPath();c.arc(128,ey+6,2.6,0,2*P);c.fillStyle=BH;c.fill();c.lineWidth=2;c.stroke()
  c.strokeStyle='#3b2412';c.lineWidth=3
  for(const s of[-1,1]){c.beginPath();c.moveTo(128,ey+10);c.quadraticCurveTo(128+s*6,ey+13,128+s*10,ey+10);c.quadraticCurveTo(128+s*13,ey+7,128+s*10,ey+6.5);c.stroke()}
  c.strokeStyle='#111';c.lineWidth=2;c.beginPath();c.moveTo(121,ey+16+nod*.3);c.lineTo(135,ey+16+nod*.3);c.stroke()
  // shako hat with plume
  const hb=hy-10
  c.lineWidth=6;c.beginPath();c.moveTo(109,hb);c.lineTo(106,hb-36);c.lineTo(150,hb-36);c.lineTo(147,hb);c.closePath();c.fillStyle='#1e1e2a';c.fill();c.stroke()
  c.fillStyle=RD;c.fillRect(107,hb-11,42,6);c.fillStyle=B;c.fillRect(107,hb-36,42,5)
  c.beginPath();c.moveTo(128,hb-29);for(let k=1;k<=8;k++){const r=k%2?11:6,a=-P/2+k*P/4;c.lineTo(128+r*cos(a)*.85,hb-21+r*sin(a))}c.closePath();c.fillStyle=B;c.fill();c.lineWidth=3;c.stroke()
  c.beginPath();c.ellipse(128,hb,22,6.5,0,0,P);c.closePath();c.fillStyle='#111';c.fill()
  const pw=.14*sin(2*P*4*t-1.2)+.05,px=128,py=hb-40
  c.save();c.translate(px,py);c.rotate(pw);c.beginPath();c.moveTo(0,4);c.bezierCurveTo(-13,-10,-9,-30,2,-40);c.bezierCurveTo(12,-28,12,-10,0,4)
  c.fillStyle='#f3efe6';c.fill();c.lineWidth=5;c.stroke();c.beginPath();c.moveTo(0,2);c.bezierCurveTo(-7,-8,-5,-20,1,-27);c.bezierCurveTo(7,-19,7,-8,0,2);c.fillStyle=RD;c.fill();c.restore()
  c.beginPath();c.arc(px,py+2,4.5,0,2*P);c.fillStyle=B;c.fill();c.lineWidth=3;c.stroke()
}
