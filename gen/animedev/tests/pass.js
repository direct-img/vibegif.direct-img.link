// girl in a rose-pink hijab and green overalls watches the test bar fill green, it hits PASS and she leaps up cheering with sparkles
// keyframes [t, ms]: slow nervous fill, then the jump
const K=[[0,110],[.06,90],[.12,90],[.18,90],[.24,90],[.3,90],[.36,90],[.42,90],[.48,90],[.53,120],[.58,70],[.62,70],[.66,70],[.7,70],[.74,70],[.78,70],[.82,70],[.86,90],[.92,100],[.96,110]]
export const frames=K.length,delay=K.map(k=>k[1]),rim=4
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
const SK='#a96c45',HJ='#f3a6bf',HJ2='#d9809f',HL='#ffd6e3',K1='#170d0a',K2='#6e4632',GR='#2fcf6a',OV='#4e9a68'
const star=(c,x,y,r,f)=>{B(c);for(let k=0;k<8;k++){const q=k*P/4,rr=k%2?r*.35:r;c.lineTo(x+C(q)*rr,y+S(q)*rr)}c.closePath();F(c,f,2)}
export default(c,_,i)=>{
  const t=K[i][0],fill=ez(t/.53),win=t>=.53&&t<.96,
    jp=t>=.58&&t<.92?(t-.58)/.34:0,jy=jp>0?-Math.abs(S(jp*P*2))*22:0,sq=t>=.53&&t<.58?1:0
  // ---- test bar
  const bx=28,bw=200,by=22,bh=26
  c.save();if(win){const p=cl((t-.53)/.06);c.translate(128,by+bh/2);c.scale(1+.06*S(p*P),1+.06*S(p*P));c.translate(-128,-by-bh/2)}
  B(c);c.roundRect(bx,by,bw,bh,13);F(c,'#e9edf2')
  if(fill>0){c.save();B(c);c.roundRect(bx,by,bw,bh,13);c.clip();c.fillStyle=GR;c.fillRect(bx,by,bw*fill,bh);c.fillStyle='rgba(255,255,255,.35)';c.fillRect(bx,by+4,bw*fill,5);c.restore()
    B(c);c.roundRect(bx,by,bw,bh,13);c.lineWidth=3;c.strokeStyle=O;c.stroke()}
  if(win){c.font='bold 19px DejaVu Sans';c.textAlign='center';c.textBaseline='middle';c.lineWidth=4;c.strokeStyle='#14713a';c.strokeText('✓ PASS',128,by+bh/2+1);c.fillStyle='#fff';c.fillText('✓ PASS',128,by+bh/2+1)}
  else{c.font='bold 13px DejaVu Sans Mono';c.textAlign='center';c.textBaseline='middle';c.fillStyle=fill>.55?'#fff':'#55606e';c.fillText(Math.round(fill*42)+'/42',128,by+bh/2+1)}
  c.restore()
  // ---- girl
  const x=128,y=122+jy+sq*4
  c.save();c.translate(x,238);c.scale(.92,.92);if(sq)c.scale(1.05,.95);c.translate(-x,-238)
  // hijab tail hanging behind her shoulder (swings, lags the jump)
  const pa=jp>0?C(jp*P*4)*.22:0
  c.save();c.translate(x-36,y+10);c.rotate(.2+pa)
  B(c);c.moveTo(-12,0);c.bezierCurveTo(-18,24,-24,46,-22,64);c.quadraticCurveTo(-14,70,-6,64);c.quadraticCurveTo(2,70,10,62);c.bezierCurveTo(8,40,12,20,12,0);c.closePath();F(c,HJ2)
  B(c);c.moveTo(-4,12);c.quadraticCurveTo(-8,40,-6,62);c.lineWidth=2;c.strokeStyle='#b8627f';c.stroke()
  c.restore()
  // legs in overall trousers, tucked during jump
  const tk=jp>0?Math.abs(S(jp*P*2)):0
  for(const s of[-1,1]){L(c,OV,13,()=>{c.moveTo(x+12*s,y+82);c.lineTo(x+14*s+tk*6*s,y+100-tk*8)})
    B(c);c.moveTo(x+14*s+tk*6*s-12,y+114-tk*8);c.quadraticCurveTo(x+14*s+tk*6*s-12,y+98-tk*8,x+14*s+tk*6*s,y+98-tk*8);c.quadraticCurveTo(x+14*s+tk*6*s+13,y+100-tk*8,x+14*s+tk*6*s+13,y+114-tk*8);c.closePath();F(c,'#ff7a59',2.6)
    B(c);c.moveTo(x+14*s+tk*6*s-11,y+110-tk*8);c.lineTo(x+14*s+tk*6*s+12,y+110-tk*8);c.lineWidth=2.5;c.strokeStyle='#fff';c.stroke()}
  // green overalls over a white blouse
  B(c);c.moveTo(x-26,y+62);c.lineTo(x-30,y+90);c.lineTo(x-2,y+92);c.lineTo(x,y+86);c.lineTo(x+2,y+92);c.lineTo(x+30,y+90);c.lineTo(x+26,y+62);c.closePath();F(c,OV)
  B(c);c.moveTo(x-16,y+40);c.quadraticCurveTo(x-30,y+42,x-30,y+56);c.lineTo(x-27,y+68);c.lineTo(x+27,y+68);c.lineTo(x+30,y+56);c.quadraticCurveTo(x+30,y+42,x+16,y+40);c.closePath();F(c,'#fff')
  B(c);c.roundRect(x-18,y+54,36,18,4);F(c,OV,2.6)
  for(const s of[-1,1]){B(c);c.moveTo(x+14*s,y+56);c.lineTo(x+20*s,y+42);c.lineWidth=4;c.strokeStyle=OV;c.stroke();E(c,x+14*s,y+57,2.2,2.2);c.fillStyle='#ffd23a';c.fill()}
  B(c);c.moveTo(x-6,y+62);c.lineTo(x-1,y+67);c.lineTo(x+8,y+57);c.lineWidth=3;c.strokeStyle='#fff';c.stroke()
  // hijab: hood + drape over the shoulders
  B(c);c.moveTo(x-50,y+14);c.bezierCurveTo(x-60,y-48,x-30,y-66,x,y-66);c.bezierCurveTo(x+30,y-66,x+60,y-48,x+50,y+14)
  c.bezierCurveTo(x+48,y+36,x+40,y+54,x+22,y+60);c.quadraticCurveTo(x,y+66,x-22,y+60);c.bezierCurveTo(x-40,y+54,x-48,y+36,x-50,y+14);c.closePath();F(c,HJ)
  c.strokeStyle=HJ2;c.lineWidth=2.4;B(c);c.moveTo(x-30,y+52);c.quadraticCurveTo(x-6,y+60,x+10,y+50);c.moveTo(x+36,y+40);c.quadraticCurveTo(x+30,y+52,x+18,y+58);c.stroke()
  // arms: clasped while waiting, thrown up in a V when it passes
  const up=win?1:0
  for(const s of[-1,1]){const hx=up?x+s*58:x+s*7,hy2=up?y-34:y+48
    L(c,'#fff',12,()=>{c.moveTo(x+26*s,y+46);c.quadraticCurveTo(up?x+s*44:x+s*30,up?y+20:y+58,hx,hy2)})
    if(up)E(c,hx,hy2,8,8),F(c,SK,2.6)}
  // face framed by the hijab, with a soft fold line around it
  B(c);c.moveTo(x-44,y+4);c.bezierCurveTo(x-46,y-54,x+46,y-54,x+44,y+4);c.bezierCurveTo(x+46,y+26,x+24,y+46,x,y+48);c.bezierCurveTo(x-24,y+46,x-46,y+26,x-44,y+4);c.strokeStyle=HJ2;c.lineWidth=3;c.stroke()
  B(c);c.moveTo(x-40,y+4);c.bezierCurveTo(x-42,y-48,x+42,y-48,x+40,y+4);c.bezierCurveTo(x+42,y+24,x+22,y+44,x,y+46);c.bezierCurveTo(x-22,y+44,x-42,y+24,x-40,y+4);F(c,SK)
  c.fillStyle='rgba(225,80,90,.35)';E(c,x-27,y+21,8,4.5);c.fill();E(c,x+27,y+21,8,4.5);c.fill()
  if(win){for(const s of[-1,1]){B(c);c.moveTo(x+21*s-11,y+10);c.quadraticCurveTo(x+21*s,y-6,x+21*s+11,y+10);c.lineWidth=4;c.strokeStyle=O;c.stroke()}
    B(c);c.moveTo(x-13,y+24);c.quadraticCurveTo(x,y+27,x+13,y+24);c.quadraticCurveTo(x+11,y+42,x,y+42);c.quadraticCurveTo(x-11,y+42,x-13,y+24);F(c,'#8c2f3f',2.4);E(c,x,y+37,6,3);c.fillStyle='#f27d86';c.fill()}
  else if(i==5){for(const s of[-1,1]){B(c);c.moveTo(x+21*s-11,y+8);c.quadraticCurveTo(x+21*s,y+13,x+21*s+11,y+8);c.lineWidth=3.5;c.strokeStyle=O;c.stroke()}}
  if(!win){if(i!=5){const lx=mx(-5,5,fill);eye(c,x-21,y+6,-1,K1,K2,lx,-4);eye(c,x+21,y+6,1,K1,K2,lx,-4)}
    B(c);c.moveTo(x-6,y+29);c.quadraticCurveTo(x,y+33,x+6,y+29);c.lineWidth=2.4;c.strokeStyle=O;c.stroke()}
  if(!win)for(const s of[-1,1])E(c,x+s*6,y+48,8,9,s*.2),F(c,SK,2.6)
  c.strokeStyle=HL;c.lineWidth=3.5;B(c);c.arc(x,y-14,50,-2.55,-2.05);c.stroke();B(c);c.arc(x,y-14,50,-1.1,-.65);c.stroke()
  // brows: hopeful, then joyful
  c.lineWidth=2.6;c.strokeStyle=O;for(const s of[-1,1]){B(c);c.moveTo(x+31*s,y-15);c.quadraticCurveTo(x+22*s,y-22,x+12*s,y-19-(win?0:3));c.stroke()}
  c.restore()
  // sparkles burst
  if(win){const p=cl((t-.53)/.4)
    for(let k=0;k<6;k++){const a=[P-.6,P,P+.6,-.6,0,.6][k],r=70+p*34,sx=x+C(a)*r*1.15,sy=y+18+S(a)*r*.8
      if(p<.95)star(c,sx,sy,(k%2?7:9)*(1-p*.6),k%2?'#ffe14d':'#7df0a0')}}
}
