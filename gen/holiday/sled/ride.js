// a little bunny in a green scarf riding a red sled over snowy bumps, ears flopping, snow puffing up behind
export const frames=32,delay=50,rim=6
const K='#1b1a2b',T=Math.PI*2,S=Math.sin,C=Math.cos
export default(c,t)=>{
  const P=128,sc=2*P*t,Z=1.16
  const gy=(x,s=sc)=>202-11*S(T*(x+s)/P)
  const f=(col,w=6)=>{c.fillStyle=col;c.fill();c.lineWidth=w;c.strokeStyle=K;c.stroke()}
  const el=(x,y,a,b,r=0)=>{c.beginPath();c.ellipse(x,y,a,b,r,0,T)}
  // where the sled sits: on both runner ends, lifted if the middle of the bump is higher
  const pose=s=>{const xb=128-46*Z,xf=128+40*Z,yb=gy(xb,s),yf=gy(xf,s),m=(yb+yf)/2,l=Math.max(0,m-gy(128,s)+2)
    return[m-l,Math.atan2(yf-yb,xf-xb)*.8]}
  const[sy,an]=pose(sc),vy=(pose(sc+6)[0]-sy)
  // snowbank sliding by
  const bank=()=>{c.beginPath();c.moveTo(18,226);c.quadraticCurveTo(14,gy(28),30,gy(30));for(let x=30;x<=226;x+=4)c.lineTo(x,gy(x));c.quadraticCurveTo(242,gy(226),238,226);c.quadraticCurveTo(128,252,18,226)}
  bank();c.fillStyle='#fbfdff';c.fill()
  c.save();c.clip();c.beginPath();c.ellipse(128,252,130,26,0,0,T);c.fillStyle='#d4e6f5';c.fill()
  c.lineWidth=4;c.strokeStyle='#bcd6ec'
  for(let k=0;k<6;k++){const x=((k*P/3-sc)%(2*P)+2*P)%(2*P)-10;c.beginPath();c.moveTo(x,gy(x)+12+(k%3)*7);c.lineTo(x+12+(k%2)*8,gy(x)+12+(k%3)*7);c.stroke()}
  c.restore();bank();c.lineWidth=6;c.strokeStyle=K;c.stroke()
  // puffs of snow kicked up behind the runners
  const pf=[]
  for(let k=0;k<6;k++){const p=(t*4+k/6)%1,x=128-50*Z-46*p,r=15*(p<.15?p/.15:(1-p)/.85)**.6;pf.push([x,gy(x)-4-20*p+(k%2)*5,r])}
  for(const[w,col]of[[3,K],[0,'#fbfdff']])pf.forEach(([x,y,r])=>{c.beginPath();c.arc(x,y,r+w,0,T);c.fillStyle=col;c.fill()})
  c.save();c.translate(128,sy);c.rotate(an);c.scale(Z,Z)
  // bunny: tail, body, foot, head, ears that flop with the bumps
  const ea=-.35+vy*.12
  c.save();c.translate(0,vy*.7)
  for(const[dx,da,col]of[[-8,-.25+vy*.06,'#d9c09f'],[0,0,'#e9d3b4']]){
    c.save();c.translate(dx,-95);c.rotate(ea+da);el(0,-26,9,26);f(col,5);el(0,-24,4.5,18);c.fillStyle='#f6a9c0';c.fill();c.restore()
  }
  el(-36,-36,9,9);f('#fffaf2',5)
  el(-14,-44,24,26);f('#e9d3b4')
  el(8,-28,15,7);f('#e9d3b4',5)
  el(6,-80,22,20);f('#e9d3b4')
  el(19,-73,9,7);c.fillStyle='#fffaf2';c.fill()
  el(14,-84,3.5,4.5);c.fillStyle=K;c.fill();el(15,-85.5,1.3,1.5);c.fillStyle='#fff';c.fill()
  el(27,-78,4,3);c.fillStyle='#f58aa8';c.fill()
  el(4,-72,5,3);c.fillStyle='#f6a9c0';c.fill()
  // scarf with its end streaming back
  const sw=S(T*8*t)
  c.beginPath();c.moveTo(-8,-62);c.quadraticCurveTo(-30,-58+vy*.4,-46,-64+sw*4+vy*.6);c.lineWidth=15;c.strokeStyle=K;c.stroke();c.lineWidth=8;c.strokeStyle='#2f9e5b';c.stroke()
  c.beginPath();c.moveTo(-12,-64);c.quadraticCurveTo(4,-56,20,-64);c.lineWidth=16;c.strokeStyle=K;c.stroke();c.lineWidth=9;c.strokeStyle='#2f9e5b';c.stroke()
  c.restore()
  // sled: runner with a curled front, struts, red deck
  c.beginPath();c.moveTo(-46,0);c.lineTo(32,0);c.bezierCurveTo(50,0,52,-20,40,-22);c.bezierCurveTo(32,-23,32,-14,38,-14)
  c.lineWidth=9;c.strokeStyle=K;c.stroke();c.lineWidth=3.5;c.strokeStyle='#cdd6e1';c.stroke()
  c.beginPath();for(const x of[-34,-6,22]){c.moveTo(x,0);c.lineTo(x,-12)}c.lineWidth=8;c.strokeStyle=K;c.stroke();c.lineWidth=3;c.strokeStyle='#cdd6e1';c.stroke()
  c.beginPath();c.roundRect(-52,-22,88,12,5);f('#e0403a',5)
  c.beginPath();for(const x of[-30,-8,14]){c.moveTo(x,-20);c.lineTo(x,-12)}c.lineWidth=2.5;c.strokeStyle='#a82d31';c.stroke()
  // rope from the curl to the paws
  c.beginPath();c.moveTo(40,-20);c.quadraticCurveTo(34,-38+vy*.3,24,-50);c.lineWidth=3;c.strokeStyle=K;c.stroke()
  el(24,-52,7,6);f('#e9d3b4',4.5)
  c.restore()
  // speed lines
  c.lineWidth=5;c.strokeStyle=K
  for(const[dy,l,o]of[[-120,20,0],[-90,28,.4],[-60,16,.75]]){const x=128-62*Z-6*S(T*(t*4+o));c.beginPath();c.moveTo(x,sy+dy);c.lineTo(x-l,sy+dy);c.stroke()}
}
