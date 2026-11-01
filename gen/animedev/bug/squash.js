// sporty red-ponytail girl slamming a squeaky toy hammer down on a purple cartoon bug, which pops right back up
// keyframes: [phase, ms] so the windup lingers and the swing snaps
const K=[[0,110],[.1,110],[.2,110],[.3,45],[.33,45],[.36,90],[.41,90],[.47,100],[.53,110],[.59,70],[.64,70],[.69,80],[.77,150],[.84,60],[.865,60],[.89,60],[.92,90],[.96,100]]
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
const SK='#d9996b',SH='#b8774e',H1='#ff6436',H2='#cf3f22',HL='#ffad86',JK='#2f56c4',K1='#0d5b3a',K2='#3ee08a'
// face: m = 0 fierce, 1 shut ><, 2 happy ^^, 3 shocked
const face=(c,x,y,m)=>{
  c.lineCap='round';c.strokeStyle=O
  if(m==1)for(const s of[-1,1]){B(c);c.moveTo(x+21*s+10*s,y+0);c.lineTo(x+21*s-8*s,y+6);c.lineTo(x+21*s+10*s,y+12);c.lineWidth=4;c.stroke()}
  else if(m==2)for(const s of[-1,1]){B(c);c.moveTo(x+21*s-11,y+10);c.quadraticCurveTo(x+21*s,y-6,x+21*s+11,y+10);c.lineWidth=4;c.stroke()}
  else{
    const q=m==3;eye(c,x-21,y+6,-1,K1,K2,q?0:5,q?0:3,q?.5:1);eye(c,x+21,y+6,1,K1,K2,q?0:5,q?0:3,q?.5:1)
    if(m==0)for(const s of[-1,1]){B(c);c.moveTo(x+21*s-16*s,y+2);c.lineTo(x+21*s+16*s,y-8);c.lineTo(x+21*s+16*s,y-20);c.lineTo(x+21*s-16*s,y-20);c.fillStyle=SK;c.fill()
      B(c);c.moveTo(x+21*s-13*s,y+1);c.lineTo(x+21*s+14*s,y-7);c.lineWidth=4.6;c.stroke()}
  }
  c.fillStyle='rgba(255,90,90,.35)';E(c,x-27,y+22,8,4.5);c.fill();E(c,x+27,y+22,8,4.5);c.fill()
  // mouth
  if(m==0){B(c);c.roundRect(x-9,y+27,18,8,3);F(c,'#fff',2.2);B(c);c.moveTo(x-8,y+31);c.lineTo(x+8,y+31);c.lineWidth=1.6;c.stroke()}
  else if(m==3){E(c,x,y+32,4,5);F(c,'#8c2f3f',2.2)}
  else{B(c);c.moveTo(x-11,y+26);c.quadraticCurveTo(x,y+28,x+11,y+26);c.quadraticCurveTo(x+9,y+40,x,y+40);c.quadraticCurveTo(x-9,y+40,x-11,y+26);F(c,'#8c2f3f',2.4)
    E(c,x,y+37,5,2.6);c.fillStyle='#f27d86';c.fill();B(c);c.moveTo(x-9,y+27);c.lineTo(x+9,y+27);c.lineTo(x+8,y+30);c.lineTo(x-8,y+30);c.fillStyle='#fff';c.fill()}
}
// brows: m 0 angry, else neutral/raised
const brows=(c,x,y,m)=>{c.lineWidth=3;c.strokeStyle=O
  for(const s of[-1,1]){B(c);if(m==0){c.moveTo(x+31*s,y-16);c.lineTo(x+11*s,y-9)}else if(m==3){c.moveTo(x+31*s,y-16);c.quadraticCurveTo(x+22*s,y-24,x+12*s,y-21)}else{c.moveTo(x+31*s,y-15);c.quadraticCurveTo(x+22*s,y-21,x+12*s,y-18)}c.stroke()}}
const hammer=(c,x,y,a)=>{
  c.save();c.translate(x,y);c.rotate(a)
  B(c);c.roundRect(-14,-5,62,10,5);F(c,'#ffcc33',2.6)
  c.translate(62,0)
  B(c);c.roundRect(-17,-21,34,42,6);F(c,'#ff3b4e')
  for(const s of[-1,1]){B(c);c.roundRect(-19,s>0?17:-31,38,14,6);F(c,'#ffd84a')
    c.lineWidth=2;for(const k of[-7,0,7]){B(c);c.moveTo(k,s*18);c.lineTo(k,s*30);c.stroke()}}
  c.fillStyle='rgba(255,255,255,.5)';B(c);c.roundRect(-11,-15,6,30,3);c.fill()
  c.restore()
}
const bug=(c,x,y,sx,sy,k)=>{
  c.save();c.translate(x,y);c.scale(sx,sy)
  c.lineWidth=3;c.strokeStyle=O
  for(let j=0;j<3;j++)for(const s of[-1,1]){const w=S(k*14*P+j*2+(s>0?P:0))*4
    B(c);c.moveTo(-12+j*12,-8);c.lineTo(-16+j*14+w+s*3,2);c.lineTo(-20+j*16+w+s*6,0);c.lineWidth=3;c.stroke()}
  E(c,-24,-15,11,10);F(c,'#3c2a52')
  for(const s of[-1,1]){const q=-38+s*12+S(k*14*P+s)*3;B(c);c.moveTo(-28+s*4,-23);c.quadraticCurveTo(-32+s*10,-40,q,-40);c.lineWidth=2.5;c.stroke();E(c,q,-40,3.5,3.5);F(c,'#ff5fa2',2)}
  E(c,4,-17,24,17);F(c,'#8e5cf0')
  B(c);c.moveTo(4,-34);c.lineTo(4,-1);c.lineWidth=2.5;c.stroke()
  c.fillStyle='#c4a6ff';E(c,-6,-22,4,3);c.fill();E(c,14,-24,3,2.5);c.fill();E(c,13,-11,3,2.5);c.fill()
  for(const s of[-1,1]){E(c,-29+s*6,-16,4.5,5.5);F(c,'#fff',2);E(c,-30+s*6,-15,2,2.5);c.fillStyle=O;c.fill()}
  c.restore()
}
// squashed pancake bug, splayed legs, X eyes
const flat=(c,x,y)=>{
  c.save();c.translate(x,y);c.lineWidth=3;c.strokeStyle=O
  for(let j=0;j<3;j++)for(const s of[-1,1]){B(c);c.moveTo(-18+j*20,-4);c.lineTo(-26+j*26,s>0?2:-12);c.stroke()}
  for(const s of[-1,1]){B(c);c.moveTo(-40,-6+s*2);c.quadraticCurveTo(-52,-4+s*6,-58,-12+s*10);c.lineWidth=2.5;c.stroke();E(c,-58,-12+s*10,3.5,3.5);F(c,'#ff5fa2',2)}
  E(c,6,-5,40,8);F(c,'#8e5cf0')
  B(c);c.moveTo(-26,-5);c.lineTo(40,-5);c.lineWidth=2;c.stroke()
  E(c,-36,-6,12,7);F(c,'#3c2a52')
  c.strokeStyle='#fff';c.lineWidth=2.2;for(const s of[-1,1]){const ex=-37+s*6;B(c);c.moveTo(ex-3,-9);c.lineTo(ex+3,-3);c.moveTo(ex+3,-9);c.lineTo(ex-3,-3);c.stroke()}
  c.restore()
}
export default(c,_,i)=>{
  const t=K[i][0]
  const a0=-1.25,a1=.36,
    sw=t<.28?0:t<.36?((t-.28)/.08)**2:t<.56?1:t<.7?1-ez((t-.56)/.14):0,
    a=mx(a0,a1,sw)+(t<.28?S(t/.3*P*2)*.06:0)-(t>.36&&t<.44?S((t-.36)/.08*P)*.08:0),
    down=t>=.36&&t<.56,pan=t>=.36&&t<.84,pop=t>=.84?(t-.84)/.16:0,
    m=t<.36?0:t<.48?1:t<.84?2:t<.92?3:0
  const bx=192,by=232
  // ground shadow
  c.fillStyle='rgba(30,20,40,.18)';E(c,bx,by,pan?52:36,5);c.fill()
  const lean=t>.28&&t<.56?mx(-.03,.08,sw):-.03,gx=mx(134,142,sw),gy=mx(140,172,sw)
  c.save();c.translate(88,236);c.rotate(lean);c.translate(-88,-236)
  const x=88,y=100,po=(t<.28?0:t<.4?.45:t<.6?-.3*(1-ez((t-.4)/.2)):0)
  const front=a>-.5
  if(!front)hammer(c,gx,gy,a)
  // ponytail
  c.save();c.translate(x-6,y-52);c.rotate(.05+po);c.scale(.85,.85)
  B(c);c.moveTo(-6,-6);c.bezierCurveTo(-30,-26,-62,-14,-66,18);c.lineTo(-58,10);c.quadraticCurveTo(-62,34,-56,52);c.lineTo(-50,40);c.quadraticCurveTo(-46,58,-34,66);c.quadraticCurveTo(-36,40,-26,24);c.quadraticCurveTo(-16,12,6,8);c.closePath();F(c,H1,3.4)
  c.strokeStyle=HL;c.lineWidth=3;B(c);c.moveTo(-14,-10);c.quadraticCurveTo(-40,-18,-52,6);c.stroke()
  E(c,-2,0,8,7);F(c,'#fff',2.6)
  c.restore()
  // legs
  for(const s of[-1,1]){L(c,SK,13,()=>{c.moveTo(x+12*s,192);c.lineTo(x+22*s,224)})
    B(c);c.roundRect(x+22*s-8,214,16,8,3);F(c,'#fff',2.5)
    B(c);c.moveTo(x+22*s-14+(s>0?2:-4),236);c.quadraticCurveTo(x+22*s-12,220,x+22*s,220);c.quadraticCurveTo(x+22*s+14,222,x+22*s+14+(s>0?4:-2),236);c.closePath();F(c,'#ff3b4e')
    B(c);c.moveTo(x+22*s-12,234);c.lineTo(x+22*s+16,234);c.lineWidth=3;c.strokeStyle='#fff';c.stroke()}
  // shorts
  B(c);c.moveTo(x-24,176);c.lineTo(x-30,202);c.lineTo(x-4,204);c.lineTo(x,194);c.lineTo(x+4,204);c.lineTo(x+30,202);c.lineTo(x+24,176);c.closePath();F(c,'#2a2a3c')
  // torso jacket
  B(c);c.moveTo(x-16,140);c.quadraticCurveTo(x-30,142,x-30,156);c.lineTo(x-27,184);c.lineTo(x+27,184);c.lineTo(x+30,156);c.quadraticCurveTo(x+30,142,x+16,140);c.closePath();F(c,JK)
  B(c);c.moveTo(x,146);c.lineTo(x,184);c.lineWidth=2.5;c.strokeStyle='#fff';c.stroke()
  B(c);c.moveTo(x-12,140);c.lineTo(x,150);c.lineTo(x+12,140);c.lineWidth=3;c.strokeStyle='#fff';c.stroke()
  // head
  B(c);c.rect(x-7,y+36,14,10);F(c,SK,2.5)
  B(c);c.moveTo(x-46,y-2);c.bezierCurveTo(x-46,y-62,x+46,y-62,x+46,y-2);c.bezierCurveTo(x+46,y+24,x+22,y+44,x,y+46);c.bezierCurveTo(x-22,y+44,x-46,y+24,x-46,y-2);F(c,SK)
  for(const s of[-1,1]){B(c);c.moveTo(x+40*s,y-24);c.quadraticCurveTo(x+52*s,y+10,x+44*s,y+34);c.quadraticCurveTo(x+40*s,y+18,x+36*s,y+8);c.closePath();F(c,H2,2.6)}
  face(c,x,y,m)
  B(c);c.moveTo(x-48,y+4);c.bezierCurveTo(x-56,y-46,x-26,y-64,x+2,y-62);c.bezierCurveTo(x+34,y-62,x+56,y-44,x+48,y+4)
  c.lineTo(x+38,y-12);c.lineTo(x+34,y-2);c.lineTo(x+24,y-22);c.lineTo(x+16,y-6);c.lineTo(x+8,y-24);c.lineTo(x-2,y-8);c.lineTo(x-10,y-24);c.lineTo(x-20,y-6);c.lineTo(x-26,y-22);c.lineTo(x-36,y-2);c.lineTo(x-38,y-14);c.closePath();F(c,H1)
  B(c);c.moveTo(x-44,y-28);c.quadraticCurveTo(x,y-56,x+44,y-28);c.lineWidth=12;c.strokeStyle=O;c.stroke();c.lineWidth=7;c.strokeStyle='#fff';c.stroke()
  c.strokeStyle=HL;c.lineWidth=3;B(c);c.arc(x,y-12,42,-2.6,-2.2);c.stroke();B(c);c.arc(x,y-12,42,-.9,-.5);c.stroke()
  brows(c,x,y,m)
  if(m==3){c.font='bold 28px DejaVu Sans';c.textAlign='center';c.lineWidth=5;c.strokeStyle=O;c.strokeText('!',x+52,y-62);c.fillStyle='#ffd84a';c.fillText('!',x+52,y-62)}
  c.restore()
  // bug (under the hammer when down)
  if(pan)flat(c,bx,by)
  else{let sx=1.1,sy=1.1;if(pop>0){const q=S(pop*P*2.5)*(1-pop);sy*=1+q*.5;sx*=1-q*.2}bug(c,bx+4,by,sx,sy,t)}
  // swoosh behind the swing
  if(t>.3&&t<.35){const g0=gx,g1=gy;B(c);c.arc(g0,g1,84,a-1,a-.12);c.arc(g0,g1,48,a-.12,a-.7,1);c.closePath();c.fillStyle='rgba(255,255,255,.85)';c.fill();c.lineWidth=2.5;c.strokeStyle=O;c.stroke()
    for(const r of[58,70]){B(c);c.arc(g0,g1,r,a-.8,a-.25);c.lineWidth=2;c.stroke()}}
  c.save();c.translate(88,236);c.rotate(lean);c.translate(-88,-236)
  if(front)hammer(c,gx,gy,a)
  for(const k of[0,1]){const hx=gx+C(a)*(k?16:4),hy=gy+S(a)*(k?16:4),sx0=k?x+26:x-22
    L(c,JK,13,()=>{c.moveTo(sx0,150);c.quadraticCurveTo(mx(sx0,hx,.5)+(k?6:0),mx(150,hy,.5)+12,hx,hy)})
    E(c,hx,hy,8,8);F(c,SK,2.6)}
  c.restore()
  // impact burst + stars
  if(t>=.36&&t<.52){const p=(t-.36)/.16,r=16+p*26
    c.save();c.translate(bx-6,by-4);c.globalAlpha=1-p*.5
    B(c);for(let k=0;k<16;k++){const q=P+k*P/15,rr=k%2?r*.5:r;c.lineTo(C(q)*rr*1.6,S(q)*rr*.9)}c.closePath();F(c,'#fff3a0',2.5)
    c.restore()}
  if(t>=.52&&t<.84){const p=(t-.52)/.32;for(let k=0;k<3;k++){const q=p*2*P+k*2*P/3,sx2=bx-30+C(q)*20,sy2=by-24+S(q)*6
    B(c);for(let j=0;j<10;j++){const u=j*P/5-P/2,rr=j%2?2.6:6.5;c.lineTo(sx2+C(u)*rr,sy2+S(u)*rr)}c.closePath();F(c,'#ffd84a',2)}}
}
