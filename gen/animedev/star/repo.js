// anime girl with long gold-cuffed box braids worn half-up pokes a repo's Star button and a big gold star pops out and twinkles while her eyes sparkle
export const frames=24,delay=90,rim=3
const P=Math.PI,{sin,cos,min,max,abs}=Math,L='#2b1d26'
const E=t=>t<0?0:t>1?1:t*t*(3-2*t),sg=(t,a,b)=>E((t-a)/(b-a))
const F=(c,f,col,w=3.5)=>{c.beginPath();f();c.fillStyle=col;c.fill();if(w){c.lineWidth=w;c.strokeStyle=L;c.stroke()}}
const T=(c,p,w,col)=>{c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))q.length>2?c.quadraticCurveTo(...q):c.lineTo(...q)
  c.lineWidth=w+7;c.strokeStyle=L;c.stroke();c.lineWidth=w;c.strokeStyle=col;c.stroke()}
const O=(c,x,y,a,b,col,w=3.5)=>F(c,()=>c.ellipse(x,y,a,b,0,0,2*P),col,w)
const star=(c,x,y,r,a=0,k=.45)=>{for(let j=0;j<10;j++){const q=a-P/2+j*P/5,d=j%2?r*k:r;c.lineTo(x+cos(q)*d,y+sin(q)*d)}c.closePath()}
const twk=(c,x,y,r,col='#fff')=>F(c,()=>{c.moveTo(x,y-r);c.quadraticCurveTo(x,y,x+r,y);c.quadraticCurveTo(x,y,x,y+r);c.quadraticCurveTo(x,y,x-r,y);c.quadraticCurveTo(x,y,x,y-r)},col,2)
const bangs=(c,p,col)=>F(c,()=>{c.moveTo(...p[0]);c.bezierCurveTo(52,-44,26,-60,0,-60);c.bezierCurveTo(-26,-60,-52,-44,p.at(-1)[0],p.at(-1)[1])
  for(let k=p.length-1;k>0;k--){const[a,b]=p[k],[x,y]=p[k-1];y>b?c.quadraticCurveTo(a,b+(y-b)*.8,x,y):c.quadraticCurveTo(x,y+(b-y)*.45,x,y)}},col)
const SK='#8a5536',SD='#6e3f25',HR='#2a1e1b',HL='#5e4a43',I=['#6a2f08','#f2a93b','#3a1600'],GD='#f7c531',TP='#7a5bd4'
// one box braid along a quadratic curve, braided texture and a gold cuff near the tip
const braid=(c,a,b,q,cf=1,w=4.2)=>{const Q=u=>[(1-u)**2*a[0]+2*u*(1-u)*q[0]+u*u*b[0],(1-u)**2*a[1]+2*u*(1-u)*q[1]+u*u*b[1]]
  c.beginPath();c.moveTo(...a);c.quadraticCurveTo(...q,...b);c.lineWidth=w*2+5;c.strokeStyle=L;c.stroke();c.lineWidth=w*2;c.strokeStyle=HR;c.stroke()
  c.strokeStyle=HL;c.lineWidth=1.5;for(let u=.05;u<.8;u+=.08){const[x,y]=Q(u),[x2,y2]=Q(u+.03),d=Math.hypot(x2-x,y2-y)||1,nx=-(y2-y)/d*w*.75,ny=(x2-x)/d*w*.75;c.beginPath();c.moveTo(x-nx,y-ny);c.lineTo(x2+nx*.3,y2+ny*.3);c.stroke()}
  if(!cf)return;const[x,y]=Q(.86),[x2,y2]=Q(.89);c.beginPath();c.moveTo(x,y);c.lineTo(x2,y2);c.lineWidth=w*2+5;c.strokeStyle=L;c.stroke();c.lineWidth=w*2+1;c.strokeStyle=GD;c.stroke()}
const eye=(c,x,y,s,lid,k,lx=0)=>{
  c.save();c.translate(x,y);c.strokeStyle=L
  if(k=='h'){c.beginPath();c.moveTo(-9,3);c.quadraticCurveTo(0,-8,9,3);c.lineWidth=3.6;c.stroke();c.restore();return}
  const h=12.5,tp=-h+lid*h*1.75
  c.save();c.beginPath();c.rect(-16,tp,32,40);c.clip()
  c.beginPath();c.ellipse(0,0,9.5,h,0,0,2*P);c.fillStyle='#fff';c.fill();c.clip()
  const g=c.createLinearGradient(0,-h,0,h);g.addColorStop(.1,I[0]);g.addColorStop(.85,I[1])
  c.beginPath();c.ellipse(lx,1,8.2,11.5,0,0,2*P);c.fillStyle=g;c.fill()
  if(k=='s'){c.beginPath();star(c,lx,1,8,0,.42);c.fillStyle='#fff6c8';c.fill()}
  else{c.beginPath();c.ellipse(lx,0,4,6,0,0,2*P);c.fillStyle=I[2];c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(lx-3,-4.5,3.4,0,2*P);c.fill();c.beginPath();c.arc(lx+3.5,5,1.7,0,2*P);c.fill()}
  c.restore()
  c.beginPath();c.moveTo(-10*s,tp+4);c.quadraticCurveTo(0,tp-2.5,11*s,tp+1.5);c.lineTo(13.5*s,tp-1.5);c.lineWidth=3.6;c.stroke()
  c.beginPath();c.moveTo(-3*s,h+.6);c.quadraticCurveTo(4*s,h+1,7.5*s,h-2.5);c.lineWidth=1.6;c.stroke()
  c.restore()
}
export default(c,t)=>{
  c.lineJoin=c.lineCap='round'
  // timeline: wind up, poke, star bursts out, twinkles, drifts up and fades
  const back=sg(t,0,.14)*(1-sg(t,.14,.2)),press=sg(t,.15,.2)*(1-sg(t,.32,.42)),pop=sg(t,.2,.36),out=sg(t,.72,.94)
  const glow=pop*(1-out),joy=sg(t,.22,.3)*(1-sg(t,.86,.98)),hop=0
  // button
  const bx=150,by=170+press*2
  F(c,()=>c.roundRect(bx,by,92,36,9),press>.5?'#e3e8ee':'#f6f8fa')
  c.beginPath();c.moveTo(bx+30,by+3);c.lineTo(bx+30,by+33);c.lineWidth=2.5;c.strokeStyle='#b8bfc8';c.stroke()
  F(c,()=>star(c,bx+16,by+18.5,10.5),glow>.05?GD:'#fff',2.6)
  c.fillStyle=L;c.font='bold 20px DejaVu Sans';c.textBaseline='middle';c.fillText('Star',bx+37,by+19)
  // legs, body
  const gx=82,gy=hop
  // long box braids hanging down her back
  c.save();c.translate(gx+2,98+gy);c.rotate(.05*pop-.04*back);c.scale(1.12,1.12)
  for(let j=0;j<8;j++){const u=j/7-.5;braid(c,[u*66,-18],[u*104,80-abs(u)*12-(j%3)*6],[u*96,22],j%2)}
  c.restore()
  for(const s of[-1,1]){T(c,[[gx+s*9,200+gy],[gx+s*10,224]],13,SK);O(c,gx+s*12,231,11,6,'#ee5d6c')}
  F(c,()=>{c.moveTo(gx-22,188+gy);c.lineTo(gx+22,188+gy);c.lineTo(gx+25,210+gy);c.lineTo(gx-25,210+gy);c.closePath()},'#5f86c9')
  F(c,()=>{c.moveTo(gx-12,146+gy);c.quadraticCurveTo(gx-27,148+gy,gx-25,162+gy);c.lineTo(gx-22,192+gy);c.lineTo(gx+22,192+gy);c.lineTo(gx+25,162+gy);c.quadraticCurveTo(gx+27,148+gy,gx+12,146+gy);c.closePath()},TP)
  F(c,()=>star(c,gx,172+gy,9),GD,2.5)
  F(c,()=>c.rect(gx-6,136+gy,12,12),SK,3)
  // back arm (fist pump with joy)
  const fx=gx-34-joy*6,fy=180-joy*44+gy
  T(c,[[gx-22,156+gy],[gx-36,170+gy-joy*10,fx,fy]],11,SK);O(c,fx,fy,7,7,SK,3)
  // head
  c.save();c.translate(gx+2,98+gy);c.rotate(.05*pop-.04*back);c.scale(1.12,1.12)
  // half-up topknot of braids with a gold cuff
  O(c,0,-60,17,14,HR);c.strokeStyle=HL;c.lineWidth=1.8;for(const r of[6,11])c.beginPath(),c.ellipse(0,-60,r*1.15,r,0,.3,P*1.7),c.stroke()
  F(c,()=>c.roundRect(-11,-50,22,7,3),GD,2.5)
  for(const s of[-1,1])O(c,s*37,12,6,8.5,SK,3),O(c,s*38,20,2.5,2.5,GD,1.8)
  F(c,()=>{c.moveTo(-37,-8);c.bezierCurveTo(-38,22,-18,41,0,43);c.bezierCurveTo(18,41,38,22,37,-8);c.bezierCurveTo(37,-42,-37,-42,-37,-8)},SK)
  const lx=3+2*pop,k=joy>.5?'s':0
  for(const s of[-1,1])eye(c,s*17,12,s,0,k,lx)
  c.fillStyle='rgba(255,120,110,.4)';for(const s of[-1,1]){c.beginPath();c.ellipse(s*25,26,7,3.5,0,0,2*P);c.fill()}
  c.fillStyle=SD;c.beginPath();c.arc(1,25,1.4,0,2*P);c.fill()
  if(joy>.3)F(c,()=>{c.moveTo(-9,29);c.quadraticCurveTo(0,44,9,29);c.closePath()},'#8a2f3d',2.6),F(c,()=>{c.moveTo(-5,36);c.quadraticCurveTo(0,32,5,36);c.quadraticCurveTo(0,40,-5,36)},'#f07a86',0)
  else{c.beginPath();c.moveTo(-6,31);c.quadraticCurveTo(0,36,6,31);c.lineWidth=2.6;c.strokeStyle=L;c.stroke()}
  F(c,()=>{c.moveTo(42,2);c.bezierCurveTo(46,-40,24,-58,0,-58);c.bezierCurveTo(-24,-58,-46,-40,-42,2);c.quadraticCurveTo(-36,-8,-33,-14);c.quadraticCurveTo(-18,-24,-6,-18);c.quadraticCurveTo(0,-26,8,-20);c.quadraticCurveTo(26,-24,33,-14);c.quadraticCurveTo(38,-8,42,2)},HR)
  c.strokeStyle=HL;c.lineWidth=3.5;for(const a of[-2.45,-1.4])c.beginPath(),c.arc(0,-12,40,a,a+.35),c.stroke()
  c.lineWidth=2;for(const s of[-1,1])for(const d of[0,9,18])c.beginPath(),c.moveTo(s*(5+d),-21+d*.3),c.quadraticCurveTo(s*(7+d*.8),-42,s*(3+d*.35),-50),c.stroke()
  c.strokeStyle=L;c.lineWidth=2.6;for(const s of[-1,1]){c.beginPath();c.moveTo(s*9,-6-joy*3);c.quadraticCurveTo(s*17,-10-joy*3,s*25,-7-joy*2);c.stroke()}
  // braids framing her face, falling over the shoulders
  for(const s of[-1,1])for(const k of[0,1])braid(c,[s*(33+k*5),-6+k*4],[s*(36+k*9),60-k*10],[s*(46+k*6),22],k==0)
  c.restore()
  // poking arm with index finger
  const hx=gx+42+press*28-back*14,hy=166+press*12-back*4+gy*(1-press)
  T(c,[[gx+22,156+gy],[gx+34,174+gy,hx,hy]],11,SK)
  T(c,[[hx+2,hy-1],[hx+12,hy+2]],3.5,SK);O(c,hx,hy,7,7,SK,3)
  // big star bursting out of the button, twinkling, then floating off
  if(pop>0&&out<1){
    const sx=166+pop*20,sy=188-pop*92-out*26,r=(pop<1?pop*1.25-(pop>.8?(pop-.8)*1.25:0):1)*39*(1+.08*sin(t*8*P)*joy)*(1-out*.6)
    c.globalAlpha=1-out
    c.strokeStyle=GD;c.lineWidth=4;for(let j=0;j<8;j++){const a=j*P/4+t*2,d=r+8+4*sin(t*16*P+j);c.beginPath();c.moveTo(sx+cos(a)*d,sy+sin(a)*d);c.lineTo(sx+cos(a)*(d+9),sy+sin(a)*(d+9));c.stroke()}
    F(c,()=>star(c,sx,sy,r,sin(t*4*P)*.12,.47),GD,4)
    F(c,()=>star(c,sx-r*.06,sy-r*.04,r*.62,sin(t*4*P)*.12,.47),'#ffe27a',0)
    c.fillStyle=L;for(const s of[-1,1]){c.beginPath();c.ellipse(sx+s*r*.17,sy,r*.05,r*.1,0,0,2*P);c.fill()}
    c.beginPath();c.arc(sx,sy+r*.12,r*.1,.2,P-.2);c.lineWidth=2.5;c.strokeStyle=L;c.stroke()
    c.globalAlpha=1
  }
  // sparkles that blink around the star
  for(let j=0;j<6;j++){const p=(t*2+j/6)%1,a=j*1.1,x=184+cos(a)*(50+j*2),y=96+sin(a)*44
    const s=sin(p*P)*glow;if(s>.05)twk(c,x,y,9*s,j%2?'#fff':'#ffe27a')}
}
