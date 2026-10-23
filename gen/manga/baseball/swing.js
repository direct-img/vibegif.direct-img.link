// chibi batter in a helmet with a dotted side ponytail waggles the bat, the pitch comes in, crack! the ball blasts off in a burst
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,abs,min,max}=Math,T=2*PI
export const frames=18,delay=70,rim=4
const tile=(s,col,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[s/2,s/2],[0,0],[s,0],[0,s],[s,s]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const DOT=tile(6,'#111',1.4),LITE=tile(5,'#fff',1)
const ease=u=>u<0?0:u>1?1:u*u*(3-2*u),lerp=(a,b,k)=>a+(b-a)*k
const key=(ks,t)=>{for(let n=1;n<ks.length;n++)if(t<=ks[n][0]){const[a,va]=ks[n-1],[b,vb]=ks[n];return lerp(va,vb,ease((t-a)/(b-a)))}return ks.at(-1)[1]}
const limb=(c,p,w)=>{for(const[l,s]of[[w+8,'#111'],[w,'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))c.lineTo(...q);c.stroke()}c.strokeStyle='#111'}
const ball=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(0,0,r,0,T);c.fill();c.stroke();c.lineWidth=2.5
  for(const d of[-1,1]){c.beginPath();c.arc(d*r*1.5,0,r*1.05,PI-.7,PI+.7);if(d<0)c.arc(d*r*1.5,0,r*1.05,-.7,.7);c.stroke()}c.restore()}
const eye=(c,x,y,d,lt,sq)=>{
  if(sq){c.lineWidth=8;c.beginPath();c.moveTo(x-14,y-8+d*0);c.lineTo(x+(d>0?-2:2)*-6,y+2);c.lineTo(x-14+28*(d>0?0:1)*0+14,y+12);c.stroke();return}
  c.save();c.beginPath();c.moveTo(x-17,y-4+d*4);c.lineTo(x+17,y-4-d*4);c.lineTo(x+17,y+22);c.lineTo(x-17,y+22);c.clip()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,13,15,0,0,T);c.fill();c.clip()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y+3,9,12,0,0,T);c.fill();c.fillStyle=lt;c.fillRect(x-4,y+7,22,10)
  c.fillStyle='#fff';c.beginPath();c.arc(x+2,y-1,3.5,0,T);c.fill();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-4+d*4);c.lineTo(x+16,y-4-d*4);c.lineTo(x+d*21,y-10);c.stroke()
}
export default(c,t)=>{
  const dt=c.createPattern(DOT,'repeat'),lt=c.createPattern(LITE,'repeat')
  // bat angle around the hands: cocked up behind the head, sweeps through level at contact, wraps around after
  const wag=t<.3?.12*sin(t*T*7):0,ba=key([[0,-2.1],[.3,-2.1],[.4,-2.5],[.46,-.15],[.52,1.3],[.7,1.5],[.85,-2.1],[1,-2.1]],t)+wag
  const tw=key([[0,0],[.36,-.2],[.46,.3],[.6,.4],[.8,0],[1,0]],t),hd=[[86,118],[94,128],[150,140],[122,108]]
  const hp=t<.36?hd[0]:t<.46?[lerp(86,150,ease((t-.36)/.1)),lerp(118,140,ease((t-.36)/.1))]:t<.6?[lerp(150,122,ease((t-.46)/.14)),lerp(140,104,ease((t-.46)/.14))]:[lerp(122,86,ease((t-.6)/.25)),lerp(104,118,ease((t-.6)/.25))]
  const hit=t>=.44&&t<.52
  c.save();c.translate(118,246);c.scale(1.02,1.02);c.translate(-118,-246)
  // pitch flies in from the right, gets crushed up and away
  if(t>=.24&&t<.45){const k=(t-.24)/.21;ball(c,lerp(260,166,k),lerp(110,140,k)-30*sin(PI*k),lerp(6,11,k),k*8)
    c.lineWidth=3.5;for(const d of[-6,6])c.beginPath(),c.moveTo(lerp(260,166,k)+18,lerp(110,140,k)-30*sin(PI*k)+d),c.lineTo(lerp(260,166,k)+44,lerp(110,140,k)-30*sin(PI*k)+d-6),c.stroke()}
  if(t>=.46&&t<.66){const k=(t-.46)/.2,x=lerp(172,248,k),y=lerp(132,8,k);c.lineWidth=4;for(const d of[-9,0,9])c.beginPath(),c.moveTo(x-46+d,y+64+d*.6),c.lineTo(x-12+d,y+16+d*.6),c.stroke();ball(c,x,y,13*(1-.35*k),t*30)}
  c.fillStyle=dt;c.beginPath();c.ellipse(118,240,54,8,0,0,T);c.fill()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(150,236);c.lineTo(176,236);c.lineTo(180,242);c.lineTo(163,248);c.lineTo(146,242);c.closePath();c.fill();c.stroke()
  // legs
  const H=[110,178],st=tw
  for(const[d,kx,fx]of[[-1,-26,-36],[1,22+20*max(0,st),34]]){const p=[H[0]+d*9,H[1]],kn=[p[0]+kx*.6,p[1]+28],ft=[H[0]+fx,236]
    limb(c,[p,kn,ft],16);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(ft[0]+4,ft[1]+2,15,8,0,0,T);c.fill();c.stroke();c.fillStyle='#111';c.fillRect(ft[0]-8,ft[1]+3,24,5)}
  // body
  c.save();c.translate(...H);c.rotate(tw*.4)
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-24,-6);c.lineTo(24,-6);c.lineTo(26,14);c.lineTo(-26,14);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(const x of[-14,0,14])c.moveTo(x,-6),c.lineTo(x,14);c.stroke()
  c.beginPath();c.moveTo(-22,-4);c.lineTo(24,-4);c.lineTo(26,-48);c.quadraticCurveTo(2,-56,-22,-48);c.closePath();c.fillStyle='#fff';c.lineWidth=5;c.fill();c.save();c.clip();c.fillStyle=dt;c.fillRect(-30,-56,22,56);c.fillRect(10,-56,22,56);c.restore();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(2,-52);c.lineTo(2,-4);c.stroke();c.fillStyle='#111';for(const y of[-40,-28,-16])c.beginPath(),c.arc(6,y,2,0,T),c.fill()
  c.fillStyle='#111';c.fillRect(-24,-10,50,6)
  c.restore()
  if(hit){const x=hp[0]+70*cos(ba)+14,y=hp[1]+70*sin(ba)-18;c.fillStyle='#fff';c.lineWidth=5;c.beginPath();for(let j=0;j<18;j++){const r=j%2?12:26,b=j*PI/9;c.lineTo(x+cos(b)*r,y+sin(b)*r)}c.closePath();c.fill();c.stroke()}
  // bat (drawn after the burst so the barrel stays readable at contact)
  const L=90,tip=[hp[0]+L*cos(ba),hp[1]+L*sin(ba)]
  if(t>=.4&&t<.52){c.lineWidth=4;for(let j=0;j<3;j++){c.beginPath();c.arc(hp[0],hp[1],46+j*12,-2.5,ba,false);c.stroke()}}
  c.save();c.translate(...hp);c.rotate(ba);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-8,-4);c.lineTo(30,-5);c.quadraticCurveTo(L+4,-11,L,0);c.quadraticCurveTo(L+4,11,30,5);c.lineTo(-8,4);c.closePath();c.fill();c.save();c.clip();c.fillStyle=dt;c.fillRect(34,-14,50,28);c.restore();c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(-10,0,4,7,0,0,T);c.fill();c.fillRect(-6,-5,14,10);c.restore()
  // arms grip the bat together
  const S=[H[0]+4+16*tw,H[1]-44]
  for(const[o,g]of[[[S[0]-10,S[1]],[hp[0]+4*cos(ba),hp[1]+4*sin(ba)]],[[S[0]+12,S[1]+2],[hp[0]-6*cos(ba),hp[1]-6*sin(ba)]]]){const e=[(o[0]+g[0])/2-6,(o[1]+g[1])/2+12];limb(c,[o,e,g],12)}
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(...hp,10,0,T);c.fill();c.stroke()
  // head in a helmet with a ponytail out the back
  c.save();c.translate(H[0]+4+10*tw,H[1]-92);c.rotate(-.05+tw*.2);c.scale(.66,.66);c.translate(-128,-121)
  c.lineWidth=9;c.fillStyle='#fff'
  const pt=()=>{c.beginPath();c.moveTo(78,120);c.quadraticCurveTo(28,130+8*sin(t*T*2),26,196+10*sin(t*T*2+1));c.quadraticCurveTo(52,170,80,152);c.closePath()}
  pt();c.fill();c.save();c.clip();c.fillStyle=dt;c.fillRect(10,100,90,110);c.restore();c.lineWidth=9;pt();c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  const sq=t>=.42&&t<.56
  eye(c,112,138,-1,lt,0);eye(c,160,138,1,lt,0)
  c.lineWidth=3.5;for(const d of[-1,1])for(const j of[-6,0,6])c.beginPath(),c.moveTo(136+d*42+j-3,166),c.lineTo(136+d*42+j+3,158),c.stroke()
  c.lineWidth=5;c.fillStyle='#111';c.beginPath()
  if(sq)c.moveTo(122,162),c.lineTo(154,162),c.quadraticCurveTo(150,186,138,186),c.quadraticCurveTo(126,186,122,162),c.fill(),c.stroke()
  else c.moveTo(128,168),c.lineTo(146,166),c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(76,120);c.quadraticCurveTo(80,104,96,106);c.lineTo(104,94);c.lineTo(112,108);c.lineTo(120,98);c.lineTo(124,110);c.lineTo(80,124);c.closePath();c.fill()
  c.lineWidth=9;c.beginPath();c.moveTo(64,112);c.bezierCurveTo(58,40,198,40,192,104);c.lineTo(214,108);c.quadraticCurveTo(220,116,212,120);c.lineTo(178,118);c.quadraticCurveTo(130,94,78,118);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(78,108,12,14,0,0,T);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=7;c.beginPath();c.arc(124,94,44,PI*1.18,PI*1.42);c.stroke();c.strokeStyle='#111'
  c.restore()
  c.restore()
}
