// space-bun girl in a dealer visor flips a pass/fail coin for a flaky test: it lands PASS, she cheers, flips again, FAIL, she deadpans
export const frames=28,delay=75,rim=4
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
const SK='#d9b28a',H1='#2a2433',H2='#17131d',HL='#6a5f86',K1='#7a2400',K2='#ff9a3c',GN='#2fcf6a',RD='#ff3b4e'
// coin seen spinning about a horizontal axis: a = angle, face pass when cos>0
const coin=(c,x,y,a)=>{const k=C(a),ry=Math.max(3,19*Math.abs(k)),ps=k>0
  E(c,x,y+2.5,19,ry+1.2);F(c,'#c99418',3)
  E(c,x,y,19,ry);F(c,'#ffd23a',3)
  if(Math.abs(k)>.3){c.save();c.translate(x,y);c.scale(1,Math.abs(k));E(c,0,0,13,13);c.fillStyle=ps?GN:RD;c.fill()
    c.lineWidth=4;c.strokeStyle='#fff';B(c);if(ps){c.moveTo(-6,0);c.lineTo(-2,5);c.lineTo(6.5,-5)}else{c.moveTo(-5,-5);c.lineTo(5,5);c.moveTo(5,-5);c.lineTo(-5,5)}c.stroke();c.restore()}}
export default(c,t,i)=>{
  // two flips per loop: [launch, land]
  const fl=t<.5?0:1,u0=fl?.52:.02,u1=fl?.78:.28,u=cl((t-u0)/(u1-u0)),air=t>=u0&&t<u1,
    land=t>=u1?t-u1:t+1-.78, // time since last landing
    res=t>=.28&&t<.52?1:t>=.78||t<.02?2:0, // 1 pass shown, 2 fail shown
    x=110,y=118,hx=164,hy=172-(air&&u<.12?ez(u/.12)*8:0)
  // ---- girl
  // space buns
  for(const s of[-1,1]){E(c,x+s*32,y-54,19,18);F(c,H1);c.strokeStyle=H2;c.lineWidth=2.2;B(c);c.arc(x+s*32+2,y-53,10,-.5,3.6);c.stroke();B(c);c.arc(x+s*32+1,y-54,4.5,0,4);c.stroke()
    c.strokeStyle=HL;c.lineWidth=3;B(c);c.arc(x+s*32,y-54,13,-2.7,-1.9);c.stroke()}
  // legs
  for(const s of[-1,1]){L(c,'#2a2433',11,()=>{c.moveTo(x+11*s,y+86);c.lineTo(x+14*s,y+106)})
    B(c);c.moveTo(x+14*s-11,y+118);c.quadraticCurveTo(x+14*s-11,y+104,x+14*s,y+104);c.quadraticCurveTo(x+14*s+12,y+106,x+14*s+12,y+118);c.closePath();F(c,'#1d1a24',2.6)}
  // slacks + shirt + red vest
  B(c);c.moveTo(x-24,y+66);c.lineTo(x-26,y+92);c.lineTo(x-2,y+92);c.lineTo(x,y+84);c.lineTo(x+2,y+92);c.lineTo(x+26,y+92);c.lineTo(x+24,y+66);c.closePath();F(c,'#2a2433')
  B(c);c.moveTo(x-16,y+40);c.quadraticCurveTo(x-30,y+42,x-30,y+56);c.lineTo(x-27,y+72);c.lineTo(x+27,y+72);c.lineTo(x+30,y+56);c.quadraticCurveTo(x+30,y+42,x+16,y+40);c.closePath();F(c,'#fff')
  B(c);c.moveTo(x-22,y+46);c.lineTo(x-24,y+72);c.lineTo(x,y+76);c.lineTo(x+24,y+72);c.lineTo(x+22,y+46);c.lineTo(x+8,y+46);c.lineTo(x,y+62);c.lineTo(x-8,y+46);c.closePath();F(c,'#c8283c',2.6)
  for(const k of[64,70])E(c,x,y+k-2,1.8,1.8),c.fillStyle='#ffd23a',c.fill()
  B(c);c.moveTo(x,y+46);c.lineTo(x-9,y+41);c.lineTo(x-9,y+51);c.closePath();c.moveTo(x,y+46);c.lineTo(x+9,y+41);c.lineTo(x+9,y+51);c.closePath();F(c,'#1d1a24',2)
  // hand on hip
  L(c,'#fff',12,()=>{c.moveTo(x-26,y+48);c.quadraticCurveTo(x-46,y+60,x-32,y+72)});E(c,x-28,y+72,7,7);F(c,SK,2.6)
  // head
  B(c);c.rect(x-7,y+34,14,10);F(c,SK,2.5)
  B(c);c.moveTo(x-46,y-2);c.bezierCurveTo(x-46,y-62,x+46,y-62,x+46,y-2);c.bezierCurveTo(x+46,y+24,x+22,y+44,x,y+46);c.bezierCurveTo(x-22,y+44,x-46,y+24,x-46,y-2);F(c,SK)
  // face by state: following the coin / PASS grin / FAIL deadpan
  c.fillStyle='rgba(230,100,100,.35)';E(c,x-27,y+21,8,4.5);c.fill();E(c,x+27,y+21,8,4.5);c.fill()
  const cy=air?hy-16-4*126*u*(1-u):hy-16
  if(res==1&&!air){for(const s of[-1,1]){B(c);c.moveTo(x+21*s-11,y+10);c.quadraticCurveTo(x+21*s,y-6,x+21*s+11,y+10);c.lineWidth=4;c.strokeStyle=O;c.stroke()}
    B(c);c.moveTo(x-12,y+25);c.quadraticCurveTo(x,y+28,x+12,y+25);c.quadraticCurveTo(x+10,y+41,x,y+41);c.quadraticCurveTo(x-10,y+41,x-12,y+25);F(c,'#8c2f3f',2.4)}
  else if(res==2&&!air){for(const s of[-1,1]){eye(c,x+21*s,y+6,s,K1,K2,2,4,.8);B(c);c.moveTo(x+21*s-14,y+1);c.lineTo(x+21*s+14,y+1);c.lineTo(x+21*s+14,y-12);c.lineTo(x+21*s-14,y-12);c.fillStyle=SK;c.fill();B(c);c.moveTo(x+21*s-13,y+1);c.lineTo(x+21*s+13,y+1);c.lineWidth=4.4;c.strokeStyle=O;c.stroke()}
    B(c);c.moveTo(x-7,y+31);c.lineTo(x+7,y+31);c.lineWidth=2.8;c.stroke()}
  else{const lx=cl((hx-x)/40)*5,ly=cl((cy-y)/-80)*-6;eye(c,x-21,y+6,-1,K1,K2,lx,ly);eye(c,x+21,y+6,1,K1,K2,lx,ly)
    E(c,x,y+31,3.5,4.2);F(c,'#8c2f3f',2.2)}
  // bangs: short choppy
  B(c);c.moveTo(x-50,y+22);c.bezierCurveTo(x-62,y-46,x-28,y-64,x,y-62);c.bezierCurveTo(x+28,y-64,x+62,y-46,x+50,y+22)
  c.lineTo(x+40,y+2);c.lineTo(x+34,y-10);c.lineTo(x+26,y-2);c.lineTo(x+20,y-18);c.lineTo(x+10,y-6);c.lineTo(x+4,y-20);c.lineTo(x-6,y-6);c.lineTo(x-12,y-20);c.lineTo(x-22,y-4);c.lineTo(x-28,y-16);c.lineTo(x-36,y);c.lineTo(x-42,y+6);c.closePath();F(c,H1)
  c.strokeStyle=HL;c.lineWidth=3.5;B(c);c.arc(x,y-10,44,-2.55,-2.05);c.stroke();B(c);c.arc(x,y-10,44,-1.1,-.65);c.stroke()
  // green dealer visor: band over the bangs + translucent brim
  B(c);c.moveTo(x-47,y-26);c.quadraticCurveTo(x,y-56,x+47,y-26);c.lineWidth=9;c.strokeStyle=O;c.stroke();c.lineWidth=4;c.strokeStyle='#1d1a24';c.stroke()
  B(c);c.moveTo(x-36,y-30);c.quadraticCurveTo(x,y-50,x+36,y-30);c.quadraticCurveTo(x+38,y-20,x+28,y-18);c.quadraticCurveTo(x,y-30,x-28,y-18);c.quadraticCurveTo(x-38,y-20,x-36,y-30);c.fillStyle='rgba(50,200,110,.6)';c.fill();c.lineWidth=2.6;c.strokeStyle=O;c.stroke()
  // brows
  c.lineWidth=2.6;c.strokeStyle=O;for(const s of[-1,1]){B(c);if(res==2&&!air){c.moveTo(x+31*s,y-6);c.lineTo(x+12*s,y-6)}else{c.moveTo(x+31*s,y-4);c.quadraticCurveTo(x+22*s,y-9,x+12*s,y-6)}c.stroke()}
  if(res==2&&!air){c.save();c.translate(x+52,y-2);B(c);c.moveTo(0,-10);c.quadraticCurveTo(7,0,0,6);c.quadraticCurveTo(-7,0,0,-10);F(c,'#9fd8ff',2.2);c.restore()}
  // flipping arm + palm
  L(c,'#fff',12,()=>{c.moveTo(x+26,y+48);c.quadraticCurveTo(x+44,y+64,hx-8,hy+2)})
  // coin: airborne, or resting on the palm
  if(air)coin(c,hx,cy,(fl?6*P:P)+5*P*u)
  else coin(c,hx,hy-16,res==1?6*P:P)
  B(c);c.moveTo(hx-13,hy-5);c.quadraticCurveTo(hx-12,hy+8,hx,hy+8);c.quadraticCurveTo(hx+12,hy+8,hx+14,hy-4);c.quadraticCurveTo(hx+6,hy-1,hx-13,hy-5);F(c,SK,2.6)
  B(c);c.moveTo(hx+14,hy-4);c.quadraticCurveTo(hx+18,hy-10,hx+14,hy-14);c.lineWidth=7;c.strokeStyle=O;c.stroke();c.lineWidth=3;c.strokeStyle=SK;c.stroke()
  // result label
  const p=res==1?t-.28:(t+1-.78)%1,k=ez(p/.05)
  if(!air&&k>.15){const txt=res==1?'PASS':'FAIL'
    c.save();c.translate(206,96);c.scale(k,k);c.rotate(res==1?-.12:.12);B(c);c.roundRect(-32,-15,64,30,10);F(c,res==1?GN:RD)
    c.font='bold 18px DejaVu Sans';c.textAlign='center';c.textBaseline='middle';c.fillStyle='#fff';c.fillText(txt,0,1);c.restore()}
}
