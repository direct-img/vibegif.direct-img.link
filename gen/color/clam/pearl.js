// smiling clam opens up to show off a shining pearl, then shuts again, bubbles rising behind it
const{sin,cos,PI,max,abs}=Math,T=2*PI
export const frames=24,delay=70
const SH='#faa2c1',SHD='#f783ac',IN='#e64980',PL='#f3f0ff',BL='#ff8787',BU='#e7f5ff'
const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
const spk=(c,x,y,s)=>{c.lineWidth=3;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.2,-s*.2],[0,s,s*.2,s*.2],[-s,0,-s*.2,s*.2],[0,-s,-s*.2,-s*.2]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  const o=sm((t-.1)/.2)*(1-sm((t-.72)/.2)),up=48*o,sc=1-.3*o,rim=152
  for(let k=0;k<3;k++){const p=(t+k/3)%1,r=5+2*k,x=[54,204,186][k]+5*sin(p*T*2+k),y=150-p*140;if(p<.92){c.fillStyle=BU;c.lineWidth=4;c.beginPath();c.arc(x,y,r,0,T);c.fill();c.stroke();c.strokeStyle='#fff';c.lineWidth=2.5;c.beginPath();c.arc(x,y,r*.55,PI*1.1,PI*1.5);c.stroke();c.strokeStyle='#111'}}
  c.lineWidth=7
  if(up>1){
    const mouth=()=>{c.beginPath();c.ellipse(128,rim-up*.5,84,up*.5+8,0,0,T)}
    mouth();c.fillStyle=IN;c.fill();c.stroke()
    c.save();mouth();c.clip()
    c.fillStyle=PL;c.lineWidth=5;c.beginPath();c.arc(128,rim-10,22,0,T);c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.ellipse(120,rim-18,7,4.5,-.5,0,T);c.fill()
    c.restore()
  }
  c.lineWidth=7;c.beginPath()
  for(let k=0;k<=56;k++){const q=PI+PI*k/56,b=1+.045*abs(sin(7*(q-PI)));c.lineTo(128+88*b*cos(q),rim-up+76*b*sin(q)*sc)}
  c.quadraticCurveTo(128,rim-up+10,40,rim-up);c.closePath();c.fillStyle=SH;c.fill();c.stroke()
  c.strokeStyle=SHD;c.lineWidth=3.5
  for(const q of[1.2,1.35,1.5,1.65,1.8].map(v=>v*PI))c.beginPath(),c.moveTo(128+18*cos(q),rim-up-8+12*sin(q)*sc),c.lineTo(128+74*cos(q),rim-up+66*sin(q)*sc),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  c.beginPath();c.moveTo(40,rim);c.quadraticCurveTo(128,rim+18,216,rim)
  for(let k=0;k<=56;k++){const q=PI*k/56,b=1+.045*abs(sin(7*q));c.lineTo(128+88*b*cos(q),rim+68*b*sin(q))}
  c.closePath();c.fillStyle=SH;c.fill();c.stroke()
  c.strokeStyle=SHD;c.lineWidth=3.5
  for(const q of[.25,.36,.64,.75].map(v=>v*PI))c.beginPath(),c.moveTo(128+30*cos(q),rim+30*sin(q)),c.lineTo(128+76*cos(q),rim+60*sin(q)),c.stroke()
  c.strokeStyle='#111'
  const hap=o>.6
  c.fillStyle='#111';c.lineWidth=4.5
  for(const d of[-1,1])if(hap)c.beginPath(),c.arc(128+d*22,184,6,PI*1.15,PI*1.85),c.stroke();else c.beginPath(),c.arc(128+d*22,182,5,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(128,190,8,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*40,192,7,4,0,0,T),c.fill()
  if(o>.6)for(const[x,y,q]of[[100,rim-up-6,0],[160,rim-up+2,.5]])spk(c,x,y,(o-.6)/.4*(4+4*max(0,sin((t+q)*4*T))))
}
