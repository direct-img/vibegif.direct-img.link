// curly-puff girl hugs her sticker-covered laptop and gives a smug shrug: works on my machine
export const frames=20,delay=90,rim=4
const P=Math.PI,O='#2b2135',S=Math.sin,C=Math.cos,
B=c=>c.beginPath(),
F=(c,f,w=3)=>{c.fillStyle=f;c.fill();c.strokeStyle=O;c.lineWidth=w;c.stroke()},
E=(c,x,y,a,b,r=0)=>{B(c);c.ellipse(x,y,a,b,r,0,2*P)},
L=(c,f,w,p)=>{B(c);p();c.strokeStyle=O;c.lineWidth=w+6;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()},
cl=v=>v<0?0:v>1?1:v,ez=v=>(v=cl(v),v*v*(3-2*v)),mx=(a,b,u)=>a+(b-a)*u,
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
const SK='#7b4a2d',H1='#2a1f22',H2='#1a1214',HL='#5a464c',K1='#3a1606',K2='#d98a3e',HD='#b9a3f0',HD2='#9a82d8'
// bumpy curly outline around a centre
const curl=(c,x,y,r,n,k)=>{B(c);for(let j=0;j<=n;j++){const a=j/n*2*P,a2=(j+.5)/n*2*P;if(!j)c.moveTo(x+C(a)*r,y+S(a)*r*k);c.quadraticCurveTo(x+C(a2)*r*1.16,y+S(a2)*r*1.16*k,x+C(a+2*P/n)*r,y+S(a+2*P/n)*r*k)}c.closePath()}
export default(c,t,i)=>{
  const sh=ez((t-.25)/.12)*(1-ez((t-.78)/.12)),bo=sh>.9?S((t-.37)/.41*P*3)*1.5:0,
    x=100,y=126-sh*3+bo,su=sh*9 // shoulder rise
  // ---- girl
  // curly puff
  curl(c,x+2,y-74,30,11,.9);F(c,H1)
  c.strokeStyle=HL;c.lineWidth=2.4;for(const[a,b]of[[-14,-84],[8,-90],[18,-72],[-4,-66]]){B(c);c.arc(x+a,y+b,5,0,4.2);c.stroke()}
  // legs + sneakers
  for(const s of[-1,1]){L(c,'#3d3350',11,()=>{c.moveTo(x+11*s,y+80);c.lineTo(x+13*s,y+98)})
    B(c);c.moveTo(x+13*s-12,y+112);c.quadraticCurveTo(x+13*s-12,y+96,x+13*s,y+96);c.quadraticCurveTo(x+13*s+13,y+98,x+13*s+13,y+112);c.closePath();F(c,'#fff',2.6)
    B(c);c.moveTo(x+13*s-11,y+106);c.lineTo(x+13*s+12,y+106);c.lineWidth=3;c.strokeStyle='#ff8a3d';c.stroke()}
  // oversized hoodie
  B(c);c.moveTo(x-18,y+40-su*.3);c.quadraticCurveTo(x-38,y+38-su,x-38,y+58-su*.5);c.lineTo(x-36,y+86);c.quadraticCurveTo(x,y+92,x+36,y+86);c.lineTo(x+38,y+58-su*.5);c.quadraticCurveTo(x+38,y+38-su,x+18,y+40-su*.3);c.closePath();F(c,HD)
  B(c);c.moveTo(x-36,y+80);c.quadraticCurveTo(x,y+86,x+36,y+80);c.lineWidth=2.4;c.strokeStyle=O;c.stroke()
  // head
  B(c);c.rect(x-7,y+34,14,10);F(c,SK,2.5)
  c.save();c.translate(x,y+40);c.rotate(-sh*.13);c.translate(-x,-y-40)
  curl(c,x,y-14,50,16,.92);F(c,H1)
  B(c);c.moveTo(x-46,y-2);c.bezierCurveTo(x-46,y-62,x+46,y-62,x+46,y-2);c.bezierCurveTo(x+46,y+24,x+22,y+44,x,y+46);c.bezierCurveTo(x-22,y+44,x-46,y+24,x-46,y-2);F(c,SK)
  // hairline curls framing the face
  B(c);c.moveTo(x-46,y+8);c.bezierCurveTo(x-50,y-40,x-30,y-56,x,y-56);c.bezierCurveTo(x+30,y-56,x+50,y-40,x+46,y+8);c.quadraticCurveTo(x+40,y-8,x+36,y-14);
  for(let k=0;k<8;k++){const a=x+36-(k+1)*9,b=y-20-S((k+.5)/8*P)*6;c.quadraticCurveTo(a+4.5,b+8,a,b)}
  c.quadraticCurveTo(x-42,y-8,x-46,y+8);F(c,H1)
  c.strokeStyle=HL;c.lineWidth=3;B(c);c.arc(x,y-14,40,-2.5,-2.05);c.stroke();B(c);c.arc(x,y-14,40,-1.1,-.7);c.stroke()
  // yellow headband
  B(c);c.moveTo(x-44,y-28);c.quadraticCurveTo(x,y-60,x+44,y-28);c.lineWidth=10;c.strokeStyle=O;c.stroke();c.lineWidth=5.5;c.strokeStyle='#ffcf3a';c.stroke()
  c.fillStyle='rgba(255,120,120,.35)';E(c,x-27,y+21,8,4.5);c.fill();E(c,x+27,y+21,8,4.5);c.fill()
  // smug eyes: half-lidded, then content closed curves on the shrug
  if(sh>.5){c.lineWidth=3.6;c.strokeStyle=O;for(const s of[-1,1]){B(c);c.moveTo(x+21*s-11,y+5);c.quadraticCurveTo(x+21*s,y+13,x+21*s+11,y+5);c.stroke()}}
  else for(const s of[-1,1]){eye(c,x+21*s,y+6,s,K1,K2,1,3,.9);B(c);c.moveTo(x+21*s-15,y+3);c.lineTo(x+21*s+15,y+3);c.lineTo(x+21*s+15,y-14);c.lineTo(x+21*s-15,y-14);c.fillStyle=SK;c.fill()
    B(c);c.moveTo(x+21*s-13,y+3);c.quadraticCurveTo(x+21*s,y+1,x+21*s+14,y+3);c.lineWidth=4.4;c.strokeStyle=O;c.stroke()}
  // smirk
  B(c);c.moveTo(x-6,y+29);c.quadraticCurveTo(x+3,y+34,x+10,y+26);c.lineWidth=2.6;c.strokeStyle=O;c.stroke()
  // brows: raised on the shrug
  c.lineWidth=2.6;for(const s of[-1,1]){B(c);c.moveTo(x+31*s,y-10-sh*6);c.quadraticCurveTo(x+22*s,y-15-sh*8,x+12*s,y-12-sh*5);c.stroke()}
  c.restore()
  // laptop hugged against her chest (left arm wraps it)
  c.save();c.translate(x-10,y+64);c.rotate(-.12)
  B(c);c.roundRect(-30,-22,58,42,6);F(c,'#c9ced8')
  B(c);c.moveTo(-26,16);c.lineTo(24,16);c.lineWidth=2;c.strokeStyle='#8a90a0';c.stroke()
  // stickers
  B(c);c.moveTo(-14,-6);c.bezierCurveTo(-24,-14,-22,-22,-14,-16);c.bezierCurveTo(-6,-22,-4,-14,-14,-6);F(c,'#ff5f86',2)
  B(c);c.roundRect(2,-16,20,13,3);F(c,'#3fbf6a',2);c.fillStyle='#fff';c.font='bold 9px DejaVu Sans Mono';c.textAlign='center';c.textBaseline='middle';c.fillText('</>',12,-9)
  E(c,-4,8,7,6);F(c,'#ffcf3a',2);c.fillStyle=O;E(c,-6,7,1.2,1.2);c.fill();E(c,-2,7,1.2,1.2);c.fill()
  c.restore()
  L(c,HD,14,()=>{c.moveTo(x-34,y+50-su*.6);c.quadraticCurveTo(x-48,y+76,x-24,y+84);c.lineTo(x+4,y+80)})
  E(c,x+8,y+78,8,7);F(c,SK,2.6)
  // shrugging right arm: palm up, rises with the shoulder
  const hx=mx(x+42,x+66,sh),hy2=mx(y+84,y+38,sh)
  L(c,HD,14,()=>{c.moveTo(x+32,y+50-su*.6);c.quadraticCurveTo(mx(x+48,x+60,sh),mx(y+76,y+62,sh),hx,hy2+4)})
  B(c);c.moveTo(hx-10,hy2-1);c.quadraticCurveTo(hx-10,hy2+10,hx+2,hy2+9);c.lineTo(hx+16,hy2+3);c.quadraticCurveTo(hx+20,hy2,hx+16,hy2-3);c.lineTo(hx+6,hy2-1);c.quadraticCurveTo(hx+4,hy2-9,hx-1,hy2-7);c.quadraticCurveTo(hx-2,hy2-2,hx-10,hy2-1);F(c,SK,2.6)
  B(c);c.moveTo(hx+5,hy2+3);c.lineTo(hx+14,hy2+1);c.lineWidth=1.8;c.stroke()
  // sparkle by her smug face
  if(sh>.9){const p=(t-.37)/.41;for(const[sx,sy,r]of[[x-58,y-30,8],[x+60,y-8,6]]){const k=r*(.7+.3*S(p*P*4+sx));B(c);for(let j=0;j<8;j++){const a=j*P/4,rr=j%2?k*.35:k;c.lineTo(sx+C(a)*rr,sy+S(a)*rr)}c.closePath();F(c,'#ffe14d',2)}}
  // ---- speech bubble
  const bs=1+(sh>0&&sh<1?.04:0)
  c.save();c.translate(186,43);c.scale(bs,bs)
  B(c);c.roundRect(-58,-29,116,56,17);F(c,'#fff')
  B(c);c.moveTo(-34,25);c.lineTo(-50,44);c.lineTo(-14,25);c.fillStyle='#fff';c.fill();c.lineWidth=3;c.strokeStyle=O;c.stroke();c.fillRect(-32,21,16,6)
  c.font='bold 16px DejaVu Sans';c.textAlign='center';c.textBaseline='middle';c.fillStyle=O;c.fillText('works on',0,-11);c.fillText('my machine',0,10)
  c.restore()
}
