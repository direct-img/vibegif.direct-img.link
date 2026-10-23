// peacock fanning its tail open into a ring of eye feathers, shimmying, then folding it back up
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=12,delay=100
const TL='#38d9a9',TD='#12b886',GO='#ffd43b',EB='#4dabf7',ED='#1864ab',BD='#4dabf7',BK='#1c7ed6',OR='#ffa94d',BL='#ffa8a8'
const ease=x=>x<0?0:x>1?1:x*x*(3-2*x)
export default(c,t)=>{
  const s=ease(t/.25)-ease((t-.7)/.25),sh=sin(4*T*t+.8)*s**6,N=9
  // all feather outlines first, so a folded bunch doesn't turn into a black mass, then fills with a thin teal seam
  const fe=[...Array(N)].map((_,k)=>{const u=(k-(N-1)/2)/((N-1)/2);return[u*(.45+.95*s)+.05*sh*u,84+32*s]})
  const go=(a,f)=>{c.save();c.translate(128,170);c.rotate(a);f();c.restore()}
  for(const[a,L]of fe)go(a,()=>{c.lineWidth=14;c.beginPath();c.ellipse(0,-L*.55,15+5*s,L*.55,0,0,T);c.stroke()})
  for(const[a,L]of fe)go(a,()=>{
    c.fillStyle=TL;c.strokeStyle=TD;c.lineWidth=3;c.beginPath();c.ellipse(0,-L*.55,15+5*s,L*.55,0,0,T);c.fill();c.stroke()
    c.lineWidth=4;c.beginPath();c.moveTo(0,-8);c.lineTo(0,-L+20);c.stroke();c.strokeStyle='#111'
    c.fillStyle=GO;c.lineWidth=5;c.beginPath();c.ellipse(0,-L+16,12,15,0,0,T);c.fill();c.stroke()
    c.fillStyle=EB;c.beginPath();c.ellipse(0,-L+17,7,9,0,0,T);c.fill()
    c.fillStyle=ED;c.beginPath();c.ellipse(0,-L+18,3.5,5,0,0,T);c.fill()
  })
  c.lineWidth=7
  c.fillStyle=OR;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*14,228,12,6,0,0,T),c.fill(),c.stroke()
  c.lineWidth=12;c.beginPath();for(const d of[-1,1])c.moveTo(128+d*12,206),c.lineTo(128+d*14,224);c.stroke()
  c.strokeStyle=OR;c.lineWidth=5;c.beginPath();for(const d of[-1,1])c.moveTo(128+d*12,206),c.lineTo(128+d*14,224);c.stroke();c.strokeStyle='#111';c.lineWidth=7
  for(const[x,y]of[[116,52],[128,46],[140,52]])c.lineWidth=4,c.beginPath(),c.moveTo(128,78),c.lineTo(x,y),c.stroke(),c.lineWidth=5,c.fillStyle=BD,c.beginPath(),c.arc(x,y,6,0,T),c.fill(),c.stroke()
  c.lineWidth=7
  const sil=()=>{c.beginPath();c.ellipse(128,176,34,40,0,0,T);c.moveTo(110,152);c.lineTo(114,104);c.lineTo(142,104);c.lineTo(146,152);c.closePath();c.moveTo(152,98);c.arc(128,98,24,0,T)}
  sil();c.lineWidth=14;c.stroke();c.fillStyle=BD;sil();c.fill();c.lineWidth=7
  c.fillStyle=BK;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*26,180,10,26,-d*.2,0,T),c.fill(),c.lineWidth=5,c.stroke()
  c.lineWidth=7
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*11,94,8,10,0,0,T),c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(128+d*11,95,4.5,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(127+d*11,93,1.6,0,T),c.fill()
  c.fillStyle=GO;c.lineWidth=4;c.beginPath();c.moveTo(122,104);c.lineTo(134,104);c.lineTo(128,114);c.closePath();c.fill();c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*17,108,5,3,0,0,T),c.fill()
}
