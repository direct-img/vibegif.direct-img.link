// chocolate bunny with one ear bitten off, trembling in fright as crumbs fall from the hollow stump
export const frames=24,delay=50,rim=5
const P=Math.PI*2,S=Math.sin,C=Math.cos
const M='#8a4a25',D='#5c2c14',L='#b8723f'
export default(c,t)=>{
  const sh=2.8*S(P*4*t),ro=.018*S(P*4*t+.6)
  c.translate(128,130);c.scale(.92,.92);c.translate(-128,-128)
  c.lineWidth=6
  // falling crumbs (not shaking), each gone before it comes round again
  const crumbs=k=>{for(const[p,dx,r]of[[0,34,5],[.34,48,4],[.67,40,4.5]]){const u=(t-p+1)%1;if(u>.55)continue;const v=u/.55,x=160+dx*v,y=58+190*v*v,s=r*Math.min(1,v*6)*(1-Math.max(0,v-.85)/.15)
    if(s<.5||k^(y<150))continue
    c.save();c.translate(x,y);c.rotate(v*8+p*9);c.beginPath();c.moveTo(-s,-s*.6);c.lineTo(s*.8,-s);c.lineTo(s,s*.7);c.lineTo(-s*.5,s);c.closePath();c.fillStyle=L;c.lineWidth=3;c.fill();c.stroke();c.restore()}}
  c.save();c.translate(128+sh,246);c.rotate(ro);c.translate(-128,-246)
  const sh_=(f,dx,dy,col)=>{c.save();f();c.clip();c.beginPath();f();c.translate(dx,dy);f();c.fillStyle=col;c.fill('evenodd');c.restore()}
  const shape=(f,col)=>{f();c.fillStyle=col;c.fill();sh_(f,-10,-9,'rgba(50,15,0,.35)');f();c.stroke()}
  // left ear, whole and tall
  const earL=()=>{c.beginPath();c.moveTo(92,86);c.bezierCurveTo(64,40,72,6,92,8);c.bezierCurveTo(112,10,118,50,114,84);c.closePath()}
  shape(earL,M)
  c.beginPath();c.moveTo(96,74);c.bezierCurveTo(82,44,86,22,94,22);c.bezierCurveTo(104,24,106,52,104,74);c.fillStyle=D;c.fill()
  // right ear, bitten: a hollow shell with a scalloped edge
  const bite=()=>{c.moveTo(136,38);c.arc(145.5,38,9.5,Math.PI,0,1);c.arc(164.5,46,9.5,Math.PI,0,1)}
  const earR=()=>{c.beginPath();c.moveTo(143,88);c.bezierCurveTo(138,74,134,52,136,38);c.arc(145.5,38,9.5,Math.PI,0,1);c.arc(164.5,46,9.5,Math.PI,0,1);c.bezierCurveTo(178,62,172,78,168,90);c.closePath()}
  shape(earR,M)
  // bitten edge: the pale cut shell, the dark hollow just inside it
  c.save();earR();c.clip();c.beginPath();bite();c.lineWidth=20;c.strokeStyle='#2e1407';c.stroke();c.lineWidth=9;c.strokeStyle='#d99c6a';c.stroke();c.restore()
  earR();c.stroke()
  // body with haunches and feet
  const body=()=>{c.beginPath();c.moveTo(92,150);c.bezierCurveTo(52,170,46,236,80,242);c.lineTo(176,242);c.bezierCurveTo(210,236,204,170,164,150);c.closePath()}
  shape(body,M)
  for(const m of[-1,1]){c.beginPath();c.ellipse(128+m*30,236,22,11,0,0,P);c.fillStyle=L;c.fill();c.stroke()
    c.beginPath();c.moveTo(128+m*30-8,232);c.lineTo(128+m*30-8,240);c.moveTo(128+m*30+8,232);c.lineTo(128+m*30+8,240);c.lineWidth=3;c.stroke();c.lineWidth=6}
  // lighter tummy
  c.beginPath();c.ellipse(128,206,30,26,0,0,P);c.fillStyle='rgba(255,210,170,.16)';c.fill()
  // head
  const head=()=>{c.beginPath();c.ellipse(128,118,52,44,0,0,P)}
  shape(head,M)
  c.beginPath();c.ellipse(108,96,13,7,-.5,0,P);c.fillStyle='rgba(255,220,180,.35)';c.fill()
  // bow at the neck
  c.lineWidth=5;c.fillStyle='#ff4f7a'
  for(const m of[-1,1]){c.beginPath();c.moveTo(128,160);c.lineTo(128+m*16,180);c.lineTo(128+m*9,179);c.lineTo(128+m*6,185);c.closePath();c.fill();c.stroke()}
  for(const m of[-1,1]){c.beginPath();c.moveTo(128,160);c.bezierCurveTo(128+m*36,140,128+m*38,178,128,160);c.fill();c.stroke()}
  c.beginPath();c.ellipse(128,160,7,6,0,0,P);c.fill();c.stroke()
  // scared face: wide eyes glancing up at the bite, worried brows, wobbly mouth
  c.lineWidth=4.5
  const ey=S(P*4*t)*.6
  for(const m of[-1,1]){const x=128+m*20
    c.beginPath();c.ellipse(x,112,11,13,0,0,P);c.fillStyle='#fff';c.fill();c.stroke()
    c.beginPath();c.arc(x+3+ey,107,4.5,0,P);c.fillStyle='#111';c.fill()
    c.beginPath();c.moveTo(x-m*8,89);c.quadraticCurveTo(x+m*2,89,x+m*11,95);c.stroke()}
  c.beginPath();c.ellipse(128,128,6,4,0,0,P);c.fillStyle='#ff9bb5';c.fill();c.lineWidth=3.5;c.stroke()
  c.beginPath();c.moveTo(114,142);for(let k=1;k<=6;k++)c.lineTo(114+k*4.7,142+(k%2?-3:0));c.stroke()
  // sweat drop
  c.beginPath();c.moveTo(80,84);c.quadraticCurveTo(70,100,74,104);c.arc(80,102,6.5,Math.PI*.8,Math.PI*.1,1);c.quadraticCurveTo(88,96,80,84);c.fillStyle='#8fdcff';c.lineWidth=3.5;c.fill();c.stroke()
  c.restore()
  crumbs(1)
  // shiver marks beside the body, flicking with the shake
  c.lineWidth=4;const a=S(P*4*t)>0
  for(const[x,y,m]of[[44,150,-1],[212,150,1],[40,186,-1],[216,186,1]]){if((m>0)==a)continue;c.beginPath();c.moveTo(x,y-9);c.quadraticCurveTo(x+m*5,y,x,y+9);c.stroke()}
  crumbs(0)
}
