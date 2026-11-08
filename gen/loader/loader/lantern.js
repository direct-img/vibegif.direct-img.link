// round paper lantern with dark caps hangs from a string and sways, its orange body, curved ribs and glowing gold core pulse warmer and cooler while an amber tassel swings underneath a beat behind
const{sin,cos,PI,round}=Math,T=2*PI
const N=28,b=.5,
  // more frames through the fast middle of each swing, fewer at the slow ends
  tau=t=>{let u=t;for(let k=0;k<8;k++)u-=(u+b*sin(2*T*u)/(2*T)-t)/(1+b*cos(2*T*u));return u}
export const frames=N,delay=[...Array(N)].map((_,i)=>10*round((tau((i+1)/N)-tau(i/N))*230))
// blend two hex colors
const mix=(a,b,g)=>'#'+[1,3,5].map(i=>round(parseInt(a.substr(i,2),16)*(1-g)+parseInt(b.substr(i,2),16)*g).toString(16).padStart(2,'0')).join('')
export default(c,t)=>{
  const w=T*tau(t),g=(1-cos(2*w))/2,D='#5a2614'
  c.translate(128,14),c.scale(.94,.94),c.rotate(.13*sin(w))
  c.lineWidth=4,c.strokeStyle=D
  c.beginPath(),c.moveTo(0,0),c.lineTo(0,44),c.stroke()
  // tassel hangs from the bottom cap and lags behind the sway
  c.save(),c.translate(0,170),c.rotate(.3*sin(w-1.3))
  c.beginPath(),c.moveTo(0,0),c.lineTo(0,22),c.stroke()
  c.fillStyle='#f2a541',c.lineWidth=4
  c.beginPath(),c.arc(0,24,6,0,T),c.fill(),c.stroke()
  c.beginPath(),c.moveTo(-6,30),c.lineTo(6,30),c.lineTo(12,62),c.quadraticCurveTo(0,68,-12,62),c.closePath(),c.fill(),c.stroke()
  c.lineWidth=2.5,c.beginPath(),c.moveTo(0,34),c.lineTo(0,62),c.stroke()
  c.restore()
  // body: nested slices that get brighter toward the middle, their seams hidden under the ribs
  const Y=108,ell=(rx,col)=>{c.fillStyle=col,c.beginPath(),c.ellipse(0,Y,rx,58,0,0,T),c.fill()}
  ell(64,mix('#c25536','#de6a3c',g))
  ell(52,mix('#d86d45','#ef8f45',g))
  ell(30,mix('#e98a4c','#f8bf5a',g))
  c.lineWidth=3.5,c.strokeStyle=mix('#6e2a16','#9c3c1e',g)
  c.beginPath(),c.moveTo(0,Y-58),c.lineTo(0,Y+58)
  for(const r of[30,52])c.ellipse(0,Y,r,58,0,-PI/2,PI/2),c.ellipse(0,Y,r,58,0,PI/2,3*PI/2)
  c.stroke()
  c.lineWidth=5,c.strokeStyle=D,c.beginPath(),c.ellipse(0,Y,64,58,0,0,T),c.stroke()
  c.fillStyle='#7a3b22'
  for(const y of[44,160])c.beginPath(),c.roundRect(-26,y,52,12,4),c.fill(),c.stroke()
}
