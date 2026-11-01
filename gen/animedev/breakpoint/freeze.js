// beret girl carrying coffee freezes mid-step when a red breakpoint dot fires, everything paused but her darting eyes, then resumes
// keyframes [walk phase, mode, ms]: mode 0 walking, 1 hit, 2 frozen (eyes dart), 3 resume
const K=[[0,0,80],[1/12,0,80],[2/12,0,80],[.25,1,110],[.25,2,170],[.25,2,170],[.25,2,170],[.25,2,170],[.25,2,170],[.25,2,170],[.25,3,140],[4/12,0,80],[5/12,0,80],[6/12,0,80],[7/12,0,80],[8/12,0,80],[9/12,0,80],[10/12,0,80],[11/12,0,80]]
export const frames=K.length,delay=K.map(k=>k[2]),rim=4
const P=Math.PI,O='#2b2135',S=Math.sin,C=Math.cos,
B=c=>c.beginPath(),
F=(c,f,w=3)=>{c.fillStyle=f;c.fill();c.strokeStyle=O;c.lineWidth=w;c.stroke()},
E=(c,x,y,a,b,r=0)=>{B(c);c.ellipse(x,y,a,b,r,0,2*P)},
L=(c,f,w,p)=>{B(c);p();c.strokeStyle=O;c.lineWidth=w+6;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()},
eye=(c,x,y,s,k1,k2,lx=0,ly=0,r=1)=>{
  const sh=()=>{B(c);c.moveTo(x-11*s,y-7);c.bezierCurveTo(x-13*s,y+8,x-6*s,y+14,x+s,y+14);c.bezierCurveTo(x+9*s,y+14,x+13*s,y+6,x+12*s,y-8);c.bezierCurveTo(x+8*s,y-15,x-7*s,y-15,x-11*s,y-7)}
  sh();c.fillStyle='#fff';c.fill()
  c.save();sh();c.clip()
  const X=x+lx,Y=y+2+ly,g=c.createLinearGradient(0,Y-12,0,Y+12);g.addColorStop(0,k1);g.addColorStop(1,k2)
  E(c,X,Y,9.5*r,12.5*r);c.fillStyle=g;c.fill();c.lineWidth=1.5;c.strokeStyle=O;c.stroke()
  E(c,X,Y+r,4.4*r,6.5*r);c.fillStyle=O;c.fill()
  E(c,X-3.5*r,Y-4.5*r,3.6*r,4.4*r);c.fillStyle='#fff';c.fill()
  E(c,X+3.8*r,Y+5.5*r,1.9*r,1.9*r);c.fill()
  c.fillStyle='rgba(60,40,90,.2)';c.fillRect(x-15,y-16,30,9)
  c.restore()
  B(c);c.moveTo(x-12*s,y-6);c.bezierCurveTo(x-9*s,y-15,x+8*s,y-17,x+13*s,y-8);c.lineTo(x+16*s,y-6);c.lineWidth=4.6;c.strokeStyle=O;c.stroke()
  B(c);c.moveTo(x+6*s,y+13);c.quadraticCurveTo(x+10*s,y+12,x+12*s,y+8);c.lineWidth=2;c.stroke()
}
const SK='#efc29b',SH='#d9a37c',H1='#9a5a34',H2='#6e3b20',HL='#c98a5e',BR='#2c3e78',SW='#e9b23c',K1='#3d3410',K2='#8fae45'
export default(c,_,i)=>{
  const[w,m]=K[i],fr=m==1||m==2,W=w*2*P,sw=S(W),bob=Math.abs(C(W))*-4,x=118,hy=96+bob
  // ---- girl (drawn first so the freeze tint can hit only her)
  c.save();c.translate(118,244);c.scale(1.08,1.08);c.translate(-118,-238)
  // back leg / front leg
  const leg=(a,lift,o)=>{const hx=x+o,hy2=180+bob,fx=hx+S(a)*36,fy=hy2+C(a)*44-lift
    L(c,o<0?'#4a2f2a':'#5b3a33',11,()=>{c.moveTo(hx,hy2);c.lineTo(fx,fy)})
    c.save();c.translate(fx,fy);c.rotate(a*.4);B(c);c.moveTo(-8,-4);c.quadraticCurveTo(-8,8,4,8);c.lineTo(14,8);c.quadraticCurveTo(16,-2,6,-4);c.closePath();F(c,'#7a3b28',2.6);c.restore()}
  leg(-sw*.5,Math.max(0,-sw)*7,-8);leg(sw*.5,Math.max(0,sw)*7,8)
  // skirt
  B(c);c.moveTo(x-24,164+bob);c.lineTo(x-32,192+bob);c.quadraticCurveTo(x,198+bob,x+32,192+bob);c.lineTo(x+24,164+bob);c.closePath();F(c,'#4a6fb0')
  B(c);c.moveTo(x-8,170+bob);c.lineTo(x-10,193+bob);c.moveTo(x+8,170+bob);c.lineTo(x+10,193+bob);c.lineWidth=2;c.stroke()
  // back arm (screen left) swings
  const ba=sw*.45
  L(c,SW,13,()=>{c.moveTo(x-22,140+bob);c.lineTo(x-24-S(ba)*26,140+bob+C(ba)*28)})
  E(c,x-24-S(ba)*30,140+bob+C(ba)*32,7,7);F(c,SK,2.6)
  // torso sweater
  B(c);c.moveTo(x-16,134+bob);c.quadraticCurveTo(x-30,136+bob,x-28,152+bob);c.lineTo(x-26,170+bob);c.quadraticCurveTo(x,174+bob,x+26,170+bob);c.lineTo(x+28,152+bob);c.quadraticCurveTo(x+30,136+bob,x+16,134+bob);c.closePath();F(c,SW)
  B(c);c.moveTo(x-26,166+bob);c.quadraticCurveTo(x,170+bob,x+26,166+bob);c.lineWidth=2;c.stroke()
  B(c);c.moveTo(x-10,134+bob);c.lineTo(x,142+bob);c.lineTo(x+10,134+bob);c.fillStyle='#fff';c.fill();c.lineWidth=2.4;c.stroke()
  // head
  B(c);c.rect(x-7,hy+34,14,10);F(c,SK,2.5)
  B(c);c.moveTo(x-50,hy+6);c.bezierCurveTo(x-62,hy-60,x+62,hy-60,x+50,hy+6);c.bezierCurveTo(x+56,hy+30,x+50,hy+40,x+40,hy+38);c.lineTo(x-40,hy+38);c.bezierCurveTo(x-50,hy+40,x-56,hy+30,x-50,hy+6);F(c,H2)
  B(c);c.moveTo(x-46,hy-2);c.bezierCurveTo(x-46,hy-62,x+46,hy-62,x+46,hy-2);c.bezierCurveTo(x+46,hy+24,x+22,hy+44,x,hy+46);c.bezierCurveTo(x-22,hy+44,x-46,hy+24,x-46,hy-2);F(c,SK)
  c.fillStyle='rgba(255,120,110,.35)';E(c,x-26,hy+21,8,4.5);c.fill();E(c,x+30,hy+21,8,4.5);c.fill()
  // carefree smile (stays frozen)
  B(c);c.moveTo(x-1,hy+27);c.quadraticCurveTo(x+6,hy+35,x+13,hy+27);c.quadraticCurveTo(x+6,hy+30,x-1,hy+27);F(c,'#8c2f3f',2.2)
  // wavy bangs
  B(c);c.moveTo(x-50,hy+24);c.bezierCurveTo(x-62,hy-44,x-28,hy-62,x+2,hy-60);c.bezierCurveTo(x+34,hy-60,x+62,hy-40,x+50,hy+24)
  c.bezierCurveTo(x+46,hy+8,x+48,hy-2,x+40,hy-8);c.bezierCurveTo(x+36,hy+2,x+28,hy+2,x+26,hy-6);c.bezierCurveTo(x+20,hy-2,x+12,hy-4,x+10,hy-14)
  c.bezierCurveTo(x+4,hy-2,x-8,hy-2,x-10,hy-14);c.bezierCurveTo(x-14,hy-2,x-26,hy,x-28,hy-8);c.bezierCurveTo(x-34,hy,x-42,hy-2,x-42,hy-10);c.bezierCurveTo(x-48,hy,x-46,hy+10,x-50,hy+24);F(c,H1)
  c.strokeStyle=HL;c.lineWidth=3.5;B(c);c.arc(x,hy-8,44,-2.55,-2);c.stroke();B(c);c.arc(x,hy-8,44,-1.15,-.7);c.stroke()
  // beret
  c.save();c.translate(x+8,hy-50);c.rotate(.22);E(c,0,0,44,15);F(c,BR);E(c,2,-15,4,4);F(c,BR,2.4);c.restore()
  c.lineWidth=2.6;c.strokeStyle=O;for(const s of[-1,1]){B(c);c.moveTo(x+(s<0?-30:12),hy-15);c.quadraticCurveTo(x+(s<0?-21:21),hy-21+(fr&&m==2?-3:0),x+(s<0?-12:30),hy-16);c.stroke()}
  // front arm (screen right) holding mug out front
  const fa=-sw*.15,mx0=x+66+fa*16,my0=158+bob
  L(c,SW,13,()=>{c.moveTo(x+22,140+bob);c.quadraticCurveTo(x+36,162+bob,mx0-12,my0+2)})
  B(c);c.roundRect(mx0-13,my0-15,27,28,5);F(c,'#fff')
  B(c);c.arc(mx0+15,my0-1,7,-P/2,P/2);c.lineWidth=8;c.strokeStyle=O;c.stroke();c.lineWidth=3.5;c.strokeStyle='#fff';c.stroke()
  c.fillStyle='#ff6b8a';B(c);c.moveTo(mx0,my0+6);c.bezierCurveTo(mx0-7,my0,mx0-2,my0-6,mx0,my0-2);c.bezierCurveTo(mx0+2,my0-6,mx0+7,my0,mx0,my0+6);c.fill()
  if(!(m>0||i==11)){E(c,mx0+.5,my0-14,11,3.2);c.fillStyle='#7a4422';c.fill()}
  E(c,mx0-12,my0+2,7,7);F(c,SK,2.6)
  // coffee splash: jolts up at the hit, hangs frozen in the air, drops back on resume
  if(m>0||i==11){const k=i==11
    if(!k){B(c);c.moveTo(mx0-9,my0-14);c.bezierCurveTo(mx0-12,my0-30,mx0-4,my0-44,mx0+2,my0-58);c.bezierCurveTo(mx0+8,my0-56,mx0+6,my0-46,mx0+2,my0-40)
      c.bezierCurveTo(mx0+10,my0-44,mx0+16,my0-52,mx0+22,my0-50);c.bezierCurveTo(mx0+20,my0-36,mx0+12,my0-24,mx0+10,my0-14);c.closePath();F(c,'#8a4b25',2.6)
      c.strokeStyle='#c98450';c.lineWidth=2.4;B(c);c.moveTo(mx0-5,my0-20);c.quadraticCurveTo(mx0-6,my0-34,mx0,my0-46);c.stroke()}
    for(const[dx,dy,r]of k?[[-4,-34,3.4],[8,-26,3],[0,-44,2.6]]:[[-6,-70,4],[12,-66,3.4],[28,-60,3.2],[-14,-52,2.8],[30,-42,2.6]]){E(c,mx0+dx,my0+dy,r,r*1.2);F(c,"#8a4b25",2)}}
  // ---- freeze tint over the girl only
  if(fr){c.save();c.globalCompositeOperation='source-atop';c.fillStyle='rgba(70,130,255,.32)';c.fillRect(0,0,256,256);c.restore()}
  // eyes on top of the tint: only thing still moving while paused
  const lx=m==2?[-6,-6,5,5,0,6][i-4]:3,ly=m==2?[0,2,0,2,0,-1][i-4]:0
  eye(c,x-20,hy+6,-1,K1,K2,lx,ly);eye(c,x+22,hy+6,1,K1,K2,lx,ly)
  if(m==2&&i>6){c.save();c.translate(x+50,hy-6);B(c);c.moveTo(0,-10);c.quadraticCurveTo(7,0,0,6);c.quadraticCurveTo(-7,0,0,-10);F(c,'#9fd8ff',2.2);c.restore()}
  c.restore()
  // ---- breakpoint dot + debugger badge
  const dx=34,dy=58
  if(m==1){c.lineWidth=3;c.strokeStyle='#ff4d5a';E(c,dx,dy,24,24);c.stroke()}
  E(c,dx,dy,fr?17:15,fr?17:15);F(c,'#f23b4c',3)
  if(fr||m==3){
    // execution arrow at the dot
    if(fr){B(c);c.moveTo(dx-8,dy-6);c.lineTo(dx+3,dy-6);c.lineTo(dx+3,dy-12);c.lineTo(dx+13,dy);c.lineTo(dx+3,dy+12);c.lineTo(dx+3,dy+6);c.lineTo(dx-8,dy+6);c.closePath();F(c,'#ffd23a',2.4)}
    const bx=206,by=44,sc=m==1?.7:1
    c.save();c.translate(bx,by);c.scale(sc,sc);B(c);c.roundRect(-26,-18,52,36,12);F(c,m==3?'#3fbf6a':'#ffd23a',3)
    c.fillStyle=O;if(m==3){B(c);c.moveTo(-7,-10);c.lineTo(11,0);c.lineTo(-7,10);c.closePath();c.fill()}else{B(c);c.roundRect(-11,-10,8,20,2);c.roundRect(3,-10,8,20,2);c.fill()}
    c.restore()}
}
