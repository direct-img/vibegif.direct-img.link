// star badge levels up, a green arrow shoots up from behind it, the badge hops and its happy star flips while sparkles burst
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=18,delay=90
const BG='#9775fa',BI='#b197fc',ST='#ffd43b',AR='#51cf66',RB='#ff6b6b',BL='#ffa8a8'
const back=u=>{const s=1.8;return 1+(s+1)*(u-1)**3+s*(u-1)**2},io=u=>u*u*(3-2*u),cl=u=>min(1,max(0,u))
const sp=(c,x,y,s)=>{c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  const o=t<.05?0:t<.35?back((t-.05)/.3):t<.75?1+.03*sin(2*T*(t-.35)/.4):t<.95?1-io((t-.75)/.2):0
  const hop=10*sin(PI*cl((t-.08)/.27)),sq=t>.03&&t<.12?1-.08*sin(PI*(t-.03)/.09):1,fl=cos(T*io(cl((t-.32)/.3))),b=(t-.32)/.35
  if(b>0&&b<1)for(let k=0;k<6;k++){const a=k*T/6-PI/2+.5,r=78+34*b;sp(c,128+cos(a)*r,146+sin(a)*r*.85,13*sin(PI*b))}
  for(const[x,y,ph]of[[34,40,0],[222,64,.5]]){const s=10*max(0,sin(PI*((t*2+ph)%1)));if(s>1.5)sp(c,x,y,s)}
  c.lineWidth=7;c.strokeStyle='#111'
  const ay=146-116*o
  c.save();c.beginPath();c.rect(0,0,256,146-hop);c.clip();c.translate(128,ay);c.fillStyle=AR;c.beginPath()
  for(const[x,y]of[[0,0],[40,40],[17,40],[17,110],[-17,110],[-17,40],[-40,40]])c.lineTo(x,y)
  c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-8,48);c.lineTo(-8,64);c.moveTo(-6,14);c.lineTo(-20,28);c.stroke();c.restore()
  c.strokeStyle='#111';c.lineWidth=7
  c.translate(128,146-hop);c.scale(.92*(2-sq),.92*sq)
  c.fillStyle=RB;for(const d of[-1,1])c.beginPath(),c.moveTo(d*10,40),c.lineTo(d*42,30),c.lineTo(d*54,98),c.lineTo(d*40,88),c.lineTo(d*26,102),c.closePath(),c.fill(),c.stroke()
  c.fillStyle=BG;c.beginPath();for(let k=0;k<128;k++){const a=k*T/128,r=62+4.5*cos(16*a);c.lineTo(cos(a)*r,sin(a)*r)}c.closePath();c.fill();c.stroke()
  c.fillStyle=BI;c.lineWidth=5;c.beginPath();c.arc(0,0,49,0,T);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(0,0,42,PI*1.12,PI*1.38);c.stroke();c.strokeStyle='#111'
  c.save();c.scale(fl,1);c.fillStyle=ST;c.lineWidth=5;c.beginPath();for(let k=0;k<10;k++){const r=k%2?19:43,a=k*PI/5-PI/2;c.lineTo(cos(a)*r,3+sin(a)*r)}c.closePath();c.fill();c.stroke()
  if(fl>.3){
    c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*9,4,3.8,0,T),c.fill()
    c.lineWidth=3.5;c.beginPath();c.arc(0,9,5,.15*PI,.85*PI);c.stroke()
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*16,11,4,2.5,0,0,T),c.fill()
  }
  c.restore()
}
