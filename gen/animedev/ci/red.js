// navy-haired girl at her desk hopefully watching a CI pipeline go green, green, then red X, and she faceplants onto the desk
// keyframes [t, ms]
const K=[[0,120],[.1,90],[.14,90],[.18,90],[.22,90],[.26,90],[.3,90],[.34,90],[.38,90],[.42,90],[.46,90],[.49,160],[.53,60],[.56,90],[.6,110],[.66,160],[.74,160],[.82,160],[.88,90],[.91,80],[.95,100]]
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
const SK='#b97b52',SH='#9b603e',H1='#2f3f8f',H2='#1f2a66',HL='#6f82d6',K1='#6a0f1c',K2='#ff5a5a',SW='#2bb3a3',GN='#2fcf6a',RD='#ff3b4e'
// pipeline node: st 0 idle, 1 running, 2 pass, 3 fail
const node=(c,x,y,st,a,p)=>{
  c.save();c.translate(x,y);if(st==3){const k=1+.25*Math.max(0,1-p*4);c.scale(k,k)}
  E(c,0,0,16,16);F(c,['#d6dbe3','#ffd23a',GN,RD][st])
  c.lineWidth=4;c.strokeStyle='#fff'
  if(st==1){B(c);c.arc(0,0,8,a,a+P*1.3);c.stroke()}
  if(st==2){B(c);c.moveTo(-7,0);c.lineTo(-2,6);c.lineTo(8,-6);c.stroke()}
  if(st==3){B(c);c.moveTo(-6,-6);c.lineTo(6,6);c.moveTo(6,-6);c.lineTo(-6,6);c.stroke()}
  c.restore()}
export default(c,_,i)=>{
  const t=K[i][0],run=(a,b)=>t<a?0:t<b?1:2,
    s1=t>=.88?0:run(.08,.2),s2=t>=.88?0:run(.2,.34),s3=t>=.88?0:t<.34?0:t<.48?1:3,
    down=t>=.56&&t<.88,fall=t>=.53&&t<.56,shock=t>=.48&&t<.53,rise=t>=.88&&t<.94
  // ---- pipeline
  B(c);c.moveTo(48,34);c.lineTo(208,34);c.lineWidth=9;c.strokeStyle=O;c.stroke();c.lineWidth=4;c.strokeStyle='#d6dbe3';c.stroke()
  if(s1==2){B(c);c.moveTo(48,34);c.lineTo(s2==2||s3>0?208:128,34);c.lineWidth=4;c.strokeStyle=GN;c.stroke()}
  node(c,48,34,s1,t*40,0);node(c,128,34,s2,t*40,0);node(c,208,34,s3,t*40,(t-.48)/.1)
  // ---- desk
  const dy=196
  // ---- girl
  const x=128,lk=s1==1?-6:s2==1?0:6
  c.save();B(c);c.rect(0,0,256,dy+2);c.clip()
  if(!down){
    const y=rise?118:fall?150:112,hp=shock?-3:0
    // long hair behind
    B(c);c.moveTo(x-48,y-10);c.bezierCurveTo(x-64,y+30,x-62,y+70,x-60,dy);c.lineTo(x+60,dy);c.bezierCurveTo(x+62,y+70,x+64,y+30,x+48,y-10);c.closePath();F(c,H2)
    // body
    B(c);c.moveTo(x-18,y+42);c.quadraticCurveTo(x-46,y+46,x-50,y+72);c.lineTo(x-52,dy);c.lineTo(x+52,dy);c.lineTo(x+50,y+72);c.quadraticCurveTo(x+46,y+46,x+18,y+42);c.closePath();F(c,SW)
    B(c);c.moveTo(x-14,y+44);c.lineTo(x,y+80);c.lineTo(x+14,y+44);c.lineWidth=3;c.strokeStyle='#e8414f';c.stroke()
    B(c);c.roundRect(x-9,y+78,18,22,3);F(c,'#fff',2.4);c.fillStyle='#e8414f';c.fillRect(x-6,y+83,12,3);c.fillStyle='#9aa3b5';c.fillRect(x-6,y+90,12,2.4)
    B(c);c.rect(x-7,y+36,14,10);F(c,SK,2.5)
    B(c);c.moveTo(x-46,y-2);c.bezierCurveTo(x-46,y-62,x+46,y-62,x+46,y-2);c.bezierCurveTo(x+46,y+24,x+22,y+44,x,y+46);c.bezierCurveTo(x-22,y+44,x-46,y+24,x-46,y-2);F(c,SK)
    c.fillStyle='rgba(230,90,110,.4)';E(c,x-27,y+22,8,4.5);c.fill();E(c,x+27,y+22,8,4.5);c.fill()
    if(fall){for(const s of[-1,1]){B(c);c.moveTo(x+21*s+10*s,y+2);c.lineTo(x+21*s-8*s,y+7);c.lineTo(x+21*s+10*s,y+12);c.lineWidth=4;c.strokeStyle=O;c.stroke()}}
    else if(shock){eye(c,x-21,y+6,-1,K1,K2,0,0,.45);eye(c,x+21,y+6,1,K1,K2,0,0,.45)}
    else{eye(c,x-21,y+6,-1,K1,K2,lk,-5);eye(c,x+21,y+6,1,K1,K2,lk,-5)
      for(const s of[-1,1]){c.fillStyle='#fff';const sx=x+21*s+lk+4,sy=y;B(c);c.moveTo(sx,sy-4);c.lineTo(sx+1.2,sy-1.2);c.lineTo(sx+4,sy);c.lineTo(sx+1.2,sy+1.2);c.lineTo(sx,sy+4);c.lineTo(sx-1.2,sy+1.2);c.lineTo(sx-4,sy);c.lineTo(sx-1.2,sy-1.2);c.fill()}}
    if(shock){E(c,x,y+32,5,6);F(c,'#8c2f3f',2.2)}else{B(c);c.moveTo(x-6,y+29);c.quadraticCurveTo(x,y+34,x+6,y+29);c.lineWidth=2.4;c.strokeStyle=O;c.stroke()}
    // hime cut: blunt bangs + side locks
    B(c);c.moveTo(x-52,y+40);c.bezierCurveTo(x-62,y-44,x-30,y-64,x,y-62);c.bezierCurveTo(x+30,y-64,x+62,y-44,x+52,y+40);c.lineTo(x+40,y+40);c.lineTo(x+40,y-12);c.lineTo(x-40,y-12);c.lineTo(x-40,y+40);c.closePath();F(c,H1)
    c.strokeStyle=H2;c.lineWidth=2;for(const k of[-24,-8,8,24]){B(c);c.moveTo(x+k,y-12);c.lineTo(x+k*1.1,y-26);c.stroke()}
    c.strokeStyle=HL;c.lineWidth=3.5;B(c);c.arc(x,y-8,44,-2.55,-2);c.stroke();B(c);c.arc(x,y-8,44,-1.15,-.7);c.stroke()
    c.lineWidth=2.6;c.strokeStyle=O;for(const s of[-1,1]){B(c);c.moveTo(x+30*s,y-17+hp);c.quadraticCurveTo(x+21*s,y-23+hp,x+12*s,y-19+hp);c.stroke()}
    // hands clasped hopefully (or flung up on the fall)
    if(fall){for(const s of[-1,1]){B(c);c.moveTo(x+s*60,y-10);c.lineTo(x+s*72,y-22);c.moveTo(x+s*62,y+4);c.lineTo(x+s*78,y+2);c.lineWidth=3;c.strokeStyle=O;c.stroke()}}
    else{for(const s of[-1,1])L(c,SW,14,()=>{c.moveTo(x+44*s,y+62);c.quadraticCurveTo(x+40*s,y+90,x+8*s,y+66)})
      E(c,x-4,y+60,8,11,.15);F(c,SK,2.6);E(c,x+4,y+60,8,11,-.15);F(c,SK,2.6)}
  } else {
    // slumped back + shoulders behind the desk
    B(c);c.moveTo(x-62,dy);c.bezierCurveTo(x-64,dy-40,x-40,dy-58,x,dy-58);c.bezierCurveTo(x+40,dy-58,x+64,dy-40,x+62,dy);c.closePath();F(c,SW)
    B(c);c.moveTo(x-50,dy);c.bezierCurveTo(x-70,dy-30,x-50,dy-62,x,dy-62);c.bezierCurveTo(x+50,dy-62,x+70,dy-30,x+50,dy);c.closePath();F(c,H2)
  }
  c.restore()
  // desk: top surface + front
  B(c);c.moveTo(22,dy-12);c.lineTo(234,dy-12);c.lineTo(242,dy);c.lineTo(14,dy);c.closePath();F(c,'#ddb07a')
  B(c);c.roundRect(14,dy,228,30,8);F(c,'#c98c56')
  B(c);c.moveTo(22,dy+8);c.lineTo(234,dy+8);c.strokeStyle='#e3b07c';c.lineWidth=3;c.stroke()
  if(down){
    // faceplanted: arms flopped on the desk, top of her head down on it, fringe spilling onto the wood
    for(const s of[-1,1]){L(c,SW,15,()=>{c.moveTo(x+48*s,dy-34);c.quadraticCurveTo(x+76*s,dy-22,x+74*s,dy-6);c.lineTo(x+50*s,dy-4)});E(c,x+46*s,dy-4,8,6);F(c,SK,2.6)}
    const y=dy-30
    B(c);c.moveTo(x-40,dy-2);c.bezierCurveTo(x-50,y-10,x-26,y-30,x,y-30);c.bezierCurveTo(x+26,y-30,x+50,y-10,x+40,dy-2);c.lineTo(x+30,dy+3);c.lineTo(x+20,dy-1);c.lineTo(x+10,dy+4);c.lineTo(x,dy);c.lineTo(x-10,dy+4);c.lineTo(x-20,dy-1);c.lineTo(x-30,dy+3);c.closePath();F(c,H1)
    B(c);c.moveTo(x,y-28);c.quadraticCurveTo(x+2,y,x,dy-6);c.lineWidth=2.4;c.strokeStyle=H2;c.stroke()
    c.strokeStyle=HL;c.lineWidth=3.5;B(c);c.ellipse(x,y+6,30,22,0,-2.7,-2);c.stroke();B(c);c.ellipse(x,y+6,30,22,0,-1.1,-.45);c.stroke()
    // thud lines, then a little rain cloud
    const p=(t-.56)/.32,cy=y-66
    if(t<.62){c.strokeStyle=O;c.lineWidth=3;for(const s of[-1,1])for(const k of[0,1]){B(c);c.moveTo(x+s*(46+k*12),y-22+k*10);c.lineTo(x+s*(58+k*14),y-34+k*8);c.stroke()}}
    else{const cl2=[[-22,13],[-6,17],[12,15],[26,11]],yy=cy-S(p*P*2)*3
      B(c);for(const[dx,r]of cl2){c.moveTo(x+dx+r,yy);c.arc(x+dx,yy,r,0,2*P)}c.lineWidth=6;c.strokeStyle=O;c.stroke();c.fillStyle='#8d93a8';c.fill()
      c.strokeStyle='#5fa8ff';c.lineWidth=3;for(const k of[-16,0,16]){const o=((p*3+k/16+1)%1)*14;B(c);c.moveTo(x+k,yy+18+o);c.lineTo(x+k-3,yy+24+o);c.stroke()}}
  }
}
