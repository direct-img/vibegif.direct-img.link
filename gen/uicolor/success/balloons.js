// bunch of smiling balloons bobbing up on wavy strings tied with a bow, confetti fluttering down around them
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=14,delay=100
const B=[[128,74,'#ffd43b',.2,36],[70,108,'#ff6b6b',0,33],[186,108,'#4dabf7',.55,33]],BL='#ffa8a8'
const CF=['#ff6b6b','#ffd43b','#4dabf7','#69db7c','#b197fc','#f783ac','#ffa94d']
export default(c,t)=>{
  for(let k=0;k<9;k++){
    const p=(t*(1+k%2)+k*.37)%1,x=(k*71+20)%200+28+10*sin(p*T*2+k),y=6+p*236,s=min(1,4*sin(PI*p))
    if(s<.1)continue
    c.save();c.translate(x,y);c.rotate(p*T*(1+k%3));c.scale(s,s);c.fillStyle=CF[k%7];c.lineWidth=3;c.beginPath()
    if(k%3==0)c.rect(-7,-4,14,8);else if(k%3==1)c.arc(0,0,5,0,T);else c.moveTo(0,-7),c.lineTo(6,5),c.lineTo(-6,5),c.closePath()
    c.fill();c.stroke();c.restore()
  }
  const b=-6*sin(t*T),K=[128,222+b*.4],P=B.map(([x,y,,o,r])=>[x+6*sin(t*T+o*T),y+b+4*sin(2*T*t+o*T),r])
  for(const[w,st]of[[7,'#111'],[3,'#fff']]){c.lineWidth=w;c.strokeStyle=st;c.beginPath();for(const[x,y,r]of P){const w2=10*sin(2*T*t+x);c.moveTo(x,y+r*1.2+8);c.quadraticCurveTo((x+K[0])/2+w2,(y+K[1])/2+20,K[0],K[1])}c.stroke()}
  c.strokeStyle='#111'
  for(const[k,[x,y,r]]of P.entries()){
    const col=B[k][2]
    c.save();c.translate(x,y);c.rotate((x-128)/500)
    c.lineWidth=5;c.fillStyle=col;c.beginPath();c.moveTo(0,r*1.12);c.lineTo(-7,r*1.2+9);c.lineTo(7,r*1.2+9);c.closePath();c.fill();c.stroke()
    c.lineWidth=7;c.beginPath();c.ellipse(0,0,r,r*1.18,0,0,T);c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.ellipse(-r*.45,-r*.5,r*.14,r*.26,.5,0,T);c.fill();c.beginPath();c.arc(-r*.2,-r*.82,r*.07,0,T);c.fill()
    c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*r*.3,r*.06,4.5,0,T),c.fill()
    c.lineWidth=4;c.beginPath();c.arc(0,r*.2,r*.2,.15*PI,.85*PI);c.stroke()
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(d*r*.56,r*.3,6,3.5,0,0,T),c.fill()
    c.restore()
  }
  c.save();c.translate(...K);c.fillStyle='#f783ac';c.lineWidth=4
  for(const d of[-1,1])c.beginPath(),c.moveTo(0,0),c.lineTo(d*16,-9),c.lineTo(d*16,9),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.arc(0,0,5,0,T);c.fill();c.stroke();c.restore()
}
