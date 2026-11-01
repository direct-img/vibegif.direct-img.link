// anime girl with a wavy black bob, big red bow and yellow sundress smashes a champagne bottle on a little ship labelled v1.0, foam and confetti burst, ship rocks and toots, she cheers and grabs the next bottle
export const frames=24,delay=95,rim=3
const P=Math.PI,{sin,cos,min,max,abs,exp}=Math,L='#2b1d26'
const E=t=>t<0?0:t>1?1:t*t*(3-2*t),sg=(t,a,b)=>E((t-a)/(b-a))
const F=(c,f,col,w=3.5)=>{c.beginPath();f();c.fillStyle=col;c.fill();if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const T=(c,p,w,col)=>{c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))q.length>2?c.quadraticCurveTo(...q):c.lineTo(...q)
  c.lineWidth=w+7;c.strokeStyle=L;c.stroke();c.lineWidth=w;c.strokeStyle=col;c.stroke()}
const O=(c,x,y,a,b,col,w=3.5,r=0)=>F(c,()=>c.ellipse(x,y,a,b,r,0,2*P),col,w)
const bangs=(c,p,col)=>F(c,()=>{c.moveTo(...p[0]);c.bezierCurveTo(52,-44,26,-60,0,-60);c.bezierCurveTo(-26,-60,-52,-44,p.at(-1)[0],p.at(-1)[1])
  for(let k=p.length-1;k>0;k--){const[a,b]=p[k],[x,y]=p[k-1];y>b?c.quadraticCurveTo(a,b+(y-b)*.8,x,y):c.quadraticCurveTo(x,y+(b-y)*.45,x,y)}},col)
const SK='#fde4d5',HR='#17151d',HL='#5b6286',NV='#24376b',GD='#f2c230',I=['#123a78','#4f97ea','#0a1d40'],YD='#ffd23f',RB='#e0313f'
const eye=(c,x,y,s,k,lx=0)=>{
  c.save();c.translate(x,y);c.strokeStyle=L
  if(k){c.beginPath();c.moveTo(-9,3);c.quadraticCurveTo(0,-8,9,3);c.lineWidth=3.6;c.stroke();c.restore();return}
  c.save();c.beginPath();c.ellipse(0,0,9.5,12.5,0,0,2*P);c.fillStyle='#fff';c.fill();c.clip()
  const g=c.createLinearGradient(0,-12,0,12);g.addColorStop(.1,I[0]);g.addColorStop(.85,I[1])
  c.beginPath();c.ellipse(lx,1,8.2,11.5,0,0,2*P);c.fillStyle=g;c.fill()
  c.beginPath();c.ellipse(lx,0,4,6,0,0,2*P);c.fillStyle=I[2];c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(lx-3,-4.5,3.4,0,2*P);c.fill();c.beginPath();c.arc(lx+3.5,5,1.7,0,2*P);c.fill()
  c.restore()
  c.beginPath();c.moveTo(-10*s,-8.5);c.quadraticCurveTo(0,-15,11*s,-11);c.lineTo(13.5*s,-14);c.lineWidth=3.6;c.stroke()
  c.beginPath();c.moveTo(-3*s,13);c.quadraticCurveTo(4*s,13.5,7.5*s,10);c.lineWidth=1.6;c.stroke()
  c.restore()
}
// champagne bottle pointing along +x from the hand; broken = only the neck
const bottle=(c,x,y,a,broken)=>{c.save();c.translate(x,y);c.rotate(a)
  if(broken)F(c,()=>{c.moveTo(-14,-4);c.lineTo(4,-5);c.lineTo(8,-9);c.lineTo(11,-3);c.lineTo(9,1);c.lineTo(12,5);c.lineTo(4,5);c.lineTo(-14,4);c.closePath()},'#3f9a5a',3)
  else{F(c,()=>{c.moveTo(-14,-4);c.lineTo(0,-4);c.quadraticCurveTo(6,-9,12,-9);c.lineTo(32,-9);c.quadraticCurveTo(36,-9,36,-5);c.lineTo(36,5);c.quadraticCurveTo(36,9,32,9);c.lineTo(12,9);c.quadraticCurveTo(6,9,0,4);c.lineTo(-14,4);c.closePath()},'#3f9a5a',3)
    F(c,()=>c.rect(16,-6,12,12),'#f6efd8',2);c.strokeStyle='#bfe6c8';c.lineWidth=2.5;c.beginPath();c.moveTo(12,-5);c.lineTo(32,-5);c.stroke()}
  F(c,()=>c.rect(-17,-5,9,10),GD,2.5)
  c.restore()}
export default(c,t)=>{
  c.lineJoin=c.lineCap='round'
  // swing angle of the bottle arm through the loop (degrees): wind up, smash, triumph, cheer, reach into crate, wind up
  const K=[[0,-72],[.1,-82],[.19,12],[.24,8],[.34,-50],[.42,-66],[.5,-54],[.58,-68],[.66,-56],[.76,74],[.82,72],[.94,-72],[1,-72]]
  let th=-72;for(let j=1;j<K.length;j++)if(t<=K[j][0]){const[a,p]=K[j-1],[b,q]=K[j];th=p+(q-p)*E((t-a)/(b-a));break}
  th*=P/180
  const broken=t>=.2&&t<.4,cheer=sg(t,.36,.42)*(1-sg(t,.66,.72)),happy=t>.24&&t<.72
  // ship rocks after the hit and toots
  const u=max(0,t-.2),rk=t>.2?.09*sin(u*7*P)*exp(-u*5)*(1-sg(t,.5,.62)):0,sx=Math.round(6*sg(t,.2,.3)*(1-sg(t,.8,.96)))
  // water
  const wv=(y,ph,col,w,x0=30,x1=246)=>F(c,()=>{c.moveTo(x0,y+8);for(let x=x0;x<=x1;x+=4)c.lineTo(x,y+sin(x/24+ph)*2.5);c.quadraticCurveTo(x1+2,y+20,x1-24,246-(y>205?6:0));c.lineTo(x0+30,246-(y>205?6:0));c.quadraticCurveTo(x0-6,y+24,x0,y+8);c.closePath()},col,w)
  // ship
  c.save();c.translate(183+sx,206);c.rotate(rk)
  for(let j=0;j<3;j++){const p=(t*1.5+j/3)%1;c.globalAlpha=sin(p*P);O(c,14+p*14,-104-p*40,6+p*8,5+p*6,'#f4f4f4',2.5);c.globalAlpha=1}
  F(c,()=>{c.moveTo(6,-60);c.lineTo(10,-96);c.lineTo(28,-96);c.lineTo(26,-60)},'#e14b4b')
  F(c,()=>c.rect(9,-96,19,8),'#2b2b2b',3)
  F(c,()=>c.roundRect(-34,-62,64,30,4),'#fbfbfb')
  F(c,()=>c.rect(-38,-66,72,7),NV,3)
  for(const x of[-22,-6,10])O(c,x,-46,5,5,'#9fd3f5',2.5)
  c.strokeStyle=L;c.lineWidth=3;c.beginPath();c.moveTo(-46,-34);c.lineTo(-46,-74);c.stroke()
  F(c,()=>{const w=sin(t*6*P)*3;c.moveTo(-46,-74);c.quadraticCurveTo(-36,-76+w,-26,-70);c.quadraticCurveTo(-36,-66-w,-46,-62)},GD,2.5)
  F(c,()=>{c.moveTo(-54,-34);c.lineTo(56,-38);c.quadraticCurveTo(54,-14,40,2);c.lineTo(-44,2);c.quadraticCurveTo(-52,-14,-54,-34)},NV)
  c.save();c.beginPath();c.moveTo(-54,-34);c.lineTo(56,-38);c.quadraticCurveTo(54,-14,40,2);c.lineTo(-44,2);c.quadraticCurveTo(-52,-14,-54,-34);c.clip()
  c.fillStyle='#d94141';c.fillRect(-60,-8,120,14);c.restore()
  c.beginPath();c.moveTo(-54,-34);c.lineTo(56,-38);c.lineWidth=3;c.strokeStyle=L;c.stroke()
  c.font='bold 21px DejaVu Sans Mono';c.textAlign='center';c.textBaseline='middle';c.fillStyle='#fff';c.fillText('v1.0',4,-21)
  c.restore()
  wv(206,0,'#4aa3df',3.5)
  // dock + crate
  for(const x of[36,112])F(c,()=>c.rect(x-5,218,10,18),'#8a5d39',3)
  F(c,()=>c.rect(10,210,118,9),'#a8754a',3)
  wv(226,2,'#2f86c8',0,44,236)
  for(const x of[98,106,114])F(c,()=>c.rect(x-3,180,6,14),'#3f9a5a',2.5),F(c,()=>c.rect(x-3,178,6,5),GD,2)
  F(c,()=>c.rect(90,190,32,20),'#c08a55');c.strokeStyle=L;c.lineWidth=2;c.beginPath();c.moveTo(90,200);c.lineTo(122,200);c.stroke()
  // girl
  const gx=58,ch=cheer
  for(const s of[-1,1]){T(c,[[gx+s*9,188],[gx+s*10,204]],12,SK);O(c,gx+s*12,209,11,6,RB)}
  // bow ribbons sway with the swing and the cheering
  const pw=.12*sin(th*2+2.8)*sg(t,.08,.16)*(1-sg(t,.3,.4))+.12*sin(t*12*P)*cheer
  // wavy chin-length bob behind the face
  c.save();c.translate(gx,86)
  F(c,()=>{c.moveTo(-40,-16);c.bezierCurveTo(-50,4,-48,24,-46,36);c.quadraticCurveTo(-40,44,-32,38);c.quadraticCurveTo(-24,46,-16,38);c.lineTo(16,38);c.quadraticCurveTo(24,46,32,38);c.quadraticCurveTo(40,44,46,36);c.bezierCurveTo(48,24,50,4,40,-16);c.closePath()},HR)
  c.restore()
  // sundress: bare shoulders, straps, flared skirt
  F(c,()=>c.rect(gx-6,124,12,12),SK,3)
  F(c,()=>{c.moveTo(gx-12,134);c.quadraticCurveTo(gx-26,136,gx-24,148);c.lineTo(gx+24,148);c.quadraticCurveTo(gx+26,136,gx+12,134);c.closePath()},SK)
  F(c,()=>{c.moveTo(gx-20,146);c.quadraticCurveTo(gx,141,gx+20,146);c.lineTo(gx+22,164);c.quadraticCurveTo(gx+36,184,gx+34,196);c.quadraticCurveTo(gx,202,gx-34,196);c.quadraticCurveTo(gx-36,184,gx-22,164);c.closePath()},YD)
  c.strokeStyle=L;c.lineWidth=3;for(const s of[-1,1]){c.beginPath();c.moveTo(gx+s*15,145);c.lineTo(gx+s*17,135);c.stroke()}
  c.strokeStyle='#fff';c.lineWidth=2.5;c.beginPath();c.moveTo(gx-31,192);c.quadraticCurveTo(gx,198,gx+31,192);c.stroke()
  c.strokeStyle='#e8a91c';c.lineWidth=2;c.beginPath();c.moveTo(gx-21,164);c.quadraticCurveTo(gx,168,gx+21,164);c.stroke()
  c.fillStyle='#fff';for(const[x,y]of[[-14,178],[8,184],[20,174],[-4,170]]){c.beginPath();c.arc(gx+x,y,2.2,0,2*P);c.fill()}
  // left arm: on hip, raised when cheering
  const lx=gx-34-ch*10,ly=172-ch*94+sin(t*12*P)*ch*4
  T(c,[[gx-20,142],[gx-34-ch*10,158-ch*30,lx,ly]],10,SK);O(c,lx,ly,7,7,SK,3)
  // head
  c.save();c.translate(gx,86)
  F(c,()=>{c.moveTo(-37,-8);c.bezierCurveTo(-38,22,-18,41,0,43);c.bezierCurveTo(18,41,38,22,37,-8);c.bezierCurveTo(37,-42,-37,-42,-37,-8)},SK)
  for(const s of[-1,1])eye(c,s*17,12,s,happy,3)
  c.fillStyle='rgba(245,120,130,.45)';for(const s of[-1,1]){c.beginPath();c.ellipse(s*25,26,7,3.5,0,0,2*P);c.fill()}
  c.fillStyle='#d99a86';c.beginPath();c.arc(2,25,1.3,0,2*P);c.fill()
  if(happy)F(c,()=>{c.moveTo(-9,29);c.quadraticCurveTo(0,44,9,29);c.closePath()},'#8a2f3d',2.6),F(c,()=>{c.moveTo(-5,36);c.quadraticCurveTo(0,32,5,36);c.quadraticCurveTo(0,40,-5,36)},'#f07a86',0)
  else{c.beginPath();c.moveTo(-5,31);c.quadraticCurveTo(1,35,7,30);c.lineWidth=2.6;c.strokeStyle=L;c.stroke()}
  for(const s of[-1,1])F(c,()=>{c.moveTo(s*36,-14);c.bezierCurveTo(s*48,4,s*38,18,s*46,32);c.quadraticCurveTo(s*44,40,s*36,38);c.quadraticCurveTo(s*40,32,s*34,26);c.quadraticCurveTo(s*30,10,s*29,-6)},HR,3)
  bangs(c,[[44,2],[37,-10],[31,4],[23,-12],[15,4],[7,-12],[-1,4],[-9,-12],[-17,4],[-25,-12],[-32,4],[-38,-8],[-44,2]],HR)
  c.strokeStyle=HL;c.lineWidth=4;for(const a of[-2.55,-2.2,-1.35])c.beginPath(),c.arc(0,-6,44,a,a+.22),c.stroke()
  c.strokeStyle=L;c.lineWidth=2.6;for(const s of[-1,1]){const r=happy?-3:2*s;c.beginPath();c.moveTo(s*9,-4+r);c.quadraticCurveTo(s*17,-7+r,s*25,-5+(happy?-3:0));c.stroke()}
  // big red bow with swaying ribbon tails
  c.save();c.translate(20,-52);c.rotate(.25)
  for(const s of[-1,1]){c.save();c.rotate(s*.75+pw*2);F(c,()=>{c.moveTo(s*2,4);c.quadraticCurveTo(s*7,14,s*5,20);c.lineTo(s*1,17);c.lineTo(s*-2,21);c.quadraticCurveTo(s*0,12,s*-1,4)},RB,3);c.restore()}
  for(const s of[-1,1])F(c,()=>{c.moveTo(0,0);c.bezierCurveTo(s*10,-20,s*28,-14,s*24,0);c.bezierCurveTo(s*28,14,s*10,18,0,0)},RB,3.2)
  c.strokeStyle='#a81c2a';c.lineWidth=2;for(const s of[-1,1]){c.beginPath();c.moveTo(s*6,-3);c.quadraticCurveTo(s*14,-8,s*18,-4);c.stroke()}
  O(c,0,0,6,6.5,RB,3);c.restore()
  c.restore()
  // bottle arm
  const ax=gx+20,ay=142,hx=ax+cos(th)*34,hy=ay+sin(th)*34
  T(c,[[ax,ay],[ax+cos(th-.5)*20,ay+sin(th-.5)*20,hx,hy]],10,SK)
  const has=t<.2||t>=.8
  if(has||broken)bottle(c,hx+cos(th)*14,hy+sin(th)*14,th,broken)
  O(c,hx,hy,7.5,7.5,SK,3)
  // tossed neck plops in the water
  if(t>.4&&t<.56){const p=(t-.4)/.16;c.save();c.globalAlpha=1-sg(p,.7,1);bottle(c,gx+54+p*50,106-sin(p*P)*50+p*104,p*9,1);c.restore()}
  // smash: foam burst, glass shards, then confetti
  if(t>=.19&&t<.4){const p=(t-.19)/.21,bx=140+sx,by=184
    c.globalAlpha=1-sg(p,.5,1)
    F(c,()=>{for(let j=0;j<=16;j++){const a=j*P/8,r=(j%2?14:30)*E(min(1,p*3))*(1+p*.4);c.lineTo(bx+cos(a)*r,by+sin(a)*r)}},'#fff6c2',3)
    for(let j=0;j<9;j++){const a=-P*.95+j*P/8*1.1,r=10+p*44;O(c,bx+cos(a)*r,by+sin(a)*r*.8+p*p*20,5*(1-p)+2,5*(1-p)+2,j%3?'#fff':'#ffe58a',2)}
    for(let j=0;j<6;j++){const a=-P*.9+j*.5,r=14+p*56;c.save();c.translate(bx+cos(a)*r,by+sin(a)*r+p*p*36);c.rotate(p*8+j);F(c,()=>{c.moveTo(-4,-3);c.lineTo(5,-1);c.lineTo(-1,5);c.closePath()},'#a8e6b8',2);c.restore()}
    c.globalAlpha=1}
  if(t>.2&&t<.75)for(let j=0;j<11;j++){const p=(t-.2)/.55,v=1-(1-min(1,p*2.2))**2,x=140+(j-5)*11*v+sin(p*7+j)*6*p,y=180-v*(130+(j%4)*10)+p*p*120
    c.save();c.globalAlpha=1-sg(p,.75,1);c.translate(x,y);c.rotate(p*10+j);c.fillStyle=['#ff5d73','#ffcf3a','#4cc3ff','#7be07b','#c084fc'][j%5];c.fillRect(-4,-2,8,4);c.restore()}
}
