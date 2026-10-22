// gold trophy with a star on it, a glint sweeping across the cup and sparkles popping around
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=20,delay=80
const G='#ffd43b',GD='#fab005',WD='#a9744f',PL='#ffe8cc'
const cup=c=>{c.beginPath();c.moveTo(70,44);c.lineTo(186,44);c.bezierCurveTo(186,110,160,140,128,142);c.bezierCurveTo(96,140,70,110,70,44);c.closePath()}
export default(c,t)=>{
  const y=-3*sin(t*T)
  for(const[x,yy,o]of[[38,60,0],[220,74,.33],[214,172,.66],[44,168,.5]]){const s=11*max(0,sin(PI*((t*2+o)%1)));if(s>1.5){c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x,yy-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,yy+qy,x+px,yy+py);c.fill();c.stroke()}}
  c.lineWidth=7;c.translate(0,y)
  for(const d of[-1,1])for(const[w,st]of[[24,'#111'],[12,G]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.arc(128+d*58,74,24,d<0?PI*.45:-PI*.55,d<0?PI*1.55:PI*.55),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  c.fillStyle=GD;c.beginPath();c.moveTo(114,140);c.lineTo(142,140);c.lineTo(148,184);c.lineTo(108,184);c.closePath();c.fill();c.stroke()
  cup(c);c.fillStyle=G;c.fill()
  c.save();cup(c);c.clip();c.fillStyle=GD;c.fillRect(150,40,40,110)
  const g=((t*1.5)%1)*200-40;c.strokeStyle='#fff';c.lineWidth=12;c.beginPath();c.moveTo(40+g,160);c.lineTo(100+g,30);c.stroke();c.lineWidth=5;c.beginPath();c.moveTo(62+g,160);c.lineTo(122+g,30);c.stroke();c.restore()
  cup(c);c.stroke()
  c.fillStyle='#fff';c.beginPath();for(let k=0;k<10;k++){const r=k%2?9:20,a=k*PI/5-PI/2;c.lineTo(128+cos(a)*r,88+sin(a)*r)}c.closePath();c.fill();c.lineWidth=5;c.stroke();c.lineWidth=7
  c.fillStyle=WD;c.beginPath();c.roundRect(80,182,96,46,8);c.fill();c.stroke()
  c.fillStyle=PL;c.beginPath();c.roundRect(100,194,56,20,4);c.fill();c.lineWidth=4;c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(110,204);c.lineTo(146,204);c.stroke()
}
