// golden crown bobbing on a velvet cap, its jewels glinting one after another with little sparkles popping off
const{sin,cos,PI,max,round}=Math,T=2*PI
export const frames=20,delay=80
const G='#ffd43b',GD='#fab005',VEL='#9775fa',PE='#fff'
const J=[[86,92,7,'#f783ac'],[76,172,10,'#4dabf7'],[128,172,14,'#ff6b6b'],[180,172,10,'#69db7c'],[170,92,7,'#4dabf7']]
const crown=c=>{c.beginPath();for(const[x,y]of[[52,156],[42,78],[66,118],[86,60],[107,110],[128,40],[149,110],[170,60],[190,118],[214,78],[204,156]])c.lineTo(x,y);c.closePath()}
const spark=(c,x,y,s)=>{c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  const b=round(4*sin(t*T)),g=t*5|0,gp=t*5%1
  c.translate(0,b)
  c.fillStyle=VEL;c.beginPath();c.ellipse(128,124,74,58,0,PI,0);c.lineTo(202,150);c.lineTo(54,150);c.closePath();c.fill();c.stroke()
  crown(c);c.fillStyle=G;c.fill()
  c.save();crown(c);c.clip();c.fillStyle=GD;for(const[x,y]of[[42,78],[128,40],[214,78]])c.beginPath(),c.moveTo(x,y),c.lineTo(x+22,y+80),c.lineTo(x+6,y+90),c.closePath(),c.fill();c.restore()
  crown(c);c.stroke()
  c.lineWidth=5;c.fillStyle=PE;for(const[x,y]of[[42,78],[86,60],[128,40],[170,60],[214,78]])c.beginPath(),c.arc(x,y-4,9,0,T),c.fill(),c.stroke()
  c.lineWidth=7;c.fillStyle=GD;c.beginPath();c.roundRect(38,146,180,48,12);c.fill();c.stroke()
  c.fillStyle=G;c.beginPath();c.roundRect(44,152,168,10,5);c.fill()
  for(const[k,[x,y,s,col]]of J.entries()){
    c.lineWidth=5;c.fillStyle=col;c.beginPath()
    if(k==2)c.ellipse(x,y,s,s*.8,0,0,T);else c.moveTo(x,y-s),c.lineTo(x+s*.8,y),c.lineTo(x,y+s),c.lineTo(x-s*.8,y),c.closePath()
    c.fill();c.stroke()
    c.fillStyle='#fff';c.beginPath();c.ellipse(x-s*.3,y-s*.3,s*.22,s*.3,-.5,0,T);c.fill()
    if(k==g){const s2=4+12*sin(PI*gp);c.fillStyle='#fff';c.lineWidth=4;spark(c,x+s*.6,y-s*.7,s2)}
  }
}
