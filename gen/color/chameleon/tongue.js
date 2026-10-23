// chameleon on a branch slowly shifting color, eyeing a buzzing fly, then snapping it up with its long tongue
const{sin,cos,PI,min,max,hypot,atan2}=Math,T=2*PI
export const frames=20,delay=80
const RING=['#69db7c','#38d9a9','#4dabf7','#b197fc','#f783ac','#ffa94d','#ffd43b'],BR='#a9744f',LF='#51cf66',TG='#ff8fab'
const hex=h=>[1,3,5].map(k=>parseInt(h.slice(k,k+2),16))
const mix=(a,b,u,l=0)=>'rgb('+hex(a).map((v,k)=>Math.round((v+(hex(b)[k]-v)*u)*(1-l)+255*l)).join(',')+')'
const ease=x=>x<0?0:x>1?1:x*x*(3-2*x)
export default(c,t,i)=>{
  const q=t*RING.length,k=Math.floor(q),u=ease(q-k),A=RING[k%7],B=RING[(k+1)%7],col=mix(A,B,u),lit=mix(A,B,u,.45)
  const orb=s=>[222+12*cos(4*T*s),70+8*sin(8*T*s)]
  const D=(wd,cl,f)=>{for(const[l,s]of[[wd,'#111'],[wd-10,cl]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  const M=[210,158],hit=orb(.52)
  let fly=null,tip=null,fs=1
  if(t<.42)fly=orb(t)
  else if(t<.52){const p=ease((t-.42)/.1);fly=orb(t);tip=[M[0]+(hit[0]-M[0])*p,M[1]+(hit[1]-M[1])*p]}
  else if(t<.64){const p=1-ease((t-.52)/.12);tip=[M[0]+(hit[0]-M[0])*p,M[1]+(hit[1]-M[1])*p];fly=tip}
  else if(t>=.8){const p=ease((t-.8)/.2),e=orb(1);fly=[236+(e[0]-236)*p,30+(e[1]-30)*p+4*sin(p*PI*2)];fs=.35+.65*p}
  const chew=t>.64&&t<.8?Math.abs(sin((t-.64)/.16*PI*2)):0
  D(20,BR,()=>{c.moveTo(12,206);c.quadraticCurveTo(128,196,246,200)})
  c.fillStyle=LF;c.beginPath();c.ellipse(40,218,14,7,.5,0,T);c.fill();c.stroke()
  D(20,col,()=>{c.moveTo(70,160);c.bezierCurveTo(40,170,30,200,52,206);c.bezierCurveTo(70,210,72,186,56,184)})
  for(const[x0,y0,x1]of[[92,170,84],[150,172,158]])D(16,col,()=>{c.moveTo(x0,y0);c.lineTo(x1,190);c.lineTo(x1+(x1>120?8:-8),202)})
  c.fillStyle=col
  const sil=()=>{c.beginPath();c.ellipse(118,150,58,32,-.05,0,T);c.moveTo(150,128);c.quadraticCurveTo(170,100,190,122);c.lineTo(214,150);c.quadraticCurveTo(214,170,190,172);c.lineTo(150,174);c.closePath()}
  sil();c.lineWidth=14;c.stroke();sil();c.fill();c.lineWidth=7
  c.save();sil();c.clip();c.fillStyle=lit
  for(const[x,y]of[[84,150],[112,146],[140,150]])c.beginPath(),c.ellipse(x,y,7,22,.25,0,T),c.fill()
  c.restore()
  c.lineWidth=5;c.beginPath();for(let k=0;k<6;k++)c.moveTo(70+k*16,121-(k%2?0:2)),c.lineTo(78+k*16,114);c.stroke()
  if(tip){D(11,TG,()=>{c.moveTo(M[0]-6,M[1]);c.lineTo(tip[0],tip[1])});c.fillStyle=TG;c.beginPath();c.arc(tip[0],tip[1],8,0,T);c.fill();c.lineWidth=5;c.stroke();c.lineWidth=7}
  c.lineWidth=5;c.beginPath();c.moveTo(212,156);c.quadraticCurveTo(200,164,186,160);c.stroke()
  if(chew){c.fillStyle=col;c.beginPath();c.ellipse(194,166,8+3*chew,5+2*chew,0,0,T);c.fill();c.stroke()}
  c.lineWidth=7
  const e=fly||orb(.9),ex=180,ey=138,a=atan2(e[1]-ey,e[0]-ex)
  c.fillStyle=col;c.beginPath();c.arc(ex,ey,17,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(ex+cos(a)*5,ey+sin(a)*5,9,0,T);c.fill();c.lineWidth=4;c.stroke()
  c.fillStyle='#111';c.beginPath();c.arc(ex+cos(a)*8,ey+sin(a)*8,4.5,0,T);c.fill();c.lineWidth=7
  if(fly){
    const[fx,fy]=fly,fl=i%2
    c.save();c.translate(fx,fy);c.scale(fs,fs);c.translate(-fx,-fy)
    c.fillStyle='#fff';c.lineWidth=4
    for(const d of[-1,1])c.beginPath(),c.ellipse(fx+d*8,fy-9-fl*3,9,5+fl*2,d*(.6+fl*.3),0,T),c.fill(),c.stroke()
    c.lineWidth=10;c.strokeStyle='#fff';c.beginPath();c.ellipse(fx,fy,9,7,0,0,T);c.stroke();c.fillStyle='#111';c.fill()
    c.restore();c.strokeStyle='#111';c.lineWidth=7
  }
}
