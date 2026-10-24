// social battery with a face draining from green to dead red as "hi!" "hey!" bubbles keep popping up, then it plugs in alone and recharges
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=32,delay=[...Array(31).fill(85),500],rim=4
const G={S:'M3.8 .9Q3.1 0 2 0Q.2 0 .2 1.5Q.2 2.8 2 3Q3.9 3.2 3.9 4.5Q3.9 6 2 6Q.7 6 0 5.1',O:'M2 0Q0 0 0 3Q0 6 2 6Q4 6 4 3Q4 0 2 0',C:'M4 .9Q3.3 0 2.1 0Q0 0 0 3Q0 6 2.1 6Q3.3 6 4 5.1',I:'M2 0L2 6M.8 0L3.2 0M.8 6L3.2 6',A:'M0 6L2 0L4 6M.7 4L3.3 4',L:'M0 0L0 6L4 6',B:'M0 3L0 0L2.3 0Q3.7 0 3.7 1.5Q3.7 3 2.3 3L0 3L0 6L2.5 6Q4 6 4 4.5Q4 3 2.3 3',T:'M0 0L4 0M2 0L2 6',E:'M4 0L0 0L0 6L4 6M0 3L3.2 3',R:'M0 6L0 0L2.3 0Q4 0 4 1.7Q4 3.4 2.3 3.4L0 3.4M2 3.4L4 6',Y:'M0 0L2 3L4 0M2 3L2 6',H:'M0 0L0 6M4 0L4 6M0 3L4 3','!':'M2 0L2 3.8M2 5.9L2 6','?':'M.1 1.2Q.6 0 2 0Q4 0 4 1.7Q4 3 2 3.3L2 4M2 5.9L2 6',U:'M0 0L0 4Q0 6 2 6Q4 6 4 4L4 0',N:'M0 6L0 0L4 6L4 0',W:'M0 0L.9 6L2 2.4L3.1 6L4 0'}
const txt=(c,s,x,y,k,col,w)=>{
  const a=5.4*k,W=s.length*a-1.4*k;c.beginPath()
  ;[...s].forEach((ch,j)=>{const ox=x-W/2+j*a;for(const[,o,q]of(G[ch]||'').matchAll(/([MLQ])([^MLQ]*)/g)){const n=q.trim().split(/[ ,]+/).map((v,m)=>m%2?y+v*k:ox+v*k);o=='M'?c.moveTo(...n):o=='L'?c.lineTo(...n):c.quadraticCurveTo(...n)}})
  for(const[l,s]of col?[[w+6,'#111'],[w,col]]:[[w,'#111']])c.lineWidth=l,c.strokeStyle=s,c.stroke();c.strokeStyle='#111'
}
const BUB=[['HI!',.04,50,62,1],['HEY!',.16,206,78,-1],['HOW R U?',.28,60,172,1],['LUNCH?',.40,204,186,-1]]
const ease=x=>x<0?0:x>1?1:1-(1-x)**3,pop=x=>x<=0?0:x>=1?1:1+sin(PI*x)*.35*(1-x)
export default(c,t,i)=>{
  const hits=BUB.reduce((s,b)=>s+ease((t-b[1])/.05),0),chg=ease((t-.72)/.22),L=t<.7?max(.05,1-hits*.24):.05+.95*chg,dead=t>.46&&t<.72,sq=dead?.94:1
  txt(c,'SOCIAL BATTERY',128,8,2.3,'#fff',3.5)
  // the plug sneaking in to recharge
  const pl=ease((t-.62)/.08)*(t<.97?1:1-ease((t-.97)/.03))
  if(pl>0){const px=176+(1-pl)*90;c.lineWidth=7;c.strokeStyle='#111';c.beginPath();c.moveTo(px+20,198);c.bezierCurveTo(px+60,198,px+40,236,262,236);c.stroke();c.lineWidth=3;c.strokeStyle='#868e96';c.stroke();c.strokeStyle='#111'
    c.fillStyle='#495057';c.lineWidth=6;c.beginPath();c.roundRect(px,186,26,24,5);c.fill();c.stroke()}
  c.save();c.translate(128,214);c.scale(2-sq,sq);c.translate(-128,-214)
  // battery body, level and cap
  c.fillStyle='#868e96';c.lineWidth=7;c.beginPath();c.roundRect(108,44,40,18,5);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(80,56,96,158,18);c.fill();c.stroke()
  const H=138,top=206-H*L,col=t>=.72&&t<.97?'#ffd43b':L>.6?'#51cf66':L>.3?'#fcc419':'#ff6b6b'
  if(!(dead&&i%4==3)){c.fillStyle=col;c.beginPath();c.roundRect(90,top,76,206-top,10);c.fill()}
  c.lineWidth=7;c.beginPath();c.roundRect(80,56,96,158,18);c.stroke()
  // face
  c.fillStyle='#111';c.strokeStyle='#111';c.lineWidth=5
  const ey=118,ex=[110,146]
  if(t>=.72){for(const x of ex)c.beginPath(),c.arc(x,ey,7,PI*1.1,PI*1.9),c.stroke();c.beginPath();c.arc(128,140,8,.2*PI,.8*PI);c.stroke()}
  else if(dead){for(const x of ex)c.beginPath(),c.moveTo(x-7,ey-7),c.lineTo(x+7,ey+7),c.moveTo(x+7,ey-7),c.lineTo(x-7,ey+7),c.stroke();c.beginPath();c.moveTo(118,146);c.quadraticCurveTo(123,140,128,146);c.quadraticCurveTo(133,152,138,146);c.stroke()}
  else if(L>.7){for(const x of ex)c.beginPath(),c.arc(x,ey,6,0,T),c.fill();c.fillStyle='#fff';for(const x of ex)c.beginPath(),c.arc(x+2,ey-2,2,0,T),c.fill();c.fillStyle='#ff8787';c.beginPath();c.moveTo(112,136);c.quadraticCurveTo(128,160,144,136);c.closePath();c.fill();c.stroke()}
  else if(L>.45){for(const x of ex)c.beginPath(),c.arc(x,ey,6,0,T),c.fill();c.beginPath();c.arc(128,134,12,.25*PI,.75*PI);c.stroke()}
  else if(L>.2){for(const x of ex)c.beginPath(),c.arc(x,ey+2,6,0,T),c.fill();c.lineWidth=4;for(const x of ex)c.beginPath(),c.moveTo(x-9,ey-6),c.lineTo(x+9,ey-6),c.stroke();c.beginPath();c.moveTo(116,146);c.lineTo(140,146);c.stroke()
    c.fillStyle='#74c0fc';c.lineWidth=4;c.beginPath();c.moveTo(166,92);c.quadraticCurveTo(173,104,166,108);c.quadraticCurveTo(159,104,166,92);c.fill();c.stroke()}
  else{c.lineWidth=4;for(const x of ex)c.beginPath(),c.moveTo(x-8,ey),c.lineTo(x+8,ey),c.stroke();c.beginPath();c.arc(128,150,9,1.15*PI,1.85*PI);c.stroke()}
  c.restore()
  // charging bolt and zzz
  if(t>=.72&&t<.97){c.fillStyle='#ffd43b';c.lineWidth=5;c.beginPath();c.moveTo(134,166);c.lineTo(118,186);c.lineTo(128,186);c.lineTo(122,204);c.lineTo(140,182);c.lineTo(130,182);c.closePath();c.fill();c.stroke()
    const z=(t-.72)/.25;c.lineWidth=4;for(const k of[0,1]){const q=(z+k*.5)%1,zx=190+q*20,zy=110-q*40,s=6+q*6;c.beginPath();c.moveTo(zx-s,zy-s);c.lineTo(zx+s,zy-s);c.lineTo(zx-s,zy+s);c.lineTo(zx+s,zy+s);c.stroke()}}
  // speech bubbles hitting it
  for(const[s,tb,x,y,d]of BUB){const k=pop((t-tb)/.06)*(t<.62?1:1-ease((t-.62)/.06));if(k<=0)continue
    const w=s.length*11.4+14,e=d*(w/2-16);c.save();c.translate(x,y);c.scale(k,k);c.fillStyle='#fff';c.lineWidth=6
    c.beginPath();c.moveTo(e-d*8,10);c.lineTo(e+d*22,30);c.lineTo(e+d*6,10);c.fill();c.stroke()
    c.beginPath();c.roundRect(-w/2,-17,w,34,14);c.fill();c.stroke()
    c.beginPath();c.moveTo(e-d*5,8);c.lineTo(e+d*16,24);c.lineTo(e+d*4,8);c.fill()
    txt(c,s,0,-6.5,2.1,null,3.5);c.restore()}
}
