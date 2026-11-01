// girl with split-dye black and white hair and round glasses earnestly explaining code to a rubber duck, which tilts its head in confusion
export const frames=24,delay=90,rim=4
const P=Math.PI,O='#2b2135',S=Math.sin,
B=c=>c.beginPath(),
F=(c,f,w=3)=>{c.fillStyle=f;c.fill();c.strokeStyle=O;c.lineWidth=w;c.stroke()},
E=(c,x,y,a,b,r=0)=>{B(c);c.ellipse(x,y,a,b,r,0,2*P)},
L=(c,f,w,p)=>{B(c);p();c.strokeStyle=O;c.lineWidth=w+6;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()},
cl=v=>v<0?0:v>1?1:v,ez=v=>(v=cl(v),v*v*(3-2*v)),
// big anime eye; s=1 right eye, -1 left eye; k1/k2 iris top/bottom; lx,ly look
eye=(c,x,y,s,k1,k2,lx=0,ly=0)=>{
  const sh=()=>{B(c);c.moveTo(x-11*s,y-7);c.bezierCurveTo(x-13*s,y+8,x-6*s,y+14,x+s,y+14);c.bezierCurveTo(x+9*s,y+14,x+13*s,y+6,x+12*s,y-8);c.bezierCurveTo(x+8*s,y-15,x-7*s,y-15,x-11*s,y-7)}
  sh();c.fillStyle='#fff';c.fill()
  c.save();sh();c.clip()
  const X=x+lx,Y=y+2+ly,g=c.createLinearGradient(0,Y-12,0,Y+12);g.addColorStop(0,k1);g.addColorStop(1,k2)
  E(c,X,Y,9.5,12.5);c.fillStyle=g;c.fill();c.lineWidth=1.5;c.strokeStyle=O;c.stroke()
  E(c,X,Y+1,4.4,6.5);c.fillStyle=O;c.fill()
  E(c,X-3.5,Y-4.5,3.6,4.4);c.fillStyle='#fff';c.fill()
  E(c,X+3.8,Y+5.5,1.9,1.9);c.fill()
  c.fillStyle='rgba(60,40,90,.2)';c.fillRect(x-15,y-16,30,9)
  c.restore()
  B(c);c.moveTo(x-12*s,y-6);c.bezierCurveTo(x-9*s,y-15,x+8*s,y-17,x+13*s,y-8);c.lineTo(x+16*s,y-6);c.lineWidth=4.6;c.strokeStyle=O;c.stroke()
  B(c);c.moveTo(x+6*s,y+13);c.quadraticCurveTo(x+10*s,y+12,x+12*s,y+8);c.lineWidth=2;c.stroke()
}
const SK='#ffe4d4',SH='#f3c2ae',HB='#1d1b24',HB2='#2e2c3a',HW='#f5f5fa',HW2='#d4d5e2'
export default(c,t,i)=>{
  const T=t*2*P,
    tl=ez((t-.12)/.1)-ez((t-.42)/.08)-ez((t-.62)/.1)+ez((t-.92)/.08), // duck tilt -1..1
    talk=Math.abs(S(T*7))*(t>.5&&t<.58?0:1),wag=S(T*4)*.22,bob=0
  // desk
  B(c);c.roundRect(14,212,232,22,8);F(c,'#d39a63')
  B(c);c.moveTo(22,219);c.lineTo(238,219);c.strokeStyle='#e9bf8f';c.lineWidth=3;c.stroke()
  // ---- girl
  const x=92,y=98+bob
  // split-dye hair: black on the left, white on the right
  const sp=(pa,k1,k2)=>{pa();c.fillStyle=k1;c.fill();c.save();pa();c.clip();c.fillStyle=k2;c.fillRect(x+3,y-90,140,200);c.restore();pa();c.lineWidth=3;c.strokeStyle=O;c.stroke()}
  // back hair, shoulder length with flicked ends
  sp(()=>{B(c);c.moveTo(x-50,y-4);c.bezierCurveTo(x-60,y-70,x+60,y-70,x+52,y-4);c.bezierCurveTo(x+56,y+24,x+58,y+46,x+56,y+58);c.quadraticCurveTo(x+64,y+66,x+72,y+62);c.quadraticCurveTo(x+58,y+72,x+40,y+64);c.lineTo(x-40,y+64);c.quadraticCurveTo(x-58,y+72,x-72,y+62);c.quadraticCurveTo(x-62,y+64,x-56,y+58);c.bezierCurveTo(x-58,y+44,x-56,y+22,x-50,y-4)},HB2,HW2)
  // body
  B(c);c.moveTo(x-18,y+46);c.quadraticCurveTo(x-48,y+50,x-54,y+76);c.lineTo(x-58,y+120);c.lineTo(x+58,y+120);c.lineTo(x+54,y+76);c.quadraticCurveTo(x+48,y+50,x+18,y+46);c.closePath();F(c,'#efe0c2')
  B(c);c.moveTo(x-12,y+46);c.lineTo(x,y+70);c.lineTo(x+12,y+46);c.fillStyle='#fff';c.fill();c.lineWidth=2.5;c.stroke()
  B(c);c.moveTo(x,y+70);c.lineTo(x,y+118);c.lineWidth=2.5;c.stroke()
  for(const k of[84,100])E(c,x+6,y+k-6,2.8,2.8),F(c,'#c98a54',1.8)
  // left arm resting on desk
  L(c,'#efe0c2',17,()=>{c.moveTo(x-46,y+66);c.quadraticCurveTo(x-60,y+96,x-50,y+106);c.lineTo(x-14,y+108)})
  E(c,x-6,y+108,9,7);F(c,SK)
  // neck + head
  B(c);c.rect(x-8,y+36,16,14);F(c,SK,2.5)
  c.save();c.translate(x,y+30);c.rotate(.06);c.translate(-x,-y-30)
  B(c);c.moveTo(x-46,y-2);c.bezierCurveTo(x-46,y-62,x+46,y-62,x+46,y-2);c.bezierCurveTo(x+46,y+24,x+22,y+44,x,y+46);c.bezierCurveTo(x-22,y+44,x-46,y+24,x-46,y-2);F(c,SK)
  // bangs shape
  const bang=(d=0)=>{B(c);c.moveTo(x-42,y+14);c.quadraticCurveTo(x-46,y+40,x-44,y+54);c.quadraticCurveTo(x-50,y+64,x-64,y+62);c.quadraticCurveTo(x-56,y+52,x-56,y+30)
    c.bezierCurveTo(x-66,y-40,x-30,y-64,x+4,y-62);c.bezierCurveTo(x+44,y-62,x+62,y-30,x+56,y+30);c.quadraticCurveTo(x+56,y+52,x+66,y+62);c.quadraticCurveTo(x+52,y+64,x+46,y+54);c.quadraticCurveTo(x+48,y+30,x+44,y+12)
    c.quadraticCurveTo(x+46,y+4+d,x+44,y-6+d);c.quadraticCurveTo(x+40,y-4+d,x+34,y+4+d);c.quadraticCurveTo(x+30,y-12+d,x+22,y-20+d)
    c.quadraticCurveTo(x+16,y-8+d,x+6,y-2+d);c.quadraticCurveTo(x+4,y-16+d,x-6,y-22+d);c.quadraticCurveTo(x-14,y-6+d,x-28,y+0+d)
    c.quadraticCurveTo(x-30,y-12+d,x-34,y-16+d);c.quadraticCurveTo(x-40,y+4+d,x-42,y+14+d);c.closePath()}
  c.save();B(c);c.moveTo(x-46,y-2);c.bezierCurveTo(x-46,y-62,x+46,y-62,x+46,y-2);c.bezierCurveTo(x+46,y+24,x+22,y+44,x,y+46);c.bezierCurveTo(x-22,y+44,x-46,y+24,x-46,y-2);c.clip()
  c.translate(2,6);bang();c.fillStyle=SH;c.fill();c.restore()
  // blush
  c.fillStyle='rgba(255,120,130,.35)';E(c,x-27,y+22,9,5);c.fill();E(c,x+29,y+22,9,5);c.fill()
  // eyes look right toward duck
  const bl=t>.52&&t<.56
  if(bl){for(const s of[-1,1]){B(c);c.moveTo(x+21*s-11,y+8);c.quadraticCurveTo(x+21*s,y+13,x+21*s+11,y+8);c.lineWidth=3.5;c.strokeStyle=O;c.stroke()}}
  else{eye(c,x-20,y+6,-1,'#7a3e0e','#f5b640',3.5,0);eye(c,x+22,y+6,1,'#7a3e0e','#f5b640',3.5,0)}
  // glasses
  c.lineWidth=2.4;c.strokeStyle='#6b3d5e'
  E(c,x-20,y+8,16,15);c.stroke();E(c,x+22,y+8,16,15);c.stroke()
  B(c);c.moveTo(x-4,y+6);c.quadraticCurveTo(x+1,y+2,x+6,y+6);c.stroke()
  c.fillStyle='rgba(255,255,255,.35)';B(c);c.moveTo(x+30,y-2);c.lineTo(x+34,y+2);c.lineTo(x+26,y+16);c.lineTo(x+22,y+12);c.fill()
  // mouth talking
  const m=1+talk*7
  B(c);c.moveTo(x-6,y+30);c.quadraticCurveTo(x+1,y+28,x+8,y+30);c.quadraticCurveTo(x+7,y+30+m,x+1,y+30+m);c.quadraticCurveTo(x-5,y+30+m,x-6,y+30);F(c,'#8c2f3f',2.2)
  if(m>4){E(c,x+1,y+28+m,4,2.2);c.fillStyle='#f27d86';c.fill()}
  // bangs
  sp(bang,HB,HW)
  c.lineWidth=3.5;c.strokeStyle='#6f7596';B(c);c.arc(x+2,y-8,44,-2.55,-1.75);c.stroke();c.strokeStyle='#c5c7da';B(c);c.arc(x+2,y-8,44,-1.45,-.95);c.stroke()
  c.lineWidth=2;c.strokeStyle='#4a4d63';B(c);c.moveTo(x-50,y+20);c.quadraticCurveTo(x-52,y+40,x-56,y+56);c.stroke();c.strokeStyle='#c5c7da';B(c);c.moveTo(x+50,y+20);c.quadraticCurveTo(x+52,y+40,x+56,y+56);c.stroke()
  // brows over bangs (earnest, raised)
  c.lineWidth=2.6;c.strokeStyle=O
  B(c);c.moveTo(x-31,y-12);c.quadraticCurveTo(x-22,y-18,x-12,y-19);c.stroke()
  B(c);c.moveTo(x+13,y-19);c.quadraticCurveTo(x+23,y-18,x+32,y-12);c.stroke()
  // hair clip
  c.save();c.translate(x-36,y-30);c.rotate(-.6);B(c);c.roundRect(-10,-4,20,8,4);F(c,'#ff8fa8',2.5);c.restore()
  c.restore()
  // explaining arm with raised finger
  c.save();c.translate(x+44,y+72);c.rotate(-.5+wag)
  L(c,'#efe0c2',17,()=>{c.moveTo(0,0);c.quadraticCurveTo(30,4,40,-26)})
  c.translate(40,-32);c.rotate(.3)
  E(c,0,0,9,8);F(c,SK)
  L(c,SK,6,()=>{c.moveTo(0,-4);c.lineTo(0,-16)})
  E(c,0,-3,3,4);c.fillStyle=SK;c.fill()
  c.restore()
  // ---- duck
  const dx=192,dy=212
  B(c);c.moveTo(dx-34,dy-22);c.bezierCurveTo(dx-36,dy-2,dx-20,dy+1,dx,dy+1);c.bezierCurveTo(dx+26,dy+1,dx+40,dy-8,dx+42,dy-36);c.quadraticCurveTo(dx+30,dy-30,dx+20,dy-30);c.bezierCurveTo(dx,dy-34,dx-30,dy-40,dx-34,dy-22);F(c,'#ffd23a')
  B(c);c.moveTo(dx-6,dy-18);c.quadraticCurveTo(dx+10,dy-6,dx+24,dy-20);c.lineWidth=2.5;c.stroke()
  c.save();c.translate(dx-2,dy-34);c.rotate(tl*.42)
  E(c,0,-20,22,21);F(c,'#ffd23a')
  B(c);c.moveTo(-18,-20);c.quadraticCurveTo(-36,-22,-38,-14);c.quadraticCurveTo(-30,-6,-16,-10);F(c,'#ff8a2a',2.5)
  B(c);c.moveTo(-36,-15);c.lineTo(-20,-15);c.lineWidth=2;c.stroke()
  E(c,-6,-26,3.6,4.6);c.fillStyle=O;c.fill();E(c,-7,-28,1.4,1.4);c.fillStyle='#fff';c.fill()
  c.restore()
  // ? pops when tilted
  const q=Math.abs(tl)
  if(q>.05){c.save();c.translate(dx+30,dy-92);c.scale(q,q);c.rotate(tl*.25);c.font='bold 30px DejaVu Sans';c.textAlign='center';c.textBaseline='middle';c.lineWidth=5;c.strokeStyle=O;c.strokeText('?',0,0);c.fillStyle='#fff';c.fillText('?',0,0);c.restore()}
  // speech bubble with code lines being typed
  const bs=ez(t/.07)*(1-ez((t-.86)/.1))
  if(bs>.01){c.save();c.translate(186,58);c.scale(bs,bs)
    B(c);c.roundRect(-48,-30,96,56,14);c.moveTo(-30,24);F(c,'#fff')
    B(c);c.moveTo(-34,25);c.lineTo(-52,40);c.lineTo(-20,25);c.fillStyle='#fff';c.fill();c.lineWidth=3;c.stroke();c.fillRect(-33,22,12,5)
    const ln=[['#b05ce0',-36,46],['#3b8bea',-28,52],['#f08a24',-28,34],['#3b8bea',-36,40]]
    ln.forEach(([k,a,w],j)=>{const p=cl((t-.08-j*.12)/.11)*w;if(p>0){B(c);c.moveTo(a,-18+j*11);c.lineTo(a+p,-18+j*11);c.strokeStyle=k;c.lineWidth=5.5;c.stroke()}})
    c.restore()}
}
