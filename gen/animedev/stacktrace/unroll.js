// pink-haired girl unrolls an error scroll, a long red stack trace spills to the floor and she goes pale, then she rolls it back up
export const frames=30,delay=70,rim=4
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
const SK='#ffe6e0',H1='#ffa6c9',H2='#e77fa8',HL='#ffd3e4',K1='#5a3a8e',K2='#c7a6ff',PA='#fffaf0',RD='#e8323f'
// face shape path
const fp=(c,x,y)=>{B(c);c.moveTo(x-46,y-2);c.bezierCurveTo(x-46,y-62,x+46,y-62,x+46,y-2);c.bezierCurveTo(x+46,y+24,x+22,y+44,x,y+46);c.bezierCurveTo(x-22,y+44,x-46,y+24,x-46,y-2)}
export default(c,t,i)=>{
  // unrolled length: drops fast, keeps pouring, then zips back up
  const U=t<.08?0:t<.78?mx(0,300,ez((t-.08)/.7)**.8):mx(300,0,ez((t-.78)/.12)),
    pale=ez((t-.2)/.18)*(1-ez((t-.8)/.1)),x=112,y=74,R=134,dx=t>.42&&t<.62?(i%2?1.5:-1.5):0
  c.save();c.translate(dx,0)
  // ---- long wavy hair behind
  B(c);c.moveTo(x-46,y-20);c.bezierCurveTo(x-70,y+20,x-58,y+70,x-70,y+110);c.quadraticCurveTo(x-60,y+122,x-50,y+116);c.quadraticCurveTo(x-40,y+130,x-28,y+118)
  c.lineTo(x+28,y+118);c.quadraticCurveTo(x+40,y+130,x+50,y+116);c.quadraticCurveTo(x+60,y+122,x+70,y+110);c.bezierCurveTo(x+58,y+70,x+70,y+20,x+46,y-20);c.closePath();F(c,H2)
  // bow behind head
  for(const s of[-1,1]){B(c);c.moveTo(x+30,y-50);c.bezierCurveTo(x+30+s*30,y-80+s*6,x+30+s*36,y-40,x+30,y-50);F(c,'#fff')}
  // legs (nervous A-stance) + shoes
  for(const s of[-1,1]){L(c,'#fff',11,()=>{c.moveTo(x+14*s,y+122);c.quadraticCurveTo(x+12*s,y+142,x+24*s,y+152)})
    B(c);c.moveTo(x+26*s-12,y+164);c.quadraticCurveTo(x+26*s-12,y+150,x+26*s,y+150);c.quadraticCurveTo(x+26*s+13,y+152,x+26*s+13,y+164);c.closePath();F(c,'#5a4a7a',2.6)}
  // skirt
  B(c);c.moveTo(x-30,y+96);c.lineTo(x-42,y+128);c.quadraticCurveTo(x,y+136,x+42,y+128);c.lineTo(x+30,y+96);c.closePath();F(c,'#3a4f9a')
  // body (blouse) + sailor collar
  B(c);c.moveTo(x-18,y+42);c.quadraticCurveTo(x-40,y+46,x-40,y+70);c.lineTo(x-34,y+102);c.quadraticCurveTo(x,y+106,x+34,y+102);c.lineTo(x+40,y+70);c.quadraticCurveTo(x+40,y+46,x+18,y+42);c.closePath();F(c,'#fff')
  B(c);c.moveTo(x-20,y+42);c.lineTo(x-34,y+62);c.lineTo(x,y+74);c.lineTo(x+34,y+62);c.lineTo(x+20,y+42);c.closePath();F(c,'#3a4f9a',2.6)
  B(c);c.moveTo(x-8,y+66);c.lineTo(x+8,y+66);c.lineTo(x+12,y+84);c.lineTo(x,y+76);c.lineTo(x-12,y+84);c.closePath();F(c,RD,2.4)
  // ---- head
  B(c);c.rect(x-7,y+36,14,10);F(c,SK,2.5)
  fp(c,x,y);F(c,SK)
  // pale gloom overlay
  if(pale>0){c.save();fp(c,x,y);c.clip();const g=c.createLinearGradient(0,y-40,0,y+30);g.addColorStop(0,`rgba(90,80,200,${.75*pale})`);g.addColorStop(1,'rgba(150,170,255,0)');c.fillStyle=g;c.fillRect(x-50,y-60,100,100)
    c.restore()}
  c.fillStyle=`rgba(255,120,150,${.4*(1-pale)})`;E(c,x-27,y+22,8,4.5);c.fill();E(c,x+27,y+22,8,4.5);c.fill()
  // eyes: curious, then tiny shocked pupils
  const r=mx(1,.42,pale),ly=mx(4,0,pale)
  eye(c,x-21,y+6,-1,K1,K2,0,ly,r);eye(c,x+21,y+6,1,K1,K2,0,ly,r)
  // mouth: small o, then wobbly
  if(pale<.5){E(c,x,y+31,3.5,4);F(c,'#8c2f3f',2.2)}
  else{B(c);c.moveTo(x-11,y+32);for(let k=1;k<=6;k++)c.lineTo(x-11+k*3.7,y+32+(k%2?-3:2));c.lineWidth=2.6;c.strokeStyle=O;c.stroke()}
  // bangs, soft waves
  B(c);c.moveTo(x-52,y+30);c.bezierCurveTo(x-64,y-44,x-28,y-64,x+2,y-62);c.bezierCurveTo(x+34,y-62,x+64,y-44,x+52,y+30)
  c.bezierCurveTo(x+48,y+12,x+46,y,x+38,y-8);c.bezierCurveTo(x+34,y+2,x+26,y+2,x+24,y-10);c.bezierCurveTo(x+18,y-2,x+10,y-4,x+8,y-16)
  c.bezierCurveTo(x+2,y-4,x-10,y-4,x-12,y-16);c.bezierCurveTo(x-16,y-4,x-26,y,x-28,y-10);c.bezierCurveTo(x-34,y,x-42,y,x-40,y-8);c.bezierCurveTo(x-48,y+2,x-48,y+12,x-52,y+30);F(c,H1)
  c.strokeStyle=HL;c.lineWidth=3.5;B(c);c.arc(x,y-8,44,-2.55,-2);c.stroke();B(c);c.arc(x,y-8,44,-1.15,-.7);c.stroke()
  if(pale>0){c.save();c.strokeStyle=`rgba(70,50,150,${pale})`;c.lineWidth=2.4;for(const k of[-26,-17,-8,1,10,19,28]){B(c);c.moveTo(x+k,y-40+(k&4));c.lineTo(x+k,y-18+(k*7&7));c.stroke()}c.restore()}
  // brows
  c.lineWidth=2.6;c.strokeStyle=O;for(const s of[-1,1]){B(c);c.moveTo(x+31*s,y-16+pale*2);c.quadraticCurveTo(x+22*s,y-22-pale*3,x+12*s,y-19-pale*5);c.stroke()}
  // sweat drops when pale
  if(pale>.3){for(const[dx,dy,k]of[[48,-10,1],[-50,4,.8]]){c.save();c.translate(x+dx,y+dy);c.scale(k,k);B(c);c.moveTo(0,-11);c.quadraticCurveTo(8,0,0,7);c.quadraticCurveTo(-8,0,0,-11);F(c,'#9fd8ff',2.2);c.restore()}}
  // ---- the stack trace paper
  const px0=x-34,px1=x+34,hang=Math.min(U,226-R),flo=Math.max(0,U-(226-R)),lh=9
  if(U>0){
    // hanging part
    B(c);c.rect(px0,R,px1-px0,hang);F(c,PA,2.6)
    c.save();B(c);c.rect(px0,R+2,px1-px0,hang-2);c.clip()
    // lines anchored to the paper's leading end, so they pour downward
    const top=R+hang-U
    for(let k=0;k<40;k++){const ly2=top+6+k*lh;if(ly2<R-4||ly2>R+hang+4)continue
      if(k==0){c.fillStyle=RD;c.font='bold 12px DejaVu Sans Mono';c.fillText('Error',px0+6,ly2+5)}
      else{c.fillStyle=k%5==1?'#b51f2c':'#ff6b6b';c.fillRect(px0+(k%3?12:6),ly2,[44,36,48,30,40][k%5],3.4)}}
    c.restore()
    // floor run, then a fan-fold stack piling up beside her
    if(flo>0){const fl=Math.min(flo,70),y0=226
      c.save();c.translate(-dx,0)
      B(c);c.moveTo(px0,y0);c.lineTo(px1,y0);c.lineTo(px1+fl,y0+2);c.lineTo(px1+fl-8,y0+13);c.lineTo(px0-6,y0+12);c.closePath();F(c,PA,2.6)
      c.fillStyle='#ff6b6b';for(let k=0;k<9;k++){const lx2=px0+4+((k*13+flo*.8)%(fl+64));if(lx2<px1+fl-12)c.fillRect(lx2,y0+4,2.6,6)}
      const n=Math.min(7,Math.floor(Math.max(0,flo-70)/20)),sx=px1+38
      for(let k=0;k<n;k++){const yy=y0-2-k*7
        B(c);c.moveTo(sx-26,yy+7);c.lineTo(sx+30,yy+7);c.lineTo(sx+24,yy);c.lineTo(sx-20,yy);c.closePath();F(c,PA,2.4)
        B(c);if(k%2){c.moveTo(sx+30,yy+7);c.quadraticCurveTo(sx+34,yy+3,sx+24,yy)}else{c.moveTo(sx-26,yy+7);c.quadraticCurveTo(sx-30,yy+3,sx-20,yy)}c.lineWidth=2.4;c.stroke()
        c.fillStyle=k%2?'#b51f2c':'#ff6b6b';c.fillRect(sx-14,yy+2.4,[30,22,34,26][k%4],2.4)}
      c.restore()}
  }
  // roll + hands
  B(c);c.roundRect(px0-10,R-9,px1-px0+20,16,8);F(c,'#f1e3c4')
  for(const s of[-1,1]){E(c,s<0?px0-12:px1+12,R-1,5,9);F(c,'#c98a54',2.4)}
  for(const s of[-1,1]){const hx=s<0?px0-4:px1+4
    L(c,'#fff',13,()=>{c.moveTo(x+40*s,y+64);c.quadraticCurveTo(x+52*s,y+90,hx+4*s,R-4)})
    E(c,hx,R-2,8,8);F(c,SK,2.6)}
  c.restore()
}
