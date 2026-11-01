// silver-haired techwear girl hits a segfault: she RGB-glitches, scatters into pixel blocks, then snaps back together dizzy
// keyframes [phase, ms]: phase 0 idle, 1 blink, 2 hiccup, 3 split, 4..6 scatter, 7 snap, 8 dizzy
const K=[[0,500],[1,90],[0,300],[2,70],[0,140],[2,60],[3,70],[3,70],[4,70],[5,80],[6,260],[5,60],[7,60],[8,320],[8,240],[1,90],[0,200]]
export const frames=K.length,delay=K.map(k=>k[1]),rim=4
const P=Math.PI,O='#2b2135',S=Math.sin,C=Math.cos,
B=c=>c.beginPath(),
F=(c,f,w=3)=>{c.fillStyle=f;c.fill();c.strokeStyle=O;c.lineWidth=w;c.stroke()},
E=(c,x,y,a,b,r=0)=>{B(c);c.ellipse(x,y,a,b,r,0,2*P)},
L=(c,f,w,p)=>{B(c);p();c.strokeStyle=O;c.lineWidth=w+6;c.stroke();c.strokeStyle=f;c.lineWidth=w;c.stroke()},
hs=n=>{const v=S(n*12.9898+78.233)*43758.5453;return v-Math.floor(v)},
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
const SK='#fbe8e3',H1='#eef1f8',H2='#b9c1d8',HL='#ffffff',K1='#6d0a52',K2='#ff4fd8',JK='#26232e',CY='#3ff0ff'
// the girl, mood: 0 calm, 1 blink, 2 shocked, 3 dizzy
const girl=(c,md)=>{const x=128,y=104
  c.lineCap=c.lineJoin='round'
  // back hair (longer on her right / screen left)
  B(c);c.moveTo(x-48,y-6);c.bezierCurveTo(x-60,y-70,x+60,y-70,x+48,y-6);c.bezierCurveTo(x+50,y+14,x+46,y+20,x+40,y+22);c.lineTo(x-38,y+50);c.bezierCurveTo(x-52,y+50,x-56,y+30,x-48,y-6);F(c,H2)
  // legs + boots
  for(const s of[-1,1]){L(c,'#3a3646',11,()=>{c.moveTo(x+11*s,y+92);c.lineTo(x+13*s,y+112)})
    B(c);c.moveTo(x+13*s-12,y+130);c.lineTo(x+13*s-11,y+108);c.lineTo(x+13*s+10,y+108);c.lineTo(x+13*s+14,y+130);c.closePath();F(c,'#1b1921',2.6)
    B(c);c.moveTo(x+13*s-11,y+124);c.lineTo(x+13*s+13,y+124);c.lineWidth=2.6;c.strokeStyle=CY;c.stroke()}
  // shorts
  B(c);c.moveTo(x-24,y+74);c.lineTo(x-27,y+98);c.lineTo(x-2,y+98);c.lineTo(x,y+92);c.lineTo(x+2,y+98);c.lineTo(x+27,y+98);c.lineTo(x+24,y+74);c.closePath();F(c,'#3a3646')
  // jacket
  B(c);c.moveTo(x-18,y+40);c.quadraticCurveTo(x-36,y+44,x-34,y+62);c.lineTo(x-30,y+84);c.lineTo(x+30,y+84);c.lineTo(x+34,y+62);c.quadraticCurveTo(x+36,y+44,x+18,y+40);c.closePath();F(c,JK)
  B(c);c.moveTo(x,y+48);c.lineTo(x,y+84);c.lineWidth=2.4;c.strokeStyle=CY;c.stroke()
  B(c);c.moveTo(x-30,y+76);c.lineTo(x-12,y+76);c.moveTo(x+12,y+76);c.lineTo(x+30,y+76);c.lineWidth=2.4;c.strokeStyle='#5a5668';c.stroke()
  // arms, hands in pockets
  for(const s of[-1,1]){L(c,JK,13,()=>{c.moveTo(x+30*s,y+48);c.quadraticCurveTo(x+40*s,y+64,x+22*s,y+76)})}
  // neck, headphones around it
  B(c);c.rect(x-7,y+34,14,10);F(c,SK,2.5)
  B(c);c.moveTo(x-22,y+40);c.quadraticCurveTo(x,y+56,x+22,y+40);c.lineWidth=8;c.strokeStyle=O;c.stroke();c.lineWidth=4;c.strokeStyle='#4a4658';c.stroke()
  for(const s of[-1,1]){B(c);c.roundRect(x+24*s-8,y+34,16,18,6);F(c,CY,2.6)}
  // head
  B(c);c.moveTo(x-46,y-2);c.bezierCurveTo(x-46,y-62,x+46,y-62,x+46,y-2);c.bezierCurveTo(x+46,y+24,x+22,y+44,x,y+46);c.bezierCurveTo(x-22,y+44,x-46,y+24,x-46,y-2);F(c,SK)
  c.fillStyle='rgba(255,110,170,.35)';E(c,x-27,y+21,8,4.5);c.fill();E(c,x+27,y+21,8,4.5);c.fill()
  if(md==1){for(const s of[-1,1]){B(c);c.moveTo(x+21*s-11,y+8);c.quadraticCurveTo(x+21*s,y+13,x+21*s+11,y+8);c.lineWidth=3.5;c.strokeStyle=O;c.stroke()}}
  else if(md==3){c.lineWidth=2.6;c.strokeStyle=O;for(const s of[-1,1]){B(c);for(let a=0;a<14;a+=.3){const r=1+a*.75;c.lineTo(x+21*s+C(a*s)*r,y+7+S(a*s)*r)}c.stroke()}}
  else eye(c,x-21,y+6,-1,K1,K2,md==2?0:2,md==2?0:1,md==2?.5:1),eye(c,x+21,y+6,1,K1,K2,md==2?0:2,md==2?0:1,md==2?.5:1)
  if(md==2){E(c,x,y+32,5,6);F(c,'#8c2f3f',2.2)}
  else if(md==3){B(c);c.moveTo(x-9,y+31);c.quadraticCurveTo(x-4,y+27,x,y+31);c.quadraticCurveTo(x+4,y+35,x+9,y+31);c.lineWidth=2.4;c.strokeStyle=O;c.stroke()}
  else{B(c);c.moveTo(x-5,y+29);c.quadraticCurveTo(x+1,y+33,x+7,y+28);c.lineWidth=2.4;c.strokeStyle=O;c.stroke()}
  // asymmetric swept bangs
  B(c);c.moveTo(x-50,y+44);c.bezierCurveTo(x-64,y-40,x-30,y-64,x+4,y-62);c.bezierCurveTo(x+38,y-60,x+58,y-40,x+50,y+8)
  c.lineTo(x+42,y-6);c.lineTo(x+36,y+2);c.lineTo(x+28,y-16);c.lineTo(x+16,y-8);c.lineTo(x+8,y-22);c.lineTo(x-6,y-6);c.lineTo(x-14,y-18);c.lineTo(x-26,y);c.lineTo(x-34,y-8);c.lineTo(x-40,y+16);c.lineTo(x-42,y+44);c.closePath();F(c,H1)
  c.strokeStyle=H2;c.lineWidth=2;B(c);c.moveTo(x-20,y-50);c.quadraticCurveTo(x-36,y-30,x-30,y-6);c.moveTo(x+10,y-56);c.quadraticCurveTo(x+16,y-36,x+26,y-18);c.stroke()
  c.strokeStyle='#c9d6ff';c.lineWidth=3.5;B(c);c.arc(x,y-8,44,-2.55,-2.05);c.stroke();B(c);c.arc(x,y-8,44,-1.15,-.7);c.stroke()
  // brows
  c.lineWidth=2.6;c.strokeStyle=O;for(const s of[-1,1]){B(c);c.moveTo(x+30*s,y-15-(md==2?4:0));c.quadraticCurveTo(x+21*s,y-21-(md==2?5:0),x+12*s,y-18-(md==2?4:0));c.stroke()}
  // cyan hair clip
  c.save();c.translate(x+34,y-30);c.rotate(.5);B(c);c.roundRect(-9,-3,18,6,3);F(c,CY,2.2);c.restore()
}
const label=(c,a)=>{c.save();c.translate(128,22);c.globalAlpha=a;B(c);c.roundRect(-62,-12,124,24,5);F(c,'#14121a',2.6)
  c.font='bold 15px DejaVu Sans Mono';c.textAlign='center';c.textBaseline='middle';c.fillStyle='#ff3b6b';c.fillText('SEGFAULT',2,1);c.fillStyle=CY;c.fillText('SEGFAULT',-1,1);c.fillStyle='#fff';c.fillText('SEGFAULT',0,1);c.restore()}
export default(c,_,i)=>{
  const ph=K[i][0],md=ph==1?1:ph>=2&&ph<=7?2:ph==8?3:0
  const g=new c.canvas.constructor(256,256),q=g.getContext('2d')
  girl(q,md)
  if(ph<2||ph==8){c.drawImage(g,0,0);return}
  // tinted silhouettes for the RGB split
  const tint=k=>{const t=new c.canvas.constructor(256,256),u=t.getContext('2d');u.drawImage(g,0,0);u.globalCompositeOperation='source-in';u.fillStyle=k;u.fillRect(0,0,256,256);return t}
  const mg=tint('#ff2fb0'),cy=tint('#2ff0ff')
  if(ph==2||ph==3||ph==7){
    const d=ph==3?6:ph==7?3:3
    c.globalAlpha=.85;c.drawImage(mg,-d,0);c.drawImage(cy,d,0);c.globalAlpha=1
    // horizontal slices jolted sideways
    const n=ph==3?9:5
    for(let k=0;k<256;k+=16){const r=hs(k+i*7.1),o=r<.4?Math.round((hs(k*3+i)-.5)*(ph==3?36:18)):0
      if(o){c.drawImage(mg,0,k,256,16,o-d,k,256,16);c.drawImage(cy,0,k,256,16,o+d,k,256,16)}
      c.drawImage(g,0,k,256,16,o,k,256,16)}
    if(ph==3)label(c,.9)
    return}
  // scatter into pixel blocks
  const a=ph==4?.25:ph==5?.6:1,bs=16
  for(let by=0;by<256;by+=bs)for(let bx=0;bx<256;bx+=bs){const n=bx*31+by*7,r=hs(n),dx=bx+8-128,dy=by+8-128,l=Math.hypot(dx,dy)||1
    if(r<a*.2)continue
    const k=a*(16+r*34),ox=Math.round(dx/l*k+(hs(n+1)-.5)*20*a),oy=Math.round(dy/l*k*.4+(hs(n+2)-.5)*14*a)
    const src=hs(n+3)<.15*a?(hs(n+4)<.5?mg:cy):g
    c.drawImage(src,bx,by,bs,bs,Math.min(236,Math.max(4,bx+ox)),Math.min(232,Math.max(38,by+oy)),bs,bs)}
  label(c,1)
}
