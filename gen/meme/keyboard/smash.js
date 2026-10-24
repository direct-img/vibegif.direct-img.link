// two fists hammering a keyboard in turn, the home row letters A S D F G H J K L bursting out of their keys and flying everywhere
const{sin,cos,PI,abs,min,max}=Math,T=2*PI
export const frames=12,delay=Array(12).fill(65),rim=4
const G={A:'M0 6L2 0L4 6M.7 4L3.3 4',S:'M3.8 .9Q3.1 0 2 0Q.2 0 .2 1.5Q.2 2.8 2 3Q3.9 3.2 3.9 4.5Q3.9 6 2 6Q.7 6 0 5.1',D:'M0 0L0 6L1.7 6Q4 6 4 3Q4 0 1.7 0L0 0',F:'M4 0L0 0L0 6M0 3L3.2 3',G:'M4 .9Q3.3 0 2.1 0Q0 0 0 3Q0 6 2.1 6Q4 6 4 3.6L2.4 3.6',H:'M0 0L0 6M4 0L4 6M0 3L4 3',J:'M4 0L4 4.2Q4 6 2 6Q0 6 0 4.4',K:'M0 0L0 6M4 0L0 3.8M1.4 2.7L4 6',L:'M0 0L0 6L4 6'}
const txt=(c,s,x,y,k,col,w)=>{
  const a=5.4*k,W=s.length*a-1.4*k;c.beginPath()
  ;[...s].forEach((ch,j)=>{const ox=x-W/2+j*a;for(const[,o,q]of(G[ch]||'').matchAll(/([MLQ])([^MLQ]*)/g)){const n=q.trim().split(/[ ,]+/).map((v,m)=>m%2?y+v*k:ox+v*k);o=='M'?c.moveTo(...n):o=='L'?c.lineTo(...n):c.quadraticCurveTo(...n)}})
  for(const[l,s]of[[w+6,'#111'],[w,col]])c.lineWidth=l,c.strokeStyle=s,c.stroke();c.strokeStyle='#111'
}
const SK='#ffd8b5',SL='#748ffc',KB='#adb5bd',COL=['#ffd43b','#69db7c','#4dabf7','#f783ac','#ffa94d','#b197fc','#ffd43b','#69db7c','#4dabf7'],HR='ASDFGHJKL'
const key=(r,k)=>{const s=.86+r*.08;return[128+(k-4.5+r*.2)*19*s,170+r*22,16.5*s]}
const fist=(c,x,y)=>{
  c.fillStyle=SL;c.lineWidth=7;c.beginPath();c.roundRect(x-22,-20,44,y+14,6);c.fill();c.stroke()
  c.fillStyle=SK;c.beginPath();c.roundRect(x-32,y-18,64,42,16);c.fill();c.stroke()
  c.lineWidth=5;for(let k=0;k<4;k++)c.beginPath(),c.roundRect(x-32+k*16,y+2,16,30,8),c.fill(),c.stroke()
  c.beginPath();c.roundRect(x-34,y-6,42,17,8.5);c.fill();c.stroke()
}
export default(c,t,i)=>{
  const hit=[0,1].map(f=>abs(sin(PI*(t*3+f*.5)))),fy=hit.map(h=>134-h*96),shk=min(...hit)<.2?2:0
  // keyboard
  c.save();c.translate(0,shk)
  c.fillStyle=KB;c.lineWidth=7;c.beginPath();c.moveTo(34,152);c.lineTo(222,152);c.lineTo(244,240);c.lineTo(12,240);c.closePath();c.fill();c.stroke()
  for(let r=0;r<3;r++)for(let k=0;k<10;k++){const[x,y,w]=key(r,k),p=fy.some((f,n)=>hit[n]<.25&&abs(x-(n?172:84))<34&&r<2)?3:0
    c.fillStyle='#495057';c.lineWidth=3;c.beginPath();c.roundRect(x-w/2,y-7+4,w,18,4);c.fill();c.stroke()
    c.fillStyle=r==1?'#fff':'#f1f3f5';c.beginPath();c.roundRect(x-w/2,y-7+p,w,15,4);c.fill();c.stroke()}
  c.fillStyle='#495057';c.lineWidth=3;c.beginPath();c.roundRect(84,228-14,88,14,4);c.fill();c.stroke()
  c.restore()
  // flying letters, each from its own home row key
  for(let j=0;j<9;j++){const a=(t+j*5/9)%1;if(a>.6)continue;const[x0,y0]=key(1,j),dir=(j-4)/4,x=x0+dir*a*170+(j%2?14:-14)*a,y=y0-460*a+640*a*a,s=min(1,a*10)
    c.save();c.translate(x,y);c.rotate(dir*a*4+(j%2?.3:-.3)*a*3);c.scale(s,s);txt(c,HR[j],0,-14,4.4,COL[j],6);c.restore()}
  // impact bursts
  hit.forEach((h,n)=>{if(h>.3)return;const x=n?172:84;c.lineWidth=5;for(const a of[-2.8,-2.3,-.85,-.35]){c.beginPath();c.moveTo(x+cos(a)*46,166+sin(a)*26);c.lineTo(x+cos(a)*66,166+sin(a)*40);c.stroke()}})
  fy.forEach((y,n)=>fist(c,n?172:84,y))
}
