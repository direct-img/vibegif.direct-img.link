// calm girl with long navy-to-teal half-up hair and a ribbon sipping tea with eyes closed while the PROD server rack behind her burns, this is fine
export const frames=16,delay=90,rim=3
export default(c,t)=>{
  const P=Math.PI,S=Math.sin,T=2*P*t,K='#24191c',sk='#fff0e6',ss='#f3cbbb',hs='#162050',hl='#7f9be0'
  const B=()=>c.beginPath(),M=(x,y)=>c.moveTo(x,y),L=(x,y)=>c.lineTo(x,y),Q=(a,b,x,y)=>c.quadraticCurveTo(a,b,x,y),Z=(a,b,d,e,x,y)=>c.bezierCurveTo(a,b,d,e,x,y)
  const E=(x,y,a,b=a,r=0)=>{B();c.ellipse(x,y,a,b,r,0,2*P)}
  const F=(f,w=3.5)=>{c.fillStyle=f;c.fill();if(w){c.lineWidth=w;c.stroke()}}
  const W=(w,s=K)=>{c.lineWidth=w;c.strokeStyle=s;c.stroke();c.strokeStyle=K}
  const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
  // hair gradient, navy roots to teal tips, offset for the current translate
  const g=o=>{const q=c.createLinearGradient(0,40-o,0,232-o);for(let k=0;k<10;k++){const u=Math.max(0,k-3)/6,f=`rgb(${34+28*u|0},${51+148*u|0},${110+69*u|0})`;q.addColorStop(k/10,f);q.addColorStop((k+1)/10-.001,f)}return q}
  c.strokeStyle=K
  // flames: a row of flickering tongues, three layers
  const fire=(x0,x1,y,h,n,o)=>[['#e8452c',1],['#ff9a2e',.72],['#ffe066',.42]].forEach(([f,k],l)=>{
    B();M(x0,y);for(let j=0;j<n;j++){const a=x0+(x1-x0)*j/n,b=x0+(x1-x0)*(j+1)/n,m=(a+b)/2,q=2+(j+o)%2,
      hh=h*k*(.75+.25*S(T*q+j*2.1+o))*(j%2?.8:1),tx=m+S(T*q+j+l)*5
      Q(a+2,y-hh*.55,tx,y-hh);Q(b-2,y-hh*.55,b,y)}
    c.closePath();F(f,l?0:3.5)})
  // smoke puffs rising off the blaze
  for(let k=0;k<3;k++){const p=(t+k/3)%1,x=150+k*34+S(T+k*2)*6,y=50-p*24;c.globalAlpha=Math.min(1,p*5,(1-p)*2.5)*.85;const r=6+p*5;c.fillStyle='#7d7a88';for(const[a,b,q]of[[-r,2,.8],[r,2,.8],[0,-r*.5,1]]){E(x+a,y+b,r*q);c.fill()}c.globalAlpha=1}
  fire(112,242,104,90,6,0)
  // embers drifting up
  for(let k=0;k<7;k++){const p=(t+k/7)%1,x=118+k*19+S(T+k)*6,y=64-p*44;c.globalAlpha=Math.min(1,p*5)*(1-p);E(x,y,2.5);F(k%2?'#ffd34d':'#ff7a2e',0);c.globalAlpha=1}
  // server rack
  B();c.roundRect(124,84,112,162,6);F('#3b3f4c')
  B();c.roundRect(150,90,64,22,4);F('#ffd34d',2.5);c.fillStyle=K;c.font='bold 17px DejaVu Sans';c.textAlign='center';c.fillText('PROD',182,108)
  for(let k=0;k<4;k++){const y=118+k*32
    B();c.roundRect(132,y,96,26,3);F('#5b6272',2.5)
    for(let v=0;v<4;v++){B();M(150+v*10,y+7);L(150+v*10,y+19);W(2.5,'#3b3f4c')}
    for(let v=0;v<3;v++){const on=(k*3+v+Math.floor(t*8))%4;E(198+v*9,y+13,3);F(on?'#5dff8a':'#ff4b4b',1.5)}}
  E(225,101,4);F(Math.floor(t*8)%2?'#ff4b4b':'#7a2a2a',2)
  // fire bursting out of the units
  fire(196,238,146,40,2,1);fire(204,240,210,34,2,0)
  // long hair falling down the back, tips going teal
  const hx=88,hy=104
  B();M(hx-52,hy-10);Z(hx-58,hy-80,hx+58,hy-80,hx+52,hy-10);Q(hx+64,hy+60,hx+58,hy+126);L(hx+46,hy+112);L(hx+36,hy+128);L(hx+22,hy+114);L(hx-22,hy+114);L(hx-36,hy+128);L(hx-46,hy+112);L(hx-58,hy+126);Q(hx-64,hy+60,hx-52,hy-10);c.closePath();F(g(0))
  // coral ribbon tying the half-up section, peeking out behind the head
  c.save();c.translate(hx,hy)
  for(const s of[-1,1]){B();M(0,-52);Q(s*20,-84,s*48,-72);Q(s*54,-52,s*40,-42);Q(s*20,-44,0,-52);F('#f27a8c',3);B();M(s*10,-55);Q(s*28,-68,s*42,-63);W(2,'#c94f63')}
  c.restore()
  // legs and loafers
  for(const x of[74,102]){B();c.roundRect(x-8,214,16,22,4);F('#2a2733');B();c.ellipse(x,238,12,7,0,P,0);L(x-12,238);F('#7a4a32')}
  // skirt, cardigan body
  B();M(54,196);L(122,196);L(132,224);Q(88,232,44,224);c.closePath();F('#3b4d7a')
  const tor=()=>{B();M(62,150);Q(88,140,114,150);Q(126,156,126,182);L(128,204);L(48,204);L(50,182);Q(50,156,62,150)}
  tor();F('#f3e6cc');c.save();tor();c.clip();B();M(108,140);Q(130,170,124,210);L(150,210);L(150,140);F('#dccaa6',0);c.restore();tor();W(3.5)
  B();M(78,148);L(88,204);L(98,148);c.closePath();F('#3b4d7a',2.5)
  for(const y of[178,194]){E(80+(y-170)*.05,y,2.5);F('#c8a46a',1.5)}
  // head
  c.save();c.translate(hx,hy)
  const face=()=>{B();M(-48,-6);Z(-48,26,-25,44,0,45);Z(25,44,48,26,48,-6);c.arc(0,-6,48,0,P,true)}
  face();F(sk)
  // soft wispy fringe and tapered strands framing the face
  const bang=()=>{B();M(-54,-2);Z(-58,-74,58,-74,54,-2);Q(46,-6,40,4);Q(34,-12,26,-2);Q(18,-14,8,0);Q(2,-16,-6,-2);Q(-14,-14,-22,2);Q(-30,-10,-36,0);Q(-44,-8,-54,-2)}
  c.save();face();c.clip();c.translate(0,6);bang();F(ss,0);c.restore()
  const hg=g(hy)
  for(const s of[-1,1]){B();M(s*52,-20);Q(s*58,16,s*48,52);Q(s*44,22,s*36,-6);c.closePath();F(hg)}
  bang();F(hg)
  for(const[a,b]of[[-2.6,-2.25],[-2,-1.75],[-1.5,-1.2]]){B();c.arc(0,-10,44,a,b);W(4,hl)}
  B();M(-24,-54);Q(-28,-30,-22,-8);M(20,-54);Q(24,-30,18,-8);W(2,hs)
  // eyes closed, serene
  for(const s of[-1,1]){const x=s*20
    B();M(x-10,16);Q(x,24,x+10,16);W(3.5);B();M(x+10*s,16);L(x+14*s,13);W(3)
    B();M(x-6,1);Q(x,-1,x+7,1);W(2.5,'#2a3360')
    E(s*31,27,7,3.5);c.fillStyle='rgba(255,120,130,.35)';c.fill()}
  // sip timeline: cup rises to the lips, rests, lowers
  const u=sm((t-.12)/.22)-sm((t-.62)/.22)
  if(u<.5){B();M(-6,33);Q(0,38,6,33);W(2.5)}
  c.restore()
  // saucer hand
  B();M(56,162);Q(58,190,82,200);W(17);W(10,'#f3e6cc')
  E(92,202,22,5);F('#fff',3);E(86,199,7);F(sk,3)
  // cup hand and teacup
  const cx=96+u*-6,cy=190-u*52
  B();M(120,160);Q(130,cy+20,cx+16,cy+2);W(17);W(10,'#f3e6cc')
  B();M(cx-13,cy-12);L(cx+13,cy-12);Q(cx+12,cy+6,cx+4,cy+8);L(cx-4,cy+8);Q(cx-12,cy+6,cx-13,cy-12);F('#fff',3)
  B();M(cx-12,cy-4);L(cx+12,cy-4);W(3,'#5b8fd6');B();c.arc(cx+14,cy-3,5,-1.4,1.4);W(3)
  E(cx+16,cy+2,7);F(sk,3)
  // steam curls
  for(let k=0;k<2;k++){const p=(t*2+k/2)%1,x=cx-4+k*8,y=cy-16-p*26
    c.globalAlpha=Math.min(1,(1-p)*2,p*4);B();M(x,y);Q(x+5,y-5,x,y-10);Q(x-5,y-15,x,y-20);W(2.5,'#9aa4b8');c.globalAlpha=1}
}
